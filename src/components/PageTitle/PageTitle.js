import React from 'react';
import styles from './PageTitle.module.sass';

const PageTitle = ({ title }) => {
  return <h2 className={styles.pageTitle}>{title}</h2>;
};

export default PageTitle;
