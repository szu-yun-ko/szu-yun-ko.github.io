import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ISEF: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    '/images/isef_content1.jpg',
    '/images/isef_content2.jpg',
    '/images/isef_content3.jpg',
    '/images/isef_content4.jpg',
    '/images/isef_content5.jpg',
    '/images/isef_content6.jpg',
    '/images/isef_content7.jpg'
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
                2023 International Science and Engineering Fair
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8c30-4 60-4 90 0s60 4 90 0 60-4 90 0 60 4 90 0 60-4 90 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl mb-8 text-gray-700">
                The International Science and Engineering Fair (ISEF) is the world's largest international 
                pre-college science competition, bringing together over 1,800 high school students from 
                more than 80 countries. 
                <br/><br/>
                In 2023, I represented Taiwan to compete in ISEF under the category of Earth and Environmental Science (EAEV).
                My research topic was "Physical Disturbances Affect Food Availability to Shape Benthic Community Structure in Submarine Canyons". 
                In past studies, it is well established that physical disturbances (mortality inducing events; e.g., strong currents) and food availability (resources) are two major drivers of community structure. 
                But how much influence each driver has on the community structure is still unclear. Do one factor dominate the other? Do they exert equal influence? 
                <br/><br/>
                To understand this, I deployed statistical modeling techniques (e.g., PCA/LDA, redundancy analysis, sturctural equation modeling...etc.) to analyze data collected in two submarine canyons around Taiwan. 
                Contrary to past theories, which considers physical disturbances and food availability as two independent drivers with equal influence, my study found that they are closely related. 
                Physical disturbance can directly influence food availability, thereby becoming the dominant driver of community structure. 
                With this finding, I won the <strong>Third Place Grand Award</strong> in the<strong> Earth and Environmental Science</strong> category. 
                <br/><br/>
                Continuing my research, I'm recently working with Prof. Chih-Lin Wei from the Institute of Oceanography (IONTU) to publish a paper on this topic.
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
                      <span className="font-semibold text-gray-900">Location:</span> Dallas, Texas, USA
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 text-gray-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">Date:</span> May 2023
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
                    Earth and Environmental Science
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Oceanography
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    Grand Award
                  </span>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    Statistical Modeling
                  </span>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    Field Sampling
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
                    In past studies, researchers have believed that submarine canyons are typically ecological hotspots, meaning that they possess higher biodiversity and abundance compared to external environments. 
                    However, my study found that this is not always the case.
                    <br/><br/>
                    Two major drivers influence whether a canyon is an ecological hotspot or not: physical disturbances and food availability.
                    Interestingly, we found that physical disturbances (e.g., bottom currents and turbidity flows) can alter the distribution of food supplies.
                    In high-energy environments, strong disturbances flush away fine particles carrying food supplies. 
                    <br/><br/>
                    Therefore, communities in high-energy regions are not only more vulnerable to physiological stress imposed by the disturbances, but also receive less food supplies compared to other regions.
                    In the past, conceptual models have not considered the influence of physical disturbances on food availability.
                    My study provided a new perspective on modeling community structure in high-energy marine environments. 
                    <br/><br/>
                    Under climate change, high-energy regions will become more common as episodic disturbance events (e.g., storms, cyclones...etc.) become more frequent. 
                    My study can potentially help us understand how community structure will respond to these changes in the future.
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
                            alt={`ISEF Event ${index + 1}`}
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
                    <a href="https://www.societyforscience.org/isef/" className="text-blue-600 hover:text-blue-800 font-medium text-lg">
                      Regeneron International Science and Engineering Fair – A Program of Society for Science
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 text-gray-600 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <a href="https://www.societyforscience.org/press-release/regeneron-isef-full-awards-2023/" className="text-blue-600 hover:text-blue-800 font-medium text-lg">
                    Full Awards: High school scientists win nearly $9M at Regeneron International Science and Engineering Fair
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 text-gray-600 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <a href="https://isef.net/project/eaev029-physical-disturbances-shape-canyon-community?fbclid=PAQ0xDSwMISb9leHRuA2FlbQIxMQABp3NtANHnfWjhRW48vnXpQlurPLhqgz1tpkc6wde2GGSD24y0QSSrSlaUqloQ_aem_f3LRQfVUqLF_QWb4FmsVHg" className="text-blue-600 hover:text-blue-800 font-medium text-lg">
                      2023 ISEF Project Board (EAEV029) – Physical Disturbances Shape Canyon Community
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

export default ISEF
