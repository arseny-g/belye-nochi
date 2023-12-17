var count = 0;
function addOffer(tour, name, phone, email, comment) {
    let newOffer = document.createElement('div');
    count += 1;
    newOffer.innerHTML = `<h3>Заказ №${count}</h3>
        <p>Экскурсия: ${tour}
            <br>Имя заказчика: ${name}
            <br>Телефон заказчика: ${phone}
            <br>E-mail заказчика: ${email}
            <br>Комментарий к экскурсии: ${comment}</p>
    <p><button onclick="this.parentElement.parentElement.remove()">Удалить заказ</button></p>`;
    offers.before(newOffer);
}

function handleFormSubmit(event) {
    event.preventDefault();

    const tour = event.target['tour'].value;
    const name = event.target['name'].value;
    const phone = event.target['phone'].value;
    const email = event.target['email'].value;
    const comment = event.target['comment'].value;

    addOffer(tour, name, phone, email, comment);
}

const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);