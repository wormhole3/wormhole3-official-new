# Cloudflare Pages 部署配置说明

## 问题：Workers Builds 失败

如果看到 "Workers Builds: wormhole3-official-new" 失败，这是因为 Cloudflare Pages 尝试构建 Worker，但这是一个纯静态网站项目，不需要 Worker。

## 解决方案

### 方法 1：在 Cloudflare Dashboard 中禁用 Worker 构建（推荐）

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Pages** → 选择项目 **wormhole3-official-new**
3. 进入 **Settings** → **Functions**
4. 确保以下选项已禁用：
   - **Enable Functions** (如果存在)
   - **Enable Workers** (如果存在)
5. 保存设置

### 方法 2：使用 Cloudflare Pages 的 GitHub 集成（替代方案）

如果 GitHub Actions 部署有问题，可以：

1. 在 Cloudflare Dashboard 中：
   - 进入 **Pages** → **Create a project**
   - 选择 **Connect to Git**
   - 连接你的 GitHub 仓库
   - 设置构建配置：
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Root directory**: `/` (项目根目录)
     - **Node version**: `20`

2. 这样 Cloudflare 会自动检测这是一个静态网站，不会尝试构建 Worker。

## 当前配置

- ✅ 已删除 `wrangler.toml` 文件
- ✅ 已删除 `worker.js` 文件
- ✅ 已配置 `_redirects` 文件用于客户端路由
- ✅ GitHub Actions 工作流已配置为部署静态文件

## 路由配置

`_redirects` 文件已配置，所有路由都会重定向到 `index.html`，支持 React Router 的客户端路由。

