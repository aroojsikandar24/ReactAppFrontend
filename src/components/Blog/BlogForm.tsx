import React, { useState } from "react";
import {createPost} from "../../services/GlobalApi";

function BlogForm() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setCoverImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!coverImage) {
      alert("Please upload a cover image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", tags);
    formData.append("coverImage", coverImage);

    try {
      const response = await createPost(formData);
      console.log("Post created successfully:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="mt-20">
    <label className="text-xl font-bold text-gray-800 text-center block mb-8">Create New Blog</label>
    <form onSubmit={handleSubmit} className="space-y-4">
        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full border p-2"
        />
        <input
            type="text"
            placeholder="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="block w-full border p-2"
        />
        <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full border p-2"
        ></textarea>
        <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Create Post
        </button>
        </form>
    </div>
  );
}

export default BlogForm;
