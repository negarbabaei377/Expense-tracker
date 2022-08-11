import React, {useEffect, useState} from 'react';
import "../App.css"

const TransActionComponent = (props) => {
    const [searchItem , setSearchItem] = useState("");
    const[filteredTnx , setFilteredTnx] = useState(props.transActions);

    useEffect(()=>{
        filteredTransActions(searchItem)
    },[props.transActions])
    const filteredTransActions =(search)=>{
        if(!search || search === "") {
            setFilteredTnx(props.transActions)
            return;
        }
        const filter = props.transActions.filter(item=>item.description.toLowerCase().includes(search.toLowerCase()))
        setFilteredTnx(filter)
    }
    const changeHandler = (e)=>{
        setSearchItem(e.target.value);
        filteredTransActions(e.target.value);
    }
    if(!props.transActions.length) return <h4>add some transactions !</h4>
    return (
        <section>
            <input type="text" value={searchItem} onChange={changeHandler} placeholder="search for transaction ..." className="search"/>
            {filteredTnx.length ? filteredTnx.map(item=><div className="transAction" key={item.id} style={{borderRight:item.type === "Expense" && "4px solid red"}}>
                <span>{item.description}</span>
                <span>$ {item.amount}</span>
            </div>)
            :(
                "no item matches !"
                )}
        </section>
    );
};

export default TransActionComponent;