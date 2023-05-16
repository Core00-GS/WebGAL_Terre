import{r as S,R as d,C as u,T as y,S as w}from"./index.ead2aafc.js";const M=g=>{var l;const f=d.pixiStage.effectsContainer,p=d.pixiStage.currentApp,e=new u;f.addChild(e);const s=y.from("./game/tex/cherryBlossoms.png");e.x=p.screen.width/2,e.y=p.screen.height/2,e.pivot.x=e.width/2,e.pivot.y=e.height/2,e.scale.x=1,e.scale.y=1;const o=[];function h(i){const n=new w(s);let r=.25;n.scale.x=.15*r,n.scale.y=.15*r,n.anchor.set(.5),n.x=Math.random()*2560-.5*2560,n.y=0-.5*1440,n.dropSpeed=Math.random()*5,n.acc=Math.random(),e.addChild(n),o.push(n);let a=0;for(const t of o){a++;const c=Math.random();t.dropSpeed=t.acc*.01+t.dropSpeed,t.y+=i*g*t.dropSpeed*.3+.7,a%2===0?(t.x+=i*c*.5,t.rotation+=i*c*.03):(t.x-=i*c*.5,t.rotation-=i*c*.03)}o.length>=200&&(o.unshift(),e.removeChild(e.children[0]))}return(l=d.pixiStage)==null||l.registerAnimation({setStartState:()=>{},setEndState:()=>{},tickerFunc:h},"cherryBlossoms-Ticker"),{container:e,tickerKey:"cherryBlossoms-Ticker"}};S("cherryBlossoms",()=>M(3));const P=(g,m)=>{var i;const p=d.pixiStage.effectsContainer,e=d.pixiStage.currentApp,s=new u;p.addChild(s);const o=y.from("./game/tex/raindrop.png");s.x=e.screen.width/2,s.y=e.screen.height/2,s.pivot.x=s.width/2,s.pivot.y=s.height/2,s.scale.x=1,s.scale.y=1;const h=[];function l(x){for(let r=0;r<m;r++){const a=new w(o);let t=Math.random();t<=.5&&(t=.5),a.scale.x=.48*t,a.scale.y=.48*t,a.anchor.set(.5),a.x=Math.random()*2560-.5*2560,a.y=0-.5*1440,a.dropSpeed=Math.random()*2,a.acc=Math.random(),a.alpha=Math.random(),a.alpha>=.5&&(a.alpha=.5),a.alpha<=.2&&(a.alpha=.2),s.addChild(a),h.push(a)}for(const r of h)r.dropSpeed=r.acc*.01+r.dropSpeed,r.y+=x*g*r.dropSpeed*1.1+3;h.length>=2500&&(h.unshift(),s.removeChild(s.children[0]))}return(i=d.pixiStage)==null||i.registerAnimation({setStartState:()=>{},setEndState:()=>{},tickerFunc:l},"rain-Ticker"),{container:s,tickerKey:"rain-Ticker"}};S("rain",()=>P(6,10));const v=g=>{var l;const f=d.pixiStage.effectsContainer,p=d.pixiStage.currentApp,e=new u;f.addChild(e);const s=y.from("./game/tex/snowFlake_min.png");e.x=p.screen.width/2,e.y=p.screen.height/2,e.pivot.x=e.width/2,e.pivot.y=e.height/2,e.scale.x=1,e.scale.y=1;const o=[];function h(i){const n=new w(s);let r=Math.random();r<=.5&&(r=.5),n.scale.x=.144*r,n.scale.y=.144*r,n.anchor.set(.5),n.x=Math.random()*2560-.5*2560,n.y=0-.5*1440,n.dropSpeed=Math.random()*2,n.acc=Math.random(),e.addChild(n),o.push(n);let a=0;for(const t of o){a++;const c=Math.random();t.dropSpeed=t.acc*.01+t.dropSpeed,t.y+=i*g*t.dropSpeed*.3+.7,a%2===0?(t.x+=i*c*.5,t.rotation+=i*c*.03):(t.x-=i*c*.5,t.rotation-=i*c*.03)}o.length>=500&&(o.unshift(),e.removeChild(e.children[0]))}return(l=d.pixiStage)==null||l.registerAnimation({setStartState:()=>{},setEndState:()=>{},tickerFunc:h},"snow-Ticker"),{container:e,tickerKey:"snow-Ticker"}};S("snow",()=>v(3));
