import { NextRequest, NextResponse } from 'next/server'
import { dbOperations } from '@/lib/db'

type Params = {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const id = parseInt(params.id)
    const note = dbOperations.getNoteById(id)
    
    if (!note) {
      return NextResponse.json({ success: false, error: '笔记不存在' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true, data: note })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const id = parseInt(params.id)
    const body = await request.json()
    const { title, content, category, tags } = body
    
    if (!title || !content) {
      return NextResponse.json({ success: false, error: '标题和内容不能为空' }, { status: 400 })
    }
    
    const result = dbOperations.updateNote(id, title, content, category, tags)
    return NextResponse.json({ success: true, data: { id, title, content, category, tags } })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const id = parseInt(params.id)
    dbOperations.deleteNote(id)
    return NextResponse.json({ success: true, message: '笔记已删除' })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
