import Card from "componentes/Card";
import style from "./inicio.module.css"
import posts from "json/posts.json"

const Inicio = () => {
    return (
        <main>
            <ul className={style.posts}>
                {posts.map((post) =>
                    <li key={post.id}>
                        <Card post={post}/>
                    </li>
                )}
            </ul>
        </main>
    )
}

export default Inicio