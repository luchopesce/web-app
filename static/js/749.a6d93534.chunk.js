"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[749],{9749:(e,t,o)=>{o.r(t),o.d(t,{default:()=>re});var a=o(5043),r=o(3003),n=o(8302),i=o(2387);var s=o(8911),c=o(9252),l=o(5865),d=o(8168),p=o(8587),u=o(8387),g=o(8606),h=o(2876),m=o(4535),y=o(7056),A=o(2400);function v(e){return(0,A.Ay)("MuiTableContainer",e)}(0,y.A)("MuiTableContainer",["root"]);var f=o(579);const b=["className","component"],x=(0,m.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),w=a.forwardRef((function(e,t){const o=(0,h.A)({props:e,name:"MuiTableContainer"}),{className:a,component:r="div"}=o,n=(0,p.A)(o,b),i=(0,d.A)({},o,{component:r}),s=(e=>{const{classes:t}=e;return(0,g.A)({root:["root"]},v,t)})(i);return(0,f.jsx)(x,(0,d.A)({ref:t,as:r,className:(0,u.A)(s.root,a),ownerState:i},n))}));var k=o(3664);const j=a.createContext();function C(e){return(0,A.Ay)("MuiTable",e)}(0,y.A)("MuiTable",["root","stickyHeader"]);const T=["className","component","padding","size","stickyHeader"],M=(0,m.Ay)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})((e=>{let{theme:t,ownerState:o}=e;return(0,d.A)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,d.A)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},o.stickyHeader&&{borderCollapse:"separate"})})),R="table",H=a.forwardRef((function(e,t){const o=(0,h.A)({props:e,name:"MuiTable"}),{className:r,component:n=R,padding:i="normal",size:s="medium",stickyHeader:c=!1}=o,l=(0,p.A)(o,T),m=(0,d.A)({},o,{component:n,padding:i,size:s,stickyHeader:c}),y=(e=>{const{classes:t,stickyHeader:o}=e,a={root:["root",o&&"stickyHeader"]};return(0,g.A)(a,C,t)})(m),A=a.useMemo((()=>({padding:i,size:s,stickyHeader:c})),[i,s,c]);return(0,f.jsx)(j.Provider,{value:A,children:(0,f.jsx)(M,(0,d.A)({as:n,role:n===R?null:"table",ref:t,className:(0,u.A)(y.root,r),ownerState:m},l))})}));const S=a.createContext();function N(e){return(0,A.Ay)("MuiTableBody",e)}(0,y.A)("MuiTableBody",["root"]);const z=["className","component"],O=(0,m.Ay)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),B={variant:"body"},X="tbody",D=a.forwardRef((function(e,t){const o=(0,h.A)({props:e,name:"MuiTableBody"}),{className:a,component:r=X}=o,n=(0,p.A)(o,z),i=(0,d.A)({},o,{component:r}),s=(e=>{const{classes:t}=e;return(0,g.A)({root:["root"]},N,t)})(i);return(0,f.jsx)(S.Provider,{value:B,children:(0,f.jsx)(O,(0,d.A)({className:(0,u.A)(s.root,a),as:r,ref:t,role:r===X?null:"rowgroup",ownerState:i},n))})}));var I=o(7266),P=o(6803);function U(e){return(0,A.Ay)("MuiTableCell",e)}const W=(0,y.A)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),F=["align","className","component","padding","scope","size","sortDirection","variant"],E=(0,m.Ay)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t["size".concat((0,P.A)(o.size))],"normal"!==o.padding&&t["padding".concat((0,P.A)(o.padding))],"inherit"!==o.align&&t["align".concat((0,P.A)(o.align))],o.stickyHeader&&t.stickyHeader]}})((e=>{let{theme:t,ownerState:o}=e;return(0,d.A)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?"1px solid ".concat(t.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===t.palette.mode?(0,I.a)((0,I.X4)(t.palette.divider,1),.88):(0,I.e$)((0,I.X4)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===o.variant&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===o.variant&&{color:(t.vars||t).palette.text.primary},"footer"===o.variant&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===o.size&&{padding:"6px 16px",["&.".concat(W.paddingCheckbox)]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===o.padding&&{width:48,padding:"0 0 0 4px"},"none"===o.padding&&{padding:0},"left"===o.align&&{textAlign:"left"},"center"===o.align&&{textAlign:"center"},"right"===o.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===o.align&&{textAlign:"justify"},o.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})})),J=a.forwardRef((function(e,t){const o=(0,h.A)({props:e,name:"MuiTableCell"}),{align:r="inherit",className:n,component:i,padding:s,scope:c,size:l,sortDirection:m,variant:y}=o,A=(0,p.A)(o,F),v=a.useContext(j),b=a.useContext(S),x=b&&"head"===b.variant;let w;w=i||(x?"th":"td");let k=c;"td"===w?k=void 0:!k&&x&&(k="col");const C=y||b&&b.variant,T=(0,d.A)({},o,{align:r,component:w,padding:s||(v&&v.padding?v.padding:"normal"),size:l||(v&&v.size?v.size:"medium"),sortDirection:m,stickyHeader:"head"===C&&v&&v.stickyHeader,variant:C}),M=(e=>{const{classes:t,variant:o,align:a,padding:r,size:n,stickyHeader:i}=e,s={root:["root",o,i&&"stickyHeader","inherit"!==a&&"align".concat((0,P.A)(a)),"normal"!==r&&"padding".concat((0,P.A)(r)),"size".concat((0,P.A)(n))]};return(0,g.A)(s,U,t)})(T);let R=null;return m&&(R="asc"===m?"ascending":"descending"),(0,f.jsx)(E,(0,d.A)({as:w,ref:t,className:(0,u.A)(M.root,n),"aria-sort":R,scope:k,ownerState:T},A))})),L=J;function $(e){return(0,A.Ay)("MuiTableRow",e)}const _=(0,y.A)("MuiTableRow",["root","selected","hover","head","footer"]),q=["className","component","hover","selected"],G=(0,m.Ay)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})((e=>{let{theme:t}=e;return{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,["&.".concat(_.hover,":hover")]:{backgroundColor:(t.vars||t).palette.action.hover},["&.".concat(_.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,I.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,I.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}}})),K="tr",Q=a.forwardRef((function(e,t){const o=(0,h.A)({props:e,name:"MuiTableRow"}),{className:r,component:n=K,hover:i=!1,selected:s=!1}=o,c=(0,p.A)(o,q),l=a.useContext(S),m=(0,d.A)({},o,{component:n,hover:i,selected:s,head:l&&"head"===l.variant,footer:l&&"footer"===l.variant}),y=(e=>{const{classes:t,selected:o,hover:a,head:r,footer:n}=e,i={root:["root",o&&"selected",a&&"hover",r&&"head",n&&"footer"]};return(0,g.A)(i,$,t)})(m);return(0,f.jsx)(G,(0,d.A)({as:n,ref:t,className:(0,u.A)(y.root,r),role:n===K?null:"row",ownerState:m},c))})),V=Q,Y=e=>{let{user:t}=e;const{id:o,firstName:a,picture:r}=t;return(0,f.jsx)(H,{"aria-label":"user table",children:(0,f.jsx)(D,{children:(0,f.jsxs)(V,{children:[(0,f.jsx)(L,{component:"th",scope:"row",style:{width:"20%"},children:(0,f.jsx)(k.A,{alt:a,src:r})}),(0,f.jsx)(L,{style:{width:"40%"},children:a}),(0,f.jsx)(L,{style:{width:"40%"},children:o})]},o)})})};var Z=o(1637),ee=o(3336);const te=e=>{let{users:t,usersStatus:o}=e;return(0,f.jsxs)(w,{component:ee.A,children:["loading"===o&&(0,f.jsx)(Z.A,{}),"failed"===o&&(0,f.jsx)(l.A,{variant:"h6",children:"Failed to load users. Please try again later."}),"succeeded"===o&&0===t.length&&(0,f.jsx)(l.A,{variant:"h6",children:"No users available."}),("succeeded"===o||"connected"===o)&&t.map((e=>(0,f.jsx)(Y,{user:e},e.id)))]})},oe=()=>{const{users:e,usersStatus:t}=(()=>{const e=(0,r.wA)(),t=(0,r.d4)(n.WI),o=(0,r.d4)(n.N4);return(0,a.useEffect)((()=>{const t=()=>{console.log("Socket connected."),i.A.emit("getUsers")},a=()=>{console.log("Socket disconnected.")};return i.A.on("connect",t),i.A.on("disconnect",a),i.A.connected&&t(),e((0,n._9)()),"idle"!==o&&"disconnected"!==o||e((0,n.hU)()),()=>{i.A.off("connect",t),i.A.off("disconnect",a),i.A.off("users")}}),[e,o]),{users:t,usersStatus:o}})();return(0,f.jsxs)(c.A,{children:[(0,f.jsx)(s.A,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:(0,f.jsx)(l.A,{variant:"h4",children:"Users"})}),(0,f.jsx)(te,{users:e,usersStatus:t})]})};var ae=o(8903);const re=()=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(ae.Ay,{container:!0,direction:"column",spacing:2,children:(0,f.jsx)(ae.Ay,{item:!0,children:(0,f.jsx)(oe,{})})})})}}]);
//# sourceMappingURL=749.a6d93534.chunk.js.map