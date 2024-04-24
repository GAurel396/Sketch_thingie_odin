const board = document.querySelector(".board")
const draw_board = document.querySelector("#redraw")
const square_colour = ["red", "blue", "green" ,"yellow", "purple", "cyan", "brown", "pink", "grey", "black"]
const hover_toggle = document.querySelector("#hover")
let hover = false
let row = 16
let column = 16

function drawBoard () {
    console.log("drawing board")
    let draw_rows_div = document.querySelectorAll(".columns_holder")
    draw_rows_div.forEach (row_holder => row_holder.remove()) 

    for (let i=0; i<row; i++) {
        let draw_rows_div = document.createElement("div")
        draw_rows_div.classList.add("columns_holder")
            for (let e=0; e<column; e++) {
            let draw_columns = document.createElement("div")
            draw_columns.classList.add("square")
            draw_rows_div.appendChild(draw_columns)
            }
        
        board.appendChild(draw_rows_div)  
        
    }
}

drawBoard()
let square = document.querySelectorAll(".square")

function redrawBoard () {
        let prompted_row = prompt("Please select a number of rows:" , 16)
        prompted_row = Number(prompted_row)
        if (isNaN(prompted_row)) {
            alert("Please put a valid number")
            prompted_row = prompt("Please select a number of rows:" , 16)
        }

        if (prompted_row > 100 ) {
            alert("Less than that please, do not make your browser explode.")
            prompted_row = prompt("Please select a number of rows:" , 16)
        }

        if (prompted_row == 0) {
            prompted_row = 16
        }

        console.log(prompted_row)
        row = prompted_row

        let prompted_column = prompt("Please select a number of columns:" , 16)
        prompted_column = Number(prompted_column)
        if (isNaN(prompted_column)) {
            alert("Please put in valid number")
            prompted_column = prompt("Please select a number of columns:" , 16)
        }
        
        if (prompted_column > 100 ) {
            alert("Less than that please, do not make your browser explode.")
            prompted_column = prompt("Please select a number of columns:" , 16)
        }

        if (prompted_column == 0) {
            prompted_column = 16
        }
        console.log(prompted_column)
        column = prompted_column

        drawBoard ()
}
draw_board.addEventListener("click", redrawBoard);


board.addEventListener("click", drawingFunction)
hover_toggle.addEventListener("click", hoverMove)    

function hoverMove () {
    hover = !hover
    if (hover) {
        board.removeEventListener("click", drawingFunction)
        board.addEventListener("mouseover", drawingFunction)
        hover_toggle.classList.add("hover_on")
    } else {
        board.removeEventListener("mouseover", drawingFunction)
        board.addEventListener("click", drawingFunction)
        hover_toggle.classList.remove("hover_on")
        }
    }        

    function randomize_rbg () {
        let random_r = Math.floor(Math.random()*256)
        let random_b = Math.floor(Math.random()*256)
        let random_g = Math.floor(Math.random()*256)
        return("rgb("+ random_r + "," + random_b + "," + random_g + ")")
    }
    function drawingFunction(event) {
        if (event.target.classList.contains("square")) {
            //let random_colour = Math.floor(Math.random() * (square_colour.length + 1))
            event.target.style.backgroundColor = randomize_rbg()
        }

    }
   