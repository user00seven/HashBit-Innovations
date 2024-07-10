// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.
//
const statesOfIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

// ASCII Code of lowerCase vowels
const vowelsCode = [97, 101, 105, 111, 117];

newStates = statesOfIndia.filter((element) => {
  charCode = element.toLowerCase().charCodeAt(0);
  if (!vowelsCode.includes(charCode)) return console.log(element);
});

// console.log(newStates)


