const buttonConfirm = document.querySelector('.buttonConfirm');

const firstAction = document.querySelector('.firstAction');
const secondAction = document.querySelector('.secondAction');
const thirdAction = document.querySelector('.thirdAction');

// От расположения

const wrapperFirstActionValue1 = document.querySelector('.wrapperFirstActionValue1');
const wrapperSecondActionValue1 = document.querySelector('.wrapperSecondActionValue1');
const wrapperThirdActionValue1 = document.querySelector('.wrapperThirdActionValue1');

const wrapperFirstActionValue2 = document.querySelector('.wrapperFirstActionValue2');
const wrapperSecondActionValue2 = document.querySelector('.wrapperSecondActionValue2');
const wrapperThirdActionValue2 = document.querySelector('.wrapperThirdActionValue2');

const wrapperFirstActionValue3 = document.querySelector('.wrapperFirstActionValue3');
const wrapperSecondActionValue3 = document.querySelector('.wrapperSecondActionValue3');
const wrapperThirdActionValue3 = document.querySelector('.wrapperThirdActionValue3');

const afterClickButton1 = document.querySelector('.afterClickButton1');
const output1 = document.querySelector('.output1');
const buttonOutput1 = document.querySelector('.buttonOutput1');

const afterClickButton2 = document.querySelector('.afterClickButton2');
const output2 = document.querySelector('.output2');
const buttonOutput2 = document.querySelector('.buttonOutput2');

const afterClickButton3 = document.querySelector('.afterClickButton3');
const output3 = document.querySelector('.output3');
const buttonOutput3 = document.querySelector('.buttonOutput3');

let numOfSubstitution = 'firstSubstitution';

firstAction.addEventListener('click', e => {
    numOfSubstitution = 'firstSubstitution';

    wrapperFirstActionValue1.innerHTML = '';
    wrapperSecondActionValue1.innerHTML = '';
    wrapperThirdActionValue1.innerHTML = '';

    wrapperFirstActionValue2.innerHTML = '';
    wrapperSecondActionValue2.innerHTML = '';
    wrapperThirdActionValue2.innerHTML = '';

    wrapperFirstActionValue3.innerHTML = '';
    wrapperSecondActionValue3.innerHTML = '';
    wrapperThirdActionValue3.innerHTML = '';

    afterClickButton1.style.display = 'none';
    afterClickButton2.style.display = 'none';
    afterClickButton3.style.display = 'none';

    document.querySelector('.dimensionsInput').value = '';
});

secondAction.addEventListener('click', e => {
    numOfSubstitution = 'secondSubstitution'

    wrapperFirstActionValue1.innerHTML = '';
    wrapperSecondActionValue1.innerHTML = '';
    wrapperThirdActionValue1.innerHTML = '';

    wrapperFirstActionValue2.innerHTML = '';
    wrapperSecondActionValue2.innerHTML = '';
    wrapperThirdActionValue2.innerHTML = '';

    wrapperFirstActionValue3.innerHTML = '';
    wrapperSecondActionValue3.innerHTML = '';
    wrapperThirdActionValue3.innerHTML = '';

    afterClickButton1.style.display = 'none';
    afterClickButton2.style.display = 'none';
    afterClickButton3.style.display = 'none';

    document.querySelector('.dimensionsInput').value = '';
});

thirdAction.addEventListener('click', e => {
    numOfSubstitution = 'thirdSubstitution'

    wrapperFirstActionValue1.innerHTML = '';
    wrapperSecondActionValue1.innerHTML = '';
    wrapperThirdActionValue1.innerHTML = '';

    wrapperFirstActionValue2.innerHTML = '';
    wrapperSecondActionValue2.innerHTML = '';
    wrapperThirdActionValue2.innerHTML = '';

    wrapperFirstActionValue3.innerHTML = '';
    wrapperSecondActionValue3.innerHTML = '';
    wrapperThirdActionValue3.innerHTML = '';

    afterClickButton1.style.display = 'none';
    afterClickButton2.style.display = 'none';
    afterClickButton3.style.display = 'none';

    document.querySelector('.dimensionsInput').value = '';
});

const errorDimensions = document.querySelector('.errorDimensions');

