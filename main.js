let lenght;
let corner;
let row;
let column;
let maxNumber

do {
    lenght = +prompt("Enter the lenght of the array from 2 to 30.");
    if(isNaN(lenght) || 2 > lenght || lenght > 30) alert("You entered the wrong number.");
} while(isNaN(lenght) || 2 > lenght || lenght > 30);

do {
    maxNumber = +prompt("Enter the max number of the matrix (less than 100)");
    if(isNaN(maxNumber) || maxNumber > 100) alert("You entered the wrong number.");
} while(isNaN(maxNumber) || maxNumber > 100);

do {
    corner = +prompt("Enter the upper right corner number.");
    if(isNaN(corner) || corner > maxNumber) alert("You entered the wrong number.");
} while(isNaN(corner) || corner > maxNumber);

do {
    row = +prompt(`Enter the number of the row the sum of which you want me to count. (Less than ${lenght})`);
    if(isNaN(row) || lenght < row || 0 >= row) alert("You entered the wrong number.");
} while(isNaN(row) || lenght < row || 0 >= row);

do {
    column = +prompt(`Enter the number of the column the sum of which you want me to count. (Less than ${lenght})`);
    if(isNaN(column) || lenght < column || 0 >= column) alert("You entered the wrong number.");
} while(isNaN(column) || lenght < column || 0 >= column);

let arr = [];
for(let i = 0; i < lenght; i++) {
    arr[i] = [];
    for(let j = 0; j < lenght; j++) {
        if(i == 0 && j == (lenght - 1)) {
            arr[i][j] = corner;
        } else {
            arr[i][j] = Math.floor(Math.random() * maxNumber);
        }
    }
}

for(let i = 0; i < lenght; i++) {
    for(let j = 0; j < lenght; j++) {
            document.write(`<span>${arr[i][j]}</span>`);
    }
    document.write("<br>");
}
document.write(`<p>Matrix</p>`);

// 1. Sum of the main diagonal.
let diagSum = 0;
for(let i = 0; i < lenght; i++) {
    for(let j = 0; j < lenght; j++) {
        if(i == j) {
            diagSum += arr[i][j];
            document.write(`<span class="color">${arr[i][j]}</span>`);
        } else {
            document.write(`<span>${arr[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>1. Sum of the main diagonal = ${diagSum}</p>`);

// 2. Sum of the secondary diagonal.
let secondDiagSum = 0;
for(let i = 0; i < lenght; i++) {
    for(let j = 0; j < lenght; j++) {
        if(i + j == (lenght - 1)) {
            secondDiagSum += arr[i][j];
            document.write(`<span class="color">${arr[i][j]}</span>`);
        } else {
            document.write(`<span>${arr[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>2. Sum of the secondary diagonal = ${secondDiagSum}</p>`);

// 3. Sum of the right upper half of the matrix without main diagonal.
let upHalfSum = 0;
for(let i = 0; i < lenght; i++) {
    for(let j = 0; j < lenght; j++) {
        if(i < j) {
            upHalfSum += arr[i][j];
            document.write(`<span class="color">${arr[i][j]}</span>`);
        } else {
            document.write(`<span>${arr[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>3. Sum of the right upper half of the matrix without main diagonal = ${upHalfSum}</p>`);

// 4. Sum of the right upper half of the matrix with main diagonal.
let fullUpHalfSum = 0;
for(let i = 0; i < lenght; i++) {
    for(let j = 0; j < lenght; j++) {
        if(i <= j) {
            fullUpHalfSum += arr[i][j];
            document.write(`<span class="color">${arr[i][j]}</span>`);
        } else {
            document.write(`<span>${arr[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>4. Sum of the right upper half of the matrix with main diagonal = ${fullUpHalfSum}</p>`);


// 5. Sum of the left lower half of the matrix without main diagonal.
let lowHalfSum = 0;
for(let i = 0; i < lenght; i++) {
    for(let j = 0; j < lenght; j++) {
        if(i > j) {
            lowHalfSum += arr[i][j];arr
            document.write(`<span class="color">${arr[i][j]}</span>`);
        } else {
            document.write(`<span>${arr[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>5. Sum of the left lower half of the matrix without main diagonal = ${lowHalfSum}</p>`);

// 6. Sum of the left lower half of the matrix with main diagonal.
let fullLowHalfSum = 0;
for(let i = 0; i < lenght; i++) {
    for(let j = 0; j < lenght; j++) {
        if(i >= j) {
            fullLowHalfSum += arr[i][j];
            document.write(`<span class="color">${arr[i][j]}</span>`);
        } else {
            document.write(`<span>${arr[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>6. Sum of the left lower half of the matrix with main diagonal = ${fullLowHalfSum}</p>`);

// 7. Sum of the left upper half of the matrix without secondary diagonal.
let leftUpHalfSum = 0;
for(let i = 0; i < lenght; i++) {
    for(let j = 0; j < lenght; j++) {
        if(i + j < (lenght - 1)) {
            leftUpHalfSum += arr[i][j];
            document.write(`<span class="color">${arr[i][j]}</span>`);
        } else {
            document.write(`<span>${arr[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>7. Sum of the left upper half of the matrix without secondary diagonal = ${leftUpHalfSum}</p>`);

// 8. Sum of the left upper half of the matrix with secondary diagonal.
let fullLeftUpHalfSum = 0;
for(let i = 0; i < lenght; i++) {
    for(let j = 0; j < lenght; j++) {
        if(i + j <= (lenght - 1)) {
            fullLeftUpHalfSum += arr[i][j];
            document.write(`<span class="color">${arr[i][j]}</span>`);
        } else {
            document.write(`<span>${arr[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>8. Sum of the left upper half of the matrix with secondary diagonal = ${fullLeftUpHalfSum}</p>`);

// 9. Sum of the right lower half of the matrix without secondary diagonal.
let rightLowHalfSum = 0;
for(let i = 0; i < lenght; i++) {
    for(let j = 0; j < lenght; j++) {
        if(i + j > (lenght - 1)) {
            rightLowHalfSum += arr[i][j];
            document.write(`<span class="color">${arr[i][j]}</span>`);
        } else {
            document.write(`<span>${arr[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>9. Sum of the right lower half of the matrix without secondary diagonal = ${rightLowHalfSum}</p>`);

// 10. Sum of chosen row.
let rowSum = 0;
for(let i = 0; i < lenght; i++) {
    for(let j = 0; j < lenght; j++) {
        if(i == (row - 1)) {
            rowSum += arr[i][j];
            document.write(`<span class="color">${arr[i][j]}</span>`);
        } else {
            document.write(`<span>${arr[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>10. Sum of row ${row} = ${rowSum}</p>`);

// 11. Sum of chosen column.
let colSum = 0;
for(let i = 0; i < lenght; i++) {
    for(let j = 0; j < lenght; j++) {
        if(j == (column - 1)) {
            colSum += arr[i][j];
            document.write(`<span class="color">${arr[i][j]}</span>`);
        } else {
            document.write(`<span>${arr[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>11. Sum of column ${column} = ${colSum}</p>`);




// the background))
var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = 2920.800;
c.width = window.innerWidth;

var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size; 
var drops = [];
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

    function draw()
    {
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#0f8f11";
        ctx.font = font_size + "px arial";
        for(var i = 0; i < drops.length; i++){
            var text = matrix[Math.floor(Math.random()*matrix.length)];
            ctx.fillText(text, i*font_size, drops[i]*font_size);

            if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
            drops[i]++;
        }
}

setInterval(draw, 35);