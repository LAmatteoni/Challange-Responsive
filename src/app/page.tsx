import Image from 'next/image';
import "../../public/css/home.css";
import AstroFeliz from "../../public/assets/Amigo-ASTRO.png"
import AstroCajado from "../../public/assets/ASTRO-CAJADO.png"
import AstroAtendente from "./../../public/assets/ASTRO-atendente.png"
import ImgVlibras from "../../public/assets/exemploVLIBRAS.png"
import Card from './card/card';

export default function Home() {
  return (
    <>
      <section className='section-bg-escuro'>
        <div className='container flex gap'>
          <div className='text1'>
              <h2>O que há de novo para a Salesforce?</h2>
              <h1>EXPLORE O NOVO!</h1>
          </div>

          <Image src={AstroFeliz} alt='Personagem Astro correndo'/>
        </div>
      </section>





      <section>

        <div className='container flex direction'>
            <Image src={AstroCajado} alt='Personagem Astro ascenando com um cajado'/>
          

          <div className='text2'>
            <h3>Agora nosso amigo pode te ajudar a conhecer mais sobre nós!</h3>

            <p>Nosso amigo pode te  guiar na sua jornada pelo mundo Salesforce! Se voce quiser saber mais, é só clicar no botão abaixo e se aventurar como um verdadeiro Trailbrazer!</p>
              
            <div className='botao'>
              <button>Acompanhe nosso amigo aqui</button>
            </div>
          </div>
        </div>

      </section>



      <section className='section-bg-escuro'>

        <div className="container section-busca">
          <h2>Os melhores produtos!</h2>
          <Card/>
        </div>
      </section>

      <section>

            <div className='container flex direction'>

              <div className='text2'>
                <h3>Experimente nosso novo chatbot!</h3>

                <p>Experimente tirar suas dúvidas sobre o universo Salesforce com rapidez, agilidade e precisão!</p>

                <div className='botao'>
                  <button>Acesse nosso chatbot aqui</button>
                </div>
              </div>

              <Image src={AstroAtendente} alt='Personagem Astro atendendo o telefone' className='astro-atendente'/>
            </div>

      </section>

      <section className='section-bg-escuro'>

            <div className='container flex direction gap'>

              <div className='text1'>
                <h3>MUITO MAIS ACESSIBILIDADE</h3>

                <p>Experimente uma nova forma de navegar em nosso site utilizando o VLibras para acessibilidade a pessoas com deficiência auditiva. Estamos comprometidos em tornar nossa plataforma inclusiva e acessível a todos.</p>
              </div>

              <Image src={ImgVlibras} alt='Personagem do assistente virtual online VLibras' className='vlibras'/>
            </div>

      </section>     
    </>
  );
}
