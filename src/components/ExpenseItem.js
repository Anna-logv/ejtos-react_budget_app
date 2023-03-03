import React, {useContext} from 'react';
import {TiDelete} from 'react-icons/ti';
import {AppContext} from '../context/AppContext';
const ExpenseItem=(props)=>{
    const {dispatch}=useContext(AppContext);
    const handleDel=()=>{
        dispatch({
            type:'DELETE_EXPENSE',
            payload: props.id,
        })
    }
    const incAllocation=(name)=>{
        dispatch({
            type:'ADD_EXPENSE',
            payload: {
                name:name,
                cost:10,
            },
        })
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>${props.cost}</td>   
        <td><button onClick={e=>incAllocation(props.name)}>+</button></td>
        <td><TiDelete size='1.5em' onClick={handleDel}></TiDelete></td>
        </tr>
    )
}
export default ExpenseItem;
