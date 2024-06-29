function Substitude(input)
{
let k=Number(input[0]);
let l=Number(input[1]);
let m=Number(input[2]);
let n=Number(input[3]);

let count=0;

let first=0;
let second=0;

for(let i=k;i<=8;i++)
{
    if(i%2!==0)continue;

    for(let j=9;j>=l;j--)
    {
        if(j%2==0)continue;
        first=i*10+j;

        for(let p=m;p<=8;p++)
        {
            if(p%2!==0)continue;
            for(let x=9;x>=n;x--)
            {
                if(x%2==0)continue;
                second=p*10+x;

                if(first!=second)
                {
                    first=first+"";
                    second=second+"";
                    count++;
                    console.log(first+" - "+second);
                    if(count==6)return;
                }
                else console.log(`Cannot change the same player.`);
            } 
        }    
    }
  
}

}

Substitude(["6",
"7",
"5",
"6"]);