buttonConfirm.addEventListener('click', function() {
    wrapperFirstActionValue1.innerHTML = '';
    wrapperSecondActionValue1.innerHTML = '';
    wrapperThirdActionValue1.innerHTML = '';

    wrapperFirstActionValue2.innerHTML = '';
    wrapperSecondActionValue2.innerHTML = '';
    wrapperThirdActionValue2.innerHTML = '';

    wrapperFirstActionValue3.innerHTML = '';
    wrapperSecondActionValue3.innerHTML = '';
    wrapperThirdActionValue3.innerHTML = '';

    afterClickButton1.style.display = 'none';
    afterClickButton2.style.display = 'none';
    afterClickButton3.style.display = 'none';

    const dimensionsValue = document.querySelector('.dimensionsInput').value;

    if (dimensionsValue === '') {
        afterClickButton1.style.display = 'none';
        afterClickButton2.style.display = 'none';
        afterClickButton3.style.display = 'none';

        errorDimensions.style.display = 'block';
        errorDimensions.textContent = 'Задано пустое значение!';
    }
    
    else if(dimensionsValue == 0) {
        afterClickButton1.style.display = 'none';
        afterClickButton2.style.display = 'none';
        afterClickButton3.style.display = 'none';

        errorDimensions.style.display = 'block';
        errorDimensions.textContent = 'Задано нулевое значение!';
    }

    else {
        if (numOfSubstitution === 'firstSubstitution') {
            afterClickButton1.style.display = 'block';

            // Создание таблицы для первого значения "X"
            const table1_1 = createMatrix(dimensionsValue, 'inputsForFirstAction', 'X');
            wrapperFirstActionValue1.appendChild(table1_1);
    
            // Создание таблицы (вектора) для второго значения "Y"
            const table2_1 = createVector(dimensionsValue, 'inputsForSecondAction', 'Y&#773;');
            wrapperSecondActionValue1.appendChild(table2_1);
    
            // Создание таблицы (вектора) для третьего значения "t"
            const table3_1 = createVector(dimensionsValue, 'inputsForThirdAction', 't&#773;');
            wrapperThirdActionValue1.appendChild(table3_1);

            console.log('firstSubstitution');
        }

        else if (numOfSubstitution === 'secondSubstitution') {
            afterClickButton2.style.display = 'block';

            // Создание таблицы для первого значения "X"
            const table1_2 = createMatrix(dimensionsValue, 'inputsForFirstAction', 'XX');
            wrapperFirstActionValue2.appendChild(table1_2);
    
            // Создание таблицы (вектора) для второго значения "Y"
            const table2_2 = createVector(dimensionsValue, 'inputsForSecondAction', 'Y&#773;');
            wrapperSecondActionValue2.appendChild(table2_2);
    
            // Создание таблицы (вектора) для третьего значения "t"
            const table3_2 = createVector(dimensionsValue, 'inputsForThirdAction', 't&#773;');
            wrapperThirdActionValue2.appendChild(table3_2);

            console.log('secondSubstitution');
        }

        else if (numOfSubstitution === 'thirdSubstitution') {
            afterClickButton3.style.display = 'block';

            // Создание таблицы для первого значения "X"
            const table1_3 = createMatrix(dimensionsValue, 'inputsForFirstAction', 'XXX');
            wrapperFirstActionValue3.appendChild(table1_3);
    
            // Создание таблицы (вектора) для второго значения "Y"
            const table2_3 = createVector(dimensionsValue, 'inputsForSecondAction', 'Y&#773;');
            wrapperSecondActionValue3.appendChild(table2_3);
    
            // Создание таблицы (вектора) для третьего значения "t"
            const table3_3 = createVector(dimensionsValue, 'inputsForThirdAction', 't&#773;');
            wrapperThirdActionValue3.appendChild(table3_3);

            console.log('thirdSubstitution');
        }
    }
});

buttonOutput1.addEventListener('click', function() {
    output1.style.display = 'block';
});

buttonOutput2.addEventListener('click', function() {
    output2.style.display = 'block';
});

buttonOutput3.addEventListener('click', function() {
    output3.style.display = 'block';
});

firstAction.addEventListener('click', changeShadow);
secondAction.addEventListener('click', changeShadow);
thirdAction.addEventListener('click', changeShadow);

function changeShadow(e) {
    if (e.target.id === 'first') {
        e.target.classList.add('firstShadow')

        secondAction.classList.remove('firstShadow')
        thirdAction.classList.remove('firstShadow')
    }
    
    if (e.target.id === 'second') {
        e.target.classList.add('firstShadow')

        firstAction.classList.remove('firstShadow')
        thirdAction.classList.remove('firstShadow')
    }
    
    if (e.target.id === 'third') {
        e.target.classList.add('firstShadow')

        firstAction.classList.remove('firstShadow')
        secondAction.classList.remove('firstShadow')
    }
}