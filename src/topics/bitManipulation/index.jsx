// bitManipulation/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiSliders,
    FiCode,
    FiHash,
    FiZap,
} from "react-icons/fi";

const BitManipulation = () => {
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
                    <FiSliders />
                </span>

                <span className="title">Bit Manipulation</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Bit manipulation means working with numbers at the bit
                        level (0 and 1). It is heavily used in embedded systems,
                        performance code, flags, masks, and low level utilities.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiHash />
                        </span>
                        Bitwise AND OR XOR NOT
                    </h3>

                    <p className="p">
                        These operators work on bits. Think of them as tools for
                        combining and checking flags.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - AND OR XOR NOT
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  int a = 5;  // 0101
  int b = 3;  // 0011

  printf("%d\\n", a & b);  // 0001
  printf("%d\\n", a | b);  // 0111
  printf("%d\\n", a ^ b);  // 0110
  printf("%d\\n", ~a);     // bitwise NOT

  return 0;
}

// output - 1
// output - 7
// output - 6
// output - depends on integer size (two's complement)`}
                        </pre>
                    </div>

                    <div className="hint">
                        ~a flips all bits. The numeric result depends on signed
                        representation (two's complement). For beginners, treat
                        it as "invert all bits".
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiZap />
                        </span>
                        Left shift
                    </h3>

                    <p className="p">
                        Left shift moves bits to the left. For positive numbers,
                        shifting left by 1 usually multiplies by 2.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - left shift
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  int x = 3; // 0011
  printf("%d\\n", x << 1); // 0110
  printf("%d\\n", x << 2); // 1100

  return 0;
}

// output - 6
// output - 12`}
                        </pre>
                    </div>

                    <div className="hint">
                        For signed integers, shifting into the sign bit can be
                        tricky. Use unsigned for bit operations when possible.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiZap />
                        </span>
                        Right shift
                    </h3>

                    <p className="p">
                        Right shift moves bits to the right. For positive
                        numbers, shifting right by 1 usually divides by 2.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - right shift
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  int x = 12; // 1100
  printf("%d\\n", x >> 1); // 0110
  printf("%d\\n", x >> 2); // 0011

  return 0;
}

// output - 6
// output - 3`}
                        </pre>
                    </div>

                    <div className="hint">
                        Right shift on negative numbers may do sign extension
                        depending on compiler. Use unsigned for predictable
                        behavior.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Setting clearing toggling bits</h3>

                    <p className="p">
                        Common pattern - use a mask. A mask is a number with a
                        single bit set like 1 &lt;&lt; k. With this you can set,
                        clear, toggle, or check a specific bit.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - set clear toggle check
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  unsigned int x = 10; // 1010
  unsigned int k = 1;  // bit position (0 based)
  unsigned int mask = 1u << k; // 0010

  // set bit k
  x = x | mask;
  printf("%u\\n", x); // 1010 stays 1010 because bit 1 is already 1

  // clear bit k
  x = x & ~mask;
  printf("%u\\n", x); // 1000

  // toggle bit k
  x = x ^ mask;
  printf("%u\\n", x); // 1010

  // check bit k
  if (x & mask) {
    printf("bit is 1\\n");
  } else {
    printf("bit is 0\\n");
  }

  return 0;
}

// output - 10
// output - 8
// output - 10
// output - bit is 1`}
                        </pre>
                    </div>

                    <div className="hint">
                        Use unsigned int and 1u for masks. It avoids sign issues
                        and makes shifts safer.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BitManipulation;
