import { upload } from "./sample_data.js";
// this object contains the functions which handle the data and its reading/writing
// feel free to extend and change to fit your needs

// (watch out: when you would like to use a property/function of an object from the
// object itself then you must use the 'this' keyword before. For example: 'this._data' below)
export let dataHandler = {
    keyInLocalStorage: 'proman-data', // the string that you use as a key in localStorage to save your application data
    _data: {}, // it contains the boards and their cards and statuses. It is not called from outside.
    _loadData: function() {
        // it is not called from outside
        // loads data from local storage, parses it and put into this._data property
        dataHandler._data = JSON.parse(localStorage.getItem(dataHandler.keyInLocalStorage));
    },
    _saveData: function() {
        // it is not called from outside
        // saves the data from this._data to local storage
    },
    init: function() {
        this._loadData();
        //upload.uploadData()
    },
    getBoards: function(callback) {
        // the boards are retrieved and then the callback function is called with the boards
        let boards = dataHandler._data.boards;
        callback(boards);
    },
    getBoard: function(boardId, callback) {
        // the board is retrieved and then the callback function is called with the board
        let boards = dataHandler._data.boards;
        for (let board of boards) {
            if (boardId === board.id)
                callback(board)
        }
    },
    getStatuses: function(callback) {
        // the statuses are retrieved and then the callback function is called with the statuses
        let statuses = dataHandler._data.statuses;
        callback(statuses);
    },
    getStatus: function(statusId, callback) {
        // the status is retrieved and then the callback function is called with the status
        let statuses = dataHandler._data.statuses;
        for (let status of statuses) {
            if (statusId === status.id)
                callback(status)
        }
    },
    getCardsByBoardId: function(boardId, callback) {
        // the cards are retrieved and then the callback function is called with the cards
        let cards = dataHandler._data.cards;
        for (let card of cards) {
            if (boardId === card.board_id)
                callback(card)
        }
    },
    getCard: function(cardId, callback) {
        // the card is retrieved and then the callback function is called with the card
        let cards = dataHandler._data.cards;
        for (let card of cards) {
            if (cardId === card.id)
                callback(card)
        }
    },
    createNewBoard: function(boardTitle, callback) {
        // creates new board, saves it and calls the callback function with its data
    },
    createNewCard: function(cardTitle, boardId, statusId, callback) {
        // creates new card, saves it and calls the callback function with its data
    }
    // here comes more features
};
