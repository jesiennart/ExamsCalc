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
    result = countScore()
    // tworzenie li z wynikiem w archiwum
    const li = document.createElement('li');
    li.innerHTML = `<button class="remove-item">${nameUser.value} - Wynik: ${scoreStudent.value} punktów. Procent: ${result.toFixed(1)}%. <i class="fa-solid fa-xmark"></i></button>`;
    arch.appendChild(li);

    let arrList = Array.from(arch.children, li => li.innerHTML)//tablica z archiwum
    scorePercent.textContent = '';
    nameUser.value = '';
    scoreStudent.value = '';

    // Wydzielenie z li samego wyniku i stworzenie tablicy wyników
    let score = result.toFixed(1);
    let arrScore = Array.from(score);
    let arrSc = arrScore.reduce((acc, cur) => acc + cur);
    let arrNumber = Number(arrSc)

    // Stworzenie paragrafów z samymi wynikami
    let divScore = document.querySelector('.score');
    const p = document.createElement('p');
    p.textContent = arrNumber;
    divScore.appendChild(p)
    
    let arr = Array.from(divScore.children, p => p.textContent);// tworzy z p tablicę
    let res = arr.map(i => Number(i))// zamienia string w tablicy w number
    
    // funkcja licząca średnią z wyników
    const medScor = () => {
        let newArr = res.reduce((acc, cur) => acc + cur);
        let finalResult = newArr / arr.length;
    medium.textContent = `${finalResult.toFixed(1)} %`
    }
    medScor()

    // usuwanie wszystkich wierszy
    const clear = () => {
        list.forEach((element) => {
                element.remove();
                medium.textContent = '';
        }); 
    }
    btnDel.addEventListener('click', clear);

    //usuwanie pojedyńczego wiersza
    const removeItem = (e) => {
        if (e.target.parentElement.classList.contains('remove-item')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    li.addEventListener('click', removeItem);
}


btnCount.addEventListener('click', checkError);
btnAdd.addEventListener('click', addArch);
