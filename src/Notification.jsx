import React, { useState } from 'react';
import Layout from './Layout';
import { Search, Home, Bell, Tag, Settings, MoreHorizontal, Plus } from 'lucide-react';

const NotificationsPage = () => {
  const notifications = {
    today: [
      { id: 1, user: 'Skylar Botosh', avatar: 'SB', timeAgo: '2hrs ago', action: 'Marked your answer as best answer' },
      { id: 2, user: 'Avery Thompson', avatar: 'AT', timeAgo: '1hr ago', action: 'Liked your answer' },
      { id: 3, user: 'Jordan Lee', avatar: 'JL', timeAgo: '30min ago', action: 'Liked your post' },
      { id: 4, user: 'Taylor Morgan', avatar: 'TM', timeAgo: '15min ago', action: 'Liked your post' }
    ],
    earlier: [
      { id: 5, user: 'Skylar Botosh', avatar: 'SB', timeAgo: 'Yesterday', action: 'Marked your answer as best answer' },
      { id: 6, user: 'Avery Thompson', avatar: 'AT', timeAgo: 'Yesterday', action: 'Liked your answer' },
      { id: 7, user: 'Jordan Lee', avatar: 'JL', timeAgo: '2 days ago', action: 'Liked your post' },
      { id: 8, user: 'Taylor Morgan', avatar: 'TM', timeAgo: '3 days ago', action: 'Liked your post' }
    ]
  };

  const NotificationItem = ({ notification }) => (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-3 flex-1">
        <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
          <span className="text-white font-medium text-sm">{notification.avatar}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-medium text-gray-900 text-base truncate">{notification.user}</span>
            <span className="text-sm text-gray-500 whitespace-nowrap">{notification.timeAgo}</span>
          </div>
          <p className="text-sm text-gray-600">{notification.action}</p>
        </div>
      </div>
      <button className="p-1 hover:bg-gray-100 rounded ml-2 flex-shrink-0">
        <MoreHorizontal className="w-5 h-5 text-gray-400" />
      </button>
    </div>
  );

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="p-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Mark all as read</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Today</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {notifications.today.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Earlier</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {notifications.earlier.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          </div>
        </div>

   
      </div>
    </Layout>
  );
};

export default NotificationsPage;

