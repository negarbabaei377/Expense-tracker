import React, {useState} from 'react';
import "../App.css"

const TransActionFormComponent = (props) => {
    const [formValues , setFormValues] = useState({type :"Expense" , amount :0 , description :""});
    const changeHandler=(e)=>{
        setFormValues({...formValues , [e.target.name]:e.target.value})
    }
    const submitHandler =(e)=>{
        e.preventDefault();
        props.addTransAction(formValues);
        props.setIsShow(false)
    }

    return (
            <form onSubmit={submitHandler}>
                <input type="text" name="description" onChange={changeHandler} value={formValues.description}/>
                <input type="number" name="amount" onChange={changeHandler} value={formValues.amount}/>
                <div className="radioBox">
                    <input type="radio" value="Expense" id="Expense" name="type" onChange={changeHandler} checked={formValues.type === "Expense"}/>
                    <label htmlFor="Expense">Expense</label>
                    <input type="radio" value="Income" id="Income" name="type" onChange={changeHandler} checked={formValues.type === "Income"}/>
                    <label htmlFor="Income">Income</label>
                </div>
                <button type="submit" className="btn primary">Add transaction</button>
            </form>
    );
};

export default  TransActionFormComponent;