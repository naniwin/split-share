import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import AddExpense from '../AddExpense/AddExpense';

// material UI
// import {Grid} from '@mui/material';

function Transactions(props) {
  const dispatch = useDispatch();
  // const history = useHistory();
  const exp = useSelector((store) => store.transaction);

  useEffect(() => {
    dispatch({type: 'FETCH_TRANSACTION'});
  }, []);
  let expenses = [];
  for (let expense of exp) {
    expenses.push(
      <div key={expense.id}>
        <ul>
          <li>{expense.date}</li>
          <li>{expense.description}</li>
          <li>{expense.amount}</li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      {/* <p>Expense: {JSON.stringify(exp)}</p> */}
      {expenses}

      {/* {exp.length === 0 ? (
        <h1 className="spinner"></h1>
      ) : (
        <div>
          <p>{exp[0].date}</p>
          <p>{exp[0].amount}</p>
          <p>{exp[0].description}</p>
        </div>
      )} */}
    </div>
  );
}

export default Transactions;
