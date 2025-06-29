export interface PolicyDocument {
  id: string;
  title: string;
  companyName: string;
  originalLanguage: string;
  availableLanguages: string[];
  uploadDate: string;
  lastModified: string;
}

export interface Translation {
  id: string;
  documentId: string;
  language: string;
  content: string;
  translatedBy: string;
  translatedDate: string;
  verified: boolean;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export interface Company {
  id: string;
  name: string;
}