// It uses data_handler.js to visualize elements
import { dataHandler } from "./data_handler.js";

export let dom = {

    init: function() {
        dataHandler.init();
    },
    loadBoards: function() {
        // retrieves boards and makes showBoards called
    dataHandler.getBoards(dom.showBoards);
    },
    showBoards: function(boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also
    let template = document.getElementById("boardTemplate").innerHTML;
    let templateScript = Handlebars.compile(template);
    for ()
        let context = {"boardid" = "<div>board[i].id}<div>";
        let html = templateScript(context);
    document.getElementById("loadboard").innerHTML

    },
    loadCards: function(boardId) {
        // retrieves cards and makes showCards called
    },
    showCards: function(cards) {
        // shows the cards of a board
        // it adds necessary event listeners also
    },
    appendToElement: function(elementToExtend, textToAppend, prepend = false) {
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
