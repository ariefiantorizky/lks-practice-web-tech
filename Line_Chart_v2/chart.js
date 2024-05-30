class Chart {
    constructor({ title, data }) {
        this.title = title;
        this.data = data;
    }

    render() {
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");

        // INITIALIZATION SIZE
        context.canvas.width = 600;
        context.canvas.height = 400;

        // INITIALIZATION DATA
        const chartWidth = canvas.width;
        const chartHeight = canvas.height;
        const spaces = 45;
        const xAxisLabel = "Tanggal";
        const yAxisLabel = "Jumlah";
        const distance = (chartWidth / spaces) * 5;

        let x = spaces + 15;
        let y = (y) => chartHeight - (y * spaces) / 10;

        // CLEAR COORDINATE
        context.clearRect(0, 0, chartWidth, chartHeight);

        // DRAW X
        context.beginPath();
        context.moveTo(spaces, chartHeight - spaces);
        context.lineTo(chartWidth - spaces, chartHeight - spaces);
        context.stroke();

        // DRAW Y
        context.beginPath();
        context.moveTo(spaces, chartHeight - spaces);
        context.lineTo(spaces, spaces);
        context.stroke();

        // X Y LABEL
        context.textAlign = "center";
        context.font = "15px Arial";
        context.textBaseLine = "middle";
        context.fillText(
            xAxisLabel,
            chartWidth - spaces,
            chartHeight - spaces * 1.5,
        );
        context.fillText(yAxisLabel, spaces, spaces / 2);

        // DRAW LINES
        context.beginPath();
        context.strokeStyle = "red";
        context.lineWidth = 3;

        for (let i = 0; i < this.data.length; i++) {
            const { tanggal, jumlah } = this.data[i];

            context.lineTo(x, y(jumlah));
            x += distance;
        }

        context.stroke();

        // X POINT
        x = spaces + 15;
        context.fillStyle = "black";

        for (let i = 0; i < this.data.length; i++) {
            context.beginPath();
            context.arc(x, chartHeight - spaces, 2, 0, Math.PI);
            context.fill();

            x += distance;
        }

        // Y POINT
        x = spaces + 15;
        for (let i = 0; i < this.data.length; i++) {
            const { tanggal, jumlah } = this.data[i];

            context.beginPath();
            context.arc(spaces, y(jumlah), 2, 0, Math.PI);
            context.fill();

            x += distance;
        }

        // X LABEL
        x = spaces + 15;
        for (let i = 0; i < this.data.length; i++) {
            const { tanggal, jumlah } = this.data[i];
            context.fillText(tanggal, x, chartHeight - spaces / 2);

            x += distance;
        }

        // Y LABEL
        x = spaces + 15;
        for (let i = 0; i < this.data.length; i++) {
            const { tanggal, jumlah } = this.data[i];

            context.fillText(jumlah, spaces / 2, y(jumlah));
            x += distance;
        }

        // TITLE
        context.textAlign = "center";
        context.font = "16px Arial";
        context.fillText(this.title, chartWidth - spaces * 2.5, spaces / 2);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let chart = new Chart({
        title: "Data Covid Jakarta Oktober",
        data: [
            {
                tanggal: 1,
                jumlah: 13,
            },
            {
                tanggal: 2,
                jumlah: 20,
            },
            {
                tanggal: 3,
                jumlah: 70,
            },
            {
                tanggal: 4,
                jumlah: 40,
            },
            {
                tanggal: 5,
                jumlah: 60,
            },
            {
                tanggal: 6,
                jumlah: 20,
            },
            {
                tanggal: 7,
                jumlah: 50,
            },
            {
                tanggal: 8,
                jumlah: 30,
            },
        ],
    });

    chart.render();
});
