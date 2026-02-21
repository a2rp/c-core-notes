// cIntroduction/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiTerminal,
    FiCpu,
    FiBookOpen,
    FiLayers,
    FiCode,
    FiZap,
} from "react-icons/fi";

const CIntroduction = () => {
    const [open, setOpen] = useState(false);

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
                    <FiTerminal />
                </span>

                <span className="title">Introduction to C</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        C is where you learn how programs work at a lower level.
                        You write logic, control memory, and understand the
                        compilation pipeline. If you learn C properly, every
                        other language becomes easier.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCpu />
                        </span>
                        What is C
                    </h3>
                    <p className="p">
                        C is a general purpose, procedural programming language
                        used for systems programming, embedded software, and
                        performance critical code. It gives you direct access to
                        memory and low level control.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiBookOpen />
                        </span>
                        History of C
                    </h3>
                    <p className="p">
                        C was created by Dennis Ritchie at Bell Labs in the
                        early 1970s. It was designed to build the Unix operating
                        system and became one of the most widely used languages.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiZap />
                        </span>
                        Why C is important
                    </h3>
                    <p className="p">
                        C teaches core computer science concepts like memory
                        layout, pointers, compilation, and performance. It is
                        still used in OS kernels, device drivers, embedded
                        systems, databases, and high performance libraries.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        Compiled language concept
                    </h3>
                    <p className="p">
                        C is a compiled language. Your C code is converted into
                        machine code (binary instructions) before it runs. This
                        is different from languages that mostly run inside a
                        runtime or virtual machine.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - compile and run
                        </div>
                        <pre className="code">
                            {`gcc main.c -o app
./app

// output - depends on your program`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Structure of a C program</h3>
                    <p className="p">
                        A basic C program typically has header includes, the
                        main function, and statements inside main. Large
                        programs are split into multiple source and header
                        files.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Minimal structure
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  printf("Hello C\\n");
  return 0;
}

// output - Hello C`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">main function</h3>
                    <p className="p">
                        main is the entry point of a C program. Execution starts
                        from main. A return value of 0 usually means success.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            main return value
                        </div>
                        <pre className="code">
                            {`int main() {
  return 0; // success
}

// output - program exits successfully`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Header files</h3>
                    <p className="p">
                        Header files contain declarations like function
                        prototypes, macros, and type definitions. You include
                        them using #include. Common headers are stdio.h,
                        stdlib.h, string.h, and math.h.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - include header
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

// stdio.h provides printf and scanf`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Standard library overview</h3>
                    <p className="p">
                        The C standard library provides reusable functions for
                        input output, memory management, strings, math, and
                        more. You use it by including the correct header.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            stdio.h - input output
                        </li>
                        <li>
                            <span className="dot" />
                            stdlib.h - malloc, free, exit
                        </li>
                        <li>
                            <span className="dot" />
                            string.h - strlen, strcpy, strcmp
                        </li>
                        <li>
                            <span className="dot" />
                            math.h - sqrt, pow
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">
                        How compilation works - preprocess compile link execute
                    </h3>
                    <p className="p">
                        C programs go through a pipeline. First the preprocessor
                        expands includes and macros. Then the compiler converts
                        code to assembly or object code. Then the linker
                        combines object files and libraries into an executable.
                        Finally the OS loads and executes it.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Simple pipeline view
                        </div>
                        <pre className="code">
                            {`// 1 - preprocess
gcc -E main.c -o main.i

// 2 - compile
gcc -S main.i -o main.s

// 3 - assemble
gcc -c main.s -o main.o

// 4 - link
gcc main.o -o app

// 5 - execute
./app`}
                        </pre>
                    </div>

                    <div className="hint">
                        If you see "undefined reference" errors, that is usually
                        a linking problem.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CIntroduction;
