import React from 'react';

const DocumentPage = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">How to Use Web Scraper</h1>
      <p className="mt-10 text-lg text-center">
        This web scraper allows you to easily extract data from websites. 
        Simply enter the URL of the website you want to scrape and specify the data you need.
      </p>
      <div className="mt-10">
        <video controls className="mx-auto">
          <source src="/path-to-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default DocumentPage;
