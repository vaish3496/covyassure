import React, { useState } from 'react';
import { Shield, Globe, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';

interface HeaderProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  languages: Language[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ 
  selectedLanguage, 
  onLanguageChange, 
  languages, 
  searchQuery, 
  onSearchChange 
}: HeaderProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const clearSearch = () => {
    onSearchChange('');
  };

  return (
    <motion.header 
      className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div 
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                CovyAssure
              </h1>
              <p className="text-sm text-gray-500">Insurance Document Platform</p>
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="flex-1 max-w-2xl mx-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className={`relative transition-all duration-300 ${
                  isSearchFocused ? 'scale-105' : 'scale-100'
                }`}
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search policies, companies, or documents..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm focus:shadow-md"
                />
                <AnimatePresence>
                  {searchQuery && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                    >
                      <X className="w-4 h-4" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>

          {/* Language Selector */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <select
                value={selectedLanguage}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {languages.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.flag} {language.name}
                  </option>
                ))}
              </select>
              <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}