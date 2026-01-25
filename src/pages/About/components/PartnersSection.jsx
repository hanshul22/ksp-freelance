import {
  OtherClient1,
  OtherClient2,
  OtherClient3,
  OtherClient4,
  OtherClient5,
} from '@/assets';

const PartnersSection = () => {
  const partners = [
    { src: OtherClient1, alt: 'Grundfos' },
    { src: OtherClient2, alt: 'Dow' },
    { src: OtherClient3, alt: 'GE' },
    { src: OtherClient4, alt: 'Siemens' },
    { src: OtherClient5, alt: 'Pentair' },
  ];

  return (
    <section className="relative w-full px-4 py-16 mt-20 overflow-hidden md:px-8 md:py-20">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
            Technology & Support Partners
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed md:text-lg text-slate-500">
            Collaborating with global leaders to deliver cutting-edge water treatment solutions
          </p>
        </div>

        {/* Partner Logo Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-5 shadow-sm w-[140px] h-[110px] md:w-[160px] md:h-[120px] flex items-center justify-center border border-slate-100"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="object-contain w-full h-full max-w-[120px] max-h-[80px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
