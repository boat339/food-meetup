# Foodie Meetup · 美食搭子

一个使用 HTML、CSS、原生 JavaScript 的轻量约饭计划演示网站。填写昵称、选择日期和食物、记录餐厅链接及个人用餐意向，无需后端或构建工具。

## 开始使用

下载仓库后，在项目根目录运行：

```bash
python -m http.server 8000
```

浏览器打开 <http://localhost:8000>。运行需要 Python 3；也可以使用其他静态服务器。

## 页面流程

`index.html` 为唯一首页；其余是流程中的功能子页面。

| 路径 | 职责 |
| --- | --- |
| `index.html` | 欢迎页与昵称 |
| `plan.html` | 选择日期和美食 |
| `restaurant.html` | 餐厅链接、个人意向 |
| `surprise.html` | 保留原项目趣味页面 |
| `assets/css/styles.css` | 共享布局和样式 |
| `assets/js/app.js` | 表单、会话存储及意向交互 |
| `scripts/check.mjs` | HTML、本地链接、资源与脚本语法检查 |
| `docs/MAINTENANCE.md` | 维护说明与验证记录 |

## 数据说明

数据仅保存在当前浏览器标签页的 `sessionStorage` 中，刷新和同标签页跳转可保留，关闭标签页后通常清除。页面不向服务端提交数据，没有账号注册、多人投票、邀请发送或餐厅推荐服务。存储不可用时页面可显示，但跨页数据可能丢失。

## 维护检查

安装 Node.js 22 后执行 `node scripts/check.mjs`。应用本身不依赖 Node.js，也无需安装 npm 包。

## 命名与托管

项目展示名为 **Foodie Meetup（美食搭子）**，建议仓库名为 `foodie-meetup`。本次代码整理未重命名 GitHub 仓库。

当前仓库 `boat339.github.io` 是 GitHub Pages 用户站点的特殊命名。改成 `foodie-meetup` 后，应检查 Pages 设置与发布地址；项目站点常见地址为 `https://boat339.github.io/foodie-meetup/`，以 GitHub Pages 实际显示的地址为准。所有资源与子页面均使用相对路径。

## 许可

尚未指定开源许可证。
