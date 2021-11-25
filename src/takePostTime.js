function takePostTime(timestamp) {

    const date = new Date();

    const postTimestamp = timestamp * 1000;
    const currentTimestamp = date.getTime();

    const seconds = Math.floor((currentTimestamp - postTimestamp) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const daysOfTheMonth = (y, m) => new Date(y, m, 0).getDate();
    const daysOfTheYear = 337 + daysOfTheMonth(date.getFullYear(), 2);
    const averageOfTheDaysOfTheYear = (daysOfTheYear) / 12
    
    const months = Math.floor(days / averageOfTheDaysOfTheYear)
    const years = Math.floor(months / 12)

    let indicator = "segundo";
    let time = seconds;

    if(years !== 0) {
        indicator = "ano"
        time = years
    } else if(months !== 0) {
        indicator = "mês"
        time = months
    } else if(days !== 0) {
        indicator = "dia"
        time = days;
    } else if(hours !== 0) {
        indicator = "hora"
        time = hours
    } else { 
        indicator = "minuto"
        time = minutes
    }

    if(time > 1) {
        if(indicator === "mês") {
            indicator = "meses"
        } else {
            indicator += "s"
        }
    }

    return `${time} ${indicator}`

}

module.exports = takePostTime;
