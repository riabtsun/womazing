import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../../Pages/Contacts/Contacts.module.sass';

const BreadCrumb = ({ source, selfName, links }) => {
  return (
    <div>
      {/*<Link to={'/'} className={styles}>*/}
      {/*  Главная -*/}
      {/*</Link>*/}
      {/*<NavLink to={source} className={styles}>*/}
      {/*  {selfName}*/}
      {/*</NavLink>*/}
      {links.map(crumb => {
        return (
          <NavLink to={source} className={styles}>
            {crumb}
          </NavLink>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
