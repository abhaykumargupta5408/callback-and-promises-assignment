function ageInDays(person) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365; // Assuming 365 days in a year
    
    function logAgeInDays() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }
    
    return logAgeInDays;
  }
  
  const personInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  const logAge = ageInDays(personInfo);
  logAge(); // Output: The person's full name is John Doe and their age in days is 10950.
  