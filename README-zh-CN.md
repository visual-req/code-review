<h3 align="center">code-review</h3>
<p align="center">通过 <code>/code:review</code> 对指定本地代码库进行系统化评审，输出包含代码位置、片段、影响与纠正措施的结构化结论。</p>
<p align="center">
  <a href="https://github.com/visual-req/code-review/releases"><img src="https://img.shields.io/github/v/release/visual-req/code-review" alt="Release"></a>
  <a href="https://github.com/visual-req/code-review"><img src="https://img.shields.io/github/stars/visual-req/code-review?style=flat-square" alt="Stars"></a>
  <a href="https://github.com/visual-req/code-review/issues"><img src="https://img.shields.io/github/issues/visual-req/code-review?style=flat-square" alt="Issues"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License"></a>
</p>
<p align="center">
  <a href="README.md">English</a> · <a href="README-zh-CN.md">中文</a> · <a href="README-ja-JP.md">日本語</a>
  <br/>
  <a href="docs/getting-started.md">Getting started</a> · <a href="docs/concept.md">Concept</a> · <a href="docs/workflow.md">Workflow</a> · <a href="docs/structure.md">Structure</a> · <a href="docs/prompts.md">Prompts</a> · <a href="docs/usage.md">Usage</a>
</p>
<hr />

Version: 0.1.0 · License: MIT ([LICENSE](LICENSE))

## 包含内容

- 主提示词：`SKILL.md`
- 规则组（prompts）：`prompts/code-review/*.md`

## 安装

在你的工作区根目录执行：

```bash
npx github:visual-req/code-review install
```

将会写入：

- `.skills/code/SKILL.md`
- `prompts/code-review/*.md`

如需覆盖已存在文件：

```bash
npx github:visual-req/code-review install --force
```

## 运行

- `/code:review /abs/path/to/repo`
- `/code:review /abs/path/to/repo 重点看 src/auth 与 src/api，上线前风险优先`

输出包含：

- Summary（High/Medium/Low）
- Findings（包含：代码位置、代码问题、源代码片段、影响、纠正措施、验证）
- Positive Notes（最多 5 条）

## 文档

- docs/getting-started.md
- docs/concept.md
- docs/workflow.md
- docs/structure.md
- docs/prompts.md
