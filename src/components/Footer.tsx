import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-800/50 backdrop-blur-lg border-t border-slate-700 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Khushi Kumari. All rights reserved.
          </p>
          <div className="flex items-center mt-2 sm:mt-0">
            <span className="text-slate-400 text-sm">Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-400" />
            <span className="text-slate-400 text-sm">in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}