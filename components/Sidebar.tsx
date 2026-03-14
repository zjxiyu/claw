'use client'

import { useState } from 'react'
import { 
  Home, 
  FileText, 
  MessageSquare, 
  Brain, 
  Search, 
  Plus,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

const navItems = [
  { id: 'dashboard', label: '仪表盘', icon: Home, href: '/' },
  { id: 'notes', label: '笔记', icon: FileText, href: '/notes' },
  { id: 'conversations', label: '对话', icon: MessageSquare, href: '/conversations' },
  { id: 'memories', label: '记忆', icon: Brain, href: '/memories' },
  { id: 'search', label: '搜索', icon: Search, href: '/search' },
  { id: 'settings', label: '设置', icon: Settings, href: '/settings' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className={`flex flex-col h-full bg-white border-r border-gray-200 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      {/* 标题 */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary-600" />
              <h1 className="text-xl font-bold text-gray-800">第二大脑</h1>
            </div>
          )}
          {collapsed && <Brain className="h-6 w-6 text-primary-600 mx-auto" />}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-lg hover:bg-gray-100"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>

      {/* 导航 */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.id}>
                <button
                  onClick={() => router.push(item.href)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary-50 text-primary-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon size={20} />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* 底部 */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => router.push('/notes/new')}
          className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus size={20} />
          {!collapsed && <span>新建笔记</span>}
        </button>
      </div>
    </div>
  )
}
