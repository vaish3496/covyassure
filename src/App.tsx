import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import CompanyPolicySelector from './components/CompanyPolicySelector';
import DocumentCard from './components/DocumentCard';
import DocumentViewer from './components/DocumentViewer';
import SearchResults from './components/SearchResults';
import { PolicyDocument } from './types';
import { languages, mockDocuments, companies } from './data/mockData';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedPolicy, setSelectedPolicy] = useState('');
  const [viewingDocument, setViewingDocument] = useState<PolicyDocument | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return mockDocuments.filter(doc => 
      doc.title.toLowerCase().includes(query) ||
      doc.companyName.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Get the selected document
  const selectedDocument = useMemo(() => {
    return selectedPolicy ? mockDocuments.find(doc => doc.id === selectedPolicy) : null;
  }, [selectedPolicy]);

  const handleViewDocument = (document: PolicyDocument) => {
    setViewingDocument(document);
  };

  const handleCloseViewer = () => {
    setViewingDocument(null);
  };

  const handleViewerLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleCompanyChange = (companyName: string) => {
    setSelectedCompany(companyName);
    setSelectedPolicy(''); // Reset policy selection when company changes
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // Clear selections when searching
    if (query.trim()) {
      setSelectedCompany('');
      setSelectedPolicy('');
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header 
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
        languages={languages}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      
      <main className="max-w-7xl mx-auto p-6">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
            Insurance Policy Documents
          </h2>
          <p className="text-gray-600 text-lg">
            Select an insurance company and policy document to view translations across multiple languages.
          </p>
        </motion.div>

        {/* Show search results if searching */}
        <AnimatePresence mode="wait">
          {searchQuery ? (
            <SearchResults
              searchQuery={searchQuery}
              searchResults={searchResults}
              languages={languages}
              selectedLanguage={selectedLanguage}
              onView={handleViewDocument}
              onClearSearch={handleClearSearch}
            />
          ) : (
            <motion.div
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CompanyPolicySelector
                companies={companies}
                documents={mockDocuments}
                selectedCompany={selectedCompany}
                selectedPolicy={selectedPolicy}
                onCompanyChange={handleCompanyChange}
                onPolicyChange={setSelectedPolicy}
              />
              
              {/* Selected Document Display */}
              <AnimatePresence>
                {selectedDocument && (
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      Selected Policy Document
                    </motion.h3>
                    <div className="max-w-2xl">
                      <DocumentCard
                        document={selectedDocument}
                        languages={languages}
                        selectedLanguage={selectedLanguage}
                        onView={handleViewDocument}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Empty States */}
              <AnimatePresence>
                {!selectedCompany && (
                  <motion.div 
                    className="text-center py-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div 
                      className="text-gray-400 mb-6"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg className="mx-auto h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Select an Insurance Company</h3>
                    <p className="text-gray-500 max-w-md mx-auto text-lg">
                      Choose an insurance company from the dropdown above to view their available policy documents and translations.
                    </p>
                  </motion.div>
                )}

                {selectedCompany && !selectedPolicy && (
                  <motion.div 
                    className="text-center py-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div 
                      className="text-gray-400 mb-6"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg className="mx-auto h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Select a Policy Document</h3>
                    <p className="text-gray-500 max-w-md mx-auto text-lg">
                      Choose a policy document from{' '}
                      <span className="font-semibold text-blue-600">{selectedCompany}</span>{' '}
                      to view its details and translations.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      {/* Document Viewer Modal */}
      <AnimatePresence>
        {viewingDocument && (
          <DocumentViewer
            document={viewingDocument}
            languages={languages}
            selectedLanguage={selectedLanguage}
            onClose={handleCloseViewer}
            onLanguageChange={handleViewerLanguageChange}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;