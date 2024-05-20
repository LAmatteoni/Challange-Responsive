import Image from 'next/image';
import AstroAmigos from '../../../public/assets/astroAmigos.png'
import Funcionarios from '../../../public/assets/funcionarios.png'
import AstroColmeia from '../../../public/assets/astroColmeia.png'
import AstroCorrida from '../../../public/assets/astroCorrida.png'
import EinsteinSala from '../../../public/assets/einsteinSala.png'
import '../../../public/css/empresa.css'

const Empresa = () => {
    return(
        <>
            <section className="section-pergunta">
                <h1>Você conhece a Salesforce?</h1>
            </section>

            <section className="clientes">
                <h2>Construímos pontes entre empresas e clientes.</h2>
                <Image src={AstroAmigos} alt='Astro e amigos'/>
                <p>Ajudamos a unir cada departamento para nos concentrarmos melhor nos clientes com o Customer 360, o CRM n°1 do mundo. Permitimos que todos, em todas as equipes, compartilhem uma única fonte de verdade com recursos de colaboração integrados que orientam conversas e decisões essenciais exatamente onde as pessoas trabalham. E com o Tableau, ajudamos as empresas a descobrir percepções profundas e a tomar ações orientadas por dados para melhor atender seus clientes.</p>
                <Image src={Funcionarios} alt='3 funcionarios da empresa' className='funcionarios'/>
            </section>

            <section className="trailblazers">
                <h2>Somos Trailblazers.</h2>
                <p>Cultura</p>
                <div className="cards-trailblazers">
                    <div className="card-astro">
                    <Image src={AstroColmeia} alt='Astro com colmeia'/>
                        <h3>Confiança</h3>
                        <span>Agimos como consultores confiáveis.</span>
                    </div>
                    <div className="card-astro">
                    <Image src={AstroCorrida} alt='Astro correndo'/>
                        <h3>Sucesso do cliente</h3>
                        <span>Quando nossos clientes são bem-sucedidos, temos sucesso.</span>
                    </div>
                    <div className="card-astro">
                    <Image src={EinsteinSala} alt='Einstein ensinando na sala'/>
                        <h3>Inovação</h3>
                        <span>Inovamos juntos.</span>
                    </div>
                </div>                
            </section>
        </>
    )
}
export default Empresa;