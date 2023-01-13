import Header from './Header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Shop from '../Pages/Shop/Shop';
import AboutBrand from '../Pages/AboutBrand/AboutBrand';
import Contacts from '../Pages/Contacts/Contacts';
import Cart from '../Pages/Cart/Cart';
import NotFound from '../Pages/NotFound/NotFound';
import Footer from './Footer/Footer';
import Registration from '../Pages/Registeration/Registration';
import Login from '../Pages/Login/Login';

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/login' &&
      location.pathname !== '/registration' ? (
        <Header />
      ) : (
        ''
      )}
      <Routes>
        <Route element={<Home />} path={'/'} />
        <Route element={<Shop />} path={'/shop'} />
        <Route element={<AboutBrand />} path={'/about'} />
        <Route element={<Contacts />} path={'/contacts'} />
        <Route element={<Cart />} path={'/cart'} />
        <Route element={<Registration />} path={'/registration'} />
        <Route element={<Login />} path={'/login'} />
        <Route element={<NotFound />} path={'*'} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
