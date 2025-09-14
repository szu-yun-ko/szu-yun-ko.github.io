import React from 'react'

const Media: React.FC = () => {
  const mediaCoverage = [
    {
      id: 1,
      title: "2023年美國國際科技展覽會 臺灣學生在德州為國爭光",
      source: "教育部全球資訊網",
      date: "2023-05-24",
      url: "https://depart.moe.edu.tw/HOU/News_Content.aspx?n=6CF92EB9D9665550&sms=9C0AEF5146AB56C6&s=C9460503A89ADB20",
      description: "國立臺灣科學教育館此次選拔14名學生携12件作品代表我國參加這個素有青少年科學奧林匹亞之稱的科展。經過激烈的競爭，我國學生從眾多參賽者中脫穎而出。",
      category: "Award"
    },
    {
        id: 2,
        title: "北一女中美國國際科技展覽會創佳績學生勇奪3獎項",
        source: "Yahoo News",
        date: "2023-05-21",
        url: "https://tw.news.yahoo.com/share/bfb706bd-b94d-332b-bd69-834c847b68cd",
        description: "柯絲昀結合了自行出海採集的樣本和國內海洋研究所的採樣資料，研究了臺灣西南海域的高屏與枋寮峽谷的生態結構，榮獲「大會地球與環境科學科三等獎」。",
        category: "Award"
    },
    {
      id: 3,
      title: "「照亮前路-為自己學習」自主學習論壇暨分享會",
      source: "教育部高中優質化輔助方案",
      date: "2024-01-10",
      url: "https://saprogram.tw/wsreporting?ID=97",
      description: "十二年國民基本教育新課綱推動專案辦公室洪詠善執秘及大學生邱靖婷、張久致、柯絲昀同學共同與談。",
      category: "Feature"
    },
    {
      id: 4,
      title: "教育廣播電台—數位科技讓學習無邊界",
      source: "國立教育廣播電台",
      date: "2024-08-14",
      url: "https://podcasts.apple.com/us/podcast/%E6%95%B8%E4%BD%8D%E7%A7%91%E6%8A%80%E8%AE%93%E5%AD%B8%E7%BF%92%E7%84%A1%E9%82%8A%E7%95%8C-%E4%B8%8B/id1537356435?i=1000665249017",
      description: "節目討論十二年國教實施的內涵，以及新課綱、課程及教學實施等議題，涵蓋課程研發、課程推動及師資培育等層面。",
      category: "Podcast"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Award':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Research':
        return 'bg-[#fd976d] text-white border-orange-300'
      case 'Feature':
        return 'bg-[#5dccf1]/20 text-blue-800 border-blue-200'
      case 'Podcast':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getHoverColor = (category: string) => {
    switch (category) {
      case 'Award':
        return 'hover:bg-yellow-200'
      case 'Research':
        return 'hover:bg-green-200'
      case 'Feature':
        return 'hover:bg-[#5dccf1]/60'
      case 'Podcast':
        return 'hover:bg-[#c9b1fb]/60'
      default:
        return 'hover:bg-gray-50'
    }
  }

  return (
    <section id="media" className="section-padding bg-white">
      <div className="container-max">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            In the <span className="relative font-reigo text-5xl md:text-6xl">
              Media
              <svg className="absolute -bottom-0.5 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none">
                <path d="M2 8c20-4 40-4 60 0s40 4 60 0 40-4 60 0 40 4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mediaCoverage.map((item) => (
            <div key={item.id} className={`bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 ${getHoverColor(item.category)}`}>
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{item.source}</span>
                <a 
                  href={item.url}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                >
                  Read more 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Media
