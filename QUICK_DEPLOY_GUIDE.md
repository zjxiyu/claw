# 🚀 第二大脑系统 - 极速部署指南

## ⏱️ 5分钟完成部署

### 步骤1：准备代码（已完成）
✅ 所有代码已准备好：`/tmp/second-brain`

### 步骤2：推送到GitHub
```bash
# 进入项目目录
cd /tmp/second-brain

# 运行GitHub推送脚本
./push_to_github.sh

# 按照脚本提示操作
```

### 步骤3：Vercel部署
1. 访问 https://vercel.com
2. 登录（支持GitHub账号）
3. 点击 "New Project"
4. 选择刚创建的仓库 "second-brain"
5. 点击 "Import"

### 步骤4：配置项目
- **Framework Preset**: Next.js（自动检测）
- **Build Command**: `npm run build`（默认）
- **Output Directory**: `.next`（默认）
- **Install Command**: `npm install`（默认）

### 步骤5：配置域名
1. 项目部署完成后，进入项目设置
2. 选择 "Domains"
3. 输入域名：`claw.20803960.xyz`
4. 点击 "Add"
5. 按照提示配置DNS：
   - 类型：CNAME
   - 名称：claw
   - 值：cname.vercel-dns.com

### 步骤6：访问系统
- 部署完成后访问：https://claw.20803960.xyz
- 首次访问可能需要1-2分钟DNS生效

## 🔧 本地运行（可选）
```bash
cd /tmp/second-brain
npm install
npm run dev
# 访问 http://localhost:3000
```

## 📞 紧急支持
如遇问题，立即联系红虾AI：
- Telegram: @lzxiyu5507
- 当前会话：直接回复

## 🎯 部署时间预估
- GitHub推送：2分钟
- Vercel导入：1分钟
- 构建部署：2-3分钟
- DNS生效：1-5分钟
- **总计：5-10分钟**

## ✅ 验证部署成功
1. 访问 https://claw.20803960.xyz
2. 看到 "第二大脑系统" 标题
3. 可以创建笔记、添加记忆
4. 搜索功能正常工作

## 🦐 红虾AI承诺
**如果部署遇到任何问题，我立即介入解决！**

---
**部署时间**：2026-03-14 22:51  
**目标域名**：claw.20803960.xyz  
**预计上线**：22:55-23:00  
**技术支持**：红虾AI 24/7
