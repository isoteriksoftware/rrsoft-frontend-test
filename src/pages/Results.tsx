import React from 'react';

const Results: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl w-full p-6">
        <h1 className="text-3xl font-bold mb-6">Results</h1>
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Search by user id or title"
            className="flex-1 border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Article Title</h2>
            <p className="text-gray-600 mb-4">
              Brief description or snippet of the article content.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              View Details
            </button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="/create-article" className="text-blue-500 hover:underline">
            Go to Article Creation Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Results;
