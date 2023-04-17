// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

//added constants of book1-3 to contain four properties that reference specific HTML elements related to each book

const book1 = {
status: document.querySelector('#book1 .status'), //'status' is a reference to the HTML element with a class of status within the element with an ID of book1
reserve: document.querySelector('#book1 .reserve'),   //'reserve' is a reference to the HTML element with a class of reserve within the element with an ID of book1
checkout: document.querySelector('#book1 .checkout'),   //'check-out' is a reference to the HTML element with a class of check-out within the element with an ID of book1
checkin: document.querySelector('#book1 .checkin')   //'check-in' is a reference to the HTML element with a class of check-in within the element with an ID of book1
}

const book2 = {
status: document.querySelector('#book2 .status'),   //'status' is a reference to the HTML element with a class of status within the element with an ID of book2
reserve: document.querySelector('#book2 .reserve'),  //'reserve' is a reference to the HTML element with a class of reserve within the element with an ID of book2
checkout: document.querySelector('#book2 .checkout'), //check-out' is a reference to the HTML element with a class of check-out within the element with an ID of book2
checkin: document.querySelector('#book2 .checkin')  //'check-in' is a reference to the HTML element with a class of check-in within the element with an ID of book2
}

const book3 = {
    status: document.querySelector('#book3 .status'),   //'status' is a reference to the HTML element with a class of status within the element with an ID of book3
    reserve: document.querySelector('#book3 .reserve'),  //'reserve' is a reference to the HTML element with a class of reserve within the element with an ID of book3
    checkout: document.querySelector('#book3 .checkout'), //'check-out' is a reference to the HTML element with a class of check-out within the element with an ID of book3
    checkin: document.querySelector('#book3 .checkin')  //'check-in' is a reference to the HTML element with a class of check-in within the element with an ID of book3
    }

    //added the function of updateBookStatus
    //the function takes a book object as an argument and uses te STATUS_MAP object to update the attributes of the book elements.
    
 function updateBookStatus(book) {
    const status = book.status.textContent.trim()
    const statusInfo = STATUS_MAP[status]

    book.status.style.color = statusInfo.color
    book.reserve.disabled = !statusInfo.canReserve
    book.checkout.disabled = !statusInfo.canCheckout
    book.checkin.disabled = !statusInfo.canCheckIn
}

//this code is updating the status of 3 different books by calling the updateBookStatus function with each book object.
updateBookStatus(book1)
updateBookStatus(book2)
updateBookStatus(book3) 


const overdue = book1.checkin                        //declare the 'overdue' constant
const reserveCheckout = overdue.style.color = ''     //sets the style color to an empty string, effectively resetting the color to the default.

const reserved = book2.checkin                         //declare the 'reserved' constant
const reserveCheckin = reserved.style.color = ''       //sets the style color to an empty string, effectively resetting the color to the default.

const shelf = book3.checkin                           //declare the 'shelf' constant
const checkIn = shelf.style.color = ''                //sets the style color to an empty string, effectively resetting the color to the default.
