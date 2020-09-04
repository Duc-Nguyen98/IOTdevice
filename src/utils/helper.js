
const handleHelper = {
    timeConverter: function (UNIX_timestamp) {
        let a = new Date(UNIX_timestamp * 1000);
        var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Satur"];
        var day = days[a.getDay()]; 
        // let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        // let month = months[a.getMonth()];
        let month = parseInt(a.getMonth()) + 1;
        let date = a.getDate();
        if(date < 10){date = `0${date}`}
        if(month < 10){month = `0${month}`}
        let year = a.getFullYear();
        let time = `${day}, ${date}-${month}`;
        return time
    },
    convertKtoC : function(value){
        return Math.round(value- 273.15);
    }
}

module.exports = handleHelper;