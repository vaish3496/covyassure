import React from 'react';
import { Calendar, FileText, Globe, Download, Eye, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { PolicyDocument, Language } from '../types';

interface DocumentCardProps {
  document: PolicyDocument;
  languages: Language[];
  selectedLanguage: string;
  onView: (document: PolicyDocument) => void;
}

export default function DocumentCard({ document, languages, selectedLanguage, onView }: DocumentCardProps) {
  const availableLanguageNames = document.availableLanguages
    .map(code => languages.find(lang => lang.code === code)?.name)
    .filter(Boolean)
    .join(', ');

  const isAvailableInSelected = document.availableLanguages.includes(selectedLanguage);

  return (
    <motion.div 
      className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.02 }}
      layout
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <motion.div 
            className="mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
              {document.companyName}
            </span>
          </motion.div>
          
          <motion.h3 
            className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {document.title}
          </motion.h3>
          
          <motion.div 
            className="flex items-center space-x-4 text-sm text-gray-500 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(document.lastModified).toLocaleDateString()}
            </div>
            {/* <div className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              {document.fileSize}
            </div> */}
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Globe className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              Available in: {availableLanguageNames}
            </span>
          </motion.div>
          
          {isAvailableInSelected && (
            <motion.div 
              className="flex items-center text-sm text-green-600 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-4 h-4 mr-1" />
              Available in selected language
            </motion.div>
          )}
        </div>
      </div>
      
      <motion.div 
        className="flex space-x-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          onClick={() => onView(document)}
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center font-semibold shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Eye className="w-4 h-4 mr-2" />
          View Document
        </motion.button>
        {/* <motion.button 
          className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-4 h-4" />
        </motion.button> */}
      </motion.div>
    </motion.div>
  );
}