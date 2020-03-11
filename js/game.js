(function() {
  // game游戏函数
  function Game() {
    this.map = new Map();
    this.food = new Food({
      map: this.map
    });
    this.snake = new Snake({
      map: this.map,
      food: this.food
    });
    this.start();
    this.bindKey();
  }
  // start 开始函数
  Game.prototype.start = function() {
    this.timer = setInterval(() => {
      this.snake.move();
      var snakeHead = this.snake.body[0];
      // if (snakeHead.left >= this.map.width) {
      //   clearInterval(this.timer);
      // }
      // if (snakeHead.left < 0) {
      //   clearInterval(this.timer);
      // }
      // if (snakeHead.top >= this.map.height) {
      //   clearInterval(this.timer);
      // }
      // if (snakeHead.top < 0) {
      //   clearInterval(this.timer);
      // }
      if (
        snakeHead.left >= this.map.width ||
        snakeHead.left < 0 ||
        snakeHead.top >= this.map.height ||
        snakeHead.top < 0
      ) {
        clearInterval(this.timer);
      }
      if (
        snakeHead.left === this.food.left &&
        snakeHead.top === this.food.top
      ) {
        this.food.ranPos();
        this.snake.growth();
        this.food.ranColor();
      }
    }, 200);
  };
  Game.prototype.bindKey = function() {
    document.addEventListener("keydown", e => {
      // 左上右下 37 38 39 40
      // console.log(e.keyCode);
      if (e.keyCode === 37) this.snake.direction = "left";
      if (e.keyCode === 38) this.snake.direction = "up";
      if (e.keyCode === 39) this.snake.direction = "right";
      if (e.keyCode === 40) this.snake.direction = "down";
    });
  };
  window.Game = Game;
})();
