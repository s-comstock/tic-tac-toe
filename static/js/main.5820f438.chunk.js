(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var r=a(7),s=a(1),n=a(2),u=a(4),i=a(3),l=a(0),c=a.n(l),o=a(6),m=a.n(o);a(14);function h(e){return c.a.createElement("button",{className:"board-square",onClick:e.onClick},e.value)}var b=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"renderSquare",value:function(e){var t=this;return c.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(c.a.Component),d=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(n.a)(a,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();p(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"newGame",value:function(){this.setState({history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0!==this.state.xIsNext})}},{key:"previous",value:function(){var e=this.state.stepNumber;e>0&&this.setState({stepNumber:e-1,xIsNext:e%2===0})}},{key:"next",value:function(){var e=this.state.stepNumber;"undefined"!==typeof this.state.history[this.state.stepNumber+1]&&this.setState({stepNumber:e+1,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history[this.state.stepNumber],r=p(a.squares);return e=r?"Winner: "+r:"Next player: "+(this.state.xIsNext?"X":"O"),c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-stats"},c.a.createElement("h1",{className:"game-title"},"TIC TAC TOE"),c.a.createElement("hr",null),c.a.createElement("p",{className:"game-turn"},e),c.a.createElement("div",{className:"game-buttons-row"},c.a.createElement("button",{className:"game-buttons game-buttons_half-width-left",onClick:function(){return t.previous()}},"\u21e6 Step Back"),c.a.createElement("button",{className:"game-buttons game-buttons_half-width-right",onClick:function(){return t.next()}},"Step Forward \u21e8")),c.a.createElement("div",{className:"game-buttons-row"},c.a.createElement("button",{className:"game-buttons game-buttons_full-width",onClick:function(){return t.newGame()}},"New Game"))),c.a.createElement("div",{className:"board"},c.a.createElement(b,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})))}}]),a}(c.a.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var s=Object(r.a)(t[a],3),n=s[0],u=s[1],i=s[2];if(e[n]&&e[n]===e[u]&&e[n]===e[i])return e[n]}return null}m.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.5820f438.chunk.js.map