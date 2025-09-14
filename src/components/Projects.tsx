import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Game-based Learning Platform with AI Integration",
      description: "We collaborated with Boyo Education Foundation to develop an Android App for children to learn through game-based learning.",
      cta: "View",
      coverImage: "/images/edu_app_cover.png",
      imageCrop: "object-[50%_50%] scale-110",
      date: "Spring 2025",
      course: "Introduction to Information Management (IM2008)",
      link: "/project-edu-app"
    },
    {
      title: "Camouflage Object Detection in Images with Deep Learning",
      description: "We designed a deep learning framework integrating ResNet18 with Multi-branch CNN and CBAM modules to detect the presence of camouflage objects in images.",
      cta: "View",
      coverImage: "/images/camo_cover.jpg",
      imageCrop: "object-[35%_70%] scale-120",
      date: "Spring 2025",
      course: "Deep Learning and its Applications (IM5062)",
      link: "/project-camouflage"
    },
    {
      title: "JOINT: Join Optimization and Inference via Network Traversal",
      description: "Designed a multi-hop fuzzy join framework enabling entity matching and record-level fuzzy join across different RDBMSs.",
      cta: "View",
      coverImage: "/images/joint_cover.png",
      imageCrop: "object-[0%_0%] scale-107",
      date: "Spring 2025",
      course: "Database Systems - From SQL to NoSQL (EE5178)",
      link: "/project-joint"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, projects.length - itemsPerView + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, projects.length - itemsPerView + 1)) % Math.max(1, projects.length - itemsPerView + 1))
  }

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Check out my recent <span className="relative font-reigo text-5xl md:text-6xl">
              Projects
              <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-x-hidden overflow-y-visible py-8">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {projects.map((project, index) => {
              const cardContent = (
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out h-full group cursor-pointer hover:bg-[#fee08b]">
                  {/* Top section with cover image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className={`w-full h-full object-cover ${project.imageCrop}`}
                    />
                  </div>

                  {/* Bottom section with content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                      {project.description}
                    </p>
                    
                    {/* Date and Course */}
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" clipRule="evenodd" />
                        </svg>
                        <span className="truncate">{project.course}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-primary-600 hover:text-primary-700 font-medium">
                        {project.cta} <span className="group-hover:translate-x-1 transition-transform duration-200 ease-in-out inline-block">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              );

              return (
                <div key={index} className="w-full flex-shrink-0 px-2" style={{ width: `${100 / itemsPerView}%` }}>
                  {project.link ? (
                    <Link to={project.link} className="block h-full">
                      {cardContent}
                    </Link>
                  ) : (
                    cardContent
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
