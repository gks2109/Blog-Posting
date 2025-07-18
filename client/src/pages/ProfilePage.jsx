
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden font-newsreader">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f2f4] px-10 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-[#121517]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#121517] text-lg font-bold leading-tight tracking-[-0.015em]">Bloggr</h2>
          </div>
          <nav className="flex items-center gap-9">
            <a href="#" className="text-[#121517] text-sm font-medium leading-normal">Home</a>
            <a href="#" className="text-[#121517] text-sm font-medium leading-normal">Explore</a>
            <a href="#" className="text-[#121517] text-sm font-medium leading-normal">Notifications</a>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <label className="flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div
                className="text-[#687782] flex border-none bg-[#f1f2f4] items-center justify-center pl-4 rounded-l-lg border-r-0"
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
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#121517] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f4] focus:border-none h-full placeholder:text-[#687782] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                value=""
              />
            </div>
          </label>
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f1f2f4] text-[#121517] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
          >
            <div className="text-[#121517]" data-icon="Plus" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
              </svg>
            </div>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC04WXQFuxzi08CjRdLcZD3eqMYcEnUE55bZR4lJCnWaH9ah4UGqozfErV4A9TLH8HgaiHOCdaqQoKGfRYtlbrb-amd253TgYGJTjEEGIp0ydoh6cUXv5xGgiTZLPxtbqN04uZxyEnWREisDbbik42gQ3aQWKVHPRyStUC76IyXfapnVp_1muIvCxZeC3GtpD3M_uDRvScsiFmcyFDaPxMT-mjblIT1WM5m1oI-Ex7BPs8JSH5MQe4Kgl0NvvbFuCWdTON0w0ZNZ2Nr")'
            }}
          ></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          {/* Profile Section */}
          <div className="flex p-4">
            <div className="flex w-full flex-col gap-4 items-center">
              <div className="flex gap-4 flex-col items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBP9s_Kt4xSnLvSudn9Pgp7iNhHaNnD_IuGr1IlErTVzdJSfmozjlT4sTPrDL3a3CpCAH4XpH5fzpJ1BcB58ANrRycTVHKrWPE6XtU1tf5_wC_g9hCwLcyYR2-56gxQFVo9NhJmo-XFTnFN7ExsdA6xm_eJB4gzaR5zz9ACDTdfaWVhYmbYJwSnuXVPlRMVTwxbe8FNC9cuyNwUcz_mYFKsvOj9jv-1Bu_tzcQo5SrC7apvdJXPm2oWR79VA7eXpjJEIbW6q9hNpNZ1")'
                  }}
                ></div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-[#121517] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Sophia Bennett</p>
                  <p className="text-[#687782] text-base font-normal leading-normal text-center">
                    Tech enthusiast and writer. Sharing insights on technology, innovation, and the future of work.
                  </p>
                  <p className="text-[#687782] text-base font-normal leading-normal text-center">Joined in 2021</p>
                </div>
              </div>
              <button
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f1f2f4] text-[#121517] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] md:w-auto"
              >
                <span className="truncate">Follow</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="pb-3">
            <div className="flex border-b border-[#dde1e4] px-4 gap-8">
              <a href="#" className="flex flex-col items-center justify-center border-b-[3px] border-b-[#121517] text-[#121517] pb-[13px] pt-4">
                <p className="text-[#121517] text-sm font-bold leading-normal tracking-[0.015em]">Posts</p>
              </a>
              <a href="#" className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#687782] pb-[13px] pt-4">
                <p className="text-[#687782] text-sm font-bold leading-normal tracking-[0.015em]">About</p>
              </a>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4">
            {/* Post 1 */}
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnAr_XQCtgqFZi9Vmn0hNcCqCgt-dA3nULjipL_MQIodqa_9umVTKNqfZJ6vC51L0kzcNGH6ehxgzH2Fzq1Rmh80y25kE1nryqq3GhXIuxS0Xh-FOXssELsd602u1NW0f00tFsKVyPlW0heRPerotTVNnQenfWgdG_90YI3WZp1uT0NM5VJQDiYep-lKjobjgpuBiiQQvswTMWMbb1CsieBId8fQJNEDXagdG7nSkbD68QKs43gsejqlBHep96BUTSnNYc42yFsOdX")'
                }}
              ></div>
              <div>
                <p className="text-[#121517] text-base font-medium leading-normal">The Future of AI in Healthcare</p>
                <p className="text-[#687782] text-sm font-normal leading-normal">Exploring the transformative impact of AI on healthcare.</p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAF5-iOLm9LyoVHqQByjq020VnEy2WlEBcOaBHnzPlGYAFRkD9Lgn9REgMlceM-eHWK5x_5Y_OJsjOzD6yvVEmJF88v8Dxx73isFllp8YwBRe5Fx0Dg0ksWyZQ-zqC__KlS8dbPEApNrbdgQdckfNCPmfpb6uN8euYs-cgNXVuPnyZICm1k738g19Zj2UFdnTDRQ4e4-APSUnwhih-8KeZPDsYQT90F30s8xIFyTlDY-Ff7HVb2AWqt-_C100o4ubN3zAqQuiVEhT1P")'
                }}
              ></div>
              <div>
                <p className="text-[#121517] text-base font-medium leading-normal">5 Tips for Effective Remote Work</p>
                <p className="text-[#687782] text-sm font-normal leading-normal">Maximize productivity and well-being while working from home.</p>
              </div>
            </div>

            {/* Post 3 */}
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoakBQeTrBg2idFWemrHsBwm0r58mQwU1W_wOzAR6BBbAmHr3sZ34uV4QIwmyRekyhhWzat33OF_qPBF3wothfVbugMZak3oTc8aa7ic_Vle8x2-0LoGKaHewPg4Zw9ujcIx4Fb-MdAoyh4Ll5hFwYumb_lFiEb-QSb8-sRUj6s78dZySpS4TfuXgDsMIqup__JJdmXv8LTZ06XXaBkloKEJX0BTMXZGumyhjE93xcYh7q-9mcCon9QkBlUnur8NR5Nn9Hqizs9eti")'
                }}
              ></div>
              <div>
                <p className="text-[#121517] text-base font-medium leading-normal">The Rise of Sustainable Tech</p>
                <p className="text-[#687782] text-sm font-normal leading-normal">Innovations driving a greener future.</p>
              </div>
            </div>

            {/* Post 4 */}
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6tWJlpNVDU2_ArTRgBGt98luAHnjPSNakfUVcAuqwIE_RKz1juxg4xlnwqSCRHyq1Bd_9ySXSJVYCEYsqzGabvuGD58PgNOjavvhotZfuY5EKGYJyN7B6GEDVV51M21sptb_Fq3IPGPzoKDMNVpSDC4TpW0QMH0ZveWhJ-y_71ES0YvNcm0znVg4-bCqT89u9yNhyyhimzyDFXAbkTXaF_ffvYufkKy0eVCVGj-sR0bY88tN0BMsxfAYWU25jUmgpr7pfm59JTUzy")'
                }}
              ></div>
              <div>
                <p className="text-[#121517] text-base font-medium leading-normal">Navigating the Digital Landscape</p>
                <p className="text-[#687782] text-sm font-normal leading-normal">Strategies for staying informed and connected in a digital world.</p>
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
              <a href="#" className="text-[#687782] text-base font-normal leading-normal min-w-40">Terms</a>
              <a href="#" className="text-[#687782] text-base font-normal leading-normal min-w-40">Privacy</a>
              <a href="#" className="text-[#687782] text-base font-normal leading-normal min-w-40">Contact</a>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#">
                <div className="text-[#687782]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                  </svg>
                </div>
              </a>
              <a href="#">
                <div className="text-[#687782]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </svg>
                </div>
              </a>
              <a href="#">
                <div className="text-[#687782]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                  </svg>
                </div>
              </a>
            </div>
            <p className="text-[#687782] text-base font-normal leading-normal">@2024 Bloggr. All rights reserved.</p>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;