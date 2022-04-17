import {executeCamelCaseUseCase} from "./code-challenge/camel-case-string.js"
import {executeArrayUseCases} from "./datastructures/Array.js"
import {executeSearchTopNCharector} from "./code-challenge/search-top-n-char.js";
import {executeCheckIfPangramUseCase} from "./code-challenge/check-sentence-pangram.js";
import { executeHighFiveUseCase } from "./code-challenge/high-five.js";
import { executeRobotReturnToOriginUseCase } from "./code-challenge/robot-return-to-origin.js";
import { executeRobotBoundedInCircleUseCases } from "./code-challenge/robot-bounded-in-circle.js";
import { executelastStoneWeightUsecase } from "./code-challenge/last-stone-weight.js";
import { executeMyHashMapUseCase } from "./datastructures/HashMap.js";
import { undoRedoCommandUseCases } from "./code-challenge/undo-redo-command.js";
import { executeValidAnagramUseCase } from "./code-challenge/valid-anagram.js";
import { executeMoveZeroesUsecase } from "./code-challenge/move-to-zero.js";
import { executeFirstUniqCharUseCases } from "./code-challenge/first-unique-char.js";
import { executeMaxProfitUseCase } from "./code-challenge/best-time-to-buy-sell-stock.js";
import { executeRotateStringUsecase } from "./code-challenge/rotating-string.js";
import { executeGcdOfStringsUsecases } from "./code-challenge/greatest-common-divisior-string.js";


export default function ExecuteUseCases(){
    //executeCamelCaseUseCase();
    //executeCheckIfPangramUseCase()
    //executeSearchTopNCharector();   
    // executeHighFiveUseCase();
    //executeRobotReturnToOriginUseCase()
    //executeArrayUseCases();
   //executeRobotBoundedInCircleUseCases();
   //executelastStoneWeightUsecase();
   //executeMyHashMapUseCase();
   //undoRedoCommandUseCases();
   //executeValidAnagramUseCase();
   //executeMoveZeroesUsecase()
  //executeFirstUniqCharUseCases()
  //executeMaxProfitUseCase()
  //executeRotateStringUsecase();
  executeGcdOfStringsUsecases()
}