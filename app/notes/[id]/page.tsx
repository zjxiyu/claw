'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  ArrowLeft, Edit, Trash2, Save, X, Clock, Tag, User,
  FileText, Star, Eye, Heart, Share2, Download, Printer
} from 'lucide-react'

// 模拟数据
const mockNote = {
  id: 1,
  title: '微信公众号API对接完整指南',
  content: `# 微信公众号API对接完整指南

## 技术栈概述
- 微信公众平台开放API
- OAuth2.0认证流程
- 永久素材上传接口
- 草稿创建与发布接口

## 核心步骤

### 1. 获取Access Token
使用AppID和AppSecret获取access_token，有效期2小时。

### 2. 上传永久素材（封面图）
必须使用永久素材接口，临时素材无法用于草稿创建。

### 3. 创建草稿
需要完整的HTML内容、标题、摘要和封面图media_id。

## 常见问题

### Q: IP白名单错误 (48001)
**解决方案**：在公众号后台添加服务器IP到白名单

### Q: invalid media_id (40007)
**解决方案**：必须使用永久素材的media_id，临时素材无效

## 最佳实践
1. 使用VPS部署，保证IP固定
2. 定时刷新access_token
3. 错误重试机制
4. 日志记录和监控`,
  author: '红虾AI',
  createdAt: '2026-03-14 14:30',
  updatedAt: '2026-03-14 16:45',
  tags: ['技术', '微信', 'API', '自动化', '公众号'],
  category: '技术文档',
  importance: 5,
  views: 1248,
  likes: 156
}

export default function NoteDetailPage() {
  const router = useRouter()
  const [note, setNote] = useState(mockNote)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(mockNote.title)
  const [editedContent, setEditedContent] = useState(mockNote.content)
  const [editedTags, setEditedTags] = useState(mockNote.tags.join(', '))

  const handleSave = () => {
    setNote({
      ...note,
      title: editedTitle,
      content: editedContent,
      tags: editedTags.split(',').map(tag => tag.trim()),
      updatedAt: new Date().toLocaleString('zh-CN')
    })
    setIsEditing(false)
  }

  const handleDelete = () => {
    if (confirm('确定要删除这篇笔记吗？此操作不可撤销。')) {
      router.push('/notes')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部操作栏 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回列表</span>
            </button>
            
            <div className="flex items-center space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    <X className="w-4 h-4" />
                    <span>取消</span>
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Save className="w-4 h-4" />
                    <span>保存</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    <Edit className="w-4 h-4" />
                    <span>编辑</span>
                  </button>
                  <button
                    onClick={handleDelete}
                    className="flex items-center space-x-2 px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>删除</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* 笔记元信息 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              {isEditing ? (
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="w-full text-3xl font-bold text-gray-900 border-b border-gray-300 focus:outline-none focus:border-blue-500 pb-2"
                  placeholder="笔记标题"
                />
              ) : (
                <h1 className="text-3xl font-bold text-gray-900">{note.title}</h1>
              )}
              
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center text-gray-600">
                  <User className="w-4 h-4 mr-2" />
                  <span>{note.author}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>创建: {note.createdAt}</span>
                  <span className="mx-2">•</span>
                  <span>更新: {note.updatedAt}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>{note.category}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < note.importance ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 标签区域 */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Tag className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-600">标签</span>
            </div>
            {isEditing ? (
              <input
                type="text"
                value={editedTags}
                onChange={(e) => setEditedTags(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="用逗号分隔标签，如：技术,微信,API"
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* 统计数据 */}
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-2" />
              <span>{note.views} 次查看</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-2" />
              <span>{note.likes} 个赞</span>
            </div>
          </div>
        </div>

        {/* 笔记内容 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {isEditing ? (
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full h-96 font-mono text-gray-900 border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="输入笔记内容，支持Markdown格式..."
            />
          ) : (
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap font-mono text-gray-900 leading-relaxed">
                {note.content}
              </div>
            </div>
          )}
        </div>

        {/* 底部操作栏 */}
        {!isEditing && (
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                <Heart className="w-4 h-4" />
                <span>点赞 ({note.likes})</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                <Share2 className="w-4 h-4" />
                <span>分享</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                <Download className="w-4 h-4" />
                <span>导出</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                <Printer className="w-4 h-4" />
                <span>打印</span>
              </button>
            </div>
            
            <div className="text-sm text-gray-500">
              最后更新: {note.updatedAt}
            </div>
          </div>
        )}
      </main>

      <footer className="mt-12 border-t border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-500">
          <p>第二大脑 · 笔记详情页</p>
          <p className="text-sm mt-2">字符数: {note.content.length}</p>
        </div>
      </footer>
    </div>
  )
}
