class Snake {
    constructor() {
        this.body = [{ x: 100, y: 100 }]; // Starting position of the snake
        this.size = 20; // Size of each segment
        this.direction = { x: this.size, y: 0 }; // Initial direction (moving right)
    }

    move() {
        // Add new head based on current direction
        const head = { x: this.body[0].x + this.direction.x, y: this.body[0].y + this.direction.y };
        this.body.unshift(head); // Add head to the front
        this.body.pop(); // Remove the last segment (tail)
    }

    changeDirection(newDirection) {
        // Prevent reversing the snake
        if (newDirection.x !== -this.direction.x && newDirection.y !== -this.direction.y) {
            this.direction = newDirection;
        }
    }

    draw() {
    const svgElement = document.getElementById('snake-svg').cloneNode(true);
    const size = this.size;

    for (let segment of this.body) {
        context.drawImage(svgElement, segment.x, segment.y, size, size);
    }
}
}

const snake = new Snake(); // Create an instance of the snake
function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Update and draw the snake
    snake.move();
    snake.draw();

    // Update and draw enemies
    for (let enemy of enemies) {
        enemy.move();
        enemy.draw();
    }

    // Draw obstacles
    for (let obstacle of obstacles) {
        obstacle.draw();
    }

    requestAnimationFrame(gameLoop); // Request the next frame
}
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            snake.changeDirection({ x: 0, y: -snake.size });
            break;
        case 'ArrowDown':
            snake.changeDirection({ x: 0, y: snake.size });
            break;
        case 'ArrowLeft':
            snake.changeDirection({ x: -snake.size, y: 0 });
            break;
        case 'ArrowRight':
            snake.changeDirection({ x: snake.size, y: 0 });
            break;
    }
});class Food {
    constructor() {
        this.x = Math.floor(Math.random() * (canvas.width / 20)) * 20; // Random x position
        this.y = Math.floor(Math.random() * (canvas.height / 20)) * 20; // Random y position
        this.size = 20; // Size of the food
    }

    draw() {
        context.fillStyle = 'yellow'; // Color of the food
        context.fillRect(this.x, this.y, this.size, this.size);
    }
}

let food = new Food(); // Create an instance of the foodfunction gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Update and draw the snake
    snake.move();
    snake.draw();

    // Draw the food
    food.draw();

    // Update and draw enemies
    for (let enemy of enemies) {
        enemy.move();
        enemy.draw();
    }

    // Draw obstacles
    for (let obstacle of obstacles) {
        obstacle.draw();
    }

    requestAnimationFrame(gameLoop); // Request the next frame
}
