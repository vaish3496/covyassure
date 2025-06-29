import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { PolicyDocument, Language } from '../types';
import DocumentCard from './DocumentCard';

interface SearchResultsProps {
  searchQuery: string;
  searchResults: PolicyDocument[];
  languages: Language[];
  selectedLanguage: string;
  onView: (document: PolicyDocument) => void;
  onClearSearch: () => void;
}

export default function SearchResults({
  searchQuery,
  searchResults,
  languages,
  selectedLanguage,
  onView,
  onClearSearch
}: SearchResultsProps) {
  if (!searchQuery) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        {/* Search Header */}
        <motion.div 
          className="flex items-center justify-between mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="font-semibold text-blue-900">
                Search Results for "{searchQuery}"
              </h3>
              <p className="text-sm text-blue-700">
                Found {searchResults.length} matching {searchResults.length === 1 ? 'document' : 'documents'}
              </p>
            </div>
          </div>
          <motion.button
            onClick={onClearSearch}
            className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Search Results */}
        {searchResults.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {searchResults.map((document, index) => (
              <motion.div
                key={document.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <DocumentCard
                  document={document}
                  languages={languages}
                  selectedLanguage={selectedLanguage}
                  onView={onView}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-gray-400 mb-4">
              <Search className="mx-auto h-12 w-12" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any documents matching "{searchQuery}". Try adjusting your search terms.
            </p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}