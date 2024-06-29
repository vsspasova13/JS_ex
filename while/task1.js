function WhileDemo(input)
{
    let width=Number(input[0]);
    let length=Number(input[1]);
    let height=Number(input[2]);

    let appartmentVolume=width*length*height;

    let i=3;
    let curr=input[i];
    while(curr!=='Done')
    {
        let boxes=Number(curr);
        appartmentVolume-=boxes;
        if(appartmentVolume<=0)
        {
            console.log(`No more free space! You need ${Math.abs(appartmentVolume)} Cubic meters more.`);
            break;
        }
        i++;
        curr=input[i];
    }

    if(appartmentVolume>0){
         console.log(`${appartmentVolume} Cubic meters left. `);
    }
   

}

WhileDemo(["10",
            "1",
            "2",
            "4",
            "6",
            "Done"]);