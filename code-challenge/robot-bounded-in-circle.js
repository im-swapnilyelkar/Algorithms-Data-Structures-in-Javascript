/**
 * 
 * On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:

The north direction is the positive direction of the y-axis.
The south direction is the negative direction of the y-axis.
The east direction is the positive direction of the x-axis.
The west direction is the negative direction of the x-axis.
The robot can receive one of three instructions:

"G": go straight 1 unit.
"L": turn 90 degrees to the left (i.e., anti-clockwise direction).
"R": turn 90 degrees to the right (i.e., clockwise direction).
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.
Example 1:

Input: instructions = "GGLLGG"
Output: true
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"G": move one step. Position: (0, 2). Direction: North.
"L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: West.
"L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: South.
"G": move one step. Position: (0, 1). Direction: South.
"G": move one step. Position: (0, 0). Direction: South.
Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (0, 2) --> (0, 1) --> (0, 0).
Based on that, we return true.
Example 2:

Input: instructions = "GG"
Output: false
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"G": move one step. Position: (0, 2). Direction: North.
Repeating the instructions, keeps advancing in the north direction and does not go into cycles.
Based on that, we return false.
Example 3:

Input: instructions = "GL"
Output: true
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"L": turn 90 degrees anti-clockwise. Position: (0, 1). Direction: West.
"G": move one step. Position: (-1, 1). Direction: West.
"L": turn 90 degrees anti-clockwise. Position: (-1, 1). Direction: South.
"G": move one step. Position: (-1, 0). Direction: South.
"L": turn 90 degrees anti-clockwise. Position: (-1, 0). Direction: East.
"G": move one step. Position: (0, 0). Direction: East.
"L": turn 90 degrees anti-clockwise. Position: (0, 0). Direction: North.
Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (-1, 1) --> (-1, 0) --> (0, 0).
Based on that, we return true.
 

Constraints:

1 <= instructions.length <= 100
instructions[i] is 'G', 'L' or, 'R'.
 */

/**
 * @param {string} instructions
 * @return {boolean}
 */
export function robotBoundedInCircle(instructions){
  const direction = [[0,1],[1,0],[0,-1],[-1,0]];
  let head = 0,x= 0, y=0;


  function moveRobot(){
    x = x + direction[head][0];
    y = y + direction[head][1];
  }

  for(let instruction of instructions){
  
    switch(instruction){
        case "G":{
            moveRobot();
            break;
        }
        case "L":{
            head = (head + 3) % 4;
            break;
        }
        case "R":{
            head = (head + 1) % 4
            break;
        }        
    }   
  }

   return (x === 0 && y === 0) || head > 0;
}


export function executeRobotBoundedInCircleUseCases(){
    let instructions = ["GGLLGG","GG","GL"];    
    for(let instruction of instructions){
        console.log("robotBoundedInCircle for ",instruction +" :", robotBoundedInCircle(instruction));
        //isRobotBounded(instruction);
    }
}

//Approch 2 
function isRobotBounded(instructions) {
	const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
	let head = 0;
	let x = 0;
	let y = 0;
	
	for (const instruction of instructions) { 
		if (instruction === 'G') {
			x = x + dirs[head][0];
			y = y + dirs[head][1];
		} else if (instruction === 'L') {
			head = (4 + head - 1) % 4;
		} else {
			head = (4 + head + 1) % 4;
		}
	}
	const isAtOrigin = (x === 0 && y === 0);
	const isHeadingNorth = head === 0

	return isAtOrigin || (! isHeadingNorth);
}

//approch 3
var _isRobotBounded = function(instructions) {
    var dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let k = 0, x = 0, y = 0;
    for(let i=0; i<instructions.length; i++){
        if(instructions[i] == 'R'){
            k = (k + 1) % 4; 
        }else if(instructions[i] == 'L'){
            k = (k + 3) % 4;
        }else{
            x += dir[k][0];
            y += dir[k][1];
        }
    }
    return x == 0 && y == 0 || k > 0;  
};


