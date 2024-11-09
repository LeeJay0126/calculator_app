import LeftSideButtons from "./LeftSideButtons";
import LeftSideButtonComponents from "./LeftSideComponents";
import "./LeftSide.css";

const LeftSide = () => {

    const res = LeftSideButtons.map((buttons) => (
        <LeftSideButtonComponents value={buttons} key={buttons} />
    ));

    return (
        <div className="LeftButtonContainer">
            {res}
        </div>
    );
};

export default LeftSide;