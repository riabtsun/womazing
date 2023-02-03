import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../../Pages/Contacts/Contacts.module.sass';

const BreadCrumb = ({ source, selfName }) => {
  return (
    <div>
      <Link to={'/'} className={styles}>
        Главная -
      </Link>
      <NavLink to={'/about'} className={styles}>
        {selfName}
      </NavLink>
    </div>
  );
};

export default BreadCrumb;
