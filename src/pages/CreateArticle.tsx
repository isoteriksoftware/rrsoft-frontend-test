import React from 'react';

const CreateArticle: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Article Creation Page</h1>
        <form>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              placeholder="Article Title"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="content"
              placeholder="Article Content"
              className="w-full border rounded-md p-2 h-32 focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="attorneyName"
              placeholder="Attorney's Name"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="contactInfo"
              placeholder="Contact Information"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateArticle;
