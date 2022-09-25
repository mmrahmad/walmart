import NavComponent from '#components/nav';
import React from 'react';
import data from '#data/navData.json';

const TopHeader: React.FC = () => {
  const { topLeft, topRight } = data;

  return (
    <div className="flex justify-between items-center">
      <NavComponent navData={topLeft} />
      <NavComponent navData={topRight} />
    </div>
  );
};

export default TopHeader;
