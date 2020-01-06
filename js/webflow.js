/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";var i={},r={},o=[],a=window.Webflow||[],s=window.jQuery,u=s(window),c=s(document),l=s.isFunction,h=i._=n(4),f=i.tram=n(1)&&s.tram,d=!1,p=!1;function v(t){i.env()&&(l(t.design)&&u.on("__wf_design",t.design),l(t.preview)&&u.on("__wf_preview",t.preview)),l(t.destroy)&&u.on("__wf_destroy",t.destroy),t.ready&&l(t.ready)&&function(t){if(d)return void t.ready();if(h.contains(o,t.ready))return;o.push(t.ready)}(t)}function m(t){l(t.design)&&u.off("__wf_design",t.design),l(t.preview)&&u.off("__wf_preview",t.preview),l(t.destroy)&&u.off("__wf_destroy",t.destroy),t.ready&&l(t.ready)&&function(t){o=h.filter(o,function(e){return e!==t.ready})}(t)}f.config.hideBackface=!1,f.config.keepInherited=!0,i.define=function(t,e,n){r[t]&&m(r[t]);var i=r[t]=e(s,h,n)||{};return v(i),i},i.require=function(t){return r[t]},i.push=function(t){d?l(t)&&t():a.push(t)},i.env=function(t){var e=window.__wf_design,n=void 0!==e;return t?"design"===t?n&&e:"preview"===t?n&&!e:"slug"===t?n&&window.__wf_slug:"editor"===t?window.WebflowEditor:"test"===t?window.__wf_test:"frame"===t?window!==window.top:void 0:n};var b,w=navigator.userAgent.toLowerCase(),g=i.env.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,y=i.env.chrome=/chrome/.test(w)&&/Google/.test(navigator.vendor)&&parseInt(w.match(/chrome\/(\d+)\./)[1],10),x=i.env.ios=/(ipod|iphone|ipad)/.test(w);i.env.safari=/safari/.test(w)&&!y&&!x,g&&c.on("touchstart mousedown",function(t){b=t.target}),i.validClick=g?function(t){return t===b||s.contains(t,b)}:function(){return!0};var _,k="resize.webflow orientationchange.webflow load.webflow";function z(t,e){var n=[],i={};return i.up=h.throttle(function(t){h.each(n,function(e){e(t)})}),t&&e&&t.on(e,i.up),i.on=function(t){"function"==typeof t&&(h.contains(n,t)||n.push(t))},i.off=function(t){n=arguments.length?h.filter(n,function(e){return e!==t}):[]},i}function S(t){l(t)&&t()}function E(){_&&(_.reject(),u.off("load",_.resolve)),_=new s.Deferred,u.on("load",_.resolve)}i.resize=z(u,k),i.scroll=z(u,"scroll.webflow resize.webflow orientationchange.webflow load.webflow"),i.redraw=z(),i.location=function(t){window.location=t},i.env()&&(i.location=function(){}),i.ready=function(){d=!0,p?(p=!1,h.each(r,v)):h.each(o,S),h.each(a,S),i.resize.up()},i.load=function(t){_.then(t)},i.destroy=function(t){t=t||{},p=!0,u.triggerHandler("__wf_destroy"),null!=t.domready&&(d=t.domready),h.each(r,m),i.resize.off(),i.scroll.off(),i.redraw.off(),o=[],a=[],"pending"===_.state()&&E()},s(i.ready),E(),t.exports=window.Webflow=i},function(t,e,n){"use strict";var i=n(5)(n(6));window.tram=function(t){function e(t,e){return(new R.Bare).init(t,e)}function n(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function r(t){var e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,255&e]}function o(t,e,n){return"#"+(1<<24|t<<16|e<<8|n).toString(16).slice(1)}function a(){}function s(t,e,n){c("Units do not match ["+t+"]: "+e+", "+n)}function u(t,e,n){if(void 0!==e&&(n=e),void 0===t)return n;var i=n;return J.test(t)||!V.test(t)?i=parseInt(t,10):V.test(t)&&(i=1e3*parseFloat(t)),0>i&&(i=0),i==i?i:n}function c(t){G.debug&&window&&window.console.warn(t)}var l=function(t,e,n){function r(t){return"object"==(0,i.default)(t)}function o(t){return"function"==typeof t}function a(){}return function i(s,u){function c(){var t=new l;return o(t.init)&&t.init.apply(t,arguments),t}function l(){}u===n&&(u=s,s=Object),c.Bare=l;var h,f=a[t]=s[t],d=l[t]=c[t]=new a;return d.constructor=c,c.mixin=function(e){return l[t]=c[t]=i(c,e)[t],c},c.open=function(t){if(h={},o(t)?h=t.call(c,d,f,c,s):r(t)&&(h=t),r(h))for(var n in h)e.call(h,n)&&(d[n]=h[n]);return o(d.init)||(d.init=s),c},c.open(u)}}("prototype",{}.hasOwnProperty),h={ease:["ease",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-2.75*o*r+11*r*r+-15.5*o+8*r+.25*t)}],"ease-in":["ease-in",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-1*o*r+3*r*r+-3*o+2*r)}],"ease-out":["ease-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(.3*o*r+-1.6*r*r+2.2*o+-1.8*r+1.9*t)}],"ease-in-out":["ease-in-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(2*o*r+-5*r*r+2*o+2*r)}],linear:["linear",function(t,e,n,i){return n*t/i+e}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,e,n,i){return n*(t/=i)*t+e}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,e,n,i){return-n*(t/=i)*(t-2)+e}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,e,n,i){return n*(t/=i)*t*t+e}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,e,n,i){return n*(t/=i)*t*t*t+e}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,e,n,i){return-n*((t=t/i-1)*t*t*t-1)+e}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,e,n,i){return n*(t/=i)*t*t*t*t+e}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t*t*t+1)+e}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,e,n,i){return-n*Math.cos(t/i*(Math.PI/2))+n+e}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,e,n,i){return n*Math.sin(t/i*(Math.PI/2))+e}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,e,n,i){return-n/2*(Math.cos(Math.PI*t/i)-1)+e}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,e,n,i){return 0===t?e:n*Math.pow(2,10*(t/i-1))+e}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,e,n,i){return t===i?e+n:n*(1-Math.pow(2,-10*t/i))+e}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,e,n,i){return 0===t?e:t===i?e+n:(t/=i/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*--t))+e}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,e,n,i){return-n*(Math.sqrt(1-(t/=i)*t)-1)+e}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,e,n,i){return n*Math.sqrt(1-(t=t/i-1)*t)+e}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,e,n,i){return(t/=i/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*(t/=i)*t*((r+1)*t-r)+e}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*((t=t/i-1)*t*((r+1)*t+r)+1)+e}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),(t/=i/2)<1?n/2*t*t*((1+(r*=1.525))*t-r)+e:n/2*((t-=2)*t*((1+(r*=1.525))*t+r)+2)+e}]},f={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},d=document,p=window,v="bkwld-tram",m=/[\-\.0-9]/g,b=/[A-Z]/,w="number",g=/^(rgb|#)/,y=/(em|cm|mm|in|pt|pc|px)$/,x=/(em|cm|mm|in|pt|pc|px|%)$/,_=/(deg|rad|turn)$/,k="unitless",z=/(all|none) 0s ease 0s/,S=/^(width|height)$/,E=" ",j=d.createElement("a"),q=["Webkit","Moz","O","ms"],M=["-webkit-","-moz-","-o-","-ms-"],A=function(t){if(t in j.style)return{dom:t,css:t};var e,n,i="",r=t.split("-");for(e=0;e<r.length;e++)i+=r[e].charAt(0).toUpperCase()+r[e].slice(1);for(e=0;e<q.length;e++)if((n=q[e]+i)in j.style)return{dom:n,css:M[e]+t}},$=e.support={bind:Function.prototype.bind,transform:A("transform"),transition:A("transition"),backface:A("backface-visibility"),timing:A("transition-timing-function")};if($.transition){var O=$.timing.dom;if(j.style[O]=h["ease-in-back"][0],!j.style[O])for(var T in f)h[T][0]=f[T]}var F=e.frame=function(){var t=p.requestAnimationFrame||p.webkitRequestAnimationFrame||p.mozRequestAnimationFrame||p.oRequestAnimationFrame||p.msRequestAnimationFrame;return t&&$.bind?t.bind(p):function(t){p.setTimeout(t,16)}}(),L=e.now=function(){var t=p.performance,e=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return e&&$.bind?e.bind(t):Date.now||function(){return+new Date}}(),D=l(function(e){function r(t,e){var n=function(t){for(var e=-1,n=t?t.length:0,i=[];++e<n;){var r=t[e];r&&i.push(r)}return i}((""+t).split(E)),i=n[0];e=e||{};var r=U[i];if(!r)return c("Unsupported property: "+i);if(!e.weak||!this.props[i]){var o=r[0],a=this.props[i];return a||(a=this.props[i]=new o.Bare),a.init(this.$el,n,r,e),a}}function o(t,e,n){if(t){var o=(0,i.default)(t);if(e||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==o&&e)return this.timer=new X({duration:t,context:this,complete:a}),void(this.active=!0);if("string"==o&&e){switch(t){case"hide":l.call(this);break;case"stop":s.call(this);break;case"redraw":h.call(this);break;default:r.call(this,t,n&&n[1])}return a.call(this)}if("function"==o)return void t.call(this,this);if("object"==o){var c=0;d.call(this,t,function(t,e){t.span>c&&(c=t.span),t.stop(),t.animate(e)},function(t){"wait"in t&&(c=u(t.wait,0))}),f.call(this),c>0&&(this.timer=new X({duration:c,context:this}),this.active=!0,e&&(this.timer.complete=a));var p=this,v=!1,m={};F(function(){d.call(p,t,function(t){t.active&&(v=!0,m[t.name]=t.nextStyle)}),v&&p.$el.css(m)})}}}function a(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var t=this.queue.shift();o.call(this,t.options,!0,t.args)}}function s(t){var e;this.timer&&this.timer.destroy(),this.queue=[],this.active=!1,"string"==typeof t?(e={})[t]=1:e="object"==(0,i.default)(t)&&null!=t?t:this.props,d.call(this,e,p),f.call(this)}function l(){s.call(this),this.el.style.display="none"}function h(){this.el.offsetHeight}function f(){var t,e,n=[];for(t in this.upstream&&n.push(this.upstream),this.props)(e=this.props[t]).active&&n.push(e.string);n=n.join(","),this.style!==n&&(this.style=n,this.el.style[$.transition.dom]=n)}function d(t,e,i){var o,a,s,u,c=e!==p,l={};for(o in t)s=t[o],o in Q?(l.transform||(l.transform={}),l.transform[o]=s):(b.test(o)&&(o=n(o)),o in U?l[o]=s:(u||(u={}),u[o]=s));for(o in l){if(s=l[o],!(a=this.props[o])){if(!c)continue;a=r.call(this,o)}e.call(this,a,s)}i&&u&&i.call(this,u)}function p(t){t.stop()}function m(t,e){t.set(e)}function w(t){this.$el.css(t)}function g(t,n){e[t]=function(){return this.children?function(t,e){var n,i=this.children.length;for(n=0;i>n;n++)t.apply(this.children[n],e);return this}.call(this,n,arguments):(this.el&&n.apply(this,arguments),this)}}e.init=function(e){if(this.$el=t(e),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,G.keepInherited&&!G.fallback){var n=W(this.el,"transition");n&&!z.test(n)&&(this.upstream=n)}$.backface&&G.hideBackface&&N(this.el,$.backface.css,"hidden")},g("add",r),g("start",o),g("wait",function(t){t=u(t,0),this.active?this.queue.push({options:t}):(this.timer=new X({duration:t,context:this,complete:a}),this.active=!0)}),g("then",function(t){return this.active?(this.queue.push({options:t,args:arguments}),void(this.timer.complete=a)):c("No active transition timer. Use start() or wait() before then().")}),g("next",a),g("stop",s),g("set",function(t){s.call(this,t),d.call(this,t,m,w)}),g("show",function(t){"string"!=typeof t&&(t="block"),this.el.style.display=t}),g("hide",l),g("redraw",h),g("destroy",function(){s.call(this),t.removeData(this.el,v),this.$el=this.el=null})}),R=l(D,function(e){function n(e,n){var i=t.data(e,v)||t.data(e,v,new D.Bare);return i.el||i.init(e),n?i.start(n):i}e.init=function(e,i){var r=t(e);if(!r.length)return this;if(1===r.length)return n(r[0],i);var o=[];return r.each(function(t,e){o.push(n(e,i))}),this.children=o,this}}),B=l(function(t){function e(){var t=this.get();this.update("auto");var e=this.get();return this.update(t),e}function n(t){var e=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);return(e?o(e[1],e[2],e[3]):t).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var r=500,a="ease",s=0;t.init=function(t,e,n,i){this.$el=t,this.el=t[0];var o=e[0];n[2]&&(o=n[2]),Z[o]&&(o=Z[o]),this.name=o,this.type=n[1],this.duration=u(e[1],this.duration,r),this.ease=function(t,e,n){return void 0!==e&&(n=e),t in h?t:n}(e[2],this.ease,a),this.delay=u(e[3],this.delay,s),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=S.test(this.name),this.unit=i.unit||this.unit||G.defaultUnit,this.angle=i.angle||this.angle||G.defaultAngle,G.fallback||i.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+E+this.duration+"ms"+("ease"!=this.ease?E+h[this.ease][0]:"")+(this.delay?E+this.delay+"ms":""))},t.set=function(t){t=this.convert(t,this.type),this.update(t),this.redraw()},t.transition=function(t){this.active=!0,t=this.convert(t,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==t&&(t=e.call(this))),this.nextStyle=t},t.fallback=function(t){var n=this.el.style[this.name]||this.convert(this.get(),this.type);t=this.convert(t,this.type),this.auto&&("auto"==n&&(n=this.convert(this.get(),this.type)),"auto"==t&&(t=e.call(this))),this.tween=new H({from:n,to:t,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return W(this.el,this.name)},t.update=function(t){N(this.el,this.name,t)},t.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,N(this.el,this.name,this.get()));var t=this.tween;t&&t.context&&t.destroy()},t.convert=function(t,e){if("auto"==t&&this.auto)return t;var r,o="number"==typeof t,a="string"==typeof t;switch(e){case w:if(o)return t;if(a&&""===t.replace(m,""))return+t;r="number(unitless)";break;case g:if(a){if(""===t&&this.original)return this.original;if(e.test(t))return"#"==t.charAt(0)&&7==t.length?t:n(t)}r="hex or rgb string";break;case y:if(o)return t+this.unit;if(a&&e.test(t))return t;r="number(px) or string(unit)";break;case x:if(o)return t+this.unit;if(a&&e.test(t))return t;r="number(px) or string(unit or %)";break;case _:if(o)return t+this.angle;if(a&&e.test(t))return t;r="number(deg) or string(angle)";break;case k:if(o)return t;if(a&&x.test(t))return t;r="number(unitless) or string(unit or %)"}return function(t,e){c("Type warning: Expected: ["+t+"] Got: ["+(0,i.default)(e)+"] "+e)}(r,t),t},t.redraw=function(){this.el.offsetHeight}}),P=l(B,function(t,e){t.init=function(){e.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),g))}}),I=l(B,function(t,e){t.init=function(){e.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(t){this.$el[this.name](t)}}),C=l(B,function(t,e){function n(t,e){var n,i,r,o,a;for(n in t)r=(o=Q[n])[0],i=o[1]||n,a=this.convert(t[n],r),e.call(this,i,a,r)}t.init=function(){e.init.apply(this,arguments),this.current||(this.current={},Q.perspective&&G.perspective&&(this.current.perspective=G.perspective,N(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(t){n.call(this,t,function(t,e){this.current[t]=e}),N(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(t){var e=this.values(t);this.tween=new Y({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease});var n,i={};for(n in this.current)i[n]=n in e?e[n]:this.current[n];this.active=!0,this.nextStyle=this.style(i)},t.fallback=function(t){var e=this.values(t);this.tween=new Y({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){N(this.el,this.name,this.style(this.current))},t.style=function(t){var e,n="";for(e in t)n+=e+"("+t[e]+") ";return n},t.values=function(t){var e,i={};return n.call(this,t,function(t,n,r){i[t]=n,void 0===this.current[t]&&(e=0,~t.indexOf("scale")&&(e=1),this.current[t]=this.convert(e,r))}),i}}),H=l(function(e){function n(){var t,e,i,r=u.length;if(r)for(F(n),e=L(),t=r;t--;)(i=u[t])&&i.render(e)}var i={ease:h.ease[1],from:0,to:1};e.init=function(t){this.duration=t.duration||0,this.delay=t.delay||0;var e=t.ease||i.ease;h[e]&&(e=h[e][1]),"function"!=typeof e&&(e=i.ease),this.ease=e,this.update=t.update||a,this.complete=t.complete||a,this.context=t.context||this,this.name=t.name;var n=t.from,r=t.to;void 0===n&&(n=i.from),void 0===r&&(r=i.to),this.unit=t.unit||"","number"==typeof n&&"number"==typeof r?(this.begin=n,this.change=r-n):this.format(r,n),this.value=this.begin+this.unit,this.start=L(),!1!==t.autoplay&&this.play()},e.play=function(){var t;this.active||(this.start||(this.start=L()),this.active=!0,t=this,1===u.push(t)&&F(n))},e.stop=function(){var e,n,i;this.active&&(this.active=!1,e=this,(i=t.inArray(e,u))>=0&&(n=u.slice(i+1),u.length=i,n.length&&(u=u.concat(n))))},e.render=function(t){var e,n=t-this.start;if(this.delay){if(n<=this.delay)return;n-=this.delay}if(n<this.duration){var i=this.ease(n,0,1,this.duration);return e=this.startRGB?function(t,e,n){return o(t[0]+n*(e[0]-t[0]),t[1]+n*(e[1]-t[1]),t[2]+n*(e[2]-t[2]))}(this.startRGB,this.endRGB,i):function(t){return Math.round(t*c)/c}(this.begin+i*this.change),this.value=e+this.unit,void this.update.call(this.context,this.value)}e=this.endHex||this.begin+this.change,this.value=e+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},e.format=function(t,e){if(e+="","#"==(t+="").charAt(0))return this.startRGB=r(e),this.endRGB=r(t),this.endHex=t,this.begin=0,void(this.change=1);if(!this.unit){var n=e.replace(m,"");n!==t.replace(m,"")&&s("tween",e,t),this.unit=n}e=parseFloat(e),t=parseFloat(t),this.begin=this.value=e,this.change=t-e},e.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=a};var u=[],c=1e3}),X=l(H,function(t){t.init=function(t){this.duration=t.duration||0,this.complete=t.complete||a,this.context=t.context,this.play()},t.render=function(t){t-this.start<this.duration||(this.complete.call(this.context),this.destroy())}}),Y=l(H,function(t,e){t.init=function(t){var e,n;for(e in this.context=t.context,this.update=t.update,this.tweens=[],this.current=t.current,t.values)n=t.values[e],this.current[e]!==n&&this.tweens.push(new H({name:e,from:this.current[e],to:n,duration:t.duration,delay:t.delay,ease:t.ease,autoplay:!1}));this.play()},t.render=function(t){var e,n,i=!1;for(e=this.tweens.length;e--;)(n=this.tweens[e]).context&&(n.render(t),this.current[n.name]=n.value,i=!0);return i?void(this.update&&this.update.call(this.context)):this.destroy()},t.destroy=function(){if(e.destroy.call(this),this.tweens){var t;for(t=this.tweens.length;t--;)this.tweens[t].destroy();this.tweens=null,this.current=null}}}),G=e.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!$.transition,agentTests:[]};e.fallback=function(t){if(!$.transition)return G.fallback=!0;G.agentTests.push("("+t+")");var e=new RegExp(G.agentTests.join("|"),"i");G.fallback=e.test(navigator.userAgent)},e.fallback("6.0.[2-5] Safari"),e.tween=function(t){return new H(t)},e.delay=function(t,e,n){return new X({complete:e,duration:t,context:n})},t.fn.tram=function(t){return e.call(null,this,t)};var N=t.style,W=t.css,Z={transform:$.transform&&$.transform.css},U={color:[P,g],background:[P,g,"background-color"],"outline-color":[P,g],"border-color":[P,g],"border-top-color":[P,g],"border-right-color":[P,g],"border-bottom-color":[P,g],"border-left-color":[P,g],"border-width":[B,y],"border-top-width":[B,y],"border-right-width":[B,y],"border-bottom-width":[B,y],"border-left-width":[B,y],"border-spacing":[B,y],"letter-spacing":[B,y],margin:[B,y],"margin-top":[B,y],"margin-right":[B,y],"margin-bottom":[B,y],"margin-left":[B,y],padding:[B,y],"padding-top":[B,y],"padding-right":[B,y],"padding-bottom":[B,y],"padding-left":[B,y],"outline-width":[B,y],opacity:[B,w],top:[B,x],right:[B,x],bottom:[B,x],left:[B,x],"font-size":[B,x],"text-indent":[B,x],"word-spacing":[B,x],width:[B,x],"min-width":[B,x],"max-width":[B,x],height:[B,x],"min-height":[B,x],"max-height":[B,x],"line-height":[B,k],"scroll-top":[I,w,"scrollTop"],"scroll-left":[I,w,"scrollLeft"]},Q={};$.transform&&(U.transform=[C],Q={x:[x,"translateX"],y:[x,"translateY"],rotate:[_],rotateX:[_],rotateY:[_],scale:[w],scaleX:[w],scaleY:[w],skew:[_],skewX:[_],skewY:[_]}),$.transform&&$.backface&&(Q.z=[x,"translateZ"],Q.rotateZ=[_],Q.scaleZ=[w],Q.perspective=[y]);var J=/ms/,V=/s|\./;return t.tram=e}(window.jQuery)},function(t,e,n){n(3),n(7),n(8),t.exports=n(9)},function(t,e,n){"use strict";var i=n(0);i.define("brand",t.exports=function(t){var e,n={},r=document,o=t("html"),a=t("body"),s=".w-webflow-badge",u=window.location,c=/PhantomJS/i.test(navigator.userAgent),l="fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";function h(){var n=r.fullScreen||r.mozFullScreen||r.webkitIsFullScreen||r.msFullscreenElement||Boolean(r.webkitFullscreenElement);t(e).attr("style",n?"display: none !important;":"")}function f(){var t=a.children(s),n=t.length&&t.get(0)===e,r=i.env("editor");n?r&&t.remove():(t.length&&t.remove(),r||a.append(e))}return n.ready=function(){var n,i,a,s=o.attr("data-wf-status"),d=o.attr("data-wf-domain")||"";/\.webflow\.io$/i.test(d)&&u.hostname!==d&&(s=!0),s&&!c&&(e=e||(n=t('<a class="w-webflow-badge"></a>').attr("href","https://webflow.com?utm_campaign=brandjs"),i=t("<img>").attr("src","https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt","").css({marginRight:"8px",width:"16px"}),a=t("<img>").attr("src","https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt","Made in Webflow"),n.append(i,a),n[0]),f(),setTimeout(f,500),t(r).off(l,h).on(l,h))},n})},function(t,e,n){"use strict";var i=window.$,r=n(1)&&i.tram;
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
t.exports=function(){var t={VERSION:"1.6.0-Webflow"},e={},n=Array.prototype,i=Object.prototype,o=Function.prototype,a=(n.push,n.slice),s=(n.concat,i.toString,i.hasOwnProperty),u=n.forEach,c=n.map,l=(n.reduce,n.reduceRight,n.filter),h=(n.every,n.some),f=n.indexOf,d=(n.lastIndexOf,Array.isArray,Object.keys),p=(o.bind,t.each=t.forEach=function(n,i,r){if(null==n)return n;if(u&&n.forEach===u)n.forEach(i,r);else if(n.length===+n.length){for(var o=0,a=n.length;o<a;o++)if(i.call(r,n[o],o,n)===e)return}else{var s=t.keys(n);for(o=0,a=s.length;o<a;o++)if(i.call(r,n[s[o]],s[o],n)===e)return}return n});t.map=t.collect=function(t,e,n){var i=[];return null==t?i:c&&t.map===c?t.map(e,n):(p(t,function(t,r,o){i.push(e.call(n,t,r,o))}),i)},t.find=t.detect=function(t,e,n){var i;return v(t,function(t,r,o){if(e.call(n,t,r,o))return i=t,!0}),i},t.filter=t.select=function(t,e,n){var i=[];return null==t?i:l&&t.filter===l?t.filter(e,n):(p(t,function(t,r,o){e.call(n,t,r,o)&&i.push(t)}),i)};var v=t.some=t.any=function(n,i,r){i||(i=t.identity);var o=!1;return null==n?o:h&&n.some===h?n.some(i,r):(p(n,function(t,n,a){if(o||(o=i.call(r,t,n,a)))return e}),!!o)};t.contains=t.include=function(t,e){return null!=t&&(f&&t.indexOf===f?-1!=t.indexOf(e):v(t,function(t){return t===e}))},t.delay=function(t,e){var n=a.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},t.defer=function(e){return t.delay.apply(t,[e,1].concat(a.call(arguments,1)))},t.throttle=function(t){var e,n,i;return function(){e||(e=!0,n=arguments,i=this,r.frame(function(){e=!1,t.apply(i,n)}))}},t.debounce=function(e,n,i){var r,o,a,s,u,c=function c(){var l=t.now()-s;l<n?r=setTimeout(c,n-l):(r=null,i||(u=e.apply(a,o),a=o=null))};return function(){a=this,o=arguments,s=t.now();var l=i&&!r;return r||(r=setTimeout(c,n)),l&&(u=e.apply(a,o),a=o=null),u}},t.defaults=function(e){if(!t.isObject(e))return e;for(var n=1,i=arguments.length;n<i;n++){var r=arguments[n];for(var o in r)void 0===e[o]&&(e[o]=r[o])}return e},t.keys=function(e){if(!t.isObject(e))return[];if(d)return d(e);var n=[];for(var i in e)t.has(e,i)&&n.push(i);return n},t.has=function(t,e){return s.call(t,e)},t.isObject=function(t){return t===Object(t)},t.now=Date.now||function(){return(new Date).getTime()},t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var m=/(.)^/,b={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},w=/\\|'|\r|\n|\u2028|\u2029/g,g=function(t){return"\\"+b[t]};return t.template=function(e,n,i){!n&&i&&(n=i),n=t.defaults({},n,t.templateSettings);var r=RegExp([(n.escape||m).source,(n.interpolate||m).source,(n.evaluate||m).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(r,function(t,n,i,r,s){return a+=e.slice(o,s).replace(w,g),o=s+t.length,n?a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":i?a+="'+\n((__t=("+i+"))==null?'':__t)+\n'":r&&(a+="';\n"+r+"\n__p+='"),t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var s=new Function(n.variable||"obj","_",a)}catch(t){throw t.source=a,t}var u=function(e){return s.call(this,e,t)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},t}()},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=i=function(t){return n(t)}:t.exports=i=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(e)}t.exports=i},function(t,e,n){"use strict";var i=n(0);i.define("links",t.exports=function(t,e){var n,r,o,a={},s=t(window),u=i.env(),c=window.location,l=document.createElement("a"),h="w--current",f=/index\.(html|php)$/,d=/\/$/;function p(e){var i=n&&e.getAttribute("href-disabled")||e.getAttribute("href");if(l.href=i,!(i.indexOf(":")>=0)){var a=t(e);if(l.hash.length>1&&l.host+l.pathname===c.host+c.pathname){if(!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash))return;var s=t(l.hash);s.length&&r.push({link:a,sec:s,active:!1})}else if("#"!==i&&""!==i){var u=l.href===c.href||i===o||f.test(i)&&d.test(o);m(a,h,u)}}}function v(){var t=s.scrollTop(),n=s.height();e.each(r,function(e){var i=e.link,r=e.sec,o=r.offset().top,a=r.outerHeight(),s=.5*n,u=r.is(":visible")&&o+a-s>=t&&o+s<=t+n;e.active!==u&&(e.active=u,m(i,h,u))})}function m(t,e,n){var i=t.hasClass(e);n&&i||(n||i)&&(n?t.addClass(e):t.removeClass(e))}return a.ready=a.design=a.preview=function(){n=u&&i.env("design"),o=i.env("slug")||c.pathname||"",i.scroll.off(v),r=[];for(var t=document.links,e=0;e<t.length;++e)p(t[e]);r.length&&(i.scroll.on(v),v())},a})},function(t,e,n){"use strict";var i=n(0);i.define("scroll",t.exports=function(t){var e=t(document),n=window,r=n.location,o=function(){try{return Boolean(n.frameElement)}catch(t){return!0}}()?null:n.history,a=/^[a-zA-Z0-9][\w:.-]*$/;return{ready:function(){var s=r.href.split("#")[0];e.on("click","a",function(e){if(!(i.env("design")||window.$.mobile&&t(e.currentTarget).hasClass("ui-link")))if("#"!==this.getAttribute("href")){var u=this.href.split("#"),c=u[0]===s?u[1]:null;c&&function(e,s){if(a.test(e)){var u=t("#"+e);if(u.length){if(s&&(s.preventDefault(),s.stopPropagation()),r.hash!==e&&o&&o.pushState&&(!i.env.chrome||"file:"!==r.protocol)){var c=o.state&&o.state.hash;c!==e&&o.pushState({hash:e},"","#"+e)}var l=i.env("editor")?".w-editor-body":"body",h=t("header, "+l+" > .header, "+l+" > .w-nav:not([data-no-scroll])"),f="fixed"===h.css("position")?h.outerHeight():0;n.setTimeout(function(){!function(e,i){var r=t(n).scrollTop(),o=e.offset().top-i;if("mid"===e.data("scroll")){var a=t(n).height()-i,s=e.outerHeight();s<a&&(o-=Math.round((a-s)/2))}var u=1;t("body").add(e).each(function(){var e=parseFloat(t(this).attr("data-scroll-time"),10);!isNaN(e)&&(0===e||e>0)&&(u=e)}),Date.now||(Date.now=function(){return(new Date).getTime()});var c=Date.now(),l=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(t){n.setTimeout(t,15)},h=(472.143*Math.log(Math.abs(r-o)+125)-2e3)*u;!function t(){var e=Date.now()-c;n.scroll(0,function(t,e,n,i){return n>i?e:t+(e-t)*((r=n/i)<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1);var r}(r,o,e,h)),e<=h&&l(t)}()}(u,f)},s?0:300)}}}(c,e)}else e.preventDefault()})}}})},function(t,e,n){"use strict";n(0).define("touch",t.exports=function(t){var e={},n=!document.addEventListener,i=window.getSelection;function r(t){var e,n,r,a=!1,s=!1,u=!1,c=Math.min(Math.round(.04*window.innerWidth),40);function l(t){var i=t.touches;i&&i.length>1||(a=!0,s=!1,i?(u=!0,e=i[0].clientX,n=i[0].clientY):(e=t.clientX,n=t.clientY),r=e)}function h(t){if(a){if(u&&"mousemove"===t.type)return t.preventDefault(),void t.stopPropagation();var l=t.touches,h=l?l[0].clientX:t.clientX,f=l?l[0].clientY:t.clientY,p=h-r;r=h,Math.abs(p)>c&&i&&""===String(i())&&(o("swipe",t,{direction:p>0?"right":"left"}),d()),(Math.abs(h-e)>10||Math.abs(f-n)>10)&&(s=!0)}}function f(t){if(a){if(a=!1,u&&"mouseup"===t.type)return t.preventDefault(),t.stopPropagation(),void(u=!1);s||o("tap",t)}}function d(){a=!1}t.addEventListener("touchstart",l,!1),t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",f,!1),t.addEventListener("touchcancel",d,!1),t.addEventListener("mousedown",l,!1),t.addEventListener("mousemove",h,!1),t.addEventListener("mouseup",f,!1),t.addEventListener("mouseout",d,!1),this.destroy=function(){t.removeEventListener("touchstart",l,!1),t.removeEventListener("touchmove",h,!1),t.removeEventListener("touchend",f,!1),t.removeEventListener("touchcancel",d,!1),t.removeEventListener("mousedown",l,!1),t.removeEventListener("mousemove",h,!1),t.removeEventListener("mouseup",f,!1),t.removeEventListener("mouseout",d,!1),t=null}}function o(e,n,i){var r=t.Event(e,{originalEvent:n});t(n.target).trigger(r,i)}return n&&(t.event.special.tap={bindType:"click",delegateType:"click"}),e.init=function(e){return n?null:(e="string"==typeof e?t(e).get(0):e)?new r(e):null},e.instance=e.init(document),e})}]);

var header = 0;
var indication_bar = 1;
var metric = 0;
var actions = 0;

$( ".option-button" ).click(function() {
  $(this).parent().children().removeClass("selected");
  $(this).parent().children().addClass("normal");
  $(this).addClass("selected");
});


$( document ).ready(function() {
    $("#indicator").addClass("off");
    $("#head").addClass("off");
    $("#textbody").addClass("off");
    $("#footer").addClass("off");
    $("#actions").addClass("off");

    $("#metric_off").click();
    $("#2head_off").click();
    $("#indicator_off").click();
    $("#body_off").click();
    $("#footer_off").click();
    $("#actions_3").click();




});



$("#metric_off").click(function(){
	metric = 0;
	$("#indicator").addClass("off");
	$("#head1m").addClass("off");
    $("#head1").removeClass("off");
});

$("#metric_on").click(function(){
	metric = 1;

	$("#head").removeClass("off")
	if(header == 0){		
		$("#header1").click();
	}else{
		$("#header2").click();
	}
	


});


$("#header1").click(function(){
	header = 0;
	if (metric == 1){
		$("#head").removeClass("off");
		$("#head1m").removeClass("off");
		$("#head2m").addClass("off");
		$("#head1").addClass("off");
		$("#head2").addClass("off");
	}else{
		$("#head").removeClass("off");
		$("#head1").removeClass("off");
		$("#head2").addClass("off");
		$("#head1m").addClass("off");
		$("#head2m").addClass("off");
	}

});

$("#header2").click(function(){
	header = 1;
	if (metric == 1){
		$("#head").removeClass("off");
		$("#head2m").removeClass("off");
		$("#head1m").addClass("off");
		$("#head1").addClass("off");
		$("#head2").addClass("off");
	}else{
		$("#head").removeClass("off");
		$("#head2").removeClass("off");
		$("#head1").addClass("off");
		$("#head1m").addClass("off");
		$("#head2m").addClass("off");
	}

});


$("#2head_on").click(function(){
	$("#head").removeClass("off");
	$("#2head").removeClass("off");

});

$("#2head_off").click(function(){
	$("#2head").addClass("off");

});



$("#body_on").click(function(){
	$("#textbody").removeClass("off");

});

$("#body_off").click(function(){
	$("#textbody").addClass("off");

});


$("#footer_on").click(function(){
	$("#footer").removeClass("off");

});

$("#footer_off").click(function(){
	$("#footer").addClass("off");

});



$("#actions_1").click(function(){
	$("#actions").removeClass("off");
	$("#actions2").addClass("off");

});

$("#actions_2").click(function(){
	$("#actions").removeClass("off");
	$("#actions2").removeClass("off");

});


$("#actions_3").click(function(){
	$("#actions").addClass("off");
	$("#actions2").addClass("off");

});



$("#indicator_1").click(function(){
	$("#indicator").removeClass("off");
	$("#ibar").removeClass();
	$("#ibar").addClass("indicator-first");
	$("#metric_on").click();

});

$("#indicator_2").click(function(){
	$("#indicator").removeClass("off");
	$("#ibar").removeClass();
	$("#ibar").addClass("indicator-second");
	$("#metric_on").click();

});

$("#indicator_3").click(function(){
	$("#indicator").removeClass("off");
	$("#ibar").removeClass();
	$("#ibar").addClass("indicator-third");
	$("#metric_on").click();

});

$("#indicator_4").click(function(){
	$("#indicator").removeClass("off");
	$("#ibar").removeClass();
	$("#ibar").addClass("indicator-forth");
	$("#metric_on").click();

});

$("#indicator_5").click(function(){
	$("#indicator").removeClass("off");
	$("#ibar").removeClass();
	$("#ibar").addClass("indicator-fifth");
	$("#metric_on").click();

});

$("#indicator_6").click(function(){
	$("#indicator").removeClass("off");
	$("#ibar").removeClass();
	$("#ibar").addClass("indicator-sixth");
	$("#metric_on").click();

});

$("#indicator_off").click(function(){
	$("#indicator").addClass("off");
	$("#ibar").removeClass();

});















