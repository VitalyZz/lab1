const buttonConfirm = document.querySelector('.buttonConfirm');

const firstAction = document.querySelector('.firstAction');
const secondAction = document.querySelector('.secondAction');
const thirdAction = document.querySelector('.thirdAction');

const wrapperFirstActionValue1 = document.querySelector('.wrapperFirstActionValue1');
const wrapperSecondActionValue1 = document.querySelector('.wrapperSecondActionValue1');
const wrapperThirdActionValue1 = document.querySelector('.wrapperThirdActionValue1');

const afterClickButton1 = document.querySelector('.afterClickButton1');
const output1 = document.querySelector('.output1');
const buttonOutput1 = document.querySelector('.buttonOutput1');
const fill = document.querySelector('.fill');

let numOfSubstitution = 1;

firstAction.addEventListener('click', e => {
    numOfSubstitution = 1;

    wrapperFirstActionValue1.innerHTML = '';
    wrapperSecondActionValue1.innerHTML = '';
    wrapperThirdActionValue1.innerHTML = '';

    afterClickButton1.style.display = 'none';

    document.querySelector('.dimensionsInput').value = '';

    output1.style.display = 'none';
    errorDimensions.style.display = 'none';
});

secondAction.addEventListener('click', e => {
    numOfSubstitution = 2;

    wrapperFirstActionValue1.innerHTML = '';
    wrapperSecondActionValue1.innerHTML = '';
    wrapperThirdActionValue1.innerHTML = '';

    afterClickButton1.style.display = 'none';

    document.querySelector('.dimensionsInput').value = '';

    output1.style.display = 'none';
    errorDimensions.style.display = 'none';
});

thirdAction.addEventListener('click', e => {
    numOfSubstitution = 3;

    wrapperFirstActionValue1.innerHTML = '';
    wrapperSecondActionValue1.innerHTML = '';
    wrapperThirdActionValue1.innerHTML = '';

    afterClickButton1.style.display = 'none';

    document.querySelector('.dimensionsInput').value = '';

    output1.style.display = 'none';
    errorDimensions.style.display = 'none';
});

fill.addEventListener('click', function() {
    document.querySelector('.dimensionsInput').value = 3;
    btnComfirmFunc();
    if (numOfSubstitution === 1) {
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
    
        let inputsForYT = document.querySelectorAll('.inputsForSecondAction');
        inputsForYT[0].value = 100;
        inputsForYT[1].value = 200;
        inputsForYT[2].value = 300;
    
        inputsForYT[3].value = 1.2;
        inputsForYT[4].value = 1.4;
        inputsForYT[5].value = 1.9;
    }

    else if (numOfSubstitution === 2) {
        let inputsForX = document.querySelectorAll('.inputsForFirstAction');
        inputsForX[0].value = 0.1;
        inputsForX[1].value = 0.12;
        inputsForX[2].value = 0.125;
        inputsForX[3].value = 0.05;
        inputsForX[4].value = 0.04;
        inputsForX[5].value = 0.075;
        inputsForX[6].value = 0.3;
        inputsForX[7].value = 0.12;
        inputsForX[8].value = 0.025;
    
        let inputsForYT = document.querySelectorAll('.inputsForSecondAction');
        inputsForYT[0].value = 100;
        inputsForYT[1].value = 200;
        inputsForYT[2].value = 300;
    
        inputsForYT[3].value = 1.2;
        inputsForYT[4].value = 1.4;
        inputsForYT[5].value = 1.9;
    }

    else if (numOfSubstitution === 3) {        
        let inputsForX = document.querySelectorAll('.inputsForFirstAction');
        
        inputsForX[0].value = 1.1749;
        inputsForX[1].value = 0.1673;
        inputsForX[2].value = 0.1635;
        inputsForX[3].value = 0.0903;
        inputsForX[4].value = 1.0646;
        inputsForX[5].value = 0.0935;
        inputsForX[6].value = 0.3726;
        inputsForX[7].value = 0.1825;
        inputsForX[8].value = 1.0875;
    
        let inputsForYT = document.querySelectorAll('.inputsForSecondAction');

        inputsForYT[0].value = 200;
        inputsForYT[1].value = 250;
        inputsForYT[2].value = 400;
    
        inputsForYT[3].value = 2.768;
        inputsForYT[4].value = 2.472;
        inputsForYT[5].value = 4.313;
    }

    btnOutput();
});

