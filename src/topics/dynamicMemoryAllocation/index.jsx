// dynamicMemoryAllocation/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiDatabase,
    FiCode,
    FiAlertTriangle,
    FiTrash2,
    FiLayers,
} from "react-icons/fi";

const DynamicMemoryAllocation = () => {
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
                    <FiDatabase />
                </span>

                <span className="title">Dynamic Memory Allocation</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Dynamic memory allocation lets you request memory at
                        runtime from the heap. This is useful when you do not
                        know the size in advance. But it also means you must
                        free memory yourself, otherwise memory leaks happen.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        Heap vs stack memory
                    </h3>
                    <p className="p">
                        The stack is fast and automatic. Local variables and
                        function calls live on the stack. The heap is for
                        dynamic memory that you allocate manually using malloc
                        and friends. Heap memory stays until you free it.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            stack - automatic, function scoped, freed on return
                        </li>
                        <li>
                            <span className="dot" />
                            heap - manual, flexible size, must free yourself
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">malloc</h3>
                    <p className="p">
                        malloc allocates a block of memory of given size (in
                        bytes) on the heap. It returns a pointer to the first
                        byte. The memory is not initialized.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - malloc int array
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>
#include <stdlib.h>

int main() {
  int n = 3;
  int *arr = (int*)malloc(n * sizeof(int));

  if (arr == NULL) {
    printf("Allocation failed\\n");
    return 1;
  }

  arr[0] = 10;
  arr[1] = 20;
  arr[2] = 30;

  printf("%d %d %d\\n", arr[0], arr[1], arr[2]);

  free(arr);
  arr = NULL;

  return 0;
}

// output - 10 20 30`}
                        </pre>
                    </div>

                    <div className="hint">
                        malloc can return NULL. Always check before using the
                        pointer.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">calloc</h3>
                    <p className="p">
                        calloc allocates memory for an array of elements and
                        initializes all bytes to 0. It takes two arguments -
                        number of elements and size of each element.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - calloc zero init
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>
#include <stdlib.h>

int main() {
  int n = 4;
  int *arr = (int*)calloc(n, sizeof(int));

  if (arr == NULL) {
    printf("Allocation failed\\n");
    return 1;
  }

  for (int i = 0; i < n; i++) {
    printf("%d ", arr[i]);
  }
  printf("\\n");

  free(arr);
  arr = NULL;

  return 0;
}

// output - 0 0 0 0`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">realloc</h3>
                    <p className="p">
                        realloc resizes an existing heap block. It may move the
                        block to a new location. If it moves, the old pointer
                        becomes invalid. A safe pattern is to store the result
                        in a temporary pointer first.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - grow array using realloc
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>
#include <stdlib.h>

int main() {
  int n = 2;
  int *arr = (int*)malloc(n * sizeof(int));

  if (arr == NULL) return 1;

  arr[0] = 5;
  arr[1] = 15;

  int newN = 4;
  int *temp = (int*)realloc(arr, newN * sizeof(int));

  if (temp == NULL) {
    // realloc failed - arr is still valid here
    free(arr);
    return 1;
  }

  arr = temp;
  arr[2] = 25;
  arr[3] = 35;

  for (int i = 0; i < newN; i++) {
    printf("%d ", arr[i]);
  }
  printf("\\n");

  free(arr);
  arr = NULL;

  return 0;
}

// output - 5 15 25 35`}
                        </pre>
                    </div>

                    <div className="hint">
                        Do not assign realloc directly to arr without a temp. If
                        realloc fails, you lose the original pointer and leak
                        memory.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiTrash2 />
                        </span>
                        free
                    </h3>
                    <p className="p">
                        free releases heap memory that you allocated. After
                        freeing, set the pointer to NULL to avoid accidentally
                        using freed memory.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - free and null
                        </div>
                        <pre className="code">
                            {`int *p = (int*)malloc(sizeof(int));
if (p == NULL) return 1;

*p = 99;

free(p);
p = NULL; // good habit

// output - memory released safely`}
                        </pre>
                    </div>

                    <div className="hint">
                        Using a pointer after free is a bug called use after
                        free. It can crash your program.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiAlertTriangle />
                        </span>
                        Memory leak concept
                    </h3>
                    <p className="p">
                        A memory leak happens when you allocate memory but never
                        free it. The memory stays reserved until the program
                        ends. In long running programs, leaks can grow and cause
                        slowdowns or crashes.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - leak vs fixed
                        </div>
                        <pre className="code">
                            {`// leak - allocated but never freed
int *p = (int*)malloc(100 * sizeof(int));
if (p == NULL) return 1;
// no free(p) here

// fixed
int *q = (int*)malloc(100 * sizeof(int));
if (q == NULL) return 1;
free(q);
q = NULL;`}
                        </pre>
                    </div>

                    <div className="hint">
                        Every malloc or calloc should have a matching free.
                        Think in pairs - allocate then release.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DynamicMemoryAllocation;
