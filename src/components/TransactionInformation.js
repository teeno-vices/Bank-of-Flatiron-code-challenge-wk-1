import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const TransactionInformation = ({ addTransaction }) => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddTransaction = () => {
        if (selectedDate && description && category && amount) {
            const newTransaction = {
                date: selectedDate,
                description: description,
                category: category,
                amount: amount
            };
            addTransaction(newTransaction);

            setSelectedDate(null);
            setDescription('');
            setCategory('');
            setAmount('');
        } else {
            alert('Please fill in all fields');
        }
    };


    return (
        <div>
            <div className='box'>
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText='dd/mm/yyyy'
                    id='transaction-date-input'
                    className='transaction-information'
                />
                <input type='text' placeholder='Transaction description' className='transaction-information' value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type='text' placeholder='Transaction Category' className='transaction-information' value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type='text' placeholder='Transaction Amount' className='transaction-information' value={amount} onChange={(e) => setAmount(e.target.value)} />

            </div>
            <div>
                <button className='button' onClick={handleAddTransaction}>Add Transaction</button>
            </div>
        </div>
    )
}

export default TransactionInformation;
