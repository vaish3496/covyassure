import React from 'react';
import { Building2, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Company, PolicyDocument } from '../types';

interface CompanyPolicySelectorProps {
  companies: Company[];
  documents: PolicyDocument[];
  selectedCompany: string;
  selectedPolicy: string;
  onCompanyChange: (companyName: string) => void;
  onPolicyChange: (policyId: string) => void;
}

export default function CompanyPolicySelector({
  companies,
  documents,
  selectedCompany,
  selectedPolicy,
  onCompanyChange,
  onPolicyChange
}: CompanyPolicySelectorProps) {
  const companyPolicies = documents.filter(doc => doc.companyName === selectedCompany);

  return (
    <motion.div 
      className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Selector */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            <Building2 className="w-4 h-4 inline mr-2 text-blue-600" />
            Select Insurance Company
          </label>
          <motion.select
            value={selectedCompany}
            onChange={(e) => onCompanyChange(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all duration-300 shadow-sm hover:shadow-md"
            whileFocus={{ scale: 1.02 }}
          >
            <option value="">Choose a company...</option>
            {companies.map((company) => (
              <option key={company.id} value={company.name}>
                {company.name}
              </option>
            ))}
          </motion.select>
        </motion.div>

        {/* Policy Selector */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            <FileText className="w-4 h-4 inline mr-2 text-blue-600" />
            Select Policy Document
          </label>
          <motion.select
            value={selectedPolicy}
            onChange={(e) => onPolicyChange(e.target.value)}
            disabled={!selectedCompany}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white disabled:bg-gray-50 disabled:text-gray-400 transition-all duration-300 shadow-sm hover:shadow-md disabled:hover:shadow-sm"
            whileFocus={{ scale: selectedCompany ? 1.02 : 1 }}
          >
            <option value="">
              {selectedCompany ? 'Choose a policy...' : 'Select a company first'}
            </option>
            {companyPolicies.map((policy) => (
              <option key={policy.id} value={policy.id}>
                {policy.title}
              </option>
            ))}
          </motion.select>
        </motion.div>
      </div>

      {selectedCompany && (
        <motion.div 
          className="mt-6 pt-4 border-t border-gray-100"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.p 
            className="text-sm text-gray-600 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
              {companyPolicies.length}
            </span>
            policies available for{' '}
            <span className="font-semibold text-blue-600 ml-1">{selectedCompany}</span>
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
}