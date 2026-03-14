'use client'

import { useState, useEffect } from 'react'
import { Brain, Plus, Search, Star, Key, Value, Calendar } from 'lucide-react'

interface Memory {
  id: number
  key: string
  value: string
  category: string
  importance: number
  created_at: string
  updated_at: string
}

export default function MemoriesPage() {
  const [memories, setMemories] = useState<Memory[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMemories()
  }, [])

  const fetchMemories = async () => {
    try {
      const url = search ? `/api/memories?search=${encodeURIComponent(search)}` : '/api/memories'
      const res = await fetch(url)
      const data = await res.json()
      if (data.success) {
        setMemories(data.data || [])
      }
    } catch (error) {
      console.error('获取记忆失败:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    fetchMemories()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      month: 'short',
      day: 'numeric'
    })
  }

  const getImportanceStars = (importance: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < importance ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
      />
    ))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">加载记忆中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* 标题和操作 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">记忆库</h1>
          <p className="text-gray-600 mt-2">存储和管理重要的知识、经验和关键信息</p>
        </div>
        <button className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          <Plus size={20} />
          <span>添加记忆</span>
        </button>
      </div>

      {/* 搜索栏 */}
      <form onSubmit={handleSearch} className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索记忆关键词或内容..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          搜索
        </button>
      </form>

      {/* 记忆列表 */}
      <div className="space-y-4">
        {memories.length === 0 ? (
          <div className="text-center py-12">
            <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">暂无记忆</h3>
            <p className="text-gray-600 mt-1">添加您的第一个记忆开始积累知识</p>
          </div>
        ) : (
          memories.map((memory) => (
            <div key={memory.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex items-center space-x-1">
                        {getImportanceStars(memory.importance)}
                      </div>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {memory.category}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {formatDate(memory.updated_at)}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <Key size={14} className="mr-2" />
                          <span>关键词</span>
                        </div>
                        <p className="font-mono text-lg font-bold text-gray-900">{memory.key}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <Value size={14} className="mr-2" />
                          <span>内容</span>
                        </div>
                        <p className="text-gray-700">{memory.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
