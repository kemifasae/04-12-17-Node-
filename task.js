String.prototype.count=function(c) { 
  var result = 0, i = 0;
  for(i;i<this.length;i++){
    if(this[i]==c)
      result++;
  }
  return result;
};

function childString(word1, word2){
  let str_len = word2.length, result= '' ; 

  if ((typeof(word1)!== 'string') || (typeof(word2)!== 'string')){
    return 'both arguments should be strings';
  }
  
  if (word2.length !== word1.length){
    return 'words should have equal length';
  }
  
  if (! /^[a-zA-Z]+$/.test(word1) || ! /^[a-zA-Z]+$/.test(word1)) {
    return 'can only compare strings with alphabets';
  }
  
  for(let i=0; i<str_len; i++){
    if (word2.includes(word1[i])){
      if((result.includes(word1[i])) && word2.count(word1[i]) === result.count(word1[i]) ){
        continue;
      }
        result += word1[i];  
    }
  }
  return result;
}

//childString('harry', 'sally');
