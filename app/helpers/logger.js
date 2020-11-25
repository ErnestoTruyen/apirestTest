
// Return current Day, Date, Time
function getCurrentDayDateTime() {
    const currentDate = new Date();
    return currentDate.toUTCString();
}

// This function will log info messages
function getInfo(message) {
    const infoMessage = `${getCurrentDayDateTime()} | Info | ${message}`;
    console.log(infoMessage);
}

// This function will log Error messages.
function getError(message) {
    const errorMessage = `${getCurrentDayDateTime()} | Error | ${message}`;
    console.log(errorMessage);
}

// Export modules
module.exports.info = getInfo;
module.exports.error = getError;