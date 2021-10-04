function convert(){
    let hours = parseInt(document.getElementById('hours_input').value);
    let minutes = document.getElementById('minutes_input').value;
    hours += 4;
    console.log(hours);  
    if(hours < 12){
        console.log("1");
        let output = ("= " + hours.toString() + ":" + minutes + " pm");
        document.getElementById('output').innerText = output;
    }
    else if(hours == 12){
        console.log("2");
        let output = ("= " + hours.toString() + ":" + minutes + " am");
        document.getElementById('output').innerText = output;
    }
    else if(hours > 12){
        console.log("3");
        hours -= 12;
        let output = ("= " + hours.toString() + ":" + minutes + " am");
        document.getElementById('output').innerText = output;
    }}