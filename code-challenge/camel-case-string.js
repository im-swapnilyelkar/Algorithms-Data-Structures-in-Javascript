export function camelCase(stringValue){
    //convert to lower case
    let lowerCase =  stringValue.toLowerCase();
    let convertedString = lowerCase.replace(/[^a-zA-Z0-9]+(.)/g,(match,char,val)=>{
        return char.toUpperCase();
    });
    console.log(convertedString);
    return convertedString;
    /*
    //Without RegularExpression
    const camelCase = stringValue.split("_").map((value)=>{
            return  value.substring(0,1).toUpperCase()  + value.substring(1).toLowerCase();
    });
    console.log(camelCase.join(""));
    */
}

export function executeCamelCaseUseCase(){  
   console.log(camelCase('hyphen-NaMe-format'));
   console.log(camelCase('underscore_name_format'));
}




