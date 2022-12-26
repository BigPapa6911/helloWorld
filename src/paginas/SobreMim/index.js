import fotoCapa from 'assets/sobre_mim_capa.png'
import style from './sobreMim.module.css'
import foto from 'assets/minha-foto.jpeg'
import PostModelo from "componentes/PostModelo"

const SobreMim = () => {
    return (
        <main>
            <PostModelo
                fotoCapa={fotoCapa}
                titulo='Sobre Mim'
            >

                <h3 className={style.subtitulo}>
                    Olá, sou o Gustavo!!
                </h3>
                <img className={style.fotoSobreMim}
                src={foto}
                alt="FOto do Gustavo"
                />
                <p className={style.paragrafo}>
                    Olá, me chamo Gustavo, mas se quiser pode me chamar de Maia. Tenho 19 anos e atualmente faço faculdade de engenharia de sotware na Unievangelica. Atualmente estou no terceiro período, porém meu conhecimento não é só adquirido através da faculdade, mas também de curso online que faço. A principal plataforma da qual eu uso é a "Alura", nela ja fiz as formações de "Iniciante em programação", "HTML e CSS" e "Javascript para Front-End", e no momento estou fazendo a formação "React.js".
                </p>
                <p className={style.paragrafo}>
                    Venho buscando oportunidades de emprego na area de programação desde agosto desse ano, entretanto, por falta de experiencia com o mercado de trabalho, nunca consegui uma entrevista ou oportunidade. Porém sigo firme na minha busca por aprenidizado e projetos na área. Meu maior objetivo é, algum dia, conseguir fazer um jogo em mundo aberto que eu sempre tive em mente. 
                </p>
                <p className={style.paragrafo}>
                    No momento meu foco é totalmente em me tornar um bom Dev. Front-end, fazendo uso das linguagens utilizadas dentro do mercado e aprendendo linguagens em ascensão, para que eu possa conseguir uma proposta quando elas começarem a ser mais utilizadas. As linguagens "Go" e "Kotling" são as que mais me chamam atenção, pelo fato de sua sintaxe ser bastante fácil (na minha visão) e também por ser linguagens que crescem bastante no mundo.
                </p>
            </PostModelo>
        </main>
    )
}

export default SobreMim