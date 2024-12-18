import {Link, Outlet} from 'react-router-dom'

const MainLayout = () => {


  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to={'/login'}>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to={'/reg'}>
                        Registration
                    </Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}
export default MainLayout