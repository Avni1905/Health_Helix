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
    image: "/assets/images/dr-sharma.svg",
    name: "Hardik Sharma",
  },
  {
    image: "/assets/images/dr-sharma.svg",
    name: "Bhavna Sharma",
  },
  {
    image: "/assets/images/dr-sharma.svg",
    name: "Deepak Sharma",
  },
  {
    image: "/assets/images/dr-sharma.svg",
    name: "Harsh Sharma",
  },
  {
    image: "/assets/images/dr-sharma.svg",
    name: "Karan Sharma",
  },
  {
    image: "/assets/images/dr-sharma.svg",
    name: "Rashi Sharma",
  },
  {
    image: "/assets/images/dr-sharma.svg",
    name: "Anjali Sharma",
  },
  {
    image: "/assets/images/dr-sharma.svg",
    name: "Daya Sharma",
  },
  {
    image: "/assets/images/dr-sharma.svg",
    name: "Jetha Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};