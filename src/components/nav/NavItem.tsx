import React from 'react';

interface Props {
  title: string;
  slug: string;
  theme?: 'white' | 'black';
}

const NavItem: React.FC<Props> = ({
  title,
  slug,
  theme = 'white',
}) => {
  return (
    <li
      className={`py-2 px-3 ${
        theme === 'white' ? 'text-white border-r border-r-white' : ''
      }`}
    >
      <a href={slug}>{title}</a>
    </li>
  );
};

export default NavItem;
