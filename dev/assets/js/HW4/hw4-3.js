// 4.3. Портрет користувача

const yearOfBirth = Number(prompt("Введіть свій рік народження:"));
const cityOfLiving = prompt("Введіть в якому місті ви живете:");
const favouriteSport = prompt("Введіть ваш улюблений вид спорту:");

if (typeof yearOfBirth === "number" && yearOfBirth != 0) {
    alert(2025-yearOfBirth);
} else if (!yearOfBirth) {
    alert(`Шкода, що Ви не захотіли ввести свій рік народження`);
}

switch (true) {
    case cityOfLiving === "Київ":
        alert("Ти живеш у столиці України");
        break;
    case cityOfLiving === "Вашингтон":
        alert("Ти живеш у столиці Америки");
        break;
    case cityOfLiving === "Лондон":
        alert("Ти живеш у столиці Британії");
        break;
    case !cityOfLiving:
        alert(`Шкода, що Ви не захотіли ввести своє місто`);
        break;
    case typeof cityOfLiving === "string":
        alert(`Ти живеш у місті ${cityOfLiving}`);
        break;
}

switch (true) {
    case favouriteSport === "Бодібілдінг":
        alert("Круто! Хочеш стати Ронні Коулмен?");
        break;
    case favouriteSport === "Футбол":
        alert("Круто! Хочеш стати Кріштіану Роналду?");
        break;
    case favouriteSport === "Бокс":
        alert("Круто! Хочеш стати Віталій Кличко?");
        break;
    case !favouriteSport:
        alert(`Шкода, що Ви не захотіли ввести улюблений вид спорту`);
        break;
    case typeof favouriteSport === "string":
        alert ("Непоганий вид спорту!")
        break;
}