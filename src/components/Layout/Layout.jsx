
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
            <Outlet/>
        </div>
    </>)
}
export default Layout;