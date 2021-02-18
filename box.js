class Box {
    //properties
    constructor(x, y, width, height){
        var option={
            restitution :0.08
        }
        this.body = Bodies.rectangle(x, y, width, height,option);
        this.w = width;
        this.h = height;
        World.add(world, this.body);
    }


    //function
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push ();
        rectMode(CENTER);
        translate (pos.x , pos.y);
        rotate (angle);
        fill (225);
        rect(0,0,this.w,this.h);
        pop ();
        


    }
}