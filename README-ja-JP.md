<h3 align="center">code-review</h3>
<p align="center"><code>/code:review</code> でローカルのコードベースを体系的にレビューし、場所・抜粋・影響・修正案を含む構造化された指摘を出力します。</p>
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

## 内容

- メインプロンプト：`SKILL.md`
- ルール（prompts）：`prompts/code-review/*.md`

## インストール

ワークスペースのルートで実行：

```bash
npx github:visual-req/code-review install
```

書き込み先：

- `.skills/code/SKILL.md`
- `prompts/code-review/*.md`

既存ファイルを上書きする場合：

```bash
npx github:visual-req/code-review install --force
```

## 実行

- `/code:review /abs/path/to/repo`
- `/code:review /abs/path/to/repo src/auth と src/api を重点、リリース前リスク優先`

出力：

- Summary（High/Medium/Low）
- Findings（場所・問題・コード抜粋・影響・修正案・検証）
- Positive Notes（最大 5 件）

## ドキュメント

- docs/getting-started.md
- docs/concept.md
- docs/workflow.md
- docs/structure.md
- docs/prompts.md
