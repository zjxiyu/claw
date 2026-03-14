'use client'

import { useState, useEffect } from 'react'
import { 
  FileText, MessageSquare, Brain, Search, Plus, 
  Clock, Star, Tag, Filter, Edit, Trash2,
  ChevronRight, CheckCircle, XCircle, MoreVertical
} from 'lucide-react'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [notes, setNotes] = useState([
    { id: 1, title: '公众号自动发布技术总结', content: '微信API对接完整流程，IP白名单配置方法', tags: ['技术', '微信', 'API'], time: '今天 14:30', pinned: true },
    { id: 2, title: 'AI自媒体变现路径', content: '从流量获取到商业变现的完整路径分析', tags: ['AI', '变现', '自媒体'], time: '今天 10:15', pinned: true },
    { id: 3, title: '健康养生新认知', content: '2026年最新健康研究揭示的养生误区', tags: ['健康', '养生'], time: '昨天 16:45', pinned: false },
    { id: 4, title: '个人成长方法论', content: '高效学习与认知升级的系统方法', tags: ['成长', '学习'], time: '昨天 09:20', pinned: false },
  ])
  
  const [memories, setMemories] = useState([
    { id: 1, key: '微信IP白名单', value: '143.14.106.39', importance: 5, category: '技术配置' },
    { id: 2, key: '爆款文章公式', value: '标题+痛点+案例+解决方案+行动指南', importance: 4, category: '内容创作' },
    { id: 3, key: 'Gemini API Key', value: 'AIzaSyAZaXGLCgvKTkaZuL8rK1yFWjnqG2R311U', importance: 3, category: 'API配置' },
  ])
  
  const [recentConversations, setRecentConversations] = useState([
    { id: 1, title: '与红虾AI讨论公众号发布', summary: '技术障碍分析和解决方案讨论', time: '2小时前', unread: false },
    { id: 2, title: '关于爆款文章创作的对话', summary: '内容结构和变现路径探讨', time: '4小时前', unread: true },
    { id: 3, title: '第二大脑系统需求讨论', summary: '功能需求和界面设计确认', time: '6小时前', unread: false },
  ])

  const [activeTab, setActiveTab] = useState('notes')

  // 快速操作
  const quickActions = [
    { icon: Plus, label: '新建笔记', color: 'bg-blue-500', action: () => console.log('新建笔记') },
    { icon: Search, label: '快速搜索', color: 'bg-green-500', action: () => console.log('快速搜索') },
    { icon: Brain, label: '添加记忆', color: 'bg-purple-500', action: () => console.log('添加记忆') },
    { icon: Filter, label: '筛选整理', color: 'bg-orange-500', action: () => console.log('筛选整理') },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 简洁顶部 */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">第二大脑</h1>
              <p className="text-sm text-gray-500">大虾哥哥的知识管理中心</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索笔记、记忆、对话..."
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-5 h-5" />
              <span>新建</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* 欢迎区域 - 简洁实用 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">欢迎使用第二大脑</h2>
            <p className="text-gray-600 mb-6">这里集中管理您的所有知识资产</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors"
                >
                  <div className={`p-3 rounded-full ${action.color} text-white mb-2`}>
                    <action.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：笔记管理 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setActiveTab('notes')}
                      className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'notes' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      笔记
                    </button>
                    <button 
                      onClick={() => setActiveTab('memories')}
                      className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'memories' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      记忆
                    </button>
                    <button 
                      onClick={() => setActiveTab('conversations')}
                      className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'conversations' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      对话
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Filter className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 笔记列表 */}
              {activeTab === 'notes' && (
                <div className="divide-y divide-gray-200">
                  {notes.map((note) => (
                    <div key={note.id} className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {note.pinned && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                            <h3 className="font-bold text-gray-900">{note.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{note.content}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {note.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className="text-xs text-gray-500">{note.time}</span>
                              <div className="flex items-center space-x-2">
                                <button className="p-1 text-gray-400 hover:text-blue-600">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="p-1 text-gray-400 hover:text-red-600">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 记忆列表 */}
              {activeTab === 'memories' && (
                <div className="divide-y divide-gray-200">
                  {memories.map((memory) => (
                    <div key={memory.id} className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < memory.importance ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              {memory.category}
                            </span>
                          </div>
                          <div className="mb-3">
                            <div className="text-sm text-gray-500 mb-1">关键词</div>
                            <div className="font-mono text-gray-900">{memory.key}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-1">内容</div>
                            <div className="text-gray-700">{memory.value}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 对话列表 */}
              {activeTab === 'conversations' && (
                <div className="divide-y divide-gray-200">
                  {recentConversations.map((conv) => (
                    <div key={conv.id} className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {conv.unread && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                            <h3 className="font-bold text-gray-900">{conv.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{conv.summary}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{conv.time}</span>
                            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                              查看详情 →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 右侧：快捷信息和统计 */}
          <div className="space-y-6">
            {/* 统计卡片 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">数据统计</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{notes.length}</div>
                      <div className="text-sm text-gray-500">笔记</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Brain className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{memories.length}</div>
                      <div className="text-sm text-gray-500">记忆</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{recentConversations.length}</div>
                      <div className="text-sm text-gray-500">对话</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* 最近活动 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">最近活动</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-blue-100 rounded">
                    <Plus className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">创建了新笔记</div>
                    <div className="text-xs text-gray-500">公众号自动发布技术总结</div>
                    <div className="text-xs text-gray-400 mt-1">2分钟前</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-purple-100 rounded">
                    <Brain className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">添加了重要记忆</div>
                    <div className="text-xs text-gray-500">微信IP白名单配置</div>
                    <div className="text-xs text-gray-400 mt-1">1小时前</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-green-100 rounded">
                    <MessageSquare className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">记录了对话</div>
                    <div className="text-xs text-gray-500">关于爆款文章创作的讨论</div>
                    <div className="text-xs text-gray-400 mt-1">3小时前</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 快捷标签 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">常用标签</h3>
              <div className="flex flex-wrap gap              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
                  #技术
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
                  #微信
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
                  #AI
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
                  #变现
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
                  #健康
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
                  #成长
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 底部操作栏 */}
        <div className="fixed bottom-6 right-6">
          <button className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* 简洁页脚 */}
      <footer className="mt-12 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div>第二大脑 · 为大虾哥哥打造</div>
            <div>© 2026 红虾AI</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
