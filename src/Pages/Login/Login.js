import styles from './Logine.module.sass';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { CustomContext } from '../../Context';
const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { loginUser } = useContext(CustomContext);

  return (
    <section className={styles.login}>
      <div className="container">
        <form onSubmit={handleSubmit(loginUser)}>
          <h2>Вхід до аккаунту</h2>
          <br />
          <br />
          <input
            {...register('email')}
            type="email"
            placeholder={'enter email'}
          />
          <br />
          <br />
          <input
            {...register('password')}
            type="password"
            placeholder={'enter password'}
          />
          <br />
          <br />
          <button type={'submit'}>Увійти</button>
          <br />
          <br />
          <p>
            Аккаунт відсутній, <Link to={'/registration'}>зареєструватися</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
