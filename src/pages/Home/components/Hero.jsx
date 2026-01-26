import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { waterDrop } from '@/assets';

const Hero = () => {
  return (

    <section className="relative min-h-screen md:min-h-[95vh]" >
      {/* Background Wave Decoration - Desktop */}
      <div className="absolute inset-0 z-0 hidden pointer-events-none md:block">
        <svg
          className="w-full "
          height='820'
          preserveAspectRatio="none"
          viewBox="0 0 1351 897"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0V241.078C71.5556 139.325 187.428 133.063 242.233 142.455C297.037 151.848 356.539 109.581 359.671 84.534C373.45 16.9068 404.036 0 417.607 0H1350.85C1358.37 269.256 1353.98 362.661 1350.85 375.707C1334.57 464.624 1249.07 555.733 1208.36 590.172C1146.77 636.092 997.909 713.843 895.189 657.487C792.47 601.131 719.815 654.878 696.327 688.796C598.619 851.602 448.924 817.162 386.29 779.592C163.314 675.646 27.19 814.553 0 897V0Z" fill="#EFFAFE" />
        </svg>
      </div>

      {/* Background Wave Decoration - Mobile */}
      <div className="absolute inset-0 z-0 block pointer-events-none md:hidden mt-24" style={{ backgroundColor: '#FFFFFF' }}>
        <svg

          className="absolute top-0 left-0 w-full h-auto"
          viewBox="0 0 375 400"

          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin slice"
        >
          <path d="M109.455 330.925C48.3317 302.527 11.017 340.476 0 363L0.857977 65.8611C23.1781 38.0626 54.9414 36.3519 69.9646 38.9179C84.9877 41.4839 101.299 29.9369 102.157 23.0942C105.934 4.61883 114.319 0 118.039 0H373.862C375.923 73.5592 374.721 217.022 373.862 220.586C369.398 244.878 345.962 269.768 334.802 279.177C317.919 291.722 277.113 312.963 248.955 297.566C220.798 282.17 200.881 296.854 194.443 306.12C167.659 350.598 126.624 341.189 109.455 330.925Z" fill="#EFFAFE" />
        </svg>
      </div>



      {/* Main Content */}
      <div className="relative px-5 pt-24 pb-12 mx-auto md:pt-48 max-w-7xl md:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:gap-12 lg:gap-20">

          {/* Left Content - Text Block */}
          <div className="w-full text-center space-y-7 md:w-1/2 md:text-left">
            <h1 className="text-[2.25rem] leading-tight md:text-5xl lg:text-[3.25rem] font-bold tracking-tight">
              <span className="block mb-1 text-gray-900">Transforming Water</span>
              <span className="block py-3 bg-clip-text text-transparent bg-gradient-to-r from-[#155DFC] via-[#00B8DB] to-[#00C950]">Enhancing Lives</span>
            </h1>

            <p className="max-w-[700px] mx-auto text-xl md:text-lg leading-relaxed text-gray-500 md:mx-0">
              We design and deliver reliable, cost-effective, and sustainable water and wastewater solutions for governments, industries, institutions, and organization.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3.5 pt-2 md:flex-row">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1D4ED8] to-[#0EA5E9] text-white px-8 py-4 rounded-xl text-[15px] font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl w-full md:w-auto"
              >
                Explore Our Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1D4ED8] px-8 py-4 rounded-xl text-[15px] font-semibold border-2 border-[#1D4ED8] hover:bg-blue-50 transition-all w-full md:w-auto"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>

          {/* Right Content - Water Drop Illustration */}
          <div className="relative flex items-center justify-center w-full md:w-1/2">
            <div className="relative w-full max-w-[200px] md:max-w-[340px]">
              {/* Soft Glow Behind Droplet */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-60"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(14, 165, 233, 0.15) 50%, transparent 70%)',
                  transform: 'scale(1.1)',
                }}
              />

              {/* Water Droplet Image */}
              <div className="relative flex items-center justify-center w-full p-6 aspect-square">
                <img
                  src={waterDrop}
                  alt="Water Droplet"
                  className="object-contain w-full h-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>




        {/* Trust Indicators Row */}
        <div className="pt-6 pb-0  md:pt-8 md:mt-12 lg:mt-40 md:pb-8">
          <div className="flex flex-wrap items-center justify-center text-center gap-x-8 gap-y-3">
            <div className="flex items-center justify-center gap-3">
              <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-[12px] md:text-xl font-medium text-gray-500">ISO Certified</span>
            </div>

            <div className="flex items-center justify-center gap-3">`
              <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-[12px] md:text-xl font-medium text-gray-500">20+ Years Experience</span>
            </div>

            <div className="flex items-center justify-center gap-3">`
              <div className="flex-shrink-0 w-3 h-3 rounded-full bg-cyan-500" />
              <span className="text-[12px] md:text-xl font-medium text-gray-500">500+ Projects Delivered</span>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
