(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const r of c)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(c){const r={};return c.integrity&&(r.integrity=c.integrity),c.referrerPolicy&&(r.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?r.credentials="include":c.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(c){if(c.ep)return;c.ep=!0;const r=o(c);fetch(c.href,r)}})();const s={};let f=null,a=0;const d=new Map,m=new Map,C=new Map,g=new Map;s.useState=e=>{const t=f,o=a++;d.has(t)||d.set(t,[]);const n=d.get(t);n[o]===void 0&&(n[o]=e);const c=r=>{const l=typeof r=="function"?r(n[o]):r;n[o]=l,v()};return[n[o],c]};s.createElement=(e,t,...o)=>({type:e,props:{...t,children:o.flat().map(n=>typeof n=="object"?n:I(n))}});const I=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e,children:[]}}),L=e=>{const t=e.type==="TEXT_ELEMENT"?document.createTextNode(e.props.nodeValue):document.createElement(e.type);return M(t,{},e.props),t},M=(e,t,o)=>{Object.keys(t).forEach(n=>{n!=="children"&&!(n in o)&&(n.startsWith("on")?e.removeEventListener(n.slice(2).toLowerCase(),t[n]):e[n]="")}),Object.keys(o||{}).forEach(n=>{if(n!=="children")if(n.startsWith("on")){const c=n.slice(2).toLowerCase();e.removeEventListener(c,t==null?void 0:t[n]),e.addEventListener(c,o[n])}else n==="className"?e.setAttribute("class",o[n]):e[n]=o[n]})};let i=null,y=null;s.render=(e,t)=>{i=t,y={dom:t,props:{children:[e]}},v()};const v=()=>{if(!(!i||!y)){for(m.forEach((e,t)=>{e.forEach(o=>{o&&o.cleanup&&o.cleanup()})});i.firstChild;)i.removeChild(i.firstChild);p(y.props.children[0],i)}},h=new Map;let x=0;s.createContext=e=>{const t=x++;return h.set(t,{defaultValue:e,value:e}),{Provider:({value:o,children:n})=>(h.get(t).value=o,n[0]),Consumer:({children:o})=>o[0](h.get(t).value),_contextId:t}};s.useContext=e=>(a++,h.get(e._contextId).value);const p=(e,t)=>{if(!e)return;if(typeof e.type=="object"&&e.type.Consumer){const n=h.get(e.type._contextId).value,c=e.props.children[0](n);p(c,t);return}if(typeof e.type=="object"&&e.type.Provider){const n=e.props.children[0];p(n,t);return}if(typeof e.type=="function"){f=e.type,a=0;const n=e.type(e.props);p(n,t);return}const o=L(e);e.props.children.forEach(n=>p(n,o)),t.appendChild(o)};s.useEffect=(e,t)=>{const o=f,n=a++;m.has(o)||m.set(o,[]);const c=m.get(o),r=c[n];if(!r||!t||!t.every((u,E)=>u===r.deps[E])){r&&r.cleanup&&r.cleanup();const u=e();c[n]={deps:t,cleanup:typeof u=="function"?u:void 0}}};s.useReducer=(e,t,o)=>{const n=f,c=a++;d.has(n)||d.set(n,[]);const r=d.get(n);r[c]===void 0&&(r[c]=o?o(t):t);const l=u=>{r[c]=e(r[c],u),v()};return[r[c],l]};s.useCallback=(e,t)=>s.useMemo(()=>e,t);s.useMemo=(e,t)=>{const o=f,n=a++;C.has(o)||C.set(o,[]);const c=C.get(o),r=c[n];if(!r||!t||!t.every((u,E)=>u===r.deps[E])){const u=e();return c[n]={value:u,deps:t},u}return r.value};s.useRef=e=>{const t=f,o=a++;g.has(t)||g.set(t,[]);const n=g.get(t);return n[o]===void 0&&(n[o]={current:e}),n[o]};s.useLayoutEffect=(e,t)=>{s.useEffect(e,t)};s.useImperativeHandle=(e,t,o)=>{s.useLayoutEffect(()=>{e&&(e.current=t())},o)};const{useState:b,createContext:R,useContext:j,useEffect:O,useReducer:H,useCallback:_,useMemo:A,useRef:S,useLayoutEffect:D,useImperativeHandle:F}=s;function T({name:e}){return s.createElement("h1",null,"Hello, ",e,"!")}function N(){const[e,t]=b(0);return O(()=>{console.log("Count: ",e)},[e]),s.createElement(s.Fragment,null,s.createElement("div",{className:"app"},s.createElement("h1",null,"Count: ",e),s.createElement("h1",null,"Count: ",e),s.createElement("h1",null,"Count: ",e),s.createElement("h1",null,"Count: ",e),s.createElement("h1",null,"Count: ",e),s.createElement("button",{onClick:()=>t(e+1)},"Increment"),s.createElement(T,{name:"John"})))}const w=document.getElementById("root");s.render(s.createElement(N,null),w);
