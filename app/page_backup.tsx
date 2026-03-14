import { useRouter } from "next/navigation"
import { AgentRulesLink } from "@/components/AgentRulesLink"
'use client'

import { useState, useEffect } from 'react'
import { 
  FileText, MessageSquare, Brain, TrendingUp, Clock, Star, 
  Plus, Search, Users, Zap, ChevronRight, Filter, 
  BookOpen, MessageCircle, Database, BarChart,
  Eye, Share2, Heart, Download
} from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 800)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <Brain className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500" />
          </div>
          <p className="mt-4 text-gray-600 font-medium">加载第二大脑...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 顶部导航栏 - 毛玻璃效果 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">第二大脑</h1>
                <p className="text-sm text-gray-500">智能知识管理系统</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索笔记、对话、记忆..."
                  className="pl-10 pr-4 py-2 w-64 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
                <Plus className="w-5 h-5" />
                <span>新建</span>
              </button>
              
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* 欢迎横幅 - 渐变效果 */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">欢迎回来，大虾哥哥！</h2>
              <p className="text-blue-100 mb-6">您的知识资产正在智能管理中</p>
              <div className="flex items-center space-x-4">
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>快速开始</span>
                </button>
                <button className="px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>查看教程</span>
                </button>
              </div>
            </div>
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-20">
              <Brain className="w-48 h-48" />
            </div>
          </div>
        </div>

        {/* 数据概览 - 专业卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-green-600">+12%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">1,248</h3>
            <p className="text-gray-600">笔记总数</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-green-600">+8%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">5,672</h3>
            <p className="text-gray-600">对话记录</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-pink-100 rounded-lg">
                <Database className="w-6 h-6 text-pink-600" />
              </div>
              <span className="text-sm font-medium text-green-600">+23%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">892</h3>
            <p className="text-gray-600">记忆条目</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-green-600">+5%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">3</h3>
            <p className="text-gray-600">活跃用户</p>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 最近活动 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">最近活动</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  查看全部 <ChevronRight className="w-4 h-4 ml-1" /></button>
                <button 
                  onClick={() => router.push("/notes")}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium ml-4"
                >
                  查看所有笔记 →
                </button>
                </button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <FileText className="w-5 h-5 text-blue-600" />,
                    title: '创建了新的技术笔记',
                    desc: '微信公众号API对接完整指南',
                    time: '2分钟前',
                    color: 'bg-blue-100'
                  },
                  {
                    icon: <MessageCircle className="w-5 h-5 text-purple-600" />,
                    title: '记录了重要对话',
                    desc: '与红虾AI讨论爆款文章公式',
                    time: '1小时前',
                    color: 'bg-purple-100'
                  },
                  {
                    icon: <Database className="w-5 h-5 text-pink-600" />,
                    title: '添加了关键记忆',
                    desc: 'IP白名单配置：143.14.106.39',
                    time: '3小时前',
                    color: 'bg-pink-100'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`p-2 rounded-lg ${item.color} mr-4`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-sm text-gray-500">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div>
            {/* 热门标签 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">热门标签</h3>
              <div className="flex flex-wrap gap-2">
                {['AI技术', '自媒体', '变现', '微信API', '自动化', '内容创作'].map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 快速操作 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">快速操作</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <Plus className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium">新建笔记</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 rounded-lg mr-3">
                      <Search className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="font-medium">智能搜索</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 热门内容 */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">热门内容</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              查看全部 →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '2026年AI自媒体终极指南',
                desc: '从0到1搭建自动化内容生产线',
                type: '笔记',
                views: '1.2k',
                likes: '248',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: '微信公众号API完全解析',
                desc: '技术细节、常见问题与最佳实践',
                type: '技术',
                views: '892',
                likes: '156',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {item.type}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" /> {item.views}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" /> {item.likes}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      阅读全文 →
                    </button>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-500">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-12 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-6 h-6 text-blue-500" />
              <span className="text-gray-700">第二大脑 · 智能知识管理系统</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2026 红虾AI · 为大虾哥哥打造
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

      {/* 行为准则链接 */}
      <AgentRulesLink />
    </div>
  )
}
