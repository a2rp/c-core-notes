// bestPractices/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiShield,
    FiFileText,
    FiLayers,
    FiAlertTriangle,
    FiLock,
    FiCode,
} from "react-icons/fi";

const BestPractices = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
            <button
                type="button"
                className="topicHeader"
                onClick={toggle}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiShield />
                </span>

                <span className="title">Best Practices</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        In C, small mistakes can become big bugs. Best practices
                        help you write code that is readable, testable, and
                        safer. The main idea is simple - control your memory,
                        validate inputs, and keep your code organized.
                    </p>
                </div>

                {/* Code structure */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        Code structure
                    </h3>
                    <p className="p">
                        Keep each file focused. Split large programs into
                        modules. Use meaningful function names and keep
                        functions small. One function should do one job.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - simple project layout
                        </div>
                        <pre className="code">
                            {`// src layout
// - src/main.c
// - src/math_utils.c
// - include/math_utils.h

// output - easier to read and maintain`}
                        </pre>
                    </div>
                </div>

                {/* Header file separation */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiFileText />
                        </span>
                        Header file separation
                    </h3>
                    <p className="p">
                        Put function declarations in headers and implementations
                        in .c files. This keeps modules clean and reusable.
                        Always use include guards to avoid multiple include
                        problems.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - header and source separation
                        </div>
                        <pre className="code">
                            {`// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);

#endif

// math_utils.c
#include "math_utils.h"

int add(int a, int b) {
  return a + b;
}

// output - clean module with proper guard`}
                        </pre>
                    </div>
                </div>

                {/* Defensive programming */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiAlertTriangle />
                        </span>
                        Defensive programming
                    </h3>
                    <p className="p">
                        Assume inputs can be wrong and memory allocation can
                        fail. Check return values. Validate pointers before
                        using them. Return early when something is invalid.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - check malloc and inputs
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>
#include <stdlib.h>

int main() {
  int n = 3;

  if (n <= 0) {
    printf("Invalid n\\n");
    return 0;
  }

  int *arr = (int*)malloc(sizeof(int) * n);
  if (arr == NULL) {
    printf("Allocation failed\\n");
    return 0;
  }

  arr[0] = 10;
  printf("%d\\n", arr[0]); // output - 10

  free(arr);
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                {/* Avoiding buffer overflow */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLock />
                        </span>
                        Avoiding buffer overflow
                    </h3>
                    <p className="p">
                        Buffer overflow happens when you write more data than a
                        buffer can hold. This can crash your program and is also
                        a major security issue. Prefer safer functions like
                        fgets instead of gets. Always set size limits.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - unsafe vs safe input
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  char name[10];

  // unsafe - never use gets
  // gets(name);

  // safe - reads up to sizeof(name) - 1 chars
  fgets(name, sizeof(name), stdin);

  printf("%s", name);
  // output - whatever user typed (up to 9 chars + \\0)
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Tip - avoid scanf("%s", name) for long user input
                        because it can overflow unless you provide a width
                        limit.
                    </div>
                </div>

                {/* Secure coding basics */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiShield />
                        </span>
                        Secure coding basics
                    </h3>
                    <p className="p">
                        Secure C code is about preventing undefined behavior and
                        validating everything. Main rules - initialize
                        variables, check bounds, check return values, avoid
                        dangerous functions, and free memory properly.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Initialize pointers to NULL
                        </li>
                        <li>
                            <span className="dot" />
                            Check bounds before writing to arrays
                        </li>
                        <li>
                            <span className="dot" />
                            Prefer snprintf over sprintf
                        </li>
                        <li>
                            <span className="dot" />
                            Use fgets for input instead of gets
                        </li>
                        <li>
                            <span className="dot" />
                            Free allocated memory and set pointer to NULL after
                            free
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - safe string formatting
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  char out[12];

  // safe - protects buffer size
  snprintf(out, sizeof(out), "%s", "hello");

  printf("%s\\n", out);
  // output - hello
  return 0;
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BestPractices;
