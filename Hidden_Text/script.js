document.addEventListener("DOMContentLoaded", (event) => {
    const hiddenText = document.getElementById("hiddenText");
    const viewBox = document.getElementById("viewBox");

    let x = 0;
    let y = 0;

    viewBox.addEventListener("mousedown", (e) => {
        x = e.clientX - viewBox.offsetLeft;
        y = e.clientY - viewBox.offsetTop;

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
    });

    function mouseMoveHandler(e) {
        viewBox.style.left = `${e.clientX - x}px`;
        viewBox.style.top = `${e.clientY - y}px`;
    }

    function mouseUpHandler() {
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
    }

    
});
