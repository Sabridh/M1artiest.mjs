import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let artiest = await userInput.question("kies een artiest. ")

if(artiest == "werenoi"){
    console.log("Ze zijn de artist achter de hit: tu connais");
    
}else if(artiest == "sdm"){
    console.log("Ze zijn de artist achter de hit: merci");
    
}else if(artiest == "naps"){
    console.log("Ze zijn de artist achter de hit: pochon bleu");

}else if (artiest == "ninho"){
        console.log("Ze zijn de artist achter de hit: filon");
}  
 else{
    console.log("error");
 }
    

process.exit();
