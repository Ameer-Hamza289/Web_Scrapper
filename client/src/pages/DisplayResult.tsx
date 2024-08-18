import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DisplayResult: React.FC = () => {
  const [data, setData] = useState<string>('');
  const location = useLocation();

  // Extract the URL from the query parameter
  const query = new URLSearchParams(location.search);
  const urlToScrape = query.get('url');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a web scraping API call
        const response = await fetch(`/api/scrape?url=${encodeURIComponent(urlToScrape || '')}`);
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        setData('Failed to fetch data. Please try again later.');
      }
    };

    if (urlToScrape) {
      fetchData();
    }
  }, [urlToScrape]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Scraping Results</h1>
        <div className="whitespace-pre-wrap">
          {data ? data : 'No data to display'}
        </div>
      </div>
    </div>
  );
};

export default DisplayResult;
