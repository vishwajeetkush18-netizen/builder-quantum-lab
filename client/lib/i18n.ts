type Lang = "en" | "hi" | "rg";

const dict: Record<Lang, Record<string, string>> = {
  en: {
    volunteer: "Volunteer",
    citizen: "Citizen",
    asha: "ASHA Worker",
    getOtp: "Get OTP",
    enterPhone: "Enter Phone Number",
    verify: "Verify",
    notifications: "Notifications",
    healthReport: "Health Report Form",
    name: "Name",
    age: "Age",
    symptoms: "Symptoms",
    village: "Village",
    uploadPhoto: "Upload Photo (Optional)",
    submit: "Submit",
    waterTest: "Water Test",
    ph: "pH",
    turbidity: "Turbidity",
    contamination: "Contamination",
    yes: "Yes",
    no: "No",
    location: "Location",
    awareness: "Awareness",
    syncing: "Syncing data...",
  },
  hi: {
    volunteer: "स्वयंसेवक",
    citizen: "नागरिक",
    asha: "आशा कार्यकर्ता",
    getOtp: "ओटीपी भेजें",
    enterPhone: "फोन नंबर दर्ज करें",
    verify: "सत्यापित करें",
    notifications: "सूचनाएँ",
    healthReport: "स्वास्थ्य रिपोर्ट फ़ॉर्म",
    name: "नाम",
    age: "आयु",
    symptoms: "लक्षण",
    village: "गाँव",
    uploadPhoto: "फोटो अपलोड (वैकल्पिक)",
    submit: "जमा करें",
    waterTest: "पानी जाँच",
    ph: "पीएच",
    turbidity: "गंदलापन",
    contamination: "दूषित",
    yes: "हाँ",
    no: "नहीं",
    location: "स्थान",
    awareness: "जागरूकता",
    syncing: "डेटा सिंक हो रहा है...",
  },
  rg: {
    volunteer: "Volunteer",
    citizen: "Citizen",
    asha: "ASHA Worker",
    getOtp: "Get OTP",
    enterPhone: "Enter Phone Number",
    verify: "Verify",
    notifications: "Notifications",
    healthReport: "Health Report Form",
    name: "Name",
    age: "Age",
    symptoms: "Symptoms",
    village: "Village",
    uploadPhoto: "Upload Photo (Optional)",
    submit: "Submit",
    waterTest: "Water Test",
    ph: "pH",
    turbidity: "Turbidity",
    contamination: "Contamination",
    yes: "Yes",
    no: "No",
    location: "Location",
    awareness: "Awareness",
    syncing: "Syncing data...",
  },
};

export function getLang(): Lang {
  return (localStorage.getItem("lang") as Lang) || "en";
}
export function setLang(l: Lang) {
  localStorage.setItem("lang", l);
}
export function t(key: string) {
  const l = getLang();
  return dict[l][key] ?? dict.en[key] ?? key;
}
