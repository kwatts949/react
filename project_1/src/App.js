import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Make Up",
      amount: "51.00",
      date: new Date(2023, 0, 16),
    },
    { id: "e2", title: "Coat", amount: "225.00", date: new Date(2023, 0, 16) },
    {
      id: "e3",
      title: "Make Up",
      amount: "14.00",
      date: new Date(2023, 0, 16),
    },
    {
      id: "e4",
      title: "Clothes",
      amount: "80.10",
      date: new Date(2023, 0, 17),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
