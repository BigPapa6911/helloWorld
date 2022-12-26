import Botao from "componentes/Botao"
import { Link } from "react-router-dom"
import style from "./card.module.css"

const Card = ({post}) =>{

    return(
        <Link to={`/post/${post.id}`}>
        <div className={style.post}>
            <img 
            className={style.capa}
            src={`/assets/posts/${post.id}/capa.png`}
            alt="Capa do post"
            />
            <h2 className={style.titulo}>{post.titulo}</h2>
            <Botao>Ler</Botao>
        </div>
        </Link>
    )


}

export default Card