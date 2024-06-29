function PeopleFitness(input)
{
    let people = Number(input[0]);
    let back=0;
    let chest=0;
    let abs=0;
    let legs=0;
    let shake=0;
    let bar=0;

let workout=0;
let consume=0;

    for(let i=1;i<=people;i++)
    {
        let curr=input[i];
        switch(curr)
        {
            case 'Back':
                back++;workout++;break;
            case "Chest":chest++;workout++;break;
            case "Legs":legs++;workout++;break;
            case "Abs":abs++;workout++;break;
            case "Protein shake":shake++;consume++;break;
            case "Protein bar":bar++;consume++;break;
        }

    }


}