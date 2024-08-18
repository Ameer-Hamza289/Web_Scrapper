import React from 'react';

interface TeamCardProps {
  name: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 mx-5">
      <h3 className="text-xl font-bold">{name}</h3>
    </div>
  );
};

export default TeamCard;
