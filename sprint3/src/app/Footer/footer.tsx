
import Image from 'next/image';
import logoFiap from './../../../public/assets/logoFiap.png'
import logoSalesforce from './../../../public/assets/logoSalesforce.png'
import './../../../public/css/footer.css'

const Footer = () => {
    return(
        <>
            <footer>
                <div className="menu-navegacao">
                    <nav className='menu-footer'>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="./../Empresa">Salesforce</a></li>
                            <li><a href="./../Sobrenos">Sobre Nós</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="endereco-logos">
                    <address>FIAP, 7th floor - Torre A, R. Fidêncio Ramos, 308 - Vila Olímpia, São Paulo - SP, 04551-000</address>
                    <Image src={logoSalesforce} alt='Logo da SalesForce'/>
                    <Image src={logoFiap} alt='Logo da FIAP'/>
                </div>
                
                <div className="copyright">
                    <p>&copy; Copyright 2024 LVTech, Inc.</p>
                </div>
            </footer>
        </>
    )
}
export default Footer;