import React, { useState } from 'react';
import Layout from './Layout';
import ShareThoughtModal from './sharethoughts';
import { MoreHorizontal, MessageCircle, Heart, Share, ChevronDown } from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('For You');
  const [showModal, setShowModal] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});
  const [openComments, setOpenComments] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Random boy images from unsplash
  const boyImages = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face'
  ];

  const posts = [
    {
      id: 1,
      author: 'Prarambha Khadka',
      timeAgo: '2hrs ago',
      content: 'What does the fox say?',
      image: './images/Fox.png',
      tags: ['fox', 'animal', 'INFJ Animal'],
      likes: 0,
      comments: 0,
      type: 'image',
      profileImage: boyImages[0]
    },
    {
      id: 2,
      author: 'Ashim Nakarmi',
      timeAgo: '4hrs ago',
      content: 'Exploring the mysteries of the deep sea.',
      image: './images/Sea.png',
      tags: ['octopus', 'Marine Life', 'invertebrate'],
      likes: 16,
      comments: 0,
      type: 'image',
      profileImage: boyImages[1]
    },
    {
      id: 3,
      author: 'Ravi Patel',
      timeAgo: '4hrs ago',
      content: 'Exploring the mysteries of the deep sea.',
      description: 'Dive into the enchanting world of deep-sea creatures...',
      tags: ['octopus', 'Marine Life', 'invertebrate'],
      likes: 15,
      comments: 0,
      type: 'text',
      profileImage: boyImages[2]
    }
  ];

  const hotTopics = [
    {
      question: 'What does the fox says?',
      description: 'The fox is a clever and agile creature, swinging...',
      tags: ['fox', 'animal'],
      points: 110
    },
    {
      question: 'Why do dogs bark?',
      description: 'Dogs bark for various reasons, including alerting...',
      tags: ['animal'],
      points: 30
    },
    {
      question: 'What makes cats purr?',
      description: 'Cats purr for comfort, relaxation, and to communicate...',
      tags: ['animal'],
      points: 80
    }
  ];

  const toggleLike = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const toggleComment = (postId) => {
    setOpenComments((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const PostCard = ({ post }) => {
    const isLiked = likedPosts[post.id] || false;
    const commentsOpen = openComments[post.id] || false;
    const likeCount = post.likes + (isLiked ? 1 : 0);

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                <img 
                  src={post.profileImage} 
                  alt={post.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 text-sm sm:text-base">{post.author}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{post.timeAgo}</p>
              </div>
            </div>
            <button className="p-1 hover:bg-gray-100 rounded">
              <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </button>
          </div>

          <p className="text-gray-900 mb-3 text-sm sm:text-base">{post.content}</p>

          {post.type === 'image' && (
            <div className="mb-3 rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt="Post content"
                className="w-full h-40 sm:h-48 object-cover"
              />
            </div>
          )}

          {post.description && (
            <p className="text-gray-700 text-xs sm:text-sm mb-3 leading-relaxed">
              {post.description}
            </p>
          )}

          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button
                onClick={() => toggleLike(post.id)}
                className={`flex items-center space-x-1 sm:space-x-2 transition-colors ${
                  isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                }`}
              >
                <Heart 
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${isLiked ? 'fill-current' : ''}`}
                />
                <span className="text-xs sm:text-sm">{likeCount}</span>
              </button>
              <button
                onClick={() => toggleComment(post.id)}
                className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-blue-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm">{post.comments}</span>
              </button>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Share className="w-4 h-4 text-gray-500" />
            </button>
          </div>

{commentsOpen && (
  <div className="mt-4 border-t border-gray-200 pt-4">
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full"></div>
      <div className="flex-1">
        <textarea
          placeholder="Write a comment..."
          rows={2}
          className="w-full resize-none border border-black-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-black-400"
        ></textarea>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-4 text-gray-600">
            <button className="flex items-center gap-1 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 3h18v18H3V3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 15l-5.586-5.586a2 2 0 00-2.828 0L3 20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm">Photo</span>
            </button>
            <button className="flex items-center gap-1 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36l-1.42-1.42M6.34 6.34L4.92 4.92m12.02 0l-1.42 1.42M6.34 17.66l-1.42 1.42" />
              </svg>
              <span className="text-sm">GIF</span>
            </button>
          </div>
          <button className="bg-gray-900 text-white px-4 py-1 rounded-md text-sm hover:bg-gray-800">
            Post
          </button>
        </div>
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    );
  };

  const HotTopicCard = ({ topic }) => (
    <div className="p-3 sm:p-4 border-b border-gray-100 last:border-b-0">
      <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{topic.question}</h4>
      <p className="text-xs sm:text-sm text-gray-600 mb-3">{topic.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {topic.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800 text-white text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-blue-600 text-xs sm:text-sm whitespace-nowrap ml-2">
          {topic.points} points
        </span>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Feed Area */}
        <div className="flex-1 min-w-0">
          {/* Tab Navigation */}
          <div className="flex items-center justify-between mb-4 sm:mb-6 relative">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveTab('For You')}
                className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                  activeTab === 'For You'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                For You
              </button>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-600 hover:text-black"
              >
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-lg shadow-md z-10 w-48">
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    Unanswered Questions
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    Answered Questions
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    Saved Posts
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="bg-gray-900 text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Share a Thought +</span>
              <span className="sm:hidden">Share +</span>
            </button>
          </div>

          {/* Posts Feed */}
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Hot Topics Sidebar - Fixed positioning */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 lg:sticky lg:top-6">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Hot Topics</h2>
                <span className="text-sm text-gray-500">See all</span>
              </div>
            </div>

            <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
              {hotTopics.map((topic, index) => (
                <HotTopicCard key={index} topic={topic} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {showModal && <ShareThoughtModal onClose={() => setShowModal(false)} />}
    </Layout>
  );
};

export default Home;