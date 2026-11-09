// cVsCpp/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiGitBranch,
    FiCpu,
    FiLayers,
    FiCode,
} from "react-icons/fi";

const CVsCpp = () => {
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
                    <FiGitBranch />
                </span>

                <span className="title">C vs C++</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        C and C++ share historical roots but are distinct
                        languages with separate standards. C is primarily
                        procedural; C++ supports procedural, object-oriented,
                        and generic programming.
                    </p>
                </div>

                {/* Key differences */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCpu />
                        </span>
                        Key differences
                    </h3>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />C is primarily organized
                            around functions and data.
                        </li>
                        <li>
                            <span className="dot" />
                            C++ supports procedural and object oriented
                            programming.
                        </li>
                        <li>
                            <span className="dot" />C has no built-in class,
                            inheritance, or member-function mechanism.
                        </li>
                        <li>
                            <span className="dot" />
                            C++ supports classes, inheritance, polymorphism, and
                            encapsulation.
                        </li>
                        <li>
                            <span className="dot" />The examples use C's stdio
                            functions, such as printf and scanf.
                        </li>
                        <li>
                            <span className="dot" />
                            The examples use C++ streams, such as cout and cin.
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            C example
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  printf("Hello from C\\n");
  return 0;
}

// output - Hello from C`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            C++ example
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

int main() {
  cout << "Hello from C++" << endl;
  return 0;
}

// output - Hello from C++`}
                        </pre>
                    </div>
                </div>

                {/* Procedural vs Object Oriented */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        Procedural vs Object Oriented
                    </h3>

                    <p className="p">
                        Procedural programming focuses on functions and step by
                        step instructions. Object oriented programming focuses
                        on objects that combine data and behavior.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Procedural style in C
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

void greet() {
  printf("Hello\\n");
}

int main() {
  greet();
  return 0;
}

// output - Hello`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Object oriented style in C++
                        </div>
                        <pre className="code">
                            {`#include <iostream>
using namespace std;

class Greeter {
public:
  void greet() {
    cout << "Hello" << endl;
  }
};

int main() {
  Greeter g;
  g.greet();
  return 0;
}

// output - Hello`}
                        </pre>
                    </div>

                    <div className="hint">
                        C++ shares its history with C, but it is not a strict
                        superset or a drop-in replacement. Code may need changes
                        when moving between the languages.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CVsCpp;
