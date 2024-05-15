window.onload = () => {
    // SELECTOR CANVAS
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    // SETUP WIDTH AND HEIGHT
    context.canvas.width = 600;
    context.canvas.height = 500;

    // INITIALITATION DATA

    /**
     *
     *! (x) ========> Tanggal
     *! (y) ========> Total
     *
     */

    const data = [
        {
            x: 1,
            y: 100,
        },
        {
            x: 2,
            y: 150,
        },
        {
            x: 3,
            y: 300,
        },
        {
            x: 4,
            y: 275,
        },
        {
            x: 5,
            y: 350,
        },
        {
            x: 6,
            y: 225,
        },
        {
            x: 7,
            y: 300,
        },
        {
            x: 8,
            y: 150,
        },
        {
            x: 9,
            y: 400,
        },
        {
            x: 10,
            y: 350,
        },
        {
            x: 11,
            y: 150
        }
    ];

    // SETUP CHART SETTINGS
    const chartWidth = canvas.width;
    const chartHeight = canvas.height;
    const spaces = 35;
    const xAxisLabel = "Tanggal";
    const yAxisLabel = "Total";
    const distance = (chartWidth / spaces) * 3;

    //* DRAW CHART
    context.clearRect(0, 0, chartWidth, chartHeight);

    //* DRAW X LINES
    context.beginPath();
    context.moveTo(spaces, chartHeight - spaces);
    context.lineTo(chartWidth - spaces, chartHeight - spaces);
    context.stroke();

    //* DRAW Y LINES
    context.beginPath();
    context.moveTo(spaces, chartHeight - spaces);
    context.lineTo(spaces, spaces);
    context.stroke();

    //* DRAW X Y LABEL
    context.font = "13px Arial";
    context.textAlign = "center";
    context.textBaseLine = "middle";
    context.fillText(
        xAxisLabel,
        chartWidth - spaces,
        chartHeight - spaces * 1.5,
    );
    context.fillText(yAxisLabel, spaces, spaces / 2);

    //* DRAW LINE POINTS
    context.beginPath();
    let x = spaces;

    for (let i = 0; i < data.length; i++) {
        context.lineTo(x, chartHeight - data[i].y - spaces);

        //* LINE / POINTS DISTANCE
        x += distance;
    }
    context.stroke();

    //* DRAW LINE POINTS CIRCLE
    context.fillStyle = "black";
    context.strokeWidth = "2px";

    x = spaces;
    for (let i = 0; i < data.length; i++) {
        context.beginPath();

        context.arc(x, chartHeight - data[i].y - spaces, 3, 0, 2 * Math.PI);

        context.fill();
        x += distance;
    }

    //* DRAW X POINT LABELS
    x = spaces;
    for (let i = 0; i < data.length; i++) {
        context.fillText(data[i].x, x, chartHeight - spaces / 5);
        x += distance;
    }

    //* DRAW Y POINT LABELS
    x = spaces;
    for (let i = 0; i < data.length; i++) {
        // create vertical labels
        context.fillText(data[i].y, spaces / 2, chartHeight - data[i].y);
        x += distance;
    }
};
