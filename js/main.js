var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getDate(){
	var currDate = new Date();
    currDay = days[currDate.getDay()];
    document.getElementById('date').innerHTML = `Today is a ${currDay}`;
}
getDate();
