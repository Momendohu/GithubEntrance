_cellSize_=6;
_cellNum_=200;
var _cells_=new Cell[_cellNum_][_cellNum_];

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    colorMode(HSB, 360, 100, 100, 100);

    for (var i=0; i<_cellNum_; i++) {
        for (var j=0; j<_cellNum_; j++) {
          _cells_[i][j]=new Cell(width/2+_cellSize_*(i-_cellNum_/2), height/2+_cellSize_*(j-_cellNum_/2), _cellSize_, i, j, (int)random(2));
        }
      }
}
 
function draw() {
  background(0, 0, 0);
  ellipse(0,0,100,100);

  for (var i=0; i<_cellNum_; i++) {
    for (var j=0; j<_cellNum_; j++) {
      _cells_[i][j].display();
      _cells_[i][j].behavior();
    }
  }

  for (var i=0; i<_cellNum_; i++) {
    for (var j=0; j<_cellNum_; j++) {
      _cells_[i][j].updateState();
    }
  }
}