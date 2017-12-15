function camelCase(camelString){
  if(camelString.length===0) return ('empty string');
  
  if(camelString.length>1){
    camelString = camelString.replace(/\s+/g, '');
  }
	
  let wordsArray = [], word = '';
	
  for(let i=0; i<camelString.length; i++){
    if (camelString[i] === camelString[i].toLowerCase()){
      word += camelString[i];
      continue;
    }
    wordsArray.push(word); word = ''; word += camelString[i];
  }
  wordsArray.push(word);
  wordsArray.unshift(wordsArray.length);
  return wordsArray;
}

camelCase('make Money Every Day');
