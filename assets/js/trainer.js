let state={sphere:null,level:"bachelor",subject:"all",mode:"practice",analyticsType:"descriptive",questions:[],currentIdx:0,answers:{},sessionStart:null,sessions:JSON.parse(localStorage.getItem("mt_sessions")||"[]"),sessionLog:[]};

// Sphere cards
document.querySelectorAll(".sphere-card").forEach(c=>{
  c.addEventListener("click",()=>{
    document.querySelectorAll(".sphere-card").forEach(x=>x.classList.remove("active"));
    c.classList.add("active");
    state.sphere=c.dataset.sphere;
    document.getElementById("sphereSection").style.display="none";
    document.getElementById("msgBox").style.display="none";
    document.getElementById("trainerMain").style.display="grid";
    initSubjects();startSession();
  });
});

// Level tabs
document.querySelectorAll("#levelTabs button").forEach(b=>{
  b.addEventListener("click",()=>{
    document.querySelectorAll("#levelTabs button").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");state.level=b.dataset.level;
    if(state.sphere){initSubjects();startSession();}
  });
});

// Mode tabs
document.querySelectorAll(".mode-tabs button").forEach(b=>{
  b.addEventListener("click",()=>{
    document.querySelectorAll(".mode-tabs button").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");state.mode=b.dataset.mode;startSession();
  });
});

// Analytics tabs
document.querySelectorAll(".analytics-tabs button").forEach(b=>{
  b.addEventListener("click",()=>{
    document.querySelectorAll(".analytics-tabs button").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");state.analyticsType=b.dataset.type;renderAnalytics();
  });
});

document.getElementById("subjectFilter").addEventListener("change",e=>{state.subject=e.target.value;startSession();});
document.getElementById("prevBtn").addEventListener("click",()=>{if(state.currentIdx>0){state.currentIdx--;renderQ();}});
document.getElementById("nextBtn").addEventListener("click",()=>{if(state.currentIdx<state.questions.length-1){state.currentIdx++;renderQ();}else endSession();});

function initSubjects(){
  const sel=document.getElementById("subjectFilter");
  const subs=SPHERES[state.sphere][state.level];
  sel.innerHTML='<option value="all">\u0423\u0441\u0456 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0438</option>';
  subs.forEach(s=>{const o=document.createElement("option");o.value=s;o.textContent=s;sel.appendChild(o);});
}

function startSession(){
  const subs=state.subject==="all"?SPHERES[state.sphere][state.level]:[state.subject];
  let pool=[];
  subs.forEach(sub=>{if(Q[sub])Q[sub].forEach((q,i)=>pool.push({...q,subject:sub,idx:i}));});
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  const n=state.mode==="simulation"?Math.min(pool.length,30):Math.min(pool.length,10);
  state.questions=pool.slice(0,n);state.currentIdx=0;state.answers={};state.sessionStart=Date.now();state.sessionLog=[];
  document.getElementById("sessionEnd").style.display="none";
  document.getElementById("trainerMain").style.display="grid";
  renderQ();renderResources();renderStats();renderAnalytics();
}

function renderQ(){
  const q=state.questions[state.currentIdx];
  const area=document.getElementById("questionArea");
  document.getElementById("qNav").style.display="flex";
  document.getElementById("qCounter").textContent=`${state.currentIdx+1} / ${state.questions.length}`;
  const answered=state.answers[state.currentIdx]!==undefined;
  const ua=state.answers[state.currentIdx];
  let oh=q.opts.map((o,i)=>{
    let c="q-opt";
    if(answered){if(i===q.ans)c+=" correct";else if(i===ua&&i!==q.ans)c+=" wrong";else c+=" reveal";}
    else if(ua===i)c+=" selected";
    return `<div class="${c}" data-i="${i}">${o}</div>`;
  }).join("");
  area.innerHTML=`<div class="q-card"><div style="font-size:12px;color:var(--muted);margin-bottom:8px">${q.subject}</div><h3>${q.q}</h3><div class="q-options">${oh}</div>${answered?`<div style="margin-top:12px;font-size:13px;color:${ua===q.ans?'#22c55e':'#ef4444'}">${ua===q.ans?'\u2705 \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e!':'\u274c \u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e. \u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c: '+q.opts[q.ans]}</div>`:''}</div>`;
  area.querySelectorAll(".q-opt:not(.correct):not(.wrong):not(.reveal)").forEach(el=>{
    el.addEventListener("click",()=>{
      const idx=parseInt(el.dataset.i);state.answers[state.currentIdx]=idx;
      state.sessionLog.push({subject:q.subject,correct:idx===q.ans,time:Date.now()});
      renderQ();renderStats();renderAnalytics();
    });
  });
  document.getElementById("prevBtn").disabled=state.currentIdx===0;
  document.getElementById("nextBtn").textContent=state.currentIdx===state.questions.length-1?"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u{1F3C1}":"\u0414\u0430\u043b\u0456 \u2192";
}

