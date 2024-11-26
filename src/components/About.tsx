import React from 'react';
import { X } from 'lucide-react';

interface AboutProps {
  onClose: () => void;
}

export function About({ onClose }: AboutProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-slate-700 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-200"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-400">
            {/* Replace the URL below with your image URL */}
            <img
              src="https://i.ibb.co/t3m0yWc/Whats-App-Image-2024-11-25-at-8-29-59-PM.jpg"
              alt="Khushi Kumari"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Khushi Kumari</h2>
          <p className="text-slate-400 text-sm">3rd Year BCA Student</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300 leading-relaxed mb-6">
            Hi there! I'm Khushi, a Lazy developer who created Kharcha_Sambhal to help people manage their expenses effectively. I designed this application to be both beautiful and functional.
          </p>

          <div className="bg-slate-700/30 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">About Kharcha_Sambhal</h3>
            <p className="text-slate-300 leading-relaxed">
              Kharcha_Sambhal is a modern expense tracking application that helps you monitor your spending habits with ease. Built with React and TypeScript, it features a responsive design, intuitive interface, and powerful visualization tools to give you better insights into your financial habits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Technologies Used</h4>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Recharts</li>
              </ul>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Expense Tracking</li>
                <li>Category Management</li>
                <li>Visual Analytics</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}