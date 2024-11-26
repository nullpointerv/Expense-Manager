import React from 'react';
import { format } from 'date-fns';
import { Trash2 } from 'lucide-react';
import type { Expense } from '../types';
import { categories } from '../data/categories';

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
}

export function ExpenseList({ expenses, onDeleteExpense }: ExpenseListProps) {
  const getCategoryColor = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.color || '#94a3b8';
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-slate-700">
      <div className="overflow-x-auto">
        <div className="hidden sm:block">
          <table className="min-w-full divide-y divide-slate-700">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {expenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-slate-700/30 transition-colors duration-150">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                    {format(new Date(expense.date), 'MMM d, yyyy')}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {expense.description}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{ backgroundColor: `${getCategoryColor(expense.category)}25`, color: getCategoryColor(expense.category) }}
                    >
                      {categories.find(cat => cat.id === expense.category)?.name}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-white">
                    ₹{expense.amount.toFixed(2)}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                    <button
                      onClick={() => onDeleteExpense(expense.id)}
                      className="text-red-400 hover:text-red-300 transition-colors duration-200"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile view */}
        <div className="sm:hidden">
          {expenses.map((expense) => (
            <div key={expense.id} className="px-4 py-3 border-b border-slate-700 last:border-b-0">
              <div className="flex justify-between items-start mb-1">
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{expense.description}</p>
                  <p className="text-xs text-slate-400">{format(new Date(expense.date), 'MMM d, yyyy')}</p>
                </div>
                <button
                  onClick={() => onDeleteExpense(expense.id)}
                  className="text-red-400 hover:text-red-300 transition-colors duration-200 ml-2"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{ backgroundColor: `${getCategoryColor(expense.category)}25`, color: getCategoryColor(expense.category) }}
                >
                  {categories.find(cat => cat.id === expense.category)?.name}
                </span>
                <span className="text-sm font-medium text-white">₹{expense.amount.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}