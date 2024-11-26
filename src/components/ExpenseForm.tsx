import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { categories } from '../data/categories';

interface ExpenseFormProps {
  onAddExpense: (expense: any) => void;
}

export function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(categories[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount) return;

    onAddExpense({
      id: Date.now().toString(),
      description,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString(),
    });

    setDescription('');
    setAmount('');
    setCategory(categories[0].id);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg p-4 sm:p-6 border border-slate-700 sticky top-20">
      <div className="space-y-4">
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-slate-300">
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-slate-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-700/50 text-white p-2 text-sm sm:text-base"
            placeholder="Enter expense description"
          />
        </div>
        
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-slate-300">
            Amount
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-slate-400 sm:text-sm">₹</span>
            </div>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pl-7 block w-full rounded-md border-slate-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-700/50 text-white p-2 text-sm sm:text-base"
              placeholder="0.00"
              step="0.01"
            />
          </div>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-slate-300">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full rounded-md border-slate-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-700/50 text-white p-2 text-sm sm:text-base"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Add Expense
        </button>
      </div>
    </form>
  );
}