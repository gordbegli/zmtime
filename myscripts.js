function convert(){
    let hours = parseInt(document.getElementById('hours_input').value);
    let minutes = document.getElementById('minutes_input').value;
    hours += 4;
    console.log(hours);  
    if(hours < 12){
        let output = ("= " + hours.toString() + ":" + minutes + " pm");
        document.getElementById('output').innerText = output;
    }
    if(hours = 12){
        let output = ("= " + hours.toString() + ":" + minutes + " am");
        document.getElementById('output').innerText = output;
    }
    if(hours > 12){
        hours -= 12;
        let output = ("= " + hours.toString() + ":" + minutes + " am");
        document.getElementById('output').innerText = output;
    }}