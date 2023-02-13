export default function IgoaDiscapacitatSection() {
  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1 id="ioga-discapacitat">
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Ioga i discapacitat
            </span>
          </h1>
          <h3>
            <span className="mt-2 block text-center text-xl font-bold leading-8 tracking-tight text-emerald-400 sm:text-2xl">
              Beneficis de la pràctica del Ioga i la meditació per a persones amb discapacitat o bé en situació de
              dependència.
            </span>
          </h3>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            En aquests entorns el lema a seguir és “que la persona pugui estar millor en la seva situació”. No es tracta
            de forçar o competir, ni parlar en termes d’exigència. Es tracta d’acompanyar i millorar la seva situació.
          </p>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <h2 className="text-emerald-400 text-xl"> Beneficis</h2>

          <ul role="list">
            <li>
              Millora l’autoestima i la interacció amb els demés. Afavoreix la consciència corporal i la sensació del
              “jo”.
            </li>
            <li>
              Aprendre a tolerar la frustració generada per les dificultats o limitacions físiques, ajudant a millorar
              l’auto-concepte i desenvolupant empoderament.
            </li>
            <li>
              Equilibra el to muscular: les postures estiren tendons i músculs relaxadament (Hipertonia) i exerciten la
              musculatura (Hipotonia) gràcies a una resistència suau.
            </li>
            <li>Estira i alinea la columna, proporcionant-li flexibilitat i tonificant-la.</li>
            <li>Millora dels processos digestius i respiratoris.</li>
            <li>
              Desenvolupa un major rang de moviment i de coordinació, millora l’equilibri i la força. Redueix les
              asimetries del cos.
            </li>
          </ul>
          <h2 className="text-emerald-400 text-xl">Paraules clau</h2>
          <p>Arrelar. Estirar-se. Respirar. Relaxar-se. Reconèixer el seu cos.</p>
          <p>
            Amb els cants, les visualitzacions i les meditacions guiades, afavorir el fet de reconèixer els processos
            mentals, i sembrar-hi llavors nutritives.
          </p>
          <h2 className="text-emerald-400 text-xl">Estructura d’una clase</h2>
          <ul role="list">
            <li>Alineació i propiocepció</li>
            <li>Body scan percebent sensacions per tot el cos.</li>
            <li>
              Us d’elements (blocs, coixins, bolsters,...): contacte amb la terra, permeten relaxar parts del cos.
            </li>
            <li>Cants: mantres amb poder vibratori per a connectar i transcendir la ment.</li>
            <li>Escalfament</li>
            <li>Salutació al sol adaptat.</li>
            <li> Postures (asanas) per nivells: cadira, terre.</li>
            <li> Relaxació</li>
            <li>Meditació</li>
            <li>Cant final</li>
          </ul>
          <h2 className="text-emerald-400 text-xl">Espai i elements</h2>
          <p>
            Disposar d’un espai on es pugui utilitzar el terre per estirar-se. I I si pot ser, alguna màrfega o alguna
            mena de tatami prim.
          </p>
          <p>Coixins quadrats o rodons.</p>
          <p>Cadires.</p>
          <figure>
            <img className="w-full rounded-lg" src="/brots-terra.jpg" alt="" width={1310} height={873} />
            <figcaption></figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
