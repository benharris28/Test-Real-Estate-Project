(function () {
  'use strict';

  var n$1,u,i$1,t$1,o$2,r$2,e$3={},c$1=[],a$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function v(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var i,t=arguments,o={};for(i in l)"key"!==i&&"ref"!==i&&(o[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===o[i]&&(o[i]=n.defaultProps[i]);return y(n,o,l&&l.key,l&&l.ref,null)}function y(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(r.__v=r),n$1.vnode&&n$1.vnode(r),r}function p(){return {}}function d(n){return n.children}function m$1(n,l){this.props=n,this.context=l;}function w$1(n,l){if(null==l)return n.__?w$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?w$1(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k(n)}}function g$1(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!i$1++||o$2!==n$1.debounceRendering)&&((o$2=n$1.debounceRendering)||t$1)(_$2);}function _$2(){for(var n;i$1=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=i,t=z$1(f,o,i,l.__n,void 0!==f.ownerSVGElement,null,u,null==r?w$1(o):r),T$1(u,o),t!=r&&k(o)));});}function b(n,l,u,i,t,o,r,f,a,s){var h,p,m,k,g,_,b,x,A,P=i&&i.__k||c$1,C=P.length;for(a==e$3&&(a=null!=r?r[0]:C?w$1(i,0):null),u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?y(null,k,null,null,k):Array.isArray(k)?y(d,{children:k},null,null,null):null!=k.__e||null!=k.__c?y(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(m=P[h])||m&&k.key==m.key&&k.type===m.type)P[h]=void 0;else for(p=0;p<C;p++){if((m=P[p])&&k.key==m.key&&k.type===m.type){P[p]=void 0;break}m=null;}if(g=z$1(n,k,m=m||e$3,t,o,r,f,a,s),(p=k.ref)&&m.ref!=p&&(x||(x=[]),m.ref&&x.push(m.ref,null,k),x.push(p,k.__c||g,k)),null!=g){if(null==b&&(b=g),A=void 0,void 0!==k.__d)A=k.__d,k.__d=void 0;else if(r==m||g!=a||null==g.parentNode){n:if(null==a||a.parentNode!==n)n.appendChild(g),A=null;else {for(_=a,p=0;(_=_.nextSibling)&&p<C;p+=2)if(_==g)break n;n.insertBefore(g,a),A=a;}"option"==u.type&&(n.value="");}a=void 0!==A?A:g.nextSibling,"function"==typeof u.type&&(u.__d=a);}else a&&m.__e==a&&a.parentNode!=n&&(a=w$1(m));}if(u.__e=b,null!=r&&"function"!=typeof u.type)for(h=r.length;h--;)null!=r[h]&&v(r[h]);for(h=C;h--;)null!=P[h]&&D$1(P[h],P[h]);if(x)for(h=0;h<x.length;h++)j$1(x[h],x[++h],x[++h]);}function x$1(n){return null==n||"boolean"==typeof n?[]:Array.isArray(n)?c$1.concat.apply([],n.map(x$1)):[n]}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===a$1.test(l)?u+"px":null==u?"":u;}function C(n,l,u,i,t){var o,r,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else {if("string"==typeof i&&(o.cssText="",i=null),i)for(e in i)u&&e in u||P$1(o,e,"");if(u)for(c in u)i&&u[c]===i[c]||P$1(o,c,u[c]);}else "o"===l[0]&&"n"===l[1]?(r=l!==(l=l.replace(/Capture$/,"")),f=l.toLowerCase(),l=(f in n?f:l).slice(2),u?(i||n.addEventListener(l,N$1,r),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N$1,r)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function N$1(l){this.l[l.type](n$1.event?n$1.event(l):l);}function z$1(l,u,i,t,o,r,f,e,c){var a,v,h,y,p,w,k,g,_,x,A,P=u.type;if(void 0!==u.constructor)return null;(a=n$1.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,_=(a=P.contextType)&&t[a.__c],x=a?_?_.props.value:a.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new m$1(g,x),v.constructor=P,v.render=E),_&&_.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(g,v.__s))),y=v.props,p=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){for(v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,p,w);});}v.context=x,v.props=g,v.state=v.__s,(a=n$1.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(y,p)),A=null!=a&&a.type==d&&null==a.key?a.props.children:a,b(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=$$1(i.__e,u,i,t,o,r,f,c);(a=n$1.diffed)&&a(u);}catch(l){u.__v=null,n$1.__e(l,u,i);}return u.__e}function T$1(l,u){n$1.__c&&n$1.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n$1.__e(l,u.__v);}});}function $$1(n,l,u,i,t,o,r,f){var a,s,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(a=0;a<o.length;a++)if(null!=(s=o[a])&&((null===l.type?3===s.nodeType:s.localName===l.type)||n==s)){n=s,o[a]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,f=!1;}if(null===l.type)p!==d&&n.data!=d&&(n.data=d);else {if(null!=o&&(o=c$1.slice.call(n.childNodes)),v=(p=u.props||e$3).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!f){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""));}A(n,d,p,t,f),h?l.__k=[]:(a=l.props.children,b(n,Array.isArray(a)?a:[a],l,u,i,"foreignObject"!==l.type&&t,o,r,e$3,f)),f||("value"in d&&void 0!==(a=d.value)&&a!==n.value&&C(n,"value",a,p.value,!1),"checked"in d&&void 0!==(a=d.checked)&&a!==n.checked&&C(n,"checked",a,p.checked,!1));}return n}function j$1(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n$1.__e(l,i);}}function D$1(l,u,i){var t,o,r;if(n$1.unmount&&n$1.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||j$1(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n$1.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&D$1(t[r],u,i);null!=o&&v(o);}function E(n,l,u){return this.constructor(n,u)}function H$1(l,u,i){var t,o,f;n$1.__&&n$1.__(l,u),o=(t=i===r$2)?null:i&&i.__k||u.__k,l=h(d,null,[l]),f=[],z$1(u,(t?u:i||u).__k=l,o||e$3,e$3,void 0!==u.ownerSVGElement,i&&!t?[i]:o?null:u.childNodes.length?c$1.slice.call(u.childNodes):null,f,i||e$3,t),T$1(f,l);}function I$1(n,l){H$1(n,l,r$2);}n$1={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return g$1(u.__E=u)}catch(l){n=l;}throw n}},m$1.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),g$1(this));},m$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g$1(this));},m$1.prototype.render=d,u=[],i$1=0,t$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r$2=e$3;

  var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t=new Map;function e$2(s){var r=t.get(this);return r||(r=new Map,t.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

  var m=e$2.bind(h);

  function r$1(n,t){for(var r in t)n[r]=t[r];return n}function e$1(n){var t=[];function e(n){for(var r=[],e=0;e<t.length;e++)t[e]===n?n=null:r.push(t[e]);t=r;}function o(e,o,i){n=o?e:r$1(r$1({},n),e);for(var u=t,c=0;c<u.length;c++)u[c](n,i);}return n=n||{},{action:function(t){function r(n){o(n,!1,t);}return function(){for(var e=arguments,o=[n],i=0;i<arguments.length;i++)o.push(e[i]);var u=t.apply(this,o);if(null!=u)return u.then?u.then(r):r(u)}},setState:o,subscribe:function(n){return t.push(n),function(){e(n);}},unsubscribe:e,getState:function(){return n}}}function o$1(e,o){var i;return "function"!=typeof e&&("string"==typeof(i=e||{})&&(i=i.split(/\s*,\s*/)),e=function(n){for(var t={},r=0;r<i.length;r++)t[i[r]]=n[i[r]];return t}),function(i){function u(t,u){var c=this,f=u.store,s=e(f?f.getState():{},t),a=o?function(n,t){"function"==typeof n&&(n=n(t));var r={};for(var e in n)r[e]=t.action(n[e]);return r}(o,f):{store:f},h$1=function(){var n=e(f?f.getState():{},t);for(var r in n)if(n[r]!==s[r])return s=n,c.setState({});for(var o in s)if(!(o in n))return s=n,c.setState({})};this.componentWillReceiveProps=function(n){t=n,h$1();},this.componentDidMount=function(){f.subscribe(h$1);},this.componentWillUnmount=function(){f.unsubscribe(h$1);},this.render=function(t){return h(i,r$1(r$1(r$1({},a),t),s))};}return (u.prototype=new m$1).constructor=u}}function i(n){this.getChildContext=function(){return {store:n.store}};}i.prototype.render=function(n){return n.children&&n.children[0]||n.children};

  const store = e$1({
    toasts: [],
  });

  /* Importing devtools would require commonjs and it's not worth it.
     This is copied code from what would be unistore/devtools: */

  function devtools(store) {
    var extension = window.__REDUX_DEVTOOLS_EXTENSION__ || window.top.__REDUX_DEVTOOLS_EXTENSION__;
    var ignoreState = false;

    if (!extension) {
      console.warn('Please install/enable Redux devtools extension');
      store.devtools = null;

      return store;
    }

    if (!store.devtools) {
      store.devtools = extension.connect();
      store.devtools.subscribe(function (message) {
        if (message.type === 'DISPATCH' && message.state) {
          ignoreState =
            message.payload.type === 'JUMP_TO_ACTION' || message.payload.type === 'JUMP_TO_STATE';
          store.setState(JSON.parse(message.state), true);
        }
      });
      store.devtools.init(store.getState());
      store.subscribe(function (state, action) {
        var actionName = (action && action.name) || 'setState';

        if (!ignoreState) {
          store.devtools.send(actionName, state);
        } else {
          ignoreState = false;
        }
      });
    }

    return store;
  }

  var store$1 = devtools(store);

  function getItem(key) {
    let val;

    try {
      val = localStorage.getItem(key);
    } catch (e) {
      console.error(`could not read '${key}' from localStorage`, e);
    }

    if (val) {
      try {
        return JSON.parse(val);
      } catch (e) {
        console.error(`could not json parse localStorage '${key}' value '${val}'`, e);
      }
    }

    return null;
  }

  function setItem(key, val) {
    const valJson = JSON.stringify(val);

    try {
      localStorage.setItem(key, valJson);
    } catch (e) {
      console.error(`could not write '${key}' to localStorage`, e);
    }
  }

  function clear() {
    localStorage.clear();
  }

  function isFirstVisit() {
    const isFirstVisit = getItem('returningUser') !== true;
    setItem('returningUser', true);
    return isFirstVisit;
  }

  function updateClientState(gameState) {
    setItem('clientState', gameState);
  }

  function getClientState() {
    return getItem('clientState');
  }

  function saveUserStats(userStats) {
    setItem('userStats', userStats);
  }

  function getUserStats() {
    return getItem('userStats');
  }

  const INITIAL_STREAK = { current: 0, max: 0 };

  const generateInitialStreak = () => Object.assign({}, INITIAL_STREAK);
  const generateInitialUserStats = () => ({
    games: [],
    histogram: {},
    playStreak: generateInitialStreak(),
    winStreak: generateInitialStreak(),
  });

  /* Pass in the current streak */
  const continuedStreak = ({ current, max }) => ({
    current: current + 1,
    max: Math.max(current + 1, max),
  });
  const stoppedStreak = ({ max }) => ({ current: 0, max });
  const newStreak = ({ max }) => ({ current: 1, max: Math.max(max, 1) });

  // this gets called (a) when you finish a game, or (b) when you load a new game from the server
  // and never finished yesterday's data
  const updateUserStats = store$1.action(
    (
      {
        userStats: {
          games = [],
          histogram = {},
          playStreak = generateInitialStreak(),
          winStreak = generateInitialStreak(),
        } = generateInitialUserStats(),
      },
      { serverState: { salePrice }, clientState: { id, gameOver, guessed, guessHistory } }
    ) => {
      const lastGame = games.at(-1);
      const thisGameConsecutive = lastGame && lastGame.id + 1 === id;

      let newGames = games.map(g => Object.assign({}, g));
      let newHistogram = Object.assign({}, histogram);
      let newPlayStreak = Object.assign({}, playStreak);
      let newWinStreak = Object.assign({}, winStreak);

      /* Update game history */
      if (gameOver) {
        newGames.push({ id, gameOver, guessed, guessHistory, salePrice });
      }

      /* Update win streak */
      if (thisGameConsecutive && guessed) {
        newWinStreak = continuedStreak(winStreak);
      } else if (guessed) {
        newWinStreak = newStreak(winStreak);
      } else {
        newWinStreak = stoppedStreak(winStreak);
      }

      /* Update play streak */
      if (thisGameConsecutive) {
        newPlayStreak = continuedStreak(playStreak);
      } else {
        newPlayStreak = newStreak(playStreak);
      }

      /* Update histogram */
      if (gameOver && guessed) {
        const numGuesses = guessHistory.length;
        newHistogram[numGuesses] = (newHistogram[numGuesses] || 0) + 1;
      } else if (gameOver && !guessed) {
        newHistogram.x = (newHistogram.x || 0) + 1;
      }

      const newUserStats = {
        games: newGames,
        histogram: newHistogram,
        playStreak: newPlayStreak,
        winStreak: newWinStreak,
      };

      return { userStats: newUserStats };
    }
  );

  const loadUserStats = store$1.action(async ({ userStats = generateInitialUserStats() }) => {
    const newUserStats = getUserStats() || userStats;

    return { userStats: newUserStats };
  });

  /* Keep userStats synced to localstorage */
  store$1.subscribe(newState => {
    saveUserStats(newState.userStats);
  });

  let incrementingId = 0;

  const removeToastsWithId = (toasts = [], id) => toasts.filter(toast => toast.id !== id);

  const addToast = store$1.action(
    ({ toasts = [] }, { id, type, message, persistent = false, timeout = 5000 }) => {
      id = id || `_INTERNAL_${(incrementingId += 1)}`;

      if (!persistent) {
        setTimeout(() => {
          const toasts = removeToastsWithId(store$1.getState().toasts, id);
          store$1.setState({ toasts });
        }, timeout);
      }

      // only allow a single toast for a given toast id
      toasts = removeToastsWithId(toasts, id);
      // add the toast to the end of the toast stack
      toasts = [...toasts, { id, type, message, persistent }];
      return { toasts };
    }
  );

  store$1.action(({ toasts = [] }, id) => {
    toasts = removeToastsWithId(toasts, id);
    return { toasts };
  });

  store$1.action(() => ({ toasts: [] }));

  /*
  For automatically collected events:
    https://support.google.com/analytics/answer/9234069

  For sending events:
    https://support.google.com/analytics/answer/9267735
    https://developers.google.com/analytics/devguides/collection/ga4/reference/events

  -- For all properties

  Event                   Trigger when
  ad_impression           a user sees an ad impression, for app only
  earn_virtual_currency   a user earns virtual currency (coins, gems, tokens, etc.)
  join_group              a user joins a group to measure the popularity of each group
  login                   a user logs in
  purchase                a user completes a purchase
  refund                  a user receives a refund
  search                  a user searches your content
  select_content          a user selects content
  share                   a user shares content
  sign_up                 a user signs up to measure the popularity of each sign-up method
  spend_virtual_currency  a user spends virtual currency (coins, gems, tokens, etc.)
  tutorial_begin          a user begins a tutorial
  tutorial_complete       a user completes a tutorial

  -- For games

  Event                   Trigger when
  earn_virtual_currency	  a user earns virtual currency (coins, gems, tokens, etc.)
  join_group              a user joins a group to measure the popularity of each group
  level_end               a user completes a level in the game
  level_start             a user starts a new level in the game
  level_up                a user levels-up in the game
  post_score              a user posts their score
  select_content          a user selects content
  spend_virtual_currency  a user spends virtual currency (coins, gems, tokens, etc.)
  tutorial_begin          a user begins a tutorial
  tutorial_complete       a user completes a tutorial
  unlock_achievement      a user unlocks an achievement

  */

  let warned = false;
  const warnOnce = e => {
    if (!warned) {
      console.warn('Google analytics not loaded or disabled', e);
      warned = true;
    }
  };

  const trackEvent = (eventName, params) => {

    try {
      gtag('event', eventName, params);
    } catch (e) {
      warnOnce(e);
    }
  };

  // ---- game play

  const startGame = ({ id }) => trackEvent('start_game', { game_id: id });

  const resumeGame = ({ id }) => trackEvent('resume_game', { game_id: id });

  const finishGame = ({ id, guessCount }) =>
    trackEvent('finish_game', { game_id: id, guess_count: guessCount });

  const winGame = ({ id, guessCount }) =>
    trackEvent('win_game', { game_id: id, guess_count: guessCount });

  const loseGame = ({ id, guessCount }) =>
    trackEvent('lose_game', { game_id: id, guess_count: guessCount });

  const makeGuess = ({ id, guessCount }) =>
    trackEvent('make_guess', { game_id: id, guess_count: guessCount });

  // when you return to the app after finishing today's game, but the next game isn't ready yet
  const returnPrematurely = ({ id }) => trackEvent('return_prematurely', { game_id: id });

  // ---- modals

  const openHelp = () => trackEvent('open_help');

  const openAbout = () => trackEvent('open_about');

  const openStats = () => trackEvent('open_stats');

  // ---- sharing

  const share = ({ id, method }) => trackEvent('share', { game_id: id, item_id: id, method });

  const shareAbort = ({ id }) => trackEvent('share_abort', { game_id: id });

  const shareFail = ({ id }) => trackEvent('share_fail', { game_id: id });

  // ---- outbound links

  const clickBio = who => trackEvent('click_bio', { who });

  const clickKofi = () => trackEvent('click_kofi');

  const clickFeedback = () => trackEvent('click_feedback');

  const clickListing = ({ id }) => trackEvent('click_listing', { game_id: id });

  // passing undefined says we should use the current user's locale

  const dateFormatter = new Intl.DateTimeFormat(undefined);

  const formatDate = date => {
    if (!date) {
      return '';
    }

    if (date instanceof Date) {
      return dateFormatter.format(date);
    }

    return dateFormatter.format(Date.parse(date));
  };

  let currencyFormatter;
  let currency;

  const setCurrency = newCurrency => {
    if (newCurrency && newCurrency !== currency) {
      currency = newCurrency;
      currencyFormatter = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0, // round to the nearest whole number
        maximumFractionDigits: 0, // round to the nearest whole number
      });
    }
  };
  setCurrency('USD');

  const formatCurrency = val => currencyFormatter.format(val);

  const pacificTimeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    timeZoneName: 'short',
  });
  const pacificTimeOffsetHours = date =>
    pacificTimeFormatter.format(date || new Date()).endsWith('PDT') ? -7 : -8;

  const THRESHOLD_WIN = 0.01;
  const THRESHOLD_CLOSE = 0.1;

  const score = (guess, answer) => Math.abs((guess - answer) / answer);

  const isWinningGuess = (guess, answer) => score(guess, answer) <= THRESHOLD_WIN;
  const isCloseGuess = (guess, answer) => score(guess, answer) <= THRESHOLD_CLOSE;

  const generateGuessEmoji = (guess, answer) => {
    // yes, I know calling isWinningGuess and isCloseGuess duplicates a bit of math
    if (isWinningGuess(guess, answer)) {
      return '🏡';
    } else if (isCloseGuess(guess, answer)) {
      if (guess < answer) {
        return '↗️';
      } else {
        return '↘️';
      }
    } else if (guess < answer) {
      return '⬆️';
    } else if (guess > answer) {
      return '⬇️';
    }
  };

  const getMillisUntilNextGame = () => {
    const now = new Date();

    const tomorrowPacificTime = new Date();
    // returns -7 when PDT or -8 when PST
    const tomorrowPacificTimeOffsetHours = pacificTimeOffsetHours(tomorrowPacificTime);
    tomorrowPacificTime.setUTCHours(-1 * tomorrowPacificTimeOffsetHours, 0, 0, 0);
    if (tomorrowPacificTime < now) {
      tomorrowPacificTime.setDate(tomorrowPacificTime.getDate() + 1);
    }

    return Math.abs(tomorrowPacificTime - now);
  };

  const PROPERTY_TYPES = {
    single_family: 'Single Family Home',
    condo: 'Condo',
    townhouse: 'Townhouse',
    co_op: 'Co-op',
    multi_family: 'Multi-Family',
    land: 'Land',
  };

  const displayString = (lookup, value) => {
    if (value in lookup) {
      return lookup[value];
    }

    return value;
  };

  const ListingAttribute = ({ shouldShow, prop, label, value, placeholderLength = 4 }) => {
    const reveal = shouldShow(prop);
    const placeholder = new Array(placeholderLength + 1).join('x');

    return m`
    <div class="listing__attribute">
      ${reveal &&
      m`
        <div class="listing__attribute__value">${value}</div>
      `}
      ${!reveal &&
      m`
        <div class="listing__attribute__value--hidden">${placeholder}</div>
      `}
      <div class="listing__attribute__label">${label}</div>
    </div>
  `;
  };

  class Listing extends m$1 {
    render({ id, data, showCount = 0, showEverything }, {}) {
      const {
        address,
        city,
        state,
        // zip,
        url,
        imageUrl,
        saleDate,
        salePrice,
        listDate,
        listPrice,
        beds,
        baths,
        sqft,
        lotSize,
        yearBuilt,
        propertyType,
        numUnits,
        prevSaleDate,
        prevSalePrice,

        revealableAttributes,
      } = data;

      const shouldShow = key => showEverything || showCount > revealableAttributes.indexOf(key) + 1;

      return m`
      <div class="listing">
        <div class="listing__hero">
          <img class="listing__img" src="${imageUrl}" />
          <div class="listing__sale_date">
            Sold on${' '}
            <span>${formatDate(saleDate)}</span>
          </div>
        </div>

        <div class="listing__attribute__row">
          <${ListingAttribute}
            shouldShow=${shouldShow}
            prop="cityState"
            label="Location"
            value="${city}, ${state}"
            placeholderLength=${8}
          />

          <div class="listing__attribute__group">
            <${ListingAttribute}
              shouldShow=${shouldShow}
              prop="propertyType"
              label="Property Type"
              value=${displayString(PROPERTY_TYPES, propertyType)}
              placeholderLength=${6}
            />

            ${numUnits &&
            shouldShow('propertyType') &&
            m`
              <${ListingAttribute}
                shouldShow=${() => true}
                prop="propertyType"
                label="Num Units"
                value=${numUnits}
              />
            `}
          </div>
        </div>

        <div class="listing__attribute__row">
          <div class="listing__attribute__group">
            <${ListingAttribute}
              shouldShow=${shouldShow}
              prop="bedsBaths"
              label="Beds"
              value=${beds}
              placeholderLength=${2}
            />

            <${ListingAttribute}
              shouldShow=${shouldShow}
              prop="bedsBaths"
              label="Baths"
              value=${baths}
              placeholderLength=${2}
            />

            <${ListingAttribute}
              shouldShow=${shouldShow}
              prop="yearBuilt"
              label="Built"
              value=${yearBuilt}
              placeholderLength=${3}
            />
          </div>

          <div class="listing__attribute__group">
            <${ListingAttribute}
              shouldShow=${shouldShow}
              prop="sqft"
              label="Sqft"
              value=${sqft}
              placeholderLength=${3}
            />

            <${ListingAttribute}
              shouldShow=${shouldShow}
              prop="lotSize"
              label="Lot Size"
              value=${lotSize}
              placeholderLength=${3}
            />
          </div>
        </div>

        ${((prevSaleDate && prevSalePrice) || (listDate && listPrice)) &&
        m`
          <div class="listing__attribute__row">
            ${prevSaleDate &&
            prevSalePrice &&
            m`
              <div class="listing__attribute__group">
                <${ListingAttribute}
                  shouldShow=${shouldShow}
                  prop="prevSale"
                  label="Prev Sale"
                  value=${formatDate(prevSaleDate)}
                  placeholderLength=${8}
                />

                <${ListingAttribute}
                  shouldShow=${shouldShow}
                  prop="prevSale"
                  label="Prev Price"
                  value=${formatCurrency(prevSalePrice)}
                  placeholderLength=${8}
                />
              </div>
            `}
            ${listDate &&
            listPrice &&
            m`
              <!-- TODO switch to days on market? -->
              <div class="listing__attribute__group">
                <${ListingAttribute}
                  shouldShow=${shouldShow}
                  prop="listPrice"
                  label="List Date"
                  value=${formatDate(listDate)}
                  placeholderLength=${8}
                />

                <${ListingAttribute}
                  shouldShow=${shouldShow}
                  prop="listPrice"
                  label="List Price"
                  value=${formatCurrency(listPrice)}
                  placeholderLength=${8}
                />
              </div>
            `}
          </div>
        `}
      </div>
    `;
    }
  }

  const isMobileBrowser = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const isFirefox = () => /Firefox|FxiOS/i.test(navigator.userAgent);

  class ShareButton extends m$1 {
    constructor(props) {
      super(props);
    }

    async share(e) {
      if (e.button !== 0) {
        // left click only!
        return;
      }

      const { id, guessString, guessHistory, guessed } = this.props;

      const guesses = guessHistory.length === 1 ? '1 guess' : `${guessHistory.length} guesses`;
      const headline = guessed
        ? `I got #Listed game ${id} in ${guesses}:`
        : `I was stumped by #Listed game ${id}:`;
      const text = [headline, guessString, `https://listed.fun`].join('\n\n');

      // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share#browser_compatibility
      // This is inspired by similar games' browser compatibility handling
      const canNavigatorShare = Boolean(navigator.share) && isMobileBrowser() && !isFirefox();

      // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText#browser_compatibility
      const canNavigatorClipboardWriteText =
        Boolean(navigator.clipboard) && Boolean(navigator.clipboard.writeText);

      let shared = null;
      let shareMessage = null;

      if (canNavigatorShare) {
        try {
          await navigator.share({ text });
          shared = 'navigator-share';
          shareMessage = 'Shared';
        } catch (e) {
          if (DOMException && e instanceof DOMException && e.name === 'AbortError') {
            shareAbort({ id });
            return;
          }
          console.error(`Share button navigator.share error: ${e}`);
        }
      }

      if (!shared && canNavigatorClipboardWriteText) {
        try {
          await navigator.clipboard.writeText(text);
          shared = 'clipboard';
          shareMessage = 'Copied to clipboard';
        } catch (e) {
          console.error(`Share button navigator.clipboard.writeText error: ${e}`);
        }
      }

      if (shared) {
        share({ id, method: shared });
      } else {
        shareFail({ id });
        console.error('No browser support for navigator.share or navigator.clipboard.writeText');
        console.info(
          'Share error debugging:',
          `canNavigatorShare: ${canNavigatorShare}`,
          `canNavigatorClipboardWriteText: ${canNavigatorClipboardWriteText}`,
          `isMobileBrowser(): ${isMobileBrowser()}`,
          `isFirefox(): ${isFirefox()}`,
          `navigator.userAgent: ${navigator.userAgent}`,
          `navigator.share: ${navigator.share}`,
          `navigator.clipboard: ${navigator.clipboard}`
        );
        shareMessage = 'Could not share';
      }

      addToast({
        type: Boolean(shared) ? 'success' : 'error',
        message: shareMessage,
        timeout: 2500,
      });

      return true;
    }

    render({ id, guessString }) {
      if (!id || !guessString) {
        return '';
      }

      return m`
      <button class="listed-button listed-button--share" onpointerup=${e => this.share(e)}>
        Share
      </button>
    `;
    }
  }

  const generateGuessString = (guessList, answer) =>
    guessList.map(guess => generateGuessEmoji(guess, answer)).join('');

  class GameOver extends m$1 {
    constructor(props) {
      super(props);
      this.nextGameCountdownRef = p();
    }

    componentWillUnmount() {
      this.disableCountdown();
    }

    componentDidMount() {
      this.runCountdown();
    }
    componentDidUpdate() {
      this.runCountdown();
    }

    runCountdown() {
      if (this.nextGameCountdownRef && this.nextGameCountdownRef.current) {
        this.updateCountdownValue();
        if (!this.countdownInterval) {
          this.countdownInterval = setInterval(() => this.updateCountdownValue(), 40);
        }
      } else {
        this.disableCountdown();
      }
    }

    disableCountdown() {
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
      }
    }

    updateCountdownValue() {
      if (this.nextGameCountdownRef && this.nextGameCountdownRef.current) {
        const countdown = getMillisUntilNextGame();
        const countdownHours = Math.floor(countdown / (1000 * 60 * 60));
        const countdownMinutes = Math.floor(countdown / (1000 * 60) - countdownHours * 60);
        const countdownSeconds = Math.floor(
          countdown / 1000 - countdownHours * 60 * 60 - countdownMinutes * 60
        );

        this.nextGameCountdownRef.current.textContent = [
          `${countdownHours}`,
          `${countdownMinutes}`.padStart(2, '0'),
          `${countdownSeconds}`.padStart(2, '0'),
        ].join(':');
      }
    }

    render({ clientState, serverState }) {
      const { gameOver, guessed, guessHistory, id } = clientState;
      const { url, salePrice } = serverState.listing;

      let gameOverMessage;
      if (guessed && guessHistory.length === 1) {
        gameOverMessage = 'Phenomenal!';
      } else if (guessed && guessHistory.length < 5) {
        gameOverMessage = 'Impressive!';
      } else if (guessed) {
        gameOverMessage = 'Persistent!';
      } else {
        gameOverMessage = 'Too Bad!';
      }

      guessHistory.length;
      const guessString =
        generateGuessString(guessHistory, salePrice) + ((gameOver && !guessed && '❌') || '');

      const guessesPlural = guessHistory.length === 1 ? '1 guess' : `${guessHistory.length} guesses`;

      return m`
      <div class="game-over">
        <div class="game-over__reveal">
          Sold for:
          <b>${' ' + formatCurrency(salePrice)}.${' '}</b>
        </div>
        <div class="game-over__results">
          ${gameOverMessage + ' '}
          ${guessed
            ? m`
                You got Listed in
                <b>${' ' + guessesPlural}</b>
                .
              `
            : `Sorry, you didn't guess the correct price today.`}
        </div>

        <${ShareButton}
          id=${id}
          guessString=${guessString}
          guessHistory=${guessHistory}
          guessed=${guessed}
        />
      </div>
      <div class="game-over__footer">
        <a
          class="game-over__link"
          href="${url}"
          target="_blank"
          onclick=${() => clickListing({ id })}
        >
          See listing details
        </a>
        <span>•</span>
        <div>
          Next Listed in${' '}
          <span ref=${this.nextGameCountdownRef}></span>
        </div>
      </div>
    `;
    }
  }

  const parseGuess = guess => {
    const scrubbedGuess = guess.replace(/\D/g, '');
    const numericGuess = parseInt(scrubbedGuess, 10);
    if (isNaN(numericGuess)) {
      return null;
    }
    return numericGuess;
  };

  const INITIAL_CLIENT_STATE = {
    id: null,
    gameOver: false,
    guessed: false,
    guessHistory: [],
  };

  const INITIAL_SERVER_STATE = {
    listing: null,
    maxGuesses: null,
    salePrice: null,
  };

  class Game extends m$1 {
    constructor(props) {
      super(props);

      const clientStateFromLocalStorage = getClientState();

      this.state = {
        serverState: INITIAL_SERVER_STATE,
        clientState: {
          ...INITIAL_CLIENT_STATE,
          ...clientStateFromLocalStorage,
        },
      };

      setTimeout(() => {
        this.fetchDataFromServer();
      }, 0);
    }

    addGuess(guess) {
      const { id, gameOver, guessHistory } = this.state.clientState;
      const { salePrice, maxGuesses } = this.state.serverState;

      if (gameOver) {
        return;
      }

      const guessed = isWinningGuess(guess, salePrice);
      const gameOverNow = guessed || guessHistory.length + 1 >= maxGuesses;

      let clientState = {
        id,
        gameOver: gameOverNow,
        guessed,
        guessHistory: [...guessHistory, guess],
      };
      this.setState({ clientState });

      this.syncClientStateToLocalStorage(clientState);

      makeGuess({ id, guessCount: guessHistory.length });

      if (gameOverNow) {
        updateUserStats({ serverState: this.state.serverState, clientState });

        finishGame({ id, guessCount: guessHistory.length });
        if (guessed) {
          winGame({ id, guessCount: guessHistory.length });
        } else {
          loseGame({ id, guessCount: guessHistory.length });
        }
      }
    }

    syncClientStateToLocalStorage({ gameOver, guessed, guessHistory, id }) {
      updateClientState({ gameOver, guessed, guessHistory, id });
    }

    onChangeGuess(e) {
      // e.target.value on first call will be a number, like 7
      // this will format the number to a currency string like $7
      // subsequent calls will then come in with a string like $72 or $721,7
      // and this code will reformat the value to $72 (unchanged) or $7,217
      // BUT doing so makes your cursor move, so we need to change the cursor position
      const guess = parseGuess(e.target.value);
      if (guess) {
        e.target.value = formatCurrency(guess);
      }
    }

    onSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const value = formData.get('guess');
      const guess = parseGuess(value);

      if (guess) {
        this.addGuess(guess);
      } // else error handling

      form.elements.guess.value = '';
    }

    async fetchDataFromServer() {
      const dataUrl =
        '/data';
      const response = await fetch(dataUrl);
      const listing = await response.json();
      const { id, currency } = listing;

      setCurrency(currency);

      const serverState = {
        listing,
        maxGuesses: listing.revealableAttributes.length + 1,
        salePrice: listing.salePrice,
      };

      if (id !== this.state.clientState.id) {
        // Start a new game by resetting clientState in addition to setting serverState
        const clientState = { ...INITIAL_CLIENT_STATE, id };
        this.syncClientStateToLocalStorage(clientState);
        this.setState({ serverState, clientState });
        startGame({ id });
      } else {
        // Resume old game with this serverState; clientState is loaded from LocalStorage
        this.setState({ serverState });
        if (this.state.clientState.gameOver) {
          returnPrematurely({ id });
        } else {
          resumeGame({ id });
        }
      }
    }

    render({}, { clientState, serverState }) {
      const { listing, salePrice, maxGuesses } = serverState;
      const { gameOver, guessHistory } = clientState;

      const guessCount = guessHistory.length;
      const remainingGuesses = maxGuesses - guessCount;
      const lastGuess = guessCount > 0 ? guessHistory.at(-1) : null;
      const lastGuessEmoji = lastGuess ? generateGuessEmoji(lastGuess, salePrice) : null;

      return m`
      <div class="game">
        ${listing &&
        m`
          <${Listing} data=${listing} showCount=${guessCount + 1} showEverything=${gameOver} />

          ${!gameOver &&
          m`
            <div class="listed-guess-area">
              ${!gameOver &&
              m`
                <div class="listed-last-guess">
                  ${lastGuess &&
                  m`
                    <span>
                      <label>Last Guess</label>
                      ${' '}${formatCurrency(lastGuess)}
                    </span>
                    <span>
                      <label>Next Guess</label>
                      ${' '}${lastGuessEmoji}
                    </span>
                  `}
                </div>
                <form class="listed-guess-form" onSubmit=${e => this.onSubmit(e)}>
                  <input
                    name="guess"
                    class="listed-input"
                    type="tel"
                    placeholder=${(() => {
                      if (guessCount === 0) {
                        return 'Guess That Price';
                      } else if (remainingGuesses === 1) {
                        return 'Last Guess...';
                      } else {
                        return `${remainingGuesses} Guesses Left`;
                      }
                    })()}
                    onInput=${e => this.onChangeGuess(e)}
                  />
                  ${' '}
                  <button class="listed-button" type="submit">Guess</button>
                </form>
              `}
            </div>
          `}
          ${gameOver &&
          m`
            <${GameOver} serverState=${serverState} clientState=${clientState} />
          `}
        `}
      </div>
    `;
    }
  }

  var r,o=[],c=n$1.__r,f=n$1.diffed,e=n$1.__c,a=n$1.unmount;function _$1(){o.some(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(q$1),t.__H.__h=[];}catch(u){return t.__H.__h=[],n$1.__e(u,t.__v),!0}}),o=[];}function g(n){"function"==typeof n.u&&n.u();}function q$1(n){n.u=n.__();}n$1.__r=function(n){c&&c(n);var r=(n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(q$1),r.__h=[]);},n$1.diffed=function(t){f&&f(t);var u=t.__c;u&&u.__H&&u.__H.__h.length&&(1!==o.push(u)&&r===n$1.requestAnimationFrame||((r=n$1.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);"undefined"!=typeof window&&(t=requestAnimationFrame(u));})(_$1));},n$1.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return !n.__||q$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n$1.__e(r,t.__v);}}),e&&e(t,u);},n$1.unmount=function(t){a&&a(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g);}catch(t){n$1.__e(t,u.__v);}};

  function w(n,t){for(var e in t)n[e]=t[e];return n}function x(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}(function(n){var t,e;function r(t){var e;return (e=n.call(this,t)||this).isPureReactComponent=!0,e}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.shouldComponentUpdate=function(n,t){return x(this.props,n)||x(this.state,t)},r})(m$1);var _=n$1.__b;n$1.__b=function(n){n.type&&n.type.t&&n.ref&&(n.props.ref=n.ref,n.ref=null),_&&_(n);};var N=n$1.__e;function U(n){return n&&((n=w({},n)).__c=null,n.__k=n.__k&&n.__k.map(U)),n}function M(){this.__u=0,this.o=null,this.__b=null;}function L(n){var t=n.__.__c;return t&&t.u&&t.u(n)}function P(){this.i=null,this.l=null;}n$1.__e=function(n,t,e){if(n.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(n,t.__c);N(n,t,e);},(M.prototype=new m$1).__c=function(n,t){var e=this;null==e.o&&(e.o=[]),e.o.push(t);var r=L(e.__v),o=!1,u=function(){o||(o=!0,r?r(i):i());};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){u(),t.__c&&t.__c();};var i=function(){var n;if(!--e.__u)for(e.__v.__k[0]=e.state.u,e.setState({u:e.__b=null});n=e.o.pop();)n.forceUpdate();};e.__u++||e.setState({u:e.__b=e.__v.__k[0]}),n.then(u,u);},M.prototype.render=function(n,t){return this.__b&&(this.__v.__k[0]=U(this.__b),this.__b=null),[h(m$1,null,t.u?null:n.children),t.u&&n.fallback]};var W=function(n,t,e){if(++e[1]===e[0]&&n.l.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.l.size))for(e=n.i;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.i=e=e[2];}};(P.prototype=new m$1).u=function(n){var t=this,e=L(t.__v),r=t.l.get(n);return r[0]++,function(o){var u=function(){t.props.revealOrder?(r.push(o),W(t,n,r)):o();};e?e(u):u();}},P.prototype.render=function(n){this.i=null,this.l=new Map;var t=x$1(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.l.set(t[e],this.i=[1,0,this.i]);return n.children},P.prototype.componentDidUpdate=P.prototype.componentDidMount=function(){var n=this;n.l.forEach(function(t,e){W(n,e,t);});};var j=function(){function n(){}var t=n.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},n}();function z(n){var t=this,e=n.container,r=h(j,{context:t.context},n.vnode);return t.s&&t.s!==e&&(t.v.parentNode&&t.s.removeChild(t.v),D$1(t.h),t.p=!1),n.vnode?t.p?(e.__k=t.__k,H$1(r,e),t.__k=e.__k):(t.v=document.createTextNode(""),I$1("",e),e.appendChild(t.v),t.p=!0,t.s=e,H$1(r,e,t.v),t.__k=t.v.__k):t.p&&(t.v.parentNode&&t.s.removeChild(t.v),D$1(t.h)),t.h=r,t.componentWillUnmount=function(){t.v.parentNode&&t.s.removeChild(t.v),D$1(t.h);},null}function D(n,t){return h(z,{vnode:n,container:t})}var H=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;m$1.prototype.isReactComponent={};var T="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;var I=n$1.event;function $(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n;}});}n$1.event=function(n){I&&(n=I(n)),n.persist=function(){};var t=!1,e=!1,r=n.stopPropagation;n.stopPropagation=function(){r.call(n),t=!0;};var o=n.preventDefault;return n.preventDefault=function(){o.call(n),e=!0;},n.isPropagationStopped=function(){return t},n.isDefaultPrevented=function(){return e},n.nativeEvent=n};var q={configurable:!0,get:function(){return this.class}},B=n$1.vnode;n$1.vnode=function(n){n.$$typeof=T;var t=n.type,e=n.props;if(t){if(e.class!=e.className&&(q.enumerable="className"in e,null!=e.className&&(e.class=e.className),Object.defineProperty(e,"className",q)),"function"!=typeof t){var r,o,u;for(u in e.defaultValue&&void 0!==e.value&&(e.value||0===e.value||(e.value=e.defaultValue),delete e.defaultValue),Array.isArray(e.value)&&e.multiple&&"select"===t&&(x$1(e.children).forEach(function(n){-1!=e.value.indexOf(n.props.value)&&(n.props.selected=!0);}),delete e.value),e)if(r=H.test(u))break;if(r)for(u in o=n.props={},e)o[H.test(u)?u.replace(/[A-Z0-9]/,"-$&").toLowerCase():u]=e[u];}!function(t){var e=n.type,r=n.props;if(r&&"string"==typeof e){var o={};for(var u in r)/^on(Ani|Tra|Tou)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===e||"input"===e.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange]);}}}(),"function"==typeof t&&!t.m&&t.prototype&&($(t.prototype,"componentWillMount"),$(t.prototype,"componentWillReceiveProps"),$(t.prototype,"componentWillUpdate"),t.m=!0);}B&&B(n);};

  class Modal extends m$1 {
    constructor(props) {
      super(props);

      this.clickOutsideHandler = e => {
        e.stopPropagation();
        this.props.onClose();

        document.removeEventListener('click', this.clickOutsideHandler);
      };
    }

    componentDidMount() {
      this.ensureClickOutsideModalHandler();
    }

    componentDidUpdate(prevProps, prevState) {
      const { show, key } = this.props;
      const { prevShow, prevKey } = prevProps;

      if (show && (!prevShow || key !== prevKey)) {
        this.ensureClickOutsideModalHandler();
      }
    }

    ensureClickOutsideModalHandler() {
      document.removeEventListener('click', this.clickOutsideHandler);
      document.addEventListener('click', this.clickOutsideHandler);
    }

    onClose(e) {
      e.stopPropagation();
      this.props.onClose();
      document.removeEventListener('click', this.clickOutsideHandler);
    }

    render({
      children,
      footer = null,

      show,
      key,
      confirmText,
      onConfirm = () => {},
      variation = Modal.VARIATION_CLOSE_WITH_BUTTON,
      closeText = 'Close',
      /* onClose gets wrapped */
      extraClassString,
    }) {
      if (!this.props.show) {
        return null;
      }

      const app = document.getElementById('app');

      const onClose = this.onClose.bind(this);

      let hasButtons = variation === Modal.VARIATION_CLOSE_WITH_BUTTON || confirmText;

      return D(
        m`
        <div onClick=${onClose} class="modal-background">
          <div onClick=${e => e.stopPropagation()} class="modal ${extraClassString}" key="${key}">
            ${variation === Modal.VARIATION_CLOSE_WITH_X &&
            m`
              <div class="modal-x" onClick=${onClose}>
                <svg viewBox="0 0 18 18">
                  <path
                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                  />
                </svg>
              </div>
            `}
            ${children}
            ${hasButtons &&
            m`
              <div class="buttons">
                ${confirmText &&
                m`
                  <button class="listed-button" onClick=${e => onConfirm()}>${confirmText}</button>
                `}
                ${variation === Modal.VARIATION_CLOSE_WITH_BUTTON &&
                m`
                  <button class="listed-button" onClick=${onClose}>${closeText}</button>
                `}
              </div>
            `}
            ${footer &&
            m`
              <div class="modal__footer">${footer}</div>
            `}
          </div>
        </div>
      `,
        app
      );
    }
  }

  Modal.VARIATION_CLOSE_WITH_BUTTON = 'VARIATION_CLOSE_WITH_BUTTON';
  Modal.VARIATION_CLOSE_WITH_X = 'VARIATION_CLOSE_WITH_X';

  const About = ({}) => m`
  <h2 class="listed-title">🏡 About Listed 🏡</h2>

  <p>
    Listed is a passion project built and designed by${' '}
    <a href="https://potch.me" onclick=${() => clickBio('potch')} target="_blank">Potch</a>
    ${' '}and${' '}
    <a
      href="https://andrew.pariser.com"
      onclick=${() => clickBio('pariser')}
      target="_blank"
    >
      Andrew Pariser
    </a>
    , two friends trying to make it big on the heels of the Wordle train.
  </p>
  <p>
    If you want to support future entertaining products like this, consider ${' '}
    <a href="https://ko-fi.com/listed" onclick=${() => clickKofi()} target="_blank">
      buying us a coffee
    </a>
    ${' '}or${' '}
    <a
      href="https://forms.gle/Ga1htYo4DFxrHAMn6"
      onclick=${() => clickFeedback()}
      target="_blank"
    >
      contacting us
    </a>
    ${' '}with your feedback, suggestions, or random observations.
  </p>
`;

  class AboutModal extends m$1 {
    render({ show, onClose }) {
      return m`
      <${Modal}
        show=${show}
        key="modal--about"
        onClose=${onClose}
        closeText="Thanks, Guys!"
        extraClassString="modal--about"
      >
        <${About} />
      </Modal>
    `;
    }
  }

  /*

    CURRENT       LONGEST
    STREAK        STREAK

    CURRENT       LONGEST
    STREAK        STREAK

      HISTOGRAM OF WINS

      CALENDAR OF WINS?

  */

  const X_LABEL = '❌';

  const Stats = ({
    userStats: { playStreak = {}, winStreak = {}, histogram = {}, games = [] } = {},
  }) => {
    const gamesPlayed = games.map(g => g.gameOver).length;

    const maxGuesses = 9;
    const guessNumbers = Array.from(Array(maxGuesses).keys()).map(i => i + 1);

    const values = guessNumbers
      .map(guessNumber => histogram[guessNumber] || 0)
      .concat(histogram.x || 0);
    const maxValue = values.reduce((memo, x) => Math.max(memo, x), 1);

    const heights = values
      .map(value => value / maxValue)
      .map(valuePct => (valuePct === '0' ? '1px' : `${valuePct * 100}%`));
    const labels = guessNumbers.concat(X_LABEL);

    const data = heights.map((height, idx) => [height, values[idx], labels[idx]]);

    return m`
    <h2 class="listed-title">🏡 Listed Stats 🏡</h2>

    <div class="stats__streaks-row">
      <div class="stats__streak-item">
        <div class="stats__streak-value">${winStreak.current || 0}</div>
        <div class="stats__streak-name">Win Streak</div>
      </div>
      <div class="stats__streak-item">
        <div class="stats__streak-value">${winStreak.max || 0}</div>
        <div class="stats__streak-name">Longest Streak</div>
      </div>
    </div>
    <div class="stats__streaks-row">
      <div class="stats__streak-item">
        <div class="stats__streak-value">${playStreak.current || 0}</div>
        <div class="stats__streak-name">Play Streak</div>
      </div>
      <div class="stats__streak-item">
        <div class="stats__streak-value">${playStreak.max || 0}</div>
        <div class="stats__streak-name">Longest Play Streak</div>
      </div>
    </div>

    <div class="stats__histogram">
      ${
        /* columns */
        data.map(
          ([height, value, label]) =>
            m`
              <div
                class=${`stats__histogram-column ${
                  label === X_LABEL ? 'stats__histogram-column--failed' : ''
                }`}
                style=${`height: ${height}`}
              >
                <span class="stats__histogram-column__value">${value === 0 ? '' : value}</span>
              </div>
            `
        )
      }
      ${
        /* column labels */
        data.map(
          ([_height, _value, label]) =>
            m`
              <div class="stats__histogram-column-label">${label}</div>
            `
        )
      }
    </div>

    <div>${gamesPlayed} ${gamesPlayed === 1 ? 'Game' : 'Games'} Played</div>
  `;
  };

  const connectedStats = o$1('userStats')(Stats);

  class StatsModal extends m$1 {
    render({ show, onClose }) {
      return m`
      <${Modal}
        show=${show}
        key="modal--Stats"
        onClose=${onClose}
        closeText="Done"
        extraClassString="modal--stats"
      >
        <${connectedStats} />
      </Modal>
    `;
    }
  }

  const Help = ({}) => m`
  <h2 class="listed-title">🏡 Welcome to Listed 🏡</h2>

  <p class="modal--help__headline">
    In this game, your goal is to guess the sale price of a recently sold property
  </p>

  <section class="modal__section">
    <p>After each guess, you learn more about the property, and get feedback about your guess:</p>
    <div class="modal--help__legend">
      <span class="modal--help__emoji">⬆️</span>
      <span>Guess much higher next time</span>

      <span class="modal--help__emoji">↗️</span>
      <span>Guess a little higher next time</span>

      <span class="modal--help__emoji">🏡</span>
      <span>You win!</span>

      <span class="modal--help__emoji">↘️</span>
      <span>Guess a little lower next time</span>

      <span class="modal--help__emoji">⬇️</span>
      <span>Guess much lower next time</span>
    </div>
  </section>

  <section class="modal__section">
    <p>↗️ or ↘️? You're within 10%!</p>
    <p>Get within 1% to win</p>
  </section>
`;

  class HelpModal extends m$1 {
    render({ show, onClose }) {
      return m`
      <${Modal}
        show=${show}
        key="modal--help"
        onClose=${onClose}
        closeText="Play"
        extraClassString="modal--help"
      >
        <${Help} />
      </Modal>
    `;
    }
  }

  /* types: 'success', 'error', 'info' */
  class ToastStack extends m$1 {
    render({ toasts = [] }) {
      /* transient toasts go first followed by persistent toasts */
      return m`
      <div class="toast-stack">
        ${toasts
          .filter(toast => !toast.persistent)
          .map(
            ({ type, message }) => m`
              <i class="toast ${type}">${message}</i>
            `
          )}
        ${toasts
          .filter(toast => toast.persistent)
          .map(
            ({ type, message }) => m`
              <i class="toast ${type}">${message}</i>
            `
          )}
      </div>
    `;
    }
  }

  var ToastStack$1 = o$1(['toasts'])(ToastStack);

  const HelpIcon = () => m`
  <svg class="icon icon--help" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <g fill="#000" fill-rule="evenodd">
      <path
        d="M64 2c34.242 0 62 27.758 62 62 0 34.242-27.758 62-62 62-34.242 0-62-27.758-62-62C2 29.758 29.758 2 64 2Zm0 12c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50-22.386-50-50-50Z"
        fill-rule="nonzero"
      />
      <circle cx="64" cy="98" r="8" />
      <path
        d="M64 25c13.737 0 26 11.037 26 25 0 9.668-2.916 15.943-10.354 20.721l-.648.406c-1.87 1.14-4.009 2.195-6.44 3.192l-.87.35c-.295.115-.593.23-.895.344l-.794.294L70 84H58V66.589l4.644-1.452.844-.27.814-.266 1.165-.394.74-.26.712-.257 1.015-.384.643-.255.616-.255.59-.255.564-.255c.183-.085.363-.17.538-.257l.515-.258.49-.26.236-.13.455-.265c3.105-1.857 4.535-3.944 5.102-6.956l.075-.437c.012-.074.023-.148.033-.223l.059-.457.025-.233.043-.477c.007-.081.013-.162.018-.244l.029-.5.02-.514.011-.53C78 50.367 78 50.186 78 50c0-7.037-6.625-13-14-13-7.097 0-12.522 5.525-12.044 13.181l.023.32-11.958.997C38.775 36.548 49.91 25 64 25Z"
        fill-rule="nonzero"
      />
    </g>
  </svg>
`;

  const StatsIcon = () =>
    m`
    <svg class="icon icon--stats" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <g fill="#000" fill-rule="evenodd">
        <path d="M19 48h22v65H19zM53 62h22v51H53zM87 21h22v92H87z" />
      </g>
    </svg>
  `;

  const AboutIcon = () =>
    m`
    <svg class="icon icon--about" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <g fill="#000" fill-rule="evenodd">
        <circle cx="64" cy="37" r="8" />
        <path
          d="M64 2c34.242 0 62 27.758 62 62 0 34.242-27.758 62-62 62-34.242 0-62-27.758-62-62C2 29.758 29.758 2 64 2Zm0 12c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50-22.386-50-50-50Z"
          fill-rule="nonzero"
        />
        <path fill-rule="nonzero" d="M70 53v39h6v8H52v-8h6V61h-6v-8z" />
      </g>
    </svg>
  `;

  // Helpers to add event dispatch to classes

  function StaticEvented(eventTypes) {
    const listeners = {};
    eventTypes.forEach(type => (listeners[type] = new Set()));

    const scopes = new Map();

    return class {
      static emit(type, data) {
        if (type in listeners) {
          listeners[type].forEach(handler => handler(data));
        }
      }

      static on(type, handler, scope) {
        if (type in listeners) {
          listeners[type].add(handler);

          if (scope) {
            if (!scopes.has(scope)) {
              scopes.set(scope, []);
            }
            scopes.get(scope).push([type, handler]);
          }
        }
      }

      static off(type, handler) {
        if (type in listeners) {
          listeners[type].delete(handler);
        }
      }

      static scopeOff(scope) {
        if (scopes.has(scope)) {
          scopes.get(scope).forEach(([type, handler]) => {
            this.off(type, handler);
          });

          scopes.delete(scope);
        }
      }
    };
  }

  class Audio extends StaticEvented(['mutedChange', 'volumeChange']) {
    static init() {
      let AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioContext = new AudioContext();
      output = audioContext.createGain();
      output.connect(audioContext.destination);
      output.gain.setValueAtTime(volume, audioContext.currentTime);
      audioContextReady();
    }

    static getVolume() {
      let storedVolume = localStorage.getItem('volume');
      if (!storedVolume) return 0.5;

      let volume = JSON.parse(storedVolume);
      return Math.max(0, Math.min(volume, 1));
    }

    static getMuted() {
      let muted = localStorage.getItem('muted');
      if (!muted) return false;
      return !!JSON.parse(muted);
    }

    static setVolume(newVolume) {
      volume = Math.max(0, Math.min(newVolume, 1));
      if (output) {
        output.gain.setValueAtTime(volume, audioContext.currentTime);
      }
      localStorage.setItem('volume', JSON.stringify(volume));
      Audio.emit('volumeChange', volume);
    }

    static setMuted(newMuted = true) {
      muted = !!newMuted;
      localStorage.setItem('muted', JSON.stringify(muted));
      Audio.emit('mutedChange', muted);
    }

    static async loadSounds(sounds = {}) {
      await audioReady;
      const bufferDecodePromises = Object.entries(sounds).map(([soundName, soundSource]) => {
        if (buffers.has(soundName)) {
          return;
        }

        return new Promise(async resolve => {
          let soundData = await soundSource.arrayBuffer();
          audioContext.decodeAudioData(
            soundData,
            data => {
              buffers.set(soundName, data);
              resolve();
            },
            resolve
          );
        });
      });

      await Promise.all(bufferDecodePromises);
    }

    static playSound(name) {
      if (buffers.has(name) && !muted) {
        let source = audioContext.createBufferSource();
        source.buffer = buffers.get(name);
        source.connect(output);
        source.start(0);
      }
    }
  }

  let audioContext;

  let volume = Audio.getVolume();
  let muted = Audio.getMuted();
  let output;
  let buffers = new Map();

  let audioContextReady;
  const audioReady = new Promise(resolve => {
    audioContextReady = resolve;
  });

  const firstVisit = isFirstVisit();

  class App extends m$1 {
    constructor(props) {
      super(props);

      if (props.initQueryParams && props.initQueryParams.reset === '1') {
        clear();
      }

      this.state = { activeModal: null };

      window.addEventListener('resize', e => {
        this.setState({ height: window.innerHeight + 'px' });
      });
    }

    setupAudio() {
      if (!this.startedAudio) {
        this.startedAudio = true;
        Audio.init();
      }
    }

    componentDidMount() {
      this.setState({ height: window.innerHeight + 'px' });

      if (firstVisit) {
        this.openModal('help');
      }
    }

    openModal(activeModal, e) {
      this.setState({ activeModal });

      if (e) {
        e.preventDefault();
        e.stopPropagation();

        switch (activeModal) {
          case 'about':
            openAbout();
            break;
          case 'stats':
            openStats();
            break;
          case 'help':
            openHelp();
            break;
        }
      }
    }

    closeModal() {
      this.setState({ activeModal: null });
    }

    render({ initQueryParams }, { activeModal, height = '100%' }) {
      return m`
      <div
        id="app"
        class="app"
        onClick=${this.setupAudio.bind(this)}
        style=${`height:${height};`}
      >
        <header class="header">
          <span class="header__logo">🏡</span>
          <button class="header__button" onClick=${e =>
            this.openModal('about', e)}><${AboutIcon}/></button>
          <h1 class="listed-title">Listed</div>
          <button class="header__button" onClick=${e =>
            this.openModal('stats', e)}><${StatsIcon}/></button>
          <button class="header__button" onClick=${e =>
            this.openModal('help', e)}><${HelpIcon}/></button>
        </header>

        <${AboutModal}
          show=${activeModal === 'about'}
          onClose=${() => this.closeModal()} />

        <${StatsModal}
          show=${activeModal === 'stats'}
          onClose=${() => this.closeModal()} />

        <${HelpModal}
          show=${activeModal === 'help'}
          onClose=${() => this.closeModal()} />

        <${Game} initQueryParams=${initQueryParams} />

        <${ToastStack$1} />
      </div>
    `;
    }
  }

  loadUserStats().then(() => {
    const userStats = store$1.getState().userStats;
    userStats.games.filter(game => game.gameOver).length;
    userStats.games.filter(game => game.guessed).length;
  });

  class AppWithStore extends m$1 {
    render(props) {
      return m`
      <${i} store=${store$1}>
        <${App} ...${props} firstVisit=${firstVisit} />
      </Provider>
    `;
    }
  }

  let initQueryParams = {};
  try {
    const urlSearchParams = new URLSearchParams(window.location.search);
    for (const [key, value] of urlSearchParams) {
      initQueryParams[key] = value;
    }
  } catch (e) {
    console.warn('Could not extract initial query params');
  }

  H$1(
    m`
    <${AppWithStore} initQueryParams=${initQueryParams} />
  `,
    document.body
  );

})();
//# sourceMappingURL=bundle.js.map
