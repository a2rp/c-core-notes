import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiGitBranch,
    FiCode,
} from "react-icons/fi";

const CControlFlow = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper>
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

                <span className="title">Control Flow</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Control flow determines how your program makes decisions
                        and repeats actions. In C, this includes conditions and
                        loops.
                    </p>
                </div>

                {/* if */}
                <div className="section">
                    <h3 className="h3">if</h3>
                    <p className="p">
                        Executes code only if the condition is true.
                    </p>
                    <pre className="code">
                        {`#include <stdio.h>

int main() {
    int age = 20;

    if (age >= 18) {
        printf("Adult\\n");
    }

    return 0;
}

// output - Adult`}
                    </pre>
                </div>

                {/* if else */}
                <div className="section">
                    <h3 className="h3">if else</h3>
                    <p className="p">
                        Runs one block if condition is true, another if false.
                    </p>
                    <pre className="code">
                        {`if (age >= 18) {
    printf("Adult\\n");
} else {
    printf("Minor\\n");
}

// output - Adult`}
                    </pre>
                </div>

                {/* nested if */}
                <div className="section">
                    <h3 className="h3">nested if</h3>
                    <p className="p">
                        An if statement inside another if statement.
                    </p>
                    <pre className="code">
                        {`int num = 10;

if (num > 0) {
    if (num % 2 == 0) {
        printf("Positive Even\\n");
    }
}

// output - Positive Even`}
                    </pre>
                </div>

                {/* switch */}
                <div className="section">
                    <h3 className="h3">switch</h3>
                    <p className="p">
                        Used when checking one variable against multiple fixed
                        values.
                    </p>
                    <pre className="code">
                        {`int day = 2;

switch (day) {
    case 1:
        printf("Monday\\n");
        break;
    case 2:
        printf("Tuesday\\n");
        break;
    default:
        printf("Invalid\\n");
}

// output - Tuesday`}
                    </pre>
                </div>

                {/* for loop */}
                <div className="section">
                    <h3 className="h3">for loop</h3>
                    <p className="p">
                        Used when the number of iterations is known.
                    </p>
                    <pre className="code">
                        {`for (int i = 1; i <= 3; i++) {
    printf("%d\\n", i);
}

// output - 1
// output - 2
// output - 3`}
                    </pre>
                </div>

                {/* while loop */}
                <div className="section">
                    <h3 className="h3">while loop</h3>
                    <p className="p">Repeats while condition remains true.</p>
                    <pre className="code">
                        {`int i = 1;

while (i <= 3) {
    printf("%d\\n", i);
    i++;
}

// output - 1
// output - 2
// output - 3`}
                    </pre>
                </div>

                {/* do while */}
                <div className="section">
                    <h3 className="h3">do while</h3>
                    <p className="p">
                        Executes at least once before checking condition.
                    </p>
                    <pre className="code">
                        {`int i = 1;

do {
    printf("%d\\n", i);
    i++;
} while (i <= 3);

// output - 1
// output - 2
// output - 3`}
                    </pre>
                </div>

                {/* break */}
                <div className="section">
                    <h3 className="h3">break</h3>
                    <p className="p">Immediately exits a loop or switch.</p>
                    <pre className="code">
                        {`for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    printf("%d\\n", i);
}

// output - 1
// output - 2`}
                    </pre>
                </div>

                {/* continue */}
                <div className="section">
                    <h3 className="h3">continue</h3>
                    <p className="p">
                        Skips the current iteration and continues the loop.
                    </p>
                    <pre className="code">
                        {`for (int i = 1; i <= 4; i++) {
    if (i == 2) {
        continue;
    }
    printf("%d\\n", i);
}

// output - 1
// output - 3
// output - 4`}
                    </pre>
                </div>

                {/* goto */}
                <div className="section">
                    <h3 className="h3">goto</h3>
                    <p className="p">
                        Jumps to a labeled statement. Rarely recommended because
                        it can make code harder to understand.
                    </p>
                    <pre className="code">
                        {`#include <stdio.h>

int main() {
    int i = 0;

start:
    printf("%d\\n", i);
    i++;

    if (i < 3)
        goto start;

    return 0;
}

// output - 0
// output - 1
// output - 2`}
                    </pre>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CControlFlow;
