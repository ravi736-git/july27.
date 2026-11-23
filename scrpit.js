console.log("Page loaded successfully");

Document.getElementbyID(output).innerHTML = "<h3>Hello From External Java script"

console.log( 
    "Button was clicked at: "+
    new Date().toLocaleTimeString()
);
Document.getElementbyID(output).innerHTML += "<p> This Line Came From Java script"
