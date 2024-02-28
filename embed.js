window.addEventListener("load", () => {
  (function(s,i,f,o,l,n){
  let ss = document.getElementsByTagName(l);let qp="";for(const t of ss){if(
  t.src.indexOf(n)>-1&&t.src.indexOf('?')>-1){qp = t.src.slice(t.src.indexOf('?'));break;}}
  let p=document.createElement(s);p.id=i;
  
  p.style="position:fixed;z-index:123456789;right:10px;bottom:0;height:96px;width:400px;min-height:96px;min-width:260px";
  let m=document.createElement(f);m.src=`${o}${qp}`;m.style="width: 100%; height: 100%; border: 0";p.appendChild(m);
  document.body.appendChild(p)})("div","edenai-message-iframe-container","iframe","https://edenai.github.io/yodabot/",'script','gh/edenai/yodabot');
  (function(e,o,i,h,s,v,w,x,y){window.addEventListener(e,function(ev){if(ev.origin!=o)return;
  let cbc=document.getElementById(i);switch(ev.data){case h:cbc.style.height=v;cbc.style.width=w;
  break;case s:cbc.style.height=x;cbc.style.width=y}},false)})("message","https://edenai.github.io",
  "edenai-message-iframe-container","hide","show","96px","400px","760px","px");
  const iframe = document.getElementById('edenai-message-iframe-container');
  let w = window.innerWidth;
  const ref = document.getElementsByClassName('visible')
  if (w < 760 && ref) {
  iframe.style.width = "66%";
  iframe.style.maxWidth = "67%";
  iframe.classList.add("mobile");
  } else {
  document.getElementById('edenai-message-iframe-container').style.width = "400px";
  if(iframe.classList.contains("mobile")) {
    iframe.classList.remove("mobile");
  }
  }
  window.addEventListener('resize', function(event) {
    const iframe = document.getElementById('edenai-message-iframe-container');
  let w = window.innerWidth;
  const ref = document.getElementsByClassName('visible')
  if (w < 760 && ref) {
  iframe.style.width = "66%";
  iframe.style.maxWidth = "67%";
  iframe.classList.add("mobile");
  ref[0].style.marginTop = "41%!important";
  } else {
  document.getElementById('edenai-message-iframe-container').style.width = "400px";
  if(iframe.classList.contains("mobile")) {
    iframe.classList.remove("mobile");
    ref[0].style.marginTop = "26%!important";
  }
  }
  }
  )
  });