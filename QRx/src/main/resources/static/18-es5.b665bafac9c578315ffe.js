(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{JjBp:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("7wfR"),i=function(){function l(l){this.patientService=l,this.currentPatient=null,this.username=null}return l.prototype.ngOnInit=function(){},l.prototype.findPatient=function(l){var n=this;this.patientService.findByUserName(l).subscribe(function(u){n.currentPatient=u,l=null},function(l){console.error(l)})},l.prototype.scanCode=function(){},l}(),b=function(){return function(){}}(),o=u("pMnS"),r=u("oBZk"),c=u("ZZ/e"),a=u("Ip0R"),s=u("gIcY"),p=t.Bb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Ub(0,[(l()(),t.Db(0,0,null,null,2,"ion-title",[],null,null,null,r.zb,r.L)),t.Cb(1,49152,null,0,c.Bb,[t.j,t.p,t.H],null,null),(l()(),t.Tb(-1,0,["Scan for Patient Details"]))],null,null)}function C(l){return t.Ub(0,[(l()(),t.Db(0,0,null,null,2,"ion-title",[],null,null,null,r.zb,r.L)),t.Cb(1,49152,null,0,c.Bb,[t.j,t.p,t.H],null,null),(l()(),t.Tb(2,0,["","'s Emergency Information"]))],null,function(l,n){l(n,2,0,n.component.currentPatient.user.firstName)})}function g(l){return t.Ub(0,[(l()(),t.Db(0,0,null,null,2,"ion-card-subtitle",[],null,null,null,r.V,r.i)),t.Cb(1,49152,null,0,c.r,[t.j,t.p,t.H],null,null),(l()(),t.Tb(2,0,[""," ",""]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.drug.strength,n.parent.context.$implicit.drug.unit)})}function m(l){return t.Ub(0,[(l()(),t.Db(0,0,null,null,6,"ion-col",[["size","12"],["size-md","6"]],null,null,null,r.Z,r.l)),t.Cb(1,49152,null,0,c.v,[t.j,t.p,t.H],{size:[0,"size"]},null),(l()(),t.Db(2,0,null,0,2,"ion-card-title",[],null,null,null,r.W,r.j)),t.Cb(3,49152,null,0,c.s,[t.j,t.p,t.H],null,null),(l()(),t.Tb(4,0,["",""])),(l()(),t.sb(16777216,null,0,1,null,g)),t.Cb(6,16384,null,0,a.j,[t.Y,t.U],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,"12"),l(n,6,0,n.context.$implicit.drug)},function(l,n){l(n,4,0,n.context.$implicit.medName)})}function f(l){return t.Ub(0,[(l()(),t.Db(0,0,null,null,10,"ion-col",[["size","12"],["size-md","6"]],null,null,null,r.Z,r.l)),t.Cb(1,49152,null,0,c.v,[t.j,t.p,t.H],{size:[0,"size"]},null),(l()(),t.Db(2,0,null,0,2,"ion-card-title",[],null,null,null,r.W,r.j)),t.Cb(3,49152,null,0,c.s,[t.j,t.p,t.H],null,null),(l()(),t.Tb(4,0,["",""])),(l()(),t.Db(5,0,null,0,2,"ion-card-title",[],null,null,null,r.W,r.j)),t.Cb(6,49152,null,0,c.s,[t.j,t.p,t.H],null,null),(l()(),t.Tb(7,0,["",", ",""])),(l()(),t.Db(8,0,null,0,2,"ion-card-title",[],null,null,null,r.W,r.j)),t.Cb(9,49152,null,0,c.s,[t.j,t.p,t.H],null,null),(l()(),t.Tb(10,0,["",""]))],function(l,n){l(n,1,0,"12")},function(l,n){l(n,4,0,n.context.$implicit.phone),l(n,7,0,n.context.$implicit.lastName,n.context.$implicit.firstName),l(n,10,0,n.context.$implicit.relationship)})}function j(l){return t.Ub(0,[(l()(),t.Db(0,0,null,null,48,"ion-content",[["fullscreen",""]],null,null,null,r.ab,r.m)),t.Cb(1,49152,null,0,c.w,[t.j,t.p,t.H],{fullscreen:[0,"fullscreen"]},null),(l()(),t.Db(2,0,null,0,43,"ion-card",[],null,null,null,r.X,r.f)),t.Cb(3,49152,null,0,c.o,[t.j,t.p,t.H],null,null),(l()(),t.Db(4,0,null,0,7,"ion-card-header",[],null,null,null,r.U,r.h)),t.Cb(5,49152,null,0,c.q,[t.j,t.p,t.H],null,null),(l()(),t.Db(6,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.V,r.i)),t.Cb(7,49152,null,0,c.r,[t.j,t.p,t.H],null,null),(l()(),t.Tb(-1,0,["DNR Status"])),(l()(),t.Db(9,0,null,0,2,"ion-card-title",[],null,null,null,r.W,r.j)),t.Cb(10,49152,null,0,c.s,[t.j,t.p,t.H],null,null),(l()(),t.Tb(11,0,["",""])),(l()(),t.Db(12,0,null,0,7,"ion-card-content",[],null,null,null,r.T,r.g)),t.Cb(13,49152,null,0,c.p,[t.j,t.p,t.H],null,null),(l()(),t.Db(14,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.V,r.i)),t.Cb(15,49152,null,0,c.r,[t.j,t.p,t.H],null,null),(l()(),t.Tb(-1,0,["Blood Type"])),(l()(),t.Db(17,0,null,0,2,"ion-card-title",[],null,null,null,r.W,r.j)),t.Cb(18,49152,null,0,c.s,[t.j,t.p,t.H],null,null),(l()(),t.Tb(19,0,["",""])),(l()(),t.Db(20,0,null,0,7,"ion-card-content",[],null,null,null,r.T,r.g)),t.Cb(21,49152,null,0,c.p,[t.j,t.p,t.H],null,null),(l()(),t.Db(22,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.V,r.i)),t.Cb(23,49152,null,0,c.r,[t.j,t.p,t.H],null,null),(l()(),t.Tb(-1,0,["Sex"])),(l()(),t.Db(25,0,null,0,2,"ion-card-title",[],null,null,null,r.W,r.j)),t.Cb(26,49152,null,0,c.s,[t.j,t.p,t.H],null,null),(l()(),t.Tb(27,0,["",""])),(l()(),t.Db(28,0,null,0,8,"ion-card-content",[],null,null,null,r.T,r.g)),t.Cb(29,49152,null,0,c.p,[t.j,t.p,t.H],null,null),(l()(),t.Db(30,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.V,r.i)),t.Cb(31,49152,null,0,c.r,[t.j,t.p,t.H],null,null),(l()(),t.Tb(-1,0,["Medications"])),(l()(),t.Db(33,0,null,0,3,"ion-row",[["class","ion-align-items-stretch"]],null,null,null,r.qb,r.C)),t.Cb(34,49152,null,0,c.kb,[t.j,t.p,t.H],null,null),(l()(),t.sb(16777216,null,0,1,null,m)),t.Cb(36,278528,null,0,a.i,[t.Y,t.U,t.z],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Db(37,0,null,0,8,"ion-card-content",[],null,null,null,r.T,r.g)),t.Cb(38,49152,null,0,c.p,[t.j,t.p,t.H],null,null),(l()(),t.Db(39,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.V,r.i)),t.Cb(40,49152,null,0,c.r,[t.j,t.p,t.H],null,null),(l()(),t.Tb(-1,0,["Emergency Contacts"])),(l()(),t.Db(42,0,null,0,3,"ion-row",[["class","ion-align-items-stretch"]],null,null,null,r.qb,r.C)),t.Cb(43,49152,null,0,c.kb,[t.j,t.p,t.H],null,null),(l()(),t.sb(16777216,null,0,1,null,f)),t.Cb(45,278528,null,0,a.i,[t.Y,t.U,t.z],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Db(46,0,null,0,2,"ion-button",[["color","light"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(e.manualIdEntry=!1,t=!1!==(e.currentPatient=null)&&t),t},r.R,r.d)),t.Cb(47,49152,null,0,c.m,[t.j,t.p,t.H],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),t.Tb(-1,0,["Clear"]))],function(l,n){var u=n.component;l(n,1,0,""),l(n,36,0,u.currentPatient.medicationList),l(n,45,0,u.currentPatient.emergencyContacts),l(n,47,0,"light","block")},function(l,n){var u=n.component;l(n,11,0,u.currentPatient.dnr),l(n,19,0,u.currentPatient.bloodType.abo),l(n,27,0,u.currentPatient.sex)})}function D(l){return t.Ub(0,[(l()(),t.Db(0,0,null,null,17,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","top"]],null,null,null,r.eb,r.o)),t.Cb(1,49152,null,0,c.y,[t.j,t.p,t.H],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.Db(2,0,null,0,3,"ion-fab-button",[],null,null,null,r.cb,r.p)),t.Cb(3,49152,null,0,c.z,[t.j,t.p,t.H],null,null),(l()(),t.Db(4,0,null,0,1,"ion-icon",[["name","code"]],null,null,null,r.hb,r.t)),t.Cb(5,49152,null,0,c.E,[t.j,t.p,t.H],{name:[0,"name"]},null),(l()(),t.Db(6,0,null,0,5,"ion-fab-list",[["side","start"]],null,null,null,r.db,r.q)),t.Cb(7,49152,null,0,c.A,[t.j,t.p,t.H],{side:[0,"side"]},null),(l()(),t.Db(8,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.manualIdEntry=!0)&&t),t},r.cb,r.p)),t.Cb(9,49152,null,0,c.z,[t.j,t.p,t.H],{color:[0,"color"]},null),(l()(),t.Db(10,0,null,0,1,"ion-icon",[["name","body"]],null,null,null,r.hb,r.t)),t.Cb(11,49152,null,0,c.E,[t.j,t.p,t.H],{name:[0,"name"]},null),(l()(),t.Db(12,0,null,0,5,"ion-fab-list",[["side","end"]],null,null,null,r.db,r.q)),t.Cb(13,49152,null,0,c.A,[t.j,t.p,t.H],{side:[0,"side"]},null),(l()(),t.Db(14,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.scanCode()&&t),t},r.cb,r.p)),t.Cb(15,49152,null,0,c.z,[t.j,t.p,t.H],{color:[0,"color"]},null),(l()(),t.Db(16,0,null,0,1,"ion-icon",[["name","barcode"]],null,null,null,r.hb,r.t)),t.Cb(17,49152,null,0,c.E,[t.j,t.p,t.H],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"center","top"),l(n,5,0,"code"),l(n,7,0,"start"),l(n,9,0,"danger"),l(n,11,0,"body"),l(n,13,0,"end"),l(n,15,0,"danger"),l(n,17,0,"barcode")},null)}function H(l){return t.Ub(0,[(l()(),t.Db(0,0,null,null,31,"div",[],null,null,null,null,null)),(l()(),t.Db(1,0,null,null,30,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Pb(l,3).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Pb(l,3).onReset()&&e),e},null,null)),t.Cb(2,16384,null,0,s.m,[],null,null),t.Cb(3,4210688,null,0,s.h,[[8,null],[8,null]],null,null),t.Qb(2048,null,s.a,null,[s.h]),t.Cb(5,16384,null,0,s.g,[[4,s.a]],null,null),(l()(),t.Db(6,0,null,null,13,"ion-item",[],null,null,null,r.jb,r.v)),t.Cb(7,49152,null,0,c.J,[t.j,t.p,t.H],null,null),(l()(),t.Db(8,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,r.kb,r.w)),t.Cb(9,49152,null,0,c.P,[t.j,t.p,t.H],{position:[0,"position"]},null),(l()(),t.Tb(-1,0,["Enter Patient UserName"])),(l()(),t.Db(11,0,null,0,8,"ion-input",[["name","username"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Pb(l,14)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Pb(l,14)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.username=u)&&e),e},r.ib,r.u)),t.Cb(12,16384,null,0,s.j,[],{required:[0,"required"]},null),t.Qb(1024,null,s.c,function(l){return[l]},[s.j]),t.Cb(14,16384,null,0,c.Nb,[t.p],null,null),t.Qb(1024,null,s.d,function(l){return[l]},[c.Nb]),t.Cb(16,671744,null,0,s.i,[[2,s.a],[6,s.c],[8,null],[6,s.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Qb(2048,null,s.e,null,[s.i]),t.Cb(18,16384,null,0,s.f,[[4,s.e]],null,null),t.Cb(19,49152,null,0,c.I,[t.j,t.p,t.H],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),t.Db(20,0,null,null,11,"ion-row",[],null,null,null,r.qb,r.C)),t.Cb(21,49152,null,0,c.kb,[t.j,t.p,t.H],null,null),(l()(),t.Db(22,0,null,0,4,"ion-col",[],null,null,null,r.Z,r.l)),t.Cb(23,49152,null,0,c.v,[t.j,t.p,t.H],null,null),(l()(),t.Db(24,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.findPatient(e.username)&&t),t},r.R,r.d)),t.Cb(25,49152,null,0,c.m,[t.j,t.p,t.H],{expand:[0,"expand"]},null),(l()(),t.Tb(-1,0,["Find Patient"])),(l()(),t.Db(27,0,null,0,4,"ion-col",[],null,null,null,r.Z,r.l)),t.Cb(28,49152,null,0,c.v,[t.j,t.p,t.H],null,null),(l()(),t.Db(29,0,null,0,2,"ion-button",[["color","light"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(e.manualIdEntry=!1,t=!1!==(e.currentPatient=null)&&t),t},r.R,r.d)),t.Cb(30,49152,null,0,c.m,[t.j,t.p,t.H],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),t.Tb(-1,0,["Cancel"]))],function(l,n){var u=n.component;l(n,9,0,"stacked"),l(n,12,0,""),l(n,16,0,"username",u.username),l(n,19,0,"username","","text"),l(n,25,0,"block"),l(n,30,0,"light","block")},function(l,n){l(n,1,0,t.Pb(n,5).ngClassUntouched,t.Pb(n,5).ngClassTouched,t.Pb(n,5).ngClassPristine,t.Pb(n,5).ngClassDirty,t.Pb(n,5).ngClassValid,t.Pb(n,5).ngClassInvalid,t.Pb(n,5).ngClassPending),l(n,11,0,t.Pb(n,12).required?"":null,t.Pb(n,18).ngClassUntouched,t.Pb(n,18).ngClassTouched,t.Pb(n,18).ngClassPristine,t.Pb(n,18).ngClassDirty,t.Pb(n,18).ngClassValid,t.Pb(n,18).ngClassInvalid,t.Pb(n,18).ngClassPending)})}function P(l){return t.Ub(0,[(l()(),t.Db(0,0,null,null,11,"ion-header",[],null,null,null,r.gb,r.s)),t.Cb(1,49152,null,0,c.D,[t.j,t.p,t.H],null,null),(l()(),t.Db(2,0,null,0,9,"ion-toolbar",[],null,null,null,r.Bb,r.N)),t.Cb(3,49152,null,0,c.Db,[t.j,t.p,t.H],null,null),(l()(),t.Db(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.S,r.e)),t.Cb(5,49152,null,0,c.n,[t.j,t.p,t.H],null,null),(l()(),t.Db(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.nb,r.A)),t.Cb(7,49152,null,0,c.T,[t.j,t.p,t.H],null,null),(l()(),t.sb(16777216,null,0,1,null,d)),t.Cb(9,16384,null,0,a.j,[t.Y,t.U],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(16777216,null,0,1,null,C)),t.Cb(11,16384,null,0,a.j,[t.Y,t.U],{ngIf:[0,"ngIf"]},null),(l()(),t.Db(12,0,null,null,7,"ion-content",[],null,null,null,r.ab,r.m)),t.Cb(13,49152,null,0,c.w,[t.j,t.p,t.H],null,null),(l()(),t.sb(16777216,null,0,1,null,j)),t.Cb(15,16384,null,0,a.j,[t.Y,t.U],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(16777216,null,0,1,null,D)),t.Cb(17,16384,null,0,a.j,[t.Y,t.U],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(16777216,null,0,1,null,H)),t.Cb(19,16384,null,0,a.j,[t.Y,t.U],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,9,0,!u.currentPatient),l(n,11,0,u.currentPatient),l(n,15,0,u.currentPatient),l(n,17,0,!u.manualIdEntry),l(n,19,0,u.manualIdEntry)},null)}function h(l){return t.Ub(0,[(l()(),t.Db(0,0,null,null,1,"emt-view",[],null,null,null,P,p)),t.Cb(1,114688,null,0,i,[e.a],null,null)],function(l,n){l(n,1,0)},null)}var v=t.zb("emt-view",i,h,{},{},[]),k=u("ZYCi");u.d(n,"EmtViewPageModuleNgFactory",function(){return T});var T=t.Ab(b,[],function(l){return t.Mb([t.Nb(512,t.m,t.lb,[[8,[o.a,v]],[3,t.m],t.F]),t.Nb(4608,a.l,a.k,[t.B,[2,a.s]]),t.Nb(4608,s.l,s.l,[]),t.Nb(4608,c.c,c.c,[t.H,t.g]),t.Nb(4608,c.Gb,c.Gb,[c.c,t.m,t.x]),t.Nb(4608,c.Kb,c.Kb,[c.c,t.m,t.x]),t.Nb(1073742336,a.b,a.b,[]),t.Nb(1073742336,s.k,s.k,[]),t.Nb(1073742336,s.b,s.b,[]),t.Nb(1073742336,c.Fb,c.Fb,[]),t.Nb(1073742336,k.q,k.q,[[2,k.v],[2,k.m]]),t.Nb(1073742336,b,b,[]),t.Nb(1024,k.k,function(){return[[{path:"",component:i}]]},[])])})}}]);