import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

const WhyWorkWithUsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Purpose-Driven Work",
      description: "Work on real-world water and wastewater projects that create lasting environmental and social impact.",
      iconBgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      icon: Lightbulb,
      title: "Hands-On Learning",
      description: "Gain practical exposure across engineering, operations, project execution, and on-ground implementation.",
      iconBgColor: "bg-emerald-50",
      iconColor: "text-emerald-500"
    },
    {
      icon: Users,
      title: "People-First Environment",
      description: "We value integrity, collaboration, and accountability over hierarchy.",
      iconBgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Long-Term Growth",
      description: "We invest in people who want to build careers, not just complete assignments.",
      iconBgColor: "bg-emerald-50",
      iconColor: "text-emerald-500"
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden" style={{ backgroundColor: '#EFFAFE' }}>
      {/* Background Curved Shape - Desktop */}
      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <svg
          className="absolute top-0 right-0 h-full"
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path
            d="M400 0V600C350 580 280 520 250 450C220 380 200 300 220 220C240 140 300 80 350 40C380 15 400 0 400 0Z"
            fill="#D5F5E3"
            fillOpacity="0.6"
          />
        </svg>
      </div>

      {/* Background Curved Shape - Mobile */}
      <div className="absolute inset-0 block md:hidden pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-full h-full"
          viewBox="0 0 375 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMin slice"
        >
          <path
            d="M375 0C375 0 360 50 340 100C300 200 320 350 350 500C370 600 375 700 375 800V0Z"
            fill="#D5F5E3"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      <div className="container relative z-10 px-4 mx-auto lg:px-8">
        {/* Section Heading */}
        <h2 className="mb-10 text-2xl font-bold text-center md:text-3xl lg:text-4xl text-slate-900 md:mb-12">
          Why Work With KSP Hydro
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
            >
              {/* Icon Container */}
              <div className="flex justify-center md:justify-start mb-4">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${benefit.iconBgColor} flex items-center justify-center`}>
                  <benefit.icon className={`w-6 h-6 md:w-7 md:h-7 ${benefit.iconColor}`} />
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-bold text-center md:text-left md:text-xl text-slate-900">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-center md:text-left md:text-base text-gray-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
