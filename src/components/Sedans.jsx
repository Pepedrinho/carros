import iconSedans from "../assets/icon-sedans.svg"

export default function Sedans() {
  return (
    <div className="bg-orange p-12 max-rounded-t-lg lg:rounded-l-lg">
        <img src={iconSedans} alt="icone dos carros sedan" className="mb-7" />
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
        <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a className="font-lexend bg-offwhite block px-10 py-3 w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-offwhitebg"href="https://www.webmotors.com.br/sedans?idcmp=s08%3Ac13%3A3ea9720bc8b644d8a93f04b278d48332&idcmp=s08%3Ac13%3Ac85ed858091a48ee873891e1a36e29f1&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgNwcxu9I42pelagdfgK1bDQaLPnHNV0i79LMKm4UDxJVCalVJr4ZYkaAvNeEALw_wcB" target="_blank">Ver mais</a>
    </div>
  )
}
