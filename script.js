const board = document.querySelector(".board")
const draw_board = document.querySelector("#reset")
const square_colour = ["red", "blue", "green" ,"yellow", "purple", "cyan", "brown", "pink", "grey", "black"]
const hover_toggle = document.querySelector("#hover")
let hover = false
let row = 16
let column = 16

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



    /*hover_toggle.addEventListener("click", function(){
        if (hover = false) {
            hover = true
            hover.classList.add("hover_on")
        } else {
            hover = false
            hover.classList.remove("hover_on")
        }
    }) */
    draw_board.addEventListener("click", drawBoard);
    /* if (hover = true) {
        square.forEach(square => square.addEventListener("mouseover", drawingFunction))
    } else  {} */
        square.forEach(square => square.addEventListener("click", drawingFunction))
        
    function drawingFunction() {
        let random_colour = Math.floor(Math.random() * (square_colour.length + 1))
        event.target.style.backgroundColor = square_colour[random_colour]

    }
