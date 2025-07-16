// import React, { useState } from 'react';
// import { Search, Home, Bell, Tag, Settings, MoreHorizontal, MessageCircle, Heart, Share, Menu, X } from 'lucide-react';
// import ShareThoughtModal from './sharethoughts';
// import { useNavigate } from 'react-router-dom';



// const SocialFeedPage = () => {
//   const [activeTab, setActiveTab] = useState('For You');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isHotTopicsOpen, setIsHotTopicsOpen] = useState(false);

//  const [showModal, setShowModal] = useState(false);

//  const navigate = useNavigate();


//   const posts = [
//     {
//       id: 1,
//       author: 'Prarambha Khadka',
//       timeAgo: '2hrs ago',
//       content: 'What does the fox say?',
//       image: './images/Fox.png',
//       tags: ['fox', 'animal', 'INFJ Animal'],
//       likes: 0,
//       comments: 0,
//       type: 'image'
//     },
//     {
//       id: 2,
//       author: 'Ashim Nakarmi',
//       timeAgo: '4hrs ago',
//       content: 'Exploring the mysteries of the deep sea.',
//       image: './images/Sea.png',
//       tags: ['octopus', 'Marine Life', 'invertebrate'],
//       likes: 16,
//       comments: 0,
//       type: 'image'
//     },
//     {
//       id: 3,
//       author: 'Ravi Patel',
//       timeAgo: '4hrs ago',
//       content: 'Exploring the mysteries of the deep sea.',
//       description: 'Dive into the enchanting world of deep-sea creatures, where bioluminescent wonders and alien-like forms dance in the dark. From the graceful movements of jellyfish to the mysterious depths inhabited by forgotten, the ocean\'s abyss are a treasure trove of unsure as fish brought surprise has advanced to survive in extreme conditions, showcasing nature\'s incredible ingenuity.',
//       tags: ['octopus', 'Marine Life', 'invertebrate'],
//       likes: 15,
//       comments: 0,
//       type: 'text'
//     }
//   ];

//   const hotTopics = [
//     {
//       question: 'What does the fox says?',
//       description: 'The fox is a clever and agile creature, swinging...',
//       tags: ['fox', 'animal'],
//       points: 110
//     },
//     {
//       question: 'Why do dogs bark?',
//       description: 'Dogs bark for various reasons, including alerting...',
//       tags: ['animal'],
//       points: 30
//     },
//     {
//       question: 'What makes cats purr?',
//       description: 'Cats purr for comfort, relaxation, and to communicate...',
//       tags: ['animal'],
//       points: 80
//     }
//   ];

//   const sidebarItems = [
//     { icon: Home, label: 'Home', active: true },
//     { icon: Bell, label: 'Notification' },
//     { icon: Tag, label: 'Tags' },
//     { icon: Settings, label: 'Settings', route: '/settings' }

//   ];

//   const PostCard = ({ post }) => (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
//       <div className="p-3 sm:p-4">
//         <div className="flex items-center justify-between mb-3">
//           <div className="flex items-center space-x-3">
//             <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-400 rounded-full flex items-center justify-center">
//               <span className="text-white font-medium text-xs sm:text-sm">
//                 {post.author.split(' ').map(n => n[0]).join('')}
//               </span>
//             </div>
//             <div>
//               <h3 className="font-medium text-gray-900 text-sm sm:text-base">{post.author}</h3>
//               <p className="text-xs sm:text-sm text-gray-500">{post.timeAgo}</p>
//             </div>
//           </div>
//           <button className="p-1 hover:bg-gray-100 rounded">
//             <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
//           </button>
//         </div>
        
//         <p className="text-gray-900 mb-3 text-sm sm:text-base">{post.content}</p>
        
//         {post.type === 'image' && (
//           <div className="mb-3 rounded-lg overflow-hidden">
//             <img 
//               src={post.image} 
//               alt="Post content" 
//               className="w-full h-40 sm:h-48 object-cover"
//             />
//           </div>
//         )}
        
//         {post.description && (
//           <p className="text-gray-700 text-xs sm:text-sm mb-3 leading-relaxed">
//             {post.description}
//           </p>
//         )}
        
//         <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
//           {post.tags.map((tag, index) => (
//             <span 
//               key={index}
//               className="px-2 sm:px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-medium"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
        
//         <div className="flex items-center justify-between pt-3 border-t border-gray-100">
//           <div className="flex items-center space-x-4 sm:space-x-6">
//             <button className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-red-500 transition-colors">
//               <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
//               <span className="text-xs sm:text-sm">{post.likes}</span>
//             </button>
//             <button className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
//               <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
//               <span className="text-xs sm:text-sm">{post.comments}</span>
//             </button>
//           </div>
//           <button className="p-2 hover:bg-gray-100 rounded">
//             <Share className="w-4 h-4 text-gray-500" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const HotTopicCard = ({ topic }) => (
//     <div className="p-3 sm:p-4 border-b border-gray-100 last:border-b-0">
//       <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{topic.question}</h4>
//       <p className="text-xs sm:text-sm text-gray-600 mb-3">{topic.description}</p>
//       <div className="flex items-center justify-between">
//         <div className="flex flex-wrap gap-1">
//           {topic.tags.map((tag, index) => (
//             <span 
//               key={index}
//               className="px-2 py-1 bg-gray-800 text-white text-xs rounded-full"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//         <span className="text-blue-600 text-xs sm:text-sm whitespace-nowrap ml-2">{topic.points} points</span>
//       </div>
//     </div>
//   );



