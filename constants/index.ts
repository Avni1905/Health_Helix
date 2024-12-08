export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-tuli.svg",
    name: "Avantika Tuli",
  },
  {
    image: "/assets/images/dr-puneet.svg",
    name: "Puneet Batra",
  },
  {
    image: "/assets/images/dr-abhita.svg",
    name: "Abhita Malhotra",
  },
  {
    image: "/assets/images/dr-dax.svg",
    name: "Dax Abraham",
  },
  {
    image: "/assets/images/dr-carrolene.svg",
    name: "Carrolene Langpoklakpam",
  },
  {
    image: "/assets/images/dr-anand.svg",
    name: "Kumar Rakshak Anand",
  },
  {
    image: "/assets/images/dr-sana.svg",
    name: "Sana Bint Aziz",
  },
  {
    image: "/assets/images/dr-ashish.svg",
    name: "Ashish Kumar Singh",
  },
  {
    image: "/assets/images/dr-anu.svg",
    name: "Anu Singla ",
  },
  {
    image: "/assets/images/dr-garima.svg",
    name: "Garima",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};