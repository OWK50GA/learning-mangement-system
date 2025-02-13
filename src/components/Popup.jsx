import { XSquare } from "phosphor-react";

const Popup = (props) => {

    return (props.trigger) ?( 
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn">
                    <XSquare className="hamburger-icon"/>
                </button>
                {props.children}
            </div>
        </div>
     ): null;
}
 
export default Popup;