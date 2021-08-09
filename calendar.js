window.onload = function(){
    displayEntireMonth();
}

//create a function to create a month with 31 days 
const displayEntireMonth = function(){
    // TODO: getting the actual current month
    // for now we just assume we're in July and there are 31 days

    //target parents container -> the month container
    let monthContainerNode = document.getElementById("month-Container")

    //for loop from day 1 to day 31
    for (let dayNumber = 1; dayNumber <= 31; dayNumber ++){ //assuming there are 31 days
        // create the child element -> actual day
        let newDayNode = document.createElement("div") 
        newDayNode.innerText = dayNumber
        //add a class to the day container
        newDayNode.classList.add("day")

        //on click
        // newDayNode.onclick = selectDay
        
        //put actual day into the month container - !we are still in the for loop
        monthContainerNode.appendChild(newDayNode)
    }
}


