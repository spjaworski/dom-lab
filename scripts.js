document.addEventListener('DOMContentLoaded', function() {
    let squareButton = document.createElement('button');
    let squareButtonText= document.createTextNode('Add Square');
    squareButton.appendChild(squareButtonText);
    document.body.appendChild(squareButton);

    function insertSquare() {
        let newSquare = document.createElement('div');
        newSquare.className = 'block';
        document.body.appendChild(newSquare);
    }

    squareButton.addEventListener('click', function(){
        
        insertSquare();
    })
});