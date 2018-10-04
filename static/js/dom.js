// It uses data_handler.js to visualize elements
import {dataHandler} from "./data_handler.js";

export let dom = {

    init: function () {
        dataHandler.init();
    },
    initModals: function () {
        let button = document.getElementById("saveNewBoard");
        button.addEventListener('click', function () {
            let newBoard = document.getElementById("newBoardTitle");
            let newBoardTitle = newBoard.value;
            dataHandler.createNewBoard(newBoardTitle, dom.showBoard)
        });
    },

    loadBoards: function () {
        // retrieves boards and makes showBoards called
        dataHandler.getBoards(dom.showBoards);


    },
    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also
        let template = document.getElementById("handletest").innerHTML;
        let templateScript = Handlebars.compile(template);
        for (let board of boards) {
            let context = {"boardId": board.id, "boardTitle": board.title};
            let html = templateScript(context);
            document.getElementById("loadforbear").innerHTML += html;
            dom.loadCards(board.id)
        }
        dom.initModals();
    },

    showBoard: function (board) {
        let template = document.getElementById("handletest").innerHTML;
        let templateScript = Handlebars.compile(template);
        let context = {"boardId": board.id, "boardTitle": board.title};
        let html = templateScript(context);
        document.getElementById("loadforbear").innerHTML += html;
    },

    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
        dataHandler.getCardsByBoardId(boardId, dom.showCards)
    },
    showCards: function (cards) {
        // shows the cards of a board
        // it adds necessary event listeners also

        for (let card of cards) {
            let boardID = card.board_id;
            let statusId = card.status_id;
            let progress1 = document.getElementById('new-' + boardID);
            let newField = Number(progress1.dataset.order);
            if (statusId === newField) {
                document.getElementById('new-' + boardID).style.visibility = 'visible';
                let newCard = document.createElement('div');
                newCard.className = 'task';
                let cardTitle = document.createTextNode(card.title);
                newCard.appendChild(cardTitle);
                let element = document.getElementById('new-' + boardID);
                element.appendChild(newCard);
            }
            let progress2 = document.getElementById('inprog-' + boardID);
            let inProgField = Number(progress2.dataset.order);
            if (statusId === inProgField) {
                document.getElementById('inprog-' + boardID).style.visibility = 'visible';
                let newCard = document.createElement('div');
                newCard.className = 'task';
                let cardTitle = document.createTextNode(card.title);
                newCard.appendChild(cardTitle);
                let element = document.getElementById('inprog-' + boardID);
                element.appendChild(newCard);
            }
            let progress3 = document.getElementById('test-' + boardID);
            let testField = Number(progress3.dataset.order);
            if (statusId === testField) {
                document.getElementById('test-' + boardID).style.visibility = 'visible';
                let newCard = document.createElement('div');
                newCard.className = 'task';
                let cardTitle = document.createTextNode(card.title);
                newCard.appendChild(cardTitle);
                let element = document.getElementById('test-' + boardID);
                element.appendChild(newCard);
            }
            let progress4 = document.getElementById('done-' + boardID);
            let doneField = Number(progress4.dataset.order);
            if (statusId === doneField) {
                document.getElementById('done-' + boardID).style.visibility = 'visible';
                let newCard = document.createElement('div');
                newCard.className = 'task';
                let cardTitle = document.createTextNode(card.title);
                newCard.appendChild(cardTitle);
                let element = document.getElementById('done-' + boardID);
                element.appendChild(newCard);
            }
        }
    },
    appendToElement: function (elementToExtend, textToAppend, prepend = false) {
        // function to append new DOM elements (represented by a string) to an existing DOM element
        let fakeDiv = document.createElement('div');
        fakeDiv.innerHTML = textToAppend.trim();

        for (childNode of fakeDiv.childNodes) {
            if (prepend) {
                elementToExtend.prependChild(childNode);
            } else {
                elementToExtend.appendChild(childNode);
            }
        }

        return elementToExtend.lastChild;
    }
    // here comes more features
}
