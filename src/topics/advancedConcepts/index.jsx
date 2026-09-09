// advancedConcepts/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiZap,
    FiTerminal,
    FiCode,
    FiAlertTriangle,
    FiCpu,
    FiActivity,
} from "react-icons/fi";

const AdvancedConcepts = () => {
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
                    <FiZap />
                </span>

                <span className="title">Advanced Concepts</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        These topics appear in real systems code and interviews.
                        The goal is not to memorize everything, but to
                        understand what can go wrong and why C requires careful
                        thinking.
                    </p>
                </div>

                {/* Command line arguments */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiTerminal />
                        </span>
                        Command line arguments
                    </h3>
                    <p className="p">
                        main can receive arguments from the command line.
                        <code>argc</code> is the count, and <code>argv</code> is
                        an array of strings. <code>argv[0]</code> is the program
                        name.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main(int argc, char *argv[]) {
  printf("argc = %d\\n", argc);
  if (argc > 1) {
    printf("first arg = %s\\n", argv[1]);
  }
  return 0;
}

/*
run - ./app hello

output - argc = 2
output - first arg = hello
*/`}
                        </pre>
                    </div>
                </div>

                {/* const keyword */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCpu />
                        </span>
                        const keyword
                    </h3>
                    <p className="p">
                        const means the variable should not be modified through
                        that name. It helps prevent accidental changes and
                        improves readability.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  const int maxUsers = 100;
  printf("%d\\n", maxUsers);

  // maxUsers = 200; // error - assignment of read-only variable
  return 0;
}

// output - 100`}
                        </pre>
                    </div>

                    <div className="hint">
                        const does not always mean the value is stored in ROM.
                        It means you are not allowed to modify it through that
                        identifier.
                    </div>
                </div>

                {/* volatile keyword */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiActivity />
                        </span>
                        volatile keyword
                    </h3>
                    <p className="p">
                        volatile tells the compiler "this value can change
                        unexpectedly" - for example hardware registers or a
                        variable changed by an interrupt. It prevents the
                        compiler from optimizing away repeated reads.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Concept example
                        </div>
                        <pre className="code">
                            {`volatile int flag = 0;

while (flag == 0) {
  // wait until flag changes
}

/*
idea - some other system part changes flag
output - loop stops when flag becomes 1
*/`}
                        </pre>
                    </div>

                    <div className="hint">
                        volatile is common in embedded systems. It is not a
                        replacement for thread safety.
                    </div>
                </div>

                {/* Inline functions */}
                <div className="section">
                    <h3 className="h3">Inline functions</h3>
                    <p className="p">
                        inline suggests the compiler to replace a function call
                        with the function body to reduce call overhead. The
                        compiler may ignore it. Use it for very small functions.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

static inline int add(int a, int b) {
  return a + b;
}

int main() {
  printf("%d\\n", add(2, 3));
  return 0;
}

// output - 5`}
                        </pre>
                    </div>
                </div>

                {/* Static variables in functions */}
                <div className="section">
                    <h3 className="h3">Static variables in functions</h3>
                    <p className="p">
                        A static local variable keeps its value between function
                        calls. It is initialized only once and lives for the
                        entire program runtime.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

void hit() {
  static int count = 0;
  count++;
  printf("count = %d\\n", count);
}

int main() {
  hit();
  hit();
  hit();
  return 0;
}

/*
output - count = 1
output - count = 2
output - count = 3
*/`}
                        </pre>
                    </div>
                </div>

                {/* Memory alignment */}
                <div className="section">
                    <h3 className="h3">Memory alignment</h3>
                    <p className="p">
                        CPUs often read memory faster when data is aligned to
                        certain boundaries. Compilers may insert padding inside
                        structs to keep alignment, which can increase struct
                        size.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - struct padding
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

struct A {
  char c;   // 1 byte
  int x;    // 4 bytes
};

int main() {
  printf("%zu\\n", sizeof(struct A));
  return 0;
}

/*
output - often 8 (because of padding)
note - exact value depends on compiler and platform
*/`}
                        </pre>
                    </div>

                    <div className="hint">
                        Padding is normal. It improves performance. In low level
                        code, struct size matters, so alignment is important.
                    </div>
                </div>

                {/* Undefined behavior */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiAlertTriangle />
                        </span>
                        Undefined behavior
                    </h3>
                    <p className="p">
                        Undefined behavior means the C standard does not define
                        what happens. The program might crash, work sometimes,
                        or do something unpredictable. Compilers are allowed to
                        make aggressive optimizations assuming undefined
                        behavior never happens.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - reading uninitialized variable
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  int x;
  printf("%d\\n", x); // undefined behavior - x is uninitialized
  return 0;
}

/*
output - unpredictable garbage value
*/`}
                        </pre>
                    </div>

                    <div className="hint">
                        Another common undefined behavior is accessing an array
                        out of bounds.
                    </div>
                </div>

                {/* Segmentation fault concept */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiAlertTriangle />
                        </span>
                        Segmentation fault concept
                    </h3>
                    <p className="p">
                        A segmentation fault happens when your program tries to
                        access memory it is not allowed to access. This often
                        comes from invalid pointers, freed memory usage, or
                        writing outside array bounds.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - dereferencing NULL
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  int *p = NULL;
  *p = 10; // crash - invalid memory access
  printf("%d\\n", *p);
  return 0;
}

/*
output - program crashes (segmentation fault)
*/`}
                        </pre>
                    </div>

                    <div className="hint">
                        Most segfaults are pointer mistakes. Use a debugger and
                        print statements to locate where the invalid access
                        happens.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AdvancedConcepts;
