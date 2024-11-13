import "./RightSideComponents.css";
import { DisplayContext } from "../components/DisplayContext";
import { useContext } from "react";

const RightSideComponents = (props) => {

    const { display, setDisplay } = useContext(DisplayContext);

    const RSCButtonHandler = () => {
        const char = props.value.charCodeAt();
        if (char > 47 && char < 58) {
            setDisplay(display + props.value);
        }
    };

    return (
        <button className="RSCButton" onClick={RSCButtonHandler}>
            {props.value}
        </button>
    );
};

export default RightSideComponents;