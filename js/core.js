function createMatrix(dimensionsValue, inputClass, letter) {
    const table = document.createElement('table');

    const tr = document.createElement('tr');
    const th = document.createElement('th');

    th.textContent = letter;
    th.colSpan = dimensionsValue;
    tr.appendChild(th);
    table.appendChild(tr);

    for(let i = 0; i < dimensionsValue; i++) {
        const tr = document.createElement('tr');

        for(let j = 0; j < dimensionsValue; j++) {
            const td = document.createElement('td');

            const input = document.createElement('input');
            input.type = 'number';
            input.classList.add('inputsForFirstAction');

            td.appendChild(input);
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    return table;
}


function createVector(dimensionsValue, inputClass, letter) {
    const table = document.createElement('table');

    const tr = document.createElement('tr');
    const th = document.createElement('th');

    th.innerHTML = letter;
    th.colSpan = dimensionsValue;
    tr.appendChild(th);
    table.appendChild(tr);

    for(let i = 0; i < dimensionsValue; i++) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');

        const input = document.createElement('input');
        input.type = 'number';
        input.classList.add('inputsForSecondAction');

        td.appendChild(input);
        tr.appendChild(td);

        table.appendChild(tr);
    }

    return table;
}