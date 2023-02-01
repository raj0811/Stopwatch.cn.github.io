const clock = document.getElementById("stopwatch");

// initializing variables for seconds, minuites and hours
let sec = 0, min = 0, hr = 0,ms=0,check=0;

//  initialize variable interval to store setInterval() so that we can clear it later 
let intervalId;

// function for start button
const startTimer = () => {
    // initializing an interval for 1 second

    if(check==1){
        alert('already running')
    }
    else{
    intervalId = setInterval(() => {

        check = 1;
        if(ms<999){
            ms=ms+10;
        }
        else if (sec >= 59) {
            min++;
            sec= 0;
        } else if (min >= 59) {
            hr++;
            min = 0;
        }
        else {
            ms=0;
            sec++;
            
        }
    

        /* padStart() s used to pad a string with another string until it reaches the given length
         here padstart helps us to maintain 2 digits in sec min and hr in our stopwatch here we convert our variable 
        into string first because padStart works with sting */

        const milisec= String(ms).padStart(4,"0");
        const seconds = String(sec).padStart(2, "0");
        const minutes = String(min).padStart(2, "0");
        const hours = String(hr).padStart(2, "0");
    
        clock.innerText = `${hours}:${minutes}:${seconds}:${milisec}`
    
        // console.log(`${hours}:${minutes}:${seconds}`);
    }, 10)
}
}

const stopTimer = () => {
    clearInterval(intervalId);
}

const resetTimer = () => {
    clearInterval(intervalId);
    clock.innerText = "00:00:00"
    sec = 0, min = 0, hr = 0,ms=0,check=0;

}