const { question } = require("readline-sync");

let mat = Array(3).fill().map(() => Array(3).fill(0));
let control = 1;

let lineOne = "";
let lineTwo = "";
let lineThree = "";

let playerX = 0;
let playerO = 0;

while (control < 10) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i == 0)
                lineOne += mat[i][j] + "|";
            else if (i == 1)
                lineTwo += mat[i][j] + "|";
            else
                lineThree += mat[i][j] + "|";
        }
    }

    console.log(`———————\n|${lineOne}\n|—|—|—|\n|${lineTwo}\n|—|—|—|\n|${lineThree}\n———————`);
    console.log(`\n`);

    let line = question("Wich line do you want: ");
    let column = question("Wich column do you want: ");

    if (control % 2 == 0) {
        mat[line - 1][column - 1] = "O";
    }
    else
        mat[line - 1][column - 1] = "X";

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (mat[i][j] == "X")
                playerX++;
            if (mat[i][j] == "O")
                playerO++;
        }
        if (playerX == 3) {
            console.log("X wins!")
            return;
        }
        if (playerO == 3) {
            console.log("O wins!")
            return;
        }

        playerO = playerX = 0;
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (mat[j][i] == "X")
                playerX++;
            if (mat[j][i] == "O")
                playerO++;
        }
        if (playerX == 3) {
            console.log("X wins!")
            return;
        }
        if (playerO == 3) {
            console.log("O wins!")
            return;
        }

        playerO = playerX = 0;
    }

    if (mat[0][0] == "X" && mat[1][1] == "X" && mat[2][2] == "X" || mat[0][2] == "X" && mat[1][1] == "X" && mat[2][0] == "X") {
        console.log("X wins!")
        return;
    }
    if (mat[0][0] == "O" && mat[1][1] == "O" && mat[2][2] == "O" || mat[0][2] == "O" && mat[1][1] == "O" && mat[2][0] == "O") {
        console.log("O wins!")
        return;
    }

    lineOne = lineTwo = lineThree = "";
    control++;
}

console.log("Cat's Game!");
