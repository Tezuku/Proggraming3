class Grass extends KendaniEak {

    bazmanal(){
        this.multiply++;
        this.direction = random(this.yntrelVandak(0));
        if(this.direction){
            var newGrass = new Grass(this.direction[0],this.direction[1],1);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = 1;
            this.multiply = 0;
        }
    }

}

