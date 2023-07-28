// store.js

// install redux 
// npm install redux react-redux

// store.js

import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';

const initialState = {
  myData: 'Initial state value',
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return { ...state, myData: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: myReducer,
});

const updateData = (data) => {
  return {
    type: 'UPDATE_DATA',
    payload: data,
  };
};


const App = () => {
 
  const myData = useSelector(state => state.myData);

  const handleUpdateData = () => {
    store.dispatch(updateData('Updated state value'));
  };

  return (
    <div>
      <p>My Data: {myData}</p>
      <button onClick={handleUpdateData}>Update Data</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
   <App />
  </Provider>
 </React.StrictMode>,
);
