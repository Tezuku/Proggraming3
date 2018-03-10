class Verg {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 6;
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
            matrix[norVandak[1]][norVandak[0]] = 6;
            this.x = norVandak[0];
            this.y = norVandak[1];

        }
    }
    utel() {
        var norVandak = random(this.yntrelVandak(5));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 6;
            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in sah) {
                if (sah[i].x == this.x && sah[i].y == this.y) {
                    sah.splice(i, 1);
                    if (this.energy < 8) {
                        this.energy++;
                    }
                    return true;
                }
            }
            for (var i in mah) {
                if (mah[i].x == this.x && mah[i].y == this.y) {
                    mah.splice(i, 1);
                    if (this.energy < 8) {
                        this.energy++;
                    }
                    return true;
                }
            }
            for (var i in gish) {
                if (gish[i].x == this.x && gish[i].y == this.y) {
                    gish.splice(i, 1);
                    if (this.energy < 10) {
                        this.energy++;
                    }
                    return true;
                }
            }
            for (var i in xotaker) {
                if (xotaker[i].x == this.x && xotaker[i].y == this.y) {
                    xotaker.splice(i, 1);
                    if (this.energy < 8) {
                        this.energy++;
                    }
                    return true;
                }
            }
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
            for (var i in ver) {
                if (ver[i].x == this.x && ver[i].y == this.y) {
                    ver.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                    break;
                }
            }
        }
    }
}