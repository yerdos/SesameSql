# SQL AI 助手

SQL AI 助手是一个基于 Web 的工具，旨在帮助开发者和数据库管理员快速格式化、执行 SQL 查询并提供 AI 优化建议。未来，计划将此项目扩展为在线工具，使用户可以在浏览器中直接使用这些功能。

## 功能

1. **AI 优化建议**：使用 AI 技术（未来实现），分析查询并提供优化建议，如索引使用、查询效率改进等。
2. **SQL 格式化**：通过集成 `sql-formatter` 库，自动格式化 SQL 查询，使其更易读。
3. **SQL 查询执行**：允许用户输入 SQL 查询并运行查询，显示结果。[TODO]
4. **切换选项卡**：用户可以通过选项卡切换来查看格式化的 SQL 查询或 AI 优化建议。
5. **简单用户管理**：提供登录功能，允许用户登录后保存查询历史和优化建议（未来功能）。

## 使用说明

### 1. 安装

要在本地运行此项目，请确保已安装以下工具：

- [Node.js](https://nodejs.org/)：用于前端构建
- [Tailwind CSS](https://tailwindcss.com/)：用于页面样式
- [sql-formatter](https://github.com/sql-formatter-org/sql-formatter) 和 [Highlight.js](https://highlightjs.org/)：用于 SQL 语法高亮和格式化

克隆此仓库：

```bash
git clone https://github.com/yerdos/ZhimaSql.git
cd sql-helper
