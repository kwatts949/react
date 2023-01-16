import Expenses from "./components/Expenses";

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
      date: new Date(2023, 0, 17),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
        <Expenses items={expenses} />{" "}
        {/** pass expense const in to Expenses as property*/}
      </header>
    </div>
  );
}

export default App;
