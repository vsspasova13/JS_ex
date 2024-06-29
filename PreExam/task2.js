function MaidenParty(input)
{
let maidenPrice=Number(input[0]);
let breves=Number(input[1]);
let roses=Number(input[2]);
let keys=Number(input[3]);
let caricatures=Number(input[4]);
let lucks=Number(input[5]);

let sum=breves*0.60+roses*7.20+keys*3.60+caricatures*18.20+lucks*22;
let count=breves+roses+keys+caricatures+lucks;

if(count>25)sum=sum-((35*sum)/100);

sum=sum-((10*sum)/100);

if(sum>=maidenPrice)
{
    console.log(`Yes! ${(sum-maidenPrice).toFixed(2)} lv left.`);
}
else
{
    console.log(`Not enough money! ${(Math.abs(sum-maidenPrice)).toFixed(2)} lv needed.`)
}

}

MaidenParty(["40.8",
"20",
"25",
"30",
"50",
"10"]);