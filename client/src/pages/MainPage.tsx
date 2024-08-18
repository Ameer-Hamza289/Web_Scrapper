// import React, { useState } from 'react';

// const MainPage = () => {
//   const [url, setUrl] = useState('');

//   const handleScrape = () => {
//     // Implement the scraping logic here
//     console.log(`Scraping ${url}`);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-10">Web Scraper</h1>
//       <input
//         type="text"
//         className="border border-gray-300 p-2 rounded-lg w-1/2"
//         placeholder="Enter URL"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//       />
//       <button
//         className="mt-5 bg-blue-500 text-white py-2 px-6 rounded-lg"
//         onClick={handleScrape}
//       >
//         Scrape
//       </button>
//     </div>
//   );
// };

// export default MainPage;









import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Redirect to the scraping results page with the URL as a query parameter
    navigate(`/results?url=${encodeURIComponent(url)}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Web Scraper</h1>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to scrape"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Scrape
        </button>
      </form>
    </div>
  );
};

export default MainPage;
