import style from "./footer.module.css"
import {ReactComponent as Marca} from 'assets/marca_registrada.svg'

const Footer = () => {
    return(
        <footer className={style.footer}>
            <Marca />

            Developed by BigPapa
        </footer>
    )
}

export default Footer