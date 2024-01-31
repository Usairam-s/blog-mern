import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true, // corrected
    },
    content: {
      type: String,
      required: true, // corrected
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr7wYZW0Zs2NQ-uTZWCp1e8CjO3sqyD_WUWW8BB4Nuw&s",
    },
    category: {
      type: String,
      default: "Uncategorized",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema);
export default Post;
