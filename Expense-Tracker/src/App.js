import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
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
      date: new Date(2022, 0, 17),
    },
  ];

  const handleAddExpense = (expense) => {
    console.log('App.js')
    console.log(expense)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={handleAddExpense}/>
        <Expenses items={expenses} />{" "}
        {/** pass expense const in to Expenses as property*/}
      </header>
    </div>
  );
};

export default App;
