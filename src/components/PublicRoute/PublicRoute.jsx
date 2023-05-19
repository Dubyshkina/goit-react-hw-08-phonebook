
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectedIsAuth } from 'redux/authSelectors';



export const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectedIsAuth);
  if (isAuth) {
    return <Navigate to="/contacts" />;
  }
  return children;
};