!function(){function e(t,n,i){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(t,n,i||t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{oZot:function(n,o,u){"use strict";u.r(o),u.d(o,"ProductDetailsPageModule",function(){return q});var l,h=u("ofXK"),d=u("3Pt+"),f=u("TEn/"),b=u("tyNb"),v=u("IzEk"),p=function(e){r(o,e);var n=c(o);function o(e,i){var r;return t(this,o),(r=n.call(this,e,i)).scheduler=e,r.work=i,r.pending=!1,r}return i(o,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.closed)return this;this.state=e;var n=this.id,i=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(i,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(i,this.id,t),this}},{key:"requestAsyncId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return setInterval(e.flush.bind(e,this),n)}},{key:"recycleAsyncId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)}},{key:"execute",value:function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}},{key:"_execute",value:function(e,t){var n,i=!1;try{this.work(e)}catch(r){i=!0,n=!!r&&r||new Error(r)}if(i)return this.unsubscribe(),n}},{key:"_unsubscribe",value:function(){var e=this.id,t=this.scheduler,n=t.actions,i=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&n.splice(i,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}]),o}(function(e){r(o,e);var n=c(o);function o(e,i){return t(this,o),n.call(this)}return i(o,[{key:"schedule",value:function(e){return this}}]),o}(u("quSY").a)),y=function(){var e=function(){function e(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.now;t(this,e),this.SchedulerAction=n,this.now=i}return i(e,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0;return new this.SchedulerAction(this,e).schedule(n,t)}}]),e}();return e.now=function(){return Date.now()},e}(),g=new(function(n){r(u,n);var o=c(u);function u(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.now;return t(this,u),(n=o.call(this,e,function(){return u.delegate&&u.delegate!==s(n)?u.delegate.now():i()})).actions=[],n.active=!1,n.scheduled=void 0,n}return i(u,[{key:"schedule",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0;return u.delegate&&u.delegate!==this?u.delegate.schedule(t,n,i):e(a(u.prototype),"schedule",this).call(this,t,n,i)}},{key:"flush",value:function(e){var t=this.actions;if(this.active)t.push(e);else{var n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}}}]),u}(y))(p),w=u("7o/Q"),k=u("EY2u"),m=u("LRne"),x=u("HDdC"),M=((l=function(){function e(n,i,r){t(this,e),this.kind=n,this.value=i,this.error=r,this.hasValue="N"===n}return i(e,[{key:"observe",value:function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}},{key:"do",value:function(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}}},{key:"accept",value:function(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)}},{key:"toObservable",value:function(){switch(this.kind){case"N":return Object(m.a)(this.value);case"E":return e=this.error,new x.a(function(t){return t.error(e)});case"C":return Object(k.b)()}var e;throw new Error("unexpected notification kind value")}}],[{key:"createNext",value:function(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}},{key:"createError",value:function(t){return new e("E",void 0,t)}},{key:"createComplete",value:function(){return e.completeNotification}}]),e}()).completeNotification=new l("C"),l.undefinedValueNotification=new l("N",void 0),l),O=function(){function e(n,i){t(this,e),this.delay=n,this.scheduler=i}return i(e,[{key:"call",value:function(e,t){return t.subscribe(new L(e,this.delay,this.scheduler))}}]),e}(),L=function(e){r(o,e);var n=c(o);function o(e,i,r){var c;return t(this,o),(c=n.call(this,e)).delay=i,c.scheduler=r,c.queue=[],c.active=!1,c.errored=!1,c}return i(o,[{key:"_schedule",value:function(e){this.active=!0,this.destination.add(e.schedule(o.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))}},{key:"scheduleNotification",value:function(e){if(!0!==this.errored){var t=this.scheduler,n=new N(t.now()+this.delay,e);this.queue.push(n),!1===this.active&&this._schedule(t)}}},{key:"_next",value:function(e){this.scheduleNotification(M.createNext(e))}},{key:"_error",value:function(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleNotification(M.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(e){for(var t=e.source,n=t.queue,i=e.scheduler,r=e.destination;n.length>0&&n[0].time-i.now()<=0;)n.shift().notification.observe(r);if(n.length>0){var o=Math.max(0,n[0].time-i.now());this.schedule(e,o)}else this.unsubscribe(),t.active=!1}}]),o}(w.a),N=function e(n,i){t(this,e),this.time=n,this.notification=i},j=u("1Bn7"),_=u("fXoL"),E=u("tk/3");function I(e,t){if(1&e&&(_.Mb(0,"ion-card",3),_.Mb(1,"ion-card-header"),_.Mb(2,"ion-card-title"),_.nc(3),_.Lb(),_.Mb(4,"ion-badge",4),_.nc(5),_.Lb(),_.Lb(),_.Mb(6,"ion-card-content"),_.Kb(7,"ion-img",5),_.Mb(8,"ion-label"),_.nc(9),_.Lb(),_.Mb(10,"ion-row",6),_.Mb(11,"ion-col",7),_.Mb(12,"b"),_.nc(13),_.Xb(14,"currency"),_.Lb(),_.Lb(),_.Lb(),_.Lb(),_.Lb()),2&e){var n=_.Wb();_.zb(3),_.pc(" ",n.product.title," "),_.zb(2),_.oc(n.product.category),_.zb(2),_.cc("src",n.product.image),_.zb(2),_.pc(" ",n.product.description," "),_.zb(4),_.oc(_.Zb(14,5,n.product.price,"USD"))}}function z(e,t){1&e&&(_.Mb(0,"ion-card",3),_.Mb(1,"ion-card-header"),_.Mb(2,"ion-card-title"),_.Kb(3,"ion-skeleton-text",8),_.Lb(),_.Lb(),_.Mb(4,"ion-card-content"),_.Mb(5,"div",9),_.Kb(6,"ion-skeleton-text",10),_.Lb(),_.Mb(7,"ion-label",11),_.Kb(8,"ion-skeleton-text",8),_.Kb(9,"ion-skeleton-text",12),_.Kb(10,"ion-skeleton-text",13),_.Lb(),_.Lb(),_.Lb())}var C,P,R,A=[{path:"",component:(C=function(){function e(n,i,r){t(this,e),this.route=n,this.http=i,this.navCtrl=r,this.product=null,this.isWeb=!1}return i(e,[{key:"ngOnInit",value:function(){var e=this,t=this.route.snapshot.paramMap.get("id");this.http.get("https://fakestoreapi.com/products/".concat(t)).pipe(Object(v.a)(1),function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g,i=(t=e)instanceof Date&&!isNaN(+t)?+e-n.now():Math.abs(e);return function(e){return e.lift(new O(i,n))}}(1500)).subscribe(function(t){e.product=t}),this.isWeb=Object(j.m)("desktop")}},{key:"goBack",value:function(){this.navCtrl.back()}}]),e}(),C.\u0275fac=function(e){return new(e||C)(_.Jb(b.a),_.Jb(E.a),_.Jb(f.I))},C.\u0275cmp=_.Db({type:C,selectors:[["app-product-details"]],decls:5,vars:2,consts:[[1,"ion-justify-content-center"],["size","12","size-sm","10","size-md","8","size-xl","6"],["class","ion-text-center",4,"ngIf"],[1,"ion-text-center"],["color","medium",1,"ion-margin-top"],[1,"ion-margin-bottom",3,"src"],[1,"ion-align-items-center","ion-margin-top"],["size","12"],["animated","",2,"width","80%"],[1,"image-skeleton"],[2,"width","40%","height","30vh","margin-bottom","30px"],[1,"ion-margin-top"],["animated","",2,"width","40%"],["animated","",2,"width","60%"]],template:function(e,t){1&e&&(_.Mb(0,"ion-content"),_.Mb(1,"ion-row",0),_.Mb(2,"ion-col",1),_.mc(3,I,15,8,"ion-card",2),_.mc(4,z,11,0,"ion-card",2),_.Lb(),_.Lb(),_.Lb()),2&e&&(_.zb(3),_.cc("ngIf",t.product),_.zb(1),_.cc("ngIf",!t.product))},directives:[f.j,f.w,f.i,h.k,f.e,f.g,f.h,f.b,f.f,f.o,f.r,f.x],pipes:[h.d],styles:[".image-skeleton[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),C)}],D=((R=function e(){t(this,e)}).\u0275fac=function(e){return new(e||R)},R.\u0275mod=_.Hb({type:R}),R.\u0275inj=_.Gb({imports:[[b.k.forChild(A)],b.k]}),R),q=((P=function e(){t(this,e)}).\u0275fac=function(e){return new(e||P)},P.\u0275mod=_.Hb({type:P}),P.\u0275inj=_.Gb({imports:[[h.c,d.d,f.D,D]]}),P)}}])}();