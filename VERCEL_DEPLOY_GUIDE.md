# 🚀 Vercel一键部署详细指南

## 📋 部署前准备

### 1. 获取项目文件
项目已打包为：`second-brain.tar.gz`
包含所有源代码和配置文件。

### 2. 解压项目
```bash
tar -xzf second-brain.tar.gz
cd second-brain
```

### 3. 运行部署脚本
```bash
chmod +x deploy.sh
./deploy.sh
```

## 🌐 GitHub仓库设置（第一步）

### 步骤：
1. **访问GitHub**: https://github.com/new
2. **创建新仓库**:
   - Repository name: `second-brain`
   - Description: "第二大脑系统 - 个人知识管理"
   - **不要**初始化README、.gitignore或license
   - 点击"Create repository"

3. **推送代码到GitHub**:
```bash
# 在项目目录中执行
git init
git add .
git commit -m "初始提交: 第二大脑系统"
git branch -M main
git remote add origin https://github.com/你的用户名/second-brain.git
git push -u origin main
```

## 🚀 Vercel部署（第二步）

### 步骤：
1. **访问Vercel**: https://vercel.com
2. **登录**: 使用GitHub账号登录
3. **新建项目**:
   - 点击"New Project"
   - 导入`second-brain`仓库
   - 点击"Import"

4. **项目配置**:
   - **Framework Preset**: Next.js（自动检测）
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
   - 点击"Deploy"

5. **等待部署完成**:
   - 部署通常需要2-5分钟
   - 完成后会显示临时域名，如：`second-brain.vercel.app`

## 🌐 域名配置（第三步）

### 步骤：
1. **进入项目设置**:
   - 在Vercel控制台，点击项目
   - 选择"Settings" → "Domains"

2. **添加域名**:
   - 输入: `claw.20803960.xyz`
   - 点击"Add"

3. **配置DNS记录**:
   Vercel会显示需要配置的DNS记录：
   ```
   类型: CNAME
   名称: claw
   值: cname.vercel-dns.com
   ```

4. **在域名注册商处配置**:
   - 登录您的域名控制面板
   - 添加CNAME记录：
     - 主机名/名称: `claw`
     - 目标/值: `cname.vercel-dns.com`
     - TTL: 自动或3600

5. **等待DNS生效**:
   - 通常需要几分钟到几小时
   - 可以使用命令检查：`dig claw.20803960.xyz`

## ✅ 验证部署

### 1. 访问网站
- 临时地址: `https://second-brain.vercel.app`
- 自定义域名: `https://claw.20803960.xyz`

### 2. 测试功能
- 创建新笔记
- 添加记忆
- 搜索功能
- 响应式设计

### 3. 检查API
- 笔记API: `https://claw.20803960.xyz/api/notes`
- 记忆API: `https://claw.20803960.xyz/api/memories`
- 对话API: `https://claw.20803960.xyz/api/conversations`

## 🔧 故障排除

### 常见问题：

#### 1. 部署失败
- 检查Node.js版本（需要18+）
- 检查package.json依赖
- 查看Vercel部署日志

#### 2. 域名无法访问
- 检查DNS配置是否正确
- 等待DNS传播（最多24小时）
- 使用`nslookup claw.20803960.xyz`检查

#### 3. 数据库错误
- SQLite在Vercel上可能需要额外配置
- 检查`lib/db/index.ts`中的数据库路径

#### 4. 样式不加载
- 检查Tailwind配置
- 确保CSS文件正确引入
- 清除浏览器缓存

## 📞 支持

### 快速帮助：
1. **查看部署日志**: Vercel控制台 → Deployments → 点击部署
2. **检查域名状态**: Vercel控制台 → Domains
3. **本地测试**: `npm run dev` 在本地运行

### 联系方式：
- 项目问题: GitHub Issues
- 部署问题: Vercel Support
- 紧急联系: Telegram @lzxiyu5507

## 🎉 部署成功标志

✅ **所有检查通过**：
1. 网站可访问: `https://claw.20803960.xyz`
2. 功能正常: 笔记、记忆、对话模块
3. 搜索工作: 可以搜索内容
4. 响应式: 手机和电脑显示正常
5. API正常: 所有API返回正确数据

---

**部署时间**: 2026-03-14  
**目标域名**: claw.20803960.xyz  
**构建者**: 红虾AI 🦐  
**为**: 大虾哥哥 🦞
