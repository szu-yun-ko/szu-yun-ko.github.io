import React, { useState } from 'react'

const Events: React.FC = () => {
  const events = [
    {
      title: "2025 Programming Design and Optimization (PDAO)",
      description:  "A programming contest hosted by the department of IM @ NTU with over 80 participating teams and 200+ participants.",
      cta: "View",
      bgColor: "bg-gray-200",
      accentColor: "bg-gray-200",
      icon: "💻",
      link: "/pdao",
      coverImage: "/images/pdao_cover.jpg",
      imageCrop: "object-[100%_130%] scale-150",
      location: "National Taiwan University, Taipei",
      date: "April 2025"
    },
    {
      title: "2023 Ministry of Education – School Actualization Forum",
      description: "Gave a talk on self-directed learning under the new 108-Curriculum Guidelines in front of educators and students from 40+ schools.",
      cta: "View",
      bgColor: "bg-gray-200",
      accentColor: "bg-gray-200",
      icon: "🎓",
      link: "/edu-forum",
      coverImage: "/images/edu_forum_cover.jpg",
      imageCrop: "object-[35%_50%] scale-150",
      location: "NTUH International Convention Center",
      date: "December 2023"
    },
    {
      title: "2023 Regeneron International Science and Engineering Fair",
      description: "The world's largest international pre-college science competition with 1,800+ high school students from more than 80 countries.",
      cta: "View",
      bgColor: "bg-gray-200",
      accentColor: "bg-gray-200",
      icon: "🔬",
      link: "/isef",
      coverImage: "/images/isef_cover.jpg",
      imageCrop: "object-[20%_80%] scale-145",
      location: "Dallas, Texas, USA",
      date: "May 2023"
    },
    {
      title: "2023 Taiwan International Science Fair (TISF)",
      description: "Each year, NTSEC selects winning students from different categories in TISF to represent Taiwan at various International Science Fairs.",
      cta: "View",
      bgColor: "bg-gray-200",
      accentColor: "bg-gray-200",
      icon: "🏆",
      link: "/tisf",
      coverImage: "/images/tisf_cover.jpg",
      imageCrop: "object-[10%_50%]",
      location: "National Taiwan Science Education Center, Taipei",
      date: "February 2023"
    },
    {
      title: "2021 NSTC & NSYSU – NOR3 Ocean Research Competition",
      description: "Proposed a research project and granted an opportunity to conduct field sampling using the NOR3 Research Vessel.",
      cta: "View",
      bgColor: "bg-gray-200",
      accentColor: "bg-gray-200",
      icon: "💡",
      link: "/nor3",
      coverImage: "/images/nor3_cover.jpg",
      imageCrop: "object-[35%_90%]",
      location: "National Sun Yat-Sen University, Kaohsiung",
      date: "October 2021"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, events.length - itemsPerView + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, events.length - itemsPerView + 1)) % Math.max(1, events.length - itemsPerView + 1))
  }

  return (
    <section id="events" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="relative font-reigo text-5xl md:text-6xl">
              Events
              <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span> I've joined
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
            {events.map((event, index) => {
              const cardContent = (
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out h-full group cursor-pointer hover:bg-[#fee08b]">
                  {/* Top section with colored background or cover image */}
                  <div className={`${event.bgColor} relative h-48 overflow-hidden`}>
                    {event.coverImage ? (
                      <img 
                        src={event.coverImage} 
                        alt={event.title}
                        className={`w-full h-full object-cover ${event.imageCrop}`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-6xl">{event.icon}</div>
                      </div>
                    )}
                  </div>
                  
                  {/* Bottom section with content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                      {event.description}
                    </p>
                    
                    {/* Location and Date */}
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-primary-600 hover:text-primary-700 font-medium">
                        {event.cta} →
                      </button>
                    </div>
                  </div>
                </div>
              );

              return (
                <div key={index} className="w-full flex-shrink-0 px-2" style={{ width: `${100 / itemsPerView}%` }}>
                  {event.link ? (
                    <a href={event.link} className="block h-full">
                      {cardContent}
                    </a>
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

export default Events
