const targetNode = $(".box-object");

const player = new (function() {
  this.play = function() {
    targetNode.animate({ left: 100 }, 1000, function() {
      console.log("done");
    });
  };
})();

player.play();
