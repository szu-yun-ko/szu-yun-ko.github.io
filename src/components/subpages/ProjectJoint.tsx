import React from 'react'
import { Link } from 'react-router-dom'

const ProjectJoint: React.FC = () => {
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
                JOINT: Join Optimization and Inference via Network Traversal
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-400" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8c30-4 60-4 90 0s60 4 90 0 60-4 90 0 60 4 90 0 60-4 90 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl mb-8 text-gray-700">
                Designed a multi-hop fuzzy join framework enabling entity matching and record-level fuzzy join across different RDBMSs.
                This project addresses the challenge of performing complex joins across heterogeneous database systems where traditional
                join operations are not feasible due to schema differences and data inconsistencies.
                <br/><br/>
                The JOINT framework provides an efficient solution for data integration tasks by leveraging network traversal algorithms
                and fuzzy matching techniques to identify and connect related records across multiple database systems.
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
                      <span className="font-semibold text-gray-900">Course:</span> Database Systems - From SQL to NoSQL
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
                    Data Warehouse
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Relational Database
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Entity Matching
                  </span>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    Fuzzy Joins
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    Network Traversal
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
                        Developed a multi-hop join framework that can traverse across different database systems and schemas.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Implemented fuzzy matching algorithms to handle data inconsistencies and schema variations across systems.
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
                        Created optimization algorithms to minimize query execution time and resource consumption.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Designed a flexible architecture that supports various RDBMS types including MySQL, PostgreSQL, and Oracle.
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
                        Architected the core framework design and implemented the multi-hop traversal algorithm.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Developed the fuzzy matching engine that handles entity resolution across heterogeneous databases.
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
                        Implemented query optimization techniques to improve performance and reduce computational overhead.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Conducted comprehensive testing and performance evaluation across multiple database systems.
                      </p>
                    </div>
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
                    <a href="https://doi.org/10.48550/arXiv.2509.07230" className="text-blue-600 hover:text-blue-800 font-medium text-lg">
                      Database Systems Spring 2025 Final Project Report (arXiv)
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

export default ProjectJoint

