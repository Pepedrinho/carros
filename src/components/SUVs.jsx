import iconSuvs from '../assets/icon-suvs.svg'

export default function SUVs() {
  return (
    <div className="bg-green p-12">
        <img src={iconSuvs} alt="icone dos carros suvs" className="mb-7" />
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
        <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
        <a className="font-lexend bg-offwhite block px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg" href="https://www.webmotors.com.br/carros/estoque?idcmp=s08%3Ac03%3A8bcd6c70eb2a4017aac2e34222708902&tipoveiculo=carros&anunciante=Loja%7CConcessionária&carroceria=Utilitário+esportivo&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgPMFeTZNyENTzMzS6H55sJFT9Hf2MIZoah6vYTWHl9YjiLWyO2K5ksaAlvJEALw_wcB" target="_blank">Ver mais</a>
    </div>
  )
}
