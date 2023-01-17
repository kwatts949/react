// Hooks
import React, { useState } from "react";

// Styling
import "./ExpenseItem.css";

// Components
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const handleClick = () => {
    setTitle('Updated')
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
// props == properties from app.js
