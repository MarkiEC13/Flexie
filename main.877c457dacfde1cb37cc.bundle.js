webpackJsonp([3],{0:function(l,n,e){l.exports=e("cDNt")},"7Zlu":function(l,n,e){"use strict";e.d(n,"a",function(){return t});var u=e("CPp0"),t=function(){function l(l){this.http=l}return l.prototype.createAuthorizationHeader=function(l){var n=localStorage.getItem("id_token");null!==n&&"undefined"!==n&&(l.append("Content-Type","application/json; charset=UTF-8"),l.append("Authorization","Bearer "+n))},l.prototype.get=function(l,n){var e=new u.Headers;return this.createAuthorizationHeader(e),this.http.get(l,{search:n,headers:e})},l.prototype.post=function(l,n){var e=new u.Headers;return this.createAuthorizationHeader(e),this.http.post(l,n,{headers:e})},l.ctorParameters=function(){return[{type:u.Http}]},l}()},cDNt:function(l,n,e){"use strict";function u(l){return q["\u0275vid"](0,[(l()(),q["\u0275ted"](null,["","\n"]))],null,function(l,n){l(n,0,0,n.component.title)})}function t(l){return q["\u0275vid"](0,[(l()(),q["\u0275eld"](0,null,null,1,"flexie-home",[],null,null,null,u,H)),q["\u0275did"](49152,null,0,A,[],null,null)],null,null)}function r(l){return T["\u0275vid"](0,[(l()(),T["\u0275eld"](0,null,null,65,"header",[["class","main-header"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n    "])),(l()(),T["\u0275ted"](null,["\n    "])),(l()(),T["\u0275eld"](0,null,null,11,"a",[["class","logo"],["href","javascript:void(0);"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n        "])),(l()(),T["\u0275ted"](null,["\n        "])),(l()(),T["\u0275eld"](0,null,null,2,"span",[["class","logo-mini"]],null,null,null,null,null)),(l()(),T["\u0275eld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["Flexie"])),(l()(),T["\u0275ted"](null,["\n        "])),(l()(),T["\u0275ted"](null,["\n        "])),(l()(),T["\u0275eld"](0,null,null,2,"span",[["class","logo-lg"]],null,null,null,null,null)),(l()(),T["\u0275eld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["Flexie"])),(l()(),T["\u0275ted"](null,["\n    "])),(l()(),T["\u0275ted"](null,["\n    "])),(l()(),T["\u0275ted"](null,["\n    "])),(l()(),T["\u0275eld"](0,null,null,47,"nav",[["class","navbar navbar-static-top"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n        "])),(l()(),T["\u0275ted"](null,["\n        "])),(l()(),T["\u0275eld"](0,null,null,10,"a",[["class","sidebar-toggle"],["data-toggle","push-menu"],["href","#"],["role","button"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n            "])),(l()(),T["\u0275eld"](0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["Toggle navigation"])),(l()(),T["\u0275ted"](null,["\n            "])),(l()(),T["\u0275eld"](0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n            "])),(l()(),T["\u0275eld"](0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n            "])),(l()(),T["\u0275eld"](0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n        "])),(l()(),T["\u0275ted"](null,["\n        "])),(l()(),T["\u0275eld"](0,null,null,31,"div",[["class","navbar-custom-menu"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n            "])),(l()(),T["\u0275eld"](0,null,null,28,"ul",[["class","nav navbar-nav"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n                "])),(l()(),T["\u0275eld"](0,null,null,6,"li",[["class","dropdown tasks-menu"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n                        "])),(l()(),T["\u0275eld"](0,null,null,3,"a",[["class","dropdown-toggle"],["data-toggle","dropdown"],["href","#"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.onLogOutClick()&&u}return u},null,null)),(l()(),T["\u0275ted"](null,["\n                            "])),(l()(),T["\u0275eld"](0,null,null,0,"i",[["class","fa fa-sign-out"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n                        "])),(l()(),T["\u0275ted"](null,["\n                    "])),(l()(),T["\u0275ted"](null,["\n                "])),(l()(),T["\u0275ted"](null,["\n                "])),(l()(),T["\u0275eld"](0,null,null,9,"li",[["class","dropdown user user-menu"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n                    "])),(l()(),T["\u0275eld"](0,null,null,6,"a",[["class","dropdown-toggle"],["data-toggle","dropdown"],["href","#"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n                        "])),(l()(),T["\u0275eld"](0,null,null,0,"img",[["alt","User Image"],["class","user-image"]],[[8,"src",4]],null,null,null,null)),(l()(),T["\u0275ted"](null,["\n                        "])),(l()(),T["\u0275eld"](0,null,null,1,"span",[["class","hidden-xs"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["",""])),(l()(),T["\u0275ted"](null,["\n                    "])),(l()(),T["\u0275ted"](null,["\n                "])),(l()(),T["\u0275ted"](null,["\n                "])),(l()(),T["\u0275ted"](null,["\n                "])),(l()(),T["\u0275eld"](0,null,null,4,"li",[],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n                    "])),(l()(),T["\u0275eld"](0,null,null,1,"a",[["data-toggle","control-sidebar"],["href","#"]],null,null,null,null,null)),(l()(),T["\u0275eld"](0,null,null,0,"i",[["class","fa fa-gears"]],null,null,null,null,null)),(l()(),T["\u0275ted"](null,["\n                "])),(l()(),T["\u0275ted"](null,["\n            "])),(l()(),T["\u0275ted"](null,["\n        "])),(l()(),T["\u0275ted"](null,["\n    "])),(l()(),T["\u0275ted"](null,["\n"]))],null,function(l,n){var e=n.component;l(n,49,0,e.user.avatarUrl),l(n,52,0,e.user.firstName)})}function o(l){return T["\u0275vid"](0,[(l()(),T["\u0275eld"](0,null,null,1,"flexie-shared-main-header",[],null,null,null,r,J)),T["\u0275did"](49152,null,0,E,[],null,null)],null,null)}function i(l){return K["\u0275vid"](0,[(l()(),K["\u0275eld"](0,null,null,104,"aside",[["class","main-sidebar"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n    "])),(l()(),K["\u0275ted"](null,["\n    "])),(l()(),K["\u0275eld"](0,null,null,99,"section",[["class","sidebar"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n        "])),(l()(),K["\u0275ted"](null,["\n        "])),(l()(),K["\u0275eld"](0,null,null,16,"div",[["class","user-panel"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n            "])),(l()(),K["\u0275eld"](0,null,null,3,"div",[["class","pull-left image"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                "])),(l()(),K["\u0275eld"](0,null,null,0,"img",[["alt","User Image"],["class","img-circle"]],[[8,"src",4]],null,null,null,null)),(l()(),K["\u0275ted"](null,["\n            "])),(l()(),K["\u0275ted"](null,["\n            "])),(l()(),K["\u0275eld"](0,null,null,8,"div",[["class","pull-left info"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                "])),(l()(),K["\u0275eld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["",""])),(l()(),K["\u0275ted"](null,["\n                "])),(l()(),K["\u0275eld"](0,null,null,2,"a",[["href","#"]],null,null,null,null,null)),(l()(),K["\u0275eld"](0,null,null,0,"i",[["class","fa fa-circle text-success"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,[" Online"])),(l()(),K["\u0275ted"](null,["\n            "])),(l()(),K["\u0275ted"](null,["\n        "])),(l()(),K["\u0275ted"](null,["\n        "])),(l()(),K["\u0275ted"](null,["\n        "])),(l()(),K["\u0275eld"](0,null,null,14,"form",[["action","#"],["class","sidebar-form"],["method","get"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n            "])),(l()(),K["\u0275eld"](0,null,null,11,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                "])),(l()(),K["\u0275eld"](0,null,null,0,"input",[["class","form-control"],["name","q"],["placeholder","Search..."],["type","text"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                "])),(l()(),K["\u0275eld"](0,null,null,6,"span",[["class","input-group-btn"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                    "])),(l()(),K["\u0275eld"](0,null,null,3,"button",[["class","btn btn-flat"],["id","search-btn"],["name","search"],["type","submit"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                        "])),(l()(),K["\u0275eld"](0,null,null,0,"i",[["class","fa fa-search"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                    "])),(l()(),K["\u0275ted"](null,["\n                "])),(l()(),K["\u0275ted"](null,["\n            "])),(l()(),K["\u0275ted"](null,["\n        "])),(l()(),K["\u0275ted"](null,["\n        "])),(l()(),K["\u0275ted"](null,["\n        "])),(l()(),K["\u0275ted"](null,["\n        "])),(l()(),K["\u0275eld"](0,null,null,58,"ul",[["class","sidebar-menu"],["data-widget","tree"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n            "])),(l()(),K["\u0275eld"](0,null,null,1,"li",[["class","header"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["MAIN NAVIGATION"])),(l()(),K["\u0275ted"](null,["\n            "])),(l()(),K["\u0275eld"](0,null,null,16,"li",[["class","treeview"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                "])),(l()(),K["\u0275eld"](0,null,null,13,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==K["\u0275nov"](l,51).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u}return u},null,null)),K["\u0275did"](671744,null,0,z.l,[z.k,z.a,G.g],{routerLink:[0,"routerLink"]},null),K["\u0275pad"](1),(l()(),K["\u0275ted"](null,["\n                    "])),(l()(),K["\u0275eld"](0,null,null,0,"i",[["class","fa fa-dashboard"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,[" "])),(l()(),K["\u0275eld"](0,null,null,1,"span",[],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["Request"])),(l()(),K["\u0275ted"](null,["\n                    "])),(l()(),K["\u0275eld"](0,null,null,3,"span",[["class","pull-right-container"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                        "])),(l()(),K["\u0275eld"](0,null,null,0,"i",[["class","fa fa-angle-left pull-right"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                    "])),(l()(),K["\u0275ted"](null,["\n                "])),(l()(),K["\u0275ted"](null,["\n            "])),(l()(),K["\u0275ted"](null,["\n            "])),(l()(),K["\u0275eld"](0,null,null,17,"li",[["class","treeview"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                "])),(l()(),K["\u0275eld"](0,null,null,14,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==K["\u0275nov"](l,69).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u}return u},null,null)),K["\u0275did"](671744,null,0,z.l,[z.k,z.a,G.g],{routerLink:[0,"routerLink"]},null),K["\u0275pad"](1),(l()(),K["\u0275ted"](null,["\n                    "])),(l()(),K["\u0275eld"](0,null,null,0,"i",[["class","fa fa-files-o"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                    "])),(l()(),K["\u0275eld"](0,null,null,1,"span",[],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["List My Requests"])),(l()(),K["\u0275ted"](null,["\n                    "])),(l()(),K["\u0275eld"](0,null,null,4,"span",[["class","pull-right-container"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                        "])),(l()(),K["\u0275eld"](0,null,null,1,"span",[["class","label label-primary pull-right"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["4"])),(l()(),K["\u0275ted"](null,["\n                    "])),(l()(),K["\u0275ted"](null,["\n                "])),(l()(),K["\u0275ted"](null,["\n            "])),(l()(),K["\u0275ted"](null,["\n            "])),(l()(),K["\u0275eld"](0,null,null,15,"li",[],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                "])),(l()(),K["\u0275eld"](0,null,null,12,"a",[["href","javascript:0;"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                    "])),(l()(),K["\u0275eld"](0,null,null,0,"i",[["class","fa fa-th"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,[" "])),(l()(),K["\u0275eld"](0,null,null,1,"span",[],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["Service Providers"])),(l()(),K["\u0275ted"](null,["\n                    "])),(l()(),K["\u0275eld"](0,null,null,4,"span",[["class","pull-right-container"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["\n                        "])),(l()(),K["\u0275eld"](0,null,null,1,"small",[["class","label pull-right bg-green"]],null,null,null,null,null)),(l()(),K["\u0275ted"](null,["new"])),(l()(),K["\u0275ted"](null,["\n                    "])),(l()(),K["\u0275ted"](null,["\n                "])),(l()(),K["\u0275ted"](null,["\n            "])),(l()(),K["\u0275ted"](null,["\n        "])),(l()(),K["\u0275ted"](null,["\n    "])),(l()(),K["\u0275ted"](null,["\n    "])),(l()(),K["\u0275ted"](null,["\n"]))],function(l,n){l(n,51,0,l(n,52,0,"/requests/create")),l(n,69,0,l(n,70,0,"/requests"))},function(l,n){var e=n.component;l(n,10,0,e.user.avatarUrl),l(n,16,0,e.user.firstName),l(n,50,0,K["\u0275nov"](n,51).target,K["\u0275nov"](n,51).href),l(n,68,0,K["\u0275nov"](n,69).target,K["\u0275nov"](n,69).href)})}function a(l){return K["\u0275vid"](0,[(l()(),K["\u0275eld"](0,null,null,1,"flexie-left-sidebar",[],null,null,null,i,Y)),K["\u0275did"](49152,null,0,Z,[],null,null)],null,null)}function d(l){return Q["\u0275vid"](0,[(l()(),Q["\u0275eld"](0,null,null,13,"footer",[["class","main-footer"]],null,null,null,null,null)),(l()(),Q["\u0275ted"](null,["\n    "])),(l()(),Q["\u0275eld"](0,null,null,4,"div",[["class","pull-right hidden-xs"]],null,null,null,null,null)),(l()(),Q["\u0275ted"](null,["\n        "])),(l()(),Q["\u0275eld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),Q["\u0275ted"](null,["Version"])),(l()(),Q["\u0275ted"](null,[" 1.0.0\n    "])),(l()(),Q["\u0275ted"](null,["\n    "])),(l()(),Q["\u0275eld"](0,null,null,4,"strong",[],null,null,null,null,null)),(l()(),Q["\u0275ted"](null,["Copyright \xa9 2017 "])),(l()(),Q["\u0275eld"](0,null,null,1,"a",[["href","javascript:0;"]],null,null,null,null,null)),(l()(),Q["\u0275ted"](null,["IncidentMS"])),(l()(),Q["\u0275ted"](null,["."])),(l()(),Q["\u0275ted"](null,[" All rights\n    reserved.\n"]))],null,null)}function s(l){return Q["\u0275vid"](0,[(l()(),Q["\u0275eld"](0,null,null,1,"flexie-shared-footer",[],null,null,null,d,ll)),Q["\u0275did"](49152,null,0,W,[],null,null)],null,null)}function c(l){return el["\u0275vid"](0,[(l()(),el["\u0275ted"](null,["\n"])),(l()(),el["\u0275eld"](0,null,null,11,"html",[],null,null,null,null,null)),(l()(),el["\u0275ted"](null,["\n"])),(l()(),el["\u0275eld"](0,null,null,5,"head",[],null,null,null,null,null)),(l()(),el["\u0275ted"](null,["\n    "])),(l()(),el["\u0275eld"](0,null,null,0,"title",[],null,null,null,null,null)),(l()(),el["\u0275ted"](null,["\n\t"])),(l()(),el["\u0275eld"](0,null,null,0,"meta",[["charset","utf-8"]],null,null,null,null,null)),(l()(),el["\u0275ted"](null,["\n"])),(l()(),el["\u0275ted"](null,["\n"])),(l()(),el["\u0275eld"](0,null,null,1,"body",[],null,null,null,null,null)),(l()(),el["\u0275ted"](null,["\n\n"])),(l()(),el["\u0275ted"](null,["\n"])),(l()(),el["\u0275ted"](null,["\n"]))],null,null)}function p(l){return el["\u0275vid"](0,[(l()(),el["\u0275eld"](0,null,null,1,"flexie-right-sidebar",[],null,null,null,c,tl)),el["\u0275did"](49152,null,0,nl,[],null,null)],null,null)}function f(l){return rl["\u0275vid"](0,[(l()(),rl["\u0275eld"](0,null,null,32,"section",[],null,null,null,null,null)),(l()(),rl["\u0275ted"](null,["\n\n    "])),(l()(),rl["\u0275ted"](null,["\n    "])),(l()(),rl["\u0275eld"](0,null,null,1,"flexie-shared-main-header",[],null,[[null,"onLogout"]],function(l,n,e){var u=!0,t=l.component;if("onLogout"===n){u=!1!==t.onLogOutClick()&&u}return u},r,J)),rl["\u0275did"](49152,null,0,E,[],{user:[0,"user"]},{onLogout:"onLogout"}),(l()(),rl["\u0275ted"](null,["\n\n    "])),(l()(),rl["\u0275ted"](null,["\n    "])),(l()(),rl["\u0275eld"](0,null,null,1,"flexie-left-sidebar",[],null,null,null,i,Y)),rl["\u0275did"](49152,null,0,Z,[],{user:[0,"user"]},null),(l()(),rl["\u0275ted"](null,["\n\n"])),(l()(),rl["\u0275ted"](null,["\n"])),(l()(),rl["\u0275eld"](0,null,null,10,"div",[["class","content-page"]],null,null,null,null,null)),(l()(),rl["\u0275ted"](null,["\n    "])),(l()(),rl["\u0275eld"](0,null,null,7,"div",[["class","content-wrapper"]],null,null,null,null,null)),(l()(),rl["\u0275ted"](null,["\n        \n\n        "])),(l()(),rl["\u0275eld"](0,null,null,4,"div",[["class","outer-outlet"]],null,null,null,null,null)),(l()(),rl["\u0275ted"](null,["\n            "])),(l()(),rl["\u0275eld"](16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),rl["\u0275did"](212992,null,0,ol.n,[ol.b,rl.ViewContainerRef,rl.ComponentFactoryResolver,[8,null],rl.ChangeDetectorRef],null,null),(l()(),rl["\u0275ted"](null,["\n        "])),(l()(),rl["\u0275ted"](null,["\n    "])),(l()(),rl["\u0275ted"](null,["\n"])),(l()(),rl["\u0275ted"](null,["\n\n    "])),(l()(),rl["\u0275ted"](null,["\n    "])),(l()(),rl["\u0275eld"](0,null,null,1,"flexie-shared-footer",[],null,null,null,d,ll)),rl["\u0275did"](49152,null,0,W,[],null,null),(l()(),rl["\u0275ted"](null,["\n\n    "])),(l()(),rl["\u0275ted"](null,["\n    "])),(l()(),rl["\u0275eld"](0,null,null,1,"flexie-right-sidebar",[],null,null,null,c,tl)),rl["\u0275did"](49152,null,0,nl,[],null,null),(l()(),rl["\u0275ted"](null,["\n\n    "])),(l()(),rl["\u0275eld"](0,null,null,0,"div",[["class","control-sidebar-bg"]],null,null,null,null,null)),(l()(),rl["\u0275ted"](null,["\n\n"]))],function(l,n){var e=n.component;l(n,4,0,e.loggedinUser),l(n,8,0,e.loggedinUser),l(n,18,0)},null)}function g(l){return rl["\u0275vid"](0,[(l()(),rl["\u0275and"](16777216,null,null,1,null,f)),rl["\u0275did"](16384,null,0,il.i,[rl.ViewContainerRef,rl.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.component.isLoggedIn())},null)}function h(l){return rl["\u0275vid"](0,[(l()(),rl["\u0275eld"](0,null,null,3,"app-root",[],null,null,null,g,cl)),rl["\u0275prd"](512,null,L,L,[al.Http]),rl["\u0275prd"](512,null,R,R,[dl.a]),rl["\u0275did"](114688,null,0,j,[ol.k,L,R],null,null)],function(l,n){l(n,3,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var m={production:!0},v=function(){function l(){}return l}(),y=function(){function l(l,n,e){this._name=l,this._email=n,this._pictureUrl=e}return Object.defineProperty(l.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"email",{get:function(){return this._email},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"pictureUrl",{get:function(){return this._pictureUrl},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"hasPicture",{get:function(){return null!=this._pictureUrl},enumerable:!0,configurable:!0}),l}(),b=e("CPp0"),_=e("W4CS"),k=(e.n(_),{domain:"flexie.auth0.com",clientId:"mYqNju3upwvodUNKXL8QwGd5awY3RqoM",lockOptions:{responseType:"token",authParams:{state:"foo bar state",scope:"openid nickname email"}}}),L=function(){function l(l){this.http=l,this._lock=new Auth0Lock(k.clientId,k.domain,{auth:{redirect:!1}}),this._jwtHelper=new _.JwtHelper,this._user=null,this.restoreSession()}return l.prototype.login=function(){var l=this;return new Promise(function(n,e){l._lock.show(k.lockOptions,function(u,t,r,o,i){l.lockCallback(n,e,u,t,r,o,i)})})},l.prototype.logout=function(){this.clearUserData()},Object.defineProperty(l.prototype,"isLoggedIn",{get:function(){return null!=this._user},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"currentUser",{get:function(){return this._user},enumerable:!0,configurable:!0}),l.prototype.lockCallback=function(l,n,e,u,t,r,o){if(null!=e)return console.error("login failed with errors",e),this.clearUserData(),void n("login failed with errors");var i=this._jwtHelper.decodeToken(t),a=null;u.picture&&u.picture.length>0&&(a=u.picture);var d=new y(i.nickname,i.email,a);this._user=d,localStorage.setItem("id_token",t),localStorage.setItem("access_token",r);var s=JSON.stringify(d),c=window.btoa(encodeURIComponent(s));localStorage.setItem("user",c),l(d)},l.prototype.restoreSession=function(){var l=localStorage.getItem("user");if(!l||!localStorage.getItem("id_token"))return void this.clearUserData();if(this._jwtHelper.isTokenExpired(localStorage.getItem("id_token")))return void this.clearUserData();var n=JSON.parse(this.decode(l));this._user=new y(n._name,n._email,n._pictureUrl)},l.prototype.clearUserData=function(){this._user=null,localStorage.removeItem("id_token"),localStorage.removeItem("access_token"),localStorage.removeItem("user")},l.prototype.decode=function(l){return decodeURIComponent(window.atob(l))},l.ctorParameters=function(){return[{type:b.Http}]},l}(),I=e("CPp0"),U=e("Dqrr"),S=(e.n(U),e("eqpX")),w=(e.n(S),e("xpf9")),O=(e.n(w),e("5v8a")),C=(e.n(O),e("S7im")),P=(e.n(C),e("7Zlu")),R=function(){function l(l){this._httpClient=l,this._getUserByEmail="/api/users/get"}return l.prototype.getUser=function(l){var n=new I.URLSearchParams;return n.set("email",l),this._httpClient.get(this._getUserByEmail,n).map(function(l){return l.json()}).do(function(l){return console.log("get-user-by-email: "+JSON.stringify(l))}).catch(this.handleError)},l.prototype.handleError=function(l){return console.error(l),U.Observable.throw(l.json().error||"Server error")},l.ctorParameters=function(){return[{type:P.a}]},l}(),x=function(){function l(){}return l.setLoginUser=function(l){localStorage.setItem("flexie.userlogged",JSON.stringify(l))},l.getLoginUser=function(){return JSON.parse(localStorage.getItem("flexie.userlogged"))},l.clearLoginUser=function(){localStorage.removeItem("flexie.userlogged")},l}(),N=e("BkNc"),j=function(){function l(l,n,e){this._router=l,this._authService=n,this._userService=e,this.title="app"}return l.prototype.ngOnInit=function(){this.isLoggedIn()?this.getUserData():this.showLoginPopup()},l.prototype.isLoggedIn=function(){return this._authService.isLoggedIn},l.prototype.showLoginPopup=function(){var l=this;this._authService.login().then(function(n){l.authOUser=n,l.GetSystemUserData(l.authOUser.email,l.authOUser)},function(n){l.clearUserData()})},l.prototype.onLogOutClick=function(){this._authService.logout(),this.clearUserData(),this.showLoginPopup()},l.prototype.clearUserData=function(){this.authOUser=null,this.loggedinUser=null,x.clearLoginUser(),this._router.navigateByUrl("/")},l.prototype.getUserData=function(){this._authService.isLoggedIn&&(this.authOUser=this._authService.currentUser,this.GetSystemUserData(this.authOUser.email,this.authOUser))},l.prototype.GetSystemUserData=function(l,n){var e=this;this._authService.isLoggedIn&&this._userService.getUser(l).subscribe(function(l){e.loggedinUser=l,e.loggedinUser.avatarUrl=n.pictureUrl,x.setLoginUser(e.loggedinUser)})},l.ctorParameters=function(){return[{type:N.k},{type:L},{type:R}]},l}(),A=function(){function l(){this.title="Home"}return l}(),q=e("/oeL"),D=[],H=q["\u0275crt"]({encapsulation:2,styles:D,data:{}}),B=q["\u0275ccf"]("flexie-home",A,t,{},{},[]),M=[""],F=e("/oeL"),E=function(){function l(){this.title="Main Header",this.onLogout=new F.EventEmitter}return l.prototype.onLogOutClick=function(){event.preventDefault(),event.stopPropagation(),this.onLogout.emit("logout")},l}(),T=e("/oeL"),X=[],J=T["\u0275crt"]({encapsulation:2,styles:X,data:{}}),Z=(T["\u0275ccf"]("flexie-shared-main-header",E,o,{user:"user"},{onLogout:"onLogout"},[]),function(){function l(){this.title="Left Side Bar"}return l}()),K=e("/oeL"),z=e("BkNc"),G=e("qbdv"),V=[],Y=K["\u0275crt"]({encapsulation:2,styles:V,data:{}}),W=(K["\u0275ccf"]("flexie-left-sidebar",Z,a,{user:"user"},{},[]),function(){function l(){this.title="Shared Footer"}return l}()),Q=e("/oeL"),$=[],ll=Q["\u0275crt"]({encapsulation:2,styles:$,data:{}}),nl=(Q["\u0275ccf"]("flexie-shared-footer",W,s,{},{},[]),function(){function l(){this.title=" Right Side Bar"}return l}()),el=e("/oeL"),ul=[],tl=el["\u0275crt"]({encapsulation:2,styles:ul,data:{}}),rl=(el["\u0275ccf"]("flexie-right-sidebar",nl,p,{},{},[]),e("/oeL")),ol=e("BkNc"),il=e("qbdv"),al=e("CPp0"),dl=e("7Zlu"),sl=[M],cl=rl["\u0275crt"]({encapsulation:0,styles:sl,data:{}}),pl=rl["\u0275ccf"]("app-root",j,h,{},{},[]),fl=function(){function l(){}return l}();fl.baseApiUrl="http://flexieapp.azurewebsites.net";var gl=e("CPp0"),hl=this&&this.__extends||function(){var l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var e in n)n.hasOwnProperty(e)&&(l[e]=n[e])};return function(n,e){function u(){this.constructor=n}l(n,e),n.prototype=null===e?Object.create(e):(u.prototype=e.prototype,new u)}}(),ml=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return hl(n,l),n.prototype.createConnection=function(n){return n.url.startsWith("/")&&(n.url=fl.baseApiUrl+n.url),l.prototype.createConnection.call(this,n)},n}(gl.XHRBackend),vl=e("/oeL"),yl=e("qbdv"),bl=e("fc+i"),_l=e("CPp0"),kl=e("BkNc"),Ll=e("7Zlu"),Il=vl["\u0275cmf"](v,[j],function(l){return vl["\u0275mod"]([vl["\u0275mpd"](512,vl.ComponentFactoryResolver,vl["\u0275CodegenComponentFactoryResolver"],[[8,[B,pl]],[3,vl.ComponentFactoryResolver],vl.NgModuleRef]),vl["\u0275mpd"](5120,vl.LOCALE_ID,vl["\u0275m"],[[3,vl.LOCALE_ID]]),vl["\u0275mpd"](4608,yl.k,yl.j,[vl.LOCALE_ID]),vl["\u0275mpd"](5120,vl.APP_ID,vl["\u0275f"],[]),vl["\u0275mpd"](5120,vl.IterableDiffers,vl["\u0275k"],[]),vl["\u0275mpd"](5120,vl.KeyValueDiffers,vl["\u0275l"],[]),vl["\u0275mpd"](4608,bl.b,bl.s,[yl.c]),vl["\u0275mpd"](6144,vl.Sanitizer,null,[bl.b]),vl["\u0275mpd"](4608,bl.e,bl.f,[]),vl["\u0275mpd"](5120,bl.c,function(l,n,e,u){return[new bl.k(l),new bl.o(n),new bl.n(e,u)]},[yl.c,yl.c,yl.c,bl.e]),vl["\u0275mpd"](4608,bl.d,bl.d,[bl.c,vl.NgZone]),vl["\u0275mpd"](135680,bl.m,bl.m,[yl.c]),vl["\u0275mpd"](4608,bl.l,bl.l,[bl.d,bl.m]),vl["\u0275mpd"](6144,vl.RendererFactory2,null,[bl.l]),vl["\u0275mpd"](6144,bl.p,null,[bl.m]),vl["\u0275mpd"](4608,vl.Testability,vl.Testability,[vl.NgZone]),vl["\u0275mpd"](4608,bl.g,bl.g,[yl.c]),vl["\u0275mpd"](4608,bl.i,bl.i,[yl.c]),vl["\u0275mpd"](4608,_l.BrowserXhr,_l.BrowserXhr,[]),vl["\u0275mpd"](4608,_l.ResponseOptions,_l.BaseResponseOptions,[]),vl["\u0275mpd"](5120,_l.XSRFStrategy,_l["\u0275b"],[]),vl["\u0275mpd"](4608,_l.XHRBackend,ml,[_l.BrowserXhr,_l.ResponseOptions,_l.XSRFStrategy]),vl["\u0275mpd"](4608,_l.RequestOptions,_l.BaseRequestOptions,[]),vl["\u0275mpd"](5120,_l.Http,_l["\u0275c"],[_l.XHRBackend,_l.RequestOptions]),vl["\u0275mpd"](5120,kl.a,kl.w,[kl.k]),vl["\u0275mpd"](4608,kl.d,kl.d,[]),vl["\u0275mpd"](6144,kl.f,null,[kl.d]),vl["\u0275mpd"](135680,kl.o,kl.o,[kl.k,vl.NgModuleFactoryLoader,vl.Compiler,vl.Injector,kl.f]),vl["\u0275mpd"](4608,kl.e,kl.e,[]),vl["\u0275mpd"](5120,kl.h,kl.z,[kl.x]),vl["\u0275mpd"](5120,vl.APP_BOOTSTRAP_LISTENER,function(l){return[l]},[kl.h]),vl["\u0275mpd"](4608,Ll.a,Ll.a,[_l.Http]),vl["\u0275mpd"](512,yl.b,yl.b,[]),vl["\u0275mpd"](1024,vl.ErrorHandler,bl.q,[]),vl["\u0275mpd"](1024,vl.NgProbeToken,function(){return[kl.s()]},[]),vl["\u0275mpd"](512,kl.x,kl.x,[vl.Injector]),vl["\u0275mpd"](1024,vl.APP_INITIALIZER,function(l,n,e){return[bl.r(l,n),kl.y(e)]},[[2,bl.h],[2,vl.NgProbeToken],kl.x]),vl["\u0275mpd"](512,vl.ApplicationInitStatus,vl.ApplicationInitStatus,[[2,vl.APP_INITIALIZER]]),vl["\u0275mpd"](131584,vl["\u0275e"],vl["\u0275e"],[vl.NgZone,vl["\u0275Console"],vl.Injector,vl.ErrorHandler,vl.ComponentFactoryResolver,vl.ApplicationInitStatus]),vl["\u0275mpd"](2048,vl.ApplicationRef,null,[vl["\u0275e"]]),vl["\u0275mpd"](512,vl.ApplicationModule,vl.ApplicationModule,[vl.ApplicationRef]),vl["\u0275mpd"](512,bl.a,bl.a,[[3,bl.a]]),vl["\u0275mpd"](512,_l.HttpModule,_l.HttpModule,[]),vl["\u0275mpd"](1024,kl.r,kl.u,[[3,kl.k]]),vl["\u0275mpd"](512,kl.q,kl.c,[]),vl["\u0275mpd"](512,kl.b,kl.b,[]),vl["\u0275mpd"](256,kl.g,{},[]),vl["\u0275mpd"](1024,yl.g,kl.t,[yl.m,[2,yl.a],kl.g]),vl["\u0275mpd"](512,yl.f,yl.f,[yl.g]),vl["\u0275mpd"](512,vl.Compiler,vl.Compiler,[]),vl["\u0275mpd"](512,vl.NgModuleFactoryLoader,vl.SystemJsNgModuleLoader,[vl.Compiler,[2,vl.SystemJsNgModuleLoaderConfig]]),vl["\u0275mpd"](1024,kl.i,function(){return[[{path:"",component:A},{path:"requests",loadChildren:"./request/request.module#RequestModule"}]]},[]),vl["\u0275mpd"](1024,kl.k,kl.v,[vl.ApplicationRef,kl.q,kl.b,yl.f,vl.Injector,vl.NgModuleFactoryLoader,vl.Compiler,kl.i,kl.g,[2,kl.p],[2,kl.j]]),vl["\u0275mpd"](512,kl.m,kl.m,[[2,kl.r],[2,kl.k]]),vl["\u0275mpd"](512,v,v,[])])}),Ul=e("/oeL"),Sl=e("fc+i");m.production&&Object(Ul.enableProdMode)(),Object(Sl.j)().bootstrapModuleFactory(Il)},gFIY:function(l,n,e){function u(l){var n=t[l];return n?e.e(n[1]).then(function(){return e(n[0])}):Promise.reject(new Error("Cannot find module '"+l+"'."))}var t={"./request/request.module.ngfactory":["haat",0]};u.keys=function(){return Object.keys(t)},l.exports=u,u.id="gFIY"}},[0]);