
import { AuthForm } from "components/AuthForm/AuthForm"
import Navigation from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
// import css from './Layout.module.css'


const Layout = () => {
const isAuth = useSelector(state => state.auth.isAuth)
    return (<>
      <div>
        <Navigation />
        
            {isAuth ? <UserMenu /> : <AuthForm />}
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}><img src={require("../../images/hello-1502369_1280.png")} alt="Welcome" style={{ width: '600px'}} /></div> */}
            <Outlet/>
        </div>
    </>)
}
export default Layout;