import NavDataType from '#types/nav-data-type';
import React, { Fragment } from 'react';
import NavItem from './NavItem';

interface Props {
  navData: NavDataType[];
}

const NavComponent: React.FC<Props> = ({ navData }) => {
  return (
    <ul className="flex items-center">
      {navData &&
        navData.map((navItem) => (
          <NavItem
            key={navItem.id}
            title={navItem.title}
            slug={navItem.slug}
          />
        ))}
    </ul>
  );
};

export default NavComponent;
