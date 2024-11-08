import "./LeftSideComponents.css";
//Onclick function to be added
const LeftSideComponents = (props) => {

    return (
        <div className="LeftSideButtonComponents">
            <button className="LSBCButton">
                {props.value}
            </button>
        </div>
    );
};

export default LeftSideComponents;