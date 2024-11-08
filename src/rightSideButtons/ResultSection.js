import "./ResultSection.css";

const ResultSection = () => {

    return(
        <section className="ResultSection">
            <h3 className="DisplayResult">
                PlaceHolder 123
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