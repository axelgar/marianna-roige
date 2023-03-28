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
        <img className="object-cover lg:rounded-lg lg:w-full max-h-[600px]" src="calma-ma-2.jpg" alt="" />
        <div className="mx-auto max-w-7xl absolute z-10 top-0">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative py-20 px-6 sm:py-40 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <p className="text-2xl text-white ">Marianna Roigé</p>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-8xl flex items-center">CALMA</h1>
                <p className="mt-6 text-sm lg:text-xl leading-8 text-white">
                  Yoga&amp;Meditació / Mindfulness / Educació
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 prose prose-lg prose-indigo mx-auto text-gray-500">
        <p className="px-4 lg:px-0 lg:text-2xl">
          Calmar, calmar la respiració, calmar el teu ritme cardíac..., calmar els pensaments, les emocions...
          experimentar serenor, tranquil·litat. Conquerir habilitats per relacionar-te, amb tu mateix i amb els altres
          des de la comprensió.
        </p>
      </div>
    </div>
  );
}
