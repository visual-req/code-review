# Workflow

本项目面向“代码评审输出稳定、规则可扩展、便于发布”的工作流。

## Review Execution Workflow

执行 `/code:review` 时，按以下顺序工作：

1. 读取主提示词 `SKILL.md`
2. 读取规则组 `prompts/code-review/*.md`
3. 根据用户指定范围进行扫描与深入审阅
4. 输出报告（Summary + Findings + Positive Notes）
5. 每条 Findings 必须包含：代码位置、代码问题、源代码片段、影响、纠正措施、验证

## Updating Rules

新增或调整规则建议流程：

1. 修改或新增 `prompts/code-review/NN-topic.md`
2. 若新增规则文件，在 `SKILL.md` 的规则引用列表中加入该文件路径
3. 确保规则描述可操作（包含证据与纠正措施方向）

## Release Workflow

1. 修改完成后本地运行安装器自检：

```bash
node bin/code-review.js install --force
```

2. 提交代码并推送：

```bash
git add -A
git commit -m "..."
git push
```
