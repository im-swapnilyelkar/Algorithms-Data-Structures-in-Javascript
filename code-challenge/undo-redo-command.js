export function undoRedoCommand(value){    
     this.commands = [];   
     this.value = value;
}

undoRedoCommand.prototype.saveCommand = function(event){
    this.commands.push({
        action: { type:"add" , key :event.key, index: event.selectionStart},
        inverse:{ type:"remove", index:event.selectionStart}
    });    
}

undoRedoCommand.prototype.undo= function() {
    this.value = this.value.split("");
    let lastCommand = this.commands.pop();
    if(!lastCommand){
        return;
    }
    switch(lastCommand.inverse.type){
        case "remove":
           this.value.splice(lastCommand.inverse.index,1);
        break;
        case "add":
        break;
    }
   return this.value.join("");
}




export function undoRedoCommandUseCases(){
   const initialValue = "Hello World";
   const newString = new undoRedoCommand(initialValue);

   const event = {
       key : "delete",
       selectionStart:0
   }
   newString.saveCommand(event);
   console.log("undo command :",newString.undo());
}