function endSession(){
  const el=Math.max(1,Math.round((Date.now()-state.sessionStart)/60000));
  const tot=state.sessionLog.length,cor=state.sessionLog.filter(l=>l.correct).length;
  const acc=tot?Math.round(cor/tot*100):0;
  state.sessions.push({sphere:state.sphere,level:state.level,subject:state.subject,mode:state.mode,date:new Date().toISOString(),minutes:el,total:tot,correct:cor,accuracy:acc,log:state.sessionLog});
  localStorage.setItem("mt_sessions",JSON.stringify(state.sessions));
  document.getElementById("trainerMain").style.display="none";
  document.getElementById("sessionEnd").style.display="block";
  document.getElementById("finalScore").textContent=acc+"%";
  document.getElementById("finalScore").style.color=acc>=80?"#22c55e":acc>=60?"#eab308":"#ef4444";
  const r=getReadiness();
  document.getElementById("finalStats").innerHTML=`<span class="stat-pill">\u23F1 ${el} \u0445\u0432</span><span class="stat-pill">\u2705 ${cor}/${tot}</span><span class="stat-pill">\u{1F3AF} ${acc}%</span><span class="stat-pill">\u{1F7E2} ${r.label}</span>`;
}

function renderStats(){
  const log=state.sessionLog,tot=log.length,cor=log.filter(l=>l.correct).length;
  const acc=tot?Math.round(cor/tot*100):0;
  const el=state.sessionStart?Math.max(0,Math.round((Date.now()-state.sessionStart)/60000)):0;
  const r=getReadiness();
  document.getElementById("sessionStats").innerHTML=`<span class="stat-pill">\u23F1 <span class="val">${el} \u0445\u0432</span></span><span class="stat-pill">\u2705 <span class="val">${cor}/${tot}</span></span><span class="stat-pill">\u{1F3AF} <span class="val">${acc}%</span></span><span class="stat-pill">\u{1F4CB} <span class="val">${state.sessions.length} \u0441\u0435\u0441\u0456\u0439</span></span><span class="stat-pill">\u{1F7E2} <span class="val">${r.label}</span></span>`;
  const rv=document.getElementById("readinessValue");rv.textContent=r.label;rv.className="readiness "+r.cls;
  const bar=document.getElementById("readinessBar");bar.style.width=r.pct+"%";bar.style.background=r.cls==="high"?"#22c55e":r.cls==="medium"?"#eab308":"#ef4444";
}

function getReadiness(){
  const r=state.sessions.slice(-5);
  if(!r.length)return{label:"New",cls:"low",pct:10};
  const a=r.reduce((s,x)=>s+x.accuracy,0)/r.length;
  const t=r.reduce((s,x)=>s+x.total,0);
  if(a>=85&&t>=30)return{label:"High",cls:"high",pct:Math.min(95,a)};
  if(a>=65)return{label:"Medium",cls:"medium",pct:a};
  return{label:"Low",cls:"low",pct:a};
}

