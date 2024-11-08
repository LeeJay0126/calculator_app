import "./CalculatorFrame.css";
import HistoryBar from "./HistoryBar";
import LeftSide from "./LeftSide";

const CalculatorFrame = () => {

    return (
        <div className="frame">
            <section className="left">
                <HistoryBar />
                <LeftSide/>
            </section>
        </div>
    );
};


export default CalculatorFrame;