import React, {useContext} from 'react';
//import {TiDelete} from 'react-icons/ti';
import {AppContext} from '../context/AppContext';

const ExpenseItem=(props)=>{
    const {currency,dispatch}=useContext(AppContext);
    /*
    const handleDel=()=>{
        dispatch({
            type:'DELETE_EXPENSE',
            payload: props.id,
        })
    }
    */
    const incAllocation=(name)=>{
        dispatch({
            type:'ADD_EXPENSE',
            payload: {
                name:name,
                cost:10,
            },
        })
    }
    const decAllocation=(name)=>{
        dispatch({
            type:'ADD_EXPENSE',
            payload: {
                name:name,
                cost:-10,
            },
        })
    }
    const styles = {
        plus: {
            cursor: 'pointer',
            display: 'inline-block',
            verticalAlign: 'top',
            color: 'white',
            width: '30px',
            height: '30px',
            font: 'normal 30px Arial,sans-serif',
            lineHeight:'31px',
            textAlign: 'center',
            borderRadius: '50%',
            border:'none',
            background:'green',
            padding:'0'
            },
        minus: {
            cursor: 'pointer',
            display: 'flex',
            color: 'white',
            width: '30px',
            height: '30px',
            font: 'bold 27px/1 Arial,sans-serif',
            justifyContent:"center",
            alignContent:"center",
            borderRadius: '50%',
            border:'none',
            background:'darkred',
        }
      };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>   
        <td><button 
        onClick={e=>incAllocation(props.name)}
        style={styles.plus}
        >+</button></td>
        <td><button 
        onClick={e=>decAllocation(props.name)}
        style={styles.minus}
        >–</button></td>

        </tr>
    )
}
export default ExpenseItem;