const errorDimensions = document.querySelector('.errorDimensions');

buttonConfirm.addEventListener('click', btnComfirmFunc);

function btnComfirmFunc() {
    output1.innerHTML = '';

    wrapperFirstActionValue1.innerHTML = '';
    wrapperSecondActionValue1.innerHTML = '';
    wrapperThirdActionValue1.innerHTML = '';

    afterClickButton1.style.display = 'none';

    const dimensionsValue = document.querySelector('.dimensionsInput').value;

    if (dimensionsValue === '') {
        afterClickButton1.style.display = 'none';

        errorDimensions.style.display = 'block';
        errorDimensions.textContent = 'Задано пустое значение!';

        output1.innerHTML = '';
    }
    
    else if(dimensionsValue == 0) {
        afterClickButton1.style.display = 'none';

        errorDimensions.style.display = 'block';
        errorDimensions.textContent = 'Задано нулевое значение!';

        output1.innerHTML = '';
    }

    else {
        errorDimensions.style.display = 'none';

        if (numOfSubstitution === 1) {
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
        }

        else if (numOfSubstitution === 2) {
            afterClickButton1.style.display = 'block';

            // Создание таблицы для первого значения "A"
            const table1_1 = createMatrix(dimensionsValue, 'inputsForFirstAction', 'A');
            wrapperFirstActionValue1.appendChild(table1_1);
    
            // Создание таблицы (вектора) для второго значения "Y"
            const table2_1 = createVector(dimensionsValue, 'inputsForSecondAction', 'Y&#773;');
            wrapperSecondActionValue1.appendChild(table2_1);
    
            // Создание таблицы (вектора) для третьего значения "t"
            const table3_1 = createVector(dimensionsValue, 'inputsForThirdAction', 't&#773;');
            wrapperThirdActionValue1.appendChild(table3_1);
        }

        else if (numOfSubstitution === 3) {
            afterClickButton1.style.display = 'block';

            // Создание таблицы для первого значения "X"
            const table1_1 = createMatrix(dimensionsValue, 'inputsForFirstAction', 'B');
            wrapperFirstActionValue1.appendChild(table1_1);
    
            // Создание таблицы (вектора) для второго значения "X"
            const table2_1 = createVector(dimensionsValue, 'inputsForSecondAction', 'X&#773;');
            wrapperSecondActionValue1.appendChild(table2_1);
    
            // Создание таблицы (вектора) для третьего значения "T"
            const table3_1 = createVector(dimensionsValue, 'inputsForThirdAction', 'T&#773;');
            wrapperThirdActionValue1.appendChild(table3_1);
        }
    }
}

buttonOutput1.addEventListener('click', btnOutput);

function btnOutput() {
    output1.style.display = 'block';
    errorDimensions.style.display = 'none';

    let inputsForX = document.querySelectorAll('.inputsForFirstAction');
    let inputsForYT = document.querySelectorAll('.inputsForSecondAction');

    let tr = true;

    inputsForX.forEach(el => {
        if (el.value === '') {
            // afterClickButton1.style.display = 'none';

            errorDimensions.style.display = 'block';
            errorDimensions.textContent = 'Не все заполнено!';
    
            // output1.innerHTML = '';

            tr = false;
        }
    });

    inputsForYT.forEach(el => {
        if (el.value === '') {
            // afterClickButton1.style.display = 'none';

            errorDimensions.style.display = 'block';
            errorDimensions.textContent = 'Не все заполнено!';
    
            // output1.innerHTML = '';

            tr = false;
        }
    });


    if (tr) {
        if (numOfSubstitution === 1) test1();
        else if (numOfSubstitution === 2) test2();
        else if (numOfSubstitution === 3) test3();
    }
}

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

