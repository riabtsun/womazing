import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CustomContext } from '../../Context';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import login from '../Login/Login';
import styles from './Registration.module.sass';

const Registration = () => {
  const { registerUser } = useContext(CustomContext);

  const {
    register,
    handleSubmit,
    setError: { errors },
    reset,
  } = useForm();

  return (
    <section className={styles.registration}>
      <form onSubmit={handleSubmit(registerUser)}>
        <h2>Реєстрація</h2>
        <br />
        <input
          {...register('email', {
            required: 'Це поле обов`язкове для заповнення',
          })}
          type="email"
          placeholder={'enter email'}
        />
        {/*<span>{errors?.email}</span>*/}
        <br /> <br />
        <input {...register('login')} type="text" placeholder={'enter login'} />
        <br /> <br />
        <input {...register('phone')} type="tel" placeholder={'enter phone'} />
        <br /> <br />
        <input
          {...register('password')}
          name={'password'}
          type="password"
          placeholder={'enter password'}
        />
        <br /> <br />
        <input type="password" placeholder={'enter password again'} />
        <br /> <br />
        <button type={'submit'}>Зареєструватися</button>
        <br /> <br />
        <p>
          Вже маю аккаунт, <Link to={'/login'}>увійти</Link>
        </p>
      </form>
    </section>
  );
};

export default Registration;
