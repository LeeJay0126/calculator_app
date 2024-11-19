import "./RightSideComponents.css";
import { DisplayContext } from "../components/DisplayContext";
import { ResultContext } from "../components/ResultContext";
import { MemoryContext } from "../components/MemoryContext";
import { PreviousResult } from "../components/PreviousResult";
import { useContext } from "react";

const RightSideComponents = (props) => {

    const { display, setDisplay } = useContext(DisplayContext);
    const { result, setResult } = useContext(ResultContext);
    const { memory, setMemory } = useContext(MemoryContext);
    const { prevResult, setPrevResult } = useContext(PreviousResult);

    const RSCButtonHandler = () => {
        const char = props.value.charCodeAt();
        const val = props.value;
        // for +/-
        if (result != "") {
            if (result[0] != "-") {
                setResult("-" + result);
                setDisplay("-" + display);
            } else {
                setResult(result.subString(1));
                setDisplay(display.subString(1));
            }
        } else if (char > 41 && char < 58) {
            setDisplay(display + props.value);
            setResult(result + props.value);
        } else {
            if (val === 'c') {
                setDisplay("");
                setResult("");
            } else if (val === "mc") {
                setMemory(0);
                setPrevResult(0);
            } else if (val === "m+") {
                setResult(result + memory);
                setDisplay(display + memory);
            } else if (val === "m-") {
                if (memory != 0) {
                    setDisplay(display + "-" + memory);
                    setResult(result + "-" + memory);
                }
                // for +/- button
            } 
        }
    };

    return (
        <button className="RSCButton" onClick={RSCButtonHandler}>
            {props.value}
        </button>
    );
};

export default RightSideComponents;