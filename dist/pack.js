// https://d3js.org Version 4.7.3. Copyright 2017 Mike Bostock.
(function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3=t.d3||{})})(this,function(t){"use strict";function n(t){return function(n,e){return Ls(t(n),e)}}function e(t,n){return[t,n]}function r(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=Js?i*=10:o>=Qs?i*=5:o>=Ks&&(i*=2),n<t?-i:i}function i(t){return t.length}function o(t){return"translate("+t+",0)"}function u(t){return"translate(0,"+t+")"}function a(t){var n=t.bandwidth()/2;return t.round()&&(n=Math.round(n)),function(e){return t(e)+n}}function c(){return!this.__axis}function s(t,n){function e(e){var o=null==s?n.ticks?n.ticks.apply(n,i):n.domain():s,u=null==f?n.tickFormat?n.tickFormat.apply(n,i):mf:f,g=Math.max(l,0)+p,y=n.range(),m=y[0]+.5,x=y[y.length-1]+.5,b=(n.bandwidth?a:mf)(n.copy()),w=e.selection?e.selection():e,M=w.selectAll(".domain").data([null]),T=w.selectAll(".tick").data(o,n).order(),k=T.exit(),S=T.enter().append("g").attr("class","tick"),N=T.select("line"),E=T.select("text");M=M.merge(M.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),T=T.merge(S),N=N.merge(S.append("line").attr("stroke","#000").attr(r+"2",d*l).attr(v+"1",.5).attr(v+"2",.5)),E=E.merge(S.append("text").attr("fill","#000").attr(r,d*g).attr(v,.5).attr("dy",t===xf?"0em":t===wf?"0.71em":"0.32em")),e!==w&&(M=M.transition(e),T=T.transition(e),N=N.transition(e),E=E.transition(e),k=k.transition(e).attr("opacity",Tf).attr("transform",function(t){return isFinite(t=b(t))?_(t):this.getAttribute("transform")}),S.attr("opacity",Tf).attr("transform",function(t){var n=this.parentNode.__axis;return _(n&&isFinite(n=n(t))?n:b(t))})),k.remove(),M.attr("d",t===Mf||t==bf?"M"+d*h+","+m+"H0.5V"+x+"H"+d*h:"M"+m+","+d*h+"V0.5H"+x+"V"+d*h),T.attr("opacity",1).attr("transform",function(t){return _(b(t))}),N.attr(r+"2",d*l),E.attr(r,d*g).text(u),w.filter(c).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===bf?"start":t===Mf?"end":"middle"),w.each(function(){this.__axis=b})}var r,i=[],s=null,f=null,l=6,h=6,p=3,d=t===xf||t===Mf?-1:1,v=t===Mf||t===bf?(r="x","y"):(r="y","x"),_=t===xf||t===wf?o:u;return e.scale=function(t){return arguments.length?(n=t,e):n},e.ticks=function(){return i=yf.call(arguments),e},e.tickArguments=function(t){return arguments.length?(i=null==t?[]:yf.call(t),e):i.slice()},e.tickValues=function(t){return arguments.length?(s=null==t?null:yf.call(t),e):s&&s.slice()},e.tickFormat=function(t){return arguments.length?(f=t,e):f},e.tickSize=function(t){return arguments.length?(l=h=+t,e):l},e.tickSizeInner=function(t){return arguments.length?(l=+t,e):l},e.tickSizeOuter=function(t){return arguments.length?(h=+t,e):h},e.tickPadding=function(t){return arguments.length?(p=+t,e):p},e}function f(t){return s(xf,t)}function l(t){return s(bf,t)}function h(t){return s(wf,t)}function p(t){return s(Mf,t)}function d(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new v(r)}function v(t){this._=t}function _(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function g(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function y(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=kf,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}function m(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===Sf&&n.documentElement.namespaceURI===Sf?n.createElement(t):n.createElementNS(e,t)}}function x(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function b(){return new w}function w(){this._="@"+(++Cf).toString(36)}function M(t,n,e){return t=T(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function T(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function k(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}function S(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function N(t,n,e){var r=qf.hasOwnProperty(t.type)?M:T;return function(i,o,u){var a,c=this.__on,s=r(n,o,u);if(c)for(var f=0,l=c.length;f<l;++f)if((a=c[f]).type===t.type&&a.name===t.name)return this.removeEventListener(a.type,a.listener,a.capture),this.addEventListener(a.type,a.listener=s,a.capture=e),void(a.value=n);this.addEventListener(t.type,s,e),a={type:t.type,name:t.name,value:n,listener:s,capture:e},c?c.push(a):this.__on=[a]}}function E(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function A(){}function C(){return[]}function z(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function P(t,n,e,r,i,o){for(var u,a=0,c=n.length,s=o.length;a<s;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new z(t,o[a]);for(;a<c;++a)(u=n[a])&&(i[a]=u)}function L(t,n,e,r,i,o,u){var a,c,s,f={},l=n.length,h=o.length,p=new Array(l);for(a=0;a<l;++a)(c=n[a])&&(p[a]=s=Wf+u.call(c,c.__data__,a,n),s in f?i[a]=c:f[s]=c);for(a=0;a<h;++a)s=Wf+u.call(t,o[a],a,o),(c=f[s])?(r[a]=c,c.__data__=o[a],f[s]=null):e[a]=new z(t,o[a]);for(a=0;a<l;++a)(c=n[a])&&f[p[a]]===c&&(i[a]=c)}function R(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function q(t){return function(){this.removeAttribute(t)}}function U(t){return function(){this.removeAttributeNS(t.space,t.local)}}function D(t,n){return function(){this.setAttribute(t,n)}}function O(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function F(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function I(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function Y(t){return function(){this.style.removeProperty(t)}}function B(t,n,e){return function(){this.style.setProperty(t,n,e)}}function j(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function H(t){return function(){delete this[t]}}function X(t,n){return function(){this[t]=n}}function V(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function $(t){return t.trim().split(/^|\s+/)}function W(t){return t.classList||new Z(t)}function Z(t){this._node=t,this._names=$(t.getAttribute("class")||"")}function G(t,n){for(var e=W(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function J(t,n){for(var e=W(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function Q(t){return function(){G(this,t)}}function K(t){return function(){J(this,t)}}function tt(t,n){return function(){(n.apply(this,arguments)?G:J)(this,t)}}function nt(){this.textContent=""}function et(t){return function(){this.textContent=t}}function rt(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function it(){this.innerHTML=""}function ot(t){return function(){this.innerHTML=t}}function ut(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function at(){this.nextSibling&&this.parentNode.appendChild(this)}function ct(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function st(){return null}function ft(){var t=this.parentNode;t&&t.removeChild(this)}function lt(t,n,e){var r=al(t),i=r.CustomEvent;i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function ht(t,n){return function(){return lt(this,t,n)}}function pt(t,n){return function(){return lt(this,t,n.apply(this,arguments))}}function dt(t,n){this._groups=t,this._parents=n}function vt(){return new dt([[document.documentElement]],xl)}function _t(){t.event.stopImmediatePropagation()}function gt(t,n){var e=t.document.documentElement,r=bl(t).on("dragstart.drag",null);n&&(r.on("click.drag",kl,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function yt(t,n,e,r,i,o,u,a,c,s){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=u,this.dx=a,this.dy=c,this._=s}function mt(){return!t.event.button}function xt(){return this.parentNode}function bt(n){return null==n?{x:t.event.x,y:t.event.y}:n}function wt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Mt(){}function Tt(t){var n;return t=(t+"").trim().toLowerCase(),(n=Ll.exec(t))?(n=parseInt(n[1],16),new At(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1)):(n=Rl.exec(t))?kt(parseInt(n[1],16)):(n=ql.exec(t))?new At(n[1],n[2],n[3],1):(n=Ul.exec(t))?new At(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Dl.exec(t))?St(n[1],n[2],n[3],n[4]):(n=Ol.exec(t))?St(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=Fl.exec(t))?Ct(n[1],n[2]/100,n[3]/100,1):(n=Il.exec(t))?Ct(n[1],n[2]/100,n[3]/100,n[4]):Yl.hasOwnProperty(t)?kt(Yl[t]):"transparent"===t?new At(NaN,NaN,NaN,0):null}function kt(t){return new At(t>>16&255,t>>8&255,255&t,1)}function St(t,n,e,r){return r<=0&&(t=n=e=NaN),new At(t,n,e,r)}function Nt(t){return t instanceof Mt||(t=Tt(t)),t?(t=t.rgb(),new At(t.r,t.g,t.b,t.opacity)):new At}function Et(t,n,e,r){return 1===arguments.length?Nt(t):new At(t,n,e,null==r?1:r)}function At(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Ct(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Lt(t,n,e,r)}function zt(t){if(t instanceof Lt)return new Lt(t.h,t.s,t.l,t.opacity);if(t instanceof Mt||(t=Tt(t)),!t)return new Lt;if(t instanceof Lt)return t;t=t.rgb();var n=t.r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),u=NaN,a=o-i,c=(o+i)/2;return a?(u=n===o?(e-r)/a+6*(e<r):e===o?(r-n)/a+2:(n-e)/a+4,a/=c<.5?o+i:2-o-i,u*=60):a=c>0&&c<1?0:u,new Lt(u,a,c,t.opacity)}function Pt(t,n,e,r){return 1===arguments.length?zt(t):new Lt(t,n,e,null==r?1:r)}function Lt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Rt(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function qt(t){if(t instanceof Dt)return new Dt(t.l,t.a,t.b,t.opacity);if(t instanceof Ht){var n=t.h*Bl;return new Dt(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof At||(t=Nt(t));var e=Yt(t.r),r=Yt(t.g),i=Yt(t.b),o=Ot((.4124564*e+.3575761*r+.1804375*i)/Hl),u=Ot((.2126729*e+.7151522*r+.072175*i)/Xl);return new Dt(116*u-16,500*(o-u),200*(u-Ot((.0193339*e+.119192*r+.9503041*i)/Vl)),t.opacity)}function Ut(t,n,e,r){return 1===arguments.length?qt(t):new Dt(t,n,e,null==r?1:r)}function Dt(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function Ot(t){return t>Gl?Math.pow(t,1/3):t/Zl+$l}function Ft(t){return t>Wl?t*t*t:Zl*(t-$l)}function It(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Yt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Bt(t){if(t instanceof Ht)return new Ht(t.h,t.c,t.l,t.opacity);t instanceof Dt||(t=qt(t));var n=Math.atan2(t.b,t.a)*jl;return new Ht(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function jt(t,n,e,r){return 1===arguments.length?Bt(t):new Ht(t,n,e,null==r?1:r)}function Ht(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function Xt(t){if(t instanceof $t)return new $t(t.h,t.s,t.l,t.opacity);t instanceof At||(t=Nt(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(ih*r+eh*n-rh*e)/(ih+eh-rh),o=r-i,u=(nh*(e-i)-Kl*o)/th,a=Math.sqrt(u*u+o*o)/(nh*i*(1-i)),c=a?Math.atan2(u,o)*jl-120:NaN;return new $t(c<0?c+360:c,a,i,t.opacity)}function Vt(t,n,e,r){return 1===arguments.length?Xt(t):new $t(t,n,e,null==r?1:r)}function $t(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Wt(t,n,e,r,i){var o=t*t,u=o*t;return((1-3*t+3*o-u)*n+(4-6*o+3*u)*e+(1+3*t+3*o-3*u)*r+u*i)/6}function Zt(t,n){return function(e){return t+e*n}}function Gt(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function Jt(t,n){var e=n-t;return e?Zt(t,e>180||e<-180?e-360*Math.round(e/360):e):ph(isNaN(t)?n:t)}function Qt(t){return 1==(t=+t)?Kt:function(n,e){return e-n?Gt(n,e,t):ph(isNaN(n)?e:n)}}function Kt(t,n){var e=n-t;return e?Zt(t,e):ph(isNaN(t)?n:t)}function tn(t){return function(n){var e,r,i=n.length,o=new Array(i),u=new Array(i),a=new Array(i);for(e=0;e<i;++e)r=Et(n[e]),o[e]=r.r||0,u[e]=r.g||0,a[e]=r.b||0;return o=t(o),u=t(u),a=t(a),r.opacity=1,function(t){return r.r=o(t),r.g=u(t),r.b=a(t),r+""}}}function nn(t){return function(){return t}}function en(t){return function(n){return t(n)+""}}function rn(t){return"none"===t?Nh:(oh||(oh=document.createElement("DIV"),uh=document.documentElement,ah=document.defaultView),oh.style.transform=t,t=ah.getComputedStyle(uh.appendChild(oh),null).getPropertyValue("transform"),uh.removeChild(oh),t=t.slice(7,-1).split(","),Eh(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}function on(t){return null==t?Nh:(ch||(ch=document.createElementNS("http://www.w3.org/2000/svg","g")),ch.setAttribute("transform",t),(t=ch.transform.baseVal.consolidate())?(t=t.matrix,Eh(t.a,t.b,t.c,t.d,t.e,t.f)):Nh)}function un(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}function o(t,r,i,o,u,a){if(t!==i||r!==o){var c=u.push("translate(",null,n,null,e);a.push({i:c-4,x:mh(t,i)},{i:c-2,x:mh(r,o)})}else(i||o)&&u.push("translate("+i+n+o+e)}function u(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:mh(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}function a(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:mh(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}function c(t,n,e,r,o,u){if(t!==e||n!==r){var a=o.push(i(o)+"scale(",null,",",null,")");u.push({i:a-4,x:mh(t,e)},{i:a-2,x:mh(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}return function(n,e){var r=[],i=[];return n=t(n),e=t(e),o(n.translateX,n.translateY,e.translateX,e.translateY,r,i),u(n.rotate,e.rotate,r,i),a(n.skewX,e.skewX,r,i),c(n.scaleX,n.scaleY,e.scaleX,e.scaleY,r,i),n=e=null,function(t){for(var n,e=-1,o=i.length;++e<o;)r[(n=i[e]).i]=n.x(t);return r.join("")}}}function an(t){return((t=Math.exp(t))+1/t)/2}function cn(t){return((t=Math.exp(t))-1/t)/2}function sn(t){return((t=Math.exp(2*t))-1)/(t+1)}function fn(t){return function(n,e){var r=t((n=Pt(n)).h,(e=Pt(e)).h),i=Kt(n.s,e.s),o=Kt(n.l,e.l),u=Kt(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=u(t),n+""}}}function ln(t,n){var e=Kt((t=Ut(t)).l,(n=Ut(n)).l),r=Kt(t.a,n.a),i=Kt(t.b,n.b),o=Kt(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}}function hn(t){return function(n,e){var r=t((n=jt(n)).h,(e=jt(e)).h),i=Kt(n.c,e.c),o=Kt(n.l,e.l),u=Kt(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=u(t),n+""}}}function pn(t){return function n(e){function r(n,r){var i=t((n=Vt(n)).h,(r=Vt(r)).h),o=Kt(n.s,r.s),u=Kt(n.l,r.l),a=Kt(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=u(Math.pow(t,e)),n.opacity=a(t),n+""}}return e=+e,r.gamma=n,r}(1)}function dn(){return Xh||(Wh(vn),Xh=$h.now()+Vh)}function vn(){Xh=0}function _n(){this._call=this._time=this._next=null}function gn(t,n,e){var r=new _n;return r.restart(t,n,e),r}function yn(){dn(),++Ih;for(var t,n=sh;n;)(t=Xh-n._time)>=0&&n._call.call(null,t),n=n._next;--Ih}function mn(){Xh=(Hh=$h.now())+Vh,Ih=Yh=0;try{yn()}finally{Ih=0,bn(),Xh=0}}function xn(){var t=$h.now(),n=t-Hh;n>jh&&(Vh-=n,Hh=t)}function bn(){for(var t,n,e=sh,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:sh=n);fh=t,wn(r)}function wn(t){if(!Ih){Yh&&(Yh=clearTimeout(Yh));var n=t-Xh;n>24?(t<1/0&&(Yh=setTimeout(mn,n)),Bh&&(Bh=clearInterval(Bh))):(Bh||(Hh=Xh,Bh=setInterval(xn,jh)),Ih=1,Wh(mn))}}function Mn(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>Kh)throw new Error("too late");return e}function Tn(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>np)throw new Error("too late");return e}function kn(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("too late");return e}function Sn(t,n,e){function r(t){e.state=tp,e.timer.restart(i,e.delay,e.time),e.delay<=t&&i(t-e.delay)}function i(r){var s,f,l,h;if(e.state!==tp)return u();for(s in c)if(h=c[s],h.name===e.name){if(h.state===ep)return Zh(i);h.state===rp?(h.state=op,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete c[s]):+s<n&&(h.state=op,h.timer.stop(),delete c[s])}if(Zh(function(){e.state===ep&&(e.state=rp,e.timer.restart(o,e.delay,e.time),o(r))}),e.state=np,e.on.call("start",t,t.__data__,e.index,e.group),e.state===np){for(e.state=ep,a=new Array(l=e.tween.length),s=0,f=-1;s<l;++s)(h=e.tween[s].value.call(t,t.__data__,e.index,e.group))&&(a[++f]=h);a.length=f+1}}function o(n){for(var r=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=ip,1),i=-1,o=a.length;++i<o;)a[i].call(null,r);e.state===ip&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){e.state=op,e.timer.stop(),delete c[n];for(var r in c)return;delete t.__transition}var a,c=t.__transition;c[n]=e,e.timer=gn(r,0,e.time)}function Nn(t,n){var e,r;return function(){var i=Tn(this,t),o=i.tween;if(o!==e){r=e=o;for(var u=0,a=r.length;u<a;++u)if(r[u].name===n){r=r.slice(),r.splice(u,1);break}}i.tween=r}}function En(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=Tn(this,t),u=o.tween;if(u!==r){i=(r=u).slice();for(var a={name:n,value:e},c=0,s=i.length;c<s;++c)if(i[c].name===n){i[c]=a;break}c===s&&i.push(a)}o.tween=i}}function An(t,n,e){var r=t._id;return t.each(function(){var t=Tn(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return kn(t,r).value[n]}}function Cn(t){return function(){this.removeAttribute(t)}}function zn(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Pn(t,n,e){var r,i;return function(){var o=this.getAttribute(t);return o===e?null:o===r?i:i=n(r=o,e)}}function Ln(t,n,e){var r,i;return function(){var o=this.getAttributeNS(t.space,t.local);return o===e?null:o===r?i:i=n(r=o,e)}}function Rn(t,n,e){var r,i,o;return function(){var u,a=e(this);return null==a?void this.removeAttribute(t):(u=this.getAttribute(t),u===a?null:u===r&&a===i?o:o=n(r=u,i=a))}}function qn(t,n,e){var r,i,o;return function(){var u,a=e(this);return null==a?void this.removeAttributeNS(t.space,t.local):(u=this.getAttributeNS(t.space,t.local),u===a?null:u===r&&a===i?o:o=n(r=u,i=a))}}function Un(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}function Dn(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e}function On(t,n){return function(){Mn(this,t).delay=+n.apply(this,arguments)}}function Fn(t,n){return n=+n,function(){Mn(this,t).delay=n}}function In(t,n){return function(){Tn(this,t).duration=+n.apply(this,arguments)}}function Yn(t,n){return n=+n,function(){Tn(this,t).duration=n}}function Bn(t,n){if("function"!=typeof n)throw new Error;return function(){Tn(this,t).ease=n}}function jn(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}function Hn(t,n,e){var r,i,o=jn(n)?Mn:Tn;return function(){var u=o(this,t),a=u.on;a!==r&&(i=(r=a).copy()).on(n,e),u.on=i}}function Xn(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function Vn(t,n){var e,r,i;return function(){var o=al(this).getComputedStyle(this,null),u=o.getPropertyValue(t),a=(this.style.removeProperty(t),o.getPropertyValue(t));return u===a?null:u===e&&a===r?i:i=n(e=u,r=a)}}function $n(t){return function(){this.style.removeProperty(t)}}function Wn(t,n,e){var r,i;return function(){var o=al(this).getComputedStyle(this,null).getPropertyValue(t);return o===e?null:o===r?i:i=n(r=o,e)}}function Zn(t,n,e){var r,i,o;return function(){var u=al(this).getComputedStyle(this,null),a=u.getPropertyValue(t),c=e(this);return null==c&&(this.style.removeProperty(t),c=u.getPropertyValue(t)),a===c?null:a===r&&c===i?o:o=n(r=a,i=c)}}function Gn(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}function Jn(t){return function(){this.textContent=t}}function Qn(t){return function(){var n=t(this);this.textContent=null==n?"":n}}function Kn(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function te(t){return vt().transition(t)}function ne(){return++Ep}function ee(t){return+t}function re(t){return t*t}function ie(t){return t*(2-t)}function oe(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function ue(t){return t*t*t}function ae(t){return--t*t*t+1}function ce(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function se(t){return 1-Math.cos(t*Rp)}function fe(t){return Math.sin(t*Rp)}function le(t){return(1-Math.cos(Lp*t))/2}function he(t){return Math.pow(2,10*t-10)}function pe(t){return 1-Math.pow(2,-10*t)}function de(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function ve(t){return 1-Math.sqrt(1-t*t)}function _e(t){return Math.sqrt(1- --t*t)}function ge(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function ye(t){return 1-me(1-t)}function me(t){return(t=+t)<qp?Hp*t*t:t<Dp?Hp*(t-=Up)*t+Op:t<Ip?Hp*(t-=Fp)*t+Yp:Hp*(t-=Bp)*t+jp}function xe(t){return((t*=2)<=1?1-me(1-t):me(t-1)+1)/2}function be(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return Qp.time=dn(),Qp;return e}function we(){t.event.stopImmediatePropagation()}function Me(t){return{type:t}}function Te(){return!t.event.button}function ke(){var t=this.ownerSVGElement||this;return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function Se(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function Ne(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function Ee(t){var n=t.__brush;return n?n.dim.output(n.selection):null}function Ae(){return ze(sd)}function Ce(){return ze(fd)}function ze(n){function e(t){var e=t.property("__brush",a).selectAll(".overlay").data([Me("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",hd.overlay).merge(e).each(function(){var t=Se(this).extent;bl(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([Me("selection")]).enter().append("rect").attr("class","selection").attr("cursor",hd.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var i=t.selectAll(".handle").data(n.handles,function(t){return t.type});i.exit().remove(),i.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return hd[t.type]}),t.each(r).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",u)}function r(){var t=bl(this),n=Se(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-h/2:n[0][0]-h/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-h/2:n[0][1]-h/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+h:h}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+h:h})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function i(t,n){return t.__brush.emitter||new o(t,n)}function o(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function u(){function e(){var t=Ff(T);!U||w||M||(Math.abs(t[0]-O[0])>Math.abs(t[1]-O[1])?M=!0:w=!0),O=t,b=!0,id(),o()}function o(){var t;switch(m=O[0]-D[0],x=O[1]-D[1],S){case ud:case od:N&&(m=Math.max(P-l,Math.min(R-v,m)),h=l+m,_=v+m),E&&(x=Math.max(L-p,Math.min(q-g,x)),d=p+x,y=g+x);break;case ad:N<0?(m=Math.max(P-l,Math.min(R-l,m)),h=l+m,_=v):N>0&&(m=Math.max(P-v,Math.min(R-v,m)),h=l,_=v+m),E<0?(x=Math.max(L-p,Math.min(q-p,x)),d=p+x,y=g):E>0&&(x=Math.max(L-g,Math.min(q-g,x)),d=p,y=g+x);break;case cd:N&&(h=Math.max(P,Math.min(R,l-m*N)),_=Math.max(P,Math.min(R,v+m*N))),E&&(d=Math.max(L,Math.min(q,p-x*E)),y=Math.max(L,Math.min(q,g+x*E)))}_<h&&(N*=-1,t=l,l=v,v=t,t=h,h=_,_=t,k in pd&&Y.attr("cursor",hd[k=pd[k]])),y<d&&(E*=-1,t=p,p=g,g=t,t=d,d=y,y=t,k in dd&&Y.attr("cursor",hd[k=dd[k]])),A.selection&&(z=A.selection),w&&(h=z[0][0],_=z[1][0]),M&&(d=z[0][1],y=z[1][1]),z[0][0]===h&&z[0][1]===d&&z[1][0]===_&&z[1][1]===y||(A.selection=[[h,d],[_,y]],r.call(T),F.brush())}function u(){if(we(),t.event.touches){if(t.event.touches.length)return;c&&clearTimeout(c),c=setTimeout(function(){c=null},500),I.on("touchmove.brush touchend.brush touchcancel.brush",null)}else gt(t.event.view,b),B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);I.attr("pointer-events","all"),Y.attr("cursor",hd.overlay),A.selection&&(z=A.selection),Ne(z)&&(A.selection=null,r.call(T)),F.end()}function a(){switch(t.event.keyCode){case 16:U=N&&E;break;case 18:S===ad&&(N&&(v=_-m*N,l=h+m*N),E&&(g=y-x*E,p=d+x*E),S=cd,o());break;case 32:S!==ad&&S!==cd||(N<0?v=_-m:N>0&&(l=h-m),E<0?g=y-x:E>0&&(p=d-x),S=ud,Y.attr("cursor",hd.selection),o());break;default:return}id()}function s(){switch(t.event.keyCode){case 16:U&&(w=M=U=!1,o());break;case 18:S===cd&&(N<0?v=_:N>0&&(l=h),E<0?g=y:E>0&&(p=d),S=ad,o());break;case 32:S===ud&&(t.event.altKey?(N&&(v=_-m*N,l=h+m*N),E&&(g=y-x*E,p=d+x*E),S=cd):(N<0?v=_:N>0&&(l=h),E<0?g=y:E>0&&(p=d),S=ad),Y.attr("cursor",hd[k]),o());break;default:return}id()}if(t.event.touches){if(t.event.changedTouches.length<t.event.touches.length)return id()}else if(c)return;if(f.apply(this,arguments)){var l,h,p,d,v,_,g,y,m,x,b,w,M,T=this,k=t.event.target.__data__.type,S="selection"===(t.event.metaKey?k="overlay":k)?od:t.event.altKey?cd:ad,N=n===fd?null:vd[k],E=n===sd?null:_d[k],A=Se(T),C=A.extent,z=A.selection,P=C[0][0],L=C[0][1],R=C[1][0],q=C[1][1],U=N&&E&&t.event.shiftKey,D=Ff(T),O=D,F=i(T,arguments).beforestart();"overlay"===k?A.selection=z=[[l=n===fd?P:D[0],p=n===sd?L:D[1]],[v=n===fd?R:l,g=n===sd?q:p]]:(l=z[0][0],p=z[0][1],v=z[1][0],g=z[1][1]),h=l,d=p,_=v,y=g;var I=bl(T).attr("pointer-events","none"),Y=I.selectAll(".overlay").attr("cursor",hd[k]);if(t.event.touches)I.on("touchmove.brush",e,!0).on("touchend.brush touchcancel.brush",u,!0);else{var B=bl(t.event.view).on("keydown.brush",a,!0).on("keyup.brush",s,!0).on("mousemove.brush",e,!0).on("mouseup.brush",u,!0);Sl(t.event.view)}we(),ap(T),r.call(T),F.start()}}function a(){var t=this.__brush||{selection:null};return t.extent=s.apply(this,arguments),t.dim=n,t}var c,s=ke,f=Te,l=d(e,"start","brush","end"),h=6;return e.move=function(t,e){t.selection?t.on("start.brush",function(){i(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){i(this,arguments).end()}).tween("brush",function(){function t(t){u.selection=1===t&&Ne(s)?null:f(t),r.call(o),a.brush()}var o=this,u=o.__brush,a=i(o,arguments),c=u.selection,s=n.input("function"==typeof e?e.apply(this,arguments):e,u.extent),f=Th(c,s);return c&&s?t:t(1)}):t.each(function(){var t=this,o=arguments,u=t.__brush,a=n.input("function"==typeof e?e.apply(t,o):e,u.extent),c=i(t,o).beforestart();ap(t),u.selection=null==a||Ne(a)?null:a,r.call(t),c.start().brush().end()})},o.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){E(new rd(e,t,n.output(this.state.selection)),l.apply,l,[t,this.that,this.args])}},e.extent=function(t){return arguments.length?(s="function"==typeof t?t:ed([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),e):s},e.filter=function(t){return arguments.length?(f="function"==typeof t?t:ed(!!t),e):f},e.handleSize=function(t){return arguments.length?(h=+t,e):h},e.on=function(){var t=l.on.apply(l,arguments);return t===l?e:t},e}function Pe(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}function Le(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Re(){return new Le}function qe(t){return t.source}function Ue(t){return t.target}function De(t){return t.radius}function Oe(t){return t.startAngle}function Fe(t){return t.endAngle}function Ie(){}function Ye(t,n){var e=new Ie;if(t instanceof Ie)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var u in t)e.set(u,t[u]);return e}function Be(){return{}}function je(t,n,e){t[n]=e}function He(){return Ye()}function Xe(t,n,e){t.set(n,e)}function Ve(){}function $e(t,n){var e=new Ve;if(t instanceof Ve)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}function We(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function Ze(t,n){var e=We(t);return function(r,i){return n(e(r),i,t)}}function Ge(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}function Je(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,u,a,c,s,f,l,h,p=t._root,d={data:r},v=t._x0,_=t._y0,g=t._x1,y=t._y1;if(!p)return t._root=d,t;for(;p.length;)if((s=n>=(o=(v+g)/2))?v=o:g=o,(f=e>=(u=(_+y)/2))?_=u:y=u,i=p,!(p=p[l=f<<1|s]))return i[l]=d,t;if(a=+t._x.call(null,p.data),c=+t._y.call(null,p.data),n===a&&e===c)return d.next=p,i?i[l]=d:t._root=d,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(s=n>=(o=(v+g)/2))?v=o:g=o,(f=e>=(u=(_+y)/2))?_=u:y=u}while((l=f<<1|s)==(h=(c>=u)<<1|a>=o));return i[h]=p,i[l]=d,t}function Qe(t){var n,e,r,i,o=t.length,u=new Array(o),a=new Array(o),c=1/0,s=1/0,f=-(1/0),l=-(1/0);for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(u[e]=r,a[e]=i,r<c&&(c=r),r>f&&(f=r),i<s&&(s=i),i>l&&(l=i));for(f<c&&(c=this._x0,f=this._x1),l<s&&(s=this._y0,l=this._y1),this.cover(c,s).cover(f,l),e=0;e<o;++e)Je(this,u[e],a[e],t[e]);return this}function Ke(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this}function tr(t){return t[0]}function nr(t){return t[1]}function er(t,n,e){var r=new rr(null==n?tr:n,null==e?nr:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function rr(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function ir(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}function or(t){return t.x+t.vx}function ur(t){return t.y+t.vy}function ar(t){return t.index}function cr(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function sr(t){return t.x}function fr(t){return t.y}function lr(t){return new hr(t)}function hr(t){if(!(n=Nv.exec(t)))throw new Error("invalid format: "+t);var n,e=n[1]||" ",r=n[2]||">",i=n[3]||"-",o=n[4]||"",u=!!n[5],a=n[6]&&+n[6],c=!!n[7],s=n[8]&&+n[8].slice(1),f=n[9]||"";"n"===f?(c=!0,f="g"):Sv[f]||(f=""),(u||"0"===e&&"="===r)&&(u=!0,e="0",r="="),this.fill=e,this.align=r,this.sign=i,this.symbol=o,this.zero=u,this.width=a,this.comma=c,this.precision=s,this.type=f}function pr(n){
return Ev=zv(n),t.format=Ev.format,t.formatPrefix=Ev.formatPrefix,Ev}function dr(){this.reset()}function vr(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}function _r(t){return t>1?0:t<-1?v_:Math.acos(t)}function gr(t){return t>1?__:t<-1?-__:Math.asin(t)}function yr(t){return(t=A_(t/2))*t}function mr(){}function xr(t,n){t&&R_.hasOwnProperty(t.type)&&R_[t.type](t,n)}function br(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function wr(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)br(t[e],n,1);n.polygonEnd()}function Mr(){O_.point=kr}function Tr(){Sr(Uv,Dv)}function kr(t,n){O_.point=Sr,Uv=t,Dv=n,t*=x_,n*=x_,Ov=t,Fv=T_(n=n/2+g_),Iv=A_(n)}function Sr(t,n){t*=x_,n*=x_,n=n/2+g_;var e=t-Ov,r=e>=0?1:-1,i=r*e,o=T_(n),u=A_(n),a=Iv*u,c=Fv*o+a*T_(i),s=a*r*A_(i);U_.add(M_(s,c)),Ov=t,Fv=o,Iv=u}function Nr(t){return[M_(t[1],t[0]),gr(t[2])]}function Er(t){var n=t[0],e=t[1],r=T_(e);return[r*T_(n),r*A_(n),A_(e)]}function Ar(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Cr(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function zr(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function Pr(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function Lr(t){var n=z_(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}function Rr(t,n){Zv.push(Gv=[Yv=t,jv=t]),n<Bv&&(Bv=n),n>Hv&&(Hv=n)}function qr(t,n){var e=Er([t*x_,n*x_]);if(Wv){var r=Cr(Wv,e),i=[r[1],-r[0],0],o=Cr(i,r);Lr(o),o=Nr(o);var u,a=t-Xv,c=a>0?1:-1,s=o[0]*m_*c,f=b_(a)>180;f^(c*Xv<s&&s<c*t)?(u=o[1]*m_)>Hv&&(Hv=u):(s=(s+360)%360-180,f^(c*Xv<s&&s<c*t)?(u=-o[1]*m_)<Bv&&(Bv=u):(n<Bv&&(Bv=n),n>Hv&&(Hv=n))),f?t<Xv?Yr(Yv,t)>Yr(Yv,jv)&&(jv=t):Yr(t,jv)>Yr(Yv,jv)&&(Yv=t):jv>=Yv?(t<Yv&&(Yv=t),t>jv&&(jv=t)):t>Xv?Yr(Yv,t)>Yr(Yv,jv)&&(jv=t):Yr(t,jv)>Yr(Yv,jv)&&(Yv=t)}else Zv.push(Gv=[Yv=t,jv=t]);n<Bv&&(Bv=n),n>Hv&&(Hv=n),Wv=e,Xv=t}function Ur(){Y_.point=qr}function Dr(){Gv[0]=Yv,Gv[1]=jv,Y_.point=Rr,Wv=null}function Or(t,n){if(Wv){var e=t-Xv;I_.add(b_(e)>180?e+(e>0?360:-360):e)}else Vv=t,$v=n;O_.point(t,n),qr(t,n)}function Fr(){O_.lineStart()}function Ir(){Or(Vv,$v),O_.lineEnd(),b_(I_)>d_&&(Yv=-(jv=180)),Gv[0]=Yv,Gv[1]=jv,Wv=null}function Yr(t,n){return(n-=t)<0?n+360:n}function Br(t,n){return t[0]-n[0]}function jr(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}function Hr(t,n){t*=x_,n*=x_;var e=T_(n);Xr(e*T_(t),e*A_(t),A_(n))}function Xr(t,n,e){++Jv,Kv+=(t-Kv)/Jv,t_+=(n-t_)/Jv,n_+=(e-n_)/Jv}function Vr(){j_.point=$r}function $r(t,n){t*=x_,n*=x_;var e=T_(n);f_=e*T_(t),l_=e*A_(t),h_=A_(n),j_.point=Wr,Xr(f_,l_,h_)}function Wr(t,n){t*=x_,n*=x_;var e=T_(n),r=e*T_(t),i=e*A_(t),o=A_(n),u=M_(z_((u=l_*o-h_*i)*u+(u=h_*r-f_*o)*u+(u=f_*i-l_*r)*u),f_*r+l_*i+h_*o);Qv+=u,e_+=u*(f_+(f_=r)),r_+=u*(l_+(l_=i)),i_+=u*(h_+(h_=o)),Xr(f_,l_,h_)}function Zr(){j_.point=Hr}function Gr(){j_.point=Qr}function Jr(){Kr(c_,s_),j_.point=Hr}function Qr(t,n){c_=t,s_=n,t*=x_,n*=x_,j_.point=Kr;var e=T_(n);f_=e*T_(t),l_=e*A_(t),h_=A_(n),Xr(f_,l_,h_)}function Kr(t,n){t*=x_,n*=x_;var e=T_(n),r=e*T_(t),i=e*A_(t),o=A_(n),u=l_*o-h_*i,a=h_*r-f_*o,c=f_*i-l_*r,s=z_(u*u+a*a+c*c),f=gr(s),l=s&&-f/s;o_+=l*u,u_+=l*a,a_+=l*c,Qv+=f,e_+=f*(f_+(f_=r)),r_+=f*(l_+(l_=i)),i_+=f*(h_+(h_=o)),Xr(f_,l_,h_)}function ti(t,n){return[t>v_?t-y_:t<-v_?t+y_:t,n]}function ni(t,n,e){return(t%=y_)?n||e?V_(ri(t),ii(n,e)):ri(t):n||e?ii(n,e):ti}function ei(t){return function(n,e){return n+=t,[n>v_?n-y_:n<-v_?n+y_:n,e]}}function ri(t){var n=ei(t);return n.invert=ei(-t),n}function ii(t,n){function e(t,n){var e=T_(n),a=T_(t)*e,c=A_(t)*e,s=A_(n),f=s*r+a*i;return[M_(c*o-f*u,a*r-s*i),gr(f*o+c*u)]}var r=T_(t),i=A_(t),o=T_(n),u=A_(n);return e.invert=function(t,n){var e=T_(n),a=T_(t)*e,c=A_(t)*e,s=A_(n),f=s*o-c*u;return[M_(c*o+s*u,a*r+f*i),gr(f*r-a*i)]},e}function oi(t,n,e,r,i,o){if(e){var u=T_(n),a=A_(n),c=r*e;null==i?(i=n+r*y_,o=n-c/2):(i=ui(u,i),o=ui(u,o),(r>0?i<o:i>o)&&(i+=r*y_));for(var s,f=i;r>0?f>o:f<o;f-=c)s=Nr([u,-a*T_(f),-a*A_(f)]),t.point(s[0],s[1])}}function ui(t,n){n=Er(n),n[0]-=t,Lr(n);var e=_r(-n[1]);return((-n[2]<0?-e:e)+y_-d_)%y_}function ai(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function ci(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}function si(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,a,s){var f=0,l=0;if(null==i||(f=u(i,a))!==(l=u(o,a))||c(i,o)<0^a>0)do{s.point(0===f||3===f?t:e,f>1?r:n)}while((f=(f+a+4)%4)!==l);else s.point(o[0],o[1])}function u(r,i){return b_(r[0]-t)<d_?i>0?0:3:b_(r[0]-e)<d_?i>0?2:1:b_(r[1]-n)<d_?i>0?1:0:i>0?3:2}function a(t,n){return c(t.x,n.x)}function c(t,n){var e=u(t,1),r=u(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(u){function c(t,n){i(t,n)&&S.point(t,n)}function s(){for(var n=0,e=0,i=_.length;e<i;++e)for(var o,u,a=_[e],c=1,s=a.length,f=a[0],l=f[0],h=f[1];c<s;++c)o=l,u=h,f=a[c],l=f[0],h=f[1],u<=r?h>r&&(l-o)*(r-u)>(h-u)*(t-o)&&++n:h<=r&&(l-o)*(r-u)<(h-u)*(t-o)&&--n;return n}function f(){S=N,v=[],_=[],k=!0}function l(){var t=s(),n=k&&t,e=(v=ff(v)).length;(n||e)&&(u.polygonStart(),n&&(u.lineStart(),o(null,null,1,u),u.lineEnd()),e&&sg(v,a,t,o,u),u.polygonEnd()),S=u,v=_=g=null}function h(){E.point=d,_&&_.push(g=[]),T=!0,M=!1,b=w=NaN}function p(){v&&(d(y,m),x&&M&&N.rejoin(),v.push(N.result())),E.point=c,M&&S.lineEnd()}function d(o,u){var a=i(o,u);if(_&&g.push([o,u]),T)y=o,m=u,x=a,T=!1,a&&(S.lineStart(),S.point(o,u));else if(a&&M)S.point(o,u);else{var c=[b=Math.max(lg,Math.min(fg,b)),w=Math.max(lg,Math.min(fg,w))],s=[o=Math.max(lg,Math.min(fg,o)),u=Math.max(lg,Math.min(fg,u))];ag(c,s,t,n,e,r)?(M||(S.lineStart(),S.point(c[0],c[1])),S.point(s[0],s[1]),a||S.lineEnd(),k=!1):a&&(S.lineStart(),S.point(o,u),k=!1)}b=o,w=u,M=a}var v,_,g,y,m,x,b,w,M,T,k,S=u,N=ug(),E={point:c,lineStart:h,lineEnd:p,polygonStart:f,polygonEnd:l};return E}}function fi(){_g.point=hi,_g.lineEnd=li}function li(){_g.point=_g.lineEnd=mr}function hi(t,n){t*=x_,n*=x_,$_=t,W_=A_(n),Z_=T_(n),_g.point=pi}function pi(t,n){t*=x_,n*=x_;var e=A_(n),r=T_(n),i=b_(t-$_),o=T_(i),u=A_(i),a=r*u,c=Z_*e-W_*r*o,s=W_*e+Z_*r*o;vg.add(M_(z_(a*a+c*c),s)),$_=t,W_=e,Z_=r}function di(t,n){return!(!t||!wg.hasOwnProperty(t.type))&&wg[t.type](t,n)}function vi(t,n){return 0===xg(t,n)}function _i(t,n){var e=xg(t[0],t[1]);return xg(t[0],n)+xg(n,t[1])<=e+d_}function gi(t,n){return!!dg(t.map(yi),mi(n))}function yi(t){return t=t.map(mi),t.pop(),t}function mi(t){return[t[0]*x_,t[1]*x_]}function xi(t,n,e){var r=Gs(t,n-d_,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function bi(t,n,e){var r=Gs(t,n-d_,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function wi(){function t(){return{type:"MultiLineString",coordinates:n()}}function n(){return Gs(k_(o/_)*_,i,_).map(h).concat(Gs(k_(s/g)*g,c,g).map(p)).concat(Gs(k_(r/d)*d,e,d).filter(function(t){return b_(t%_)>d_}).map(f)).concat(Gs(k_(a/v)*v,u,v).filter(function(t){return b_(t%g)>d_}).map(l))}var e,r,i,o,u,a,c,s,f,l,h,p,d=10,v=d,_=90,g=360,y=2.5;return t.lines=function(){return n().map(function(t){return{type:"LineString",coordinates:t}})},t.outline=function(){return{type:"Polygon",coordinates:[h(o).concat(p(c).slice(1),h(i).reverse().slice(1),p(s).reverse().slice(1))]}},t.extent=function(n){return arguments.length?t.extentMajor(n).extentMinor(n):t.extentMinor()},t.extentMajor=function(n){return arguments.length?(o=+n[0][0],i=+n[1][0],s=+n[0][1],c=+n[1][1],o>i&&(n=o,o=i,i=n),s>c&&(n=s,s=c,c=n),t.precision(y)):[[o,s],[i,c]]},t.extentMinor=function(n){return arguments.length?(r=+n[0][0],e=+n[1][0],a=+n[0][1],u=+n[1][1],r>e&&(n=r,r=e,e=n),a>u&&(n=a,a=u,u=n),t.precision(y)):[[r,a],[e,u]]},t.step=function(n){return arguments.length?t.stepMajor(n).stepMinor(n):t.stepMinor()},t.stepMajor=function(n){return arguments.length?(_=+n[0],g=+n[1],t):[_,g]},t.stepMinor=function(n){return arguments.length?(d=+n[0],v=+n[1],t):[d,v]},t.precision=function(n){return arguments.length?(y=+n,f=xi(a,u,90),l=bi(r,e,y),h=xi(s,c,90),p=bi(o,i,y),t):y},t.extentMajor([[-180,-90+d_],[180,90-d_]]).extentMinor([[-180,-80-d_],[180,80+d_]])}function Mi(){return wi()()}function Ti(){Eg.point=ki}function ki(t,n){Eg.point=Si,G_=Q_=t,J_=K_=n}function Si(t,n){Ng.add(K_*t-Q_*n),Q_=t,K_=n}function Ni(){Si(G_,J_)}function Ei(t,n){t<Ag&&(Ag=t),t>zg&&(zg=t),n<Cg&&(Cg=n),n>Pg&&(Pg=n)}function Ai(t,n){Rg+=t,qg+=n,++Ug}function Ci(){jg.point=zi}function zi(t,n){jg.point=Pi,Ai(eg=t,rg=n)}function Pi(t,n){var e=t-eg,r=n-rg,i=z_(e*e+r*r);Dg+=i*(eg+t)/2,Og+=i*(rg+n)/2,Fg+=i,Ai(eg=t,rg=n)}function Li(){jg.point=Ai}function Ri(){jg.point=Ui}function qi(){Di(tg,ng)}function Ui(t,n){jg.point=Di,Ai(tg=eg=t,ng=rg=n)}function Di(t,n){var e=t-eg,r=n-rg,i=z_(e*e+r*r);Dg+=i*(eg+t)/2,Og+=i*(rg+n)/2,Fg+=i,i=rg*t-eg*n,Ig+=i*(eg+t),Yg+=i*(rg+n),Bg+=3*i,Ai(eg=t,rg=n)}function Oi(t){this._context=t}function Fi(t,n){Gg.point=Ii,Xg=$g=t,Vg=Wg=n}function Ii(t,n){$g-=t,Wg-=n,Zg.add(z_($g*$g+Wg*Wg)),$g=t,Wg=n}function Yi(){this._string=[]}function Bi(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function ji(t){return t.length>1}function Hi(t,n){return((t=t.x)[0]<0?t[1]-__-d_:__-t[1])-((n=n.x)[0]<0?n[1]-__-d_:__-n[1])}function Xi(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,u){var a=o>0?v_:-v_,c=b_(o-e);b_(c-v_)<d_?(t.point(e,r=(r+u)/2>0?__:-__),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),t.point(o,r),n=0):i!==a&&c>=v_&&(b_(e-i)<d_&&(e-=i*d_),b_(o-a)<d_&&(o-=a*d_),r=Vi(e,r,o,u),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),n=0),t.point(e=o,r=u),i=a},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}}function Vi(t,n,e,r){var i,o,u=A_(t-e);return b_(u)>d_?w_((A_(n)*(o=T_(r))*A_(e)-A_(r)*(i=T_(n))*A_(t))/(i*o*u)):(n+r)/2}function $i(t,n,e,r){var i;if(null==t)i=e*__,r.point(-v_,i),r.point(0,i),r.point(v_,i),r.point(v_,0),r.point(v_,-i),r.point(0,-i),r.point(-v_,-i),r.point(-v_,0),r.point(-v_,i);else if(b_(t[0]-n[0])>d_){var o=t[0]<n[0]?v_:-v_;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])}function Wi(t){return function(n){var e=new Zi;for(var r in t)e[r]=t[r];return e.stream=n,e}}function Zi(){}function Gi(t,n,e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=t.clipExtent&&t.clipExtent();t.scale(150).translate([0,0]),null!=o&&t.clipExtent(null),q_(e,t.stream(Lg));var u=Lg.result(),a=Math.min(r/(u[1][0]-u[0][0]),i/(u[1][1]-u[0][1])),c=+n[0][0]+(r-a*(u[1][0]+u[0][0]))/2,s=+n[0][1]+(i-a*(u[1][1]+u[0][1]))/2;return null!=o&&t.clipExtent(o),t.scale(150*a).translate([c,s])}function Ji(t,n,e){return Gi(t,[[0,0],n],e)}function Qi(t){return Wi({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}function Ki(t,n){function e(r,i,o,u,a,c,s,f,l,h,p,d,v,_){var g=s-r,y=f-i,m=g*g+y*y;if(m>4*n&&v--){var x=u+h,b=a+p,w=c+d,M=z_(x*x+b*b+w*w),T=gr(w/=M),k=b_(b_(w)-1)<d_||b_(o-l)<d_?(o+l)/2:M_(b,x),S=t(k,T),N=S[0],E=S[1],A=N-r,C=E-i,z=y*A-g*C;(z*z/m>n||b_((g*A+y*C)/m-.5)>.3||u*h+a*p+c*d<ry)&&(e(r,i,o,u,a,c,N,E,k,x/=M,b/=M,w,v,_),_.point(N,E),e(N,E,k,x,b,w,s,f,l,h,p,d,v,_))}}return function(n){function r(e,r){e=t(e,r),n.point(e[0],e[1])}function i(){g=NaN,w.point=o,n.lineStart()}function o(r,i){var o=Er([r,i]),u=t(r,i);e(g,y,_,m,x,b,g=u[0],y=u[1],_=r,m=o[0],x=o[1],b=o[2],ey,n),n.point(g,y)}function u(){w.point=r,n.lineEnd()}function a(){i(),w.point=c,w.lineEnd=s}function c(t,n){o(f=t,n),l=g,h=y,p=m,d=x,v=b,w.point=o}function s(){e(g,y,_,m,x,b,l,h,f,p,d,v,ey,n),w.lineEnd=u,u()}var f,l,h,p,d,v,_,g,y,m,x,b,w={point:r,lineStart:i,lineEnd:u,polygonStart:function(){n.polygonStart(),w.lineStart=a},polygonEnd:function(){n.polygonEnd(),w.lineStart=i}};return w}}function to(t){return no(function(){return t})()}function no(t){function n(t){return t=f(t[0]*x_,t[1]*x_),[t[0]*_+a,c-t[1]*_]}function e(t){return(t=f.invert((t[0]-a)/_,(c-t[1])/_))&&[t[0]*m_,t[1]*m_]}function r(t,n){return t=u(t,n),[t[0]*_+a,c-t[1]*_]}function i(){f=V_(s=ni(b,w,M),u);var t=u(m,x);return a=g-t[0]*_,c=y+t[1]*_,o()}function o(){return d=v=null,n}var u,a,c,s,f,l,h,p,d,v,_=150,g=480,y=250,m=0,x=0,b=0,w=0,M=0,T=null,k=Kg,S=null,N=kg,E=.5,A=iy(r,E);return n.stream=function(t){return d&&v===t?d:d=oy(k(s,A(N(v=t))))},n.clipAngle=function(t){return arguments.length?(k=+t?ty(T=t*x_,6*x_):(T=null,Kg),o()):T*m_},n.clipExtent=function(t){return arguments.length?(N=null==t?(S=l=h=p=null,kg):si(S=+t[0][0],l=+t[0][1],h=+t[1][0],p=+t[1][1]),o()):null==S?null:[[S,l],[h,p]]},n.scale=function(t){return arguments.length?(_=+t,i()):_},n.translate=function(t){return arguments.length?(g=+t[0],y=+t[1],i()):[g,y]},n.center=function(t){return arguments.length?(m=t[0]%360*x_,x=t[1]%360*x_,i()):[m*m_,x*m_]},n.rotate=function(t){return arguments.length?(b=t[0]%360*x_,w=t[1]%360*x_,M=t.length>2?t[2]%360*x_:0,i()):[b*m_,w*m_,M*m_]},n.precision=function(t){return arguments.length?(A=iy(r,E=t*t),o()):z_(E)},n.fitExtent=function(t,e){return Gi(n,t,e)},n.fitSize=function(t,e){return Ji(n,t,e)},function(){return u=t.apply(this,arguments),n.invert=u.invert&&e,i()}}function eo(t){var n=0,e=v_/3,r=no(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*x_,e=t[1]*x_):[n*m_,e*m_]},i}function ro(t){function n(t,n){return[t*e,A_(n)/e]}var e=T_(t);return n.invert=function(t,n){return[t/e,gr(n*e)]},n}function io(t,n){function e(t,n){var e=z_(o-2*i*A_(n))/i;return[e*A_(t*=i),u-e*T_(t)]}var r=A_(t),i=(r+A_(n))/2;if(b_(i)<d_)return ro(t);var o=1+r*(2*i-r),u=z_(o)/i;return e.invert=function(t,n){var e=u-n;return[M_(t,b_(e))/i*C_(e),gr((o-(t*t+e*e)*i*i)/(2*i))]},e}function oo(t){var n=t.length;return{point:function(e,r){for(var i=-1;++i<n;)t[i].point(e,r)},sphere:function(){for(var e=-1;++e<n;)t[e].sphere()},lineStart:function(){for(var e=-1;++e<n;)t[e].lineStart()},lineEnd:function(){for(var e=-1;++e<n;)t[e].lineEnd()},polygonStart:function(){for(var e=-1;++e<n;)t[e].polygonStart()},polygonEnd:function(){for(var e=-1;++e<n;)t[e].polygonEnd()}}}function uo(t){return function(n,e){var r=T_(n),i=T_(e),o=t(r*i);return[o*i*A_(n),o*A_(e)]}}function ao(t){return function(n,e){var r=z_(n*n+e*e),i=t(r),o=A_(i);return[M_(n*o,r*T_(i)),gr(r&&e*o/r)]}}function co(t,n){return[t,N_(P_((__+n)/2))]}function so(t){function n(){var n=v_*a(),u=o(ig(o.rotate()).invert([0,0]));return s(null==f?[[u[0]-n,u[1]-n],[u[0]+n,u[1]+n]]:t===co?[[Math.max(u[0]-n,f),e],[Math.min(u[0]+n,r),i]]:[[f,Math.max(u[1]-n,e)],[r,Math.min(u[1]+n,i)]])}var e,r,i,o=to(t),u=o.center,a=o.scale,c=o.translate,s=o.clipExtent,f=null;return o.scale=function(t){return arguments.length?(a(t),n()):a()},o.translate=function(t){return arguments.length?(c(t),n()):c()},o.center=function(t){return arguments.length?(u(t),n()):u()},o.clipExtent=function(t){return arguments.length?(null==t?f=e=r=i=null:(f=+t[0][0],e=+t[0][1],r=+t[1][0],i=+t[1][1]),n()):null==f?null:[[f,e],[r,i]]},n()}function fo(t){return P_((__+t)/2)}function lo(t,n){function e(t,n){o>0?n<-__+d_&&(n=-__+d_):n>__-d_&&(n=__-d_);var e=o/E_(fo(n),i);return[e*A_(i*t),o-e*T_(i*t)]}var r=T_(t),i=t===n?A_(t):N_(r/T_(n))/N_(fo(n)/fo(t)),o=r*E_(fo(t),i)/i;return i?(e.invert=function(t,n){var e=o-n,r=C_(i)*z_(t*t+e*e);return[M_(t,b_(e))/i*C_(e),2*w_(E_(o/r,1/i))-__]},e):co}function ho(t,n){return[t,n]}function po(t,n){function e(t,n){var e=o-n,r=i*t;return[e*A_(r),o-e*T_(r)]}var r=T_(t),i=t===n?A_(t):(r-T_(n))/(n-t),o=r/i+t;return b_(i)<d_?ho:(e.invert=function(t,n){var e=o-n;return[M_(t,b_(e))/i*C_(e),o-C_(i)*z_(t*t+e*e)]},e)}function vo(t,n){var e=T_(n),r=T_(t)*e;return[e*A_(t)/r,A_(n)/r]}function _o(t,n,e,r){return 1===t&&1===n&&0===e&&0===r?kg:Wi({point:function(i,o){this.stream.point(i*t+e,o*n+r)}})}function go(t,n){return[T_(n)*A_(t),A_(n)]}function yo(t,n){var e=T_(n),r=1+T_(t)*e;return[e*A_(t)/r,A_(n)/r]}function mo(t,n){return[N_(P_((__+n)/2)),-t]}function xo(t,n){return t.parent===n.parent?1:2}function bo(t){return t.reduce(wo,0)/t.length}function wo(t,n){return t+n.x}function Mo(t){return 1+t.reduce(To,0)}function To(t,n){return Math.max(t,n.y)}function ko(t){for(var n;n=t.children;)t=n[0];return t}function So(t){for(var n;n=t.children;)t=n[n.length-1];return t}function No(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function Eo(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}function Ao(t,n){var e,r,i,o,u,a=new Ro(t),c=+t.value&&(a.value=t.value),s=[a];for(null==n&&(n=zo);e=s.pop();)if(c&&(e.value=+e.data.value),(i=n(e.data))&&(u=i.length))for(e.children=new Array(u),o=u-1;o>=0;--o)s.push(r=e.children[o]=new Ro(i[o])),r.parent=e,r.depth=e.depth+1;return a.eachBefore(Lo)}function Co(){return Ao(this).eachBefore(Po)}function zo(t){return t.children}function Po(t){t.data=t.data.data}function Lo(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function Ro(t){this.data=t,this.depth=this.height=0,this.parent=null}function qo(t){this._=t,this.next=null}function Uo(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r-n.r;return i*i+1e-6>e*e+r*r}function Do(t,n){var e,r,i,o=null,u=t.head;switch(n.length){case 1:e=Oo(n[0]);break;case 2:e=Fo(n[0],n[1]);break;case 3:e=Io(n[0],n[1],n[2])}for(;u;)i=u._,r=u.next,e&&Uo(e,i)?o=u:(o?(t.tail=o,o.next=null):t.head=t.tail=null,n.push(i),e=Do(t,n),n.pop(),t.head?(u.next=t.head,t.head=u):(u.next=null,t.head=t.tail=u),o=t.tail,o.next=r),u=r;return t.tail=o,e}function Oo(t){return{x:t.x,y:t.y,r:t.r}}function Fo(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,u=n.y,a=n.r,c=o-e,s=u-r,f=a-i,l=Math.sqrt(c*c+s*s);return{x:(e+o+c/l*f)/2,y:(r+u+s/l*f)/2,r:(l+i+a)/2}}function Io(t,n,e){var r=t.x,i=t.y,o=t.r,u=n.x,a=n.y,c=n.r,s=e.x,f=e.y,l=e.r,h=2*(r-u),p=2*(i-a),d=2*(c-o),v=r*r+i*i-o*o-u*u-a*a+c*c,_=2*(r-s),g=2*(i-f),y=2*(l-o),m=r*r+i*i-o*o-s*s-f*f+l*l,x=_*p-h*g,b=(p*m-g*v)/x-r,w=(g*d-p*y)/x,M=(_*v-h*m)/x-i,T=(h*y-_*d)/x,k=w*w+T*T-1,S=2*(b*w+M*T+o),N=b*b+M*M-o*o,E=(-S-Math.sqrt(S*S-4*k*N))/(2*k);return{x:b+w*E+r,y:M+T*E+i,r:E}}function Yo(t,n,e){var r=t.x,i=t.y,o=n.r+e.r,u=t.r+e.r,a=n.x-r,c=n.y-i,s=a*a+c*c;if(s){var f=.5+((u*=u)-(o*=o))/(2*s),l=Math.sqrt(Math.max(0,2*o*(u+s)-(u-=s)*u-o*o))/(2*s);e.x=r+f*a+l*c,e.y=i+f*c-l*a}else e.x=r+u,e.y=i}function Bo(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r+n.r;return i*i-1e-6>e*e+r*r}function jo(t,n,e){var r=t._,i=t.next._,o=r.r+i.r,u=(r.x*i.r+i.x*r.r)/o-n,a=(r.y*i.r+i.y*r.r)/o-e;return u*u+a*a}function Ho(t){this._=t,this.next=null,this.previous=null}function Xo(t){if(!(i=t.length))return 0;var n,e,r,i;if(n=t[0],n.x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;Yo(e,n,r=t[2]);var o,u,a,c,s,f,l,h=n.r*n.r,p=e.r*e.r,d=r.r*r.r,v=h+p+d,_=h*n.x+p*e.x+d*r.x,g=h*n.y+p*e.y+d*r.y;n=new Ho(n),e=new Ho(e),r=new Ho(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(a=3;a<i;++a){Yo(n._,e._,r=t[a]),r=new Ho(r),c=e.next,s=n.previous,f=e._.r,l=n._.r;do{if(f<=l){if(Bo(c._,r._)){e=c,n.next=e,e.previous=n,--a;continue t}f+=c._.r,c=c.next}else{if(Bo(s._,r._)){n=s,n.next=e,e.previous=n,--a;continue t}l+=s._.r,s=s.previous}}while(c!==s.next);for(r.previous=n,r.next=e,n.next=e.previous=e=r,v+=d=r._.r*r._.r,_+=d*r._.x,g+=d*r._.y,h=jo(n,o=_/v,u=g/v);(r=r.next)!==e;)(d=jo(r,o,u))<h&&(n=r,h=d);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=qy(n),a=0;a<i;++a)n=t[a],n.x-=r.x,n.y-=r.y;return r.r}function Vo(t){return null==t?null:$o(t)}function $o(t){if("function"!=typeof t)throw new Error;return t}function Wo(){return 0}function Zo(t){return Math.sqrt(t.value)}function Go(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function Jo(t,n){return function(e){if(r=e.children){var r,i,o,u=r.length,a=t(e)*n||0;if(a)for(i=0;i<u;++i)r[i].r+=a;if(o=Xo(r),a)for(i=0;i<u;++i)r[i].r-=a;e.r=o+a}}}function Qo(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function Ko(t){return t.id}function tu(t){return t.parentId}function nu(t,n){return t.parent===n.parent?1:2}function eu(t){var n=t.children;return n?n[0]:t.t}function ru(t){var n=t.children;return n?n[n.length-1]:t.t}function iu(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function ou(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)n=i[o],n.z+=e,n.m+=e,e+=n.s+(r+=n.c)}function uu(t,n,e){return t.a.parent===n.parent?t.a:e}function au(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function cu(t){for(var n,e,r,i,o,u=new au(t,0),a=[u];n=a.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)a.push(e=n.children[i]=new au(r[i],i)),e.parent=n;return(u.parent=new au(null,0)).children=[u],u}function su(t,n,e,r,i,o){for(var u,a,c,s,f,l,h,p,d,v,_,g=[],y=n.children,m=0,x=0,b=y.length,w=n.value;m<b;){c=i-e,s=o-r;do{f=y[x++].value}while(!f&&x<b);for(l=h=f,v=Math.max(s/c,c/s)/(w*t),_=f*f*v,d=Math.max(h/_,_/l);x<b;++x){if(f+=a=y[x].value,a<l&&(l=a),a>h&&(h=a),_=f*f*v,(p=Math.max(h/_,_/l))>d){f-=a;break}d=p}g.push(u={value:f,dice:c<s,children:y.slice(m,x)}),u.dice?Iy(u,e,r,i,w?r+=s*f/w:o):$y(u,e,r,w?e+=c*f/w:i,o),w-=f,m=x}return g}function fu(t,n){return t[0]-n[0]||t[1]-n[1]}function lu(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&em(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function hu(t){if(!(t>=1))throw new Error;this._size=t,this._call=this._error=null,this._tasks=[],this._data=[],this._waiting=this._active=this._ended=this._start=0}function pu(t){if(!t._start)try{du(t)}catch(n){if(t._tasks[t._ended+t._active-1])_u(t,n);else if(!t._data)throw n}}function du(t){for(;t._start=t._waiting&&t._active<t._size;){var n=t._ended+t._active,e=t._tasks[n],r=e.length-1,i=e[r];e[r]=vu(t,n),--t._waiting,++t._active,e=i.apply(null,e),t._tasks[n]&&(t._tasks[n]=e||am)}}function vu(t,n){return function(e,r){t._tasks[n]&&(--t._active,++t._ended,t._tasks[n]=null,null==t._error&&(null!=e?_u(t,e):(t._data[n]=r,t._waiting?pu(t):gu(t))))}}function _u(t,n){var e,r=t._tasks.length;for(t._error=n,t._data=void 0,t._waiting=NaN;--r>=0;)if((e=t._tasks[r])&&(t._tasks[r]=null,e.abort))try{e.abort()}catch(t){}t._active=NaN,gu(t)}function gu(t){if(!t._active&&t._call){var n=t._data;t._data=void 0,t._call(t._error,n)}}function yu(t){return new hu(arguments.length?+t:1/0)}function mu(t){return function(n,e){t(null==n?e:null)}}function xu(t){var n=t.responseType;return n&&"text"!==n?t.response:t.responseText}function bu(t,n){return function(e){return t(e.responseText,n)}}function wu(t){function n(n){var o=n+"",u=e.get(o);if(!u){if(i!==Sm)return i;e.set(o,u=r.push(n))}return t[(u-1)%t.length]}var e=Ye(),r=[],i=Sm;return t=null==t?[]:km.call(t),n.domain=function(t){if(!arguments.length)return r.slice();r=[],e=Ye();for(var i,o,u=-1,a=t.length;++u<a;)e.has(o=(i=t[u])+"")||e.set(o,r.push(i));return n},n.range=function(e){return arguments.length?(t=km.call(e),n):t.slice()},n.unknown=function(t){return arguments.length?(i=t,n):i},n.copy=function(){return wu().domain(r).range(t).unknown(i)},n}function Mu(){function t(){var t=i().length,r=u[1]<u[0],l=u[r-0],h=u[1-r];n=(h-l)/Math.max(1,t-c+2*s),a&&(n=Math.floor(n)),l+=(h-l-n*(t-c))*f,e=n*(1-c),a&&(l=Math.round(l),e=Math.round(e));var p=Gs(t).map(function(t){return l+n*t});return o(r?p.reverse():p)}var n,e,r=wu().unknown(void 0),i=r.domain,o=r.range,u=[0,1],a=!1,c=0,s=0,f=.5;return delete r.unknown,r.domain=function(n){return arguments.length?(i(n),t()):i()},r.range=function(n){return arguments.length?(u=[+n[0],+n[1]],t()):u.slice()},r.rangeRound=function(n){return u=[+n[0],+n[1]],a=!0,t()},r.bandwidth=function(){return e},r.step=function(){return n},r.round=function(n){return arguments.length?(a=!!n,t()):a},r.padding=function(n){return arguments.length?(c=s=Math.max(0,Math.min(1,n)),t()):c},r.paddingInner=function(n){return arguments.length?(c=Math.max(0,Math.min(1,n)),t()):c},r.paddingOuter=function(n){return arguments.length?(s=Math.max(0,Math.min(1,n)),t()):s},r.align=function(n){return arguments.length?(f=Math.max(0,Math.min(1,n)),t()):f},r.copy=function(){return Mu().domain(i()).range(u).round(a).paddingInner(c).paddingOuter(s).align(f)},t()}function Tu(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return Tu(n())},t}function ku(){return Tu(Mu().paddingInner(1))}function Su(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:Nm(n)}function Nu(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=n?0:t>=e?1:r(t)}}}function Eu(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=0?n:t>=1?e:r(t)}}}function Au(t,n,e,r){var i=t[0],o=t[1],u=n[0],a=n[1];return o<i?(i=e(o,i),u=r(a,u)):(i=e(i,o),u=r(u,a)),function(t){return u(i(t))}}function Cu(t,n,e,r){var i=Math.min(t.length,n.length)-1,o=new Array(i),u=new Array(i),a=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<i;)o[a]=e(t[a],t[a+1]),u[a]=r(n[a],n[a+1]);return function(n){var e=Us(t,n,1,i)-1;return u[e](o[e](n))}}function zu(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function Pu(t,n){function e(){return i=Math.min(a.length,c.length)>2?Cu:Au,o=u=null,r}function r(n){return(o||(o=i(a,c,f?Nu(t):t,s)))(+n)}var i,o,u,a=Am,c=Am,s=Th,f=!1;return r.invert=function(t){return(u||(u=i(c,a,Su,f?Eu(n):n)))(+t)},r.domain=function(t){return arguments.length?(a=Tm.call(t,Em),e()):a.slice()},r.range=function(t){return arguments.length?(c=km.call(t),e()):c.slice()},r.rangeRound=function(t){return c=km.call(t),s=kh,e()},r.clamp=function(t){return arguments.length?(f=!!t,e()):f},r.interpolate=function(t){return arguments.length?(s=t,e()):s},e()}function Lu(t){var n=t.domain;return t.ticks=function(t){var e=n();return tf(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){return Cm(n(),t,e)},t.nice=function(e){var i=n(),o=i.length-1,u=null==e?10:e,a=i[0],c=i[o],s=r(a,c,u);return s&&(s=r(Math.floor(a/s)*s,Math.ceil(c/s)*s,u),i[0]=Math.floor(a/s)*s,i[o]=Math.ceil(c/s)*s,n(i)),t},t}function Ru(){var t=Pu(Su,mh);return t.copy=function(){return zu(t,Ru())},Lu(t)}function qu(){function t(t){return+t}var n=[0,1];return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=Tm.call(e,Em),t):n.slice()},t.copy=function(){return qu().domain(n)},Lu(t)}function Uu(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:Nm(n)}function Du(t,n){return t<0?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function Ou(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Fu(t){return 10===t?Ou:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function Iu(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function Yu(t){return function(n){return-t(-n)}}function Bu(){function n(){return o=Iu(i),u=Fu(i),r()[0]<0&&(o=Yu(o),u=Yu(u)),e}var e=Pu(Uu,Du).domain([1,10]),r=e.domain,i=10,o=Iu(10),u=Fu(10);return e.base=function(t){return arguments.length?(i=+t,n()):i},e.domain=function(t){return arguments.length?(r(t),n()):r()},e.ticks=function(t){var n,e=r(),a=e[0],c=e[e.length-1];(n=c<a)&&(h=a,a=c,c=h);var s,f,l,h=o(a),p=o(c),d=null==t?10:+t,v=[];if(!(i%1)&&p-h<d){if(h=Math.round(h)-1,p=Math.round(p)+1,a>0){for(;h<p;++h)for(f=1,s=u(h);f<i;++f)if(!((l=s*f)<a)){if(l>c)break;v.push(l)}}else for(;h<p;++h)for(f=i-1,s=u(h);f>=1;--f)if(!((l=s*f)<a)){if(l>c)break;v.push(l)}}else v=tf(h,p,Math.min(p-h,d)).map(u);return n?v.reverse():v},e.tickFormat=function(n,r){if(null==r&&(r=10===i?".0e":","),"function"!=typeof r&&(r=t.format(r)),n===1/0)return r;null==n&&(n=10);var a=Math.max(1,i*n/e.ticks().length);return function(t){var n=t/u(Math.round(o(t)));return n*i<i-.5&&(n*=i),n<=a?r(t):""}},e.nice=function(){return r(zm(r(),{floor:function(t){return u(Math.floor(o(t)))},ceil:function(t){return u(Math.ceil(o(t)))}}))},e.copy=function(){return zu(e,Bu().base(i))},e}function ju(t,n){return t<0?-Math.pow(-t,n):Math.pow(t,n)}function Hu(){function t(t,n){return(n=ju(n,e)-(t=ju(t,e)))?function(r){return(ju(r,e)-t)/n}:Nm(n)}function n(t,n){return n=ju(n,e)-(t=ju(t,e)),function(r){return ju(t+n*r,1/e)}}var e=1,r=Pu(t,n),i=r.domain;return r.exponent=function(t){return arguments.length?(e=+t,i(i())):e},r.copy=function(){return zu(r,Hu().exponent(e))},Lu(r)}function Xu(){return Hu().exponent(.5)}function Vu(){function t(){var t=0,o=Math.max(1,r.length);for(i=new Array(o-1);++t<o;)i[t-1]=rf(e,t/o);return n}function n(t){if(!isNaN(t=+t))return r[Us(i,t)]}var e=[],r=[],i=[];return n.invertExtent=function(t){var n=r.indexOf(t);return n<0?[NaN,NaN]:[n>0?i[n-1]:e[0],n<i.length?i[n]:e[e.length-1]]},n.domain=function(n){if(!arguments.length)return e.slice();e=[];for(var r,i=0,o=n.length;i<o;++i)null==(r=n[i])||isNaN(r=+r)||e.push(r);return e.sort(Ls),t()},n.range=function(n){return arguments.length?(r=km.call(n),t()):r.slice()},n.quantiles=function(){return i.slice()},n.copy=function(){return Vu().domain(e).range(r)},n}function $u(){function t(t){if(t<=t)return u[Us(o,t,0,i)]}function n(){var n=-1;for(o=new Array(i);++n<i;)o[n]=((n+1)*r-(n-i)*e)/(i+1);return t}var e=0,r=1,i=1,o=[.5],u=[0,1];return t.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n()):[e,r]},t.range=function(t){return arguments.length?(i=(u=km.call(t)).length-1,n()):u.slice()},t.invertExtent=function(t){var n=u.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,o[0]]:n>=i?[o[i-1],r]:[o[n-1],o[n]]},t.copy=function(){return $u().domain([e,r]).range(u)},Lu(t)}function Wu(){function t(t){if(t<=t)return e[Us(n,t,0,r)]}var n=[.5],e=[0,1],r=1;return t.domain=function(i){return arguments.length?(n=km.call(i),r=Math.min(n.length,e.length-1),t):n.slice()},t.range=function(i){return arguments.length?(e=km.call(i),r=Math.min(n.length,e.length-1),t):e.slice()},t.invertExtent=function(t){var r=e.indexOf(t);return[n[r-1],n[r]]},t.copy=function(){return Wu().domain(n).range(e)},t}function Zu(t,n,e,r){function i(n){return t(n=new Date(+n)),n}return i.floor=i,i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do{u.push(new Date(+e))}while(n(e,o),t(e),e<r);return u},i.filter=function(e){return Zu(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return Pm.setTime(+n),Lm.setTime(+r),t(Pm),t(Lm),Math.floor(e(Pm,Lm))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}function Gu(t){return Zu(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Um)/Dm})}function Ju(t){return Zu(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/Dm})}function Qu(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function Ku(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function ta(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function na(t){function n(t,n){return function(e){var r,i,o,u=[],a=-1,c=0,s=t.length;for(e instanceof Date||(e=new Date(+e));++a<s;)37===t.charCodeAt(a)&&(u.push(t.slice(c,a)),null!=(i=qx[r=t.charAt(++a)])?r=t.charAt(++a):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),u.push(r),c=a+1);return u.push(t.slice(c,a)),u.join("")}}function e(t,n){return function(e){var i=ta(1900);if(r(i,t,e+="",0)!=e.length)return null;if("p"in i&&(i.H=i.H%12+12*i.p),"W"in i||"U"in i){"w"in i||(i.w="W"in i?1:0);var o="Z"in i?Ku(ta(i.y)).getUTCDay():n(ta(i.y)).getDay();i.m=0,
i.d="W"in i?(i.w+6)%7+7*i.W-(o+5)%7:i.w+7*i.U-(o+6)%7}return"Z"in i?(i.H+=i.Z/100|0,i.M+=i.Z%100,Ku(i)):n(i)}}function r(t,n,e,r){for(var i,o,u=0,a=n.length,c=e.length;u<a;){if(r>=c)return-1;if(37===(i=n.charCodeAt(u++))){if(i=n.charAt(u++),!(o=B[i in qx?n.charAt(u++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function i(t,n,e){var r=C.exec(n.slice(e));return r?(t.p=z[r[0].toLowerCase()],e+r[0].length):-1}function o(t,n,e){var r=R.exec(n.slice(e));return r?(t.w=q[r[0].toLowerCase()],e+r[0].length):-1}function u(t,n,e){var r=P.exec(n.slice(e));return r?(t.w=L[r[0].toLowerCase()],e+r[0].length):-1}function a(t,n,e){var r=O.exec(n.slice(e));return r?(t.m=F[r[0].toLowerCase()],e+r[0].length):-1}function c(t,n,e){var r=U.exec(n.slice(e));return r?(t.m=D[r[0].toLowerCase()],e+r[0].length):-1}function s(t,n,e){return r(t,w,n,e)}function f(t,n,e){return r(t,M,n,e)}function l(t,n,e){return r(t,T,n,e)}function h(t){return N[t.getDay()]}function p(t){return S[t.getDay()]}function d(t){return A[t.getMonth()]}function v(t){return E[t.getMonth()]}function _(t){return k[+(t.getHours()>=12)]}function g(t){return N[t.getUTCDay()]}function y(t){return S[t.getUTCDay()]}function m(t){return A[t.getUTCMonth()]}function x(t){return E[t.getUTCMonth()]}function b(t){return k[+(t.getUTCHours()>=12)]}var w=t.dateTime,M=t.date,T=t.time,k=t.periods,S=t.days,N=t.shortDays,E=t.months,A=t.shortMonths,C=ia(k),z=oa(k),P=ia(S),L=oa(S),R=ia(N),q=oa(N),U=ia(E),D=oa(E),O=ia(A),F=oa(A),I={a:h,A:p,b:d,B:v,c:null,d:xa,e:xa,H:ba,I:wa,j:Ma,L:Ta,m:ka,M:Sa,p:_,S:Na,U:Ea,w:Aa,W:Ca,x:null,X:null,y:za,Y:Pa,Z:La,"%":Wa},Y={a:g,A:y,b:m,B:x,c:null,d:Ra,e:Ra,H:qa,I:Ua,j:Da,L:Oa,m:Fa,M:Ia,p:b,S:Ya,U:Ba,w:ja,W:Ha,x:null,X:null,y:Xa,Y:Va,Z:$a,"%":Wa},B={a:o,A:u,b:a,B:c,c:s,d:pa,e:pa,H:va,I:va,j:da,L:ya,m:ha,M:_a,p:i,S:ga,U:aa,w:ua,W:ca,x:f,X:l,y:fa,Y:sa,Z:la,"%":ma};return I.x=n(M,I),I.X=n(T,I),I.c=n(w,I),Y.x=n(M,Y),Y.X=n(T,Y),Y.c=n(w,Y),{format:function(t){var e=n(t+="",I);return e.toString=function(){return t},e},parse:function(t){var n=e(t+="",Qu);return n.toString=function(){return t},n},utcFormat:function(t){var e=n(t+="",Y);return e.toString=function(){return t},e},utcParse:function(t){var n=e(t,Ku);return n.toString=function(){return t},n}}}function ea(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function ra(t){return t.replace(Ox,"\\$&")}function ia(t){return new RegExp("^(?:"+t.map(ra).join("|")+")","i")}function oa(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function ua(t,n,e){var r=Ux.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function aa(t,n,e){var r=Ux.exec(n.slice(e));return r?(t.U=+r[0],e+r[0].length):-1}function ca(t,n,e){var r=Ux.exec(n.slice(e));return r?(t.W=+r[0],e+r[0].length):-1}function sa(t,n,e){var r=Ux.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function fa(t,n,e){var r=Ux.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function la(t,n,e){var r=/^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function ha(t,n,e){var r=Ux.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function pa(t,n,e){var r=Ux.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function da(t,n,e){var r=Ux.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function va(t,n,e){var r=Ux.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function _a(t,n,e){var r=Ux.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function ga(t,n,e){var r=Ux.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function ya(t,n,e){var r=Ux.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function ma(t,n,e){var r=Dx.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function xa(t,n){return ea(t.getDate(),n,2)}function ba(t,n){return ea(t.getHours(),n,2)}function wa(t,n){return ea(t.getHours()%12||12,n,2)}function Ma(t,n){return ea(1+Hm.count(cx(t),t),n,3)}function Ta(t,n){return ea(t.getMilliseconds(),n,3)}function ka(t,n){return ea(t.getMonth()+1,n,2)}function Sa(t,n){return ea(t.getMinutes(),n,2)}function Na(t,n){return ea(t.getSeconds(),n,2)}function Ea(t,n){return ea(Vm.count(cx(t),t),n,2)}function Aa(t){return t.getDay()}function Ca(t,n){return ea($m.count(cx(t),t),n,2)}function za(t,n){return ea(t.getFullYear()%100,n,2)}function Pa(t,n){return ea(t.getFullYear()%1e4,n,4)}function La(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+ea(n/60|0,"0",2)+ea(n%60,"0",2)}function Ra(t,n){return ea(t.getUTCDate(),n,2)}function qa(t,n){return ea(t.getUTCHours(),n,2)}function Ua(t,n){return ea(t.getUTCHours()%12||12,n,2)}function Da(t,n){return ea(1+dx.count(Px(t),t),n,3)}function Oa(t,n){return ea(t.getUTCMilliseconds(),n,3)}function Fa(t,n){return ea(t.getUTCMonth()+1,n,2)}function Ia(t,n){return ea(t.getUTCMinutes(),n,2)}function Ya(t,n){return ea(t.getUTCSeconds(),n,2)}function Ba(t,n){return ea(_x.count(Px(t),t),n,2)}function ja(t){return t.getUTCDay()}function Ha(t,n){return ea(gx.count(Px(t),t),n,2)}function Xa(t,n){return ea(t.getUTCFullYear()%100,n,2)}function Va(t,n){return ea(t.getUTCFullYear()%1e4,n,4)}function $a(){return"+0000"}function Wa(){return"%"}function Za(n){return Lx=na(n),t.timeFormat=Lx.format,t.timeParse=Lx.parse,t.utcFormat=Lx.utcFormat,t.utcParse=Lx.utcParse,Lx}function Ga(t){return t.toISOString()}function Ja(t){var n=new Date(t);return isNaN(n)?null:n}function Qa(t){return new Date(t)}function Ka(t){return t instanceof Date?+t:+new Date(+t)}function tc(t,n,e,i,o,u,a,c,s){function f(r){return(a(r)<r?v:u(r)<r?_:o(r)<r?g:i(r)<r?y:n(r)<r?e(r)<r?m:x:t(r)<r?b:w)(r)}function l(n,e,i,o){if(null==n&&(n=10),"number"==typeof n){var u=Math.abs(i-e)/n,a=Rs(function(t){return t[2]}).right(M,u);a===M.length?(o=r(e/$x,i/$x,n),n=t):a?(a=M[u/M[a-1][2]<M[a][2]/u?a-1:a],o=a[1],n=a[0]):(o=r(e,i,n),n=c)}return null==o?n:n.every(o)}var h=Pu(Su,mh),p=h.invert,d=h.domain,v=s(".%L"),_=s(":%S"),g=s("%I:%M"),y=s("%I %p"),m=s("%a %d"),x=s("%b %d"),b=s("%B"),w=s("%Y"),M=[[a,1,Yx],[a,5,5*Yx],[a,15,15*Yx],[a,30,30*Yx],[u,1,Bx],[u,5,5*Bx],[u,15,15*Bx],[u,30,30*Bx],[o,1,jx],[o,3,3*jx],[o,6,6*jx],[o,12,12*jx],[i,1,Hx],[i,2,2*Hx],[e,1,Xx],[n,1,Vx],[n,3,3*Vx],[t,1,$x]];return h.invert=function(t){return new Date(p(t))},h.domain=function(t){return arguments.length?d(Tm.call(t,Ka)):d().map(Qa)},h.ticks=function(t,n){var e,r=d(),i=r[0],o=r[r.length-1],u=o<i;return u&&(e=i,i=o,o=e),e=l(t,i,o,n),e=e?e.range(i,o+1):[],u?e.reverse():e},h.tickFormat=function(t,n){return null==n?f:s(n)},h.nice=function(t,n){var e=d();return(t=l(t,e[0],e[e.length-1],n))?d(zm(e,t)):h},h.copy=function(){return zu(h,tc(t,n,e,i,o,u,a,c,s))},h}function nc(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}function ec(t){function n(n){var o=(n-e)/(r-e);return t(i?Math.max(0,Math.min(1,o)):o)}var e=0,r=1,i=!1;return n.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n):[e,r]},n.clamp=function(t){return arguments.length?(i=!!t,n):i},n.interpolator=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return ec(t).domain([e,r]).clamp(i)},Lu(n)}function rc(t){return t>1?0:t<-1?mb:Math.acos(t)}function ic(t){return t>=1?xb:t<=-1?-xb:Math.asin(t)}function oc(t){return t.innerRadius}function uc(t){return t.outerRadius}function ac(t){return t.startAngle}function cc(t){return t.endAngle}function sc(t){return t&&t.padAngle}function fc(t,n,e,r,i,o,u,a){var c=e-t,s=r-n,f=u-i,l=a-o,h=(f*(n-o)-l*(t-i))/(l*c-f*s);return[t+h*c,n+h*s]}function lc(t,n,e,r,i,o,u){var a=t-e,c=n-r,s=(u?o:-o)/gb(a*a+c*c),f=s*c,l=-s*a,h=t+f,p=n+l,d=e+f,v=r+l,_=(h+d)/2,g=(p+v)/2,y=d-h,m=v-p,x=y*y+m*m,b=i-o,w=h*v-d*p,M=(m<0?-1:1)*gb(db(0,b*b*x-w*w)),T=(w*m-y*M)/x,k=(-w*y-m*M)/x,S=(w*m+y*M)/x,N=(-w*y+m*M)/x,E=T-_,A=k-g,C=S-_,z=N-g;return E*E+A*A>C*C+z*z&&(T=S,k=N),{cx:T,cy:k,x01:-f,y01:-l,x11:T*(i/b-1),y11:k*(i/b-1)}}function hc(t){this._context=t}function pc(t){return t[0]}function dc(t){return t[1]}function vc(t){this._curve=t}function _c(t){function n(n){return new vc(t(n))}return n._curve=t,n}function gc(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(_c(t)):n()._curve},t}function yc(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function mc(t){this._context=t}function xc(t){this._context=t}function bc(t){this._context=t}function wc(t,n){this._basis=new mc(t),this._beta=n}function Mc(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function Tc(t,n){this._context=t,this._k=(1-n)/6}function kc(t,n){this._context=t,this._k=(1-n)/6}function Sc(t,n){this._context=t,this._k=(1-n)/6}function Nc(t,n,e){var r=t._x1,i=t._y1,o=t._x2,u=t._y2;if(t._l01_a>yb){var a=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*a-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*a-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>yb){var s=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,f=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*s+t._x1*t._l23_2a-n*t._l12_2a)/f,u=(u*s+t._y1*t._l23_2a-e*t._l12_2a)/f}t._context.bezierCurveTo(r,i,o,u,t._x2,t._y2)}function Ec(t,n){this._context=t,this._alpha=n}function Ac(t,n){this._context=t,this._alpha=n}function Cc(t,n){this._context=t,this._alpha=n}function zc(t){this._context=t}function Pc(t){return t<0?-1:1}function Lc(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),u=(e-t._y1)/(i||r<0&&-0),a=(o*i+u*r)/(r+i);return(Pc(o)+Pc(u))*Math.min(Math.abs(o),Math.abs(u),.5*Math.abs(a))||0}function Rc(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function qc(t,n,e){var r=t._x0,i=t._y0,o=t._x1,u=t._y1,a=(o-r)/3;t._context.bezierCurveTo(r+a,i+a*n,o-a,u-a*e,o,u)}function Uc(t){this._context=t}function Dc(t){this._context=new Oc(t)}function Oc(t){this._context=t}function Fc(t){return new Uc(t)}function Ic(t){return new Dc(t)}function Yc(t){this._context=t}function Bc(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),u=new Array(r);for(i[0]=0,o[0]=2,u[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,u[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,u[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,u[n]-=e*u[n-1];for(i[r-1]=u[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(u[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function jc(t,n){this._context=t,this._t=n}function Hc(t){return new jc(t,0)}function Xc(t){return new jc(t,1)}function Vc(t,n){return t[n]}function $c(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function Wc(t){return t[0]}function Zc(t){return t[1]}function Gc(){this._=null}function Jc(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function Qc(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function Kc(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function ts(t){for(;t.L;)t=t.L;return t}function ns(t,n,e,r){var i=[null,null],o=Nw.push(i)-1;return i.left=t,i.right=n,e&&rs(i,t,n,e),r&&rs(i,n,t,r),kw[t.index].halfedges.push(o),kw[n.index].halfedges.push(o),i}function es(t,n,e){var r=[n,e];return r.left=t,r}function rs(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function is(t,n,e,r,i){var o,u=t[0],a=t[1],c=u[0],s=u[1],f=a[0],l=a[1],h=0,p=1,d=f-c,v=l-s;if(o=n-c,d||!(o>0)){if(o/=d,d<0){if(o<h)return;o<p&&(p=o)}else if(d>0){if(o>p)return;o>h&&(h=o)}if(o=r-c,d||!(o<0)){if(o/=d,d<0){if(o>p)return;o>h&&(h=o)}else if(d>0){if(o<h)return;o<p&&(p=o)}if(o=e-s,v||!(o>0)){if(o/=v,v<0){if(o<h)return;o<p&&(p=o)}else if(v>0){if(o>p)return;o>h&&(h=o)}if(o=i-s,v||!(o<0)){if(o/=v,v<0){if(o>p)return;o>h&&(h=o)}else if(v>0){if(o<h)return;o<p&&(p=o)}return!(h>0||p<1)||(h>0&&(t[0]=[c+h*d,s+h*v]),p<1&&(t[1]=[c+p*d,s+p*v]),!0)}}}}}function os(t,n,e,r,i){var o=t[1];if(o)return!0;var u,a,c=t[0],s=t.left,f=t.right,l=s[0],h=s[1],p=f[0],d=f[1],v=(l+p)/2,_=(h+d)/2;if(d===h){if(v<n||v>=r)return;if(l>p){if(c){if(c[1]>=i)return}else c=[v,e];o=[v,i]}else{if(c){if(c[1]<e)return}else c=[v,i];o=[v,e]}}else if(u=(l-p)/(d-h),a=_-u*v,u<-1||u>1)if(l>p){if(c){if(c[1]>=i)return}else c=[(e-a)/u,e];o=[(i-a)/u,i]}else{if(c){if(c[1]<e)return}else c=[(i-a)/u,i];o=[(e-a)/u,e]}else if(h<d){if(c){if(c[0]>=r)return}else c=[n,u*n+a];o=[r,u*r+a]}else{if(c){if(c[0]<n)return}else c=[r,u*r+a];o=[n,u*n+a]}return t[0]=c,t[1]=o,!0}function us(t,n,e,r){for(var i,o=Nw.length;o--;)os(i=Nw[o],t,n,e,r)&&is(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>Cw||Math.abs(i[0][1]-i[1][1])>Cw)||delete Nw[o]}function as(t){return kw[t.index]={site:t,halfedges:[]}}function cs(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function ss(t,n){return n[+(n.left!==t.site)]}function fs(t,n){return n[+(n.left===t.site)]}function ls(){for(var t,n,e,r,i=0,o=kw.length;i<o;++i)if((t=kw[i])&&(r=(n=t.halfedges).length)){var u=new Array(r),a=new Array(r);for(e=0;e<r;++e)u[e]=e,a[e]=cs(t,Nw[n[e]]);for(u.sort(function(t,n){return a[n]-a[t]}),e=0;e<r;++e)a[e]=n[u[e]];for(e=0;e<r;++e)n[e]=a[e]}}function hs(t,n,e,r){var i,o,u,a,c,s,f,l,h,p,d,v,_=kw.length,g=!0;for(i=0;i<_;++i)if(o=kw[i]){for(u=o.site,c=o.halfedges,a=c.length;a--;)Nw[c[a]]||c.splice(a,1);for(a=0,s=c.length;a<s;)p=fs(o,Nw[c[a]]),d=p[0],v=p[1],f=ss(o,Nw[c[++a%s]]),l=f[0],h=f[1],(Math.abs(d-l)>Cw||Math.abs(v-h)>Cw)&&(c.splice(a,0,Nw.push(es(u,p,Math.abs(d-t)<Cw&&r-v>Cw?[t,Math.abs(l-t)<Cw?h:r]:Math.abs(v-r)<Cw&&e-d>Cw?[Math.abs(h-r)<Cw?l:e,r]:Math.abs(d-e)<Cw&&v-n>Cw?[e,Math.abs(l-e)<Cw?h:n]:Math.abs(v-n)<Cw&&d-t>Cw?[Math.abs(h-n)<Cw?l:t,n]:null))-1),++s);s&&(g=!1)}if(g){var y,m,x,b=1/0;for(i=0,g=null;i<_;++i)(o=kw[i])&&(u=o.site,y=u[0]-t,m=u[1]-n,(x=y*y+m*m)<b&&(b=x,g=o));if(g){var w=[t,n],M=[t,r],T=[e,r],k=[e,n];g.halfedges.push(Nw.push(es(u=g.site,w,M))-1,Nw.push(es(u,M,T))-1,Nw.push(es(u,T,k))-1,Nw.push(es(u,k,w))-1)}}for(i=0;i<_;++i)(o=kw[i])&&(o.halfedges.length||delete kw[i])}function ps(){Jc(this),this.x=this.y=this.arc=this.site=this.cy=null}function ds(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var u=i[0],a=i[1],c=r[0]-u,s=r[1]-a,f=o[0]-u,l=o[1]-a,h=2*(c*l-s*f);if(!(h>=-zw)){var p=c*c+s*s,d=f*f+l*l,v=(l*p-s*d)/h,_=(c*d-f*p)/h,g=Ew.pop()||new ps;g.arc=t,g.site=i,g.x=v+u,g.y=(g.cy=_+a)+Math.sqrt(v*v+_*_),t.circle=g;for(var y=null,m=Sw._;m;)if(g.y<m.y||g.y===m.y&&g.x<=m.x){if(!m.L){y=m.P;break}m=m.L}else{if(!m.R){y=m;break}m=m.R}Sw.insert(y,g),y||(Mw=g)}}}}function vs(t){var n=t.circle;n&&(n.P||(Mw=n.N),Sw.remove(n),Ew.push(n),Jc(n),t.circle=null)}function _s(){Jc(this),this.edge=this.site=this.circle=null}function gs(t){var n=Aw.pop()||new _s;return n.site=t,n}function ys(t){vs(t),Tw.remove(t),Aw.push(t),Jc(t)}function ms(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,u=t.N,a=[t];ys(t);for(var c=o;c.circle&&Math.abs(e-c.circle.x)<Cw&&Math.abs(r-c.circle.cy)<Cw;)o=c.P,a.unshift(c),ys(c),c=o;a.unshift(c),vs(c);for(var s=u;s.circle&&Math.abs(e-s.circle.x)<Cw&&Math.abs(r-s.circle.cy)<Cw;)u=s.N,a.push(s),ys(s),s=u;a.push(s),vs(s);var f,l=a.length;for(f=1;f<l;++f)s=a[f],c=a[f-1],rs(s.edge,c.site,s.site,i);c=a[0],s=a[l-1],s.edge=ns(c.site,s.site,null,i),ds(c),ds(s)}function xs(t){for(var n,e,r,i,o=t[0],u=t[1],a=Tw._;a;)if((r=bs(a,u)-o)>Cw)a=a.L;else{if(!((i=o-ws(a,u))>Cw)){r>-Cw?(n=a.P,e=a):i>-Cw?(n=a,e=a.N):n=e=a;break}if(!a.R){n=a;break}a=a.R}as(t);var c=gs(t);if(Tw.insert(n,c),n||e){if(n===e)return vs(n),e=gs(n.site),Tw.insert(c,e),c.edge=e.edge=ns(n.site,c.site),ds(n),void ds(e);if(!e)return void(c.edge=ns(n.site,c.site));vs(n),vs(e);var s=n.site,f=s[0],l=s[1],h=t[0]-f,p=t[1]-l,d=e.site,v=d[0]-f,_=d[1]-l,g=2*(h*_-p*v),y=h*h+p*p,m=v*v+_*_,x=[(_*y-p*m)/g+f,(h*m-v*y)/g+l];rs(e.edge,s,d,x),c.edge=ns(s,t,null,x),e.edge=ns(t,d,null,x),ds(n),ds(e)}}function bs(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var u=t.P;if(!u)return-(1/0);e=u.site;var a=e[0],c=e[1],s=c-n;if(!s)return a;var f=a-r,l=1/o-1/s,h=f/s;return l?(-h+Math.sqrt(h*h-2*l*(f*f/(-2*s)-c+s/2+i-o/2)))/l+r:(r+a)/2}function ws(t,n){var e=t.N;if(e)return bs(e,n);var r=t.site;return r[1]===n?r[0]:1/0}function Ms(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function Ts(t,n){return n[1]-t[1]||n[0]-t[0]}function ks(t,n){var e,r,i,o=t.sort(Ts).pop();for(Nw=[],kw=new Array(t.length),Tw=new Gc,Sw=new Gc;;)if(i=Mw,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(xs(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;ms(i.arc)}if(ls(),n){var u=+n[0][0],a=+n[0][1],c=+n[1][0],s=+n[1][1];us(u,a,c,s),hs(u,a,c,s)}this.edges=Nw,this.cells=kw,Tw=Sw=Nw=kw=null}function Ss(t,n,e){this.target=t,this.type=n,this.transform=e}function Ns(t,n,e){this.k=t,this.x=n,this.y=e}function Es(t){return t.__zoom||Rw}function As(){t.event.stopImmediatePropagation()}function Cs(){return!t.event.button}function zs(){var t,n,e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,t=e.width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function Ps(){return this.__zoom||Rw}var Ls=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},Rs=function(t){return 1===t.length&&(t=n(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}},qs=Rs(Ls),Us=qs.right,Ds=qs.left,Os=function(t,n){null==n&&(n=e);for(var r=0,i=t.length-1,o=t[0],u=new Array(i<0?0:i);r<i;)u[r]=n(o,o=t[++r]);return u},Fs=function(t,n,r){var i,o,u,a,c=t.length,s=n.length,f=new Array(c*s);for(null==r&&(r=e),i=u=0;i<c;++i)for(a=t[i],o=0;o<s;++o,++u)f[u]=r(a,n[o]);return f},Is=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},Ys=function(t){return null===t?NaN:+t},Bs=function(t,n){var e,r,i=t.length,o=0,u=0,a=-1,c=0;if(null==n)for(;++a<i;)isNaN(e=Ys(t[a]))||(r=e-o,o+=r/++c,u+=r*(e-o));else for(;++a<i;)isNaN(e=Ys(n(t[a],a,t)))||(r=e-o,o+=r/++c,u+=r*(e-o));if(c>1)return u/(c-1)},js=function(t,n){var e=Bs(t,n);return e?Math.sqrt(e):e},Hs=function(t,n){var e,r,i,o=-1,u=t.length;if(null==n){for(;++o<u;)if(null!=(r=t[o])&&r>=r){e=i=r;break}for(;++o<u;)null!=(r=t[o])&&(e>r&&(e=r),i<r&&(i=r))}else{for(;++o<u;)if(null!=(r=n(t[o],o,t))&&r>=r){e=i=r;break}for(;++o<u;)null!=(r=n(t[o],o,t))&&(e>r&&(e=r),i<r&&(i=r))}return[e,i]},Xs=Array.prototype,Vs=Xs.slice,$s=Xs.map,Ws=function(t){return function(){return t}},Zs=function(t){return t},Gs=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o},Js=Math.sqrt(50),Qs=Math.sqrt(10),Ks=Math.sqrt(2),tf=function(t,n,e){var i=r(t,n,e);return Gs(Math.ceil(t/i)*i,Math.floor(n/i)*i+i/2,i)},nf=function(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1},ef=function(){function t(t){var i,o,u=t.length,a=new Array(u);for(i=0;i<u;++i)a[i]=n(t[i],i,t);var c=e(a),s=c[0],f=c[1],l=r(a,s,f);Array.isArray(l)||(l=tf(s,f,l));for(var h=l.length;l[0]<=s;)l.shift(),--h;for(;l[h-1]>=f;)l.pop(),--h;var p,d=new Array(h+1);for(i=0;i<=h;++i)p=d[i]=[],p.x0=i>0?l[i-1]:s,p.x1=i<h?l[i]:f;for(i=0;i<u;++i)o=a[i],s<=o&&o<=f&&d[Us(l,o,0,h)].push(t[i]);return d}var n=Zs,e=Hs,r=nf;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:Ws(e),t):n},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:Ws([n[0],n[1]]),t):e},t.thresholds=function(n){return arguments.length?(r="function"==typeof n?n:Ws(Array.isArray(n)?Vs.call(n):n),t):r},t},rf=function(t,n,e){if(null==e&&(e=Ys),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),u=+e(t[o],o,t);return u+(+e(t[o+1],o+1,t)-u)*(i-o)}},of=function(t,n,e){return t=$s.call(t,Ys).sort(Ls),Math.ceil((e-n)/(2*(rf(t,.75)-rf(t,.25))*Math.pow(t.length,-1/3)))},uf=function(t,n,e){return Math.ceil((e-n)/(3.5*js(t)*Math.pow(t.length,-1/3)))},af=function(t,n){var e,r,i=-1,o=t.length;if(null==n){for(;++i<o;)if(null!=(r=t[i])&&r>=r){e=r;break}for(;++i<o;)null!=(r=t[i])&&r>e&&(e=r)}else{for(;++i<o;)if(null!=(r=n(t[i],i,t))&&r>=r){e=r;break}for(;++i<o;)null!=(r=n(t[i],i,t))&&r>e&&(e=r)}return e},cf=function(t,n){var e,r=0,i=t.length,o=-1,u=i;if(null==n)for(;++o<i;)isNaN(e=Ys(t[o]))?--u:r+=e;else for(;++o<i;)isNaN(e=Ys(n(t[o],o,t)))?--u:r+=e;if(u)return r/u},sf=function(t,n){var e,r=[],i=t.length,o=-1;if(null==n)for(;++o<i;)isNaN(e=Ys(t[o]))||r.push(e);else for(;++o<i;)isNaN(e=Ys(n(t[o],o,t)))||r.push(e);return rf(r.sort(Ls),.5)},ff=function(t){for(var n,e,r,i=t.length,o=-1,u=0;++o<i;)u+=t[o].length;for(e=new Array(u);--i>=0;)for(r=t[i],n=r.length;--n>=0;)e[--u]=r[n];return e},lf=function(t,n){var e,r,i=-1,o=t.length;if(null==n){for(;++i<o;)if(null!=(r=t[i])&&r>=r){e=r;break}for(;++i<o;)null!=(r=t[i])&&e>r&&(e=r)}else{for(;++i<o;)if(null!=(r=n(t[i],i,t))&&r>=r){e=r;break}for(;++i<o;)null!=(r=n(t[i],i,t))&&e>r&&(e=r)}return e},hf=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},pf=function(t,n){if(e=t.length){var e,r,i=0,o=0,u=t[o];for(n||(n=Ls);++i<e;)(n(r=t[i],u)<0||0!==n(u,u))&&(u=r,o=i);return 0===n(u,u)?o:void 0}},df=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},vf=function(t,n){var e,r=0,i=t.length,o=-1;if(null==n)for(;++o<i;)(e=+t[o])&&(r+=e);else for(;++o<i;)(e=+n(t[o],o,t))&&(r+=e);return r},_f=function(t){if(!(o=t.length))return[];for(var n=-1,e=lf(t,i),r=new Array(e);++n<e;)for(var o,u=-1,a=r[n]=new Array(o);++u<o;)a[u]=t[u][n];return r},gf=function(){return _f(arguments)},yf=Array.prototype.slice,mf=function(t){return t},xf=1,bf=2,wf=3,Mf=4,Tf=1e-6,kf={value:function(){}};v.prototype=d.prototype={constructor:v,on:function(t,n){var e,r=this._,i=_(t+"",r),o=-1,u=i.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<u;)if(e=(t=i[o]).type)r[e]=y(r[e],t.name,n);else if(null==n)for(e in r)r[e]=y(r[e],t.name,null);return this}for(;++o<u;)if((e=(t=i[o]).type)&&(e=g(r[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new v(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],o=0,e=r.length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var Sf="http://www.w3.org/1999/xhtml",Nf={svg:"http://www.w3.org/2000/svg",xhtml:Sf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Ef=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),Nf.hasOwnProperty(n)?{space:Nf[n],local:t}:t},Af=function(t){var n=Ef(t);return(n.local?x:m)(n)},Cf=0;w.prototype=b.prototype={constructor:w,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var zf=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var Pf=document.documentElement;if(!Pf.matches){var Lf=Pf.webkitMatchesSelector||Pf.msMatchesSelector||Pf.mozMatchesSelector||Pf.oMatchesSelector;zf=function(t){return function(){return Lf.call(this,t)}}}}var Rf=zf,qf={};if(t.event=null,"undefined"!=typeof document){"onmouseenter"in document.documentElement||(qf={mouseenter:"mouseover",mouseleave:"mouseout"})}var Uf=function(t,n,e){var r,i,o=k(t+""),u=o.length;{if(!(arguments.length<2)){for(a=n?N:S,null==e&&(e=!1),r=0;r<u;++r)this.each(a(o[r],n,e));return this}var a=this.node().__on;if(a)for(var c,s=0,f=a.length;s<f;++s)for(r=0,c=a[s];r<u;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value}},Df=function(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e},Of=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]},Ff=function(t){var n=Df();return n.changedTouches&&(n=n.changedTouches[0]),Of(t,n)},If=function(t){return null==t?A:function(){return this.querySelector(t)}},Yf=function(t){"function"!=typeof t&&(t=If(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,a=n[i],c=a.length,s=r[i]=new Array(c),f=0;f<c;++f)(o=a[f])&&(u=t.call(o,o.__data__,f,a))&&("__data__"in o&&(u.__data__=o.__data__),s[f]=u);return new dt(r,this._parents)},Bf=function(t){return null==t?C:function(){return this.querySelectorAll(t)}},jf=function(t){"function"!=typeof t&&(t=Bf(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,a=n[o],c=a.length,s=0;s<c;++s)(u=a[s])&&(r.push(t.call(u,u.__data__,s,a)),i.push(u));return new dt(r,i)},Hf=function(t){"function"!=typeof t&&(t=Rf(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new dt(r,this._parents)},Xf=function(t){return new Array(t.length)},Vf=function(){return new dt(this._enter||this._groups.map(Xf),this._parents)};z.prototype={constructor:z,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var $f=function(t){return function(){return t}},Wf="$",Zf=function(t,n){if(!t)return p=new Array(this.size()),s=-1,this.each(function(t){p[++s]=t}),p;var e=n?L:P,r=this._parents,i=this._groups;"function"!=typeof t&&(t=$f(t));for(var o=i.length,u=new Array(o),a=new Array(o),c=new Array(o),s=0;s<o;++s){var f=r[s],l=i[s],h=l.length,p=t.call(f,f&&f.__data__,s,r),d=p.length,v=a[s]=new Array(d),_=u[s]=new Array(d);e(f,l,v,_,c[s]=new Array(h),p,n);for(var g,y,m=0,x=0;m<d;++m)if(g=v[m]){for(m>=x&&(x=m+1);!(y=_[x])&&++x<d;);g._next=y||null}}return u=new dt(u,r),u._enter=a,u._exit=c,u},Gf=function(){return new dt(this._exit||this._groups.map(Xf),this._parents)},Jf=function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],f=e[a],l=s.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=s[p]||f[p])&&(h[p]=c);for(;a<r;++a)u[a]=n[a];return new dt(u,this._parents)},Qf=function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&u!==r.nextSibling&&u.parentNode.insertBefore(r,u),u=r);return this},Kf=function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=R);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],c=a.length,s=i[o]=new Array(c),f=0;f<c;++f)(u=a[f])&&(s[f]=u);s.sort(n)}return new dt(i,this._parents).order()},tl=function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nl=function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},el=function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},rl=function(){var t=0;return this.each(function(){++t}),t},il=function(){return!this.node()},ol=function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},ul=function(t,n){var e=Ef(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?U:q:"function"==typeof n?e.local?I:F:e.local?O:D)(e,n))},al=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView},cl=function(t,n,e){var r;return arguments.length>1?this.each((null==n?Y:"function"==typeof n?j:B)(t,n,null==e?"":e)):al(r=this.node()).getComputedStyle(r,null).getPropertyValue(t)},sl=function(t,n){return arguments.length>1?this.each((null==n?H:"function"==typeof n?V:X)(t,n)):this.node()[t]};Z.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var fl=function(t,n){var e=$(t+"");if(arguments.length<2){for(var r=W(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?tt:n?Q:K)(e,n))},ll=function(t){return arguments.length?this.each(null==t?nt:("function"==typeof t?rt:et)(t)):this.node().textContent},hl=function(t){return arguments.length?this.each(null==t?it:("function"==typeof t?ut:ot)(t)):this.node().innerHTML},pl=function(){return this.each(at)},dl=function(){return this.each(ct)},vl=function(t){var n="function"==typeof t?t:Af(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},_l=function(t,n){var e="function"==typeof t?t:Af(t),r=null==n?st:"function"==typeof n?n:If(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},gl=function(){return this.each(ft)},yl=function(t){return arguments.length?this.property("__data__",t):this.node().__data__},ml=function(t,n){return this.each(("function"==typeof n?pt:ht)(t,n))},xl=[null];dt.prototype=vt.prototype={constructor:dt,select:Yf,selectAll:jf,filter:Hf,data:Zf,enter:Vf,exit:Gf,merge:Jf,order:Qf,sort:Kf,call:tl,nodes:nl,node:el,size:rl,empty:il,each:ol,attr:ul,style:cl,property:sl,classed:fl,text:ll,html:hl,raise:pl,lower:dl,append:vl,insert:_l,remove:gl,datum:yl,on:Uf,dispatch:ml};var bl=function(t){return"string"==typeof t?new dt([[document.querySelector(t)]],[document.documentElement]):new dt([[t]],xl)},wl=function(t){return"string"==typeof t?new dt([document.querySelectorAll(t)],[document.documentElement]):new dt([null==t?[]:t],xl)},Ml=function(t,n,e){arguments.length<3&&(e=n,n=Df().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return Of(t,r);return null},Tl=function(t,n){null==n&&(n=Df().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=Of(t,n[e]);return i},kl=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},Sl=function(t){var n=t.document.documentElement,e=bl(t).on("dragstart.drag",kl,!0);"onselectstart"in n?e.on("selectstart.drag",kl,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")},Nl=function(t){return function(){return t}};yt.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var El=function(){function n(t){t.on("mousedown.drag",e).on("touchstart.drag",o).on("touchmove.drag",u).on("touchend.drag touchcancel.drag",a).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function e(){if(!f&&l.apply(this,arguments)){var n=c("mouse",h.apply(this,arguments),Ff,this,arguments);n&&(bl(t.event.view).on("mousemove.drag",r,!0).on("mouseup.drag",i,!0),Sl(t.event.view),_t(),s=!1,n("start"))}}function r(){kl(),s=!0,v.mouse("drag")}function i(){bl(t.event.view).on("mousemove.drag mouseup.drag",null),gt(t.event.view,s),kl(),v.mouse("end")}function o(){if(l.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=h.apply(this,arguments),o=r.length;for(n=0;n<o;++n)(e=c(r[n].identifier,i,Ml,this,arguments))&&(_t(),e("start"))}}function u(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=v[r[n].identifier])&&(kl(),e("drag"))}function a(){
var n,e,r=t.event.changedTouches,i=r.length;for(f&&clearTimeout(f),f=setTimeout(function(){f=null},500),n=0;n<i;++n)(e=v[r[n].identifier])&&(_t(),e("end"))}function c(e,r,i,o,u){var a,c,s,f=i(r,e),l=_.copy();if(E(new yt(n,"beforestart",a,e,g,f[0],f[1],0,0,l),function(){return null!=(t.event.subject=a=p.apply(o,u))&&(c=a.x-f[0]||0,s=a.y-f[1]||0,!0)}))return function t(h){var p,d=f;switch(h){case"start":v[e]=t,p=g++;break;case"end":delete v[e],--g;case"drag":f=i(r,e),p=g}E(new yt(n,h,a,e,p,f[0]+c,f[1]+s,f[0]-d[0],f[1]-d[1],l),l.apply,l,[h,o,u])}}var s,f,l=mt,h=xt,p=bt,v={},_=d("start","drag","end"),g=0;return n.filter=function(t){return arguments.length?(l="function"==typeof t?t:Nl(!!t),n):l},n.container=function(t){return arguments.length?(h="function"==typeof t?t:Nl(t),n):h},n.subject=function(t){return arguments.length?(p="function"==typeof t?t:Nl(t),n):p},n.on=function(){var t=_.on.apply(_,arguments);return t===_?n:t},n},Al=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t},Cl="\\s*([+-]?\\d+)\\s*",zl="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Pl="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ll=/^#([0-9a-f]{3})$/,Rl=/^#([0-9a-f]{6})$/,ql=new RegExp("^rgb\\("+[Cl,Cl,Cl]+"\\)$"),Ul=new RegExp("^rgb\\("+[Pl,Pl,Pl]+"\\)$"),Dl=new RegExp("^rgba\\("+[Cl,Cl,Cl,zl]+"\\)$"),Ol=new RegExp("^rgba\\("+[Pl,Pl,Pl,zl]+"\\)$"),Fl=new RegExp("^hsl\\("+[zl,Pl,Pl]+"\\)$"),Il=new RegExp("^hsla\\("+[zl,Pl,Pl,zl]+"\\)$"),Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Al(Mt,Tt,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),Al(At,Et,wt(Mt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new At(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new At(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(1===t?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),Al(Lt,Pt,wt(Mt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Lt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Lt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new At(Rt(t>=240?t-240:t+120,i,r),Rt(t,i,r),Rt(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var Bl=Math.PI/180,jl=180/Math.PI,Hl=.95047,Xl=1,Vl=1.08883,$l=4/29,Wl=6/29,Zl=3*Wl*Wl,Gl=Wl*Wl*Wl;Al(Dt,Ut,wt(Mt,{brighter:function(t){return new Dt(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Dt(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=Xl*Ft(t),n=Hl*Ft(n),e=Vl*Ft(e),new At(It(3.2404542*n-1.5371385*t-.4985314*e),It(-.969266*n+1.8760108*t+.041556*e),It(.0556434*n-.2040259*t+1.0572252*e),this.opacity)}})),Al(Ht,jt,wt(Mt,{brighter:function(t){return new Ht(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Ht(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return qt(this).rgb()}}));var Jl=-.14861,Ql=1.78277,Kl=-.29227,th=-.90649,nh=1.97294,eh=nh*th,rh=nh*Ql,ih=Ql*Kl-th*Jl;Al($t,Vt,wt(Mt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new $t(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new $t(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*Bl,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new At(255*(n+e*(Jl*r+Ql*i)),255*(n+e*(Kl*r+th*i)),255*(n+e*(nh*r)),this.opacity)}}));var oh,uh,ah,ch,sh,fh,lh=function(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1];return Wt((e-r/n)*n,r>0?t[r-1]:2*i-o,i,o,r<n-1?t[r+2]:2*o-i)}},hh=function(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n);return Wt((e-r/n)*n,t[(r+n-1)%n],t[r%n],t[(r+1)%n],t[(r+2)%n])}},ph=function(t){return function(){return t}},dh=function t(n){function e(t,n){var e=r((t=Et(t)).r,(n=Et(n)).r),i=r(t.g,n.g),o=r(t.b,n.b),u=Kt(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=i(n),t.b=o(n),t.opacity=u(n),t+""}}var r=Qt(n);return e.gamma=t,e}(1),vh=tn(lh),_h=tn(hh),gh=function(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(r),u=new Array(r);for(e=0;e<i;++e)o[e]=Th(t[e],n[e]);for(;e<r;++e)u[e]=n[e];return function(t){for(e=0;e<i;++e)u[e]=o[e](t);return u}},yh=function(t,n){var e=new Date;return t=+t,n-=t,function(r){return e.setTime(t+n*r),e}},mh=function(t,n){return t=+t,n-=t,function(e){return t+n*e}},xh=function(t,n){var e,r={},i={};null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={});for(e in n)e in t?r[e]=Th(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}},bh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,wh=new RegExp(bh.source,"g"),Mh=function(t,n){var e,r,i,o=bh.lastIndex=wh.lastIndex=0,u=-1,a=[],c=[];for(t+="",n+="";(e=bh.exec(t))&&(r=wh.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),a[u]?a[u]+=i:a[++u]=i),(e=e[0])===(r=r[0])?a[u]?a[u]+=r:a[++u]=r:(a[++u]=null,c.push({i:u,x:mh(e,r)})),o=wh.lastIndex;return o<n.length&&(i=n.slice(o),a[u]?a[u]+=i:a[++u]=i),a.length<2?c[0]?en(c[0].x):nn(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)a[(e=c[r]).i]=e.x(t);return a.join("")})},Th=function(t,n){var e,r=typeof n;return null==n||"boolean"===r?ph(n):("number"===r?mh:"string"===r?(e=Tt(n))?(n=e,dh):Mh:n instanceof Tt?dh:n instanceof Date?yh:Array.isArray(n)?gh:isNaN(n)?xh:mh)(t,n)},kh=function(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e)}},Sh=180/Math.PI,Nh={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},Eh=function(t,n,e,r,i,o){var u,a,c;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,c/=a),t*r<n*e&&(t=-t,n=-n,c=-c,u=-u),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Sh,skewX:Math.atan(c)*Sh,scaleX:u,scaleY:a}},Ah=un(rn,"px, ","px)","deg)"),Ch=un(on,", ",")",")"),zh=Math.SQRT2,Ph=function(t,n){var e,r,i=t[0],o=t[1],u=t[2],a=n[0],c=n[1],s=n[2],f=a-i,l=c-o,h=f*f+l*l;if(h<1e-12)r=Math.log(s/u)/zh,e=function(t){return[i+t*f,o+t*l,u*Math.exp(zh*t*r)]};else{var p=Math.sqrt(h),d=(s*s-u*u+4*h)/(2*u*2*p),v=(s*s-u*u-4*h)/(2*s*2*p),_=Math.log(Math.sqrt(d*d+1)-d);r=(Math.log(Math.sqrt(v*v+1)-v)-_)/zh,e=function(t){var n=t*r,e=an(_),a=u/(2*p)*(e*sn(zh*n+_)-cn(_));return[i+a*f,o+a*l,u*e/an(zh*n+_)]}}return e.duration=1e3*r,e},Lh=fn(Jt),Rh=fn(Kt),qh=hn(Jt),Uh=hn(Kt),Dh=pn(Jt),Oh=pn(Kt),Fh=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},Ih=0,Yh=0,Bh=0,jh=1e3,Hh=0,Xh=0,Vh=0,$h="object"==typeof performance&&performance.now?performance:Date,Wh="function"==typeof requestAnimationFrame?requestAnimationFrame:function(t){setTimeout(t,17)};_n.prototype=gn.prototype={constructor:_n,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?dn():+e)+(null==n?0:+n),this._next||fh===this||(fh?fh._next=this:sh=this,fh=this),this._call=t,this._time=e,wn()},stop:function(){this._call&&(this._call=null,this._time=1/0,wn())}};var Zh=function(t,n,e){var r=new _n;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r},Gh=function(t,n,e){var r=new _n,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?dn():+e,r.restart(function o(u){u+=i,r.restart(o,i+=n,e),t(u)},n,e),r)},Jh=d("start","end","interrupt"),Qh=[],Kh=0,tp=1,np=2,ep=3,rp=4,ip=5,op=6,up=function(t,n,e,r,i,o){var u=t.__transition;if(u){if(e in u)return}else t.__transition={};Sn(t,e,{name:n,index:r,group:i,on:Jh,tween:Qh,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Kh})},ap=function(t,n){var e,r,i,o=t.__transition,u=!0;if(o){n=null==n?null:n+"";for(i in o)(e=o[i]).name===n?(r=e.state>np&&e.state<ip,e.state=op,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[i]):u=!1;u&&delete t.__transition}},cp=function(t){return this.each(function(){ap(this,t)})},sp=function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=kn(this.node(),e).tween,o=0,u=i.length;o<u;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?Nn:En)(e,t,n))},fp=function(t,n){var e;return("number"==typeof n?mh:n instanceof Tt?dh:(e=Tt(n))?(n=e,dh):Mh)(t,n)},lp=function(t,n){var e=Ef(t),r="transform"===e?Ch:fp;return this.attrTween(t,"function"==typeof n?(e.local?qn:Rn)(e,r,An(this,"attr."+t,n)):null==n?(e.local?zn:Cn)(e):(e.local?Ln:Pn)(e,r,n+""))},hp=function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=Ef(t);return this.tween(e,(r.local?Un:Dn)(r,n))},pp=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?On:Fn)(n,t)):kn(this.node(),n).delay},dp=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?In:Yn)(n,t)):kn(this.node(),n).duration},vp=function(t){var n=this._id;return arguments.length?this.each(Bn(n,t)):kn(this.node(),n).ease},_p=function(t){"function"!=typeof t&&(t=Rf(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new Kn(r,this._parents,this._name,this._id)},gp=function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],f=e[a],l=s.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=s[p]||f[p])&&(h[p]=c);for(;a<r;++a)u[a]=n[a];return new Kn(u,this._parents,this._name,this._id)},yp=function(t,n){var e=this._id;return arguments.length<2?kn(this.node(),e).on.on(t):this.each(Hn(e,t,n))},mp=function(){return this.on("end.remove",Xn(this._id))},xp=function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=If(t));for(var r=this._groups,i=r.length,o=new Array(i),u=0;u<i;++u)for(var a,c,s=r[u],f=s.length,l=o[u]=new Array(f),h=0;h<f;++h)(a=s[h])&&(c=t.call(a,a.__data__,h,s))&&("__data__"in a&&(c.__data__=a.__data__),l[h]=c,up(l[h],n,e,h,l,kn(a,e)));return new Kn(o,this._parents,n,e)},bp=function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Bf(t));for(var r=this._groups,i=r.length,o=[],u=[],a=0;a<i;++a)for(var c,s=r[a],f=s.length,l=0;l<f;++l)if(c=s[l]){for(var h,p=t.call(c,c.__data__,l,s),d=kn(c,e),v=0,_=p.length;v<_;++v)(h=p[v])&&up(h,n,e,v,p,d);o.push(p),u.push(c)}return new Kn(o,u,n,e)},wp=vt.prototype.constructor,Mp=function(){return new wp(this._groups,this._parents)},Tp=function(t,n,e){var r="transform"==(t+="")?Ah:fp;return null==n?this.styleTween(t,Vn(t,r)).on("end.style."+t,$n(t)):this.styleTween(t,"function"==typeof n?Zn(t,r,An(this,"style."+t,n)):Wn(t,r,n+""),e)},kp=function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,Gn(t,n,null==e?"":e))},Sp=function(t){return this.tween("text","function"==typeof t?Qn(An(this,"text",t)):Jn(null==t?"":t+""))},Np=function(){for(var t=this._name,n=this._id,e=ne(),r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)if(u=a[s]){var f=kn(u,n);up(u,t,e,s,a,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new Kn(r,this._parents,t,e)},Ep=0,Ap=vt.prototype;Kn.prototype=te.prototype={constructor:Kn,select:xp,selectAll:bp,filter:_p,merge:gp,selection:Mp,transition:Np,call:Ap.call,nodes:Ap.nodes,node:Ap.node,size:Ap.size,empty:Ap.empty,each:Ap.each,on:yp,attr:lp,attrTween:hp,style:Tp,styleTween:kp,text:Sp,remove:mp,tween:sp,delay:pp,duration:dp,ease:vp};var Cp=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),zp=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),Pp=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),Lp=Math.PI,Rp=Lp/2,qp=4/11,Up=6/11,Dp=8/11,Op=.75,Fp=9/11,Ip=10/11,Yp=.9375,Bp=21/22,jp=63/64,Hp=1/qp/qp,Xp=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),Vp=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),$p=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),Wp=2*Math.PI,Zp=function t(n,e){function r(t){return n*Math.pow(2,10*--t)*Math.sin((i-t)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=Wp);return r.amplitude=function(n){return t(n,e*Wp)},r.period=function(e){return t(n,e)},r}(1,.3),Gp=function t(n,e){function r(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+i)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=Wp);return r.amplitude=function(n){return t(n,e*Wp)},r.period=function(e){return t(n,e)},r}(1,.3),Jp=function t(n,e){function r(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((i-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((i+t)/e))/2}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=Wp);return r.amplitude=function(n){return t(n,e*Wp)},r.period=function(e){return t(n,e)},r}(1,.3),Qp={time:null,delay:0,duration:250,ease:ce},Kp=function(t){var n,e;t instanceof Kn?(n=t._id,t=t._name):(n=ne(),(e=Qp).time=dn(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)(u=a[s])&&up(u,t,n,s,a,e||be(u,n));return new Kn(r,this._parents,t,n)};vt.prototype.interrupt=cp,vt.prototype.transition=Kp;var td=[null],nd=function(t,n){var e,r,i=t.__transition;if(i){n=null==n?null:n+"";for(r in i)if((e=i[r]).state>tp&&e.name===n)return new Kn([[t]],td,n,+r)}return null},ed=function(t){return function(){return t}},rd=function(t,n,e){this.target=t,this.type=n,this.selection=e},id=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},od={name:"drag"},ud={name:"space"},ad={name:"handle"},cd={name:"center"},sd={name:"x",handles:["e","w"].map(Me),input:function(t,n){return t&&[[t[0],n[0][1]],[t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},fd={name:"y",handles:["n","s"].map(Me),input:function(t,n){return t&&[[n[0][0],t[0]],[n[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},ld={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(Me),input:function(t){return t},output:function(t){return t}},hd={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},pd={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},dd={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},vd={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},_d={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1},gd=function(){return ze(ld)},yd=Math.cos,md=Math.sin,xd=Math.PI,bd=xd/2,wd=2*xd,Md=Math.max,Td=function(){function t(t){var o,u,a,c,s,f,l=t.length,h=[],p=Gs(l),d=[],v=[],_=v.groups=new Array(l),g=new Array(l*l);for(o=0,s=-1;++s<l;){for(u=0,f=-1;++f<l;)u+=t[s][f];h.push(u),d.push(Gs(l)),o+=u}for(e&&p.sort(function(t,n){return e(h[t],h[n])}),r&&d.forEach(function(n,e){n.sort(function(n,i){return r(t[e][n],t[e][i])})}),o=Md(0,wd-n*l)/o,c=o?n:wd/l,u=0,s=-1;++s<l;){for(a=u,f=-1;++f<l;){var y=p[s],m=d[y][f],x=t[y][m],b=u,w=u+=x*o;g[m*l+y]={index:y,subindex:m,startAngle:b,endAngle:w,value:x}}_[y]={index:y,startAngle:a,endAngle:u,value:h[y]},u+=c}for(s=-1;++s<l;)for(f=s-1;++f<l;){var M=g[f*l+s],T=g[s*l+f];(M.value||T.value)&&v.push(M.value<T.value?{source:T,target:M}:{source:M,target:T})}return i?v.sort(i):v}var n=0,e=null,r=null,i=null;return t.padAngle=function(e){return arguments.length?(n=Md(0,e),t):n},t.sortGroups=function(n){return arguments.length?(e=n,t):e},t.sortSubgroups=function(n){return arguments.length?(r=n,t):r},t.sortChords=function(n){return arguments.length?(null==n?i=null:(i=Pe(n))._=n,t):i&&i._},t},kd=Array.prototype.slice,Sd=function(t){return function(){return t}},Nd=Math.PI,Ed=2*Nd,Ad=Ed-1e-6;Le.prototype=Re.prototype={constructor:Le,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,u=this._y1,a=e-t,c=r-n,s=o-t,f=u-n,l=s*s+f*f;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(f*a-c*s)>1e-6&&i){var h=e-o,p=r-u,d=a*a+c*c,v=h*h+p*p,_=Math.sqrt(d),g=Math.sqrt(l),y=i*Math.tan((Nd-Math.acos((d+l-v)/(2*_*g)))/2),m=y/g,x=y/_;Math.abs(m-1)>1e-6&&(this._+="L"+(t+m*s)+","+(n+m*f)),this._+="A"+i+","+i+",0,0,"+ +(f*h>s*p)+","+(this._x1=t+x*a)+","+(this._y1=n+x*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n,e=+e;var u=e*Math.cos(r),a=e*Math.sin(r),c=t+u,s=n+a,f=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+s:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-s)>1e-6)&&(this._+="L"+c+","+s),e&&(l<0&&(l=l%Ed+Ed),l>Ad?this._+="A"+e+","+e+",0,1,"+f+","+(t-u)+","+(n-a)+"A"+e+","+e+",0,1,"+f+","+(this._x1=c)+","+(this._y1=s):l>1e-6&&(this._+="A"+e+","+e+",0,"+ +(l>=Nd)+","+f+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};var Cd=function(){function t(){var t,a=kd.call(arguments),c=n.apply(this,a),s=e.apply(this,a),f=+r.apply(this,(a[0]=c,a)),l=i.apply(this,a)-bd,h=o.apply(this,a)-bd,p=f*yd(l),d=f*md(l),v=+r.apply(this,(a[0]=s,a)),_=i.apply(this,a)-bd,g=o.apply(this,a)-bd;if(u||(u=t=Re()),u.moveTo(p,d),u.arc(0,0,f,l,h),l===_&&h===g||(u.quadraticCurveTo(0,0,v*yd(_),v*md(_)),u.arc(0,0,v,_,g)),u.quadraticCurveTo(0,0,p,d),u.closePath(),t)return u=null,t+""||null}var n=qe,e=Ue,r=De,i=Oe,o=Fe,u=null;return t.radius=function(n){return arguments.length?(r="function"==typeof n?n:Sd(+n),t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:Sd(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:Sd(+n),t):o},t.source=function(e){return arguments.length?(n=e,t):n},t.target=function(n){return arguments.length?(e=n,t):e},t.context=function(n){return arguments.length?(u=null==n?null:n,t):u},t};Ie.prototype=Ye.prototype={constructor:Ie,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var zd=function(){function t(n,i,u,a){if(i>=o.length)return null!=r?r(n):null!=e?n.sort(e):n;for(var c,s,f,l=-1,h=n.length,p=o[i++],d=Ye(),v=u();++l<h;)(f=d.get(c=p(s=n[l])+""))?f.push(s):d.set(c,[s]);return d.each(function(n,e){a(v,e,t(n,i,u,a))}),v}function n(t,e){if(++e>o.length)return t;var i,a=u[e-1];return null!=r&&e>=o.length?i=t.entries():(i=[],t.each(function(t,r){i.push({key:r,values:n(t,e)})})),null!=a?i.sort(function(t,n){return a(t.key,n.key)}):i}var e,r,i,o=[],u=[];return i={object:function(n){return t(n,0,Be,je)},map:function(n){return t(n,0,He,Xe)},entries:function(e){return n(t(e,0,He,Xe),0)},key:function(t){return o.push(t),i},sortKeys:function(t){return u[o.length-1]=t,i},sortValues:function(t){return e=t,i},rollup:function(t){return r=t,i}}},Pd=Ye.prototype;Ve.prototype=$e.prototype={constructor:Ve,has:Pd.has,add:function(t){return t+="",this["$"+t]=t,this},remove:Pd.remove,clear:Pd.clear,values:Pd.keys,size:Pd.size,empty:Pd.empty,each:Pd.each};var Ld=function(t){var n=[];for(var e in t)n.push(e);return n},Rd=function(t){var n=[];for(var e in t)n.push(t[e]);return n},qd=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},Ud=function(t){function n(t,n){var r,i,o=e(t,function(t,e){if(r)return r(t,e-1);i=t,r=n?Ze(t,n):We(t)});return o.columns=i,o}function e(t,n){function e(){if(f>=s)return u;if(i)return i=!1,o;var n,e=f;if(34===t.charCodeAt(e)){for(var r=e;r++<s;)if(34===t.charCodeAt(r)){if(34!==t.charCodeAt(r+1))break;++r}return f=r+2,n=t.charCodeAt(r+1),13===n?(i=!0,10===t.charCodeAt(r+2)&&++f):10===n&&(i=!0),t.slice(e+1,r).replace(/""/g,'"')}for(;f<s;){var a=1;if(10===(n=t.charCodeAt(f++)))i=!0;else if(13===n)i=!0,10===t.charCodeAt(f)&&(++f,++a);else if(n!==c)continue;return t.slice(e,f-a)}return t.slice(e)}for(var r,i,o={},u={},a=[],s=t.length,f=0,l=0;(r=e())!==u;){for(var h=[];r!==o&&r!==u;)h.push(r),r=e();n&&null==(h=n(h,l++))||a.push(h)}return a}function r(n,e){return null==e&&(e=Ge(n)),[e.map(u).join(t)].concat(n.map(function(n){return e.map(function(t){return u(n[t])}).join(t)})).join("\n")}function i(t){return t.map(o).join("\n")}function o(n){return n.map(u).join(t)}function u(t){return null==t?"":a.test(t+="")?'"'+t.replace(/\"/g,'""')+'"':t}var a=new RegExp('["'+t+"\n\r]"),c=t.charCodeAt(0);return{parse:n,parseRows:e,format:r,formatRows:i}},Dd=Ud(","),Od=Dd.parse,Fd=Dd.parseRows,Id=Dd.format,Yd=Dd.formatRows,Bd=Ud("\t"),jd=Bd.parse,Hd=Bd.parseRows,Xd=Bd.format,Vd=Bd.formatRows,$d=function(t,n){function e(){var e,i,o=r.length,u=0,a=0;for(e=0;e<o;++e)i=r[e],u+=i.x,a+=i.y;for(u=u/o-t,a=a/o-n,e=0;e<o;++e)i=r[e],i.x-=u,i.y-=a}var r;return null==t&&(t=0),null==n&&(n=0),e.initialize=function(t){r=t},e.x=function(n){return arguments.length?(t=+n,e):t},e.y=function(t){return arguments.length?(n=+t,e):n},e},Wd=function(t){return function(){return t}},Zd=function(){return 1e-6*(Math.random()-.5)},Gd=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return Je(this.cover(n,e),n,e,t)},Jd=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{if(!(e>t||t>i||r>n||n>o))return this;var u,a,c=i-e,s=this._root;switch(a=(n<(r+o)/2)<<1|t<(e+i)/2){case 0:do{u=new Array(4),u[a]=s,s=u}while(c*=2,i=e+c,o=r+c,t>i||n>o);break;case 1:do{u=new Array(4),u[a]=s,s=u}while(c*=2,e=i-c,o=r+c,e>t||n>o);break;case 2:do{u=new Array(4),u[a]=s,s=u}while(c*=2,i=e+c,r=o-c,t>i||r>n);break;case 3:do{u=new Array(4),u[a]=s,s=u}while(c*=2,e=i-c,r=o-c,e>t||r>n)}this._root&&this._root.length&&(this._root=s)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},Qd=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)}),t},Kd=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},tv=function(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i},nv=function(t,n,e){var r,i,o,u,a,c,s,f=this._x0,l=this._y0,h=this._x1,p=this._y1,d=[],v=this._root;for(v&&d.push(new tv(v,f,l,h,p)),null==e?e=1/0:(f=t-e,l=n-e,h=t+e,p=n+e,e*=e);c=d.pop();)if(!(!(v=c.node)||(i=c.x0)>h||(o=c.y0)>p||(u=c.x1)<f||(a=c.y1)<l))if(v.length){var _=(i+u)/2,g=(o+a)/2;d.push(new tv(v[3],_,g,u,a),new tv(v[2],i,g,_,a),new tv(v[1],_,o,u,g),new tv(v[0],i,o,_,g)),(s=(n>=g)<<1|t>=_)&&(c=d[d.length-1],d[d.length-1]=d[d.length-1-s],d[d.length-1-s]=c)}else{var y=t-+this._x.call(null,v.data),m=n-+this._y.call(null,v.data),x=y*y+m*m;if(x<e){var b=Math.sqrt(e=x);f=t-b,l=n-b,h=t+b,p=n+b,r=v.data}}return r},ev=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(u=+this._y.call(null,t)))return this;var n,e,r,i,o,u,a,c,s,f,l,h,p=this._root,d=this._x0,v=this._y0,_=this._x1,g=this._y1;if(!p)return this;if(p.length)for(;;){if((s=o>=(a=(d+_)/2))?d=a:_=a,(f=u>=(c=(v+g)/2))?v=c:g=c,n=p,!(p=p[l=f<<1|s]))return this;if(!p.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;p.data!==t;)if(r=p,!(p=p.next))return this;return(i=p.next)&&delete p.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(p=n[0]||n[1]||n[2]||n[3])&&p===(n[3]||n[2]||n[1]||n[0])&&!p.length&&(e?e[h]=p:this._root=p),this):(this._root=i,this)},rv=function(){return this._root},iv=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t}while(n=n.next)}),t},ov=function(t){var n,e,r,i,o,u,a=[],c=this._root;for(c&&a.push(new tv(c,this._x0,this._y0,this._x1,this._y1));n=a.pop();)if(!t(c=n.node,r=n.x0,i=n.y0,o=n.x1,u=n.y1)&&c.length){var s=(r+o)/2,f=(i+u)/2;(e=c[3])&&a.push(new tv(e,s,f,o,u)),(e=c[2])&&a.push(new tv(e,r,f,s,u)),(e=c[1])&&a.push(new tv(e,s,i,o,f)),(e=c[0])&&a.push(new tv(e,r,i,s,f))}return this},uv=function(t){var n,e=[],r=[];for(this._root&&e.push(new tv(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,u=n.x0,a=n.y0,c=n.x1,s=n.y1,f=(u+c)/2,l=(a+s)/2;(o=i[0])&&e.push(new tv(o,u,a,f,l)),(o=i[1])&&e.push(new tv(o,f,a,c,l)),(o=i[2])&&e.push(new tv(o,u,l,f,s)),(o=i[3])&&e.push(new tv(o,f,l,c,s))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},av=function(t){return arguments.length?(this._x=t,this):this._x},cv=function(t){return arguments.length?(this._y=t,this):this._y},sv=er.prototype=rr.prototype;sv.copy=function(){var t,n,e=new rr(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=ir(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=ir(n));return e},sv.add=Gd,sv.addAll=Qe,sv.cover=Jd,sv.data=Qd,sv.extent=Kd,sv.find=nv,sv.remove=ev,sv.removeAll=Ke,sv.root=rv,sv.size=iv,sv.visit=ov,sv.visitAfter=uv,sv.x=av,sv.y=cv;var fv,lv=function(t){function n(){function t(t,n,e,r,i){var o=t.data,a=t.r,p=l+a;{if(!o)return n>s+p||r<s-p||e>f+p||i<f-p;if(o.index>c.index){var d=s-o.x-o.vx,v=f-o.y-o.vy,_=d*d+v*v;_<p*p&&(0===d&&(d=Zd(),_+=d*d),0===v&&(v=Zd(),_+=v*v),_=(p-(_=Math.sqrt(_)))/_*u,c.vx+=(d*=_)*(p=(a*=a)/(h+a)),c.vy+=(v*=_)*p,o.vx-=d*(p=1-p),o.vy-=v*p)}}}for(var n,r,c,s,f,l,h,p=i.length,d=0;d<a;++d)for(r=er(i,or,ur).visitAfter(e),n=0;n<p;++n)c=i[n],l=o[c.index],h=l*l,s=c.x+c.vx,f=c.y+c.vy,r.visit(t)}function e(t){if(t.data)return t.r=o[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function r(){if(i){var n,e,r=i.length;for(o=new Array(r),n=0;n<r;++n)e=i[n],o[e.index]=+t(e,n,i)}}var i,o,u=1,a=1;return"function"!=typeof t&&(t=Wd(null==t?1:+t)),n.initialize=function(t){i=t,r()},n.iterations=function(t){return arguments.length?(a=+t,n):a},n.strength=function(t){return arguments.length?(u=+t,n):u},n.radius=function(e){return arguments.length?(t="function"==typeof e?e:Wd(+e),r(),n):t},n},hv=function(t){function n(t){return 1/Math.min(s[t.source.index],s[t.target.index])}function e(n){for(var e=0,r=t.length;e<d;++e)for(var i,o,c,s,l,h,p,v=0;v<r;++v)i=t[v],o=i.source,c=i.target,s=c.x+c.vx-o.x-o.vx||Zd(),l=c.y+c.vy-o.y-o.vy||Zd(),h=Math.sqrt(s*s+l*l),h=(h-a[v])/h*n*u[v],s*=h,l*=h,c.vx-=s*(p=f[v]),c.vy-=l*p,o.vx+=s*(p=1-p),o.vy+=l*p}function r(){if(c){var n,e,r=c.length,h=t.length,p=Ye(c,l);for(n=0,s=new Array(r);n<h;++n)e=t[n],e.index=n,"object"!=typeof e.source&&(e.source=cr(p,e.source)),"object"!=typeof e.target&&(e.target=cr(p,e.target)),s[e.source.index]=(s[e.source.index]||0)+1,s[e.target.index]=(s[e.target.index]||0)+1;for(n=0,f=new Array(h);n<h;++n)e=t[n],f[n]=s[e.source.index]/(s[e.source.index]+s[e.target.index]);u=new Array(h),i(),a=new Array(h),o()}}function i(){if(c)for(var n=0,e=t.length;n<e;++n)u[n]=+h(t[n],n,t)}function o(){if(c)for(var n=0,e=t.length;n<e;++n)a[n]=+p(t[n],n,t)}var u,a,c,s,f,l=ar,h=n,p=Wd(30),d=1;return null==t&&(t=[]),e.initialize=function(t){c=t,r()},e.links=function(n){return arguments.length?(t=n,r(),e):t},e.id=function(t){return arguments.length?(l=t,e):l},e.iterations=function(t){return arguments.length?(d=+t,e):d},e.strength=function(t){return arguments.length?(h="function"==typeof t?t:Wd(+t),i(),e):h},e.distance=function(t){return arguments.length?(p="function"==typeof t?t:Wd(+t),o(),e):p},e},pv=10,dv=Math.PI*(3-Math.sqrt(5)),vv=function(t){function n(){e(),p.call("tick",o),u<a&&(h.stop(),p.call("end",o))}function e(){var n,e,r=t.length;for(u+=(s-u)*c,l.each(function(t){t(u)}),
n=0;n<r;++n)e=t[n],null==e.fx?e.x+=e.vx*=f:(e.x=e.fx,e.vx=0),null==e.fy?e.y+=e.vy*=f:(e.y=e.fy,e.vy=0)}function r(){for(var n,e=0,r=t.length;e<r;++e){if(n=t[e],n.index=e,isNaN(n.x)||isNaN(n.y)){var i=pv*Math.sqrt(e),o=e*dv;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function i(n){return n.initialize&&n.initialize(t),n}var o,u=1,a=.001,c=1-Math.pow(a,1/300),s=0,f=.6,l=Ye(),h=gn(n),p=d("tick","end");return null==t&&(t=[]),r(),o={tick:e,restart:function(){return h.restart(n),o},stop:function(){return h.stop(),o},nodes:function(n){return arguments.length?(t=n,r(),l.each(i),o):t},alpha:function(t){return arguments.length?(u=+t,o):u},alphaMin:function(t){return arguments.length?(a=+t,o):a},alphaDecay:function(t){return arguments.length?(c=+t,o):+c},alphaTarget:function(t){return arguments.length?(s=+t,o):s},velocityDecay:function(t){return arguments.length?(f=1-t,o):1-f},force:function(t,n){return arguments.length>1?(null==n?l.remove(t):l.set(t,i(n)),o):l.get(t)},find:function(n,e,r){var i,o,u,a,c,s=0,f=t.length;for(null==r?r=1/0:r*=r,s=0;s<f;++s)a=t[s],i=n-a.x,o=e-a.y,(u=i*i+o*o)<r&&(c=a,r=u);return c},on:function(t,n){return arguments.length>1?(p.on(t,n),o):p.on(t)}}},_v=function(){function t(t){var n,a=i.length,c=er(i,sr,fr).visitAfter(e);for(u=t,n=0;n<a;++n)o=i[n],c.visit(r)}function n(){if(i){var t,n,e=i.length;for(a=new Array(e),t=0;t<e;++t)n=i[t],a[n.index]=+c(n,t,i)}}function e(t){var n,e,r,i,o,u=0;if(t.length){for(r=i=o=0;o<4;++o)(n=t[o])&&(e=n.value)&&(u+=e,r+=e*n.x,i+=e*n.y);t.x=r/u,t.y=i/u}else{n=t,n.x=n.data.x,n.y=n.data.y;do{u+=a[n.data.index]}while(n=n.next)}t.value=u}function r(t,n,e,r){if(!t.value)return!0;var i=t.x-o.x,c=t.y-o.y,h=r-n,p=i*i+c*c;if(h*h/l<p)return p<f&&(0===i&&(i=Zd(),p+=i*i),0===c&&(c=Zd(),p+=c*c),p<s&&(p=Math.sqrt(s*p)),o.vx+=i*t.value*u/p,o.vy+=c*t.value*u/p),!0;if(!(t.length||p>=f)){(t.data!==o||t.next)&&(0===i&&(i=Zd(),p+=i*i),0===c&&(c=Zd(),p+=c*c),p<s&&(p=Math.sqrt(s*p)));do{t.data!==o&&(h=a[t.data.index]*u/p,o.vx+=i*h,o.vy+=c*h)}while(t=t.next)}}var i,o,u,a,c=Wd(-30),s=1,f=1/0,l=.81;return t.initialize=function(t){i=t,n()},t.strength=function(e){return arguments.length?(c="function"==typeof e?e:Wd(+e),n(),t):c},t.distanceMin=function(n){return arguments.length?(s=n*n,t):Math.sqrt(s)},t.distanceMax=function(n){return arguments.length?(f=n*n,t):Math.sqrt(f)},t.theta=function(n){return arguments.length?(l=n*n,t):Math.sqrt(l)},t},gv=function(t){function n(t){for(var n,e=0,u=r.length;e<u;++e)n=r[e],n.vx+=(o[e]-n.x)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+u(r[n],n,r)}}var r,i,o,u=Wd(.1);return"function"!=typeof t&&(t=Wd(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:Wd(+t),e(),n):u},n.x=function(r){return arguments.length?(t="function"==typeof r?r:Wd(+r),e(),n):t},n},yv=function(t){function n(t){for(var n,e=0,u=r.length;e<u;++e)n=r[e],n.vy+=(o[e]-n.y)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+u(r[n],n,r)}}var r,i,o,u=Wd(.1);return"function"!=typeof t&&(t=Wd(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:Wd(+t),e(),n):u},n.y=function(r){return arguments.length?(t="function"==typeof r?r:Wd(+r),e(),n):t},n},mv=function(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]},xv=function(t){return t=mv(Math.abs(t)),t?t[1]:NaN},bv=function(t,n){return function(e,r){for(var i=e.length,o=[],u=0,a=t[0],c=0;i>0&&a>0&&(c+a+1>r&&(a=Math.max(1,r-c)),o.push(e.substring(i-=a,i+a)),!((c+=a+1)>r));)a=t[u=(u+1)%t.length];return o.reverse().join(n)}},wv=function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}},Mv=function(t,n){t=t.toPrecision(n);t:for(var e,r=t.length,i=1,o=-1;i<r;++i)switch(t[i]){case".":o=e=i;break;case"0":0===o&&(o=i),e=i;break;case"e":break t;default:o>0&&(o=0)}return o>0?t.slice(0,o)+t.slice(e+1):t},Tv=function(t,n){var e=mv(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(fv=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,u=r.length;return o===u?r:o>u?r+new Array(o-u+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+mv(t,Math.max(0,n+o-1))[0]},kv=function(t,n){var e=mv(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")},Sv={"":Mv,"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return kv(100*t,n)},r:kv,s:Tv,X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},Nv=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;lr.prototype=hr.prototype,hr.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type};var Ev,Av=function(t){return t},Cv=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],zv=function(t){function n(t){function n(t){var n,i,s,m=v,x=_;if("c"===d)x=g(t)+x,t="";else{t=+t;var b=t<0;if(t=g(Math.abs(t),p),b&&0==+t&&(b=!1),m=(b?"("===c?c:"-":"-"===c||"("===c?"":c)+m,x=x+("s"===d?Cv[8+fv/3]:"")+(b&&"("===c?")":""),y)for(n=-1,i=t.length;++n<i;)if(48>(s=t.charCodeAt(n))||s>57){x=(46===s?o+t.slice(n+1):t.slice(n))+x,t=t.slice(0,n);break}}h&&!f&&(t=r(t,1/0));var w=m.length+t.length+x.length,M=w<l?new Array(l-w+1).join(e):"";switch(h&&f&&(t=r(M+t,M.length?l-x.length:1/0),M=""),a){case"<":t=m+t+x+M;break;case"=":t=m+M+t+x;break;case"^":t=M.slice(0,w=M.length>>1)+m+t+x+M.slice(w);break;default:t=M+m+t+x}return u(t)}t=lr(t);var e=t.fill,a=t.align,c=t.sign,s=t.symbol,f=t.zero,l=t.width,h=t.comma,p=t.precision,d=t.type,v="$"===s?i[0]:"#"===s&&/[boxX]/.test(d)?"0"+d.toLowerCase():"",_="$"===s?i[1]:/[%p]/.test(d)?"%":"",g=Sv[d],y=!d||/[defgprs%]/.test(d);return p=null==p?d?6:12:/[gprs]/.test(d)?Math.max(1,Math.min(21,p)):Math.max(0,Math.min(20,p)),n.toString=function(){return t+""},n}function e(t,e){var r=n((t=lr(t),t.type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(xv(e)/3))),o=Math.pow(10,-i),u=Cv[8+i/3];return function(t){return r(o*t)+u}}var r=t.grouping&&t.thousands?bv(t.grouping,t.thousands):Av,i=t.currency,o=t.decimal,u=t.numerals?wv(t.numerals):Av;return{format:n,formatPrefix:e}};pr({decimal:".",thousands:",",grouping:[3],currency:["$",""]});var Pv=function(t){return Math.max(0,-xv(Math.abs(t)))},Lv=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(xv(n)/3)))-xv(Math.abs(t)))},Rv=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,xv(n)-xv(t))+1},qv=function(){return new dr};dr.prototype={constructor:dr,reset:function(){this.s=this.t=0},add:function(t){vr(p_,t,this.t),vr(this,p_.s,this.s),this.s?this.t+=p_.t:this.s=p_.t},valueOf:function(){return this.s}};var Uv,Dv,Ov,Fv,Iv,Yv,Bv,jv,Hv,Xv,Vv,$v,Wv,Zv,Gv,Jv,Qv,Kv,t_,n_,e_,r_,i_,o_,u_,a_,c_,s_,f_,l_,h_,p_=new dr,d_=1e-6,v_=Math.PI,__=v_/2,g_=v_/4,y_=2*v_,m_=180/v_,x_=v_/180,b_=Math.abs,w_=Math.atan,M_=Math.atan2,T_=Math.cos,k_=Math.ceil,S_=Math.exp,N_=Math.log,E_=Math.pow,A_=Math.sin,C_=Math.sign||function(t){return t>0?1:t<0?-1:0},z_=Math.sqrt,P_=Math.tan,L_={Feature:function(t,n){xr(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)xr(e[r].geometry,n)}},R_={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){br(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)br(e[r],n,0)},Polygon:function(t,n){wr(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)wr(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)xr(e[r],n)}},q_=function(t,n){t&&L_.hasOwnProperty(t.type)?L_[t.type](t,n):xr(t,n)},U_=qv(),D_=qv(),O_={point:mr,lineStart:mr,lineEnd:mr,polygonStart:function(){U_.reset(),O_.lineStart=Mr,O_.lineEnd=Tr},polygonEnd:function(){var t=+U_;D_.add(t<0?y_+t:t),this.lineStart=this.lineEnd=this.point=mr},sphere:function(){D_.add(y_)}},F_=function(t){return D_.reset(),q_(t,O_),2*D_},I_=qv(),Y_={point:Rr,lineStart:Ur,lineEnd:Dr,polygonStart:function(){Y_.point=Or,Y_.lineStart=Fr,Y_.lineEnd=Ir,I_.reset(),O_.polygonStart()},polygonEnd:function(){O_.polygonEnd(),Y_.point=Rr,Y_.lineStart=Ur,Y_.lineEnd=Dr,U_<0?(Yv=-(jv=180),Bv=-(Hv=90)):I_>d_?Hv=90:I_<-d_&&(Bv=-90),Gv[0]=Yv,Gv[1]=jv}},B_=function(t){var n,e,r,i,o,u,a;if(Hv=jv=-(Yv=Bv=1/0),Zv=[],q_(t,Y_),e=Zv.length){for(Zv.sort(Br),n=1,r=Zv[0],o=[r];n<e;++n)i=Zv[n],jr(r,i[0])||jr(r,i[1])?(Yr(r[0],i[1])>Yr(r[0],r[1])&&(r[1]=i[1]),Yr(i[0],r[1])>Yr(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(u=-(1/0),e=o.length-1,n=0,r=o[e];n<=e;r=i,++n)i=o[n],(a=Yr(r[1],i[0]))>u&&(u=a,Yv=i[0],jv=r[1])}return Zv=Gv=null,Yv===1/0||Bv===1/0?[[NaN,NaN],[NaN,NaN]]:[[Yv,Bv],[jv,Hv]]},j_={sphere:mr,point:Hr,lineStart:Vr,lineEnd:Zr,polygonStart:function(){j_.lineStart=Gr,j_.lineEnd=Jr},polygonEnd:function(){j_.lineStart=Vr,j_.lineEnd=Zr}},H_=function(t){Jv=Qv=Kv=t_=n_=e_=r_=i_=o_=u_=a_=0,q_(t,j_);var n=o_,e=u_,r=a_,i=n*n+e*e+r*r;return i<1e-12&&(n=e_,e=r_,r=i_,Qv<d_&&(n=Kv,e=t_,r=n_),(i=n*n+e*e+r*r)<1e-12)?[NaN,NaN]:[M_(e,n)*m_,gr(r/z_(i))*m_]},X_=function(t){return function(){return t}},V_=function(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e};ti.invert=ti;var $_,W_,Z_,G_,J_,Q_,K_,tg,ng,eg,rg,ig=function(t){function n(n){return n=t(n[0]*x_,n[1]*x_),n[0]*=m_,n[1]*=m_,n}return t=ni(t[0]*x_,t[1]*x_,t.length>2?t[2]*x_:0),n.invert=function(n){return n=t.invert(n[0]*x_,n[1]*x_),n[0]*=m_,n[1]*=m_,n},n},og=function(){function t(t,n){e.push(t=r(t,n)),t[0]*=m_,t[1]*=m_}function n(){var t=i.apply(this,arguments),n=o.apply(this,arguments)*x_,c=u.apply(this,arguments)*x_;return e=[],r=ni(-t[0]*x_,-t[1]*x_,0).invert,oi(a,n,c,1),t={type:"Polygon",coordinates:[e]},e=r=null,t}var e,r,i=X_([0,0]),o=X_(90),u=X_(6),a={point:t};return n.center=function(t){return arguments.length?(i="function"==typeof t?t:X_([+t[0],+t[1]]),n):i},n.radius=function(t){return arguments.length?(o="function"==typeof t?t:X_(+t),n):o},n.precision=function(t){return arguments.length?(u="function"==typeof t?t:X_(+t),n):u},n},ug=function(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:mr,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}},ag=function(t,n,e,r,i,o){var u,a=t[0],c=t[1],s=n[0],f=n[1],l=0,h=1,p=s-a,d=f-c;if(u=e-a,p||!(u>0)){if(u/=p,p<0){if(u<l)return;u<h&&(h=u)}else if(p>0){if(u>h)return;u>l&&(l=u)}if(u=i-a,p||!(u<0)){if(u/=p,p<0){if(u>h)return;u>l&&(l=u)}else if(p>0){if(u<l)return;u<h&&(h=u)}if(u=r-c,d||!(u>0)){if(u/=d,d<0){if(u<l)return;u<h&&(h=u)}else if(d>0){if(u>h)return;u>l&&(l=u)}if(u=o-c,d||!(u<0)){if(u/=d,d<0){if(u>h)return;u>l&&(l=u)}else if(d>0){if(u<l)return;u<h&&(h=u)}return l>0&&(t[0]=a+l*p,t[1]=c+l*d),h<1&&(n[0]=a+h*p,n[1]=c+h*d),!0}}}}},cg=function(t,n){return b_(t[0]-n[0])<d_&&b_(t[1]-n[1])<d_},sg=function(t,n,e,r,i){var o,u,a=[],c=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],u=t[n];if(cg(r,u)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);return void i.lineEnd()}a.push(e=new ai(r,t,null,!0)),c.push(e.o=new ai(r,null,e,!1)),a.push(e=new ai(u,t,null,!1)),c.push(e.o=new ai(u,null,e,!0))}}),a.length){for(c.sort(n),ci(a),ci(c),o=0,u=c.length;o<u;++o)c[o].e=e=!e;for(var s,f,l=a[0];;){for(var h=l,p=!0;h.v;)if((h=h.n)===l)return;s=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(p)for(o=0,u=s.length;o<u;++o)i.point((f=s[o])[0],f[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(p)for(s=h.p.z,o=s.length-1;o>=0;--o)i.point((f=s[o])[0],f[1]);else r(h.x,h.p.x,-1,i);h=h.p}h=h.o,s=h.z,p=!p}while(!h.v);i.lineEnd()}}},fg=1e9,lg=-fg,hg=function(){var t,n,e,r=0,i=0,o=960,u=500;return e={stream:function(e){return t&&n===e?t:t=si(r,i,o,u)(n=e)},extent:function(a){return arguments.length?(r=+a[0][0],i=+a[0][1],o=+a[1][0],u=+a[1][1],t=n=null,e):[[r,i],[o,u]]}}},pg=qv(),dg=function(t,n){var e=n[0],r=n[1],i=[A_(e),-T_(e),0],o=0,u=0;pg.reset();for(var a=0,c=t.length;a<c;++a)if(f=(s=t[a]).length)for(var s,f,l=s[f-1],h=l[0],p=l[1]/2+g_,d=A_(p),v=T_(p),_=0;_<f;++_,h=y,d=x,v=b,l=g){var g=s[_],y=g[0],m=g[1]/2+g_,x=A_(m),b=T_(m),w=y-h,M=w>=0?1:-1,T=M*w,k=T>v_,S=d*x;if(pg.add(M_(S*M*A_(T),v*b+S*T_(T))),o+=k?w+M*y_:w,k^h>=e^y>=e){var N=Cr(Er(l),Er(g));Lr(N);var E=Cr(i,N);Lr(E);var A=(k^w>=0?-1:1)*gr(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(u+=k^w>=0?1:-1)}}return(o<-d_||o<d_&&pg<-d_)^1&u},vg=qv(),_g={sphere:mr,point:mr,lineStart:fi,lineEnd:mr,polygonStart:mr,polygonEnd:mr},gg=function(t){return vg.reset(),q_(t,_g),+vg},yg=[null,null],mg={type:"LineString",coordinates:yg},xg=function(t,n){return yg[0]=t,yg[1]=n,gg(mg)},bg={Feature:function(t,n){return di(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(di(e[r].geometry,n))return!0;return!1}},wg={Sphere:function(){return!0},Point:function(t,n){return vi(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(vi(e[r],n))return!0;return!1},LineString:function(t,n){return _i(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(_i(e[r],n))return!0;return!1},Polygon:function(t,n){return gi(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(gi(e[r],n))return!0;return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(di(e[r],n))return!0;return!1}},Mg=function(t,n){return(t&&bg.hasOwnProperty(t.type)?bg[t.type]:di)(t,n)},Tg=function(t,n){var e=t[0]*x_,r=t[1]*x_,i=n[0]*x_,o=n[1]*x_,u=T_(r),a=A_(r),c=T_(o),s=A_(o),f=u*T_(e),l=u*A_(e),h=c*T_(i),p=c*A_(i),d=2*gr(z_(yr(o-r)+u*c*yr(i-e))),v=A_(d),_=d?function(t){var n=A_(t*=d)/v,e=A_(d-t)/v,r=e*f+n*h,i=e*l+n*p,o=e*a+n*s;return[M_(i,r)*m_,M_(o,z_(r*r+i*i))*m_]}:function(){return[e*m_,r*m_]};return _.distance=d,_},kg=function(t){return t},Sg=qv(),Ng=qv(),Eg={point:mr,lineStart:mr,lineEnd:mr,polygonStart:function(){Eg.lineStart=Ti,Eg.lineEnd=Ni},polygonEnd:function(){Eg.lineStart=Eg.lineEnd=Eg.point=mr,Sg.add(b_(Ng)),Ng.reset()},result:function(){var t=Sg/2;return Sg.reset(),t}},Ag=1/0,Cg=Ag,zg=-Ag,Pg=zg,Lg={point:Ei,lineStart:mr,lineEnd:mr,polygonStart:mr,polygonEnd:mr,result:function(){var t=[[Ag,Cg],[zg,Pg]];return zg=Pg=-(Cg=Ag=1/0),t}},Rg=0,qg=0,Ug=0,Dg=0,Og=0,Fg=0,Ig=0,Yg=0,Bg=0,jg={point:Ai,lineStart:Ci,lineEnd:Li,polygonStart:function(){jg.lineStart=Ri,jg.lineEnd=qi},polygonEnd:function(){jg.point=Ai,jg.lineStart=Ci,jg.lineEnd=Li},result:function(){var t=Bg?[Ig/Bg,Yg/Bg]:Fg?[Dg/Fg,Og/Fg]:Ug?[Rg/Ug,qg/Ug]:[NaN,NaN];return Rg=qg=Ug=Dg=Og=Fg=Ig=Yg=Bg=0,t}};Oi.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,y_)}},result:mr};var Hg,Xg,Vg,$g,Wg,Zg=qv(),Gg={point:mr,lineStart:function(){Gg.point=Fi},lineEnd:function(){Hg&&Ii(Xg,Vg),Gg.point=mr},polygonStart:function(){Hg=!0},polygonEnd:function(){Hg=null},result:function(){var t=+Zg;return Zg.reset(),t}};Yi.prototype={_circle:Bi(4.5),pointRadius:function(t){return this._circle=Bi(t),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}}};var Jg=function(t,n){function e(t){return t&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),q_(t,r(i))),i.result()}var r,i,o=4.5;return e.area=function(t){return q_(t,r(Eg)),Eg.result()},e.measure=function(t){return q_(t,r(Gg)),Gg.result()},e.bounds=function(t){return q_(t,r(Lg)),Lg.result()},e.centroid=function(t){return q_(t,r(jg)),jg.result()},e.projection=function(n){return arguments.length?(r=null==n?(t=null,kg):(t=n).stream,e):t},e.context=function(t){return arguments.length?(i=null==t?(n=null,new Yi):new Oi(n=t),"function"!=typeof o&&i.pointRadius(o),e):n},e.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(i.pointRadius(+t),+t),e):o},e.projection(t).context(n)},Qg=function(t,n,e,r){return function(i,o){function u(n,e){var r=i(n,e);t(n=r[0],e=r[1])&&o.point(n,e)}function a(t,n){var e=i(t,n);_.point(e[0],e[1])}function c(){b.point=a,_.lineStart()}function s(){b.point=u,_.lineEnd()}function f(t,n){v.push([t,n]);var e=i(t,n);m.point(e[0],e[1])}function l(){m.lineStart(),v=[]}function h(){f(v[0][0],v[0][1]),m.lineEnd();var t,n,e,r,i=m.clean(),u=y.result(),a=u.length;if(v.pop(),p.push(v),v=null,a)if(1&i){if(e=u[0],(n=e.length-1)>0){for(x||(o.polygonStart(),x=!0),o.lineStart(),t=0;t<n;++t)o.point((r=e[t])[0],r[1]);o.lineEnd()}}else a>1&&2&i&&u.push(u.pop().concat(u.shift())),d.push(u.filter(ji))}var p,d,v,_=n(o),g=i.invert(r[0],r[1]),y=ug(),m=n(y),x=!1,b={point:u,lineStart:c,lineEnd:s,polygonStart:function(){b.point=f,b.lineStart=l,b.lineEnd=h,d=[],p=[]},polygonEnd:function(){b.point=u,b.lineStart=c,b.lineEnd=s,d=ff(d);var t=dg(p,g);d.length?(x||(o.polygonStart(),x=!0),sg(d,Hi,t,e,o)):t&&(x||(o.polygonStart(),x=!0),o.lineStart(),e(null,null,1,o),o.lineEnd()),x&&(o.polygonEnd(),x=!1),d=p=null},sphere:function(){o.polygonStart(),o.lineStart(),e(null,null,1,o),o.lineEnd(),o.polygonEnd()}};return b}},Kg=Qg(function(){return!0},Xi,$i,[-v_,-__]),ty=function(t,n){function e(e,r,i,o){oi(o,t,n,i,e,r)}function r(t,n){return T_(t)*T_(n)>a}function i(t){var n,e,i,a,f;return{lineStart:function(){a=i=!1,f=1},point:function(l,h){var p,d=[l,h],v=r(l,h),_=c?v?0:u(l,h):v?u(l+(l<0?v_:-v_),h):0;if(!n&&(a=i=v)&&t.lineStart(),v!==i&&(p=o(n,d),(cg(n,p)||cg(d,p))&&(d[0]+=d_,d[1]+=d_,v=r(d[0],d[1]))),v!==i)f=0,v?(t.lineStart(),p=o(d,n),t.point(p[0],p[1])):(p=o(n,d),t.point(p[0],p[1]),t.lineEnd()),n=p;else if(s&&n&&c^v){var g;_&e||!(g=o(d,n,!0))||(f=0,c?(t.lineStart(),t.point(g[0][0],g[0][1]),t.point(g[1][0],g[1][1]),t.lineEnd()):(t.point(g[1][0],g[1][1]),t.lineEnd(),t.lineStart(),t.point(g[0][0],g[0][1])))}!v||n&&cg(n,d)||t.point(d[0],d[1]),n=d,i=v,e=_},lineEnd:function(){i&&t.lineEnd(),n=null},clean:function(){return f|(a&&i)<<1}}}function o(t,n,e){var r=Er(t),i=Er(n),o=[1,0,0],u=Cr(r,i),c=Ar(u,u),s=u[0],f=c-s*s;if(!f)return!e&&t;var l=a*c/f,h=-a*s/f,p=Cr(o,u),d=Pr(o,l);zr(d,Pr(u,h));var v=p,_=Ar(d,v),g=Ar(v,v),y=_*_-g*(Ar(d,d)-1);if(!(y<0)){var m=z_(y),x=Pr(v,(-_-m)/g);if(zr(x,d),x=Nr(x),!e)return x;var b,w=t[0],M=n[0],T=t[1],k=n[1];M<w&&(b=w,w=M,M=b);var S=M-w,N=b_(S-v_)<d_,E=N||S<d_;if(!N&&k<T&&(b=T,T=k,k=b),E?N?T+k>0^x[1]<(b_(x[0]-w)<d_?T:k):T<=x[1]&&x[1]<=k:S>v_^(w<=x[0]&&x[0]<=M)){var A=Pr(v,(-_+m)/g);return zr(A,d),[x,Nr(A)]}}}function u(n,e){var r=c?t:v_-t,i=0;return n<-r?i|=1:n>r&&(i|=2),e<-r?i|=4:e>r&&(i|=8),i}var a=T_(t),c=a>0,s=b_(a)>d_;return Qg(r,i,e,c?[0,-t]:[-v_,t-v_])},ny=function(t){return{stream:Wi(t)}};Zi.prototype={constructor:Zi,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var ey=16,ry=T_(30*x_),iy=function(t,n){return+n?Ki(t,n):Qi(t)},oy=Wi({point:function(t,n){this.stream.point(t*x_,n*x_)}}),uy=function(){return eo(io).scale(155.424).center([0,33.6442])},ay=function(){return uy().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])},cy=function(){function t(t){var n=t[0],e=t[1];return a=null,i.point(n,e),a||(o.point(n,e),a)||(u.point(n,e),a)}function n(){return e=r=null,t}var e,r,i,o,u,a,c=ay(),s=uy().rotate([154,0]).center([-2,58.5]).parallels([55,65]),f=uy().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(t,n){a=[t,n]}};return t.invert=function(t){var n=c.scale(),e=c.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?s:i>=.166&&i<.234&&r>=-.214&&r<-.115?f:c).invert(t)},t.stream=function(t){return e&&r===t?e:e=oo([c.stream(r=t),s.stream(t),f.stream(t)])},t.precision=function(t){return arguments.length?(c.precision(t),s.precision(t),f.precision(t),n()):c.precision()},t.scale=function(n){return arguments.length?(c.scale(n),s.scale(.35*n),f.scale(n),t.translate(c.translate())):c.scale()},t.translate=function(t){if(!arguments.length)return c.translate();var e=c.scale(),r=+t[0],a=+t[1];return i=c.translate(t).clipExtent([[r-.455*e,a-.238*e],[r+.455*e,a+.238*e]]).stream(l),o=s.translate([r-.307*e,a+.201*e]).clipExtent([[r-.425*e+d_,a+.12*e+d_],[r-.214*e-d_,a+.234*e-d_]]).stream(l),u=f.translate([r-.205*e,a+.212*e]).clipExtent([[r-.214*e+d_,a+.166*e+d_],[r-.115*e-d_,a+.234*e-d_]]).stream(l),n()},t.fitExtent=function(n,e){return Gi(t,n,e)},t.fitSize=function(n,e){return Ji(t,n,e)},t.scale(1070)},sy=uo(function(t){return z_(2/(1+t))});sy.invert=ao(function(t){return 2*gr(t/2)});var fy=function(){return to(sy).scale(124.75).clipAngle(179.999)},ly=uo(function(t){return(t=_r(t))&&t/A_(t)});ly.invert=ao(function(t){return t});var hy=function(){return to(ly).scale(79.4188).clipAngle(179.999)};co.invert=function(t,n){return[t,2*w_(S_(n))-__]};var py=function(){return so(co).scale(961/y_)},dy=function(){return eo(lo).scale(109.5).parallels([30,30])};ho.invert=ho;var vy=function(){return to(ho).scale(152.63)},_y=function(){return eo(po).scale(131.154).center([0,13.9389])};vo.invert=ao(w_);var gy=function(){return to(vo).scale(144.049).clipAngle(60)},yy=function(){function t(){return i=o=null,u}var n,e,r,i,o,u,a=1,c=0,s=0,f=1,l=1,h=kg,p=null,d=kg;return u={stream:function(t){return i&&o===t?i:i=h(d(o=t))},clipExtent:function(i){return arguments.length?(d=null==i?(p=n=e=r=null,kg):si(p=+i[0][0],n=+i[0][1],e=+i[1][0],r=+i[1][1]),t()):null==p?null:[[p,n],[e,r]]},scale:function(n){return arguments.length?(h=_o((a=+n)*f,a*l,c,s),t()):a},translate:function(n){return arguments.length?(h=_o(a*f,a*l,c=+n[0],s=+n[1]),t()):[c,s]},reflectX:function(n){return arguments.length?(h=_o(a*(f=n?-1:1),a*l,c,s),t()):f<0},reflectY:function(n){return arguments.length?(h=_o(a*f,a*(l=n?-1:1),c,s),t()):l<0},fitExtent:function(t,n){return Gi(u,t,n)},fitSize:function(t,n){return Ji(u,t,n)}}};go.invert=ao(gr);var my=function(){return to(go).scale(249.5).clipAngle(90+d_)};yo.invert=ao(function(t){return 2*w_(t)});var xy=function(){return to(yo).scale(250).clipAngle(142)};mo.invert=function(t,n){return[-n,2*w_(S_(t))-__]};var by=function(){var t=so(mo),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):(t=n(),[t[1],-t[0]])},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):(t=e(),[t[0],t[1],t[2]-90])},e([0,0,90]).scale(159.155)},wy=function(){function t(t){var o,u=0;t.eachAfter(function(t){var e=t.children;e?(t.x=bo(e),t.y=Mo(e)):(t.x=o?u+=n(t,o):0,t.y=0,o=t)});var a=ko(t),c=So(t),s=a.x-n(a,c)/2,f=c.x+n(c,a)/2;return t.eachAfter(i?function(n){n.x=(n.x-t.x)*e,n.y=(t.y-n.y)*r}:function(n){n.x=(n.x-s)/(f-s)*e,n.y=(1-(t.y?n.y/t.y:1))*r})}var n=xo,e=1,r=1,i=!1;return t.separation=function(e){return arguments.length?(n=e,t):n},t.size=function(n){return arguments.length?(i=!1,e=+n[0],r=+n[1],t):i?null:[e,r]},t.nodeSize=function(n){return arguments.length?(i=!0,e=+n[0],r=+n[1],t):i?[e,r]:null},t},My=function(){return this.eachAfter(No)},Ty=function(t){var n,e,r,i,o=this,u=[o];do{for(n=u.reverse(),u=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)u.push(e[r])}while(u.length);return this},ky=function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},Sy=function(t){for(var n,e,r,i=this,o=[i],u=[];i=o.pop();)if(u.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=u.pop();)t(i);return this},Ny=function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})},Ey=function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})},Ay=function(t){for(var n=this,e=Eo(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},Cy=function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},zy=function(){var t=[];return this.each(function(n){t.push(n)}),t},Py=function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t},Ly=function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n};Ro.prototype=Ao.prototype={constructor:Ro,count:My,each:Ty,eachAfter:Sy,eachBefore:ky,sum:Ny,sort:Ey,path:Ay,ancestors:Cy,descendants:zy,leaves:Py,links:Ly,copy:Co};var Ry=function(t){for(var n=(t=t.slice()).length,e=null,r=e;n;){var i=new qo(t[n-1]);r=r?r.next=i:e=i,t[void 0]=t[--n]}return{head:e,tail:r}},qy=function(t){return Do(Ry(t),[])},Uy=function(t){return Xo(t),t},Dy=function(t){return function(){return t}},Oy=function(){function t(t){return t.x=e/2,t.y=r/2,n?t.eachBefore(Go(n)).eachAfter(Jo(i,.5)).eachBefore(Qo(1)):t.eachBefore(Go(Zo)).eachAfter(Jo(Wo,1)).eachAfter(Jo(i,t.r/Math.min(e,r))).eachBefore(Qo(Math.min(e,r)/(2*t.r))),t}var n=null,e=1,r=1,i=Wo;return t.radius=function(e){return arguments.length?(n=Vo(e),t):n},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i="function"==typeof n?n:Dy(+n),t):i},t},Fy=function(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)},Iy=function(t,n,e,r,i){for(var o,u=t.children,a=-1,c=u.length,s=t.value&&(r-n)/t.value;++a<c;)o=u[a],o.y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*s},Yy=function(){function t(t){var u=t.height+1;return t.x0=t.y0=i,t.x1=e,t.y1=r/u,t.eachBefore(n(r,u)),o&&t.eachBefore(Fy),t}function n(t,n){return function(e){e.children&&Iy(e,e.x0,t*(e.depth+1)/n,e.x1,t*(e.depth+2)/n);var r=e.x0,o=e.y0,u=e.x1-i,a=e.y1-i;u<r&&(r=u=(r+u)/2),a<o&&(o=a=(o+a)/2),e.x0=r,e.y0=o,e.x1=u,e.y1=a}}var e=1,r=1,i=0,o=!1;return t.round=function(n){return arguments.length?(o=!!n,t):o},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i=+n,t):i},t},By="$",jy={depth:-1},Hy={},Xy=function(){function t(t){var r,i,o,u,a,c,s,f=t.length,l=new Array(f),h={};for(i=0;i<f;++i)r=t[i],a=l[i]=new Ro(r),null!=(c=n(r,i,t))&&(c+="")&&(s=By+(a.id=c),h[s]=s in h?Hy:a);for(i=0;i<f;++i)if(a=l[i],null!=(c=e(t[i],i,t))&&(c+="")){if(!(u=h[By+c]))throw new Error("missing: "+c);if(u===Hy)throw new Error("ambiguous: "+c);u.children?u.children.push(a):u.children=[a],a.parent=u}else{if(o)throw new Error("multiple roots");o=a}if(!o)throw new Error("no root");if(o.parent=jy,o.eachBefore(function(t){t.depth=t.parent.depth+1,--f}).eachBefore(Lo),o.parent=null,f>0)throw new Error("cycle");return o}var n=Ko,e=tu;return t.id=function(e){return arguments.length?(n=$o(e),t):n},t.parentId=function(n){return arguments.length?(e=$o(n),t):e},t};au.prototype=Object.create(Ro.prototype);var Vy=function(){function t(t){var r=cu(t);if(r.eachAfter(n),r.parent.m=-r.z,r.eachBefore(e),c)t.eachBefore(i);else{var s=t,f=t,l=t;t.eachBefore(function(t){t.x<s.x&&(s=t),t.x>f.x&&(f=t),t.depth>l.depth&&(l=t)});var h=s===f?1:o(s,f)/2,p=h-s.x,d=u/(f.x+h+p),v=a/(l.depth||1);t.eachBefore(function(t){t.x=(t.x+p)*d,t.y=t.depth*v})}return t}function n(t){var n=t.children,e=t.parent.children,i=t.i?e[t.i-1]:null;if(n){ou(t);var u=(n[0].z+n[n.length-1].z)/2;i?(t.z=i.z+o(t._,i._),t.m=t.z-u):t.z=u}else i&&(t.z=i.z+o(t._,i._));t.parent.A=r(t,i,t.parent.A||e[0])}function e(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function r(t,n,e){if(n){for(var r,i=t,u=t,a=n,c=i.parent.children[0],s=i.m,f=u.m,l=a.m,h=c.m;a=ru(a),i=eu(i),a&&i;)c=eu(c),u=ru(u),u.a=t,r=a.z+l-i.z-s+o(a._,i._),r>0&&(iu(uu(a,t,e),t,r),s+=r,f+=r),l+=a.m,s+=i.m,h+=c.m,f+=u.m;a&&!ru(u)&&(u.t=a,u.m+=l-f),i&&!eu(c)&&(c.t=i,c.m+=s-h,e=t)}return e}function i(t){t.x*=u,t.y=t.depth*a}var o=nu,u=1,a=1,c=null;return t.separation=function(n){return arguments.length?(o=n,t):o},t.size=function(n){return arguments.length?(c=!1,u=+n[0],a=+n[1],t):c?null:[u,a]},t.nodeSize=function(n){return arguments.length?(c=!0,u=+n[0],a=+n[1],t):c?[u,a]:null},t},$y=function(t,n,e,r,i){for(var o,u=t.children,a=-1,c=u.length,s=t.value&&(i-e)/t.value;++a<c;)o=u[a],o.x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*s},Wy=(1+Math.sqrt(5))/2,Zy=function t(n){function e(t,e,r,i,o){su(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Wy),Gy=function(){function t(t){return t.x0=t.y0=0,t.x1=i,t.y1=o,t.eachBefore(n),u=[0],r&&t.eachBefore(Fy),t}function n(t){var n=u[t.depth],r=t.x0+n,i=t.y0+n,o=t.x1-n,h=t.y1-n;o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),t.x0=r,t.y0=i,t.x1=o,t.y1=h,t.children&&(n=u[t.depth+1]=a(t)/2,r+=l(t)-n,i+=c(t)-n,o-=s(t)-n,h-=f(t)-n,o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),e(t,r,i,o,h))}var e=Zy,r=!1,i=1,o=1,u=[0],a=Wo,c=Wo,s=Wo,f=Wo,l=Wo;return t.round=function(n){return arguments.length?(r=!!n,t):r},t.size=function(n){return arguments.length?(i=+n[0],o=+n[1],t):[i,o]},t.tile=function(n){return arguments.length?(e=$o(n),t):e},t.padding=function(n){return arguments.length?t.paddingInner(n).paddingOuter(n):t.paddingInner()},t.paddingInner=function(n){return arguments.length?(a="function"==typeof n?n:Dy(+n),t):a},t.paddingOuter=function(n){return arguments.length?t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):t.paddingTop()},t.paddingTop=function(n){return arguments.length?(c="function"==typeof n?n:Dy(+n),t):c},t.paddingRight=function(n){return arguments.length?(s="function"==typeof n?n:Dy(+n),t):s},t.paddingBottom=function(n){return arguments.length?(f="function"==typeof n?n:Dy(+n),t):f},t.paddingLeft=function(n){return arguments.length?(l="function"==typeof n?n:Dy(+n),t):l},t},Jy=function(t,n,e,r,i){function o(t,n,e,r,i,u,a){if(t>=n-1){var s=c[t];return s.x0=r,s.y0=i,s.x1=u,s.y1=a,void 0}for(var l=f[t],h=e/2+l,p=t+1,d=n-1;p<d;){var v=p+d>>>1;f[v]<h?p=v+1:d=v}h-f[p-1]<f[p]-h&&t+1<p&&--p;var _=f[p]-l,g=e-_;if(u-r>a-i){var y=(r*g+u*_)/e;o(t,p,_,r,i,y,a),o(p,n,g,y,i,u,a)}else{var m=(i*g+a*_)/e;o(t,p,_,r,i,u,m),o(p,n,g,r,m,u,a)}}var u,a,c=t.children,s=c.length,f=new Array(s+1);for(f[0]=a=u=0;u<s;++u)f[u+1]=a+=c[u].value;o(0,s,t.value,n,e,r,i)},Qy=function(t,n,e,r,i){(1&t.depth?$y:Iy)(t,n,e,r,i)},Ky=function t(n){function e(t,e,r,i,o){if((u=t._squarify)&&u.ratio===n)for(var u,a,c,s,f,l=-1,h=u.length,p=t.value;++l<h;){for(a=u[l],c=a.children,s=a.value=0,f=c.length;s<f;++s)a.value+=c[s].value;a.dice?Iy(a,e,r,i,r+=(o-r)*a.value/p):$y(a,e,r,e+=(i-e)*a.value/p,o),p-=a.value}else t._squarify=u=su(n,t,e,r,i,o),u.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Wy),tm=function(t){
for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},nm=function(t){for(var n,e,r=-1,i=t.length,o=0,u=0,a=t[i-1],c=0;++r<i;)n=a,a=t[r],c+=e=n[0]*a[1]-a[0]*n[1],o+=(n[0]+a[0])*e,u+=(n[1]+a[1])*e;return c*=3,[o/c,u/c]},em=function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])},rm=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(fu),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=lu(r),u=lu(i),a=u[0]===o[0],c=u[u.length-1]===o[o.length-1],s=[];for(n=o.length-1;n>=0;--n)s.push(t[r[o[n]][2]]);for(n=+a;n<u.length-c;++n)s.push(t[r[u[n]][2]]);return s},im=function(t,n){for(var e,r,i=t.length,o=t[i-1],u=n[0],a=n[1],c=o[0],s=o[1],f=!1,l=0;l<i;++l)o=t[l],e=o[0],r=o[1],r>a!=s>a&&u<(c-e)*(a-r)/(s-r)+e&&(f=!f),c=e,s=r;return f},om=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],u=o[0],a=o[1],c=0;++r<i;)n=u,e=a,o=t[r],u=o[0],a=o[1],n-=u,e-=a,c+=Math.sqrt(n*n+e*e);return c},um=[].slice,am={};hu.prototype=yu.prototype={constructor:hu,defer:function(t){if("function"!=typeof t||this._call)throw new Error;if(null!=this._error)return this;var n=um.call(arguments,1);return n.push(t),++this._waiting,this._tasks.push(n),pu(this),this},abort:function(){return null==this._error&&_u(this,new Error("abort")),this},await:function(t){if("function"!=typeof t||this._call)throw new Error;return this._call=function(n,e){t.apply(null,[n].concat(e))},gu(this),this},awaitAll:function(t){if("function"!=typeof t||this._call)throw new Error;return this._call=t,gu(this),this}};var cm=function(t,n){return t=null==t?0:+t,n=null==n?1:+n,1===arguments.length?(n=t,t=0):n-=t,function(){return Math.random()*n+t}},sm=function(t,n){var e,r;return t=null==t?0:+t,n=null==n?1:+n,function(){var i;if(null!=e)i=e,e=null;else do{e=2*Math.random()-1,i=2*Math.random()-1,r=e*e+i*i}while(!r||r>1);return t+n*i*Math.sqrt(-2*Math.log(r)/r)}},fm=function(){var t=sm.apply(this,arguments);return function(){return Math.exp(t())}},lm=function(t){return function(){for(var n=0,e=0;e<t;++e)n+=Math.random();return n}},hm=function(t){var n=lm(t);return function(){return n()/t}},pm=function(t){return function(){return-Math.log(1-Math.random())/t}},dm=function(t,n){function e(t){var n,e=s.status;if(!e&&xu(s)||e>=200&&e<300||304===e){if(o)try{n=o.call(r,s)}catch(t){return void a.call("error",r,t)}else n=s;a.call("load",r,n)}else a.call("error",r,t)}var r,i,o,u,a=d("beforesend","progress","load","error"),c=Ye(),s=new XMLHttpRequest,f=null,l=null,h=0;if("undefined"==typeof XDomainRequest||"withCredentials"in s||!/^(http(s)?:)?\/\//.test(t)||(s=new XDomainRequest),"onload"in s?s.onload=s.onerror=s.ontimeout=e:s.onreadystatechange=function(t){s.readyState>3&&e(t)},s.onprogress=function(t){a.call("progress",r,t)},r={header:function(t,n){return t=(t+"").toLowerCase(),arguments.length<2?c.get(t):(null==n?c.remove(t):c.set(t,n+""),r)},mimeType:function(t){return arguments.length?(i=null==t?null:t+"",r):i},responseType:function(t){return arguments.length?(u=t,r):u},timeout:function(t){return arguments.length?(h=+t,r):h},user:function(t){return arguments.length<1?f:(f=null==t?null:t+"",r)},password:function(t){return arguments.length<1?l:(l=null==t?null:t+"",r)},response:function(t){return o=t,r},get:function(t,n){return r.send("GET",t,n)},post:function(t,n){return r.send("POST",t,n)},send:function(n,e,o){return s.open(n,t,!0,f,l),null==i||c.has("accept")||c.set("accept",i+",*/*"),s.setRequestHeader&&c.each(function(t,n){s.setRequestHeader(n,t)}),null!=i&&s.overrideMimeType&&s.overrideMimeType(i),null!=u&&(s.responseType=u),h>0&&(s.timeout=h),null==o&&"function"==typeof e&&(o=e,e=null),null!=o&&1===o.length&&(o=mu(o)),null!=o&&r.on("error",o).on("load",function(t){o(null,t)}),a.call("beforesend",r,s),s.send(null==e?null:e),r},abort:function(){return s.abort(),r},on:function(){var t=a.on.apply(a,arguments);return t===a?r:t}},null!=n){if("function"!=typeof n)throw new Error("invalid callback: "+n);return r.get(n)}return r},vm=function(t,n){return function(e,r){var i=dm(e).mimeType(t).response(n);if(null!=r){if("function"!=typeof r)throw new Error("invalid callback: "+r);return i.get(r)}return i}},_m=vm("text/html",function(t){return document.createRange().createContextualFragment(t.responseText)}),gm=vm("application/json",function(t){return JSON.parse(t.responseText)}),ym=vm("text/plain",function(t){return t.responseText}),mm=vm("application/xml",function(t){var n=t.responseXML;if(!n)throw new Error("parse error");return n}),xm=function(t,n){return function(e,r,i){arguments.length<3&&(i=r,r=null);var o=dm(e).mimeType(t);return o.row=function(t){return arguments.length?o.response(bu(n,r=t)):r},o.row(r),i?o.get(i):o}},bm=xm("text/csv",Od),wm=xm("text/tab-separated-values",jd),Mm=Array.prototype,Tm=Mm.map,km=Mm.slice,Sm={name:"implicit"},Nm=function(t){return function(){return t}},Em=function(t){return+t},Am=[0,1],Cm=function(n,e,i){var o,u=n[0],a=n[n.length-1],c=r(u,a,null==e?10:e);switch(i=lr(null==i?",f":i),i.type){case"s":var s=Math.max(Math.abs(u),Math.abs(a));return null!=i.precision||isNaN(o=Lv(c,s))||(i.precision=o),t.formatPrefix(i,s);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=Rv(c,Math.max(Math.abs(u),Math.abs(a))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=Pv(c))||(i.precision=o-2*("%"===i.type))}return t.format(i)},zm=function(t,n){t=t.slice();var e,r=0,i=t.length-1,o=t[r],u=t[i];return u<o&&(e=r,r=i,i=e,e=o,o=u,u=e),t[r]=n.floor(o),t[i]=n.ceil(u),t},Pm=new Date,Lm=new Date,Rm=Zu(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});Rm.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Zu(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):Rm:null};var qm=Rm.range,Um=6e4,Dm=6048e5,Om=Zu(function(t){t.setTime(1e3*Math.floor(t/1e3))},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),Fm=Om.range,Im=Zu(function(t){t.setTime(Math.floor(t/Um)*Um)},function(t,n){t.setTime(+t+n*Um)},function(t,n){return(n-t)/Um},function(t){return t.getMinutes()}),Ym=Im.range,Bm=Zu(function(t){var n=t.getTimezoneOffset()*Um%36e5;n<0&&(n+=36e5),t.setTime(36e5*Math.floor((+t-n)/36e5)+n)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),jm=Bm.range,Hm=Zu(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Um)/864e5},function(t){return t.getDate()-1}),Xm=Hm.range,Vm=Gu(0),$m=Gu(1),Wm=Gu(2),Zm=Gu(3),Gm=Gu(4),Jm=Gu(5),Qm=Gu(6),Km=Vm.range,tx=$m.range,nx=Wm.range,ex=Zm.range,rx=Gm.range,ix=Jm.range,ox=Qm.range,ux=Zu(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),ax=ux.range,cx=Zu(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});cx.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Zu(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var sx=cx.range,fx=Zu(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*Um)},function(t,n){return(n-t)/Um},function(t){return t.getUTCMinutes()}),lx=fx.range,hx=Zu(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()}),px=hx.range,dx=Zu(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1}),vx=dx.range,_x=Ju(0),gx=Ju(1),yx=Ju(2),mx=Ju(3),xx=Ju(4),bx=Ju(5),wx=Ju(6),Mx=_x.range,Tx=gx.range,kx=yx.range,Sx=mx.range,Nx=xx.range,Ex=bx.range,Ax=wx.range,Cx=Zu(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),zx=Cx.range,Px=Zu(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});Px.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Zu(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var Lx,Rx=Px.range,qx={"-":"",_:" ",0:"0"},Ux=/^\s*\d+/,Dx=/^%/,Ox=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;Za({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Fx=Date.prototype.toISOString?Ga:t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ"),Ix=+new Date("2000-01-01T00:00:00.000Z")?Ja:t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),Yx=1e3,Bx=60*Yx,jx=60*Bx,Hx=24*jx,Xx=7*Hx,Vx=30*Hx,$x=365*Hx,Wx=function(){return tc(cx,ux,Vm,Hm,Bm,Im,Om,Rm,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])},Zx=function(){return tc(Px,Cx,_x,dx,hx,fx,Om,Rm,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])},Gx=function(t){return t.match(/.{6}/g).map(function(t){return"#"+t})},Jx=Gx("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),Qx=Gx("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),Kx=Gx("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),tb=Gx("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),nb=Oh(Vt(300,.5,0),Vt(-240,.5,1)),eb=Oh(Vt(-100,.75,.35),Vt(80,1.5,.8)),rb=Oh(Vt(260,.75,.35),Vt(80,1.5,.8)),ib=Vt(),ob=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return ib.h=360*t-100,ib.s=1.5-1.5*n,ib.l=.8-.9*n,ib+""},ub=nc(Gx("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),ab=nc(Gx("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),cb=nc(Gx("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),sb=nc(Gx("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),fb=function(t){return function(){return t}},lb=Math.abs,hb=Math.atan2,pb=Math.cos,db=Math.max,vb=Math.min,_b=Math.sin,gb=Math.sqrt,yb=1e-12,mb=Math.PI,xb=mb/2,bb=2*mb,wb=function(){function t(){var t,s,f=+n.apply(this,arguments),l=+e.apply(this,arguments),h=o.apply(this,arguments)-xb,p=u.apply(this,arguments)-xb,d=lb(p-h),v=p>h;if(c||(c=t=Re()),l<f&&(s=l,l=f,f=s),l>yb)if(d>bb-yb)c.moveTo(l*pb(h),l*_b(h)),c.arc(0,0,l,h,p,!v),f>yb&&(c.moveTo(f*pb(p),f*_b(p)),c.arc(0,0,f,p,h,v));else{var _,g,y=h,m=p,x=h,b=p,w=d,M=d,T=a.apply(this,arguments)/2,k=T>yb&&(i?+i.apply(this,arguments):gb(f*f+l*l)),S=vb(lb(l-f)/2,+r.apply(this,arguments)),N=S,E=S;if(k>yb){var A=ic(k/f*_b(T)),C=ic(k/l*_b(T));(w-=2*A)>yb?(A*=v?1:-1,x+=A,b-=A):(w=0,x=b=(h+p)/2),(M-=2*C)>yb?(C*=v?1:-1,y+=C,m-=C):(M=0,y=m=(h+p)/2)}var z=l*pb(y),P=l*_b(y),L=f*pb(b),R=f*_b(b);if(S>yb){var q=l*pb(m),U=l*_b(m),D=f*pb(x),O=f*_b(x);if(d<mb){var F=w>yb?fc(z,P,D,O,q,U,L,R):[L,R],I=z-F[0],Y=P-F[1],B=q-F[0],j=U-F[1],H=1/_b(rc((I*B+Y*j)/(gb(I*I+Y*Y)*gb(B*B+j*j)))/2),X=gb(F[0]*F[0]+F[1]*F[1]);N=vb(S,(f-X)/(H-1)),E=vb(S,(l-X)/(H+1))}}M>yb?E>yb?(_=lc(D,O,z,P,l,E,v),g=lc(q,U,L,R,l,E,v),c.moveTo(_.cx+_.x01,_.cy+_.y01),E<S?c.arc(_.cx,_.cy,E,hb(_.y01,_.x01),hb(g.y01,g.x01),!v):(c.arc(_.cx,_.cy,E,hb(_.y01,_.x01),hb(_.y11,_.x11),!v),c.arc(0,0,l,hb(_.cy+_.y11,_.cx+_.x11),hb(g.cy+g.y11,g.cx+g.x11),!v),c.arc(g.cx,g.cy,E,hb(g.y11,g.x11),hb(g.y01,g.x01),!v))):(c.moveTo(z,P),c.arc(0,0,l,y,m,!v)):c.moveTo(z,P),f>yb&&w>yb?N>yb?(_=lc(L,R,q,U,f,-N,v),g=lc(z,P,D,O,f,-N,v),c.lineTo(_.cx+_.x01,_.cy+_.y01),N<S?c.arc(_.cx,_.cy,N,hb(_.y01,_.x01),hb(g.y01,g.x01),!v):(c.arc(_.cx,_.cy,N,hb(_.y01,_.x01),hb(_.y11,_.x11),!v),c.arc(0,0,f,hb(_.cy+_.y11,_.cx+_.x11),hb(g.cy+g.y11,g.cx+g.x11),v),c.arc(g.cx,g.cy,N,hb(g.y11,g.x11),hb(g.y01,g.x01),!v))):c.arc(0,0,f,b,x,v):c.lineTo(L,R)}else c.moveTo(0,0);if(c.closePath(),t)return c=null,t+""||null}var n=oc,e=uc,r=fb(0),i=null,o=ac,u=cc,a=sc,c=null;return t.centroid=function(){var t=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+o.apply(this,arguments)+ +u.apply(this,arguments))/2-mb/2;return[pb(r)*t,_b(r)*t]},t.innerRadius=function(e){return arguments.length?(n="function"==typeof e?e:fb(+e),t):n},t.outerRadius=function(n){return arguments.length?(e="function"==typeof n?n:fb(+n),t):e},t.cornerRadius=function(n){return arguments.length?(r="function"==typeof n?n:fb(+n),t):r},t.padRadius=function(n){return arguments.length?(i=null==n?null:"function"==typeof n?n:fb(+n),t):i},t.startAngle=function(n){return arguments.length?(o="function"==typeof n?n:fb(+n),t):o},t.endAngle=function(n){return arguments.length?(u="function"==typeof n?n:fb(+n),t):u},t.padAngle=function(n){return arguments.length?(a="function"==typeof n?n:fb(+n),t):a},t.context=function(n){return arguments.length?(c=null==n?null:n,t):c},t};hc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var Mb=function(t){return new hc(t)},Tb=function(){function t(t){var a,c,s,f=t.length,l=!1;for(null==i&&(u=o(s=Re())),a=0;a<=f;++a)!(a<f&&r(c=t[a],a,t))===l&&((l=!l)?u.lineStart():u.lineEnd()),l&&u.point(+n(c,a,t),+e(c,a,t));if(s)return u=null,s+""||null}var n=pc,e=dc,r=fb(!0),i=null,o=Mb,u=null;return t.x=function(e){return arguments.length?(n="function"==typeof e?e:fb(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:fb(+n),t):e},t.defined=function(n){return arguments.length?(r="function"==typeof n?n:fb(!!n),t):r},t.curve=function(n){return arguments.length?(o=n,null!=i&&(u=o(i)),t):o},t.context=function(n){return arguments.length?(null==n?i=u=null:u=o(i=n),t):i},t},kb=function(){function t(t){var n,f,l,h,p,d=t.length,v=!1,_=new Array(d),g=new Array(d);for(null==a&&(s=c(p=Re())),n=0;n<=d;++n){if(!(n<d&&u(h=t[n],n,t))===v)if(v=!v)f=n,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),l=n-1;l>=f;--l)s.point(_[l],g[l]);s.lineEnd(),s.areaEnd()}v&&(_[n]=+e(h,n,t),g[n]=+i(h,n,t),s.point(r?+r(h,n,t):_[n],o?+o(h,n,t):g[n]))}if(p)return s=null,p+""||null}function n(){return Tb().defined(u).curve(c).context(a)}var e=pc,r=null,i=fb(0),o=dc,u=fb(!0),a=null,c=Mb,s=null;return t.x=function(n){return arguments.length?(e="function"==typeof n?n:fb(+n),r=null,t):e},t.x0=function(n){return arguments.length?(e="function"==typeof n?n:fb(+n),t):e},t.x1=function(n){return arguments.length?(r=null==n?null:"function"==typeof n?n:fb(+n),t):r},t.y=function(n){return arguments.length?(i="function"==typeof n?n:fb(+n),o=null,t):i},t.y0=function(n){return arguments.length?(i="function"==typeof n?n:fb(+n),t):i},t.y1=function(n){return arguments.length?(o=null==n?null:"function"==typeof n?n:fb(+n),t):o},t.lineX0=t.lineY0=function(){return n().x(e).y(i)},t.lineY1=function(){return n().x(e).y(o)},t.lineX1=function(){return n().x(r).y(i)},t.defined=function(n){return arguments.length?(u="function"==typeof n?n:fb(!!n),t):u},t.curve=function(n){return arguments.length?(c=n,null!=a&&(s=c(a)),t):c},t.context=function(n){return arguments.length?(null==n?a=s=null:s=c(a=n),t):a},t},Sb=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},Nb=function(t){return t},Eb=function(){function t(t){var a,c,s,f,l,h=t.length,p=0,d=new Array(h),v=new Array(h),_=+i.apply(this,arguments),g=Math.min(bb,Math.max(-bb,o.apply(this,arguments)-_)),y=Math.min(Math.abs(g)/h,u.apply(this,arguments)),m=y*(g<0?-1:1);for(a=0;a<h;++a)(l=v[d[a]=a]=+n(t[a],a,t))>0&&(p+=l);for(null!=e?d.sort(function(t,n){return e(v[t],v[n])}):null!=r&&d.sort(function(n,e){return r(t[n],t[e])}),a=0,s=p?(g-h*m)/p:0;a<h;++a,_=f)c=d[a],l=v[c],f=_+(l>0?l*s:0)+m,v[c]={data:t[c],index:a,value:l,startAngle:_,endAngle:f,padAngle:y};return v}var n=Nb,e=Sb,r=null,i=fb(0),o=fb(bb),u=fb(0);return t.value=function(e){return arguments.length?(n="function"==typeof e?e:fb(+e),t):n},t.sortValues=function(n){return arguments.length?(e=n,r=null,t):e},t.sort=function(n){return arguments.length?(r=n,e=null,t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:fb(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:fb(+n),t):o},t.padAngle=function(n){return arguments.length?(u="function"==typeof n?n:fb(+n),t):u},t},Ab=_c(Mb);vc.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var Cb=function(){return gc(Tb().curve(Ab))},zb=function(){var t=kb().curve(Ab),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return gc(e())},delete t.lineX0,t.lineEndAngle=function(){return gc(r())},delete t.lineX1,t.lineInnerRadius=function(){return gc(i())},delete t.lineY0,t.lineOuterRadius=function(){return gc(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(_c(t)):n()._curve},t},Pb={draw:function(t,n){var e=Math.sqrt(n/mb);t.moveTo(e,0),t.arc(0,0,e,0,bb)}},Lb={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},Rb=Math.sqrt(1/3),qb=2*Rb,Ub={draw:function(t,n){var e=Math.sqrt(n/qb),r=e*Rb;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},Db=Math.sin(mb/10)/Math.sin(7*mb/10),Ob=Math.sin(bb/10)*Db,Fb=-Math.cos(bb/10)*Db,Ib={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=Ob*e,i=Fb*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var u=bb*o/5,a=Math.cos(u),c=Math.sin(u);t.lineTo(c*e,-a*e),t.lineTo(a*r-c*i,c*r+a*i)}t.closePath()}},Yb={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},Bb=Math.sqrt(3),jb={draw:function(t,n){var e=-Math.sqrt(n/(3*Bb));t.moveTo(0,2*e),t.lineTo(-Bb*e,-e),t.lineTo(Bb*e,-e),t.closePath()}},Hb=-.5,Xb=Math.sqrt(3)/2,Vb=1/Math.sqrt(12),$b=3*(Vb/2+1),Wb={draw:function(t,n){var e=Math.sqrt(n/$b),r=e/2,i=e*Vb,o=r,u=e*Vb+e,a=-o,c=u;t.moveTo(r,i),t.lineTo(o,u),t.lineTo(a,c),t.lineTo(Hb*r-Xb*i,Xb*r+Hb*i),t.lineTo(Hb*o-Xb*u,Xb*o+Hb*u),t.lineTo(Hb*a-Xb*c,Xb*a+Hb*c),t.lineTo(Hb*r+Xb*i,Hb*i-Xb*r),t.lineTo(Hb*o+Xb*u,Hb*u-Xb*o),t.lineTo(Hb*a+Xb*c,Hb*c-Xb*a),t.closePath()}},Zb=[Pb,Lb,Ub,Yb,Ib,jb,Wb],Gb=function(){function t(){var t;if(r||(r=t=Re()),n.apply(this,arguments).draw(r,+e.apply(this,arguments)),t)return r=null,t+""||null}var n=fb(Pb),e=fb(64),r=null;return t.type=function(e){return arguments.length?(n="function"==typeof e?e:fb(e),t):n},t.size=function(n){return arguments.length?(e="function"==typeof n?n:fb(+n),t):e},t.context=function(n){return arguments.length?(r=null==n?null:n,t):r},t},Jb=function(){};mc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:yc(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:yc(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var Qb=function(t){return new mc(t)};xc.prototype={areaStart:Jb,areaEnd:Jb,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:yc(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var Kb=function(t){return new xc(t)};bc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:yc(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var tw=function(t){return new bc(t)};wc.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],u=t[e]-i,a=n[e]-o,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*u),this._beta*n[c]+(1-this._beta)*(o+r*a));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var nw=function t(n){function e(t){return 1===n?new mc(t):new wc(t,n)}return e.beta=function(n){return t(+n)},e}(.85);Tc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Mc(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:Mc(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var ew=function t(n){function e(t){return new Tc(t,n)}return e.tension=function(n){return t(+n)},e}(0);kc.prototype={areaStart:Jb,areaEnd:Jb,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Mc(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var rw=function t(n){function e(t){return new kc(t,n)}return e.tension=function(n){return t(+n)},e}(0);Sc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Mc(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var iw=function t(n){function e(t){return new Sc(t,n)}return e.tension=function(n){return t(+n)},e}(0);Ec.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,
this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:Nc(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var ow=function t(n){function e(t){return n?new Ec(t,n):new Tc(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Ac.prototype={areaStart:Jb,areaEnd:Jb,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Nc(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var uw=function t(n){function e(t){return n?new Ac(t,n):new kc(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Cc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Nc(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var aw=function t(n){function e(t){return n?new Cc(t,n):new Sc(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);zc.prototype={areaStart:Jb,areaEnd:Jb,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}};var cw=function(t){return new zc(t)};Uc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:qc(this,this._t0,Rc(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(t=+t,n=+n,t!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,qc(this,Rc(this,e=Lc(this,t,n)),e);break;default:qc(this,this._t0,e=Lc(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(Dc.prototype=Object.create(Uc.prototype)).point=function(t,n){Uc.prototype.point.call(this,n,t)},Oc.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},Yc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=Bc(t),i=Bc(n),o=0,u=1;u<e;++o,++u)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[u],n[u]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var sw=function(t){return new Yc(t)};jc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}};var fw=function(t){return new jc(t,.5)},lw=Array.prototype.slice,hw=function(t,n){if((r=t.length)>1)for(var e,r,i=1,o=t[n[0]],u=o.length;i<r;++i){e=o,o=t[n[i]];for(var a=0;a<u;++a)o[a][1]+=o[a][0]=isNaN(e[a][1])?e[a][0]:e[a][1]}},pw=function(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e},dw=function(){function t(t){var o,u,a=n.apply(this,arguments),c=t.length,s=a.length,f=new Array(s);for(o=0;o<s;++o){for(var l,h=a[o],p=f[o]=new Array(c),d=0;d<c;++d)p[d]=l=[0,+i(t[d],h,d,t)],l.data=t[d];p.key=h}for(o=0,u=e(f);o<s;++o)f[u[o]].index=o;return r(f,u),f}var n=fb([]),e=pw,r=hw,i=Vc;return t.keys=function(e){return arguments.length?(n="function"==typeof e?e:fb(lw.call(e)),t):n},t.value=function(n){return arguments.length?(i="function"==typeof n?n:fb(+n),t):i},t.order=function(n){return arguments.length?(e=null==n?pw:"function"==typeof n?n:fb(lw.call(n)),t):e},t.offset=function(n){return arguments.length?(r=null==n?hw:n,t):r},t},vw=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,u=t[0].length;o<u;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}hw(t,n)}},_w=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var u=0,a=0;u<e;++u)a+=t[u][r][1]||0;i[r][1]+=i[r][0]=-a/2}hw(t,n)}},gw=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,u=1;u<r;++u){for(var a=0,c=0,s=0;a<i;++a){for(var f=t[n[a]],l=f[u][1]||0,h=f[u-1][1]||0,p=(l-h)/2,d=0;d<a;++d){var v=t[n[d]];p+=(v[u][1]||0)-(v[u-1][1]||0)}c+=l,s+=p*l}e[u-1][1]+=e[u-1][0]=o,c&&(o-=s/c)}e[u-1][1]+=e[u-1][0]=o,hw(t,n)}},yw=function(t){var n=t.map($c);return pw(t).sort(function(t,e){return n[t]-n[e]})},mw=function(t){return yw(t).reverse()},xw=function(t){var n,e,r=t.length,i=t.map($c),o=pw(t).sort(function(t,n){return i[n]-i[t]}),u=0,a=0,c=[],s=[];for(n=0;n<r;++n)e=o[n],u<a?(u+=i[e],c.push(e)):(a+=i[e],s.push(e));return s.reverse().concat(c)},bw=function(t){return pw(t).reverse()},ww=function(t){return function(){return t}};Gc.prototype={constructor:Gc,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=ts(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(Qc(this,e),t=e,e=t.U),e.C=!1,r.C=!0,Kc(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(Kc(this,e),t=e,e=t.U),e.C=!1,r.C=!0,Qc(this,r))),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,u=t.R;if(e=o?u?ts(u):o:u,i?i.L===t?i.L=e:i.R=e:this._=e,o&&u?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==u?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=u,u.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r){if(t&&t.C)return void(t.C=!1);do{if(t===this._)break;if(t===i.L){if(n=i.R,n.C&&(n.C=!1,i.C=!0,Qc(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,Kc(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,Qc(this,i),t=this._;break}}else if(n=i.L,n.C&&(n.C=!1,i.C=!0,Kc(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,Qc(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,Kc(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var Mw,Tw,kw,Sw,Nw,Ew=[],Aw=[],Cw=1e-6,zw=1e-12;ks.prototype={constructor:ks,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return ss(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){if(o=(i=e.halfedges).length)for(var i,o,u,a=e.site,c=-1,s=n[i[o-1]],f=s.left===a?s.right:s.left;++c<o;)u=f,s=n[i[c]],f=s.left===a?s.right:s.left,u&&f&&r<u.index&&r<f.index&&Ms(a,u,f)<0&&t.push([a.data,u.data,f.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,o=this,u=o._found||0,a=o.cells.length;!(i=o.cells[u]);)if(++u>=a)return null;var c=t-i.site[0],s=n-i.site[1],f=c*c+s*s;do{i=o.cells[r=u],u=null,i.halfedges.forEach(function(e){var r=o.edges[e],a=r.left;if(a!==i.site&&a||(a=r.right)){var c=t-a[0],s=n-a[1],l=c*c+s*s;l<f&&(f=l,u=a.index)}})}while(null!==u);return o._found=r,null==e||f<=e*e?i.site:null}};var Pw=function(){function t(t){return new ks(t.map(function(r,i){var o=[Math.round(n(r,i,t)/Cw)*Cw,Math.round(e(r,i,t)/Cw)*Cw];return o.index=i,o.data=r,o}),r)}var n=Wc,e=Zc,r=null;return t.polygons=function(n){return t(n).polygons()},t.links=function(n){return t(n).links()},t.triangles=function(n){return t(n).triangles()},t.x=function(e){return arguments.length?(n="function"==typeof e?e:ww(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:ww(+n),t):e},t.extent=function(n){return arguments.length?(r=null==n?null:[[+n[0][0],+n[0][1]],[+n[1][0],+n[1][1]]],t):r&&[[r[0][0],r[0][1]],[r[1][0],r[1][1]]]},t.size=function(n){return arguments.length?(r=null==n?null:[[0,0],[+n[0],+n[1]]],t):r&&[r[1][0]-r[0][0],r[1][1]-r[0][1]]},t},Lw=function(t){return function(){return t}};Ns.prototype={constructor:Ns,scale:function(t){return 1===t?this:new Ns(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new Ns(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Rw=new Ns(1,0,0);Es.prototype=Ns.prototype;var qw=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},Uw=function(){function n(t){t.on("wheel.zoom",s).on("mousedown.zoom",f).on("dblclick.zoom",l).on("touchstart.zoom",h).on("touchmove.zoom",p).on("touchend.zoom touchcancel.zoom",v).style("-webkit-tap-highlight-color","rgba(0,0,0,0)").property("__zoom",Ps)}function e(t,n){return n=Math.max(x,Math.min(b,n)),n===t.k?t:new Ns(n,t.x,t.y)}function r(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new Ns(t.k,r,i)}function i(t,n){var e=t.invertX(n[0][0])-w,r=t.invertX(n[1][0])-M,i=t.invertY(n[0][1])-T,o=t.invertY(n[1][1])-k;return t.translate(r>e?(e+r)/2:Math.min(0,e)||Math.max(0,r),o>i?(i+o)/2:Math.min(0,i)||Math.max(0,o))}function o(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function u(t,n,e){t.on("start.zoom",function(){a(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){a(this,arguments).end()}).tween("zoom",function(){var t=this,r=arguments,i=a(t,r),u=m.apply(t,r),c=e||o(u),s=Math.max(u[1][0]-u[0][0],u[1][1]-u[0][1]),f=t.__zoom,l="function"==typeof n?n.apply(t,r):n,h=N(f.invert(c).concat(s/f.k),l.invert(c).concat(s/l.k));return function(t){if(1===t)t=l;else{var n=h(t),e=s/n[2];t=new Ns(e,c[0]-n[0]*e,c[1]-n[1]*e)}i.zoom(null,t)}})}function a(t,n){for(var e,r=0,i=A.length;r<i;++r)if((e=A[r]).that===t)return e;return new c(t,n)}function c(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=m.apply(t,n)}function s(){function n(){o.wheel=null,o.end()}if(y.apply(this,arguments)){var o=a(this,arguments),u=this.__zoom,c=Math.max(x,Math.min(b,u.k*Math.pow(2,-t.event.deltaY*(t.event.deltaMode?120:1)/500))),s=Ff(this);if(o.wheel)o.mouse[0][0]===s[0]&&o.mouse[0][1]===s[1]||(o.mouse[1]=u.invert(o.mouse[0]=s)),clearTimeout(o.wheel);else{if(u.k===c)return;o.mouse=[s,u.invert(s)],ap(this),o.start()}qw(),o.wheel=setTimeout(n,P),o.zoom("mouse",i(r(e(u,c),o.mouse[0],o.mouse[1]),o.extent))}}function f(){function n(){qw(),o.moved=!0,o.zoom("mouse",i(r(o.that.__zoom,o.mouse[0]=Ff(o.that),o.mouse[1]),o.extent))}function e(){u.on("mousemove.zoom mouseup.zoom",null),gt(t.event.view,o.moved),qw(),o.end()}if(!g&&y.apply(this,arguments)){var o=a(this,arguments),u=bl(t.event.view).on("mousemove.zoom",n,!0).on("mouseup.zoom",e,!0),c=Ff(this);Sl(t.event.view),As(),o.mouse=[c,this.__zoom.invert(c)],ap(this),o.start()}}function l(){if(y.apply(this,arguments)){var o=this.__zoom,a=Ff(this),c=o.invert(a),s=o.k*(t.event.shiftKey?.5:2),f=i(r(e(o,s),a,c),m.apply(this,arguments));qw(),S>0?bl(this).transition().duration(S).call(u,f,a):bl(this).call(n.transform,f)}}function h(){if(y.apply(this,arguments)){var n,e,r,i,o=a(this,arguments),u=t.event.changedTouches,c=u.length;for(As(),e=0;e<c;++e)r=u[e],i=Ml(this,u,r.identifier),i=[i,this.__zoom.invert(i),r.identifier],o.touch0?o.touch1||(o.touch1=i):(o.touch0=i,n=!0);if(_&&(_=clearTimeout(_),!o.touch1))return o.end(),void((i=bl(this).on("dblclick.zoom"))&&i.apply(this,arguments));n&&(_=setTimeout(function(){_=null},z),ap(this),o.start())}}function p(){var n,o,u,c,s=a(this,arguments),f=t.event.changedTouches,l=f.length;for(qw(),_&&(_=clearTimeout(_)),n=0;n<l;++n)o=f[n],u=Ml(this,f,o.identifier),s.touch0&&s.touch0[2]===o.identifier?s.touch0[0]=u:s.touch1&&s.touch1[2]===o.identifier&&(s.touch1[0]=u);if(o=s.that.__zoom,s.touch1){var h=s.touch0[0],p=s.touch0[1],d=s.touch1[0],v=s.touch1[1],g=(g=d[0]-h[0])*g+(g=d[1]-h[1])*g,y=(y=v[0]-p[0])*y+(y=v[1]-p[1])*y;o=e(o,Math.sqrt(g/y)),u=[(h[0]+d[0])/2,(h[1]+d[1])/2],c=[(p[0]+v[0])/2,(p[1]+v[1])/2]}else{if(!s.touch0)return;u=s.touch0[0],c=s.touch0[1]}s.zoom("touch",i(r(o,u,c),s.extent))}function v(){var n,e,r=a(this,arguments),i=t.event.changedTouches,o=i.length;for(As(),g&&clearTimeout(g),g=setTimeout(function(){g=null},z),n=0;n<o;++n)e=i[n],r.touch0&&r.touch0[2]===e.identifier?delete r.touch0:r.touch1&&r.touch1[2]===e.identifier&&delete r.touch1;r.touch1&&!r.touch0&&(r.touch0=r.touch1,delete r.touch1),r.touch0||r.end()}var _,g,y=Cs,m=zs,x=0,b=1/0,w=-b,M=b,T=w,k=M,S=250,N=Ph,A=[],C=d("start","zoom","end"),z=500,P=150;return n.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",Ps),t!==e?u(t,n):e.interrupt().each(function(){a(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},n.scaleBy=function(t,e){n.scaleTo(t,function(){return this.__zoom.k*("function"==typeof e?e.apply(this,arguments):e)})},n.scaleTo=function(t,u){n.transform(t,function(){var t=m.apply(this,arguments),n=this.__zoom,a=o(t),c=n.invert(a);return i(r(e(n,"function"==typeof u?u.apply(this,arguments):u),a,c),t)})},n.translateBy=function(t,e,r){n.transform(t,function(){return i(this.__zoom.translate("function"==typeof e?e.apply(this,arguments):e,"function"==typeof r?r.apply(this,arguments):r),m.apply(this,arguments))})},c.prototype={start:function(){return 1==++this.active&&(this.index=A.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(A.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){E(new Ss(n,t,this.that.__zoom),C.apply,C,[t,this.that,this.args])}},n.filter=function(t){return arguments.length?(y="function"==typeof t?t:Lw(!!t),n):y},n.extent=function(t){return arguments.length?(m="function"==typeof t?t:Lw([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),n):m},n.scaleExtent=function(t){return arguments.length?(x=+t[0],b=+t[1],n):[x,b]},n.translateExtent=function(t){return arguments.length?(w=+t[0][0],M=+t[1][0],T=+t[0][1],k=+t[1][1],n):[[w,T],[M,k]]},n.duration=function(t){return arguments.length?(S=+t,n):S},n.interpolate=function(t){return arguments.length?(N=t,n):N},n.on=function(){var t=C.on.apply(C,arguments);return t===C?n:t},n};t.version="4.7.3",t.bisect=Us,t.bisectRight=Us,t.bisectLeft=Ds,t.ascending=Ls,t.bisector=Rs,t.cross=Fs,t.descending=Is,t.deviation=js,t.extent=Hs,t.histogram=ef,t.thresholdFreedmanDiaconis=of,t.thresholdScott=uf,t.thresholdSturges=nf,t.max=af,t.mean=cf,t.median=sf,t.merge=ff,t.min=lf,t.pairs=Os,t.permute=hf,t.quantile=rf,t.range=Gs,t.scan=pf,t.shuffle=df,t.sum=vf,t.ticks=tf,t.tickStep=r,t.transpose=_f,t.variance=Bs,t.zip=gf,t.axisTop=f,t.axisRight=l,t.axisBottom=h,t.axisLeft=p,t.brush=gd,t.brushX=Ae,t.brushY=Ce,t.brushSelection=Ee,t.chord=Td,t.ribbon=Cd,t.nest=zd,t.set=$e,t.map=Ye,t.keys=Ld,t.values=Rd,t.entries=qd,t.color=Tt,t.rgb=Et,t.hsl=Pt,t.lab=Ut,t.hcl=jt,t.cubehelix=Vt,t.dispatch=d,t.drag=El,t.dragDisable=Sl,t.dragEnable=gt,t.dsvFormat=Ud,t.csvParse=Od,t.csvParseRows=Fd,t.csvFormat=Id,t.csvFormatRows=Yd,t.tsvParse=jd,t.tsvParseRows=Hd,t.tsvFormat=Xd,t.tsvFormatRows=Vd,t.easeLinear=ee,t.easeQuad=oe,t.easeQuadIn=re,t.easeQuadOut=ie,t.easeQuadInOut=oe,t.easeCubic=ce,t.easeCubicIn=ue,t.easeCubicOut=ae,t.easeCubicInOut=ce,t.easePoly=Pp,t.easePolyIn=Cp,t.easePolyOut=zp,t.easePolyInOut=Pp,t.easeSin=le,t.easeSinIn=se,t.easeSinOut=fe,t.easeSinInOut=le,t.easeExp=de,t.easeExpIn=he,t.easeExpOut=pe,t.easeExpInOut=de,t.easeCircle=ge,t.easeCircleIn=ve,t.easeCircleOut=_e,t.easeCircleInOut=ge,t.easeBounce=me,t.easeBounceIn=ye,t.easeBounceOut=me,t.easeBounceInOut=xe,t.easeBack=$p,t.easeBackIn=Xp,t.easeBackOut=Vp,t.easeBackInOut=$p,t.easeElastic=Gp,t.easeElasticIn=Zp,t.easeElasticOut=Gp,t.easeElasticInOut=Jp,t.forceCenter=$d,t.forceCollide=lv,t.forceLink=hv,t.forceManyBody=_v,t.forceSimulation=vv,t.forceX=gv,t.forceY=yv,t.formatDefaultLocale=pr,t.formatLocale=zv,t.formatSpecifier=lr,t.precisionFixed=Pv,t.precisionPrefix=Lv,t.precisionRound=Rv,t.geoArea=F_,t.geoBounds=B_,t.geoCentroid=H_,t.geoCircle=og,t.geoClipExtent=hg,t.geoContains=Mg,t.geoDistance=xg,t.geoGraticule=wi,t.geoGraticule10=Mi,t.geoInterpolate=Tg,t.geoLength=gg,t.geoPath=Jg,t.geoAlbers=ay,t.geoAlbersUsa=cy,t.geoAzimuthalEqualArea=fy,t.geoAzimuthalEqualAreaRaw=sy,t.geoAzimuthalEquidistant=hy,t.geoAzimuthalEquidistantRaw=ly,t.geoConicConformal=dy,t.geoConicConformalRaw=lo,t.geoConicEqualArea=uy,t.geoConicEqualAreaRaw=io,t.geoConicEquidistant=_y,t.geoConicEquidistantRaw=po,t.geoEquirectangular=vy,t.geoEquirectangularRaw=ho,t.geoGnomonic=gy,t.geoGnomonicRaw=vo,t.geoIdentity=yy,t.geoProjection=to,t.geoProjectionMutator=no,t.geoMercator=py,t.geoMercatorRaw=co,t.geoOrthographic=my,t.geoOrthographicRaw=go,t.geoStereographic=xy,t.geoStereographicRaw=yo,t.geoTransverseMercator=by,t.geoTransverseMercatorRaw=mo,t.geoRotation=ig,t.geoStream=q_,t.geoTransform=ny,t.cluster=wy,t.hierarchy=Ao,t.pack=Oy,t.packSiblings=Uy,t.packEnclose=qy,t.partition=Yy,t.stratify=Xy,t.tree=Vy,t.treemap=Gy,t.treemapBinary=Jy,t.treemapDice=Iy,t.treemapSlice=$y,t.treemapSliceDice=Qy,t.treemapSquarify=Zy,t.treemapResquarify=Ky,t.interpolate=Th,t.interpolateArray=gh,t.interpolateBasis=lh,t.interpolateBasisClosed=hh,t.interpolateDate=yh,t.interpolateNumber=mh,t.interpolateObject=xh,t.interpolateRound=kh,t.interpolateString=Mh,t.interpolateTransformCss=Ah,t.interpolateTransformSvg=Ch,t.interpolateZoom=Ph,t.interpolateRgb=dh,t.interpolateRgbBasis=vh,t.interpolateRgbBasisClosed=_h,t.interpolateHsl=Lh,t.interpolateHslLong=Rh,t.interpolateLab=ln,t.interpolateHcl=qh,t.interpolateHclLong=Uh,t.interpolateCubehelix=Dh,t.interpolateCubehelixLong=Oh,t.quantize=Fh,t.path=Re,t.polygonArea=tm,t.polygonCentroid=nm,t.polygonHull=rm;t.polygonContains=im,t.polygonLength=om,t.quadtree=er,t.queue=yu,t.randomUniform=cm,t.randomNormal=sm,t.randomLogNormal=fm,t.randomBates=hm,t.randomIrwinHall=lm,t.randomExponential=pm,t.request=dm,t.html=_m,t.json=gm,t.text=ym,t.xml=mm,t.csv=bm,t.tsv=wm,t.scaleBand=Mu,t.scalePoint=ku,t.scaleIdentity=qu,t.scaleLinear=Ru,t.scaleLog=Bu,t.scaleOrdinal=wu,t.scaleImplicit=Sm,t.scalePow=Hu,t.scaleSqrt=Xu,t.scaleQuantile=Vu,t.scaleQuantize=$u,t.scaleThreshold=Wu,t.scaleTime=Wx,t.scaleUtc=Zx,t.schemeCategory10=Jx,t.schemeCategory20b=Qx,t.schemeCategory20c=Kx,t.schemeCategory20=tb,t.interpolateCubehelixDefault=nb,t.interpolateRainbow=ob,t.interpolateWarm=eb,t.interpolateCool=rb,t.interpolateViridis=ub,t.interpolateMagma=ab,t.interpolateInferno=cb,t.interpolatePlasma=sb,t.scaleSequential=ec,t.creator=Af,t.local=b,t.matcher=Rf,t.mouse=Ff,t.namespace=Ef,t.namespaces=Nf,t.select=bl,t.selectAll=wl,t.selection=vt,t.selector=If,t.selectorAll=Bf,t.touch=Ml,t.touches=Tl,t.window=al,t.customEvent=E,t.arc=wb,t.area=kb,t.line=Tb,t.pie=Eb,t.radialArea=zb,t.radialLine=Cb,t.symbol=Gb,t.symbols=Zb,t.symbolCircle=Pb,t.symbolCross=Lb,t.symbolDiamond=Ub,t.symbolSquare=Yb,t.symbolStar=Ib,t.symbolTriangle=jb,t.symbolWye=Wb,t.curveBasisClosed=Kb,t.curveBasisOpen=tw,t.curveBasis=Qb,t.curveBundle=nw,t.curveCardinalClosed=rw,t.curveCardinalOpen=iw,t.curveCardinal=ew,t.curveCatmullRomClosed=uw,t.curveCatmullRomOpen=aw,t.curveCatmullRom=ow,t.curveLinearClosed=cw,t.curveLinear=Mb,t.curveMonotoneX=Fc,t.curveMonotoneY=Ic,t.curveNatural=sw,t.curveStep=fw,t.curveStepAfter=Xc,t.curveStepBefore=Hc,t.stack=dw,t.stackOffsetExpand=vw,t.stackOffsetNone=hw,t.stackOffsetSilhouette=_w,t.stackOffsetWiggle=gw,t.stackOrderAscending=yw,t.stackOrderDescending=mw,t.stackOrderInsideOut=xw,t.stackOrderNone=pw,t.stackOrderReverse=bw,t.timeInterval=Zu,t.timeMillisecond=Rm,t.timeMilliseconds=qm,t.utcMillisecond=Rm,t.utcMilliseconds=qm,t.timeSecond=Om,t.timeSeconds=Fm,t.utcSecond=Om,t.utcSeconds=Fm,t.timeMinute=Im,t.timeMinutes=Ym,t.timeHour=Bm,t.timeHours=jm,t.timeDay=Hm,t.timeDays=Xm,t.timeWeek=Vm,t.timeWeeks=Km,t.timeSunday=Vm,t.timeSundays=Km,t.timeMonday=$m,t.timeMondays=tx,t.timeTuesday=Wm,t.timeTuesdays=nx,t.timeWednesday=Zm,t.timeWednesdays=ex,t.timeThursday=Gm,t.timeThursdays=rx,t.timeFriday=Jm,t.timeFridays=ix,t.timeSaturday=Qm,t.timeSaturdays=ox,t.timeMonth=ux,t.timeMonths=ax,t.timeYear=cx,t.timeYears=sx,t.utcMinute=fx,t.utcMinutes=lx,t.utcHour=hx,t.utcHours=px,t.utcDay=dx,t.utcDays=vx,t.utcWeek=_x,t.utcWeeks=Mx,t.utcSunday=_x,t.utcSundays=Mx,t.utcMonday=gx,t.utcMondays=Tx,t.utcTuesday=yx,t.utcTuesdays=kx,t.utcWednesday=mx,t.utcWednesdays=Sx,t.utcThursday=xx,t.utcThursdays=Nx,t.utcFriday=bx,t.utcFridays=Ex,t.utcSaturday=wx,t.utcSaturdays=Ax,t.utcMonth=Cx,t.utcMonths=zx,t.utcYear=Px,t.utcYears=Rx,t.timeFormatDefaultLocale=Za,t.timeFormatLocale=na,t.isoFormat=Fx,t.isoParse=Ix,t.now=dn,t.timer=gn,t.timerFlush=yn,t.timeout=Zh,t.interval=Gh,t.transition=te,t.active=nd,t.interrupt=ap,t.voronoi=Pw,t.zoom=Uw,t.zoomTransform=Es,t.zoomIdentity=Rw,Object.defineProperty(t,"__esModule",{value:!0})});// https://github.com/d3/d3-selection-multi Version 1.0.1. Copyright 2017 Mike Bostock.
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("d3-selection"),require("d3-transition")):"function"==typeof define&&define.amd?define(["d3-selection","d3-transition"],n):n(t.d3,t.d3)}(this,function(t,n){"use strict";function r(n,r){return n.each(function(){var n=r.apply(this,arguments),e=t.select(this);for(var i in n)e.attr(i,n[i])})}function e(t,n){for(var r in n)t.attr(r,n[r]);return t}function i(n,r,e){return n.each(function(){var n=r.apply(this,arguments),i=t.select(this);for(var o in n)i.style(o,n[o],e)})}function o(t,n,r){for(var e in n)t.style(e,n[e],r);return t}function f(n,r){return n.each(function(){var n=r.apply(this,arguments),e=t.select(this);for(var i in n)e.property(i,n[i])})}function u(t,n){for(var r in n)t.property(r,n[r]);return t}function s(n,r){return n.each(function(){var e=r.apply(this,arguments),i=t.select(this).transition(n);for(var o in e)i.attr(o,e[o])})}function c(t,n){for(var r in n)t.attr(r,n[r]);return t}function a(n,r,e){return n.each(function(){var i=r.apply(this,arguments),o=t.select(this).transition(n);for(var f in i)o.style(f,i[f],e)})}function p(t,n,r){for(var e in n)t.style(e,n[e],r);return t}var l=function(t){return("function"==typeof t?r:e)(this,t)},y=function(t,n){return("function"==typeof t?i:o)(this,t,null==n?"":n)},h=function(t){return("function"==typeof t?f:u)(this,t)},v=function(t){return("function"==typeof t?s:c)(this,t)},d=function(t,n){return("function"==typeof t?a:p)(this,t,null==n?"":n)};t.selection.prototype.attrs=l,t.selection.prototype.styles=y,t.selection.prototype.properties=h,n.transition.prototype.attrs=v,n.transition.prototype.styles=d});// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// This is CodeMirror (http://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CodeMirror = factory());
}(this, (function () { 'use strict';

// Kludges for bugs and behavior differences that can't be feature
// detected are enabled based on userAgent etc sniffing.
var userAgent = navigator.userAgent
var platform = navigator.platform

var gecko = /gecko\/\d/i.test(userAgent)
var ie_upto10 = /MSIE \d/.test(userAgent)
var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent)
var edge = /Edge\/(\d+)/.exec(userAgent)
var ie = ie_upto10 || ie_11up || edge
var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1])
var webkit = !edge && /WebKit\//.test(userAgent)
var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent)
var chrome = !edge && /Chrome\//.test(userAgent)
var presto = /Opera\//.test(userAgent)
var safari = /Apple Computer/.test(navigator.vendor)
var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent)
var phantom = /PhantomJS/.test(userAgent)

var ios = !edge && /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent)
// This is woefully incomplete. Suggestions for alternative methods welcome.
var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent)
var mac = ios || /Mac/.test(platform)
var chromeOS = /\bCrOS\b/.test(userAgent)
var windows = /win/i.test(platform)

var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/)
if (presto_version) { presto_version = Number(presto_version[1]) }
if (presto_version && presto_version >= 15) { presto = false; webkit = true }
// Some browsers use the wrong event properties to signal cmd/ctrl on OS X
var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11))
var captureRightClick = gecko || (ie && ie_version >= 9)

function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

var rmClass = function(node, cls) {
  var current = node.className
  var match = classTest(cls).exec(current)
  if (match) {
    var after = current.slice(match.index + match[0].length)
    node.className = current.slice(0, match.index) + (after ? match[1] + after : "")
  }
}

function removeChildren(e) {
  for (var count = e.childNodes.length; count > 0; --count)
    { e.removeChild(e.firstChild) }
  return e
}

function removeChildrenAndAdd(parent, e) {
  return removeChildren(parent).appendChild(e)
}

function elt(tag, content, className, style) {
  var e = document.createElement(tag)
  if (className) { e.className = className }
  if (style) { e.style.cssText = style }
  if (typeof content == "string") { e.appendChild(document.createTextNode(content)) }
  else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]) } }
  return e
}

var range
if (document.createRange) { range = function(node, start, end, endNode) {
  var r = document.createRange()
  r.setEnd(endNode || node, end)
  r.setStart(node, start)
  return r
} }
else { range = function(node, start, end) {
  var r = document.body.createTextRange()
  try { r.moveToElementText(node.parentNode) }
  catch(e) { return r }
  r.collapse(true)
  r.moveEnd("character", end)
  r.moveStart("character", start)
  return r
} }

function contains(parent, child) {
  if (child.nodeType == 3) // Android browser always returns false when child is a textnode
    { child = child.parentNode }
  if (parent.contains)
    { return parent.contains(child) }
  do {
    if (child.nodeType == 11) { child = child.host }
    if (child == parent) { return true }
  } while (child = child.parentNode)
}

function activeElt() {
  // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
  // IE < 10 will throw when accessed while the page is loading or in an iframe.
  // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
  var activeElement
  try {
    activeElement = document.activeElement
  } catch(e) {
    activeElement = document.body || null
  }
  while (activeElement && activeElement.root && activeElement.root.activeElement)
    { activeElement = activeElement.root.activeElement }
  return activeElement
}

function addClass(node, cls) {
  var current = node.className
  if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls }
}
function joinClasses(a, b) {
  var as = a.split(" ")
  for (var i = 0; i < as.length; i++)
    { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i] } }
  return b
}

var selectInput = function(node) { node.select() }
if (ios) // Mobile Safari apparently has a bug where select() is broken.
  { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length } }
else if (ie) // Suppress mysterious IE10 errors
  { selectInput = function(node) { try { node.select() } catch(_e) {} } }

function bind(f) {
  var args = Array.prototype.slice.call(arguments, 1)
  return function(){return f.apply(null, args)}
}

function copyObj(obj, target, overwrite) {
  if (!target) { target = {} }
  for (var prop in obj)
    { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
      { target[prop] = obj[prop] } }
  return target
}

// Counts the column offset in a string, taking tabs into account.
// Used mostly to find indentation.
function countColumn(string, end, tabSize, startIndex, startValue) {
  if (end == null) {
    end = string.search(/[^\s\u00a0]/)
    if (end == -1) { end = string.length }
  }
  for (var i = startIndex || 0, n = startValue || 0;;) {
    var nextTab = string.indexOf("\t", i)
    if (nextTab < 0 || nextTab >= end)
      { return n + (end - i) }
    n += nextTab - i
    n += tabSize - (n % tabSize)
    i = nextTab + 1
  }
}

var Delayed = function() {this.id = null};
Delayed.prototype.set = function (ms, f) {
  clearTimeout(this.id)
  this.id = setTimeout(f, ms)
};

function indexOf(array, elt) {
  for (var i = 0; i < array.length; ++i)
    { if (array[i] == elt) { return i } }
  return -1
}

// Number of pixels added to scroller and sizer to hide scrollbar
var scrollerGap = 30

// Returned or thrown by various protocols to signal 'I'm not
// handling this'.
var Pass = {toString: function(){return "CodeMirror.Pass"}}

// Reused option objects for setSelection & friends
var sel_dontScroll = {scroll: false};
var sel_mouse = {origin: "*mouse"};
var sel_move = {origin: "+move"};
// The inverse of countColumn -- find the offset that corresponds to
// a particular column.
function findColumn(string, goal, tabSize) {
  for (var pos = 0, col = 0;;) {
    var nextTab = string.indexOf("\t", pos)
    if (nextTab == -1) { nextTab = string.length }
    var skipped = nextTab - pos
    if (nextTab == string.length || col + skipped >= goal)
      { return pos + Math.min(skipped, goal - col) }
    col += nextTab - pos
    col += tabSize - (col % tabSize)
    pos = nextTab + 1
    if (col >= goal) { return pos }
  }
}

var spaceStrs = [""]
function spaceStr(n) {
  while (spaceStrs.length <= n)
    { spaceStrs.push(lst(spaceStrs) + " ") }
  return spaceStrs[n]
}

function lst(arr) { return arr[arr.length-1] }

function map(array, f) {
  var out = []
  for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i) }
  return out
}

function insertSorted(array, value, score) {
  var pos = 0, priority = score(value)
  while (pos < array.length && score(array[pos]) <= priority) { pos++ }
  array.splice(pos, 0, value)
}

function nothing() {}

function createObj(base, props) {
  var inst
  if (Object.create) {
    inst = Object.create(base)
  } else {
    nothing.prototype = base
    inst = new nothing()
  }
  if (props) { copyObj(props, inst) }
  return inst
}

var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
function isWordCharBasic(ch) {
  return /\w/.test(ch) || ch > "\x80" &&
    (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
}
function isWordChar(ch, helper) {
  if (!helper) { return isWordCharBasic(ch) }
  if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
  return helper.test(ch)
}

function isEmpty(obj) {
  for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
  return true
}

// Extending unicode characters. A series of a non-extending char +
// any number of extending chars is treated as a single unit as far
// as editing and measuring is concerned. This is not fully correct,
// since some scripts/fonts/browsers also treat other configurations
// of code points as a group.
var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

// Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.
function skipExtendingChars(str, pos, dir) {
  while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) { pos += dir }
  return pos
}

// Returns the value from the range [`from`; `to`] that satisfies
// `pred` and is closest to `from`. Assumes that at least `to` satisfies `pred`.
function findFirst(pred, from, to) {
  for (;;) {
    if (Math.abs(from - to) <= 1) { return pred(from) ? from : to }
    var mid = Math.floor((from + to) / 2)
    if (pred(mid)) { to = mid }
    else { from = mid }
  }
}

// The display handles the DOM integration, both for input reading
// and content drawing. It holds references to DOM nodes and
// display-related state.

function Display(place, doc, input) {
  var d = this
  this.input = input

  // Covers bottom-right square when both scrollbars are present.
  d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler")
  d.scrollbarFiller.setAttribute("cm-not-content", "true")
  // Covers bottom of gutter when coverGutterNextToScrollbar is on
  // and h scrollbar is present.
  d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler")
  d.gutterFiller.setAttribute("cm-not-content", "true")
  // Will contain the actual code, positioned to cover the viewport.
  d.lineDiv = elt("div", null, "CodeMirror-code")
  // Elements are added to these to represent selection and cursors.
  d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1")
  d.cursorDiv = elt("div", null, "CodeMirror-cursors")
  // A visibility: hidden element used to find the size of things.
  d.measure = elt("div", null, "CodeMirror-measure")
  // When lines outside of the viewport are measured, they are drawn in this.
  d.lineMeasure = elt("div", null, "CodeMirror-measure")
  // Wraps everything that needs to exist inside the vertically-padded coordinate system
  d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                    null, "position: relative; outline: none")
  // Moved around its parent to cover visible view.
  d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative")
  // Set to the height of the document, allowing scrolling.
  d.sizer = elt("div", [d.mover], "CodeMirror-sizer")
  d.sizerWidth = null
  // Behavior of elts with overflow: auto and padding is
  // inconsistent across browsers. This is used to ensure the
  // scrollable area is big enough.
  d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;")
  // Will contain the gutters, if any.
  d.gutters = elt("div", null, "CodeMirror-gutters")
  d.lineGutter = null
  // Actual scrollable element.
  d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll")
  d.scroller.setAttribute("tabIndex", "-1")
  // The element in which the editor lives.
  d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror")

  // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
  if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0 }
  if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true }

  if (place) {
    if (place.appendChild) { place.appendChild(d.wrapper) }
    else { place(d.wrapper) }
  }

  // Current rendered range (may be bigger than the view window).
  d.viewFrom = d.viewTo = doc.first
  d.reportedViewFrom = d.reportedViewTo = doc.first
  // Information about the rendered lines.
  d.view = []
  d.renderedView = null
  // Holds info about a single rendered line when it was rendered
  // for measurement, while not in view.
  d.externalMeasured = null
  // Empty space (in pixels) above the view
  d.viewOffset = 0
  d.lastWrapHeight = d.lastWrapWidth = 0
  d.updateLineNumbers = null

  d.nativeBarWidth = d.barHeight = d.barWidth = 0
  d.scrollbarsClipped = false

  // Used to only resize the line number gutter when necessary (when
  // the amount of lines crosses a boundary that makes its width change)
  d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null
  // Set to true when a non-horizontal-scrolling line widget is
  // added. As an optimization, line widget aligning is skipped when
  // this is false.
  d.alignWidgets = false

  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null

  // Tracks the maximum line length so that the horizontal scrollbar
  // can be kept static when scrolling.
  d.maxLine = null
  d.maxLineLength = 0
  d.maxLineChanged = false

  // Used for measuring wheel scrolling granularity
  d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null

  // True when shift is held down.
  d.shift = false

  // Used to track whether anything happened since the context menu
  // was opened.
  d.selForContextMenu = null

  d.activeTouch = null

  input.init(d)
}

// Find the line object corresponding to the given line number.
function getLine(doc, n) {
  n -= doc.first
  if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
  var chunk = doc
  while (!chunk.lines) {
    for (var i = 0;; ++i) {
      var child = chunk.children[i], sz = child.chunkSize()
      if (n < sz) { chunk = child; break }
      n -= sz
    }
  }
  return chunk.lines[n]
}

// Get the part of a document between two positions, as an array of
// strings.
function getBetween(doc, start, end) {
  var out = [], n = start.line
  doc.iter(start.line, end.line + 1, function (line) {
    var text = line.text
    if (n == end.line) { text = text.slice(0, end.ch) }
    if (n == start.line) { text = text.slice(start.ch) }
    out.push(text)
    ++n
  })
  return out
}
// Get the lines between from and to, as array of strings.
function getLines(doc, from, to) {
  var out = []
  doc.iter(from, to, function (line) { out.push(line.text) }) // iter aborts when callback returns truthy value
  return out
}

// Update the height of a line, propagating the height change
// upwards to parent nodes.
function updateLineHeight(line, height) {
  var diff = height - line.height
  if (diff) { for (var n = line; n; n = n.parent) { n.height += diff } }
}

// Given a line object, find its line number by walking up through
// its parent links.
function lineNo(line) {
  if (line.parent == null) { return null }
  var cur = line.parent, no = indexOf(cur.lines, line)
  for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
    for (var i = 0;; ++i) {
      if (chunk.children[i] == cur) { break }
      no += chunk.children[i].chunkSize()
    }
  }
  return no + cur.first
}

// Find the line at the given vertical position, using the height
// information in the document tree.
function lineAtHeight(chunk, h) {
  var n = chunk.first
  outer: do {
    for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
      var child = chunk.children[i$1], ch = child.height
      if (h < ch) { chunk = child; continue outer }
      h -= ch
      n += child.chunkSize()
    }
    return n
  } while (!chunk.lines)
  var i = 0
  for (; i < chunk.lines.length; ++i) {
    var line = chunk.lines[i], lh = line.height
    if (h < lh) { break }
    h -= lh
  }
  return n + i
}

function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

function lineNumberFor(options, i) {
  return String(options.lineNumberFormatter(i + options.firstLineNumber))
}

// A Pos instance represents a position within the text.
function Pos(line, ch, sticky) {
  if ( sticky === void 0 ) sticky = null;

  if (!(this instanceof Pos)) { return new Pos(line, ch, sticky) }
  this.line = line
  this.ch = ch
  this.sticky = sticky
}

// Compare two positions, return 0 if they are the same, a negative
// number when a is less, and a positive number otherwise.
function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

function equalCursorPos(a, b) { return a.sticky == b.sticky && cmp(a, b) == 0 }

function copyPos(x) {return Pos(x.line, x.ch)}
function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

// Most of the external API clips given positions to make sure they
// actually exist within the document.
function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
function clipPos(doc, pos) {
  if (pos.line < doc.first) { return Pos(doc.first, 0) }
  var last = doc.first + doc.size - 1
  if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
  return clipToLen(pos, getLine(doc, pos.line).text.length)
}
function clipToLen(pos, linelen) {
  var ch = pos.ch
  if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
  else if (ch < 0) { return Pos(pos.line, 0) }
  else { return pos }
}
function clipPosArray(doc, array) {
  var out = []
  for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]) }
  return out
}

// Optimize some code when these features are not used.
var sawReadOnlySpans = false;
var sawCollapsedSpans = false;
function seeReadOnlySpans() {
  sawReadOnlySpans = true
}

function seeCollapsedSpans() {
  sawCollapsedSpans = true
}

// TEXTMARKER SPANS

function MarkedSpan(marker, from, to) {
  this.marker = marker
  this.from = from; this.to = to
}

// Search an array of spans for a span matching the given marker.
function getMarkedSpanFor(spans, marker) {
  if (spans) { for (var i = 0; i < spans.length; ++i) {
    var span = spans[i]
    if (span.marker == marker) { return span }
  } }
}
// Remove a span from an array, returning undefined if no spans are
// left (we don't store arrays for lines without spans).
function removeMarkedSpan(spans, span) {
  var r
  for (var i = 0; i < spans.length; ++i)
    { if (spans[i] != span) { (r || (r = [])).push(spans[i]) } }
  return r
}
// Add a span to a line.
function addMarkedSpan(line, span) {
  line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span]
  span.marker.attachLine(line)
}

// Used for the algorithm that adjusts markers for a change in the
// document. These functions cut an array of spans at a given
// character position, returning an array of remaining chunks (or
// undefined if nothing remains).
function markedSpansBefore(old, startCh, isInsert) {
  var nw
  if (old) { for (var i = 0; i < old.length; ++i) {
    var span = old[i], marker = span.marker
    var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh)
    if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
      ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to))
    }
  } }
  return nw
}
function markedSpansAfter(old, endCh, isInsert) {
  var nw
  if (old) { for (var i = 0; i < old.length; ++i) {
    var span = old[i], marker = span.marker
    var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh)
    if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
      ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                            span.to == null ? null : span.to - endCh))
    }
  } }
  return nw
}

// Given a change object, compute the new set of marker spans that
// cover the line in which the change took place. Removes spans
// entirely within the change, reconnects spans belonging to the
// same marker that appear on both sides of the change, and cuts off
// spans partially within the change. Returns an array of span
// arrays with one element for each line in (after) the change.
function stretchSpansOverChange(doc, change) {
  if (change.full) { return null }
  var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans
  var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans
  if (!oldFirst && !oldLast) { return null }

  var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0
  // Get the spans that 'stick out' on both sides
  var first = markedSpansBefore(oldFirst, startCh, isInsert)
  var last = markedSpansAfter(oldLast, endCh, isInsert)

  // Next, merge those two ends
  var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0)
  if (first) {
    // Fix up .to properties of first
    for (var i = 0; i < first.length; ++i) {
      var span = first[i]
      if (span.to == null) {
        var found = getMarkedSpanFor(last, span.marker)
        if (!found) { span.to = startCh }
        else if (sameLine) { span.to = found.to == null ? null : found.to + offset }
      }
    }
  }
  if (last) {
    // Fix up .from in last (or move them into first in case of sameLine)
    for (var i$1 = 0; i$1 < last.length; ++i$1) {
      var span$1 = last[i$1]
      if (span$1.to != null) { span$1.to += offset }
      if (span$1.from == null) {
        var found$1 = getMarkedSpanFor(first, span$1.marker)
        if (!found$1) {
          span$1.from = offset
          if (sameLine) { (first || (first = [])).push(span$1) }
        }
      } else {
        span$1.from += offset
        if (sameLine) { (first || (first = [])).push(span$1) }
      }
    }
  }
  // Make sure we didn't create any zero-length spans
  if (first) { first = clearEmptySpans(first) }
  if (last && last != first) { last = clearEmptySpans(last) }

  var newMarkers = [first]
  if (!sameLine) {
    // Fill gap with whole-line-spans
    var gap = change.text.length - 2, gapMarkers
    if (gap > 0 && first)
      { for (var i$2 = 0; i$2 < first.length; ++i$2)
        { if (first[i$2].to == null)
          { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)) } } }
    for (var i$3 = 0; i$3 < gap; ++i$3)
      { newMarkers.push(gapMarkers) }
    newMarkers.push(last)
  }
  return newMarkers
}

// Remove spans that are empty and don't have a clearWhenEmpty
// option of false.
function clearEmptySpans(spans) {
  for (var i = 0; i < spans.length; ++i) {
    var span = spans[i]
    if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
      { spans.splice(i--, 1) }
  }
  if (!spans.length) { return null }
  return spans
}

// Used to 'clip' out readOnly ranges when making a change.
function removeReadOnlyRanges(doc, from, to) {
  var markers = null
  doc.iter(from.line, to.line + 1, function (line) {
    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
      var mark = line.markedSpans[i].marker
      if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
        { (markers || (markers = [])).push(mark) }
    } }
  })
  if (!markers) { return null }
  var parts = [{from: from, to: to}]
  for (var i = 0; i < markers.length; ++i) {
    var mk = markers[i], m = mk.find(0)
    for (var j = 0; j < parts.length; ++j) {
      var p = parts[j]
      if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
      var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to)
      if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
        { newParts.push({from: p.from, to: m.from}) }
      if (dto > 0 || !mk.inclusiveRight && !dto)
        { newParts.push({from: m.to, to: p.to}) }
      parts.splice.apply(parts, newParts)
      j += newParts.length - 3
    }
  }
  return parts
}

// Connect or disconnect spans from a line.
function detachMarkedSpans(line) {
  var spans = line.markedSpans
  if (!spans) { return }
  for (var i = 0; i < spans.length; ++i)
    { spans[i].marker.detachLine(line) }
  line.markedSpans = null
}
function attachMarkedSpans(line, spans) {
  if (!spans) { return }
  for (var i = 0; i < spans.length; ++i)
    { spans[i].marker.attachLine(line) }
  line.markedSpans = spans
}

// Helpers used when computing which overlapping collapsed span
// counts as the larger one.
function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

// Returns a number indicating which of two overlapping collapsed
// spans is larger (and thus includes the other). Falls back to
// comparing ids when the spans cover exactly the same range.
function compareCollapsedMarkers(a, b) {
  var lenDiff = a.lines.length - b.lines.length
  if (lenDiff != 0) { return lenDiff }
  var aPos = a.find(), bPos = b.find()
  var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b)
  if (fromCmp) { return -fromCmp }
  var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b)
  if (toCmp) { return toCmp }
  return b.id - a.id
}

// Find out whether a line ends or starts in a collapsed span. If
// so, return the marker for that span.
function collapsedSpanAtSide(line, start) {
  var sps = sawCollapsedSpans && line.markedSpans, found
  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
    sp = sps[i]
    if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
        (!found || compareCollapsedMarkers(found, sp.marker) < 0))
      { found = sp.marker }
  } }
  return found
}
function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

// Test whether there exists a collapsed span that partially
// overlaps (covers the start or end, but not both) of a new span.
// Such overlap is not allowed.
function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
  var line = getLine(doc, lineNo)
  var sps = sawCollapsedSpans && line.markedSpans
  if (sps) { for (var i = 0; i < sps.length; ++i) {
    var sp = sps[i]
    if (!sp.marker.collapsed) { continue }
    var found = sp.marker.find(0)
    var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker)
    var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker)
    if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
    if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
        fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
      { return true }
  } }
}

// A visual line is a line as drawn on the screen. Folding, for
// example, can cause multiple logical lines to appear on the same
// visual line. This finds the start of the visual line that the
// given line is part of (usually that is the line itself).
function visualLine(line) {
  var merged
  while (merged = collapsedSpanAtStart(line))
    { line = merged.find(-1, true).line }
  return line
}

function visualLineEnd(line) {
  var merged
  while (merged = collapsedSpanAtEnd(line))
    { line = merged.find(1, true).line }
  return line
}

// Returns an array of logical lines that continue the visual line
// started by the argument, or undefined if there are no such lines.
function visualLineContinued(line) {
  var merged, lines
  while (merged = collapsedSpanAtEnd(line)) {
    line = merged.find(1, true).line
    ;(lines || (lines = [])).push(line)
  }
  return lines
}

// Get the line number of the start of the visual line that the
// given line number is part of.
function visualLineNo(doc, lineN) {
  var line = getLine(doc, lineN), vis = visualLine(line)
  if (line == vis) { return lineN }
  return lineNo(vis)
}

// Get the line number of the start of the next visual line after
// the given line.
function visualLineEndNo(doc, lineN) {
  if (lineN > doc.lastLine()) { return lineN }
  var line = getLine(doc, lineN), merged
  if (!lineIsHidden(doc, line)) { return lineN }
  while (merged = collapsedSpanAtEnd(line))
    { line = merged.find(1, true).line }
  return lineNo(line) + 1
}

// Compute whether a line is hidden. Lines count as hidden when they
// are part of a visual line that starts with another line, or when
// they are entirely covered by collapsed, non-widget span.
function lineIsHidden(doc, line) {
  var sps = sawCollapsedSpans && line.markedSpans
  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
    sp = sps[i]
    if (!sp.marker.collapsed) { continue }
    if (sp.from == null) { return true }
    if (sp.marker.widgetNode) { continue }
    if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
      { return true }
  } }
}
function lineIsHiddenInner(doc, line, span) {
  if (span.to == null) {
    var end = span.marker.find(1, true)
    return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
  }
  if (span.marker.inclusiveRight && span.to == line.text.length)
    { return true }
  for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
    sp = line.markedSpans[i]
    if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
        (sp.to == null || sp.to != span.from) &&
        (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
        lineIsHiddenInner(doc, line, sp)) { return true }
  }
}

// Find the height above the given line.
function heightAtLine(lineObj) {
  lineObj = visualLine(lineObj)

  var h = 0, chunk = lineObj.parent
  for (var i = 0; i < chunk.lines.length; ++i) {
    var line = chunk.lines[i]
    if (line == lineObj) { break }
    else { h += line.height }
  }
  for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
    for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
      var cur = p.children[i$1]
      if (cur == chunk) { break }
      else { h += cur.height }
    }
  }
  return h
}

// Compute the character length of a line, taking into account
// collapsed ranges (see markText) that might hide parts, and join
// other lines onto it.
function lineLength(line) {
  if (line.height == 0) { return 0 }
  var len = line.text.length, merged, cur = line
  while (merged = collapsedSpanAtStart(cur)) {
    var found = merged.find(0, true)
    cur = found.from.line
    len += found.from.ch - found.to.ch
  }
  cur = line
  while (merged = collapsedSpanAtEnd(cur)) {
    var found$1 = merged.find(0, true)
    len -= cur.text.length - found$1.from.ch
    cur = found$1.to.line
    len += cur.text.length - found$1.to.ch
  }
  return len
}

// Find the longest line in the document.
function findMaxLine(cm) {
  var d = cm.display, doc = cm.doc
  d.maxLine = getLine(doc, doc.first)
  d.maxLineLength = lineLength(d.maxLine)
  d.maxLineChanged = true
  doc.iter(function (line) {
    var len = lineLength(line)
    if (len > d.maxLineLength) {
      d.maxLineLength = len
      d.maxLine = line
    }
  })
}

// BIDI HELPERS

function iterateBidiSections(order, from, to, f) {
  if (!order) { return f(from, to, "ltr") }
  var found = false
  for (var i = 0; i < order.length; ++i) {
    var part = order[i]
    if (part.from < to && part.to > from || from == to && part.to == from) {
      f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr")
      found = true
    }
  }
  if (!found) { f(from, to, "ltr") }
}

var bidiOther = null
function getBidiPartAt(order, ch, sticky) {
  var found
  bidiOther = null
  for (var i = 0; i < order.length; ++i) {
    var cur = order[i]
    if (cur.from < ch && cur.to > ch) { return i }
    if (cur.to == ch) {
      if (cur.from != cur.to && sticky == "before") { found = i }
      else { bidiOther = i }
    }
    if (cur.from == ch) {
      if (cur.from != cur.to && sticky != "before") { found = i }
      else { bidiOther = i }
    }
  }
  return found != null ? found : bidiOther
}

// Bidirectional ordering algorithm
// See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
// that this (partially) implements.

// One-char codes used for character types:
// L (L):   Left-to-Right
// R (R):   Right-to-Left
// r (AL):  Right-to-Left Arabic
// 1 (EN):  European Number
// + (ES):  European Number Separator
// % (ET):  European Number Terminator
// n (AN):  Arabic Number
// , (CS):  Common Number Separator
// m (NSM): Non-Spacing Mark
// b (BN):  Boundary Neutral
// s (B):   Paragraph Separator
// t (S):   Segment Separator
// w (WS):  Whitespace
// N (ON):  Other Neutrals

// Returns null if characters are ordered as they appear
// (left-to-right), or an array of sections ({from, to, level}
// objects) in the order in which they occur visually.
var bidiOrdering = (function() {
  // Character types for codepoints 0 to 0xff
  var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
  // Character types for codepoints 0x600 to 0x6f9
  var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111"
  function charType(code) {
    if (code <= 0xf7) { return lowTypes.charAt(code) }
    else if (0x590 <= code && code <= 0x5f4) { return "R" }
    else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
    else if (0x6ee <= code && code <= 0x8ac) { return "r" }
    else if (0x2000 <= code && code <= 0x200b) { return "w" }
    else if (code == 0x200c) { return "b" }
    else { return "L" }
  }

  var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
  var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/
  // Browsers seem to always treat the boundaries of block elements as being L.
  var outerType = "L"

  function BidiSpan(level, from, to) {
    this.level = level
    this.from = from; this.to = to
  }

  return function(str) {
    if (!bidiRE.test(str)) { return false }
    var len = str.length, types = []
    for (var i = 0; i < len; ++i)
      { types.push(charType(str.charCodeAt(i))) }

    // W1. Examine each non-spacing mark (NSM) in the level run, and
    // change the type of the NSM to the type of the previous
    // character. If the NSM is at the start of the level run, it will
    // get the type of sor.
    for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
      var type = types[i$1]
      if (type == "m") { types[i$1] = prev }
      else { prev = type }
    }

    // W2. Search backwards from each instance of a European number
    // until the first strong type (R, L, AL, or sor) is found. If an
    // AL is found, change the type of the European number to Arabic
    // number.
    // W3. Change all ALs to R.
    for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
      var type$1 = types[i$2]
      if (type$1 == "1" && cur == "r") { types[i$2] = "n" }
      else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R" } }
    }

    // W4. A single European separator between two European numbers
    // changes to a European number. A single common separator between
    // two numbers of the same type changes to that type.
    for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
      var type$2 = types[i$3]
      if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1" }
      else if (type$2 == "," && prev$1 == types[i$3+1] &&
               (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1 }
      prev$1 = type$2
    }

    // W5. A sequence of European terminators adjacent to European
    // numbers changes to all European numbers.
    // W6. Otherwise, separators and terminators change to Other
    // Neutral.
    for (var i$4 = 0; i$4 < len; ++i$4) {
      var type$3 = types[i$4]
      if (type$3 == ",") { types[i$4] = "N" }
      else if (type$3 == "%") {
        var end = (void 0)
        for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
        var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N"
        for (var j = i$4; j < end; ++j) { types[j] = replace }
        i$4 = end - 1
      }
    }

    // W7. Search backwards from each instance of a European number
    // until the first strong type (R, L, or sor) is found. If an L is
    // found, then change the type of the European number to L.
    for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
      var type$4 = types[i$5]
      if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L" }
      else if (isStrong.test(type$4)) { cur$1 = type$4 }
    }

    // N1. A sequence of neutrals takes the direction of the
    // surrounding strong text if the text on both sides has the same
    // direction. European and Arabic numbers act as if they were R in
    // terms of their influence on neutrals. Start-of-level-run (sor)
    // and end-of-level-run (eor) are used at level run boundaries.
    // N2. Any remaining neutrals take the embedding direction.
    for (var i$6 = 0; i$6 < len; ++i$6) {
      if (isNeutral.test(types[i$6])) {
        var end$1 = (void 0)
        for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
        var before = (i$6 ? types[i$6-1] : outerType) == "L"
        var after = (end$1 < len ? types[end$1] : outerType) == "L"
        var replace$1 = before || after ? "L" : "R"
        for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1 }
        i$6 = end$1 - 1
      }
    }

    // Here we depart from the documented algorithm, in order to avoid
    // building up an actual levels array. Since there are only three
    // levels (0, 1, 2) in an implementation that doesn't take
    // explicit embedding into account, we can build up the order on
    // the fly, without following the level-based algorithm.
    var order = [], m
    for (var i$7 = 0; i$7 < len;) {
      if (countsAsLeft.test(types[i$7])) {
        var start = i$7
        for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
        order.push(new BidiSpan(0, start, i$7))
      } else {
        var pos = i$7, at = order.length
        for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
        for (var j$2 = pos; j$2 < i$7;) {
          if (countsAsNum.test(types[j$2])) {
            if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)) }
            var nstart = j$2
            for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
            order.splice(at, 0, new BidiSpan(2, nstart, j$2))
            pos = j$2
          } else { ++j$2 }
        }
        if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)) }
      }
    }
    if (order[0].level == 1 && (m = str.match(/^\s+/))) {
      order[0].from = m[0].length
      order.unshift(new BidiSpan(0, 0, m[0].length))
    }
    if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
      lst(order).to -= m[0].length
      order.push(new BidiSpan(0, len - m[0].length, len))
    }

    return order
  }
})()

// Get the bidi ordering for the given line (and cache it). Returns
// false for lines that are fully left-to-right, and an array of
// BidiSpan objects otherwise.
function getOrder(line) {
  var order = line.order
  if (order == null) { order = line.order = bidiOrdering(line.text) }
  return order
}

function moveCharLogically(line, ch, dir) {
  var target = skipExtendingChars(line.text, ch + dir, dir)
  return target < 0 || target > line.text.length ? null : target
}

function moveLogically(line, start, dir) {
  var ch = moveCharLogically(line, start.ch, dir)
  return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before")
}

function endOfLine(visually, cm, lineObj, lineNo, dir) {
  if (visually) {
    var order = getOrder(lineObj)
    if (order) {
      var part = dir < 0 ? lst(order) : order[0]
      var moveInStorageOrder = (dir < 0) == (part.level == 1)
      var sticky = moveInStorageOrder ? "after" : "before"
      var ch
      // With a wrapped rtl chunk (possibly spanning multiple bidi parts),
      // it could be that the last bidi part is not on the last visual line,
      // since visual lines contain content order-consecutive chunks.
      // Thus, in rtl, we are looking for the first (content-order) character
      // in the rtl chunk that is on the last line (that is, the same line
      // as the last (content-order) character).
      if (part.level > 0) {
        var prep = prepareMeasureForLine(cm, lineObj)
        ch = dir < 0 ? lineObj.text.length - 1 : 0
        var targetTop = measureCharPrepared(cm, prep, ch).top
        ch = findFirst(function (ch) { return measureCharPrepared(cm, prep, ch).top == targetTop; }, (dir < 0) == (part.level == 1) ? part.from : part.to - 1, ch)
        if (sticky == "before") { ch = moveCharLogically(lineObj, ch, 1, true) }
      } else { ch = dir < 0 ? part.to : part.from }
      return new Pos(lineNo, ch, sticky)
    }
  }
  return new Pos(lineNo, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after")
}

function moveVisually(cm, line, start, dir) {
  var bidi = getOrder(line)
  if (!bidi) { return moveLogically(line, start, dir) }
  if (start.ch >= line.text.length) {
    start.ch = line.text.length
    start.sticky = "before"
  } else if (start.ch <= 0) {
    start.ch = 0
    start.sticky = "after"
  }
  var partPos = getBidiPartAt(bidi, start.ch, start.sticky), part = bidi[partPos]
  if (part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
    // Case 1: We move within an ltr part. Even with wrapped lines,
    // nothing interesting happens.
    return moveLogically(line, start, dir)
  }

  var mv = function (pos, dir) { return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir); }
  var prep
  var getWrappedLineExtent = function (ch) {
    if (!cm.options.lineWrapping) { return {begin: 0, end: line.text.length} }
    prep = prep || prepareMeasureForLine(cm, line)
    return wrappedLineExtentChar(cm, line, prep, ch)
  }
  var wrappedLineExtent = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch)

  if (part.level % 2 == 1) {
    var ch = mv(start, -dir)
    if (ch != null && (dir > 0 ? ch >= part.from && ch >= wrappedLineExtent.begin : ch <= part.to && ch <= wrappedLineExtent.end)) {
      // Case 2: We move within an rtl part on the same visual line
      var sticky = dir < 0 ? "before" : "after"
      return new Pos(start.line, ch, sticky)
    }
  }

  // Case 3: Could not move within this bidi part in this visual line, so leave
  // the current bidi part

  var searchInVisualLine = function (partPos, dir, wrappedLineExtent) {
    var getRes = function (ch, moveInStorageOrder) { return moveInStorageOrder
      ? new Pos(start.line, mv(ch, 1), "before")
      : new Pos(start.line, ch, "after"); }

    for (; partPos >= 0 && partPos < bidi.length; partPos += dir) {
      var part = bidi[partPos]
      var moveInStorageOrder = (dir > 0) == (part.level != 1)
      var ch = moveInStorageOrder ? wrappedLineExtent.begin : mv(wrappedLineExtent.end, -1)
      if (part.from <= ch && ch < part.to) { return getRes(ch, moveInStorageOrder) }
      ch = moveInStorageOrder ? part.from : mv(part.to, -1)
      if (wrappedLineExtent.begin <= ch && ch < wrappedLineExtent.end) { return getRes(ch, moveInStorageOrder) }
    }
  }

  // Case 3a: Look for other bidi parts on the same visual line
  var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent)
  if (res) { return res }

  // Case 3b: Look for other bidi parts on the next visual line
  var nextCh = dir > 0 ? wrappedLineExtent.end : mv(wrappedLineExtent.begin, -1)
  if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
    res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh))
    if (res) { return res }
  }

  // Case 4: Nowhere to move
  return null
}

// EVENT HANDLING

// Lightweight event framework. on/off also work on DOM nodes,
// registering native DOM handlers.

var noHandlers = []

var on = function(emitter, type, f) {
  if (emitter.addEventListener) {
    emitter.addEventListener(type, f, false)
  } else if (emitter.attachEvent) {
    emitter.attachEvent("on" + type, f)
  } else {
    var map = emitter._handlers || (emitter._handlers = {})
    map[type] = (map[type] || noHandlers).concat(f)
  }
}

function getHandlers(emitter, type) {
  return emitter._handlers && emitter._handlers[type] || noHandlers
}

function off(emitter, type, f) {
  if (emitter.removeEventListener) {
    emitter.removeEventListener(type, f, false)
  } else if (emitter.detachEvent) {
    emitter.detachEvent("on" + type, f)
  } else {
    var map = emitter._handlers, arr = map && map[type]
    if (arr) {
      var index = indexOf(arr, f)
      if (index > -1)
        { map[type] = arr.slice(0, index).concat(arr.slice(index + 1)) }
    }
  }
}

function signal(emitter, type /*, values...*/) {
  var handlers = getHandlers(emitter, type)
  if (!handlers.length) { return }
  var args = Array.prototype.slice.call(arguments, 2)
  for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args) }
}

// The DOM events that CodeMirror handles can be overridden by
// registering a (non-DOM) handler on the editor for the event name,
// and preventDefault-ing the event in that handler.
function signalDOMEvent(cm, e, override) {
  if (typeof e == "string")
    { e = {type: e, preventDefault: function() { this.defaultPrevented = true }} }
  signal(cm, override || e.type, cm, e)
  return e_defaultPrevented(e) || e.codemirrorIgnore
}

function signalCursorActivity(cm) {
  var arr = cm._handlers && cm._handlers.cursorActivity
  if (!arr) { return }
  var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = [])
  for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
    { set.push(arr[i]) } }
}

function hasHandler(emitter, type) {
  return getHandlers(emitter, type).length > 0
}

// Add on and off methods to a constructor's prototype, to make
// registering events on such objects more convenient.
function eventMixin(ctor) {
  ctor.prototype.on = function(type, f) {on(this, type, f)}
  ctor.prototype.off = function(type, f) {off(this, type, f)}
}

// Due to the fact that we still support jurassic IE versions, some
// compatibility wrappers are needed.

function e_preventDefault(e) {
  if (e.preventDefault) { e.preventDefault() }
  else { e.returnValue = false }
}
function e_stopPropagation(e) {
  if (e.stopPropagation) { e.stopPropagation() }
  else { e.cancelBubble = true }
}
function e_defaultPrevented(e) {
  return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
}
function e_stop(e) {e_preventDefault(e); e_stopPropagation(e)}

function e_target(e) {return e.target || e.srcElement}
function e_button(e) {
  var b = e.which
  if (b == null) {
    if (e.button & 1) { b = 1 }
    else if (e.button & 2) { b = 3 }
    else if (e.button & 4) { b = 2 }
  }
  if (mac && e.ctrlKey && b == 1) { b = 3 }
  return b
}

// Detect drag-and-drop
var dragAndDrop = function() {
  // There is *some* kind of drag-and-drop support in IE6-8, but I
  // couldn't get it to work yet.
  if (ie && ie_version < 9) { return false }
  var div = elt('div')
  return "draggable" in div || "dragDrop" in div
}()

var zwspSupported
function zeroWidthElement(measure) {
  if (zwspSupported == null) {
    var test = elt("span", "\u200b")
    removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]))
    if (measure.firstChild.offsetHeight != 0)
      { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8) }
  }
  var node = zwspSupported ? elt("span", "\u200b") :
    elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px")
  node.setAttribute("cm-text", "")
  return node
}

// Feature-detect IE's crummy client rect reporting for bidi text
var badBidiRects
function hasBadBidiRects(measure) {
  if (badBidiRects != null) { return badBidiRects }
  var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"))
  var r0 = range(txt, 0, 1).getBoundingClientRect()
  var r1 = range(txt, 1, 2).getBoundingClientRect()
  removeChildren(measure)
  if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
  return badBidiRects = (r1.right - r0.right < 3)
}

// See if "".split is the broken IE version, if so, provide an
// alternative way to split lines.
var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
  var pos = 0, result = [], l = string.length
  while (pos <= l) {
    var nl = string.indexOf("\n", pos)
    if (nl == -1) { nl = string.length }
    var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl)
    var rt = line.indexOf("\r")
    if (rt != -1) {
      result.push(line.slice(0, rt))
      pos += rt + 1
    } else {
      result.push(line)
      pos = nl + 1
    }
  }
  return result
} : function (string) { return string.split(/\r\n?|\n/); }

var hasSelection = window.getSelection ? function (te) {
  try { return te.selectionStart != te.selectionEnd }
  catch(e) { return false }
} : function (te) {
  var range
  try {range = te.ownerDocument.selection.createRange()}
  catch(e) {}
  if (!range || range.parentElement() != te) { return false }
  return range.compareEndPoints("StartToEnd", range) != 0
}

var hasCopyEvent = (function () {
  var e = elt("div")
  if ("oncopy" in e) { return true }
  e.setAttribute("oncopy", "return;")
  return typeof e.oncopy == "function"
})()

var badZoomedRects = null
function hasBadZoomedRects(measure) {
  if (badZoomedRects != null) { return badZoomedRects }
  var node = removeChildrenAndAdd(measure, elt("span", "x"))
  var normal = node.getBoundingClientRect()
  var fromRange = range(node, 0, 1).getBoundingClientRect()
  return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
}

var modes = {};
var mimeModes = {};
// Extra arguments are stored as the mode's dependencies, which is
// used by (legacy) mechanisms like loadmode.js to automatically
// load a mode. (Preferred mechanism is the require/define calls.)
function defineMode(name, mode) {
  if (arguments.length > 2)
    { mode.dependencies = Array.prototype.slice.call(arguments, 2) }
  modes[name] = mode
}

function defineMIME(mime, spec) {
  mimeModes[mime] = spec
}

// Given a MIME type, a {name, ...options} config object, or a name
// string, return a mode config object.
function resolveMode(spec) {
  if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
    spec = mimeModes[spec]
  } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
    var found = mimeModes[spec.name]
    if (typeof found == "string") { found = {name: found} }
    spec = createObj(found, spec)
    spec.name = found.name
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
    return resolveMode("application/xml")
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
    return resolveMode("application/json")
  }
  if (typeof spec == "string") { return {name: spec} }
  else { return spec || {name: "null"} }
}

// Given a mode spec (anything that resolveMode accepts), find and
// initialize an actual mode object.
function getMode(options, spec) {
  spec = resolveMode(spec)
  var mfactory = modes[spec.name]
  if (!mfactory) { return getMode(options, "text/plain") }
  var modeObj = mfactory(options, spec)
  if (modeExtensions.hasOwnProperty(spec.name)) {
    var exts = modeExtensions[spec.name]
    for (var prop in exts) {
      if (!exts.hasOwnProperty(prop)) { continue }
      if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop] }
      modeObj[prop] = exts[prop]
    }
  }
  modeObj.name = spec.name
  if (spec.helperType) { modeObj.helperType = spec.helperType }
  if (spec.modeProps) { for (var prop$1 in spec.modeProps)
    { modeObj[prop$1] = spec.modeProps[prop$1] } }

  return modeObj
}

// This can be used to attach properties to mode objects from
// outside the actual mode definition.
var modeExtensions = {}
function extendMode(mode, properties) {
  var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {})
  copyObj(properties, exts)
}

function copyState(mode, state) {
  if (state === true) { return state }
  if (mode.copyState) { return mode.copyState(state) }
  var nstate = {}
  for (var n in state) {
    var val = state[n]
    if (val instanceof Array) { val = val.concat([]) }
    nstate[n] = val
  }
  return nstate
}

// Given a mode and a state (for that mode), find the inner mode and
// state at the position that the state refers to.
function innerMode(mode, state) {
  var info
  while (mode.innerMode) {
    info = mode.innerMode(state)
    if (!info || info.mode == mode) { break }
    state = info.state
    mode = info.mode
  }
  return info || {mode: mode, state: state}
}

function startState(mode, a1, a2) {
  return mode.startState ? mode.startState(a1, a2) : true
}

// STRING STREAM

// Fed to the mode parsers, provides helper functions to make
// parsers more succinct.

var StringStream = function(string, tabSize) {
  this.pos = this.start = 0
  this.string = string
  this.tabSize = tabSize || 8
  this.lastColumnPos = this.lastColumnValue = 0
  this.lineStart = 0
};

StringStream.prototype.eol = function () {return this.pos >= this.string.length};
StringStream.prototype.sol = function () {return this.pos == this.lineStart};
StringStream.prototype.peek = function () {return this.string.charAt(this.pos) || undefined};
StringStream.prototype.next = function () {
  if (this.pos < this.string.length)
    { return this.string.charAt(this.pos++) }
};
StringStream.prototype.eat = function (match) {
  var ch = this.string.charAt(this.pos)
  var ok
  if (typeof match == "string") { ok = ch == match }
  else { ok = ch && (match.test ? match.test(ch) : match(ch)) }
  if (ok) {++this.pos; return ch}
};
StringStream.prototype.eatWhile = function (match) {
  var start = this.pos
  while (this.eat(match)){}
  return this.pos > start
};
StringStream.prototype.eatSpace = function () {
    var this$1 = this;

  var start = this.pos
  while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this$1.pos }
  return this.pos > start
};
StringStream.prototype.skipToEnd = function () {this.pos = this.string.length};
StringStream.prototype.skipTo = function (ch) {
  var found = this.string.indexOf(ch, this.pos)
  if (found > -1) {this.pos = found; return true}
};
StringStream.prototype.backUp = function (n) {this.pos -= n};
StringStream.prototype.column = function () {
  if (this.lastColumnPos < this.start) {
    this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue)
    this.lastColumnPos = this.start
  }
  return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
};
StringStream.prototype.indentation = function () {
  return countColumn(this.string, null, this.tabSize) -
    (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
};
StringStream.prototype.match = function (pattern, consume, caseInsensitive) {
  if (typeof pattern == "string") {
    var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; }
    var substr = this.string.substr(this.pos, pattern.length)
    if (cased(substr) == cased(pattern)) {
      if (consume !== false) { this.pos += pattern.length }
      return true
    }
  } else {
    var match = this.string.slice(this.pos).match(pattern)
    if (match && match.index > 0) { return null }
    if (match && consume !== false) { this.pos += match[0].length }
    return match
  }
};
StringStream.prototype.current = function (){return this.string.slice(this.start, this.pos)};
StringStream.prototype.hideFirstChars = function (n, inner) {
  this.lineStart += n
  try { return inner() }
  finally { this.lineStart -= n }
};

// Compute a style array (an array starting with a mode generation
// -- for invalidation -- followed by pairs of end positions and
// style strings), which is used to highlight the tokens on the
// line.
function highlightLine(cm, line, state, forceToEnd) {
  // A styles array always starts with a number identifying the
  // mode/overlays that it is based on (for easy invalidation).
  var st = [cm.state.modeGen], lineClasses = {}
  // Compute the base array of styles
  runMode(cm, line.text, cm.doc.mode, state, function (end, style) { return st.push(end, style); },
    lineClasses, forceToEnd)

  // Run overlays, adjust style array.
  var loop = function ( o ) {
    var overlay = cm.state.overlays[o], i = 1, at = 0
    runMode(cm, line.text, overlay.mode, true, function (end, style) {
      var start = i
      // Ensure there's a token end at the current position, and that i points at it
      while (at < end) {
        var i_end = st[i]
        if (i_end > end)
          { st.splice(i, 1, end, st[i+1], i_end) }
        i += 2
        at = Math.min(end, i_end)
      }
      if (!style) { return }
      if (overlay.opaque) {
        st.splice(start, i - start, end, "overlay " + style)
        i = start + 2
      } else {
        for (; start < i; start += 2) {
          var cur = st[start+1]
          st[start+1] = (cur ? cur + " " : "") + "overlay " + style
        }
      }
    }, lineClasses)
  };

  for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

  return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
}

function getLineStyles(cm, line, updateFrontier) {
  if (!line.styles || line.styles[0] != cm.state.modeGen) {
    var state = getStateBefore(cm, lineNo(line))
    var result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state)
    line.stateAfter = state
    line.styles = result.styles
    if (result.classes) { line.styleClasses = result.classes }
    else if (line.styleClasses) { line.styleClasses = null }
    if (updateFrontier === cm.doc.frontier) { cm.doc.frontier++ }
  }
  return line.styles
}

function getStateBefore(cm, n, precise) {
  var doc = cm.doc, display = cm.display
  if (!doc.mode.startState) { return true }
  var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter
  if (!state) { state = startState(doc.mode) }
  else { state = copyState(doc.mode, state) }
  doc.iter(pos, n, function (line) {
    processLine(cm, line.text, state)
    var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo
    line.stateAfter = save ? copyState(doc.mode, state) : null
    ++pos
  })
  if (precise) { doc.frontier = pos }
  return state
}

// Lightweight form of highlight -- proceed over this line and
// update state, but don't save a style array. Used for lines that
// aren't currently visible.
function processLine(cm, text, state, startAt) {
  var mode = cm.doc.mode
  var stream = new StringStream(text, cm.options.tabSize)
  stream.start = stream.pos = startAt || 0
  if (text == "") { callBlankLine(mode, state) }
  while (!stream.eol()) {
    readToken(mode, stream, state)
    stream.start = stream.pos
  }
}

function callBlankLine(mode, state) {
  if (mode.blankLine) { return mode.blankLine(state) }
  if (!mode.innerMode) { return }
  var inner = innerMode(mode, state)
  if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
}

function readToken(mode, stream, state, inner) {
  for (var i = 0; i < 10; i++) {
    if (inner) { inner[0] = innerMode(mode, state).mode }
    var style = mode.token(stream, state)
    if (stream.pos > stream.start) { return style }
  }
  throw new Error("Mode " + mode.name + " failed to advance stream.")
}

// Utility for getTokenAt and getLineTokens
function takeToken(cm, pos, precise, asArray) {
  var getObj = function (copy) { return ({
    start: stream.start, end: stream.pos,
    string: stream.current(),
    type: style || null,
    state: copy ? copyState(doc.mode, state) : state
  }); }

  var doc = cm.doc, mode = doc.mode, style
  pos = clipPos(doc, pos)
  var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise)
  var stream = new StringStream(line.text, cm.options.tabSize), tokens
  if (asArray) { tokens = [] }
  while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
    stream.start = stream.pos
    style = readToken(mode, stream, state)
    if (asArray) { tokens.push(getObj(true)) }
  }
  return asArray ? tokens : getObj()
}

function extractLineClasses(type, output) {
  if (type) { for (;;) {
    var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/)
    if (!lineClass) { break }
    type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length)
    var prop = lineClass[1] ? "bgClass" : "textClass"
    if (output[prop] == null)
      { output[prop] = lineClass[2] }
    else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
      { output[prop] += " " + lineClass[2] }
  } }
  return type
}

// Run the given mode's parser over a line, calling f for each token.
function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
  var flattenSpans = mode.flattenSpans
  if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans }
  var curStart = 0, curStyle = null
  var stream = new StringStream(text, cm.options.tabSize), style
  var inner = cm.options.addModeClass && [null]
  if (text == "") { extractLineClasses(callBlankLine(mode, state), lineClasses) }
  while (!stream.eol()) {
    if (stream.pos > cm.options.maxHighlightLength) {
      flattenSpans = false
      if (forceToEnd) { processLine(cm, text, state, stream.pos) }
      stream.pos = text.length
      style = null
    } else {
      style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses)
    }
    if (inner) {
      var mName = inner[0].name
      if (mName) { style = "m-" + (style ? mName + " " + style : mName) }
    }
    if (!flattenSpans || curStyle != style) {
      while (curStart < stream.start) {
        curStart = Math.min(stream.start, curStart + 5000)
        f(curStart, curStyle)
      }
      curStyle = style
    }
    stream.start = stream.pos
  }
  while (curStart < stream.pos) {
    // Webkit seems to refuse to render text nodes longer than 57444
    // characters, and returns inaccurate measurements in nodes
    // starting around 5000 chars.
    var pos = Math.min(stream.pos, curStart + 5000)
    f(pos, curStyle)
    curStart = pos
  }
}

// Finds the line to start with when starting a parse. Tries to
// find a line with a stateAfter, so that it can start with a
// valid state. If that fails, it returns the line with the
// smallest indentation, which tends to need the least context to
// parse correctly.
function findStartLine(cm, n, precise) {
  var minindent, minline, doc = cm.doc
  var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100)
  for (var search = n; search > lim; --search) {
    if (search <= doc.first) { return doc.first }
    var line = getLine(doc, search - 1)
    if (line.stateAfter && (!precise || search <= doc.frontier)) { return search }
    var indented = countColumn(line.text, null, cm.options.tabSize)
    if (minline == null || minindent > indented) {
      minline = search - 1
      minindent = indented
    }
  }
  return minline
}

// LINE DATA STRUCTURE

// Line objects. These hold state related to a line, including
// highlighting info (the styles array).
var Line = function(text, markedSpans, estimateHeight) {
  this.text = text
  attachMarkedSpans(this, markedSpans)
  this.height = estimateHeight ? estimateHeight(this) : 1
};

Line.prototype.lineNo = function () { return lineNo(this) };
eventMixin(Line)

// Change the content (text, markers) of a line. Automatically
// invalidates cached information and tries to re-estimate the
// line's height.
function updateLine(line, text, markedSpans, estimateHeight) {
  line.text = text
  if (line.stateAfter) { line.stateAfter = null }
  if (line.styles) { line.styles = null }
  if (line.order != null) { line.order = null }
  detachMarkedSpans(line)
  attachMarkedSpans(line, markedSpans)
  var estHeight = estimateHeight ? estimateHeight(line) : 1
  if (estHeight != line.height) { updateLineHeight(line, estHeight) }
}

// Detach a line from the document tree and its markers.
function cleanUpLine(line) {
  line.parent = null
  detachMarkedSpans(line)
}

// Convert a style as returned by a mode (either null, or a string
// containing one or more styles) to a CSS style. This is cached,
// and also looks for line-wide styles.
var styleToClassCache = {};
var styleToClassCacheWithMode = {};
function interpretTokenStyle(style, options) {
  if (!style || /^\s*$/.test(style)) { return null }
  var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache
  return cache[style] ||
    (cache[style] = style.replace(/\S+/g, "cm-$&"))
}

// Render the DOM representation of the text of a line. Also builds
// up a 'line map', which points at the DOM nodes that represent
// specific stretches of text, and is used by the measuring code.
// The returned object contains the DOM node, this map, and
// information about line-wide styles that were set by the mode.
function buildLineContent(cm, lineView) {
  // The padding-right forces the element to have a 'border', which
  // is needed on Webkit to be able to get line-level bounding
  // rectangles for it (in measureChar).
  var content = elt("span", null, null, webkit ? "padding-right: .1px" : null)
  var builder = {pre: elt("pre", [content], "CodeMirror-line"), content: content,
                 col: 0, pos: 0, cm: cm,
                 trailingSpace: false,
                 splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")}
  // hide from accessibility tree
  content.setAttribute("role", "presentation")
  builder.pre.setAttribute("role", "presentation")
  lineView.measure = {}

  // Iterate over the logical lines that make up this visual line.
  for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
    var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0)
    builder.pos = 0
    builder.addToken = buildToken
    // Optionally wire in some hacks into the token-rendering
    // algorithm, to deal with browser quirks.
    if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
      { builder.addToken = buildTokenBadBidi(builder.addToken, order) }
    builder.map = []
    var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line)
    insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate))
    if (line.styleClasses) {
      if (line.styleClasses.bgClass)
        { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "") }
      if (line.styleClasses.textClass)
        { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "") }
    }

    // Ensure at least a single node is present, for measuring.
    if (builder.map.length == 0)
      { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))) }

    // Store the map and a cache object for the current logical line
    if (i == 0) {
      lineView.measure.map = builder.map
      lineView.measure.cache = {}
    } else {
      ;(lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
      ;(lineView.measure.caches || (lineView.measure.caches = [])).push({})
    }
  }

  // See issue #2901
  if (webkit) {
    var last = builder.content.lastChild
    if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
      { builder.content.className = "cm-tab-wrap-hack" }
  }

  signal(cm, "renderLine", cm, lineView.line, builder.pre)
  if (builder.pre.className)
    { builder.textClass = joinClasses(builder.pre.className, builder.textClass || "") }

  return builder
}

function defaultSpecialCharPlaceholder(ch) {
  var token = elt("span", "\u2022", "cm-invalidchar")
  token.title = "\\u" + ch.charCodeAt(0).toString(16)
  token.setAttribute("aria-label", token.title)
  return token
}

// Build up the DOM representation for a single token, and add it to
// the line map. Takes care to render special characters separately.
function buildToken(builder, text, style, startStyle, endStyle, title, css) {
  if (!text) { return }
  var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text
  var special = builder.cm.state.specialChars, mustWrap = false
  var content
  if (!special.test(text)) {
    builder.col += text.length
    content = document.createTextNode(displayText)
    builder.map.push(builder.pos, builder.pos + text.length, content)
    if (ie && ie_version < 9) { mustWrap = true }
    builder.pos += text.length
  } else {
    content = document.createDocumentFragment()
    var pos = 0
    while (true) {
      special.lastIndex = pos
      var m = special.exec(text)
      var skipped = m ? m.index - pos : text.length - pos
      if (skipped) {
        var txt = document.createTextNode(displayText.slice(pos, pos + skipped))
        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])) }
        else { content.appendChild(txt) }
        builder.map.push(builder.pos, builder.pos + skipped, txt)
        builder.col += skipped
        builder.pos += skipped
      }
      if (!m) { break }
      pos += skipped + 1
      var txt$1 = (void 0)
      if (m[0] == "\t") {
        var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize
        txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"))
        txt$1.setAttribute("role", "presentation")
        txt$1.setAttribute("cm-text", "\t")
        builder.col += tabWidth
      } else if (m[0] == "\r" || m[0] == "\n") {
        txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"))
        txt$1.setAttribute("cm-text", m[0])
        builder.col += 1
      } else {
        txt$1 = builder.cm.options.specialCharPlaceholder(m[0])
        txt$1.setAttribute("cm-text", m[0])
        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])) }
        else { content.appendChild(txt$1) }
        builder.col += 1
      }
      builder.map.push(builder.pos, builder.pos + 1, txt$1)
      builder.pos++
    }
  }
  builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32
  if (style || startStyle || endStyle || mustWrap || css) {
    var fullStyle = style || ""
    if (startStyle) { fullStyle += startStyle }
    if (endStyle) { fullStyle += endStyle }
    var token = elt("span", [content], fullStyle, css)
    if (title) { token.title = title }
    return builder.content.appendChild(token)
  }
  builder.content.appendChild(content)
}

function splitSpaces(text, trailingBefore) {
  if (text.length > 1 && !/  /.test(text)) { return text }
  var spaceBefore = trailingBefore, result = ""
  for (var i = 0; i < text.length; i++) {
    var ch = text.charAt(i)
    if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
      { ch = "\u00a0" }
    result += ch
    spaceBefore = ch == " "
  }
  return result
}

// Work around nonsense dimensions being reported for stretches of
// right-to-left text.
function buildTokenBadBidi(inner, order) {
  return function (builder, text, style, startStyle, endStyle, title, css) {
    style = style ? style + " cm-force-border" : "cm-force-border"
    var start = builder.pos, end = start + text.length
    for (;;) {
      // Find the part that overlaps with the start of this text
      var part = (void 0)
      for (var i = 0; i < order.length; i++) {
        part = order[i]
        if (part.to > start && part.from <= start) { break }
      }
      if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, title, css) }
      inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css)
      startStyle = null
      text = text.slice(part.to - start)
      start = part.to
    }
  }
}

function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
  var widget = !ignoreWidget && marker.widgetNode
  if (widget) { builder.map.push(builder.pos, builder.pos + size, widget) }
  if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
    if (!widget)
      { widget = builder.content.appendChild(document.createElement("span")) }
    widget.setAttribute("cm-marker", marker.id)
  }
  if (widget) {
    builder.cm.display.input.setUneditable(widget)
    builder.content.appendChild(widget)
  }
  builder.pos += size
  builder.trailingSpace = false
}

// Outputs a number of spans to make up a line, taking highlighting
// and marked text into account.
function insertLineContent(line, builder, styles) {
  var spans = line.markedSpans, allText = line.text, at = 0
  if (!spans) {
    for (var i$1 = 1; i$1 < styles.length; i$1+=2)
      { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)) }
    return
  }

  var len = allText.length, pos = 0, i = 1, text = "", style, css
  var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed
  for (;;) {
    if (nextChange == pos) { // Update current marker set
      spanStyle = spanEndStyle = spanStartStyle = title = css = ""
      collapsed = null; nextChange = Infinity
      var foundBookmarks = [], endStyles = (void 0)
      for (var j = 0; j < spans.length; ++j) {
        var sp = spans[j], m = sp.marker
        if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
          foundBookmarks.push(m)
        } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
          if (sp.to != null && sp.to != pos && nextChange > sp.to) {
            nextChange = sp.to
            spanEndStyle = ""
          }
          if (m.className) { spanStyle += " " + m.className }
          if (m.css) { css = (css ? css + ";" : "") + m.css }
          if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle }
          if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to) }
          if (m.title && !title) { title = m.title }
          if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
            { collapsed = sp }
        } else if (sp.from > pos && nextChange > sp.from) {
          nextChange = sp.from
        }
      }
      if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
        { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1] } } }

      if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
        { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]) } }
      if (collapsed && (collapsed.from || 0) == pos) {
        buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                           collapsed.marker, collapsed.from == null)
        if (collapsed.to == null) { return }
        if (collapsed.to == pos) { collapsed = false }
      }
    }
    if (pos >= len) { break }

    var upto = Math.min(len, nextChange)
    while (true) {
      if (text) {
        var end = pos + text.length
        if (!collapsed) {
          var tokenText = end > upto ? text.slice(0, upto - pos) : text
          builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                           spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css)
        }
        if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
        pos = end
        spanStartStyle = ""
      }
      text = allText.slice(at, at = styles[i++])
      style = interpretTokenStyle(styles[i++], builder.cm.options)
    }
  }
}


// These objects are used to represent the visible (currently drawn)
// part of the document. A LineView may correspond to multiple
// logical lines, if those are connected by collapsed ranges.
function LineView(doc, line, lineN) {
  // The starting line
  this.line = line
  // Continuing lines, if any
  this.rest = visualLineContinued(line)
  // Number of logical lines in this visual line
  this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1
  this.node = this.text = null
  this.hidden = lineIsHidden(doc, line)
}

// Create a range of LineView objects for the given lines.
function buildViewArray(cm, from, to) {
  var array = [], nextPos
  for (var pos = from; pos < to; pos = nextPos) {
    var view = new LineView(cm.doc, getLine(cm.doc, pos), pos)
    nextPos = pos + view.size
    array.push(view)
  }
  return array
}

var operationGroup = null

function pushOperation(op) {
  if (operationGroup) {
    operationGroup.ops.push(op)
  } else {
    op.ownsGroup = operationGroup = {
      ops: [op],
      delayedCallbacks: []
    }
  }
}

function fireCallbacksForOps(group) {
  // Calls delayed callbacks and cursorActivity handlers until no
  // new ones appear
  var callbacks = group.delayedCallbacks, i = 0
  do {
    for (; i < callbacks.length; i++)
      { callbacks[i].call(null) }
    for (var j = 0; j < group.ops.length; j++) {
      var op = group.ops[j]
      if (op.cursorActivityHandlers)
        { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
          { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm) } }
    }
  } while (i < callbacks.length)
}

function finishOperation(op, endCb) {
  var group = op.ownsGroup
  if (!group) { return }

  try { fireCallbacksForOps(group) }
  finally {
    operationGroup = null
    endCb(group)
  }
}

var orphanDelayedCallbacks = null

// Often, we want to signal events at a point where we are in the
// middle of some work, but don't want the handler to start calling
// other methods on the editor, which might be in an inconsistent
// state or simply not expect any other events to happen.
// signalLater looks whether there are any handlers, and schedules
// them to be executed when the last operation ends, or, if no
// operation is active, when a timeout fires.
function signalLater(emitter, type /*, values...*/) {
  var arr = getHandlers(emitter, type)
  if (!arr.length) { return }
  var args = Array.prototype.slice.call(arguments, 2), list
  if (operationGroup) {
    list = operationGroup.delayedCallbacks
  } else if (orphanDelayedCallbacks) {
    list = orphanDelayedCallbacks
  } else {
    list = orphanDelayedCallbacks = []
    setTimeout(fireOrphanDelayed, 0)
  }
  var loop = function ( i ) {
    list.push(function () { return arr[i].apply(null, args); })
  };

  for (var i = 0; i < arr.length; ++i)
    loop( i );
}

function fireOrphanDelayed() {
  var delayed = orphanDelayedCallbacks
  orphanDelayedCallbacks = null
  for (var i = 0; i < delayed.length; ++i) { delayed[i]() }
}

// When an aspect of a line changes, a string is added to
// lineView.changes. This updates the relevant part of the line's
// DOM structure.
function updateLineForChanges(cm, lineView, lineN, dims) {
  for (var j = 0; j < lineView.changes.length; j++) {
    var type = lineView.changes[j]
    if (type == "text") { updateLineText(cm, lineView) }
    else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims) }
    else if (type == "class") { updateLineClasses(lineView) }
    else if (type == "widget") { updateLineWidgets(cm, lineView, dims) }
  }
  lineView.changes = null
}

// Lines with gutter elements, widgets or a background class need to
// be wrapped, and have the extra elements added to the wrapper div
function ensureLineWrapped(lineView) {
  if (lineView.node == lineView.text) {
    lineView.node = elt("div", null, null, "position: relative")
    if (lineView.text.parentNode)
      { lineView.text.parentNode.replaceChild(lineView.node, lineView.text) }
    lineView.node.appendChild(lineView.text)
    if (ie && ie_version < 8) { lineView.node.style.zIndex = 2 }
  }
  return lineView.node
}

function updateLineBackground(lineView) {
  var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass
  if (cls) { cls += " CodeMirror-linebackground" }
  if (lineView.background) {
    if (cls) { lineView.background.className = cls }
    else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null }
  } else if (cls) {
    var wrap = ensureLineWrapped(lineView)
    lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild)
  }
}

// Wrapper around buildLineContent which will reuse the structure
// in display.externalMeasured when possible.
function getLineContent(cm, lineView) {
  var ext = cm.display.externalMeasured
  if (ext && ext.line == lineView.line) {
    cm.display.externalMeasured = null
    lineView.measure = ext.measure
    return ext.built
  }
  return buildLineContent(cm, lineView)
}

// Redraw the line's text. Interacts with the background and text
// classes because the mode may output tokens that influence these
// classes.
function updateLineText(cm, lineView) {
  var cls = lineView.text.className
  var built = getLineContent(cm, lineView)
  if (lineView.text == lineView.node) { lineView.node = built.pre }
  lineView.text.parentNode.replaceChild(built.pre, lineView.text)
  lineView.text = built.pre
  if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
    lineView.bgClass = built.bgClass
    lineView.textClass = built.textClass
    updateLineClasses(lineView)
  } else if (cls) {
    lineView.text.className = cls
  }
}

function updateLineClasses(lineView) {
  updateLineBackground(lineView)
  if (lineView.line.wrapClass)
    { ensureLineWrapped(lineView).className = lineView.line.wrapClass }
  else if (lineView.node != lineView.text)
    { lineView.node.className = "" }
  var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass
  lineView.text.className = textClass || ""
}

function updateLineGutter(cm, lineView, lineN, dims) {
  if (lineView.gutter) {
    lineView.node.removeChild(lineView.gutter)
    lineView.gutter = null
  }
  if (lineView.gutterBackground) {
    lineView.node.removeChild(lineView.gutterBackground)
    lineView.gutterBackground = null
  }
  if (lineView.line.gutterClass) {
    var wrap = ensureLineWrapped(lineView)
    lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
                                    ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"))
    wrap.insertBefore(lineView.gutterBackground, lineView.text)
  }
  var markers = lineView.line.gutterMarkers
  if (cm.options.lineNumbers || markers) {
    var wrap$1 = ensureLineWrapped(lineView)
    var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"))
    cm.display.input.setUneditable(gutterWrap)
    wrap$1.insertBefore(gutterWrap, lineView.text)
    if (lineView.line.gutterClass)
      { gutterWrap.className += " " + lineView.line.gutterClass }
    if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
      { lineView.lineNumber = gutterWrap.appendChild(
        elt("div", lineNumberFor(cm.options, lineN),
            "CodeMirror-linenumber CodeMirror-gutter-elt",
            ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))) }
    if (markers) { for (var k = 0; k < cm.options.gutters.length; ++k) {
      var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id]
      if (found)
        { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
                                   ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))) }
    } }
  }
}

function updateLineWidgets(cm, lineView, dims) {
  if (lineView.alignable) { lineView.alignable = null }
  for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
    next = node.nextSibling
    if (node.className == "CodeMirror-linewidget")
      { lineView.node.removeChild(node) }
  }
  insertLineWidgets(cm, lineView, dims)
}

// Build a line's DOM representation from scratch
function buildLineElement(cm, lineView, lineN, dims) {
  var built = getLineContent(cm, lineView)
  lineView.text = lineView.node = built.pre
  if (built.bgClass) { lineView.bgClass = built.bgClass }
  if (built.textClass) { lineView.textClass = built.textClass }

  updateLineClasses(lineView)
  updateLineGutter(cm, lineView, lineN, dims)
  insertLineWidgets(cm, lineView, dims)
  return lineView.node
}

// A lineView may contain multiple logical lines (when merged by
// collapsed spans). The widgets for all of them need to be drawn.
function insertLineWidgets(cm, lineView, dims) {
  insertLineWidgetsFor(cm, lineView.line, lineView, dims, true)
  if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
    { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false) } }
}

function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
  if (!line.widgets) { return }
  var wrap = ensureLineWrapped(lineView)
  for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
    var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget")
    if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true") }
    positionLineWidget(widget, node, lineView, dims)
    cm.display.input.setUneditable(node)
    if (allowAbove && widget.above)
      { wrap.insertBefore(node, lineView.gutter || lineView.text) }
    else
      { wrap.appendChild(node) }
    signalLater(widget, "redraw")
  }
}

function positionLineWidget(widget, node, lineView, dims) {
  if (widget.noHScroll) {
    ;(lineView.alignable || (lineView.alignable = [])).push(node)
    var width = dims.wrapperWidth
    node.style.left = dims.fixedPos + "px"
    if (!widget.coverGutter) {
      width -= dims.gutterTotalWidth
      node.style.paddingLeft = dims.gutterTotalWidth + "px"
    }
    node.style.width = width + "px"
  }
  if (widget.coverGutter) {
    node.style.zIndex = 5
    node.style.position = "relative"
    if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px" }
  }
}

function widgetHeight(widget) {
  if (widget.height != null) { return widget.height }
  var cm = widget.doc.cm
  if (!cm) { return 0 }
  if (!contains(document.body, widget.node)) {
    var parentStyle = "position: relative;"
    if (widget.coverGutter)
      { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;" }
    if (widget.noHScroll)
      { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;" }
    removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle))
  }
  return widget.height = widget.node.parentNode.offsetHeight
}

// Return true when the given mouse event happened in a widget
function eventInWidget(display, e) {
  for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
    if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
        (n.parentNode == display.sizer && n != display.mover))
      { return true }
  }
}

// POSITION MEASUREMENT

function paddingTop(display) {return display.lineSpace.offsetTop}
function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
function paddingH(display) {
  if (display.cachedPaddingH) { return display.cachedPaddingH }
  var e = removeChildrenAndAdd(display.measure, elt("pre", "x"))
  var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
  var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)}
  if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data }
  return data
}

function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
function displayWidth(cm) {
  return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
}
function displayHeight(cm) {
  return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
}

// Ensure the lineView.wrapping.heights array is populated. This is
// an array of bottom offsets for the lines that make up a drawn
// line. When lineWrapping is on, there might be more than one
// height.
function ensureLineHeights(cm, lineView, rect) {
  var wrapping = cm.options.lineWrapping
  var curWidth = wrapping && displayWidth(cm)
  if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
    var heights = lineView.measure.heights = []
    if (wrapping) {
      lineView.measure.width = curWidth
      var rects = lineView.text.firstChild.getClientRects()
      for (var i = 0; i < rects.length - 1; i++) {
        var cur = rects[i], next = rects[i + 1]
        if (Math.abs(cur.bottom - next.bottom) > 2)
          { heights.push((cur.bottom + next.top) / 2 - rect.top) }
      }
    }
    heights.push(rect.bottom - rect.top)
  }
}

// Find a line map (mapping character offsets to text nodes) and a
// measurement cache for the given line number. (A line view might
// contain multiple lines when collapsed ranges are present.)
function mapFromLineView(lineView, line, lineN) {
  if (lineView.line == line)
    { return {map: lineView.measure.map, cache: lineView.measure.cache} }
  for (var i = 0; i < lineView.rest.length; i++)
    { if (lineView.rest[i] == line)
      { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
  for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
    { if (lineNo(lineView.rest[i$1]) > lineN)
      { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
}

// Render a line into the hidden node display.externalMeasured. Used
// when measurement is needed for a line that's not in the viewport.
function updateExternalMeasurement(cm, line) {
  line = visualLine(line)
  var lineN = lineNo(line)
  var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN)
  view.lineN = lineN
  var built = view.built = buildLineContent(cm, view)
  view.text = built.pre
  removeChildrenAndAdd(cm.display.lineMeasure, built.pre)
  return view
}

// Get a {top, bottom, left, right} box (in line-local coordinates)
// for a given character.
function measureChar(cm, line, ch, bias) {
  return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
}

// Find a line view that corresponds to the given line number.
function findViewForLine(cm, lineN) {
  if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
    { return cm.display.view[findViewIndex(cm, lineN)] }
  var ext = cm.display.externalMeasured
  if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
    { return ext }
}

// Measurement can be split in two steps, the set-up work that
// applies to the whole line, and the measurement of the actual
// character. Functions like coordsChar, that need to do a lot of
// measurements in a row, can thus ensure that the set-up work is
// only done once.
function prepareMeasureForLine(cm, line) {
  var lineN = lineNo(line)
  var view = findViewForLine(cm, lineN)
  if (view && !view.text) {
    view = null
  } else if (view && view.changes) {
    updateLineForChanges(cm, view, lineN, getDimensions(cm))
    cm.curOp.forceUpdate = true
  }
  if (!view)
    { view = updateExternalMeasurement(cm, line) }

  var info = mapFromLineView(view, line, lineN)
  return {
    line: line, view: view, rect: null,
    map: info.map, cache: info.cache, before: info.before,
    hasHeights: false
  }
}

// Given a prepared measurement object, measures the position of an
// actual character (or fetches it from the cache).
function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
  if (prepared.before) { ch = -1 }
  var key = ch + (bias || ""), found
  if (prepared.cache.hasOwnProperty(key)) {
    found = prepared.cache[key]
  } else {
    if (!prepared.rect)
      { prepared.rect = prepared.view.text.getBoundingClientRect() }
    if (!prepared.hasHeights) {
      ensureLineHeights(cm, prepared.view, prepared.rect)
      prepared.hasHeights = true
    }
    found = measureCharInner(cm, prepared, ch, bias)
    if (!found.bogus) { prepared.cache[key] = found }
  }
  return {left: found.left, right: found.right,
          top: varHeight ? found.rtop : found.top,
          bottom: varHeight ? found.rbottom : found.bottom}
}

var nullRect = {left: 0, right: 0, top: 0, bottom: 0}

function nodeAndOffsetInLineMap(map, ch, bias) {
  var node, start, end, collapse, mStart, mEnd
  // First, search the line map for the text node corresponding to,
  // or closest to, the target character.
  for (var i = 0; i < map.length; i += 3) {
    mStart = map[i]
    mEnd = map[i + 1]
    if (ch < mStart) {
      start = 0; end = 1
      collapse = "left"
    } else if (ch < mEnd) {
      start = ch - mStart
      end = start + 1
    } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
      end = mEnd - mStart
      start = end - 1
      if (ch >= mEnd) { collapse = "right" }
    }
    if (start != null) {
      node = map[i + 2]
      if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
        { collapse = bias }
      if (bias == "left" && start == 0)
        { while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
          node = map[(i -= 3) + 2]
          collapse = "left"
        } }
      if (bias == "right" && start == mEnd - mStart)
        { while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
          node = map[(i += 3) + 2]
          collapse = "right"
        } }
      break
    }
  }
  return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
}

function getUsefulRect(rects, bias) {
  var rect = nullRect
  if (bias == "left") { for (var i = 0; i < rects.length; i++) {
    if ((rect = rects[i]).left != rect.right) { break }
  } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
    if ((rect = rects[i$1]).left != rect.right) { break }
  } }
  return rect
}

function measureCharInner(cm, prepared, ch, bias) {
  var place = nodeAndOffsetInLineMap(prepared.map, ch, bias)
  var node = place.node, start = place.start, end = place.end, collapse = place.collapse

  var rect
  if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
    for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
      while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start }
      while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end }
      if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
        { rect = node.parentNode.getBoundingClientRect() }
      else
        { rect = getUsefulRect(range(node, start, end).getClientRects(), bias) }
      if (rect.left || rect.right || start == 0) { break }
      end = start
      start = start - 1
      collapse = "right"
    }
    if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect) }
  } else { // If it is a widget, simply get the box for the whole widget.
    if (start > 0) { collapse = bias = "right" }
    var rects
    if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
      { rect = rects[bias == "right" ? rects.length - 1 : 0] }
    else
      { rect = node.getBoundingClientRect() }
  }
  if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
    var rSpan = node.parentNode.getClientRects()[0]
    if (rSpan)
      { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom} }
    else
      { rect = nullRect }
  }

  var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top
  var mid = (rtop + rbot) / 2
  var heights = prepared.view.measure.heights
  var i = 0
  for (; i < heights.length - 1; i++)
    { if (mid < heights[i]) { break } }
  var top = i ? heights[i - 1] : 0, bot = heights[i]
  var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
                right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
                top: top, bottom: bot}
  if (!rect.left && !rect.right) { result.bogus = true }
  if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot }

  return result
}

// Work around problem with bounding client rects on ranges being
// returned incorrectly when zoomed on IE10 and below.
function maybeUpdateRectForZooming(measure, rect) {
  if (!window.screen || screen.logicalXDPI == null ||
      screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
    { return rect }
  var scaleX = screen.logicalXDPI / screen.deviceXDPI
  var scaleY = screen.logicalYDPI / screen.deviceYDPI
  return {left: rect.left * scaleX, right: rect.right * scaleX,
          top: rect.top * scaleY, bottom: rect.bottom * scaleY}
}

function clearLineMeasurementCacheFor(lineView) {
  if (lineView.measure) {
    lineView.measure.cache = {}
    lineView.measure.heights = null
    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
      { lineView.measure.caches[i] = {} } }
  }
}

function clearLineMeasurementCache(cm) {
  cm.display.externalMeasure = null
  removeChildren(cm.display.lineMeasure)
  for (var i = 0; i < cm.display.view.length; i++)
    { clearLineMeasurementCacheFor(cm.display.view[i]) }
}

function clearCaches(cm) {
  clearLineMeasurementCache(cm)
  cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null
  if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true }
  cm.display.lineNumChars = null
}

function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft }
function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop }

// Converts a {top, bottom, left, right} box from line-local
// coordinates into another coordinate system. Context may be one of
// "line", "div" (display.lineDiv), "local"./null (editor), "window",
// or "page".
function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
  if (!includeWidgets && lineObj.widgets) { for (var i = 0; i < lineObj.widgets.length; ++i) { if (lineObj.widgets[i].above) {
    var size = widgetHeight(lineObj.widgets[i])
    rect.top += size; rect.bottom += size
  } } }
  if (context == "line") { return rect }
  if (!context) { context = "local" }
  var yOff = heightAtLine(lineObj)
  if (context == "local") { yOff += paddingTop(cm.display) }
  else { yOff -= cm.display.viewOffset }
  if (context == "page" || context == "window") {
    var lOff = cm.display.lineSpace.getBoundingClientRect()
    yOff += lOff.top + (context == "window" ? 0 : pageScrollY())
    var xOff = lOff.left + (context == "window" ? 0 : pageScrollX())
    rect.left += xOff; rect.right += xOff
  }
  rect.top += yOff; rect.bottom += yOff
  return rect
}

// Coverts a box from "div" coords to another coordinate system.
// Context may be "window", "page", "div", or "local"./null.
function fromCoordSystem(cm, coords, context) {
  if (context == "div") { return coords }
  var left = coords.left, top = coords.top
  // First move into "page" coordinate system
  if (context == "page") {
    left -= pageScrollX()
    top -= pageScrollY()
  } else if (context == "local" || !context) {
    var localBox = cm.display.sizer.getBoundingClientRect()
    left += localBox.left
    top += localBox.top
  }

  var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect()
  return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
}

function charCoords(cm, pos, context, lineObj, bias) {
  if (!lineObj) { lineObj = getLine(cm.doc, pos.line) }
  return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
}

// Returns a box for a given cursor position, which may have an
// 'other' property containing the position of the secondary cursor
// on a bidi boundary.
// A cursor Pos(line, char, "before") is on the same visual line as `char - 1`
// and after `char - 1` in writing order of `char - 1`
// A cursor Pos(line, char, "after") is on the same visual line as `char`
// and before `char` in writing order of `char`
// Examples (upper-case letters are RTL, lower-case are LTR):
//     Pos(0, 1, ...)
//     before   after
// ab     a|b     a|b
// aB     a|B     aB|
// Ab     |Ab     A|b
// AB     B|A     B|A
// Every position after the last character on a line is considered to stick
// to the last character on the line.
function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
  lineObj = lineObj || getLine(cm.doc, pos.line)
  if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj) }
  function get(ch, right) {
    var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight)
    if (right) { m.left = m.right; } else { m.right = m.left }
    return intoCoordSystem(cm, lineObj, m, context)
  }
  var order = getOrder(lineObj), ch = pos.ch, sticky = pos.sticky
  if (ch >= lineObj.text.length) {
    ch = lineObj.text.length
    sticky = "before"
  } else if (ch <= 0) {
    ch = 0
    sticky = "after"
  }
  if (!order) { return get(sticky == "before" ? ch - 1 : ch, sticky == "before") }

  function getBidi(ch, partPos, invert) {
    var part = order[partPos], right = (part.level % 2) != 0
    return get(invert ? ch - 1 : ch, right != invert)
  }
  var partPos = getBidiPartAt(order, ch, sticky)
  var other = bidiOther
  var val = getBidi(ch, partPos, sticky == "before")
  if (other != null) { val.other = getBidi(ch, other, sticky != "before") }
  return val
}

// Used to cheaply estimate the coordinates for a position. Used for
// intermediate scroll updates.
function estimateCoords(cm, pos) {
  var left = 0
  pos = clipPos(cm.doc, pos)
  if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch }
  var lineObj = getLine(cm.doc, pos.line)
  var top = heightAtLine(lineObj) + paddingTop(cm.display)
  return {left: left, right: left, top: top, bottom: top + lineObj.height}
}

// Positions returned by coordsChar contain some extra information.
// xRel is the relative x position of the input coordinates compared
// to the found position (so xRel > 0 means the coordinates are to
// the right of the character position, for example). When outside
// is true, that means the coordinates lie outside the line's
// vertical range.
function PosWithInfo(line, ch, sticky, outside, xRel) {
  var pos = Pos(line, ch, sticky)
  pos.xRel = xRel
  if (outside) { pos.outside = true }
  return pos
}

// Compute the character position closest to the given coordinates.
// Input must be lineSpace-local ("div" coordinate system).
function coordsChar(cm, x, y) {
  var doc = cm.doc
  y += cm.display.viewOffset
  if (y < 0) { return PosWithInfo(doc.first, 0, null, true, -1) }
  var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1
  if (lineN > last)
    { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, true, 1) }
  if (x < 0) { x = 0 }

  var lineObj = getLine(doc, lineN)
  for (;;) {
    var found = coordsCharInner(cm, lineObj, lineN, x, y)
    var merged = collapsedSpanAtEnd(lineObj)
    var mergedPos = merged && merged.find(0, true)
    if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
      { lineN = lineNo(lineObj = mergedPos.to.line) }
    else
      { return found }
  }
}

function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
  var measure = function (ch) { return intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, ch), "line"); }
  var end = lineObj.text.length
  var begin = findFirst(function (ch) { return measure(ch - 1).bottom <= y; }, end, 0)
  end = findFirst(function (ch) { return measure(ch).top > y; }, begin, end)
  return {begin: begin, end: end}
}

function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
  var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top
  return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop)
}

function coordsCharInner(cm, lineObj, lineNo, x, y) {
  y -= heightAtLine(lineObj)
  var begin = 0, end = lineObj.text.length
  var preparedMeasure = prepareMeasureForLine(cm, lineObj)
  var pos
  var order = getOrder(lineObj)
  if (order) {
    if (cm.options.lineWrapping) {
      ;var assign;
      ((assign = wrappedLineExtent(cm, lineObj, preparedMeasure, y), begin = assign.begin, end = assign.end, assign))
    }
    pos = new Pos(lineNo, begin)
    var beginLeft = cursorCoords(cm, pos, "line", lineObj, preparedMeasure).left
    var dir = beginLeft < x ? 1 : -1
    var prevDiff, diff = beginLeft - x, prevPos
    do {
      prevDiff = diff
      prevPos = pos
      pos = moveVisually(cm, lineObj, pos, dir)
      if (pos == null || pos.ch < begin || end <= (pos.sticky == "before" ? pos.ch - 1 : pos.ch)) {
        pos = prevPos
        break
      }
      diff = cursorCoords(cm, pos, "line", lineObj, preparedMeasure).left - x
    } while ((dir < 0) != (diff < 0) && (Math.abs(diff) <= Math.abs(prevDiff)))
    if (Math.abs(diff) > Math.abs(prevDiff)) {
      if ((diff < 0) == (prevDiff < 0)) { throw new Error("Broke out of infinite loop in coordsCharInner") }
      pos = prevPos
    }
  } else {
    var ch = findFirst(function (ch) {
      var box = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, ch), "line")
      if (box.top > y) {
        // For the cursor stickiness
        end = Math.min(ch, end)
        return true
      }
      else if (box.bottom <= y) { return false }
      else if (box.left > x) { return true }
      else if (box.right < x) { return false }
      else { return (x - box.left < box.right - x) }
    }, begin, end)
    ch = skipExtendingChars(lineObj.text, ch, 1)
    pos = new Pos(lineNo, ch, ch == end ? "before" : "after")
  }
  var coords = cursorCoords(cm, pos, "line", lineObj, preparedMeasure)
  if (y < coords.top || coords.bottom < y) { pos.outside = true }
  pos.xRel = x < coords.left ? -1 : (x > coords.right ? 1 : 0)
  return pos
}

var measureText
// Compute the default text height.
function textHeight(display) {
  if (display.cachedTextHeight != null) { return display.cachedTextHeight }
  if (measureText == null) {
    measureText = elt("pre")
    // Measure a bunch of lines, for browsers that compute
    // fractional heights.
    for (var i = 0; i < 49; ++i) {
      measureText.appendChild(document.createTextNode("x"))
      measureText.appendChild(elt("br"))
    }
    measureText.appendChild(document.createTextNode("x"))
  }
  removeChildrenAndAdd(display.measure, measureText)
  var height = measureText.offsetHeight / 50
  if (height > 3) { display.cachedTextHeight = height }
  removeChildren(display.measure)
  return height || 1
}

// Compute the default character width.
function charWidth(display) {
  if (display.cachedCharWidth != null) { return display.cachedCharWidth }
  var anchor = elt("span", "xxxxxxxxxx")
  var pre = elt("pre", [anchor])
  removeChildrenAndAdd(display.measure, pre)
  var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10
  if (width > 2) { display.cachedCharWidth = width }
  return width || 10
}

// Do a bulk-read of the DOM positions and sizes needed to draw the
// view, so that we don't interleave reading and writing to the DOM.
function getDimensions(cm) {
  var d = cm.display, left = {}, width = {}
  var gutterLeft = d.gutters.clientLeft
  for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
    left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft
    width[cm.options.gutters[i]] = n.clientWidth
  }
  return {fixedPos: compensateForHScroll(d),
          gutterTotalWidth: d.gutters.offsetWidth,
          gutterLeft: left,
          gutterWidth: width,
          wrapperWidth: d.wrapper.clientWidth}
}

// Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
// but using getBoundingClientRect to get a sub-pixel-accurate
// result.
function compensateForHScroll(display) {
  return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
}

// Returns a function that estimates the height of a line, to use as
// first approximation until the line becomes visible (and is thus
// properly measurable).
function estimateHeight(cm) {
  var th = textHeight(cm.display), wrapping = cm.options.lineWrapping
  var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3)
  return function (line) {
    if (lineIsHidden(cm.doc, line)) { return 0 }

    var widgetsHeight = 0
    if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
      if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height }
    } }

    if (wrapping)
      { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
    else
      { return widgetsHeight + th }
  }
}

function estimateLineHeights(cm) {
  var doc = cm.doc, est = estimateHeight(cm)
  doc.iter(function (line) {
    var estHeight = est(line)
    if (estHeight != line.height) { updateLineHeight(line, estHeight) }
  })
}

// Given a mouse event, find the corresponding position. If liberal
// is false, it checks whether a gutter or scrollbar was clicked,
// and returns null if it was. forRect is used by rectangular
// selections, and tries to estimate a character position even for
// coordinates beyond the right of the text.
function posFromMouse(cm, e, liberal, forRect) {
  var display = cm.display
  if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

  var x, y, space = display.lineSpace.getBoundingClientRect()
  // Fails unpredictably on IE[67] when mouse is dragged around quickly.
  try { x = e.clientX - space.left; y = e.clientY - space.top }
  catch (e) { return null }
  var coords = coordsChar(cm, x, y), line
  if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
    var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length
    coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff))
  }
  return coords
}

// Find the view element corresponding to a given line. Return null
// when the line isn't visible.
function findViewIndex(cm, n) {
  if (n >= cm.display.viewTo) { return null }
  n -= cm.display.viewFrom
  if (n < 0) { return null }
  var view = cm.display.view
  for (var i = 0; i < view.length; i++) {
    n -= view[i].size
    if (n < 0) { return i }
  }
}

function updateSelection(cm) {
  cm.display.input.showSelection(cm.display.input.prepareSelection())
}

function prepareSelection(cm, primary) {
  var doc = cm.doc, result = {}
  var curFragment = result.cursors = document.createDocumentFragment()
  var selFragment = result.selection = document.createDocumentFragment()

  for (var i = 0; i < doc.sel.ranges.length; i++) {
    if (primary === false && i == doc.sel.primIndex) { continue }
    var range = doc.sel.ranges[i]
    if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) { continue }
    var collapsed = range.empty()
    if (collapsed || cm.options.showCursorWhenSelecting)
      { drawSelectionCursor(cm, range.head, curFragment) }
    if (!collapsed)
      { drawSelectionRange(cm, range, selFragment) }
  }
  return result
}

// Draws a cursor for the given range
function drawSelectionCursor(cm, head, output) {
  var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine)

  var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"))
  cursor.style.left = pos.left + "px"
  cursor.style.top = pos.top + "px"
  cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px"

  if (pos.other) {
    // Secondary cursor, shown when on a 'jump' in bi-directional text
    var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"))
    otherCursor.style.display = ""
    otherCursor.style.left = pos.other.left + "px"
    otherCursor.style.top = pos.other.top + "px"
    otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px"
  }
}

// Draws the given range as a highlighted selection
function drawSelectionRange(cm, range, output) {
  var display = cm.display, doc = cm.doc
  var fragment = document.createDocumentFragment()
  var padding = paddingH(cm.display), leftSide = padding.left
  var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right

  function add(left, top, width, bottom) {
    if (top < 0) { top = 0 }
    top = Math.round(top)
    bottom = Math.round(bottom)
    fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")))
  }

  function drawForLine(line, fromArg, toArg) {
    var lineObj = getLine(doc, line)
    var lineLen = lineObj.text.length
    var start, end
    function coords(ch, bias) {
      return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
    }

    iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir) {
      var leftPos = coords(from, "left"), rightPos, left, right
      if (from == to) {
        rightPos = leftPos
        left = right = leftPos.left
      } else {
        rightPos = coords(to - 1, "right")
        if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp }
        left = leftPos.left
        right = rightPos.right
      }
      if (fromArg == null && from == 0) { left = leftSide }
      if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
        add(left, leftPos.top, null, leftPos.bottom)
        left = leftSide
        if (leftPos.bottom < rightPos.top) { add(left, leftPos.bottom, null, rightPos.top) }
      }
      if (toArg == null && to == lineLen) { right = rightSide }
      if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
        { start = leftPos }
      if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
        { end = rightPos }
      if (left < leftSide + 1) { left = leftSide }
      add(left, rightPos.top, right - left, rightPos.bottom)
    })
    return {start: start, end: end}
  }

  var sFrom = range.from(), sTo = range.to()
  if (sFrom.line == sTo.line) {
    drawForLine(sFrom.line, sFrom.ch, sTo.ch)
  } else {
    var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line)
    var singleVLine = visualLine(fromLine) == visualLine(toLine)
    var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end
    var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start
    if (singleVLine) {
      if (leftEnd.top < rightStart.top - 2) {
        add(leftEnd.right, leftEnd.top, null, leftEnd.bottom)
        add(leftSide, rightStart.top, rightStart.left, rightStart.bottom)
      } else {
        add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom)
      }
    }
    if (leftEnd.bottom < rightStart.top)
      { add(leftSide, leftEnd.bottom, null, rightStart.top) }
  }

  output.appendChild(fragment)
}

// Cursor-blinking
function restartBlink(cm) {
  if (!cm.state.focused) { return }
  var display = cm.display
  clearInterval(display.blinker)
  var on = true
  display.cursorDiv.style.visibility = ""
  if (cm.options.cursorBlinkRate > 0)
    { display.blinker = setInterval(function () { return display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden"; },
      cm.options.cursorBlinkRate) }
  else if (cm.options.cursorBlinkRate < 0)
    { display.cursorDiv.style.visibility = "hidden" }
}

function ensureFocus(cm) {
  if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm) }
}

function delayBlurEvent(cm) {
  cm.state.delayingBlurEvent = true
  setTimeout(function () { if (cm.state.delayingBlurEvent) {
    cm.state.delayingBlurEvent = false
    onBlur(cm)
  } }, 100)
}

function onFocus(cm, e) {
  if (cm.state.delayingBlurEvent) { cm.state.delayingBlurEvent = false }

  if (cm.options.readOnly == "nocursor") { return }
  if (!cm.state.focused) {
    signal(cm, "focus", cm, e)
    cm.state.focused = true
    addClass(cm.display.wrapper, "CodeMirror-focused")
    // This test prevents this from firing when a context
    // menu is closed (since the input reset would kill the
    // select-all detection hack)
    if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
      cm.display.input.reset()
      if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20) } // Issue #1730
    }
    cm.display.input.receivedFocus()
  }
  restartBlink(cm)
}
function onBlur(cm, e) {
  if (cm.state.delayingBlurEvent) { return }

  if (cm.state.focused) {
    signal(cm, "blur", cm, e)
    cm.state.focused = false
    rmClass(cm.display.wrapper, "CodeMirror-focused")
  }
  clearInterval(cm.display.blinker)
  setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false } }, 150)
}

// Re-align line numbers and gutter marks to compensate for
// horizontal scrolling.
function alignHorizontally(cm) {
  var display = cm.display, view = display.view
  if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
  var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft
  var gutterW = display.gutters.offsetWidth, left = comp + "px"
  for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
    if (cm.options.fixedGutter) {
      if (view[i].gutter)
        { view[i].gutter.style.left = left }
      if (view[i].gutterBackground)
        { view[i].gutterBackground.style.left = left }
    }
    var align = view[i].alignable
    if (align) { for (var j = 0; j < align.length; j++)
      { align[j].style.left = left } }
  } }
  if (cm.options.fixedGutter)
    { display.gutters.style.left = (comp + gutterW) + "px" }
}

// Used to ensure that the line number gutter is still the right
// size for the current document size. Returns true when an update
// is needed.
function maybeUpdateLineNumberWidth(cm) {
  if (!cm.options.lineNumbers) { return false }
  var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display
  if (last.length != display.lineNumChars) {
    var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                               "CodeMirror-linenumber CodeMirror-gutter-elt"))
    var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW
    display.lineGutter.style.width = ""
    display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1
    display.lineNumWidth = display.lineNumInnerWidth + padding
    display.lineNumChars = display.lineNumInnerWidth ? last.length : -1
    display.lineGutter.style.width = display.lineNumWidth + "px"
    updateGutterSpace(cm)
    return true
  }
  return false
}

// Read the actual heights of the rendered lines, and update their
// stored heights to match.
function updateHeightsInViewport(cm) {
  var display = cm.display
  var prevBottom = display.lineDiv.offsetTop
  for (var i = 0; i < display.view.length; i++) {
    var cur = display.view[i], height = (void 0)
    if (cur.hidden) { continue }
    if (ie && ie_version < 8) {
      var bot = cur.node.offsetTop + cur.node.offsetHeight
      height = bot - prevBottom
      prevBottom = bot
    } else {
      var box = cur.node.getBoundingClientRect()
      height = box.bottom - box.top
    }
    var diff = cur.line.height - height
    if (height < 2) { height = textHeight(display) }
    if (diff > .001 || diff < -.001) {
      updateLineHeight(cur.line, height)
      updateWidgetHeight(cur.line)
      if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
        { updateWidgetHeight(cur.rest[j]) } }
    }
  }
}

// Read and store the height of line widgets associated with the
// given line.
function updateWidgetHeight(line) {
  if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i)
    { line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight } }
}

// Compute the lines that are visible in a given viewport (defaults
// the the current scroll position). viewport may contain top,
// height, and ensure (see op.scrollToPos) properties.
function visibleLines(display, doc, viewport) {
  var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop
  top = Math.floor(top - paddingTop(display))
  var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight

  var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom)
  // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
  // forces those lines into the viewport (if possible).
  if (viewport && viewport.ensure) {
    var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line
    if (ensureFrom < from) {
      from = ensureFrom
      to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight)
    } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
      from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight)
      to = ensureTo
    }
  }
  return {from: from, to: Math.max(to, from + 1)}
}

// Sync the scrollable area and scrollbars, ensure the viewport
// covers the visible area.
function setScrollTop(cm, val) {
  if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
  cm.doc.scrollTop = val
  if (!gecko) { updateDisplaySimple(cm, {top: val}) }
  if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val }
  cm.display.scrollbars.setScrollTop(val)
  if (gecko) { updateDisplaySimple(cm) }
  startWorker(cm, 100)
}
// Sync scroller and scrollbar, ensure the gutter elements are
// aligned.
function setScrollLeft(cm, val, isScroller) {
  if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) { return }
  val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth)
  cm.doc.scrollLeft = val
  alignHorizontally(cm)
  if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val }
  cm.display.scrollbars.setScrollLeft(val)
}

// Since the delta values reported on mouse wheel events are
// unstandardized between browsers and even browser versions, and
// generally horribly unpredictable, this code starts by measuring
// the scroll effect that the first few mouse wheel events have,
// and, from that, detects the way it can convert deltas to pixel
// offsets afterwards.
//
// The reason we want to know the amount a wheel event will scroll
// is that it gives us a chance to update the display before the
// actual scrolling happens, reducing flickering.

var wheelSamples = 0;
var wheelPixelsPerUnit = null;
// Fill in a browser-detected starting value on browsers where we
// know one. These don't have to be accurate -- the result of them
// being wrong would just be a slight flicker on the first wheel
// scroll (if it is large enough).
if (ie) { wheelPixelsPerUnit = -.53 }
else if (gecko) { wheelPixelsPerUnit = 15 }
else if (chrome) { wheelPixelsPerUnit = -.7 }
else if (safari) { wheelPixelsPerUnit = -1/3 }

function wheelEventDelta(e) {
  var dx = e.wheelDeltaX, dy = e.wheelDeltaY
  if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail }
  if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail }
  else if (dy == null) { dy = e.wheelDelta }
  return {x: dx, y: dy}
}
function wheelEventPixels(e) {
  var delta = wheelEventDelta(e)
  delta.x *= wheelPixelsPerUnit
  delta.y *= wheelPixelsPerUnit
  return delta
}

function onScrollWheel(cm, e) {
  var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y

  var display = cm.display, scroll = display.scroller
  // Quit if there's nothing to scroll here
  var canScrollX = scroll.scrollWidth > scroll.clientWidth
  var canScrollY = scroll.scrollHeight > scroll.clientHeight
  if (!(dx && canScrollX || dy && canScrollY)) { return }

  // Webkit browsers on OS X abort momentum scrolls when the target
  // of the scroll event is removed from the scrollable element.
  // This hack (see related code in patchDisplay) makes sure the
  // element is kept around.
  if (dy && mac && webkit) {
    outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
      for (var i = 0; i < view.length; i++) {
        if (view[i].node == cur) {
          cm.display.currentWheelTarget = cur
          break outer
        }
      }
    }
  }

  // On some browsers, horizontal scrolling will cause redraws to
  // happen before the gutter has been realigned, causing it to
  // wriggle around in a most unseemly way. When we have an
  // estimated pixels/delta value, we just handle horizontal
  // scrolling entirely here. It'll be slightly off from native, but
  // better than glitching out.
  if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
    if (dy && canScrollY)
      { setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight))) }
    setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)))
    // Only prevent default scrolling if vertical scrolling is
    // actually possible. Otherwise, it causes vertical scroll
    // jitter on OSX trackpads when deltaX is small and deltaY
    // is large (issue #3579)
    if (!dy || (dy && canScrollY))
      { e_preventDefault(e) }
    display.wheelStartX = null // Abort measurement, if in progress
    return
  }

  // 'Project' the visible viewport to cover the area that is being
  // scrolled into view (if we know enough to estimate it).
  if (dy && wheelPixelsPerUnit != null) {
    var pixels = dy * wheelPixelsPerUnit
    var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight
    if (pixels < 0) { top = Math.max(0, top + pixels - 50) }
    else { bot = Math.min(cm.doc.height, bot + pixels + 50) }
    updateDisplaySimple(cm, {top: top, bottom: bot})
  }

  if (wheelSamples < 20) {
    if (display.wheelStartX == null) {
      display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop
      display.wheelDX = dx; display.wheelDY = dy
      setTimeout(function () {
        if (display.wheelStartX == null) { return }
        var movedX = scroll.scrollLeft - display.wheelStartX
        var movedY = scroll.scrollTop - display.wheelStartY
        var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
          (movedX && display.wheelDX && movedX / display.wheelDX)
        display.wheelStartX = display.wheelStartY = null
        if (!sample) { return }
        wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1)
        ++wheelSamples
      }, 200)
    } else {
      display.wheelDX += dx; display.wheelDY += dy
    }
  }
}

// SCROLLBARS

// Prepare DOM reads needed to update the scrollbars. Done in one
// shot to minimize update/measure roundtrips.
function measureForScrollbars(cm) {
  var d = cm.display, gutterW = d.gutters.offsetWidth
  var docH = Math.round(cm.doc.height + paddingVert(cm.display))
  return {
    clientHeight: d.scroller.clientHeight,
    viewHeight: d.wrapper.clientHeight,
    scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
    viewWidth: d.wrapper.clientWidth,
    barLeft: cm.options.fixedGutter ? gutterW : 0,
    docHeight: docH,
    scrollHeight: docH + scrollGap(cm) + d.barHeight,
    nativeBarWidth: d.nativeBarWidth,
    gutterWidth: gutterW
  }
}

var NativeScrollbars = function(place, scroll, cm) {
  this.cm = cm
  var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
  var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar")
  place(vert); place(horiz)

  on(vert, "scroll", function () {
    if (vert.clientHeight) { scroll(vert.scrollTop, "vertical") }
  })
  on(horiz, "scroll", function () {
    if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal") }
  })

  this.checkedZeroWidth = false
  // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
  if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px" }
};

NativeScrollbars.prototype.update = function (measure) {
  var needsH = measure.scrollWidth > measure.clientWidth + 1
  var needsV = measure.scrollHeight > measure.clientHeight + 1
  var sWidth = measure.nativeBarWidth

  if (needsV) {
    this.vert.style.display = "block"
    this.vert.style.bottom = needsH ? sWidth + "px" : "0"
    var totalHeight = measure.viewHeight - (needsH ? sWidth : 0)
    // A bug in IE8 can cause this value to be negative, so guard it.
    this.vert.firstChild.style.height =
      Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px"
  } else {
    this.vert.style.display = ""
    this.vert.firstChild.style.height = "0"
  }

  if (needsH) {
    this.horiz.style.display = "block"
    this.horiz.style.right = needsV ? sWidth + "px" : "0"
    this.horiz.style.left = measure.barLeft + "px"
    var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0)
    this.horiz.firstChild.style.width =
      Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px"
  } else {
    this.horiz.style.display = ""
    this.horiz.firstChild.style.width = "0"
  }

  if (!this.checkedZeroWidth && measure.clientHeight > 0) {
    if (sWidth == 0) { this.zeroWidthHack() }
    this.checkedZeroWidth = true
  }

  return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
};

NativeScrollbars.prototype.setScrollLeft = function (pos) {
  if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos }
  if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz) }
};

NativeScrollbars.prototype.setScrollTop = function (pos) {
  if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos }
  if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert) }
};

NativeScrollbars.prototype.zeroWidthHack = function () {
  var w = mac && !mac_geMountainLion ? "12px" : "18px"
  this.horiz.style.height = this.vert.style.width = w
  this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none"
  this.disableHoriz = new Delayed
  this.disableVert = new Delayed
};

NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay) {
  bar.style.pointerEvents = "auto"
  function maybeDisable() {
    // To find out whether the scrollbar is still visible, we
    // check whether the element under the pixel in the bottom
    // left corner of the scrollbar box is the scrollbar box
    // itself (when the bar is still visible) or its filler child
    // (when the bar is hidden). If it is still visible, we keep
    // it enabled, if it's hidden, we disable pointer events.
    var box = bar.getBoundingClientRect()
    var elt = document.elementFromPoint(box.left + 1, box.bottom - 1)
    if (elt != bar) { bar.style.pointerEvents = "none" }
    else { delay.set(1000, maybeDisable) }
  }
  delay.set(1000, maybeDisable)
};

NativeScrollbars.prototype.clear = function () {
  var parent = this.horiz.parentNode
  parent.removeChild(this.horiz)
  parent.removeChild(this.vert)
};

var NullScrollbars = function () {};

NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
NullScrollbars.prototype.setScrollLeft = function () {};
NullScrollbars.prototype.setScrollTop = function () {};
NullScrollbars.prototype.clear = function () {};

function updateScrollbars(cm, measure) {
  if (!measure) { measure = measureForScrollbars(cm) }
  var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight
  updateScrollbarsInner(cm, measure)
  for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
    if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
      { updateHeightsInViewport(cm) }
    updateScrollbarsInner(cm, measureForScrollbars(cm))
    startWidth = cm.display.barWidth; startHeight = cm.display.barHeight
  }
}

// Re-synchronize the fake scrollbars with the actual size of the
// content.
function updateScrollbarsInner(cm, measure) {
  var d = cm.display
  var sizes = d.scrollbars.update(measure)

  d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px"
  d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px"
  d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent"

  if (sizes.right && sizes.bottom) {
    d.scrollbarFiller.style.display = "block"
    d.scrollbarFiller.style.height = sizes.bottom + "px"
    d.scrollbarFiller.style.width = sizes.right + "px"
  } else { d.scrollbarFiller.style.display = "" }
  if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
    d.gutterFiller.style.display = "block"
    d.gutterFiller.style.height = sizes.bottom + "px"
    d.gutterFiller.style.width = measure.gutterWidth + "px"
  } else { d.gutterFiller.style.display = "" }
}

var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars}

function initScrollbars(cm) {
  if (cm.display.scrollbars) {
    cm.display.scrollbars.clear()
    if (cm.display.scrollbars.addClass)
      { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass) }
  }

  cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
    cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller)
    // Prevent clicks in the scrollbars from killing focus
    on(node, "mousedown", function () {
      if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0) }
    })
    node.setAttribute("cm-not-content", "true")
  }, function (pos, axis) {
    if (axis == "horizontal") { setScrollLeft(cm, pos) }
    else { setScrollTop(cm, pos) }
  }, cm)
  if (cm.display.scrollbars.addClass)
    { addClass(cm.display.wrapper, cm.display.scrollbars.addClass) }
}

// SCROLLING THINGS INTO VIEW

// If an editor sits on the top or bottom of the window, partially
// scrolled out of view, this ensures that the cursor is visible.
function maybeScrollWindow(cm, coords) {
  if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

  var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null
  if (coords.top + box.top < 0) { doScroll = true }
  else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) { doScroll = false }
  if (doScroll != null && !phantom) {
    var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (coords.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (coords.left) + "px; width: 2px;"))
    cm.display.lineSpace.appendChild(scrollNode)
    scrollNode.scrollIntoView(doScroll)
    cm.display.lineSpace.removeChild(scrollNode)
  }
}

// Scroll a given position into view (immediately), verifying that
// it actually became visible (as line heights are accurately
// measured, the position of something may 'drift' during drawing).
function scrollPosIntoView(cm, pos, end, margin) {
  if (margin == null) { margin = 0 }
  var coords
  for (var limit = 0; limit < 5; limit++) {
    var changed = false
    coords = cursorCoords(cm, pos)
    var endCoords = !end || end == pos ? coords : cursorCoords(cm, end)
    var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
                                       Math.min(coords.top, endCoords.top) - margin,
                                       Math.max(coords.left, endCoords.left),
                                       Math.max(coords.bottom, endCoords.bottom) + margin)
    var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft
    if (scrollPos.scrollTop != null) {
      setScrollTop(cm, scrollPos.scrollTop)
      if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true }
    }
    if (scrollPos.scrollLeft != null) {
      setScrollLeft(cm, scrollPos.scrollLeft)
      if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true }
    }
    if (!changed) { break }
  }
  return coords
}

// Scroll a given set of coordinates into view (immediately).
function scrollIntoView(cm, x1, y1, x2, y2) {
  var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2)
  if (scrollPos.scrollTop != null) { setScrollTop(cm, scrollPos.scrollTop) }
  if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft) }
}

// Calculate a new scroll position needed to scroll the given
// rectangle into view. Returns an object with scrollTop and
// scrollLeft properties. When these are undefined, the
// vertical/horizontal position does not need to be adjusted.
function calculateScrollPos(cm, x1, y1, x2, y2) {
  var display = cm.display, snapMargin = textHeight(cm.display)
  if (y1 < 0) { y1 = 0 }
  var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop
  var screen = displayHeight(cm), result = {}
  if (y2 - y1 > screen) { y2 = y1 + screen }
  var docBottom = cm.doc.height + paddingVert(display)
  var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin
  if (y1 < screentop) {
    result.scrollTop = atTop ? 0 : y1
  } else if (y2 > screentop + screen) {
    var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen)
    if (newTop != screentop) { result.scrollTop = newTop }
  }

  var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft
  var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0)
  var tooWide = x2 - x1 > screenw
  if (tooWide) { x2 = x1 + screenw }
  if (x1 < 10)
    { result.scrollLeft = 0 }
  else if (x1 < screenleft)
    { result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10)) }
  else if (x2 > screenw + screenleft - 3)
    { result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw }
  return result
}

// Store a relative adjustment to the scroll position in the current
// operation (to be applied when the operation finishes).
function addToScrollPos(cm, left, top) {
  if (left != null || top != null) { resolveScrollToPos(cm) }
  if (left != null)
    { cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left }
  if (top != null)
    { cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top }
}

// Make sure that at the end of the operation the current cursor is
// shown.
function ensureCursorVisible(cm) {
  resolveScrollToPos(cm)
  var cur = cm.getCursor(), from = cur, to = cur
  if (!cm.options.lineWrapping) {
    from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur
    to = Pos(cur.line, cur.ch + 1)
  }
  cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true}
}

// When an operation has its scrollToPos property set, and another
// scroll action is applied before the end of the operation, this
// 'simulates' scrolling that position into view in a cheap way, so
// that the effect of intermediate scroll commands is not ignored.
function resolveScrollToPos(cm) {
  var range = cm.curOp.scrollToPos
  if (range) {
    cm.curOp.scrollToPos = null
    var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to)
    var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
                                  Math.min(from.top, to.top) - range.margin,
                                  Math.max(from.right, to.right),
                                  Math.max(from.bottom, to.bottom) + range.margin)
    cm.scrollTo(sPos.scrollLeft, sPos.scrollTop)
  }
}

// Operations are used to wrap a series of changes to the editor
// state in such a way that each change won't have to update the
// cursor and display (which would be awkward, slow, and
// error-prone). Instead, display updates are batched and then all
// combined and executed at once.

var nextOpId = 0
// Start a new operation.
function startOperation(cm) {
  cm.curOp = {
    cm: cm,
    viewChanged: false,      // Flag that indicates that lines might need to be redrawn
    startHeight: cm.doc.height, // Used to detect need to update scrollbar
    forceUpdate: false,      // Used to force a redraw
    updateInput: null,       // Whether to reset the input textarea
    typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
    changeObjs: null,        // Accumulated changes, for firing change events
    cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
    cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
    selectionChanged: false, // Whether the selection needs to be redrawn
    updateMaxLine: false,    // Set when the widest line needs to be determined anew
    scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
    scrollToPos: null,       // Used to scroll to a specific position
    focus: false,
    id: ++nextOpId           // Unique ID
  }
  pushOperation(cm.curOp)
}

// Finish an operation, updating the display and signalling delayed events
function endOperation(cm) {
  var op = cm.curOp
  finishOperation(op, function (group) {
    for (var i = 0; i < group.ops.length; i++)
      { group.ops[i].cm.curOp = null }
    endOperations(group)
  })
}

// The DOM updates done when an operation finishes are batched so
// that the minimum number of relayouts are required.
function endOperations(group) {
  var ops = group.ops
  for (var i = 0; i < ops.length; i++) // Read DOM
    { endOperation_R1(ops[i]) }
  for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
    { endOperation_W1(ops[i$1]) }
  for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
    { endOperation_R2(ops[i$2]) }
  for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
    { endOperation_W2(ops[i$3]) }
  for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
    { endOperation_finish(ops[i$4]) }
}

function endOperation_R1(op) {
  var cm = op.cm, display = cm.display
  maybeClipScrollbars(cm)
  if (op.updateMaxLine) { findMaxLine(cm) }

  op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
    op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                       op.scrollToPos.to.line >= display.viewTo) ||
    display.maxLineChanged && cm.options.lineWrapping
  op.update = op.mustUpdate &&
    new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate)
}

function endOperation_W1(op) {
  op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update)
}

function endOperation_R2(op) {
  var cm = op.cm, display = cm.display
  if (op.updatedDisplay) { updateHeightsInViewport(cm) }

  op.barMeasure = measureForScrollbars(cm)

  // If the max line changed since it was last measured, measure it,
  // and ensure the document's width matches it.
  // updateDisplay_W2 will use these properties to do the actual resizing
  if (display.maxLineChanged && !cm.options.lineWrapping) {
    op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3
    cm.display.sizerWidth = op.adjustWidthTo
    op.barMeasure.scrollWidth =
      Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth)
    op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm))
  }

  if (op.updatedDisplay || op.selectionChanged)
    { op.preparedSelection = display.input.prepareSelection(op.focus) }
}

function endOperation_W2(op) {
  var cm = op.cm

  if (op.adjustWidthTo != null) {
    cm.display.sizer.style.minWidth = op.adjustWidthTo + "px"
    if (op.maxScrollLeft < cm.doc.scrollLeft)
      { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true) }
    cm.display.maxLineChanged = false
  }

  var takeFocus = op.focus && op.focus == activeElt() && (!document.hasFocus || document.hasFocus())
  if (op.preparedSelection)
    { cm.display.input.showSelection(op.preparedSelection, takeFocus) }
  if (op.updatedDisplay || op.startHeight != cm.doc.height)
    { updateScrollbars(cm, op.barMeasure) }
  if (op.updatedDisplay)
    { setDocumentHeight(cm, op.barMeasure) }

  if (op.selectionChanged) { restartBlink(cm) }

  if (cm.state.focused && op.updateInput)
    { cm.display.input.reset(op.typing) }
  if (takeFocus) { ensureFocus(op.cm) }
}

function endOperation_finish(op) {
  var cm = op.cm, display = cm.display, doc = cm.doc

  if (op.updatedDisplay) { postUpdateDisplay(cm, op.update) }

  // Abort mouse wheel delta measurement, when scrolling explicitly
  if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
    { display.wheelStartX = display.wheelStartY = null }

  // Propagate the scroll position to the actual DOM scroller
  if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
    doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop))
    display.scrollbars.setScrollTop(doc.scrollTop)
    display.scroller.scrollTop = doc.scrollTop
  }
  if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
    doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - display.scroller.clientWidth, op.scrollLeft))
    display.scrollbars.setScrollLeft(doc.scrollLeft)
    display.scroller.scrollLeft = doc.scrollLeft
    alignHorizontally(cm)
  }
  // If we need to scroll a specific position into view, do so.
  if (op.scrollToPos) {
    var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
                                   clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin)
    if (op.scrollToPos.isCursor && cm.state.focused) { maybeScrollWindow(cm, coords) }
  }

  // Fire events for markers that are hidden/unidden by editing or
  // undoing
  var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers
  if (hidden) { for (var i = 0; i < hidden.length; ++i)
    { if (!hidden[i].lines.length) { signal(hidden[i], "hide") } } }
  if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
    { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide") } } }

  if (display.wrapper.offsetHeight)
    { doc.scrollTop = cm.display.scroller.scrollTop }

  // Fire change events, and delayed event handlers
  if (op.changeObjs)
    { signal(cm, "changes", cm, op.changeObjs) }
  if (op.update)
    { op.update.finish() }
}

// Run the given function in an operation
function runInOp(cm, f) {
  if (cm.curOp) { return f() }
  startOperation(cm)
  try { return f() }
  finally { endOperation(cm) }
}
// Wraps a function in an operation. Returns the wrapped function.
function operation(cm, f) {
  return function() {
    if (cm.curOp) { return f.apply(cm, arguments) }
    startOperation(cm)
    try { return f.apply(cm, arguments) }
    finally { endOperation(cm) }
  }
}
// Used to add methods to editor and doc instances, wrapping them in
// operations.
function methodOp(f) {
  return function() {
    if (this.curOp) { return f.apply(this, arguments) }
    startOperation(this)
    try { return f.apply(this, arguments) }
    finally { endOperation(this) }
  }
}
function docMethodOp(f) {
  return function() {
    var cm = this.cm
    if (!cm || cm.curOp) { return f.apply(this, arguments) }
    startOperation(cm)
    try { return f.apply(this, arguments) }
    finally { endOperation(cm) }
  }
}

// Updates the display.view data structure for a given change to the
// document. From and to are in pre-change coordinates. Lendiff is
// the amount of lines added or subtracted by the change. This is
// used for changes that span multiple lines, or change the way
// lines are divided into visual lines. regLineChange (below)
// registers single-line changes.
function regChange(cm, from, to, lendiff) {
  if (from == null) { from = cm.doc.first }
  if (to == null) { to = cm.doc.first + cm.doc.size }
  if (!lendiff) { lendiff = 0 }

  var display = cm.display
  if (lendiff && to < display.viewTo &&
      (display.updateLineNumbers == null || display.updateLineNumbers > from))
    { display.updateLineNumbers = from }

  cm.curOp.viewChanged = true

  if (from >= display.viewTo) { // Change after
    if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
      { resetView(cm) }
  } else if (to <= display.viewFrom) { // Change before
    if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
      resetView(cm)
    } else {
      display.viewFrom += lendiff
      display.viewTo += lendiff
    }
  } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
    resetView(cm)
  } else if (from <= display.viewFrom) { // Top overlap
    var cut = viewCuttingPoint(cm, to, to + lendiff, 1)
    if (cut) {
      display.view = display.view.slice(cut.index)
      display.viewFrom = cut.lineN
      display.viewTo += lendiff
    } else {
      resetView(cm)
    }
  } else if (to >= display.viewTo) { // Bottom overlap
    var cut$1 = viewCuttingPoint(cm, from, from, -1)
    if (cut$1) {
      display.view = display.view.slice(0, cut$1.index)
      display.viewTo = cut$1.lineN
    } else {
      resetView(cm)
    }
  } else { // Gap in the middle
    var cutTop = viewCuttingPoint(cm, from, from, -1)
    var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1)
    if (cutTop && cutBot) {
      display.view = display.view.slice(0, cutTop.index)
        .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
        .concat(display.view.slice(cutBot.index))
      display.viewTo += lendiff
    } else {
      resetView(cm)
    }
  }

  var ext = display.externalMeasured
  if (ext) {
    if (to < ext.lineN)
      { ext.lineN += lendiff }
    else if (from < ext.lineN + ext.size)
      { display.externalMeasured = null }
  }
}

// Register a change to a single line. Type must be one of "text",
// "gutter", "class", "widget"
function regLineChange(cm, line, type) {
  cm.curOp.viewChanged = true
  var display = cm.display, ext = cm.display.externalMeasured
  if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
    { display.externalMeasured = null }

  if (line < display.viewFrom || line >= display.viewTo) { return }
  var lineView = display.view[findViewIndex(cm, line)]
  if (lineView.node == null) { return }
  var arr = lineView.changes || (lineView.changes = [])
  if (indexOf(arr, type) == -1) { arr.push(type) }
}

// Clear the view.
function resetView(cm) {
  cm.display.viewFrom = cm.display.viewTo = cm.doc.first
  cm.display.view = []
  cm.display.viewOffset = 0
}

function viewCuttingPoint(cm, oldN, newN, dir) {
  var index = findViewIndex(cm, oldN), diff, view = cm.display.view
  if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
    { return {index: index, lineN: newN} }
  var n = cm.display.viewFrom
  for (var i = 0; i < index; i++)
    { n += view[i].size }
  if (n != oldN) {
    if (dir > 0) {
      if (index == view.length - 1) { return null }
      diff = (n + view[index].size) - oldN
      index++
    } else {
      diff = n - oldN
    }
    oldN += diff; newN += diff
  }
  while (visualLineNo(cm.doc, newN) != newN) {
    if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
    newN += dir * view[index - (dir < 0 ? 1 : 0)].size
    index += dir
  }
  return {index: index, lineN: newN}
}

// Force the view to cover a given range, adding empty view element
// or clipping off existing ones as needed.
function adjustView(cm, from, to) {
  var display = cm.display, view = display.view
  if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
    display.view = buildViewArray(cm, from, to)
    display.viewFrom = from
  } else {
    if (display.viewFrom > from)
      { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view) }
    else if (display.viewFrom < from)
      { display.view = display.view.slice(findViewIndex(cm, from)) }
    display.viewFrom = from
    if (display.viewTo < to)
      { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)) }
    else if (display.viewTo > to)
      { display.view = display.view.slice(0, findViewIndex(cm, to)) }
  }
  display.viewTo = to
}

// Count the number of lines in the view whose DOM representation is
// out of date (or nonexistent).
function countDirtyView(cm) {
  var view = cm.display.view, dirty = 0
  for (var i = 0; i < view.length; i++) {
    var lineView = view[i]
    if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty }
  }
  return dirty
}

// HIGHLIGHT WORKER

function startWorker(cm, time) {
  if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
    { cm.state.highlight.set(time, bind(highlightWorker, cm)) }
}

function highlightWorker(cm) {
  var doc = cm.doc
  if (doc.frontier < doc.first) { doc.frontier = doc.first }
  if (doc.frontier >= cm.display.viewTo) { return }
  var end = +new Date + cm.options.workTime
  var state = copyState(doc.mode, getStateBefore(cm, doc.frontier))
  var changedLines = []

  doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
    if (doc.frontier >= cm.display.viewFrom) { // Visible
      var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength
      var highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, true)
      line.styles = highlighted.styles
      var oldCls = line.styleClasses, newCls = highlighted.classes
      if (newCls) { line.styleClasses = newCls }
      else if (oldCls) { line.styleClasses = null }
      var ischange = !oldStyles || oldStyles.length != line.styles.length ||
        oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass)
      for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i] }
      if (ischange) { changedLines.push(doc.frontier) }
      line.stateAfter = tooLong ? state : copyState(doc.mode, state)
    } else {
      if (line.text.length <= cm.options.maxHighlightLength)
        { processLine(cm, line.text, state) }
      line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null
    }
    ++doc.frontier
    if (+new Date > end) {
      startWorker(cm, cm.options.workDelay)
      return true
    }
  })
  if (changedLines.length) { runInOp(cm, function () {
    for (var i = 0; i < changedLines.length; i++)
      { regLineChange(cm, changedLines[i], "text") }
  }) }
}

// DISPLAY DRAWING

var DisplayUpdate = function(cm, viewport, force) {
  var display = cm.display

  this.viewport = viewport
  // Store some values that we'll need later (but don't want to force a relayout for)
  this.visible = visibleLines(display, cm.doc, viewport)
  this.editorIsHidden = !display.wrapper.offsetWidth
  this.wrapperHeight = display.wrapper.clientHeight
  this.wrapperWidth = display.wrapper.clientWidth
  this.oldDisplayWidth = displayWidth(cm)
  this.force = force
  this.dims = getDimensions(cm)
  this.events = []
};

DisplayUpdate.prototype.signal = function (emitter, type) {
  if (hasHandler(emitter, type))
    { this.events.push(arguments) }
};
DisplayUpdate.prototype.finish = function () {
    var this$1 = this;

  for (var i = 0; i < this.events.length; i++)
    { signal.apply(null, this$1.events[i]) }
};

function maybeClipScrollbars(cm) {
  var display = cm.display
  if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
    display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth
    display.heightForcer.style.height = scrollGap(cm) + "px"
    display.sizer.style.marginBottom = -display.nativeBarWidth + "px"
    display.sizer.style.borderRightWidth = scrollGap(cm) + "px"
    display.scrollbarsClipped = true
  }
}

// Does the actual updating of the line display. Bails out
// (returning false) when there is nothing to be done and forced is
// false.
function updateDisplayIfNeeded(cm, update) {
  var display = cm.display, doc = cm.doc

  if (update.editorIsHidden) {
    resetView(cm)
    return false
  }

  // Bail out if the visible area is already rendered and nothing changed.
  if (!update.force &&
      update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
      display.renderedView == display.view && countDirtyView(cm) == 0)
    { return false }

  if (maybeUpdateLineNumberWidth(cm)) {
    resetView(cm)
    update.dims = getDimensions(cm)
  }

  // Compute a suitable new viewport (from & to)
  var end = doc.first + doc.size
  var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first)
  var to = Math.min(end, update.visible.to + cm.options.viewportMargin)
  if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom) }
  if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo) }
  if (sawCollapsedSpans) {
    from = visualLineNo(cm.doc, from)
    to = visualLineEndNo(cm.doc, to)
  }

  var different = from != display.viewFrom || to != display.viewTo ||
    display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth
  adjustView(cm, from, to)

  display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom))
  // Position the mover div to align with the current scroll position
  cm.display.mover.style.top = display.viewOffset + "px"

  var toUpdate = countDirtyView(cm)
  if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
    { return false }

  // For big changes, we hide the enclosing element during the
  // update, since that speeds up the operations on most browsers.
  var focused = activeElt()
  if (toUpdate > 4) { display.lineDiv.style.display = "none" }
  patchDisplay(cm, display.updateLineNumbers, update.dims)
  if (toUpdate > 4) { display.lineDiv.style.display = "" }
  display.renderedView = display.view
  // There might have been a widget with a focused element that got
  // hidden or updated, if so re-focus it.
  if (focused && activeElt() != focused && focused.offsetHeight) { focused.focus() }

  // Prevent selection and cursors from interfering with the scroll
  // width and height.
  removeChildren(display.cursorDiv)
  removeChildren(display.selectionDiv)
  display.gutters.style.height = display.sizer.style.minHeight = 0

  if (different) {
    display.lastWrapHeight = update.wrapperHeight
    display.lastWrapWidth = update.wrapperWidth
    startWorker(cm, 400)
  }

  display.updateLineNumbers = null

  return true
}

function postUpdateDisplay(cm, update) {
  var viewport = update.viewport

  for (var first = true;; first = false) {
    if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
      // Clip forced viewport to actual scrollable area.
      if (viewport && viewport.top != null)
        { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)} }
      // Updated line heights might result in the drawn area not
      // actually covering the viewport. Keep looping until it does.
      update.visible = visibleLines(cm.display, cm.doc, viewport)
      if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
        { break }
    }
    if (!updateDisplayIfNeeded(cm, update)) { break }
    updateHeightsInViewport(cm)
    var barMeasure = measureForScrollbars(cm)
    updateSelection(cm)
    updateScrollbars(cm, barMeasure)
    setDocumentHeight(cm, barMeasure)
  }

  update.signal(cm, "update", cm)
  if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
    update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo)
    cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo
  }
}

function updateDisplaySimple(cm, viewport) {
  var update = new DisplayUpdate(cm, viewport)
  if (updateDisplayIfNeeded(cm, update)) {
    updateHeightsInViewport(cm)
    postUpdateDisplay(cm, update)
    var barMeasure = measureForScrollbars(cm)
    updateSelection(cm)
    updateScrollbars(cm, barMeasure)
    setDocumentHeight(cm, barMeasure)
    update.finish()
  }
}

// Sync the actual display DOM structure with display.view, removing
// nodes for lines that are no longer in view, and creating the ones
// that are not there yet, and updating the ones that are out of
// date.
function patchDisplay(cm, updateNumbersFrom, dims) {
  var display = cm.display, lineNumbers = cm.options.lineNumbers
  var container = display.lineDiv, cur = container.firstChild

  function rm(node) {
    var next = node.nextSibling
    // Works around a throw-scroll bug in OS X Webkit
    if (webkit && mac && cm.display.currentWheelTarget == node)
      { node.style.display = "none" }
    else
      { node.parentNode.removeChild(node) }
    return next
  }

  var view = display.view, lineN = display.viewFrom
  // Loop over the elements in the view, syncing cur (the DOM nodes
  // in display.lineDiv) with the view as we go.
  for (var i = 0; i < view.length; i++) {
    var lineView = view[i]
    if (lineView.hidden) {
    } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
      var node = buildLineElement(cm, lineView, lineN, dims)
      container.insertBefore(node, cur)
    } else { // Already drawn
      while (cur != lineView.node) { cur = rm(cur) }
      var updateNumber = lineNumbers && updateNumbersFrom != null &&
        updateNumbersFrom <= lineN && lineView.lineNumber
      if (lineView.changes) {
        if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false }
        updateLineForChanges(cm, lineView, lineN, dims)
      }
      if (updateNumber) {
        removeChildren(lineView.lineNumber)
        lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)))
      }
      cur = lineView.node.nextSibling
    }
    lineN += lineView.size
  }
  while (cur) { cur = rm(cur) }
}

function updateGutterSpace(cm) {
  var width = cm.display.gutters.offsetWidth
  cm.display.sizer.style.marginLeft = width + "px"
}

function setDocumentHeight(cm, measure) {
  cm.display.sizer.style.minHeight = measure.docHeight + "px"
  cm.display.heightForcer.style.top = measure.docHeight + "px"
  cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px"
}

// Rebuild the gutter elements, ensure the margin to the left of the
// code matches their width.
function updateGutters(cm) {
  var gutters = cm.display.gutters, specs = cm.options.gutters
  removeChildren(gutters)
  var i = 0
  for (; i < specs.length; ++i) {
    var gutterClass = specs[i]
    var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass))
    if (gutterClass == "CodeMirror-linenumbers") {
      cm.display.lineGutter = gElt
      gElt.style.width = (cm.display.lineNumWidth || 1) + "px"
    }
  }
  gutters.style.display = i ? "" : "none"
  updateGutterSpace(cm)
}

// Make sure the gutters options contains the element
// "CodeMirror-linenumbers" when the lineNumbers option is true.
function setGuttersForLineNumbers(options) {
  var found = indexOf(options.gutters, "CodeMirror-linenumbers")
  if (found == -1 && options.lineNumbers) {
    options.gutters = options.gutters.concat(["CodeMirror-linenumbers"])
  } else if (found > -1 && !options.lineNumbers) {
    options.gutters = options.gutters.slice(0)
    options.gutters.splice(found, 1)
  }
}

// Selection objects are immutable. A new one is created every time
// the selection changes. A selection is one or more non-overlapping
// (and non-touching) ranges, sorted, and an integer that indicates
// which one is the primary selection (the one that's scrolled into
// view, that getCursor returns, etc).
var Selection = function(ranges, primIndex) {
  this.ranges = ranges
  this.primIndex = primIndex
};

Selection.prototype.primary = function () { return this.ranges[this.primIndex] };

Selection.prototype.equals = function (other) {
    var this$1 = this;

  if (other == this) { return true }
  if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
  for (var i = 0; i < this.ranges.length; i++) {
    var here = this$1.ranges[i], there = other.ranges[i]
    if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) { return false }
  }
  return true
};

Selection.prototype.deepCopy = function () {
    var this$1 = this;

  var out = []
  for (var i = 0; i < this.ranges.length; i++)
    { out[i] = new Range(copyPos(this$1.ranges[i].anchor), copyPos(this$1.ranges[i].head)) }
  return new Selection(out, this.primIndex)
};

Selection.prototype.somethingSelected = function () {
    var this$1 = this;

  for (var i = 0; i < this.ranges.length; i++)
    { if (!this$1.ranges[i].empty()) { return true } }
  return false
};

Selection.prototype.contains = function (pos, end) {
    var this$1 = this;

  if (!end) { end = pos }
  for (var i = 0; i < this.ranges.length; i++) {
    var range = this$1.ranges[i]
    if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
      { return i }
  }
  return -1
};

var Range = function(anchor, head) {
  this.anchor = anchor; this.head = head
};

Range.prototype.from = function () { return minPos(this.anchor, this.head) };
Range.prototype.to = function () { return maxPos(this.anchor, this.head) };
Range.prototype.empty = function () { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch };

// Take an unsorted, potentially overlapping set of ranges, and
// build a selection out of it. 'Consumes' ranges array (modifying
// it).
function normalizeSelection(ranges, primIndex) {
  var prim = ranges[primIndex]
  ranges.sort(function (a, b) { return cmp(a.from(), b.from()); })
  primIndex = indexOf(ranges, prim)
  for (var i = 1; i < ranges.length; i++) {
    var cur = ranges[i], prev = ranges[i - 1]
    if (cmp(prev.to(), cur.from()) >= 0) {
      var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to())
      var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head
      if (i <= primIndex) { --primIndex }
      ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to))
    }
  }
  return new Selection(ranges, primIndex)
}

function simpleSelection(anchor, head) {
  return new Selection([new Range(anchor, head || anchor)], 0)
}

// Compute the position of the end of a change (its 'to' property
// refers to the pre-change end).
function changeEnd(change) {
  if (!change.text) { return change.to }
  return Pos(change.from.line + change.text.length - 1,
             lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
}

// Adjust a position to refer to the post-change position of the
// same text, or the end of the change if the change covers it.
function adjustForChange(pos, change) {
  if (cmp(pos, change.from) < 0) { return pos }
  if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

  var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch
  if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch }
  return Pos(line, ch)
}

function computeSelAfterChange(doc, change) {
  var out = []
  for (var i = 0; i < doc.sel.ranges.length; i++) {
    var range = doc.sel.ranges[i]
    out.push(new Range(adjustForChange(range.anchor, change),
                       adjustForChange(range.head, change)))
  }
  return normalizeSelection(out, doc.sel.primIndex)
}

function offsetPos(pos, old, nw) {
  if (pos.line == old.line)
    { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
  else
    { return Pos(nw.line + (pos.line - old.line), pos.ch) }
}

// Used by replaceSelections to allow moving the selection to the
// start or around the replaced test. Hint may be "start" or "around".
function computeReplacedSel(doc, changes, hint) {
  var out = []
  var oldPrev = Pos(doc.first, 0), newPrev = oldPrev
  for (var i = 0; i < changes.length; i++) {
    var change = changes[i]
    var from = offsetPos(change.from, oldPrev, newPrev)
    var to = offsetPos(changeEnd(change), oldPrev, newPrev)
    oldPrev = change.to
    newPrev = to
    if (hint == "around") {
      var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0
      out[i] = new Range(inv ? to : from, inv ? from : to)
    } else {
      out[i] = new Range(from, from)
    }
  }
  return new Selection(out, doc.sel.primIndex)
}

// Used to get the editor into a consistent state again when options change.

function loadMode(cm) {
  cm.doc.mode = getMode(cm.options, cm.doc.modeOption)
  resetModeState(cm)
}

function resetModeState(cm) {
  cm.doc.iter(function (line) {
    if (line.stateAfter) { line.stateAfter = null }
    if (line.styles) { line.styles = null }
  })
  cm.doc.frontier = cm.doc.first
  startWorker(cm, 100)
  cm.state.modeGen++
  if (cm.curOp) { regChange(cm) }
}

// DOCUMENT DATA STRUCTURE

// By default, updates that start and end at the beginning of a line
// are treated specially, in order to make the association of line
// widgets and marker elements with the text behave more intuitive.
function isWholeLineUpdate(doc, change) {
  return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
    (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
}

// Perform a change on the document data structure.
function updateDoc(doc, change, markedSpans, estimateHeight) {
  function spansFor(n) {return markedSpans ? markedSpans[n] : null}
  function update(line, text, spans) {
    updateLine(line, text, spans, estimateHeight)
    signalLater(line, "change", line, change)
  }
  function linesFor(start, end) {
    var result = []
    for (var i = start; i < end; ++i)
      { result.push(new Line(text[i], spansFor(i), estimateHeight)) }
    return result
  }

  var from = change.from, to = change.to, text = change.text
  var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line)
  var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line

  // Adjust the line structure
  if (change.full) {
    doc.insert(0, linesFor(0, text.length))
    doc.remove(text.length, doc.size - text.length)
  } else if (isWholeLineUpdate(doc, change)) {
    // This is a whole-line replace. Treated specially to make
    // sure line objects move the way they are supposed to.
    var added = linesFor(0, text.length - 1)
    update(lastLine, lastLine.text, lastSpans)
    if (nlines) { doc.remove(from.line, nlines) }
    if (added.length) { doc.insert(from.line, added) }
  } else if (firstLine == lastLine) {
    if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans)
    } else {
      var added$1 = linesFor(1, text.length - 1)
      added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight))
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
      doc.insert(from.line + 1, added$1)
    }
  } else if (text.length == 1) {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0))
    doc.remove(from.line + 1, nlines)
  } else {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
    update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans)
    var added$2 = linesFor(1, text.length - 1)
    if (nlines > 1) { doc.remove(from.line + 1, nlines - 1) }
    doc.insert(from.line + 1, added$2)
  }

  signalLater(doc, "change", doc, change)
}

// Call f for all linked documents.
function linkedDocs(doc, f, sharedHistOnly) {
  function propagate(doc, skip, sharedHist) {
    if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
      var rel = doc.linked[i]
      if (rel.doc == skip) { continue }
      var shared = sharedHist && rel.sharedHist
      if (sharedHistOnly && !shared) { continue }
      f(rel.doc, shared)
      propagate(rel.doc, doc, shared)
    } }
  }
  propagate(doc, null, true)
}

// Attach a document to an editor.
function attachDoc(cm, doc) {
  if (doc.cm) { throw new Error("This document is already in use.") }
  cm.doc = doc
  doc.cm = cm
  estimateLineHeights(cm)
  loadMode(cm)
  if (!cm.options.lineWrapping) { findMaxLine(cm) }
  cm.options.mode = doc.modeOption
  regChange(cm)
}

function History(startGen) {
  // Arrays of change events and selections. Doing something adds an
  // event to done and clears undo. Undoing moves events from done
  // to undone, redoing moves them in the other direction.
  this.done = []; this.undone = []
  this.undoDepth = Infinity
  // Used to track when changes can be merged into a single undo
  // event
  this.lastModTime = this.lastSelTime = 0
  this.lastOp = this.lastSelOp = null
  this.lastOrigin = this.lastSelOrigin = null
  // Used by the isClean() method
  this.generation = this.maxGeneration = startGen || 1
}

// Create a history change event from an updateDoc-style change
// object.
function historyChangeFromChange(doc, change) {
  var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)}
  attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1)
  linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true)
  return histChange
}

// Pop all selection events off the end of a history array. Stop at
// a change event.
function clearSelectionEvents(array) {
  while (array.length) {
    var last = lst(array)
    if (last.ranges) { array.pop() }
    else { break }
  }
}

// Find the top change event in the history. Pop off selection
// events that are in the way.
function lastChangeEvent(hist, force) {
  if (force) {
    clearSelectionEvents(hist.done)
    return lst(hist.done)
  } else if (hist.done.length && !lst(hist.done).ranges) {
    return lst(hist.done)
  } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
    hist.done.pop()
    return lst(hist.done)
  }
}

// Register a change in the history. Merges changes that are within
// a single operation, or are close together with an origin that
// allows merging (starting with "+") into a single event.
function addChangeToHistory(doc, change, selAfter, opId) {
  var hist = doc.history
  hist.undone.length = 0
  var time = +new Date, cur
  var last

  if ((hist.lastOp == opId ||
       hist.lastOrigin == change.origin && change.origin &&
       ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
        change.origin.charAt(0) == "*")) &&
      (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
    // Merge this change into the last event
    last = lst(cur.changes)
    if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
      // Optimized case for simple insertion -- don't want to add
      // new changesets for every character typed
      last.to = changeEnd(change)
    } else {
      // Add new sub-event
      cur.changes.push(historyChangeFromChange(doc, change))
    }
  } else {
    // Can not be merged, start a new event.
    var before = lst(hist.done)
    if (!before || !before.ranges)
      { pushSelectionToHistory(doc.sel, hist.done) }
    cur = {changes: [historyChangeFromChange(doc, change)],
           generation: hist.generation}
    hist.done.push(cur)
    while (hist.done.length > hist.undoDepth) {
      hist.done.shift()
      if (!hist.done[0].ranges) { hist.done.shift() }
    }
  }
  hist.done.push(selAfter)
  hist.generation = ++hist.maxGeneration
  hist.lastModTime = hist.lastSelTime = time
  hist.lastOp = hist.lastSelOp = opId
  hist.lastOrigin = hist.lastSelOrigin = change.origin

  if (!last) { signal(doc, "historyAdded") }
}

function selectionEventCanBeMerged(doc, origin, prev, sel) {
  var ch = origin.charAt(0)
  return ch == "*" ||
    ch == "+" &&
    prev.ranges.length == sel.ranges.length &&
    prev.somethingSelected() == sel.somethingSelected() &&
    new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
}

// Called whenever the selection changes, sets the new selection as
// the pending selection in the history, and pushes the old pending
// selection into the 'done' array when it was significantly
// different (in number of selected ranges, emptiness, or time).
function addSelectionToHistory(doc, sel, opId, options) {
  var hist = doc.history, origin = options && options.origin

  // A new event is started when the previous origin does not match
  // the current, or the origins don't allow matching. Origins
  // starting with * are always merged, those starting with + are
  // merged when similar and close together in time.
  if (opId == hist.lastSelOp ||
      (origin && hist.lastSelOrigin == origin &&
       (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
        selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
    { hist.done[hist.done.length - 1] = sel }
  else
    { pushSelectionToHistory(sel, hist.done) }

  hist.lastSelTime = +new Date
  hist.lastSelOrigin = origin
  hist.lastSelOp = opId
  if (options && options.clearRedo !== false)
    { clearSelectionEvents(hist.undone) }
}

function pushSelectionToHistory(sel, dest) {
  var top = lst(dest)
  if (!(top && top.ranges && top.equals(sel)))
    { dest.push(sel) }
}

// Used to store marked span information in the history.
function attachLocalSpans(doc, change, from, to) {
  var existing = change["spans_" + doc.id], n = 0
  doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
    if (line.markedSpans)
      { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans }
    ++n
  })
}

// When un/re-doing restores text containing marked spans, those
// that have been explicitly cleared should not be restored.
function removeClearedSpans(spans) {
  if (!spans) { return null }
  var out
  for (var i = 0; i < spans.length; ++i) {
    if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i) } }
    else if (out) { out.push(spans[i]) }
  }
  return !out ? spans : out.length ? out : null
}

// Retrieve and filter the old marked spans stored in a change event.
function getOldSpans(doc, change) {
  var found = change["spans_" + doc.id]
  if (!found) { return null }
  var nw = []
  for (var i = 0; i < change.text.length; ++i)
    { nw.push(removeClearedSpans(found[i])) }
  return nw
}

// Used for un/re-doing changes from the history. Combines the
// result of computing the existing spans with the set of spans that
// existed in the history (so that deleting around a span and then
// undoing brings back the span).
function mergeOldSpans(doc, change) {
  var old = getOldSpans(doc, change)
  var stretched = stretchSpansOverChange(doc, change)
  if (!old) { return stretched }
  if (!stretched) { return old }

  for (var i = 0; i < old.length; ++i) {
    var oldCur = old[i], stretchCur = stretched[i]
    if (oldCur && stretchCur) {
      spans: for (var j = 0; j < stretchCur.length; ++j) {
        var span = stretchCur[j]
        for (var k = 0; k < oldCur.length; ++k)
          { if (oldCur[k].marker == span.marker) { continue spans } }
        oldCur.push(span)
      }
    } else if (stretchCur) {
      old[i] = stretchCur
    }
  }
  return old
}

// Used both to provide a JSON-safe object in .getHistory, and, when
// detaching a document, to split the history in two
function copyHistoryArray(events, newGroup, instantiateSel) {
  var copy = []
  for (var i = 0; i < events.length; ++i) {
    var event = events[i]
    if (event.ranges) {
      copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event)
      continue
    }
    var changes = event.changes, newChanges = []
    copy.push({changes: newChanges})
    for (var j = 0; j < changes.length; ++j) {
      var change = changes[j], m = (void 0)
      newChanges.push({from: change.from, to: change.to, text: change.text})
      if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
        if (indexOf(newGroup, Number(m[1])) > -1) {
          lst(newChanges)[prop] = change[prop]
          delete change[prop]
        }
      } } }
    }
  }
  return copy
}

// The 'scroll' parameter given to many of these indicated whether
// the new cursor position should be scrolled into view after
// modifying the selection.

// If shift is held or the extend flag is set, extends a range to
// include a given position (and optionally a second position).
// Otherwise, simply returns the range between the given positions.
// Used for cursor motion and such.
function extendRange(doc, range, head, other) {
  if (doc.cm && doc.cm.display.shift || doc.extend) {
    var anchor = range.anchor
    if (other) {
      var posBefore = cmp(head, anchor) < 0
      if (posBefore != (cmp(other, anchor) < 0)) {
        anchor = head
        head = other
      } else if (posBefore != (cmp(head, other) < 0)) {
        head = other
      }
    }
    return new Range(anchor, head)
  } else {
    return new Range(other || head, head)
  }
}

// Extend the primary selection range, discard the rest.
function extendSelection(doc, head, other, options) {
  setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options)
}

// Extend all selections (pos is an array of selections with length
// equal the number of selections)
function extendSelections(doc, heads, options) {
  var out = []
  for (var i = 0; i < doc.sel.ranges.length; i++)
    { out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null) }
  var newSel = normalizeSelection(out, doc.sel.primIndex)
  setSelection(doc, newSel, options)
}

// Updates a single range in the selection.
function replaceOneSelection(doc, i, range, options) {
  var ranges = doc.sel.ranges.slice(0)
  ranges[i] = range
  setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options)
}

// Reset the selection to a single range.
function setSimpleSelection(doc, anchor, head, options) {
  setSelection(doc, simpleSelection(anchor, head), options)
}

// Give beforeSelectionChange handlers a change to influence a
// selection update.
function filterSelectionChange(doc, sel, options) {
  var obj = {
    ranges: sel.ranges,
    update: function(ranges) {
      var this$1 = this;

      this.ranges = []
      for (var i = 0; i < ranges.length; i++)
        { this$1.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
                                   clipPos(doc, ranges[i].head)) }
    },
    origin: options && options.origin
  }
  signal(doc, "beforeSelectionChange", doc, obj)
  if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj) }
  if (obj.ranges != sel.ranges) { return normalizeSelection(obj.ranges, obj.ranges.length - 1) }
  else { return sel }
}

function setSelectionReplaceHistory(doc, sel, options) {
  var done = doc.history.done, last = lst(done)
  if (last && last.ranges) {
    done[done.length - 1] = sel
    setSelectionNoUndo(doc, sel, options)
  } else {
    setSelection(doc, sel, options)
  }
}

// Set a new selection.
function setSelection(doc, sel, options) {
  setSelectionNoUndo(doc, sel, options)
  addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options)
}

function setSelectionNoUndo(doc, sel, options) {
  if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
    { sel = filterSelectionChange(doc, sel, options) }

  var bias = options && options.bias ||
    (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1)
  setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true))

  if (!(options && options.scroll === false) && doc.cm)
    { ensureCursorVisible(doc.cm) }
}

function setSelectionInner(doc, sel) {
  if (sel.equals(doc.sel)) { return }

  doc.sel = sel

  if (doc.cm) {
    doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true
    signalCursorActivity(doc.cm)
  }
  signalLater(doc, "cursorActivity", doc)
}

// Verify that the selection does not partially select any atomic
// marked ranges.
function reCheckSelection(doc) {
  setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll)
}

// Return a selection that does not partially select any atomic
// ranges.
function skipAtomicInSelection(doc, sel, bias, mayClear) {
  var out
  for (var i = 0; i < sel.ranges.length; i++) {
    var range = sel.ranges[i]
    var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i]
    var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear)
    var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear)
    if (out || newAnchor != range.anchor || newHead != range.head) {
      if (!out) { out = sel.ranges.slice(0, i) }
      out[i] = new Range(newAnchor, newHead)
    }
  }
  return out ? normalizeSelection(out, sel.primIndex) : sel
}

function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
  var line = getLine(doc, pos.line)
  if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
    var sp = line.markedSpans[i], m = sp.marker
    if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
        (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
      if (mayClear) {
        signal(m, "beforeCursorEnter")
        if (m.explicitlyCleared) {
          if (!line.markedSpans) { break }
          else {--i; continue}
        }
      }
      if (!m.atomic) { continue }

      if (oldPos) {
        var near = m.find(dir < 0 ? 1 : -1), diff = (void 0)
        if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
          { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null) }
        if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
          { return skipAtomicInner(doc, near, pos, dir, mayClear) }
      }

      var far = m.find(dir < 0 ? -1 : 1)
      if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
        { far = movePos(doc, far, dir, far.line == pos.line ? line : null) }
      return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
    }
  } }
  return pos
}

// Ensure a given position is not inside an atomic range.
function skipAtomic(doc, pos, oldPos, bias, mayClear) {
  var dir = bias || 1
  var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
      (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
      skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
      (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true))
  if (!found) {
    doc.cantEdit = true
    return Pos(doc.first, 0)
  }
  return found
}

function movePos(doc, pos, dir, line) {
  if (dir < 0 && pos.ch == 0) {
    if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
    else { return null }
  } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
    if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
    else { return null }
  } else {
    return new Pos(pos.line, pos.ch + dir)
  }
}

function selectAll(cm) {
  cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll)
}

// UPDATING

// Allow "beforeChange" event handlers to influence a change
function filterChange(doc, change, update) {
  var obj = {
    canceled: false,
    from: change.from,
    to: change.to,
    text: change.text,
    origin: change.origin,
    cancel: function () { return obj.canceled = true; }
  }
  if (update) { obj.update = function (from, to, text, origin) {
    if (from) { obj.from = clipPos(doc, from) }
    if (to) { obj.to = clipPos(doc, to) }
    if (text) { obj.text = text }
    if (origin !== undefined) { obj.origin = origin }
  } }
  signal(doc, "beforeChange", doc, obj)
  if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj) }

  if (obj.canceled) { return null }
  return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
}

// Apply a change to a document, and add it to the document's
// history, and propagating it to all linked documents.
function makeChange(doc, change, ignoreReadOnly) {
  if (doc.cm) {
    if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
    if (doc.cm.state.suppressEdits) { return }
  }

  if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
    change = filterChange(doc, change, true)
    if (!change) { return }
  }

  // Possibly split or suppress the update based on the presence
  // of read-only spans in its range.
  var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to)
  if (split) {
    for (var i = split.length - 1; i >= 0; --i)
      { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text}) }
  } else {
    makeChangeInner(doc, change)
  }
}

function makeChangeInner(doc, change) {
  if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
  var selAfter = computeSelAfterChange(doc, change)
  addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN)

  makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change))
  var rebased = []

  linkedDocs(doc, function (doc, sharedHist) {
    if (!sharedHist && indexOf(rebased, doc.history) == -1) {
      rebaseHist(doc.history, change)
      rebased.push(doc.history)
    }
    makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change))
  })
}

// Revert a change stored in a document's history.
function makeChangeFromHistory(doc, type, allowSelectionOnly) {
  if (doc.cm && doc.cm.state.suppressEdits && !allowSelectionOnly) { return }

  var hist = doc.history, event, selAfter = doc.sel
  var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done

  // Verify that there is a useable event (so that ctrl-z won't
  // needlessly clear selection events)
  var i = 0
  for (; i < source.length; i++) {
    event = source[i]
    if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
      { break }
  }
  if (i == source.length) { return }
  hist.lastOrigin = hist.lastSelOrigin = null

  for (;;) {
    event = source.pop()
    if (event.ranges) {
      pushSelectionToHistory(event, dest)
      if (allowSelectionOnly && !event.equals(doc.sel)) {
        setSelection(doc, event, {clearRedo: false})
        return
      }
      selAfter = event
    }
    else { break }
  }

  // Build up a reverse change object to add to the opposite history
  // stack (redo when undoing, and vice versa).
  var antiChanges = []
  pushSelectionToHistory(selAfter, dest)
  dest.push({changes: antiChanges, generation: hist.generation})
  hist.generation = event.generation || ++hist.maxGeneration

  var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")

  var loop = function ( i ) {
    var change = event.changes[i]
    change.origin = type
    if (filter && !filterChange(doc, change, false)) {
      source.length = 0
      return {}
    }

    antiChanges.push(historyChangeFromChange(doc, change))

    var after = i ? computeSelAfterChange(doc, change) : lst(source)
    makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change))
    if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}) }
    var rebased = []

    // Propagate to the linked documents
    linkedDocs(doc, function (doc, sharedHist) {
      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change)
        rebased.push(doc.history)
      }
      makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change))
    })
  };

  for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
    var returned = loop( i$1 );

    if ( returned ) return returned.v;
  }
}

// Sub-views need their line numbers shifted when text is added
// above or below them in the parent document.
function shiftDoc(doc, distance) {
  if (distance == 0) { return }
  doc.first += distance
  doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
    Pos(range.anchor.line + distance, range.anchor.ch),
    Pos(range.head.line + distance, range.head.ch)
  ); }), doc.sel.primIndex)
  if (doc.cm) {
    regChange(doc.cm, doc.first, doc.first - distance, distance)
    for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
      { regLineChange(doc.cm, l, "gutter") }
  }
}

// More lower-level change function, handling only a single document
// (not linked ones).
function makeChangeSingleDoc(doc, change, selAfter, spans) {
  if (doc.cm && !doc.cm.curOp)
    { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

  if (change.to.line < doc.first) {
    shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line))
    return
  }
  if (change.from.line > doc.lastLine()) { return }

  // Clip the change to the size of this doc
  if (change.from.line < doc.first) {
    var shift = change.text.length - 1 - (doc.first - change.from.line)
    shiftDoc(doc, shift)
    change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
              text: [lst(change.text)], origin: change.origin}
  }
  var last = doc.lastLine()
  if (change.to.line > last) {
    change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
              text: [change.text[0]], origin: change.origin}
  }

  change.removed = getBetween(doc, change.from, change.to)

  if (!selAfter) { selAfter = computeSelAfterChange(doc, change) }
  if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans) }
  else { updateDoc(doc, change, spans) }
  setSelectionNoUndo(doc, selAfter, sel_dontScroll)
}

// Handle the interaction of a change to a document with the editor
// that this document is part of.
function makeChangeSingleDocInEditor(cm, change, spans) {
  var doc = cm.doc, display = cm.display, from = change.from, to = change.to

  var recomputeMaxLength = false, checkWidthStart = from.line
  if (!cm.options.lineWrapping) {
    checkWidthStart = lineNo(visualLine(getLine(doc, from.line)))
    doc.iter(checkWidthStart, to.line + 1, function (line) {
      if (line == display.maxLine) {
        recomputeMaxLength = true
        return true
      }
    })
  }

  if (doc.sel.contains(change.from, change.to) > -1)
    { signalCursorActivity(cm) }

  updateDoc(doc, change, spans, estimateHeight(cm))

  if (!cm.options.lineWrapping) {
    doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
      var len = lineLength(line)
      if (len > display.maxLineLength) {
        display.maxLine = line
        display.maxLineLength = len
        display.maxLineChanged = true
        recomputeMaxLength = false
      }
    })
    if (recomputeMaxLength) { cm.curOp.updateMaxLine = true }
  }

  // Adjust frontier, schedule worker
  doc.frontier = Math.min(doc.frontier, from.line)
  startWorker(cm, 400)

  var lendiff = change.text.length - (to.line - from.line) - 1
  // Remember that these lines changed, for updating the display
  if (change.full)
    { regChange(cm) }
  else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
    { regLineChange(cm, from.line, "text") }
  else
    { regChange(cm, from.line, to.line + 1, lendiff) }

  var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change")
  if (changeHandler || changesHandler) {
    var obj = {
      from: from, to: to,
      text: change.text,
      removed: change.removed,
      origin: change.origin
    }
    if (changeHandler) { signalLater(cm, "change", cm, obj) }
    if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj) }
  }
  cm.display.selForContextMenu = null
}

function replaceRange(doc, code, from, to, origin) {
  if (!to) { to = from }
  if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp }
  if (typeof code == "string") { code = doc.splitLines(code) }
  makeChange(doc, {from: from, to: to, text: code, origin: origin})
}

// Rebasing/resetting history to deal with externally-sourced changes

function rebaseHistSelSingle(pos, from, to, diff) {
  if (to < pos.line) {
    pos.line += diff
  } else if (from < pos.line) {
    pos.line = from
    pos.ch = 0
  }
}

// Tries to rebase an array of history events given a change in the
// document. If the change touches the same lines as the event, the
// event, and everything 'behind' it, is discarded. If the change is
// before the event, the event's positions are updated. Uses a
// copy-on-write scheme for the positions, to avoid having to
// reallocate them all on every rebase, but also avoid problems with
// shared position objects being unsafely updated.
function rebaseHistArray(array, from, to, diff) {
  for (var i = 0; i < array.length; ++i) {
    var sub = array[i], ok = true
    if (sub.ranges) {
      if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true }
      for (var j = 0; j < sub.ranges.length; j++) {
        rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff)
        rebaseHistSelSingle(sub.ranges[j].head, from, to, diff)
      }
      continue
    }
    for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
      var cur = sub.changes[j$1]
      if (to < cur.from.line) {
        cur.from = Pos(cur.from.line + diff, cur.from.ch)
        cur.to = Pos(cur.to.line + diff, cur.to.ch)
      } else if (from <= cur.to.line) {
        ok = false
        break
      }
    }
    if (!ok) {
      array.splice(0, i + 1)
      i = 0
    }
  }
}

function rebaseHist(hist, change) {
  var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1
  rebaseHistArray(hist.done, from, to, diff)
  rebaseHistArray(hist.undone, from, to, diff)
}

// Utility for applying a change to a line by handle or number,
// returning the number and optionally registering the line as
// changed.
function changeLine(doc, handle, changeType, op) {
  var no = handle, line = handle
  if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)) }
  else { no = lineNo(handle) }
  if (no == null) { return null }
  if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType) }
  return line
}

// The document is represented as a BTree consisting of leaves, with
// chunk of lines in them, and branches, with up to ten leaves or
// other branch nodes below them. The top node is always a branch
// node, and is the document object itself (meaning it has
// additional methods and properties).
//
// All nodes have parent links. The tree is used both to go from
// line numbers to line objects, and to go from objects to numbers.
// It also indexes by height, and is used to convert between height
// and line object, and to find the total height of the document.
//
// See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

var LeafChunk = function(lines) {
  var this$1 = this;

  this.lines = lines
  this.parent = null
  var height = 0
  for (var i = 0; i < lines.length; ++i) {
    lines[i].parent = this$1
    height += lines[i].height
  }
  this.height = height
};

LeafChunk.prototype.chunkSize = function () { return this.lines.length };

// Remove the n lines at offset 'at'.
LeafChunk.prototype.removeInner = function (at, n) {
    var this$1 = this;

  for (var i = at, e = at + n; i < e; ++i) {
    var line = this$1.lines[i]
    this$1.height -= line.height
    cleanUpLine(line)
    signalLater(line, "delete")
  }
  this.lines.splice(at, n)
};

// Helper used to collapse a small branch into a single leaf.
LeafChunk.prototype.collapse = function (lines) {
  lines.push.apply(lines, this.lines)
};

// Insert the given array of lines at offset 'at', count them as
// having the given height.
LeafChunk.prototype.insertInner = function (at, lines, height) {
    var this$1 = this;

  this.height += height
  this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at))
  for (var i = 0; i < lines.length; ++i) { lines[i].parent = this$1 }
};

// Used to iterate over a part of the tree.
LeafChunk.prototype.iterN = function (at, n, op) {
    var this$1 = this;

  for (var e = at + n; at < e; ++at)
    { if (op(this$1.lines[at])) { return true } }
};

var BranchChunk = function(children) {
  var this$1 = this;

  this.children = children
  var size = 0, height = 0
  for (var i = 0; i < children.length; ++i) {
    var ch = children[i]
    size += ch.chunkSize(); height += ch.height
    ch.parent = this$1
  }
  this.size = size
  this.height = height
  this.parent = null
};

BranchChunk.prototype.chunkSize = function () { return this.size };

BranchChunk.prototype.removeInner = function (at, n) {
    var this$1 = this;

  this.size -= n
  for (var i = 0; i < this.children.length; ++i) {
    var child = this$1.children[i], sz = child.chunkSize()
    if (at < sz) {
      var rm = Math.min(n, sz - at), oldHeight = child.height
      child.removeInner(at, rm)
      this$1.height -= oldHeight - child.height
      if (sz == rm) { this$1.children.splice(i--, 1); child.parent = null }
      if ((n -= rm) == 0) { break }
      at = 0
    } else { at -= sz }
  }
  // If the result is smaller than 25 lines, ensure that it is a
  // single leaf node.
  if (this.size - n < 25 &&
      (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
    var lines = []
    this.collapse(lines)
    this.children = [new LeafChunk(lines)]
    this.children[0].parent = this
  }
};

BranchChunk.prototype.collapse = function (lines) {
    var this$1 = this;

  for (var i = 0; i < this.children.length; ++i) { this$1.children[i].collapse(lines) }
};

BranchChunk.prototype.insertInner = function (at, lines, height) {
    var this$1 = this;

  this.size += lines.length
  this.height += height
  for (var i = 0; i < this.children.length; ++i) {
    var child = this$1.children[i], sz = child.chunkSize()
    if (at <= sz) {
      child.insertInner(at, lines, height)
      if (child.lines && child.lines.length > 50) {
        // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
        // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
        var remaining = child.lines.length % 25 + 25
        for (var pos = remaining; pos < child.lines.length;) {
          var leaf = new LeafChunk(child.lines.slice(pos, pos += 25))
          child.height -= leaf.height
          this$1.children.splice(++i, 0, leaf)
          leaf.parent = this$1
        }
        child.lines = child.lines.slice(0, remaining)
        this$1.maybeSpill()
      }
      break
    }
    at -= sz
  }
};

// When a node has grown, check whether it should be split.
BranchChunk.prototype.maybeSpill = function () {
  if (this.children.length <= 10) { return }
  var me = this
  do {
    var spilled = me.children.splice(me.children.length - 5, 5)
    var sibling = new BranchChunk(spilled)
    if (!me.parent) { // Become the parent node
      var copy = new BranchChunk(me.children)
      copy.parent = me
      me.children = [copy, sibling]
      me = copy
   } else {
      me.size -= sibling.size
      me.height -= sibling.height
      var myIndex = indexOf(me.parent.children, me)
      me.parent.children.splice(myIndex + 1, 0, sibling)
    }
    sibling.parent = me.parent
  } while (me.children.length > 10)
  me.parent.maybeSpill()
};

BranchChunk.prototype.iterN = function (at, n, op) {
    var this$1 = this;

  for (var i = 0; i < this.children.length; ++i) {
    var child = this$1.children[i], sz = child.chunkSize()
    if (at < sz) {
      var used = Math.min(n, sz - at)
      if (child.iterN(at, used, op)) { return true }
      if ((n -= used) == 0) { break }
      at = 0
    } else { at -= sz }
  }
};

// Line widgets are block elements displayed above or below a line.

var LineWidget = function(doc, node, options) {
  var this$1 = this;

  if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
    { this$1[opt] = options[opt] } } }
  this.doc = doc
  this.node = node
};

LineWidget.prototype.clear = function () {
    var this$1 = this;

  var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line)
  if (no == null || !ws) { return }
  for (var i = 0; i < ws.length; ++i) { if (ws[i] == this$1) { ws.splice(i--, 1) } }
  if (!ws.length) { line.widgets = null }
  var height = widgetHeight(this)
  updateLineHeight(line, Math.max(0, line.height - height))
  if (cm) {
    runInOp(cm, function () {
      adjustScrollWhenAboveVisible(cm, line, -height)
      regLineChange(cm, no, "widget")
    })
    signalLater(cm, "lineWidgetCleared", cm, this, no)
  }
};

LineWidget.prototype.changed = function () {
    var this$1 = this;

  var oldH = this.height, cm = this.doc.cm, line = this.line
  this.height = null
  var diff = widgetHeight(this) - oldH
  if (!diff) { return }
  updateLineHeight(line, line.height + diff)
  if (cm) {
    runInOp(cm, function () {
      cm.curOp.forceUpdate = true
      adjustScrollWhenAboveVisible(cm, line, diff)
      signalLater(cm, "lineWidgetChanged", cm, this$1, lineNo(line))
    })
  }
};
eventMixin(LineWidget)

function adjustScrollWhenAboveVisible(cm, line, diff) {
  if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
    { addToScrollPos(cm, null, diff) }
}

function addLineWidget(doc, handle, node, options) {
  var widget = new LineWidget(doc, node, options)
  var cm = doc.cm
  if (cm && widget.noHScroll) { cm.display.alignWidgets = true }
  changeLine(doc, handle, "widget", function (line) {
    var widgets = line.widgets || (line.widgets = [])
    if (widget.insertAt == null) { widgets.push(widget) }
    else { widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget) }
    widget.line = line
    if (cm && !lineIsHidden(doc, line)) {
      var aboveVisible = heightAtLine(line) < doc.scrollTop
      updateLineHeight(line, line.height + widgetHeight(widget))
      if (aboveVisible) { addToScrollPos(cm, null, widget.height) }
      cm.curOp.forceUpdate = true
    }
    return true
  })
  signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle))
  return widget
}

// TEXTMARKERS

// Created with markText and setBookmark methods. A TextMarker is a
// handle that can be used to clear or find a marked position in the
// document. Line objects hold arrays (markedSpans) containing
// {from, to, marker} object pointing to such marker objects, and
// indicating that such a marker is present on that line. Multiple
// lines may point to the same marker when it spans across lines.
// The spans will have null for their from/to properties when the
// marker continues beyond the start/end of the line. Markers have
// links back to the lines they currently touch.

// Collapsed markers have unique ids, in order to be able to order
// them, which is needed for uniquely determining an outer marker
// when they overlap (they may nest, but not partially overlap).
var nextMarkerId = 0

var TextMarker = function(doc, type) {
  this.lines = []
  this.type = type
  this.doc = doc
  this.id = ++nextMarkerId
};

// Clear the marker.
TextMarker.prototype.clear = function () {
    var this$1 = this;

  if (this.explicitlyCleared) { return }
  var cm = this.doc.cm, withOp = cm && !cm.curOp
  if (withOp) { startOperation(cm) }
  if (hasHandler(this, "clear")) {
    var found = this.find()
    if (found) { signalLater(this, "clear", found.from, found.to) }
  }
  var min = null, max = null
  for (var i = 0; i < this.lines.length; ++i) {
    var line = this$1.lines[i]
    var span = getMarkedSpanFor(line.markedSpans, this$1)
    if (cm && !this$1.collapsed) { regLineChange(cm, lineNo(line), "text") }
    else if (cm) {
      if (span.to != null) { max = lineNo(line) }
      if (span.from != null) { min = lineNo(line) }
    }
    line.markedSpans = removeMarkedSpan(line.markedSpans, span)
    if (span.from == null && this$1.collapsed && !lineIsHidden(this$1.doc, line) && cm)
      { updateLineHeight(line, textHeight(cm.display)) }
  }
  if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
    var visual = visualLine(this$1.lines[i$1]), len = lineLength(visual)
    if (len > cm.display.maxLineLength) {
      cm.display.maxLine = visual
      cm.display.maxLineLength = len
      cm.display.maxLineChanged = true
    }
  } }

  if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1) }
  this.lines.length = 0
  this.explicitlyCleared = true
  if (this.atomic && this.doc.cantEdit) {
    this.doc.cantEdit = false
    if (cm) { reCheckSelection(cm.doc) }
  }
  if (cm) { signalLater(cm, "markerCleared", cm, this, min, max) }
  if (withOp) { endOperation(cm) }
  if (this.parent) { this.parent.clear() }
};

// Find the position of the marker in the document. Returns a {from,
// to} object by default. Side can be passed to get a specific side
// -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
// Pos objects returned contain a line object, rather than a line
// number (used to prevent looking up the same line twice).
TextMarker.prototype.find = function (side, lineObj) {
    var this$1 = this;

  if (side == null && this.type == "bookmark") { side = 1 }
  var from, to
  for (var i = 0; i < this.lines.length; ++i) {
    var line = this$1.lines[i]
    var span = getMarkedSpanFor(line.markedSpans, this$1)
    if (span.from != null) {
      from = Pos(lineObj ? line : lineNo(line), span.from)
      if (side == -1) { return from }
    }
    if (span.to != null) {
      to = Pos(lineObj ? line : lineNo(line), span.to)
      if (side == 1) { return to }
    }
  }
  return from && {from: from, to: to}
};

// Signals that the marker's widget changed, and surrounding layout
// should be recomputed.
TextMarker.prototype.changed = function () {
    var this$1 = this;

  var pos = this.find(-1, true), widget = this, cm = this.doc.cm
  if (!pos || !cm) { return }
  runInOp(cm, function () {
    var line = pos.line, lineN = lineNo(pos.line)
    var view = findViewForLine(cm, lineN)
    if (view) {
      clearLineMeasurementCacheFor(view)
      cm.curOp.selectionChanged = cm.curOp.forceUpdate = true
    }
    cm.curOp.updateMaxLine = true
    if (!lineIsHidden(widget.doc, line) && widget.height != null) {
      var oldHeight = widget.height
      widget.height = null
      var dHeight = widgetHeight(widget) - oldHeight
      if (dHeight)
        { updateLineHeight(line, line.height + dHeight) }
    }
    signalLater(cm, "markerChanged", cm, this$1)
  })
};

TextMarker.prototype.attachLine = function (line) {
  if (!this.lines.length && this.doc.cm) {
    var op = this.doc.cm.curOp
    if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
      { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this) }
  }
  this.lines.push(line)
};

TextMarker.prototype.detachLine = function (line) {
  this.lines.splice(indexOf(this.lines, line), 1)
  if (!this.lines.length && this.doc.cm) {
    var op = this.doc.cm.curOp
    ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this)
  }
};
eventMixin(TextMarker)

// Create a marker, wire it up to the right lines, and
function markText(doc, from, to, options, type) {
  // Shared markers (across linked documents) are handled separately
  // (markTextShared will call out to this again, once per
  // document).
  if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
  // Ensure we are in an operation.
  if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

  var marker = new TextMarker(doc, type), diff = cmp(from, to)
  if (options) { copyObj(options, marker, false) }
  // Don't connect empty markers unless clearWhenEmpty is false
  if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
    { return marker }
  if (marker.replacedWith) {
    // Showing up as a widget implies collapsed (widget replaces text)
    marker.collapsed = true
    marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget")
    marker.widgetNode.setAttribute("role", "presentation") // hide from accessibility tree
    if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true") }
    if (options.insertLeft) { marker.widgetNode.insertLeft = true }
  }
  if (marker.collapsed) {
    if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
        from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
      { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
    seeCollapsedSpans()
  }

  if (marker.addToHistory)
    { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN) }

  var curLine = from.line, cm = doc.cm, updateMaxLine
  doc.iter(curLine, to.line + 1, function (line) {
    if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
      { updateMaxLine = true }
    if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0) }
    addMarkedSpan(line, new MarkedSpan(marker,
                                       curLine == from.line ? from.ch : null,
                                       curLine == to.line ? to.ch : null))
    ++curLine
  })
  // lineIsHidden depends on the presence of the spans, so needs a second pass
  if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
    if (lineIsHidden(doc, line)) { updateLineHeight(line, 0) }
  }) }

  if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }) }

  if (marker.readOnly) {
    seeReadOnlySpans()
    if (doc.history.done.length || doc.history.undone.length)
      { doc.clearHistory() }
  }
  if (marker.collapsed) {
    marker.id = ++nextMarkerId
    marker.atomic = true
  }
  if (cm) {
    // Sync editor state
    if (updateMaxLine) { cm.curOp.updateMaxLine = true }
    if (marker.collapsed)
      { regChange(cm, from.line, to.line + 1) }
    else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
      { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text") } }
    if (marker.atomic) { reCheckSelection(cm.doc) }
    signalLater(cm, "markerAdded", cm, marker)
  }
  return marker
}

// SHARED TEXTMARKERS

// A shared marker spans multiple linked documents. It is
// implemented as a meta-marker-object controlling multiple normal
// markers.
var SharedTextMarker = function(markers, primary) {
  var this$1 = this;

  this.markers = markers
  this.primary = primary
  for (var i = 0; i < markers.length; ++i)
    { markers[i].parent = this$1 }
};

SharedTextMarker.prototype.clear = function () {
    var this$1 = this;

  if (this.explicitlyCleared) { return }
  this.explicitlyCleared = true
  for (var i = 0; i < this.markers.length; ++i)
    { this$1.markers[i].clear() }
  signalLater(this, "clear")
};

SharedTextMarker.prototype.find = function (side, lineObj) {
  return this.primary.find(side, lineObj)
};
eventMixin(SharedTextMarker)

function markTextShared(doc, from, to, options, type) {
  options = copyObj(options)
  options.shared = false
  var markers = [markText(doc, from, to, options, type)], primary = markers[0]
  var widget = options.widgetNode
  linkedDocs(doc, function (doc) {
    if (widget) { options.widgetNode = widget.cloneNode(true) }
    markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type))
    for (var i = 0; i < doc.linked.length; ++i)
      { if (doc.linked[i].isParent) { return } }
    primary = lst(markers)
  })
  return new SharedTextMarker(markers, primary)
}

function findSharedMarkers(doc) {
  return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
}

function copySharedMarkers(doc, markers) {
  for (var i = 0; i < markers.length; i++) {
    var marker = markers[i], pos = marker.find()
    var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to)
    if (cmp(mFrom, mTo)) {
      var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type)
      marker.markers.push(subMark)
      subMark.parent = marker
    }
  }
}

function detachSharedMarkers(markers) {
  var loop = function ( i ) {
    var marker = markers[i], linked = [marker.primary.doc]
    linkedDocs(marker.primary.doc, function (d) { return linked.push(d); })
    for (var j = 0; j < marker.markers.length; j++) {
      var subMarker = marker.markers[j]
      if (indexOf(linked, subMarker.doc) == -1) {
        subMarker.parent = null
        marker.markers.splice(j--, 1)
      }
    }
  };

  for (var i = 0; i < markers.length; i++) loop( i );
}

var nextDocId = 0
var Doc = function(text, mode, firstLine, lineSep) {
  if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep) }
  if (firstLine == null) { firstLine = 0 }

  BranchChunk.call(this, [new LeafChunk([new Line("", null)])])
  this.first = firstLine
  this.scrollTop = this.scrollLeft = 0
  this.cantEdit = false
  this.cleanGeneration = 1
  this.frontier = firstLine
  var start = Pos(firstLine, 0)
  this.sel = simpleSelection(start)
  this.history = new History(null)
  this.id = ++nextDocId
  this.modeOption = mode
  this.lineSep = lineSep
  this.extend = false

  if (typeof text == "string") { text = this.splitLines(text) }
  updateDoc(this, {from: start, to: start, text: text})
  setSelection(this, simpleSelection(start), sel_dontScroll)
}

Doc.prototype = createObj(BranchChunk.prototype, {
  constructor: Doc,
  // Iterate over the document. Supports two forms -- with only one
  // argument, it calls that for each line in the document. With
  // three, it iterates over the range given by the first two (with
  // the second being non-inclusive).
  iter: function(from, to, op) {
    if (op) { this.iterN(from - this.first, to - from, op) }
    else { this.iterN(this.first, this.first + this.size, from) }
  },

  // Non-public interface for adding and removing lines.
  insert: function(at, lines) {
    var height = 0
    for (var i = 0; i < lines.length; ++i) { height += lines[i].height }
    this.insertInner(at - this.first, lines, height)
  },
  remove: function(at, n) { this.removeInner(at - this.first, n) },

  // From here, the methods are part of the public interface. Most
  // are also available from CodeMirror (editor) instances.

  getValue: function(lineSep) {
    var lines = getLines(this, this.first, this.first + this.size)
    if (lineSep === false) { return lines }
    return lines.join(lineSep || this.lineSeparator())
  },
  setValue: docMethodOp(function(code) {
    var top = Pos(this.first, 0), last = this.first + this.size - 1
    makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
                      text: this.splitLines(code), origin: "setValue", full: true}, true)
    setSelection(this, simpleSelection(top))
  }),
  replaceRange: function(code, from, to, origin) {
    from = clipPos(this, from)
    to = to ? clipPos(this, to) : from
    replaceRange(this, code, from, to, origin)
  },
  getRange: function(from, to, lineSep) {
    var lines = getBetween(this, clipPos(this, from), clipPos(this, to))
    if (lineSep === false) { return lines }
    return lines.join(lineSep || this.lineSeparator())
  },

  getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

  getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
  getLineNumber: function(line) {return lineNo(line)},

  getLineHandleVisualStart: function(line) {
    if (typeof line == "number") { line = getLine(this, line) }
    return visualLine(line)
  },

  lineCount: function() {return this.size},
  firstLine: function() {return this.first},
  lastLine: function() {return this.first + this.size - 1},

  clipPos: function(pos) {return clipPos(this, pos)},

  getCursor: function(start) {
    var range = this.sel.primary(), pos
    if (start == null || start == "head") { pos = range.head }
    else if (start == "anchor") { pos = range.anchor }
    else if (start == "end" || start == "to" || start === false) { pos = range.to() }
    else { pos = range.from() }
    return pos
  },
  listSelections: function() { return this.sel.ranges },
  somethingSelected: function() {return this.sel.somethingSelected()},

  setCursor: docMethodOp(function(line, ch, options) {
    setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options)
  }),
  setSelection: docMethodOp(function(anchor, head, options) {
    setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options)
  }),
  extendSelection: docMethodOp(function(head, other, options) {
    extendSelection(this, clipPos(this, head), other && clipPos(this, other), options)
  }),
  extendSelections: docMethodOp(function(heads, options) {
    extendSelections(this, clipPosArray(this, heads), options)
  }),
  extendSelectionsBy: docMethodOp(function(f, options) {
    var heads = map(this.sel.ranges, f)
    extendSelections(this, clipPosArray(this, heads), options)
  }),
  setSelections: docMethodOp(function(ranges, primary, options) {
    var this$1 = this;

    if (!ranges.length) { return }
    var out = []
    for (var i = 0; i < ranges.length; i++)
      { out[i] = new Range(clipPos(this$1, ranges[i].anchor),
                         clipPos(this$1, ranges[i].head)) }
    if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex) }
    setSelection(this, normalizeSelection(out, primary), options)
  }),
  addSelection: docMethodOp(function(anchor, head, options) {
    var ranges = this.sel.ranges.slice(0)
    ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)))
    setSelection(this, normalizeSelection(ranges, ranges.length - 1), options)
  }),

  getSelection: function(lineSep) {
    var this$1 = this;

    var ranges = this.sel.ranges, lines
    for (var i = 0; i < ranges.length; i++) {
      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to())
      lines = lines ? lines.concat(sel) : sel
    }
    if (lineSep === false) { return lines }
    else { return lines.join(lineSep || this.lineSeparator()) }
  },
  getSelections: function(lineSep) {
    var this$1 = this;

    var parts = [], ranges = this.sel.ranges
    for (var i = 0; i < ranges.length; i++) {
      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to())
      if (lineSep !== false) { sel = sel.join(lineSep || this$1.lineSeparator()) }
      parts[i] = sel
    }
    return parts
  },
  replaceSelection: function(code, collapse, origin) {
    var dup = []
    for (var i = 0; i < this.sel.ranges.length; i++)
      { dup[i] = code }
    this.replaceSelections(dup, collapse, origin || "+input")
  },
  replaceSelections: docMethodOp(function(code, collapse, origin) {
    var this$1 = this;

    var changes = [], sel = this.sel
    for (var i = 0; i < sel.ranges.length; i++) {
      var range = sel.ranges[i]
      changes[i] = {from: range.from(), to: range.to(), text: this$1.splitLines(code[i]), origin: origin}
    }
    var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse)
    for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
      { makeChange(this$1, changes[i$1]) }
    if (newSel) { setSelectionReplaceHistory(this, newSel) }
    else if (this.cm) { ensureCursorVisible(this.cm) }
  }),
  undo: docMethodOp(function() {makeChangeFromHistory(this, "undo")}),
  redo: docMethodOp(function() {makeChangeFromHistory(this, "redo")}),
  undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true)}),
  redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true)}),

  setExtending: function(val) {this.extend = val},
  getExtending: function() {return this.extend},

  historySize: function() {
    var hist = this.history, done = 0, undone = 0
    for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done } }
    for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone } }
    return {undo: done, redo: undone}
  },
  clearHistory: function() {this.history = new History(this.history.maxGeneration)},

  markClean: function() {
    this.cleanGeneration = this.changeGeneration(true)
  },
  changeGeneration: function(forceSplit) {
    if (forceSplit)
      { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null }
    return this.history.generation
  },
  isClean: function (gen) {
    return this.history.generation == (gen || this.cleanGeneration)
  },

  getHistory: function() {
    return {done: copyHistoryArray(this.history.done),
            undone: copyHistoryArray(this.history.undone)}
  },
  setHistory: function(histData) {
    var hist = this.history = new History(this.history.maxGeneration)
    hist.done = copyHistoryArray(histData.done.slice(0), null, true)
    hist.undone = copyHistoryArray(histData.undone.slice(0), null, true)
  },

  setGutterMarker: docMethodOp(function(line, gutterID, value) {
    return changeLine(this, line, "gutter", function (line) {
      var markers = line.gutterMarkers || (line.gutterMarkers = {})
      markers[gutterID] = value
      if (!value && isEmpty(markers)) { line.gutterMarkers = null }
      return true
    })
  }),

  clearGutter: docMethodOp(function(gutterID) {
    var this$1 = this;

    this.iter(function (line) {
      if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
        changeLine(this$1, line, "gutter", function () {
          line.gutterMarkers[gutterID] = null
          if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null }
          return true
        })
      }
    })
  }),

  lineInfo: function(line) {
    var n
    if (typeof line == "number") {
      if (!isLine(this, line)) { return null }
      n = line
      line = getLine(this, line)
      if (!line) { return null }
    } else {
      n = lineNo(line)
      if (n == null) { return null }
    }
    return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
            textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
            widgets: line.widgets}
  },

  addLineClass: docMethodOp(function(handle, where, cls) {
    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
      var prop = where == "text" ? "textClass"
               : where == "background" ? "bgClass"
               : where == "gutter" ? "gutterClass" : "wrapClass"
      if (!line[prop]) { line[prop] = cls }
      else if (classTest(cls).test(line[prop])) { return false }
      else { line[prop] += " " + cls }
      return true
    })
  }),
  removeLineClass: docMethodOp(function(handle, where, cls) {
    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
      var prop = where == "text" ? "textClass"
               : where == "background" ? "bgClass"
               : where == "gutter" ? "gutterClass" : "wrapClass"
      var cur = line[prop]
      if (!cur) { return false }
      else if (cls == null) { line[prop] = null }
      else {
        var found = cur.match(classTest(cls))
        if (!found) { return false }
        var end = found.index + found[0].length
        line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null
      }
      return true
    })
  }),

  addLineWidget: docMethodOp(function(handle, node, options) {
    return addLineWidget(this, handle, node, options)
  }),
  removeLineWidget: function(widget) { widget.clear() },

  markText: function(from, to, options) {
    return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
  },
  setBookmark: function(pos, options) {
    var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                    insertLeft: options && options.insertLeft,
                    clearWhenEmpty: false, shared: options && options.shared,
                    handleMouseEvents: options && options.handleMouseEvents}
    pos = clipPos(this, pos)
    return markText(this, pos, pos, realOpts, "bookmark")
  },
  findMarksAt: function(pos) {
    pos = clipPos(this, pos)
    var markers = [], spans = getLine(this, pos.line).markedSpans
    if (spans) { for (var i = 0; i < spans.length; ++i) {
      var span = spans[i]
      if ((span.from == null || span.from <= pos.ch) &&
          (span.to == null || span.to >= pos.ch))
        { markers.push(span.marker.parent || span.marker) }
    } }
    return markers
  },
  findMarks: function(from, to, filter) {
    from = clipPos(this, from); to = clipPos(this, to)
    var found = [], lineNo = from.line
    this.iter(from.line, to.line + 1, function (line) {
      var spans = line.markedSpans
      if (spans) { for (var i = 0; i < spans.length; i++) {
        var span = spans[i]
        if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
              span.from == null && lineNo != from.line ||
              span.from != null && lineNo == to.line && span.from >= to.ch) &&
            (!filter || filter(span.marker)))
          { found.push(span.marker.parent || span.marker) }
      } }
      ++lineNo
    })
    return found
  },
  getAllMarks: function() {
    var markers = []
    this.iter(function (line) {
      var sps = line.markedSpans
      if (sps) { for (var i = 0; i < sps.length; ++i)
        { if (sps[i].from != null) { markers.push(sps[i].marker) } } }
    })
    return markers
  },

  posFromIndex: function(off) {
    var ch, lineNo = this.first, sepSize = this.lineSeparator().length
    this.iter(function (line) {
      var sz = line.text.length + sepSize
      if (sz > off) { ch = off; return true }
      off -= sz
      ++lineNo
    })
    return clipPos(this, Pos(lineNo, ch))
  },
  indexFromPos: function (coords) {
    coords = clipPos(this, coords)
    var index = coords.ch
    if (coords.line < this.first || coords.ch < 0) { return 0 }
    var sepSize = this.lineSeparator().length
    this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
      index += line.text.length + sepSize
    })
    return index
  },

  copy: function(copyHistory) {
    var doc = new Doc(getLines(this, this.first, this.first + this.size),
                      this.modeOption, this.first, this.lineSep)
    doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft
    doc.sel = this.sel
    doc.extend = false
    if (copyHistory) {
      doc.history.undoDepth = this.history.undoDepth
      doc.setHistory(this.getHistory())
    }
    return doc
  },

  linkedDoc: function(options) {
    if (!options) { options = {} }
    var from = this.first, to = this.first + this.size
    if (options.from != null && options.from > from) { from = options.from }
    if (options.to != null && options.to < to) { to = options.to }
    var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep)
    if (options.sharedHist) { copy.history = this.history
    ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist})
    copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}]
    copySharedMarkers(copy, findSharedMarkers(this))
    return copy
  },
  unlinkDoc: function(other) {
    var this$1 = this;

    if (other instanceof CodeMirror) { other = other.doc }
    if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
      var link = this$1.linked[i]
      if (link.doc != other) { continue }
      this$1.linked.splice(i, 1)
      other.unlinkDoc(this$1)
      detachSharedMarkers(findSharedMarkers(this$1))
      break
    } }
    // If the histories were shared, split them again
    if (other.history == this.history) {
      var splitIds = [other.id]
      linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true)
      other.history = new History(null)
      other.history.done = copyHistoryArray(this.history.done, splitIds)
      other.history.undone = copyHistoryArray(this.history.undone, splitIds)
    }
  },
  iterLinkedDocs: function(f) {linkedDocs(this, f)},

  getMode: function() {return this.mode},
  getEditor: function() {return this.cm},

  splitLines: function(str) {
    if (this.lineSep) { return str.split(this.lineSep) }
    return splitLinesAuto(str)
  },
  lineSeparator: function() { return this.lineSep || "\n" }
})

// Public alias.
Doc.prototype.eachLine = Doc.prototype.iter

// Kludge to work around strange IE behavior where it'll sometimes
// re-fire a series of drag-related events right after the drop (#1551)
var lastDrop = 0

function onDrop(e) {
  var cm = this
  clearDragCursor(cm)
  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
    { return }
  e_preventDefault(e)
  if (ie) { lastDrop = +new Date }
  var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files
  if (!pos || cm.isReadOnly()) { return }
  // Might be a file drop, in which case we simply extract the text
  // and insert it.
  if (files && files.length && window.FileReader && window.File) {
    var n = files.length, text = Array(n), read = 0
    var loadFile = function (file, i) {
      if (cm.options.allowDropFileTypes &&
          indexOf(cm.options.allowDropFileTypes, file.type) == -1)
        { return }

      var reader = new FileReader
      reader.onload = operation(cm, function () {
        var content = reader.result
        if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) { content = "" }
        text[i] = content
        if (++read == n) {
          pos = clipPos(cm.doc, pos)
          var change = {from: pos, to: pos,
                        text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
                        origin: "paste"}
          makeChange(cm.doc, change)
          setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)))
        }
      })
      reader.readAsText(file)
    }
    for (var i = 0; i < n; ++i) { loadFile(files[i], i) }
  } else { // Normal drop
    // Don't do a replace if the drop happened inside of the selected text.
    if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
      cm.state.draggingText(e)
      // Ensure the editor is re-focused
      setTimeout(function () { return cm.display.input.focus(); }, 20)
      return
    }
    try {
      var text$1 = e.dataTransfer.getData("Text")
      if (text$1) {
        var selected
        if (cm.state.draggingText && !cm.state.draggingText.copy)
          { selected = cm.listSelections() }
        setSelectionNoUndo(cm.doc, simpleSelection(pos, pos))
        if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
          { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag") } }
        cm.replaceSelection(text$1, "around", "paste")
        cm.display.input.focus()
      }
    }
    catch(e){}
  }
}

function onDragStart(cm, e) {
  if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

  e.dataTransfer.setData("Text", cm.getSelection())
  e.dataTransfer.effectAllowed = "copyMove"

  // Use dummy image instead of default browsers image.
  // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
  if (e.dataTransfer.setDragImage && !safari) {
    var img = elt("img", null, null, "position: fixed; left: 0; top: 0;")
    img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    if (presto) {
      img.width = img.height = 1
      cm.display.wrapper.appendChild(img)
      // Force a relayout, or Opera won't use our image for some obscure reason
      img._top = img.offsetTop
    }
    e.dataTransfer.setDragImage(img, 0, 0)
    if (presto) { img.parentNode.removeChild(img) }
  }
}

function onDragOver(cm, e) {
  var pos = posFromMouse(cm, e)
  if (!pos) { return }
  var frag = document.createDocumentFragment()
  drawSelectionCursor(cm, pos, frag)
  if (!cm.display.dragCursor) {
    cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors")
    cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv)
  }
  removeChildrenAndAdd(cm.display.dragCursor, frag)
}

function clearDragCursor(cm) {
  if (cm.display.dragCursor) {
    cm.display.lineSpace.removeChild(cm.display.dragCursor)
    cm.display.dragCursor = null
  }
}

// These must be handled carefully, because naively registering a
// handler for each editor will cause the editors to never be
// garbage collected.

function forEachCodeMirror(f) {
  if (!document.body.getElementsByClassName) { return }
  var byClass = document.body.getElementsByClassName("CodeMirror")
  for (var i = 0; i < byClass.length; i++) {
    var cm = byClass[i].CodeMirror
    if (cm) { f(cm) }
  }
}

var globalsRegistered = false
function ensureGlobalHandlers() {
  if (globalsRegistered) { return }
  registerGlobalHandlers()
  globalsRegistered = true
}
function registerGlobalHandlers() {
  // When the window resizes, we need to refresh active editors.
  var resizeTimer
  on(window, "resize", function () {
    if (resizeTimer == null) { resizeTimer = setTimeout(function () {
      resizeTimer = null
      forEachCodeMirror(onResize)
    }, 100) }
  })
  // When the window loses focus, we want to show the editor as blurred
  on(window, "blur", function () { return forEachCodeMirror(onBlur); })
}
// Called when the window resizes
function onResize(cm) {
  var d = cm.display
  if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
    { return }
  // Might be a text scaling operation, clear size caches.
  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null
  d.scrollbarsClipped = false
  cm.setSize()
}

var keyNames = {
  3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
  46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
  106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
  173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
  221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
  63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
}

// Number keys
for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i) }
// Alphabetic keys
for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1) }
// Function keys
for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2 }

var keyMap = {}

keyMap.basic = {
  "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
  "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
  "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
  "Tab": "defaultTab", "Shift-Tab": "indentAuto",
  "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
  "Esc": "singleSelection"
}
// Note that the save and find-related commands aren't defined by
// default. User code or addons can define them. Unknown commands
// are simply ignored.
keyMap.pcDefault = {
  "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
  "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
  "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
  "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
  "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
  "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
  "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
  fallthrough: "basic"
}
// Very basic readline/emacs-style bindings, which are standard on Mac.
keyMap.emacsy = {
  "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
  "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
  "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
  "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
  "Ctrl-O": "openLine"
}
keyMap.macDefault = {
  "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
  "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
  "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
  "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
  "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
  "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
  "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
  fallthrough: ["basic", "emacsy"]
}
keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault

// KEYMAP DISPATCH

function normalizeKeyName(name) {
  var parts = name.split(/-(?!$)/)
  name = parts[parts.length - 1]
  var alt, ctrl, shift, cmd
  for (var i = 0; i < parts.length - 1; i++) {
    var mod = parts[i]
    if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true }
    else if (/^a(lt)?$/i.test(mod)) { alt = true }
    else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true }
    else if (/^s(hift)?$/i.test(mod)) { shift = true }
    else { throw new Error("Unrecognized modifier name: " + mod) }
  }
  if (alt) { name = "Alt-" + name }
  if (ctrl) { name = "Ctrl-" + name }
  if (cmd) { name = "Cmd-" + name }
  if (shift) { name = "Shift-" + name }
  return name
}

// This is a kludge to keep keymaps mostly working as raw objects
// (backwards compatibility) while at the same time support features
// like normalization and multi-stroke key bindings. It compiles a
// new normalized keymap, and then updates the old object to reflect
// this.
function normalizeKeyMap(keymap) {
  var copy = {}
  for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
    var value = keymap[keyname]
    if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
    if (value == "...") { delete keymap[keyname]; continue }

    var keys = map(keyname.split(" "), normalizeKeyName)
    for (var i = 0; i < keys.length; i++) {
      var val = (void 0), name = (void 0)
      if (i == keys.length - 1) {
        name = keys.join(" ")
        val = value
      } else {
        name = keys.slice(0, i + 1).join(" ")
        val = "..."
      }
      var prev = copy[name]
      if (!prev) { copy[name] = val }
      else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
    }
    delete keymap[keyname]
  } }
  for (var prop in copy) { keymap[prop] = copy[prop] }
  return keymap
}

function lookupKey(key, map, handle, context) {
  map = getKeyMap(map)
  var found = map.call ? map.call(key, context) : map[key]
  if (found === false) { return "nothing" }
  if (found === "...") { return "multi" }
  if (found != null && handle(found)) { return "handled" }

  if (map.fallthrough) {
    if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
      { return lookupKey(key, map.fallthrough, handle, context) }
    for (var i = 0; i < map.fallthrough.length; i++) {
      var result = lookupKey(key, map.fallthrough[i], handle, context)
      if (result) { return result }
    }
  }
}

// Modifier key presses don't count as 'real' key presses for the
// purpose of keymap fallthrough.
function isModifierKey(value) {
  var name = typeof value == "string" ? value : keyNames[value.keyCode]
  return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
}

// Look up the name of a key as indicated by an event object.
function keyName(event, noShift) {
  if (presto && event.keyCode == 34 && event["char"]) { return false }
  var base = keyNames[event.keyCode], name = base
  if (name == null || event.altGraphKey) { return false }
  if (event.altKey && base != "Alt") { name = "Alt-" + name }
  if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name }
  if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") { name = "Cmd-" + name }
  if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name }
  return name
}

function getKeyMap(val) {
  return typeof val == "string" ? keyMap[val] : val
}

// Helper for deleting text near the selection(s), used to implement
// backspace, delete, and similar functionality.
function deleteNearSelection(cm, compute) {
  var ranges = cm.doc.sel.ranges, kill = []
  // Build up a set of ranges to kill first, merging overlapping
  // ranges.
  for (var i = 0; i < ranges.length; i++) {
    var toKill = compute(ranges[i])
    while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
      var replaced = kill.pop()
      if (cmp(replaced.from, toKill.from) < 0) {
        toKill.from = replaced.from
        break
      }
    }
    kill.push(toKill)
  }
  // Next, remove those actual ranges.
  runInOp(cm, function () {
    for (var i = kill.length - 1; i >= 0; i--)
      { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete") }
    ensureCursorVisible(cm)
  })
}

// Commands are parameter-less actions that can be performed on an
// editor, mostly used for keybindings.
var commands = {
  selectAll: selectAll,
  singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
  killLine: function (cm) { return deleteNearSelection(cm, function (range) {
    if (range.empty()) {
      var len = getLine(cm.doc, range.head.line).text.length
      if (range.head.ch == len && range.head.line < cm.lastLine())
        { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
      else
        { return {from: range.head, to: Pos(range.head.line, len)} }
    } else {
      return {from: range.from(), to: range.to()}
    }
  }); },
  deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
    from: Pos(range.from().line, 0),
    to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
  }); }); },
  delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
    from: Pos(range.from().line, 0), to: range.from()
  }); }); },
  delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    var leftPos = cm.coordsChar({left: 0, top: top}, "div")
    return {from: leftPos, to: range.from()}
  }); },
  delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
    return {from: range.from(), to: rightPos }
  }); },
  undo: function (cm) { return cm.undo(); },
  redo: function (cm) { return cm.redo(); },
  undoSelection: function (cm) { return cm.undoSelection(); },
  redoSelection: function (cm) { return cm.redoSelection(); },
  goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
  goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
  goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
    {origin: "+move", bias: 1}
  ); },
  goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
    {origin: "+move", bias: 1}
  ); },
  goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
    {origin: "+move", bias: -1}
  ); },
  goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
  }, sel_move); },
  goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    return cm.coordsChar({left: 0, top: top}, "div")
  }, sel_move); },
  goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
    var top = cm.charCoords(range.head, "div").top + 5
    var pos = cm.coordsChar({left: 0, top: top}, "div")
    if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
    return pos
  }, sel_move); },
  goLineUp: function (cm) { return cm.moveV(-1, "line"); },
  goLineDown: function (cm) { return cm.moveV(1, "line"); },
  goPageUp: function (cm) { return cm.moveV(-1, "page"); },
  goPageDown: function (cm) { return cm.moveV(1, "page"); },
  goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
  goCharRight: function (cm) { return cm.moveH(1, "char"); },
  goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
  goColumnRight: function (cm) { return cm.moveH(1, "column"); },
  goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
  goGroupRight: function (cm) { return cm.moveH(1, "group"); },
  goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
  goWordRight: function (cm) { return cm.moveH(1, "word"); },
  delCharBefore: function (cm) { return cm.deleteH(-1, "char"); },
  delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
  delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
  delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
  delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
  delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
  indentAuto: function (cm) { return cm.indentSelection("smart"); },
  indentMore: function (cm) { return cm.indentSelection("add"); },
  indentLess: function (cm) { return cm.indentSelection("subtract"); },
  insertTab: function (cm) { return cm.replaceSelection("\t"); },
  insertSoftTab: function (cm) {
    var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize
    for (var i = 0; i < ranges.length; i++) {
      var pos = ranges[i].from()
      var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize)
      spaces.push(spaceStr(tabSize - col % tabSize))
    }
    cm.replaceSelections(spaces)
  },
  defaultTab: function (cm) {
    if (cm.somethingSelected()) { cm.indentSelection("add") }
    else { cm.execCommand("insertTab") }
  },
  // Swap the two chars left and right of each selection's head.
  // Move cursor behind the two swapped characters afterwards.
  //
  // Doesn't consider line feeds a character.
  // Doesn't scan more than one line above to find a character.
  // Doesn't do anything on an empty line.
  // Doesn't do anything with non-empty selections.
  transposeChars: function (cm) { return runInOp(cm, function () {
    var ranges = cm.listSelections(), newSel = []
    for (var i = 0; i < ranges.length; i++) {
      if (!ranges[i].empty()) { continue }
      var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text
      if (line) {
        if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1) }
        if (cur.ch > 0) {
          cur = new Pos(cur.line, cur.ch + 1)
          cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                          Pos(cur.line, cur.ch - 2), cur, "+transpose")
        } else if (cur.line > cm.doc.first) {
          var prev = getLine(cm.doc, cur.line - 1).text
          if (prev) {
            cur = new Pos(cur.line, 1)
            cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
                            prev.charAt(prev.length - 1),
                            Pos(cur.line - 1, prev.length - 1), cur, "+transpose")
          }
        }
      }
      newSel.push(new Range(cur, cur))
    }
    cm.setSelections(newSel)
  }); },
  newlineAndIndent: function (cm) { return runInOp(cm, function () {
    var sels = cm.listSelections()
    for (var i = sels.length - 1; i >= 0; i--)
      { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input") }
    sels = cm.listSelections()
    for (var i$1 = 0; i$1 < sels.length; i$1++)
      { cm.indentLine(sels[i$1].from().line, null, true) }
    ensureCursorVisible(cm)
  }); },
  openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
  toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
}


function lineStart(cm, lineN) {
  var line = getLine(cm.doc, lineN)
  var visual = visualLine(line)
  if (visual != line) { lineN = lineNo(visual) }
  return endOfLine(true, cm, visual, lineN, 1)
}
function lineEnd(cm, lineN) {
  var line = getLine(cm.doc, lineN)
  var visual = visualLineEnd(line)
  if (visual != line) { lineN = lineNo(visual) }
  return endOfLine(true, cm, line, lineN, -1)
}
function lineStartSmart(cm, pos) {
  var start = lineStart(cm, pos.line)
  var line = getLine(cm.doc, start.line)
  var order = getOrder(line)
  if (!order || order[0].level == 0) {
    var firstNonWS = Math.max(0, line.text.search(/\S/))
    var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch
    return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky)
  }
  return start
}

// Run a handler that was bound to a key.
function doHandleBinding(cm, bound, dropShift) {
  if (typeof bound == "string") {
    bound = commands[bound]
    if (!bound) { return false }
  }
  // Ensure previous input has been read, so that the handler sees a
  // consistent view of the document
  cm.display.input.ensurePolled()
  var prevShift = cm.display.shift, done = false
  try {
    if (cm.isReadOnly()) { cm.state.suppressEdits = true }
    if (dropShift) { cm.display.shift = false }
    done = bound(cm) != Pass
  } finally {
    cm.display.shift = prevShift
    cm.state.suppressEdits = false
  }
  return done
}

function lookupKeyForEditor(cm, name, handle) {
  for (var i = 0; i < cm.state.keyMaps.length; i++) {
    var result = lookupKey(name, cm.state.keyMaps[i], handle, cm)
    if (result) { return result }
  }
  return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
    || lookupKey(name, cm.options.keyMap, handle, cm)
}

var stopSeq = new Delayed
function dispatchKey(cm, name, e, handle) {
  var seq = cm.state.keySeq
  if (seq) {
    if (isModifierKey(name)) { return "handled" }
    stopSeq.set(50, function () {
      if (cm.state.keySeq == seq) {
        cm.state.keySeq = null
        cm.display.input.reset()
      }
    })
    name = seq + " " + name
  }
  var result = lookupKeyForEditor(cm, name, handle)

  if (result == "multi")
    { cm.state.keySeq = name }
  if (result == "handled")
    { signalLater(cm, "keyHandled", cm, name, e) }

  if (result == "handled" || result == "multi") {
    e_preventDefault(e)
    restartBlink(cm)
  }

  if (seq && !result && /\'$/.test(name)) {
    e_preventDefault(e)
    return true
  }
  return !!result
}

// Handle a key from the keydown event.
function handleKeyBinding(cm, e) {
  var name = keyName(e, true)
  if (!name) { return false }

  if (e.shiftKey && !cm.state.keySeq) {
    // First try to resolve full name (including 'Shift-'). Failing
    // that, see if there is a cursor-motion command (starting with
    // 'go') bound to the keyname without 'Shift-'.
    return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
        || dispatchKey(cm, name, e, function (b) {
             if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
               { return doHandleBinding(cm, b) }
           })
  } else {
    return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
  }
}

// Handle a key from the keypress event
function handleCharBinding(cm, e, ch) {
  return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
}

var lastStoppedKey = null
function onKeyDown(e) {
  var cm = this
  cm.curOp.focus = activeElt()
  if (signalDOMEvent(cm, e)) { return }
  // IE does strange things with escape.
  if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false }
  var code = e.keyCode
  cm.display.shift = code == 16 || e.shiftKey
  var handled = handleKeyBinding(cm, e)
  if (presto) {
    lastStoppedKey = handled ? code : null
    // Opera has no cut event... we try to at least catch the key combo
    if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
      { cm.replaceSelection("", null, "cut") }
  }

  // Turn mouse into crosshair when Alt is held on Mac.
  if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
    { showCrossHair(cm) }
}

function showCrossHair(cm) {
  var lineDiv = cm.display.lineDiv
  addClass(lineDiv, "CodeMirror-crosshair")

  function up(e) {
    if (e.keyCode == 18 || !e.altKey) {
      rmClass(lineDiv, "CodeMirror-crosshair")
      off(document, "keyup", up)
      off(document, "mouseover", up)
    }
  }
  on(document, "keyup", up)
  on(document, "mouseover", up)
}

function onKeyUp(e) {
  if (e.keyCode == 16) { this.doc.sel.shift = false }
  signalDOMEvent(this, e)
}

function onKeyPress(e) {
  var cm = this
  if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
  var keyCode = e.keyCode, charCode = e.charCode
  if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
  if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
  var ch = String.fromCharCode(charCode == null ? keyCode : charCode)
  // Some browsers fire keypress events for backspace
  if (ch == "\x08") { return }
  if (handleCharBinding(cm, e, ch)) { return }
  cm.display.input.onKeyPress(e)
}

// A mouse down can be a single click, double click, triple click,
// start of selection drag, start of text drag, new cursor
// (ctrl-click), rectangle drag (alt-drag), or xwin
// middle-click-paste. Or it might be a click on something we should
// not interfere with, such as a scrollbar or widget.
function onMouseDown(e) {
  var cm = this, display = cm.display
  if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
  display.input.ensurePolled()
  display.shift = e.shiftKey

  if (eventInWidget(display, e)) {
    if (!webkit) {
      // Briefly turn off draggability, to allow widgets to do
      // normal dragging things.
      display.scroller.draggable = false
      setTimeout(function () { return display.scroller.draggable = true; }, 100)
    }
    return
  }
  if (clickInGutter(cm, e)) { return }
  var start = posFromMouse(cm, e)
  window.focus()

  switch (e_button(e)) {
  case 1:
    // #3261: make sure, that we're not starting a second selection
    if (cm.state.selectingText)
      { cm.state.selectingText(e) }
    else if (start)
      { leftButtonDown(cm, e, start) }
    else if (e_target(e) == display.scroller)
      { e_preventDefault(e) }
    break
  case 2:
    if (webkit) { cm.state.lastMiddleDown = +new Date }
    if (start) { extendSelection(cm.doc, start) }
    setTimeout(function () { return display.input.focus(); }, 20)
    e_preventDefault(e)
    break
  case 3:
    if (captureRightClick) { onContextMenu(cm, e) }
    else { delayBlurEvent(cm) }
    break
  }
}

var lastClick;
var lastDoubleClick;
function leftButtonDown(cm, e, start) {
  if (ie) { setTimeout(bind(ensureFocus, cm), 0) }
  else { cm.curOp.focus = activeElt() }

  var now = +new Date, type
  if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
    type = "triple"
  } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
    type = "double"
    lastDoubleClick = {time: now, pos: start}
  } else {
    type = "single"
    lastClick = {time: now, pos: start}
  }

  var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained
  if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
      type == "single" && (contained = sel.contains(start)) > -1 &&
      (cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) &&
      (cmp(contained.to(), start) > 0 || start.xRel < 0))
    { leftButtonStartDrag(cm, e, start, modifier) }
  else
    { leftButtonSelect(cm, e, start, type, modifier) }
}

// Start a text drag. When it ends, see if any dragging actually
// happen, and treat as a click if it didn't.
function leftButtonStartDrag(cm, e, start, modifier) {
  var display = cm.display, startTime = +new Date
  var dragEnd = operation(cm, function (e2) {
    if (webkit) { display.scroller.draggable = false }
    cm.state.draggingText = false
    off(document, "mouseup", dragEnd)
    off(display.scroller, "drop", dragEnd)
    if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
      e_preventDefault(e2)
      if (!modifier && +new Date - 200 < startTime)
        { extendSelection(cm.doc, start) }
      // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
      if (webkit || ie && ie_version == 9)
        { setTimeout(function () {document.body.focus(); display.input.focus()}, 20) }
      else
        { display.input.focus() }
    }
  })
  // Let the drag handler handle this.
  if (webkit) { display.scroller.draggable = true }
  cm.state.draggingText = dragEnd
  dragEnd.copy = mac ? e.altKey : e.ctrlKey
  // IE's approach to draggable
  if (display.scroller.dragDrop) { display.scroller.dragDrop() }
  on(document, "mouseup", dragEnd)
  on(display.scroller, "drop", dragEnd)
}

// Normal selection, as opposed to text dragging.
function leftButtonSelect(cm, e, start, type, addNew) {
  var display = cm.display, doc = cm.doc
  e_preventDefault(e)

  var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges
  if (addNew && !e.shiftKey) {
    ourIndex = doc.sel.contains(start)
    if (ourIndex > -1)
      { ourRange = ranges[ourIndex] }
    else
      { ourRange = new Range(start, start) }
  } else {
    ourRange = doc.sel.primary()
    ourIndex = doc.sel.primIndex
  }

  if (chromeOS ? e.shiftKey && e.metaKey : e.altKey) {
    type = "rect"
    if (!addNew) { ourRange = new Range(start, start) }
    start = posFromMouse(cm, e, true, true)
    ourIndex = -1
  } else if (type == "double") {
    var word = cm.findWordAt(start)
    if (cm.display.shift || doc.extend)
      { ourRange = extendRange(doc, ourRange, word.anchor, word.head) }
    else
      { ourRange = word }
  } else if (type == "triple") {
    var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)))
    if (cm.display.shift || doc.extend)
      { ourRange = extendRange(doc, ourRange, line.anchor, line.head) }
    else
      { ourRange = line }
  } else {
    ourRange = extendRange(doc, ourRange, start)
  }

  if (!addNew) {
    ourIndex = 0
    setSelection(doc, new Selection([ourRange], 0), sel_mouse)
    startSel = doc.sel
  } else if (ourIndex == -1) {
    ourIndex = ranges.length
    setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
                 {scroll: false, origin: "*mouse"})
  } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single" && !e.shiftKey) {
    setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
                 {scroll: false, origin: "*mouse"})
    startSel = doc.sel
  } else {
    replaceOneSelection(doc, ourIndex, ourRange, sel_mouse)
  }

  var lastPos = start
  function extendTo(pos) {
    if (cmp(lastPos, pos) == 0) { return }
    lastPos = pos

    if (type == "rect") {
      var ranges = [], tabSize = cm.options.tabSize
      var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize)
      var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize)
      var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol)
      for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
           line <= end; line++) {
        var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize)
        if (left == right)
          { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))) }
        else if (text.length > leftPos)
          { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))) }
      }
      if (!ranges.length) { ranges.push(new Range(start, start)) }
      setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
                   {origin: "*mouse", scroll: false})
      cm.scrollIntoView(pos)
    } else {
      var oldRange = ourRange
      var anchor = oldRange.anchor, head = pos
      if (type != "single") {
        var range
        if (type == "double")
          { range = cm.findWordAt(pos) }
        else
          { range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0))) }
        if (cmp(range.anchor, anchor) > 0) {
          head = range.head
          anchor = minPos(oldRange.from(), range.anchor)
        } else {
          head = range.anchor
          anchor = maxPos(oldRange.to(), range.head)
        }
      }
      var ranges$1 = startSel.ranges.slice(0)
      ranges$1[ourIndex] = new Range(clipPos(doc, anchor), head)
      setSelection(doc, normalizeSelection(ranges$1, ourIndex), sel_mouse)
    }
  }

  var editorSize = display.wrapper.getBoundingClientRect()
  // Used to ensure timeout re-tries don't fire when another extend
  // happened in the meantime (clearTimeout isn't reliable -- at
  // least on Chrome, the timeouts still happen even when cleared,
  // if the clear happens after their scheduled firing time).
  var counter = 0

  function extend(e) {
    var curCount = ++counter
    var cur = posFromMouse(cm, e, true, type == "rect")
    if (!cur) { return }
    if (cmp(cur, lastPos) != 0) {
      cm.curOp.focus = activeElt()
      extendTo(cur)
      var visible = visibleLines(display, doc)
      if (cur.line >= visible.to || cur.line < visible.from)
        { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e) }}), 150) }
    } else {
      var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0
      if (outside) { setTimeout(operation(cm, function () {
        if (counter != curCount) { return }
        display.scroller.scrollTop += outside
        extend(e)
      }), 50) }
    }
  }

  function done(e) {
    cm.state.selectingText = false
    counter = Infinity
    e_preventDefault(e)
    display.input.focus()
    off(document, "mousemove", move)
    off(document, "mouseup", up)
    doc.history.lastSelOrigin = null
  }

  var move = operation(cm, function (e) {
    if (!e_button(e)) { done(e) }
    else { extend(e) }
  })
  var up = operation(cm, done)
  cm.state.selectingText = up
  on(document, "mousemove", move)
  on(document, "mouseup", up)
}


// Determines whether an event happened in the gutter, and fires the
// handlers for the corresponding event.
function gutterEvent(cm, e, type, prevent) {
  var mX, mY
  try { mX = e.clientX; mY = e.clientY }
  catch(e) { return false }
  if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
  if (prevent) { e_preventDefault(e) }

  var display = cm.display
  var lineBox = display.lineDiv.getBoundingClientRect()

  if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
  mY -= lineBox.top - display.viewOffset

  for (var i = 0; i < cm.options.gutters.length; ++i) {
    var g = display.gutters.childNodes[i]
    if (g && g.getBoundingClientRect().right >= mX) {
      var line = lineAtHeight(cm.doc, mY)
      var gutter = cm.options.gutters[i]
      signal(cm, type, cm, line, gutter, e)
      return e_defaultPrevented(e)
    }
  }
}

function clickInGutter(cm, e) {
  return gutterEvent(cm, e, "gutterClick", true)
}

// CONTEXT MENU HANDLING

// To make the context menu work, we need to briefly unhide the
// textarea (making it as unobtrusive as possible) to let the
// right-click take effect on it.
function onContextMenu(cm, e) {
  if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
  if (signalDOMEvent(cm, e, "contextmenu")) { return }
  cm.display.input.onContextMenu(e)
}

function contextMenuInGutter(cm, e) {
  if (!hasHandler(cm, "gutterContextMenu")) { return false }
  return gutterEvent(cm, e, "gutterContextMenu", false)
}

function themeChanged(cm) {
  cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
    cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-")
  clearCaches(cm)
}

var Init = {toString: function(){return "CodeMirror.Init"}}

var defaults = {}
var optionHandlers = {}

function defineOptions(CodeMirror) {
  var optionHandlers = CodeMirror.optionHandlers

  function option(name, deflt, handle, notOnInit) {
    CodeMirror.defaults[name] = deflt
    if (handle) { optionHandlers[name] =
      notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old) }} : handle }
  }

  CodeMirror.defineOption = option

  // Passed to option handlers when there is no old value.
  CodeMirror.Init = Init

  // These two are, on init, called from the constructor because they
  // have to be initialized before the editor can start at all.
  option("value", "", function (cm, val) { return cm.setValue(val); }, true)
  option("mode", null, function (cm, val) {
    cm.doc.modeOption = val
    loadMode(cm)
  }, true)

  option("indentUnit", 2, loadMode, true)
  option("indentWithTabs", false)
  option("smartIndent", true)
  option("tabSize", 4, function (cm) {
    resetModeState(cm)
    clearCaches(cm)
    regChange(cm)
  }, true)
  option("lineSeparator", null, function (cm, val) {
    cm.doc.lineSep = val
    if (!val) { return }
    var newBreaks = [], lineNo = cm.doc.first
    cm.doc.iter(function (line) {
      for (var pos = 0;;) {
        var found = line.text.indexOf(val, pos)
        if (found == -1) { break }
        pos = found + val.length
        newBreaks.push(Pos(lineNo, found))
      }
      lineNo++
    })
    for (var i = newBreaks.length - 1; i >= 0; i--)
      { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)) }
  })
  option("specialChars", /[\u0000-\u001f\u007f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function (cm, val, old) {
    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g")
    if (old != Init) { cm.refresh() }
  })
  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true)
  option("electricChars", true)
  option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
    throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
  }, true)
  option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true)
  option("rtlMoveVisually", !windows)
  option("wholeLineUpdateBefore", true)

  option("theme", "default", function (cm) {
    themeChanged(cm)
    guttersChanged(cm)
  }, true)
  option("keyMap", "default", function (cm, val, old) {
    var next = getKeyMap(val)
    var prev = old != Init && getKeyMap(old)
    if (prev && prev.detach) { prev.detach(cm, next) }
    if (next.attach) { next.attach(cm, prev || null) }
  })
  option("extraKeys", null)

  option("lineWrapping", false, wrappingChanged, true)
  option("gutters", [], function (cm) {
    setGuttersForLineNumbers(cm.options)
    guttersChanged(cm)
  }, true)
  option("fixedGutter", true, function (cm, val) {
    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0"
    cm.refresh()
  }, true)
  option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true)
  option("scrollbarStyle", "native", function (cm) {
    initScrollbars(cm)
    updateScrollbars(cm)
    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop)
    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft)
  }, true)
  option("lineNumbers", false, function (cm) {
    setGuttersForLineNumbers(cm.options)
    guttersChanged(cm)
  }, true)
  option("firstLineNumber", 1, guttersChanged, true)
  option("lineNumberFormatter", function (integer) { return integer; }, guttersChanged, true)
  option("showCursorWhenSelecting", false, updateSelection, true)

  option("resetSelectionOnContextMenu", true)
  option("lineWiseCopyCut", true)

  option("readOnly", false, function (cm, val) {
    if (val == "nocursor") {
      onBlur(cm)
      cm.display.input.blur()
      cm.display.disabled = true
    } else {
      cm.display.disabled = false
    }
    cm.display.input.readOnlyChanged(val)
  })
  option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset() }}, true)
  option("dragDrop", true, dragDropChanged)
  option("allowDropFileTypes", null)

  option("cursorBlinkRate", 530)
  option("cursorScrollMargin", 0)
  option("cursorHeight", 1, updateSelection, true)
  option("singleCursorHeightPerLine", true, updateSelection, true)
  option("workTime", 100)
  option("workDelay", 100)
  option("flattenSpans", true, resetModeState, true)
  option("addModeClass", false, resetModeState, true)
  option("pollInterval", 100)
  option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; })
  option("historyEventDelay", 1250)
  option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true)
  option("maxHighlightLength", 10000, resetModeState, true)
  option("moveInputWithCursor", true, function (cm, val) {
    if (!val) { cm.display.input.resetPosition() }
  })

  option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; })
  option("autofocus", null)
}

function guttersChanged(cm) {
  updateGutters(cm)
  regChange(cm)
  alignHorizontally(cm)
}

function dragDropChanged(cm, value, old) {
  var wasOn = old && old != Init
  if (!value != !wasOn) {
    var funcs = cm.display.dragFunctions
    var toggle = value ? on : off
    toggle(cm.display.scroller, "dragstart", funcs.start)
    toggle(cm.display.scroller, "dragenter", funcs.enter)
    toggle(cm.display.scroller, "dragover", funcs.over)
    toggle(cm.display.scroller, "dragleave", funcs.leave)
    toggle(cm.display.scroller, "drop", funcs.drop)
  }
}

function wrappingChanged(cm) {
  if (cm.options.lineWrapping) {
    addClass(cm.display.wrapper, "CodeMirror-wrap")
    cm.display.sizer.style.minWidth = ""
    cm.display.sizerWidth = null
  } else {
    rmClass(cm.display.wrapper, "CodeMirror-wrap")
    findMaxLine(cm)
  }
  estimateLineHeights(cm)
  regChange(cm)
  clearCaches(cm)
  setTimeout(function () { return updateScrollbars(cm); }, 100)
}

// A CodeMirror instance represents an editor. This is the object
// that user code is usually dealing with.

function CodeMirror(place, options) {
  var this$1 = this;

  if (!(this instanceof CodeMirror)) { return new CodeMirror(place, options) }

  this.options = options = options ? copyObj(options) : {}
  // Determine effective options based on given values and defaults.
  copyObj(defaults, options, false)
  setGuttersForLineNumbers(options)

  var doc = options.value
  if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator) }
  this.doc = doc

  var input = new CodeMirror.inputStyles[options.inputStyle](this)
  var display = this.display = new Display(place, doc, input)
  display.wrapper.CodeMirror = this
  updateGutters(this)
  themeChanged(this)
  if (options.lineWrapping)
    { this.display.wrapper.className += " CodeMirror-wrap" }
  initScrollbars(this)

  this.state = {
    keyMaps: [],  // stores maps added by addKeyMap
    overlays: [], // highlighting overlays, as added by addOverlay
    modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
    overwrite: false,
    delayingBlurEvent: false,
    focused: false,
    suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
    pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
    selectingText: false,
    draggingText: false,
    highlight: new Delayed(), // stores highlight worker timeout
    keySeq: null,  // Unfinished key sequence
    specialChars: null
  }

  if (options.autofocus && !mobile) { display.input.focus() }

  // Override magic textarea content restore that IE sometimes does
  // on our hidden textarea on reload
  if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20) }

  registerEventHandlers(this)
  ensureGlobalHandlers()

  startOperation(this)
  this.curOp.forceUpdate = true
  attachDoc(this, doc)

  if ((options.autofocus && !mobile) || this.hasFocus())
    { setTimeout(bind(onFocus, this), 20) }
  else
    { onBlur(this) }

  for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
    { optionHandlers[opt](this$1, options[opt], Init) } }
  maybeUpdateLineNumberWidth(this)
  if (options.finishInit) { options.finishInit(this) }
  for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this$1) }
  endOperation(this)
  // Suppress optimizelegibility in Webkit, since it breaks text
  // measuring on line wrapping boundaries.
  if (webkit && options.lineWrapping &&
      getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
    { display.lineDiv.style.textRendering = "auto" }
}

// The default configuration options.
CodeMirror.defaults = defaults
// Functions to run when options are changed.
CodeMirror.optionHandlers = optionHandlers

// Attach the necessary event handlers when initializing the editor
function registerEventHandlers(cm) {
  var d = cm.display
  on(d.scroller, "mousedown", operation(cm, onMouseDown))
  // Older IE's will not fire a second mousedown for a double click
  if (ie && ie_version < 11)
    { on(d.scroller, "dblclick", operation(cm, function (e) {
      if (signalDOMEvent(cm, e)) { return }
      var pos = posFromMouse(cm, e)
      if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
      e_preventDefault(e)
      var word = cm.findWordAt(pos)
      extendSelection(cm.doc, word.anchor, word.head)
    })) }
  else
    { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }) }
  // Some browsers fire contextmenu *after* opening the menu, at
  // which point we can't mess with it anymore. Context menu is
  // handled in onMouseDown for these browsers.
  if (!captureRightClick) { on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); }) }

  // Used to suppress mouse event handling when a touch happens
  var touchFinished, prevTouch = {end: 0}
  function finishTouch() {
    if (d.activeTouch) {
      touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000)
      prevTouch = d.activeTouch
      prevTouch.end = +new Date
    }
  }
  function isMouseLikeTouchEvent(e) {
    if (e.touches.length != 1) { return false }
    var touch = e.touches[0]
    return touch.radiusX <= 1 && touch.radiusY <= 1
  }
  function farAway(touch, other) {
    if (other.left == null) { return true }
    var dx = other.left - touch.left, dy = other.top - touch.top
    return dx * dx + dy * dy > 20 * 20
  }
  on(d.scroller, "touchstart", function (e) {
    if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e)) {
      d.input.ensurePolled()
      clearTimeout(touchFinished)
      var now = +new Date
      d.activeTouch = {start: now, moved: false,
                       prev: now - prevTouch.end <= 300 ? prevTouch : null}
      if (e.touches.length == 1) {
        d.activeTouch.left = e.touches[0].pageX
        d.activeTouch.top = e.touches[0].pageY
      }
    }
  })
  on(d.scroller, "touchmove", function () {
    if (d.activeTouch) { d.activeTouch.moved = true }
  })
  on(d.scroller, "touchend", function (e) {
    var touch = d.activeTouch
    if (touch && !eventInWidget(d, e) && touch.left != null &&
        !touch.moved && new Date - touch.start < 300) {
      var pos = cm.coordsChar(d.activeTouch, "page"), range
      if (!touch.prev || farAway(touch, touch.prev)) // Single tap
        { range = new Range(pos, pos) }
      else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
        { range = cm.findWordAt(pos) }
      else // Triple tap
        { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
      cm.setSelection(range.anchor, range.head)
      cm.focus()
      e_preventDefault(e)
    }
    finishTouch()
  })
  on(d.scroller, "touchcancel", finishTouch)

  // Sync scrolling between fake scrollbars and real scrollable
  // area, ensure viewport is updated when scrolling.
  on(d.scroller, "scroll", function () {
    if (d.scroller.clientHeight) {
      setScrollTop(cm, d.scroller.scrollTop)
      setScrollLeft(cm, d.scroller.scrollLeft, true)
      signal(cm, "scroll", cm)
    }
  })

  // Listen to wheel events in order to try and update the viewport on time.
  on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); })
  on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); })

  // Prevent wrapper from ever scrolling
  on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; })

  d.dragFunctions = {
    enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e) }},
    over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e) }},
    start: function (e) { return onDragStart(cm, e); },
    drop: operation(cm, onDrop),
    leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm) }}
  }

  var inp = d.input.getField()
  on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); })
  on(inp, "keydown", operation(cm, onKeyDown))
  on(inp, "keypress", operation(cm, onKeyPress))
  on(inp, "focus", function (e) { return onFocus(cm, e); })
  on(inp, "blur", function (e) { return onBlur(cm, e); })
}

var initHooks = []
CodeMirror.defineInitHook = function (f) { return initHooks.push(f); }

// Indent the given line. The how parameter can be "smart",
// "add"/null, "subtract", or "prev". When aggressive is false
// (typically set to true for forced single-line indents), empty
// lines are not indented, and places where the mode returns Pass
// are left alone.
function indentLine(cm, n, how, aggressive) {
  var doc = cm.doc, state
  if (how == null) { how = "add" }
  if (how == "smart") {
    // Fall back to "prev" when the mode doesn't have an indentation
    // method.
    if (!doc.mode.indent) { how = "prev" }
    else { state = getStateBefore(cm, n) }
  }

  var tabSize = cm.options.tabSize
  var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize)
  if (line.stateAfter) { line.stateAfter = null }
  var curSpaceString = line.text.match(/^\s*/)[0], indentation
  if (!aggressive && !/\S/.test(line.text)) {
    indentation = 0
    how = "not"
  } else if (how == "smart") {
    indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text)
    if (indentation == Pass || indentation > 150) {
      if (!aggressive) { return }
      how = "prev"
    }
  }
  if (how == "prev") {
    if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize) }
    else { indentation = 0 }
  } else if (how == "add") {
    indentation = curSpace + cm.options.indentUnit
  } else if (how == "subtract") {
    indentation = curSpace - cm.options.indentUnit
  } else if (typeof how == "number") {
    indentation = curSpace + how
  }
  indentation = Math.max(0, indentation)

  var indentString = "", pos = 0
  if (cm.options.indentWithTabs)
    { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t"} }
  if (pos < indentation) { indentString += spaceStr(indentation - pos) }

  if (indentString != curSpaceString) {
    replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input")
    line.stateAfter = null
    return true
  } else {
    // Ensure that, if the cursor was in the whitespace at the start
    // of the line, it is moved to the end of that space.
    for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
      var range = doc.sel.ranges[i$1]
      if (range.head.line == n && range.head.ch < curSpaceString.length) {
        var pos$1 = Pos(n, curSpaceString.length)
        replaceOneSelection(doc, i$1, new Range(pos$1, pos$1))
        break
      }
    }
  }
}

// This will be set to a {lineWise: bool, text: [string]} object, so
// that, when pasting, we know what kind of selections the copied
// text was made out of.
var lastCopied = null

function setLastCopied(newLastCopied) {
  lastCopied = newLastCopied
}

function applyTextInput(cm, inserted, deleted, sel, origin) {
  var doc = cm.doc
  cm.display.shift = false
  if (!sel) { sel = doc.sel }

  var paste = cm.state.pasteIncoming || origin == "paste"
  var textLines = splitLinesAuto(inserted), multiPaste = null
  // When pasing N lines into N selections, insert one line per selection
  if (paste && sel.ranges.length > 1) {
    if (lastCopied && lastCopied.text.join("\n") == inserted) {
      if (sel.ranges.length % lastCopied.text.length == 0) {
        multiPaste = []
        for (var i = 0; i < lastCopied.text.length; i++)
          { multiPaste.push(doc.splitLines(lastCopied.text[i])) }
      }
    } else if (textLines.length == sel.ranges.length) {
      multiPaste = map(textLines, function (l) { return [l]; })
    }
  }

  var updateInput
  // Normal behavior is to insert the new text into every selection
  for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
    var range = sel.ranges[i$1]
    var from = range.from(), to = range.to()
    if (range.empty()) {
      if (deleted && deleted > 0) // Handle deletion
        { from = Pos(from.line, from.ch - deleted) }
      else if (cm.state.overwrite && !paste) // Handle overwrite
        { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)) }
      else if (lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == inserted)
        { from = to = Pos(from.line, 0) }
    }
    updateInput = cm.curOp.updateInput
    var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
                       origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")}
    makeChange(cm.doc, changeEvent)
    signalLater(cm, "inputRead", cm, changeEvent)
  }
  if (inserted && !paste)
    { triggerElectric(cm, inserted) }

  ensureCursorVisible(cm)
  cm.curOp.updateInput = updateInput
  cm.curOp.typing = true
  cm.state.pasteIncoming = cm.state.cutIncoming = false
}

function handlePaste(e, cm) {
  var pasted = e.clipboardData && e.clipboardData.getData("Text")
  if (pasted) {
    e.preventDefault()
    if (!cm.isReadOnly() && !cm.options.disableInput)
      { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }) }
    return true
  }
}

function triggerElectric(cm, inserted) {
  // When an 'electric' character is inserted, immediately trigger a reindent
  if (!cm.options.electricChars || !cm.options.smartIndent) { return }
  var sel = cm.doc.sel

  for (var i = sel.ranges.length - 1; i >= 0; i--) {
    var range = sel.ranges[i]
    if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) { continue }
    var mode = cm.getModeAt(range.head)
    var indented = false
    if (mode.electricChars) {
      for (var j = 0; j < mode.electricChars.length; j++)
        { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
          indented = indentLine(cm, range.head.line, "smart")
          break
        } }
    } else if (mode.electricInput) {
      if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
        { indented = indentLine(cm, range.head.line, "smart") }
    }
    if (indented) { signalLater(cm, "electricInput", cm, range.head.line) }
  }
}

function copyableRanges(cm) {
  var text = [], ranges = []
  for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
    var line = cm.doc.sel.ranges[i].head.line
    var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)}
    ranges.push(lineRange)
    text.push(cm.getRange(lineRange.anchor, lineRange.head))
  }
  return {text: text, ranges: ranges}
}

function disableBrowserMagic(field, spellcheck) {
  field.setAttribute("autocorrect", "off")
  field.setAttribute("autocapitalize", "off")
  field.setAttribute("spellcheck", !!spellcheck)
}

function hiddenTextarea() {
  var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
  var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;")
  // The textarea is kept positioned near the cursor to prevent the
  // fact that it'll be scrolled into view on input from scrolling
  // our fake cursor out of view. On webkit, when wrap=off, paste is
  // very slow. So make the area wide instead.
  if (webkit) { te.style.width = "1000px" }
  else { te.setAttribute("wrap", "off") }
  // If border: 0; -- iOS fails to open keyboard (issue #1287)
  if (ios) { te.style.border = "1px solid black" }
  disableBrowserMagic(te)
  return div
}

// The publicly visible API. Note that methodOp(f) means
// 'wrap f in an operation, performed on its `this` parameter'.

// This is not the complete set of editor methods. Most of the
// methods defined on the Doc type are also injected into
// CodeMirror.prototype, for backwards compatibility and
// convenience.

function addEditorMethods(CodeMirror) {
  var optionHandlers = CodeMirror.optionHandlers

  var helpers = CodeMirror.helpers = {}

  CodeMirror.prototype = {
    constructor: CodeMirror,
    focus: function(){window.focus(); this.display.input.focus()},

    setOption: function(option, value) {
      var options = this.options, old = options[option]
      if (options[option] == value && option != "mode") { return }
      options[option] = value
      if (optionHandlers.hasOwnProperty(option))
        { operation(this, optionHandlers[option])(this, value, old) }
      signal(this, "optionChange", this, option)
    },

    getOption: function(option) {return this.options[option]},
    getDoc: function() {return this.doc},

    addKeyMap: function(map, bottom) {
      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map))
    },
    removeKeyMap: function(map) {
      var maps = this.state.keyMaps
      for (var i = 0; i < maps.length; ++i)
        { if (maps[i] == map || maps[i].name == map) {
          maps.splice(i, 1)
          return true
        } }
    },

    addOverlay: methodOp(function(spec, options) {
      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec)
      if (mode.startState) { throw new Error("Overlays may not be stateful.") }
      insertSorted(this.state.overlays,
                   {mode: mode, modeSpec: spec, opaque: options && options.opaque,
                    priority: (options && options.priority) || 0},
                   function (overlay) { return overlay.priority; })
      this.state.modeGen++
      regChange(this)
    }),
    removeOverlay: methodOp(function(spec) {
      var this$1 = this;

      var overlays = this.state.overlays
      for (var i = 0; i < overlays.length; ++i) {
        var cur = overlays[i].modeSpec
        if (cur == spec || typeof spec == "string" && cur.name == spec) {
          overlays.splice(i, 1)
          this$1.state.modeGen++
          regChange(this$1)
          return
        }
      }
    }),

    indentLine: methodOp(function(n, dir, aggressive) {
      if (typeof dir != "string" && typeof dir != "number") {
        if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev" }
        else { dir = dir ? "add" : "subtract" }
      }
      if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive) }
    }),
    indentSelection: methodOp(function(how) {
      var this$1 = this;

      var ranges = this.doc.sel.ranges, end = -1
      for (var i = 0; i < ranges.length; i++) {
        var range = ranges[i]
        if (!range.empty()) {
          var from = range.from(), to = range.to()
          var start = Math.max(end, from.line)
          end = Math.min(this$1.lastLine(), to.line - (to.ch ? 0 : 1)) + 1
          for (var j = start; j < end; ++j)
            { indentLine(this$1, j, how) }
          var newRanges = this$1.doc.sel.ranges
          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
            { replaceOneSelection(this$1.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll) }
        } else if (range.head.line > end) {
          indentLine(this$1, range.head.line, how, true)
          end = range.head.line
          if (i == this$1.doc.sel.primIndex) { ensureCursorVisible(this$1) }
        }
      }
    }),

    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function(pos, precise) {
      return takeToken(this, pos, precise)
    },

    getLineTokens: function(line, precise) {
      return takeToken(this, Pos(line), precise, true)
    },

    getTokenTypeAt: function(pos) {
      pos = clipPos(this.doc, pos)
      var styles = getLineStyles(this, getLine(this.doc, pos.line))
      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch
      var type
      if (ch == 0) { type = styles[2] }
      else { for (;;) {
        var mid = (before + after) >> 1
        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid }
        else if (styles[mid * 2 + 1] < ch) { before = mid + 1 }
        else { type = styles[mid * 2 + 2]; break }
      } }
      var cut = type ? type.indexOf("overlay ") : -1
      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
    },

    getModeAt: function(pos) {
      var mode = this.doc.mode
      if (!mode.innerMode) { return mode }
      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
    },

    getHelper: function(pos, type) {
      return this.getHelpers(pos, type)[0]
    },

    getHelpers: function(pos, type) {
      var this$1 = this;

      var found = []
      if (!helpers.hasOwnProperty(type)) { return found }
      var help = helpers[type], mode = this.getModeAt(pos)
      if (typeof mode[type] == "string") {
        if (help[mode[type]]) { found.push(help[mode[type]]) }
      } else if (mode[type]) {
        for (var i = 0; i < mode[type].length; i++) {
          var val = help[mode[type][i]]
          if (val) { found.push(val) }
        }
      } else if (mode.helperType && help[mode.helperType]) {
        found.push(help[mode.helperType])
      } else if (help[mode.name]) {
        found.push(help[mode.name])
      }
      for (var i$1 = 0; i$1 < help._global.length; i$1++) {
        var cur = help._global[i$1]
        if (cur.pred(mode, this$1) && indexOf(found, cur.val) == -1)
          { found.push(cur.val) }
      }
      return found
    },

    getStateAfter: function(line, precise) {
      var doc = this.doc
      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line)
      return getStateBefore(this, line + 1, precise)
    },

    cursorCoords: function(start, mode) {
      var pos, range = this.doc.sel.primary()
      if (start == null) { pos = range.head }
      else if (typeof start == "object") { pos = clipPos(this.doc, start) }
      else { pos = start ? range.from() : range.to() }
      return cursorCoords(this, pos, mode || "page")
    },

    charCoords: function(pos, mode) {
      return charCoords(this, clipPos(this.doc, pos), mode || "page")
    },

    coordsChar: function(coords, mode) {
      coords = fromCoordSystem(this, coords, mode || "page")
      return coordsChar(this, coords.left, coords.top)
    },

    lineAtHeight: function(height, mode) {
      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top
      return lineAtHeight(this.doc, height + this.display.viewOffset)
    },
    heightAtLine: function(line, mode, includeWidgets) {
      var end = false, lineObj
      if (typeof line == "number") {
        var last = this.doc.first + this.doc.size - 1
        if (line < this.doc.first) { line = this.doc.first }
        else if (line > last) { line = last; end = true }
        lineObj = getLine(this.doc, line)
      } else {
        lineObj = line
      }
      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets || end).top +
        (end ? this.doc.height - heightAtLine(lineObj) : 0)
    },

    defaultTextHeight: function() { return textHeight(this.display) },
    defaultCharWidth: function() { return charWidth(this.display) },

    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

    addWidget: function(pos, node, scroll, vert, horiz) {
      var display = this.display
      pos = cursorCoords(this, clipPos(this.doc, pos))
      var top = pos.bottom, left = pos.left
      node.style.position = "absolute"
      node.setAttribute("cm-ignore-events", "true")
      this.display.input.setUneditable(node)
      display.sizer.appendChild(node)
      if (vert == "over") {
        top = pos.top
      } else if (vert == "above" || vert == "near") {
        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth)
        // Default to positioning above (if specified and possible); otherwise default to positioning below
        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
          { top = pos.top - node.offsetHeight }
        else if (pos.bottom + node.offsetHeight <= vspace)
          { top = pos.bottom }
        if (left + node.offsetWidth > hspace)
          { left = hspace - node.offsetWidth }
      }
      node.style.top = top + "px"
      node.style.left = node.style.right = ""
      if (horiz == "right") {
        left = display.sizer.clientWidth - node.offsetWidth
        node.style.right = "0px"
      } else {
        if (horiz == "left") { left = 0 }
        else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2 }
        node.style.left = left + "px"
      }
      if (scroll)
        { scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight) }
    },

    triggerOnKeyDown: methodOp(onKeyDown),
    triggerOnKeyPress: methodOp(onKeyPress),
    triggerOnKeyUp: onKeyUp,

    execCommand: function(cmd) {
      if (commands.hasOwnProperty(cmd))
        { return commands[cmd].call(null, this) }
    },

    triggerElectric: methodOp(function(text) { triggerElectric(this, text) }),

    findPosH: function(from, amount, unit, visually) {
      var this$1 = this;

      var dir = 1
      if (amount < 0) { dir = -1; amount = -amount }
      var cur = clipPos(this.doc, from)
      for (var i = 0; i < amount; ++i) {
        cur = findPosH(this$1.doc, cur, dir, unit, visually)
        if (cur.hitSide) { break }
      }
      return cur
    },

    moveH: methodOp(function(dir, unit) {
      var this$1 = this;

      this.extendSelectionsBy(function (range) {
        if (this$1.display.shift || this$1.doc.extend || range.empty())
          { return findPosH(this$1.doc, range.head, dir, unit, this$1.options.rtlMoveVisually) }
        else
          { return dir < 0 ? range.from() : range.to() }
      }, sel_move)
    }),

    deleteH: methodOp(function(dir, unit) {
      var sel = this.doc.sel, doc = this.doc
      if (sel.somethingSelected())
        { doc.replaceSelection("", null, "+delete") }
      else
        { deleteNearSelection(this, function (range) {
          var other = findPosH(doc, range.head, dir, unit, false)
          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other}
        }) }
    }),

    findPosV: function(from, amount, unit, goalColumn) {
      var this$1 = this;

      var dir = 1, x = goalColumn
      if (amount < 0) { dir = -1; amount = -amount }
      var cur = clipPos(this.doc, from)
      for (var i = 0; i < amount; ++i) {
        var coords = cursorCoords(this$1, cur, "div")
        if (x == null) { x = coords.left }
        else { coords.left = x }
        cur = findPosV(this$1, coords, dir, unit)
        if (cur.hitSide) { break }
      }
      return cur
    },

    moveV: methodOp(function(dir, unit) {
      var this$1 = this;

      var doc = this.doc, goals = []
      var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected()
      doc.extendSelectionsBy(function (range) {
        if (collapse)
          { return dir < 0 ? range.from() : range.to() }
        var headPos = cursorCoords(this$1, range.head, "div")
        if (range.goalColumn != null) { headPos.left = range.goalColumn }
        goals.push(headPos.left)
        var pos = findPosV(this$1, headPos, dir, unit)
        if (unit == "page" && range == doc.sel.primary())
          { addToScrollPos(this$1, null, charCoords(this$1, pos, "div").top - headPos.top) }
        return pos
      }, sel_move)
      if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
        { doc.sel.ranges[i].goalColumn = goals[i] } }
    }),

    // Find the word at the given position (as returned by coordsChar).
    findWordAt: function(pos) {
      var doc = this.doc, line = getLine(doc, pos.line).text
      var start = pos.ch, end = pos.ch
      if (line) {
        var helper = this.getHelper(pos, "wordChars")
        if ((pos.sticky == "before" || end == line.length) && start) { --start; } else { ++end }
        var startChar = line.charAt(start)
        var check = isWordChar(startChar, helper)
          ? function (ch) { return isWordChar(ch, helper); }
          : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
          : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); }
        while (start > 0 && check(line.charAt(start - 1))) { --start }
        while (end < line.length && check(line.charAt(end))) { ++end }
      }
      return new Range(Pos(pos.line, start), Pos(pos.line, end))
    },

    toggleOverwrite: function(value) {
      if (value != null && value == this.state.overwrite) { return }
      if (this.state.overwrite = !this.state.overwrite)
        { addClass(this.display.cursorDiv, "CodeMirror-overwrite") }
      else
        { rmClass(this.display.cursorDiv, "CodeMirror-overwrite") }

      signal(this, "overwriteToggle", this, this.state.overwrite)
    },
    hasFocus: function() { return this.display.input.getField() == activeElt() },
    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

    scrollTo: methodOp(function(x, y) {
      if (x != null || y != null) { resolveScrollToPos(this) }
      if (x != null) { this.curOp.scrollLeft = x }
      if (y != null) { this.curOp.scrollTop = y }
    }),
    getScrollInfo: function() {
      var scroller = this.display.scroller
      return {left: scroller.scrollLeft, top: scroller.scrollTop,
              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
              clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
    },

    scrollIntoView: methodOp(function(range, margin) {
      if (range == null) {
        range = {from: this.doc.sel.primary().head, to: null}
        if (margin == null) { margin = this.options.cursorScrollMargin }
      } else if (typeof range == "number") {
        range = {from: Pos(range, 0), to: null}
      } else if (range.from == null) {
        range = {from: range, to: null}
      }
      if (!range.to) { range.to = range.from }
      range.margin = margin || 0

      if (range.from.line != null) {
        resolveScrollToPos(this)
        this.curOp.scrollToPos = range
      } else {
        var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
                                      Math.min(range.from.top, range.to.top) - range.margin,
                                      Math.max(range.from.right, range.to.right),
                                      Math.max(range.from.bottom, range.to.bottom) + range.margin)
        this.scrollTo(sPos.scrollLeft, sPos.scrollTop)
      }
    }),

    setSize: methodOp(function(width, height) {
      var this$1 = this;

      var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; }
      if (width != null) { this.display.wrapper.style.width = interpret(width) }
      if (height != null) { this.display.wrapper.style.height = interpret(height) }
      if (this.options.lineWrapping) { clearLineMeasurementCache(this) }
      var lineNo = this.display.viewFrom
      this.doc.iter(lineNo, this.display.viewTo, function (line) {
        if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
          { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo, "widget"); break } } }
        ++lineNo
      })
      this.curOp.forceUpdate = true
      signal(this, "refresh", this)
    }),

    operation: function(f){return runInOp(this, f)},

    refresh: methodOp(function() {
      var oldHeight = this.display.cachedTextHeight
      regChange(this)
      this.curOp.forceUpdate = true
      clearCaches(this)
      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop)
      updateGutterSpace(this)
      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
        { estimateLineHeights(this) }
      signal(this, "refresh", this)
    }),

    swapDoc: methodOp(function(doc) {
      var old = this.doc
      old.cm = null
      attachDoc(this, doc)
      clearCaches(this)
      this.display.input.reset()
      this.scrollTo(doc.scrollLeft, doc.scrollTop)
      this.curOp.forceScroll = true
      signalLater(this, "swapDoc", this, old)
      return old
    }),

    getInputField: function(){return this.display.input.getField()},
    getWrapperElement: function(){return this.display.wrapper},
    getScrollerElement: function(){return this.display.scroller},
    getGutterElement: function(){return this.display.gutters}
  }
  eventMixin(CodeMirror)

  CodeMirror.registerHelper = function(type, name, value) {
    if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []} }
    helpers[type][name] = value
  }
  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
    CodeMirror.registerHelper(type, name, value)
    helpers[type]._global.push({pred: predicate, val: value})
  }
}

// Used for horizontal relative motion. Dir is -1 or 1 (left or
// right), unit can be "char", "column" (like char, but doesn't
// cross line boundaries), "word" (across next word), or "group" (to
// the start of next group of word or non-word-non-whitespace
// chars). The visually param controls whether, in right-to-left
// text, direction 1 means to move towards the next index in the
// string, or towards the character to the right of the current
// position. The resulting position will have a hitSide=true
// property if it reached the end of the document.
function findPosH(doc, pos, dir, unit, visually) {
  var oldPos = pos
  var origDir = dir
  var lineObj = getLine(doc, pos.line)
  function findNextLine() {
    var l = pos.line + dir
    if (l < doc.first || l >= doc.first + doc.size) { return false }
    pos = new Pos(l, pos.ch, pos.sticky)
    return lineObj = getLine(doc, l)
  }
  function moveOnce(boundToLine) {
    var next
    if (visually) {
      next = moveVisually(doc.cm, lineObj, pos, dir)
    } else {
      next = moveLogically(lineObj, pos, dir)
    }
    if (next == null) {
      if (!boundToLine && findNextLine())
        { pos = endOfLine(visually, doc.cm, lineObj, pos.line, dir) }
      else
        { return false }
    } else {
      pos = next
    }
    return true
  }

  if (unit == "char") {
    moveOnce()
  } else if (unit == "column") {
    moveOnce(true)
  } else if (unit == "word" || unit == "group") {
    var sawType = null, group = unit == "group"
    var helper = doc.cm && doc.cm.getHelper(pos, "wordChars")
    for (var first = true;; first = false) {
      if (dir < 0 && !moveOnce(!first)) { break }
      var cur = lineObj.text.charAt(pos.ch) || "\n"
      var type = isWordChar(cur, helper) ? "w"
        : group && cur == "\n" ? "n"
        : !group || /\s/.test(cur) ? null
        : "p"
      if (group && !first && !type) { type = "s" }
      if (sawType && sawType != type) {
        if (dir < 0) {dir = 1; moveOnce(); pos.sticky = "after"}
        break
      }

      if (type) { sawType = type }
      if (dir > 0 && !moveOnce(!first)) { break }
    }
  }
  var result = skipAtomic(doc, pos, oldPos, origDir, true)
  if (equalCursorPos(oldPos, result)) { result.hitSide = true }
  return result
}

// For relative vertical movement. Dir may be -1 or 1. Unit can be
// "page" or "line". The resulting position will have a hitSide=true
// property if it reached the end of the document.
function findPosV(cm, pos, dir, unit) {
  var doc = cm.doc, x = pos.left, y
  if (unit == "page") {
    var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight)
    var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3)
    y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount

  } else if (unit == "line") {
    y = dir > 0 ? pos.bottom + 3 : pos.top - 3
  }
  var target
  for (;;) {
    target = coordsChar(cm, x, y)
    if (!target.outside) { break }
    if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
    y += dir * 5
  }
  return target
}

// CONTENTEDITABLE INPUT STYLE

var ContentEditableInput = function(cm) {
  this.cm = cm
  this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null
  this.polling = new Delayed()
  this.composing = null
  this.gracePeriod = false
  this.readDOMTimeout = null
};

ContentEditableInput.prototype.init = function (display) {
    var this$1 = this;

  var input = this, cm = input.cm
  var div = input.div = display.lineDiv
  disableBrowserMagic(div, cm.options.spellcheck)

  on(div, "paste", function (e) {
    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
    // IE doesn't fire input events, so we schedule a read for the pasted content in this way
    if (ie_version <= 11) { setTimeout(operation(cm, function () {
      if (!input.pollContent()) { regChange(cm) }
    }), 20) }
  })

  on(div, "compositionstart", function (e) {
    this$1.composing = {data: e.data, done: false}
  })
  on(div, "compositionupdate", function (e) {
    if (!this$1.composing) { this$1.composing = {data: e.data, done: false} }
  })
  on(div, "compositionend", function (e) {
    if (this$1.composing) {
      if (e.data != this$1.composing.data) { this$1.readFromDOMSoon() }
      this$1.composing.done = true
    }
  })

  on(div, "touchstart", function () { return input.forceCompositionEnd(); })

  on(div, "input", function () {
    if (!this$1.composing) { this$1.readFromDOMSoon() }
  })

  function onCopyCut(e) {
    if (signalDOMEvent(cm, e)) { return }
    if (cm.somethingSelected()) {
      setLastCopied({lineWise: false, text: cm.getSelections()})
      if (e.type == "cut") { cm.replaceSelection("", null, "cut") }
    } else if (!cm.options.lineWiseCopyCut) {
      return
    } else {
      var ranges = copyableRanges(cm)
      setLastCopied({lineWise: true, text: ranges.text})
      if (e.type == "cut") {
        cm.operation(function () {
          cm.setSelections(ranges.ranges, 0, sel_dontScroll)
          cm.replaceSelection("", null, "cut")
        })
      }
    }
    if (e.clipboardData) {
      e.clipboardData.clearData()
      var content = lastCopied.text.join("\n")
      // iOS exposes the clipboard API, but seems to discard content inserted into it
      e.clipboardData.setData("Text", content)
      if (e.clipboardData.getData("Text") == content) {
        e.preventDefault()
        return
      }
    }
    // Old-fashioned briefly-focus-a-textarea hack
    var kludge = hiddenTextarea(), te = kludge.firstChild
    cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild)
    te.value = lastCopied.text.join("\n")
    var hadFocus = document.activeElement
    selectInput(te)
    setTimeout(function () {
      cm.display.lineSpace.removeChild(kludge)
      hadFocus.focus()
      if (hadFocus == div) { input.showPrimarySelection() }
    }, 50)
  }
  on(div, "copy", onCopyCut)
  on(div, "cut", onCopyCut)
};

ContentEditableInput.prototype.prepareSelection = function () {
  var result = prepareSelection(this.cm, false)
  result.focus = this.cm.state.focused
  return result
};

ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
  if (!info || !this.cm.display.view.length) { return }
  if (info.focus || takeFocus) { this.showPrimarySelection() }
  this.showMultipleSelections(info)
};

ContentEditableInput.prototype.showPrimarySelection = function () {
  var sel = window.getSelection(), prim = this.cm.doc.sel.primary()
  var curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset)
  var curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset)
  if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
      cmp(minPos(curAnchor, curFocus), prim.from()) == 0 &&
      cmp(maxPos(curAnchor, curFocus), prim.to()) == 0)
    { return }

  var start = posToDOM(this.cm, prim.from())
  var end = posToDOM(this.cm, prim.to())
  if (!start && !end) { return }

  var view = this.cm.display.view
  var old = sel.rangeCount && sel.getRangeAt(0)
  if (!start) {
    start = {node: view[0].measure.map[2], offset: 0}
  } else if (!end) { // FIXME dangerously hacky
    var measure = view[view.length - 1].measure
    var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map
    end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]}
  }

  var rng
  try { rng = range(start.node, start.offset, end.offset, end.node) }
  catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
  if (rng) {
    if (!gecko && this.cm.state.focused) {
      sel.collapse(start.node, start.offset)
      if (!rng.collapsed) {
        sel.removeAllRanges()
        sel.addRange(rng)
      }
    } else {
      sel.removeAllRanges()
      sel.addRange(rng)
    }
    if (old && sel.anchorNode == null) { sel.addRange(old) }
    else if (gecko) { this.startGracePeriod() }
  }
  this.rememberSelection()
};

ContentEditableInput.prototype.startGracePeriod = function () {
    var this$1 = this;

  clearTimeout(this.gracePeriod)
  this.gracePeriod = setTimeout(function () {
    this$1.gracePeriod = false
    if (this$1.selectionChanged())
      { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }) }
  }, 20)
};

ContentEditableInput.prototype.showMultipleSelections = function (info) {
  removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors)
  removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection)
};

ContentEditableInput.prototype.rememberSelection = function () {
  var sel = window.getSelection()
  this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset
  this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset
};

ContentEditableInput.prototype.selectionInEditor = function () {
  var sel = window.getSelection()
  if (!sel.rangeCount) { return false }
  var node = sel.getRangeAt(0).commonAncestorContainer
  return contains(this.div, node)
};

ContentEditableInput.prototype.focus = function () {
  if (this.cm.options.readOnly != "nocursor") {
    if (!this.selectionInEditor())
      { this.showSelection(this.prepareSelection(), true) }
    this.div.focus()
  }
};
ContentEditableInput.prototype.blur = function () { this.div.blur() };
ContentEditableInput.prototype.getField = function () { return this.div };

ContentEditableInput.prototype.supportsTouch = function () { return true };

ContentEditableInput.prototype.receivedFocus = function () {
  var input = this
  if (this.selectionInEditor())
    { this.pollSelection() }
  else
    { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }) }

  function poll() {
    if (input.cm.state.focused) {
      input.pollSelection()
      input.polling.set(input.cm.options.pollInterval, poll)
    }
  }
  this.polling.set(this.cm.options.pollInterval, poll)
};

ContentEditableInput.prototype.selectionChanged = function () {
  var sel = window.getSelection()
  return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
    sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
};

ContentEditableInput.prototype.pollSelection = function () {
  if (!this.composing && this.readDOMTimeout == null && !this.gracePeriod && this.selectionChanged()) {
    var sel = window.getSelection(), cm = this.cm
    this.rememberSelection()
    var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset)
    var head = domToPos(cm, sel.focusNode, sel.focusOffset)
    if (anchor && head) { runInOp(cm, function () {
      setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll)
      if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true }
    }) }
  }
};

ContentEditableInput.prototype.pollContent = function () {
  if (this.readDOMTimeout != null) {
    clearTimeout(this.readDOMTimeout)
    this.readDOMTimeout = null
  }

  var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary()
  var from = sel.from(), to = sel.to()
  if (from.ch == 0 && from.line > cm.firstLine())
    { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length) }
  if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
    { to = Pos(to.line + 1, 0) }
  if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

  var fromIndex, fromLine, fromNode
  if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
    fromLine = lineNo(display.view[0].line)
    fromNode = display.view[0].node
  } else {
    fromLine = lineNo(display.view[fromIndex].line)
    fromNode = display.view[fromIndex - 1].node.nextSibling
  }
  var toIndex = findViewIndex(cm, to.line)
  var toLine, toNode
  if (toIndex == display.view.length - 1) {
    toLine = display.viewTo - 1
    toNode = display.lineDiv.lastChild
  } else {
    toLine = lineNo(display.view[toIndex + 1].line) - 1
    toNode = display.view[toIndex + 1].node.previousSibling
  }

  if (!fromNode) { return false }
  var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine))
  var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length))
  while (newText.length > 1 && oldText.length > 1) {
    if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine-- }
    else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++ }
    else { break }
  }

  var cutFront = 0, cutEnd = 0
  var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length)
  while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
    { ++cutFront }
  var newBot = lst(newText), oldBot = lst(oldText)
  var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
                           oldBot.length - (oldText.length == 1 ? cutFront : 0))
  while (cutEnd < maxCutEnd &&
         newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
    { ++cutEnd }

  newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "")
  newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "")

  var chFrom = Pos(fromLine, cutFront)
  var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0)
  if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
    replaceRange(cm.doc, newText, chFrom, chTo, "+input")
    return true
  }
};

ContentEditableInput.prototype.ensurePolled = function () {
  this.forceCompositionEnd()
};
ContentEditableInput.prototype.reset = function () {
  this.forceCompositionEnd()
};
ContentEditableInput.prototype.forceCompositionEnd = function () {
  if (!this.composing) { return }
  clearTimeout(this.readDOMTimeout)
  this.composing = null
  if (!this.pollContent()) { regChange(this.cm) }
  this.div.blur()
  this.div.focus()
};
ContentEditableInput.prototype.readFromDOMSoon = function () {
    var this$1 = this;

  if (this.readDOMTimeout != null) { return }
  this.readDOMTimeout = setTimeout(function () {
    this$1.readDOMTimeout = null
    if (this$1.composing) {
      if (this$1.composing.done) { this$1.composing = null }
      else { return }
    }
    if (this$1.cm.isReadOnly() || !this$1.pollContent())
      { runInOp(this$1.cm, function () { return regChange(this$1.cm); }) }
  }, 80)
};

ContentEditableInput.prototype.setUneditable = function (node) {
  node.contentEditable = "false"
};

ContentEditableInput.prototype.onKeyPress = function (e) {
  if (e.charCode == 0) { return }
  e.preventDefault()
  if (!this.cm.isReadOnly())
    { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0) }
};

ContentEditableInput.prototype.readOnlyChanged = function (val) {
  this.div.contentEditable = String(val != "nocursor")
};

ContentEditableInput.prototype.onContextMenu = function () {};
ContentEditableInput.prototype.resetPosition = function () {};

ContentEditableInput.prototype.needsContentAttribute = true

function posToDOM(cm, pos) {
  var view = findViewForLine(cm, pos.line)
  if (!view || view.hidden) { return null }
  var line = getLine(cm.doc, pos.line)
  var info = mapFromLineView(view, line, pos.line)

  var order = getOrder(line), side = "left"
  if (order) {
    var partPos = getBidiPartAt(order, pos.ch)
    side = partPos % 2 ? "right" : "left"
  }
  var result = nodeAndOffsetInLineMap(info.map, pos.ch, side)
  result.offset = result.collapse == "right" ? result.end : result.start
  return result
}

function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

function domTextBetween(cm, from, to, fromLine, toLine) {
  var text = "", closing = false, lineSep = cm.doc.lineSeparator()
  function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
  function walk(node) {
    if (node.nodeType == 1) {
      var cmText = node.getAttribute("cm-text")
      if (cmText != null) {
        if (cmText == "") { text += node.textContent.replace(/\u200b/g, "") }
        else { text += cmText }
        return
      }
      var markerID = node.getAttribute("cm-marker"), range
      if (markerID) {
        var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID))
        if (found.length && (range = found[0].find()))
          { text += getBetween(cm.doc, range.from, range.to).join(lineSep) }
        return
      }
      if (node.getAttribute("contenteditable") == "false") { return }
      for (var i = 0; i < node.childNodes.length; i++)
        { walk(node.childNodes[i]) }
      if (/^(pre|div|p)$/i.test(node.nodeName))
        { closing = true }
    } else if (node.nodeType == 3) {
      var val = node.nodeValue
      if (!val) { return }
      if (closing) {
        text += lineSep
        closing = false
      }
      text += val
    }
  }
  for (;;) {
    walk(from)
    if (from == to) { break }
    from = from.nextSibling
  }
  return text
}

function domToPos(cm, node, offset) {
  var lineNode
  if (node == cm.display.lineDiv) {
    lineNode = cm.display.lineDiv.childNodes[offset]
    if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
    node = null; offset = 0
  } else {
    for (lineNode = node;; lineNode = lineNode.parentNode) {
      if (!lineNode || lineNode == cm.display.lineDiv) { return null }
      if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
    }
  }
  for (var i = 0; i < cm.display.view.length; i++) {
    var lineView = cm.display.view[i]
    if (lineView.node == lineNode)
      { return locateNodeInLineView(lineView, node, offset) }
  }
}

function locateNodeInLineView(lineView, node, offset) {
  var wrapper = lineView.text.firstChild, bad = false
  if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
  if (node == wrapper) {
    bad = true
    node = wrapper.childNodes[offset]
    offset = 0
    if (!node) {
      var line = lineView.rest ? lst(lineView.rest) : lineView.line
      return badPos(Pos(lineNo(line), line.text.length), bad)
    }
  }

  var textNode = node.nodeType == 3 ? node : null, topNode = node
  if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
    textNode = node.firstChild
    if (offset) { offset = textNode.nodeValue.length }
  }
  while (topNode.parentNode != wrapper) { topNode = topNode.parentNode }
  var measure = lineView.measure, maps = measure.maps

  function find(textNode, topNode, offset) {
    for (var i = -1; i < (maps ? maps.length : 0); i++) {
      var map = i < 0 ? measure.map : maps[i]
      for (var j = 0; j < map.length; j += 3) {
        var curNode = map[j + 2]
        if (curNode == textNode || curNode == topNode) {
          var line = lineNo(i < 0 ? lineView.line : lineView.rest[i])
          var ch = map[j] + offset
          if (offset < 0 || curNode != textNode) { ch = map[j + (offset ? 1 : 0)] }
          return Pos(line, ch)
        }
      }
    }
  }
  var found = find(textNode, topNode, offset)
  if (found) { return badPos(found, bad) }

  // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
  for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
    found = find(after, after.firstChild, 0)
    if (found)
      { return badPos(Pos(found.line, found.ch - dist), bad) }
    else
      { dist += after.textContent.length }
  }
  for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
    found = find(before, before.firstChild, -1)
    if (found)
      { return badPos(Pos(found.line, found.ch + dist$1), bad) }
    else
      { dist$1 += before.textContent.length }
  }
}

// TEXTAREA INPUT STYLE

var TextareaInput = function(cm) {
  this.cm = cm
  // See input.poll and input.reset
  this.prevInput = ""

  // Flag that indicates whether we expect input to appear real soon
  // now (after some event like 'keypress' or 'input') and are
  // polling intensively.
  this.pollingFast = false
  // Self-resetting timeout for the poller
  this.polling = new Delayed()
  // Tracks when input.reset has punted to just putting a short
  // string into the textarea instead of the full selection.
  this.inaccurateSelection = false
  // Used to work around IE issue with selection being forgotten when focus moves away from textarea
  this.hasSelection = false
  this.composing = null
};

TextareaInput.prototype.init = function (display) {
    var this$1 = this;

  var input = this, cm = this.cm

  // Wraps and hides input textarea
  var div = this.wrapper = hiddenTextarea()
  // The semihidden textarea that is focused when the editor is
  // focused, and receives input.
  var te = this.textarea = div.firstChild
  display.wrapper.insertBefore(div, display.wrapper.firstChild)

  // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
  if (ios) { te.style.width = "0px" }

  on(te, "input", function () {
    if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null }
    input.poll()
  })

  on(te, "paste", function (e) {
    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

    cm.state.pasteIncoming = true
    input.fastPoll()
  })

  function prepareCopyCut(e) {
    if (signalDOMEvent(cm, e)) { return }
    if (cm.somethingSelected()) {
      setLastCopied({lineWise: false, text: cm.getSelections()})
      if (input.inaccurateSelection) {
        input.prevInput = ""
        input.inaccurateSelection = false
        te.value = lastCopied.text.join("\n")
        selectInput(te)
      }
    } else if (!cm.options.lineWiseCopyCut) {
      return
    } else {
      var ranges = copyableRanges(cm)
      setLastCopied({lineWise: true, text: ranges.text})
      if (e.type == "cut") {
        cm.setSelections(ranges.ranges, null, sel_dontScroll)
      } else {
        input.prevInput = ""
        te.value = ranges.text.join("\n")
        selectInput(te)
      }
    }
    if (e.type == "cut") { cm.state.cutIncoming = true }
  }
  on(te, "cut", prepareCopyCut)
  on(te, "copy", prepareCopyCut)

  on(display.scroller, "paste", function (e) {
    if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
    cm.state.pasteIncoming = true
    input.focus()
  })

  // Prevent normal selection in the editor (we handle our own)
  on(display.lineSpace, "selectstart", function (e) {
    if (!eventInWidget(display, e)) { e_preventDefault(e) }
  })

  on(te, "compositionstart", function () {
    var start = cm.getCursor("from")
    if (input.composing) { input.composing.range.clear() }
    input.composing = {
      start: start,
      range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
    }
  })
  on(te, "compositionend", function () {
    if (input.composing) {
      input.poll()
      input.composing.range.clear()
      input.composing = null
    }
  })
};

TextareaInput.prototype.prepareSelection = function () {
  // Redraw the selection and/or cursor
  var cm = this.cm, display = cm.display, doc = cm.doc
  var result = prepareSelection(cm)

  // Move the hidden textarea near the cursor to prevent scrolling artifacts
  if (cm.options.moveInputWithCursor) {
    var headPos = cursorCoords(cm, doc.sel.primary().head, "div")
    var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect()
    result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                        headPos.top + lineOff.top - wrapOff.top))
    result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                         headPos.left + lineOff.left - wrapOff.left))
  }

  return result
};

TextareaInput.prototype.showSelection = function (drawn) {
  var cm = this.cm, display = cm.display
  removeChildrenAndAdd(display.cursorDiv, drawn.cursors)
  removeChildrenAndAdd(display.selectionDiv, drawn.selection)
  if (drawn.teTop != null) {
    this.wrapper.style.top = drawn.teTop + "px"
    this.wrapper.style.left = drawn.teLeft + "px"
  }
};

// Reset the input to correspond to the selection (or to be empty,
// when not typing and nothing is selected)
TextareaInput.prototype.reset = function (typing) {
  if (this.contextMenuPending) { return }
  var minimal, selected, cm = this.cm, doc = cm.doc
  if (cm.somethingSelected()) {
    this.prevInput = ""
    var range = doc.sel.primary()
    minimal = hasCopyEvent &&
      (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000)
    var content = minimal ? "-" : selected || cm.getSelection()
    this.textarea.value = content
    if (cm.state.focused) { selectInput(this.textarea) }
    if (ie && ie_version >= 9) { this.hasSelection = content }
  } else if (!typing) {
    this.prevInput = this.textarea.value = ""
    if (ie && ie_version >= 9) { this.hasSelection = null }
  }
  this.inaccurateSelection = minimal
};

TextareaInput.prototype.getField = function () { return this.textarea };

TextareaInput.prototype.supportsTouch = function () { return false };

TextareaInput.prototype.focus = function () {
  if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
    try { this.textarea.focus() }
    catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
  }
};

TextareaInput.prototype.blur = function () { this.textarea.blur() };

TextareaInput.prototype.resetPosition = function () {
  this.wrapper.style.top = this.wrapper.style.left = 0
};

TextareaInput.prototype.receivedFocus = function () { this.slowPoll() };

// Poll for input changes, using the normal rate of polling. This
// runs as long as the editor is focused.
TextareaInput.prototype.slowPoll = function () {
    var this$1 = this;

  if (this.pollingFast) { return }
  this.polling.set(this.cm.options.pollInterval, function () {
    this$1.poll()
    if (this$1.cm.state.focused) { this$1.slowPoll() }
  })
};

// When an event has just come in that is likely to add or change
// something in the input textarea, we poll faster, to ensure that
// the change appears on the screen quickly.
TextareaInput.prototype.fastPoll = function () {
  var missed = false, input = this
  input.pollingFast = true
  function p() {
    var changed = input.poll()
    if (!changed && !missed) {missed = true; input.polling.set(60, p)}
    else {input.pollingFast = false; input.slowPoll()}
  }
  input.polling.set(20, p)
};

// Read input from the textarea, and update the document to match.
// When something is selected, it is present in the textarea, and
// selected (unless it is huge, in which case a placeholder is
// used). When nothing is selected, the cursor sits after previously
// seen text (can be empty), which is stored in prevInput (we must
// not reset the textarea when typing, because that breaks IME).
TextareaInput.prototype.poll = function () {
    var this$1 = this;

  var cm = this.cm, input = this.textarea, prevInput = this.prevInput
  // Since this is called a *lot*, try to bail out as cheaply as
  // possible when it is clear that nothing happened. hasSelection
  // will be the case when there is a lot of text in the textarea,
  // in which case reading its value would be expensive.
  if (this.contextMenuPending || !cm.state.focused ||
      (hasSelection(input) && !prevInput && !this.composing) ||
      cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
    { return false }

  var text = input.value
  // If nothing changed, bail.
  if (text == prevInput && !cm.somethingSelected()) { return false }
  // Work around nonsensical selection resetting in IE9/10, and
  // inexplicable appearance of private area unicode characters on
  // some key combos in Mac (#2689).
  if (ie && ie_version >= 9 && this.hasSelection === text ||
      mac && /[\uf700-\uf7ff]/.test(text)) {
    cm.display.input.reset()
    return false
  }

  if (cm.doc.sel == cm.display.selForContextMenu) {
    var first = text.charCodeAt(0)
    if (first == 0x200b && !prevInput) { prevInput = "\u200b" }
    if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
  }
  // Find the part of the input that is actually new
  var same = 0, l = Math.min(prevInput.length, text.length)
  while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same }

  runInOp(cm, function () {
    applyTextInput(cm, text.slice(same), prevInput.length - same,
                   null, this$1.composing ? "*compose" : null)

    // Don't leave long text in the textarea, since it makes further polling slow
    if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = "" }
    else { this$1.prevInput = text }

    if (this$1.composing) {
      this$1.composing.range.clear()
      this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
                                         {className: "CodeMirror-composing"})
    }
  })
  return true
};

TextareaInput.prototype.ensurePolled = function () {
  if (this.pollingFast && this.poll()) { this.pollingFast = false }
};

TextareaInput.prototype.onKeyPress = function () {
  if (ie && ie_version >= 9) { this.hasSelection = null }
  this.fastPoll()
};

TextareaInput.prototype.onContextMenu = function (e) {
  var input = this, cm = input.cm, display = cm.display, te = input.textarea
  var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop
  if (!pos || presto) { return } // Opera is difficult.

  // Reset the current text selection only if the click is done outside of the selection
  // and 'resetSelectionOnContextMenu' option is true.
  var reset = cm.options.resetSelectionOnContextMenu
  if (reset && cm.doc.sel.contains(pos) == -1)
    { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll) }

  var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText
  input.wrapper.style.cssText = "position: absolute"
  var wrapperBox = input.wrapper.getBoundingClientRect()
  te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
  var oldScrollY
  if (webkit) { oldScrollY = window.scrollY } // Work around Chrome issue (#2712)
  display.input.focus()
  if (webkit) { window.scrollTo(null, oldScrollY) }
  display.input.reset()
  // Adds "Select all" to context menu in FF
  if (!cm.somethingSelected()) { te.value = input.prevInput = " " }
  input.contextMenuPending = true
  display.selForContextMenu = cm.doc.sel
  clearTimeout(display.detectingSelectAll)

  // Select-all will be greyed out if there's nothing to select, so
  // this adds a zero-width space so that we can later check whether
  // it got selected.
  function prepareSelectAllHack() {
    if (te.selectionStart != null) {
      var selected = cm.somethingSelected()
      var extval = "\u200b" + (selected ? te.value : "")
      te.value = "\u21da" // Used to catch context-menu undo
      te.value = extval
      input.prevInput = selected ? "" : "\u200b"
      te.selectionStart = 1; te.selectionEnd = extval.length
      // Re-set this, in case some other handler touched the
      // selection in the meantime.
      display.selForContextMenu = cm.doc.sel
    }
  }
  function rehide() {
    input.contextMenuPending = false
    input.wrapper.style.cssText = oldWrapperCSS
    te.style.cssText = oldCSS
    if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos) }

    // Try to detect the user choosing select-all
    if (te.selectionStart != null) {
      if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack() }
      var i = 0, poll = function () {
        if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
            te.selectionEnd > 0 && input.prevInput == "\u200b") {
          operation(cm, selectAll)(cm)
        } else if (i++ < 10) {
          display.detectingSelectAll = setTimeout(poll, 500)
        } else {
          display.selForContextMenu = null
          display.input.reset()
        }
      }
      display.detectingSelectAll = setTimeout(poll, 200)
    }
  }

  if (ie && ie_version >= 9) { prepareSelectAllHack() }
  if (captureRightClick) {
    e_stop(e)
    var mouseup = function () {
      off(window, "mouseup", mouseup)
      setTimeout(rehide, 20)
    }
    on(window, "mouseup", mouseup)
  } else {
    setTimeout(rehide, 50)
  }
};

TextareaInput.prototype.readOnlyChanged = function (val) {
  if (!val) { this.reset() }
};

TextareaInput.prototype.setUneditable = function () {};

TextareaInput.prototype.needsContentAttribute = false

function fromTextArea(textarea, options) {
  options = options ? copyObj(options) : {}
  options.value = textarea.value
  if (!options.tabindex && textarea.tabIndex)
    { options.tabindex = textarea.tabIndex }
  if (!options.placeholder && textarea.placeholder)
    { options.placeholder = textarea.placeholder }
  // Set autofocus to true if this textarea is focused, or if it has
  // autofocus and no other element is focused.
  if (options.autofocus == null) {
    var hasFocus = activeElt()
    options.autofocus = hasFocus == textarea ||
      textarea.getAttribute("autofocus") != null && hasFocus == document.body
  }

  function save() {textarea.value = cm.getValue()}

  var realSubmit
  if (textarea.form) {
    on(textarea.form, "submit", save)
    // Deplorable hack to make the submit method do the right thing.
    if (!options.leaveSubmitMethodAlone) {
      var form = textarea.form
      realSubmit = form.submit
      try {
        var wrappedSubmit = form.submit = function () {
          save()
          form.submit = realSubmit
          form.submit()
          form.submit = wrappedSubmit
        }
      } catch(e) {}
    }
  }

  options.finishInit = function (cm) {
    cm.save = save
    cm.getTextArea = function () { return textarea; }
    cm.toTextArea = function () {
      cm.toTextArea = isNaN // Prevent this from being ran twice
      save()
      textarea.parentNode.removeChild(cm.getWrapperElement())
      textarea.style.display = ""
      if (textarea.form) {
        off(textarea.form, "submit", save)
        if (typeof textarea.form.submit == "function")
          { textarea.form.submit = realSubmit }
      }
    }
  }

  textarea.style.display = "none"
  var cm = CodeMirror(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
    options)
  return cm
}

function addLegacyProps(CodeMirror) {
  CodeMirror.off = off
  CodeMirror.on = on
  CodeMirror.wheelEventPixels = wheelEventPixels
  CodeMirror.Doc = Doc
  CodeMirror.splitLines = splitLinesAuto
  CodeMirror.countColumn = countColumn
  CodeMirror.findColumn = findColumn
  CodeMirror.isWordChar = isWordCharBasic
  CodeMirror.Pass = Pass
  CodeMirror.signal = signal
  CodeMirror.Line = Line
  CodeMirror.changeEnd = changeEnd
  CodeMirror.scrollbarModel = scrollbarModel
  CodeMirror.Pos = Pos
  CodeMirror.cmpPos = cmp
  CodeMirror.modes = modes
  CodeMirror.mimeModes = mimeModes
  CodeMirror.resolveMode = resolveMode
  CodeMirror.getMode = getMode
  CodeMirror.modeExtensions = modeExtensions
  CodeMirror.extendMode = extendMode
  CodeMirror.copyState = copyState
  CodeMirror.startState = startState
  CodeMirror.innerMode = innerMode
  CodeMirror.commands = commands
  CodeMirror.keyMap = keyMap
  CodeMirror.keyName = keyName
  CodeMirror.isModifierKey = isModifierKey
  CodeMirror.lookupKey = lookupKey
  CodeMirror.normalizeKeyMap = normalizeKeyMap
  CodeMirror.StringStream = StringStream
  CodeMirror.SharedTextMarker = SharedTextMarker
  CodeMirror.TextMarker = TextMarker
  CodeMirror.LineWidget = LineWidget
  CodeMirror.e_preventDefault = e_preventDefault
  CodeMirror.e_stopPropagation = e_stopPropagation
  CodeMirror.e_stop = e_stop
  CodeMirror.addClass = addClass
  CodeMirror.contains = contains
  CodeMirror.rmClass = rmClass
  CodeMirror.keyNames = keyNames
}

// EDITOR CONSTRUCTOR

defineOptions(CodeMirror)

addEditorMethods(CodeMirror)

// Set up methods on CodeMirror's prototype to redirect to the editor's document.
var dontDelegate = "iter insert remove copy getEditor constructor".split(" ")
for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
  { CodeMirror.prototype[prop] = (function(method) {
    return function() {return method.apply(this.doc, arguments)}
  })(Doc.prototype[prop]) } }

eventMixin(Doc)

// INPUT HANDLING

CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput}

// MODE DEFINITION AND QUERYING

// Extra arguments are stored as the mode's dependencies, which is
// used by (legacy) mechanisms like loadmode.js to automatically
// load a mode. (Preferred mechanism is the require/define calls.)
CodeMirror.defineMode = function(name/*, mode, …*/) {
  if (!CodeMirror.defaults.mode && name != "null") { CodeMirror.defaults.mode = name }
  defineMode.apply(this, arguments)
}

CodeMirror.defineMIME = defineMIME

// Minimal default mode.
CodeMirror.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); })
CodeMirror.defineMIME("text/plain", "null")

// EXTENSIONS

CodeMirror.defineExtension = function (name, func) {
  CodeMirror.prototype[name] = func
}
CodeMirror.defineDocExtension = function (name, func) {
  Doc.prototype[name] = func
}

CodeMirror.fromTextArea = fromTextArea

addLegacyProps(CodeMirror)

CodeMirror.version = "5.24.2"

return CodeMirror;

})));// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

function expressionAllowed(stream, state, backUp) {
  return /^(?:operator|sof|keyword c|case|new|export|default|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
    (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
}

CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var statementIndent = parserConfig.statementIndent;
  var jsonldMode = parserConfig.jsonld;
  var jsonMode = parserConfig.json || jsonldMode;
  var isTS = parserConfig.typescript;
  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

    var jsKeywords = {
      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": C, "break": C, "continue": C, "new": kw("new"), "delete": C, "throw": C, "debugger": C,
      "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
      "await": C, "async": kw("async")
    };

    // Extend the 'normal' keywords with the TypeScript language extensions
    if (isTS) {
      var type = {type: "variable", style: "variable-3"};
      var tsKeywords = {
        // object-like things
        "interface": kw("class"),
        "implements": C,
        "namespace": C,
        "module": kw("module"),
        "enum": kw("module"),
        "type": kw("type"),

        // scope modifiers
        "public": kw("modifier"),
        "private": kw("modifier"),
        "protected": kw("modifier"),
        "abstract": kw("modifier"),

        // operators
        "as": operator,

        // types
        "string": type, "number": type, "boolean": type, "any": type
      };

      for (var attr in tsKeywords) {
        jsKeywords[attr] = tsKeywords[attr];
      }
    }

    return jsKeywords;
  }();

  var isOperatorChar = /[+\-*&%=<>!?|~^]/;
  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

  function readRegexp(stream) {
    var escaped = false, next, inSet = false;
    while ((next = stream.next()) != null) {
      if (!escaped) {
        if (next == "/" && !inSet) return;
        if (next == "[") inSet = true;
        else if (inSet && next == "]") inSet = false;
      }
      escaped = !escaped && next == "\\";
    }
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }
  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "." && stream.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
      return ret("number", "number");
    } else if (ch == "." && stream.match("..")) {
      return ret("spread", "meta");
    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
      return ret(ch);
    } else if (ch == "=" && stream.eat(">")) {
      return ret("=>", "operator");
    } else if (ch == "0" && stream.eat(/x/i)) {
      stream.eatWhile(/[\da-f]/i);
      return ret("number", "number");
    } else if (ch == "0" && stream.eat(/o/i)) {
      stream.eatWhile(/[0-7]/i);
      return ret("number", "number");
    } else if (ch == "0" && stream.eat(/b/i)) {
      stream.eatWhile(/[01]/i);
      return ret("number", "number");
    } else if (/\d/.test(ch)) {
      stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
      return ret("number", "number");
    } else if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      } else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      } else if (expressionAllowed(stream, state, 1)) {
        readRegexp(stream);
        stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);
        return ret("regexp", "string-2");
      } else {
        stream.eatWhile(isOperatorChar);
        return ret("operator", "operator", stream.current());
      }
    } else if (ch == "`") {
      state.tokenize = tokenQuasi;
      return tokenQuasi(stream, state);
    } else if (ch == "#") {
      stream.skipToEnd();
      return ret("error", "error");
    } else if (isOperatorChar.test(ch)) {
      if (ch != ">" || !state.lexical || state.lexical.type != ">")
        stream.eatWhile(isOperatorChar);
      return ret("operator", "operator", stream.current());
    } else if (wordRE.test(ch)) {
      stream.eatWhile(wordRE);
      var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
      return (known && state.lastType != ".") ? ret(known.type, known.style, word) :
                     ret("variable", "variable", word);
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next;
      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
        state.tokenize = tokenBase;
        return ret("jsonld-keyword", "meta");
      }
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) break;
        escaped = !escaped && next == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenQuasi(stream, state) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
        state.tokenize = tokenBase;
        break;
      }
      escaped = !escaped && next == "\\";
    }
    return ret("quasi", "string-2", stream.current());
  }

  var brackets = "([{}])";
  // This is a crude lookahead trick to try and notice that we're
  // parsing the argument patterns for a fat-arrow function before we
  // actually hit the arrow token. It only works if the arrow is on
  // the same line as the arguments and there's no strange noise
  // (comments) in between. Fallback is to only notice when we hit the
  // arrow, and not declare the arguments as locals for the arrow
  // body.
  function findFatArrow(stream, state) {
    if (state.fatArrowAt) state.fatArrowAt = null;
    var arrow = stream.string.indexOf("=>", stream.start);
    if (arrow < 0) return;

    if (isTS) { // Try to skip TypeScript return type declarations after the arguments
      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow))
      if (m) arrow = m.index
    }

    var depth = 0, sawSomething = false;
    for (var pos = arrow - 1; pos >= 0; --pos) {
      var ch = stream.string.charAt(pos);
      var bracket = brackets.indexOf(ch);
      if (bracket >= 0 && bracket < 3) {
        if (!depth) { ++pos; break; }
        if (--depth == 0) { if (ch == "(") sawSomething = true; break; }
      } else if (bracket >= 3 && bracket < 6) {
        ++depth;
      } else if (wordRE.test(ch)) {
        sawSomething = true;
      } else if (/["'\/]/.test(ch)) {
        return;
      } else if (sawSomething && !depth) {
        ++pos;
        break;
      }
    }
    if (sawSomething && !depth) state.fatArrowAt = pos;
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
    for (var cx = state.context; cx; cx = cx.prev) {
      for (var v = cx.vars; v; v = v.next)
        if (v.name == varname) return true;
    }
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function register(varname) {
    function inList(list) {
      for (var v = list; v; v = v.next)
        if (v.name == varname) return true;
      return false;
    }
    var state = cx.state;
    cx.marked = "def";
    if (state.context) {
      if (inList(state.localVars)) return;
      state.localVars = {name: varname, next: state.localVars};
    } else {
      if (inList(state.globalVars)) return;
      if (parserConfig.globalVars)
        state.globalVars = {name: varname, next: state.globalVars};
    }
  }

  // Combinators

  var defaultVars = {name: "this", next: {name: "arguments"}};
  function pushcontext() {
    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
    cx.state.localVars = defaultVars;
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars;
    cx.state.context = cx.state.context.prev;
  }
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state, indent = state.indented;
      if (state.lexical.type == "stat") indent = state.lexical.indented;
      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
        indent = outer.indented;
      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    function exp(type) {
      if (type == wanted) return cont();
      else if (wanted == ";") return pass();
      else return cont(exp);
    };
    return exp;
  }

  function statement(type, value) {
    if (type == "var") return cont(pushlex("vardef", value.length), vardef, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "{") return cont(pushlex("}"), block, poplex);
    if (type == ";") return cont();
    if (type == "if") {
      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
        cx.state.cc.pop()();
      return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
    }
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
    if (type == "variable") return cont(pushlex("stat"), maybelabel);
    if (type == "switch") return cont(pushlex("form"), parenExpr, pushlex("}", "switch"), expect("{"),
                                      block, poplex, poplex);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
                                     statement, poplex, popcontext);
    if (type == "class") return cont(pushlex("form"), className, poplex);
    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
    if (type == "module") return cont(pushlex("form"), pattern, pushlex("}"), expect("{"), block, poplex, poplex)
    if (type == "type") return cont(typeexpr, expect("operator"), typeexpr, expect(";"));
    if (type == "async") return cont(statement)
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function expression(type) {
    return expressionInner(type, false);
  }
  function expressionNoComma(type) {
    return expressionInner(type, true);
  }
  function parenExpr(type) {
    if (type != "(") return pass()
    return cont(pushlex(")"), expression, expect(")"), poplex)
  }
  function expressionInner(type, noComma) {
    if (cx.state.fatArrowAt == cx.stream.start) {
      var body = noComma ? arrowBodyNoComma : arrowBody;
      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(pattern, ")"), poplex, expect("=>"), body, popcontext);
      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
    }

    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
    if (type == "function") return cont(functiondef, maybeop);
    if (type == "class") return cont(pushlex("form"), classExpression, poplex);
    if (type == "keyword c" || type == "async") return cont(noComma ? maybeexpressionNoComma : maybeexpression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
    if (type == "quasi") return pass(quasi, maybeop);
    if (type == "new") return cont(maybeTarget(noComma));
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }
  function maybeexpressionNoComma(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expressionNoComma);
  }

  function maybeoperatorComma(type, value) {
    if (type == ",") return cont(expression);
    return maybeoperatorNoComma(type, value, false);
  }
  function maybeoperatorNoComma(type, value, noComma) {
    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
    var expr = noComma == false ? expression : expressionNoComma;
    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
    if (type == "operator") {
      if (/\+\+|--/.test(value)) return cont(me);
      if (value == "?") return cont(expression, expect(":"), expr);
      return cont(expr);
    }
    if (type == "quasi") { return pass(quasi, me); }
    if (type == ";") return;
    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
    if (type == ".") return cont(property, me);
    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
  }
  function quasi(type, value) {
    if (type != "quasi") return pass();
    if (value.slice(value.length - 2) != "${") return cont(quasi);
    return cont(expression, continueQuasi);
  }
  function continueQuasi(type) {
    if (type == "}") {
      cx.marked = "string-2";
      cx.state.tokenize = tokenQuasi;
      return cont(quasi);
    }
  }
  function arrowBody(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expression);
  }
  function arrowBodyNoComma(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expressionNoComma);
  }
  function maybeTarget(noComma) {
    return function(type) {
      if (type == ".") return cont(noComma ? targetNoComma : target);
      else return pass(noComma ? expressionNoComma : expression);
    };
  }
  function target(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
  }
  function targetNoComma(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperatorComma, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type, value) {
    if (type == "async") {
      cx.marked = "property";
      return cont(objprop);
    } else if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      if (value == "get" || value == "set") return cont(getterSetter);
      return cont(afterprop);
    } else if (type == "number" || type == "string") {
      cx.marked = jsonldMode ? "property" : (cx.style + " property");
      return cont(afterprop);
    } else if (type == "jsonld-keyword") {
      return cont(afterprop);
    } else if (type == "modifier") {
      return cont(objprop)
    } else if (type == "[") {
      return cont(expression, expect("]"), afterprop);
    } else if (type == "spread") {
      return cont(expression);
    } else if (type == ":") {
      return pass(afterprop)
    }
  }
  function getterSetter(type) {
    if (type != "variable") return pass(afterprop);
    cx.marked = "property";
    return cont(functiondef);
  }
  function afterprop(type) {
    if (type == ":") return cont(expressionNoComma);
    if (type == "(") return pass(functiondef);
  }
  function commasep(what, end, sep) {
    function proceed(type, value) {
      if (sep ? sep.indexOf(type) > -1 : type == ",") {
        var lex = cx.state.lexical;
        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
        return cont(function(type, value) {
          if (type == end || value == end) return pass()
          return pass(what)
        }, proceed);
      }
      if (type == end || value == end) return cont();
      return cont(expect(end));
    }
    return function(type, value) {
      if (type == end || value == end) return cont();
      return pass(what, proceed);
    };
  }
  function contCommasep(what, end, info) {
    for (var i = 3; i < arguments.length; i++)
      cx.cc.push(arguments[i]);
    return cont(pushlex(end, info), commasep(what, end), poplex);
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function maybetype(type, value) {
    if (isTS) {
      if (type == ":") return cont(typeexpr);
      if (value == "?") return cont(maybetype);
    }
  }
  function typeexpr(type) {
    if (type == "variable") {cx.marked = "variable-3"; return cont(afterType);}
    if (type == "string" || type == "number" || type == "atom") return cont(afterType);
    if (type == "{") return cont(pushlex("}"), commasep(typeprop, "}", ",;"), poplex)
    if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType)
  }
  function maybeReturnType(type) {
    if (type == "=>") return cont(typeexpr)
  }
  function typeprop(type, value) {
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property"
      return cont(typeprop)
    } else if (value == "?") {
      return cont(typeprop)
    } else if (type == ":") {
      return cont(typeexpr)
    }
  }
  function typearg(type) {
    if (type == "variable") return cont(typearg)
    else if (type == ":") return cont(typeexpr)
  }
  function afterType(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
    if (value == "|" || type == ".") return cont(typeexpr)
    if (type == "[") return cont(expect("]"), afterType)
  }
  function vardef() {
    return pass(pattern, maybetype, maybeAssign, vardefCont);
  }
  function pattern(type, value) {
    if (type == "modifier") return cont(pattern)
    if (type == "variable") { register(value); return cont(); }
    if (type == "spread") return cont(pattern);
    if (type == "[") return contCommasep(pattern, "]");
    if (type == "{") return contCommasep(proppattern, "}");
  }
  function proppattern(type, value) {
    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
      register(value);
      return cont(maybeAssign);
    }
    if (type == "variable") cx.marked = "property";
    if (type == "spread") return cont(pattern);
    if (type == "}") return pass();
    return cont(expect(":"), pattern, maybeAssign);
  }
  function maybeAssign(_type, value) {
    if (value == "=") return cont(expressionNoComma);
  }
  function vardefCont(type) {
    if (type == ",") return cont(vardef);
  }
  function maybeelse(type, value) {
    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
  }
  function forspec(type) {
    if (type == "(") return cont(pushlex(")"), forspec1, expect(")"), poplex);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef, expect(";"), forspec2);
    if (type == ";") return cont(forspec2);
    if (type == "variable") return cont(formaybeinof);
    return pass(expression, expect(";"), forspec2);
  }
  function formaybeinof(_type, value) {
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
    return cont(maybeoperatorComma, forspec2);
  }
  function forspec2(type, value) {
    if (type == ";") return cont(forspec3);
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
    return pass(expression, expect(";"), forspec3);
  }
  function forspec3(type) {
    if (type != ")") cont(expression);
  }
  function functiondef(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, maybetype, statement, popcontext);
  }
  function funarg(type) {
    if (type == "spread") return cont(funarg);
    return pass(pattern, maybetype, maybeAssign);
  }
  function classExpression(type, value) {
    // Class expressions may have an optional name.
    if (type == "variable") return className(type, value);
    return classNameAfter(type, value);
  }
  function className(type, value) {
    if (type == "variable") {register(value); return cont(classNameAfter);}
  }
  function classNameAfter(type, value) {
    if (value == "extends" || value == "implements" || (isTS && type == ","))
      return cont(isTS ? typeexpr : expression, classNameAfter);
    if (type == "{") return cont(pushlex("}"), classBody, poplex);
  }
  function classBody(type, value) {
    if (type == "variable" || cx.style == "keyword") {
      if ((value == "async" || value == "static" || value == "get" || value == "set" ||
           (isTS && (value == "public" || value == "private" || value == "protected" || value == "readonly" || value == "abstract"))) &&
          cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false)) {
        cx.marked = "keyword";
        return cont(classBody);
      }
      cx.marked = "property";
      return cont(isTS ? classfield : functiondef, classBody);
    }
    if (type == "[")
      return cont(expression, expect("]"), isTS ? classfield : functiondef, classBody)
    if (value == "*") {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (type == ";") return cont(classBody);
    if (type == "}") return cont();
  }
  function classfield(type, value) {
    if (value == "?") return cont(classfield)
    if (type == ":") return cont(typeexpr, maybeAssign)
    return pass(functiondef)
  }
  function afterExport(type, value) {
    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
    if (type == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
    return pass(statement);
  }
  function exportField(type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(expect("variable")); }
    if (type == "variable") return pass(expressionNoComma, exportField);
  }
  function afterImport(type) {
    if (type == "string") return cont();
    return pass(importSpec, maybeMoreImports, maybeFrom);
  }
  function importSpec(type, value) {
    if (type == "{") return contCommasep(importSpec, "}");
    if (type == "variable") register(value);
    if (value == "*") cx.marked = "keyword";
    return cont(maybeAs);
  }
  function maybeMoreImports(type) {
    if (type == ",") return cont(importSpec, maybeMoreImports)
  }
  function maybeAs(_type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
  }
  function maybeFrom(_type, value) {
    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
  }
  function arrayLiteral(type) {
    if (type == "]") return cont();
    return pass(commasep(expressionNoComma, "]"));
  }

  function isContinuedStatement(state, textAfter) {
    return state.lastType == "operator" || state.lastType == "," ||
      isOperatorChar.test(textAfter.charAt(0)) ||
      /[,.]/.test(textAfter.charAt(0));
  }

  // Interface

  return {
    startState: function(basecolumn) {
      var state = {
        tokenize: tokenBase,
        lastType: "sof",
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && {vars: parserConfig.localVars},
        indented: basecolumn || 0
      };
      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
        state.globalVars = parserConfig.globalVars;
      return state;
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
        findFatArrow(stream, state);
      }
      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize == tokenComment) return CodeMirror.Pass;
      if (state.tokenize != tokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top
      // Kludge to prevent 'maybelse' from blocking lexical scope pops
      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
        var c = state.cc[i];
        if (c == poplex) lexical = lexical.prev;
        else if (c != maybeelse) break;
      }
      while ((lexical.type == "stat" || lexical.type == "form") &&
             (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
                                   (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
                                   !/^[,\.=+\-*:?[\(]/.test(textAfter))))
        lexical = lexical.prev;
      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
        lexical = lexical.prev;
      var type = lexical.type, closing = firstChar == type;

      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info + 1 : 0);
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "form") return lexical.indented + indentUnit;
      else if (type == "stat")
        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: jsonMode ? null : "/*",
    blockCommentEnd: jsonMode ? null : "*/",
    lineComment: jsonMode ? null : "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``",

    helperType: jsonMode ? "json" : "javascript",
    jsonldMode: jsonldMode,
    jsonMode: jsonMode,

    expressionAllowed: expressionAllowed,
    skipExpression: function(state) {
      var top = state.cc[state.cc.length - 1]
      if (top == expression || top == expressionNoComma) state.cc.pop()
    }
  };
});

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("text/ecmascript", "javascript");
CodeMirror.defineMIME("application/javascript", "javascript");
CodeMirror.defineMIME("application/x-javascript", "javascript");
CodeMirror.defineMIME("application/ecmascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

});
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("css", function(config, parserConfig) {
  var inline = parserConfig.inline
  if (!parserConfig.propertyKeywords) parserConfig = CodeMirror.resolveMode("text/css");

  var indentUnit = config.indentUnit,
      tokenHooks = parserConfig.tokenHooks,
      documentTypes = parserConfig.documentTypes || {},
      mediaTypes = parserConfig.mediaTypes || {},
      mediaFeatures = parserConfig.mediaFeatures || {},
      mediaValueKeywords = parserConfig.mediaValueKeywords || {},
      propertyKeywords = parserConfig.propertyKeywords || {},
      nonStandardPropertyKeywords = parserConfig.nonStandardPropertyKeywords || {},
      fontProperties = parserConfig.fontProperties || {},
      counterDescriptors = parserConfig.counterDescriptors || {},
      colorKeywords = parserConfig.colorKeywords || {},
      valueKeywords = parserConfig.valueKeywords || {},
      allowNested = parserConfig.allowNested,
      lineComment = parserConfig.lineComment,
      supportsAtComponent = parserConfig.supportsAtComponent === true;

  var type, override;
  function ret(style, tp) { type = tp; return style; }

  // Tokenizers

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (tokenHooks[ch]) {
      var result = tokenHooks[ch](stream, state);
      if (result !== false) return result;
    }
    if (ch == "@") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("def", stream.current());
    } else if (ch == "=" || (ch == "~" || ch == "|") && stream.eat("=")) {
      return ret(null, "compare");
    } else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "#") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("atom", "hash");
    } else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    } else if (/\d/.test(ch) || ch == "." && stream.eat(/\d/)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    } else if (ch === "-") {
      if (/[\d.]/.test(stream.peek())) {
        stream.eatWhile(/[\w.%]/);
        return ret("number", "unit");
      } else if (stream.match(/^-[\w\\\-]+/)) {
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ret("variable-2", "variable-definition");
        return ret("variable-2", "variable");
      } else if (stream.match(/^\w+-/)) {
        return ret("meta", "meta");
      }
    } else if (/[,+>*\/]/.test(ch)) {
      return ret(null, "select-op");
    } else if (ch == "." && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) {
      return ret("qualifier", "qualifier");
    } else if (/[:;{}\[\]\(\)]/.test(ch)) {
      return ret(null, ch);
    } else if ((ch == "u" && stream.match(/rl(-prefix)?\(/)) ||
               (ch == "d" && stream.match("omain(")) ||
               (ch == "r" && stream.match("egexp("))) {
      stream.backUp(1);
      state.tokenize = tokenParenthesized;
      return ret("property", "word");
    } else if (/[\w\\\-]/.test(ch)) {
      stream.eatWhile(/[\w\\\-]/);
      return ret("property", "word");
    } else {
      return ret(null, null);
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped) {
          if (quote == ")") stream.backUp(1);
          break;
        }
        escaped = !escaped && ch == "\\";
      }
      if (ch == quote || !escaped && quote != ")") state.tokenize = null;
      return ret("string", "string");
    };
  }

  function tokenParenthesized(stream, state) {
    stream.next(); // Must be '('
    if (!stream.match(/\s*[\"\')]/, false))
      state.tokenize = tokenString(")");
    else
      state.tokenize = null;
    return ret(null, "(");
  }

  // Context management

  function Context(type, indent, prev) {
    this.type = type;
    this.indent = indent;
    this.prev = prev;
  }

  function pushContext(state, stream, type, indent) {
    state.context = new Context(type, stream.indentation() + (indent === false ? 0 : indentUnit), state.context);
    return type;
  }

  function popContext(state) {
    if (state.context.prev)
      state.context = state.context.prev;
    return state.context.type;
  }

  function pass(type, stream, state) {
    return states[state.context.type](type, stream, state);
  }
  function popAndPass(type, stream, state, n) {
    for (var i = n || 1; i > 0; i--)
      state.context = state.context.prev;
    return pass(type, stream, state);
  }

  // Parser

  function wordAsValue(stream) {
    var word = stream.current().toLowerCase();
    if (valueKeywords.hasOwnProperty(word))
      override = "atom";
    else if (colorKeywords.hasOwnProperty(word))
      override = "keyword";
    else
      override = "variable";
  }

  var states = {};

  states.top = function(type, stream, state) {
    if (type == "{") {
      return pushContext(state, stream, "block");
    } else if (type == "}" && state.context.prev) {
      return popContext(state);
    } else if (supportsAtComponent && /@component/.test(type)) {
      return pushContext(state, stream, "atComponentBlock");
    } else if (/^@(-moz-)?document$/.test(type)) {
      return pushContext(state, stream, "documentTypes");
    } else if (/^@(media|supports|(-moz-)?document|import)$/.test(type)) {
      return pushContext(state, stream, "atBlock");
    } else if (/^@(font-face|counter-style)/.test(type)) {
      state.stateArg = type;
      return "restricted_atBlock_before";
    } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(type)) {
      return "keyframes";
    } else if (type && type.charAt(0) == "@") {
      return pushContext(state, stream, "at");
    } else if (type == "hash") {
      override = "builtin";
    } else if (type == "word") {
      override = "tag";
    } else if (type == "variable-definition") {
      return "maybeprop";
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    } else if (type == ":") {
      return "pseudo";
    } else if (allowNested && type == "(") {
      return pushContext(state, stream, "parens");
    }
    return state.context.type;
  };

  states.block = function(type, stream, state) {
    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (propertyKeywords.hasOwnProperty(word)) {
        override = "property";
        return "maybeprop";
      } else if (nonStandardPropertyKeywords.hasOwnProperty(word)) {
        override = "string-2";
        return "maybeprop";
      } else if (allowNested) {
        override = stream.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
        return "block";
      } else {
        override += " error";
        return "maybeprop";
      }
    } else if (type == "meta") {
      return "block";
    } else if (!allowNested && (type == "hash" || type == "qualifier")) {
      override = "error";
      return "block";
    } else {
      return states.top(type, stream, state);
    }
  };

  states.maybeprop = function(type, stream, state) {
    if (type == ":") return pushContext(state, stream, "prop");
    return pass(type, stream, state);
  };

  states.prop = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" && allowNested) return pushContext(state, stream, "propBlock");
    if (type == "}" || type == "{") return popAndPass(type, stream, state);
    if (type == "(") return pushContext(state, stream, "parens");

    if (type == "hash" && !/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(stream.current())) {
      override += " error";
    } else if (type == "word") {
      wordAsValue(stream);
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    }
    return "prop";
  };

  states.propBlock = function(type, _stream, state) {
    if (type == "}") return popContext(state);
    if (type == "word") { override = "property"; return "maybeprop"; }
    return state.context.type;
  };

  states.parens = function(type, stream, state) {
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == ")") return popContext(state);
    if (type == "(") return pushContext(state, stream, "parens");
    if (type == "interpolation") return pushContext(state, stream, "interpolation");
    if (type == "word") wordAsValue(stream);
    return "parens";
  };

  states.pseudo = function(type, stream, state) {
    if (type == "meta") return "pseudo";

    if (type == "word") {
      override = "variable-3";
      return state.context.type;
    }
    return pass(type, stream, state);
  };

  states.documentTypes = function(type, stream, state) {
    if (type == "word" && documentTypes.hasOwnProperty(stream.current())) {
      override = "tag";
      return state.context.type;
    } else {
      return states.atBlock(type, stream, state);
    }
  };

  states.atBlock = function(type, stream, state) {
    if (type == "(") return pushContext(state, stream, "atBlock_parens");
    if (type == "}" || type == ";") return popAndPass(type, stream, state);
    if (type == "{") return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top");

    if (type == "interpolation") return pushContext(state, stream, "interpolation");

    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (word == "only" || word == "not" || word == "and" || word == "or")
        override = "keyword";
      else if (mediaTypes.hasOwnProperty(word))
        override = "attribute";
      else if (mediaFeatures.hasOwnProperty(word))
        override = "property";
      else if (mediaValueKeywords.hasOwnProperty(word))
        override = "keyword";
      else if (propertyKeywords.hasOwnProperty(word))
        override = "property";
      else if (nonStandardPropertyKeywords.hasOwnProperty(word))
        override = "string-2";
      else if (valueKeywords.hasOwnProperty(word))
        override = "atom";
      else if (colorKeywords.hasOwnProperty(word))
        override = "keyword";
      else
        override = "error";
    }
    return state.context.type;
  };

  states.atComponentBlock = function(type, stream, state) {
    if (type == "}")
      return popAndPass(type, stream, state);
    if (type == "{")
      return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top", false);
    if (type == "word")
      override = "error";
    return state.context.type;
  };

  states.atBlock_parens = function(type, stream, state) {
    if (type == ")") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state, 2);
    return states.atBlock(type, stream, state);
  };

  states.restricted_atBlock_before = function(type, stream, state) {
    if (type == "{")
      return pushContext(state, stream, "restricted_atBlock");
    if (type == "word" && state.stateArg == "@counter-style") {
      override = "variable";
      return "restricted_atBlock_before";
    }
    return pass(type, stream, state);
  };

  states.restricted_atBlock = function(type, stream, state) {
    if (type == "}") {
      state.stateArg = null;
      return popContext(state);
    }
    if (type == "word") {
      if ((state.stateArg == "@font-face" && !fontProperties.hasOwnProperty(stream.current().toLowerCase())) ||
          (state.stateArg == "@counter-style" && !counterDescriptors.hasOwnProperty(stream.current().toLowerCase())))
        override = "error";
      else
        override = "property";
      return "maybeprop";
    }
    return "restricted_atBlock";
  };

  states.keyframes = function(type, stream, state) {
    if (type == "word") { override = "variable"; return "keyframes"; }
    if (type == "{") return pushContext(state, stream, "top");
    return pass(type, stream, state);
  };

  states.at = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == "word") override = "tag";
    else if (type == "hash") override = "builtin";
    return "at";
  };

  states.interpolation = function(type, stream, state) {
    if (type == "}") return popContext(state);
    if (type == "{" || type == ";") return popAndPass(type, stream, state);
    if (type == "word") override = "variable";
    else if (type != "variable" && type != "(" && type != ")") override = "error";
    return "interpolation";
  };

  return {
    startState: function(base) {
      return {tokenize: null,
              state: inline ? "block" : "top",
              stateArg: null,
              context: new Context(inline ? "block" : "top", base || 0, null)};
    },

    token: function(stream, state) {
      if (!state.tokenize && stream.eatSpace()) return null;
      var style = (state.tokenize || tokenBase)(stream, state);
      if (style && typeof style == "object") {
        type = style[1];
        style = style[0];
      }
      override = style;
      state.state = states[state.state](type, stream, state);
      return override;
    },

    indent: function(state, textAfter) {
      var cx = state.context, ch = textAfter && textAfter.charAt(0);
      var indent = cx.indent;
      if (cx.type == "prop" && (ch == "}" || ch == ")")) cx = cx.prev;
      if (cx.prev) {
        if (ch == "}" && (cx.type == "block" || cx.type == "top" ||
                          cx.type == "interpolation" || cx.type == "restricted_atBlock")) {
          // Resume indentation from parent context.
          cx = cx.prev;
          indent = cx.indent;
        } else if (ch == ")" && (cx.type == "parens" || cx.type == "atBlock_parens") ||
            ch == "{" && (cx.type == "at" || cx.type == "atBlock")) {
          // Dedent relative to current context.
          indent = Math.max(0, cx.indent - indentUnit);
          cx = cx.prev;
        }
      }
      return indent;
    },

    electricChars: "}",
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    lineComment: lineComment,
    fold: "brace"
  };
});

  function keySet(array) {
    var keys = {};
    for (var i = 0; i < array.length; ++i) {
      keys[array[i].toLowerCase()] = true;
    }
    return keys;
  }

  var documentTypes_ = [
    "domain", "regexp", "url", "url-prefix"
  ], documentTypes = keySet(documentTypes_);

  var mediaTypes_ = [
    "all", "aural", "braille", "handheld", "print", "projection", "screen",
    "tty", "tv", "embossed"
  ], mediaTypes = keySet(mediaTypes_);

  var mediaFeatures_ = [
    "width", "min-width", "max-width", "height", "min-height", "max-height",
    "device-width", "min-device-width", "max-device-width", "device-height",
    "min-device-height", "max-device-height", "aspect-ratio",
    "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio",
    "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color",
    "max-color", "color-index", "min-color-index", "max-color-index",
    "monochrome", "min-monochrome", "max-monochrome", "resolution",
    "min-resolution", "max-resolution", "scan", "grid", "orientation",
    "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio",
    "pointer", "any-pointer", "hover", "any-hover"
  ], mediaFeatures = keySet(mediaFeatures_);

  var mediaValueKeywords_ = [
    "landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover",
    "interlace", "progressive"
  ], mediaValueKeywords = keySet(mediaValueKeywords_);

  var propertyKeywords_ = [
    "align-content", "align-items", "align-self", "alignment-adjust",
    "alignment-baseline", "anchor-point", "animation", "animation-delay",
    "animation-direction", "animation-duration", "animation-fill-mode",
    "animation-iteration-count", "animation-name", "animation-play-state",
    "animation-timing-function", "appearance", "azimuth", "backface-visibility",
    "background", "background-attachment", "background-blend-mode", "background-clip",
    "background-color", "background-image", "background-origin", "background-position",
    "background-repeat", "background-size", "baseline-shift", "binding",
    "bleed", "bookmark-label", "bookmark-level", "bookmark-state",
    "bookmark-target", "border", "border-bottom", "border-bottom-color",
    "border-bottom-left-radius", "border-bottom-right-radius",
    "border-bottom-style", "border-bottom-width", "border-collapse",
    "border-color", "border-image", "border-image-outset",
    "border-image-repeat", "border-image-slice", "border-image-source",
    "border-image-width", "border-left", "border-left-color",
    "border-left-style", "border-left-width", "border-radius", "border-right",
    "border-right-color", "border-right-style", "border-right-width",
    "border-spacing", "border-style", "border-top", "border-top-color",
    "border-top-left-radius", "border-top-right-radius", "border-top-style",
    "border-top-width", "border-width", "bottom", "box-decoration-break",
    "box-shadow", "box-sizing", "break-after", "break-before", "break-inside",
    "caption-side", "clear", "clip", "color", "color-profile", "column-count",
    "column-fill", "column-gap", "column-rule", "column-rule-color",
    "column-rule-style", "column-rule-width", "column-span", "column-width",
    "columns", "content", "counter-increment", "counter-reset", "crop", "cue",
    "cue-after", "cue-before", "cursor", "direction", "display",
    "dominant-baseline", "drop-initial-after-adjust",
    "drop-initial-after-align", "drop-initial-before-adjust",
    "drop-initial-before-align", "drop-initial-size", "drop-initial-value",
    "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis",
    "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap",
    "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings",
    "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust",
    "font-stretch", "font-style", "font-synthesis", "font-variant",
    "font-variant-alternates", "font-variant-caps", "font-variant-east-asian",
    "font-variant-ligatures", "font-variant-numeric", "font-variant-position",
    "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow",
    "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap",
    "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap",
    "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns",
    "grid-template-rows", "hanging-punctuation", "height", "hyphens",
    "icon", "image-orientation", "image-rendering", "image-resolution",
    "inline-box-align", "justify-content", "left", "letter-spacing",
    "line-break", "line-height", "line-stacking", "line-stacking-ruby",
    "line-stacking-shift", "line-stacking-strategy", "list-style",
    "list-style-image", "list-style-position", "list-style-type", "margin",
    "margin-bottom", "margin-left", "margin-right", "margin-top",
    "marks", "marquee-direction", "marquee-loop",
    "marquee-play-count", "marquee-speed", "marquee-style", "max-height",
    "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index",
    "nav-left", "nav-right", "nav-up", "object-fit", "object-position",
    "opacity", "order", "orphans", "outline",
    "outline-color", "outline-offset", "outline-style", "outline-width",
    "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y",
    "padding", "padding-bottom", "padding-left", "padding-right", "padding-top",
    "page", "page-break-after", "page-break-before", "page-break-inside",
    "page-policy", "pause", "pause-after", "pause-before", "perspective",
    "perspective-origin", "pitch", "pitch-range", "play-during", "position",
    "presentation-level", "punctuation-trim", "quotes", "region-break-after",
    "region-break-before", "region-break-inside", "region-fragment",
    "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness",
    "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang",
    "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin",
    "shape-outside", "size", "speak", "speak-as", "speak-header",
    "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set",
    "tab-size", "table-layout", "target", "target-name", "target-new",
    "target-position", "text-align", "text-align-last", "text-decoration",
    "text-decoration-color", "text-decoration-line", "text-decoration-skip",
    "text-decoration-style", "text-emphasis", "text-emphasis-color",
    "text-emphasis-position", "text-emphasis-style", "text-height",
    "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow",
    "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position",
    "text-wrap", "top", "transform", "transform-origin", "transform-style",
    "transition", "transition-delay", "transition-duration",
    "transition-property", "transition-timing-function", "unicode-bidi",
    "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration",
    "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress",
    "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break",
    "word-spacing", "word-wrap", "z-index",
    // SVG-specific
    "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color",
    "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events",
    "color-interpolation", "color-interpolation-filters",
    "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering",
    "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke",
    "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin",
    "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering",
    "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal",
    "glyph-orientation-vertical", "text-anchor", "writing-mode"
  ], propertyKeywords = keySet(propertyKeywords_);

  var nonStandardPropertyKeywords_ = [
    "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color",
    "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color",
    "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside",
    "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button",
    "searchfield-results-decoration", "zoom"
  ], nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_);

  var fontProperties_ = [
    "font-family", "src", "unicode-range", "font-variant", "font-feature-settings",
    "font-stretch", "font-weight", "font-style"
  ], fontProperties = keySet(fontProperties_);

  var counterDescriptors_ = [
    "additive-symbols", "fallback", "negative", "pad", "prefix", "range",
    "speak-as", "suffix", "symbols", "system"
  ], counterDescriptors = keySet(counterDescriptors_);

  var colorKeywords_ = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige",
    "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown",
    "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod",
    "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen",
    "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
    "darkslateblue", "darkslategray", "darkturquoise", "darkviolet",
    "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick",
    "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
    "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew",
    "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender",
    "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral",
    "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink",
    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
    "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta",
    "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
    "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
    "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",
    "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered",
    "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
    "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue",
    "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown",
    "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue",
    "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan",
    "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white",
    "whitesmoke", "yellow", "yellowgreen"
  ], colorKeywords = keySet(colorKeywords_);

  var valueKeywords_ = [
    "above", "absolute", "activeborder", "additive", "activecaption", "afar",
    "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate",
    "always", "amharic", "amharic-abegede", "antialiased", "appworkspace",
    "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page",
    "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary",
    "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box",
    "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel",
    "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian",
    "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret",
    "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch",
    "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote",
    "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse",
    "compact", "condensed", "contain", "content", "contents",
    "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop",
    "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal",
    "decimal-leading-zero", "default", "default-button", "dense", "destination-atop",
    "destination-in", "destination-out", "destination-over", "devanagari", "difference",
    "disc", "discard", "disclosure-closed", "disclosure-open", "document",
    "dot-dash", "dot-dot-dash",
    "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out",
    "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede",
    "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er",
    "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er",
    "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et",
    "ethiopic-halehame-gez", "ethiopic-halehame-om-et",
    "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et",
    "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig",
    "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed",
    "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes",
    "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove",
    "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew",
    "help", "hidden", "hide", "higher", "highlight", "highlighttext",
    "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore",
    "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite",
    "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis",
    "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert",
    "italic", "japanese-formal", "japanese-informal", "justify", "kannada",
    "katakana", "katakana-iroha", "keep-all", "khmer",
    "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal",
    "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten",
    "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem",
    "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian",
    "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian",
    "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d",
    "media-controls-background", "media-current-time-display",
    "media-fullscreen-button", "media-mute-button", "media-play-button",
    "media-return-to-realtime-button", "media-rewind-button",
    "media-seek-back-button", "media-seek-forward-button", "media-slider",
    "media-sliderthumb", "media-time-remaining-display", "media-volume-slider",
    "media-volume-slider-container", "media-volume-sliderthumb", "medium",
    "menu", "menulist", "menulist-button", "menulist-text",
    "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic",
    "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize",
    "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop",
    "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap",
    "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote",
    "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset",
    "outside", "outside-shape", "overlay", "overline", "padding", "padding-box",
    "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter",
    "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d",
    "progress", "push-button", "radial-gradient", "radio", "read-only",
    "read-write", "read-write-plaintext-only", "rectangle", "region",
    "relative", "repeat", "repeating-linear-gradient",
    "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse",
    "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY",
    "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running",
    "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen",
    "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield",
    "searchfield-cancel-button", "searchfield-decoration",
    "searchfield-results-button", "searchfield-results-decoration",
    "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama",
    "simp-chinese-formal", "simp-chinese-informal", "single",
    "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal",
    "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow",
    "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali",
    "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "spell-out", "square",
    "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub",
    "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "table",
    "table-caption", "table-cell", "table-column", "table-column-group",
    "table-footer-group", "table-header-group", "table-row", "table-row-group",
    "tamil",
    "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai",
    "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight",
    "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er",
    "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top",
    "trad-chinese-formal", "trad-chinese-informal", "transform",
    "translate", "translate3d", "translateX", "translateY", "translateZ",
    "transparent", "ultra-condensed", "ultra-expanded", "underline", "unset", "up",
    "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal",
    "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url",
    "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted",
    "visibleStroke", "visual", "w-resize", "wait", "wave", "wider",
    "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor",
    "xx-large", "xx-small"
  ], valueKeywords = keySet(valueKeywords_);

  var allWords = documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_)
    .concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_)
    .concat(valueKeywords_);
  CodeMirror.registerHelper("hintWords", "css", allWords);

  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = null;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ["comment", "comment"];
  }

  CodeMirror.defineMIME("text/css", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css"
  });

  CodeMirror.defineMIME("text/x-scss", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      ":": function(stream) {
        if (stream.match(/\s*\{/))
          return [null, "{"];
        return false;
      },
      "$": function(stream) {
        stream.match(/^[\w-]+/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "#": function(stream) {
        if (!stream.eat("{")) return false;
        return [null, "interpolation"];
      }
    },
    name: "css",
    helperType: "scss"
  });

  CodeMirror.defineMIME("text/x-less", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      "@": function(stream) {
        if (stream.eat("{")) return [null, "interpolation"];
        if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, false)) return false;
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "&": function() {
        return ["atom", "atom"];
      }
    },
    name: "css",
    helperType: "less"
  });

  CodeMirror.defineMIME("text/x-gss", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    supportsAtComponent: true,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css",
    helperType: "gss"
  });

});
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

var htmlConfig = {
  autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
                    'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
                    'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
                    'track': true, 'wbr': true, 'menuitem': true},
  implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
                     'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
                     'th': true, 'tr': true},
  contextGrabbers: {
    'dd': {'dd': true, 'dt': true},
    'dt': {'dd': true, 'dt': true},
    'li': {'li': true},
    'option': {'option': true, 'optgroup': true},
    'optgroup': {'optgroup': true},
    'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
          'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
          'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
          'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
          'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
    'rp': {'rp': true, 'rt': true},
    'rt': {'rp': true, 'rt': true},
    'tbody': {'tbody': true, 'tfoot': true},
    'td': {'td': true, 'th': true},
    'tfoot': {'tbody': true},
    'th': {'td': true, 'th': true},
    'thead': {'tbody': true, 'tfoot': true},
    'tr': {'tr': true}
  },
  doNotIndent: {"pre": true},
  allowUnquoted: true,
  allowMissing: true,
  caseFold: true
}

var xmlConfig = {
  autoSelfClosers: {},
  implicitlyClosed: {},
  contextGrabbers: {},
  doNotIndent: {},
  allowUnquoted: false,
  allowMissing: false,
  caseFold: false
}

CodeMirror.defineMode("xml", function(editorConf, config_) {
  var indentUnit = editorConf.indentUnit
  var config = {}
  var defaults = config_.htmlMode ? htmlConfig : xmlConfig
  for (var prop in defaults) config[prop] = defaults[prop]
  for (var prop in config_) config[prop] = config_[prop]

  // Return variables for tokenizers
  var type, setStyle;

  function inText(stream, state) {
    function chain(parser) {
      state.tokenize = parser;
      return parser(stream, state);
    }

    var ch = stream.next();
    if (ch == "<") {
      if (stream.eat("!")) {
        if (stream.eat("[")) {
          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
          else return null;
        } else if (stream.match("--")) {
          return chain(inBlock("comment", "-->"));
        } else if (stream.match("DOCTYPE", true, true)) {
          stream.eatWhile(/[\w\._\-]/);
          return chain(doctype(1));
        } else {
          return null;
        }
      } else if (stream.eat("?")) {
        stream.eatWhile(/[\w\._\-]/);
        state.tokenize = inBlock("meta", "?>");
        return "meta";
      } else {
        type = stream.eat("/") ? "closeTag" : "openTag";
        state.tokenize = inTag;
        return "tag bracket";
      }
    } else if (ch == "&") {
      var ok;
      if (stream.eat("#")) {
        if (stream.eat("x")) {
          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
        } else {
          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
        }
      } else {
        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
      }
      return ok ? "atom" : "error";
    } else {
      stream.eatWhile(/[^&<]/);
      return null;
    }
  }
  inText.isInText = true;

  function inTag(stream, state) {
    var ch = stream.next();
    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
      state.tokenize = inText;
      type = ch == ">" ? "endTag" : "selfcloseTag";
      return "tag bracket";
    } else if (ch == "=") {
      type = "equals";
      return null;
    } else if (ch == "<") {
      state.tokenize = inText;
      state.state = baseState;
      state.tagName = state.tagStart = null;
      var next = state.tokenize(stream, state);
      return next ? next + " tag error" : "tag error";
    } else if (/[\'\"]/.test(ch)) {
      state.tokenize = inAttribute(ch);
      state.stringStartCol = stream.column();
      return state.tokenize(stream, state);
    } else {
      stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
      return "word";
    }
  }

  function inAttribute(quote) {
    var closure = function(stream, state) {
      while (!stream.eol()) {
        if (stream.next() == quote) {
          state.tokenize = inTag;
          break;
        }
      }
      return "string";
    };
    closure.isInAttribute = true;
    return closure;
  }

  function inBlock(style, terminator) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.match(terminator)) {
          state.tokenize = inText;
          break;
        }
        stream.next();
      }
      return style;
    };
  }
  function doctype(depth) {
    return function(stream, state) {
      var ch;
      while ((ch = stream.next()) != null) {
        if (ch == "<") {
          state.tokenize = doctype(depth + 1);
          return state.tokenize(stream, state);
        } else if (ch == ">") {
          if (depth == 1) {
            state.tokenize = inText;
            break;
          } else {
            state.tokenize = doctype(depth - 1);
            return state.tokenize(stream, state);
          }
        }
      }
      return "meta";
    };
  }

  function Context(state, tagName, startOfLine) {
    this.prev = state.context;
    this.tagName = tagName;
    this.indent = state.indented;
    this.startOfLine = startOfLine;
    if (config.doNotIndent.hasOwnProperty(tagName) || (state.context && state.context.noIndent))
      this.noIndent = true;
  }
  function popContext(state) {
    if (state.context) state.context = state.context.prev;
  }
  function maybePopContext(state, nextTagName) {
    var parentTagName;
    while (true) {
      if (!state.context) {
        return;
      }
      parentTagName = state.context.tagName;
      if (!config.contextGrabbers.hasOwnProperty(parentTagName) ||
          !config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
        return;
      }
      popContext(state);
    }
  }

  function baseState(type, stream, state) {
    if (type == "openTag") {
      state.tagStart = stream.column();
      return tagNameState;
    } else if (type == "closeTag") {
      return closeTagNameState;
    } else {
      return baseState;
    }
  }
  function tagNameState(type, stream, state) {
    if (type == "word") {
      state.tagName = stream.current();
      setStyle = "tag";
      return attrState;
    } else {
      setStyle = "error";
      return tagNameState;
    }
  }
  function closeTagNameState(type, stream, state) {
    if (type == "word") {
      var tagName = stream.current();
      if (state.context && state.context.tagName != tagName &&
          config.implicitlyClosed.hasOwnProperty(state.context.tagName))
        popContext(state);
      if ((state.context && state.context.tagName == tagName) || config.matchClosing === false) {
        setStyle = "tag";
        return closeState;
      } else {
        setStyle = "tag error";
        return closeStateErr;
      }
    } else {
      setStyle = "error";
      return closeStateErr;
    }
  }

  function closeState(type, _stream, state) {
    if (type != "endTag") {
      setStyle = "error";
      return closeState;
    }
    popContext(state);
    return baseState;
  }
  function closeStateErr(type, stream, state) {
    setStyle = "error";
    return closeState(type, stream, state);
  }

  function attrState(type, _stream, state) {
    if (type == "word") {
      setStyle = "attribute";
      return attrEqState;
    } else if (type == "endTag" || type == "selfcloseTag") {
      var tagName = state.tagName, tagStart = state.tagStart;
      state.tagName = state.tagStart = null;
      if (type == "selfcloseTag" ||
          config.autoSelfClosers.hasOwnProperty(tagName)) {
        maybePopContext(state, tagName);
      } else {
        maybePopContext(state, tagName);
        state.context = new Context(state, tagName, tagStart == state.indented);
      }
      return baseState;
    }
    setStyle = "error";
    return attrState;
  }
  function attrEqState(type, stream, state) {
    if (type == "equals") return attrValueState;
    if (!config.allowMissing) setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrValueState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    if (type == "word" && config.allowUnquoted) {setStyle = "string"; return attrState;}
    setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrContinuedState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    return attrState(type, stream, state);
  }

  return {
    startState: function(baseIndent) {
      var state = {tokenize: inText,
                   state: baseState,
                   indented: baseIndent || 0,
                   tagName: null, tagStart: null,
                   context: null}
      if (baseIndent != null) state.baseIndent = baseIndent
      return state
    },

    token: function(stream, state) {
      if (!state.tagName && stream.sol())
        state.indented = stream.indentation();

      if (stream.eatSpace()) return null;
      type = null;
      var style = state.tokenize(stream, state);
      if ((style || type) && style != "comment") {
        setStyle = null;
        state.state = state.state(type || style, stream, state);
        if (setStyle)
          style = setStyle == "error" ? style + " error" : setStyle;
      }
      return style;
    },

    indent: function(state, textAfter, fullLine) {
      var context = state.context;
      // Indent multi-line strings (e.g. css).
      if (state.tokenize.isInAttribute) {
        if (state.tagStart == state.indented)
          return state.stringStartCol + 1;
        else
          return state.indented + indentUnit;
      }
      if (context && context.noIndent) return CodeMirror.Pass;
      if (state.tokenize != inTag && state.tokenize != inText)
        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
      // Indent the starts of attribute names.
      if (state.tagName) {
        if (config.multilineTagIndentPastTag !== false)
          return state.tagStart + state.tagName.length + 2;
        else
          return state.tagStart + indentUnit * (config.multilineTagIndentFactor || 1);
      }
      if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
      var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
      if (tagAfter && tagAfter[1]) { // Closing tag spotted
        while (context) {
          if (context.tagName == tagAfter[2]) {
            context = context.prev;
            break;
          } else if (config.implicitlyClosed.hasOwnProperty(context.tagName)) {
            context = context.prev;
          } else {
            break;
          }
        }
      } else if (tagAfter) { // Opening tag spotted
        while (context) {
          var grabbers = config.contextGrabbers[context.tagName];
          if (grabbers && grabbers.hasOwnProperty(tagAfter[2]))
            context = context.prev;
          else
            break;
        }
      }
      while (context && context.prev && !context.startOfLine)
        context = context.prev;
      if (context) return context.indent + indentUnit;
      else return state.baseIndent || 0;
    },

    electricInput: /<\/[\s\w:]+>$/,
    blockCommentStart: "<!--",
    blockCommentEnd: "-->",

    configuration: config.htmlMode ? "html" : "xml",
    helperType: config.htmlMode ? "html" : "xml",

    skipAttribute: function(state) {
      if (state.state == attrValueState)
        state.state = attrState
    }
  };
});

CodeMirror.defineMIME("text/xml", "xml");
CodeMirror.defineMIME("application/xml", "xml");
if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

});
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var defaultTags = {
    script: [
      ["lang", /(javascript|babel)/i, "javascript"],
      ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"],
      ["type", /./, "text/plain"],
      [null, null, "javascript"]
    ],
    style:  [
      ["lang", /^css$/i, "css"],
      ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
      ["type", /./, "text/plain"],
      [null, null, "css"]
    ]
  };

  function maybeBackup(stream, pat, style) {
    var cur = stream.current(), close = cur.search(pat);
    if (close > -1) {
      stream.backUp(cur.length - close);
    } else if (cur.match(/<\/?$/)) {
      stream.backUp(cur.length);
      if (!stream.match(pat, false)) stream.match(cur);
    }
    return style;
  }

  var attrRegexpCache = {};
  function getAttrRegexp(attr) {
    var regexp = attrRegexpCache[attr];
    if (regexp) return regexp;
    return attrRegexpCache[attr] = new RegExp("\\s+" + attr + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*");
  }

  function getAttrValue(text, attr) {
    var match = text.match(getAttrRegexp(attr))
    return match ? /^\s*(.*?)\s*$/.exec(match[2])[1] : ""
  }

  function getTagRegexp(tagName, anchored) {
    return new RegExp((anchored ? "^" : "") + "<\/\s*" + tagName + "\s*>", "i");
  }

  function addTags(from, to) {
    for (var tag in from) {
      var dest = to[tag] || (to[tag] = []);
      var source = from[tag];
      for (var i = source.length - 1; i >= 0; i--)
        dest.unshift(source[i])
    }
  }

  function findMatchingMode(tagInfo, tagText) {
    for (var i = 0; i < tagInfo.length; i++) {
      var spec = tagInfo[i];
      if (!spec[0] || spec[1].test(getAttrValue(tagText, spec[0]))) return spec[2];
    }
  }

  CodeMirror.defineMode("htmlmixed", function (config, parserConfig) {
    var htmlMode = CodeMirror.getMode(config, {
      name: "xml",
      htmlMode: true,
      multilineTagIndentFactor: parserConfig.multilineTagIndentFactor,
      multilineTagIndentPastTag: parserConfig.multilineTagIndentPastTag
    });

    var tags = {};
    var configTags = parserConfig && parserConfig.tags, configScript = parserConfig && parserConfig.scriptTypes;
    addTags(defaultTags, tags);
    if (configTags) addTags(configTags, tags);
    if (configScript) for (var i = configScript.length - 1; i >= 0; i--)
      tags.script.unshift(["type", configScript[i].matches, configScript[i].mode])

    function html(stream, state) {
      var style = htmlMode.token(stream, state.htmlState), tag = /\btag\b/.test(style), tagName
      if (tag && !/[<>\s\/]/.test(stream.current()) &&
          (tagName = state.htmlState.tagName && state.htmlState.tagName.toLowerCase()) &&
          tags.hasOwnProperty(tagName)) {
        state.inTag = tagName + " "
      } else if (state.inTag && tag && />$/.test(stream.current())) {
        var inTag = /^([\S]+) (.*)/.exec(state.inTag)
        state.inTag = null
        var modeSpec = stream.current() == ">" && findMatchingMode(tags[inTag[1]], inTag[2])
        var mode = CodeMirror.getMode(config, modeSpec)
        var endTagA = getTagRegexp(inTag[1], true), endTag = getTagRegexp(inTag[1], false);
        state.token = function (stream, state) {
          if (stream.match(endTagA, false)) {
            state.token = html;
            state.localState = state.localMode = null;
            return null;
          }
          return maybeBackup(stream, endTag, state.localMode.token(stream, state.localState));
        };
        state.localMode = mode;
        state.localState = CodeMirror.startState(mode, htmlMode.indent(state.htmlState, ""));
      } else if (state.inTag) {
        state.inTag += stream.current()
        if (stream.eol()) state.inTag += " "
      }
      return style;
    };

    return {
      startState: function () {
        var state = CodeMirror.startState(htmlMode);
        return {token: html, inTag: null, localMode: null, localState: null, htmlState: state};
      },

      copyState: function (state) {
        var local;
        if (state.localState) {
          local = CodeMirror.copyState(state.localMode, state.localState);
        }
        return {token: state.token, inTag: state.inTag,
                localMode: state.localMode, localState: local,
                htmlState: CodeMirror.copyState(htmlMode, state.htmlState)};
      },

      token: function (stream, state) {
        return state.token(stream, state);
      },

      indent: function (state, textAfter) {
        if (!state.localMode || /^\s*<\//.test(textAfter))
          return htmlMode.indent(state.htmlState, textAfter);
        else if (state.localMode.indent)
          return state.localMode.indent(state.localState, textAfter);
        else
          return CodeMirror.Pass;
      },

      innerMode: function (state) {
        return {state: state.localState || state.htmlState, mode: state.localMode || htmlMode};
      }
    };
  }, "xml", "javascript", "css");

  CodeMirror.defineMIME("text/html", "htmlmixed");
});
