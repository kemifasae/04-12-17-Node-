function detect_identical(sequence){
   let = last_str = '';
   identicals = [];
   identical_str = '';
   for (let i=0; i <= sequence.length; i++) {
     if (i===0) {
       identical_str += sequence[i];
     } else if (sequence[i] === last_str) {
       identical_str += sequence[i];
     } else {
       identicals.push(identical_str);
       identical_str = sequence[i];
     }
     last_str = sequence[i];
   }
   return identicals;
  }



 function reducible(seq) {
  let reduced = '';
  let identicals = detect_identical(seq);

   for(let i=0; i<identicals.length; i++) {
     if (identicals[i].length % 2 === 0) {
       reduced += '';
     } else {
       reduced += identicals[i][0];
     }
   }

   // base case (stop if all identicals length = 1)
   if(reduced === '' ) {
     return 'Empty';
   }
    identicals = detect_identical(reduced);
    i = 0;
    identicals.map(function(identical) {
      if(identical.length > 1) {
        i+=1;
      }
    });

    return i === 0 ?  reduced : reducible(reduced);

 }

 sequence = 'abbbbbcccddd';
//  console.log(only_victor(sequence));
console.log(sequence);
console.log(reducible(sequence));
