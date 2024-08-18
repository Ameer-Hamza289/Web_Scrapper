// import React from 'react';

// interface FeatureCardProps {
//   title: string;
//   description: string;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-5 mx-5">
//       <h3 className="text-xl font-bold">{title}</h3>
//       <p className="mt-3">{description}</p>
//     </div>
//   );
// };

// export default FeatureCard;



import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string; // Optional icon prop
  link?: string; // Optional link prop
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, link }) => {
  return (
    <a
      href={link}
      className="bg-white shadow-lg rounded-lg p-5 mx-5 w-full max-w-xs hover:shadow-xl transition-shadow duration-300 ease-in-out"
      target={link ? "_blank" : undefined} // Open in new tab if link is provided
      rel={link ? "noopener noreferrer" : undefined} // Security for external links
    >
      <div className="flex items-center space-x-4">
        {icon && <span className="text-3xl">{icon}</span>}
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default FeatureCard;