function renderResources(){
  const subs=state.subject==="all"?SPHERES[state.sphere][state.level]:[state.subject];
  let h="";
  subs.forEach(s=>{if(RES[s]){h+=`<div style="font-size:12px;font-weight:600;margin:8px 0 4px">${s}</div>`;RES[s].forEach(r=>h+=`<a href="${r.u}" target="_blank" rel="noreferrer">${r.l}</a>`);}});
  document.getElementById("resourceLinks").innerHTML=h;
}

function renderAnalytics(){
  const t=state.analyticsType;
  const titles={descriptive:"\u041e\u043f\u0438\u0441\u043e\u0432\u0430 \u0430\u043d\u0430\u043b\u0456\u0442\u0438\u043a\u0430 \u2014 \u0449\u043e \u0441\u0442\u0430\u043b\u043e\u0441\u044f?",diagnostic:"\u0414\u0456\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u0447\u043d\u0430 \u2014 \u0447\u043e\u043c\u0443?",prescriptive:"\u041f\u0440\u0435\u0441\u043a\u0440\u0438\u043f\u0442\u0438\u0432\u043d\u0430 \u2014 \u0449\u043e \u0440\u043e\u0431\u0438\u0442\u0438?",predictive:"\u041f\u0440\u0435\u0434\u0438\u043a\u0442\u0438\u0432\u043d\u0430 \u2014 \u0449\u043e \u0431\u0443\u0434\u0435?"};
  document.getElementById("chartTitle").textContent=titles[t]||"";
  const c=document.getElementById("mainChart"),ctx=c.getContext("2d");
  c.width=c.offsetWidth*2;c.height=360;ctx.clearRect(0,0,c.width,c.height);
  const subs=SPHERES[state.sphere][state.level],log=state.sessionLog,sess=state.sessions.filter(s=>s.sphere===state.sphere);
  if(t==="descriptive")drawAcc(ctx,c,subs,log);
  else if(t==="diagnostic")drawWeak(ctx,c,subs,log);
  else if(t==="prescriptive")drawPriority(ctx,c,subs,log);
  else if(t==="predictive")drawPredict(ctx,c,sess);
  drawShared();
}

function drawAcc(ctx,c,subs,log){
  const acc={};subs.forEach(s=>acc[s]={c:0,t:0});
  log.forEach(l=>{if(acc[l.subject]){acc[l.subject].t++;if(l.correct)acc[l.subject].c++;}});
  const vals=subs.map(s=>acc[s].t?Math.round(acc[s].c/acc[s].t*100):0);
  barChart(ctx,c.width,c.height,subs,vals,["#3b82f6","#8b5cf6","#06b6d4","#f59e0b","#ef4444"],"\u0422\u043e\u0447\u043d\u0456\u0441\u0442\u044c \u043f\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430\u0445");
}

function drawWeak(ctx,c,subs,log){
  const w={};subs.forEach(s=>w[s]=0);
  log.filter(l=>!l.correct).forEach(l=>{if(w[l.subject]!==undefined)w[l.subject]++;});
  const mx=Math.max(...Object.values(w),1),vals=subs.map(s=>Math.round(w[s]/mx*100));
  barChart(ctx,c.width,c.height,subs,vals,["#ef4444","#f97316","#eab308","#f43f5e","#dc2626"],"\u0421\u043b\u0430\u0431\u043a\u0456 \u0437\u043e\u043d\u0438 (\u043f\u043e\u043c\u0438\u043b\u043a\u0438)");
}

function drawPriority(ctx,c,subs,log){
  const acc={};const cnt={};subs.forEach(s=>{acc[s]=0;cnt[s]=0;});
  log.forEach(l=>{if(cnt[l.subject]!==undefined){cnt[l.subject]++;if(l.correct)acc[l.subject]++;}});
  const vals=subs.map(s=>{const a=cnt[s]?Math.round(acc[s]/cnt[s]*100):0;return Math.max(0,80-a);});
  barChart(ctx,c.width,c.height,subs,vals,["#22c55e","#16a34a","#15803d","#166534","#14532d"],"\u041f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442 \u0432\u0438\u0432\u0447\u0435\u043d\u043d\u044f (\u0434\u043e 80%)");
}

