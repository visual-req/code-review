# 安装说明

## 目标

把 Skill 与其外置评审规则（prompts）放到同一个 Trae 工作区中，使 `/code:review` 可以引用到规则文件。

## 目录结构要求

把以下路径合并到你的 Trae 工作区根目录（路径必须一致），并将本仓库根目录的 `SKILL.md` 复制到 `.trae/skills/code/SKILL.md`：

- `.trae/skills/code/SKILL.md`（来自本仓库根目录 `SKILL.md`）
- `prompts/code-review/01-correctness.md`
- `prompts/code-review/02-security.md`
- `prompts/code-review/03-reliability.md`
- `prompts/code-review/04-performance.md`
- `prompts/code-review/05-maintainability.md`
- `prompts/code-review/08-architecture.md`
- `prompts/code-review/06-testing.md`
- `prompts/code-review/07-consistency.md`

## 校验

1. 在 Trae 中能看到 skill：`code`
2. 运行 `/code:review <某个本地仓库绝对路径>`，并确认输出中引用了 `prompts/code-review/` 下的规则文件
