document.addEventListener("DOMContentLoaded", () => {
    const watermark = document.getElementById("watermark");
    const inputWatermark = document.getElementById("inputWatermark");
    const downloadBtn = document.getElementById("download-btn");

    watermark.innerText = "Watermark";
    inputWatermark.value = 'Watermark';

    inputWatermark.addEventListener("input", (event) => {
        watermark.innerText = event.target.value;
    });

    downloadBtn.addEventListener("click", () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = "../Compare_Images/assets/wallpaper.jpg";
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.font = "35px Arial";
            ctx.fillStyle = "rgb(156, 163, 175)";
            // ctx.fillText(watermark.innerText, canvas.width / 2, canvas.height / 2, canvas.width);
            // rotate fillText to 45deg
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(-45 * Math.PI / 180);
            ctx.fillText(watermark.innerText, 0, 0);

            const link = document.createElement("a");
            link.download = "image_watermark.png";
            link.href = canvas.toDataURL();
            link.click();
        };
    });
});
