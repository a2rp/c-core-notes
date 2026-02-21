// dataStructuresUsingC/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiGitBranch,
    FiLayers,
    FiBox,
    FiCornerDownRight,
    FiCode,
} from "react-icons/fi";

const DataStructuresUsingC = () => {
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
                    <FiGitBranch />
                </span>

                <span className="title">Data Structures using C</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Data structures store data in a way that makes
                        operations like insert, delete, search, and traversal
                        efficient. In C, most data structures are built using
                        pointers and dynamic memory allocation.
                    </p>
                </div>

                {/* Linked list */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiGitBranch />
                        </span>
                        Linked list
                    </h3>
                    <p className="p">
                        A linked list is a sequence of nodes where each node
                        stores data and a pointer to the next node. It is useful
                        when you need dynamic size and frequent insertions or
                        deletions.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Node structure and simple insert at head
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>
#include <stdlib.h>

struct Node {
  int data;
  struct Node* next;
};

struct Node* pushFront(struct Node* head, int val) {
  struct Node* n = (struct Node*)malloc(sizeof(struct Node));
  n->data = val;
  n->next = head;
  return n;
}

int main() {
  struct Node* head = NULL;
  head = pushFront(head, 10);
  head = pushFront(head, 20);

  printf("%d\\n", head->data);       // output - 20
  printf("%d\\n", head->next->data); // output - 10
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Important - always free allocated nodes when done to
                        avoid memory leaks.
                    </div>
                </div>

                {/* Stack */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiLayers />
                        </span>
                        Stack
                    </h3>
                    <p className="p">
                        A stack follows LIFO - Last In First Out. Common
                        operations are push, pop, and peek. You can implement it
                        using an array or a linked list.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Stack using array
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

#define MAX 5

int stack[MAX];
int top = -1;

void push(int x) {
  if (top == MAX - 1) return; // stack full
  stack[++top] = x;
}

int pop() {
  if (top == -1) return -1; // stack empty
  return stack[top--];
}

int main() {
  push(5);
  push(9);

  printf("%d\\n", pop()); // output - 9
  printf("%d\\n", pop()); // output - 5
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        Stack is used in function calls, undo operations, and
                        expression evaluation.
                    </div>
                </div>

                {/* Queue */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiBox />
                        </span>
                        Queue
                    </h3>
                    <p className="p">
                        A queue follows FIFO - First In First Out. Common
                        operations are enqueue and dequeue. A circular queue is
                        often used for fixed size array implementations.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Simple queue using array
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>

#define MAX 5

int q[MAX];
int front = 0;
int rear = 0;

void enqueue(int x) {
  if (rear == MAX) return; // queue full
  q[rear++] = x;
}

int dequeue() {
  if (front == rear) return -1; // queue empty
  return q[front++];
}

int main() {
  enqueue(1);
  enqueue(2);
  enqueue(3);

  printf("%d\\n", dequeue()); // output - 1
  printf("%d\\n", dequeue()); // output - 2
  return 0;
}`}
                        </pre>
                    </div>

                    <div className="hint">
                        For real usage, prefer a circular queue to reuse space.
                    </div>
                </div>

                {/* Trees basics */}
                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCornerDownRight />
                        </span>
                        Trees basics
                    </h3>
                    <p className="p">
                        A tree is a hierarchical data structure made of nodes.
                        Each node can have children. The most common type is a
                        binary tree where each node has up to two children -
                        left and right.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Binary tree node and creation
                        </div>
                        <pre className="code">
                            {`#include <stdio.h>
#include <stdlib.h>

struct TNode {
  int data;
  struct TNode* left;
  struct TNode* right;
};

struct TNode* newNode(int val) {
  struct TNode* n = (struct TNode*)malloc(sizeof(struct TNode));
  n->data = val;
  n->left = NULL;
  n->right = NULL;
  return n;
}

int main() {
  struct TNode* root = newNode(10);
  root->left = newNode(5);
  root->right = newNode(15);

  printf("%d\\n", root->data);       // output - 10
  printf("%d\\n", root->left->data); // output - 5
  return 0;
}`}
                        </pre>
                    </div>
                </div>

                {/* Implementation using pointers */}
                <div className="section">
                    <h3 className="h3">Implementation using pointers</h3>
                    <p className="p">
                        In C, pointers are the core tool behind dynamic data
                        structures. A node usually stores data plus one or more
                        pointers to other nodes. malloc allocates memory, and
                        pointers connect nodes together.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Linked list - each node points to next
                        </li>
                        <li>
                            <span className="dot" />
                            Stack with linked list - push and pop at head
                        </li>
                        <li>
                            <span className="dot" />
                            Queue with linked list - enqueue at tail, dequeue at
                            head
                        </li>
                        <li>
                            <span className="dot" />
                            Trees - each node points to children
                        </li>
                    </ul>

                    <div className="hint">
                        Rule - if you use malloc, you must plan where free will
                        happen.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DataStructuresUsingC;
