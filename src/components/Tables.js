
import React from 'react'

function Tables({ transactions, onDelete }) {

  const handleDelete = (index) => {
    onDelete(index);
  }
  
  return (
    <div className='container'>
      <table className='table table-striped-columns table-bordered table-hover'>
        <thead>
          <tr>
            <th >Date</th>
            <th >Description</th>
            <th >Category</th>
            <th >Amount</th>
            <th >Delete <br/> Transaction</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date.toLocaleDateString('en-GB')}</td>  
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tables
