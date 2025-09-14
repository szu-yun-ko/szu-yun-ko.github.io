import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Hey, I'm <span className="relative font-reigo text-5xl md:text-6xl">
                Szu-Yun
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>!
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-lg mb-6">
                I'm an undergraduate majoring in Information Management @ NTU. <br/>
                I'm interested in using information technology to facilitate scientific research, 
                and also applying data science to understand complex systems. 
              </p>
              
              {/* Know more about me link */}
              <div className="mt-8">
                <a 
                  href="/about-me" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg group"
                >
                  Know more about me <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200 ease-in-out inline-block">→</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right side - Circular image with decorations */}
          <div className="relative flex justify-center items-center">
            {/* Main circular image */}
            <div className="relative w-52 h-52 rounded-full overflow-hidden bg-yellow-200 shadow-lg z-10">
              <img 
                src="/images/about_me.jpg" 
                alt="About Szu-Yun" 
                className="w-full h-full object-cover"
                style={{ 
                  transform: 'scale(1.2)',
                  objectPosition: 'center top'
                }}
              />
              
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
