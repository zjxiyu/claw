import { NextRequest, NextResponse } from 'next/server'
import { dbOperations } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const sessionId = searchParams.get('sessionId') || 'default'
    
    const conversations = dbOperations.getConversationsBySession(sessionId)
    return NextResponse.json({ success: true, data: conversations })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sessionId, role, content, metadata } = body
    
    if (!sessionId || !role || !content) {
      return NextResponse.json({ success: false, error: 'sessionId、role和content不能为空' }, { status: 400 })
    }
    
    const result = dbOperations.addConversation(sessionId, role, content, JSON.stringify(metadata || {}))
    return NextResponse.json({ 
      success: true, 
      data: { sessionId, role, content, metadata }
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
