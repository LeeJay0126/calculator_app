import "./HistoryBar.css";
import { FaArrowDownShortWide } from "react-icons/fa6";

// Drop down menu with history records to be added later
const HistoryBar = () => {

    return (
        <div className="HistoryBar">
            <h3 className="HistoryHeader">
                History
            </h3>
            <FaArrowDownShortWide className="HistoryDropdown"/>
        </div>
    );
};

export default HistoryBar;