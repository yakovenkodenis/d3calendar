let monthNames = (function() {
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ];

    const days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday',
    ];

    return {
        getMonth: n => {
            return months[n + 1]
        },

        dayNames: days
    }
})();

export default monthNames;