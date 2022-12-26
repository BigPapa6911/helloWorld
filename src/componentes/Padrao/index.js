import Banner from "componentes/Banner"
import { Outlet } from "react-router-dom"

const Padrao = () => {

    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    )
}

export default Padrao