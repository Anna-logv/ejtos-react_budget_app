import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
const Budget=()=>{
    const {budget, expenses, currency, dispatch}=useContext(AppContext);

    const handleBudgetChange=(target)=>{
        //console.log(target.value,target.max);
        if(parseInt(target.value) > parseInt(target.max)) {
            alert("The value cannot exceed £"+target.max);
            return;
        }
        const totalExpenses=expenses.reduce((total,item)=>{
            return (total+=item.cost)
        },0);
        if(parseInt(target.value) < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: target.value,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
     
            <input
                        required='required'
                        type='number'
                        step="10"
                        id='budget'
                        max='20000'
                        value={budget}
                        style={{ size: 10}}
                        onChange={(event) => handleBudgetChange(event.target)}
                        >
                        </input>
            </span>           
        </div>
    )
}
export default Budget;
