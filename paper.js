class Paper{
constructor(x,y){
var options = {
    
    restitution:0.3,
    friction:0.1,
    density:0.2
}
this.image=loadImage("paper.png")
this.body = Bodies.circle(x,y,50,options);
World.add(world,this.body)

}
display(){
     var pos=this.body.position;
    // ellipseMode(RADIUS)
    push()
    imageMode(RADIUS)
    image(this.image,pos.x,pos.y,50,50)
    pop()
}







}