'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  FileText, Plus, Search, Edit, Trash2, Tag, Calendar, Star,
  Filter, MoreVertical, Eye, Heart, Share2, ChevronRight
} from 'lucide-react'

// 模拟数据
const mockNotes = [
  { 
    id: 1, 
    title: '微信公众号API对接完整指南', 
    content: '微信API对接完整流程，IP白名单配置方法，media_id格式要求...', 
    tags: ['技术', '微信', 'API', '自动化'], 
    createdAt: '2026-03-14 14:30',
    updatedAt: '2026-03-14 16:45',
    author: '红虾AI',
    importance: 5,
    views: 1248,
    likes: 156,
    category: '技术文档',
    pinned: true
  },
  { 
    id: 2, 
    title: 'AI自媒体变现路径分析', 
    content: '从流量获取到商业变现的完整路径，包含实战案例和具体操作步骤...', 
    tags: ['AI', '变现', '自媒体', '商业'], 
    createdAt: '2026-03-14 10:15',
    updatedAt: '2026-03-14 10:15',
    author: '红虾AI',
    importance: 4,
    views: 892,
    likes: 89,
    category: '商业分析',
    pinned: true
  },
  { 
    id: 3, 
    title: '健康养生新认知', 
    content: '2026年最新健康研究揭示的养生误区与科学养生方法，包含具体实践指南...', 
    tags: ['健康', '养生', '科学'], 
    createdAt: '2026-03-13 16:45',
    updatedAt: '2026-03-13 16:45',
    author: '红虾AI',
    importance: 3,
    views: 567,
    likes: 45,
    category: '健康生活',
    pinned: false
  },
  { 
    id: 4, 
    title: '个人成长方法论', 
    content: '高效学习与认知升级的系统方法，包含具体实践步骤和工具推荐...', 
    tags: ['成长', '学习', '方法论'], 
    createdAt: '2026-03-13 09:20',
    updatedAt: '2026-03-13 09:20',
    author: '红虾AI',
    importance: 4,
    views: 723,
    likes: 67,
    category: '个人发展',
    pinned: false
  }
]

export default function NotesPage() {
  const router = useRouter()
  const [notes, setNotes] = useState(mockNotes)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredNotes, setFilteredNotes] = useState(mockNotes)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // 所有标签
  const allTags = Array.from(new Set(mockNotes.flatMap(note => note.tags)))

  // 搜索和过滤
  useEffect(() => {
    let result = notes
    
    // 搜索过滤
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(note => 
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query) ||
        note.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    
    // 标签过滤
    if (selectedTags.length > 0) {
      result = result.filter(note =>
        selectedTags.every(tag => note.tags.includes(tag))
      )
    }
    
    setFilteredNotes(result)
  }, [searchQuery, selectedTags, notes])

  const handleViewNote = (id: number) => {
    // 真正的导航到详情页
    router.push(`/notes/${id}`)
  }

  const handleEditNote = (id: number, e: React.MouseEvent) => {
    e.stopPropagation() // 阻止事件冒泡
    router.push(`/notes/${id}?edit=true`)
  }

  const handleDeleteNote = (id: number, e: React.MouseEvent) => {
    e.stopPropagation() // 阻止事件冒泡
    if (confirm('确定要删除这篇笔记吗？此操作不可撤销。')) {
      setNotes(notes.filter(note => note.id !== id))
    }
  }

  const toggleTag = (tag: string, e: React.MouseEvent) => {
    e.stopPropagation() // 阻止事件冒泡
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部操作栏 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">笔记管理</h1>
              <p className="text-gray-600 mt-1">点击笔记卡片查看详细内容</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索笔记..."
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <button 
                onClick={() => router.push('/notes/new')}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-5 h-5" />
                <span>新建笔记</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* 标签过滤 */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-gray-400 mr-2" />
            <span className="text-gray-600">筛选标签：</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={(e) => toggleTag(tag, e)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                #{tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedTags([])
                }}
                className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300"
              >
                清除筛选
              </button>
            )}
          </div>
        </div>

        {/* 笔记统计 */}
        <div className="mb-6">
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              <span>{filteredNotes.length} 篇笔记</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              <span>{notes.filter(n => n.pinned).length} 篇置顶</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              <span>{notes.reduce((sum, n) => sum + n.views, 0)} 次查看</span>
            </div>
          </div>
        </div>

        {/* 笔记列表 - 现在可以点击了！ */}
        <div className="space-y-6">
          {filteredNotes.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">没有找到笔记</h3>
              <p className="text-gray-600 mt-1">尝试修改搜索条件或创建新笔记</p>
            </div>
          ) : (
            filteredNotes.map(note => (
              <div 
                key={note.id} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden cursor-pointer group"
                onClick={() => handleViewNote(note.id)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {note.pinned && <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {note.title}
                          <ChevronRight className="w-4 h-4 ml-2 inline opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {note.updatedAt}
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {note.views} 次查看
                        </span>
                        <span className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {note.likes} 个赞
                        </span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {note.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">{note.content}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {note.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors"
                              onClick={(e) => toggleTag(tag, e)}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < note.importance ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className="flex items-center space-x-2 ml-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={(e) => handleEditNote(note.id, e)}
                        className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                        title="编辑笔记"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => handleDeleteNote(note.id, e)}
                        className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        title="删除笔记"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 交互提示 */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              <ChevronRight className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-blue-900">现在可以点击进入二级页面了！</p>
              <p className="text-blue-700 text-sm mt-1">
                点击笔记卡片查看完整内容，点击标签快速筛选，点击编辑/删除按钮进行操作
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p>第二大脑 · 笔记管理系统</p>
          <p className="text-sm mt-2">共 {notes.length} 篇笔记 · {allTags.length} 个标签 · 点击卡片查看详情</p>
        </div>
      </footer>
    </div>
  )
}
