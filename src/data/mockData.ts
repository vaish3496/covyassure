import { PolicyDocument, Language, Company } from '../types';

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
];

export const companies: Company[] = [
  { id: '1', name: 'Blue Cross Blue Shield' },
  { id: '2', name: 'Aetna Health Insurance' },
  { id: '3', name: 'Cigna Healthcare' },
  { id: '4', name: 'UnitedHealth Group' },
  { id: '5', name: 'Humana Inc.' },
  { id: '6', name: 'Kaiser Permanente' },
];

export const mockDocuments: PolicyDocument[] = [
  {
    id: '1',
    title: 'Comprehensive Health Insurance Policy - Individual',
    companyName: 'Blue Cross Blue Shield',
    originalLanguage: 'en',
    availableLanguages: ['en', 'es', 'fr', 'de', 'zh'],
    uploadDate: '2024-01-15',
    lastModified: '2024-01-20',
    fileSize: '2.4 MB'
  },
  {
    id: '2',
    title: 'Family Health Coverage Plan',
    companyName: 'Blue Cross Blue Shield',
    originalLanguage: 'en',
    availableLanguages: ['en', 'es', 'fr', 'pt'],
    uploadDate: '2024-01-10',
    lastModified: '2024-01-18',
    fileSize: '1.8 MB'
  },
  {
    id: '3',
    title: 'Premium Health Insurance Policy',
    companyName: 'Blue Cross Blue Shield',
    originalLanguage: 'en',
    availableLanguages: ['en', 'es', 'fr', 'de', 'it'],
    uploadDate: '2024-01-05',
    lastModified: '2024-01-12',
    fileSize: '1.2 MB'
  },
  {
    id: '4',
    title: 'Basic Health Coverage Plan',
    companyName: 'Aetna Health Insurance',
    originalLanguage: 'en',
    availableLanguages: ['en', 'es', 'fr', 'de', 'zh', 'ja'],
    uploadDate: '2023-12-20',
    lastModified: '2024-01-08',
    fileSize: '3.1 MB'
  },
  {
    id: '5',
    title: 'Employee Health Benefits Package',
    companyName: 'Aetna Health Insurance',
    originalLanguage: 'en',
    availableLanguages: ['en', 'es', 'fr'],
    uploadDate: '2023-12-15',
    lastModified: '2023-12-28',
    fileSize: '2.7 MB'
  },
  {
    id: '6',
    title: 'Senior Health Insurance Plan',
    companyName: 'Cigna Healthcare',
    originalLanguage: 'en',
    availableLanguages: ['en', 'es', 'fr', 'de'],
    uploadDate: '2024-01-12',
    lastModified: '2024-01-25',
    fileSize: '2.1 MB'
  },
  {
    id: '7',
    title: 'Student Health Coverage',
    companyName: 'Cigna Healthcare',
    originalLanguage: 'en',
    availableLanguages: ['en', 'es', 'zh'],
    uploadDate: '2024-01-08',
    lastModified: '2024-01-22',
    fileSize: '1.5 MB'
  },
  {
    id: '8',
    title: 'Medicare Advantage Plan',
    companyName: 'UnitedHealth Group',
    originalLanguage: 'en',
    availableLanguages: ['en', 'es', 'fr', 'de', 'zh'],
    uploadDate: '2024-01-18',
    lastModified: '2024-01-28',
    fileSize: '3.8 MB'
  }
];

export const mockTranslations = {
  '1': {
    en: `
# Comprehensive Health Insurance Policy - Individual

## Coverage Overview
This comprehensive health insurance policy provides extensive medical coverage for individual policyholders, including inpatient and outpatient services, preventive care, prescription drugs, and emergency medical treatment.

## Benefits Included
- **Inpatient Care**: Full coverage for hospital stays, including room and board, nursing care, and medical procedures
- **Outpatient Services**: Coverage for doctor visits, specialist consultations, and diagnostic tests
- **Preventive Care**: 100% coverage for annual check-ups, vaccinations, and health screenings
- **Prescription Drugs**: Comprehensive formulary with tiered pricing structure
- **Emergency Services**: 24/7 emergency room coverage and ambulance services

## Deductibles and Co-payments
- Annual deductible: $1,500 per individual
- Primary care co-payment: $25 per visit
- Specialist co-payment: $50 per visit
- Emergency room co-payment: $200 per visit (waived if admitted)

## Exclusions
This policy does not cover cosmetic procedures, experimental treatments, or services deemed medically unnecessary by our review board.
    `,
    es: `
# Póliza de Seguro de Salud Integral - Individual

## Resumen de Cobertura
Esta póliza de seguro de salud integral proporciona una amplia cobertura médica para asegurados individuales, incluyendo servicios hospitalarios y ambulatorios, atención preventiva, medicamentos recetados y tratamiento médico de emergencia.

## Beneficios Incluidos
- **Atención Hospitalaria**: Cobertura completa para estancias hospitalarias, incluyendo habitación y comida, atención de enfermería y procedimientos médicos
- **Servicios Ambulatorios**: Cobertura para visitas médicas, consultas especializadas y pruebas diagnósticas
- **Atención Preventiva**: Cobertura del 100% para chequeos anuales, vacunaciones y exámenes de salud
- **Medicamentos Recetados**: Formulario integral con estructura de precios escalonada
- **Servicios de Emergencia**: Cobertura de sala de emergencias 24/7 y servicios de ambulancia

## Deducibles y Co-pagos
- Deducible anual: $1,500 por individuo
- Co-pago de atención primaria: $25 por visita
- Co-pago de especialista: $50 por visita
- Co-pago de sala de emergencias: $200 por visita (exonerado si es admitido)

## Exclusiones
Esta póliza no cubre procedimientos cosméticos, tratamientos experimentales o servicios considerados médicamente innecesarios por nuestro comité de revisión.
    `,
    fr: `
# Police d'Assurance Santé Complète - Individuelle

## Aperçu de la Couverture
Cette police d'assurance santé complète offre une couverture médicale étendue pour les assurés individuels, incluant les services hospitaliers et ambulatoires, les soins préventifs, les médicaments sur ordonnance et les traitements médicaux d'urgence.

## Prestations Incluses
- **Soins Hospitaliers**: Couverture complète pour les séjours hospitaliers, incluant chambre et pension, soins infirmiers et procédures médicales
- **Services Ambulatoires**: Couverture pour les visites médicales, consultations spécialisées et tests diagnostiques
- **Soins Préventifs**: Couverture à 100% pour les bilans annuels, vaccinations et dépistages de santé
- **Médicaments sur Ordonnance**: Formulaire complet avec structure de prix échelonnée
- **Services d'Urgence**: Couverture salle d'urgence 24h/24 et services d'ambulance

## Franchises et Co-paiements
- Franchise annuelle: 1 500 $ par individu
- Co-paiement soins primaires: 25 $ par visite
- Co-paiement spécialiste: 50 $ par visite
- Co-paiement salle d'urgence: 200 $ par visite (annulé si admis)

## Exclusions
Cette police ne couvre pas les procédures cosmétiques, les traitements expérimentaux ou les services jugés médicalement non nécessaires par notre comité d'examen.
    `
  }
};