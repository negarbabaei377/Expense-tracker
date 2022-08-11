import React, {useEffect, useState} from 'react';
import "../App.css"
import TransActionComponent from "./TransAction.component";
import OverViewComponent from "./OverView.component";

const ExpenseAppComponent = () => {
    const [expense , setExpense] = useState(0);
    const [income , setIncome] = useState(0);
    const[transActions , setTransActions] = useState([]);

    useEffect(()=>{
        let exp = 0;
        let inc = 0;
        transActions.map(item=>item.type === "Expense" ? exp = exp + parseInt(item.amount) : inc = inc + parseInt(item.amount));
        setExpense(exp);
        setIncome(inc);
    },[transActions])
    const addTransAction =(formValues)=>{
        setTransActions([...transActions , {...formValues , id:Date.now()}])
    }
    return (
        <section className="container">
            <OverViewComponent expense={expense} income={income} addTransAction={addTransAction}/>
            <TransActionComponent transActions={transActions}/>
        </section>
    );
};

export default ExpenseAppComponent;