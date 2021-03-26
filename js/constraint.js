class hand
{
constructor(bodyA,pointB){
    var options={
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length:15
    }

this.pointB = pointB
this.grab = Constraint.create(options);
World.add(world,this.grab);
}

attach(body){
    this.grab.bodyA=body
}

throw(){
 this.grab.bodyA = null
}


display(){
    if(this.grab.bodyA){
    var pointA = this.grab.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}


}