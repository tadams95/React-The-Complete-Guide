import React, {useState } from "react";
import "./AddNewExpense.css";

const AddNewExpense = (props) => {

    const [hidden, setHidden] = useState(false)

    const clicked = () => {
        props.hidden(hidden)
        setHidden(true)
    }
    
    return <div className="add-new-expense">
        <button onClick={clicked}>Add New Expense</button>
        
    </div>
    
}

export default AddNewExpense;