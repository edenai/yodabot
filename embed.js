window.addEventListener("load", () => {
    (function(s,i,f,o,l,n){
    let ss = document.getElementsByTagName(l);let qp="";for(const t of ss){if(
    t.src.indexOf(n)>-1&&t.src.indexOf('?')>-1){qp = t.src.slice(t.src.indexOf('?'));break;}}
    let p=document.createElement(s);p.id=i;
    p.style="position:fixed;z-index:123456789;right:10px;bottom:0;height:96px;width:100px;min-height:96px;min-width:100px";
    let m=document.createElement(f);m.src=`${o}${qp}`;m.style="width: 100%; height: 100%; border: 0";p.appendChild(m);
    document.body.appendChild(p)})("div","edenai-message-iframe-container","iframe","https://edenai.github.io/yodabot/",'script','gh/edenai/yodabot');
    (function(e,o,i,h,s,v,w,x,y){window.addEventListener(e,function(ev){if(ev.origin!=o)return;
    let cbc=document.getElementById(i);switch(ev.data){case h:cbc.style.height=v;cbc.style.width=w;
    break;case s:cbc.style.height=x;cbc.style.width=y}},false)})("message","https://edenai.github.io",
    "edenai-message-iframe-container","hide","show","96px","100px","670px","430px");
  })
    
