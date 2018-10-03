// It uses data_handler.js to visualize elements
import {dataHandler} from "./data_handler.js";

export let dom = {

    init: function () {
        dataHandler.init();
    },
    loadBoards: function () {
        // retrieves boards and makes showBoards called
        dataHandler.getBoards(dom.showBoards);
    },
    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also
        for (let element of boards) {
            let boardHeader = document.createElement('div');
            boardHeader.className = 'board-header';
            let boardID = element.title;
            boardHeader.id = boardID;
            let titleHeader = document.createElement('h4');
            titleHeader.className = 'mb-0';
            let titleText = document.createElement('button');
            titleText.className = 'btn btn-link';
            titleText.setAttribute('type', 'button');
            titleText.setAttribute('data-toggle', 'collapse');
            titleText.setAttribute('data-target', '#collapseOne');
            titleText.setAttribute('aria-expanded', 'true');
            titleText.setAttribute('aria-controls', 'collapseOne');
            let title = element.title;
            let titleFromData = document.createTextNode(title);
            titleText.appendChild(titleFromData);
            titleHeader.appendChild(titleText);
            boardHeader.appendChild(titleHeader);

            let collapsContainer = document.createElement('div');
            collapsContainer.setAttribute('id', 'collapseOne');
            collapsContainer.className = 'collapse show';
            collapsContainer.setAttribute('aria-labelledby', boardID);
            collapsContainer.setAttribute('data-parent', '#boards');
            let cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            let row = document.createElement('div');
            row.className = 'row';
            let some_text = document.createTextNode("nice things");
            row.appendChild(some_text);
            cardBody.appendChild(row);
            collapsContainer.appendChild(cardBody);


            let boardsDiv = document.getElementById('boards');
            boardsDiv.appendChild(boardHeader);
            boardsDiv.appendChild(collapsContainer);
        }
    },
    loadStatuses: function () {
        dataHandler.getStatuses(dom.showBoards);
    },

    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
        dataHandler.getCardsByBoardId(dom.showCards)
    },
    showCards: function (cards) {
        // shows the cards of a board
        // it adds necessary event listeners also
        console.log(cards);
    },
    appendToElement: function (elementToExtend, textToAppend, prepend = false) {
        // function to append new DOM elements (represented by a string) to an existing DOM element
        let fakeDiv = document.createElement('div');
        fakeDiv.innerHTML = textToAppend.trim();

        for (let childNode of fakeDiv.childNodes) {
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
