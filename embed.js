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
  "edenai-message-iframe-container","hide","show","96px","100px","760px","430px");
  (function(){window.addEventListener('message', function(event) {
    const mainDiv = document.getElementsByClassName('chatBodyContainer');
    const chatBody = document.getElementsByClassName('chatBody');
    const visible = this.document.getElementsByClassName('visible');
    const windowWidth = window.parent.innerWidth;
    console.log(document.location.href)
    const test = document.createElement('div');
    test.innerHTML = "coucou";
    test.style = "width: 100px; height: 100px; background-color: red; position: absolute; top: 0; left: 0; z-index: 100"
    document.body.appendChild(test);

    if (windowWidth <= 480 && mainDiv.length > 0) {
      // Check if the first element exists before removing the class
      if (mainDiv[0]) {
        mainDiv[0].classList.add('mobile');
        chatBody[0].classList.add('phone');
        conversation.classList.add('conv');
        visible[0].classList.add('apear');

        console.log("coucou");
      }
    } else {
      mainDiv[0].classList.remove('mobile');
      chatBody[0].classList.remove('phone');
      conversation.classList.remove('conv');
      visible[0].classList.remove('apear');
      console.log("message received");
    }
  });})
});