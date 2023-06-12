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
          src="https://storage.googleapis.com/mariannaroige-images/retirs.jpg"
          alt="Pedre sobre sorra"
        />
        <div className="mx-auto max-w-7xl absolute z-10 top-0">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative py-6 px-6 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex items-center">Retirs</h1>
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
                className="aspect-[3/2] w-full rounded-2xl object-cover lg:hover:scale-150 hover:shadow-2xl transition-all duration-700 hover:relative hover:z-10"
                src="https://storage.googleapis.com/mariannaroige-images/retir-1.jpg"
                alt="Retir marroc"
              />
              {/* <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Marroc</h3> */}
              {/* <p className="text-base leading-7 text-gray-600">{person.role}</p> */}
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover lg:hover:scale-150 hover:shadow-2xl hover:relative hover:z-10 transition-all duration-700"
                src="https://storage.googleapis.com/mariannaroige-images/retir-2.jpg"
                alt="Retir marroc"
              />
              {/* <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Marroc</h3> */}
              {/* <p className="text-base leading-7 text-gray-600">{person.role}</p> */}
            </li>
            <li>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover lg:hover:scale-150 hover:shadow-2xl transition-all duration-700 hover:relative hover:z-10 "
                src="https://storage.googleapis.com/mariannaroige-images/retir-3.jpg"
                alt="Retir marroc"
              />
              {/* <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Marroc</h3> */}
              {/* <p className="text-base leading-7 text-gray-600">{person.role}</p> */}
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Formacions;
