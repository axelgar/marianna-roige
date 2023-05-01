import { HomeHeader } from "./HomeHeader";

export default function HeroSection() {
  return (
    <div className="relative bg-white min-h-full">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full">
          <HomeHeader />
        </div>
      </div>

      <div className="bg-gray-50 lg:max-w-7xl lg:mx-auto mt-16 overflow-hidden relative ">
        <img className="object-cover lg:rounded-lg lg:w-full max-h-[800px]" src="calma-ma-3.jpg" alt="" />
        <div className="mx-auto max-w-7xl absolute z-10 top-0">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative p-6 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-2xl text-white ">Marianna Roigé</h1>
                <h3 className="text-4xl font-bold tracking-tight text-white sm:text-8xl flex items-center">CALMA</h3>
                <h2 className="text-sm lg:text-xl leading-8 text-white" style={{ wordSpacing: 10 }}>
                  Ioga&amp;Meditació / Mindfulness / Educació / Creativitat
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl absolute z-10 bottom-0 p-6">
          <h1 className="text-sm lg:text-xl font-bold tracking-tight text-violet-200 sm:text-8xl flex items-center">
            UN ALTRE MÓN ÉS POSSIBLE
          </h1>
        </div>
      </div>

      <div className="mt-10 prose prose-lg prose-indigo mx-auto text-gray-500">
        <p className="px-4 lg:px-0 lg:text-2xl">
          Calmar, calmar la respiració, calmar el teu ritme cardíac, calmar els pensaments, les emocions...
          <br />
          Experimentar serenor, tranquil·litat. Conquerir habilitats per sentir-te i relacionar-te des de la comprensió.
        </p>
      </div>
    </div>
  );
}
