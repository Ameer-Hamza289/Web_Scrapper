

import React from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl: string; // Add this for LinkedIn profile link
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, imageUrl, linkedinUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-5 max-w-xs flex flex-col">
      <div className="w-full h-48 ">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="p-5 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="mt-2 text-gray-600">{role}</p>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-600 hover:underline"
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
