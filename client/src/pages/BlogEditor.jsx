import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const BlogEditor = () => {
  // State for post data
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [visibility, setVisibility] = useState('public');
  const [tags, setTags] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search functionality
  useEffect(() => {
    const searchPosts = async () => {
      if (!searchQuery.trim()) {
        setSearchResults([]);
        return;
      }

      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await axios.get(`https://api.example.com/posts?search=${searchQuery}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Search error:', error);
        toast.error('Failed to search posts');
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(() => {
      searchPosts();
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchQuery]);

  // Save post functionality
  const handleSave = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('https://api.example.com/posts', {
        title: postTitle,
        content: postContent,
        tags: tags.split(',').map(tag => tag.trim()),
        visibility,
        author: 'current-user-id' // Get from auth context
      });

      toast.success('Post saved successfully!');
      // Reset form or redirect
    } catch (error) {
      console.error('Save error:', error);
      toast.error('Failed to save post');
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden font-newsreader">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f2f4] px-10 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-[#121516]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#121516] text-lg font-bold leading-tight tracking-[-0.015em]">Bloggr</h2>
          </div>
          <div className="flex items-center gap-9">
            <a href="#" className="text-[#121516] text-sm font-medium leading-normal">Home</a>
            <a href="#" className="text-[#121516] text-sm font-medium leading-normal">Explore</a>
            <a href="#" className="text-[#121516] text-sm font-medium leading-normal">Create</a>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <label className="flex flex-col min-w-40 !h-10 max-w-64">
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
                placeholder="Search posts..."
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121516] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f4] focus:border-none h-full placeholder:text-[#6a7781] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </label>
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f1f2f4] text-[#121516] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
          >
            <div className="text-[#121516]" data-icon="Bell" data-size="20px" data-weight="regular">
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
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBO1GWcESLqnF-3Oz7IacwyMfzH3lnjvxAt5u5SB3vkLmwKX32s_hDSR4AuEf-J4xQImdYrVEWXxFVj0nKMzejnMg5VBi-VPs8Fm6Krb4UULe6tnJjXyZJKmqrc_kBPXCSlvs9Q9WjQwtmYkEAuOKQIHSdcabOK_DX2WpekJ2lmzHRH7wXWuLq6H19rv7TW1oKCQU8w_jiBiPaR_yHd02062B8NvYZ1_wYfUkAknkCURm98s1zzerI0gE2LC6kL7LsyBB3k1TCMMMbs")'
            }}
          ></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="gap-1 px-6 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
          {/* Post Title */}
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="Post Title"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121516] focus:outline-0 focus:ring-0 border border-[#dde1e3] bg-white focus:border-[#dde1e3] h-14 placeholder:text-[#6a7781] p-[15px] text-base font-normal leading-normal"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
            </label>
          </div>

          {/* Text Editor */}
          <div className="flex items-center px-4 py-3 gap-3 h-full max-h-[520px]">
            <label className="flex flex-col min-w-40 h-full flex-1">
              <div className="flex w-full flex-1 items-stretch rounded-xl flex-col">
                <div className="flex flex-1 flex-col">
                  <textarea
                    placeholder="Start writing your post here..."
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121516] focus:outline-0 focus:ring-0 border border-[#dde1e3] bg-white focus:border-[#dde1e3] min-h-36 placeholder:text-[#bec5ca] p-[15px] rounded-b-none border-b-0 text-base font-normal leading-normal pt-4 pb-0"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  ></textarea>
                  <div className="flex border border-[#dde1e3] bg-white item-center pr-[15px] rounded-b-xl border-t-0 px-[15px] pb-[15px]">
                    <div className="flex items-center gap-4 flex-1 justify-between">
                      <div className="flex items-center gap-1">
                        <button className="flex items-center justify-center p-1.5">
                          <div className="text-[#6a7781]" data-icon="TextB" data-size="20px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                              <path
                                d="M170.48,115.7A44,44,0,0,0,140,40H72a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8h80a48,48,0,0,0,18.48-92.3ZM80,56h60a28,28,0,0,1,0,56H80Zm72,136H80V128h72a32,32,0,0,1,0,64Z"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <button className="flex items-center justify-center p-1.5">
                          <div className="text-[#6a7781]" data-icon="TextItalic" data-size="20px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M200,56a8,8,0,0,1-8,8H157.77L115.1,192H144a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H98.23L140.9,64H112a8,8,0,0,1,0-16h80A8,8,0,0,1,200,56Z"></path>
                            </svg>
                          </div>
                        </button>
                        <button className="flex items-center justify-center p-1.5">
                          <div className="text-[#6a7781]" data-icon="TextH" data-size="20px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M208,56V200a8,8,0,0,1-16,0V136H64v64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v64H192V56a8,8,0,0,1,16,0Z"></path>
                            </svg>
                          </div>
                        </button>
                        <button className="flex items-center justify-center p-1.5">
                          <div className="text-[#6a7781]" data-icon="List" data-size="20px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                              <path
                                d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                      <button
                        className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#5295c5] text-white text-sm font-medium leading-normal hidden @[480px]:block"
                        onClick={handleSave}
                      >
                        <span className="truncate">Publish</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="mt-8">
              <h3 className="text-[#121516] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Search results for "{searchQuery}"
              </h3>
              {loading ? (
                <div className="text-center p-4">Loading...</div>
              ) : (
                <div className="grid grid-cols-1 gap-4 p-4">
                  {searchResults.map((post) => (
                    <div key={post.id} className="flex gap-4 bg-white px-4 py-3">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                        style={{ backgroundImage: `url(${post.image})` }}
                      ></div>
                      <div className="flex flex-1 flex-col justify-center">
                        <p className="text-[#121516] text-base font-medium leading-normal">{post.title}</p>
                        <p className="text-[#6a7781] text-sm font-normal leading-normal">
                          Published on {post.date} by {post.author}
                        </p>
                        <p className="text-[#6a7781] text-sm font-normal leading-normal">{post.excerpt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="layout-content-container flex flex-col w-[360px]">
          <h3 className="text-[#121516] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Post Settings</h3>
          
          {/* Post Settings Form */}
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <select
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121516] focus:outline-0 focus:ring-0 border border-[#dde1e3] bg-white focus:border-[#dde1e3] h-14 placeholder:text-[#6a7781] p-[15px] text-base font-normal leading-normal"
                value={visibility}
                onChange={(e) => setVisibility(e.target.value)}
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="draft">Draft</option>
              </select>
            </label>
          </div>
          
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="Tags (comma separated)"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121516] focus:outline-0 focus:ring-0 border border-[#dde1e3] bg-white focus:border-[#dde1e3] h-14 placeholder:text-[#6a7781] p-[15px] text-base font-normal leading-normal"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </label>
          </div>
          
          {/* Visibility Options */}
          <div className="flex flex-wrap gap-3 p-4">
            {['public', 'private', 'draft'].map((vis) => (
              <label
                key={vis}
                className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dde1e3] px-4 h-11 text-[#121516] cursor-pointer"
              >
                <input
                  type="radio"
                  name="visibility"
                  value={vis}
                  checked={visibility === vis}
                  onChange={(e) => setVisibility(e.target.value)}
                  className="hidden"
                />
                {vis.charAt(0).toUpperCase() + vis.slice(1)}
              </label>
            ))}
          </div>
          
          {/* Save Button */}
          <div className="flex px-4 py-3">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#f1f2f4] text-[#121516] text-sm font-bold leading-normal tracking-[0.015em]"
              onClick={handleSave}
            >
              <span className="truncate">Save Draft</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;