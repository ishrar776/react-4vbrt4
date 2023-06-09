import React, { useContext, useState } from 'react';
import { FirstNmae } from './App';
const ComB = () => {
  const [input, setInput] = useState('');
  const [todoList, AddTodoList] = useState([]);
  const fName = useContext(FirstNmae);
  const addTodoList = (e) => {
    e.preventDefault();
    const id = todoList.length + 1;
    AddTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
      },
    ]);
    setInput('');
  };
  return (
    <>
      <div>{fName}</div>
      <div>
        <input
          type="text"
          value={input}
          name="txtName"
          onInput={(e) => setInput(e.target.value)}
        />
        <input type="submit" onClick={addTodoList} />
        <button onClick={addTodoList}>Add Item</button>
      </div>
      <div>
        <ul>
          {todoList.map((item) => {
            <li id={item.id}>{item.task}</li>;
          })}
        </ul>
      </div>
      {/* <FirstNmae.Consumer>
        {(fNmae1) => {
          return <>{fNmae1}</>;
        }}
      </FirstNmae.Consumer> */}
    </>
  );
};
export default ComB;
