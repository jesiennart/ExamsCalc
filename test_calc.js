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


const checkError = () => {
    if (nameUser.value == '' || testmax.value == 0 || scoreStudent == 0) {
        error.style.visibility = 'visible';
        error.textContent = 'Wypełnij wszystkie pola';
    } else {
         error.style.visibility = 'hidden';
         countScore();   
    }
}
const countScore = () => {
    
    const a = Number(testmax.value)
    const b = Number(scoreStudent.value)
    
    const result = b / (a * 0.1) * 10
    scorePercent.textContent = `${result.toFixed(1)} %`;
    return result; 
}

const addArch = (result) => {
    result = countScore()
    const li = document.createElement('li');
    
    li.innerHTML = `<button>${nameUser.value} - Wynik: ${scoreStudent.value} punktów. Procent: ${result.toFixed(1)}%. <i class="fa-solid fa-xmark"></i></button>`;
    arch.appendChild(li);
    let arrList = Array.from(arch.children, li => li.innerHTML)//tablica z archiwum
    scorePercent.textContent = '';
    nameUser.value = '';
    scoreStudent.value = '';
    
    let score = result.toFixed(1);
    let arrScore = Array.from(score);
    let arrSc = arrScore.reduce((acc, cur) => acc + cur);
    
    let arrNumber = Number(arrSc)

    
    let divScore = document.querySelector('.score');
    const p = document.createElement('p');
    p.textContent = arrNumber;
    divScore.appendChild(p)
    
    let arr = Array.from(divScore.children, p => p.textContent);// tworzy z p tablicę
    
    let res = arr.map(i => Number(i))// zamienia string w tablicy w number
    let newArr = res.reduce((acc, cur) => acc + cur);
    
    let finalResult = newArr / arr.length;
    medium.textContent = `${finalResult.toFixed(1)} %`


    const cross = document.querySelector('.fa-solid');
    const list = document.querySelectorAll('.archives li');

    for (let i = 0; i < arrList.length; i++) {
        let resLen = arrList[i]
    }
    const clear = () => {
        list.forEach((element) => {
                element.remove()
        }); 
    }
     cross.addEventListener('click', clear)//  usuwa tylko pierwszy x
}


btnCount.addEventListener('click', checkError)
btnAdd.addEventListener('click', addArch)
