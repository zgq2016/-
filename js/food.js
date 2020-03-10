(function() {
  function Food(obj) {
    obj = obj || {};
    this.width = obj.width || 20;
    this.height = obj.height || 20;
    this.top = obj.top || 0;
    this.left = obj.left || 0;
    this.backgroundColor = obj.backgroundColor || "#000";
    this.element = null;
    this.render();
    this.ranPos();
  }
  Food.prototype.render = function() {
    this.element = document.createElement("div");
    map.element.appendChild(this.element);
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.backgroundColor = this.backgroundColor;
    this.element.style.position = "absolute";
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
  };

  function getPosNum(num) {
    return Math.floor(Math.random() * (num + 1));
  }
  Food.prototype.ranPos = function() {
    this.left = getPosNum((map.width - this.width) / this.width) * this.width;
    this.top =
      getPosNum((map.height - this.height) / this.height) * this.height;
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
  };
  window.Food = Food;
})();
