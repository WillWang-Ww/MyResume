//add code to #codeShow and style
function writeCode(prefix,getCode,fn){
  let domCode = document.querySelector('#codeShow')
  domCode.innerHTML = prefix || ''
  let n = 0
  let timer = setInterval(()=>{
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + getCode.substring(0,n), Prism.languages.css);
    codeStyle.innerHTML = prefix + getCode.substring(0,n)
    if ( n >= getCode.length){
      window.clearInterval(timer)
      fn.call()
    }
  },20)
}

var result=`/*
*你好朋友，我是王子威
*接下来请允许我用几分钟的时间来介绍一下我自己
*这样看着有些枯燥，我们来搞的好看一点
*首先简单初始化一下
*/
*{transition: all 1s;}
html{background: #f1f1f1;}
/*
*
*/
#codeShow{
  border:1px solid gray;
  padding:16px;
}
/*
*容我给代码加一点高亮
*/
.token.comment{color: slategray;}
.token.selector{color: #690;}
.token.punctuation{color: #999;}
`

var result2=`
#paper{
background: red;
height: 50px;
width: 50px;
}
`

writeCode('',result,()=>{
  creatPaper(() => {
    writeCode(result,result2)
  })
})

function creatPaper(fn){
  var paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
  fn.call()
}

function fn3(preCode,preResult,codeStyle){
  var n = 0
  var timer = setInterval(()=>{
    n += 1
    preCode.innerHTML = preResult +  result.substring(0,n)
    preCode.innerHTML = Prism.highlight(preCode.innerHTML, Prism.languages.css);
    codeStyle.innerHTML = preResult +  result.substring(0,n)
  },20) 
  if ( n >= result.length){
    window.clearInterval(timer)
  }
}