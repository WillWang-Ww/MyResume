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

//add code to content
function writeContent(prefix,getCode,selector,fn){
  let domCode = document.querySelector(selector)
  domCode.innerHTML = prefix || ''
  let n = 0
  let timer = setInterval(()=>{
    n += 1
    domCode.innerHTML = prefix + getCode.substring(0,n)
    if (n >= getCode.length) {
      window.clearInterval(timer)
      fn && fn.call()
    }
  }, 80)
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
#content{
  background-color: #e3edf7;
  width: 100%;
  height: 100%;
}
/*
*接下来向简历里面填充内容
*左半栏是我的基本信息
*/
#personalInfo{
  height: 100%;
  width: 30%;
  background-color: #6fa7da;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
#portrait{
  width: 180px;
  height: 180px;
  background-color:white;
  border-radius: 50%;
  margin:30px 15px;
}
`
var result3 =`
/*
*null
*/
`

var text1 =`王子威`
var text2 =`意向：前端工程师`
var text3 = `
出生日期：1996.09.02 <br>
<br>
邮箱：wangziweichn@outlook.com <br>
<br>
电话：16602060118 <br>
<br>
现居：深圳 <br>
`
var text4 = `教育经历`
var text5 = `
电子科技大学（985） 2014-2018
智能电网信息工程
`
writeCode('',result,()=>{   //第一次写入，主要初始化写入框
  creatPaper(() => {    //创建简历的DOM树
    writeCode(result,result2,(()=>{   //第二次写入，主要完成简历左半栏样式
        writeCode(result+result2,result3,()=>{
          writeContent('',text1,'#name',()=>{
            writeContent('',text2,'#job',()=>{
              writeContent('',text3,'#contact')
            })
          })
        })
    }))
  })
})

function creatPaper(fn){
  //paper创建
  var paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
  var content = document.createElement('div')
  content.id = 'content'
  paper.appendChild(content)

  //content主要内容创建
  let personalInfo = document.createElement('div')
  let programInfo = document.createElement('div')
  personalInfo.id = 'personalInfo'
  programInfo.id = 'programInfo'
  content.appendChild(personalInfo)
  content.appendChild(programInfo)

  //左半栏personalInfo的创建
  let portrait = document.createElement('div')
  portrait.id = 'portrait'
  personalInfo.appendChild(portrait)
  let name = document.createElement('div')
  name.id = 'name'
  name.className = 'name'
  personalInfo.appendChild(name)
  let job = document.createElement('div')
  job.id = 'job'
  job.className = 'job'
  personalInfo.appendChild(job)
  let contact = document.createElement('div')
  contact.id = 'contact'
  contact.className = 'contact'
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

  //call下一个回调函数
  fn.call()
}

