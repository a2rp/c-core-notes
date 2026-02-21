// aboutC/index.jsx
import React from "react";
import { Styled } from "./styled";
import { FiCpu, FiTerminal, FiHardDrive, FiClock } from "react-icons/fi";

const AboutC = () => {
    const buildISO = __APP_BUILD_ISO__;

    const formattedDateTime = new Date(buildISO).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <div className="top">
                    <div className="badge">
                        <span className="badgeIcon">
                            <FiTerminal />
                        </span>
                        C core revision
                    </div>

                    <h2 className="heading">About C Programming</h2>

                    <p className="sub">
                        A low level, procedural language where you learn what a
                        program really is - memory, compilation, and control.
                    </p>
                </div>

                <div className="grid">
                    <div className="card">
                        <div className="cardTitle">
                            <span className="cardIcon">
                                <FiCpu />
                            </span>
                            What is C
                        </div>
                        <p className="p">
                            C is a general purpose, procedural programming
                            language created in 1972 by Dennis Ritchie. It is
                            one of the most influential languages and forms the
                            foundation of many modern languages and systems.
                        </p>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="cardIcon">
                                <FiHardDrive />
                            </span>
                            Why C matters
                        </div>
                        <p className="p">
                            C gives direct access to memory through pointers and
                            manual memory management. This makes it fast and
                            powerful, but it also requires careful thinking
                            about stack, heap, memory layout, and safety.
                        </p>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="cardIcon">
                                <FiTerminal />
                            </span>
                            About c-core-notes
                        </div>
                        <p className="p">
                            The c-core-notes project is designed as a focused
                            revision system. It organizes syntax, control flow,
                            functions, arrays, pointers, structures, dynamic
                            memory, and file handling into a structured single
                            page reference. The goal is strong fundamentals,
                            clear memory concepts, and clean logical thinking.
                        </p>

                        <div className="meta">
                            <span className="metaLeft">
                                <span className="metaIcon">
                                    <FiClock />
                                </span>
                                <span className="metaLabel">Last updated</span>
                            </span>
                            <span className="metaValue">
                                {formattedDateTime}
                            </span>
                        </div>
                    </div>
                </div>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default AboutC;
