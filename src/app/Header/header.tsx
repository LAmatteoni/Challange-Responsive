'use client'

import Image from 'next/image';
import logoSalesforce from './../../../public/assets/logoSalesforce.svg'
import lupa from './../../../public/assets/lupa.png'
import menuHamburguer from './../../../public/assets/menuHamburguer.png'
import '../../../public/css/header.css'
import { useState } from 'react';
import Link from 'next/link';

    
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return(
        <>
            <header>
                <div className="logo">
                    <Link href={"/"}>
                        <Image src={logoSalesforce} alt="Logo da Salesforce"/>
                    </Link>
                </div>
                <div className="botoes-menu">
                    <button className='lupa'><Image src={lupa} alt='Botão de lupa para pesquisa'/></button>
                    <label className="hamburger" onClick={toggleMenu}><Image src={menuHamburguer} alt='botão do menu hamburguer' className='imagemBurguer'/></label>
                    {isOpen && (
                        <nav className="menu-header">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="./../Empresa">Salesforce</a></li>
                                <li><a href="./../Sobrenos">Sobre Nós</a></li>
                            </ul>
                        </nav>
                    )}
                    <nav className="menu-header-tela-maior">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="./../Empresa">Salesforce</a></li>
                            <li><a href="./../Sobrenos">Sobre Nós</a></li>
                        </ul>
                    </nav>
                </div>
            </header>  
        </>
    )
}
export default Header;