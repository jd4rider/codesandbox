(this.webpackJsonpcodesandbox=this.webpackJsonpcodesandbox||[]).push([[0],{110:function(e,t,n){},116:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(27),r=n.n(s),o=(n(80),n.p,n(81),n(46)),i=n.n(o),j=n(12),l=n(127),d=n(14),b=n(8),u=n(5),h=(n(90),n(74)),O=n(1);var x,p,m=function(e){return Object(O.jsx)(h.a,{height:"28vh",defaultLanguage:e.code,defaultValue:e.default,theme:"vs-dark",onChange:function(t,n){e.setItem(t)}})},g=function(){var e=a.a.createRef(),t=Object(c.useState)(" "),n=Object(u.a)(t,2),s=n[0],r=n[1],o=Object(c.useState)(" "),j=Object(u.a)(o,2),l=j[0],d=j[1],b=Object(c.useState)(" "),h=Object(u.a)(b,2),x=h[0],p=h[1],g=Object(c.useState)(" "),f=Object(u.a)(g,2),v=f[0],y=f[1],S=Object(c.useState)(""),k=Object(u.a)(S,2),w=k[0],C=k[1],F=Object(c.useState)(""),L=Object(u.a)(F,2),N=L[0],I=L[1],P=Object(c.useState)(!1),z=Object(u.a)(P,2),T=z[0],D=z[1],A=Object(c.useState)(!1),G=Object(u.a)(A,2),J=G[0],U=G[1];console.log("/");Object(c.useEffect)((function(){!function(){var t=e.current.contentWindow.document,n='\n        <!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <meta charset="UTF-8">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n            <meta http-equiv="X-UA-Compatible" content="ie=edge">\n            <title>Document</title>\n            '.concat(v,"\n            <style>\n            ").concat(l,"\n            </style>\n            ").concat(N,"\n        </head>\n        <body>\n            ").concat(x,'\n\n            <script type="text/javascript">\n            ').concat(s,"\n            <\/script>\n            ").concat(w,"\n        </body>\n        </html>\n        ");t.open(),t.write(n),t.close()}()}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("section",{className:"playground",children:[Object(O.jsxs)("div",{className:"code-editor html-code",children:[Object(O.jsxs)("div",{className:"editor-header",children:["HTML",Object(O.jsx)("label",{children:Object(O.jsx)(i.a,{onChange:function(e){e?function(e){y('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">'),C('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"><\/script>'),D(e)}(e):function(e){y(""),C(""),D(e)}(e)},checked:T})}),Object(O.jsx)("label",{children:Object(O.jsx)(i.a,{onChange:function(e){e?function(e){I('<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"><\/script>'),U(e)}(e):function(e){I(""),U(e)}(e)},checked:J})})]}),Object(O.jsx)(m,{code:"html",default:"\x3c!-- some comment --\x3e",setItem:p})]}),Object(O.jsxs)("div",{className:"code-editor css-code",children:[Object(O.jsx)("div",{className:"editor-header",children:"CSS"}),Object(O.jsx)(m,{code:"css",default:"/* some comment */",setItem:d})]}),Object(O.jsxs)("div",{className:"code-editor js-code",children:[Object(O.jsx)("div",{className:"editor-header",children:"JAVASCRIPT"}),Object(O.jsx)(m,{code:"javascript",default:"// some comment",setItem:r})]})]}),Object(O.jsx)("section",{className:"result",children:Object(O.jsx)("iframe",{title:"result",className:"iframe",ref:e})})]})},f=n(2),v=n(47),y=n(48),S=n.n(y),k=n(130),w=n(70),C=n(35),F=n(49),L=n.n(F),N=(n(110),Object(C.css)(x||(x=Object(v.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])))),I=function(){var e=Object(j.d)(),t=a.a.useState({username:"",password:""}),n=Object(u.a)(t,2),c=n[0],s=n[1],r=a.a.useState(!0),o=Object(u.a)(r,2),i=o[0],l=o[1],d=a.a.useState("#FF0000"),h=Object(u.a)(d,1)[0],x=Object(b.g)();return Object(O.jsxs)("div",{className:"wrapper fadeInDown",children:[Object(O.jsxs)("div",{id:"formContent",className:i?null:"grayout",children:[Object(O.jsxs)(k.a,{onSubmit:function(t){t.preventDefault(),S.a.post("".concat("http://localhost:5000/").concat("api/login"),c).then((function(t){200===t.status&&e({token:t.data.token,expiresIn:60,tokenType:"Bearer",authState:t.data})&&x.push("/")}))},children:[Object(O.jsxs)(k.a.Group,{size:"lg",controlId:"login",children:[Object(O.jsx)(k.a.Label,{children:"Username"}),Object(O.jsx)(k.a.Control,{autoFocus:!0,type:"username",value:c.username,onChange:function(e){return s(Object(f.a)(Object(f.a)({},c),{},{username:e.target.value}))}})]}),Object(O.jsxs)(k.a.Group,{size:"lg",controlId:"password",children:[Object(O.jsx)(k.a.Label,{children:"Password"}),Object(O.jsx)(k.a.Control,{type:"password",value:c.password,onChange:function(e){return s(Object(f.a)(Object(f.a)({},c),{},{password:e.target.value}))}})]}),Object(O.jsx)(w.a,{block:!0,size:"lg",type:"submit",disabled:!(c.username.length>0&&c.password.length>0),onClick:function(){return l(!i)},children:"Login"})]}),Object(O.jsx)("div",{id:"formFooter",children:Object(O.jsx)("a",{className:"underlineHover",href:"#",children:"Forgot Password?"})})]}),Object(O.jsx)("br",{}),Object(O.jsx)(L.a,{color:h,loading:!i,css:N,size:150})]})},P=(n(116),Object(C.css)(p||(p=Object(v.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])))),z=function(){var e=Object(j.d)(),t=a.a.useState({username:"",password:"",fname:"",lname:""}),n=Object(u.a)(t,2),c=n[0],s=n[1],r=a.a.useState(!0),o=Object(u.a)(r,2),i=o[0],l=o[1],d=a.a.useState("#FF0000"),h=Object(u.a)(d,1)[0],x=Object(b.g)();return Object(O.jsxs)("div",{className:"wrapper fadeInDown",children:[Object(O.jsxs)("div",{id:"formContent",className:i?null:"grayout",children:[Object(O.jsxs)(k.a,{onSubmit:function(t){t.preventDefault(),S.a.post("".concat("http://localhost:5000/").concat("api/signup"),c).then((function(t){200===t.status&&e({token:t.data.token,expiresIn:60,tokenType:"Bearer",authState:t.data})&&x.push("/")}))},children:[Object(O.jsxs)(k.a.Group,{size:"lg",controlId:"login",children:[Object(O.jsx)(k.a.Label,{children:"First Name"}),Object(O.jsx)(k.a.Control,{autoFocus:!0,type:"username",value:c.fname,onChange:function(e){return s(Object(f.a)(Object(f.a)({},c),{},{fname:e.target.value}))}})]}),Object(O.jsxs)(k.a.Group,{size:"lg",controlId:"login",children:[Object(O.jsx)(k.a.Label,{children:"Last Name"}),Object(O.jsx)(k.a.Control,{type:"username",value:c.lname,onChange:function(e){return s(Object(f.a)(Object(f.a)({},c),{},{lname:e.target.value}))}})]}),Object(O.jsxs)(k.a.Group,{size:"lg",controlId:"login",children:[Object(O.jsx)(k.a.Label,{children:"Username"}),Object(O.jsx)(k.a.Control,{type:"username",value:c.username,onChange:function(e){return s(Object(f.a)(Object(f.a)({},c),{},{username:e.target.value}))}})]}),Object(O.jsxs)(k.a.Group,{size:"lg",controlId:"password",children:[Object(O.jsx)(k.a.Label,{children:"Password"}),Object(O.jsx)(k.a.Control,{type:"password",value:c.password,onChange:function(e){return s(Object(f.a)(Object(f.a)({},c),{},{password:e.target.value}))}})]}),Object(O.jsx)(w.a,{block:!0,size:"lg",type:"submit",disabled:!(c.username.length>0&&c.password.length>0),onClick:function(){return l(!i)},children:"Signup"})]}),Object(O.jsx)("div",{id:"formFooter",children:Object(O.jsx)("a",{className:"underlineHover",href:"#",children:"Forgot Password?"})})]}),Object(O.jsx)("br",{}),Object(O.jsx)(L.a,{color:h,loading:!i,css:P,size:150})]})},T=n(129),D=n(131),A=n(128),G={color:"inherit","text-decoration":"inherit"},J=function(){var e=Object(j.b)(),t=Object(j.e)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(T.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top",children:[Object(O.jsx)(T.a.Brand,{href:"/",children:"JDPlayground"}),Object(O.jsxs)(D.a,{className:"me-auto",children:[Object(O.jsx)(D.a.Link,{children:Object(O.jsx)(d.b,{to:"/",style:G,children:"Home"})}),Object(O.jsx)(D.a.Link,{children:Object(O.jsx)(d.b,{to:"/Features",style:G,children:"Features"})}),Object(O.jsx)(D.a.Link,{href:"#pricing",children:"Pricing"})]}),Object(O.jsx)(D.a,{children:Object(O.jsx)(A.a,{menuAlign:"right",title:"Hello ".concat(e().username),id:"basic-nav-dropdown",children:Object(O.jsx)(A.a.Item,{onClick:function(){return t()},children:"Logout"})})})]})})},U={color:"inherit","text-decoration":"inherit"},H=function(){Object(j.b)(),Object(j.e)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(T.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top",children:[Object(O.jsx)(T.a.Brand,{href:"/",children:"JDPlayground"}),Object(O.jsxs)(D.a,{className:"me-auto",children:[Object(O.jsx)(D.a.Link,{children:Object(O.jsx)(d.b,{to:"/",style:U,children:"Home"})}),Object(O.jsx)(D.a.Link,{children:Object(O.jsx)(d.b,{to:"/Features",style:U,children:"Features"})}),Object(O.jsx)(D.a.Link,{href:"#pricing",children:"Pricing"})]}),Object(O.jsx)(D.a,{children:Object(O.jsxs)(A.a,{menuAlign:"right",title:"Hello Random User",id:"basic-nav-dropdown",children:[Object(O.jsx)(A.a.Item,{children:Object(O.jsx)(d.b,{to:"/Signup",style:U,children:"Signup"})}),Object(O.jsx)(A.a.Item,{children:Object(O.jsx)(d.b,{to:"/Login",style:U,children:"Login"})})]})})]})})},E=function(){return Object(j.c)()()?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(J,{}),Object(O.jsx)(l.a,{fluid:!0,style:{paddingLeft:"0px",paddingRight:"0px",paddingTop:"56.4px"},children:Object(O.jsx)(b.d,{children:Object(O.jsx)(b.b,{path:"/",children:Object(O.jsx)(g,{})})})})]})}):Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(H,{}),Object(O.jsx)(l.a,{fluid:!0,style:{paddingLeft:"0px",paddingRight:"0px",paddingTop:"56.4px"},children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{path:"/Login",children:Object(O.jsx)(I,{})}),Object(O.jsx)(b.b,{path:"/Signup",children:Object(O.jsx)(z,{})}),Object(O.jsx)(b.b,{path:"/",children:Object(O.jsx)(g,{})})]})})]})})},M=function(){return Object(O.jsx)(j.a,{authStorageType:"localstorage",authStorageName:"_auth_t",authTimeStorageName:"_auth_time",stateStorageName:"_auth_state",children:Object(O.jsx)(E,{})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(119);r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(M,{})}),document.getElementById("root")),B()},80:function(e,t,n){},81:function(e,t,n){},90:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.3afd28c9.chunk.js.map