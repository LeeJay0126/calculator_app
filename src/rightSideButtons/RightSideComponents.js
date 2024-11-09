import "./RightSideComponents.css";

const RightSideComponents = (props) => {

    return (
        <button className="RSCButton">
            {props.value}
        </button>
    );
};

export default RightSideComponents;