//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-14 sm:h-16">
//             <div className="flex items-center space-x-2 sm:space-x-4">
//               {/* Mobile menu button */}
//               <button 
//                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//                 className="md:hidden p-2 rounded-md hover:bg-gray-100"
//               >
//                 <Menu className="w-5 h-5 text-gray-600" />
//               </button>

//             <div className="flex items-center">
//             <img 
//              src="./images/logo.png" 
//              alt="MANN LAKE Logo" 
//              className="h-12 sm:h-16 object-contain"
//             />
//             </div>
//             </div>

            
//             <div className="flex-1 max-w-lg mx-4 sm:mx-8">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search Here"
//                   className="w-full pl-8 sm:pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 />
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-2 sm:space-x-4">
//               {/* Hot Topics button for mobile */}
//               <button 
//                 onClick={() => setIsHotTopicsOpen(!isHotTopicsOpen)}
//                 className="lg:hidden p-2 rounded-md hover:bg-gray-100"
//               >
//                 <Tag className="w-5 h-5 text-gray-600" />
//               </button>
              
//               <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
//                 <span className="text-white font-medium text-xs sm:text-sm">U</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
//         <div className="flex gap-4 sm:gap-6">
//           {/* Mobile Sidebar Overlay */}
//           {isSidebarOpen && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
//             onClick={() => setIsSidebarOpen(false)} 
//             ></div>
//           )}
          
//           {/* Sidebar */}
//           <div className={`
//             fixed md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:z-0
//             w-64 md:w-64 flex-shrink-0 top-0 left-0 h-full md:h-auto
//             ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
//           `}>
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full md:h-auto">
//               {/* Mobile close button */}
//               <div className="md:hidden flex items-center justify-between p-4 border-b">
//                 <span className="font-semibold text-gray-900">Menu</span>
//                 <button onClick={() => setIsSidebarOpen(false)}>
//                   <X className="w-5 h-5 text-gray-500" />
//                 </button>
//               </div>
              
 
//               <nav className="p-4 space-y-2">
//   {sidebarItems.map((item, index) => (
//     <button
//       key={index}
//       onClick={() => {
//         setIsSidebarOpen(false);
//         if (item.route) navigate(item.route); // ✅ Add navigation
//       }}
//       className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
//         item.active 
//           ? 'bg-orange-100 text-orange-800 font-medium' 
//           : 'text-gray-700 hover:bg-gray-100'
//       }`}
//     >
//       <item.icon className="w-5 h-5" />
//       <span className="text-sm sm:text-base">{item.label}</span>
//     </button>
//   ))}
// </nav>

              
//               <div className="p-4 border-t border-gray-200">
//                 <div className="space-y-2">
//                   <div className="flex items-center space-x-2 text-sm text-gray-600">
//                     <span>UI/UX</span>
//                     <span className="text-orange-500">×</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-sm text-gray-600">
//                     <span>Designing</span>
//                     <span className="text-orange-500">×</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-sm text-gray-600">
//                     <span>Animal</span>
//                     <span className="text-orange-500">×</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-sm text-gray-600">
//                     <span>Food</span>
//                     <span className="text-orange-500">×</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-sm text-gray-600">
//                     <span>Car</span>
//                     <span className="text-orange-500">×</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="flex-1 min-w-0">
//             {/* Tab Navigation */}
//             <div className="flex items-center justify-between mb-4 sm:mb-6">
//               <div className="flex items-center space-x-1">
//                 <button 
//                   onClick={() => setActiveTab('For You')}
//                   className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
//                     activeTab === 'For You' 
//                       ? 'bg-gray-900 text-white' 
//                       : 'text-gray-600 hover:text-gray-900'
//                   }`}
//                 >
//                   For You
//                 </button>
//                 <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600">
//                   2
//                 </span>
//               </div>
              

// <button 
//   onClick={() => setShowModal(true)}
//   className="bg-gray-900 text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
// >
//   <span className="hidden sm:inline">Share a Thought +</span>
//   <span className="sm:hidden">Share +</span>
// </button>
// </div>






//             {/* Posts Feed */}
//             <div className="space-y-4">
//               {posts.map(post => (
//                 <PostCard key={post.id} post={post} />
//               ))}
//             </div>
//           </div>

//           {/* Hot Topics Sidebar - Desktop */}
//           <div className="hidden lg:block w-80 flex-shrink-0">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-20">
//               <div className="p-4 border-b border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <h2 className="font-semibold text-gray-900">Hot Topics</h2>
//                   <span className="text-sm text-gray-500">See all</span>
//                 </div>
//               </div>
              
//               <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
//                 {hotTopics.map((topic, index) => (
//                   <HotTopicCard key={index} topic={topic} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Hot Topics Modal */}
//       {isHotTopicsOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
//           <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-80 overflow-hidden">
//             <div className="p-4 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h2 className="font-semibold text-gray-900">Hot Topics</h2>
//                 <button onClick={() => setIsHotTopicsOpen(false)}>
//                   <X className="w-5 h-5 text-gray-500" />
//                 </button>
//               </div>
//             </div>
            
//             <div className="divide-y divide-gray-100 overflow-y-auto max-h-64">
//               {hotTopics.map((topic, index) => (
//                 <HotTopicCard key={index} topic={topic} />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//       {showModal && <ShareThoughtModal onClose={() => setShowModal(false)} />}

//     </div>
//   );
// };

// export default SocialFeedPage;