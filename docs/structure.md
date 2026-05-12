# Structure

本项目按“提示词（skill）+ 规则组（prompts）”组织，便于维护与扩展。

## Top Level

- `SKILL.md`：主提示词，定义 `/code:review` 的行为与输出格式
- `prompts/code-review/*.md`：按主题拆分的评审规则组
- `bin/code-review.js`：npx 安装器，把文件复制到工作区
- `docs/`：使用与维护文档

## Installed Layout (Workspace)

执行 `npx github:visual-req/code-review install` 后写入：

- `.skills/code/SKILL.md`
- `prompts/code-review/*.md`

## Prompts

`prompts/code-review/` 当前包含：

- `01-correctness.md`
- `02-security.md`
- `03-reliability.md`
- `04-performance.md`
- `05-maintainability.md`
- `06-testing.md`
- `07-consistency.md`
- `08-architecture.md`
