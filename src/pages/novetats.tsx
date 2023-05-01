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
        <img className="object-cover lg:rounded-lg lg:w-full max-h-[600px]" src="/novetats.jpg" alt="" />
        <div className="mx-auto max-w-7xl absolute z-10 top-0">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative py-6 px-6 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex items-center">Novetats</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4 lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-violet-400 sm:text-4xl">
                El libro ‘Taller de yoga para niños’ se presenta en el Club Diario de Mallorca
              </h2>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/taller-ioga-per-nens.jpeg"
              alt="Taller de ioga per nens / Taller de yoga para niños"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-lg leading-7 text-gray-500 lg:max-w-lg text-justify">
                <p>
                  <strong className="font-semibold text-gray-900">«Los niños son yoguis por naturaleza.</strong> Su
                  mirada positiva, su armonía, su manera de relacionarse… Hay alguna cosa en la inocencia de los niños
                  que nos enseña la esencia del ser humano», reflexiona Mariana Roigé, una de las autoras del libro
                  Taller de yoga para niños, que la editorial ALBA publicó este pasado mes de marzo, y en el que
                  comparte autoría con Ariadna Civil. Este tándem yoguini ofrece formaciones para educadores, docentes,
                  tutores o progenitores para que aprendan a enseñar la práctica del yoga a los más pequeños, algo que
                  también es el objetivo del libro que Roigé y Civil presentarán hoy en el Club Diario de Mallorca, a
                  las 19 horas.
                </p>
                <p className="mt-6">
                  El libro se enmarca dentro de la colección Talleres de la editorial ALBA y, según Roigé,{" "}
                  <strong className="font-semibold text-gray-900">
                    «es como un manual, una recopilación de la información que nosotras damos en nuestras formaciones,
                    algo práctico, con propuestas de ejercicios»
                  </strong>
                  , algunos de los cuales se pondrán en práctica el viernes en el auditorio del Club, en lo que será una
                  didáctica charla sobre la importancia del yoga en la educación y la iniciación de los más pequeños en
                  este mundo, como explica Roigé.
                </p>
                <p className="mt-6">
                  Puede parecer antitético el hecho de relacionar el yoga, práctica que requiere calma y concentración,
                  con los niños, muchos de los cuales son torrentes de energía inagotables. Sin embargo, Roigé comenta
                  que{" "}
                  <strong className="font-semibold text-gray-900">
                    «no tenemos que imaginar una clase de yoga para niños en la que estén quietos en silencio»
                  </strong>
                  . Más bien, se trata de que se inicien en el yoga a partir de juegos de bienvenida, de relacionar las
                  posturas con animales y de guiarles por la meditación a partir de historietas. «Las clases de yoga
                  para niños no tienen nada que ver con las clases de yoga de los adultos»
                </p>
                <p className="mt-6">
                  <strong className="font-semibold text-gray-900">«Los niños son yoguis por naturaleza.</strong> Su
                  mirada positiva, su armonía, su manera de relacionarse… Hay alguna cosa en la inocencia de los niños
                  que nos enseña la esencia del ser humano», reflexiona Mariana Roigé, una de las autoras del libro{" "}
                  <strong className="font-semibold text-gray-900">Taller de yoga para niños</strong>, que la editorial
                  ALBA publicó este pasado mes de marzo, y en el que comparte autoría con Ariadna Civil. Este tándem
                  yoguini ofrece formaciones para educadores, docentes, tutores o progenitores para que aprendan a
                  enseñar la práctica del yoga a los más pequeños, algo que también es el objetivo del libro que Roigé y
                  Civil presentarán hoy en el Club Diario de Mallorca, a las 19 horas.
                </p>
                <p className="mt-6">
                  El libro se enmarca dentro de la colección Talleres de la editorial ALBA y, según Roigé,{" "}
                  <strong className="font-semibold text-gray-900">
                    «es como un manual, una recopilación de la información que nosotras damos en nuestras formaciones,
                    algo práctico, con propuestas de ejercicios»
                  </strong>
                  , algunos de los cuales se pondrán en práctica el viernes en el auditorio del Club, en lo que será una
                  didáctica charla sobre la importancia del yoga en la educación y la iniciación de los más pequeños en
                  este mundo, como explica Roigé.
                </p>
                <p className="mt-6">
                  Puede parecer antitético el hecho de relacionar el yoga, práctica que requiere calma y concentración,
                  con los niños, muchos de los cuales son torrentes de energía inagotables. Sin embargo, Roigé comenta
                  que{" "}
                  <strong className="font-semibold text-gray-900">
                    «no tenemos que imaginar una clase de yoga para niños en la que estén quietos en silencio»
                  </strong>
                  . Más bien, se trata de que se inicien en el yoga a partir de juegos de bienvenida, de relacionar las
                  posturas con animales y de guiarles por la meditación a partir de historietas.{" "}
                  <strong className="font-semibold text-gray-900">
                    «Las clases de yoga para niños no tienen nada que ver con las clases de yoga de los adultos»
                  </strong>
                  , expresa Roigé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Formacions;
