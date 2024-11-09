import ResultButton from "./ResultButton";
import ResultSection from "./ResultSection";
import "./RightSide.css";
import RightSideButtons from "./RightSideButtons";
import RightSideComponents from "./RightSideComponents";

const RightSide = () => {

    const FirstRow = RightSideButtons[0].map((buttons) => (
        <RightSideComponents value={buttons} key={buttons} />
    ));

    const SecondRow = RightSideButtons[1].map((buttons) => (
        <RightSideComponents value={buttons} key={buttons} />
    ));

    const ThirdRow = RightSideButtons[2].map((buttons) => (
        <RightSideComponents value={buttons} key={buttons} />
    ));

    const FourthRow = RightSideButtons[3].map((buttons) => (
        <RightSideComponents value={buttons} key={buttons} />
    ));

    const FifthRow = RightSideButtons[4].map((buttons) => (
        <RightSideComponents value={buttons} key={buttons} />
    ));

    const LastRow = RightSideButtons[5].map((buttons) => (
        <RightSideComponents value={buttons} key={buttons} />
    ));

    return (
        <div className="RightSide">
            <ResultSection />
            <div className="RightButtonsContainer">
                <div className="RSBDivider">
                    {FirstRow}
                </div>
                <div className="RSBDivider">
                    {SecondRow}
                </div>
                <div className="RSBDivider">
                    {ThirdRow}
                </div>
                <div className="RSBDivider">
                    {FourthRow}
                </div>
                <div className="ResultButtonContainer">
                    <div className="RSBDiv">
                        <div className="RSBDivider FifthRow">
                            {FifthRow}
                        </div>
                        <div className="RSBDivider LastRow">
                            {LastRow}
                        </div>
                    </div>
                    <ResultButton />
                </div>
            </div>
        </div>
    );
};

export default RightSide;