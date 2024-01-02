var mergeAlternately = function(word1, word2) {
    var a = word1.split("").filter(Boolean);
  
    var b = word2.split("");
  
    var mergedString = '';
  
  
    for(var i = 0; i < a.length || i < b.length; i++) {  //loop condition checks if i is less than a.length or b.length
     if(i < a.length)  //if i is less than a.length add a[i] to string first.
       mergedString +=  a[i];
     if(i < b.length)  //if i is less than b.length add b[i] to string.
       mergedString +=  b[i];
    }
  return mergedString;
  
      
  };
  console.log(mergeAlternately('abc', 'def'))