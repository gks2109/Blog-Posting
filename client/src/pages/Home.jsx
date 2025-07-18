import React from 'react';

const LandingPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden font-newsreader">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-100 px-10 py-3">
        <div className="flex items-center gap-4 text-gray-900">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-[-0.015em]">StoryVerse</h2>
        </div>
        
        <div className="flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            <a href="#" className="text-sm font-medium">Features</a>
            <a href="#" className="text-sm font-medium">Posts</a>
            <a href="#" className="text-sm font-medium">Newsletter</a>
          </nav>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-blue-600 text-white text-sm font-bold tracking-[0.015em]">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          <div className="min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 rounded-xl"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1M0RtU4tm2djCsnCpXp8aqryPiwWsUcL8o4gjPtdsIGHvVgRzRFFOBbmosa6Soozxj1l0fxJA7YW52qbRPfkbau5x-8yCNnKQjoQMcc0P1XAahEBFrfKhyTGeFfh89R9xSygn4X6Ml_s2HQBFgJPow7MpSJwKVNmlUduzHpplFnxn_SZY7bMwWybKkAgRHG7YIJQsNyHQQ8SNQrNpRksnn0vAxd3dhhQcLQstQYGVbwMCsg5urIohXgVo-tz6shMtyMDnydsXd0Pi")'
            }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                Share Your Story with the World
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal md:text-base">
                Join our community of writers and share your thoughts, ideas, and experiences with the world. Start your blog today and connect with readers who care about what you have to say.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 md:h-12 md:px-5 bg-blue-600 text-white text-sm font-bold md:text-base">
              Start Writing
            </button>
          </div>

          {/* Features Section */}
          <div className="flex flex-col gap-10 px-4 py-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-gray-900 text-3xl font-bold leading-tight md:text-4xl max-w-[720px]">
                Powerful Features to Elevate Your Blogging
              </h1>
              <p className="text-gray-900 text-base font-normal leading-normal max-w-[720px]">
                Our platform is designed to provide you with the tools you need to create, optimize, and share your stories effectively.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-0">
              {/* Feature 1 */}
              <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 bg-white p-4 flex-col">
                <div className="text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-900 text-base font-bold leading-tight">Rich Editor</h2>
                  <p className="text-gray-600 text-sm font-normal leading-normal">
                    Craft your posts with our intuitive editor, offering a variety of formatting options and seamless media integration.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 bg-white p-4 flex-col">
                <div className="text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-900 text-base font-bold leading-tight">SEO Tools</h2>
                  <p className="text-gray-600 text-sm font-normal leading-normal">
                    Improve your content's visibility with built-in SEO tools that help you optimize your posts for search engines.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 bg-white p-4 flex-col">
                <div className="text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-900 text-base font-bold leading-tight">Analytics</h2>
                  <p className="text-gray-600 text-sm font-normal leading-normal">
                    Track your blog's performance with detailed analytics, providing insights into your audience and content engagement.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 bg-white p-4 flex-col">
                <div className="text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-900 text-base font-bold leading-tight">Collaboration</h2>
                  <p className="text-gray-600 text-sm font-normal leading-normal">
                    Work together with other writers and editors, sharing ideas and refining your content as a team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What Our Users Say</h2>
          <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
            {/* Testimonial 1 */}
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYucZX4PJnIUugDPeYiqV0qf1DvizeLiavcsRWE21BvwKKq1rRADP78-lGJpy7L2kzBdM3F_eaYrwGTBjX3NlL3yph1p8UbWLIHXT3D-J-xRLM4G-fAheLllC8hUQZg33J1Veqh5MGRwZF94xGh-fffPjqFAq_AWDoA5hz12IpYu9oESYU9AYE3WOKKGD1xXt6G8uQI3iH_AUNiCb5JA1T3VcEZZISPdHoGzAEY1jioksIClSS9O3pXsxU61mYqeCnvWJqTk-lI7TD")' }}></div>
                <div className="flex-1">
                  <p className="text-gray-900 text-base font-medium leading-normal">Sophia Carter</p>
                  <p className="text-gray-600 text-sm font-normal leading-normal">2023-09-15</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-gray-900 text-base font-normal leading-normal">
                "StoryVerse has transformed my writing journey. The platform is user-friendly, and the community is incredibly supportive. I've seen a significant increase in my blog's reach since I started using it."
              </p>
              <div className="flex gap-9 text-gray-600">
                <button className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
                  </svg>
                  <p>25</p>
                </button>
                <button className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path>
                  </svg>
                  <p>2</p>
                </button>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAap9stoNenOO5-GjeqNKD9A5ZFh2Ov6nXwbhmCj-0FOatN-40jHor8NcOdzT5Mf-qvsQmpd9JojU4S1jpher1xHoJuZ_biERgd8kCrmEQrDvluErXkDJYwUcF37M8oSyBvvT0Y4zFIoDd9psTpjGStsP5aSfVIQjljRKY-OCEMrCNyxAWezbK9gWIFDrj9Yh8MMs9lD_a_PrK-9AkJU9_CBmP5m7aVC2N0WjfooaBidlQs1OlQfO8ufXYBeibWxHs4UKBWYkWOfYB5")' }}></div>
                <div className="flex-1">
                  <p className="text-gray-900 text-base font-medium leading-normal">Ethan Bennett</p>
                  <p className="text-gray-600 text-sm font-normal leading-normal">2023-10-22</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  </div>
                ))}
                <div className="text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-900 text-base font-normal leading-normal">
                "I appreciate the SEO tools and analytics provided by StoryVerse. They've helped me understand my audience better and optimize my content for search engines. It's a great platform for serious bloggers."
              </p>
              <div className="flex gap-9 text-gray-600">
                <button className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
                  </svg>
                  <p>18</p>
                </button>
                <button className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path>
                  </svg>
                  <p>1</p>
                </button>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZBvhHsVBRMMZKWwq7g-mQnDysK3Z4yXtV0mdgAddC0NyI8dODJji-nT5wdI5FG-DNTSuTv5jwuwX_qAHmxsY0cvtY6vklkyLH3u83Y7RtLQgnKnxGUvrpUG3wpocTBNU2wekf9we5DdB6QJLy_Xmf3hbjec8oMDhNrbtU1BU0tlvteka-FuTBjsmynS5Py458y-bOhr2l362KKmJvP6WBbJxks4a9VL1MFz8B8szCvqxaqQst-eyxKof2KtPoCAYVy1jpYsFg0Nkc")' }}></div>
                <div className="flex-1">
                  <p className="text-gray-900 text-base font-medium leading-normal">Olivia Hayes</p>
                  <p className="text-gray-600 text-sm font-normal leading-normal">2023-11-30</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-gray-900 text-base font-normal leading-normal">
                "The collaboration features on StoryVerse are fantastic. I can easily work with my team to create high-quality content. The platform is reliable and has made our workflow much more efficient."
              </p>
              <div className="flex gap-9 text-gray-600">
                <button className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
                  </svg>
                  <p>30</p>
                </button>
                <button className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path>
                  </svg>
                  <p>3</p>
                </button>
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">
            {/* Post 1 */}
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDG4Ereh_uTa7pIQ9VQxgCCIWtcVUtDBCfY4BmdwvUlI88oqKL7Cgk21aAmKZmjh1w9AdWBEfZYVv70U9alLNcGCnxpFrsDVj-7xdTyIjj7FkSAM5-rbS7oj9aBuhDLejAZcNIApmHWA5puQahJZh-_6kNnfFmP55p8ggkUJl-U3aBKKtKvd2PrIFLFrTzppbzOFMqjuAeE4LpW-P9Yhvu4ik7-Xuci6z4mQXBoVe3UM0VN1XETxzdk9MUD_pqSVJRtKgJ3pQlkAjiL")' }}></div>
              <div>
                <p className="text-gray-900 text-base font-medium leading-normal">The Art of Storytelling</p>
                <p className="text-gray-600 text-sm font-normal leading-normal">
                  Explore the techniques and strategies for crafting compelling narratives that captivate your audience.
                </p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjpfWIjBBkmVIsfypUWDPOfhHTnnUTjVFNk0IKaH4uvuHN40jQfbm8Kl_FULcBKCwRC1vBqRigZaCdGnXU4vjkt45d3_7fORM8TQTOx_9w8nFqXsUrPKvzrC1B9GN7Xe1-hT6DzwTngf5MxLkEM2NJw4oVj87fgT1YCd42L9478P0sLmJuPkdxrvEGRDJas6ic2ZWSe4cEQAPr_bh5l2-ko_3WZmdc0P0zr9dWYjFgpp22hKoeoaLNOAmv3MQaRbSkyrcDzSD8fmbN")' }}></div>
              <div>
                <p className="text-gray-900 text-base font-medium leading-normal">Mastering SEO for Bloggers</p>
                <p className="text-gray-600 text-sm font-normal leading-normal">
                  Learn how to optimize your blog posts for search engines and attract more readers to your content.
                </p>
              </div>
            </div>

            {/* Post 3 */}
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAx0Y154n0NRMP_stLkNMH8FIbHNYvcdUVhsYfH_thX-qwuSUEPLlqK6IcBC17h9-seOQzHVKj49G-DlvLHydAyzoKHVYBK8-gxAnLf0kb3s69DSpHotblRgMKMLMgq86Atpgbx5BqQeSENvp2TEQ19QjMqiXkCWmcJ0EMsFoRdOF-VBSFiye6UPua2mNNAM_qLc7V-JiIM5y2GAkd58OMBXEv5wMuoD_2lq0JMjizrPG4UoU_F9sxJ3mLscOoaLWGeNDuptkjqYDzj")' }}></div>
              <div>
                <p className="text-gray-900 text-base font-medium leading-normal">Building a Strong Writing Community</p>
                <p className="text-gray-600 text-sm font-normal leading-normal">
                  Discover the importance of community in the writing world and how to foster a supportive network of fellow writers.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col justify-end gap-6 px-4 py-10">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-gray-900 text-3xl font-bold leading-tight md:text-4xl max-w-[720px]">
                Get Updates
              </h1>
            </div>
            <div className="flex flex-1 justify-center">
              <label className="flex flex-col min-w-40 h-14 max-w-[480px] flex-1">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <input
                    placeholder="Enter your email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 focus:outline-0 focus:ring-0 border-none bg-gray-100 rounded-r-none px-4"
                    value=""
                  />
                  <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-gray-100 pr-2">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-blue-600 text-white text-sm font-bold">
                      Subscribe
                    </button>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-end gap-6 px-4 py-10">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-gray-900 text-3xl font-bold leading-tight md:text-4xl max-w-[720px]">
                Ready to Share Your Story?
              </h1>
              <p className="text-gray-900 text-base font-normal leading-normal max-w-[720px]">
                Join our community of writers and start your blog today.
              </p>
            </div>
            <div className="flex flex-1 justify-center">
              <div className="flex justify-center w-full">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 md:h-12 md:px-5 bg-blue-600 text-white text-sm font-bold md:text-base grow">
                  Start Writing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <footer className="flex flex-col gap-6 px-5 py-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 flex-row justify-around">
              <a href="#" className="text-gray-600 text-base font-normal min-w-40">About</a>
              <a href="#" className="text-gray-600 text-base font-normal min-w-40">Help</a>
              <a href="#" className="text-gray-600 text-base font-normal min-w-40">Terms</a>
              <a href="#" className="text-gray-600 text-base font-normal min-w-40">Privacy</a>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#">
                <div className="text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                  </svg>
                </div>
              </a>
              <a href="#">
                <div className="text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                  </svg>
                </div>
              </a>
              <a href="#">
                <div className="text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </svg>
                </div>
              </a>
            </div>
            <p className="text-gray-600 text-base font-normal">@2024 StoryVerse</p>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;