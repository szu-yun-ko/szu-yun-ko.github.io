import React, { useState } from 'react'

const Ongoing: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 2

  const nextSlide = () => {
    const maxIndex = Math.max(0, ongoingActivities.length - itemsPerView)
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const ongoingActivities = [
    {
      id: 1,
      title: "TA for Programming Design (IM1003) during the Fall 2025 semester",
      description: "Programming Design is an introductory programming course for first-year students in Information Management at NTU. This course is lectured by Prof. Ling-Chieh Kung. I'm responsible for assisting students in-class (Class 01) and occasionally at office hours.",
      status: "In Progress", 
      startDate: "2025-09",
      current: true
    },
    {
      id: 2,
      title: "Summer Intern at the International Program of Climate Change and Sustainable Development (IPCS) at NTU",
      description: "Developing a climate indices toolkit for easy extraction and computation from Earth System Models/General Circulation Models (ESMs/GCMs). Under Prof. Chih-Lin Wei's supervision, our toolkit will include bias correction, statistical downscaling, indices computation, trajectory visualization, and time series analysis. This will provide convenient access to climate indicators such as climate velocity, time of emergence, and climate hazards.",
      status: "In Progress",
      startDate: "2025-06",
      current: true
    },
    {
      id: 3,
      title: "Paper under revision",
      description: "Currently working with Prof. Chih-Lin Wei to publish a journal paper that expands our previous research on ecosystem drivers in high-energy environments with new data and analyses.",
      status: "In Progress",
      startDate: "2025-06",
      current: true
    },
    {
      id: 4,
      title: "Course development for Linux System Administration Practice (IM3014)",
      description: "As part of my service learning credit, I assisted the course development of LSAP – a new course at NTU’s IM department launching in Fall 2025. I designed course materials for Shell Scripting (Ch7) and User Management (Ch8) under Prof. Hsin-Min Lu's supervision, including lecture slides, homework assignments, and lab exercises.",
      status: "Completed",
      startDate: "2025-02",
      current: false
    },
    {
      id: 5,
      title: "Joined the administration team for the 2025 PDAO Contest",
      description: "I was invited to design one of the 14 problems in the contest, particularly for the Data Structure topic.",
      status: "Completed",
      startDate: "2025-02",
      current: false
    }
  ]

  return (
    <section id="ongoing" className="section-padding bg-white">
      <div className="container-max">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="relative font-reigo text-5xl md:text-6xl">
              Ongoing
              <svg className="absolute -bottom-0.5 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span> now
          </h2>
          
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Timeline */}
        <div className="relative overflow-hidden h-96">
          {/* Vertical timeline line */}
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gray-300 z-0"></div>
          
          <div 
            className="flex flex-col transition-transform duration-300 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * 240}px)` }}
          >
            {ongoingActivities.map((activity) => (
              <div key={activity.id} className="w-full flex-shrink-0 mb-8 min-h-48">
                <div className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-8 h-8 rounded-full border-4 border-white shadow-lg z-10 ${
                    activity.current ? 'bg-yellow-400' : 'bg-gray-400'
                  }`}></div>
                  
                  {/* Content */}
                  <div className={`ml-20 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow w-full ${
                    activity.status === 'In Progress' ? 'bg-yellow-50' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 pr-4">{activity.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                        activity.status === 'In Progress' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed break-words">
                      {activity.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Started {activity.startDate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ongoing
