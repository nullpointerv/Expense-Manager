import React, { useState, useEffect } from 'react';
import { Layout, Info } from 'lucide-react';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { Dashboard } from './components/Dashboard';
import { About } from './components/About';
import { Footer } from './components/Footer';
import type { Expense } from './types';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <div className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Layout className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h1 className="ml-2 text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Kharcha_Sambhal
              </h1>
            </div>
            <button
              onClick={() => setShowAbout(!showAbout)}
              className="flex items-center px-3 py-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
            >
              <Info className="w-5 h-5 mr-1" />
              <span>About</span>
            </button>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {showAbout ? (
          <About onClose={() => setShowAbout(false)} />
        ) : (
          <>
            <Dashboard expenses={expenses} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-1 order-2 lg:order-1">
                <ExpenseForm onAddExpense={addExpense} />
              </div>
              <div className="lg:col-span-2 order-1 lg:order-2">
                <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;