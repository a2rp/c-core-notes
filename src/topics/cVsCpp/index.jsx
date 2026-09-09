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
                        C and C++ are closely related languages, but they follow
                        different programming paradigms. C focuses on procedural
                        programming, while C++ adds object oriented features on
                        top of C.
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
                            <span className="dot" />C supports procedural
                            programming only.
                        </li>
                        <li>
                            <span className="dot" />
                            C++ supports procedural and object oriented
                            programming.
                        </li>
                        <li>
                            <span className="dot" />C does not support classes
                            and objects.
                        </li>
                        <li>
                            <span className="dot" />
                            C++ supports classes, inheritance, polymorphism, and
                            encapsulation.
                        </li>
                        <li>
                            <span className="dot" />C uses printf and scanf for
                            IO.
                        </li>
                        <li>
                            <span className="dot" />
                            C++ uses cout and cin for IO.
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
                        C++ is often described as an extension of C, but modern
                        C++ is much more powerful and feature rich than C.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CVsCpp;
