(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{156:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n(32),o=n.n(r),s=n(7),i=n(8),u=n.n(i),l=n(13),d=n(20),j=n(21),b=n(10),p=n(5),m=n(30),O=(n(158),n(74),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),h={apiKey:O.REACT_APP_API_KEY,authDomain:O.REACT_APP_AUTH_DOMAIN,projectId:O.REACT_APP_PROJECT_ID,storageBucket:O.REACT_APP_STORAGE_BUCKET,messagingSenderId:O.REACT_APP_MESSAGING_SENDER_ID,appId:O.REACT_APP_ID};m.a.initializeApp(h);var f=m.a.firestore(),x=new m.a.auth.GoogleAuthProvider,_=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.collection("".concat(t,"/journal/notes")).get();case 3:return n=e.sent,a=[],console.log(n),n.forEach((function(e){a.push(Object(p.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.log("hola 2");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),v="[Auth] Login",g="[Auth] Logout",y="[UI] Set Error",N="[UI] Remove Error",w="[UI] Start loading",E="[UI] Finish loading",C="[Notes] New note",k="[Notes] Set active note",S="[Notes] Load note",I="[Notes] Updated note",P="[Notes] Delete note",A="[Notes] Logout Cleaning",T=n(22),D=n.n(T),L=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dbtnpccrb/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dbtnpccrb/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=16;break}return e.next=11,a.json();case 11:return c=e.sent,r=c.secure_url,e.abrupt("return",r);case 16:return e.next=18,a.json();case 18:throw e.sent;case 19:e.next=24;break;case 21:return e.prev=21,e.t0=e.catch(4),e.abrupt("return",null);case 24:case"end":return e.stop()}}),e,null,[[4,21]])})));return function(t){return e.apply(this,arguments)}}(),U=function(e,t){return{type:k,payload:Object(p.a)({id:e},t)}},R=function(e,t){return{type:C,payload:Object(p.a)({id:e},t)}},W=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(e);case 3:a=t.sent,n(F(a)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},F=function(e){return{type:S,payload:e}},G=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=a().auth.uid,e.imageUrl||delete e.imageUrl,delete(r=Object(p.a)({},e)).id,t.next=7,f.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 7:n(K(e.id,r)),D.a.fire("Saved",e.title,"success"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),D.a.fire("Error",t.t0.message,"error");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},K=function(e,t){return{type:I,payload:{id:e,note:Object(p.a)({id:e},t)}}},B=function(e){return{type:P,payload:e}},H=n(35),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(d.a)(t,2),a=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},s=function(e){var t=e.target;r(Object(p.a)(Object(p.a)({},a),{},Object(H.a)({},t.name,t.value)))};return[a,s,o]},M=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"notes__appbar",children:[Object(a.jsx)("span",{children:"28 de agosto 2020"}),Object(a.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,D.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){D.a.showLoading()}}),t.next=4,L(e);case 4:r=t.sent,c.imageUrl=r,n(G(c)),D.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(a.jsx)("button",{className:"btn",onClick:function(){e(G(t))},children:"Save"})]})]})},q=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active,n=J(t),r=Object(d.a)(n,3),o=r[0],i=r[1],j=r[2],b=o.title,m=o.body,O=o.id,h=Object(c.useRef)(t.id);Object(c.useEffect)((function(){t.id!==h.current&&(j(),h.current=t.id)}),[t,j]),Object(c.useEffect)((function(){e(U(o.id,Object(p.a)({},o)))}),[o,e]);return Object(a.jsxs)("div",{className:"notes__main-content",children:[Object(a.jsx)(M,{}),Object(a.jsxs)("div",{className:"notes__content",children:[Object(a.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",name:"title",value:b,onChange:i}),Object(a.jsx)("textarea",{placeholder:"What happend today",className:"notes__textarea",name:"body",value:m,onChange:i}),t.imageUrl&&Object(a.jsx)("div",{className:"notes__image",children:Object(a.jsx)("img",{src:t.imageUrl,alt:"imagen"})})]}),Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,f.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(B(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(O))},children:"DELETE"})]})},z=function(){return Object(a.jsxs)("div",{className:"nothing__main-content",children:[Object(a.jsxs)("p",{children:["Select something",Object(a.jsx)("br",{}),"or create an entry!"]}),Object(a.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},V=n(60),X=n.n(V),Y=function(e){var t=e.id,n=e.title,c=e.body,r=e.imageUrl,o=e.date,i=X()(o),u=Object(s.b)();return Object(a.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeInUp animate__faster",onClick:function(){u(U(t,{title:n,body:c,imageUrl:r,date:o}))},children:[Object(a.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(a.jsxs)("div",{className:"jornal__entry-body",children:[Object(a.jsx)("p",{className:"journal__entry-title",children:n}),Object(a.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(a.jsxs)("div",{className:"journal__entry-date-box",children:[Object(a.jsx)("span",{children:i.format("dddd")}),Object(a.jsx)("h4",{children:i.format("DD")})]})]})},Q=function(){var e=Object(s.c)((function(e){return e.notes})).notes;return Object(a.jsx)("div",{className:"journal__entries animate__animated animate__wobble animate__faster ",children:e.map((function(e){return Object(a.jsx)(Y,Object(p.a)({},e),e.id)}))})},Z=function(e){return{type:y,payload:e}},$=function(){return{type:E}},ee=function(e,t){return function(n){n({type:w}),m.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(te(t.uid,t.displayName)),n($())})).catch((function(e){n($()),D.a.fire("Error",e.message,"error")}))}},te=function(e,t){return{type:v,payload:{uid:e,displayName:t}}},ne=function(){return{type:g}},ae=function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(a.jsxs)("aside",{className:"journal__sidebar",children:[Object(a.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(a.jsxs)("h3",{className:"mt-5",children:[Object(a.jsx)("i",{className:"far fa-moon"}),Object(a.jsxs)("span",{children:[" ",e]})]}),Object(a.jsx)("button",{className:"btn",onClick:function(){t(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.auth().signOut();case 2:t(ne()),t({type:A});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(a.jsxs)("div",{className:"journal__new-entry",onClick:function(){t(function(){var e=Object(l.a)(u.a.mark((function e(t,n){var a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,f.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(U(r.id,c)),t(R(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(a.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(a.jsx)(Q,{})]})},ce=function(){var e=Object(s.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(a.jsx)(ae,{}),Object(a.jsx)("main",{style:{flex:"1 1 auto"},children:e?Object(a.jsx)(q,{}):Object(a.jsx)(z,{})})]})},re=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).loading,n=J({email:"daniel@gmail.com",password:"123456"}),c=Object(d.a)(n,2),r=c[0],o=c[1],i=r.email,u=r.password;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title",children:"Login"}),Object(a.jsxs)("form",{className:"animate__animated animate__fadeIn animate__faster",onSubmit:function(t){t.preventDefault(),e(ee(i,u))},children:[Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:o}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:u,onChange:o}),Object(a.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",disabled:t,children:"Login"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"auth__social-networks",children:[Object(a.jsx)("p",{children:"Login with social networks"}),Object(a.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){m.a.auth().signInWithPopup(x).then((function(t){var n=t.user;e(te(n.uid,n.displayName))}))}))},children:[Object(a.jsx)("div",{className:"google-icon-wrapper",children:Object(a.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(a.jsx)("p",{className:"btn-text",children:Object(a.jsx)("b",{children:"Sign in with google"})})]})]}),Object(a.jsx)(j.b,{className:"link",to:"/auth/register",children:"Create new account"})]})]})},oe=n(61),se=n.n(oe),ie=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).msgError,n=J({name:"Daniel",email:"daniel@gmail.com",password:"123456",password2:"123456"}),c=Object(d.a)(n,2),r=c[0],o=c[1],i=r.name,b=r.email,p=r.password,O=r.password2,h=function(){return 0===i.trim().length?(e(Z("name is required")),!1):se.a.isEmail(b)?p!==O||p<5?(e(Z("Password should be at least 6 characters and match each other")),!1):(e({type:N}),!0):(e(Z("email is no valid")),!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title",children:"Register"}),t&&Object(a.jsx)("div",{className:"auth__alert-error",children:t}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h()&&e(function(e,t,n){return function(a){m.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(l.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(te(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){D.a.fire("Error",e.message,"error")}))}}(b,p,i))},className:"animate__animated animate__fadeIn  animate__faster",children:[Object(a.jsx)("input",{autoComplete:"off",className:"auth__input",name:"name",placeholder:"Name",type:"text",value:i,onChange:o}),Object(a.jsx)("input",{autoComplete:"off",className:"auth__input",name:"email",placeholder:"Email",type:"text",value:b,onChange:o}),Object(a.jsx)("input",{className:"auth__input",placeholder:"Password",name:"password",type:"password",value:p,onChange:o}),Object(a.jsx)("input",{className:"auth__input",placeholder:"Confirm",name:"password2",type:"password",value:O,onChange:o}),Object(a.jsx)("button",{className:"btn btn-primary btn-block mb-5",type:"submit",children:"Create Account"}),Object(a.jsx)(j.b,{className:"link ",to:"/auth/login",children:"Already have a account?"})]})]})},ue=function(){return Object(a.jsx)("div",{className:"auth__main",children:Object(a.jsx)("div",{className:"auth__box-container",children:Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{exact:!0,path:"/auth/login",component:re}),Object(a.jsx)(b.b,{exact:!0,path:"/auth/register",component:ie}),Object(a.jsx)(b.a,{to:"/auth/login"})]})})})},le=n(36),de=function(e){var t=e.isLoggedIn,n=e.component,c=Object(le.a)(e,["isLoggedIn","component"]);return Object(a.jsx)(b.b,Object(p.a)(Object(p.a)({},c),{},{component:function(e){return t?Object(a.jsx)(b.a,{to:"/"}):Object(a.jsx)(n,Object(p.a)({},e))}}))},je=function(e){var t=e.isLoggedIn,n=e.component,c=Object(le.a)(e,["isLoggedIn","component"]);return Object(a.jsx)(b.b,Object(p.a)(Object(p.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(p.a)({},e)):Object(a.jsx)(b.a,{to:"/auth/login"})}}))},be=function(){var e=Object(s.b)(),t=Object(c.useState)(!0),n=Object(d.a)(t,2),r=n[0],o=n[1],i=Object(c.useState)(!1),p=Object(d.a)(i,2),O=p[0],h=p[1];return Object(c.useEffect)((function(){m.a.auth().onAuthStateChanged(function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(te(n.uid,n.displayName)),h(!0),e(W(n.uid))):h(!1),o(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,o,h]),r?Object(a.jsx)("h1",{children:"Wait..."}):Object(a.jsx)(j.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(b.d,{children:[Object(a.jsx)(de,{path:"/auth",component:ue,isLoggedIn:O}),Object(a.jsx)(je,{exact:!0,path:"/",component:ce,isLoggedIn:O}),Object(a.jsx)(b.a,{to:"auth/login"})]})})})},pe=n(23),me=n(62),Oe={loading:!1,msgError:null},he=n(45),fe={notes:[],active:null},xe=Object(pe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{uid:t.payload.uid,name:t.payload.displayName};case g:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(p.a)(Object(p.a)({},e),{},{msgError:t.payload});case N:return Object(p.a)(Object(p.a)({},e),{},{msgError:null});case w:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case E:return Object(p.a)(Object(p.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(p.a)(Object(p.a)({},e),{},{active:Object(p.a)({},t.payload)});case C:return Object(p.a)(Object(p.a)({},e),{},{notes:[t.payload].concat(Object(he.a)(e.notes))});case S:return Object(p.a)(Object(p.a)({},e),{},{notes:Object(he.a)(t.payload)});case I:return Object(p.a)(Object(p.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case P:return Object(p.a)(Object(p.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case A:return Object(p.a)(Object(p.a)({},e),fe);default:return e}}}),_e="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,ve=Object(pe.e)(xe,_e(Object(pe.a)(me.a))),ge=function(){return Object(a.jsx)(s.a,{store:ve,children:Object(a.jsx)(be,{})})};n(156);o.a.render(Object(a.jsx)(ge,{}),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.8d21a517.chunk.js.map