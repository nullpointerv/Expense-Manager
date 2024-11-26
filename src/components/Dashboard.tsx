import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Wallet, TrendingUp, Calendar } from 'lucide-react';
import type { Expense } from '../types';
import { categories } from '../data/categories';

interface DashboardProps {
  expenses: Expense[];
}

export function Dashboard({ expenses }: DashboardProps) {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const expensesByCategory = categories.map(category => ({
    name: category.name,
    value: expenses
      .filter(expense => expense.category === category.id)
      .reduce((sum, expense) => sum + expense.amount, 0),
    color: category.color
  })).filter(item => item.value > 0);

  const averageExpense = expenses.length > 0 
    ? totalExpenses / expenses.length 
    : 0;

  return (
    <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Total Expenses Card */}
        <div className="floating-card bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg p-4 sm:p-6 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-400">Total Expenses</p>
              <p className="text-xl sm:text-2xl font-semibold text-white">₹{totalExpenses.toFixed(2)}</p>
            </div>
            <div className="p-2 sm:p-3 bg-blue-500/10 rounded-full">
              <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Average Expense Card */}
        <div className="floating-card bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg p-4 sm:p-6 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-400">Average Expense</p>
              <p className="text-xl sm:text-2xl font-semibold text-white">₹{averageExpense.toFixed(2)}</p>
            </div>
            <div className="p-2 sm:p-3 bg-green-500/10 rounded-full">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            </div>
          </div>
        </div>

        {/* Total Transactions Card */}
        <div className="floating-card bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg p-4 sm:p-6 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-400">Total Transactions</p>
              <p className="text-xl sm:text-2xl font-semibold text-white">{expenses.length}</p>
            </div>
            <div className="p-2 sm:p-3 bg-purple-500/10 rounded-full">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Expenses by Category Chart */}
      {expensesByCategory.length > 0 && (
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg p-4 sm:p-6 border border-slate-700">
          <h3 className="text-base sm:text-lg font-medium text-white mb-4">Expenses by Category</h3>
          <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expensesByCategory}
                  cx="50%"
                  cy="50%"
                  innerRadius={window.innerWidth < 640 ? 40 : 60}
                  outerRadius={window.innerWidth < 640 ? 60 : 80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {expensesByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`₹${value.toFixed(2)}`, 'Amount']}
                  contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs sm:text-sm">
            {expensesByCategory.map((category, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2"
                  style={{ backgroundColor: category.color }}
                />
                <span className="text-slate-400">
                  {category.name} (₹{category.value.toFixed(2)})
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}