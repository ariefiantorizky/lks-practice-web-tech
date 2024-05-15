window.onload = () => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    // SETUP WIDTH AND HEIGHT
    context.canvas.width = 400;
    context.canvas.height = 250;

    // SETUP BALL
    const ball = {
        x: canvas.width / 2,
        y: canvas.height - 30,
        radius: 20,
        color: "white",
        speed: 5,
        direction: 1,
    };

    // DRAW BALL
    const drawBall = () => {
        context.beginPath();
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
        context.fillStyle = ball.color;
        context.fill();
        context.closePath();
    };

    // MOVE BALL
    const moveBall = () => {
        ball.y += ball.speed * ball.direction;
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
            ball.direction *= -1;
        }
    };

    const animate = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawBall();
        moveBall();

        requestAnimationFrame(animate);
    };

    animate();
};
