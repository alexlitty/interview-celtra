/**
 * Ensures a value is numeric and finite.
 *
 * Returns true if the value if a number or a numeric string, false otherwise.
 */
function isNumeric(value) {
    
    // Force the value to be a number.
    v = +value;

    // Not a number.
    if (isNaN(v)) {
        return false;
    }

    // Infinite number.
    if (!isFinite(v)) {
        return false;
    }

    // Value is numeric and finite.
    return true;

}
/**
 * Primary game object.
 *
 * Controls the flow of the game.
 */
function Game() {

    // An "enumeration" of possible game states.
    this.STATES = {
        ERROR: 0,
        TITLE: 1,
        PLAY: 2,
        RESULT: 3
    };

    // Current game state.
    this.state = this.STATES.TITLE;

    // Validate FPS setting.
    if (!isNumeric(config.fps)) {
        this.stop("Invalid FPS");
        return;
    }

    // Calculate the interval needed to get our target framerate.
    var loopInterval = (1 / config.fps);

    // Convert the interval to milliseconds.
    loopInterval *= 1000;

    // Start the game.
    this.intervalHandle = setInterval(this.execute.bind(this), loopInterval);

}


/**
 * Moves the gameplay into a different state.
 */
Game.prototype.toState = function(state) {

}


/**
 * Halts the game and displays an error.
 */
Game.prototype.stop = function(msg) {

    // Stop main loop.
    clearInterval(this.intervalHandle);

    // Set error state.
    this.state = this.STATES.ERROR;

    // Set error message.
    getElement("state-error").innerHTML = msg;
}


/**
 * Executes a single frame of the game.
 */
Game.prototype.execute = function() {
    this.stop("Testing");

    console.log("executing");


    if (this.state === this.STATES.ERROR) {
    }

    else if (this.state === this.STATES.TITLE) {
        this.title(); 
    }

    else {
        this.stop("Invalid game state");
    }
}


/**
 * Executes a single frame of the title screen.
 */
Game.prototype.title = function() {
}
/**
 * Adds a class to an element.
 */
function addClass(element, name) {
    element.className = name;
}


/**
 * Removes a class from an element.
 */
function removeClass(element, name) {
    var regex = new RegExp('(?:^|\\s)' + name + '(?!\\S)', 'g');

    element.className = element.className.replace(regex, '');
}


/**
 * Retrieves an element by its ID.
 */
var getElement = document.getElementById.bind(document);


/**
 * Hides an element.
 */
function hideElement(element) {
    element.className += 'hidden';
}


/**
 * Un-hides an element.
 */
function showElement(element) {
    element.className -= 'hidden';
}
/**
 * Configuration settings for the game and its underlying engine.
 */
var config = {

    // The desired frames per second.
    fps: 30

};
