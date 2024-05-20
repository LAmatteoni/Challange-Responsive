
import Image from 'next/image';
import logoFiap from '../../../public/assets/LogoFiap.png'
import logoSalesforce from '../../../public/assets/logoSalesforce.svg'
import '../../../public/css/footer.css'
import Link from 'next/link';

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
                    <div className="logos-footer">
                        <Link href={'/'}><Image src={logoSalesforce} alt='Logo da SalesForce'/></Link>
                        <Link href={'https://www.fiap.com.br/'} target='_blank'><Image className='logoFiap' src={logoFiap} alt='Logo da FIAP'/></Link>
                    </div>
                </div>
                
                <div className="copyright">
                    <p>&copy; Copyright 2024 LVTech, Inc.</p>
                </div>
            </footer>
        </>
    )
}
export default Footer;