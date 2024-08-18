import React from 'react';
import FeatureCard from '../components/FeaturedCard';
import TeamCard from '../components/TeamCard';

import akash from '../assets/image/akash.jpeg';
import hamza from '../assets/image/hamza.jpeg';
import shumail from '../assets/image/shumail.jpeg';
import subhan from '../assets/image/subhan.jpg';


const LandingPage = () => {
  return (
    <div>
      <section className="bg-blue-500 text-white text-center py-20 w-full">
        <h1 className="text-4xl font-bold">Welcome to Web Scraper</h1>
        <p className="mt-4 text-xl">Easily scrape and extract data from any website using our powerful tool.</p>
      </section>
      <section className="py-20 w-full">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="flex justify-center mt-10">
          <FeatureCard title="Easy to Use" description="Scrape websites with just a few clicks." />
          <FeatureCard title="Fast and Reliable" description="Get data quickly without any hassle." />
          <FeatureCard title="Customizable" description="Tailor the scraping process to your needs." />
        </div>
      </section>
      <section className="py-20 bg-gray-100 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Meet the Team</h2>
        <div className="mt-10 flex justify-center overflow-x-auto space-x-8 pb-4">
          <TeamCard
            name="Muhammad Subhan"
            role="Muhammad Subhan is a skilled Front End Developer with expertise in HTML, CSS, JavaScript, and React. He is also proficient in modern styling with Tailwind CSS and has experience with TypeScript."
            imageUrl={subhan}
            linkedinUrl="https://www.linkedin.com/in/muhammad-subhan-321821231/"
          />
          <TeamCard
            name="Ameer Hamza"
            role="Ameer Hamza is a seasoned Software Engineer and Full Stack Developer with a diverse tech stack. His expertise includes JavaScript, React, TypeScript, Node.js, React Native, and Python, making him proficient in developing complex and dynamic applications."
            imageUrl={hamza}
            linkedinUrl="https://www.linkedin.com/in/ameer-hamza-748618244/"
          />
          <TeamCard
            name="Aakash"
            role="Aakash is an AI/ML Expert specializing in artificial intelligence and machine learning technologies. He develops sophisticated algorithms and models to analyze and interpret complex data sets. His work involves creating predictive models and automating decision-making processes to drive innovation."
            imageUrl={akash}
            linkedinUrl="https://www.linkedin.com/in/aakash-bagale/"
          />
          <TeamCard
            name="Shumaila"
            role="Shumaila is a versatile Full Stack Developer who excels in both front-end and back-end technologies. She is adept at building scalable and efficient web applications from start to finish."
            imageUrl={shumail}
            linkedinUrl="https://www.linkedin.com/in/shumaila-khan-236451239/"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
