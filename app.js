console.log('do something')

// Need to create a few things
// A pop up message for each Bio for each player
// A pop up message for each status of each player (alive or dead)

// The pop ups will use JS for document listeners. When clicked, the pop up will display. Need to put a CLOSE button on each too, or try to just close on clicking on something else. Or a timer.
// Each one will probably need their own ID.

// Could possibly use ONE pop up window for EVERYONE. Whoever's button get clicked, that is the info that populates/shows on the display window.
// Need a close form function if i go that route to close the window.




// Function to attach to the close button on the pop up for bio/status
function closeForm() {
    document.getElementById("popup").style.display = "none";
}