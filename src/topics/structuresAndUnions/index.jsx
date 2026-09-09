// structuresAndUnions/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiBox,
    FiCode,
    FiLayers,
    FiLink,
} from "react-icons/fi";

const StructuresAndUnions = () => {
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
                    <FiBox />
                </span>

                <span className="title">Structures and Unions</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Structures and unions let you group related data into a
                        single type. struct stores all members separately. union
                        shares memory between members.
                    </p>
                </div>

                {/* struct keyword */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        struct keyword
                    </h3>
                    <p className="p">
                        struct creates a custom type that groups multiple fields
                        under one name. Each field has its own memory.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - define and create
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

struct Student {
  int id;
  char grade;
};

int main() {
  struct Student s1 = { 101, 'A' };
  printf("%d %c\\n", s1.id, s1.grade);

  return 0;
}

// output - 101 A`}
                        </pre>
                    </div>
                </div>

                {/* Accessing members */}
                <div className="section">
                    <h3 className="h3">Accessing members</h3>
                    <p className="p">
                        Use dot operator to access members of a struct variable.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - dot operator
                        </div>
                        <pre className="code">
                            {`struct Student s = { 5, 'B' };
printf("%d\\n", s.id);   // output - 5
printf("%c\\n", s.grade); // output - B`}
                        </pre>
                    </div>
                </div>

                {/* Array of structures */}
                <div className="section">
                    <h3 className="h3">Array of structures</h3>
                    <p className="p">
                        An array of structs stores multiple records of the same
                        type, like a mini table of data.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - array of structs
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

struct Student {
  int id;
  char grade;
};

int main() {
  struct Student arr[2] = {
    { 1, 'A' },
    { 2, 'C' }
  };

  printf("%d %c\\n", arr[0].id, arr[0].grade);
  printf("%d %c\\n", arr[1].id, arr[1].grade);

  return 0;
}

// output - 1 A
// output - 2 C`}
                        </pre>
                    </div>
                </div>

                {/* Pointer to structure */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLink />
                        </span>
                        Pointer to structure
                    </h3>
                    <p className="p">
                        A pointer can store the address of a struct. Use arrow
                        operator -&gt; to access members through a pointer.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - arrow operator
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

struct Student {
  int id;
  char grade;
};

int main() {
  struct Student s = { 7, 'A' };
  struct Student *ptr = &s;

  printf("%d\\n", ptr->id);
  printf("%c\\n", ptr->grade);

  return 0;
}

// output - 7
// output - A`}
                        </pre>
                    </div>

                    <div className="hint">
                        ptr-&gt;id is the same as (*ptr).id - arrow is just
                        cleaner.
                    </div>
                </div>

                {/* Nested structures */}
                <div className="section">
                    <h3 className="h3">Nested structures</h3>
                    <p className="p">
                        A struct can contain another struct. This is useful for
                        grouping related details inside one record.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - nested struct
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

struct Address {
  int pin;
};

struct Person {
  int id;
  struct Address addr;
};

int main() {
  struct Person p = { 10, { 560049 } };
  printf("%d\\n", p.id);
  printf("%d\\n", p.addr.pin);

  return 0;
}

// output - 10
// output - 560049`}
                        </pre>
                    </div>
                </div>

                {/* Union concept */}
                <div className="section">
                    <h3 className="h3">Union concept</h3>
                    <p className="p">
                        union is like struct, but all members share the same
                        memory location. Only one member should be used at a
                        time, because writing to one overwrites the others.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - union overwrite
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

union Data {
  int n;
  char ch;
};

int main() {
  union Data d;

  d.n = 65;
  printf("%d\\n", d.n);  // output - 65

  d.ch = 'A';
  printf("%c\\n", d.ch); // output - A

  // after setting d.ch, d.n is not reliable anymore
  // output - undefined value if printed

  return 0;
}`}
                        </pre>
                    </div>
                </div>

                {/* Difference between struct and union */}
                <div className="section">
                    <h3 className="h3">Difference between struct and union</h3>
                    <p className="p">
                        struct allocates separate memory for each member, so all
                        values can exist together. union shares memory across
                        members, so only one value should be used at a time.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            struct - size is roughly sum of members (with
                            padding)
                        </li>
                        <li>
                            <span className="dot" />
                            union - size is max of member sizes
                        </li>
                        <li>
                            <span className="dot" />
                            struct - all fields usable together
                        </li>
                        <li>
                            <span className="dot" />
                            union - one field at a time
                        </li>
                    </ul>
                </div>

                {/* typedef */}
                <div className="section">
                    <h3 className="h3">typedef</h3>
                    <p className="p">
                        typedef creates an alias for an existing type. It is
                        commonly used with structs to avoid writing struct again
                        and again.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - typedef with struct
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

typedef struct {
  int id;
  char grade;
} Student;

int main() {
  Student s = { 12, 'B' };
  printf("%d %c\\n", s.id, s.grade);

  return 0;
}

// output - 12 B`}
                        </pre>
                    </div>

                    <div className="hint">
                        typedef makes your code shorter and cleaner, especially
                        when structs are used everywhere.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default StructuresAndUnions;