function test3() {
    output1.innerHTML = '';
    let length = parseInt(document.querySelector('.dimensionsInput').value);
    output1.style.display = 'flex';
    
    let inputsForX = document.querySelectorAll('.inputsForFirstAction');

    let matrixB = [];
    let vectorX = [];
    let vectorT = [];

    for(let i = 0; i < length; i++) {
        matrixB[i] = [];
    }

    for(let i = 0, j = 0; i < length * length; i++) {
        matrixB[j].push(parseFloat(inputsForX[i].value));
        if ((i + 1) % length === 0) j++;
    }

    let inputsForYT = document.querySelectorAll('.inputsForSecondAction');

    vectorT[0] = [];

    for(let i = 0; i < length + length; i++) {
        if (i < (length)) vectorX.push(parseFloat(inputsForYT[i].value));
        else vectorT[0].push(parseFloat(inputsForYT[i].value));
    }

    let mas = vectorX.slice(0);
    vectorX = [];

    for(let i = 0; i < length; i++) {
        vectorX[i] = [];
        vectorX[i][0] = mas[i];
    }

    // Находим вектор Y

    let matrixY = [];

    for(let i = 0; i < length; i++) {
        matrixY[i] = [];
    }

    matrixY = MultiplyMatrix(InverseMatrix(matrixB), vectorX);
    
    for(let i = 0; i < length; i++) {
        matrixY[i][0] = parseFloat(matrixY[i][0].toFixed(4));
    }

    table = document.createElement('table');
    table.classList.add('outputTable');

    trth = document.createElement('tr');
    th = document.createElement('th');

    th.innerHTML = 'Y&#773';
    th.colSpan = length;
    trth.appendChild(th);
    table.appendChild(trth);

    for(let i = 0; i < length; i++) {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.textContent = Math.round(matrixY[i]);
        tr.appendChild(td);
        table.appendChild(tr);
    }

    output1.appendChild(table); 
    
    // Вычисляем вектор t

    let mas2 = vectorT.slice(0);
    vectorT = [];
    vectorT[0] = [];

    for(let i = 0; i < length; i++) {
        vectorT[0][i] = mas2[0][i];
    }

    let matrixt = MultiplyMatrix(vectorT, InverseMatrix(matrixB));

    for(let i = 0; i < length; i++) {
        matrixt[0][i] = parseFloat(matrixt[0][i].toFixed(1));
    }

    table = document.createElement('table');
    table.classList.add('outputTable');

    trth = document.createElement('tr');
    th = document.createElement('th');

    th.innerHTML = 't&#773';
    th.colSpan = length;
    trth.appendChild(th);
    table.appendChild(trth);

    for(let i = 0; i < length; i++) {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.textContent = matrixt[0][i];
        tr.appendChild(td);
        table.appendChild(tr);
    }

    output1.appendChild(table);

    // Вычисляем вектор k

    let vectork = [];

    for(let i = 0; i < length; i++) {
        vectork.push((matrixt[0][i] * vectorX[i]).toFixed(2));
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
        td.textContent = Math.round(vectork[i]);
        tr.appendChild(td);
        table.appendChild(tr);
    }

    output1.appendChild(table);

    // Вычисляем матрицу C

    let matrixE = [];

    for(let i = 0; i < length; i++) {
        matrixE[i] = []
    }

    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            i === j ? matrixE[i][j] = 1 : matrixE[i][j] = 0;
        }
    }

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

    // Вычисляем матрицу A

    let matrixA = SubtractionMatrix(matrixE, InverseMatrix(matrixB));

    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            matrixA[i][j] = parseFloat(matrixA[i][j].toFixed(3))
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

    // Вычисляем матрицу X

    let matrixX = matrixA;

    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            matrixX[i][j] = parseFloat(matrixA[i][j] * vectorX[j]);
        }
    }

    table = document.createElement('table');
    table.classList.add('outputTable');

    trth = document.createElement('tr');
    th = document.createElement('th');

    th.innerHTML = 'X';
    th.colSpan = length;
    trth.appendChild(th);
    table.appendChild(trth);

    for(let i = 0; i < length; i++) {
        tr = document.createElement('tr');
        for(let j = 0; j < length; j++) {
            td = document.createElement('td');
            td.textContent = Math.round(matrixX[i][j].toFixed(2));
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }

    output1.appendChild(table);
}

