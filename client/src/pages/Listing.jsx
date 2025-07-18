import React from 'react';

const Listing = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden font-newsreader">
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
            <a className="text-[#121517] text-sm font-medium leading-normal" href="#">Home</a>
            <a className="text-[#121517] text-sm font-medium leading-normal" href="#">Explore</a>
            <a className="text-[#121517] text-sm font-medium leading-normal" href="#">Write</a>
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
            <div className="text-[#121517]" data-icon="Bell" data-size="20px" data-weight="regular">
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
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRfDgMHRyEXxvtobSlAOgzfEl6g355cpFHh9MHX7-MuBO1FiD12erbwYNz-08qb9WVFu6x1xsAWeLsuOwFG8xPOba-wBLcRf_cxYSLvB5nEBdQUCL44NmbYu6WZQc7WlisLiObG3cHE9L0o1c2DfyWLTPIAOBJ2dPCSgE7PddOeTlXTeRpmjdoeTlc_DaYpBKiwe1BHbzOm1UL-twqfw3ZM1DibUdNOBsT1qhcs2x633rHVHeInDHTG8HiRD-cQPlvwGm5M1YZI7MM")'
            }}
          ></div>
        </div>
      </header>
      
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
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
                  placeholder="Search for posts"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#121517] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f4] focus:border-none h-full placeholder:text-[#687782] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value=""
                />
              </div>
            </label>
          </div>
          
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f1f2f4] pl-4 pr-4">
              <p className="text-[#121517] text-sm font-medium leading-normal">Technology</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f1f2f4] pl-4 pr-4">
              <p className="text-[#121517] text-sm font-medium leading-normal">Lifestyle</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f1f2f4] pl-4 pr-4">
              <p className="text-[#121517] text-sm font-medium leading-normal">Travel</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">
            {/* Post 1 */}
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBN9W6ZQi4XVz2gzQoK7EcMYB6_Fk2n50H93q3ZuY9C20ZH_kuyp1qkjk83o_EDHjeEBucUcNmbbH5BW37yzAqqRsBSwacWC4JfNQm-FiXPsdTCKRH3akZh9WWLQ7JEKprVXH8bZQqifmanSz53dTSXRDqf1tvMWv11ztLGHnghtMYCNyKEhD_pkxmw5GBK9F4z-ydEVysEwNFOJYv9_kUVMlIftPwe03E0yb1MXPgbPmCSeyGG5O2uCoABaLVKEAlk0tOEHujOX-47")'
                }}
              ></div>
              <div>
                <p className="text-[#121517] text-base font-medium leading-normal">The Future of AI in Everyday Life</p>
                <p className="text-[#687782] text-sm font-normal leading-normal">
                  An in-depth look at how artificial intelligence is transforming our daily routines and interactions.
                </p>
              </div>
            </div>
            
            {/* Post 2 */}
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBH28edMIa6coZFbvSvygjDAhIfh6ZtSp2AFe5AMuYiSBOtRGcNuivCTk6A0EQL8vpX68B3GsLN-AXMAWAiDU6rle_ueiNmouKsD9QE7StUhVe525e0wGul5sPruh8VSJXSKKSWYqB0Z2PkBf7WwevSnUjrTu_2Z-UjibP2x58sDbTbzFbUycCKUHYZgqyWyxUuzCkGhe0m8VFZ2_8FWJzk4QPm-P3pLZQMonEKRVnBNgeiM5KAc0jxSvVVhQTpUBEOEju4bcBgERkK")'
                }}
              ></div>
              <div>
                <p className="text-[#121517] text-base font-medium leading-normal">Mindful Living: A Guide to Inner Peace</p>
                <p className="text-[#687782] text-sm font-normal leading-normal">Discover practical techniques for cultivating mindfulness and achieving a state of inner peace.</p>
              </div>
            </div>
            
            {/* Post 3 */}
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXU0dPh6vB0euBrhI95QS5sgsoRRrscpmhms-quXAH-WtBgzJ7AgbF0atmPstDZmv1ZP1rbP8aJOApbRzBoGwAnXANFleeqkkE-YYbuBgtdoje_zjPAD__sYFYZ6wUomaQT8PjKgwgrbvIfitP6Tex9qqWXUmljrjfZSO_NpbonSNIRxeWLlwOPgCH9CRGuusUhPtWAizB5-p_7drEvC_IRmmxUYlFhGrKmwx2ZngBpB2rHni39Z0ii0V_RqrDvezBSUJ-PavajmYp")'
                }}
              ></div>
              <div>
                <p className="text-[#121517] text-base font-medium leading-normal">Exploring the Hidden Gems of Southeast Asia</p>
                <p className="text-[#687782] text-sm font-normal leading-normal">Uncover the lesser-known destinations in Southeast Asia that offer unique cultural experiences.</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-4">
            <a href="#" className="flex size-10 items-center justify-center">
              <div className="text-[#121517]" data-icon="CaretLeft" data-size="18px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                </svg>
              </div>
            </a>
            <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#121517] rounded-full bg-[#f1f2f4]" href="#">1</a>
            <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#121517] rounded-full" href="#">2</a>
            <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#121517] rounded-full" href="#">3</a>
            <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#121517] rounded-full" href="#">4</a>
            <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#121517] rounded-full" href="#">5</a>
            <a href="#" className="flex size-10 items-center justify-center">
              <div className="text-[#121517]" data-icon="CaretRight" data-size="18px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;