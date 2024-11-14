import "./RightSideComponents.css";
import { DisplayContext } from "../components/DisplayContext";
import { ResultContext } from "../components/ResultContext";
import { useContext } from "react";

const RightSideComponents = (props) => {

    const { display, setDisplay } = useContext(DisplayContext);
    const { result, setResult } = useContext(ResultContext);

    const RSCButtonHandler = () => {
        const char = props.value.charCodeAt();
        if (char > 41 && char < 58) {
            setDisplay(display + props.value);
            setResult(result + props.value);
        }else{
            
        }
    };

    return (
        <button className="RSCButton" onClick={RSCButtonHandler}>
            {props.value}
        </button>
    );
};

export default RightSideComponents;