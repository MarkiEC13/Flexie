webpackJsonp([2],{0:function(l,n,e){l.exports=e("cDNt")},"7Zlu":function(l,n,e){"use strict";e.d(n,"a",function(){return t});var u=e("CPp0"),t=function(){function l(l){this.http=l}return l.prototype.createAuthorizationHeader=function(l){var n=localStorage.getItem("id_token");null!==n&&"undefined"!==n&&(l.append("Content-Type","application/json; charset=UTF-8"),l.append("Authorization","Bearer "+n))},l.prototype.get=function(l,n){var e=new u.Headers;return this.createAuthorizationHeader(e),this.http.get(l,{search:n,headers:e})},l.prototype.post=function(l,n){var e=new u.Headers;return this.createAuthorizationHeader(e),this.http.post(l,n,{headers:e})},l.ctorParameters=function(){return[{type:u.Http}]},l}()},cDNt:function(l,n,e){"use strict";function u(l){return T["\u0275vid"](0,[(l()(),T["\u0275eld"](0,null,null,9,"div",[["class","container"],["style","padding: 2% 5%;"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n    "])),(l()(),T["\u0275eld"](0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["Welcome to Flexie"])),(l()(),T["\u0275ted"](null,["\n    "])),(l()(),T["\u0275eld"](0,null,null,0,"br",[],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n    "])),(l()(),T["\u0275eld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n        The Flexie Incident Reporting Application provides a single, integrated system to capture and manage multiple types of incidents, including HR incidents, legal incidents, compliance incidents and IT security incidents. The app enables you to log, track, investigate, report, and resolve incidents in a systematic, automated manner. It also enables each incident to be owned and managed by the responsible business unit, while simultaneously rolling up data to provide comprehensive, real-time visibility into enterprise-wide incidents.\n    "])),(l()(),T["\u0275ted"](null,["\n"]))],null,null)}function t(l){return T["\u0275vid"](0,[(l()(),T["\u0275eld"](0,null,null,1,"flexie-home",[],null,null,null,u,E)),T["\u0275did"](49152,null,0,H,[],null,null)],null,null)}function r(l){return J["\u0275vid"](0,[(l()(),J["\u0275eld"](0,null,null,6,"a",[["class","dropdown-toggle"],["data-toggle","dropdown"],["href","#"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n                        "])),(l()(),J["\u0275eld"](0,null,null,0,"img",[["alt","User Image"],["class","user-image"]],[[8,"src",4]],null,null,null,null)),(l()(),J["\u0275ted"](null,["\n                        "])),(l()(),J["\u0275eld"](0,null,null,1,"span",[["class","hidden-xs"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,[""," ",""])),(l()(),J["\u0275ted"](null,["\n                    "]))],null,function(l,n){var e=n.component;l(n,2,0,e.loggedInUser.avatarUrl),l(n,5,0,e.loggedInUser.firstName,e.loggedInUser.lastName)})}function o(l){return J["\u0275vid"](0,[(l()(),J["\u0275eld"](0,null,null,60,"header",[["class","main-header"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n    "])),(l()(),J["\u0275ted"](null,["\n    "])),(l()(),J["\u0275eld"](0,null,null,11,"a",[["class","logo"],["href","javascript:void(0);"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n        "])),(l()(),J["\u0275ted"](null,["\n        "])),(l()(),J["\u0275eld"](0,null,null,2,"span",[["class","logo-mini"]],null,null,null,null,null)),(l()(),J["\u0275eld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["Flexie"])),(l()(),J["\u0275ted"](null,["\n        "])),(l()(),J["\u0275ted"](null,["\n        "])),(l()(),J["\u0275eld"](0,null,null,2,"span",[["class","logo-lg"]],null,null,null,null,null)),(l()(),J["\u0275eld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["Flexie"])),(l()(),J["\u0275ted"](null,["\n    "])),(l()(),J["\u0275ted"](null,["\n    "])),(l()(),J["\u0275ted"](null,["\n    "])),(l()(),J["\u0275eld"](0,null,null,42,"nav",[["class","navbar navbar-static-top"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n        "])),(l()(),J["\u0275ted"](null,["\n        "])),(l()(),J["\u0275eld"](0,null,null,10,"a",[["class","sidebar-toggle"],["data-toggle","push-menu"],["href","#"],["role","button"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n            "])),(l()(),J["\u0275eld"](0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["Toggle navigation"])),(l()(),J["\u0275ted"](null,["\n            "])),(l()(),J["\u0275eld"](0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n            "])),(l()(),J["\u0275eld"](0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n            "])),(l()(),J["\u0275eld"](0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n        "])),(l()(),J["\u0275ted"](null,["\n        "])),(l()(),J["\u0275eld"](0,null,null,26,"div",[["class","navbar-custom-menu"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n            "])),(l()(),J["\u0275eld"](0,null,null,23,"ul",[["class","nav navbar-nav"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n                "])),(l()(),J["\u0275eld"](0,null,null,6,"li",[["class","dropdown tasks-menu"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n                    "])),(l()(),J["\u0275eld"](0,null,null,3,"a",[["class","dropdown-toggle"],["data-toggle","dropdown"],["href","#"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.onLogOutClick()&&u}return u},null,null)),(l()(),J["\u0275ted"](null,["\n                        "])),(l()(),J["\u0275eld"](0,null,null,0,"i",[["class","fa fa-sign-out"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n                    "])),(l()(),J["\u0275ted"](null,["\n                "])),(l()(),J["\u0275ted"](null,["\n                "])),(l()(),J["\u0275ted"](null,["\n                "])),(l()(),J["\u0275eld"](0,null,null,4,"li",[["class","dropdown user user-menu"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n                    "])),(l()(),J["\u0275and"](16777216,null,null,1,null,r)),J["\u0275did"](16384,null,0,Z.j,[J.ViewContainerRef,J.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),J["\u0275ted"](null,["\n                "])),(l()(),J["\u0275ted"](null,["\n                "])),(l()(),J["\u0275ted"](null,["\n                "])),(l()(),J["\u0275eld"](0,null,null,4,"li",[],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n                    "])),(l()(),J["\u0275eld"](0,null,null,1,"a",[["data-toggle","control-sidebar"],["href","#"]],null,null,null,null,null)),(l()(),J["\u0275eld"](0,null,null,0,"i",[["class","fa fa-gears"]],null,null,null,null,null)),(l()(),J["\u0275ted"](null,["\n                "])),(l()(),J["\u0275ted"](null,["\n            "])),(l()(),J["\u0275ted"](null,["\n        "])),(l()(),J["\u0275ted"](null,["\n    "])),(l()(),J["\u0275ted"](null,["\n"]))],function(l,n){l(n,48,0,n.component.loggedInUser)},null)}function i(l){return J["\u0275vid"](0,[(l()(),J["\u0275eld"](0,null,null,1,"flexie-shared-main-header",[],null,null,null,o,z)),J["\u0275did"](114688,null,0,X,[],null,null)],function(l,n){l(n,1,0)},null)}function d(l){return Y["\u0275vid"](0,[(l()(),Y["\u0275eld"](0,null,null,16,"div",[["class","user-panel"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n            "])),(l()(),Y["\u0275eld"](0,null,null,3,"div",[["class","pull-left image"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n                "])),(l()(),Y["\u0275eld"](0,null,null,0,"img",[["alt","User Image"],["class","img-circle"]],[[8,"src",4]],null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n            "])),(l()(),Y["\u0275ted"](null,["\n            "])),(l()(),Y["\u0275eld"](0,null,null,8,"div",[["class","pull-left info"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n                "])),(l()(),Y["\u0275eld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["",""])),(l()(),Y["\u0275ted"](null,["\n                "])),(l()(),Y["\u0275eld"](0,null,null,2,"a",[["href","#"]],null,null,null,null,null)),(l()(),Y["\u0275eld"](0,null,null,0,"i",[["class","fa fa-circle text-success"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,[" Online"])),(l()(),Y["\u0275ted"](null,["\n            "])),(l()(),Y["\u0275ted"](null,["\n        "]))],null,function(l,n){var e=n.component;l(n,4,0,e.loggedInUser.avatarUrl),l(n,10,0,e.loggedInUser.firstName)})}function a(l){return Y["\u0275vid"](0,[(l()(),Y["\u0275eld"](0,null,null,11,"li",[["class","treeview"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n                "])),(l()(),Y["\u0275eld"](0,null,null,8,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==Y["\u0275nov"](l,3).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u}return u},null,null)),Y["\u0275did"](671744,null,0,W.l,[W.k,W.a,Q.g],{routerLink:[0,"routerLink"]},null),Y["\u0275pad"](1),(l()(),Y["\u0275ted"](null,["\n                    "])),(l()(),Y["\u0275eld"](0,null,null,0,"i",[["class","fa fa-dashboard"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,[" "])),(l()(),Y["\u0275eld"](0,null,null,1,"span",[],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["Create Request"])),(l()(),Y["\u0275ted"](null,["\n                "])),(l()(),Y["\u0275ted"](null,["\n            "]))],function(l,n){l(n,3,0,l(n,4,0,"/requests/create"))},function(l,n){l(n,2,0,Y["\u0275nov"](n,3).target,Y["\u0275nov"](n,3).href)})}function s(l){return Y["\u0275vid"](0,[(l()(),Y["\u0275eld"](0,null,null,55,"aside",[["class","main-sidebar"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n    "])),(l()(),Y["\u0275ted"](null,["\n    "])),(l()(),Y["\u0275eld"](0,null,null,50,"section",[["class","sidebar"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n        "])),(l()(),Y["\u0275ted"](null,["\n        "])),(l()(),Y["\u0275and"](16777216,null,null,1,null,d)),Y["\u0275did"](16384,null,0,Q.j,[Y.ViewContainerRef,Y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),Y["\u0275ted"](null,["\n        "])),(l()(),Y["\u0275ted"](null,["\n        "])),(l()(),Y["\u0275eld"](0,null,null,14,"form",[["action","#"],["class","sidebar-form"],["method","get"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n            "])),(l()(),Y["\u0275eld"](0,null,null,11,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n                "])),(l()(),Y["\u0275eld"](0,null,null,0,"input",[["class","form-control"],["name","q"],["placeholder","Search..."],["type","text"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n                "])),(l()(),Y["\u0275eld"](0,null,null,6,"span",[["class","input-group-btn"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n                    "])),(l()(),Y["\u0275eld"](0,null,null,3,"button",[["class","btn btn-flat"],["id","search-btn"],["name","search"],["type","submit"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n                        "])),(l()(),Y["\u0275eld"](0,null,null,0,"i",[["class","fa fa-search"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n                    "])),(l()(),Y["\u0275ted"](null,["\n                "])),(l()(),Y["\u0275ted"](null,["\n            "])),(l()(),Y["\u0275ted"](null,["\n        "])),(l()(),Y["\u0275ted"](null,["\n        "])),(l()(),Y["\u0275ted"](null,["\n        "])),(l()(),Y["\u0275ted"](null,["\n        "])),(l()(),Y["\u0275eld"](0,null,null,24,"ul",[["class","sidebar-menu"],["data-widget","tree"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n            "])),(l()(),Y["\u0275eld"](0,null,null,1,"li",[["class","header"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["MAIN NAVIGATION"])),(l()(),Y["\u0275ted"](null,["\n            "])),(l()(),Y["\u0275and"](16777216,null,null,1,null,a)),Y["\u0275did"](16384,null,0,Q.j,[Y.ViewContainerRef,Y.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),Y["\u0275ted"](null,["\n            "])),(l()(),Y["\u0275eld"](0,null,null,15,"li",[["class","treeview"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n                "])),(l()(),Y["\u0275eld"](0,null,null,12,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==Y["\u0275nov"](l,39).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u}return u},null,null)),Y["\u0275did"](671744,null,0,W.l,[W.k,W.a,Q.g],{routerLink:[0,"routerLink"]},null),Y["\u0275pad"](1),(l()(),Y["\u0275ted"](null,["\n                    "])),(l()(),Y["\u0275eld"](0,null,null,0,"i",[["class","fa fa-files-o"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n                    "])),(l()(),Y["\u0275eld"](0,null,null,1,"span",[],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["List My Requests"])),(l()(),Y["\u0275ted"](null,["\n                    "])),(l()(),Y["\u0275eld"](0,null,null,2,"span",[["class","pull-right-container"]],null,null,null,null,null)),(l()(),Y["\u0275ted"](null,["\n                        "])),(l()(),Y["\u0275ted"](null,["\n                    "])),(l()(),Y["\u0275ted"](null,["\n                "])),(l()(),Y["\u0275ted"](null,["\n            "])),(l()(),Y["\u0275ted"](null,["\n        "])),(l()(),Y["\u0275ted"](null,["\n    "])),(l()(),Y["\u0275ted"](null,["\n    "])),(l()(),Y["\u0275ted"](null,["\n"]))],function(l,n){var e=n.component;l(n,7,0,e.loggedInUser),l(n,34,0,e.isVisible),l(n,39,0,l(n,40,0,"/requests"))},function(l,n){l(n,38,0,Y["\u0275nov"](n,39).target,Y["\u0275nov"](n,39).href)})}function c(l){return Y["\u0275vid"](0,[(l()(),Y["\u0275eld"](0,null,null,1,"flexie-left-sidebar",[],null,null,null,s,ll)),Y["\u0275did"](114688,null,0,G,[],null,null)],function(l,n){l(n,1,0)},null)}function p(l){return el["\u0275vid"](0,[(l()(),el["\u0275eld"](0,null,null,13,"footer",[["class","main-footer"]],null,null,null,null,null)),(l()(),el["\u0275ted"](null,["\n    "])),(l()(),el["\u0275eld"](0,null,null,4,"div",[["class","pull-right hidden-xs"]],null,null,null,null,null)),(l()(),el["\u0275ted"](null,["\n        "])),(l()(),el["\u0275eld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),el["\u0275ted"](null,["Version"])),(l()(),el["\u0275ted"](null,[" 1.0.0\n    "])),(l()(),el["\u0275ted"](null,["\n    "])),(l()(),el["\u0275eld"](0,null,null,4,"strong",[],null,null,null,null,null)),(l()(),el["\u0275ted"](null,["Copyright \xa9 2017 "])),(l()(),el["\u0275eld"](0,null,null,1,"a",[["href","javascript:0;"]],null,null,null,null,null)),(l()(),el["\u0275ted"](null,["Flexie"])),(l()(),el["\u0275ted"](null,["."])),(l()(),el["\u0275ted"](null,[" All rights\n    reserved.\n"]))],null,null)}function f(l){return el["\u0275vid"](0,[(l()(),el["\u0275eld"](0,null,null,1,"flexie-shared-footer",[],null,null,null,p,tl)),el["\u0275did"](49152,null,0,nl,[],null,null)],null,null)}function g(l){return ol["\u0275vid"](0,[(l()(),ol["\u0275ted"](null,["\n"])),(l()(),ol["\u0275eld"](0,null,null,11,"html",[],null,null,null,null,null)),(l()(),ol["\u0275ted"](null,["\n"])),(l()(),ol["\u0275eld"](0,null,null,5,"head",[],null,null,null,null,null)),(l()(),ol["\u0275ted"](null,["\n    "])),(l()(),ol["\u0275eld"](0,null,null,0,"title",[],null,null,null,null,null)),(l()(),ol["\u0275ted"](null,["\n\t"])),(l()(),ol["\u0275eld"](0,null,null,0,"meta",[["charset","utf-8"]],null,null,null,null,null)),(l()(),ol["\u0275ted"](null,["\n"])),(l()(),ol["\u0275ted"](null,["\n"])),(l()(),ol["\u0275eld"](0,null,null,1,"body",[],null,null,null,null,null)),(l()(),ol["\u0275ted"](null,["\n\n"])),(l()(),ol["\u0275ted"](null,["\n"])),(l()(),ol["\u0275ted"](null,["\n"]))],null,null)}function m(l){return ol["\u0275vid"](0,[(l()(),ol["\u0275eld"](0,null,null,1,"flexie-right-sidebar",[],null,null,null,g,dl)),ol["\u0275did"](49152,null,0,rl,[],null,null)],null,null)}function h(l){return al["\u0275vid"](0,[(l()(),al["\u0275eld"](0,null,null,32,"section",[],null,null,null,null,null)),(l()(),al["\u0275ted"](null,["\n\n    "])),(l()(),al["\u0275ted"](null,["\n    "])),(l()(),al["\u0275eld"](0,null,null,1,"flexie-shared-main-header",[],null,[[null,"onLogout"]],function(l,n,e){var u=!0,t=l.component;if("onLogout"===n){u=!1!==t.onLogOutClick()&&u}return u},o,z)),al["\u0275did"](114688,null,0,X,[],{loggedInUser:[0,"loggedInUser"]},{onLogout:"onLogout"}),(l()(),al["\u0275ted"](null,["\n\n    "])),(l()(),al["\u0275ted"](null,["\n    "])),(l()(),al["\u0275eld"](0,null,null,1,"flexie-left-sidebar",[],null,null,null,s,ll)),al["\u0275did"](114688,null,0,G,[],{loggedInUser:[0,"loggedInUser"]},null),(l()(),al["\u0275ted"](null,["\n\n"])),(l()(),al["\u0275ted"](null,["\n"])),(l()(),al["\u0275eld"](0,null,null,10,"div",[["class","content-page"]],null,null,null,null,null)),(l()(),al["\u0275ted"](null,["\n    "])),(l()(),al["\u0275eld"](0,null,null,7,"div",[["class","content-wrapper"]],null,null,null,null,null)),(l()(),al["\u0275ted"](null,["\n        \n\n        "])),(l()(),al["\u0275eld"](0,null,null,4,"div",[["class","outer-outlet"]],null,null,null,null,null)),(l()(),al["\u0275ted"](null,["\n            "])),(l()(),al["\u0275eld"](16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),al["\u0275did"](212992,null,0,sl.n,[sl.b,al.ViewContainerRef,al.ComponentFactoryResolver,[8,null],al.ChangeDetectorRef],null,null),(l()(),al["\u0275ted"](null,["\n        "])),(l()(),al["\u0275ted"](null,["\n    "])),(l()(),al["\u0275ted"](null,["\n"])),(l()(),al["\u0275ted"](null,["\n\n    "])),(l()(),al["\u0275ted"](null,["\n    "])),(l()(),al["\u0275eld"](0,null,null,1,"flexie-shared-footer",[],null,null,null,p,tl)),al["\u0275did"](49152,null,0,nl,[],null,null),(l()(),al["\u0275ted"](null,["\n\n    "])),(l()(),al["\u0275ted"](null,["\n    "])),(l()(),al["\u0275eld"](0,null,null,1,"flexie-right-sidebar",[],null,null,null,g,dl)),al["\u0275did"](49152,null,0,rl,[],null,null),(l()(),al["\u0275ted"](null,["\n\n    "])),(l()(),al["\u0275eld"](0,null,null,0,"div",[["class","control-sidebar-bg"]],null,null,null,null,null)),(l()(),al["\u0275ted"](null,["\n\n"]))],function(l,n){var e=n.component;l(n,4,0,e.loggedinUser),l(n,8,0,e.loggedinUser),l(n,18,0)},null)}function v(l){return al["\u0275vid"](0,[(l()(),al["\u0275and"](16777216,null,null,1,null,h)),al["\u0275did"](16384,null,0,cl.j,[al.ViewContainerRef,al.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.component.isLoggedIn())},null)}function y(l){return al["\u0275vid"](0,[(l()(),al["\u0275eld"](0,null,null,3,"app-root",[],null,null,null,v,ml)),al["\u0275prd"](512,null,w,w,[pl.Http]),al["\u0275prd"](512,null,j,j,[fl.a]),al["\u0275did"](114688,null,0,D,[sl.k,w,j],null,null)],function(l,n){l(n,3,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var b={production:!0},I=function(){function l(){}return l}(),U=function(){function l(l,n,e){this._name=l,this._email=n,this._pictureUrl=e}return Object.defineProperty(l.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"email",{get:function(){return this._email},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"pictureUrl",{get:function(){return this._pictureUrl},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"hasPicture",{get:function(){return null!=this._pictureUrl},enumerable:!0,configurable:!0}),l}(),_=e("CPp0"),k=e("W4CS"),L=(e.n(k),{domain:"flexie.auth0.com",clientId:"mYqNju3upwvodUNKXL8QwGd5awY3RqoM",lockOptions:{responseType:"token",authParams:{state:"foo bar state",scope:"openid nickname email"}}}),w=function(){function l(l){this.http=l,this._lock=new Auth0Lock(L.clientId,L.domain,{auth:{redirect:!1}}),this._jwtHelper=new k.JwtHelper,this._user=null,this.restoreSession()}return l.prototype.login=function(){var l=this;return new Promise(function(n,e){l._lock.show(L.lockOptions,function(u,t,r,o,i){l.lockCallback(n,e,u,t,r,o,i)})})},l.prototype.logout=function(){this.clearUserData()},Object.defineProperty(l.prototype,"isLoggedIn",{get:function(){return null!=this._user},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"currentUser",{get:function(){return this._user},enumerable:!0,configurable:!0}),l.prototype.lockCallback=function(l,n,e,u,t,r,o){if(null!=e)return console.error("login failed with errors",e),this.clearUserData(),void n("login failed with errors");var i=this._jwtHelper.decodeToken(t),d=null;u.picture&&u.picture.length>0&&(d=u.picture);var a=new U(i.nickname,i.email,d);this._user=a,localStorage.setItem("id_token",t),localStorage.setItem("access_token",r);var s=JSON.stringify(a),c=window.btoa(encodeURIComponent(s));localStorage.setItem("user",c),l(a)},l.prototype.restoreSession=function(){var l=localStorage.getItem("user");if(!l||!localStorage.getItem("id_token"))return void this.clearUserData();if(this._jwtHelper.isTokenExpired(localStorage.getItem("id_token")))return void this.clearUserData();var n=JSON.parse(this.decode(l));this._user=new U(n._name,n._email,n._pictureUrl)},l.prototype.clearUserData=function(){this._user=null,localStorage.removeItem("id_token"),localStorage.removeItem("access_token"),localStorage.removeItem("user")},l.prototype.decode=function(l){return decodeURIComponent(window.atob(l))},l.ctorParameters=function(){return[{type:_.Http}]},l}(),S=e("CPp0"),O=e("Dqrr"),C=(e.n(O),e("eqpX")),R=(e.n(C),e("xpf9")),P=(e.n(R),e("5v8a")),x=(e.n(P),e("S7im")),N=(e.n(x),e("7Zlu")),j=function(){function l(l){this._httpClient=l,this._getUserByEmail="/api/users/get"}return l.prototype.getUser=function(l){var n=new S.URLSearchParams;return n.set("email",l),this._httpClient.get(this._getUserByEmail,n).map(function(l){return l.json()}).do(function(l){return console.log("get-user-by-email: "+JSON.stringify(l))}).catch(this.handleError)},l.prototype.handleError=function(l){return console.error(l),O.Observable.throw(l.json().error||"Server error")},l.ctorParameters=function(){return[{type:N.a}]},l}(),A=e("BkNc"),q=e("wE0I"),D=function(){function l(l,n,e){this._router=l,this._authService=n,this._userService=e,this.title="app"}return l.prototype.ngOnInit=function(){this.isLoggedIn()?this.getUserData():this.showLoginPopup()},l.prototype.isLoggedIn=function(){return this._authService.isLoggedIn},l.prototype.showLoginPopup=function(){var l=this;this._authService.login().then(function(n){l.authOUser=n,l.GetSystemUserData(l.authOUser.email,l.authOUser),null!=l.loggedinUser&&2==l.loggedinUser.roleId?l._router.navigateByUrl("/requests/create"):l._router.navigateByUrl("/requests")},function(n){l.clearUserData()})},l.prototype.onLogOutClick=function(){this._authService.logout(),this.clearUserData(),this.showLoginPopup()},l.prototype.clearUserData=function(){this.authOUser=null,this.loggedinUser=null,q.a.clearLoginUser(),this._router.navigateByUrl("/")},l.prototype.getUserData=function(){this._authService.isLoggedIn&&(this.authOUser=this._authService.currentUser,this.GetSystemUserData(this.authOUser.email,this.authOUser))},l.prototype.GetSystemUserData=function(l,n){var e=this;this._authService.isLoggedIn&&this._userService.getUser(l).subscribe(function(l){e.loggedinUser=l,e.loggedinUser.avatarUrl=n.pictureUrl,q.a.setLoginUser(e.loggedinUser)})},l.ctorParameters=function(){return[{type:A.k},{type:w},{type:j}]},l}(),H=function(){function l(){this.title="Home"}return l}(),T=e("/oeL"),B=[],E=T["\u0275crt"]({encapsulation:2,styles:B,data:{}}),F=T["\u0275ccf"]("flexie-home",H,t,{},{},[]),M=[""],V=e("/oeL"),X=function(){function l(){this.title="Main Header",this.onLogout=new V.EventEmitter,this.isVisible=!1}return l.prototype.ngOnInit=function(){null!=this.loggedInUser&&"USER"==this.loggedInUser.userRole&&(this.isVisible=!0)},l.prototype.onLogOutClick=function(){event.preventDefault(),event.stopPropagation(),this.onLogout.emit("logout")},l}(),J=e("/oeL"),Z=e("qbdv"),K=[],z=J["\u0275crt"]({encapsulation:2,styles:K,data:{}}),G=(J["\u0275ccf"]("flexie-shared-main-header",X,i,{loggedInUser:"loggedInUser"},{onLogout:"onLogout"},[]),function(){function l(){this.title="Left Side Bar",this.isVisible=!1}return l.prototype.ngOnInit=function(){null!=this.loggedInUser&&"USER"==this.loggedInUser.userRole&&(this.isVisible=!0)},l.prototype.onLogOutClick=function(){},l}()),Y=e("/oeL"),W=e("BkNc"),Q=e("qbdv"),$=[],ll=Y["\u0275crt"]({encapsulation:2,styles:$,data:{}}),nl=(Y["\u0275ccf"]("flexie-left-sidebar",G,c,{loggedInUser:"loggedInUser"},{},[]),function(){function l(){this.title="Shared Footer"}return l}()),el=e("/oeL"),ul=[],tl=el["\u0275crt"]({encapsulation:2,styles:ul,data:{}}),rl=(el["\u0275ccf"]("flexie-shared-footer",nl,f,{},{},[]),function(){function l(){this.title=" Right Side Bar"}return l}()),ol=e("/oeL"),il=[],dl=ol["\u0275crt"]({encapsulation:2,styles:il,data:{}}),al=(ol["\u0275ccf"]("flexie-right-sidebar",rl,m,{},{},[]),e("/oeL")),sl=e("BkNc"),cl=e("qbdv"),pl=e("CPp0"),fl=e("7Zlu"),gl=[M],ml=al["\u0275crt"]({encapsulation:0,styles:gl,data:{}}),hl=al["\u0275ccf"]("app-root",D,y,{},{},[]),vl=function(){function l(){}return l}();vl.baseApiUrl="http://flexieapp.azurewebsites.net";var yl=e("CPp0"),bl=this&&this.__extends||function(){var l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var e in n)n.hasOwnProperty(e)&&(l[e]=n[e])};return function(n,e){function u(){this.constructor=n}l(n,e),n.prototype=null===e?Object.create(e):(u.prototype=e.prototype,new u)}}(),Il=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return bl(n,l),n.prototype.createConnection=function(n){return n.url.startsWith("/")&&(n.url=vl.baseApiUrl+n.url),l.prototype.createConnection.call(this,n)},n}(yl.XHRBackend),Ul=e("/oeL"),_l=e("qbdv"),kl=e("fc+i"),Ll=e("CPp0"),wl=e("BkNc"),Sl=e("7Zlu"),Ol=Ul["\u0275cmf"](I,[D],function(l){return Ul["\u0275mod"]([Ul["\u0275mpd"](512,Ul.ComponentFactoryResolver,Ul["\u0275CodegenComponentFactoryResolver"],[[8,[F,hl]],[3,Ul.ComponentFactoryResolver],Ul.NgModuleRef]),Ul["\u0275mpd"](5120,Ul.LOCALE_ID,Ul["\u0275m"],[[3,Ul.LOCALE_ID]]),Ul["\u0275mpd"](4608,_l.l,_l.k,[Ul.LOCALE_ID]),Ul["\u0275mpd"](5120,Ul.APP_ID,Ul["\u0275f"],[]),Ul["\u0275mpd"](5120,Ul.IterableDiffers,Ul["\u0275k"],[]),Ul["\u0275mpd"](5120,Ul.KeyValueDiffers,Ul["\u0275l"],[]),Ul["\u0275mpd"](4608,kl.b,kl.s,[_l.c]),Ul["\u0275mpd"](6144,Ul.Sanitizer,null,[kl.b]),Ul["\u0275mpd"](4608,kl.e,kl.f,[]),Ul["\u0275mpd"](5120,kl.c,function(l,n,e,u){return[new kl.k(l),new kl.o(n),new kl.n(e,u)]},[_l.c,_l.c,_l.c,kl.e]),Ul["\u0275mpd"](4608,kl.d,kl.d,[kl.c,Ul.NgZone]),Ul["\u0275mpd"](135680,kl.m,kl.m,[_l.c]),Ul["\u0275mpd"](4608,kl.l,kl.l,[kl.d,kl.m]),Ul["\u0275mpd"](6144,Ul.RendererFactory2,null,[kl.l]),Ul["\u0275mpd"](6144,kl.p,null,[kl.m]),Ul["\u0275mpd"](4608,Ul.Testability,Ul.Testability,[Ul.NgZone]),Ul["\u0275mpd"](4608,kl.g,kl.g,[_l.c]),Ul["\u0275mpd"](4608,kl.i,kl.i,[_l.c]),Ul["\u0275mpd"](4608,Ll.BrowserXhr,Ll.BrowserXhr,[]),Ul["\u0275mpd"](4608,Ll.ResponseOptions,Ll.BaseResponseOptions,[]),Ul["\u0275mpd"](5120,Ll.XSRFStrategy,Ll["\u0275b"],[]),Ul["\u0275mpd"](4608,Ll.XHRBackend,Il,[Ll.BrowserXhr,Ll.ResponseOptions,Ll.XSRFStrategy]),Ul["\u0275mpd"](4608,Ll.RequestOptions,Ll.BaseRequestOptions,[]),Ul["\u0275mpd"](5120,Ll.Http,Ll["\u0275c"],[Ll.XHRBackend,Ll.RequestOptions]),Ul["\u0275mpd"](5120,wl.a,wl.w,[wl.k]),Ul["\u0275mpd"](4608,wl.d,wl.d,[]),Ul["\u0275mpd"](6144,wl.f,null,[wl.d]),Ul["\u0275mpd"](135680,wl.o,wl.o,[wl.k,Ul.NgModuleFactoryLoader,Ul.Compiler,Ul.Injector,wl.f]),Ul["\u0275mpd"](4608,wl.e,wl.e,[]),Ul["\u0275mpd"](5120,wl.h,wl.z,[wl.x]),Ul["\u0275mpd"](5120,Ul.APP_BOOTSTRAP_LISTENER,function(l){return[l]},[wl.h]),Ul["\u0275mpd"](4608,Sl.a,Sl.a,[Ll.Http]),Ul["\u0275mpd"](512,_l.b,_l.b,[]),Ul["\u0275mpd"](1024,Ul.ErrorHandler,kl.q,[]),Ul["\u0275mpd"](1024,Ul.NgProbeToken,function(){return[wl.s()]},[]),Ul["\u0275mpd"](512,wl.x,wl.x,[Ul.Injector]),Ul["\u0275mpd"](1024,Ul.APP_INITIALIZER,function(l,n,e){return[kl.r(l,n),wl.y(e)]},[[2,kl.h],[2,Ul.NgProbeToken],wl.x]),Ul["\u0275mpd"](512,Ul.ApplicationInitStatus,Ul.ApplicationInitStatus,[[2,Ul.APP_INITIALIZER]]),Ul["\u0275mpd"](131584,Ul["\u0275e"],Ul["\u0275e"],[Ul.NgZone,Ul["\u0275Console"],Ul.Injector,Ul.ErrorHandler,Ul.ComponentFactoryResolver,Ul.ApplicationInitStatus]),Ul["\u0275mpd"](2048,Ul.ApplicationRef,null,[Ul["\u0275e"]]),Ul["\u0275mpd"](512,Ul.ApplicationModule,Ul.ApplicationModule,[Ul.ApplicationRef]),Ul["\u0275mpd"](512,kl.a,kl.a,[[3,kl.a]]),Ul["\u0275mpd"](512,Ll.HttpModule,Ll.HttpModule,[]),Ul["\u0275mpd"](1024,wl.r,wl.u,[[3,wl.k]]),Ul["\u0275mpd"](512,wl.q,wl.c,[]),Ul["\u0275mpd"](512,wl.b,wl.b,[]),Ul["\u0275mpd"](256,wl.g,{},[]),Ul["\u0275mpd"](1024,_l.g,wl.t,[_l.n,[2,_l.a],wl.g]),Ul["\u0275mpd"](512,_l.f,_l.f,[_l.g]),Ul["\u0275mpd"](512,Ul.Compiler,Ul.Compiler,[]),Ul["\u0275mpd"](512,Ul.NgModuleFactoryLoader,Ul.SystemJsNgModuleLoader,[Ul.Compiler,[2,Ul.SystemJsNgModuleLoaderConfig]]),Ul["\u0275mpd"](1024,wl.i,function(){return[[{path:"",component:H},{path:"requests",loadChildren:"./request/request.module#RequestModule"}]]},[]),Ul["\u0275mpd"](1024,wl.k,wl.v,[Ul.ApplicationRef,wl.q,wl.b,_l.f,Ul.Injector,Ul.NgModuleFactoryLoader,Ul.Compiler,wl.i,wl.g,[2,wl.p],[2,wl.j]]),Ul["\u0275mpd"](512,wl.m,wl.m,[[2,wl.r],[2,wl.k]]),Ul["\u0275mpd"](512,I,I,[])])}),Cl=e("/oeL"),Rl=e("fc+i");b.production&&Object(Cl.enableProdMode)(),Object(Rl.j)().bootstrapModuleFactory(Ol)},gFIY:function(l,n,e){function u(l){var n=t[l];return n?e.e(n[1]).then(function(){return e(n[0])}):Promise.reject(new Error("Cannot find module '"+l+"'."))}var t={"./request/request.module.ngfactory":["haat",0]};u.keys=function(){return Object.keys(t)},l.exports=u,u.id="gFIY"},wE0I:function(l,n,e){"use strict";e.d(n,"a",function(){return u});var u=function(){function l(){}return l.setLoginUser=function(l){localStorage.setItem("flexie.userlogged",JSON.stringify(l))},l.getLoginUser=function(){return JSON.parse(localStorage.getItem("flexie.userlogged"))},l.clearLoginUser=function(){localStorage.removeItem("flexie.userlogged")},l}()}},[0]);