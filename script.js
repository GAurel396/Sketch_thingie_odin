const board = document.querySelector(".board")
const draw_board = document.querySelector("#reset")
const square_colour = ["red", "blue", "green" ,"yellow", "purple", "cyan", "brown", "pink", "grey", "black"]

let row = 8
let column = 8

function drawBoard () {
    console.log("drawing board")
    let square = document.querySelectorAll(".square")
        square.forEach (square => square.remove()) 

    for (let i=0; i<column; i++) {
        let draw_column_div = document.createElement("div")
        draw_column_div.classList.add("columns_holder")
            for (let e=0; e<row; e++) {
            let draw_rows = document.createElement("div")
            draw_rows.classList.add("square")
            draw_column_div.appendChild(draw_rows)
            }
        board.appendChild(draw_column_div)  
        
        }
    }

    drawBoard()
    let square = document.querySelectorAll(".square")
    draw_board.addEventListener("click", drawBoard);

    square.forEach(square => square.addEventListener("click", drawingFunction))
    console.log(square)
    function drawingFunction() {
        console.log(event.tr)
        event.target.style.backgroundColor = "black"

    }
