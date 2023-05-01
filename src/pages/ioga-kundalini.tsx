import Footer from "@/components/Footer";
import { Header } from "@/components/Heder";
import Head from "next/head";

const Formacions = () => {
  return (
    <>
      <Head>
        <title>Classes de Ioga Kundalini</title>
      </Head>
      <Header />
      <div className="bg-gray-50 lg:max-w-7xl lg:mx-auto mt-16 overflow-hidden relative">
        <img className="object-cover lg:rounded-lg lg:w-full max-h-[600px]" src="/classes-header.jpg" alt="" />
        <div className="mx-auto max-w-7xl absolute z-10 top-0">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative py-6 px-6 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex items-center">
                  Ioga Kundalini
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tallers de relaxacio i mindfulness */}
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-violet-400 sm:text-4xl">Classes regulars</h1>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/classes-kundalini.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-lg leading-7 text-gray-500 lg:max-w-lg text-justify">
                <p>
                  El <strong className="font-semibold text-gray-900">Ioga</strong> és una tècnica mil·lenària d’origen
                  hindú que facilita un coneixement integral de l’ésser humà. Una percepció global de la persona com
                  unitat i amb l’entorn: el cos físic, les emocions, la ment (els pensaments) i principis espirituals.
                  Connecta i relaciona l’espai interior de la persona amb l’espai exterior, on interactuem. Per això
                  Ioga significa Unió, unió d’aquestes dues dimensions humanes i d’evolució de la humanitat cap a fites
                  elevades.
                </p>
                <p className="mt-6">
                  A l’origen, el Ioga es practicava principalment per equilibrar els trets de personalitat de cadascú i
                  coordinar-los per tal d’accentuar els talents i les virtuts individuals, les qualitats personals. I
                  per acompanyar la vida en comunitats, compartint coneixements (algun tipus de massatge, maneres sanes
                  de cuinar, maneres de respirar, de moure’s, d’estudiar...)
                </p>
                <p className="mt-6">
                  Tots els estils de Ioga venen d’una arrel comuna que ha anat evolucionant a partir de ressaltar més un
                  aspecte o un altre: la pràctica física, l’energia, la devoció, la observació, l’estudi, etc. Tots els
                  estils són vàlids, tots els camins ho són, que cadascú trobi el seu.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Per què el Ioga Kundalini?</h2>
                <p className="mt-6">
                  El Kundalini Ioga en origen consistia en exercicis i meditacions per curar i expandir la capacitat de
                  l’ésser. El kundalini és la branca del Ioga que s’enfoca en moure l’energia, en transitar el viatge de
                  l’experiència humana, des dels aspectes més físics, cap als més subtils. A l’arrel sempre hi ha un
                  concepte de salut integral.
                </p>
                <p className="mt-6">
                  La seva pràctica consisteix en sèries d’”asanes” realitzades amb moviments dinàmics i repetitius,
                  coordinats amb respiracions específiques, cants de mantres i mudres (postures amb les mans). És com
                  meditar en moviment, mentre s’oxigena el cos, la ment i l’ànima. Aconseguim donar espai a l’alegria de
                  connectar amb el flux creatiu de la vida i guanyem benestar i salut.
                </p>
                <p className="mt-6">
                  Jo vaig arribar al Ioga a través de la pràctica del Kundalini i ja m’hi vaig quedar. Valoro sobretot
                  l’experiència de cada classe, un trosset d’experiència de vida, d’anar creant espai perquè es desperti
                  dins nostre la força creativa que a vegades resta adormida...
                </p>
                <p className="mt-6">
                  El Ioga kundalini t’ajuda a desbloquejar el teu potencial creatiu, despertant la intuïció, obrint
                  canals i camins interns perquè l’energia flueixi lliurement.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Les classes</h2>
                <p className="mt-6">
                  Són classes properes, grups reduïts, on t’acompanyo perquè puguis anar evolucionant amb tranquil.litat
                  i obtenint els beneficis que aporta una bona pràctica. A les classes combino l’experiència de la
                  consciència corporal adquirida amb els anys de dansa i la profunditat del coneixement integral del
                  Ioga.
                </p>
                <p className="mt-6">
                  Quan estem en contacte amb la nostra creativitat, podem aprofitar la nostra saviesa interior, i a
                  través de la intuïció, i de la mà de la imaginació, contactar amb idees i solucions innovadores per
                  desafiar les situacions de la vida.
                </p>

                <p className="mt-6">Presencials horaris:</p>
                <ul className="list-disc">
                  <li className="ml-5 text-lg mb-4">
                    Psicorporal. C/Portaferrissa, 18, baixos (Metro Plaça Catalunya)
                    <ul className="list-[circle] ml-8">
                      <li>dilluns de 19:15 a 20:45h (també ONLINE)</li>
                      <li>dimecres de 14:30 a 15:45h</li>
                    </ul>
                  </li>
                  <li className="ml-5 text-lg mb-4">
                    El Principal del Pati C/Canvis Vells, 5 ( Metro Jaume I)
                    <ul className="list-[circle] ml-8">
                      <li>dimarts de 19:15 a 20:30h</li>
                    </ul>
                  </li>
                  <li className="ml-5 text-lg">
                    Casal de Barri Bac de Roda – Tallers trimestrals
                    <ul className="list-[circle] ml-8">
                      <li>dimecres de 18:30 a 19:45h (nivell inicial)</li>
                      <li>dimecres de 19:50 a 21:05h (nivell avançat)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tallers de Ioga adaptat */}
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-violet-400 sm:text-4xl ">
                Classes individuals
              </h1>
              <blockquote className="mt-6 text-xl leading-8 text-gray-700">
                “La paraula Ioga significa “unió”, en un doble sentit, unió amb un mateix i amb el món que ens envolta.
                El Ioga és un camí d’experiència corporal i personal”. Y.B.
              </blockquote>
            </div>
          </div>
          <div className="max-h-[600px] overflow-hidden md:max-h-none -ml-60 lg:-mt-60 sm:-ml-80 lg:-ml-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:overflow-hidden rounded-xl">
            <img
              className="max-w-none w-full object-cover bg-gray-900 shadow-xl ring-1 rounded-xl ring-gray-400/10 sm:w-[57rem]"
              src="/classes-individuals.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-3 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-lg leading-7 text-gray-500 lg:max-w-lg text-justify">
                <p>
                  Les sessions individuals estan adaptades a les necessitats personals. També serveixen per trencar el
                  gel, o per iniciar-te, abans de donar el salt a un grup, si ho volguéssis.
                </p>
                <p className="mt-6">
                  Amb aquestes classes personalitzades t’aproparàs al Ioga des de un ritme amable i personal per tal de
                  respectar el teu procés i nivell.
                </p>
                <p className="mt-6">
                  Aprenem a <strong className="font-semibold text-gray-900">respirar</strong>, quelcom tant bàsic i que
                  ens proporciona una millora de la salut, a l’augmentar la nostra energia d’una manera natural.
                </p>
                <p className="mt-6">
                  I, gràcies a l’exercici amb les diferents postures i mudres (gestos amb les mans), de la consciència
                  en el moment present amb els cants i les meditacions, de les relaxacions, etc, notaràs un alleujament
                  de les tensions i de l’estrés i un augment de la teva vitalitat. Podràs descansar millor...
                </p>
                <p className="mt-6">
                  És una activitat per enfocar la setmana i/o les circumstàncies des d’un lloc més plaent, amb una
                  mirada nova, diferent.
                </p>
                <p className="mt-6">Horaris a convenir.</p>
                <p>Truca’m per a qualsevol dubte.</p>
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
