import "./ResultSection.css";
import { DisplayContext } from "../components/DisplayContext";
import { useContext } from "react";

const ResultSection = () => {

    const { display} = useContext(DisplayContext);

    return (
        <section className="ResultSection">
            <h3 className="DisplayResult">
                {display}
            </h3>
            <div className="DisplayDivider"></div>
            <div className="SubDisplaySection">
                <h4 className="measureAngle">
                    Rad
                </h4>
                <h4 className="FormulationDisplay">
                    96 x 14 = 1344
                </h4>
            </div>
        </section>
    );
};

export default ResultSection;