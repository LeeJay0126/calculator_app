import LeftSideButtons from "./leftSideButtons/LeftSideButtons";
import LeftSideButtonComponents from "./LeftSideComponents";
import "./LeftSide.css";

const LeftSide = () => {

    const res = LeftSideButtons.map((buttons) => (
        <LeftSideButtonComponents value={buttons} />
    ));

    return (
        <div className="LeftButtonContainer">
            {res}
        </div>
    );
};

export default LeftSide;