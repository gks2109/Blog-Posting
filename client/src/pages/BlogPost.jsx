import React from 'react';

const BlogPostPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden font-newsreader">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-10 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-[#111518]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em]">Bloggr</h2>
          </div>
          <nav className="flex items-center gap-9">
            <a href="#" className="text-[#111518] text-sm font-medium leading-normal">Home</a>
            <a href="#" className="text-[#111518] text-sm font-medium leading-normal">Explore</a>
            <a href="#" className="text-[#111518] text-sm font-medium leading-normal">Write</a>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <label className="flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div
                className="text-[#637888] flex border-none bg-[#f0f3f4] items-center justify-center pl-4 rounded-l-xl border-r-0"
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
                placeholder="Search"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-full placeholder:text-[#637888] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                value=""
              />
            </div>
          </label>
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f3f4] text-[#111518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
          >
            <div className="text-[#111518]" data-icon="Bell" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                ></path>
              </svg>
            </div>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAHGC1XWteRoCEISCVVGnPzl8ncMcrdeuGh6TpLkeBA_6r-IVldSPYMyVkG07oLxAJwuvqxn54o5Um6m6BGTCJHHkEWM4y2IAPYuVLppEf-FXOjAkQD8TPPMPDPDLqFudsILQNYJjvF4BmO-vSS4j6s4DGUfqOLkHh6RDAZzi3Pfa2BIoQ4uSem1IfmNE3dWL9mLnS3UqgWpj8NJWQmCbt6twIC2dj_Rv4zOKlF1teYSlN5sJ8GlSeU0Hdav1KXefbaB2ujTRKcSsH")'
            }}
          ></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="gap-1 px-6 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
          {/* Breadcrumb */}
          <div className="flex flex-wrap gap-2 p-4">
            <a href="#" className="text-[#637888] text-base font-medium leading-normal">Home</a>
            <span className="text-[#637888] text-base font-medium leading-normal">/</span>
            <span className="text-[#111518] text-base font-medium leading-normal">Tech</span>
          </div>

          {/* Post Title */}
          <h1 className="text-[#111518] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">
            The Future of AI in Software Development
          </h1>

          {/* Author Info */}
          <div className="flex p-4">
            <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <div className="flex gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmSlRKe4k73ocuX6TzYdekOazlTvE2ZwdKAtJZmAiwv20SzTBUay-FjDX5cdGQPN7LFj4G-E79Cz7kzEQeweHQHttWq6j1LOoyVaJeFS6gAUq8uXkHUOo0CMJSRPOHipAipXtsqoEs1cE1eMWHB-HnACkBxl62SmJmpcZMBTcaZtzExImKQMGff5MRN2oM9-XerdtkUprvmLDIiXmjYQgFUojqgBl79BpESvHXHlVy4N-v0w14gU-WxRa0K4wBXMCecojAOld1UUbx")'
                  }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em]">Sophia Carter</p>
                  <p className="text-[#637888] text-base font-normal leading-normal">Software Engineer at Innovatech</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="flex w-full grow bg-white">
            <div className="w-full gap-1 overflow-hidden bg-white aspect-[3/2] flex">
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDy6wLOBLCEZ-RjLwDYlaOJHeLBIuOmEIaMiFLGvMjdQR1O6ATbFvyI0PyyeojgTltobuj-639tMq7jgLn7h4ZyTR4y2dHMzANDoHY4BvbJ1U0-SJf9Yu-hXq7YjetG9dlBXDPkRkIPqrCpLWleN_UUuwnoHLWfK3Yq3vsaqsHtwhZmfcxvn76g_eI6km1DZIu2gNx2dRdJ43U52UOMv163BspbvRVmpZpXwd61mJAW8YW-7vPnhlJZUHWY_mhf6GyjhbkAZvoaq_VJ")'
                }}
              ></div>
            </div>
          </div>

          {/* Article Content */}
          <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Artificial intelligence (AI) is rapidly transforming the software development landscape, offering tools and techniques that enhance efficiency, improve code quality,
            and enable new forms of application design. This article explores the current and future impact of AI on software development, examining how AI-powered tools are
            being integrated into various stages of the development lifecycle.
          </p>

          <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">AI-Powered Development Tools</h2>
          <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
            AI is being integrated into various development tools, including code editors, debuggers, and testing frameworks. These tools can automate repetitive tasks, such as
            code completion and error detection, allowing developers to focus on more complex problem-solving. For example, AI-powered code completion tools can suggest code
            snippets based on the context, significantly speeding up the coding process.
          </p>

          <div className="flex w-full grow bg-white">
            <div className="w-full gap-1 overflow-hidden bg-white aspect-[3/2] flex">
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjaKNeaOye0rjURpWV_o8dCZyNUYplmTAu40nJxUEIJ7dPY9Oa5SD1BxIVd0pzXtjmQ9tirLS1PJrCdPifVMm_2-fbRHjQzwg8XtbBTwkuTKRibtVlsQ4iC7Mozso3417frkTTd6BxU1cnjoETSPBx8goS3T492X_2yN5iw45lut-0T4krcei-MBsrR6T0JGAE8OrzAea3IFsJ8IdV6Lc7RihIywpGtnucEkZO-dkrOXnd42zmRs9ghcP6CRmuuAZXe9pB7COrWkzo")'
                }}
              ></div>
            </div>
          </div>

          <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">AI in Testing and Debugging</h2>
          <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
            AI is also revolutionizing software testing and debugging. AI-driven testing tools can automatically generate test cases, identify potential bugs, and even predict
            where bugs are likely to occur based on historical data. This leads to more thorough testing and faster debugging, reducing the time and cost associated with software
            maintenance.
          </p>

          <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Future Trends</h2>
          <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Looking ahead, AI is expected to play an even greater role in software development. We can anticipate the rise of AI-powered development platforms that can
            autonomously generate entire applications based on high-level specifications. AI may also enable more personalized development experiences, adapting to individual
            developer styles and preferences. However, the integration of AI also raises important questions about the future role of developers and the need for continuous
            learning and adaptation.
          </p>

          {/* Reactions */}
          <div className="flex flex-wrap gap-4 px-4 py-2">
            <div className="flex items-center justify-center gap-2 px-3 py-2">
              <div className="text-[#637888]" data-icon="Heart" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#637888] text-[13px] font-bold leading-normal tracking-[0.015em]">23</p>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-2">
              <div className="text-[#637888]" data-icon="ChatCircleDots" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#637888] text-[13px] font-bold leading-normal tracking-[0.015em]">12</p>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-2">
              <div className="text-[#637888]" data-icon="BookmarkSimple" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#637888] text-[13px] font-bold leading-normal tracking-[0.015em]">5</p>
            </div>
          </div>

          {/* Comments Section */}
          <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Comments</h2>

          {/* Comment 1 */}
          <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0iTrJP3j4u66i2leMr-BjKJR_L9_zD_oF_3BkkHUschHJY1-eBtOVzg7td-OjGBerdcsdg5GM8-jt-QChN7YGY6h78cbUV857YNfQfHMxKLgSQ61Kq_C-eU0HMLZSH4A9nXGAUQs6p9NAf8zEMFRqgNY7a2g3qJ4Hhk-QIyYDFo-uYaZ28FjWaOuFNG22SMidcvHnXoCc3J1fc_ewhZdgF-nBn-Bm35xbEqwZEfu4RdPiL34qOpkjNaZsTUC9iVLt9US92P3Qnw5_")'
              }}
            ></div>
            <div className="flex h-full flex-1 flex-col items-start justify-start">
              <div className="flex w-full flex-row items-start justify-start gap-x-3">
                <p className="text-[#111518] text-sm font-bold leading-normal tracking-[0.015em]">Ethan Harper</p>
                <p className="text-[#637888] text-sm font-normal leading-normal">2 days ago</p>
              </div>
              <p className="text-[#111518] text-sm font-normal leading-normal">
                Great article! The insights into AI-powered development tools were particularly helpful. Looking forward to seeing how these technologies evolve.
              </p>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD60bdu79pqB0wTqOWEiP6A7BUOcO4ti_MiBSb0KmqpGYdJLJlVKmMVStZ89z0M56Oy_ICznNz3OyYXbbT_w2b9oQSxobJd_xwF6ahbfnt99NRhOAdzB3LAT5w9ZbHZ3toLXPlOG1DS9oRDWeknCFS4gTnbVtLi64p5qDMvKXWvWIX9-4lQqSdTutv54k8xKd6skNadHM7Kc7FI0CmZnXTH-W-cL7FINXKkn-fCf5ImmciDkjb9cSbt24n0jlxrVFl5UMVAA3bixyhA")'
              }}
            ></div>
            <div className="flex h-full flex-1 flex-col items-start justify-start">
              <div className="flex w-full flex-row items-start justify-start gap-x-3">
                <p className="text-[#111518] text-sm font-bold leading-normal tracking-[0.015em]">Olivia Bennett</p>
                <p className="text-[#637888] text-sm font-normal leading-normal">1 day ago</p>
              </div>
              <p className="text-[#111518] text-sm font-normal leading-normal">
                I agree, the section on AI in testing and debugging was fascinating. It's clear that AI will significantly impact the efficiency of software development.
              </p>
            </div>
          </div>

          {/* Comment Form */}
          <div className="flex items-center px-4 py-3 gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJwReBQVWk173XL9sSJbeDCV70W8ClTdYiy3N57e-Ah_d3vVG2kXbMbAaFw13uooPNYfpo92MbXugDxQTshK68j3nDsyb1v5mNNuc4vwKXOk6DlRE913MN4jlRtKkOiAtrCZtjcXojMB6cn7s05cRKeKJ7t0wWSRC95koF47Q5Am2ugzbsyHtpydlsQUpSGWts4UK1WwBKzHdIFq1gmfwENNAGuZHA8FRLzaG5GCvWluI3SHxzxTgBEeIKgINIaqxFaCEXl2LtUEve")'
              }}
            ></div>
            <label className="flex flex-col min-w-40 h-12 flex-1">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <input
                  placeholder="Add a comment..."
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-full placeholder:text-[#637888] px-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                  value=""
                />
                <div className="flex border-none bg-[#f0f3f4] items-center justify-center pr-4 rounded-r-xl border-l-0 !pr-2">
                  <div className="flex items-center gap-4 justify-end">
                    <div className="flex items-center gap-1"></div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Sidebar */}
        <div className="layout-content-container flex flex-col w-[360px]">
          <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Related Posts</h3>
          
          {/* Related Post 1 */}
          <div className="p-4">
            <div className="flex items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-[#637888] text-sm font-normal leading-normal">Tech</p>
                <p className="text-[#111518] text-base font-bold leading-tight">The Rise of Quantum Computing</p>
                <p className="text-[#637888] text-sm font-normal leading-normal">Exploring the potential of quantum computing and its implications for various industries.</p>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPV9Bc-KxJkdU4gwuIB6Stdda68BZl5jk__9SLQQqAUYNW-n2jwJI4SaVGypLbFqcGnNWN5LtOS_La54TQMoD_uSxhLala_KJNbdp5XVMvuT_JnxXM_zb13hOPpPbbv634JweDAQ6jDyQgK3CPWaEvobQjmnHtSA1pJT1Zt26nYBvUHMA6GyILm8pg9uaWMYy3v-S_ombnd0bpDD4odVEBalCgTry446TqtFt5FJrVXrbNZqwQo8AVqIIjFaufR0BpMmQzF27dCLdp")'
                }}
              ></div>
            </div>
          </div>

          {/* Related Post 2 */}
          <div className="p-4">
            <div className="flex items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-[#637888] text-sm font-normal leading-normal">Tech</p>
                <p className="text-[#111518] text-base font-bold leading-tight">Cybersecurity in the Digital Age</p>
                <p className="text-[#637888] text-sm font-normal leading-normal">A look at the evolving landscape of cybersecurity threats and the strategies to mitigate them.</p>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzDUC-CN8wgg83qoNeQNqMwAHOpq-TbUjGPMZf4gTR8spQXn2MOT3OB9hQ4jfBjvCD4qn2ZKD_rjhfvdP7wE_vCiLrifYvUGLy_Eb51fkDKQiBELrVmKnQJXBU0JG0XNnx0yPUdM7mNgqlq61vUjdivpDgFDZ0JEFmdR82PRDWR2Ki9cU-h0j1KTcTurdj6FewhN8aupls36dA12Giy7zbFmwUpW9PS6nBh0quaY8bQhCtFks3zZUZs9bv27CxpgMM_F6TOAVttOah")'
                }}
              ></div>
            </div>
          </div>

          {/* Related Post 3 */}
          <div className="p-4">
            <div className="flex items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-[#637888] text-sm font-normal leading-normal">Tech</p>
                <p className="text-[#111518] text-base font-bold leading-tight">The Impact of 5G Technology</p>
                <p className="text-[#637888] text-sm font-normal leading-normal">Examining the transformative effects of 5G on connectivity and various sectors.</p>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6NUs-_idDUnFXZKklVuK4qjtzEfHkunMtGaFjzMomtoe22dKmhhQFsBC0Mzeb04JUFPyhXhwaf5TEoYTIRbuS61Zx26-7zHKTtlhymox3OF1Gz5voGES_G87NtxskYb2Qy_7KvImOKn1LnTPAlbKfF1J33vwB2_y_chhrUYat84mEswbMmdEqZUz1MAikvOgne6WhWLYLsGMFTuBF4mEkyvj3R2TLAFHE4sPWRWzTTKPPcAWd_budYWGfG8t7tKydR4opXGUZQv-A")'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;