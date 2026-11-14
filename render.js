(function(){
var d=window.SITE, $=function(s){return document.querySelector(s)};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]})};
var r=document.documentElement.style;
Object.keys(d.theme).forEach(function(k){r.setProperty('--'+k,d.theme[k])});
document.title=d.title;
var phoneTel='tel:'+d.phones[0].tel;
var msgBtns=function(cls){var o='';
 if(d.links.tg)o+='<a class="btn '+cls+'" href="'+esc(d.links.tg)+'" target="_blank" rel="noopener">Telegram</a>';
 if(d.links.wa)o+='<a class="btn '+cls+'" href="'+esc(d.links.wa)+'" target="_blank" rel="noopener">WhatsApp</a>';
 if(d.links.vk)o+='<a class="btn '+cls+'" href="'+esc(d.links.vk)+'" target="_blank" rel="noopener">ВКонтакте</a>';
 if(d.links.max)o+='<a class="btn '+cls+'" href="'+esc(d.links.max)+'" target="_blank" rel="noopener">MAX</a>';
 return o};
var services=d.services.map(function(s){return '<div class="card reveal"><h3>'+esc(s.t)+'</h3><p>'+esc(s.d||'')+'</p><div class="price">'+esc(s.p)+' <small>'+esc(s.u||'')+'</small></div></div>'}).join('');
var feats=d.features.map(function(f){return '<div class="reveal"><div class="ico">'+f.i+'</div><h3>'+esc(f.t)+'</h3><p>'+esc(f.d)+'</p></div>'}).join('');
var steps=d.steps.map(function(s){return '<div class="step reveal"><h3>'+esc(s.t)+'</h3><p>'+esc(s.d)+'</p></div>'}).join('');
var checks=d.heroPoints.map(function(p){return '<li><span class="tick">✓</span>'+esc(p)+'</li>'}).join('');
var phones=d.phones.map(function(p){return '<a href="tel:'+p.tel+'">'+esc(p.text)+'</a>'}).join(' · ');
var stats=d.stats.map(function(s){return '<div class="stat"><b>'+esc(s.v)+'</b><span>'+esc(s.l)+'</span></div>'}).join('');
document.body.innerHTML=
'<div class="demo"><b>Демо-версия.</b> Пример сайта, подготовленный для «'+esc(d.name)+'». Это не официальный сайт компании.</div>'+
'<header class="top"><div class="wrap nav"><a class="logo" href="#top"><i>'+d.logo+'</i>'+esc(d.name)+'</a>'+
'<nav><a href="#services">Услуги и цены</a><a href="#why">Преимущества</a><a href="#how">Как работаем</a><a href="#contacts">Контакты</a></nav>'+
'<a class="btn primary sm" href="'+phoneTel+'">'+esc(d.phones[0].text)+'</a></div></header>'+
'<main id="top"><section class="hero"><div class="wrap grid"><div>'+
'<div class="badge"><b>★ '+esc(d.rating.v)+'</b> '+esc(d.rating.c)+' оценок на Яндекс Картах</div>'+
'<h1>'+d.hero.title+'</h1><p class="lead">'+esc(d.hero.text)+'</p>'+
'<div class="cta"><a class="btn primary" href="'+phoneTel+'">Позвонить</a>'+msgBtns('ghost')+'</div></div>'+
'<aside class="hero-card"><h3>'+esc(d.hero.cardTitle)+'</h3><div class="stats">'+stats+'</div><ul>'+checks+'</ul></aside></div></section>'+
'<section id="services"><div class="wrap"><div class="eyebrow">Услуги и цены</div><h2>'+esc(d.servicesTitle)+'</h2><p class="sub">'+esc(d.servicesSub)+'</p><div class="cards">'+services+'</div><p class="note">'+esc(d.priceNote)+'</p></div></section>'+
'<section id="why" class="alt"><div class="wrap"><div class="eyebrow">Почему мы</div><h2>'+esc(d.whyTitle)+'</h2><div class="feat">'+feats+'</div></div></section>'+
'<section id="how"><div class="wrap"><div class="eyebrow">Как это работает</div><h2>Три простых шага</h2><div class="steps">'+steps+'</div></div></section>'+
'<section id="contacts" class="alt"><div class="wrap"><div class="eyebrow">Контакты</div><h2>Свяжитесь с нами</h2>'+
'<div class="contacts"><div class="cbox">'+
'<div class="row"><div class="ico">📞</div><div><small>Телефон</small><b>'+phones+'</b></div></div>'+
'<div class="row"><div class="ico">📍</div><div><small>Адрес</small><b>'+esc(d.address)+'</b></div></div>'+
'<div class="row"><div class="ico">🕘</div><div><small>Режим работы</small><b>'+esc(d.hours)+'</b></div></div>'+
'<div><small style="color:var(--muted);font-size:13px">Написать в мессенджер</small><div class="msgs" style="margin-top:8px">'+msgBtns('ghost sm')+'</div></div>'+
'<a class="btn primary" href="'+esc(d.links.map)+'" target="_blank" rel="noopener">Открыть на Яндекс Картах</a></div>'+
'<div class="map"><iframe loading="lazy" title="Карта" src="https://yandex.ru/map-widget/v1/?oid='+d.oid+'&z=16"></iframe></div></div>'+
'<div class="final reveal" style="margin-top:40px"><div><h2>'+esc(d.finalTitle)+'</h2><p>'+esc(d.finalText)+'</p></div><a class="btn" href="'+phoneTel+'">Позвонить сейчас</a></div></div></section></main>'+
'<footer><div class="wrap"><span>© '+esc(d.name)+', Самарская область</span><span>Демо-версия сайта. Данные взяты из открытых источников (Яндекс Карты).</span></div></footer>';
var pending=[].slice.call(document.querySelectorAll('.reveal'));
function reveal(){pending=pending.filter(function(el){if(el.getBoundingClientRect().top<window.innerHeight*0.92){el.classList.add('in');return false}return true})}
window.addEventListener('scroll',reveal,{passive:true});window.addEventListener('resize',reveal);
reveal();setTimeout(function(){pending.forEach(function(el){el.classList.add('in')});pending=[]},4000);
})();
