// 4.3. Портрет користувача

const yearOfBirth = Number(prompt("Введіть свій рік народження:"));
const cityOfLiving = prompt("Введіть в якому місті ви живете:");
const favouriteSport = prompt("Введіть ваш улюблений вид спорту:");

if (typeof yearOfBirth === "number" && yearOfBirth != 0) {
    alert(2025-yearOfBirth);
} else if (!yearOfBirth) {
    alert(`Шкода, що Ви не захотіли ввести свій рік народження`);
}

if (cityOfLiving === "Київ" || cityOfLiving === "Вашингтон" || cityOfLiving === "Лондон") {
    alert(`Ти живеш у столиці ${cityOfLiving}`);
} else if (!cityOfLiving) {
    alert(`Шкода, що Ви не захотіли ввести своє місто`);
} else {
    alert(`Ти живеш у місті ${cityOfLiving}`);
}

if (favouriteSport === "Бодібілдінг") {
    alert("Круто! Хочеш стати Ронні Коулмен?")
} else if (favouriteSport === "Бокс") {
    alert("Круто! Хочеш стати Віталій Кличко?")
} else if (favouriteSport === "Футбол") {
    alert("Круто! Хочеш стати Кріштіану Роналду?")
} else if (!favouriteSport) {
    alert(`Шкода, що Ви не захотіли ввести улюблений вид спорту`)
} else {
    alert ("Непоганий вид спорту!")
}