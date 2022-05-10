const form = document.querySelector('#form');
const displayError = document.querySelector('#error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let messages = [];
    let error = false;

    const playerName = document.querySelector('#name').value;
    const playerScore = document.querySelector('#score').value;
    const playerTime = document.querySelector('#time-to-complete').value;

    if(playerName.length > 50){
        messages.push('Nom trop Long. Le nom doit contenir moins de 50 lettres, chiffres ou symboles');
        error = true;
    }

    if(playerName.length <= 0){
        messages.push('Veuillez saisir un nom');
        error = true;
    }

    if(playerScore < 0 || playerScore > 14 || playerTime <= 0){
        messages.push('Erreur! Soumission du formulaire impossible. Veuillez recommencer une partie');
        error = true;
    }

    if(error){
        displayError.innerText = messages.join(', ') + '.';
    }else{
        form.submit();
    }
})


