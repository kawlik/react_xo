(this.webpackJsonpxo=this.webpackJsonpxo||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"mark",(function(){return u})),a.d(r,"result",(function(){return d})),a.d(r,"value",(function(){return b})),a.d(r,"initialValues",(function(){return h})),a.d(r,"pages",(function(){return f})),a.d(r,"calcNeed",(function(){return j})),a.d(r,"calcDepth",(function(){return m}));var i=a(0),n=a.n(i),c=a(18),s=a.n(c),o=a(8),l=a(6),u={X:"X",O:"O",EMPTY:" "},d={TIE:0,WIN:10,LOSE:-10},b={P_INF:2147483647,N_INF:-2147483647},h={gameDepth:8,gameNeed:3,gameSize:3,minSize:3,maxSize:8},f={home:"",seti:"setings",game:"game"},j=function(e){return Math.floor(3*Math.log(e))},m=function(e){return Math.floor(66*Math.log(e)/(e*e)+1)},O=a(1),p=Object(i.createContext)(null),v=function(e){var t=e.children,a=Object(i.useState)(null),n=Object(l.a)(a,2),c=n[0],s=n[1],o=Object(i.useState)(h.gameDepth),u=Object(l.a)(o,2),d=u[0],b=u[1],j=Object(i.useState)(h.gameNeed),m=Object(l.a)(j,2),v=m[0],x=m[1],g=Object(i.useState)(h.gameSize),y=Object(l.a)(g,2),z=y[0],N=y[1],_=Object(i.useState)(!1),I=Object(l.a)(_,2),S=I[0],k=I[1],w=Object(i.useState)(null),E=Object(l.a)(w,2),C=E[0],A=E[1],T=Object(i.useState)(null),P=Object(l.a)(T,2),W=P[0],D=P[1],U=Object(i.useState)(null),M=Object(l.a)(U,2),G=M[0],H=M[1],F=Object(i.useState)(f),X=Object(l.a)(F,2),Y=X[0],R=X[1];Object(i.useEffect)((function(){}),[]);var L={gameDepth:d,setGameDepth:b,gameNeed:v,setGameNeed:x,gameSize:z,setGameSize:N,gameResult:c,setGameResult:s,gameOver:S,setGameOver:k,playerAI:C,setPlayerAI:A,playerHU:W,setPlayerHU:D,player:G,setPlayer:H,endGame:function(e){s(e),k(!0)},reinit:function(){s(null),b(h.gameDepth),x(h.gameNeed),N(h.gameSize),k(!1),A(null),D(null),H(null)},pages:Y,setPages:R,data:r};return Object(O.jsx)(p.Provider,{value:L,children:t})},x=a(21),g=function(){var e=Object(i.useContext)(p),t=e.pages,a=e.reinit,r=e.gameOver;return Object(O.jsx)("div",{className:"topInfo ".concat(r&&"__reinit"),children:Object(O.jsx)(o.b,{exact:!0,to:t.home,className:"game",onClick:a,children:Object(O.jsx)(x.a,{})})})},y=a(2),z=function(){var e=Object(i.useContext)(p),t=e.playerAI,a=e.playerHU,r=e.player,n=Object(i.useContext)(p),c=n.setPlayerAI,s=n.setPlayerHU,l=n.setPlayer,u=Object(i.useContext)(p),d=u.pages,b=u.data,h=function(e){e&&(c((function(e){return b.mark.O})),s((function(e){return b.mark.X}))),e||(c((function(e){return b.mark.O})),s((function(e){return b.mark.X})))},f=function(e){e&&l((function(e){return b.mark.X})),e||l((function(e){return b.mark.O}))},j=!!(t&&a&&r);return Object(O.jsxs)("section",{className:"main-home",children:[Object(O.jsxs)("div",{className:"elem",children:[Object(O.jsx)("h2",{className:"title",children:"Wybierz znak:"}),Object(O.jsxs)("div",{className:"choice",children:[Object(O.jsx)("button",{className:"btn __chioce __type-a",onClick:function(){return h(!0)},children:"X"}),Object(O.jsx)("button",{className:"btn __chioce __type-b",onClick:function(){return h(!1)},children:"O"})]})]}),Object(O.jsxs)("div",{className:"elem",children:[Object(O.jsx)("h2",{className:"title",children:"Wybierz, kto zaczyna:"}),Object(O.jsxs)("div",{className:"choice",children:[Object(O.jsx)("button",{className:"btn __chioce __type-a",onClick:function(){return f(!0)},children:"X"}),Object(O.jsx)("button",{className:"btn __chioce __type-b",onClick:function(){return f(!1)},children:"O"})]})]}),Object(O.jsx)(o.b,{exact:!0,to:d.seti,className:"btn next ".concat(j&&"__isVisible"),children:"Dalej"})]})},N=function(e){var t=e.id,a=e.row,r=e.col;return Object(O.jsx)("div",{className:"field",id:t,"data-row":a,"data-col":r})},_=function(e){var t=e.fields,a=e.gameID,r=e.size,i=t.map((function(e,t){return e.map((function(e,a){return Object(O.jsx)(N,{id:"field_r".concat(t,"_c").concat(a),row:t,col:a},"field_r".concat(t,"_c").concat(a))}))})),n={gridTemplateColumns:"repeat( ".concat(r,", 1fr )"),gridTemplateRows:"repeat( ".concat(r,", 1fr )")};return Object(O.jsx)("div",{id:a,className:"board darkable",style:n,children:i})},I=a(13),S=a(22),k=a(20),w=function(){function e(t,a,r){var i=this;Object(I.a)(this,e),this.setUp=function(){return i.elem=document.querySelector(i.selector),!!i.elem&&(i.setEmpty(),i.fields=Object(S.a)(i.elem.querySelectorAll(".field")),!0)},this.setEmpty=function(){for(var e=0;e<i.size;e++)for(var t=0;t<i.size;t++)i.board[e][t]=u.EMPTY},this.selector=t,this.size=a,this.need=r,this.elem=null,this.style=null,this.fields=[],this.board=new Array(+a).fill(null).map((function(e){return new Array(+a).fill(null)}))}return Object(k.a)(e,[{key:"isEmpty",value:function(e){var t=Object(l.a)(e,2),a=t[0],r=t[1];return!(a<0||a>this.size-1)&&(!(r<0||r>this.size-1)&&this.board[a][r]===u.EMPTY)}},{key:"isTie",value:function(e){for(var t=0;t<this.size;t++)for(var a=0;a<this.size;a++)if(this.board[t][a]===u.EMPTY)return!1;return!0}},{key:"isWin",value:function(e){for(var t=0;t<this.size;t++)for(var a=0;a<this.size-this.need+1;a++)if(this.board[t][a]===e){for(var r=!0,i=0;i<this.need;i++)r=this.board[t][a+i]===e&&r;if(r)return!0}for(var n=0;n<this.size;n++)for(var c=0;c<this.size-this.need+1;c++)if(this.board[c][n]===e){for(var s=!0,o=0;o<this.need;o++)s=this.board[c+o][n]===e&&s;if(s)return!0}for(var l=0;l<this.size-this.need+1;l++)for(var u=0;u<this.size-this.need+1;u++)if(this.board[l][u]===e){for(var d=!0,b=0;b<this.need;b++)d=this.board[l+b][u+b]===e&&d;if(d)return!0}for(var h=this.need-1;h<this.size;h++)for(var f=0;f<this.size-this.need+1;f++)if(this.board[h][f]===e){for(var j=!0,m=0;m<this.need;m++)j=this.board[h-m][f+m]===e&&j;if(j)return!0}return!1}}]),e}(),E=function e(t,a,r,i,n,c,s){var o=this;Object(I.a)(this,e),this.setUp=function(e){o.board.setUp()&&(o.board.fields.forEach((function(e){return e.addEventListener("click",(function(e){return o.handleClick(e)}))})),o.callback=e,o.start())},this.handleClick=function(e){if(e.preventDefault(),!o.gameOver&&o.player!==o.playerAI){var t={row:-1,col:-1};if(t.row=+e.target.dataset.row,t.col=+e.target.dataset.col,o.board.isEmpty([t.row,t.col])){if(o.board.board[t.row][t.col]=o.player,o.board.fields[t.row*o.size+t.col].classList.add("__".concat(o.player)),o.testStatus())return o.gameOver=!0,o.gameTie=!o.board.isWin(),void(o.gameTie=!!o.board.isWin());o.player=o.playerAI,o.shiftAI()}}},this.start=function(){o.player===o.playerAI&&o.shiftAI()},this.getResult=function(){return o.gameWin},this.shiftAI=function(){if(console.log(o.board.board),!o.gameOver&&o.player!==o.playerHU){var e=o.bestShift();if(o.board.isEmpty([e.row,e.col])){if(o.board.board[e.row][e.col]=o.player,o.board.fields[e.row*o.size+e.col].classList.add("__".concat(o.player)),o.testStatus())return o.gameOver=!0,o.gameTie=!o.board.isWin(),void(o.gameTie=!!o.board.isWin())}else console.error("AI shift not set!!! "),console.log(e);o.player=o.playerHU}},this.testStatus=function(){return o.board.isWin(o.player)?(o.callback("Wygrana gracza ".concat(o.player," (").concat(o.player===o.playerAI?"A.I.":"cz\u0142owiek",")")),!0):!!o.board.isTie(o.player)&&(o.callback("Remis"),!0)},this.bestShift=function(){for(var e=b.N_INF,t={row:-1,col:-1},a=0;a<o.size;a++)for(var r=0;r<o.size;r++)if(o.board.isEmpty([a,r])){o.board.board[a][r]=o.playerAI;var i=o.minimax(0,!1,b.N_INF,b.P_INF);console.log(" [ row: ".concat(a," | col: ").concat(r," ] :: score -> ").concat(i," ")),i>e&&(e=i,t.row=a,t.col=r),o.board.board[a][r]=u.EMPTY}return t},this.minimax=function(e,t,a,r){if(e>o.depth)return d.TIE;if(o.board.isWin(o.playerAI))return d.WIN*(2*o.depth-e);if(o.board.isWin(o.playerHU))return d.LOSE*(2*o.depth-e);if(o.board.isTie())return d.TIE;if(t){for(var i=b.N_INF,n=0;n<o.size;n++)for(var c=0;c<o.size;c++)if(o.board.isEmpty([n,c])){o.board.board[n][c]=o.playerAI;var s=o.minimax(e+1,!1,a,r);if(s>i&&(i=s),o.board.board[n][c]=u.EMPTY,r<=(a=s>a?s:a))break}return i}for(var l=b.P_INF,h=0;h<o.size;h++)for(var f=0;f<o.size;f++)if(o.board.isEmpty([h,f])){o.board.board[h][f]=o.playerHU;var j=o.minimax(e+1,!0,a,r);if(j<l&&(l=j),o.board.board[h][f]=u.EMPTY,(r=j<r?j:r)<=a)break}return l},this.selector=t,this.depth=+s,this.size=+a,this.need=+r,this.player=i,this.playerAI=n,this.playerHU=c,this.gameOver=!1,this.gameTie=!1,this.gameWin=!1,this.board=new w(t,a,r),this.callback=null},C=function(){var e=Object(i.useContext)(p),t=e.gameSize,a=e.gameNeed,r=e.gameDepth,n=Object(i.useContext)(p),c=n.playerAI,s=n.playerHU,o=n.player,l=Object(i.useContext)(p),u=l.gameOver,d=l.gameResult,b=l.endGame,h=Object(i.useContext)(p).pages,f=new Array(+t).fill(new Array(+t).fill(null)),j="boardTicTacToe";return Object(i.useEffect)((function(){new E("#".concat(j),t,a,o,c,s,r).setUp(b)}),[]),o?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(_,{fields:f,gameID:j,size:t}),u&&Object(O.jsx)("div",{className:"game-over",children:d})]}):Object(O.jsx)(y.a,{to:"".concat(h.home)})},A=function(){var e=Object(i.useContext)(p),t=e.gameSize,a=e.gameNeed,r=e.gameDepth,n=Object(i.useContext)(p),c=n.setGameSize,s=n.setGameNeed,l=n.setGameDepth,u=Object(i.useContext)(p),d=u.data,b=u.pages,h=d.initialValues.minSize,f=d.initialValues.maxSize,j=!!(t&&a&&r);return Object(O.jsxs)("section",{className:"main-seti",children:[Object(O.jsxs)("div",{className:"elem",children:[Object(O.jsx)("h2",{className:"title",children:"Wybierz rozmiar gry:"}),Object(O.jsx)("input",{type:"range",min:h,max:f,value:t,onChange:function(e){return t=e,c((function(e){return t.target.value})),s(d.calcNeed(t.target.value)),void l(d.calcDepth(t.target.value));var t}}),Object(O.jsx)("span",{children:t})]}),Object(O.jsxs)("div",{className:"elem",children:[Object(O.jsx)("h2",{className:"title",children:"Wybierz rz\u0105d gry:"}),Object(O.jsx)("input",{type:"range",min:d.calcNeed(t),max:t,value:a,onChange:function(e){return t=e,void s((function(e){return t.target.value}));var t}}),Object(O.jsx)("span",{children:a})]}),Object(O.jsxs)("div",{className:"elem",children:[Object(O.jsx)("h2",{className:"title",children:"Wybierz poziom:"}),Object(O.jsx)("input",{type:"range",min:2,max:d.calcDepth(t),value:r,onChange:function(e){return t=e,void l((function(e){return t.target.value}));var t}}),Object(O.jsx)("span",{children:r})]}),Object(O.jsx)(o.b,{exact:!0,to:b.game,className:"btn next ".concat(j&&"__isVisible"),children:"Dalej"})]})},T=function(){var e=Object(i.useContext)(p).pages;return Object(O.jsxs)(y.d,{children:[Object(O.jsx)(y.b,{exact:!0,path:"/".concat(e.home),render:function(){return Object(O.jsx)(z,{})}}),Object(O.jsx)(y.b,{exact:!0,path:"/".concat(e.game),render:function(){return Object(O.jsx)(C,{})}}),Object(O.jsx)(y.b,{exact:!0,path:"/".concat(e.seti),render:function(){return Object(O.jsx)(A,{})}})]})},P=function(){return Object(O.jsx)(v,{children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(g,{}),Object(O.jsx)(T,{})]})})};a(36);s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.54144017.chunk.js.map