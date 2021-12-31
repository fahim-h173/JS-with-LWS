let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';


let json = JSON.parse(text);
console.log(json.employees[0].firstName);

// convert object to JSON

let obj = {
    firstName:"fahim",
    lastName:"mia"
};
console.log(JSON.stringify(obj));