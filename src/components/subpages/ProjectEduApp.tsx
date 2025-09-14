import React from 'react'
import { Link } from 'react-router-dom'

const ProjectEduApp: React.FC = () => {
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
                Game-based Learning Platform with AI Integration
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8c30-4 60-4 90 0s60 4 90 0 60-4 90 0 60 4 90 0 60-4 90 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl mb-8 text-gray-700">
                We collaborated with Boyo Education Foundation to develop an Android App for children to learn through game-based learning.
                This project focused on creating an engaging educational platform that combines artificial intelligence with interactive gaming elements
                to enhance learning outcomes for young students.
                <br/><br/>
                The application integrates machine learning algorithms to personalize the learning experience, adapting to each child's pace and 
                learning style while maintaining the fun and engaging aspects of game-based education.
                <br/><br/>
                The interactive game is designed like a Kahoot Game, allowing students to collaborate with teammates to solve problems.
                The main issue we identified with the Kahoot format is that it doesn't collect individual student performance data, all performance metrics are evaluated on a team-basis. 
                Therefore, we designed a game mode where each student of the team is assigned to a different problem, but they will play on the same device, enabling collaboration while collecting individual data. 
                <br/><br/>
                We then integrated student performance data with a Teacher's Dashboard to monitor the progress of each student. 
                The AI Integration not only provides encouragements and guidance to students, but can also assist teachers in problem design and assignment. 
                <br/><br/>
                This app has been deployed and transferred to Boyo Education Foundation, which they will soon begin testing in classrooms. 
              </p>

              {/* Project Details */}
              <div className="mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 text-gray-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">Date:</span> Spring 2025
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 text-gray-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">Course:</span> Introduction to Information Management
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
                    Mobile Development
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Kotlin
                  </span>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    Game-based Learning
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    Educational Technology
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    AI Integration
                  </span>
                </div>
              </div>

              {/* Project Details Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  <span className="relative font-reigo text-4xl">
                    Project Details
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
                        Developed an Android application integrating AI Chatbot, an interactive collaborative game, and a teacher's classroom management dashboard.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Collaborated with Boyo Education Foundation to tailor the app to the needs of elementary students in rural regions.
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
                        Interviewed Prof. Tsui-Chun Hu from the Dept. of Education at NTNU to design the interactive game component. 
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Experimented with different AI models and prompts to tailor the chatbot's responses to provide guidance but not direct solutions.                     
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* My Contribution Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  <span className="relative font-reigo text-4xl">
                    My Contribution
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
                        Topic formation, system design and architecture.
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
                        Database design and dashboard development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Image Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  <span className="relative font-reigo text-4xl">
                    App Framework
                    <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                      <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h2>
                <div className="flex justify-center">
                  <div className="relative max-w-4xl w-full">
                    <img
                      src="/images/project_eduapp.png"
                      alt="Educational App Project Screenshots"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
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

export default ProjectEduApp

