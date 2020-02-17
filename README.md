# GitHub Actions Problem Matcher

[![CI Workflow Status](https://github.com/xt0rted/problem-matcher/workflows/CI/badge.svg)](https://github.com/xt0rted/problem-matcher/actions?query=workflow%3ACI)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=xt0rted/problem-matcher)](https://dependabot.com)

A GitHub Actions template to easily add or remove a problem matcher to workflows.

## Setup

This template has been designed so the only code change you should have to make is in [problem-matcher.json](.github/problem-matcher.json) and optionally the tests for it.
When editing the `problem-matcher.json` you should set the owner name to the application and/or report style being matched.
Examples of this are `eslint`, `eslint-compact`, or `eslint-stylish`.

Make sure to also update the `action.yml` and `package.json` files.

Sometimes report messages might not include a line or column number and your regular expression doesn't pick those lines up.
To help avoid those situations tests are provided to give coverage to the regular expression.

A useful resource to view and test your regular expression is [regex101.com](https://regex101.com/).

## Usage

```yml
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: xt0rted/problem-matcher@v1
      - run: echo "Run some tests that will be picked up"
      - uses: xt0rted/problem-matcher@v1
        with:
          action: remove
      - run: echo "Run some more tests that shouldn't be picked up"
```

## Options

Name | Allowed values | Description
-- | -- | --
`action` | `add` (default), `remove` | If the problem matcher should be registered or removed

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