function drawPredict(ctx,c,sess){
  const r=sess.slice(-10);
  if(r.length<2){ctx.fillStyle="var(--muted)";ctx.font="14px system-ui";ctx.fillText("\u041f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u043c\u0456\u043d\u0456\u043c\u0443\u043c 2 \u0441\u0435\u0441\u0456\u0457",60,100);return;}
  const a=r.map(s=>s.accuracy),n=a.length;
  const sx=a.reduce((s,_,i)=>s+i,0),sy=a.reduce((s,v)=>s+v,0),sxy=a.reduce((s,v,i)=>s+i*v,0),sxx=a.reduce((s,_,i)=>s+i*i,0);
  const slope=(n*sxy-sx*sy)/(n*sxx-sx*sx),intercept=(sy-slope*sx)/n;
  const pred=Math.min(100,Math.max(0,Math.round(intercept+slope*n)));
  const w=c.width,h=c.height,pad=60,cw=w-pad*2,ch=h-pad*2;
  ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue("--ink")||"#333";
  ctx.font="bold 14px system-ui";ctx.fillText("\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457 \u0441\u0435\u0441\u0456\u0457: "+pred+"%",pad,30);
  a.forEach((v,i)=>{const x=pad+i*(cw/(n-1||1)),y=h-pad-(v/100)*ch;ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fillStyle="#3b82f6";ctx.fill();});
  ctx.strokeStyle="#3b82f6";ctx.lineWidth=2;ctx.beginPath();
  ctx.moveTo(pad,h-pad-(a[0]/100)*ch);ctx.lineTo(pad+(n-1)*(cw/(n-1||1)),h-pad-(a[n-1]/100)*ch);ctx.stroke();
  const px=pad+n*(cw/(n-1||1)),py=h-pad-(pred/100)*ch;
  ctx.beginPath();ctx.arc(px,py,8,0,Math.PI*2);ctx.fillStyle="#22c55e";ctx.fill();
}

function drawShared(){
  const c=document.getElementById("sharedChart"),ctx=c.getContext("2d");
  c.width=c.offsetWidth*2;c.height=360;ctx.clearRect(0,0,c.width,c.height);
  const subs=SPHERES[state.sphere][state.level],all=state.sessions.filter(s=>s.sphere===state.sphere);
  const acc={};subs.forEach(s=>acc[s]={c:0,t:0});
  all.forEach(s=>(s.log||[]).forEach(l=>{if(acc[l.subject]){acc[l.subject].t++;if(l.correct)acc[l.subject].c++;}}));
  const vals=subs.map(s=>acc[s].t?Math.round(acc[s].c/acc[s].t*100):0);
  barChart(ctx,c.width,c.height,subs,vals,["#3b82f6","#8b5cf6","#06b6d4","#f59e0b","#ef4444"],"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0442\u043e\u0447\u043d\u0456\u0441\u0442\u044c (\u0432\u0441\u0456 \u0441\u0435\u0441\u0456\u0457)");
}

function barChart(ctx,w,h,labels,values,colors,title){
  const pad=60,bw=Math.min(60,(w-pad*2)/labels.length-10),mx=Math.max(...values,1),ch=h-pad*2;
  ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue("--ink")||"#333";
  ctx.font="bold 14px system-ui";ctx.fillText(title,pad,30);
  labels.forEach((l,i)=>{
    const x=pad+i*(bw+10)+10,bh=Math.max(2,(values[i]/mx)*ch),y=h-pad-bh;
    ctx.fillStyle=colors[i%colors.length];ctx.beginPath();ctx.roundRect(x,y,bw,bh,6);ctx.fill();
    ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue("--ink")||"#333";
    ctx.font="11px system-ui";ctx.textAlign="center";
    ctx.fillText(l.length>12?l.substring(0,11)+"\u2026":l,x+bw/2,h-pad+16);
    ctx.fillText(values[i]+"%",x+bw/2,y-6);
  });ctx.textAlign="start";
}
