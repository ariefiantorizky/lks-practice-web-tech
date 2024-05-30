document.addEventListener("DOMContentLoaded", () => {
    const chat = document.getElementById("chat");
    const totalSent = document.getElementById("total-sent");

    const averageCharSent = document.getElementById("average-sent");

    const loadData = async () => {
        const response = await fetch("./result.json");
        const data = await response.json();
        const messages = data.messages;

        let sendMessages = [];
        let sendReceived = [];

        let sendMessageCharacters = [];
        let sendReceivedCharacters = [];

        messages.forEach((msg) => {
            const msgItem = document.createElement("div");

            msgItem.classList.add("message");
            msgItem.innerHTML = msg.text;

            chat.appendChild(msgItem);

            // GET SEND MESSAGE
            if (msg.from === "Budi") {
                sendMessages.push(msg);
            }

            if (msg.from === "Bot") {
                sendReceived.push(msg);
            }

            totalSent.innerHTML = `Total Messages Sent : ${sendMessages.length}`;

            sendMessages.forEach((msg) => {
                // save the character length
                sendMessageCharacters.push(msg.text.length);
            });

            const averageSent = sendMessageCharacters.reduce((a, b) => a + b);
            averageCharSent.innerHTML = `Average Characters Sent : ${
                parseInt(averageSent / sendMessages.length)
            }`;
        });

        return;
    };

    loadData();
});
