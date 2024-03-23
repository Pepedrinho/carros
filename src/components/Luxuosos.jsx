import iconLuxuosos from '../assets/icon-luxury.svg'

export default function Luxuosos() {
  return (
    <div className="bg-dark-green p-12 max-rounded-b-lg lg:rounded-r-lg">
        <img src={iconLuxuosos} alt="icone dos carros luxuosos" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
        <p className="font-lexend mb-7 text-offwhite lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a className="font-lexend bg-offwhite block px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhitebg" href="https://gsselectcars.com.br/?gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgMr_QFTSKADfZhufRui5wUAfRWWEqUo4gS9_IwjHUnKWtOWRoRa6hEaAlR-EALw_wcB" target="_blank">Ver mais</a>
  </div>
  )
}
