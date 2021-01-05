class Bob
{
 constructor(x,y,r){
     var Op={
       isStatic:true,restitution:0.5,friction:1.5,density:1.2
     }
     this.body=Bodies.circle(x,y,r,Op);
     this.x=x;
     this.y=y;
     this.r=r;
    World.add(world,this.body);

    }   
    display()
    {
        var p=this.body.position;                        
        translate(p.x,p.y);                                
        fill("red")
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.r);
    }
};