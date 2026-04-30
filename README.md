# Code Review Skill（Trae）

一个可直接放入 Trae 工作区使用的代码评审 Skill：通过 `/code:review` 对指定本地代码库进行系统化评审，并按严重度输出可执行的改进建议。

## 包含内容

- Skill 提示词：`SKILL.md`
- 评审规则组（外置 prompts）：`prompts/code-review/*.md`

## 安装

将本仓库内容合并到你的 Trae 工作区根目录，并把 `SKILL.md` 放入 `.trae/skills/code/`（保持目录结构不变）：

- `.trae/skills/code/SKILL.md`（来自本仓库根目录 `SKILL.md`）
- `prompts/code-review/*.md`

## 使用

在 Trae 输入：

- `/code:review /abs/path/to/repo`
- `/code:review /abs/path/to/repo 只看 src/auth 与 src/api，上线前风险优先`

Skill 会读取 `prompts/code-review/` 下的规则文件，并输出：

- Summary（High/Medium/Low 风险数量与优先级）
- Findings（按严重度排序：影响/证据/建议/验证）
- Positive Notes（最多 5 条）

## 文档

- docs/installation.md
- docs/usage.md
- docs/prompts.md
