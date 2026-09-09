import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiCpu, FiCode } from "react-icons/fi";

const Operators = () => {
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
                    <FiCpu />
                </span>

                <span className="title">Operators</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* Arithmetic */}
                <Section
                    title="Arithmetic operators"
                    code={`int a = 10;
int b = 3;

printf("%d\\n", a + b); // 13
printf("%d\\n", a - b); // 7
printf("%d\\n", a * b); // 30
printf("%d\\n", a / b); // 3
printf("%d\\n", a % b); // 1`}
                />

                {/* Relational */}
                <Section
                    title="Relational operators"
                    code={`int x = 5;
int y = 10;

printf("%d\\n", x < y);  // 1
printf("%d\\n", x > y);  // 0
printf("%d\\n", x == y); // 0
printf("%d\\n", x != y); // 1`}
                />

                {/* Logical */}
                <Section
                    title="Logical operators"
                    code={`int a = 1;
int b = 0;

printf("%d\\n", a && b); // 0
printf("%d\\n", a || b); // 1
printf("%d\\n", !a);     // 0`}
                />

                {/* Assignment */}
                <Section
                    title="Assignment operators"
                    code={`int n = 5;

n += 3;  // n = 8
n -= 2;  // n = 6
n *= 2;  // n = 12
n /= 3;  // n = 4`}
                />

                {/* Increment */}
                <Section
                    title="Increment and decrement"
                    code={`int i = 5;

printf("%d\\n", i++); // 5
printf("%d\\n", i);   // 6

printf("%d\\n", ++i); // 7`}
                />

                {/* Bitwise */}
                <Section
                    title="Bitwise operators"
                    code={`int a = 5;  // 0101
int b = 3;  // 0011

printf("%d\\n", a & b); // 1
printf("%d\\n", a | b); // 7
printf("%d\\n", a ^ b); // 6
printf("%d\\n", a << 1); // 10`}
                />

                {/* Ternary */}
                <Section
                    title="Ternary operator"
                    code={`int age = 18;

char *result = (age >= 18) ? "Adult" : "Minor";
printf("%s\\n", result); // Adult`}
                />

                {/* Precedence */}
                <Section
                    title="Operator precedence"
                    code={`int result = 5 + 2 * 3;
printf("%d\\n", result); // 11

// multiplication runs before addition`}
                />

                {/* Type casting */}
                <Section
                    title="Type casting"
                    code={`int a = 5;
int b = 2;

float result = (float)a / b;
printf("%.2f\\n", result); // 2.50`}
                />
            </div>
        </Styled.Wrapper>
    );
};

const Section = ({ title, code }) => (
    <div className="section">
        <h3 className="h3">{title}</h3>
        <pre className="code">{code}</pre>
    </div>
);

export default Operators;
