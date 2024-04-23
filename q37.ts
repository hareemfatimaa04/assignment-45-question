// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

function make_shirt(size = "Large", message = "I love JavaScript") {
    console.log("The shirt is a size " + size + " and has the message: " + message + " printed on it.");
}

make_shirt(); // Large shirt with default message "I love JavaScript"
make_shirt("Medium"); // Medium shirt with default message "I love JavaScript"
make_shirt("Small", "Coding is Fun"); // Small shirt with message "Coding is Fun"