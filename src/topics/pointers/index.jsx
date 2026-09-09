// pointers/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiZap,
    FiCode,
    FiAlertTriangle,
    FiCpu,
} from "react-icons/fi";

const Pointers = () => {
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

                <span className="title">Pointers</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Pointers store memory addresses. They let you work
                        directly with memory, build efficient data structures,
                        and write low level code. This is where C becomes
                        powerful - and also where bugs become dangerous.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">What is a pointer</h3>
                    <p className="p">
                        A pointer is a variable that stores the address of
                        another variable. It does not store the value directly.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`int x = 10;
int *p = &x;

printf("%d\\n", x);
printf("%d\\n", *p);

// output - 10
// output - 10`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Address operator</h3>
                    <p className="p">
                        The address operator & gives the memory address of a
                        variable.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`int x = 10;
printf("%p\\n", (void *)&x);

// output - memory address like 0x7ffc...`}
                        </pre>
                    </div>

                    <div className="hint">
                        Use %p to print addresses. Cast to (void *) for clean,
                        standard output.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Dereference operator</h3>
                    <p className="p">
                        The dereference operator * accesses the value stored at
                        an address.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`int x = 25;
int *p = &x;

*p = 99;

printf("%d\\n", x);

// output - 99`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Pointer declaration</h3>
                    <p className="p">
                        Pointer declaration uses * with a type. The type tells
                        how many bytes to read or write when dereferencing.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Examples
                        </div>
                        <pre className="code">
                            {`int *pi;      // pointer to int
char *pc;     // pointer to char
double *pd;   // pointer to double`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Pointer arithmetic</h3>
                    <p className="p">
                        When you add or subtract on a pointer, it moves by the
                        size of its type. This is why pointers work well with
                        arrays.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`int a[3] = {10, 20, 30};
int *p = a; // same as &a[0]

printf("%d\\n", *p);
printf("%d\\n", *(p + 1));
printf("%d\\n", *(p + 2));

// output - 10
// output - 20
// output - 30`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Pointers and arrays</h3>
                    <p className="p">
                        In most expressions, an array name decays into a pointer
                        to its first element. That is why a and &a[0] often
                        behave the same.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`int a[2] = {7, 8};

printf("%d\\n", a[0]);
printf("%d\\n", *a);
printf("%d\\n", *(a + 1));

// output - 7
// output - 7
// output - 8`}
                        </pre>
                    </div>

                    <div className="hint">
                        a is not a modifiable pointer. You cannot do a++ but you
                        can do p++ if p is a pointer variable.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Pointer to pointer</h3>
                    <p className="p">
                        A pointer to pointer stores the address of another
                        pointer. Useful for 2D arrays, dynamic allocation, and
                        when you want a function to modify a pointer.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`int x = 5;
int *p = &x;
int **pp = &p;

printf("%d\\n", x);
printf("%d\\n", *p);
printf("%d\\n", **pp);

// output - 5
// output - 5
// output - 5`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Null pointer</h3>
                    <p className="p">
                        A null pointer points to nothing. It is used to
                        represent an invalid or empty pointer safely. Always
                        initialize pointers.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`int *p = NULL;

if (p == NULL) {
  printf("No address\\n");
}

// output - No address`}
                        </pre>
                    </div>

                    <div className="danger">
                        <span className="dangerIcon">
                            <FiAlertTriangle />
                        </span>
                        Never dereference a null pointer - it causes a crash.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Dangling pointer</h3>
                    <p className="p">
                        A dangling pointer points to memory that has been freed
                        or gone out of scope. Accessing it leads to undefined
                        behavior.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`int *p = (int *)malloc(sizeof(int));
*p = 42;

free(p);
p = NULL; // fix - avoid dangling pointer

// output - memory freed safely`}
                        </pre>
                    </div>

                    <div className="hint">
                        After free, set pointer to NULL to avoid accidental use.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Wild pointer</h3>
                    <p className="p">
                        A wild pointer is an uninitialized pointer. It points to
                        a random address. Dereferencing it can crash or corrupt
                        memory.
                    </p>

                    <div className="danger">
                        <span className="dangerIcon">
                            <FiAlertTriangle />
                        </span>
                        Always initialize pointers - use NULL if you do not have
                        a valid address yet.
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Good practice
                        </div>
                        <pre className="code">
                            {`int *p = NULL;

// output - safe pointer initialization`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Void pointer</h3>
                    <p className="p">
                        A void pointer can store the address of any type. You
                        cannot directly dereference it without casting to the
                        correct type first.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`int x = 77;
void *p = &x;

printf("%d\\n", *(int *)p);

// output - 77`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Function pointers</h3>
                    <p className="p">
                        Function pointers store the address of a function. They
                        are used for callbacks and building flexible APIs like
                        custom sorting functions.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`int add(int a, int b) {
  return a + b;
}

int main() {
  int (*fn)(int, int) = add;
  printf("%d\\n", fn(2, 3));
  return 0;
}

// output - 5`}
                        </pre>
                    </div>

                    <div className="hint">
                        Read it as - fn is a pointer to a function that takes
                        (int, int) and returns int.
                    </div>
                </div>

                <div className="endNote">
                    <span className="endIcon">
                        <FiCpu />
                    </span>
                    This is where C becomes powerful.
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Pointers;
