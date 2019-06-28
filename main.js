var result=`/* 
*/
*{transition: all 1s;}
html{background: #66CCFF;}

`

var n = 0

var timer = setInterval(()=>{
  n += 1
  var code = document.getElementById('codeShow')
  var codeStyle = document.getElementById('codeStyle')
  code.innerHTML = result.substring(0,n)
  codeStyle.innerHTML = result.substring(0,n)
  if ( n >= result.length){
    window.clearInterval(timer)
  }
},10)