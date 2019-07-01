//add code to #codeShow and style
function writeCode(prefix,getCode,fn){
  let domCode = document.querySelector('#codeShow')
  domCode.innerHTML = prefix || ''
  let n = 0
  let timer = setInterval(()=>{
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + getCode.substring(0,n), Prism.languages.css);
    codeStyle.innerHTML = prefix + getCode.substring(0,n)
    domCode.scrollTop = domCode.scrollHeight
    if (n >= getCode.length) {
      window.clearInterval(timer)
      fn && fn.call()
    }
  }, 10)
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
//3D效果
/*
*准备一张A4纸来写我的简历啦
*/
`

var result2=`
.codeWrapper{
  position:fixed;
  left:0;
  width:50%;
  height:100%;
}
#paper{
  position:fixed;
  right:0;
  width:50%;
  height:100%;
  background:white;
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