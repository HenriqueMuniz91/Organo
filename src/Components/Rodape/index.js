import './Rodape.css'

const Rodape = () => {
    return (<footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='facebook.com' target='_blank'>
                        <img src='/imagens/facebook-rodape.png' alt='' />
                    </a>
                </li>
                <li>
                    <a href='x.com' target='_blank'>
                        <img src='/imagens/x-rodape.png' alt='' />
                    </a>
                </li>
                <li>
                    <a href='instagram.com' target='_blank'>
                        <img src='/imagens/instagram-rodape.png' alt='' />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src='/imagens/logo-rodape.png' alt='' />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
   </footer>) 
}

export default Rodape