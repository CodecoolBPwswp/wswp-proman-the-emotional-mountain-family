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
        for (let board of boards) {
            dom.showBoard(board);
            dom.loadCards(board.id);
        }
        let dropable = Array.from(document.getElementsByClassName('divContainer'));
        dragula(dropable);
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

        function cardToTable(boardID, statusId, classname, card) {
            let progress1 = document.getElementById(classname + boardID);
            let newField = Number(progress1.dataset.order);
            if (statusId === newField) {
                //document.getElementById('new-' + boardID).style.visibility = 'visible';
                let newCard = document.createElement('div');
                newCard.className = 'task';
                let cardTitle = document.createTextNode(card.title);
                newCard.appendChild(cardTitle);
                let element = document.getElementById(classname + boardID);
                element.appendChild(newCard);
            }
        }

        for (let card of cards) {
            let boardID = card.board_id;
            let statusId = card.status_id;
            cardToTable(boardID, statusId, 'new-', card);
            cardToTable(boardID, statusId, 'inprog-', card);
            cardToTable(boardID, statusId, 'test-', card);
            cardToTable(boardID, statusId, 'done-', card);
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
