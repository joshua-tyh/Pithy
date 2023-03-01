console.log("Pithy is running.");

document.addEventListener("selectionchange", () => {
    var selection = document.getSelection().toString();
    console.log(selection);
});