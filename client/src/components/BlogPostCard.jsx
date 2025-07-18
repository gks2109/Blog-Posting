import React from 'react';

const BlogPostCard = ({ post }) => {
  return (
    <div className="flex gap-4 bg-white px-4 py-3">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
        style={{
          backgroundImage: `url(${post.image})`
        }}
      ></div>
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-[#121516] text-base font-medium leading-normal">{post.title}</p>
        <p className="text-[#6a7781] text-sm font-normal leading-normal">Published on {post.date} by {post.author}</p>
        <p className="text-[#6a7781] text-sm font-normal leading-normal">{post.excerpt}</p>
      </div>
    </div>
  );
};

export default BlogPostCard;