function test2() {
    output1.innerHTML = '';
    let length = parseInt(document.querySelector('.dimensionsInput').value);
    output1.style.display = 'flex';
    
    let inputsForX = document.querySelectorAll('.inputsForFirstAction');

    let matrixA = [];
    let matrixY = [];
    let matrixt = [];

    for(let i = 0; i < length; i++) {
        matrixA[i] = [];
    }

    for(let i = 0, j = 0; i < length * length; i++) {
        matrixA[j].push(parseFloat(inputsForX[i].value));
        if ((i + 1) % length === 0) j++;
    }

    let inputsForYT = document.querySelectorAll('.inputsForSecondAction');

    matrixt[0] = [];

    for(let i = 0; i < length + length; i++) {
        if (i < (length)) matrixY.push(parseInt(inputsForYT[i].value));
        else matrixt[0].push(parseFloat(inputsForYT[i].value));
    }

    // Находим B матрицу

    let matrixE = [];

    for(let i = 0; i < length; i++) {
        matrixE[i] = []
    }

    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            i === j ? matrixE[i][j] = 1 : matrixE[i][j] = 0;
        }
    }

    let matrixBB = InverseMatrix(SubtractionMatrix(matrixE, matrixA));

    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            matrixBB[i][j] = parseFloat(matrixBB[i][j].toFixed(4));
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
            td.textContent = matrixBB[i][j];
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }

    output1.appendChild(table); 
    
    // Вычисляем матрицу C

    let matrixC = SubtractionMatrix(matrixBB, matrixE);

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

    let vectorT = MultiplyMatrix(matrixt, matrixBB);

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

    // Вычисляем вектор x

    let matrixYY = [];

    for(let i = 0; i < length; i++) {
        matrixYY[i] = [];
        matrixYY[i][0] = matrixY[i];
    }

    let vectorX = MultiplyMatrix(matrixBB, matrixYY);

    // console.log(matrixBB);
    // console.log(matrixYY);
    // console.log(vectorX[1][0]);
    // return;

    for(let i = 0; i < length; i++) {
        vectorX[i][0] = Math.round(parseFloat(vectorX[i][0].toFixed(2)));
    }

    table = document.createElement('table');
    table.classList.add('outputTable');

    trth = document.createElement('tr');
    th = document.createElement('th');

    th.innerHTML = 'X&#773;';
    th.colSpan = length;
    trth.appendChild(th);
    table.appendChild(trth);

    for(let i = 0; i < length; i++) {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.textContent = vectorX[i][0];
        tr.appendChild(td);
        table.appendChild(tr);
    }

    output1.appendChild(table);

    // console.log(vectorX);
    // return;

    // Вычисляем вектор k
    let matrixx = vectorX;
    let vectork = [];

    for(let i = 0; i < length; i++) {
        vectork.push((matrixt[0][i] * matrixx[i]).toFixed(2));
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
        td.textContent = Math.round(vectork[i]);
        tr.appendChild(td);
        table.appendChild(tr);
    }

    output1.appendChild(table);

    // Вычисляем матрицу X

    let matrixXX = matrixA;

    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            matrixXX[i][j] = parseFloat(matrixA[i][j] * matrixx[j]);
        }
    }

    table = document.createElement('table');
    table.classList.add('outputTable');

    trth = document.createElement('tr');
    th = document.createElement('th');

    th.innerHTML = 'X';
    th.colSpan = length;
    trth.appendChild(th);
    table.appendChild(trth);

    for(let i = 0; i < length; i++) {
        tr = document.createElement('tr');
        for(let j = 0; j < length; j++) {
            td = document.createElement('td');
            td.textContent = matrixXX[i][j];
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }

    output1.appendChild(table);
}

function test1() {
    output1.innerHTML = '';
    let length = parseInt(document.querySelector('.dimensionsInput').value);
    output1.style.display = 'flex';
    
    let inputsForX = document.querySelectorAll('.inputsForFirstAction');

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
            td.textContent = matrixA[i][j].toFixed(2);
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

    console.log(matrixt);
    console.log(matrixx);

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
}