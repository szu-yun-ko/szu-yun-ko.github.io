import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="py-6 border-b border-gray-200">
        <div className="container-max flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 font-reigo">Szu-Yun's Website</h1>
          <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </header>
      <main className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <span className="relative font-reigo text-5xl md:text-6xl">
                About Me
                <svg className="absolute -bottom-0.5 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl mb-8 text-gray-700">
              I'm an undergraduate majoring in Information Management @ NTU.
              I'm interested in using information technology to facilitate scientific research, and also applying data science to understand complex systems.
              </p>

              {/* Quick Facts Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  <span className="relative font-reigo text-4xl">
                    Quick Facts
                    <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                      <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        I graduated from Taipei First Girls' High School in 2023, and I'm currently a junior student at NTU IM. 
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        I lived in Hawaii for two years during elementary school, which is where I developed an interest in Earth Sciences, particularly Oceanography. 
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Since high school, I joined Prof. Chih-Lin Wei's lab at the Institute of Oceanography, NTU (IONTU). This is my fifth year at the lab.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        At IONTU, I used statistical modeling methods to understand dynamic environments in the ocean. Which led me to develop an interest in data and information sciences.
                      </p>
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Interested in the application of data science in different fields, I decided to major in IM.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        At NTU IM, I had the opportunity to learn about system design and development, and also had a few hands-on experience.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        In 2025 Spring, we developed a game-based learning platform for students at Boyo Education Foundation. This was my first real-world system development experience, it was fun!
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Currently, my focus is on developing systems to facilitate scientific research, a blend of my studies at IM and my previous research experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <span className="relative font-reigo text-4xl">
                  Courses
                  <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="text-3xl font-bold text-gray-900"> I'm taking</span>
              </h2>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Information Retrieval and Text Mining (IM5030)
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                 Web Programming (EE3035)
                </span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Database Management (IM3008)
                </span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Computer Networks and Applications (IM3010)
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Investments (Fin2008)
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <span className="relative font-reigo text-4xl">
                  Contacts
                  <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">University Email</h3>
                  <a href="mailto:b12705066@ntu.edu.tw" className="text-blue-600 hover:text-blue-800 font-medium text-sm break-all">
                    b12705066@ntu.edu.tw
                  </a>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Email</h3>
                  <a href="mailto:szuyun@ntu.im" className="text-blue-600 hover:text-blue-800 font-medium text-sm break-all">
                    szuyun@ntu.im
                  </a>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
                  <a href="https://github.com/szu-yun-ko" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    github.com/szu-yun-ko
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-8">
                <p className="text-sm text-gray-600 text-left">
                  <strong>Note:</strong> Please use my university email (b12705066@ntu.edu.tw) for official communications. 
                  But if you need a faster response for urgent matters, please use my personal email (szuyun@ntu.im), I check this mailbox more often!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutMe
