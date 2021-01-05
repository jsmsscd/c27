class Roof
{
    constructor(x,y,w,h){
    var O2={isStatic:true}
    this.body=Bodies.rectangle(x,y,w,h,O2);
    this.x=x;
    this.y=y;
    this.widht=w;
    this.height=h;
    World.add(world,this.body);

    }
    display()
    {
        fill("yellow")
        rect(this.x,this.y,this.widht,this.height);
    }
};