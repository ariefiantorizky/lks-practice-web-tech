window.onload = () => {
    const second = document.getElementById("second");
    const milisecond = document.getElementById("milisecond");
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const reset = document.getElementById("reset");
    const save = document.getElementById("save");
    const savedTimeContainer = document.getElementById("saved-timer-container");

    let interval = null;
    let timeSecond = 0;
    let timeMilisecond = 0;

    // INITIAL VALUE
    second.innerHTML = timeSecond;
    milisecond.innerHTML = timeMilisecond;

    // HIDDEN FIRST
    stop.style.display = "none";
    reset.style.display = "none";
    save.style.display = "none";

    // INITIALITATION LOCAL STORAGE
    const savedTimersDB = localStorage.getItem("timers")
        ? JSON.parse(localStorage.getItem("timers")) || []
        : [];

    if (savedTimersDB && savedTimersDB.length === 0) {
        localStorage.setItem("timers", []);
    } else {
        renderTimerItems();
    }

    // EVENT LISTENER
    start.addEventListener("click", () => {
        start.style.display = "none";
        stop.style.display = "inline-block";
        reset.style.display = "inline-block";
        save.style.display = "none";

        interval = setInterval(() => {
            timeMilisecond++;

            if (timeMilisecond < 10) {
                milisecond.innerHTML = "0" + timeMilisecond;
            } else {
                milisecond.innerHTML = timeMilisecond;
            }

            if (timeMilisecond > 99) {
                timeSecond++;

                console.log(timeSecond < 10);

                if (timeSecond < 10) {
                    second.innerHTML = "0" + timeSecond;
                } else {
                    second.innerHTML = timeSecond;
                }

                timeMilisecond = 0;
                milisecond.innerHTML = "0" + timeMilisecond;
            }

            if (timeSecond > 999) {
                clearInterval(interval);
            }
        }, 10);
    });

    stop.addEventListener("click", () => {
        save.style.display = "inline-block";
        start.style.display = "inline-block";
        stop.style.display = "none";

        clearInterval(interval);
    });

    reset.addEventListener("click", () => {
        clearInterval(interval);

        interval = null;
        timeSecond = 0;
        timeMilisecond = 0;
        second.innerHTML = "0";
        milisecond.innerHTML = "0";

        start.style.display = "inline-block";
        stop.style.display = "none";
        reset.style.display = "none";
        save.style.display = "none";
    });

    save.addEventListener("click", () => {
        const time = `${timeSecond}:${timeMilisecond}`;
        const timer = {
            id: new Date().getMilliseconds(),
            time: time,
        };

        savedTimersDB.push(timer);

        localStorage.setItem("timers", JSON.stringify(savedTimersDB));
        createTimer(timer);
    });

    function renderTimerItems() {
        const savedTimers = JSON.parse(localStorage.getItem("timers")) || [];

        savedTimers.forEach((timer) => {
            createTimer(timer);
        });

        return;
    }

    function createTimer(timer) {
        // CREATE ELEMENT
        const timerItem = document.createElement("div");
        const timerItemTitle = document.createElement("h3");
        const timerItemButton = document.createElement("button");

        // SET ATTRIBUTE
        timerItem.setAttribute("class", "saved-timer-item");
        timerItemButton.setAttribute("id", `timer-delete-button-${timer.id}`);

        // INITIALITATION VALUE
        timerItemTitle.innerHTML = timer.time.toString();
        timerItemButton.innerHTML = "&#128465;";

        // ADD EVENT FOR DELETE
        timerItemButton.addEventListener("click", () => {
            const savedTimers =
                JSON.parse(localStorage.getItem("timers")) || [];

            const timeIndex = savedTimers.findIndex(
                (time) => time.id === timer.id,
            );

            if (timeIndex !== -1) {
                savedTimers.splice(timeIndex, 1);
                timerItem.remove();
            }

            localStorage.setItem("timers", JSON.stringify(savedTimers));
        });

        // APPEND CHILD
        timerItem.appendChild(timerItemTitle);
        timerItem.appendChild(timerItemButton);

        // APPEND
        savedTimeContainer.appendChild(timerItem);

        return;
    }
};
