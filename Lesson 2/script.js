

var matrix = [
    [0, 0, 1, 0, 3,1,0,0,0,0,1,0,0,0,0,0,0,0],
    [1, 0, 0, 0, 0,0,0,1,0,0,0,0,0,0,1,0,0,2],
    [0, 1, 0, 0, 0,1,0,0,0,2,0,0,0,0,0,0,0,0],
    [0, 0, 1, 0, 4,0,0,1,0,0,0,0,0,0,0,0,1,0],
    [1, 1, 0, 2, 0,0,0,1,5,0,0,2,3,0,0,0,0,0],
    [1, 5 , 0, 6, 0,0,0,1,0,0,0,0,0,0,1,3,0,],
    [1, 1, 1, 1, 0,0,0,1,0,0,3,5,6,0,0,0,0,0],
    [0, 0, 1, 0, 3,1,0,0,0,0,1,0,0,0,0,0,0,0],
    [0, 0, 1, 0, 3,1,0,0,0,0,1,0,0,0,0,0,0,0],
    [0, 0, 1, 0, 3,1,0,0,0,0,1,0,0,0,0,0,0,0],
];

var side = 120;

var grassArr = [];
var xotaker = [];
var gish = [];
var mah = []
var sah = []
var ver = []

function setup() {
   
    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotaker.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                gish.push(new Gishatich(x, y));
            }
            else if (matrix[y][x] == 4) {
                mah.push(new Mah(x, y));
            }
            else if (matrix[y][x] == 5) {
                sah.push(new Sarsap(x, y));
            }
            else if (matrix[y][x] == 6) {
                ver.push(new Verg(x, y));
            }

        }
    }
    
}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
            }
            else if (matrix[y][x] == 4 ) {
                fill("black");
            }
            else if (matrix[y][x] == 5 ) {
                fill("purple");
            }
            else if (matrix[y][x] == 6 ) {
                fill("red");
            }
            rect(x * side, y * side, side, side);
        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
        

    }
    for (var i in xotaker) {
        xotaker[i].bazmanal();
      
        if (xotaker[i].utel()) {
        }
        else {
            xotaker[i].sharjvel();
            
        }
        xotaker[i].mahanal();
    }
    
    for (var i in gish) {
        gish[i].bazmanal()

        if (gish[i].utel()) {
        }
        else {
            gish[i].sharjvel();
            
        }
        gish[i].mahanal()
    }
   
    for (var i in mah) {
        mah[i].bazmanal()

        if (mah[i].utel()) {
        }
        else {
            mah[i].sharjvel();
            
        }
        mah[i].mahanal()
    }
    for (var i in sah) {
        

        if (sah[i].utel()) {
        }
        else {
            sah[i].sharjvel();
            
        }
        sah[i].mahanal()
    }
    for (var i in ver) {
        

        if (ver[i].utel()) {
        }
        else {
            ver[i].sharjvel();
            
        }
        ver[i].mahanal()
    }
}



