import {executeCamelCaseUseCase} from "./code-challenge/camel-case-string.js"
import {executeArrayUseCases} from "./datastructures/Array.js"
import {executeSearchTopNCharector} from "./code-challenge/search-top-n-char.js";
import {executeCheckIfPangramUseCase} from "./code-challenge/check-sentence-pangram.js";
import { executeHighFiveUseCase } from "./code-challenge/high-five.js";


export default function ExecuteUseCases(){
    executeCamelCaseUseCase();
    executeCheckIfPangramUseCase()
    executeSearchTopNCharector();   
    executeHighFiveUseCase();
    executeArrayUseCases();
}