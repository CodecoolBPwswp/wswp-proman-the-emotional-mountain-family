// this object contains the functions which handle the data and its reading/writing
// feel free to extend and change to fit your needs

// (watch out: when you would like to use a property/function of an object from the
// object itself then you must use the 'this' keyword before. For example: 'this.data' below)
dataHandler = {
    data: {}, // it contains the boards and their cards and statuses
    loadTestData: function() {
        // uses sampleData from sample_data.js and puts it into the local storage
        // it should be called only once on a test environment
        // To use you have to import the sample_data.js file above this file in your html
    },
    loadData: function() {
        // loads data from local storage to this.data property
        // this.data = ...
    },
    saveData: function() {
        // saves the data from this.data to local storage
    },
    getBoards: function() {
        // returns the boards from this.data
    },
    getBoard: function(boardId) {
        // returns the board with the given id from this.data
    },
    getStatuses: function() {
        // returns the statuses from this.data
    },
    getStatus: function(statusId) {
        // returns the status with the given id from this.data
    },
    getCardsByBoardId: function(boardId) {
        // returns the cards from this.data which has the given board id
    },
    getCard: function(cardId) {
        // returns the card with the given id from this.data
    },
    createNewBoard: function(boardTitle) {
        // creates new board, saves it and returns its id
    },
    createNewCard: function(cardTitle, boardId, statusId) {
        // creates new card for the given board, saves it and returns its id
    }
    // here comes more features
}
