// import React from 'react';

// const DocumentPage = () => {
//   return (
//     <div className="container mx-auto py-20">
//       <h1 className="text-4xl font-bold text-center">How to Use Web Scraper</h1>
//       <p className="mt-10 text-lg text-center">
//       Web scratching is a procedure used to separate information from sites via computerizing the method involved with exploring pages and recovering their substance. It includes sending HTTP solicitations to web servers, parsing the HTML or XML reactions, and extricating helpful data utilizing devices and libraries like BeautifulSoup, Scrapy, or Selenium. Web scratching is generally utilized for information mining, serious investigation, and conglomerating content from different sources. Notwithstanding, it's vital to regard site terms of administration and legitimate contemplations, as unapproved scratching can prompt moral and lawful issues.
//         This web scraper allows you to easily extract data from websites. 
//         Simply enter the URL of the website you want to scrape and specify the data you need.
//       </p>
//       <div className="mt-10">
//         <video controls className="mx-auto">
//           <source src="/path-to-video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default DocumentPage;



import React from 'react';

const DocumentPage = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-8 lg:px-16">
      {/* Section 1: Introduction to Web Scraping */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">How to Use the Web Scraper</h1>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">What is Web Scraping?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Web scraping is a technique used to extract data from websites by automating the process of navigating web pages and retrieving their content. It involves sending HTTP requests to web servers, parsing the HTML or XML responses, and extracting useful information using tools and libraries like BeautifulSoup, Scrapy, or Selenium. This method is commonly used for data mining, competitive analysis, and aggregating content from various sources. However, it is crucial to respect website terms of service and legal considerations, as unauthorized scraping can lead to ethical and legal issues.
          </p>
        </div>
      </section>

      {/* Section 2: Using the Web Scraper */}
      <section className="bg-blue-50 p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-blue-800">How to Use the Web Scraper</h2>
        <ol className="mt-4 text-lg text-gray-700 list-decimal list-inside">
          <li className="mb-4">
            <h3 className="font-semibold text-blue-600">1. Login or Sign Up</h3>
            <p>
              To begin, you need to log in to your account. Click the "Login" button at the top-right corner of the page and enter your credentials. If you do not have an account, click "Signup" to create one. Provide your email address and a password, then click "Signup" to register.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="font-semibold text-blue-600">2. Navigate to the Main Page</h3>
            <p>
              After logging in, you will be redirected to the main page. Here, you will find an input field where you can paste the URL of the website you want to scrape. Enter the URL and click the "Scrape Data" button to start the scraping process.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="font-semibold text-blue-600">3. View the Response</h3>
            <p>
              Once the scraping is complete, the extracted data will be displayed on the page. You can view the results in a structured format such as tables or lists. If you need to export the data, you can choose from available options to download it in formats like CSV or JSON.
            </p>
          </li>
        </ol>
      </section>

      {/* Section 3: Additional Information */}
      <section className="bg-gray-200 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Additional Information</h2>
        <div className="mt-6">
          <video controls className="mx-auto max-w-full rounded-lg shadow-md">
            <source src="/path-to-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default DocumentPage;
