import { matchResults } from "../__helpers__/utils";
import { problemMatcher as problemMatcherJson } from "../.github/problem-matcher.json";

import type { ProblemMatcher, ProblemPattern } from "github-actions-problem-matcher-typings";

const problemMatcher: ProblemMatcher = problemMatcherJson[0];

describe("problemMatcher", () => {
  it("has the correct owner", () => {
    expect(problemMatcher.owner).toEqual("markdownlint");
  });

  it("has one pattern", () => {
    expect(problemMatcher.pattern.length).toEqual(1);
  });

  describe("pattern", () => {
    const reportOutput = [
      "README.md:12:81 MD013/line-length Line length [Expected: 80; Actual: 149]",
      "docs/README.md:21:81 MD013/line-length Line length [Expected: 80; Actual: 119]",
      "docs/README.md:14 MD012/no-multiple-blanks Multiple consecutive blank lines [Expected: 1; Actual: 2]",
    ];

    let pattern: ProblemPattern;
    let results: RegExpExecArray[];

    beforeEach(() => {
      pattern = problemMatcher.pattern[0];

      const regexp = new RegExp(pattern.regexp);

      results = matchResults(reportOutput, regexp);
    });

    it("matches violations", () => {
      expect(results.length).toEqual(3);
    });

    it("matches violation details", () => {
      expect(results[0][pattern.file]).toEqual("README.md");
      expect(results[0][pattern.line]).toEqual("12");
      expect(results[0][pattern.column]).toEqual("81");
      expect(results[0][pattern.code]).toEqual("MD013/line-length");
      expect(results[0][pattern.message]).toEqual("Line length [Expected: 80; Actual: 149]");
    });

    it("matches violation details in sub folder", () => {
      expect(results[1][pattern.file]).toEqual("docs/README.md");
      expect(results[1][pattern.line]).toEqual("21");
      expect(results[1][pattern.column]).toEqual("81");
      expect(results[1][pattern.code]).toEqual("MD013/line-length");
      expect(results[1][pattern.message]).toEqual("Line length [Expected: 80; Actual: 119]");
    });

    it("matches violation details without column", () => {
      expect(results[2][pattern.file]).toEqual("docs/README.md");
      expect(results[2][pattern.line]).toEqual("14");
      expect(results[2][pattern.column]).toBeUndefined();
      expect(results[2][pattern.code]).toEqual("MD012/no-multiple-blanks");
      expect(results[2][pattern.message]).toEqual("Multiple consecutive blank lines [Expected: 1; Actual: 2]");
    });
  });
});
