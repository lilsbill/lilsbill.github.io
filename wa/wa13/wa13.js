const workers = 
{
    "employees":
    [
        {
            "firstName": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true,
        },
        {
            "firstName": "Mike",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true,
        },
        {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false,
        },
    ]
}

console.log("Question 1");
console.log(workers);

const company =
{
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": workers,
}

console.log("Question 2");
console.log(company);
//company.employees.employees.push({});
company.employees.employees.push(
    {
        "firstName": "Anna",
        "department": "Tech",
        "designation": "Executive",
        "salary": 25600,
        "raiseEligible": false,
    }
);

console.log("Question 2");
console.log(company.employees);
console.log(company.employees.employees[3]);

let total = 0;

for (x in company.employees.employees)
{
    total += company.employees.employees[x].salary;
}

console.log("Question 4");
console.log(total);
let salary_old = 0;
let difference = 0;

function raise()
{
    for (x in company.employees.employees)
    {
        if (company.employees.employees[x].raiseEligible == true)
        {
            company.employees.employees[x].salary = company.employees.employees[x].salary * 1.10;
            company.employees.employees[x].raiseEligible = false;
        }
    }
}

raise();
console.log("Question 5");
console.log(company.employees.employees);

for (x in company.employees.employees)
{
    if (company.employees.employees[x].firstName == "Anna" || company.employees.employees[x].firstName == "Sam")
    {
        company.employees.employees[x].wfh = true;
    }
    else
    {
        company.employees.employees[x].wfh = false;
    }
}

console.log("Question 6");
console.log(company.employees.employees);
