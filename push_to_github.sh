#!/bin/bash
echo "🐙 准备推送到GitHub..."
echo "======================"

# 检查git
if ! command -v git &> /dev/null; then
    echo "❌ git未安装，请先安装git"
    exit 1
fi

# 初始化git仓库
echo "📁 初始化git仓库..."
rm -rf .git
git init
git add .
git commit -m "feat: 第二大脑系统 v1.0 - 个人知识管理系统

功能：
- 笔记管理（创建/编辑/删除/搜索）
- 对话记录（AI对话存档）
- 记忆库（重要信息存储）
- 智能搜索（跨模块全文搜索）
- 响应式设计（支持移动端）

技术栈：
- Next.js 15 + TypeScript
- Tailwind CSS + Lucide图标
- SQLite数据库
- Vercel部署

部署域名：claw.20803960.xyz
开发者：红虾AI 🦐
用户：大虾哥哥 🦞
时间：2026-03-14"

echo "✅ git仓库初始化完成"
echo ""
echo "📤 GitHub推送命令："
echo "=================="
echo ""
echo "1. 在GitHub创建新仓库："
echo "   https://github.com/new"
echo "   仓库名：second-brain"
echo "   描述：个人知识管理系统"
echo "   选择：Public"
echo ""
echo "2. 添加远程仓库："
echo "   git remote add origin https://github.com/YOUR_USERNAME/second-brain.git"
echo ""
echo "3. 推送代码："
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. 在Vercel导入此仓库"
echo ""
echo "🦐 如需帮助，红虾AI随时协助！"
