import { Settings, CalendarCheck, Activity, HeadphonesIcon, CheckCircle, Clock, TrendingUp, Shield, RefreshCw } from 'lucide-react';

const OperationMaintenanceSection = () => {
  const primaryCards = [
    {
      icon: CalendarCheck,
      title: "Annual Maintenance Contracts (AMC)",
      description: "Comprehensive maintenance plans to keep your systems running at peak efficiency throughout the year.",
      items: [
        "Scheduled preventive maintenance",
        "Priority service response",
        "Spare parts availability",
        "Annual system health checks"
      ]
    },
    {
      icon: Activity,
      title: "Performance Monitoring",
      description: "Continuous monitoring and optimization of system performance to ensure consistent water quality and efficiency.",
      items: [
        "Remote monitoring systems",
        "Performance analytics",
        "Efficiency optimization",
        "Quality compliance tracking"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "Long-term Support",
      description: "24/7 technical support and expert assistance for any operational challenges or system upgrades.",
      items: [
        "24/7 helpline support",
        "Emergency breakdown service",
        "System upgrades consultation",
        "Spare parts supply"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Extended Life",
      description: "Prolong system lifespan"
    },
    {
      icon: RefreshCw,
      title: "Peak Performance",
      description: "Optimal efficiency always"
    },
    {
      icon: Clock,
      title: "Reduced Downtime",
      description: "Minimize interruptions"
    },
    {
      icon: Settings,
      title: "Cost Savings",
      description: "Prevent major repairs"
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="container px-4 mx-auto lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center justify-center mb-6 w-14 h-14 bg-emerald-500 rounded-xl">
            <Settings className="text-white w-7 h-7" />
          </div>
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-slate-900">
            Operation & Maintenance
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
            Comprehensive support services to keep your systems running efficiently for years to come
          </p>
        </div>

        {/* Primary Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {primaryCards.map((card, index) => (
            <div 
              key={index}
              className="p-6 bg-white shadow-lg rounded-2xl lg:p-8"
            >
              <div 
                className="flex items-center justify-center w-12 h-12 mb-5 rounded-xl"
                style={{ background: 'linear-gradient(180deg, #00A63E 0%, #155DFC 100%)' }}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {card.title}
              </h3>
              
              <p className="mb-5 leading-relaxed text-gray-500">
                {card.description}
              </p>
              
              <p className="mb-3 text-sm font-semibold text-slate-900">
                Includes:
              </p>
              
              <ul className="space-y-2">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AMC Benefits Section */}
        <div className="p-8 shadow-sm bg-gray-50 rounded-2xl lg:p-12">
          <h3 className="mb-10 text-2xl font-bold text-center text-slate-900">
            AMC Benefits
          </h3>
          
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div 
                  className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl"
                  style={{ background: 'linear-gradient(180deg, #00A63E 0%, #155DFC 100%)' }}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-1 font-semibold text-slate-900">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationMaintenanceSection;
