import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
const Currency=()=>{
    const {dispatch, currency} = useContext(AppContext);
    
    const currencies=[
        {sign:'$', name:'Dollar'},
        {sign:'£', name:'Pound'},
        {sign:'€', name:'Euro'},
        {sign:'₹', name:'Ruppee'},
    ];
    const handleCurrencyChange=(e,currency)=>{
        //e.stopPropagation();
        e.preventDefault(); 
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
        
    }
    return (

<div className="dropdown">
    {
        currencies
        .filter((c)=>c.sign===currency)
        .map((c,i)=>{
                return(
                    <a  key={'n'+i} 
                    className="btn btn-success btn-lg dropdown-toggle" 
                    style={{ background: 'lightgreen', padding:'16px',borderRadius:'6px', fontSize:'1rem'}}
                    href="/" 
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Currency ({c.sign} {c.name})
                  </a>
                )
      
        })   
    }



    <ul className="dropdown-menu" style={{ background: 'lightgreen'}}>
    {
            currencies.map((currency,i)=>{
                return(
                    <li key={'li'+i}>
                        <a 
                            className="dropdown-item" 
                            
                            href="/#"
                            key={'a'+i}
                            onClick={(e)=>handleCurrencyChange(e,currency.sign)}
                            >{currency.sign} {currency.name}</a>
                    </li>
                )
            })
        }
    </ul>
    

</div>


    );
}
export default Currency;
