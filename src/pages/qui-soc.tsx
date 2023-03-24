import Footer from "@/components/Footer";
import { Header } from "@/components/Heder";

const QuiSoc = () => {
  return (
    <>
      <Header />
      <div className="relative overflow-hidden bg-white py-16">
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-violet-400 sm:text-4xl">
                Qui sóc
              </span>
            </h1>
          </div>
          <div className="prose max-w-4xl prose-lg prose-indigo mx-auto mt-6 text-gray-500">
            <p>
              Paral.lelament al meu pas per la Universitat on vaig estudiar Psicologia i vaig descobrir l’Antropologia,
              em vaig endinsar en el món de la dansa contemporània on trobaria la meva primera gran vocació. La dansa
              esdevé el meu llenguatge vital. Gràcies a ella vaig poder conèixer la riquesa de la creació i l´expressió
              artístiques.
            </p>

            <p>
              Al mateix temps i quasi bé com a condició sine qua non vaig iniciar una tasca pedagògica que sovint
              acompanya la professió de la dansa.
            </p>
            <p>
              Donava classes a diferents col.lectius: infants, educadores, estudiants, aspirants i professionals de la
              dansa...i també a persones que arribaven cercant consciència corporal, moviment orgànic, benestar.
            </p>

            <p>
              Això em va ajudar a desenvolupar una nova vocació que naixeria quasi ve de forma innata en mi,
              l’ensenyament. Li dedico hores d’estudi i molta atenció perquè arribi a esdevenir allò que ser fer, allò
              que puc transmetre.
            </p>

            <p>
              Més tard, ja sent mare, li vaig donar un tomb a la meva professió i em vaig formar en la disciplina del
              Ioga Kundalini, del Ioga per l’embaraç, del Ioga per infants, del Ioga adaptat,...
            </p>
            <p>
              Transformava i integrava el meu coneixement del cos i de l’ànima des de la dansa, cap a l’horitzó
              espiritual i saludable que proposa el Ioga.
            </p>
            <p>
              Aquesta nova direcció la desenvolupo en dues vies diferents; Per un cantó, vaig crear un mètode per a dur
              el Ioga i la meditació a les escoles, com a eina beneficiosa tant per mestres com per alumnes. D’aquesta
              trajectòria va néixer un llibre que vaig escriure a quatre mans amb l&apos;Ariadna Civil, també professora
              de Ioga: Taller de Yoga para niños. Alba editorial, 2018. I que ara mateix ja va per la 3a edició!.
            </p>
            <figure>
              <img className="w-full rounded-lg" src="qui-soc-aigua.jpg" alt="" width={1310} height={873} />
            </figure>
            <p>
              Per una altra banda, i sense deixar de la mà la riquesa dels ensenyaments del Ioga, em formo també en
              Mindfulness (totes les referències són a les pàgines següents) a la Universitat de Barcelona. Sempre
              m’acompanya la idea d’entendre la vida com una integració d’aprenentatges i aprofundiments.
            </p>
            <p>
              Incorporo aquesta nova vessant a les meves classes i formacions amb l’ànim i l’objectiu de que el què
              comparteixo amb l’alumnat, sigui el col.lectiu que sigui, destil.li experiència i coneixement, que puguin
              ser eines útils per a transitar el nostre camí, d’una manera amable, conscient i compassiva.
            </p>
            <blockquote>
              “Podem dir que estem realment vius, únicament en aquells instants en els quals els nostres cors són
              conscients dels nostres tresors”. Thornton Wilder
            </blockquote>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuiSoc;
