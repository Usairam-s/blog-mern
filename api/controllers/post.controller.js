import { errorHandler } from "../utils/errorHandler.js";
import Post from "../models/post.model.js";
export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to create a post"));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(422, "Missing data in the request body"));
  }

  //create a slug for each post
  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "-");

  const newPost = new Post({
    ...req.body,
    slug,
    userId: req.user.id,
  });

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    next(error);
  }
};

export const getposts = async (req, res, next) => {
  try {
    //we wanna have start index
    const startIndex = parseInt(req.query.startIndex || 0);
    //wnna have limit not want to show all posts at once
    const limit = parseInt(req.query.limit || 9);
    //sorting
    const sortDirection = req.query.order === "asc" ? 1 : -1;

    //mancho man ready
    const posts = await Post.find({
      //by user id
      ...(req.query.userId && { userId: req.query.userId }),
      //by category
      ...(req.query.category && { category: req.query.category }),
      //for slug
      ...(req.query.slug && { category: req.query.slug }),
      //post by id
      ...(req.query.postId && { _id: user.query.postId }),

      //  by search Term

      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: "i" } },
          { content: { $regex: req.query.searchTerm, $options: "i" } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    //total post to show on dashbaord
    const totalPosts = await Post.countDocuments();

    //how many created in last month
    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthPost = await Post.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    //sending back resposne
    return res.status(200).json({
      posts,
      totalPosts,
      lastMonthPost,
    });
  } catch (error) {
    next(error);
  }
};

export const deletepost = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    next(errorHandler(403, "You are not allowed to delete this post"));
  }
  try {
    await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json("The post has been deldted");
  } catch (error) {
    next(error);
  }
};
