(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(13),o=a.n(l),c=(a(67),a(5)),i=a(6),m=a(8),s=a(7),u=a(9),d=a(41),p=a(2),E=(a(118),a(59)),h=a(42),b=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{width:"100%",margin:"auto"}},n.a.createElement(p.Grid,{className:"landing-grid"},n.a.createElement(p.Cell,{col:12},n.a.createElement("img",{src:"https://lh3.googleusercontent.com/xb1AryovrehY3I_VUuFVmS6aO0-lC5nQ50IVXmhJ2CvOmGBKt52-z_RGWHoVFieJBYAMrZTigxmmEA2oirtLs2nS-sJx86eMIjmQli_F_Fw6qh9O3V8flKLJlhgTTKioLokn5inV2iouFyd3dxz5nElmNR4Q7ZbLcfHG4Xd_h2QSZr6kWvbPIGtkbhMGqmxHvQ3ZvEIx7T3viMDVqUuJvC7E_ssQXqTbOMcjZOiEBeXX_6lvJEeh3us4F1_3K239qmPafKlzM9u3dk5SuE1RkFgYf-bxB1A2ilE6ZN7XVCOdz8BH8WUjA2TS-ob_sNcIZDL3med6WjWTWf7wv8qtJxtLm-O8QIhMZrlIAy2a-apEOC7l9Bg4Ak51-teqfM-f_1-q30EfPgggLW0950BAfuvSMjIXgTpEme-Y4sRCs2OAAznDUuKX__plZaj6VCidpuPlEtPN2cjoBBc04Ru0bTVRd0Ek4LgzsDdQwS17aNE5BfssxmqjIiftajfakdhqzQ3VT1Xvc8UBoLxXdRgOJi2zOsJLDxbz505NiLd4C4xcxqVC-IyEJMcA-jsJBc2fi8FbL8iJkw-N1Bwq2MJBmGBlgUbHTfQ7m9E_P0-1TuDAqpw9n8Gt0t4ahVkm2AKb2NdBRAvQC01q3fxEusFxOomk=w517-h689-no",alt:"avatar",className:"avatar-img"}),n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",null,"Software Engineer"),n.a.createElement("hr",null),n.a.createElement("p",null," Java | C/C++ | Python | Javascript | HTML5 | CSS | React | Node | Bootstrap  "),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://www.linkedin.com/in/karen-cariaga-2a8241123/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),n.a.createElement("a",{href:"https://github.com/kccariaga",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))))))}}]),t}(r.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"About Me"),n.a.createElement("body",null,"Coming soon!"))}}]),t}(r.Component),f=a(60),v=a(15),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={name:"",email:"",subject:"",message:""},a.submitHandler=function(e){e.preventDefault(),e.target.className+=" was-validated"},a.changeHandler=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"contact-grid"},n.a.createElement(v.MDBContainer,null,n.a.createElement(v.MDBRow,null,n.a.createElement(v.MDBCol,{md:"3",class:"center"}),n.a.createElement(v.MDBCol,{md:"6",class:"center"},n.a.createElement("form",null,n.a.createElement("p",{className:"h4 text-center bold mb-4"},"Contact Me!"),n.a.createElement("label",{htmlFor:"defaultFormContactNameEx",className:"grey-text"},"Your name"),n.a.createElement("input",{value:this.state.name,name:"name",onChange:this.changeHandler,type:"text",id:"defaultFormContactNameEx",className:"form-control",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please enter your name."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormContactEmailEx",className:"grey-text"},"Your email"),n.a.createElement("input",{value:this.state.email,onChange:this.changeHandler,type:"email",name:"email",id:"defaultFormContactEmailEx",className:"form-control",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please provide a email."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormContactSubjectEx",className:"grey-text"},"Subject"),n.a.createElement("input",{value:this.state.subject,onChange:this.changeHandler,type:"text",name:"subject",id:"defaultFormContactSubjectEx",className:"form-control",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please enter the subject."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormContactMessageEx",className:"grey-text"},"Your message"),n.a.createElement("textarea",{value:this.state.message,onChange:this.changeHandler,type:"text",name:"message",id:"defaultFormContactMessageEx",className:"form-control",rows:"3",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please enter your message."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"),n.a.createElement("div",{className:"text-center mt-4"},n.a.createElement(v.MDBBtn,{type:"submit",color:"success"},"Send",n.a.createElement(v.MDBIcon,{icon:"paper-plane-o",className:"ml-2"}))))),n.a.createElement(v.MDBCol,{md:"3",class:"center"}))))}}]),t}(r.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={activeTab:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?n.a.createElement("div",{className:"projects-grid"},n.a.createElement(p.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(p.CardTitle,{style:{color:"white",height:"176px",background:"url(http://www.randomkittengenerator.com/cats/rotator.php) center / cover"}},"Project Title"),n.a.createElement(p.CardText,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."),n.a.createElement(p.CardActions,{border:!0},n.a.createElement(p.Button,{colored:!0},"Github"),n.a.createElement(p.Button,{colored:!0},"Live Demo")),n.a.createElement(p.CardMenu,{style:{color:"fff"}},n.a.createElement(p.IconButton,{name:"share"}))),n.a.createElement(p.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(p.CardTitle,{style:{color:"white",height:"176px",background:"url(http://www.randomkittengenerator.com/cats/rotator.php) center / cover"}},"Project Title"),n.a.createElement(p.CardText,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."),n.a.createElement(p.CardActions,{border:!0},n.a.createElement(p.Button,{colored:!0},"Github"),n.a.createElement(p.Button,{colored:!0},"Live Demo")),n.a.createElement(p.CardMenu,{style:{color:"fff"}},n.a.createElement(p.IconButton,{name:"share"}))),n.a.createElement(p.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(p.CardTitle,{style:{color:"white",height:"176px",background:"url(http://www.randomkittengenerator.com/cats/rotator.php) center / cover"}},"Project Title"),n.a.createElement(p.CardText,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."),n.a.createElement(p.CardActions,{border:!0},n.a.createElement(p.Button,{colored:!0},"Github"),n.a.createElement(p.Button,{colored:!0},"Live Demo")),n.a.createElement(p.CardMenu,{style:{color:"fff"}},n.a.createElement(p.IconButton,{name:"share"})))):1===this.state.activeTab?n.a.createElement("div",{className:"projects-grid"},n.a.createElement(p.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(p.CardTitle,{style:{color:"white",height:"176px",background:"url(http://www.randomkittengenerator.com/cats/rotator.php) center / cover"}},"Project Title"),n.a.createElement(p.CardText,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."),n.a.createElement(p.CardActions,{border:!0},n.a.createElement(p.Button,{colored:!0},"Github"),n.a.createElement(p.Button,{colored:!0},"Live Demo")),n.a.createElement(p.CardMenu,{style:{color:"fff"}},n.a.createElement(p.IconButton,{name:"share"})))):2===this.state.activeTab?n.a.createElement("div",{className:"projects-grid"},n.a.createElement(p.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(p.CardTitle,{style:{color:"white",height:"176px",background:"url(http://www.randomkittengenerator.com/cats/rotator.php) center / cover"}},"Project Title"),n.a.createElement(p.CardText,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."),n.a.createElement(p.CardActions,{border:!0},n.a.createElement(p.Button,{colored:!0},"Github"),n.a.createElement(p.Button,{colored:!0},"Live Demo")),n.a.createElement(p.CardMenu,{style:{color:"fff"}},n.a.createElement(p.IconButton,{name:"share"}))),n.a.createElement(p.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(p.CardTitle,{style:{color:"white",height:"176px",background:"url(http://www.randomkittengenerator.com/cats/rotator.php) center / cover"}},"Project Title"),n.a.createElement(p.CardText,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."),n.a.createElement(p.CardActions,{border:!0},n.a.createElement(p.Button,{colored:!0},"Github"),n.a.createElement(p.Button,{colored:!0},"Live Demo")),n.a.createElement(p.CardMenu,{style:{color:"fff"}},n.a.createElement(p.IconButton,{name:"share"})))):void 0}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"category-tabs"},n.a.createElement(p.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},n.a.createElement(p.Tab,null,"Web Development"),n.a.createElement(p.Tab,null,"Mobile Development"),n.a.createElement(p.Tab,null,"Various Coursework")),n.a.createElement(p.Grid,null,n.a.createElement(p.Cell,{col:12},n.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),t}(r.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(p.Grid,null,n.a.createElement(p.Cell,{col:4},n.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),n.a.createElement(p.Cell,{col:8},n.a.createElement("h4",{style:{marginTop:"0px"}},this.props.schoolName),n.a.createElement("p",null,this.props.schoolDescription)))}}]),t}(r.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(p.Grid,null,n.a.createElement(p.Cell,{col:4},n.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),n.a.createElement(p.Cell,{col:8},n.a.createElement("h4",{style:{marginTop:"0px"}},this.props.jobName),n.a.createElement("p",null,this.props.jobDescription)))}}]),t}(r.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(p.Grid,null,n.a.createElement(p.Cell,{col:12},n.a.createElement("div",{style:{display:"flex"}},this.props.skill," ",n.a.createElement(p.ProgressBar,{style:{margin:"auto",width:"75%"},progress:this.props.progress})," ")))}}]),t}(r.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(p.Grid,null,n.a.createElement(p.Cell,{col:4},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("img",{src:"https://lh3.googleusercontent.com/Hzu9MHFwoCjStT1_yJUGaJjSl1bItWyykbAmv6W56nnTRIBmnb2JOew3ov3OJKWJzOgcjbXW_G2NxxItaLAVn3Bj9uJU5lWAmfmPejML3YE-aMrirMwNmASfSP6Z8mF5vkT_VFBTdvNHD7BpwySHRsrNgry4dposSGKPOeaxX25ZTMK18DfwsMMDfbHAZIek6UGLIuH0PmR0IHkJ_1Lxr09v4ShOof0pNHtLYLnA0BWl3f9NnGRNYqWrweeLA7QXi29Ad12JpHgTDT2POENetnH6At48dXUktspoPWTwV5j-rjQWjAhtIEtJFD1ZCCdSGF1PeRGudD8Tb9u_zQqD__NJwQuvonXcos4vIF727F31Bbv9GuzDNQP7iZF8nkFYIcEYobETS87A52eQRHDDk2ZClMUsZ2dhzryxFppbs5kPkpmJqMQVUxpOnHfuXLAfae8myBlW6ribZEyF6JJC2kp-fmbm0w-mQKI-3B6CUIETacOBApJVZfsugZwvuKtRtQ5kt9ssc_QVjFDwQ_O0efMwguFiWqlYJfYPhCg6qScX6l35prfGbqGWM9MWmLkw_s3VI1myYcHQjI_f2cFh0aTulOxP2Q-3gImIK5POfrNmjY2Ma_pI2RSPkavrF1nWmp7uyGG5VCOfa0Sq2kH5CChZ=w517-h689-no",alt:"avatar",style:{height:"350px"}})),n.a.createElement("h2",{style:{paddingTop:"20px"}},"Karen Cariaga"),n.a.createElement("h4",{style:{color:"grey"}},"Programmer"),n.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),n.a.createElement("p",null,"I am a recent graduate of Computer Science who is seeking new opportunities in technology. I am passionate about developing my skills in both front-end and back-end development."),n.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),n.a.createElement("h5",null,"Phone"),n.a.createElement("p",null,"(916) 225-5645"),n.a.createElement("h5",null,"Email"),n.a.createElement("p",null,"karenc.cariaga@gmail.com"),n.a.createElement("h5",null,"Website"),n.a.createElement("p",null,"https://kccariaga.github.io/portfolio/"),n.a.createElement(p.Button,{raised:!0,accent:!0,ripple:!0,href:"https://drive.google.com/file/d/1WKcQezx-pLe2jW-wNcfdP7oPBG-f8gba/view?usp=sharing",target:"_blank"},"Download My Resume "),n.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}})),n.a.createElement(p.Cell,{className:"resume-right-col",col:8},n.a.createElement("h2",null,"Education"),n.a.createElement(y,{startYear:2016,endYear:2018,schoolName:"University of California- Santa Cruz",schoolDescription:"Bachelor's in Computer Science"}),n.a.createElement(y,{startYear:2013,endYear:2016,schoolName:"Folsom Lake College",schoolDescription:"Associates in Math and Science"}),n.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),n.a.createElement("h2",null,"Experience"),n.a.createElement(k,{startYear:2019,endYear:"Present",jobName:"iD Tech Camps - Brand Ambassador",jobDescription:"Attending to ground marketing and recruiting events in order to\r spread the word of iD Tech to potential clients and future employees."}),n.a.createElement(k,{startYear:2017,endYear:2018,jobName:"iD Tech Camps, Sacramento State - Coding Instructor",jobDescription:"\r \u2022 Worked at iD Tech Camps for two summer sessions.Taught beginning to advanced \r computer programming courses in C++, Java, Python, and Scratch to class sizes\r of up to 10 students(ages 13-18)."}),n.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),n.a.createElement("h2",null,"Skills"),n.a.createElement(w,{skill:"C/C++",progress:100}),n.a.createElement(w,{skill:"Java",progress:100}),n.a.createElement(w,{skill:"Python",progress:100}),n.a.createElement(w,{skill:"SQL",progress:60}),n.a.createElement(w,{skill:"JavaScript",progress:70}),n.a.createElement(w,{skill:"HTML",progress:90}),n.a.createElement(w,{skill:"CSS",progress:90}),n.a.createElement(w,{skill:"React",progress:60}))))}}]),t}(r.Component),O=function(){return n.a.createElement(E.a,null,n.a.createElement(h.a,{exact:!0,path:"/portfolio",component:b}),n.a.createElement(h.a,{path:"/aboutme",component:g}),n.a.createElement(h.a,{path:"/contact",component:C}),n.a.createElement(h.a,{path:"/projects",component:j}),n.a.createElement(h.a,{path:"/resume",component:x}))},N=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"demo-big-content"},n.a.createElement(p.Layout,null,n.a.createElement(p.Header,{className:"header-color",title:"Karen Cariaga",scroll:!0},n.a.createElement(p.Navigation,null,n.a.createElement(d.a,{to:"/portfolio"},n.a.createElement("i",{className:"fa fa-home","aria-hidden":"true"})),n.a.createElement(d.a,{to:"/resume"},"Resume"),n.a.createElement(d.a,{to:"/aboutme"},"About Me"),n.a.createElement(d.a,{to:"/projects"},"Projects"),n.a.createElement(d.a,{to:"/contact"},"Contact"))),n.a.createElement(p.Drawer,{title:"Karen Cariaga"},n.a.createElement(p.Navigation,null,n.a.createElement(d.a,{to:"/resume"},"Resume"),n.a.createElement(d.a,{to:"/aboutme"},"About Me"),n.a.createElement(d.a,{to:"/projects"},"Projects"),n.a.createElement(d.a,{to:"/contact"},"Contact"))),n.a.createElement(p.Content,null,n.a.createElement("div",{className:"page-content"}),n.a.createElement(O,null))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(172),a(174),a(176),a(178);var T=a(58);o.a.render(n.a.createElement(T.a,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,a){e.exports=a(179)},67:function(e,t,a){}},[[62,2,1]]]);
//# sourceMappingURL=main.5bc81044.chunk.js.map