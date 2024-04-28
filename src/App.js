import React, {useState} from 'react';
import './App.css';
import Tables from './components/Tables.js'
import Navbar from './components/Navbar.js';
import SearchTransaction from './components/SearchTransaction.js'
import TransactionInformation from './components/TransactionInformation.js';

function App() {

  const initialTransactions = [
    {
      date: new Date('1/12/2019'),
      description: 'Paycheck from Bob`s Burgers',
      category: 'Income',
      amount: 1000
    },
    {
      date: new Date('1/12/2019'),
      description: 'South by Southwest Quinoa Bowl at Fresh & Co',
      category: 'Food',
      amount: -10.55
    },
    {
      date: new Date('2/12/2019'),
      description: 'South by Southwest Quinoa Bowl at Fresh & Co',
      category: 'Food',
      amount: -10.55
    },
    {
      date: new Date('4/12/2019'),
      description: 'Sunglasses, Urban Outfitters',
      category: 'Fashion',
      amount: -24.99
    },
    {
      date: new Date('6/12/2019'),
      description: 'Venmo, Alice pays you for Burritos',
      category: 'Food',
      amount: 8.75
    },
    {
      date: new Date('8/12/2019'),
      description: 'Chipotle',
      category: 'Food',
      amount: -17.59
    }
  ];

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
