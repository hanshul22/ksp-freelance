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
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center mb-6">
            <Settings className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Operation & Maintenance
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Comprehensive support services to keep your systems running efficiently for years to come
          </p>
        </div>

        {/* Primary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {primaryCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 lg:p-8"
            >
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {card.title}
              </h3>
              
              <p className="text-gray-500 mb-5 leading-relaxed">
                {card.description}
              </p>
              
              <p className="text-sm font-semibold text-slate-900 mb-3">
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
        <div className="bg-gray-50 rounded-2xl shadow-sm p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">
            AMC Benefits
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">
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
