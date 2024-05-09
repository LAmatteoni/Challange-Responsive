import Image from 'next/image';
import './../../../public/css/sobrenos.css'
import Lucca from './../../../public/assets/lucca.png'
import Vitor from './../../../public/assets/vitor.png'
import AstroVaral from './../../../public/assets/astroVaral.png'

const Sobrenos = () => {
    return(
        <>
            <section className="equipe">
                <h1>Nossa Equipe</h1>
                <div className="desenvolvedores">
                    <h2>Conheça nossos desenvolvedores:</h2>
                    <div className="integrantes">
                        <div className="card-integrante">
                            <Image src={Lucca} alt='Foto de perfil do integrante Lucca'/>
                            <h3>Lucca Matteoni</h3>
                            <span>RM98146</span>
                            <span>-</span>
                            <span>1TDSPB</span>
                        </div>
                        <div className="card-integrante">
                            <Image src={Vitor} alt='Foto de perfil do integrante Vitor'/>
                            <h3>Vitor Santos</h3>
                            <span>RM553621</span>
                            <span>-</span>
                            <span>1TDSPB</span>
                        </div>
                    </div>
                </div>

                <div className="frase-branca">
                    <p>"Nossa equipe está dedicada a implementar melhorias constantes para aprimorar a usabilidade e atrair novos usuários para a plataforma Salesforce. Estamos empenhados em oferecer uma experiência cada vez melhor e mais acessível para todos os usuários."</p>
                    <Image src={AstroVaral} alt='Astro e seus amigos pendurados num varal'/>
                </div>
            </section>
        </>
    )
}
export default Sobrenos;