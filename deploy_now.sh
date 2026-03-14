#!/bin/bash
echo "🚀 开始第二大脑系统Vercel一键部署..."
echo "======================================"

# 检查必要文件
echo "📁 检查项目文件..."
if [ ! -f "package.json" ]; then
    echo "❌ package.json 不存在"
    exit 1
fi

if [ ! -f "vercel.json" ]; then
    echo "❌ vercel.json 不存在"
    exit 1
fi

echo "✅ 项目文件检查完成"

# 创建部署包
echo "📦 创建部署包..."
DEPLOY_DIR="/tmp/second-brain-deploy"
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# 复制所有必要文件
cp -r app components lib data public . "$DEPLOY_DIR" 2>/dev/null || true
cp package.json vercel.json tsconfig.json next.config.js tailwind.config.js postcss.config.js "$DEPLOY_DIR"
cp README.md DEPLOY.md PREVIEW.md "$DEPLOY_DIR"

echo "✅ 部署包创建完成: $DEPLOY_DIR"

# 显示部署步骤
echo ""
echo "🎯 Vercel部署步骤："
echo "=================="
echo ""
echo "1. 📤 上传代码到GitHub"
echo "   将 $DEPLOY_DIR 推送到GitHub仓库"
echo ""
echo "2. 🌐 访问 https://vercel.com"
echo "   点击 'New Project' → 'Import Git Repository'"
echo ""
echo "3. ⚙️ 配置项目"
echo "   • Framework Preset: Next.js"
echo "   • Build Command: npm run build"
echo "   • Output Directory: .next"
echo "   • Install Command: npm install"
echo ""
echo "4. 🔗 配置域名"
echo "   • 在项目设置中，选择 'Domains'"
echo "   • 添加域名: claw.20803960.xyz"
echo "   • 配置DNS: CNAME → cname.vercel-dns.com"
echo ""
echo "5. 🚀 点击 'Deploy'"
echo "   等待约2-5分钟部署完成"
echo ""
echo "6. ✅ 访问系统"
echo "   https://claw.20803960.xyz"
echo ""
echo "📞 如需帮助，随时联系红虾AI！"
echo ""
echo "🦐 红虾AI · 2026-03-14"
