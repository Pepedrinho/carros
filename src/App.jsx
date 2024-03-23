import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from './assets/icon-suvs.svg'
import iconLuxuosos from './assets/icon-luxury.svg'

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6">
      <section>
        <div className="bg-orange">
          <img src={iconSedans} alt="icone dos carros sedan" />
          <h2 className="font-shoulders">Sedans</h2>
          <p className="font-lexend">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className="font-lexend"href="https://www.webmotors.com.br/sedans?idcmp=s08%3Ac13%3A3ea9720bc8b644d8a93f04b278d48332&idcmp=s08%3Ac13%3Ac85ed858091a48ee873891e1a36e29f1&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgNwcxu9I42pelagdfgK1bDQaLPnHNV0i79LMKm4UDxJVCalVJr4ZYkaAvNeEALw_wcB" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green">
          <img src={iconSuvs} alt="" />
          <h2 className="font-shoulders">SUVs</h2>
          <p className="font-lexend">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/carros/estoque?idcmp=s08%3Ac03%3A8bcd6c70eb2a4017aac2e34222708902&tipoveiculo=carros&anunciante=Loja%7CConcessionária&carroceria=Utilitário+esportivo&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgPMFeTZNyENTzMzS6H55sJFT9Hf2MIZoah6vYTWHl9YjiLWyO2K5ksaAlvJEALw_wcB" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark-green">
          <img src={iconLuxuosos} alt="" />
          <h2 className="font-shoulders">Luxuosos</h2>
          <p className="font-lexend">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend" href="https://gsselectcars.com.br/?gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgMr_QFTSKADfZhufRui5wUAfRWWEqUo4gS9_IwjHUnKWtOWRoRa6hEaAlR-EALw_wcB" target="_blank">Ver mais</a>
        </div>
      </section>
    </main>
  )
}