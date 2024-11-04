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
        context.fillStyle = 'green'; // Color of the snake
        for (let segment of this.body) {
            context.fillRect(segment.x, segment.y, this.size, this.size); // Draw each segment
        }
    }
}

const snake = new Snake(); // Create an instance of the snake
