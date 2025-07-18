import React from 'react';
import Header from '../components/Header';
import BlogPostCard from '../components/BlogPostCard';

const SearchResults = () => {
  // Sample data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "AI in Education: Revolutionizing Learning",
      excerpt: "AI is transforming education, offering personalized learning, automated grading, and enhanced accessibility. Explore its potential and challenges.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqwLtqurFQH1szr6nUw5vqOoYgKLhICiLud5V9Z05fufHsaenpZNRAJoec0NG2EuxmAFzoImk2tZHfeFU1PS6zfhgBeU3I-xir5UOCP7Te2YFJPiSzHJD1ZxH6hibQYFTwCisOl5ZLPFd5PXcW4iMAWJTeGM6ZL6OIvQ1i2AY3WKzmTesxrfxnZUCCcDHsU6bhazs6618bctl6C_gSyntA5w2RP5ZtmtOacQ4X6RygkRuj2GEEl4XZQaulXW-cVaxt35xiksIGdbiM",
      author: "Sarah Johnson",
      date: "Jan 15, 2024"
    },
    {
      id: 2,
      title: "AI Tools for Educators: Enhancing Teaching",
      excerpt: "AI tools are becoming essential for educators, aiding in lesson planning, student assessment, and creating engaging content. Learn how to integrate AI effectively.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE5NYDJAusanWv8bj4IXtpKEBNgnApXHluNNrRcpirrHVRVvwLmTvgVH9Yuej_c_s4JCVyIl202ts3JORIHhO0V1NWlOZ456rClJDbW8cf2Y_Tsfz2UcvY6Ap1X4IWb0cv-9WuMqFr_JntLI_1ytYjEOx6cQDbHaT0uaMnB_5QRFoUmNlJeNkzOlCMi_PlPdK59NUGUMe8RomD23PNcGCHwhRgIoBYTAwnf1LLQpUJMWpzVJQPnjxjQqRfJewIBMXnc3i5XGSnF-oh",
      author: "David Lee",
      date: "Feb 22, 2024"
    },
    {
      id: 3,
      title: "AI and Accessibility: Inclusive Education",
      excerpt: "AI-powered platforms are making education more accessible to diverse learners, providing customized support and resources. Discover inclusive AI solutions.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Q6GLcYxMXisZRVy-xOw_n1fkWdEA1pEnJuo8a44MK0zOWpowxlWSqWRqhTSwNYYaTF9O0gMDB1f_d-Sw7ct3PRFM9pjmibnHMKPBeIXUDmoV1qkjGrPk45Wg-adqo8QvNRoDqV_bxWE3s-cGDvv-O7G3Y4CbXmV1LOa4otxIFsZtmwWgOssmEk4KQ-wjYOzEyzlwZXyz1wU_rCK7zmruCPWekrcE-28Vf0ynZJ6k-U-5_QIzRaGUDMvUOXwZl08smSMponBtTZFw",
      author: "Emily Chen",
      date: "Mar 10, 2024"
    },
    {
      id: 4,
      title: "AI in Educational Research: Data-Driven Insights",
      excerpt: "AI is reshaping educational research, enabling data-driven insights into learning patterns, student performance, and effective teaching strategies. Explore the latest findings.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAb6GSW32A9Hct5t4JW8r51M0Lu63JBrRlet2akXIsySxpkCuvbmo1lAsBGb7Wr9yoHwmMFUQGEf0QhY_oZr0tk5jX4Br9RmBWqoaxO8Avt4o-45-PkcI8KzAeXqua2LSla1dnu8EKqiatkSZFuTVzGLjylnync4B6mfifFIQE7ncnE0G38SJc1RPPrlcZq4ivRWMFUGEDeU2M0MTwQ5rx5l5hhzsRYtRgZ2fujSFsh7QqBSbl_Lp2DTFSGxGWK4BSr9TZhgA7h_LSm",
      author: "Michael Brown",
      date: "Apr 5, 2024"
    },
    {
      id: 5,
      title: "AI Innovations in Education: Shaping the Future",
      excerpt: "AI is fostering innovation in education, from virtual tutors to adaptive learning systems. Explore cutting-edge applications and their impact on the future of learning.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNDHJfTX0NnyjxcrrZDeDdxTMgTXTideo3pI9PAjNnQ7Bm1IMtsDuk7DRKPt5KgiLX2nW9Hlv32oXWgSQNSs2B0_q99QeRLoKwUeieGqsyKdswL6XjNXCwAVJf1bV1cLTjoYONE9EzX3Z-CbJOZMcKF6Owqr4KKInpRIOntVE1ZnSi_fqHNf9A8HLmuMZx8zPQxb6UyxGo1GFkKKbNJ4eHlEwi8iMLa4RCtiqA0rYO07rOxkSUO1dDbVFTJegCrN216_kg9nj4qtrX",
      author: "Jessica White",
      date: "May 18, 2024"
    }
  ];

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden font-newsreader">
      <Header />
      
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#6a7781] flex border-none bg-[#f1f2f4] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                    ></path>
                  </svg>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121516] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f4] focus:border-none h-full placeholder:text-[#6a7781] px-4 rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value="AI in Education"
                  readOnly
                />
                <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#f1f2f4] pr-2 pr-4">
                  <button
                    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-[#121516] gap-2 text-base font-bold leading-normal tracking-[0.015em] h-auto min-w-0 px-0"
                  >
                    <div className="text-[#6a7781]" data-icon="XCircle" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </label>
          </div>
          <h3 className="text-[#121516] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Search results</h3>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 gap-4 p-4">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;