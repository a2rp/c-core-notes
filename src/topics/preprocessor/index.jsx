// preprocessor/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiHash,
    FiCode,
    FiShield,
    FiLayers,
} from "react-icons/fi";

const Preprocessor = () => {
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
                    <FiHash />
                </span>

                <span className="title">Preprocessor</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        The C preprocessor runs before compilation. It modifies
                        your source code by expanding headers and replacing
                        macros. Think of it as a text processing step that
                        happens before the compiler sees the code.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        #include
                    </h3>
                    <p className="p">
                        #include literally inserts the contents of a header file
                        into your source file. Use angle brackets for standard
                        library headers and quotes for your own local headers.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - standard vs local include
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>   // standard library header
#include "utils.h"   // local project header

// output - no direct output, it changes the source before compile`}
                        </pre>
                    </div>

                    <div className="hint">
                        If you see "file not found" errors, your include path is
                        wrong or the header is missing.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiHash />
                        </span>
                        #define
                    </h3>
                    <p className="p">
                        #define creates a macro. It is a replacement rule. The
                        preprocessor replaces the macro name with its value
                        before compilation.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - constant style macro
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

#define PI 3.14159

int main() {
  printf("%.2f\\n", PI);
  return 0;
}

// output - 3.14`}
                        </pre>
                    </div>

                    <div className="hint">
                        Prefer const variables for typed constants in modern C
                        code, but macros are still common in C projects.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Macros</h3>
                    <p className="p">
                        Macros can also act like functions. They can be faster
                        because there is no function call, but they can be risky
                        because they do not perform type checking. Always use
                        parentheses to avoid precedence bugs.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - function like macro
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

#define SQUARE(x) ((x) * (x))

int main() {
  int n = 5;
  printf("%d\\n", SQUARE(n));
  return 0;
}

// output - 25`}
                        </pre>
                    </div>

                    <div className="hint">
                        Without parentheses, SQUARE(1 + 2) could break. That is
                        why macros are written with extra parentheses.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiShield />
                        </span>
                        Conditional compilation
                    </h3>
                    <p className="p">
                        Conditional compilation lets you include or exclude code
                        depending on conditions. This is commonly used for debug
                        logs, platform specific code, or feature flags.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - debug flag
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

#define DEBUG 1

int main() {
#if DEBUG
  printf("Debug mode\\n");
#endif

  printf("App running\\n");
  return 0;
}

// output - Debug mode
// output - App running`}
                        </pre>
                    </div>

                    <div className="hint">
                        Use conditional compilation to avoid shipping debug logs
                        in production builds.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">#ifdef and #ifndef</h3>
                    <p className="p">
                        #ifdef checks if a macro is defined. #ifndef checks if a
                        macro is not defined. This is most commonly used for
                        header guards, which prevent double includes.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - header guard pattern
                        </div>
                        <pre className="code">
                            {`// utils.h

#ifndef UTILS_H
#define UTILS_H

int add(int a, int b);

#endif

// output - no direct output, prevents duplicate definitions`}
                        </pre>
                    </div>

                    <div className="hint">
                        Without header guards, including the same header twice
                        can cause "redefinition" errors during compilation.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Preprocessor;
