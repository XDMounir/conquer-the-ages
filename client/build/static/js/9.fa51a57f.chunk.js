(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1414:function(e,t,a){"use strict";a.r(t);var l=a(17),n=a(10),i=a(11),r=a(13),s=a(12),c=a(14),m=a(0),o=a.n(m),u=a(16),d=a(2),f=a(4),h=a.n(f),b=a(33),p=a(6),g=a(7),x=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,c=new Array(i),m=0;m<i;m++)c[m]=arguments[m];return(a=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={email:""},a.handleChange=function(e){a.setState(p.a.set(Object(l.a)({},a.state),e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value))},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"canBeSubmitted",value:function(){return this.state.email.length>0}},{key:"render",value:function(){var e=this.props.classes,t=this.state.email;return o.a.createElement("div",{className:h()(e.root,"flex flex-col flex-auto flex-no-shrink p-24 md:flex-row md:p-0")},o.a.createElement("div",{className:h()(e.intro,"flex flex-col flex-no-grow items-center p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left")},o.a.createElement(g.b,{animation:"transition.expandIn"},o.a.createElement("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),o.a.createElement(g.b,{animation:"transition.slideUpIn",delay:300},o.a.createElement(d.hb,{variant:"h3",color:"inherit",className:"font-light"},"Welcome to the FUSE!")),o.a.createElement(g.b,{delay:400},o.a.createElement(d.hb,{variant:"subtitle1",color:"inherit",className:"max-w-512 mt-16"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis."))),o.a.createElement(g.b,{animation:{translateX:[0,"100%"]}},o.a.createElement(d.d,{className:h()(e.card,"mx-auto m-16 md:m-0")},o.a.createElement(d.f,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 "},o.a.createElement(d.hb,{variant:"h6",className:"md:w-full mb-32"},"RECOVER YOUR PASSWORD"),o.a.createElement("form",{name:"recoverForm",noValidate:!0,className:"flex flex-col justify-center w-full"},o.a.createElement(d.eb,{className:"mb-16",label:"Email",autoFocus:!0,type:"email",name:"email",value:t,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(d.c,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"Reset",disabled:!this.canBeSubmitted()},"SEND RESET LINK")),o.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},o.a.createElement(b.a,{className:"font-medium",to:"/pages/auth/login-2"},"Go back to login"))))))}}]),t}(m.Component);t.default=Object(u.withStyles)(function(e){return{root:{background:"url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",backgroundSize:"cover"},intro:{color:"#ffffff"},card:{width:"100%",maxWidth:400}}},{withTheme:!0})(x)}}]);
//# sourceMappingURL=9.fa51a57f.chunk.js.map