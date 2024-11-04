const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const boxSize = 20; // Size of one snake segment
let snake = [{ x: 200, y: 200 }]; // Initial position of the snake
let direction = "RIGHT"; // Initial direction
let food = { x: Math.floor(Math.random() * 20) * boxSize, y: Math.floor(Math.random() * 20) * boxSize };

// Function to draw the snake
function drawSnake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the previous frame
    snake.forEach((segment) => {
        ctx.fillStyle = "lime";
        ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
    });
}

// Function to draw the food
function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, boxSize, boxSize);
}

// Function to update the snake's position
function updateSnakePosition() {
    const head = { ...snake[0] }; // Create a copy of the head

    // Update head position according to direction
    switch (direction) {
        case "RIGHT":
            head.x += boxSize;
            break;
        case "LEFT":
            head.x -= boxSize;
            break;
        case "UP":
            head.y -= boxSize;
            break;
        case "DOWN":
            head.y += boxSize;
            break;
    }

    snake.unshift(head); // Add new head at the beginning of the snake

    // Check if the snake has eaten the food
    if (head.x === food.x && head.y === food.y) {
        food = { x: Math.floor(Math.random() * 20) * boxSize, y: Math.floor(Math.random() * 20) * boxSize }; // Generate new food
    } else {
        snake.pop(); // Remove the last segment if no food was eaten
    }
}

// Function to handle key presses
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (direction !== "DOWN") direction = "UP";
            break;
        case "ArrowDown":
            if (direction !== "UP") direction = "DOWN";
            break;
        case "ArrowLeft":
            if (direction !== "RIGHT") direction = "LEFT";
            break;
        case "ArrowRight":
            if (direction !== "LEFT") direction = "RIGHT";
            break;
    }
});

// Main game function
function gameLoop() {
    updateSnakePosition();
    drawSnake();
    drawFood();

    // Check for wall collision
    if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height) {
        alert("Game Over!");
        snake = [{ x: 200, y: 200 }];
        direction = "RIGHT";
    }

    setTimeout(gameLoop, 100); // Control the game speed
}

gameLoop(); // Start the game
