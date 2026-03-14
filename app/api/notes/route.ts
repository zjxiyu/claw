import { NextRequest, NextResponse } from 'next/server'
import { dbOperations } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get('search')
    
    if (search) {
      const notes = dbOperations.searchNotes(search)
      return NextResponse.json({ success: true, data: notes })
    }
    
    const notes = dbOperations.getAllNotes()
    return NextResponse.json({ success: true, data: notes })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, content, category, tags } = body
    
    if (!title || !content) {
      return NextResponse.json({ success: false, error: '标题和内容不能为空' }, { status: 400 })
    }
    
    const result = dbOperations.createNote(title, content, category, tags)
    return NextResponse.json({ 
      success: true, 
      data: { id: result.lastInsertRowid, title, content, category, tags }
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
