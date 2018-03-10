class Xotaker extends KendaniEak {
    constructor(x, y, index){
        super();
        this.tariq = 0;
    }
   stanalNorKordinatner() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   yntrelVandak(ch) {
       this.stanalNorKordinatner();
       return super.yntrelVandak(ch);
   }
    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            if (this.energy > 0) {
                this.energy--;
            }
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];

        }
    }
    bazmanal() {
        if (this.energy >= 6) {
            var rin = Math.round(random(1));

            var norVandak = random(this.yntrelVandak(rin));
            if (norVandak) {
                var x = norVandak[0];
                var y = norVandak[1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                    var norXotaker = new Xotaker(x, y);

                    xotaker.push(norXotaker);
                    matrix[y][x] = 2;
                    this.energy = 2;
                }
            }
        }
    }
    utel() {
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    if (this.energy < 8) {
                        this.energy++;
                    }
                    return true;
                }
            }

        }
        return false;
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in xotaker) {
                if (xotaker[i].x == this.x && xotaker[i].y == this.y) {
                    xotaker.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                    break;
                }
            }
        }
    }

   
}



   