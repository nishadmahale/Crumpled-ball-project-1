class Paper {

    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{isStatic:true});
        this.r = radius;
        World.add(world,this.body);
        




    }

    display(){
        
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("red");
        ellipse(pos.x,pos.y,this.r);
            



    
    }











}