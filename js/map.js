(function() {
  function Map(obj) {
    obj = obj || {};
    this.width = obj.width || 800;
    this.height = obj.height || 400;
    this.backgroundColor = obj.backgroundColor || "#ccc";
    this.element = null;
    this.render();
  }
  Map.prototype.render = function() {
    var mapBox = document.createElement("div");
    document.body.appendChild(mapBox);
    this.element = mapBox;
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.backgroundColor = this.backgroundColor;
    this.element.style.position = "relative";
  };
  window.Map = Map;
})();
