!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var t=0;t<i.length;t++){var o=i[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{a1ig:function(t,o,e){"use strict";e.r(o),e.d(o,"ProductsPageModule",function(){return w});var r=e("ofXK"),c=e("3Pt+"),s=e("TEn/"),a=e("tyNb"),p=e("fXoL"),b=e("tk/3"),d=function(n){return[n]};function u(n,i){if(1&n&&(p.Mb(0,"ion-col",2),p.Mb(1,"ion-card",3),p.Kb(2,"img",4),p.Mb(3,"ion-card-content"),p.Mb(4,"ion-label"),p.nc(5),p.Mb(6,"p"),p.nc(7),p.Xb(8,"currency"),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Lb()),2&n){var t=i.$implicit;p.zb(1),p.cc("routerLink",p.ec(7,d,t.id)),p.zb(1),p.cc("src",t.image,p.jc),p.zb(3),p.pc(" ",t.title," "),p.zb(2),p.oc(p.Zb(8,4,t.price,"USD"))}}var f,l,g,m=[{path:"",component:(f=function(){function t(i){n(this,t),this.http=i}var o,e,r;return o=t,(e=[{key:"ngOnInit",value:function(){this.products=this.http.get("https://fakestoreapi.com/products")}}])&&i(o.prototype,e),r&&i(o,r),t}(),f.\u0275fac=function(n){return new(n||f)(p.Jb(b.a))},f.\u0275cmp=p.Db({type:f,selectors:[["app-products"]],decls:5,vars:3,consts:[[1,"ion-justify-content-center"],["size","12","size-sm","6","size-md","4","size-lg","3","size-xl","2",4,"ngFor","ngForOf"],["size","12","size-sm","6","size-md","4","size-lg","3","size-xl","2"],["tappable","","routerDirection","forward",1,"product",3,"routerLink"],[1,"ion-padding",3,"src"]],template:function(n,i){1&n&&(p.Mb(0,"ion-content"),p.Mb(1,"ion-grid"),p.Mb(2,"ion-row",0),p.mc(3,u,9,9,"ion-col",1),p.Xb(4,"async"),p.Lb(),p.Lb(),p.Lb()),2&n&&(p.zb(3),p.cc("ngForOf",p.Yb(4,1,i.products)))},directives:[s.j,s.l,s.w,r.j,s.i,s.e,s.K,a.i,s.f,s.r],pipes:[r.b,r.d],styles:["ion-grid[_ngcontent-%COMP%]{--ion-grid-padding-sm:20px;--ion-grid-padding-md:30px;--ion-grid-padding-lg:40px;--ion-grid-padding-xl:100px}.product[_ngcontent-%COMP%]:hover{box-shadow:4px 2px 20px 0 rgba(143,145,145,.3);transform:scale(1.01);transition:.4s}"]}),f)}],h=((g=function i(){n(this,i)}).\u0275fac=function(n){return new(n||g)},g.\u0275mod=p.Hb({type:g}),g.\u0275inj=p.Gb({imports:[[a.k.forChild(m)],a.k]}),g),w=((l=function i(){n(this,i)}).\u0275fac=function(n){return new(n||l)},l.\u0275mod=p.Hb({type:l}),l.\u0275inj=p.Gb({imports:[[r.c,c.d,s.D,h]]}),l)}}])}();