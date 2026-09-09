// arrays/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiGrid,
    FiCode,
    FiHardDrive,
    FiCornerDownRight,
} from "react-icons/fi";

const Arrays = () => {
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
                    <FiGrid />
                </span>

                <span className="title">Arrays</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        An array is a fixed size collection of elements of the
                        same data type stored in continuous memory. Arrays make
                        iteration fast and predictable, and they are the base of
                        strings and many data structures.
                    </p>
                </div>

                {/* One dimensional arrays */}
                <div className="section">
                    <h3 className="h3">One dimensional arrays</h3>
                    <p className="p">
                        A 1D array stores values in a single line. Indexing
                        starts from 0.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - 1D array
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  int a[5] = {10, 20, 30, 40, 50};

  printf("%d\\n", a[0]);
  printf("%d\\n", a[4]);

  return 0;
}

// output - 10
// output - 50`}
                        </pre>
                    </div>
                </div>

                {/* Two dimensional arrays */}
                <div className="section">
                    <h3 className="h3">Two dimensional arrays</h3>
                    <p className="p">
                        A 2D array is like a table with rows and columns. You
                        access elements using a[row][col].
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - 2D array
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  int m[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
  };

  printf("%d\\n", m[0][1]);
  printf("%d\\n", m[1][2]);

  return 0;
}

// output - 2
// output - 6`}
                        </pre>
                    </div>

                    <div className="hint">
                        C stores 2D arrays in row major order, meaning one row
                        after another in memory.
                    </div>
                </div>

                {/* Multidimensional arrays */}
                <div className="section">
                    <h3 className="h3">Multidimensional arrays</h3>
                    <p className="p">
                        Multidimensional arrays are arrays with more than 2
                        dimensions. They are less common, but useful for 3D
                        grids and certain simulations.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - 3D array
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  int box[2][2][2] = {
    { {1, 2}, {3, 4} },
    { {5, 6}, {7, 8} }
  };

  printf("%d\\n", box[1][0][1]);

  return 0;
}

// output - 6`}
                        </pre>
                    </div>
                </div>

                {/* Passing arrays to functions */}
                <div className="section">
                    <h3 className="h3">Passing arrays to functions</h3>
                    <p className="p">
                        When you pass an array to a function, it decays into a
                        pointer to its first element. That is why the function
                        cannot know the size automatically. You usually pass the
                        length separately.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - sum array
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int sum(int arr[], int n) {
  int s = 0;
  for (int i = 0; i < n; i++) {
    s += arr[i];
  }
  return s;
}

int main() {
  int a[] = {1, 2, 3, 4};
  int n = sizeof(a) / sizeof(a[0]);

  printf("%d\\n", sum(a, n));

  return 0;
}

// output - 10`}
                        </pre>
                    </div>

                    <div className="hint">
                        arr[] and int *arr are treated the same in function
                        parameters.
                    </div>
                </div>

                {/* Array initialization */}
                <div className="section">
                    <h3 className="h3">Array initialization</h3>
                    <p className="p">
                        You can initialize arrays in multiple ways. If you give
                        fewer values, remaining elements become 0.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Examples - initialization patterns
                        </div>
                        <pre className="code">
                            {`int a[3] = {1, 2, 3};      // full init
int b[5] = {1, 2};         // remaining are 0
int c[]  = {10, 20, 30};   // size inferred

// b looks like - {1, 2, 0, 0, 0}`}
                        </pre>
                    </div>
                </div>

                {/* Memory layout of arrays */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIconMini">
                            <FiHardDrive />
                        </span>
                        Memory layout of arrays
                    </h3>
                    <p className="p">
                        Arrays are stored in contiguous memory. The address of
                        a[i] is calculated using base address plus i multiplied
                        by size of element. This is why indexing is fast.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - addresses
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  int a[3] = {10, 20, 30};

  printf("%p\\n", (void*)&a[0]);
  printf("%p\\n", (void*)&a[1]);
  printf("%p\\n", (void*)&a[2]);

  return 0;
}

// output - addresses will increase by sizeof(int) each time`}
                        </pre>
                    </div>

                    <div className="hint">
                        <span className="hintIcon">
                            <FiCornerDownRight />
                        </span>
                        In most systems, sizeof(int) is 4 bytes, so addresses
                        usually differ by 4.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Arrays;
