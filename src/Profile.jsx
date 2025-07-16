import React, { useState } from 'react';
import { MoreHorizontal, Heart, MessageCircle, Share } from 'lucide-react';
import Layout from './Layout';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('All Posts');
  const [isNewbie, setIsNewbie] = useState(true);
  const [likedPosts, setLikedPosts] = useState(new Set());

  const tabs = ['All Posts', 'Liked', 'Best Answers', 'Saved'];

  const posts = [
    {
      id: 1,
      author: 'Skylar Botosh',
      timeAgo: '2h ago',
      avatar: 'https://i.pravatar.cc/150?u=skylar-botosh',
      title: 'How does telephone works?',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      tags: ['Tech', 'Phone', 'Old Device'],
      likes: 0,
      comments: 0
    },
    {
      id: 2,
      author: 'Tamanna kc',
      timeAgo: '4h ago',
      avatar: 'https://i.pravatar.cc/150?u=tamanna-kc',
      title: 'What does the fox says?',
      image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      tags: ['Fox', 'Animal', 'Wild Animal'],
      likes: 0,
      comments: 0
    }
  ];

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newLikedPosts = new Set(prev);
      if (newLikedPosts.has(postId)) {
        newLikedPosts.delete(postId);
      } else {
        newLikedPosts.add(postId);
      }
      return newLikedPosts;
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg p-6 mb-6 relative">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                <img
                  src="https://i.pravatar.cc/150?u=skylar-botosh-profile"
                  alt="Skylar Botosh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold">Skylar Botosh</h1>
                <p className="text-purple-100 mb-2">@skyuser</p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center">
                    <span className="mr-1">✓</span>
                    <span>Exploring Design and technical sessions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">✓</span>
                    <span>Coffeesasa</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 text-white text-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium">
                  {isNewbie ? 'Newbie' : 'Expert'}
                </span>
              </div>
              <div className="text-xs mt-1">45 points</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 text-sm font-medium text-center border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-yellow-500 text-yellow-600 bg-orange-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Section */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {/* Post Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.author}</h3>
                    <p className="text-sm text-gray-500">{post.timeAgo}</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <MoreHorizontal className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Post Content */}
              <h2 className="text-lg font-medium text-gray-900 mb-4">{post.title}</h2>
              
              {/* Post Image */}
              <div className="relative mb-4 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-6">
                  <button 
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-2 transition-colors ${
                      likedPosts.has(post.id) 
                        ? 'text-red-500' 
                        : 'text-gray-500 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                    <span className="text-sm">{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <Share className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;