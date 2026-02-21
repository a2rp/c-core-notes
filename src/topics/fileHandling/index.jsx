// fileHandling/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiFolder,
    FiFileText,
    FiCode,
    FiSearch,
    FiMapPin,
} from "react-icons/fi";

const FileHandling = () => {
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
                    <FiFolder />
                </span>

                <span className="title">File Handling</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        File handling lets your C program read and write data
                        that stays even after the program exits. The standard
                        library uses a file pointer of type FILE* to represent
                        an open file.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiFileText />
                        </span>
                        File pointer
                    </h3>
                    <p className="p">
                        A file pointer is a pointer to a FILE object managed by
                        the C runtime. You get it from fopen and use it in file
                        functions like fprintf, fscanf, fread, fwrite, and
                        fclose.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - FILE*
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  FILE* fp = fopen("notes.txt", "w");
  if (fp == NULL) {
    printf("Failed to open file\\n");
    return 1;
  }

  fprintf(fp, "Hello file\\n");
  fclose(fp);

  // output - file "notes.txt" created with text inside
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">fopen modes</h3>
                    <p className="p">
                        fopen takes a filename and a mode. Mode decides whether
                        you read, write, append, and whether it is text or
                        binary.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" /> "r" - read (file must
                            exist)
                        </li>
                        <li>
                            <span className="dot" /> "w" - write (creates or
                            truncates)
                        </li>
                        <li>
                            <span className="dot" /> "a" - append (creates if
                            missing)
                        </li>
                        <li>
                            <span className="dot" /> "r+" - read and write
                        </li>
                        <li>
                            <span className="dot" /> "w+" - write and read
                            (truncates)
                        </li>
                        <li>
                            <span className="dot" /> "a+" - append and read
                        </li>
                        <li>
                            <span className="dot" /> add "b" for binary - "rb",
                            "wb", "ab"
                        </li>
                    </ul>

                    <div className="hint">
                        "w" clears the file content. Use "a" if you want to keep
                        old content and add new lines.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">fclose</h3>
                    <p className="p">
                        fclose closes the file and flushes pending writes.
                        Always close files to avoid data loss and resource
                        leaks.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - fclose
                        </div>
                        <pre className="code">
                            {`FILE* fp = fopen("a.txt", "w");
if (fp == NULL) return 1;

fprintf(fp, "saved\\n");
fclose(fp);

// output - file closed, data flushed`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">fprintf</h3>
                    <p className="p">
                        fprintf writes formatted text to a file, similar to
                        printf but with a file pointer.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - fprintf
                        </div>
                        <pre className="code">
                            {`FILE* fp = fopen("scores.txt", "w");
if (fp == NULL) return 1;

int score = 95;
fprintf(fp, "Score - %d\\n", score);
fclose(fp);

// output - scores.txt contains "Score - 95"`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">fscanf</h3>
                    <p className="p">
                        fscanf reads formatted text from a file, similar to
                        scanf. It is useful for structured text but you must
                        handle errors carefully.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - fscanf
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  FILE* fp = fopen("scores.txt", "r");
  if (fp == NULL) return 1;

  int score = 0;
  fscanf(fp, "Score - %d", &score);
  fclose(fp);

  printf("%d\\n", score);

  // output - 95
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Always check the return value of fscanf to confirm how
                        many values were successfully read.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">fread</h3>
                    <p className="p">
                        fread reads binary data in blocks. It is used when you
                        store raw bytes, structs, or binary files.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - fread
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  FILE* fp = fopen("bin.dat", "rb");
  if (fp == NULL) return 1;

  int x = 0;
  size_t n = fread(&x, sizeof(int), 1, fp);
  fclose(fp);

  // n - 1 means one item read successfully
  printf("%d\\n", x);

  // output - depends on file content
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">fwrite</h3>
                    <p className="p">
                        fwrite writes binary data in blocks. Useful for saving
                        numbers or structs without converting to text.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - fwrite
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  FILE* fp = fopen("bin.dat", "wb");
  if (fp == NULL) return 1;

  int x = 1234;
  size_t n = fwrite(&x, sizeof(int), 1, fp);
  fclose(fp);

  // n - 1 means one item written successfully
  // output - bin.dat contains binary bytes of 1234
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiMapPin />
                        </span>
                        fseek
                    </h3>
                    <p className="p">
                        fseek moves the file position indicator. This allows you
                        to jump to a specific byte offset in the file.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" /> SEEK_SET - from beginning
                        </li>
                        <li>
                            <span className="dot" /> SEEK_CUR - from current
                            position
                        </li>
                        <li>
                            <span className="dot" /> SEEK_END - from end
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - fseek
                        </div>
                        <pre className="code">
                            {`FILE* fp = fopen("data.txt", "r");
if (fp == NULL) return 1;

fseek(fp, 0, SEEK_END); // jump to end
fclose(fp);

// output - file cursor moved to end`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">ftell</h3>
                    <p className="p">
                        ftell returns the current position (byte offset) in the
                        file. It is commonly used with fseek to find file size.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - file size using fseek and ftell
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  FILE* fp = fopen("data.txt", "r");
  if (fp == NULL) return 1;

  fseek(fp, 0, SEEK_END);
  long size = ftell(fp);
  fclose(fp);

  printf("%ld\\n", size);

  // output - number of bytes in data.txt
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiSearch />
                        </span>
                        EOF handling
                    </h3>
                    <p className="p">
                        EOF means end of file. For reading loops, you usually
                        check the return value of input functions rather than
                        comparing directly with EOF in a fragile way.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example - safe line reading with EOF handling
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

int main() {
  FILE* fp = fopen("data.txt", "r");
  if (fp == NULL) return 1;

  char line[256];

  while (fgets(line, sizeof(line), fp) != NULL) {
    printf("%s", line);
  }

  fclose(fp);

  // output - prints full file content line by line
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        For binary reads, use fread and check how many items
                        were read. For text, prefer fgets over gets.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default FileHandling;
