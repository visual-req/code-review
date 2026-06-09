# Concept

This project is organized as a prompt-driven review workflow, with review rules maintained as modular prompt groups.

## Core Artifacts

- `SKILL.md`: the main prompt that defines how `/code:review` should behave and what the output must contain
- `prompts/code-review/*.md`: rule groups (correctness, security, reliability, performance, maintainability, testing, consistency, architecture)

## Output Model

Each finding should be actionable and include at least:

- Code location (file + line range, or function/class)
- Issue (what is wrong, not only what happened)
- Source snippet (minimum relevant code)
- Impact (why it matters, when it triggers)
- Corrective action (how to fix)
- Verification (tests or reproduction steps)

## Installation Layout

The installer copies files into a workspace in an editor-agnostic way:

- `.skills/code/SKILL.md`
- `prompts/code-review/*.md`
