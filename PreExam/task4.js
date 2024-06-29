function Movies(input)
{
    let count=Number(input[0]);
let sales=0;
let avgRating=0;

    for(let i =1;i<=count;i++)
    {
        let curr=String(input[i]);
        let rating=Number(curr[2]);
        avgRating+=rating;
        let movieSales=Number(curr[0])*10+Number(curr[1]);
        if(rating==2)movieSales=0;
        else if(rating==3)movieSales=(50*movieSales)/100;
        else if(rating==4)movieSales=(70*movieSales)/100;
        else if(rating==5)movieSales=(85*movieSales)/100;
        
        sales+=movieSales;
    }

    avgRating=avgRating/count;
    console.log(`${sales.toFixed(2)}`);
    console.log(`${avgRating.toFixed(2)}`);
}

Movies(["5",
"122",
"156",
"202",
"214",
"185"]);