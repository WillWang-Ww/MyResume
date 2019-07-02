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
  }, 0)
}

//add code to #content and style
function writeContent(prefix,getCode,fn){
  let domCode = document.querySelector('#content')
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
  }, 0)
}

var result=`/*
*你好朋友，我是王子威
*接下来请允许我用几分钟的时间来介绍一下我自己
*这样看着有些枯燥，我们来搞的好看一点
*首先简单初始化一下
*/
*{transition: all 1s;}
html{background: #f2f2f2;}
/*
*容我给代码加一点高亮
*/
.token.comment{color: slategray;}
.token.selector{color: #690;}
.token.punctuation{color: #999;}
.token.property{color: #905}
/*
*美化一下我们写代码的框框~
*/
#codeShow{
  padding: 24px;
  border: 2px solid #e3edf7;
  box-shadow: 0 0 10px #e3edf7;
  background-color: #fefff7;
}
#codeWrapper{
  padding: 16px;
  display: flex;
  position:fixed;
  width: 30%; 
  height: 100vh;
  left: 0; 
}
/*
*准备一张A4纸来写我的简历啦
*/
`

var result2=`
#paper{
  padding: 16px;
  position: fixed;
  width: 70%;
  height: 100%;
  right: 0;
  display: flex;
  align-items: flex-start;
}
#content{
  background-color: #e3edf7;
  width: 100%;
  height: 100%;
  display:block;
}
`


writeCode('',result,()=>{
  creatPaper(() => {
    writeCode(result,result2,(()=>{
      creatContent(()=>{
        
      })
    }))
  })
})

function creatPaper(fn){
  var paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
  var content = document.createElement('div')
  content.id = 'content'
  paper.appendChild(content)
  fn.call()
}

function creatContent(fn){
  let content = document.querySelector('#content')
  let personalInfo = document.createElement('div')
  let programInfo = document.createElement('div')
  personalInfo.id = 'personalInfo'
  programInfo.id = 'programInfo'
  content.appendChild(personalInfo)
  content.appendChild(programInfo)
  let portrait = document.createElement('div')
  portrait.id = 'portrait'
  personalInfo.appendChild(portrait)
  let name = document.createElement('div')
  name.id = 'name'
  personalInfo.appendChild(name)
  let job = document.createElement('div')
  job.id = 'job'
  personalInfo.appendChild(job)
  let contact = document.createElement('div')
  contact.id = 'contact'
  personalInfo.appendChild(contact)
  let education = document.createElement('div')
  education.id = 'education'
  personalInfo.appendChild(education)
  let br = document.createElement('div')
  br.id = 'br'
  personalInfo.appendChild(br)
  let duration = document.createElement('div')
  duration.id = 'duration'
  personalInfo.appendChild(duration)
  let school = document.createElement('div')
  school.id = 'school'
  personalInfo.appendChild(school)
  let major = document.createElement('div')
  major.id = 'major'
  personalInfo.appendChild(major)
  fn.call()
}

