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

    var colors = ["magenta", "blue", "red", "grey", "green", "brown", "purple", "yellow"];

    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)]
    };

    function insertSquare() {
        let newSquare = document.createElement('div');
        newSquare.className = 'block';
        newSquare.id = squareNumber;
        blockRow.appendChild(newSquare);
        newSquare.addEventListener('click', function(){
            newSquare.style.backgroundColor = randomColor();
        })
    }

    squareButton.addEventListener('click', function(){
        insertSquare();
        console.log(squareNumber);
        squareNumber += 1;
      })


});