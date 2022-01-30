cardNumber=prompt("Введите номер вашей карточки");
card=cardNumber.replace(cardNumber.slice(0, -4), "************")
alert("Введите номер вашей карточки"+card);
