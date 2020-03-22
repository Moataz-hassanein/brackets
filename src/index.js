module.exports = function check(str, bracketsConfig) {
  var arr = [];
  for (var i  = 0; i < str.length; i++ ){
    if ( str[i] == "(" || str[i] == "{" || str[i] == "[" ) {
      arr.push(str[i]);
    }else if ( str[i] == ")" &&  arr[arr.length-1] == "("  ) {
        arr.pop();
    } else if ( str[i] == "}" &&  arr[arr.length-1] == "{"  ) {
      arr.pop();
    }else if  ( str[i] == "]" &&  arr[arr.length-1] == "["  ) {
      arr.pop();
      
    } else if ( str[i] == "|" && arr[arr.length-1] == "|") {  
        arr.pop();
    }else if ( str[i] == "|" ) {
      arr.push(str[i]);
    } else {
      return false;
    }
  }
  if (arr.length == 0) {
    return true;
    
  } else {
    return false;
  }
}
