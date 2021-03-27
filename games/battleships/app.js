document.addEventListener('DOMContentLoaded', () => {
    const userGrid = document.querySelector('.grid-user')
    const computerGrid = document.querySelector('.grid-computer')
    const displayGrid = document.querySelector('.grid-display')
    const ships = document.querySelectorAll('.ship')
    const destroyer = document.querySelector('.destroyer-container')
    const submarine = document.querySelector('.submarine-container')
    const cruise = document.querySelector('.cruise-container')
    const battleship = document.querySelector('.battleship-container')
    const carrier = document.querySelector('.carrier-container')
    const startButton = document.querySelector('#start')
    const rotateButton = document.querySelector('#rotate')
    const turnDisplay = document.querySelector('#whose-go')
    const infoDisplay = document.querySelector('#info')
    const userSquares = []

    const width = 10

    // create Boards
    function createBoard(grid, squares, width) {
        for (let i = 0; i < width*width; ++i) {
            const square = document.createElement('div')
            square.dataset.id = i
            grid.appendChild(square)
            userSquares.push(square)
        }
    }
    createBoard(userGrid, userSquares, width)

})