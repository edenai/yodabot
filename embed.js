window.addEventListener("load", () => {
  (function(y,o,d,a,l,n){
  let ss = document.getElementsByTagName(l);let qp="";for(const t of ss){if(
  t.src.indexOf(n)>-1&&t.src.indexOf('?')>-1){qp = t.src.slice(t.src.indexOf('?'));break;}}
  let p=document.createElement(y);p.id=o;
  p.style="position:fixed;z-index:123456789;right:10px;bottom:0;height:96px;width:400px;min-height:96px;min-width:260px";
  let m=document.createElement(d);m.src=`${a}${qp}`;m.style="width: 100%; height: 100%; border: 0";p.appendChild(m);
  document.body.appendChild(p)})("div","edenai-message-iframe-container","iframe","https://edenai.github.io/yodabot/",'script','gh/edenai/yodabot');
  (function(e,d,en,a,i,y,b,o,t){window.addEventListener(e,function(ev){if(ev.origin!=d)return;
  let cbc=document.getElementById(en);switch(ev.data){case a:cbc.style.height=y;cbc.style.width=b;
  break;case i:cbc.style.height=o;cbc.style.width=t}},false)})("message","https://edenai.github.io",
  "edenai-message-iframe-container","hide","show","96px","400px","760px","px");
  (function(y,o,d,a){const iframe=document.getElementById(y);
  let w=window.innerWidth;const ref=document.getElementsByClassName(o);
  w<760&&ref?(console.log(ref?ref[0]:"no ref"),
  iframe.style.width="90%",iframe.style.maxWidth="90%",iframe.classList.add(d))
  :(document.getElementById(y).style.width="400px",iframe.classList.contains(d)&&(iframe.classList.remove(d)
  ,ref[0].style.marginTop="26%!important")),window.addEventListener(a,(function(e){const t=document.getElementById(y);
  let i=window.innerWidth;const s=document.getElementsByClassName(o);
  i<760&&s?(t.style.width="90%",t.style.maxWidth="90%",t.classList.add(d),
  s[0].style.border="solid 1px #255fff",s[0].style.marginTop="41%!important"):(document.getElementById(y)
  .style.width="400px",t.classList.contains(d)&&(t.classList.remove(d),s[0].style.marginTop="26%!important"))}));
  })("edenai-message-iframe-container","visible","mobile","resize");
})