import React, { useState } from 'react';
import { X, Download, Globe, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PolicyDocument, Language } from '../types';
import { mockTranslations } from '../data/prodData';

interface DocumentViewerProps {
  document: PolicyDocument;
  languages: Language[];
  selectedLanguage: string;
  onClose: () => void;
  onLanguageChange: (language: string) => void;
}

export default function DocumentViewer({ 
  document, 
  languages, 
  selectedLanguage, 
  onClose, 
  onLanguageChange 
}: DocumentViewerProps) {
  const [viewMode, setViewMode] = useState<'single' | 'split'>('single');
  const [compareLanguage, setCompareLanguage] = useState('hi');
  const [copied, setCopied] = useState(false);

  const availableLanguages = languages.filter(lang => 
    document.availableLanguages.includes(lang.code)
  );

  const currentTranslation = mockTranslations['1']?.[selectedLanguage as keyof typeof mockTranslations['1']] || 'Translation not available for this language.';
  const compareTranslation = mockTranslations['1']?.[compareLanguage as keyof typeof mockTranslations['1']] || 'Translation not available for this language.';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentTranslation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-5/6 flex flex-col overflow-hidden"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                {document.title}
              </h2>
              <p className="text-sm text-gray-500">
                Last modified: {new Date(document.lastModified).toLocaleDateString()}
              </p>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-xl overflow-hidden shadow-sm">
                <motion.button
                  onClick={() => setViewMode('single')}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    viewMode === 'single' 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  Single View
                </motion.button>
                <motion.button
                  onClick={() => setViewMode('split')}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    viewMode === 'split' 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  Compare
                </motion.button>
              </div>

              {/* Language Selector */}
              <select
                value={selectedLanguage}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="border border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              >
                {availableLanguages.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.flag} {language.name}
                  </option>
                ))}
              </select>

              {viewMode === 'split' && (
                <motion.select
                  value={compareLanguage}
                  onChange={(e) => setCompareLanguage(e.target.value)}
                  className="border border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {availableLanguages
                    .filter(lang => lang.code !== selectedLanguage)
                    .map((language) => (
                      <option key={language.code} value={language.code}>
                        {language.flag} {language.name}
                      </option>
                    ))}
                </motion.select>
              )}

              <motion.button
                onClick={handleCopy}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-300 shadow-sm"
                title="Copy content"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Check className="w-5 h-5 text-green-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Copy className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* <motion.button 
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
              </motion.button> */}

              <motion.button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              {viewMode === 'single' ? (
                <motion.div 
                  key="single"
                  className="h-full p-6 overflow-y-auto"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none">
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            // Custom styling for code blocks
                            code: ({ className, children, ...props }: any) => {
                              const isInline = !className?.includes('language-');
                              return (
                                <code
                                  className={`${className} ${isInline ? 'bg-gray-200 px-1 py-0.5 rounded text-sm' : 'block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto'}`}
                                  {...props}
                                >
                                  {children}
                                </code>
                              );
                            },
                            // Custom styling for headings
                            h1: ({ children }: any) => <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>,
                            h2: ({ children }: any) => <h2 className="text-2xl font-bold text-gray-900 mb-3">{children}</h2>,
                            h3: ({ children }: any) => <h3 className="text-xl font-bold text-gray-900 mb-2">{children}</h3>,
                            // Custom styling for lists
                            ul: ({ children }: any) => <ul className="list-disc list-inside space-y-1 mb-4">{children}</ul>,
                            ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-1 mb-4">{children}</ol>,
                            // Custom styling for links
                            a: ({ children, href }: any) => (
                              <a href={href} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                                {children}
                              </a>
                            ),
                            // Custom styling for tables
                            table: ({ children }: any) => (
                              <div className="overflow-x-auto mb-4">
                                <table className="min-w-full border border-gray-300">{children}</table>
                              </div>
                            ),
                            th: ({ children }: any) => <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-semibold">{children}</th>,
                            td: ({ children }: any) => <td className="border border-gray-300 px-4 py-2">{children}</td>,
                          }}
                        >
                          {currentTranslation}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="split"
                  className="h-full flex"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Left Panel */}
                  <motion.div 
                    className="flex-1 border-r border-gray-200"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-3 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">
                        {languages.find(l => l.code === selectedLanguage)?.flag}{' '}
                        {languages.find(l => l.code === selectedLanguage)?.name}
                      </h3>
                    </div>
                    <div className="p-6 h-full overflow-y-auto">
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            code: ({ className, children, ...props }: any) => {
                              const isInline = !className?.includes('language-');
                              return (
                                <code
                                  className={`${className} ${isInline ? 'bg-gray-200 px-1 py-0.5 rounded text-xs' : 'block bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs'}`}
                                  {...props}
                                >
                                  {children}
                                </code>
                              );
                            },
                            h1: ({ children }: any) => <h1 className="text-2xl font-bold text-gray-900 mb-3">{children}</h1>,
                            h2: ({ children }: any) => <h2 className="text-xl font-bold text-gray-900 mb-2">{children}</h2>,
                            h3: ({ children }: any) => <h3 className="text-lg font-bold text-gray-900 mb-2">{children}</h3>,
                            ul: ({ children }: any) => <ul className="list-disc list-inside space-y-1 mb-3">{children}</ul>,
                            ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-1 mb-3">{children}</ol>,
                            a: ({ children, href }: any) => (
                              <a href={href} className="text-blue-600 hover:text-blue-800 underline text-sm" target="_blank" rel="noopener noreferrer">
                                {children}
                              </a>
                            ),
                            table: ({ children }: any) => (
                              <div className="overflow-x-auto mb-3">
                                <table className="min-w-full border border-gray-300 text-sm">{children}</table>
                              </div>
                            ),
                            th: ({ children }: any) => <th className="border border-gray-300 px-3 py-1 bg-gray-100 font-semibold text-sm">{children}</th>,
                            td: ({ children }: any) => <td className="border border-gray-300 px-3 py-1 text-sm">{children}</td>,
                          }}
                        >
                          {currentTranslation}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Panel */}
                  <motion.div 
                    className="flex-1"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="bg-gradient-to-r from-green-50 to-green-100 px-4 py-3 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">
                        {languages.find(l => l.code === compareLanguage)?.flag}{' '}
                        {languages.find(l => l.code === compareLanguage)?.name}
                      </h3>
                    </div>
                    <div className="p-6 h-full overflow-y-auto">
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            code: ({ className, children, ...props }: any) => {
                              const isInline = !className?.includes('language-');
                              return (
                                <code
                                  className={`${className} ${isInline ? 'bg-gray-200 px-1 py-0.5 rounded text-xs' : 'block bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs'}`}
                                  {...props}
                                >
                                  {children}
                                </code>
                              );
                            },
                            h1: ({ children }: any) => <h1 className="text-2xl font-bold text-gray-900 mb-3">{children}</h1>,
                            h2: ({ children }: any) => <h2 className="text-xl font-bold text-gray-900 mb-2">{children}</h2>,
                            h3: ({ children }: any) => <h3 className="text-lg font-bold text-gray-900 mb-2">{children}</h3>,
                            ul: ({ children }: any) => <ul className="list-disc list-inside space-y-1 mb-3">{children}</ul>,
                            ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-1 mb-3">{children}</ol>,
                            a: ({ children, href }: any) => (
                              <a href={href} className="text-blue-600 hover:text-blue-800 underline text-sm" target="_blank" rel="noopener noreferrer">
                                {children}
                              </a>
                            ),
                            table: ({ children }: any) => (
                              <div className="overflow-x-auto mb-3">
                                <table className="min-w-full border border-gray-300 text-sm">{children}</table>
                              </div>
                            ),
                            th: ({ children }: any) => <th className="border border-gray-300 px-3 py-1 bg-gray-100 font-semibold text-sm">{children}</th>,
                            td: ({ children }: any) => <td className="border border-gray-300 px-3 py-1 text-sm">{children}</td>,
                          }}
                        >
                          {compareTranslation}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}