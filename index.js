<<<<<<< HEAD
module.exports=function(t){function e(u){if(n[u])return n[u].exports;var r=n[u]={i:u,l:!1,exports:{}};return t[u].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,u){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:u})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var u,r,a,i,s,l;return t/=255,e/=255,n/=255,u=Math.max(t,e,n),r=Math.min(t,e,n),s=(u+r)/2,u===r?a=i=0:(l=u-r,i=s>.5?l/(2-u-r):l/(u+r),u===t?a=(e-n)/l+(e<n?6:0):u===e?a=(n-t)/l+2:u===n&&(a=(t-e)/l+4),a/=6),[a,i,s]}},function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var u=e[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}return function(e,n,u){return n&&t(e.prototype,n),u&&t(e,u),e}}();e.default=function(t){return new c(t)};var a=u(n(2)),i=u(n(3)),s=u(n(0)),l=u(n(4)),o=u(n(5)),f=u(n(6)),h=u(n(8)),c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.__alpha=1,this.__rotate=0,this.__saturate=0,this.__lightness=0,this.__hsl=[0,0,0],e instanceof t?Object.assign(this,e):"string"==typeof e&&(this.__hsl=(0,f.default)(e))}return r(t,[{key:"setAlpha",value:function(t){return this.__alpha=t,this}},{key:"setHue",value:function(t){return this.__hsl[0]=Math.max(0,Math.min(360,t))/360,this}},{key:"setSaturation",value:function(t){return this.__hsl[1]=Math.max(0,Math.min(1,t)),this}},{key:"setLightness",value:function(t){return this.__hsl[2]=Math.max(0,Math.min(1,t)),this}},{key:"getAlpha",value:function(){return this.__alpha}},{key:"getHue",value:function(){return 360*this.__hsl[0]}},{key:"getSaturation",value:function(){return this.__hsl[1]}},{key:"getLightness",value:function(){return this.__hsl[2]}},{key:"lighten",value:function(t){return this.__lightness+=t,this}},{key:"darken",value:function(t){return this.__lightness-=t,this}},{key:"desaturate",value:function(t){return this.__saturate-=t,this}},{key:"saturate",value:function(t){return this.__saturate+=t,this}},{key:"rotate",value:function(t){return this.__rotate+=t/360,this}},{key:"mix",value:function(e,n){var u=l.default.apply(null,new t(e).rgbArray()),r=l.default.apply(null,this.rgbArray()),a=u.map(function(t,e){return(0,h.default)(r[e],t,n)});return this.__hsl=s.default.apply(null,o.default.apply(null,a)),this}},{key:"copy",value:function(){return new t(this)}},{key:"applyHsl",value:function(){for(var t=this.__hsl.slice();t[0]+this.__rotate<0;)this.__rotate+=1;for(;t[0]+this.__rotate>1;)this.__rotate-=1;return t[0]=Math.max(0,Math.min(1,t[0]+this.__rotate)),t[1]=Math.max(0,Math.min(1,t[1]+this.__saturate)),t[2]=Math.max(0,Math.min(1,t[2]+this.__lightness)),t}},{key:"applyHslString",value:function(){var t=this.applyHsl();return[Math.round(360*t[0]),Math.round(100*t[1])+"%",Math.round(100*t[2])+"%"]}},{key:"rgbArray",value:function(){return a.default.apply(null,this.applyHsl())}},{key:"rgba",value:function(){return"rgba("+this.rgbArray().concat(this.__alpha).join(", ")+")"}},{key:"rgb",value:function(){return"rgb("+this.rgbArray().join(", ")+")"}},{key:"hsl",value:function(){return"hsl("+this.applyHslString().join(", ")+")"}},{key:"hsla",value:function(){return"hsla("+this.applyHslString().concat(this.__alpha).join(", ")+")"}},{key:"hex",value:function(){return i.default.apply(null,a.default.apply(null,this.applyHsl()))}}]),t}()},function(t,e,n){"use strict";function u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var r,a,i,s,l;return 0===e?r=a=i=n:(r=u(l=2*n-(s=n<.5?n*(1+e):n+e-n*e),s,t+1/3),a=u(l,s,t),i=u(l,s,t-1/3)),[Math.round(255*r),Math.round(255*a),Math.round(255*i)]}},function(t,e,n){"use strict";function u(t){return 2===(t=t.toString(16)).length?t:0+t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){return"#"+u(t)+u(e)+u(n)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var u=1-t/255,r=1-e/255,a=1-n/255,i=0,s=Math.min(u,r,a);return u=(u-s)/(1-s),r=(r-s)/(1-s),a=(a-s)/(1-s),i=s,[u,r,a,i]}},function(t,e,n){"use strict";function u(t){return Math.round(255*(1-t)+.5)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,r){return[u(t*(1-r)+r),u(e*(1-r)+r),u(n*(1-r)+r)]}},function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return i.test(t)?r.default.apply(null,i.exec(t).map(function(t){return Number(t.trim())})):s.test(t)?s.exec(t).map(function(t,e){return 0===e?Number(t):Number(t/100)}):l.test(t)?r.default.apply(null,(0,a.default)(t)):void 0};var r=u(n(0)),a=u(n(7)),i=/^rgb\(([0-9\.\s]+),([0-9\.\s]+),([0-9\.\s]+)\)$/,s=/^hsl\(([0-9\.\s]+),([0-9\.\s]+)%(\s+|),([0-9\.\s]+)%(\s+|)\)$/,l=/^#([0-9a-zA-Z]+)$/},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t=4===t.length?t[1]+t[1]+t[2]+t[2]+t[3]+t[3]:t.substring(1),[parseInt(t.substring(0,2),16),parseInt(t.substring(2,4),16),parseInt(t.substring(4,6),16)]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){return t+(e-t)*n}}]).default;
=======
module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)n.d(r,u,function(e){return t[e]}.bind(null,u));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var r,u,a,i,l,s;return t/=255,e/=255,n/=255,l=((r=Math.max(t,e,n))+(u=Math.min(t,e,n)))/2,r===u?a=i=0:(s=r-u,i=l>.5?s/(2-r-u):s/(r+u),r===t?a=(e-n)/s+(e<n?6:0):r===e?a=(n-t)/s+2:r===n&&(a=(t-e)/s+4),a/=6),[a,i,l]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.default=function(t){return new h(t)};var u=c(n(2)),a=c(n(3)),i=c(n(0)),l=c(n(4)),s=c(n(5)),o=c(n(6)),f=c(n(8));function c(t){return t&&t.__esModule?t:{default:t}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.__alpha=1,this.__rotate=0,this.__saturate=0,this.__lightness=0,this.__hsl=[0,0,0],e instanceof t?Object.assign(this,e):"string"==typeof e&&(this.__hsl=(0,o.default)(e))}return r(t,[{key:"setAlpha",value:function(t){return this.__alpha=t,this}},{key:"setHue",value:function(t){return this.__hsl[0]=Math.max(0,Math.min(360,t))/360,this}},{key:"setSaturation",value:function(t){return this.__hsl[1]=Math.max(0,Math.min(1,t)),this}},{key:"setLightness",value:function(t){return this.__hsl[2]=Math.max(0,Math.min(1,t)),this}},{key:"lighten",value:function(t){return this.__lightness+=t,this}},{key:"darken",value:function(t){return this.__lightness-=t,this}},{key:"desaturate",value:function(t){return this.__saturate-=t,this}},{key:"saturate",value:function(t){return this.__saturate+=t,this}},{key:"rotate",value:function(t){return this.__rotate+=t/360,this}},{key:"mix",value:function(e,n){var r=l.default.apply(null,new t(e).rgbArray()),u=l.default.apply(null,this.rgbArray()),a=r.map(function(t,e){return(0,f.default)(u[e],t,n)});return this.__hsl=i.default.apply(null,s.default.apply(null,a)),this}},{key:"copy",value:function(){return new t(this)}},{key:"applyHsl",value:function(){for(var t=this.__hsl.slice();t[0]+this.__rotate<0;)this.__rotate+=1;for(;t[0]+this.__rotate>1;)this.__rotate-=1;return t[0]=Math.max(0,Math.min(1,t[0]+this.__rotate)),t[1]=Math.max(0,Math.min(1,t[1]+this.__saturate)),t[2]=Math.max(0,Math.min(1,t[2]+this.__lightness)),t}},{key:"applyHslString",value:function(){var t=this.applyHsl();return[Math.round(360*t[0]),Math.round(100*t[1])+"%",Math.round(100*t[2])+"%"]}},{key:"rgbArray",value:function(){return u.default.apply(null,this.applyHsl())}},{key:"rgba",value:function(){return"rgba("+this.rgbArray().concat(this.__alpha).join(", ")+")"}},{key:"rgb",value:function(){return"rgb("+this.rgbArray().join(", ")+")"}},{key:"hsl",value:function(){return"hsl("+this.applyHslString().join(", ")+")"}},{key:"hsla",value:function(){return"hsla("+this.applyHslString().concat(this.__alpha).join(", ")+")"}},{key:"hex",value:function(){return a.default.apply(null,u.default.apply(null,this.applyHsl()))}},{key:"hexa",value:function(){return this.hex()+Math.round(255*this.__alpha).toString(16)}}]),t}()},function(t,e,n){"use strict";function r(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var u,a,i,l,s;return 0===e?u=a=i=n:(u=r(s=2*n-(l=n<.5?n*(1+e):n+e-n*e),l,t+1/3),a=r(s,l,t),i=r(s,l,t-1/3)),[Math.round(255*u),Math.round(255*a),Math.round(255*i)]}},function(t,e,n){"use strict";function r(t){return 2===(t=t.toString(16)).length?t:0+t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){return"#"+r(t)+r(e)+r(n)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var r=1-t/255,u=1-e/255,a=1-n/255,i=Math.min(r,u,a);return[r=(r-i)/(1-i),u=(u-i)/(1-i),a=(a-i)/(1-i),i]}},function(t,e,n){"use strict";function r(t){return Math.round(255*(1-t)+.5)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,u){return[r(t*(1-u)+u),r(e*(1-u)+u),r(n*(1-u)+u)]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return i.test(t)?r.default.apply(null,i.exec(t).map(function(t){return Number(t.trim())})):l.test(t)?l.exec(t).map(function(t,e){return 0===e?Number(t):Number(t/100)}):s.test(t)?r.default.apply(null,(0,u.default)(t)):void 0};var r=a(n(0)),u=a(n(7));function a(t){return t&&t.__esModule?t:{default:t}}var i=/^rgb\(([0-9\.\s]+),([0-9\.\s]+),([0-9\.\s]+)\)$/,l=/^hsl\(([0-9\.\s]+),([0-9\.\s]+)%(\s+|),([0-9\.\s]+)%(\s+|)\)$/,s=/^#([0-9a-zA-Z]+)$/},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t=4===t.length?t[1]+t[1]+t[2]+t[2]+t[3]+t[3]:t.substring(1),[parseInt(t.substring(0,2),16),parseInt(t.substring(2,4),16),parseInt(t.substring(4,6),16)]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){return t+(e-t)*n}}]).default;
>>>>>>> dev
