// import { useSelector } from "react-redux";
// import { selectUserName } from "redux/authSelectors";


export const HomeImage = () => {
//    const  name =useSelector(selectUserName)
//    const isAuth = useSelector(selectedIsAuth);
   return <div style={{ display: 'flex', justifyContent: 'center' }}><img src={require("../../images/hello-1502369_1280.png")} alt="Welcome" style={{ width: '600px'}} /></div> 
}
//  isAuth ? <div><p>Welcome back, {name}</p></div> : 