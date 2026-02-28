![Test rules](https://github.com/bundlesec/webpack/actions/workflows/test.yml/badge.svg)

Opengrep / Semgrep rules for auditing webpack configuration security.

## Usage
```bash
opengrep scan -f rules/ /path/to/your/project
```

## Rules
| Rule | Severity | Description |
|------|----------|-------------|
| `define-plugin-process-env` | ERROR | Passing `process.env` to `DefinePlugin` exposes all environment variables in the client bundle |
| `environment-plugin-process-env` | ERROR | Passing `process.env` to `EnvironmentPlugin` exposes all environment variables in the client bundle |

## Contributing
1. Add a rule in `rules/<rule-name>/<rule-name>.yaml`
2. Add a test file in `rules/<rule-name>/<rule-name>.test.js`
3. Run `opengrep test rules/` and make sure all tests pass