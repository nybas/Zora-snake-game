class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20; // Розмір ворога
        this.direction = Math.random() < 0.5 ? 1 : -1; // Випадковий напрямок
        this.speed = 1; // Швидкість руху
    }

    move() {
        this.x += this.speed * this.direction;

        // Зміна напрямку, якщо досягнуто краю канвасу
        if (this.x <= 0 || this.x >= canvas.width - this.size) {
            this.direction *= -1; // Зміна напрямку
        }
    }

    draw() {
        context.fillStyle = 'red'; // Колір ворога
        context.fillRect(this.x, this.y, this.size, this.size);
    }
}

let enemies = [];
function spawnEnemies(num) {
    for (let i = 0; i < num; i++) {
        let x = Math.random() * (canvas.width - 20);
        let y = Math.random() * (canvas.height - 20);
        enemies.push(new Enemy(x, y)); // Додаємо нового ворога
    }
}
spawnEnemies(5); // Створення 5 ворогів
