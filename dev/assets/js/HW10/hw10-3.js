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
    ],

    findContact(name) {
        const contact = this.contacts.find(c => c.name.toLowerCase() === name.toLowerCase());
        if (contact) {
            console.log(contact);
        }
    },

    addContact() {
        const newContact = {
            name: "Sasha",
            phone: "+380990765935",
            email: "xoiletteitappe-2754@example.com"
        };
        this.contacts.push(newContact);
        console.log(newContact);
    }
};

const nameToSearch = prompt("Введіть ім'я контакту:");
contactBook.findContact(nameToSearch);

contactBook.addContact();





