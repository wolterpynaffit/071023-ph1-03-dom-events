const exitButton = document.querySelector('.exit-button')
const file = document.querySelector(".file-options span:nth-child(1)")




/*---------------------- exit window  ---------------------------- */
function handleClick(){
   const window  = document.querySelector('#message-window');
   window.remove()
}

exitButton.addEventListener('click', handleClick)


/*---------------------- say hello ---------------------------- */


function sayHello(){
    console.log('hello')
}

file.addEventListener('click', sayHello)


// - When the `<span>` for `Profile` is hovered over a `console.log` appears that reads: `Welcome current user! We value your patronage!`




// const fileSpan = document.querySelector('#file')

// fileSpan.addEventListener('click', function()


/*---------------------- say hello ---------------------------- */
// const messageContainer = document.querySelector('.messages')
// const newForm = document.querySelector(".message-form")


// newForm.addEventListener("submit", (e) => {
//     e.preventDefault() // keeps the browser from refreshing
//     const box = document.createElement("p")
    
//     const currentDate = new Date();
//     const dateMinutes = currentDate.getMinutes()
//     const dateHours = currentDate.getHours()

//     const timeSpan = document.createElement('span')
//     timeSpan.textContent = `${dateHours}:${dateMinutes} `
//     timeSpan.className = "blue-text" 





//     box.textContent =  e.target.messageInput.value
//     box.prepend(timeSpan)

//     messageContainer.appendChild(box)
//     // box.addEventListener('click', () => newPar.remove)
// })


// this line gives access to the white text box 
const whiteContainer = document.querySelector('.messages')
// this line gives access to the submit container
const submitContainer = document.querySelector('.message-form')

//giving the submit container an event lister of submit + adding inn a function
    // this function is meant to:
    // create a container p element to hold the inputed text
    // 
submitContainer.addEventListener("submit", (e) => {
    e.preventDefault() // this will prevent refresh by accessing a default behavior of the submit event which tells the browser to refresh. We are overriding this by accessing "event" and telling it to preventDefault which will override the refresh.
    const newP = document.createElement('p') // this line of code will create container element to hold inputed text as a 'p'
    newP.textContent = e.target.messageInput.value // this line assigns the newly created p element and sets it equal to the inputed text submitted. Note that e gives us access to the event object. Within the event object is a property called target. We can think of target as the point of reference/the action point.  e.target is saying: within the event object, access the "action point". messageInput is a value that we have assigned in the index.html file. by accessing message input, we gain access to the submit message field (the area where you type something to be submitted) At this point. we have (e.target.messageInput) This line is saying from the event object, access a property that will allow us to get access to the point of action - the point of action, that we've defined here is called "messageInput". Note that in the index.html, we've used name to identify this text box. We can also use ID as an identifier as well. The value is a property that we can access in the document. It allows us to manipulate the text. If we use innerText here, something weird will happen. Just note that when piecing together the submit form, use value instead.
    //This line of code is giving the newP inputed text "value"
    whiteContainer.appendChild(newP) // this line of code attaches the text that we have submitteed to the white container

    // // ADDING IN A TIMESTAMP
    const newDate = new Date()
    const hours = newDate.getHours()
    const minutes = newDate.getMinutes()
    const currentTime = `${hours}:${minutes} `
    
    const timeSpan = document.createElement('span')
    timeSpan.textContent = currentTime
    timeSpan.className = "blue-text"

    newP.prepend(timeSpan)

    // to add in the time stamp, we first need to access the Date method: this method contains access to date properties such as (month, day, year, hours, seconds, minutes etc... and geo location) store in a variable so we can access it.

    // with this newly created variable. access both the hours and minutes and store that in its own variable.

    // we need to crate a span element so that we can embed this "logic" into our 

})





// - When the `message-form` is submitted add a new `<p>` to the `messages` div with whatever was typed into the input

// - _BONUS_: The new `<p>` for the message is prepended with a `<span>` that includes the timestamp and the class name `blue-text`

// - _SUPER BONUS_: When a `<p>` message is clicked, remove the message from the DOM




/*---------------------- say hello ---------------------------- */

/*---------------------- say hello ---------------------------- */


/*---------------------- say hello ---------------------------- */

/*---------------------- say hello ---------------------------- */

/*---------------------- say hello ---------------------------- */

/*---------------------- say hello ---------------------------- */

/*


const helpButton  = document.querySelector('#help')
const messages = document.querySelector(".messages")
helpButton.addEventListener('click', () => {
const newPTag = document.createElement('p')
newPTag.innerHTML = `<span class = "blue-text">2:08 pm </span> Hi I'm Clippy`
messages.append(newPTag)

innerHTML will create html vs innerText which will render (in this example) span and any other html as a string included in the doc

e stands for event (any time there is a callback for event. If e is passed then we will also see the event that allowed ror the function events to happen. itt reveals attributes of the click includinng location of ursor, any effects that were applied and target (which is the triggering component the part that caused the event itself to happen ))
})


add the event to the form itself (using enter/or click) capturing on the entire form vs. just the button. 

SUBMIT: 

const messageForm = document.querySelector('.message.form')
messageForm.addEventListener("submit", (e) => {
    event.preventDefault() // keeps the browser from refreshing
    console.log(e.target.messageInput.value)

    console.log(e.target.messageInput) will look through the tree and look for something called messageInput use name/id in html document to specify the target element

})

the event here is called submit instead of click

addeventlister is ading to form 
what is event.target? its the same as message.form


messageForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    console.log(event.target.messageInput.value)
    const messageForm = event.target
    const messageValue = messageInput.value
    console.log(messageValue)

    create a container to hold the new text 
    const newPar = document.createElement('p')
    newPar.innerText = messageValue
    const messages = document.querySelector('.messages')
    messages.append(newPar)

    // const timeSpan = document.createElement('span')
    // timeSpan.textContent = `{hours}:${minutes}`
    // timeSpan.className = 'blue-text'

    // newPar.prepend(timeSpan)
})


event delegation or add eventlistener for every ptag creted


at end of function...

1. newPar.addEventListener('click', () => newPar.remove)
2. using eventdelegation: messages.addEventLiseneer('click', (e) => event.target.remove()) 
        to prevent the quirk: if(event.target.)
        const tagName = event.target.tagName
        if(tagName ==='P')
        event.target.remove

OR

to reset the form 
event.target.reset




*/


