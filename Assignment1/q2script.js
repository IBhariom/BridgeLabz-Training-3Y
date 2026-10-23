let name = "Hariom"; 
let age = 21; 
let isActive = true; 
let hobbies = ["Coding", "Reading"]; 
let user = { city: "Mathura", country: "India" }; 
let address = null; let phoneNumber; 
 let data = [ { Label: "Name", Value: name, Type: typeof name },
     { Label: "Age", Value: age, Type: typeof age }, 
     { Label: "Active", Value: isActive, Type: typeof isActive },
      { Label: "Hobbies", Value: hobbies.join(", "), 
        Type: Array.isArray(hobbies) ? "array" : typeof hobbies }, 
        { Label: "User", Value: JSON.stringify(user), Type: typeof user }, 
        { Label: "Address", Value: address, Type: address === null ? "null" : typeof address }, 
        { Label: "Phone Number", Value: phoneNumber, Type: typeof phoneNumber } ]; 
        console.table(data);