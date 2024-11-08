import "./CalculatorFrame.css";
import HistoryBar from "./HistoryBar";
import LeftSide from "../leftSideButtons/LeftSide";
import RightSide from "../rightSideButtons/RightSide";

const CalculatorFrame = () => {

    return (
        <div className="frame">
            <section className="left">
                <HistoryBar />
                <LeftSide/>
            </section>
            <section className="right">
                <RightSide/>
            </section>
        </div>
    );
};


export default CalculatorFrame;