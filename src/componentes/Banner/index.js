import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha-foto.jpeg'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Hello, world!
                </h1>

                <p className={styles.paragrafo}>
                    Olá, sou o Gustavo. Sou um estudante de Front-End e atualmente estou buscando ser um master em React. Além disso busco num futuro próximo me tornar um grande Fullstack ;)
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt=""
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
    )
}

export default Banner