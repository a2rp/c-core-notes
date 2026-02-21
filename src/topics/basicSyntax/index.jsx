import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiType,
    FiHash,
} from "react-icons/fi";

const BasicSyntax = () => {
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
                    <FiCode />
                </span>
                <span className="title">Basic Syntax</span>
                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* Comments */}
                <div className="section">
                    <h3 className="h3">
                        Comments - single line and multi line
                    </h3>
                    <pre className="code">{`// single line comment

/* 
   multi line comment
*/`}</pre>
                </div>

                {/* printf and scanf */}
                <div className="section">
                    <h3 className="h3">printf and scanf</h3>
                    <p className="p">
                        printf prints output. scanf reads input from user.
                    </p>
                    <pre className="code">{`#include <stdio.h>

int main() {
  int age;
  printf("Enter age: ");
  scanf("%d", &age);
  printf("You entered %d\\n", age);
  return 0;
}

// input - 21
// output - You entered 21`}</pre>
                </div>

                {/* Escape sequences */}
                <div className="section">
                    <h3 className="h3">Escape sequences</h3>
                    <pre className="code">{`\\n  new line
\\t  tab
\\\"  double quote
\\\\  backslash

printf("Hello\\nWorld");

// output
// Hello
// World`}</pre>
                </div>

                {/* Tokens */}
                <div className="section">
                    <h3 className="h3">Tokens in C</h3>
                    <p className="p">
                        Smallest units in C program - keywords, identifiers,
                        constants, operators, symbols.
                    </p>
                </div>

                {/* Keywords */}
                <div className="section">
                    <h3 className="h3">Keywords</h3>
                    <p className="p">
                        Reserved words like int, return, if, while.
                    </p>
                </div>

                {/* Identifiers */}
                <div className="section">
                    <h3 className="h3">Identifiers</h3>
                    <p className="p">Names given to variables and functions.</p>
                    <pre className="code">{`int totalMarks;
float priceValue;`}</pre>
                </div>

                {/* Constants */}
                <div className="section">
                    <h3 className="h3">Constants</h3>
                    <pre className="code">{`const int MAX = 100;
#define PI 3.14`}</pre>
                </div>

                {/* Variables */}
                <div className="section">
                    <h3 className="h3">Variables</h3>
                    <pre className="code">{`int age = 20;
float price = 99.5;`}</pre>
                </div>

                {/* Data Types */}
                <div className="section">
                    <h3 className="h3">Data types - int float double char</h3>
                    <pre className="code">{`int a = 10;
float b = 5.5;
double c = 10.123456;
char d = 'A';

printf("%d %f %lf %c", a, b, c, d);

// output - 10 5.500000 10.123456 A`}</pre>
                </div>

                {/* Modifiers */}
                <div className="section">
                    <h3 className="h3">
                        Modifiers - short long signed unsigned
                    </h3>
                    <pre className="code">{`short int x = 10;
long int y = 100000L;
unsigned int z = 50;`}</pre>
                </div>

                {/* Format Specifiers */}
                <div className="section">
                    <h3 className="h3">Format specifiers</h3>
                    <pre className="code">{`%d   int
%f   float
%lf  double
%c   char
%s   string

int age = 25;
printf("Age is %d", age);

// output - Age is 25`}</pre>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BasicSyntax;
