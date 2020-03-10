(function() {
  function Snake(obj) {
    obj = obj || {};
    this.map = obj.map;
    this.width = obj.width || 20;
    this.height = obj.height || 20;
    this.body = obj.body || [
      {
        left: 3 * this.width,
        top: 1 * this.height,
        backgroundColor: "#fff"
      },
      {
        left: 2 * this.width,
        top: 1 * this.height,
        backgroundColor: "#000"
      },
      {
        left: 1 * this.width,
        top: 1 * this.height,
        backgroundColor: "red"
      }
    ];
    this.element = [];
    this.direction = obj.direction || "right";
    this.render();
  }
  Snake.prototype.render = function() {
    for (let i = 0; i < this.body.length; i++) {
      this.element[i] = document.createElement("div");
      this.map.element.appendChild(this.element[i]);
    }
    this.style();
  };
  Snake.prototype.style = function() {
    for (let i = 0; i < this.body.length; i++) {
      this.element[i].style.width = this.width + "px";
      this.element[i].style.height = this.height + "px";
      this.element[i].style.backgroundColor = this.body[i].backgroundColor;
      this.element[i].style.position = "absolute";
      this.element[i].style.left = this.body[i].left + "px";
      this.element[i].style.top = this.body[i].top + "px";
    }
  };
  Snake.prototype.move = function() {
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i].left = this.body[i - 1].left;
      this.body[i].top = this.body[i - 1].top;
    }
    if (this.direction === "right") {
      this.body[0].left += this.width;
    } else if (this.direction === "left") {
      this.body[0].left -= this.width;
    } else if (this.direction === "up") {
      this.body[0].top -= this.height;
    } else if (this.direction === "down") {
      this.body[0].top += this.height;
    }
    this.style();
  };
  window.Snake = Snake;
})();
