import {Outlet} from 'react-router-dom'
import {NavBar} from '../components/NavBar'

export const Layout = ()=>{
    return(
        <>
        <NavBar />
        <main className="content mt-20" >
            <Outlet />
        </main>
        </>
    )
}