function checkField() {
    let table = [];
    for (let row = 0; row < 9; row++) {
      table.push([]);
      for (let col = 0; col < 9; col++) {
        let val = document.querySelector('.sudoku-table').rows[row].cells[col].innerHTML;
        document.querySelector('.sudoku-table').rows[row].cells[col].classList.remove("sudoku-table__cell--wrong");
        table[row][col] = val ? parseInt(val) : 0;
      }
    }
  
    // TODO: Write your code here
  }
  
  const table = document.createElement('table');
  table.classList.add('sudoku-table');
  document.getElementsByClassName('sudoku-container')[0].appendChild(table);
  const initialField = [
          [4, 8, 1, 2, 5, 3, 6, 9, 7],
          [2, 6, 7, 9, 4, 8, 1,  , 5],
          [5, 3, 9, 6, 7, 1, 2,  , 4],
          [6, 5, 4, 3, 8, 9, 7, 1, 2],
          [9,  , 8, 7,  , 4, 5, 6, 3],
          [1, 7, 3, 5, 6, 2, 8, 4, 9],
          [7,  , 2, 1, 3, 6, 9, 5, 8],
          [3, 1, 5, 8, 9, 7, 4, 2, 6],
          [8, 9, 6, 4, 2, 5, 3, 7, 1],
        ];
  for (let i = 0; i < initialField.length; i++) {
      const row = document.createElement('tr');
      row.classList.add('sudoku-table__row');
      table.appendChild(row);
      for (let j = 0; j < initialField[0].length; j++) {
          const cell = document.createElement('td');
          cell.classList.add('sudoku-table__cell');
          cell.contentEditable = true;
          cell.onkeyup = checkField;
          if (initialField[i][j]) {
              cell.innerHTML = initialField[i][j];
          }
          row.appendChild(cell);
      }
  }
  