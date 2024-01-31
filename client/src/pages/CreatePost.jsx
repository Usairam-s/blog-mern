import { TextInput, Select, FileInput, Button } from "flowbite-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function CreatePost() {
  const [value, setValue] = useState("");
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center py-7 text-3xl font-semibold">Create a Post</h1>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col justify-between sm:flex-row gap-4">
          <TextInput
            className="flex-1"
            id="title"
            required
            placeholder="Title"
          ></TextInput>
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="tech">Tech</option>
            <option value="development">Development</option>
            <option value="artificialintelligence">A.I</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center border-4 justify-between border-teal-500 p-3 border-dotted">
          <FileInput type="file" accept="image/*"></FileInput>
          <Button type="submit" gradientDuoTone="purpleToBlue" outline>
            Upload Image
          </Button>
        </div>
        <ReactQuill
          className="h-72 mb-12"
          theme="snow"
          value={value}
          onChange={setValue}
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
}
