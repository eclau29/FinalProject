(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8k80":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var r=u("pMnS"),o=u("oBZk"),a=u("ZZ/e"),i=u("s7LF"),b=u("SVse"),s=u("mrSG"),c=u("Nl/j"),d=u("5LM8");class h{constructor(l,n,u,e){this.alertCtrl=l,this.router=n,this.userData=u,this.authSvc=e}ngAfterViewInit(){this.getUsername()}updatePicture(){console.log("Clicked to update picture")}changeUsername(){return s.b(this,void 0,void 0,function*(){const l=yield this.alertCtrl.create({header:"Change Username",buttons:["Cancel",{text:"Ok",handler:l=>{this.userData.setUsername(l.username),this.getUsername()}}],inputs:[{type:"text",name:"username",value:this.username,placeholder:"username"}]});yield l.present()})}getUsername(){this.userData.getUsername().then(l=>{this.username=l})}changePassword(){console.log("Clicked to change password")}logout(){console.log("inlogout"),this.userData.logout(),this.authSvc.logout(),this.router.navigateByUrl("/login")}support(){this.router.navigateByUrl("/support")}}var p=u("iInd"),g=e.pb({encapsulation:0,styles:[["img[_ngcontent-%COMP%]{max-width:140px;border-radius:50%}"]],data:{}});function v(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,68,"div",[["class","ion-padding-top ion-text-center"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,0,"img",[["alt","avatar"],["src","https://www.gravatar.com/avatar?d=mm&s=140"]],null,null,null,null,null)),(l()(),e.rb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(3,null,["",""])),(l()(),e.rb(4,0,null,null,64,"form",[["onsubmit","processForm(event)"]],null,null,null,null,null)),(l()(),e.rb(5,0,null,null,59,"ion-list",[["class","ion-no-margin ion-no-padding"],["lines","full"]],null,null,null,o.yb,o.C)),e.qb(6,49152,null,0,a.Q,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.rb(7,0,null,0,11,"ion-item",[],null,null,null,o.vb,o.v)),e.qb(8,49152,null,0,a.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(9,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,o.wb,o.B)),e.qb(10,49152,null,0,a.P,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Kb(-1,0,["First Name "])),(l()(),e.rb(12,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,o.Mb,o.R)),e.qb(13,49152,null,0,a.yb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Kb(-1,0,["*"])),(l()(),e.rb(15,0,null,0,3,"ion-input",[["oninput","handleFirstNameValue(event)"],["required",""],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Db(l,18)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.Db(l,18)._handleInputEvent(u.target.value)&&t),t},o.pb,o.u)),e.Hb(5120,null,i.d,function(l){return[l]},[a.Pb]),e.qb(17,49152,null,0,a.I,[e.h,e.k,e.x],{required:[0,"required"],type:[1,"type"]},null),e.qb(18,16384,null,0,a.Pb,[e.k],null,null),(l()(),e.rb(19,0,null,0,11,"ion-item",[],null,null,null,o.vb,o.v)),e.qb(20,49152,null,0,a.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(21,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,o.wb,o.B)),e.qb(22,49152,null,0,a.P,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Kb(-1,0,["Last Name "])),(l()(),e.rb(24,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,o.Mb,o.R)),e.qb(25,49152,null,0,a.yb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Kb(-1,0,["*"])),(l()(),e.rb(27,0,null,0,3,"ion-input",[["oninput","handleLastNameValue(event)"],["required",""],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Db(l,30)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.Db(l,30)._handleInputEvent(u.target.value)&&t),t},o.pb,o.u)),e.Hb(5120,null,i.d,function(l){return[l]},[a.Pb]),e.qb(29,49152,null,0,a.I,[e.h,e.k,e.x],{required:[0,"required"],type:[1,"type"]},null),e.qb(30,16384,null,0,a.Pb,[e.k],null,null),(l()(),e.rb(31,0,null,0,24,"ion-item",[],null,null,null,o.vb,o.v)),e.qb(32,49152,null,0,a.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(33,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.wb,o.B)),e.qb(34,49152,null,0,a.P,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Kb(-1,0,["Address"])),(l()(),e.rb(36,0,null,0,3,"ion-input",[["placeholder","Address Line 1"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Db(l,39)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.Db(l,39)._handleInputEvent(u.target.value)&&t),t},o.pb,o.u)),e.Hb(5120,null,i.d,function(l){return[l]},[a.Pb]),e.qb(38,49152,null,0,a.I,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.qb(39,16384,null,0,a.Pb,[e.k],null,null),(l()(),e.rb(40,0,null,0,3,"ion-input",[["placeholder","Address Line 2"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Db(l,43)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.Db(l,43)._handleInputEvent(u.target.value)&&t),t},o.pb,o.u)),e.Hb(5120,null,i.d,function(l){return[l]},[a.Pb]),e.qb(42,49152,null,0,a.I,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.qb(43,16384,null,0,a.Pb,[e.k],null,null),(l()(),e.rb(44,0,null,0,3,"ion-input",[["placeholder","City"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Db(l,47)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.Db(l,47)._handleInputEvent(u.target.value)&&t),t},o.pb,o.u)),e.Hb(5120,null,i.d,function(l){return[l]},[a.Pb]),e.qb(46,49152,null,0,a.I,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.qb(47,16384,null,0,a.Pb,[e.k],null,null),(l()(),e.rb(48,0,null,0,3,"ion-input",[["placeholder","State"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Db(l,51)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.Db(l,51)._handleInputEvent(u.target.value)&&t),t},o.pb,o.u)),e.Hb(5120,null,i.d,function(l){return[l]},[a.Pb]),e.qb(50,49152,null,0,a.I,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.qb(51,16384,null,0,a.Pb,[e.k],null,null),(l()(),e.rb(52,0,null,0,3,"ion-input",[["placeholder","Zip Code"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Db(l,55)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.Db(l,55)._handleInputEvent(u.target.value)&&t),t},o.pb,o.u)),e.Hb(5120,null,i.d,function(l){return[l]},[a.Pb]),e.qb(54,49152,null,0,a.I,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.qb(55,16384,null,0,a.Pb,[e.k],null,null),(l()(),e.rb(56,0,null,0,8,"ion-item",[],null,null,null,o.vb,o.v)),e.qb(57,49152,null,0,a.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(58,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.wb,o.B)),e.qb(59,49152,null,0,a.P,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Kb(-1,0,["Notes"])),(l()(),e.rb(61,0,null,0,3,"ion-textarea",[],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Db(l,64)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.Db(l,64)._handleInputEvent(u.target.value)&&t),t},o.Nb,o.S)),e.Hb(5120,null,i.d,function(l){return[l]},[a.Pb]),e.qb(63,49152,null,0,a.zb,[e.h,e.k,e.x],null,null),e.qb(64,16384,null,0,a.Pb,[e.k],null,null),(l()(),e.rb(65,0,null,null,3,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.rb(66,0,null,null,2,"ion-button",[["class","ion-no-margin"],["expand","block"],["type","submit"]],null,null,null,o.Y,o.d)),e.qb(67,49152,null,0,a.m,[e.h,e.k,e.x],{expand:[0,"expand"],type:[1,"type"]},null),(l()(),e.Kb(-1,0,["Create account"]))],function(l,n){l(n,6,0,"full"),l(n,10,0,"stacked"),l(n,13,0,"danger"),l(n,17,0,"","text"),l(n,22,0,"stacked"),l(n,25,0,"danger"),l(n,29,0,"","text"),l(n,34,0,"stacked"),l(n,38,0,"Address Line 1"),l(n,42,0,"Address Line 2"),l(n,46,0,"City"),l(n,50,0,"State"),l(n,54,0,"Zip Code"),l(n,59,0,"stacked"),l(n,67,0,"block","submit")},function(l,n){l(n,3,0,n.component.username)})}function k(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,10,"ion-header",[],null,null,null,o.nb,o.s)),e.qb(1,49152,null,0,a.D,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.Pb,o.U)),e.qb(3,49152,null,0,a.Db,[e.h,e.k,e.x],null,null),(l()(),e.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.Z,o.e)),e.qb(5,49152,null,0,a.n,[e.h,e.k,e.x],null,null),(l()(),e.rb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.zb,o.F)),e.qb(7,49152,null,0,a.T,[e.h,e.k,e.x],null,null),(l()(),e.rb(8,0,null,0,2,"ion-title",[],null,null,null,o.Ob,o.T)),e.qb(9,49152,null,0,a.Bb,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Account"])),(l()(),e.rb(11,0,null,null,3,"ion-content",[["class","outer-content"]],null,null,null,o.gb,o.l)),e.qb(12,49152,null,0,a.w,[e.h,e.k,e.x],null,null),(l()(),e.gb(16777216,null,0,1,null,v)),e.qb(14,16384,null,0,b.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,14,0,n.component.username)},null)}function m(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"page-account",[],null,null,null,k,g)),e.qb(1,4243456,null,0,h,[a.b,p.m,d.a,c.a],null,null)],null,null)}var q=e.nb("page-account",h,m,{},{},[]);class B{}u.d(n,"AccountModuleNgFactory",function(){return x});var x=e.ob(t,[],function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[r.a,q]],[3,e.j],e.v]),e.Bb(4608,b.n,b.m,[e.s,[2,b.w]]),e.Bb(4608,a.c,a.c,[e.x,e.g]),e.Bb(4608,a.Ib,a.Ib,[a.c,e.j,e.p]),e.Bb(4608,a.Mb,a.Mb,[a.c,e.j,e.p]),e.Bb(1073742336,b.b,b.b,[]),e.Bb(1073742336,a.Fb,a.Fb,[]),e.Bb(1073742336,p.q,p.q,[[2,p.v],[2,p.m]]),e.Bb(1073742336,B,B,[]),e.Bb(1073742336,t,t,[]),e.Bb(1024,p.k,function(){return[[{path:"",component:h}]]},[])])})}}]);