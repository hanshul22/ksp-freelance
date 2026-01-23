import clientlogo1 from '@/assets/images/clientlogo1.png';
import clientlogo2 from '@/assets/images/clientlogo2.png';
import clientlogo3 from '@/assets/images/clientlogo3.png';
import clientlogo4 from '@/assets/images/clientlogo4.png';
import clientlogo5 from '@/assets/images/clientlogo5.png';
import clientlogo6 from '@/assets/images/clientlogo6.png';

const ClientsSection = () => {
  return (
    <section className="relative w-full px-4 py-16 overflow-hidden md:px-8 md:py-20">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
            Our Esteemed Clients
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed md:text-lg text-slate-500">
            Trusted by industry leaders across multiple sectors for reliable and sustainable water solutions
          </p>
        </div>

        {/* Client Logo Grid - Row 1 */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo1} alt="ITC Limited" className="object-contain max-w-full max-h-full" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo2} alt="Tata Realty" className="object-contain max-w-full max-h-full" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo3} alt="Mankind" className="object-contain max-w-full max-h-full" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo4} alt="NIMS University" className="object-contain max-w-full max-h-full" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo5} alt="Marriott" className="object-contain max-w-full max-h-full" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo6} alt="The Lalit" className="object-contain max-w-full max-h-full" />
          </div>
        </div>

        {/* Client Logo Grid - Row 2 */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo6} alt="The Lalit" className="object-contain max-w-full max-h-full" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo5} alt="Marriott" className="object-contain max-w-full max-h-full" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo4} alt="NIMS University" className="object-contain max-w-full max-h-full" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo2} alt="Tata Realty" className="object-contain max-w-full max-h-full" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo1} alt="ITC Limited" className="object-contain max-w-full max-h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
