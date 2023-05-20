import { useDispatch, useSelector} from 'react-redux';
import { selectUserName } from '../../redux/authSelectors';
import s from './UserMenu.module.css';

import { logOut } from 'redux/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  
  return (
    <>
      <div className={s.container}>
        <p className={s.name}>Hello, {userName}</p>
        <button className={s.btn} type="button" onClick={() => dispatch(logOut())}>
          Log Out
        </button>
      </div>
    </>
  );
};
