document.addEventListener('DOMContentLoaded', function() {
    let squareButton = document.createElement('button');
    let squareButtonText= document.createTextNode('Add Square');
    squareButton.appendChild(squareButtonText);
    document.body.appendChild(squareButton);

    let headContainer = document.createElement('div');
    headContainer.className = 'container';
    document.body.appendChild(headContainer)
    let blockRow = document.createElement('div');
    blockRow.className = 'row';
    headContainer.appendChild(blockRow);

    squareNumber = 0;

    function insertSquare() {
        let newSquare = document.createElement('div');
        newSquare.className = 'block';
        newSquare.id = squareNumber;
        blockRow.appendChild(newSquare);
    }

    squareButton.addEventListener('click', function(){
        insertSquare();
        console.log(squareNumber);
        squareNumber += 1;
      })
});