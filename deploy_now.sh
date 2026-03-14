#!/bin/bash

# 第二大脑系统 - 一键部署脚本
echo "🚀 第二大脑系统 - 一键部署"
echo "目标域名: claw.20803960.xyz"
echo "部署时间: $(date)"
echo ""

# 检查GitHub远程仓库
if git remote | grep -q origin; then
  echo "📤 推送到GitHub..."
  git add .
  git commit -m "部署: 第二大脑系统 v1.0 - $(date)"
  git push origin main
  echo "✅ 代码推送完成"
else
  echo "❌ 未配置GitHub远程仓库"
  echo ""
  echo "📋 手动部署步骤:"
  echo "1. 访问 https://github.com/new 创建仓库 'second-brain'"
  echo "2. 运行: git remote add origin https://github.com/YOUR_USERNAME/second-brain.git"
  echo "3. 运行: git branch -M main"
  echo "4. 运行: git push -u origin main"
  echo "5. 访问 https://vercel.com 导入仓库"
  echo "6. 配置域名: claw.20803960.xyz"
  echo ""
  exit 1
fi

echo ""
echo "🎉 部署完成！"
echo "📋 下一步:"
echo "1. 访问 https://vercel.com"
echo "2. 导入你的GitHub仓库 'second-brain'"
echo "3. 配置域名: claw.20803960.xyz"
echo "4. 访问 https://claw.20803960.xyz"
echo ""
echo "🦐 红虾AI · 部署完成 · 等待访问"
