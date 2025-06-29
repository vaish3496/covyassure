import { PolicyDocument, Language, Company } from '../types';

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
];

export const companies: Company[] = [
  { id: '1', name: 'HDFC ERGO' },
  { id: '2', name: 'Care' },
  { id: '3', name: 'ICICI Lombard' },
];

export const mockDocuments: PolicyDocument[] = [
  {
    id: '1',
    title: 'Optima Secure',
    companyName: 'HDFC ERGO',
    originalLanguage: 'en',
    availableLanguages: ['en', 'hi'],
    uploadDate: '2025-06-29',
    lastModified: '2025-06-29',
  },
  {
    id: '2',
    title: 'Care Supreme',
    companyName: 'Care',
    originalLanguage: 'en',
    availableLanguages: ['en', 'hi'],
    uploadDate: '2025-06-29',
    lastModified: '2025-06-29',
  },
  {
    id: '3',
    title: 'Elevate',
    companyName: 'ICICI Lombard',
    originalLanguage: 'en',
    availableLanguages: ['en', 'hi'],
    uploadDate: '2025-06-29',
    lastModified: '2025-06-29',
  },
];

export const mockTranslations = {
  '1': {
    en: `# HDFC ERGO Optima Secure - Structured Summary

---

### 🏆 Introduction

**SABSE BADA SACH - Optima Secure De Benefits SO MUCH!**  
A revolutionary health insurance plan with **4X coverage**, **zero deduction on non-medical expenses**, **100% restoration**, and **incremental coverage** — all **at no extra cost**.

---

### 🚀 Key Benefits Overview

| **Benefit** | **Description** | **Impact** |
|-------------|----------------|------------|
| **Secure Benefit** | Instantly doubles the base sum insured from Day 1 | 2X Coverage |
| **Plus Benefit** | Increases base sum insured by 50% after 1 year, 100% after 2 years | Additional 2X over time |
| **Restore Benefit** | Automatically restores 100% of base sum insured after any claim | Additional 1X |
| **Protect Benefit** | Covers listed non-medical consumables (e.g., gloves, masks) | 0 deduction |

🔁 **All together → 4X Total Coverage**

---

### 👤 Mr. Sharma's Example

| **Scenario** | **Details** |
|--------------|------------|
| Age | 35 years |
| Base Cover | ₹10 lakhs |
| Premium (Without Deductible) | ₹26,700 |
| Secure Benefit | 10L → 20L on Day 1 |
| Restore Benefit | If 10L claimed, 10L restored: Total 40L |
| Plus Benefit | After Year 1 → 15L, After Year 2 → 20L |
| Protect Benefit | Covers 10–20% of hospital bill's non-medical expenses |
| Discount Option | ₹25,000 deductible → 25% premium discount → ₹20,025 |

---

### 📊 Total Coverage Timeline

#### Year-wise Coverage Evolution

| **Year** | **Base** | **Secure** | **Plus** | **Restore** | **Total** |
|----------|----------|------------|----------|-------------|-----------|
| Day 1 | 10L | 10L | — | — | 20L |
| Year 1 | 10L | 10L | 5L | — | 25L |
| Year 2 | 10L | 10L | 10L | 10L (if claimed) | 40L |

---

### 🏥 Core Coverage Details

- **Pre-hospitalisation**: 60 days
- **Post-hospitalisation**: 180 days
- **Room Rent / ICU**: At actuals
- **Home Healthcare**: Covered on cashless basis in select cities
- **Daily Cash**: ₹800/day (shared room >48 hrs), max ₹4800
- **Organ Donor Expenses**: Covered
- **Emergency Air Ambulance**: Up to ₹5 lakhs
- **Preventive Health Checkups**: Available yearly post-renewal
- **AYUSH Treatment**: Ayurveda, Homeopathy, etc. included
- **E-opinion**: 51 critical illnesses

---

### 🧮 Deductible Discounts (Aggregate Deductible Option)

| **Deductible** | **Discount (Base < 25L)** | **Discount (Base = 25L)** | **Discount (Base ≥ 50L)** |
|----------------|---------------------------|---------------------------|----------------------------|
| ₹25,000 | 25% | 15% | NA |
| ₹50,000 | 40% | 30% | 15% |
| ₹1,00,000 | 50% | 40% | 30% |
| ₹2,00,000 | 55% | 45% | 40% |
| ₹3,00,000 | 65% | 55% | 45% |

---

### 🧩 Add-On Covers

| **Add-On** | **Benefit** |
|------------|-------------|
| **my:Health Critical Illness** | Covers 51 illnesses, SI up to ₹2 Cr |
| **my:Health Hospital Cash** | ₹500–₹10,000 daily cash options |
| **Unlimited Restore** | Unlimited restorations in policy year |
| **Individual Personal Accident Rider** | Lump-sum payout on accidental disability/death |
| **Optima Wellbeing** | Outpatient expense coverage |

---

### 💰 Discounts Summary

- **Loyalty Discount**: 2.5% if another active retail policy > ₹2000
- **Family Discount**: 10% on individual policy if ≥ 2 members
- **Long-Term Discount**:
  - 2-Year Tenure: 7.5% off
  - 3-Year Tenure: 10% off

---

### 📦 Policy Options

- **Coverage Amounts**: ₹10L, ₹25L, ₹50L, ₹1Cr, ₹2Cr
- **Individual Policy**: Up to 6 adults + 6 children
- **Floater Policy**: Up to 4 adults + 6 children
- **Tenure**: 1, 2 or 3 years
- **Installments**: Monthly, quarterly, half-yearly available

---

### 🛡️ Customer Trust

- 1.6 Cr+ customers
- 16,000+ network hospitals**
- 24x7 customer service in 10 languages
- Quick pre-auth & claims
- Cashless hospitalization
- Tax benefit under 80D

---

### 🔁 Policy Continuity & Portability

- **Lifelong Renewability**
- **No Claim-Based Loading**
- **No Geography-Based Copayment**
- **Waiting Period Reduction**: 1 year reduction per renewal
- **Migration & Portability Options**: As per IRDAI norms

---

### 🚫 Exclusions

#### Standard Exclusions

- Investigations only
- Obesity, cosmetic surgery
- Hazardous sports injuries
- Substance abuse
- Infertility/maternity
- Unproven treatments

#### Waiting Periods

- 30 Days (Initial)
- 24 Months (Specific diseases)
- 36 Months (Pre-existing conditions)

---

### ⚖️ Legal Disclaimers

- Section 41 of Insurance Act prohibits any premium/commission rebate
- Premiums/benefits subject to IRDAI approval
- Terms & conditions apply. Refer full policy document for detailed exclusions, limits, and rules.

---

### 🔗 More Info

Visit [www.hdfcergo.com](https://www.hdfcergo.com) or call **022-6242-6242** for details.

_UIN: my: Optima Secure_  
_IRDAI Reg. No. 146_
`,
    hi: `# HDFC ERGO Optima Secure - संरचित विवरण (हिंदी में)

---

### 🏆 परिचय

**सबसे बड़ा सच - Optima Secure के लाभ बहुत ज़्यादा हैं!**  
एक क्रांतिकारी स्वास्थ्य बीमा योजना जिसमें मिलता है **4 गुना कवरेज**, **नॉन-मेडिकल खर्चों पर कोई कटौती नहीं**, **100% कवर की बहाली**, और **स्वतः बढ़ने वाला कवरेज** — वह भी **बिना किसी अतिरिक्त लागत** के।

---

### 🚀 मुख्य लाभ एक नज़र में

| **लाभ** | **विवरण** | **प्रभाव** |
|---------|------------|-------------|
| **Secure Benefit** | बेस कवरेज को पहले दिन से ही दोगुना कर देता है | 2X कवरेज |
| **Plus Benefit** | कवरेज हर साल 50% से बढ़ता है, 2 साल में 100% | अतिरिक्त 2X |
| **Restore Benefit** | किसी भी क्लेम के बाद 100% कवरेज स्वतः बहाल होता है | और 1X |
| **Protect Benefit** | दस्ताने, मास्क जैसे नॉन-मेडिकल खर्च भी कवर करता है | 0 कटौती |

🔁 **सभी मिलकर → कुल 4 गुना कवरेज**

---

### 👤 मिस्टर शर्मा का उदाहरण

| **स्थिति** | **विवरण** |
|------------|------------|
| उम्र | 35 वर्ष |
| बेस कवरेज | ₹10 लाख |
| प्रीमियम (बिना कटौती) | ₹26,700 |
| Secure Benefit | ₹10L → ₹20L पहले दिन से |
| Restore Benefit | क्लेम के बाद ₹10L पुनः जुड़ जाता है → कुल ₹40L |
| Plus Benefit | 1 साल बाद ₹15L, 2 साल बाद ₹20L |
| Protect Benefit | कुल बिल का 10–20% नॉन-मेडिकल खर्च भी कवर |
| डिस्काउंट विकल्प | ₹25,000 डिडक्टिबल लेने पर प्रीमियम 25% कम → ₹20,025 |

---

### 📊 कुल कवरेज का टाइमलाइन

| **साल** | **बेस** | **Secure** | **Plus** | **Restore** | **कुल** |
|----------|----------|------------|----------|-------------|----------|
| पहले दिन | ₹10L | ₹10L | — | — | ₹20L |
| पहला साल | ₹10L | ₹10L | ₹5L | — | ₹25L |
| दूसरा साल | ₹10L | ₹10L | ₹10L | ₹10L (यदि क्लेम किया) | ₹40L |

---

### 🏥 प्रमुख कवरेज विवरण

- **प्रि-हॉस्पिटलाइजेशन**: 60 दिन
- **पोस्ट हॉस्पिटलाइजेशन**: 180 दिन
- **रूम रेंट / ICU**: वास्तविक खर्च के अनुसार
- **होम हेल्थकेयर**: कुछ शहरों में कैशलेस सुविधा
- **डेली कैश**: ₹800/दिन (शेयर्ड रूम में 48 घंटे से ज़्यादा रुकने पर), अधिकतम ₹4,800
- **ऑर्गन डोनर खर्च**: कवर किया गया
- **एयर एम्बुलेंस**: ₹5 लाख तक
- **प्रीवेंटिव हेल्थ चेकअप**: हर नवीनीकरण वर्ष पर
- **AYUSH इलाज**: आयुर्वेद, होम्योपैथी आदि शामिल
- **ई-ओपिनियन**: 51 गंभीर बीमारियों के लिए

---

### 🧮 डिडक्टिबल (Deductible) और डिस्काउंट

| **डिडक्टिबल राशि** | **डिस्काउंट (बेस < ₹25L)** | **डिस्काउंट (बेस = ₹25L)** | **डिस्काउंट (बेस ≥ ₹50L)** |
|----------------------|-----------------------------|-----------------------------|------------------------------|
| ₹25,000 | 25% | 15% | NA |
| ₹50,000 | 40% | 30% | 15% |
| ₹1,00,000 | 50% | 40% | 30% |
| ₹2,00,000 | 55% | 45% | 40% |
| ₹3,00,000 | 65% | 55% | 45% |

---

### 🧩 ऐड-ऑन कवर

| **ऐड-ऑन** | **लाभ** |
|-----------|----------|
| **my:Health Critical Illness** | ₹1 लाख से ₹2 करोड़ तक 51 बीमारियों के लिए कवर |
| **Hospital Cash Benefit** | ₹500–₹10,000 प्रतिदिन तक की सुविधा |
| **Unlimited Restore** | एक वर्ष में अनगिनत बार कवरेज पुनः बहाल |
| **Accident Rider** | दुर्घटना या विकलांगता पर लंपसम पेमेंट |
| **Optima Wellbeing** | ओपीडी खर्चों की सुविधा

---

### 💰 छूट की जानकारी

- **लॉयल्टी डिस्काउंट**: ₹2,000 से अधिक के किसी और एक्टिव पॉलिसी पर 2.5% छूट
- **फैमिली डिस्काउंट**: 2 या अधिक सदस्यों पर 10% छूट (इंडिविजुअल पॉलिसी में)
- **लॉन्ग टर्म छूट**:
  - 2 वर्ष की पॉलिसी पर 7.5%
  - 3 वर्ष की पॉलिसी पर 10%

---

### 📦 पॉलिसी विकल्प

- **कवरेज राशि**: ₹10L, ₹25L, ₹50L, ₹1Cr, ₹2Cr
- **इंडिविजुअल पॉलिसी**: 6 वयस्क + 6 बच्चे तक
- **फ्लोटर पॉलिसी**: 4 वयस्क + 6 बच्चे तक
- **टेन्योर विकल्प**: 1, 2, या 3 वर्ष
- **किस्त विकल्प**: मासिक, त्रैमासिक, अर्धवार्षिक

---

### 🛡️ ग्राहक भरोसा

- 1.6 करोड़+ ग्राहक
- 16,000+ नेटवर्क अस्पताल**
- 24x7 ग्राहक सेवा (10 भाषाओं में)
- तेज़ क्लेम प्रोसेसिंग और प्री-अथॉराइज़ेशन
- कैशलेस सुविधा
- आयकर धारा 80D के अंतर्गत टैक्स छूट

---

### 🔁 पॉलिसी निरंतरता और पोर्टेबिलिटी

- **लाइफटाइम रिन्युअल गारंटी**
- **क्लेम करने पर प्रीमियम में कोई बढ़ोतरी नहीं**
- **देश भर में कोई भूगोल आधारित को-पेमेंट नहीं**
- **हर साल 1 वर्ष की वेटिंग पीरियड की कटौती**
- **अन्य बीमा कंपनियों से आसान पोर्टेबिलिटी**

---

### 🚫 अपवर्जन (Exclusions)

#### स्टैंडर्ड अपवर्जन

- सिर्फ जांच या परीक्षण
- मोटापा, कॉस्मेटिक सर्जरी
- खतरनाक खेलों से चोट
- नशा या मादक पदार्थों से जुड़ी स्थितियाँ
- बांझपन/मातृत्व खर्च
- बिना प्रमाणिकता वाले इलाज

#### वेटिंग पीरियड

- प्रारंभिक 30 दिन
- 24 महीने कुछ विशेष बीमारियों के लिए
- 36 महीने पूर्व-विद्यमान रोगों के लिए

---

### ⚖️ कानूनी जानकारी

- बीमा अधिनियम की धारा 41 के अनुसार किसी भी तरह की प्रीमियम छूट प्रतिबंधित है
- सभी प्रीमियम / लाभ IRDAI की मंजूरी के अधीन हैं
- अधिक जानकारी के लिए पॉलिसी वर्डिंग देखें

---

### 🔗 और जानकारी के लिए

[www.hdfcergo.com](https://www.hdfcergo.com) पर जाएँ या कॉल करें **022-6242-6242**।

_UIN: my: Optima Secure_  
_IRDAI पंजीकरण संख्या: 146_
`
  },
  '2': {
    'en': `# Care Supreme Health Insurance – Structured Summary

---

### 🏥 Key Coverage Benefits

- **Pre-Hospitalisation**: Up to 60 days
- **Post-Hospitalisation**: Up to 180 days
- **AYUSH Treatment**: Up to 100% of Sum Insured (SI)
- **Domiciliary Hospitalisation**: Up to 100% of SI
- **Air Ambulance Cover**: Up to ₹5 lakhs/year
- **Ambulance Cover**: 100% of SI
- **No Sub-limits**: On modern or conventional treatments
- **Unlimited Automatic Recharge**: For related & unrelated illnesses
- **E-Consultation**: Unlimited with General Physician^

---

### 💰 Sum Insured Options

- ₹5L, ₹7L, ₹10L, ₹15L, ₹25L, ₹50L, ₹100L
- **Claim Shield**: Covers 68 non-payable items during hospitalization

---

### 🧑‍⚕️ Eligibility & Entry Age

- **Minimum Age**:
  - Adult: 18 years
  - Child: 90 days
- **Maximum Entry Age**:
  - Adult: Lifelong
  - Child: 24 years
- **Exit Age**:
  - Adult: Lifelong
  - Child: 25 years

---

### 👨‍👩‍👧‍👦 Cover Type

- **Individual**: Up to 6 persons
- **Floater**: Up to 2 adults + 2 children

**Relationships Covered**:
Self, spouse/live-in/same-sex partner, children, parents, in-laws, grandparents

---

### 📍 Zones for Pricing

- **Zone 1**: Delhi NCR, Mumbai Metro, Gujarat, Aligarh, Mathura, etc.
- **Zone 2**: Rest of India

---

### 📆 Policy Tenure & Premium

- 1, 2, or 3-year tenure options
- **Premium Payment Term**: Single
- **Premium Discounts**: Linked to healthy behaviour (see Wellness)

---

### ✅ Base Benefits Summary

| **Benefit** | **Coverage** |
|-------------|--------------|
| In-patient care | Up to SI |
| Day care treatment | All procedures covered |
| ICU cover | Up to SI |
| Road ambulance | Up to SI |
| Cumulative Bonus | 50% per year, max 100%, not reduced on claim |
| Pre/Post Hospitalization | 60/180 days up to SI |
| Organ donor cover | Up to SI |
| AYUSH | Up to SI |
| Domiciliary | Up to SI |

---

### 💡 Optional Benefits

#### **Cumulative Bonus Super**
- 100% per year up to 500% of SI (not reduced on claim)

#### **Instant Cover** 
- Coverage for diabetes, hypertension, asthma etc. after 30 days (not standard 36-month PED wait)

#### **PED Wait Period Modification**
- Choose 1-year or 2-year instead of standard 3-year

#### **Be-Fit Benefits**
- Discount vouchers covering:
  - 68 non-payable items
  - Digital & AI fitness coaching
  - Nutritionist access (for age >12 yrs)
  - Wellness coach

---

### 🏃‍♀️ Wellness Benefits

| **No. of Days (10K Steps/Day)** | **Renewal Discount** |
|----------------------------------|------------------------|
| ≥ 270 days | 30% |
| ≥ 240 days | 20% |
| ≥ 180 days | 15% |
| ≥ 120 days | 10% |
| < 120 days | 0% |

**Conditions**:
- Steps tracked via app/device mapped to Care Health portal
- Final 2 months’ steps *not* counted for current year discount (carry forward)
- Multi-year: average over tenure is considered
- Instalment mode: discount valid only after 6 months’ premium payment
- Option to receive discount value as vouchers instead

---

### 🩺 Annual Health Checkup

- Once a year for each insured member, irrespective of claim status

---

### 🏆 Awards & Recognition

- **Claims Service Leader of the Year** – India Insurance Summit 2024
- **Best Health Insurance Company in Rural Sector** – India Insurance Summit 2024
- **Excellence in Patient Service** – FICCI Healthcare Excellence Awards 2023
- **Smart Insurer & Amiable Insurer** – 10th Annual Insurance Awards 2023
- **Best Health Insurance Company of the Year** – India Insurance Summit 2023
- **Sales Champion of the Year** – ET Insurance Awards 2022
- **Best Health Insurance Product** – FICCI 2019 & Insurance Alerts 2021

---

### 🕑 Waiting Periods

| **Condition** | **Duration** |
|---------------|--------------|
| Initial Waiting Period | 30 days (not for accidents) |
| Named Ailments | 24 months |
| Pre-Existing Diseases (PED) | 36 months (modifiable via add-on) |

---

### 🏢 About Care Health Insurance

- Specialized retail health insurer
- Product range:
  - Retail & group health insurance
  - Top-up, maternity, critical illness
  - Travel and accident cover
- Strong tech-driven servicing & wellness ecosystem

**Registered Office**:  
5th Floor, 19 Chawla House, Nehru Place, New Delhi-110019  
**Corporate Office**:  
Vipul Tech Square, Tower C, 3rd Floor, Sector-43, Gurugram, Haryana

🌐 Website: [www.careinsurance.com](https://www.careinsurance.com)  
📞 Self-help: [Self Help Portal](https://www.careinsurance.com/self-help-portal.html)  
🟢 WhatsApp: Care Health Bot

---

### 📌 Notes & Disclaimers

- *Get up to 7X coverage of Base SI not affected by claims
- ^E-consultations with general physician only
- ##Certain add-ons (PED Mod, Instant Cover) applicable post initial 30-day wait
- *For adults aged 18+ only in Wellness discount
- Insurance is subject to terms and solicitation
- CIN: U66000DL2007PLC161503 | IRDAI Reg. No.: 148 | UIN: CHIHLIP23128V012223
`,
    'hi': `# केयर सुप्रीम हेल्थ इंश्योरेंस – संरचित सारांश (हिंदी)

---

### 🏥 मुख्य कवरेज लाभ

- **प्रि-हॉस्पिटलाइजेशन**: 60 दिन तक
- **पोस्ट-हॉस्पिटलाइजेशन**: 180 दिन तक
- **AYUSH उपचार**: सम इंश्योर्ड (SI) का 100% तक
- **डोमिसिलरी हॉस्पिटलाइजेशन**: SI का 100% तक
- **एयर एम्बुलेंस कवर**: ₹5 लाख/वर्ष तक
- **एम्बुलेंस कवर**: SI के 100% तक
- **कोई सब-लिमिट नहीं**: मॉडर्न या पारंपरिक उपचारों पर
- **अनलिमिटेड रीचार्ज**: संबंधित व असंबंधित बीमारियों के लिए
- **ई-परामर्श**: सामान्य चिकित्सकों से असीमित^

---

### 💰 सम इंश्योर्ड विकल्प

- ₹5 लाख, ₹7 लाख, ₹10 लाख, ₹15 लाख, ₹25 लाख, ₹50 लाख, ₹1 करोड़
- **क्लेम शील्ड**: हॉस्पिटलाइजेशन के दौरान 68 नॉन-पेएबल आइटम्स को कवर करता है

---

### 🧑‍⚕️ पात्रता और प्रवेश आयु

- **न्यूनतम आयु**:
  - वयस्क: 18 वर्ष
  - बच्चा: 90 दिन
- **अधिकतम प्रवेश आयु**:
  - वयस्क: आजीवन
  - बच्चा: 24 वर्ष
- **एग्ज़िट आयु**:
  - वयस्क: आजीवन
  - बच्चा: 25 वर्ष

---

### 👨‍👩‍👧‍👦 कवरेज प्रकार

- **व्यक्तिगत पॉलिसी**: अधिकतम 6 सदस्य
- **फ्लोटर पॉलिसी**: अधिकतम 2 वयस्क + 2 बच्चे

**कवर किए जाने वाले संबंध**:
स्वयं, जीवनसाथी/लिव-इन/समलैंगिक साथी, बच्चे, माता-पिता, ससुराल पक्ष, दादा-दादी, नाना-नानी

---

### 📍 ज़ोन अनुसार मूल्य निर्धारण

- **ज़ोन 1**: दिल्ली NCR, मुंबई मेट्रो, गुजरात, अलीगढ़, मथुरा आदि
- **ज़ोन 2**: भारत के शेष भाग

---

### 📆 पॉलिसी अवधि और प्रीमियम

- अवधि: 1 वर्ष, 2 वर्ष या 3 वर्ष
- **प्रीमियम भुगतान मोड**: एकमुश्त
- **प्रीमियम छूट**: स्वास्थ्यगत व्यवहार के अनुसार (नीचे देखें)

---

### ✅ आधारभूत लाभ सारांश

| **लाभ** | **कवरेज** |
|----------|-----------|
| इन-पेशेंट उपचार | SI तक |
| डे-केयर उपचार | सभी प्रक्रियाएं |
| ICU कवर | SI तक |
| रोड एम्बुलेंस | SI तक |
| संचयी बोनस | हर साल 50%, अधिकतम 100%, क्लेम होने पर भी नहीं घटेगा |
| प्रि/पोस्ट हॉस्पिटलाइजेशन | 60/180 दिन, SI तक |
| अंगदाता खर्च | SI तक |
| AYUSH उपचार | SI तक |
| डोमिसिलरी हॉस्पिटलाइजेशन | SI तक |

---

### 💡 वैकल्पिक लाभ

#### **संचयी बोनस सुपर**
- हर वर्ष SI का 100%, अधिकतम 500% तक (क्लेम पर भी नहीं घटेगा)

#### **इंस्टैंट कवर** 
- डायबिटीज, हाई बीपी, अस्थमा आदि के लिए केवल 30 दिन के वेट के बाद कवर शुरू

#### **PED वेट पीरियड संशोधन**
- प्री-एक्सिस्टिंग डिजीज के वेट पीरियड को 1 या 2 वर्ष चुन सकते हैं

#### **Be-Fit लाभ**
- वाउचर और सेवाएं:
  - 68 नॉन-पेएबल आइटम्स कवर
  - डिजिटल और एआई फिटनेस कोचिंग
  - न्यूट्रिशनिस्ट एक्सेस (12 वर्ष से ऊपर)
  - वेलनेस कोचिंग

---

### 🏃‍♀️ वेलनेस लाभ (स्टेप आधारित छूट)

| **10,000 कदम/दिन जितने दिन** | **रिन्यूअल डिस्काउंट** |
|-------------------------------|--------------------------|
| ≥ 270 दिन | 30% |
| ≥ 240 दिन | 20% |
| ≥ 180 दिन | 15% |
| ≥ 120 दिन | 10% |
| < 120 दिन | 0% |

**नियम**:
- स्टेप्स Care Health पोर्टल से ट्रैक होने चाहिए
- आखिरी 2 महीनों के स्टेप्स अगले साल के डिस्काउंट में जोड़े जाएंगे
- मल्टी-ईयर पॉलिसी में औसत दिन गिने जाएंगे
- इंस्टॉलमेंट मोड में 6 महीने का प्रीमियम भुगतान ज़रूरी
- वाउचर भी विकल्प के रूप में मिल सकते हैं

---

### 🩺 वार्षिक स्वास्थ्य जांच

- हर बीमा सदस्य के लिए हर वर्ष एक बार

---

### 🏆 पुरस्कार एवं मान्यता

- **Claims Service Leader of the Year** – India Insurance Summit 2024
- **Best Health Insurance Company (Rural)** – India Insurance Summit 2024
- **Excellence in Patient Service** – FICCI Awards 2023
- **Smart & Amiable Insurer** – 10th Annual Insurance Awards 2023
- **Best Health Insurance Company of the Year** – Summit 2023
- **Sales Champion** – ET Insurance Awards 2022
- **Best Health Insurance Product** – FICCI 2019 & Insurance Alerts 2021

---

### 🕑 वेटिंग पीरियड

| **शर्त** | **समयावधि** |
|----------|--------------|
| प्रारंभिक वेटिंग पीरियड | 30 दिन (दुर्घटना पर लागू नहीं) |
| नामित बीमारियाँ | 24 महीने |
| पूर्व-विद्यमान रोग (PED) | 36 महीने (ऐड-ऑन से घटाया जा सकता है) |

---

### 🏢 कंपनी का परिचय

**Care Health Insurance Limited**  
- स्वास्थ्य बीमा में विशेषज्ञ
- उत्पाद श्रेणियाँ:
  - रिटेल और ग्रुप हेल्थ
  - टॉप-अप, मातृत्व, क्रिटिकल इलनेस
  - यात्रा और व्यक्तिगत दुर्घटना कवर
- ग्राहक-केंद्रित और तकनीक आधारित सेवाएं

**पंजीकृत कार्यालय**:  
5वीं मंज़िल, 19 चावला हाउस, नेहरू प्लेस, नई दिल्ली – 110019  
**कॉर्पोरेट कार्यालय**:  
विपुल टेक स्क्वायर, टावर C, सेक्टर-43, गुरुग्राम, हरियाणा

🌐 वेबसाइट: [www.careinsurance.com](https://www.careinsurance.com)  
📞 सेल्फ हेल्प: [Self Help Portal](https://www.careinsurance.com/self-help-portal.html)  
🟢 WhatsApp: Care Health Bot

---

### 📌 नोट्स और अस्वीकरण

- *क्लेम की स्थिति से अप्रभावित 7X तक कवरेज संभव
- ^ई-कंसल्टेशन केवल जनरल फिजिशियन से
- ##कुछ ऐड-ऑन (PED, इंस्टेंट कवर) 30 दिन की वेटिंग के बाद ही लागू होंगे
- *Be-Fit छूट केवल 18+ आयु के वयस्कों के लिए
- बीमा नियमों व शर्तों के अधीन है

_CIN: U66000DL2007PLC161503_  
_IRDAI पंजीकरण संख्या: 148_  
_UIN: CHIHLIP23128V012223_
`
  },
  '3':{
    'en': `# ICICI Lombard – Elevate Health Insurance Policy (Structured Summary)

---

### 🚀 Introduction

- **Elevate** is a next-gen health insurance plan powered by AI, offering personalized coverage recommendations and infinite benefits.
- Designed to be adaptive, flexible, and customer-centric.
- AI engine interprets user inputs to tailor the ideal plan.

---

### 🛡️ What Makes Elevate Revolutionary?

| Feature | Description |
|--------|-------------|
| **Infinite Sum Insured** | Never run out of cover |
| **Infinite Claim Amount** | One-time infinite claim for selected condition with **Infinite Care add-on** |
| **Infinite Cumulative Bonus** | 100% bonus every year indefinitely with **Power Booster add-on** |
| **Infinite Assurance** | PED covered from Day 31 with **Jumpstart add-on** |
| **Infinite Reset** | Unlimited resets of Sum Insured with Reset Benefit |

---

### 🏥 Inbuilt Basic Covers

- **In-patient Treatment**: Up to annual SI; private AC room covered
- **Organ Donor Expenses**: Up to annual SI
- **AYUSH Treatment**: Cashless or reimbursement up to SI
- **Day Care Procedures**: Up to annual SI
- **Pre & Post Hospitalisation**: 90 days before, 180 days after; up to SI
- **Domiciliary Hospitalisation**: ≥3 days, up to SI
- **Domestic Road Ambulance**: Up to SI

---

### 🔧 Advanced Built-in Covers

- **Surrogacy & Oocyte**: ₹5 lakh max
- **Bariatric Surgery**: Covered up to SI
- **Reset Benefit**: 100% SI refill, unlimited times
- **Guaranteed Cumulative Bonus**: 20% yearly, max 100%
- **Modern Treatments**: Covered up to SI
- **Wellness Program**: Up to 30% renewal premium discount
- **Discounts & Health Assistance**: Via IL TakeCare app

---

### ✨ Add-Ons for Personalization

| Add-on | Benefit |
|--------|---------|
| **Infinite Care***¹ | One-time infinite claim |
| **Power Booster***² | 100% cumulative bonus each year |
| **Jumpstart***³ | 30-day PED cover for select conditions |
| **Claim Protector**⁸ | Covers non-payables like gloves, masks |
| **Inflation Protector** | SI grows annually as per inflation |
| **Air Ambulance Cover**⁷ | Domestic air ambulance up to SI |
| **Dependent Accommodation** | ₹1,000/day for 10 days |
| **Room Modifier** | Upgrade/downgrade room type |
| **Compassionate Visit** | ₹20,000 travel support if hospital stay >5 days |
| **Maternity Benefit** | 10% of SI (max ₹1L); 2-yr wait |
| **Newborn Baby Cover** | Up to 90 days; 2x maternity cover |
| **Vaccination for Newborn** | 1% of SI; max ₹10,000 |
| **Nursing at Home** | ₹2,000/day, max 10 days |
| **Durable Equipment** | Rental/purchase up to ₹5L |
| **Convalescence Benefit** | ₹20,000 if hospitalised ≥10 days |
| **Health Check-up** | 0.5% of SI, max ₹5,000 |
| **BeFit**^^ | OPD, diagnostics, physiotherapy on cashless basis |
| **Teleconsultation**⁵ | Unlimited virtual consultations |
| **Reduce Maternity Wait**⁹ | Reduce wait from 2 years to 1 year |
| **Voluntary Co-pay** | Choose 10%-50% co-pay |
| **Network Advantage** | 10% premium discount (20% co-pay if non-network) |
| **Personal Accident** | Up to ₹50L |
| **Critical Illness** | 20 diseases, max ₹50L (adults <50 yrs) |

---

### 💸 Discounts

| Type | Discount |
|------|----------|
| **Credit Score Discount** | Up to 15% |
| **Wellness Discount** | Up to 30% (next year) |
| **Early Renewal** | 2.5% if renewed 30 days in advance |
| **Long Tenure** | 10% (2 yrs), 15% (3 yrs) |

---

### 🕑 Waiting Periods

| Type | Duration |
|------|----------|
| **Initial Waiting Period** | 30 days |
| **PED** | 36 months |
| **Specific Diseases** | 24 months |
| **Critical Illness** | 90 days |
| **Maternity** | 24 months (can reduce to 12) |
| **Bariatric Surgery** | 24 months |
| **Diabetes, HTN, Cardiac (unless PED)** | 90 days |

---

### 🗺️ Zone Distribution

- **No Zone-based Co-payment**

| Zone | Areas |
|------|-------|
| **Zone A** | Mumbai, Delhi, NCR, Surat, Ahmedabad |
| **Zone B** | Pune, Kolkata, Bengaluru, Chennai, Hyderabad |
| **Zone C** | Goa, MP, AP, Kerala, Odisha, Assam, etc. |
| **Zone D** | Bihar, Jharkhand, Nagaland, Sikkim, Tripura, rural Maharashtra, UP, WB etc. |

---

### 📱 IL TakeCare App Features

- FaceScan⁴
- Hello Doctor⁵
- Chat with Expert⁶
- Health Quotient Assessment
- Exercise Tracker
- Health Webinars
- OPD Claims
- Mental Health Support
- Android & iOS supported

---

### 📌 Legal & Notes

- **UIN**: ICIHIPE23033V022223
- **IRDAI Reg. No.**: 115
- **Company**: ICICI Lombard General Insurance Co. Ltd.
- **Head Office**: Prabhadevi, Mumbai
- **CIN**: U72900MH2000PLC128308
- **Customer Care**: 1800 2666 | [www.icicilombard.com](https://www.icicilombard.com)
- **Disclaimers**:
  - Add-ons available only during early policy years
  - Reset benefit doesn’t trigger on first claim
  - Wellness services for information only, not a substitute for medical advice
  - Room downgrade applies only for ₹5L & ₹7.5L plans
`,
    'hi': `# ICICI Lombard – Elevate हेल्थ इंश्योरेंस पॉलिसी (संरचित सारांश - हिंदी)

---

### 🚀 परिचय

- **Elevate** एक AI-संचालित स्वास्थ्य बीमा योजना है जो आपके इनपुट के अनुसार व्यक्तिगत कवरेज की सिफारिश करती है।
- यह बीमा पॉलिसी अनुकूल, लचीली और ग्राहक-केंद्रित है।
- AI इंजन आपके स्वास्थ्य और वित्तीय जरूरतों को समझकर पॉलिसी कस्टमाइज़ करता है।

---

### 🛡️ Elevate को क्रांतिकारी बनाने वाले फ़ीचर्स

| सुविधा | विवरण |
|--------|--------|
| **अनंत सम इंश्योर्ड** | कभी भी कवरेज खत्म नहीं होगी |
| **अनंत क्लेम अमाउंट** | चयनित बीमारी के लिए एक बार अनंत क्लेम (Infinite Care ऐड-ऑन के साथ) |
| **अनंत संचयी बोनस** | Power Booster ऐड-ऑन के साथ हर साल 100% बोनस, अनंत वर्षों तक |
| **अनंत एश्योरेंस** | Jumpstart ऐड-ऑन से प्री-एक्सिस्टिंग डिज़ीज़ 31वें दिन से कवर |
| **अनंत रीसेट** | कवरेज हर क्लेम के बाद असीमित बार रीसेट (Reset Benefit) |

---

### 🏥 इनबिल्ट बेसिक कवर

- **इन-पेशेंट ट्रीटमेंट**: सम इंश्योर्ड तक; प्राइवेट AC रूम कवर्ड
- **ऑर्गन डोनर खर्च**: सम इंश्योर्ड तक
- **AYUSH इलाज**: कैशलेस/रीइम्बर्समेंट मोड में SI तक
- **डे-केयर प्रक्रिया**: SI तक कवर
- **प्रि/पोस्ट हॉस्पिटलाइजेशन**: 90 दिन पहले और 180 दिन बाद तक SI तक
- **डोमिसिलरी हॉस्पिटलाइजेशन**: कम से कम 3 दिन की सलाह पर SI तक
- **रोड एम्बुलेंस**: SI तक

---

### 🔧 एडवांस इनबिल्ट कवर

- **सरोगेसी और ओओसाइट ट्रीटमेंट**: अधिकतम ₹5 लाख
- **बेरियाट्रिक सर्जरी**: SI तक कवर
- **Reset Benefit**: असीमित बार 100% SI रीसेट
- **गैरेन्टीड बोनस**: हर साल 20%, अधिकतम 100%
- **मॉडर्न ट्रीटमेंट्स**: SI तक कवर
- **Wellness प्रोग्राम**: 30% तक प्रीमियम छूट (अगले वर्ष)
- **डिस्काउंट और हेल्थ असिस्टेंस**: IL TakeCare ऐप के माध्यम से

---

### ✨ ऐड-ऑन विकल्प (व्यक्तिगत आवश्यकता अनुसार)

| ऐड-ऑन | लाभ |
|--------|------|
| **Infinite Care** | एक बार अनंत क्लेम अमाउंट |
| **Power Booster** | हर साल 100% संचयी बोनस, अनंत समय तक |
| **Jumpstart** | PED (जैसे डायबिटीज, हाई BP) को 30 दिन में कवर करें |
| **Claim Protector** | नॉन-पेएबल आइटम (जैसे ग्लव्स, मास्क) भी कवर |
| **Inflation Protector** | SI हर साल महंगाई के अनुसार बढ़ेगा |
| **Air Ambulance Cover** | घरेलू एयर एम्बुलेंस SI तक कवर |
| **Dependent Accommodation** | ₹1,000/दिन (10 दिन तक) |
| **Room Modifier** | रूम श्रेणी बदलने की सुविधा |
| **Compassionate Visit** | हॉस्पिटल में 5 दिन से ज्यादा रहने पर ₹20,000 यात्रा खर्च |
| **Maternity Benefit** | SI का 10% (अधिकतम ₹1L), 2 साल की वेटिंग |
| **Newborn Cover** | जन्म से 90 दिन तक, मातृत्व राशि के 2x तक |
| **Vaccinations (Newborn)** | SI का 1% तक, अधिकतम ₹10,000 |
| **Nursing at Home** | ₹2,000/दिन (अधिकतम 10 दिन) |
| **Durable Equipment** | ₹5 लाख तक उपकरण किराए/खरीद पर खर्च |
| **Convalescence Benefit** | लगातार 10 दिन हॉस्पिटल में रहने पर ₹20,000 |
| **Health Check-up** | SI का 0.5% तक, अधिकतम ₹5,000 |
| **BeFit** | ऐप के ज़रिए OPD, फ़िजियोथेरेपी, जांच आदि कैशलेस |
| **Teleconsultation** | असीमित डॉक्टर से ऑनलाइन सलाह |
| **मातृत्व वेटिंग अवधि कम करें** | 2 साल से घटाकर 1 साल |
| **Voluntary Co-pay** | 10% से 50% तक को-पे विकल्प |
| **Network Advantage** | 10% प्रीमियम छूट (नॉन नेटवर्क में 20% को-पे) |
| **पर्सनल एक्सीडेंट** | अधिकतम ₹50 लाख तक |
| **क्रिटिकल इलनेस** | 20 गंभीर बीमारियां; अधिकतम ₹50 लाख तक |

---

### 💸 छूट (Discounts)

| प्रकार | छूट |
|--------|------|
| **क्रेडिट स्कोर आधारित** | अधिकतम 15% |
| **Wellness Discount** | अगले वर्ष की प्रीमियम पर 30% तक |
| **अग्रिम नवीकरण छूट** | 30 दिन पहले नवीकरण पर 2.5% छूट |
| **लंबी अवधि छूट** | 2 वर्ष पर 10%, 3 वर्ष पर 15% छूट |

---

### 🕑 प्रतीक्षा अवधि

| प्रकार | समय |
|--------|-----|
| **प्रारंभिक प्रतीक्षा अवधि** | 30 दिन |
| **PED (पूर्व-विद्यमान रोग)** | 36 महीने |
| **विशिष्ट बीमारियां** | 24 महीने |
| **क्रिटिकल इलनेस** | 90 दिन |
| **मातृत्व लाभ** | 24 महीने (कम करके 12 कर सकते हैं) |
| **बेरियाट्रिक सर्जरी** | 24 महीने |
| **डायबिटीज, हाइपरटेंशन, कार्डियक (यदि PED नहीं)** | 90 दिन |

---

### 🗺️ ज़ोन डिवीजन

- **कोई ज़ोन आधारित को-पे नहीं**

| ज़ोन | क्षेत्र |
|------|---------|
| **Zone A** | मुंबई, दिल्ली, NCR, सूरत, अहमदाबाद |
| **Zone B** | पुणे, कोलकाता, बेंगलुरु, चेन्नई, हैदराबाद |
| **Zone C** | गोवा, MP, AP, केरल, ओडिशा, असम आदि |
| **Zone D** | बिहार, झारखंड, नागालैंड, सिक्किम, यूपी (NCR छोड़कर), WB (कोलकाता छोड़कर) आदि |

---

### 📱 IL TakeCare मोबाइल ऐप फ़ीचर्स

- **FaceScan**⁴
- **Hello Doctor**⁵
- **Chat with Expert**⁶
- **Health Quotient स्कोर**
- **Exercise Tracker**
- **Health Webinars**
- **OPD क्लेम फाइलिंग**
- **मानसिक स्वास्थ्य सपोर्ट**
- Android और iOS दोनों पर उपलब्ध

---

### 📌 कानूनी विवरण व डिस्क्लेमर

- **UIN**: ICIHIPE23033V022223  
- **IRDAI पंजीकरण संख्या**: 115  
- **कंपनी**: ICICI Lombard General Insurance Co. Ltd.  
- **मुख्यालय**: प्रभादेवी, मुंबई  
- **CIN**: U72900MH2000PLC128308  
- **कस्टमर केयर**: 1800 2666  
- 🌐 [www.icicilombard.com](https://www.icicilombard.com)

**डिस्क्लेमर**:
- कुछ ऐड-ऑन सिर्फ पहले 2 वर्षों में ही लिए जा सकते हैं
- Reset Benefit पहले क्लेम पर लागू नहीं होता
- BeFit, Wellness आदि केवल सूचना उद्देश्य हेतु हैं; मेडिकल सलाह का विकल्प नहीं
`
  }
};