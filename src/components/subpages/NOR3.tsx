import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NOR3: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    '/images/nor3_content1.jpg',
    '/images/nor3_content2.jpg',
    '/images/nor3_content3.jpg',
    '/images/nor3_content4.jpg',
    '/images/nor3_content5.jpg'
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => Math.min(prev + 1, images.length - 2))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => Math.max(prev - 1, 0))
  }

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
                2021 NOR3 Research Competition
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8c30-4 60-4 90 0s60 4 90 0 60-4 90 0 60 4 90 0 60-4 90 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl mb-8 text-gray-700">
                The NOR3 Research Competition is held jointly by National Sun Yat-Sen University (NSYSU) and National Science and Technology Council.
                High school students can propose a research project at the Institude of Oceanography @ NSYSU, and selected projects would be granted an opportunity to conduct field sampling using the New Ocean Researcher 3 Vessel (R/V NOR3).
              </p>

              {/* Event Details */}
              <div className="mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 text-gray-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">Location:</span> National Sun Yat-Sen University
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 text-gray-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">Date:</span> October2021
                    </p>
                  </div>
                </div>
              </div>

              {/* Topics Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  <span className="relative font-reigo text-4xl">
                    Topics
                    <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                      <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h2>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Research Competition
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Field Sampling
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Research Vessel
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Oceanography
                  </span>
                </div>
              </div>

              {/* Research Context Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  <span className="relative font-reigo text-4xl">
                    Research Context
                    <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                      <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    I proposed a project to sample benthic organisms in three different submarine canyons in SW Taiwan. 
                    These canyons are morphologically distinct, and each possess unique physical and ecological characteristics.
                    Previous morphological studies have classified these canyons into different categories, and I wanted to explore whether they possess significantly different community structures. 
                  </p>
                </div>
              </div>

              {/* Gallery Section */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    <span className="relative font-reigo text-4xl">
                      Gallery
                      <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                        <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevImage}
                      className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                      disabled={currentImageIndex === 0}
                    >
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                      disabled={currentImageIndex >= images.length - 2}
                    >
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 50}%)` }}
                  >
                    {images.map((image, index) => (
                      <div key={index} className="w-1/2 flex-shrink-0">
                        <div className="relative h-64 bg-gray-100 mx-1">
                          <img
                            src={image}
                            alt={`NOR3 Research Competition ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  <span className="relative font-reigo text-4xl">
                    Links
                    <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                      <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 text-gray-600 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <a href="https://or3mic.nsysu.edu.tw/p/412-1304-21749.php?Lang=zh-tw" className="text-blue-600 hover:text-blue-800 font-medium text-lg">
                      第二屆航向新時代-國立中山大學新海研3號海洋科學研究計畫競賽
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NOR3
