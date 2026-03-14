# 第二大脑系统 - Vercel一键部署指南

## 🚀 快速部署步骤

### 1. 准备代码
- 本项目已包含所有必要文件
- 使用Next.js 15 + TypeScript + Tailwind CSS
- SQLite数据库（无需外部数据库）

### 2. 部署到Vercel
1. 访问 https://vercel.com
2. 点击"New Project"
3. 导入GitHub仓库（或直接拖拽本文件夹）
4. 配置项目：
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. 点击"Deploy"

### 3. 配置域名
1. 在Vercel项目设置中，选择"Domains"
2. 添加域名：`claw.20803960.xyz`
3. 按照提示配置DNS记录：
   - 类型：CNAME
   - 名称：claw
   - 值：cname.vercel-dns.com
4. 等待DNS生效（通常几分钟）

### 4. 访问系统
- 部署完成后访问：https://claw.20803960.xyz
- 默认功能：笔记管理、对话记录、记忆库、智能搜索

## 📁 项目结构
```
second-brain/
├── app/                    # Next.js App Router
│   ├── api/               # API路由
│   ├── notes/             # 笔记页面
│   ├── memories/          # 记忆页面
│   └── page.tsx           # 首页
├── components/            # React组件
├── lib/                   # 工具函数
│   └── db/               # 数据库模块
├── data/                  # SQLite数据库文件
└── public/               # 静态资源
```

## 🔧 技术栈
- **前端**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **后端**: Next.js API Routes
- **数据库**: SQLite (better-sqlite3)
- **图标**: Lucide React
- **日期**: date-fns

## 🌐 环境要求
- Node.js