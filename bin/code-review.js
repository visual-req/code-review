#!/usr/bin/env node

const fs = require("node:fs/promises");
const path = require("node:path");

async function pathExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

function parseArgs(argv) {
  const args = argv.slice(2);
  const options = {
    force: false,
    help: false,
  };
  const positionals = [];

  for (const a of args) {
    if (a === "--force" || a === "-f") options.force = true;
    else if (a === "--help" || a === "-h") options.help = true;
    else positionals.push(a);
  }

  return { options, positionals };
}

function printHelp() {
  process.stdout.write(
    [
      "code-review (npx installer)",
      "",
      "用法：",
      "  npx github:visual-req/code-review install [--force]",
      "",
      "说明：",
      "  将本包内的 SKILL.md 与 prompts 安装到当前目录：",
      "    - .trae/skills/code/SKILL.md",
      "    - prompts/code-review/*.md",
      "",
      "选项：",
      "  -f, --force   覆盖已存在文件",
      "  -h, --help    显示帮助",
      "",
    ].join("\n")
  );
}

async function copyFileChecked(src, dst, force) {
  if (!force && (await pathExists(dst))) {
    throw new Error(`目标已存在：${dst}（使用 --force 覆盖）`);
  }
  await fs.mkdir(path.dirname(dst), { recursive: true });
  await fs.copyFile(src, dst);
}

async function install({ cwd, force }) {
  const pkgRoot = path.resolve(__dirname, "..");
  const srcSkill = path.join(pkgRoot, "SKILL.md");
  const srcPromptsDir = path.join(pkgRoot, "prompts", "code-review");

  const dstSkill = path.join(cwd, ".trae", "skills", "code", "SKILL.md");
  const dstPromptsDir = path.join(cwd, "prompts", "code-review");

  if (!(await pathExists(srcSkill))) {
    throw new Error(`未找到源文件：${srcSkill}`);
  }
  if (!(await pathExists(srcPromptsDir))) {
    throw new Error(`未找到 prompts 目录：${srcPromptsDir}`);
  }

  const promptFiles = (await fs.readdir(srcPromptsDir)).filter((f) =>
    f.endsWith(".md")
  );

  await copyFileChecked(srcSkill, dstSkill, force);
  await fs.mkdir(dstPromptsDir, { recursive: true });

  for (const f of promptFiles) {
    await copyFileChecked(
      path.join(srcPromptsDir, f),
      path.join(dstPromptsDir, f),
      force
    );
  }

  process.stdout.write(
    [
      "安装完成：",
      `- ${dstSkill}`,
      `- ${dstPromptsDir}${path.sep}*.md`,
      "",
    ].join("\n")
  );
}

async function main() {
  const { options, positionals } = parseArgs(process.argv);
  const subcommand = positionals[0] ?? "install";

  if (options.help || subcommand === "help" || subcommand === "--help") {
    printHelp();
    return;
  }

  if (subcommand !== "install") {
    process.stderr.write(`未知命令：${subcommand}\n\n`);
    printHelp();
    process.exitCode = 2;
    return;
  }

  await install({ cwd: process.cwd(), force: options.force });
}

main().catch((err) => {
  process.stderr.write(String(err?.message || err) + "\n");
  process.exitCode = 1;
});
