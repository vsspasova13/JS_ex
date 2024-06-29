function Cake(input)
{
    let width=Number(input[0]);
    let length=Number(input[1]);

    let size=width*length;

    let ind=2;
    let curr=input[ind];

    while(curr!=='STOP')
    {
        let piece=Number(curr);
        size-=piece;
        if(size<=0)
        {
            console.log(`No more cake left! You need ${Math.abs(size)} pieces more.`);
            break;
        }
        ind++;
        curr=input[ind];
    }
    if(size>0)
    {
        console.log(`${size} pieces are left.`);
    }

}