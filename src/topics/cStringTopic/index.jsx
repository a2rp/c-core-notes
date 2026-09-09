import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiType, FiCode } from "react-icons/fi";

const CStringTopic = () => {
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
                    <FiType />
                </span>

                <span className="title">Strings</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        In C, a string is not a built in type. It is simply a
                        character array that ends with a special null character
                        '\0'.
                    </p>
                </div>

                {/* Character arrays */}
                <div className="section">
                    <h3>Character arrays</h3>
                    <p className="p">
                        Strings are stored in arrays of characters.
                    </p>

                    <pre className="code">
                        {`char name[] = "Ashish";

printf("%s", name);

// output - Ashish`}
                    </pre>
                </div>

                {/* Null character */}
                <div className="section">
                    <h3>Null character</h3>
                    <p className="p">
                        Every C string ends with '\0'. This tells the compiler
                        where the string stops.
                    </p>

                    <pre className="code">
                        {`char word[6] = {'H','e','l','l','o','\\0'};

printf("%s", word);

// output - Hello`}
                    </pre>
                </div>

                {/* gets and fgets */}
                <div className="section">
                    <h3>gets and fgets</h3>
                    <p className="p">
                        gets is unsafe and removed in modern C. Always use fgets
                        to avoid buffer overflow.
                    </p>

                    <pre className="code">
                        {`char str[20];

fgets(str, sizeof(str), stdin);

printf("%s", str);

// input - Hello
// output - Hello`}
                    </pre>
                </div>

                {/* puts */}
                <div className="section">
                    <h3>puts</h3>
                    <p className="p">
                        puts prints a string and automatically adds a new line.
                    </p>

                    <pre className="code">
                        {`char msg[] = "C Language";

puts(msg);

// output - C Language`}
                    </pre>
                </div>

                {/* String functions */}
                <div className="section">
                    <h3>
                        String handling functions - strlen strcpy strcat strcmp
                    </h3>
                    <p className="p">
                        These functions are available in string.h.
                    </p>

                    <pre className="code">
                        {`#include <string.h>

char a[20] = "Hello";
char b[] = "World";

printf("%lu", strlen(a));
// output - 5

strcpy(a, b);
printf("%s", a);
// output - World

strcat(a, "!");
printf("%s", a);
// output - World!

printf("%d", strcmp("A", "B"));
// output - negative value`}
                    </pre>
                </div>

                {/* String and pointers */}
                <div className="section">
                    <h3>String and pointers relation</h3>
                    <p className="p">
                        A string can also be accessed using pointers. The array
                        name itself acts like a pointer to the first character.
                    </p>

                    <pre className="code">
                        {`char str[] = "Code";
char *ptr = str;

printf("%c", *ptr);
// output - C

printf("%c", *(ptr + 1));
// output - o`}
                    </pre>

                    <p className="p">
                        Pointer based strings are powerful but modifying string
                        literals directly can cause undefined behavior.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CStringTopic;
