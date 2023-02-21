import { HomeHeader } from "./HomeHeader";

export default function HeroSection() {
  return (
    <div className="relative bg-white min-h-full">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full lg:max-w-2xl lg:min-h-screen">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>
          <HomeHeader />
          <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-amber-400 sm:text-6xl flex items-center">
                CALMA <span className="text-xl ml-6">Marianna Roige</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-amber-400">Yoga&amp;Meditació / Mindfulness / Educació</p>
              <div className="mt-10 prose prose-lg prose-indigo mx-auto text-gray-500">
                <p>
                  Calmar, calmar la respiració, calmar el teu ritme cardíac..., calmar els pensaments, les emocions...
                  experimentar serenor, tranquil·litat. Conquerir habilitats per relacionar-te, amb tu mateix i amb els
                  altres des de la comprensió.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full" src="calma-ma.jpg" alt="" />
      </div>
    </div>
  );
}
