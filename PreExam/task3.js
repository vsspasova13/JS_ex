function SantaClaus(input)
{  
    let days=Number(input[0]);
    let nights=days-1;
    let room=String(input[1]);
    let review=String(input[2]);

let price=0;

    if(room=='room for one person')
    {
        price=nights*18;
    }

    else if(room=='apartment')
    {   
        price=nights*25;
        if(nights<10)
        {
            price-=(price*30)/100;
        }

        if(nights>=10 && nights<=15)
        {   
            price-=(price*35)/100;
        }

        if(nights>15)
        {   
            price-=(price*50)/100;
        }
    }

    else if(room=='president apartment')
    {   
        price=nights*35;
        if(nights<10)
        {
            price-=(price*10)/100;
        }

        if(nights>=10 && nights<=15)
        {   
            price-=(price*15)/100;
        }

        if(nights>15)
        {   
            price-=(price*20)/100;
        }
    }

if(review=='positive')
{
    price+=(price*25)/100;
}
else if(review=='negative')
{
    price-=(price*10)/100;
}

console.log(price.toFixed(2));

}

SantaClaus(["14",
"apartment",
"positive"]);