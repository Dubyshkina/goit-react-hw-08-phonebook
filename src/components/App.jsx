// import s from 'components/App.module.css';
// import  Navigation  from './Navigation/Navigation';


import { Route, Routes } from 'react-router-dom';
// import { Suspense } from 'react';
// lazy
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/operations';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

import  LoginPage  from 'pages/LoginPage';
import  RegisterPage  from 'pages/RegisterPage';
import  HomePage  from 'pages/HomePage';
import  ContactsPage  from 'pages/ContactsPage';
import  Layout  from './Layout/Layout';
import {selectedIsAuth} from '../redux/authSelectors';



// const ContactsPage = lazy(() => import('../pages/ContactsPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));
// const HomePage = lazy(() => import('../pages/HomePage'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage'));


export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectedIsAuth);


  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch])

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
              <PublicRoute>
                <LoginPage/>
              </PublicRoute>
            }
        />
        <Route
          path="/register"
          element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
           <Route
            path="/contacts"
             element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        <Route path="*" element={!isAuth ? <LoginPage/> : <ContactsPage/>} />
      </Route>
    </Routes>
      
  </>)
};

//   return (
//     <div className={s.container}> 
//     <Navigation></Navigation>
// <Suspense fallback={<h3>Loading...</h3>}>
//   <Routes>
//     <Route path='/goit-react-hw-08-phonebook' element={<HomePage/>}/>
//     <Route path='/login' element={<LoginPage/>}/>
//     <Route path='/register' element={<RegisterPage/>}/>
//     <Route path='/contacts' element={<ContactsPage/>}/>
//     <Route path='*' element={<HomePage/>}/>
//   </Routes>
// </Suspense>
    
//      </div>
//   );
// };
