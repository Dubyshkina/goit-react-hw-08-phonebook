
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/authSelectors';



export const PublicRoute = ({ children }) => {
  const authToken = useSelector(selectToken);
  if (authToken) {
    return <Navigate to="/contacts" />;
  }
  return children;
};