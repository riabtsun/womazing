import { useContext } from 'react';
import { CustomContext } from '../../Context';
import styles from './Profile.module.sass';

const Profile = () => {
  const { user, logOutUser } = useContext(CustomContext);
  console.log(user);
  return (
    <div className={'container'}>
      <ul className={styles.userInfoList}>
        <li className={styles.userInfoItem}>
          <span className={styles.userInfoTitle}>Email</span>
          <span className={styles.userInfoValue}>{user.email}</span>
        </li>
        <li className={styles.userInfoItem}>
          <span className={styles.userInfoTitle}>User name</span>
          <span className={styles.userInfoValue}>{user.login}</span>
        </li>
        <li className={styles.userInfoItem}>
          <span className={styles.userInfoTitle}>User phone</span>
          <span className={styles.userInfoValue}>{user.phone}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
