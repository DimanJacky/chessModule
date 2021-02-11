import {game} from "./game";
import {figureArr} from "./figureArr";

console.log('App   ');

const init = () => {
    // заполнение свойства figures значениями места фигур

    for(let item of figureArr) {
        game.figures.push({fromi: item.fromi, fromj: item.fromj, colorwhite: item.colorwhite, type: item.type, id: item.id, name: item.name, counthod: item.counthod});
    }
}

const render = () => {
    const chess = document.getElementById("chess"); // Создаётся поле

    const chessi = [];

    let div, div1, divin; // переменная для внутренних div, чтобы вставлять фигуру

    for (let i = 1; i <= 8; i++) {
        chessi[i] = [];
        for (let j = 1; j <= 8; j++) {
            chessi[i][j] = document.createElement('div'); // Создание поля

            div = document.createElement('div'); // переменная для внутренних div чтобы вставить через background фигуру
            div.className = "chessi" + i + j + 1; // в класс добавляем 1

            divin = document.createElement('div'); // переменная для внутренних div чтобы вставить через background фигуру при ходе
            divin.className = "chessi" + i + j + "in"; // в класс добавляем in

            div1 = document.createElement('div'); // переменная для внутренних div чтобы вставить доступные поля
            div1.className = "chessi" + i + j + 1 + 1; // в класс добавляем 11

            chessi[i][j].className = "chessi" + i + j; // в класс добавляем координаты
            chessi[i][j].style.float = "left";
            chessi[i][j].style.backgroundColor = (i + j) % 2 == 0 ? "white": "brown";

            div.append(div1);
            divin.append(div);
            chessi[i][j].append(divin);
            chess.append(chessi[i][j]);
        }
    }

// рисование фигур

    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            for(let item of figureArr) {
                if (item.fromi == i && item.fromj == j) {
                    document.getElementsByClassName("chessi" + i + j + "1")[0].style.background = "url(src/images/" + item.name + ".png) no-repeat";
                }
            }
        }
    }
}

init();

render();



chess.addEventListener('click', () => {
    // сюда вставляем метод render
    console.log('click');
});


