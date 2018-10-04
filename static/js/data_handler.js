
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
        localStorage.setItem(dataHandler.keyInLocalStorage, JSON.stringify(this._data));
    },
    init: function() {
        this._loadData();
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
    },
    getStatus: function(statusId, callback) {
        // the status is retrieved and then the callback function is called with the status
    },
    getCardsByBoardId: function(boardId, callback) {
        // the cards are retrieved and then the callback function is called with the cards
    },
    getCard: function(cardId, callback) {
        // the card is retrieved and then the callback function is called with the card
    },
    createNewBoard: function(boardTitle, callback) {
        // creates new board, saves it and calls the callback function with its data
        //create new board object +
        //save obj into _data
        //call savedData funct.
        let newBoardId = dataHandler._data.boards.length;

        let board = {"id": (newBoardId + 1), "title": boardTitle, "is_active": true};
        dataHandler._data.boards.push(board);
        this._saveData();
        callback(board)
    },
    createNewCard: function(cardTitle, boardId, statusId, callback) {
        // creates new card, saves it and calls the callback function with its data
    }
    // here comes more features
};
