import React from 'react';
// import FeatureCard from '../components/FeatureCard';
import FeatureCard from '../components/FeaturedCard';
import TeamCard from '../components/TeamCard';

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
      <section className="py-20 bg-gray-100 w-full">
        <h2 className="text-3xl font-bold text-center">Meet the Team</h2>
        <div className="flex justify-center mt-10">
          <TeamCard name="Muhammad Subhan" />
          <TeamCard name="Ameer Hamza" />
          <TeamCard name="Aakash" />
          <TeamCard name="Shumaila" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
