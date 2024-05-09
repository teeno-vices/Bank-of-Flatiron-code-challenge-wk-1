
import React, {useState} from 'react';
import './App.css';
import Tables from './components/Tables.js'
import Navbar from './components/Navbar.js';
import SearchTransaction from './components/SearchTransaction.js'
import TransactionInformation from './components/TransactionInformation.js';
import { initialTransactions } from './components/InitialTransactions.js';
function App() {

const [transactions, setTransactions] = useState(initialTransactions);
const [searchQuery, setSearchQuery] = useState('');


const addTransaction = (transaction) => {
  setTransactions([...transactions, transaction]);
}

const handleSearchChange = (event) => {
  setSearchQuery(event.target.value);
};

const handleDelete = (index) => {
  const updatedTransactions = [...transactions];
  updatedTransactions.splice(index, 1);
  setTransactions(updatedTransactions);
};

const filteredTransactions = transactions.filter(transaction =>
  transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
);
  
  return (
    <div className="App">
      <Navbar />
      <SearchTransaction handleSearchChange={handleSearchChange}/>
      <TransactionInformation addTransaction={addTransaction}/>
      <Tables transactions={filteredTransactions} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
