import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiRepeat,
    FiLayers,
} from "react-icons/fi";

const CFunctions = () => {
    const [open, setOpen] = useState(false);

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
                    <FiCode />
                </span>

                <span className="title">Functions</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Functions help break programs into reusable blocks. They
                        improve structure, readability, and modular design.
                    </p>
                </div>

                {/* Function declaration */}
                <div className="section">
                    <h3 className="h3">Function declaration</h3>
                    <p className="p">
                        A declaration tells the compiler about a function before
                        it is used.
                    </p>

                    <pre className="code">
                        {`int add(int a, int b); // declaration`}
                    </pre>
                </div>

                {/* Function definition */}
                <div className="section">
                    <h3 className="h3">Function definition</h3>
                    <p className="p">
                        A definition contains the actual implementation.
                    </p>

                    <pre className="code">
                        {`int add(int a, int b) {
    return a + b;
}`}
                    </pre>
                </div>

                {/* Function call */}
                <div className="section">
                    <h3 className="h3">Function call</h3>
                    <p className="p">Calling a function executes its code.</p>

                    <pre className="code">
                        {`int result = add(5, 3);
printf("%d", result);

// output - 8`}
                    </pre>
                </div>

                {/* Return values */}
                <div className="section">
                    <h3 className="h3">Return values</h3>
                    <p className="p">
                        A function can return a value using return.
                    </p>

                    <pre className="code">
                        {`int square(int x) {
    return x * x;
}

printf("%d", square(4));

// output - 16`}
                    </pre>
                </div>

                {/* Void functions */}
                <div className="section">
                    <h3 className="h3">Void functions</h3>
                    <p className="p">
                        A void function does not return anything.
                    </p>

                    <pre className="code">
                        {`void greet() {
    printf("Hello\\n");
}

greet();

// output - Hello`}
                    </pre>
                </div>

                {/* Parameter passing */}
                <div className="section">
                    <h3 className="h3">Parameter passing</h3>
                    <p className="p">
                        Parameters allow functions to receive input values.
                    </p>

                    <pre className="code">
                        {`int multiply(int a, int b) {
    return a * b;
}`}
                    </pre>
                </div>

                {/* Call by value */}
                <div className="section">
                    <h3 className="h3">Call by value</h3>
                    <p className="p">
                        C uses call by value. The function receives a copy of
                        the variable. Original value does not change.
                    </p>

                    <pre className="code">
                        {`void change(int x) {
    x = 100;
}

int main() {
    int a = 10;
    change(a);
    printf("%d", a);
}

// output - 10`}
                    </pre>
                </div>

                {/* Recursion */}
                <div className="section">
                    <h3 className="h3">
                        <FiRepeat /> Recursion
                    </h3>
                    <p className="p">
                        Recursion is when a function calls itself. It must have
                        a base condition to stop.
                    </p>

                    <pre className="code">
                        {`int factorial(int n) {
    if (n == 1)
        return 1;
    return n * factorial(n - 1);
}

printf("%d", factorial(4));

// output - 24`}
                    </pre>
                </div>

                {/* Scope of variables */}
                <div className="section">
                    <h3 className="h3">
                        <FiLayers /> Scope of variables
                    </h3>
                    <p className="p">
                        Scope defines where a variable can be accessed. Local
                        variables exist inside functions. Global variables exist
                        outside functions.
                    </p>

                    <pre className="code">
                        {`int globalVar = 10;

void test() {
    int localVar = 5;
}`}
                    </pre>
                </div>

                {/* Storage classes */}
                <div className="section">
                    <h3 className="h3">
                        Storage classes - auto static extern register
                    </h3>
                    <p className="p">
                        Storage classes define lifetime and visibility.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" /> auto - default local
                            variable
                        </li>
                        <li>
                            <span className="dot" /> static - retains value
                            between function calls
                        </li>
                        <li>
                            <span className="dot" /> extern - refers to global
                            variable from another file
                        </li>
                        <li>
                            <span className="dot" /> register - suggests storing
                            variable in CPU register
                        </li>
                    </ul>

                    <pre className="code">
                        {`void counter() {
    static int count = 0;
    count++;
    printf("%d\\n", count);
}

// calling counter twice
// output - 1
// output - 2`}
                    </pre>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CFunctions;
