(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{12:function(e,t,n){"use strict";function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,"a",function(){return r})},23:function(e,t,n){e.exports=n(61)},24:function(e,t,n){"use strict";var r=n(5),a=n.n(r),i=n(0),o=n.n(i),u=n(1),c=n(3),l=n.n(c),s=n(13),d=n(8),f=n(6);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n,r,a,i,o){try{var u=e[i](o),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    mutation SIGNIN_MUTATION (\n        $email: String!, $password: String!\n    ) {\n  signIn(email: $email, password: $password) {\n    id\n    email\n    name\n  }\n}\n"]);return v=function(){return e},e}var T=l()(v()),E=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return r=this,a=(e=p(t)).call.apply(e,[this].concat(o)),n=!a||"object"!==m(a)&&"function"!=typeof a?b(r):a,y(b(b(n)),"state",{password:"",email:""}),y(b(b(n)),"saveToState",function(e){n.setState(y({},e.target.name,e.target.value))}),n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,i["Component"]),n=t,(r=[{key:"render",value:function(){var e=this;return o.a.createElement(u.Mutation,{mutation:T,variables:this.state,refetchQueries:[{query:f.a}]},function(t,n){var r=n.error,i=n.loading;return o.a.createElement(s.a,{method:"post",onSubmit:function(){var n,r=(n=a.a.mark(function n(r){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,t();case 3:n.sent,e.setState({password:"",email:""});case 5:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,a){var i=n.apply(e,t);function o(e){h(i,r,a,o,u,"next",e)}function u(e){h(i,r,a,o,u,"throw",e)}o(void 0)})});return function(e){return r.apply(this,arguments)}}()},o.a.createElement("fieldset",{disabled:i,"aria-busy":i},o.a.createElement("h2",null,"Sign in to your Account"),o.a.createElement(d.a,{error:r}),o.a.createElement("label",{htmlFor:"email"},"Email",o.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:e.state.email,onChange:e.saveToState})),o.a.createElement("label",{htmlFor:"password"},"Password",o.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:e.state.password,onChange:e.saveToState})),o.a.createElement("button",{type:"submit"},"Sign In")))})}}])&&g(n.prototype,r),c&&g(n,c),t}();t.a=E},28:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=6e4;function a(e){var t=new Date(e.getTime()),n=t.getTimezoneOffset();t.setSeconds(0,0);var a=t.getTime()%r;return n*r+a}},34:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1),o=n(6),u=n(24);t.a=function(e){return a.a.createElement(i.Query,{query:o.a},function(t){var n=t.data;return t.loading?a.a.createElement("p",null,"Loading..."):n.me?e.children:a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Please Sign In before continuing."),a.a.createElement(u.a,null))})}},351:function(e,t,n){__NEXT_REGISTER_PAGE("/order",function(){return e.exports=n(364),{page:e.exports.default}})},364:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(34),o=(n(4),n(1)),u=n(12),c=n(28),l=n(7);var s=n(77),d=864e5;function f(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=Object(l.a)(e,t),r=n.getUTCDay(),a=(r<1?7:0)+r-1;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function m(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=Object(l.a)(e,t),r=n.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(r+1,0,4),a.setUTCHours(0,0,0,0);var i=f(a,t),o=new Date(0);o.setUTCFullYear(r,0,4),o.setUTCHours(0,0,0,0);var u=f(o,t);return n.getTime()>=i.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}var h=6048e5;function g(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=Object(l.a)(e,t),r=f(n,t).getTime()-function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=m(e,t),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),f(r,t)}(n,t).getTime();return Math.round(r/h)+1}function p(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:Object(u.a)(a),o=null==n.weekStartsOn?i:Object(u.a)(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=Object(l.a)(e,n),s=c.getUTCDay(),d=(s<o?7:0)+s-o;return c.setUTCDate(c.getUTCDate()-d),c.setUTCHours(0,0,0,0),c}function w(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=Object(l.a)(e,t),r=n.getUTCFullYear(),a=t||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,c=null==o?1:Object(u.a)(o),s=null==a.firstWeekContainsDate?c:Object(u.a)(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(r+1,0,s),d.setUTCHours(0,0,0,0);var f=p(d,t),m=new Date(0);m.setUTCFullYear(r,0,s),m.setUTCHours(0,0,0,0);var h=p(m,t);return n.getTime()>=f.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}var b=6048e5;function y(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=Object(l.a)(e,t),r=p(n,t).getTime()-function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:Object(u.a)(a),o=null==n.firstWeekContainsDate?i:Object(u.a)(n.firstWeekContainsDate),c=w(e,t),l=new Date(0);return l.setUTCFullYear(c,0,o),l.setUTCHours(0,0,0,0),p(l,t)}(n,t).getTime();return Math.round(r/b)+1}var v="midnight",T="noon",E="morning",M="afternoon",D="evening",O="night";function x(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}function C(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+x(Math.floor(a/60),2)+n+x(a%60,2)}function S(e,t){return e%60==0?(e>0?"-":"+")+x(Math.abs(e)/60,2):C(e,t)}function P(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+x(i,2)}var N={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n,r){var a=e.getUTCFullYear(),i=a>0?a:1-a;return"yy"===t?x(i%100,2):"yo"===t?n.ordinalNumber(i,{unit:"year"}):x(i,t.length)},Y:function(e,t,n,r){var a=w(e,r),i=a>0?a:1-a;return"YY"===t?x(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):x(i,t.length)},R:function(e,t,n,r){return x(m(e,r),t.length)},u:function(e,t,n,r){return x(e.getUTCFullYear(),t.length)},Q:function(e,t,n,r){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return x(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n,r){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return x(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n,r){var a=e.getUTCMonth();switch(t){case"M":return String(a+1);case"MM":return x(a+1,2);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n,r){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return x(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=y(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):x(a,t.length)},I:function(e,t,n,r){var a=g(e,r);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):x(a,t.length)},d:function(e,t,n,r){var a=e.getUTCDate();return"do"===t?n.ordinalNumber(a,{unit:"date"}):x(a,t.length)},D:function(e,t,n,r){var a=function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=Object(l.a)(e,t),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var a=r-n.getTime();return Math.floor(a/d)+1}(e,r);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):x(a,t.length)},E:function(e,t,n,r){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return x(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return x(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n,r){var a=e.getUTCDay(),i=0===a?7:a;switch(t){case"i":return String(i);case"ii":return x(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?T:0===a?v:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?D:a>=12?M:a>=4?E:O,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n,r){var a=e.getUTCHours()%12;return 0===a&&(a=12),"ho"===t?n.ordinalNumber(a,{unit:"hour"}):x(a,t.length)},H:function(e,t,n,r){var a=e.getUTCHours();return"Ho"===t?n.ordinalNumber(a,{unit:"hour"}):x(a,t.length)},K:function(e,t,n,r){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):x(a,t.length)},k:function(e,t,n,r){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):x(a,t.length)},m:function(e,t,n,r){var a=e.getUTCMinutes();return"mo"===t?n.ordinalNumber(a,{unit:"minute"}):x(a,t.length)},s:function(e,t,n,r){var a=e.getUTCSeconds();return"so"===t?n.ordinalNumber(a,{unit:"second"}):x(a,t.length)},S:function(e,t,n,r){var a=t.length,i=e.getUTCMilliseconds();return x(Math.floor(i*Math.pow(10,a-3)),a)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return S(a);case"XXXX":case"XX":return C(a);case"XXXXX":case"XXX":default:return C(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return S(a);case"xxxx":case"xx":return C(a);case"xxxxx":case"xxx":default:return C(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+P(a,":");case"OOOO":default:return"GMT"+C(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+P(a,":");case"zzzz":default:return"GMT"+C(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return x(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return x((r._originalDate||e).getTime(),t.length)}};function j(e,t,n){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function Y(e,t,n){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var k={p:Y,P:function(e,t,n){var r,a=e.match(/(P+)(p+)?/),i=a[1],o=a[2];if(!o)return j(e,t);switch(i){case"P":r=t.dateTime({width:"short"});break;case"PP":r=t.dateTime({width:"medium"});break;case"PPP":r=t.dateTime({width:"long"});break;case"PPPP":default:r=t.dateTime({width:"full"})}return r.replace("{{date}}",j(i,t)).replace("{{time}}",Y(o,t))}};function U(e,t,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return function(e,t,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=Object(l.a)(e,n).getTime(),a=Object(u.a)(t);return new Date(r+a)}(e,-Object(u.a)(t),n)}var q=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,W=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,H=/^'(.*?)'?$/,z=/''/g;function I(e,t,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=String(t),a=n||{},i=a.locale||s.a,o=i.options&&i.options.firstWeekContainsDate,d=null==o?1:Object(u.a)(o),f=null==a.firstWeekContainsDate?d:Object(u.a)(a.firstWeekContainsDate);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=i.options&&i.options.weekStartsOn,h=null==m?0:Object(u.a)(m),g=null==a.weekStartsOn?h:Object(u.a)(a.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var p=Object(l.a)(e,a);if(!function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=Object(l.a)(e,t);return!isNaN(n)}(p,a))return"Invalid Date";var w=U(p,Object(c.a)(p),a),b={firstWeekContainsDate:f,weekStartsOn:g,locale:i,_originalDate:p};return r.match(W).map(function(e){var t=e[0];return"p"===t||"P"===t?(0,k[t])(e,i.formatLong,b):e}).join("").match(q).map(function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return e.match(H)[1].replace(z,"'");var n=N[t];return n?n(w,e,i.localize,b):e}).join("")}var F=n(23),_=n.n(F),Q=n(3),L=n.n(Q),$=n(17),G=n(2).b.div.withConfig({displayName:"OrderStyles",componentId:"sc-1vkfrvk-0"})(["max-width:1000px;margin:0 auto;border:1px solid ",";box-shadow:",";padding:2rem;border-top:10px solid red;& > p{display:grid;grid-template-columns:1fr 5fr;margin:0;border-bottom:1px solid ",";span{padding:1rem;&:first-child{font-weight:900;text-align:right;}}}.order-item{border-bottom:1px solid ",";display:grid;grid-template-columns:300px 1fr;align-items:center;grid-gap:2rem;margin:2rem 0;padding-bottom:2rem;img{width:100%;height:100%;object-fit:cover;}}"],function(e){return e.theme.offWhite},function(e){return e.theme.bs},function(e){return e.theme.offWhite},function(e){return e.theme.offWhite}),X=n(8);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    query SINGLE_ORDER_QUERY($id: ID!) {\n        order(id: $id) {\n            id\n            charge\n            total\n            createdAt\n            user {\n                id\n            }\n            items {\n                id\n                title\n                description\n                price\n                image\n                quantity\n            }\n        }\n    }\n"]);return V=function(){return e},e}var K=L()(V()),ee=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,J(t).apply(this,arguments))}var n,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return a.a.createElement(o.Query,{query:K,variables:{id:this.props.id}},function(e){var t=e.data,n=e.error,r=e.loading;if(n)return a.a.createElement(X.a,{error:n});if(r)return a.a.createElement("p",null,"Loading...");var i=t.order;return a.a.createElement(G,null,a.a.createElement(_.a,null,a.a.createElement("title",null,"NOT SUPREME | Order ",i.id)),a.a.createElement("p",null,a.a.createElement("span",null,"Order ID:"),a.a.createElement("span",null,i.id)),a.a.createElement("p",null,a.a.createElement("span",null,"Charge:"),a.a.createElement("span",null,i.charge)),a.a.createElement("p",null,a.a.createElement("span",null,"Date:"),a.a.createElement("span",null,I(i.createdAt,"MMMM dd, YYYY hh:mma"))),a.a.createElement("p",null,a.a.createElement("span",null,"Item Count:"),a.a.createElement("span",null,i.items.length)),a.a.createElement("p",null,a.a.createElement("span",null,"Total:"),a.a.createElement("span",null,Object($.a)(i.total))),a.a.createElement("div",{className:"items"},i.items.map(function(e){return a.a.createElement("div",{className:"order-item",key:e.id},a.a.createElement("img",{src:e.image,alt:e.title}),a.a.createElement("div",{className:"item-details"},a.a.createElement("h2",null,e.title),a.a.createElement("p",null,"Qty: ",e.quantity),a.a.createElement("p",null,"Each: ",Object($.a)(e.price)),a.a.createElement("p",null,"SubTotal: ",Object($.a)(e.price*e.quantity)),a.a.createElement("p",null,e.description)))})))})}}])&&B(n.prototype,i),u&&B(n,u),t}();t.default=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null,a.a.createElement(ee,{id:e.query.id})))}},7:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(12),a=n(28),i=36e5,o=6e4,u=2,c={dateTimeDelimeter:/[T ]/,plainTime:/:/,timeZoneDelimeter:/[Z ]/i,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-])(\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function l(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(null===e)return new Date(NaN);var n=t||{},l=null==n.additionalDigits?u:Object(r.a)(n.additionalDigits);if(2!==l&&1!==l&&0!==l)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))return new Date(e.getTime());if("number"==typeof e||"[object Number]"===Object.prototype.toString.call(e))return new Date(e);if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var d=function(e){var t,n={},r=e.split(c.dateTimeDelimeter);c.plainTime.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],c.timeZoneDelimeter.test(n.date)&&(n.date=e.split(c.timeZoneDelimeter)[0],t=e.substr(n.date.length,e.length)));if(t){var a=c.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}(e),f=function(e,t){var n,r=c.YYY[t],a=c.YYYYY[t];if(n=c.YYYY.exec(e)||a.exec(e)){var i=n[1];return{year:parseInt(i,10),restDateString:e.slice(i.length)}}if(n=c.YY.exec(e)||r.exec(e)){var o=n[1];return{year:100*parseInt(o,10),restDateString:e.slice(o.length)}}return{year:null}}(d.date,l),b=f.year,y=function(e,t){if(null===t)return null;var n,r,a,i;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=c.MM.exec(e))return r=new Date(0),a=parseInt(n[1],10)-1,h(t,a)?(r.setUTCFullYear(t,a),r):new Date(NaN);if(n=c.DDD.exec(e)){r=new Date(0);var o=parseInt(n[1],10);return function(e,t){if(t<1)return!1;var n=m(e);if(n&&t>366)return!1;if(!n&&t>365)return!1;return!0}(t,o)?(r.setUTCFullYear(t,0,o),r):new Date(NaN)}if(n=c.MMDD.exec(e)){r=new Date(0),a=parseInt(n[1],10)-1;var u=parseInt(n[2],10);return h(t,a,u)?(r.setUTCFullYear(t,a,u),r):new Date(NaN)}if(n=c.Www.exec(e))return i=parseInt(n[1],10)-1,g(t,i)?s(t,i):new Date(NaN);if(n=c.WwwD.exec(e)){i=parseInt(n[1],10)-1;var l=parseInt(n[2],10)-1;return g(t,i,l)?s(t,i,l):new Date(NaN)}return null}(f.restDateString,b);if(isNaN(y))return new Date(NaN);if(y){var v,T=y.getTime(),E=0;if(d.time&&(E=function(e){var t,n,r;if(t=c.HH.exec(e))return p(n=parseFloat(t[1].replace(",",".")))?n%24*i:NaN;if(t=c.HHMM.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),p(n,r)?n%24*i+r*o:NaN;if(t=c.HHMMSS.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var a=parseFloat(t[3].replace(",","."));return p(n,r,a)?n%24*i+r*o+1e3*a:NaN}return null}(d.time),isNaN(E)))return new Date(NaN);if(d.timezone){if(v=function(e){var t,n,r;if(t=c.timezoneZ.exec(e))return 0;if(t=c.timezoneHH.exec(e))return w(r=parseInt(t[2],10))?(n=r*i,"+"===t[1]?-n:n):NaN;if(t=c.timezoneHHMM.exec(e)){r=parseInt(t[2],10);var a=parseInt(t[3],10);return w(r,a)?(n=r*i+a*o,"+"===t[1]?-n:n):NaN}return 0}(d.timezone),isNaN(v))return new Date(NaN)}else v=Object(a.a)(new Date(T+E)),v=Object(a.a)(new Date(T+E+v));return new Date(T+E+v)}return new Date(NaN)}function s(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}var d=[31,28,31,30,31,30,31,31,30,31,30,31],f=[31,29,31,30,31,30,31,31,30,31,30,31];function m(e){return e%400==0||e%4==0&&e%100!=0}function h(e,t,n){if(t<0||t>11)return!1;if(null!=n){if(n<1)return!1;var r=m(e);if(r&&n>f[t])return!1;if(!r&&n>d[t])return!1}return!0}function g(e,t,n){return!(t<0||t>52)&&(null==n||!(n<0||n>6))}function p(e,t,n){return(null==e||!(e<0||e>=25))&&((null==t||!(t<0||t>=60))&&(null==n||!(n<0||n>=60)))}function w(e,t){return null==t||!(t<0||t>59)}},77:function(e,t,n){"use strict";var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function a(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var i={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(e){return function(t,n){var r=n||{},a=r.width?String(r.width):e.defaultWidth;return("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues?e.formattingValues[a]||e.formattingValues[e.defaultFormattingWidth]:e.values[a]||e.values[e.defaultWidth])[e.argumentCallback?e.argumentCallback(t):t]}}function c(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var c,l=u[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(s)?s.findIndex(function(e){return e.test(r)}):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(s,function(e){return e.test(r)}),c=e.valueCallback?e.valueCallback(c):c,{value:c=a.valueCallback?a.valueCallback(c):c,rest:r.slice(l.length)}}}var l,s={formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof r[e]?r[e]:1===t?r[e].one:r[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:i,formatRelative:function(e,t,n,r){return o[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaulFormattingWidth:"wide"})},match:{ordinalNumber:(l={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(l.matchPattern);if(!a)return null;var i=a[0],o=n.match(l.parsePattern);if(!o)return null;var u=l.valueCallback?l.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};t.a=s}},[[351,1,0]]]);