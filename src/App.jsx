// App.jsx
import React from "react";
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

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    {/* about css */}

                    <AboutC />

                    <CIntroduction />
                    <BasicSyntax />
                    <Operators />
                    <CControlFlow />
                    <CFunctions />
                    <Arrays />
                    <CStringTopic />
                    <Pointers />
                    <StructuresAndUnions />
                    <DynamicMemoryAllocation />
                    <FileHandling />
                    <Preprocessor />
                    <BitManipulation />
                    <AdvancedConcepts />
                    <DataStructuresUsingC />
                    <CVsCpp />
                    <BestPractices />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
