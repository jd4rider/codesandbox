(this.webpackJsonpcodesandbox=this.webpackJsonpcodesandbox||[]).push([[0],{102:function(e,t,a){},123:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(28),r=a.n(s),o=(a(93),a(4)),i=(a(94),a(14)),j=a(142),d=a(19),l=a(9),b=(a(102),a(71)),u=a.n(b),O=a(85),h=a(1);var x,p,m,g=function(e){return Object(h.jsx)(O.a,{height:"28vh",defaultLanguage:e.code,defaultValue:e.default,theme:"vs-dark",onChange:function(t,a){e.setItem(t)}})},f=a(141),v=a(81),S=a(147),y=function(e){var t=c.a.createRef(),a=Object(n.useState)(" "),s=Object(o.a)(a,2),r=s[0],i=s[1],j=Object(n.useState)(" "),d=Object(o.a)(j,2),l=d[0],b=d[1],O=Object(n.useState)(" "),x=Object(o.a)(O,2),p=x[0],m=x[1],y=Object(n.useState)(" "),C=Object(o.a)(y,2),k=C[0],w=C[1],N=Object(n.useState)(""),L=Object(o.a)(N,2),F=L[0],I=L[1],T=Object(n.useState)(""),z=Object(o.a)(T,2),D=z[0],A=z[1],P=Object(n.useState)(!1),M=Object(o.a)(P,2),E=M[0],G=M[1],H=Object(n.useState)(!1),J=Object(o.a)(H,2),U=J[0],B=J[1];Object(n.useEffect)((function(){!function(){var e=t.current.contentWindow.document,a='\n        <!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <meta charset="UTF-8">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n            <meta http-equiv="X-UA-Compatible" content="ie=edge">\n            <title>Document</title>\n            '.concat(k,"\n            <style>\n            ").concat(l,"\n            </style>\n            ").concat(D,"\n        </head>\n        <body>\n            ").concat(p,'\n\n            <script type="text/javascript">\n            ').concat(r,"\n            <\/script>\n            ").concat(F,"\n        </body>\n        </html>\n        ");e.open(),e.write(a),e.close()}(),e.setData&&e.setData({html:p,css:l,js:r})}),[k,l,p,r,D,F]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(f.a,{children:[e.tutorial&&Object(h.jsx)(v.a,{children:Object(h.jsx)("section",{className:"tutorial"})}),Object(h.jsx)(v.a,{xs:6,children:Object(h.jsx)("section",{className:"playground",children:Object(h.jsxs)(S.a,{children:[Object(h.jsxs)("div",{className:"code-editor html-code",children:[Object(h.jsxs)("div",{className:"editor-header",children:["HTML",Object(h.jsx)("label",{children:Object(h.jsx)(u.a,{onChange:function(e){e?function(e){w('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">'),I('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"><\/script>'),G(e)}(e):function(e){w(""),I(""),G(e)}(e)},checked:E})}),Object(h.jsx)("label",{children:Object(h.jsx)(u.a,{onChange:function(e){e?function(e){A('<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"><\/script>'),B(e)}(e):function(e){A(""),B(e)}(e)},checked:U})})]}),Object(h.jsx)(g,{code:"html",default:"\x3c!-- some comment --\x3e",setItem:m})]}),Object(h.jsxs)("div",{className:"code-editor css-code",children:[Object(h.jsx)("div",{className:"editor-header",children:"CSS"}),Object(h.jsx)(g,{code:"css",default:"/* some comment */",setItem:b})]}),Object(h.jsxs)("div",{className:"code-editor js-code",children:[Object(h.jsx)("div",{className:"editor-header",children:"JAVASCRIPT"}),Object(h.jsx)(g,{code:"javascript",default:"// some comment",setItem:i})]})]})})}),Object(h.jsx)(v.a,{children:Object(h.jsx)("section",{className:"result",children:Object(h.jsx)("iframe",{title:"result",className:"iframe",ref:t})})})]})})},C=a(2),k=a(42),w=a(43),N=a.n(w),L=a(53),F=a(82),I=a(35),T=a(44),z=a.n(T),D=(a(123),Object(I.css)(x||(x=Object(k.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])))),A=function(){var e=Object(i.d)(),t=c.a.useState({username:"",password:""}),a=Object(o.a)(t,2),n=a[0],s=a[1],r=c.a.useState(!0),j=Object(o.a)(r,2),d=j[0],b=j[1],u=c.a.useState("#FF0000"),O=Object(o.a)(u,1)[0],x=Object(l.g)();return Object(h.jsxs)("div",{className:"wrapper fadeInDown",children:[Object(h.jsxs)("div",{id:"formContent",className:d?null:"grayout",children:[Object(h.jsxs)(L.a,{onSubmit:function(t){t.preventDefault(),console.log("https://codesandbox-express.herokuapp.com/"),N.a.post("".concat("https://codesandbox-express.herokuapp.com/").concat("api/login"),n).then((function(t){200===t.status&&e({token:t.data.token,expiresIn:60,tokenType:"Bearer",authState:t.data})&&x.push("/")}))},children:[Object(h.jsxs)(L.a.Group,{size:"lg",controlId:"login",children:[Object(h.jsx)(L.a.Label,{children:"Username"}),Object(h.jsx)(L.a.Control,{autoFocus:!0,type:"username",value:n.username,onChange:function(e){return s(Object(C.a)(Object(C.a)({},n),{},{username:e.target.value}))}})]}),Object(h.jsxs)(L.a.Group,{size:"lg",controlId:"password",children:[Object(h.jsx)(L.a.Label,{children:"Password"}),Object(h.jsx)(L.a.Control,{type:"password",value:n.password,onChange:function(e){return s(Object(C.a)(Object(C.a)({},n),{},{password:e.target.value}))}})]}),Object(h.jsx)(F.a,{block:!0,size:"lg",type:"submit",disabled:!(n.username.length>0&&n.password.length>0),onClick:function(){return b(!d)},children:"Login"})]}),Object(h.jsx)("div",{id:"formFooter",children:Object(h.jsx)("a",{className:"underlineHover",href:"#",children:"Forgot Password?"})})]}),Object(h.jsx)("br",{}),Object(h.jsx)(z.a,{color:O,loading:!d,css:D,size:150})]})},P=(a(129),Object(I.css)(p||(p=Object(k.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])))),M=function(){var e=Object(i.d)(),t=c.a.useState({username:"",password:"",fname:"",lname:""}),a=Object(o.a)(t,2),n=a[0],s=a[1],r=c.a.useState(!0),j=Object(o.a)(r,2),d=j[0],b=j[1],u=c.a.useState("#FF0000"),O=Object(o.a)(u,1)[0],x=Object(l.g)();return Object(h.jsxs)("div",{className:"wrapper fadeInDown",children:[Object(h.jsxs)("div",{id:"formContent",className:d?null:"grayout",children:[Object(h.jsxs)(L.a,{onSubmit:function(t){t.preventDefault(),console.log("https://codesandbox-express.herokuapp.com/"),N.a.post("".concat("https://codesandbox-express.herokuapp.com/").concat("api/signup"),n).then((function(t){200===t.status?e({token:t.data.token,expiresIn:60,tokenType:"Bearer",authState:t.data})&&x.push("/"):201===t.status&&"User Already Exists"===t.data.error&&(b(!0),alert(t.data.error))}))},children:[Object(h.jsxs)(L.a.Group,{size:"lg",controlId:"login",children:[Object(h.jsx)(L.a.Label,{children:"First Name"}),Object(h.jsx)(L.a.Control,{autoFocus:!0,type:"username",value:n.fname,onChange:function(e){return s(Object(C.a)(Object(C.a)({},n),{},{fname:e.target.value}))}})]}),Object(h.jsxs)(L.a.Group,{size:"lg",controlId:"login",children:[Object(h.jsx)(L.a.Label,{children:"Last Name"}),Object(h.jsx)(L.a.Control,{type:"username",value:n.lname,onChange:function(e){return s(Object(C.a)(Object(C.a)({},n),{},{lname:e.target.value}))}})]}),Object(h.jsxs)(L.a.Group,{size:"lg",controlId:"login",children:[Object(h.jsx)(L.a.Label,{children:"Username"}),Object(h.jsx)(L.a.Control,{type:"username",value:n.username,onChange:function(e){return s(Object(C.a)(Object(C.a)({},n),{},{username:e.target.value}))}})]}),Object(h.jsxs)(L.a.Group,{size:"lg",controlId:"password",children:[Object(h.jsx)(L.a.Label,{children:"Password"}),Object(h.jsx)(L.a.Control,{type:"password",value:n.password,onChange:function(e){return s(Object(C.a)(Object(C.a)({},n),{},{password:e.target.value}))}})]}),Object(h.jsx)(F.a,{block:!0,size:"lg",type:"submit",disabled:!(n.username.length>0&&n.password.length>0),onClick:function(){return b(!d)},children:"Signup"})]}),Object(h.jsx)("div",{id:"formFooter",children:Object(h.jsx)("a",{className:"underlineHover",href:"#",children:"Forgot Password?"})})]}),Object(h.jsx)("br",{}),Object(h.jsx)(z.a,{color:O,loading:!d,css:P,size:150})]})},E=a(145),G=a(146),H=a(143),J=function(e){var t=Object(i.b)(),a="",c="",s="";e.data&&(a=e.data.html,c=e.data.css,s=e.data.js);var r=Object(n.useState)({title:"",html:a,css:c,js:s,username:t().username}),j=Object(o.a)(r,2),d=j[0],l=j[1],b={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t().token)},u=function(){N.a.post("".concat("https://codesandbox-express.herokuapp.com/").concat("api/workspace/save"),JSON.stringify(d),{headers:b}).then((function(t){200!=t.status&&201!=t.status||(e.loader(),setTimeout((function(){e.setLoading(!0),e.handleClose()}),1e3))}))};return Object(n.useEffect)((function(){e.setformSubmitMethod(u)})),Object(h.jsxs)(L.a,{children:[Object(h.jsxs)(L.a.Group,{controlId:"formGridName",children:[Object(h.jsx)(L.a.Label,{children:"Workspace Title"}),Object(h.jsx)(L.a.Control,{onChange:function(e){return l(Object(C.a)(Object(C.a)({},d),{},{title:e.target.value}))}})]}),Object(h.jsx)("br",{})]})},U=(a(130),a(144)),B=a(86),V=Object(I.css)(m||(m=Object(k.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),_=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(!0),i=Object(o.a)(r,2),j=i[0],d=i[1],l=Object(n.useState)("#FF0000"),b=Object(o.a)(l,1)[0],u=function(){return s(!1)},O=function(){return s(!0)},x=function(){},p=function(e){x=e};return Object(n.useEffect)((function(){e.addrecord||e.setModalHandlers(O)})),Object(h.jsxs)(h.Fragment,{children:[e.addrecord&&Object(h.jsxs)("div",{className:"modalbutton",children:[Object(h.jsx)(B.a,{className:"modalplus",onClick:function(){O(),d(!0)}}),Object(h.jsx)("br",{}),"Create New"]}),Object(h.jsxs)(U.a,{show:c,onHide:function(){u(),d(!0),e.loader()},children:[Object(h.jsx)(U.a.Header,{closeButton:!0,children:Object(h.jsx)(U.a.Title,{children:e.title})}),Object(h.jsxs)(U.a.Body,{children:[e.addrecord&&Object(h.jsx)(J,{loader:function(){},setLoading:d,handleClose:u,setformSubmitMethod:p}),!e.addrecord&&Object(h.jsx)(J,{data:e.data,loader:function(){},setLoading:d,handleClose:u,setformSubmitMethod:p})]}),Object(h.jsxs)(U.a.Footer,{children:[Object(h.jsx)(z.a,{color:b,loading:!j,css:V,size:50}),Object(h.jsx)(F.a,{variant:"secondary",onClick:function(){u(),d(!0),e.loader()},children:"Close"}),Object(h.jsx)(F.a,{variant:"primary",onClick:function(){d(!1),x()},children:"Save Changes"})]})]})]})},R=(a(131),function(){}),W=function(e){R=e},X=function(e){var t=Object(i.b)(),a=Object(i.e)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(E.a,{expand:"lg",bg:"dark",variant:"dark",fixed:"top",children:[Object(h.jsx)(E.a.Brand,{as:d.b,to:"/",children:"JDPlayground"}),Object(h.jsx)(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsxs)(E.a.Collapse,{id:"basic-navbar-nav",children:[Object(h.jsx)(G.a,{className:"me-auto",children:Object(h.jsx)(G.a,{children:Object(h.jsxs)(H.a,{menuAlign:"right",title:"Workspace",id:"basic-nav-dropdown",children:[Object(h.jsx)(H.a.Item,{onClick:function(){R()},children:"Save"}),Object(h.jsx)(H.a.Item,{onClick:function(){R()},children:"Load"})]})})}),Object(h.jsx)(G.a,{children:Object(h.jsx)(H.a,{menuAlign:"right",title:"Hello ".concat(t().username),id:"basic-nav-dropdown",children:Object(h.jsx)(H.a.Item,{onClick:function(){return a()},children:"Logout"})})})]})]}),Object(h.jsx)(_,{title:"Edit Trigger",data:e.data,loader:e.loader,addrecord:!1,setModalHandlers:W})]})},Y=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(E.a,{expand:"lg",bg:"dark",variant:"dark",fixed:"top",children:[Object(h.jsx)(E.a.Brand,{as:d.b,to:"/",children:"JDPlayground"}),Object(h.jsx)(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsxs)(E.a.Collapse,{id:"basic-navbar-nav",children:[Object(h.jsxs)(G.a,{className:"me-auto",children:[Object(h.jsx)(G.a.Link,{as:d.b,to:"/",children:"Home"}),Object(h.jsx)(G.a.Link,{href:"#pricing",children:"Pricing"})]}),Object(h.jsx)(G.a,{children:Object(h.jsxs)(H.a,{menuAlign:"right",title:"Hello Random User",id:"basic-nav-dropdown",children:[Object(h.jsx)(H.a.Item,{as:d.b,to:"/Signup",children:"Signup"}),Object(h.jsx)(H.a.Item,{as:d.b,to:"/Login",children:"Login"})]})})]})]})})},q=function(){var e=Object(i.c)(),t=Object(n.useState)({}),a=Object(o.a)(t,2),c=a[0],s=a[1];return e()?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(X,{data:c,loader:function(){}}),Object(h.jsx)(j.a,{fluid:!0,style:{paddingLeft:"0px",paddingRight:"0px",paddingTop:"56.4px"},children:Object(h.jsx)(l.d,{children:Object(h.jsx)(l.b,{path:"/",children:Object(h.jsx)(y,{tutorial:!1,setData:s})})})})]})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(Y,{}),Object(h.jsx)(j.a,{fluid:!0,style:{paddingLeft:"0px",paddingRight:"0px",paddingTop:"56.4px"},children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{path:"/Login",children:Object(h.jsx)(A,{})}),Object(h.jsx)(l.b,{path:"/Signup",children:Object(h.jsx)(M,{})}),Object(h.jsx)(l.b,{path:"/",children:Object(h.jsx)(y,{})})]})})]})})},Q=function(){return Object(h.jsx)(i.a,{authStorageType:"localstorage",authStorageName:"_auth_t",authTimeStorageName:"_auth_time",stateStorageName:"_auth_state",children:Object(h.jsx)(q,{})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,148)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};a(134);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Q,{})}),document.getElementById("root")),Z()},93:function(e,t,a){},94:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.f3084c72.chunk.js.map