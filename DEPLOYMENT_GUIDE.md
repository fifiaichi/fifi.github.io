# GitHub Pages 部署教程

## 概述

本教程将指导您将个人作品集网站部署到 GitHub Pages。GitHub Pages 提供免费的静态网站托管服务，非常适合展示作品集。

---

## 前提条件

1. **GitHub 账号**：您需要一个 GitHub 账号（如果没有，请先注册）
2. **Git 工具**：确保您的电脑已安装 Git
3. **项目文件**：您的作品集网站文件（HTML、CSS、JavaScript、图片等）

---

## 部署步骤

### 步骤 1：创建 GitHub 仓库

1. 登录 GitHub：[https://github.com](https://github.com)
2. 点击页面右上角的 **New** 按钮创建新仓库
3. 在 **Repository name** 处输入仓库名称，格式为：`your-username.github.io`
   - 例如：`zhang-shengfei.github.io`
4. 选择 **Public** 仓库类型
5. 点击 **Create repository** 创建仓库

### 步骤 2：配置本地项目

1. 打开终端或命令提示符，进入您的项目目录：
```bash
cd e:\作品集\personal-resume
```

2. 初始化 Git 仓库（如果尚未初始化）：
```bash
git init
```

3. 添加远程仓库地址：
```bash
git remote add origin https://github.com/your-username/your-username.github.io.git
```

### 步骤 3：配置 GitHub Pages 设置

1. 打开您的 GitHub 仓库页面
2. 点击上方导航栏的 **Settings**
3. 在左侧菜单中找到并点击 **Pages**
4. 在 **Source** 部分：
   - **Branch**: 选择 `main`（或 `master`）
   - **Folder**: 选择 `/ (root)`
5. 点击 **Save** 保存设置

### 步骤 4：推送代码到 GitHub

1. 添加所有文件到暂存区：
```bash
git add .
```

2. 提交更改：
```bash
git commit -m "Initial commit: Deploy portfolio website"
```

3. 推送到 GitHub：
```bash
git push -u origin main
```

### 步骤 5：等待部署完成

1. 推送完成后，返回 GitHub Pages 设置页面
2. 等待几分钟，GitHub 会自动构建并部署您的网站
3. 部署完成后，您会看到类似这样的提示：
   ```
   Your site is live at https://your-username.github.io/
   ```

---

## 常见问题

### Q1：网站没有更新？

如果推送后网站没有更新，请尝试：
1. 等待几分钟，GitHub Pages 可能需要一些时间来更新
2. 清除浏览器缓存（Ctrl + Shift + R 强制刷新）
3. 检查 GitHub Pages 设置中的部署状态

### Q2：图片不显示？

确保图片路径正确：
- 使用相对路径，例如：`image/game/天工开物封面.jpg`
- 不要使用绝对路径，例如：`/image/game/xxx.jpg`

### Q3：自定义域名配置？

如果您想使用自定义域名：
1. 在 GitHub Pages 设置中找到 **Custom domain** 选项
2. 输入您的域名，例如：`portfolio.yourdomain.com`
3. 在域名服务商处添加 CNAME 记录，指向 `your-username.github.io`

---

## 项目结构建议

确保您的项目结构如下：

```
your-username.github.io/
├── index.html           # 首页
├── project-detail.html  # 作品详情页
├── animation-list.html  # 动画列表页
├── portfolio-pdf.html   # PDF版本
├── test-project-detail.html  # 测试报告页
├── image/               # 图片资源文件夹
│   ├── game/
│   ├── animation/
│   ├── certs/
│   ├── cultural/
│   ├── illustration/
│   └── web/
└── DEPLOYMENT_GUIDE.md  # 部署指南
```

---

## 部署验证

部署完成后，访问以下 URL 验证：

| 页面 | URL |
|------|-----|
| 首页 | `https://your-username.github.io/` |
| 作品详情 | `https://your-username.github.io/project-detail.html?id=tian-gong-zao-wu` |
| 动画列表 | `https://your-username.github.io/animation-list.html` |
| PDF版本 | `https://your-username.github.io/portfolio-pdf.html` |

---

## 更新网站

每次更新网站内容后，只需执行以下命令：

```bash
git add .
git commit -m "Update: 描述您的更改"
git push origin main
```

---

## 注意事项

1. **文件命名**：不要使用中文文件名（虽然 GitHub 支持，但可能在某些情况下出现问题）
2. **文件大小**：GitHub Pages 有 1GB 的存储空间限制
3. **视频文件**：大型视频文件建议上传到视频平台（如 Bilibili），然后嵌入到页面中
4. **HTTPS**：GitHub Pages 默认启用 HTTPS，确保所有资源引用使用相对路径

---

## 技术支持

如果遇到问题，可以：
1. 查看 GitHub Pages 官方文档：[https://docs.github.com/en/pages](https://docs.github.com/en/pages)
2. 检查仓库的 **Actions** 标签页，查看部署日志