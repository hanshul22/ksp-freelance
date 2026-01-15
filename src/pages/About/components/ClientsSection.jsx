import clientlogo1 from '@/assets/images/clientlogo1.png';
import clientlogo2 from '@/assets/images/clientlogo2.png';
import clientlogo3 from '@/assets/images/clientlogo3.png';
import clientlogo4 from '@/assets/images/clientlogo4.png';
import clientlogo5 from '@/assets/images/clientlogo5.png';
import clientlogo6 from '@/assets/images/clientlogo6.png';

const ClientsSection = () => {
  return (
    <section className="w-full py-20 px-6 relative overflow-hidden" style={{ backgroundColor: '#ECFDF5' }}>
      {/* Soft abstract curved shapes */}
      <div 
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-40"
        style={{ 
          background: 'radial-gradient(circle, #d1fae5 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-35"
        style={{ 
          background: 'radial-gradient(circle, #d1fae5 0%, transparent 70%)',
          transform: 'translate(30%, 30%)'
        }}
      />
      <div 
        className="absolute top-1/2 right-20 w-80 h-80 rounded-full opacity-25"
        style={{ 
          background: 'radial-gradient(circle, #a7f3d0 0%, transparent 70%)',
          transform: 'translateY(-50%)'
        }}
      />
      <div 
        className="absolute top-20 left-1/3 w-64 h-64 rounded-full opacity-20"
        style={{ 
          background: 'radial-gradient(circle, #a7f3d0 0%, transparent 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Esteemed Clients
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Trusted by industry leaders across multiple sectors for reliable and sustainable water solutions
          </p>
        </div>

        {/* Client Logo Grid - Row 1 */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo1} alt="ITC Limited" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo2} alt="Tata Realty" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo3} alt="Mankind" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo4} alt="NIMS University" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo5} alt="Marriott" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo6} alt="The Lalit" className="max-w-full max-h-full object-contain" />
          </div>
        </div>

        {/* Client Logo Grid - Row 2 */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo6} alt="The Lalit" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo5} alt="Marriott" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo4} alt="NIMS University" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo2} alt="Tata Realty" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
            <img src={clientlogo1} alt="ITC Limited" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
