import React, {useState} from 'react';
import "../App.css"
import TransActionFormComponent from "./TransActionForm.component";

const OverViewComponent = (props) => {
    const [isShow , setIsShow] = useState(false)
    return (
        <section>
            <div className="topSection">
                <p>balance: {props.income - props.expense}</p>
                <button onClick={()=>setIsShow(!isShow)}
                        className={`btn ${isShow && "cancel"}`}>
                    {isShow ? "Cancel" : "Add"}
                </button>
            </div>
            {isShow && <TransActionFormComponent addTransAction={props.addTransAction} setIsShow={setIsShow}/>}
            <div className="resultSection">
                <div className="expenseBox">expense <span style={{color:"red"}}>{props.expense} $</span></div>
                <div className="expenseBox">income <span>{props.income} $</span></div>
            </div>
        </section>
    );
};

export default OverViewComponent;