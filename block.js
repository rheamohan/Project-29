class Block{
    constructor(x,y,width,height,color){
        var options={
            isStatic:false,
            restitution:0.2,
            friction : 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = color;
        color = random(0,250);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        strokeWeight(2);
        fill(this.color);
        stroke(0);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}