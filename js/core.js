function createMatrix(dimensionsValue, inputClass) {
    const table = document.createElement('table');

    for(let i = 0; i < dimensionsValue; i++) {
        const tr = document.createElement('tr');

        for(let i = 0; i < dimensionsValue; i++) {
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


function createVector(dimensionsValue, inputClass) {
    const table = document.createElement('table');

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