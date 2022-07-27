import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function AddExpense() {
  console.log('in AddGroup');
  const dispatch = useDispatch();
  const history = useHistory();
  //   const group = useSelector((store) => store.newGroup);

  const [newGroupName, setGroupName] = useState('');

  //   useEffect(() => {
  //     dispatch({type: 'GET_NEW_GROUP'});
  //   }, []);

  // Save button to gather and save input data
  const handleClickSave = () => {
    // validate text

    console.log('adding expense');
    history.push('/info');
  };
  // Cancel button to return to home page
  //   const handleClickCancel = () => {
  //     setGroupName('');
  //   };
  return (
    <div>
      <p>Start a new group</p>
      <input
        type="text"
        placeholder="Group Name"
        value={newGroupName}
        onChange={(event) => setGroupName(event.target.value)}
      />
      <button onClick={handleClickSave}>Save</button>
      <button onClick={() => history.push('/info')}>Cancel</button>
    </div>
  );
}
export default AddExpense;