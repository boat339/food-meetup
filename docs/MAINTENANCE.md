# 维护与整理记录

## 原项目

基于 `boat339/boat339.github.io` 的 main 提交 `7fc65f5fa9dd1d336106dfafc515f41b9cdd606a`，原有 index、second、third、forth 四个 HTML 页面。功能是约饭表单与餐厅意向演示，适合名称 Foodie Meetup（美食搭子）。

## 整理内容

- 保留 index.html 为唯一首页，功能页改为 plan.html、restaurant.html、surprise.html；删除旧编号文件，旧页面直链将失效。
- 提取重复 CSS 到 assets/css/styles.css，交互统一放入 assets/js/app.js。
- 统一中文语言属性、页面标题、viewport、表单标签和输入类型。
- 删除原首页对不存在的 favicon、manifest、CSS 和 JS 的引用。
- 修复第二页未闭合的 placeholder 引号，以及第三页缺少 vote 函数和错误 onclick 表达式。
- 添加昵称、计划和餐厅链接的会话保存、三个意向按钮及状态恢复；说明其为个人本地演示。

## 修改与验证

修改共享样式和脚本后运行 `node scripts/check.mjs`。修改页面时保持资源和导航为相对路径，以支持项目子路径托管。

本次验证：

- HTML、标题、viewport、语言、唯一 ID、标签引用、本地链接、资源存在性与 JS 语法检查通过。
- 临时 LinkeDOM 环境检查昵称保存/导航、本地日期、其他美食初始显示状态、计划摘要、三种意向选择/恢复与损坏存储恢复，通过。
- DOM 检查中表单校验 API 使用测试替身；未验证真实浏览器原生校验提示。
- 未完成实际浏览器视觉、移动端、原生日期选择器、系统语音等浏览器专属功能验收。项目本身不使用语音。

人工验收：依次填写昵称、日期、其他美食和餐厅网址；确认返回修改与刷新保留当前标签页数据；尝试三个意向按钮；在窄屏确认无横向滚动。

## 仓库重命名

建议新仓库名 `foodie-meetup`。当前连接器没有重命名接口，此代码整理不等于已重命名仓库。手动重命名后应复核 GitHub Pages 发布地址和本地 remote。参考：https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
