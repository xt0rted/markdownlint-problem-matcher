# Problem Matcher for markdownlint-cli

[![CI](https://github.com/xt0rted/markdownlint-problem-matcher/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/xt0rted/markdownlint-problem-matcher/actions/workflows/ci.yml)
[![CodeQL](https://github.com/xt0rted/markdownlint-problem-matcher/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/xt0rted/markdownlint-problem-matcher/actions/workflows/codeql-analysis.yml)

Adds a problem matcher that will detect errors from [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) and create annotations for them.

## Usage

```yml
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: xt0rted/markdownlint-problem-matcher@v3
      - run: markdownlint **/*.md --ignore node_modules
```

## Options

Name | Allowed values | Description
-- | -- | --
`action` | `add` (default), `remove` | If the problem matcher should be registered or removed

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
