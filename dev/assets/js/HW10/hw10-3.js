const contactBook = {
    contacts: [
        {
            name: "Олег",
            phone: "+380501234567",
            email: "oleg@example.com"
        },
        {
            name: "Ірина",
            phone: "+380671112233",
            email: "iryna@example.com"
        },
        {
            name: "Олександр",
            phone: "+380918208958",
            email: "alek@example.com"
        },
        {
            name: "Петро",
            phone: "+380915868022",
            email: "petr@example.com"
        },
    ]
} 
const search = prompt("Enter name to search:");
for (const contact of contactBook.contacts) {
    const values = Object.values(contact); 
    if (values.includes(search)) {
        console.log(contact); 
    }
}

const newContact = contactBook.contacts.push({ name: "Sasha", phone: "+380990765935", email: "xoiletteitappe-2754@example.com" })
console.log(Object.values(contactBook.contacts))
