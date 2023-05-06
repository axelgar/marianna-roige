import Footer from "@/components/Footer";
import { Header } from "@/components/Heder";
import Head from "next/head";

const Formacions = () => {
  return (
    <>
      <Head>
        <title>Retirs de Ioga</title>
      </Head>
      <Header />
      <div className="bg-gray-50 lg:max-w-7xl lg:mx-auto mt-16 overflow-hidden relative">
        <img
          className="object-cover lg:rounded-lg lg:w-full max-h-[600px]"
          src="/formacions-escola.webp"
          alt="Formació per escoles"
        />
        <div className="mx-auto max-w-7xl absolute z-10 top-0">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative py-6 px-6 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex items-center">
                  Formació per escoles
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <li>
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover"
                src="/formacio-escoles/formacio-escoles-1.jpg"
                alt="La calma ens visita. Trobada amb docents. Editorial Barcanova. Barcelona"
              />
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover"
                src="/formacio-escoles/formacio-escoles-2.jpg"
                alt="Escola Oriol Martorell. Barcelona"
              />
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover"
                src="/formacio-escoles/formacio-escoles-3.jpg"
                alt="Escola Oriol Martorell. Barcelona"
              />
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover"
                src="/formacio-escoles/formacio-escoles-4.jpg"
                alt="Escola Oriol Martorell. Barcelona"
              />
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover"
                src="/formacio-escoles/formacio-escoles-5.jpg"
                alt="Escola Oriol Martorell. Barcelona"
              />
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover"
                src="/formacio-escoles/formacio-escoles-6.jpg"
                alt="Escola Oriol Martorell. Barcelona"
              />
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover"
                src="/formacio-escoles/formacio-escoles-7.jpg"
                alt="Escola Oriol Martorell. Barcelona"
              />
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover"
                src="/formacio-escoles/formacio-escoles-8.jpg"
                alt="Escola Oriol Martorell. Barcelona"
              />
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover"
                src="/formacio-escoles/formacio-escoles-9.jpg"
                alt="Escola Oriol Martorell. Barcelona"
              />
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover"
                src="/formacio-escoles/formacio-escoles-10.jpg"
                alt="Escola Oriol Martorell. Barcelona"
              />
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover"
                src="/formacio-escoles/formacio-escoles-11.jpg"
                alt="Escola Oriol Martorell. Barcelona"
              />
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover"
                src="/formacio-escoles/formacio-escoles-12.jpg"
                alt="Escola Oriol Martorell. Barcelona"
              />
            </li>
          </ul>
          <div className="max-w-xl text-lg leading-7 text-gray-500 lg:max-w-lg text-justify">
            <h2 className="mt-16 text-xl font-bold tracking-tight text-gray-900">IOGA INFANTIL</h2>
            <ul>
              <li>Escola Oriol Martorell. Barcelona</li>
            </ul>
            <h2 className="mt-16 text-xl font-bold tracking-tight text-gray-900">
              IOGA I MEDITACIÓ AMB ADOLESCENTS I JOVES
            </h2>
            <ul>
              <li>Conservatori Professional de Música de Badalona</li>
              <li>Institut Maragall. Barcelona</li>
              <li>Institut Públic Ribot i Serra Sabadell</li>
            </ul>
            <h2 className="mt-16 text-xl font-bold tracking-tight text-gray-900">FORMACIÓ PER DOCENTS</h2>
            <ul>
              <li>Associació de Mestres Rosa Sensat</li>
              <li>Eines de relaxació i meditació a l’aula. Editorial Barcanova (Girona, Reus, Lleida i Barcelona)</li>
              <li>Centre de Recursos Pedagògics de Ciutat Vella. Barcelona</li>
              <li>MEM-Moviment educatiu del Maresme</li>
              <li>Escola Sant Feliu. Cabrera de Mar</li>
              <li>Escoles Despertes</li>
              <li>Escola Josep Ventalló i Vintró. Terrassa</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Formacions;
