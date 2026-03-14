'use client'

import { useRouter } from 'next/navigation'
import { BookOpen } from 'lucide-react'

export function AgentRulesLink() {
  const router = useRouter()
  
  return (
    <button
      onClick={() => router.push('/agent-rules')}
      className="fixed bottom-6 left-6 flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all z-50"
    >
      <BookOpen className="w-5 h-5" />
      <span className="font-medium">行为准则</span>
    </button>
  )
}
