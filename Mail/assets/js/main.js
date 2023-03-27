let mail = prompt ("Scrivi il tuo indirizzo Email", "mario.rossi@gmail.com")

let validMail = ["mario.rossi@gmail.com", "harry.potter@gmail.com", "tom.cruise@gmail.com", "jeff.bezos@gmail.com", "elon.musk@gmail.com" ]

if (validMail.includes(mail)){
    console.log ("Accesso consentito")
}
else{
    console.log ("Accesso negato")
}