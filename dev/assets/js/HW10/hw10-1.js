const users = {
    name: "Oleksandr",
    age: 19,
    city: "Kyiv",
    showUserInfo() {
        Object.entries(this).forEach(([key, value]) => {
            if (typeof value !== "function") {
                console.log(`${key}: ${value}`);
            }
        });
    }
};

users.showUserInfo(); 