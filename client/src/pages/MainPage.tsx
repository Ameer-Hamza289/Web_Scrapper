import React, { useState } from 'react';

const MainPage = () => {
  const [url, setUrl] = useState('');

  const handleScrape = () => {
    // Implement the scraping logic here
    console.log(`Scraping ${url}`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-10">Web Scraper</h1>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-lg w-1/2"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className="mt-5 bg-blue-500 text-white py-2 px-6 rounded-lg"
        onClick={handleScrape}
      >
        Scrape
      </button>
    </div>
  );
};

export default MainPage;
