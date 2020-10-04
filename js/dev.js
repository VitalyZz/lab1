const buttonConfirm = document.querySelector('.buttonConfirm');
const buttonOutput = document.querySelector('.buttonOutput');

const wrapperFirstActionValue = document.querySelector('.wrapperFirstActionValue');
const wrapperSecondActionValue = document.querySelector('.wrapperSecondActionValue');
const wrapperThirdActionValue = document.querySelector('.wrapperThirdActionValue');

const afterClickButton = document.querySelector('.afterClickButton');
const output = document.querySelector('.output');

const firstAction = document.querySelector('.firstAction');
const secondAction = document.querySelector('.secondAction');
const thirdAction = document.querySelector('.thirdAction');

const errorDimensions = document.querySelector('.errorDimensions');

buttonConfirm.addEventListener('click', function() {
    wrapperFirstActionValue.innerHTML = '';
    wrapperSecondActionValue.innerHTML = '';
    wrapperThirdActionValue.innerHTML = '';

    const dimensionsValue = document.querySelector('.dimensionsInput').value;

    if (dimensionsValue === '') {
        errorDimensions.style.display = 'block';
        errorDimensions.textContent = 'Задано пустое значение!';
    }
    
    else if(dimensionsValue == 0) {
        errorDimensions.style.display = 'block';
        errorDimensions.textContent = 'Задано нулевое значение!';
    }

    else {
        afterClickButton.style.display = 'block';

        // Создание таблицы для первого значения "X"
        const table1 = createMatrix(dimensionsValue, 'inputsForFirstAction');
        wrapperFirstActionValue.appendChild(table1);

        // Создание таблицы (вектора) для второго значения "Y"
        const table2 = createVector(dimensionsValue, 'inputsForSecondAction');
        wrapperSecondActionValue.appendChild(table2);

        // Создание таблицы (вектора) для третьего значения "t"
        const table3 = createVector(dimensionsValue, 'inputsForThirdAction');
        wrapperThirdActionValue.appendChild(table3);
    }
});

buttonOutput.addEventListener('click', function() {
    output.style.display = 'block';
});

firstAction.addEventListener('click', changeShadow);
secondAction.addEventListener('click', changeShadow);
thirdAction.addEventListener('click', changeShadow);

function changeShadow(e) {
    if (e.target.id === 'first') {
        e.target.classList.add('firstShadow')

        secondAction.classList.remove('secondShadow')
        thirdAction.classList.remove('thirdShadow')
    }
    
    if (e.target.id === 'second') {
        e.target.classList.add('secondShadow')

        firstAction.classList.remove('firstShadow')
        thirdAction.classList.remove('thirdShadow')
    }
    
    if (e.target.id === 'third') {
        e.target.classList.add('thirdShadow')

        firstAction.classList.remove('firstShadow')
        secondAction.classList.remove('secondShadow')
    }
}