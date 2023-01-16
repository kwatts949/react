import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2023, 0, 18).toDateString();
  const expenseTitle = 'String'
  const expenseAmount = 0.00

  return (
    <div className='expense-item'>
      <div>{expenseDate}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
      <div className='expense-item__price'>{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
