import Footer from "@/components/Footer";
import { Header } from "@/components/Heder";
import Head from "next/head";

const Formacions = () => {
  return (
    <>
      <Head>
        <title>Formacions de Ioga i mindfulness</title>
      </Head>
      <Header />
      <div className="bg-gray-50 lg:max-w-7xl lg:mx-auto mt-16 overflow-hidden relative">
        <img
          className="object-cover lg:rounded-lg lg:w-full max-h-[600px]"
          src="/formacions.jpg"
          alt="Formacions de Ioga i mindfulness"
        />
        <div className="mx-auto max-w-7xl absolute z-10 top-0">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative py-6 px-6 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex items-center">
                  Formacions
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
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-violet-400 sm:text-4xl">
                Tallers de relaxació i mindfulness
              </h2>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/relaxacio-mindfulness.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-lg leading-7 text-gray-500 lg:max-w-lg text-justify">
                <p>
                  <strong className="font-semibold text-gray-900">Relaxació</strong> entesa com la capacitat de viure el
                  moment present per potenciar la concentració i viure amb plenitud. Posem l’èmfasi en aconseguir-ho
                  gràcies a la consciència del nostre cos. Observem la memòria corporal i els hàbits que hi ha, i
                  proporcionem nous patrons de calma, de pes, de descàrrega, de respiració, d&apos;alegria amb el
                  moviment.
                </p>
                <p>Objectius: treure tensions físiques i mentals, alleugerir l&#39;organisme i poder-nos relaxar.</p>
                <p className="mt-6">
                  <strong className="font-semibold text-gray-900">Mindfulness o meditació</strong> enfocada en respirar
                  conscientment, transitar la calma, la concentració, reduir l’estrès quotidià, connectar amb el cor, la
                  intuïció i la creativitat.
                  <br />
                  Meditar és una oportunitat per a crear quietud dins teu sense reaccionar al flux continu de la teva
                  ment: “No som els nostres pensaments, no som les nostres emocions”. D’una manera agradable aprenem a
                  processar sentiments i pensaments sense reaccionar, podent triar amb tranquil·litat les respostes.
                  Prenent distància.
                </p>
                <p>
                  Això t’ajuda a rejovenir i relaxar-te, a gestionar millor l&#39;estrès i establir un millor contacte
                  amb les teves relacions, amb els que t’envolten.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">A qui va dirigit?</h2>
                <p className="mt-6">
                  Per docents i futurs docents. La docència és un ofici que comporta molta dedicació i un “sobrepès”
                  emocional. Per aquesta raó, el recolzament positiu i una destresa personal de gestió de situacions i
                  conflictes “no reactiva” esdevé una molt bona eina.
                </p>
                <p className="mt-6">
                  En la mida del possible, demana una atenció que anomenem consciència, que vol dir despertar una mirada
                  observadora dins nostre, envers les diferents situacions. Aquest “pilot despert” o atenció interna que
                  s’obté amb la relaxació, amb la meditació, és el què ens permet agafar certa distància en situacions
                  estressants o conflictives i per tant aconseguir que no ens “esgotin” de manera reiterada.
                </p>
                <p className="mt-6">
                  També per altres col.lectius professionals que us hi veieu reflectits (sanitat, persones cuidadores,…)
                </p>
                <p className="mt-6">Format adaptable a les necessitats:</p>
                <ul className="list-disc">
                  <li className="ml-5 text-lg">
                    Seminaris de 2, 3 ò 4 hores amb continuïtat i/o independents entre sí.
                  </li>
                  <li className="ml-5 text-lg">
                    Per cursos de formació es recomana un mínim de 10 hores en sessions de 1,30 ò 2 hores de duració.
                  </li>
                </ul>
                <h2 className="mt-16 text-xl font-bold tracking-tight text-gray-900">Activitat</h2>
                <ul className="list-disc mt-6">
                  <li className="ml-5 text-lg italic">Escola Josep Ventalló i Vintró de Terrassa</li>
                  <li className="ml-5 text-lg italic">
                    Associació Moviment Educatiu del Maresme, M.E.M. Escola d’Estiu.
                  </li>
                  <li className="ml-5 text-lg italic">Escola Sant Feliu a Cabrera de Mar</li>
                  <li className="ml-5 text-lg italic">Hamelin-Laie International School</li>
                  <li className="ml-5 text-lg italic">Institut Poeta Maragall. Barcelona</li>
                  <li className="ml-5 text-lg italic">Servei Educatiu Ciutat Vella. Benestar docent</li>
                  <li className="ml-5 text-lg italic">
                    Jornades per Educadxrs de Relaxació i Meditació, editorial Barcanova
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tallers de Ioga adaptat */}
      <div className="relative isolate overflow-hidden bg-white px-6 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-3 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-violet-400 sm:text-4xl">
                Tallers de Ioga adaptat
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-700">Els beneficis del Ioga per a totes les persones</p>
            </div>
          </div>
          <div className="-ml-60 sm:-ml-80 lg:-ml-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden rounded-xl">
            <img
              className="max-w-none  bg-gray-900 shadow-xl ring-1 rounded-xl ring-gray-400/10 sm:w-[57rem]"
              src="/ioga-adaptat-1.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-3 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-lg leading-7 text-gray-500 lg:max-w-lg text-justify">
                <p>
                  El Ioga adaptat és l´aplicació del Ioga a col.lectius amb necessitats específiques, on hi ha una
                  diversitat funcional. Que també a vegades s’anomena discapacitat, ja que aquests termes que estan en
                  constant revisió.
                </p>
                <p className="mt-6">
                  Destil.lem els beneficis del Ioga per tal de que arribin a les persones amb mobilitat reduïda. De la
                  mateixa manera que es lluita perquè tinguin accés a la resta de serveis i activitats que hi ha a la
                  nostra societat. Hi ha diferents situacions i realitats des d’on enfrontem la vida. Certes diferències
                  es converteixen en impediments quan no es pot disposar d’un accés fàcil a recursos i eines útils per a
                  viure i desenvolupar-se en el dia a dia.
                </p>
                <p className="mt-6">
                  L’objectiu a assolir amb aquesta pràctica no és el d’arribar a aconseguir postures perfectes. I sí que
                  ho és afavorir la consciència corporal i per tant gaudir d&apos;un major rang de moviments, equilibrar
                  el seu to muscular, millorar la respiració, ajudar a millorar l’autoestima, aprendre a tolerar les
                  frustracions generades per les limitacions físiques o psíquiques i contribuir també a una millor
                  interacció amb els demés.
                </p>
                <p className="mt-6">
                  <strong className="font-semibold text-gray-900">
                    En aquests tallers aprendràs a proporcionar un “millor estar” als usuaris i usuàries.
                  </strong>
                  <br />
                  Es tracta de potenciar i centrar-se en allò beneficiós que dona el Ioga.
                  <br />A l’activar aquests processos, la qualitat de vida de les persones i la seva autonomia personal,
                  augmenta i poden realitzar activitats, també en l’àmbit laboral.
                </p>
                <p className="mt-6">
                  En aquest estil de Ioga posem el focus molt especialment en les necessitats de cada participant, fent
                  que les diferents activitats, postures, respiracions, etc, ressonin amb les habilitats i capacitats
                  dels practicants. El què importa realment és la persona amb qui tractem. I la relació d’escolta i
                  acompanyament que puguem establir.
                </p>
                <p className="mt-6">
                  En les formacions obtindràs doncs eines bàsiques per poder enfocar el treball amb aquests col.lectius
                  amb l’objectiu de què guanyin en autonomia personal. Et podrà ser beneficiós tant si t’estàs formant
                  com a instructora de Ioga com si estàs fent una formació en l’àmbit de la integració social, o
                  l’atenció a persones en situació de dependència.
                </p>
                <p className="mt-6">Format adaptable a les necessitats:</p>
                <ul className="list-disc">
                  <li className="ml-5 text-lg">
                    Seminaris de 2, 3 ò 4 hores amb continuïtat i/o independents entre sí.
                  </li>
                  <li className="ml-5 text-lg">
                    Per cursos de formació es recomana un mínim de 10 hores en sessions de 1,30 ò 2 hores de duració.
                  </li>
                </ul>
                <h2 className="mt-16 text-xl font-bold tracking-tight text-gray-900">Activitat</h2>
                <ul className="list-disc mt-6">
                  <li className="ml-5 text-lg italic">
                    Tallers de 4 hores dins la Formació Oficial de Hatha Ioga al Happyyoga Urquinaona a Barcelona, amb
                    acreditació del ROPEC.
                  </li>
                  <li className="ml-5 text-lg italic">
                    Tallers a Cicles Formatius de Formació Professional: Integració social i Tècnics en Atenció a
                    Persones en Situació de Dependència. Institut Ribot i Serra de Sabadell.
                  </li>
                  <li className="ml-5 text-lg italic">Classes individuals</li>
                </ul>
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
