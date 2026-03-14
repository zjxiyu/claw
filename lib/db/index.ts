import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

// 确保数据目录存在
const dataDir = path.join(process.cwd(), 'data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

const dbPath = path.join(dataDir, 'second-brain.db')
const db = new Database(dbPath)

// 创建表
db.exec(`
  CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT DEFAULT 'general',
    tags TEXT DEFAULT '',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS conversations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT NOT NULL,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    metadata TEXT DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS memories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT NOT NULL UNIQUE,
    value TEXT NOT NULL,
    category TEXT DEFAULT 'general',
    importance INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_notes_category ON notes(category);
  CREATE INDEX IF NOT EXISTS idx_conversations_session ON conversations(session_id);
  CREATE INDEX IF NOT EXISTS idx_memories_key ON memories(key);
`)

export default db

// 数据库操作函数
export const dbOperations = {
  // 笔记操作
  getAllNotes: () => {
    return db.prepare('SELECT * FROM notes ORDER BY updated_at DESC').all()
  },
  
  getNoteById: (id: number) => {
    return db.prepare('SELECT * FROM notes WHERE id = ?').get(id)
  },
  
  createNote: (title: string, content: string, category: string = 'general', tags: string = '') => {
    const stmt = db.prepare(`
      INSERT INTO notes (title, content, category, tags) 
      VALUES (?, ?, ?, ?)
    `)
    return stmt.run(title, content, category, tags)
  },
  
  updateNote: (id: number, title: string, content: string, category: string, tags: string) => {
    const stmt = db.prepare(`
      UPDATE notes 
      SET title = ?, content = ?, category = ?, tags = ?, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ?
    `)
    return stmt.run(title, content, category, tags, id)
  },
  
  deleteNote: (id: number) => {
    return db.prepare('DELETE FROM notes WHERE id = ?').run(id)
  },
  
  // 对话操作
  getConversationsBySession: (sessionId: string) => {
    return db.prepare('SELECT * FROM conversations WHERE session_id = ? ORDER BY created_at ASC').all(sessionId)
  },
  
  addConversation: (sessionId: string, role: string, content: string, metadata: string = '{}') => {
    const stmt = db.prepare(`
      INSERT INTO conversations (session_id, role, content, metadata) 
      VALUES (?, ?, ?, ?)
    `)
    return stmt.run(sessionId, role, content, metadata)
  },
  
  // 记忆操作
  getAllMemories: () => {
    return db.prepare('SELECT * FROM memories ORDER BY importance DESC, updated_at DESC').all()
  },
  
  getMemoryByKey: (key: string) => {
    return db.prepare('SELECT * FROM memories WHERE key = ?').get(key)
  },
  
  setMemory: (key: string, value: string, category: string = 'general', importance: number = 1) => {
    const stmt = db.prepare(`
      INSERT INTO memories (key, value, category, importance) 
      VALUES (?, ?, ?, ?)
      ON CONFLICT(key) DO UPDATE SET 
        value = excluded.value,
        category = excluded.category,
        importance = excluded.importance,
        updated_at = CURRENT_TIMESTAMP
    `)
    return stmt.run(key, value, category, importance)
  },
  
  deleteMemory: (key: string) => {
    return db.prepare('DELETE FROM memories WHERE key = ?').run(key)
  },
  
  // 搜索功能
  searchNotes: (query: string) => {
    return db.prepare(`
      SELECT * FROM notes 
      WHERE title LIKE ? OR content LIKE ? OR tags LIKE ?
      ORDER BY updated_at DESC
    `).all(`%${query}%`, `%${query}%`, `%${query}%`)
  },
  
  searchMemories: (query: string) => {
    return db.prepare(`
      SELECT * FROM memories 
      WHERE key LIKE ? OR value LIKE ? OR category LIKE ?
      ORDER BY importance DESC
    `).all(`%${query}%`, `%${query}%`, `%${query}%`)
  }
}
