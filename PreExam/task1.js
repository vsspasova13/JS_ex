function CatCalories(input)
{
    let fatPerc=Number(input[0]);
    let proteinPerc=Number(input[1]);
    let carbsPerc=Number(input[2]);
    let allCalories=Number(input[3]);
    let waterPerc=Number(input[4]);


    let fatGrams=((fatPerc*allCalories)/100)/9;
    let ProteinGrams=((proteinPerc*allCalories)/100)/4;
    let CarbsGrams=((carbsPerc*allCalories)/100)/4;

    let foodWeight=fatGrams+CarbsGrams+ProteinGrams;
    let caloriesForGram=allCalories/foodWeight;

    let restPerc=100-waterPerc;
    let result=(restPerc*caloriesForGram)/100;

    console.log(result.toFixed(4));
}

CatCalories(["60",
    "25",
    "15",
    "2500",
    "60"
    ])