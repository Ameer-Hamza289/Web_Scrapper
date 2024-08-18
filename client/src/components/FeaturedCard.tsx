import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 mx-5">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3">{description}</p>
    </div>
  );
};

export default FeatureCard;
