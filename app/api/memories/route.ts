import { NextRequest, NextResponse } from 'next/server'
import { dbOperations } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get('search')
    
    if (search) {
      const memories = dbOperations.searchMemories(search)
      return NextResponse.json({ success: true, data: memories })
    }
    
    const memories = dbOperations.getAllMemories()
    return NextResponse.json({ success: true, data: memories })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { key, value, category, importance } = body
    
    if (!key || !value) {
      return NextResponse.json({ success: false, error: 'key和value不能为空' }, { status: 400 })
    }
    
    const result = dbOperations.setMemory(key, value, category, importance)
    return NextResponse.json({ 
      success: true, 
      data: { key, value, category, importance }
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
