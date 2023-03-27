function control(){
    let mail = document.getElementById('emailInput').value;

    let validMail = ["mario.rossi@gmail.com", "harry.potter@gmail.com", "tom.cruise@gmail.com", "jeff.bezos@gmail.com", "elon.musk@gmail.com" ]

    if (validMail.includes(mail)){
        const element = `<div class="fw-semibold text-success py-3">${"Accesso consentito"}</div>`;
        result.innerHTML = element;
    }
    else{
        const element = `<div class="fw-semibold text-danger py-3">${"Accesso negato"}</div>`;
        result.innerHTML = element;
    }

}