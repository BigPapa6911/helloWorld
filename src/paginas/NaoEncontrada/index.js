import style from './NaoEncontrada.module.css'

import fotoSenhorIncrivel from 'assets/erro_404.png'
import Botao from 'componentes/Botao'
import { useNavigate } from 'react-router-dom'

const NaoEncontrada = () => {

    const retornar = useNavigate()

    return (
        <>
            <div className={style.conteudoContainer}>
                <span className={style.texto404}>
                    404
                </span>
                <h1 className={style.titulo}>
                    Ops! Página não encontrada:(
                </h1>
                <p className={style.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div 
                    className={style.botaoContainer}
                    onClick={()=>retornar('/')}
                >
                    <Botao tamanho={'lg'}>Voltar</Botao>
                </div>
                <img
                    className={style.imagemSenhorIncrivel}
                    src={fotoSenhorIncrivel}
                    alt="Imagem do senhor incrivel" />
            </div>
            <div className={style.espacoEmBranco}></div>
        </>
    )

}

export default NaoEncontrada
