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

    output1.style.display = 'none';
    output2.style.display = 'none';
    output3.style.display = 'none';
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

    output1.style.display = 'none';
    output2.style.display = 'none';
    output3.style.display = 'none';
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

    output1.style.display = 'none';
    output2.style.display = 'none';
    output3.style.display = 'none';
});

const errorDimensions = document.querySelector('.errorDimensions');

buttonConfirm.addEventListener('click', btnComfirmFunc);

function btnComfirmFunc() {
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

            // Code for first substitution
            
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

            // Code for second substitution
            
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

            // Code for third substitution
            
        }
    }
}

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

test();

function test() {
    let length = document.querySelector('.dimensionsInput').value = 3;
    btnComfirmFunc();
    output1.style.display = 'flex';
    
    let inputsForX = document.querySelectorAll('.inputsForFirstAction');
    inputsForX[0].value = 20;
    inputsForX[1].value = 30;
    inputsForX[2].value = 50;
    inputsForX[3].value = 10;
    inputsForX[4].value = 10;
    inputsForX[5].value = 30;
    inputsForX[6].value = 60;
    inputsForX[7].value = 30;
    inputsForX[8].value = 10;

    let matrixX = [];
    let matrixY = [];
    let matrixt = [];

    for(let i = 0; i < length; i++) {
        matrixX[i] = [];
    }

    for(let i = 0, j = 0; i < length * length; i++) {
        matrixX[j].push(parseInt(inputsForX[i].value));
        if ((i + 1) % length === 0) j++;
    }

    let inputsForYT = document.querySelectorAll('.inputsForSecondAction');
    inputsForYT[0].value = 100;
    inputsForYT[1].value = 200;
    inputsForYT[2].value = 300;

    inputsForYT[3].value = 1.2;
    inputsForYT[4].value = 1.4;
    inputsForYT[5].value = 1.9;

    matrixt[0] = [];

    for(let i = 0; i < length + length; i++) {
        if (i < (length)) matrixY.push(parseInt(inputsForYT[i].value));
        else matrixt[0].push(parseFloat(inputsForYT[i].value));
    }

    // Находим X вектор
    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    let matrixx = [];

    for(let i = 0; i < length; i++) {
        matrixx.push(matrixX[i].reduce(reducer) + matrixY[i]);
    }

    let table = document.createElement('table');
    table.classList.add('outputTable');

    let trth = document.createElement('tr');
    let th = document.createElement('th');

    th.innerHTML = 'X&#773;';
    trth.appendChild(th);
    table.appendChild(trth);

    for(let i = 0; i < length; i++) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = matrixx[i];
        tr.appendChild(td);
        table.appendChild(tr);
    }

    output1.appendChild(table);

    // Вычисляем матрицу А

    let matrixA = [];

    for(let i = 0; i < length; i++) {
        matrixA[i] = []
    }

    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            matrixA[i].push(matrixX[i][j] / matrixx[j]);
        }
    }

    table = document.createElement('table');
    table.classList.add('outputTable');

    trth = document.createElement('tr');
    th = document.createElement('th');

    th.innerHTML = 'A';
    th.colSpan = length;
    trth.appendChild(th);
    table.appendChild(trth);

    for(let i = 0; i < length; i++) {
        tr = document.createElement('tr');
        for(let j = 0; j < length; j++) {
            td = document.createElement('td');
            td.textContent = matrixA[i][j];
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }

    output1.appendChild(table);

    // Вычисляем матрицу B

    let matrixE = [];

    for(let i = 0; i < length; i++) {
        matrixE[i] = []
    }

    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            i === j ? matrixE[i][j] = 1 : matrixE[i][j] = 0;
        }
    }

    let matrixB = InverseMatrix(SubtractionMatrix(matrixE, matrixA));

    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            matrixB[i][j] = parseFloat(matrixB[i][j].toFixed(4));
        }
    }

    table = document.createElement('table');
    table.classList.add('outputTable');

    trth = document.createElement('tr');
    th = document.createElement('th');

    th.innerHTML = 'B';
    th.colSpan = length;
    trth.appendChild(th);
    table.appendChild(trth);

    for(let i = 0; i < length; i++) {
        tr = document.createElement('tr');
        for(let j = 0; j < length; j++) {
            td = document.createElement('td');
            td.textContent = matrixB[i][j];
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }

    output1.appendChild(table);
    
    // Вычисляем матрицу C

    let matrixC = SubtractionMatrix(matrixB, matrixE);

    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            matrixC[i][j] = parseFloat(matrixC[i][j].toFixed(4));
        }
    }

    table = document.createElement('table');
    table.classList.add('outputTable');

    trth = document.createElement('tr');
    th = document.createElement('th');

    th.innerHTML = 'C';
    th.colSpan = length;
    trth.appendChild(th);
    table.appendChild(trth);

    for(let i = 0; i < length; i++) {
        tr = document.createElement('tr');
        for(let j = 0; j < length; j++) {
            td = document.createElement('td');
            td.textContent = matrixC[i][j];
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }

    output1.appendChild(table);

    // Вычисляем вектор T

    let vectorT = MultiplyMatrix(matrixt, matrixB);

    for(let i = 0; i < length; i++) {
        vectorT[0][i] = parseFloat(vectorT[0][i].toFixed(4));
    }

    table = document.createElement('table');
    table.classList.add('outputTable');

    trth = document.createElement('tr');
    th = document.createElement('th');

    th.innerHTML = 'T&#773;';
    th.colSpan = length;
    trth.appendChild(th);
    table.appendChild(trth);

    for(let i = 0; i < length; i++) {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.textContent = vectorT[0][i];
        tr.appendChild(td);
        table.appendChild(tr);
    }

    output1.appendChild(table);

    // Вычисляем вектор k

    let vectork = [];

    for(let i = 0; i < length; i++) {
        vectork.push(matrixt[0][i] * matrixx[i]);
    }

    table = document.createElement('table');
    table.classList.add('outputTable');

    trth = document.createElement('tr');
    th = document.createElement('th');

    th.innerHTML = 'k&#773;';
    th.colSpan = length;
    trth.appendChild(th);
    table.appendChild(trth);

    for(let i = 0; i < length; i++) {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.textContent = vectork[i];
        tr.appendChild(td);
        table.appendChild(tr);
    }

    output1.appendChild(table);

    console.log(matrixX);
    console.log(matrixY);
    console.log(matrixt);
    console.log(matrixx);
    console.log(matrixA);
    console.log(matrixE);
    console.log(matrixB);
    console.log(matrixC);
    console.log(vectorT);
    console.log(vectork);
}