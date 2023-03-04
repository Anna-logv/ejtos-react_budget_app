import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Currency from './components/Currency';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList  from './components/ExpenseList';
import AllocationForm  from './components/AllocationForm';
import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-4'>
                        {/* Add Budget component here under */}        
                    <div className='col-sm'>
                        <Budget />
                    </div>
                        {/* Add Remaining component here under */}        
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                        {/* Add ExpenseTotal component here under */}        
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <Currency />
                    </div>
                        {/* Add ExpenseList component here under */}         
                    <ExpenseList />
                        {/* Add ExpenseItem component here under */}        
                    <AllocationForm/>
                        {/* Add AllocationForm component here under */}        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
