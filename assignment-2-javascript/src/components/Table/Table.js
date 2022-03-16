/** @param props {object}
 * @return {HTMLTableElement} */
export const Table = (props) => {
    const {columns, rows} = props;
    const table = document.createElement('table');
    const header = document.createElement('thead');
    const headerRow = document.createElement('tr');
    columns.forEach(({header}) => {
        const cell = Object.assign(document.createElement('th'), {className: 'column-cell'});
        typeof header !== 'string' ? cell.appendChild(header) : cell.textContent = header;
        headerRow.appendChild(cell);
    });

    const body = document.createElement('tbody');
    rows.forEach((row) => {
        const rowElement = document.createElement('tr');
        columns.forEach(({key}) => {
            const cell = Object.assign(document.createElement('td'), {className: 'row-cell'});
            typeof row[key] !== 'string' ? cell.appendChild(row[key]) : cell.textContent = row[key];
            rowElement.appendChild(cell);
        });
        body.appendChild(rowElement);
    });

    header.appendChild(headerRow);
    table.appendChild(header);
    table.appendChild(body);

    props.ref = table;
    return table;
}
