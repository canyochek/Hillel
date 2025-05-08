let company = {
    sales: [{name: 'John', salary: 1000}, {name:'Alice', salary: 600}],
development: {
    web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
    internals: [{name: 'Jack', salary: 1300}]
},
};

const totalsalarySales = company.sales.reduce((sum, employee) => {
    return sum + employee.salary;
}, 0);

console.log(totalsalarySales)

const totalsalaryDevelopmentWeb = company.development.web.reduce((sum, web) => {
    return sum + web.salary;
}, 0);

console.log(totalsalaryDevelopmentWeb)

const totalsalaryDevelopmentInternals = company.development.internals.reduce((sum, internals) => {
    return sum + internals.salary;
}, 0);

console.log(totalsalaryDevelopmentInternals)

console.log(`Вся сума = ${totalsalarySales + totalsalaryDevelopmentWeb + totalsalaryDevelopmentInternals}`)