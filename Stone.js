class Stone{
    constructor(x,y){
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        
         this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        super(x,y,50,50)
        this.image= loadImage("sprites/stone.png");
        World.add(world,this.body);
}
display(){
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        super.display();
        pop();
}
}