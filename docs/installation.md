# 安装说明

## 目标

把 Skill 与其外置评审规则（prompts）放到同一个工作区中，使 `/code:review` 可以引用到规则文件。

## npx 安装（推荐）

在工作区根目录执行：

```bash
npx github:visual-req/code-review install
```

该命令将写入：

- `.skills/code/SKILL.md`
- `prompts/code-review/*.md`

如需覆盖已存在文件：

```bash
npx github:visual-req/code-review install --force
```

## 校验

1. 能看到 skill：`code`
2. 运行 `/code:review <某个本地仓库绝对路径>`，并确认输出中引用了 `prompts/code-review/` 下的规则文件
