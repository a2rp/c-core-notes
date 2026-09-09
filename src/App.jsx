// App.jsx
import React, { useState } from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";

import AboutC from "./components/aboutC";

import CIntroduction from "./topics/cIntroduction";
import BasicSyntax from "./topics/basicSyntax";
import Operators from "./topics/operators";
import CControlFlow from "./topics/cControlFlow";
import CFunctions from "./topics/cFunctions";
import Arrays from "./topics/arrays";
import CStringTopic from "./topics/cStringTopic";
import Pointers from "./topics/pointers";
import StructuresAndUnions from "./topics/structuresAndUnions";
import DynamicMemoryAllocation from "./topics/dynamicMemoryAllocation";
import FileHandling from "./topics/fileHandling";
import Preprocessor from "./topics/preprocessor";
import BitManipulation from "./topics/bitManipulation";
import AdvancedConcepts from "./topics/advancedConcepts";
import DataStructuresUsingC from "./topics/dataStructuresUsingC";
import CVsCpp from "./topics/cVsCpp";
import BestPractices from "./topics/bestPractices";

const topics = [
    ["about", "About C", AboutC], ["intro", "C Introduction", CIntroduction],
    ["syntax", "Basic Syntax", BasicSyntax], ["operators", "Operators", Operators],
    ["flow", "Control Flow", CControlFlow], ["functions", "Functions", CFunctions],
    ["arrays", "Arrays", Arrays], ["strings", "C Strings", CStringTopic],
    ["pointers", "Pointers", Pointers], ["structures", "Structures and Unions", StructuresAndUnions],
    ["memory", "Dynamic Memory", DynamicMemoryAllocation], ["files", "File Handling", FileHandling],
    ["preprocessor", "Preprocessor", Preprocessor], ["bits", "Bit Manipulation", BitManipulation],
    ["advanced", "Advanced Concepts", AdvancedConcepts], ["data-structures", "Data Structures", DataStructuresUsingC],
    ["c-cpp", "C vs C++", CVsCpp], ["best-practices", "Best Practices", BestPractices],
];

const App = () => {
    const [activeTopic, setActiveTopic] = useState("about");
    const ActiveTopic = topics.find(([id]) => id === activeTopic)?.[2] || AboutC;
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="workspaceLayout">
                    <aside className="sideMenu" aria-label="C notes topics">
                        <p className="menuLabel">Study guide</p>
                        <nav>
                            {topics.map(([id, label]) => (
                                <button key={id} type="button" className={activeTopic === id ? "active" : ""} onClick={() => setActiveTopic(id)}>
                                    {label}
                                </button>
                            ))}
                        </nav>
                    </aside>
                    <section className="contentWrapper" aria-live="polite">
                        <ActiveTopic />
                    </section>
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
