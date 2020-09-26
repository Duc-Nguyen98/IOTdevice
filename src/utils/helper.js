const handleHelper = {
  timeConverter: function (UNIX_timestamp) {
    const a = new Date(UNIX_timestamp * 1000);
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Satur'];
    let day = days[a.getDay()];
    // let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // let month = months[a.getMonth()];
    let month = parseInt(a.getMonth()) + 1;
    let date = a.getDate();
    if (date < 10) {
      date = `0${date}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    let year = a.getFullYear();
    let time = `${day}, ${date}-${month}`;
    return time;
  },
  convertKtoC: function (value) {
    return Math.round(value - 273.15);
  },
  dateConverter: function (UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Satur'];
    let day = days[a.getDay()];
    let time = `${day}`;
    return time;
  },
  datePickerDefault: function (UNIX_timestamp) {
    const a = UNIX_timestamp;
    let month = parseInt(a.getMonth()) + 1;
    let date = a.getDate();
    if (date < 10) {
      date = `0${date}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    let year = new Date().getFullYear();
    let time = `${date}/${month}/${year}`;
    return time;
  },
};

module.exports = handleHelper;
