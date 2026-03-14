#!/bin/bash

echo "🚀 第二大脑系统 - Vercel一键部署脚本"
echo "======================================"

# 检查是否安装了必要的工具
check_tools() {
    echo "🔍 检查必要工具..."
    
    if ! command -v git &> /dev/null; then
        echo "❌ Git未安装，请先安装Git"
        exit 1
    fi
    
    if ! command -v node &> /dev/null; then
        echo "❌ Node.js未安装，请先安装Node.js"
        exit 1
    fi
    
    echo "✅ 所有必要工具已安装"
}

# 初始化Git仓库
init_git() {
    echo "📦 初始化Git仓库..."
    
    if [ ! -d ".git" ]; then
        git init
        git add .
        git commit -m "初始提交: 第二大脑系统"
        echo "✅ Git仓库初始化完成"
    else
        echo "⚠️  Git仓库已存在，跳过初始化"
    fi
}

# 创建GitHub仓库（可选）
create_github_repo() {
    echo ""
    echo "🌐 GitHub仓库设置（可选）"
    echo "------------------------"
    echo "1. 访问 https://github.com/new"
    echo "2. 创建新仓库，名称如：second-brain"
    echo "3. 不要初始化README、.gitignore或license"
    echo "4. 创建后，按照提示推送代码："
    echo ""
    echo "   git remote add origin https://github.com/你的用户名/second-brain.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    read -p "按Enter继续..."
}

# Vercel部署指南
vercel_deploy_guide() {
    echo ""
    echo "🚀 Vercel部署指南"
    echo "----------------"
    echo "1. 访问 https://vercel.com"
    echo "2. 使用GitHub登录"
    echo "3. 点击'New Project'"
    echo "4. 导入您的second-brain仓库"
    echo "5. 配置部署："
    echo "   - Framework Preset: Next.js"
    echo "   - Build Command: npm run build"
    echo "   - Output Directory: .next"
    echo "6. 点击'Deploy'"
    echo ""
    echo "⏳ 部署通常需要2-5分钟"
}

# 域名配置指南
domain_config_guide() {
    echo ""
    echo "🌐 域名配置指南"
    echo "--------------"
    echo "域名: claw.20803960.xyz"
    echo ""
    echo "在Vercel中配置域名："
    echo "1. 进入项目设置 → Domains"
    echo "2. 添加域名: claw.20803960.xyz"
    echo "3. 配置DNS记录："
    echo ""
    echo "   类型    | 名称 | 值"
    echo "   --------|------|-----------------"
    echo "   CNAME   | claw | cname.vercel-dns.com"
    echo ""
    echo "4. 等待DNS生效（通常几分钟）"
    echo "5. 访问 https://claw.20803960.xyz"
}

# 本地测试
local_test() {
    echo ""
    echo "🔧 本地测试"
    echo "----------"
    echo "安装依赖: npm install"
    echo "启动开发服务器: npm run dev"
    echo "访问: http://localhost:3000"
    echo ""
    
    read -p "是否现在安装依赖并测试？(y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📦 安装依赖..."
        npm install
        
        if [ $? -eq 0 ]; then
            echo "✅ 依赖安装成功"
            echo ""
            echo "🚀 启动开发服务器..."
            echo "访问 http://localhost:3000"
            echo "按Ctrl+C停止服务器"
            npm run dev
        else
            echo "❌ 依赖安装失败"
        fi
    fi
}

# 主菜单
main_menu() {
    echo ""
    echo "📋 部署选项"
    echo "----------"
    echo "1. 检查环境"
    echo "2. 初始化Git仓库"
    echo "3. 创建GitHub仓库指南"
    echo "4. Vercel部署指南"
    echo "5. 域名配置指南"
    echo "6. 本地测试"
    echo "7. 完整部署流程"
    echo "8. 退出"
    echo ""
}

# 完整部署流程
full_deploy() {
    echo "🎯 开始完整部署流程"
    echo "=================="
    
    check_tools
    echo ""
    init_git
    echo ""
    create_github_repo
    echo ""
    vercel_deploy_guide
    echo ""
    domain_config_guide
    echo ""
    local_test
    
    echo ""
    echo "🎉 部署指南完成！"
    echo "系统将部署到: https://claw.20803960.xyz"
}

# 主程序
clear
echo "🧠 第二大脑系统部署工具"
echo "======================"

while true; do
    main_menu
    read -p "请选择选项 (1-8): " choice
    
    case $choice in
        1) check_tools ;;
        2) init_git ;;
        3) create_github_repo ;;
        4) vercel_deploy_guide ;;
        5) domain_config_guide ;;
        6) local_test ;;
        7) full_deploy ;;
        8) 
            echo "👋 再见！"
            exit 0
            ;;
        *) echo "❌ 无效选项，请重试" ;;
    esac
    
    echo ""
    read -p "按Enter继续..."
    clear
done
