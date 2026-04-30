# 评审规则（Prompts）

## 目的

把评审规则从 Skill 主提示词中拆分出来，便于版本管理、增量扩展与按主题维护。

## 规则组列表

规则文件位于 `prompts/code-review/`，每个文件对应一个规则组：

- 01-correctness.md：正确性（边界、不变量、幂等、错误传播）
- 02-security.md：安全（注入、鉴权授权、敏感信息、依赖与供应链）
- 03-reliability.md：可靠性（超时取消、重试、资源管理、并发一致性）
- 04-performance.md：性能与成本（热路径、数据访问、缓存、观测开销）
- 05-maintainability.md：可维护性与可读性（边界、契约、重复、可读性）
- 08-architecture.md：架构（分层边界、依赖方向、耦合、演进与隔离）
- 06-testing.md：测试与可验证性（覆盖、类型、可测试性设计）
- 07-consistency.md：规范一致性（风格、日志指标、配置、错误码）

## 使用方式

Skill 在执行 `/code:review` 时应先读取这些规则文件，并将发现映射为：

- 风险 / 影响 / 证据 / 建议 / 工作量 / 验证

## 扩展规则

新增规则时建议：

1. 新增一个 `prompts/code-review/NN-topic.md`
2. 在本仓库 `SKILL.md` 的规则引用列表中加入该文件路径
