class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 7
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(70,37,15);
            if(pointA.x < 220){
                strokeWeight(8);
                image(this.sling3,pointA.x-20,pointA.y-10,10,30);
                line(pointA.x - 20, pointA.y, pointB.x-20, pointB.y+25);
                line(pointA.x+20,pointA.y,pointB.x + 25,pointB.y+20);
            }else{
                strokeWeight(4);
                image(this.sling3,pointA.x+20,pointA.y-10,10,30);
                line(pointA.x - 20, pointA.y, pointB.x-20, pointB.y+25);
                line(pointA.x+20,pointA.y,pointB.x + 25,pointB.y+20);
            }    
        }
        image(this.sling1,260,40,40,180);
        image(this.sling2,233,53,40,90);
    }
    
}