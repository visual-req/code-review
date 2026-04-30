# Code Review Skill

通过 `/code:review` 对指定本地代码库进行系统化评审，并按严重度输出可执行的改进建议。

## 包含内容

- Skill 提示词：`SKILL.md`
- 评审规则组（外置 prompts）：`prompts/code-review/*.md`

## 安装

在你的工作区根目录执行：

```bash
npx github:visual-req/code-review install
```

将会写入：

- `.trae/skills/code/SKILL.md`
- `prompts/code-review/*.md`

如需覆盖已存在文件：

```bash
npx github:visual-req/code-review install --force
```

## 使用

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
