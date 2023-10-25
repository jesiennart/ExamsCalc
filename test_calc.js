const nameUser = document.querySelector('#input-name');
const testmax = document.querySelector('#testmax');
const scoreStudent = document.querySelector('#score-student');
const scorePercent = document.querySelector('.final-score');
const btnCount = document.querySelector('.btn-count');
const btnAdd = document.querySelector('.btn-add');
const error = document.querySelector('.error');
const arch = document.querySelector('.archives');
const medium = document.querySelector('.medium');
const cross = document.querySelector('.fa-solid');
const btnDel = document.querySelector('.btn-del');
const list = document.querySelectorAll('.archives li');
const pScore = document.querySelectorAll('.score p');

// Sprawdzanie poprawności wypełnienia formularza
const checkError = () => {
    if (nameUser.value == '' || testmax.value == 0 || scoreStudent == 0) {
        error.style.visibility = 'visible';
        error.textContent = 'Wypełnij wszystkie pola';
    } else {
         error.style.visibility = 'hidden';
         countScore();   
    }
}
// liczenie wyniku
const countScore = () => {
    
    const a = Number(testmax.value)
    const b = Number(scoreStudent.value)
    
    const result = b / (a * 0.1) * 10
    scorePercent.textContent = `${result.toFixed(1)} %`;
    return result; 
}

//funkcja tworząca archiwum wyników
const addArch = (result) => {
    result = countScore();

    // tworzenie li z wynikiem w archiwum
    const li = document.createElement('li');
    li.classList.add('li-arch');
    li.innerHTML = `<button class="remove-item">${nameUser.value} - Wynik: ${scoreStudent.value} pkt. Procent: ${result.toFixed(1)}%. </button><i class="fa-solid fa-xmark"></i>`;
    
    arch.appendChild(li);

    let arrList = Array.from(arch.children, li => li.innerHTML)//tablica z archiwum
    scorePercent.textContent = '';
    nameUser.value = '';
    scoreStudent.value = '';

    // Wydzielenie z li samego wyniku i stworzenie tablicy wyników
    let score = result.toFixed(1);
    let arrScore = Array.from(score);
    let arrSc = arrScore.reduce((acc, cur) => acc + cur);
    let arrNumber = Number(arrSc);
    console.log(arrNumber);

    // Stworzenie span z samymi wynikami
    const btnRemove = document.querySelector('.remove-item')
    const span = document.createElement('span');
    span.classList.add('remove-span')
    span.textContent = arrNumber;
    btnRemove.appendChild(span)

    
    // funkcja licząca średnią z wyników
    const medScor = () => {
        let arr = Array.from(btnRemove.children, mleko => mleko.textContent);// tworzy z p tablicę
        let res = arr.map(i => Number(i))// zamienia string w tablicy w number
        console.log(res);
        let newArr = res.reduce((acc, cur) => acc + cur);
        let finalResult = newArr / arr.length;
    medium.textContent = `${finalResult.toFixed(1)} %`
    }
    medScor()

    // usuwanie wyniku z score p
    const pScore = document.querySelectorAll('.score p');
    const clear = () => {
        pScore.forEach((element) => {
                element.remove();
                medium.textContent = '';
                testmax.value = '';
        }); 
    }
    //usuwanie listy wyników z ol li
    const list = document.querySelectorAll('.archives li');
    const clearP = () => {
        list.forEach((element) => {
                element.remove();
                medium.textContent = '';
                testmax.value = '';
        }); 
    }
    btnDel.addEventListener('click', clear);
    btnDel.addEventListener('click', clearP);

    //usuwanie pojedyńczego wiersza
    const removeItem = (e) => {
        if (e.target.parentElement.classList.contains('li-arch')) {
            e.target.parentElement.remove();
            medScor(); 
        }
    }
    li.addEventListener('click', removeItem);
    
}


btnCount.addEventListener('click', checkError);
btnAdd.addEventListener('click', addArch);
