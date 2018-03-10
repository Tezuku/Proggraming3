class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
        }
        return found;
    }
    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            if (this.energy > 0) {
                this.energy--;
            }
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];

        }
    }
    utel() {
        var norVandak = random(this.yntrelVandak(2));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in xotaker) {
                if (xotaker[i].x == this.x && xotaker[i].y == this.y) {
                    xotaker.splice(i, 1);
                    if (this.energy < 8) {
                        this.energy++;
                    }
                    return true;
                }
            }

        }
        return false;
    }


    bazmanal() {
        if (this.energy >= 4) {
            var ran = Math.round(random(1));

            var norVandak = random(this.yntrelVandak(ran));
            if (norVandak) {
                var x = norVandak[0];
                var y = norVandak[1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                    var norGish = new Gishatich(x, y);

                    gish.push(norGish);
                    matrix[y][x] = 2;
                    this.energy = 2;
                }
            }
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in gish) {
                if (gish[i].x == this.x && gish[i].y == this.y) {
                    gish.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                    break;
                }
            }
        }
    }
}