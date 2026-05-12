# Getting Started

## Prerequisites

- Node.js >= 18

## Install

在你的工作区根目录执行：

```bash
npx github:visual-req/code-review install
```

如需覆盖已存在文件：

```bash
npx github:visual-req/code-review install --force
```

## Verify

安装完成后应存在：

- `.skills/code/SKILL.md`
- `prompts/code-review/*.md`

## Run

在支持 `/code:review` 命令的环境中执行（示例）：

- `/code:review /abs/path/to/repo`
- `/code:review /abs/path/to/repo 只看 src/auth 与 src/api，上线前风险优先`
