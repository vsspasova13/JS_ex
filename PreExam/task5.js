function Players(input)
{
    let indexPlayer=0;
    let indexGoals=1;

    let currPlayer=input[indexPlayer];
    let currGoals=Number(input[indexGoals]);

    let bestPlayer=input[indexPlayer];
    let maxGoals=Number(input[indexGoals]);

    while(currPlayer!=="END")
    {
        if(currGoals>maxGoals)
        {
            maxGoals=currGoals;
            bestPlayer=currPlayer;
        }
        if(maxGoals>=10)break;
        indexPlayer+=2;
        indexGoals+=2;
        currPlayer=input[indexPlayer];
        currGoals=Number(input[indexGoals]);
    }

    console.log(`${bestPlayer} is the best player!`)
    if(maxGoals>=3)
    {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    }
    else console.log(`He has scored ${maxGoals} goals.`);

}

Players(["Silva",
"5",
"Harry Kane",
"10"]);