import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"



const Home = () => {
    return (
        <div>
            <Header title="Power up with coffee"  subtitle="Nikmati hari - hari anda dengan secangkir kopi." img="img/bcg_header.png"/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Home