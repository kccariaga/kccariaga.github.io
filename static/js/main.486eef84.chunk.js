(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(13),o=a.n(l),c=(a(69),a(5)),s=a(6),i=a(8),m=a(7),u=a(9),d=a(41),h=a(2),p=(a(120),a(60)),E=a(42),g=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{width:"100%",margin:"auto"}},n.a.createElement(h.Grid,{className:"landing-grid"},n.a.createElement(h.Cell,{col:12},n.a.createElement("img",{src:"/portfolio/images/profilepic3.jpg",alt:"avatar",className:"avatar-img"}),n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",null,"Software Engineer"),n.a.createElement("hr",null),n.a.createElement("p",null," Java | C/C++ | Python | Javascript | HTML5 | CSS | React | Node | Bootstrap  "),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://www.linkedin.com/in/karen-cariaga-2a8241123/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),n.a.createElement("a",{href:"https://github.com/kccariaga",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))))))}}]),t}(r.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"About Me"),n.a.createElement("body",null,"Coming soon!"))}}]),t}(r.Component),f=a(61),v=a(15),C=a(63),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={name:"",email:"",subject:"",message:""},a.submitHandler=function(e){e.target.className+=" was-validated"},a.changeHandler=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"contact-grid"},n.a.createElement(v.MDBContainer,null,n.a.createElement(v.MDBRow,null,n.a.createElement(v.MDBCol,{md:"3",class:"center"}),n.a.createElement(v.MDBCol,{md:"6",class:"center"},n.a.createElement("form",{action:"https://script.google.com/macros/s/AKfycbwmwd5Y6G3WLSaCG6sCB7iwVVBvfPJXC1lOV9CVZIlTL2uhK-ab/exec",method:"POST",className:"needs-validation",onSubmit:this.submitHandler,target:"_blank",Validate:!0},n.a.createElement("p",{className:"h4 text-center bold mb-4"},"Contact Me!"),n.a.createElement("label",{htmlFor:"defaultFormContactNameEx",className:"grey-text"},"Your name"),n.a.createElement("input",{value:this.state.name,name:"name",onChange:this.changeHandler,type:"text",id:"defaultFormContactNameEx",className:"form-control",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please enter your name."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormContactEmailEx",className:"grey-text"},"Your email"),n.a.createElement("input",{value:this.state.email,onChange:this.changeHandler,type:"email",name:"email",id:"defaultFormContactEmailEx",className:"form-control",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please provide a email."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormContactSubjectEx",className:"grey-text"},"Subject"),n.a.createElement("input",{value:this.state.subject,onChange:this.changeHandler,type:"text",name:"subject",id:"defaultFormContactSubjectEx",className:"form-control",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please enter the subject."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormContactMessageEx",className:"grey-text"},"Your message"),n.a.createElement("textarea",{value:this.state.message,onChange:this.changeHandler,type:"text",name:"message",id:"defaultFormContactMessageEx",className:"form-control",rows:"3",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please enter your message."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"),n.a.createElement("div",{className:"text-center mt-4"},n.a.createElement(v.MDBBtn,{type:"submit",color:"success"},"Send",n.a.createElement(v.MDBIcon,{icon:"paper-plane-o",className:"ml-2"}))))),n.a.createElement(v.MDBCol,{md:"3",class:"center"}))),n.a.createElement(C.Helmet,null,n.a.createElement("script",{"data-cfasync":"false",type:"text/javascript",src:"https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"})))}}]),t}(r.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={activeTab:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?n.a.createElement("div",{className:"projects-grid"},n.a.createElement(h.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(h.CardTitle,{style:{color:"gray",height:"176px",background:"url(/portfolio/images/letscodetogether.png) center / cover"}},"Let's Code Together"),n.a.createElement(h.CardText,null,"Lets Code Together is a Facebook Build Day Hack-a-thon collaboration with the aim to bring developers together to meet up, create applications and learn new skills. The user has the option to post project ideas for other users to find, as well as search for projects to collaborate on with others. Another portion of the website is dedicated to users who with to teach or learn new skills from other people.",n.a.createElement("br",null),"This website is powered by React, Bootstrap, HTML, CSS."),n.a.createElement(h.CardActions,{border:!0},n.a.createElement(h.Button,{colored:!0,href:"https://github.com/kccariaga/facebook_build_day_challenge",target:"_blank"},"Github"),n.a.createElement(h.Button,{colored:!0},"Live Demo(Coming Soon!)")),n.a.createElement(h.CardMenu,{style:{color:"fff"}},n.a.createElement(h.IconButton,{name:"share"}))),n.a.createElement(h.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(h.CardTitle,{style:{color:"gray",height:"176px",background:"url(/portfolio/images/mercenary.png) center / cover"}},"Mercenary"),n.a.createElement(h.CardText,null,"Mercenary is an rpg-idle game that follows an unnamed mercenary who has taken the task of hunting down a mysterious group that attacked the noble house Lancaster and rescue their kidnapped child. Gather clues, recruit warriors, and gain resources to empower your band to defeat stronger foes and reach your final destination.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),"This website is powered using web2py, vue.js, HTML, CSS,"),n.a.createElement(h.CardActions,{border:!0},n.a.createElement(h.Button,{colored:!0,href:"https://github.com/JCastelan/mercenary_game",target:"_blank"},"Github"),n.a.createElement(h.Button,{colored:!0},"Live Demo(Coming Soon!)")),n.a.createElement(h.CardMenu,{style:{color:"fff"}},n.a.createElement(h.IconButton,{name:"share"})))):1===this.state.activeTab?n.a.createElement("div",{className:"projects-grid"},n.a.createElement(h.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(h.CardTitle,{style:{color:"gray",height:"176px",background:"url(/portfolio/images/kzsc.png) center / cover"}},"KZSC Radio"),n.a.createElement(h.CardText,null,"This is an improved version of the existing KZSC Radio app where the user can stream 88.1FM on their phones. The new features include live chat with the DJ and other listeners, a donate page, playlist schedule, and album information.",n.a.createElement("br",null),"The tools used to create this application were Android Studio, Java and XML."),n.a.createElement(h.CardActions,{border:!0},n.a.createElement(h.Button,{colored:!0,href:"https://github.com/kemunoz/kzscradio",target:"_blank"},"Github"),n.a.createElement(h.Button,{colored:!0,href:"https://drive.google.com/file/d/1URhyYZD5JEdcOoTjqVTmRkHZO6qxalRo/view?usp=sharing",target:"_blank"},"Live Demo")),n.a.createElement(h.CardMenu,{style:{color:"fff"}},n.a.createElement(h.IconButton,{name:"share"})))):2===this.state.activeTab?n.a.createElement("div",{className:"projects-grid"},n.a.createElement("h1",null," Coming Soon! ")):void 0}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"category-tabs"},n.a.createElement(h.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},n.a.createElement(h.Tab,null,"Web Development"),n.a.createElement(h.Tab,null,"Mobile Development"),n.a.createElement(h.Tab,null,"Various Coursework")),n.a.createElement(h.Grid,null,n.a.createElement(h.Cell,{col:12},n.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),t}(r.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(h.Grid,null,n.a.createElement(h.Cell,{col:4},n.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),n.a.createElement(h.Cell,{col:8},n.a.createElement("h4",{style:{marginTop:"0px"}},this.props.schoolName),n.a.createElement("p",null,this.props.schoolDescription)))}}]),t}(r.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(h.Grid,null,n.a.createElement(h.Cell,{col:4},n.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),n.a.createElement(h.Cell,{col:8},n.a.createElement("h4",{style:{marginTop:"0px"}},this.props.jobName),n.a.createElement("p",null,this.props.jobDescription)))}}]),t}(r.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(h.Grid,null,n.a.createElement(h.Cell,{col:12},n.a.createElement("div",{style:{display:"flex"}},this.props.skill," ",n.a.createElement(h.ProgressBar,{style:{margin:"auto",width:"75%"},progress:this.props.progress})," ")))}}]),t}(r.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(h.Grid,null,n.a.createElement(h.Cell,{col:4},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("img",{src:"/portfolio/images/profilepic2.jpg",alt:"avatar",style:{height:"350px"}})),n.a.createElement("h2",{style:{paddingTop:"20px"}},"Karen Cariaga"),n.a.createElement("h4",{style:{color:"grey"}},"Programmer"),n.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),n.a.createElement("p",null,"I am a recent graduate of Computer Science who is seeking new opportunities in technology. I am passionate about developing my skills in both front-end and back-end development."),n.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),n.a.createElement("h5",null,"Phone"),n.a.createElement("p",null,"(916) 225-5645"),n.a.createElement("h5",null,"Email"),n.a.createElement("p",null,"karenc.cariaga@gmail.com"),n.a.createElement("h5",null,"Website"),n.a.createElement("p",null,"https://kccariaga.github.io/portfolio/"),n.a.createElement(h.Button,{raised:!0,accent:!0,ripple:!0,href:"https://drive.google.com/file/d/1WKcQezx-pLe2jW-wNcfdP7oPBG-f8gba/view?usp=sharing",target:"_blank"},"Download My Resume "),n.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}})),n.a.createElement(h.Cell,{className:"resume-right-col",col:8},n.a.createElement("h2",null,"Education"),n.a.createElement(k,{startYear:2016,endYear:2018,schoolName:"University of California- Santa Cruz",schoolDescription:"Bachelor's in Computer Science"}),n.a.createElement(k,{startYear:2013,endYear:2016,schoolName:"Folsom Lake College",schoolDescription:"Associates in Math and Science"}),n.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),n.a.createElement("h2",null,"Experience"),n.a.createElement(w,{startYear:2019,endYear:"Present",jobName:"iD Tech Camps - Brand Ambassador",jobDescription:"Attending to ground marketing and recruiting events in order to\r spread the word of iD Tech to potential clients and future employees."}),n.a.createElement(w,{startYear:2017,endYear:2018,jobName:"iD Tech Camps, Sacramento State - Coding Instructor",jobDescription:"\r \u2022 Worked at iD Tech Camps for two summer sessions.Taught beginning to advanced \r computer programming courses in C++, Java, Python, and Scratch to class sizes\r of up to 10 students(ages 13-18)."}),n.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),n.a.createElement("h2",null,"Skills"),n.a.createElement(O,{skill:"C/C++",progress:100}),n.a.createElement(O,{skill:"Java",progress:100}),n.a.createElement(O,{skill:"Python",progress:100}),n.a.createElement(O,{skill:"SQL",progress:60}),n.a.createElement(O,{skill:"JavaScript",progress:70}),n.a.createElement(O,{skill:"HTML",progress:90}),n.a.createElement(O,{skill:"CSS",progress:90}),n.a.createElement(O,{skill:"React",progress:60}))))}}]),t}(r.Component),T=function(){return n.a.createElement(p.a,null,n.a.createElement(E.a,{exact:!0,path:"/portfolio/",component:g}),n.a.createElement(E.a,{path:"/portfolio/about",component:b}),n.a.createElement(E.a,{path:"/portfolio/contact",component:y}),n.a.createElement(E.a,{path:"/portfolio/projects",component:j}),n.a.createElement(E.a,{path:"/portfolio/resume",component:N}))},x=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"demo-big-content"},n.a.createElement(h.Layout,null,n.a.createElement(h.Header,{className:"header-color",title:"Karen Cariaga",scroll:!0},n.a.createElement(h.Navigation,null,n.a.createElement(d.a,{to:"/portfolio/"},"Home"),n.a.createElement(d.a,{to:"/portfolio/resume"},"Resume"),n.a.createElement(d.a,{to:"/portfolio/projects"},"Projects"),n.a.createElement(d.a,{to:"/portfolio/contact"},"Contact"))),n.a.createElement(h.Drawer,{title:"Karen Cariaga"},n.a.createElement(h.Navigation,null,n.a.createElement(d.a,{to:"/portfolio/"},"Home"),n.a.createElement(d.a,{to:"/portfolio/resume"},"Resume"),n.a.createElement(d.a,{to:"/portfolio/projects"},"Projects"),n.a.createElement(d.a,{to:"/portfolio/contact"},"Contact"))),n.a.createElement(h.Content,null,n.a.createElement("div",{className:"page-content"}),n.a.createElement(T,null))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(181),a(183),a(185),a(187);var S=a(58);o.a.render(n.a.createElement(S.a,null,n.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,t,a){e.exports=a(188)},69:function(e,t,a){}},[[64,2,1]]]);
//# sourceMappingURL=main.486eef84.chunk.js.map