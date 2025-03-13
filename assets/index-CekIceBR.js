import{j as t,B as a,T as i,c as f,d as j,a as g,C as v}from"./mui-B-OhoYBl.js";import{a as b,r as x,b as w}from"./vendor-Bm3pUBVl.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();var h={},k=b;h.createRoot=k.createRoot,h.hydrateRoot=k.hydrateRoot;const F=s=>{const{title:n,subtitle:r,isScrolled:l}=s,e={mb:0,textTransform:"uppercase",transition:"color 0.2s ease",cursor:"pointer","&:hover":{textDecoration:"none"},userSelect:"none",color:l?"black":"white"};return t.jsxs(a,{sx:{display:"flex",alignItems:"center"},onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:[t.jsx(i,{variant:"body2",sx:{...e,fontWeight:"bold"},children:n}),t.jsxs(i,{variant:"body2",sx:{...e,display:["none","none","block"]},children:[t.jsx("span",{style:{marginLeft:"8px",marginRight:"8px"},children:"|"}),r]})]})},T=s=>{const{menuItems:n,isScrolled:r}=s,l={mb:0,textTransform:"uppercase",transition:"color 0.2s ease",cursor:"pointer","&:hover":{textDecoration:"none"},userSelect:"none",color:r?"primary.main":"white"};return n.length===0?null:t.jsx(a,{sx:{display:"flex"},children:n.map((e,o)=>t.jsx(i,{variant:"body2",sx:{...l,mr:o===n.length-1?0:1},onClick:()=>{var m;window.scrollTo({top:(((m=document.getElementById(e.id))==null?void 0:m.offsetTop)??0)-48,behavior:"smooth"})},children:e.title}))})},S=s=>{const{title:n,subtitle:r,menuItems:l}=s,[e,o]=x.useState(!1);return x.useEffect(()=>{const m=()=>{window.scrollY>250?o(!0):o(!1)};return window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}},[]),t.jsxs(a,{component:"header",sx:{position:"fixed",top:0,left:0,right:0,height:"48px",display:"flex",alignItems:"center",justifyContent:"space-between",px:2,zIndex:100,backgroundColor:e?"white":"transparent",backgroundImage:e?"white":"linear-gradient(to bottom, rgba(64, 64, 64, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",transition:"background-color background-image 0.3s ease",boxShadow:e?"0 2px 10px rgba(0, 0, 0, 0.1)":"none"},children:[t.jsx(F,{title:n,subtitle:r,isScrolled:e}),t.jsx(T,{menuItems:l,isScrolled:e})]})},I=s=>{const{id:n,children:r,sx:l}=s;return t.jsx(a,{id:n,sx:{width:"100%",mt:2,py:6,pb:4,backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 1) 100%) ",...l},children:t.jsx(a,{sx:{maxWidth:"1200px",mx:"auto",px:2},children:r})})},c=s=>{const{imageUrl:n,imageAltText:r,children:l,sx:e,imageSide:o="left"}=s;return t.jsxs(a,{sx:{display:"flex",flexDirection:["column","column",o==="left"?"row-reverse":"row"],gap:2,width:"100%",maxWidth:"1200px",overflow:"hidden",mx:"auto",...e},children:[t.jsx(a,{sx:{width:["100%","100%","50%"],height:["content","content","inherit"],display:"flex",flexDirection:"column",justifyContent:"center",p:2},children:l}),t.jsx(a,{sx:{width:["100%","100%","50%"],height:"100%"},children:t.jsx("img",{src:n,alt:r,width:"100%"})})]})},C=s=>{const{children:n,color:r="black",backgroundColor:l="grey.200",sx:e}=s;return t.jsx(a,{sx:{m:2,px:4,py:4,backgroundColor:l,h4:{mb:0,fontStyle:"italic"},borderRadius:2,...e},children:t.jsx(i,{variant:"h4",color:r,children:n})})},y=s=>{const{name:n,role:r,imageUrl:l,quote:e,texts:o,sx:m}=s,u=t.jsx(a,{sx:{width:["60%","50%","30%","30%"],px:2},children:t.jsx("img",{src:l,width:"100%",style:{borderRadius:"50%"}})});return t.jsxs(a,{sx:m,children:[t.jsxs(a,{sx:{display:"flex",flexDirection:["column","column","row"],justifyContent:"flex-start",alignItems:"center",gap:2,mb:4},children:[u,t.jsxs(a,{sx:{width:["100%","100%","70%"],display:"flex",flexDirection:"column",justifyContent:"center",mt:-2},children:[t.jsx(i,{variant:"h3",color:"primary",children:n}),t.jsx(i,{variant:"body1",children:r}),t.jsx(C,{backgroundColor:"primary.main",color:"white",sx:{ml:-.25,width:"calc(100% + 0.25rem)"},children:e})]})]}),o.map(d=>t.jsx(i,{variant:"body1",sx:{mb:1},children:d}))]})},L=({overlay:s=!1,sx:n})=>s?t.jsx(a,{sx:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(248,99,26,0.6) 85%, rgba(248,99,26,0.8) 100%),linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(160,160,160,0.4) 50%, rgba(160,160,160,0.8) 100%)",...n}}):null,A=s=>{const{backgroundUrl:n,overlay:r=!1,sx:l,children:e}=s,o=n?{backgroundImage:`url(${n})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:{backgroundColor:"grey.300"};return t.jsxs(a,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",position:"relative",height:"100vh",p:0,...o,...l},children:[t.jsx(L,{overlay:r}),t.jsx(a,{sx:{width:"100%",height:"100%",position:"relative",zIndex:1},children:e})]})},p=s=>{const{title:n,sectionId:r,sx:l}=s;return t.jsx(a,{id:r,sx:{width:"100%",backgroundColor:"grey.200",mt:8,p:4,...l},children:t.jsx(i,{variant:"h2",sx:{m:0,textAlign:"center"},children:n})})},B=s=>{const{backgroundColor:n="primary.main",color:r="white",texts:l,size:e="medium",sx:o}=s,m=e==="medium"?"10rem":"8rem",u=e==="medium"?"h3":"h4";return t.jsx(a,{sx:{width:m,height:m,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:n,borderRadius:"50%",textAlign:"center",...o},children:t.jsx(i,{variant:u,color:r,sx:{mb:0},children:l.map(d=>t.jsx("span",{style:{display:"block",float:"none"},children:d}))})})},H=()=>{const s=[{id:"services",title:"Palvelumme"},{id:"about",title:"Meistä"},{id:"contacts",title:"Yhteystiedot"}];return t.jsxs(t.Fragment,{children:[t.jsxs(a,{id:"top",children:[t.jsx(S,{title:"SHIFT",subtitle:"Uusi terveempi työaika",menuItems:s}),t.jsx(A,{backgroundUrl:"office_people_chatting.jpg",overlay:!0,children:t.jsx(a,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"flex-end",pb:["3rem","3rem","4rem","6rem"]},children:t.jsxs(a,{sx:{width:"fit-content",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",p:4},children:[t.jsx(a,{sx:{width:["112px","112px","128px","128px"],display:"flex",justifyContent:"center",alignItems:"center",mb:6},children:t.jsx("img",{src:"certificate.png",alt:"Uusi terveempi työaika",width:"100%"})}),t.jsx(a,{sx:{width:["325px","350px","425px","500px"]},children:t.jsx("img",{src:"logo.png",alt:"SHIFT",width:"100%"})}),t.jsx(i,{variant:"h1",color:"white",sx:{textAlign:"center",mt:2,maxWidth:"400px"},children:"yritysvalmennukset & inspiraatiopäivät"})]})})}),t.jsxs(c,{imageUrl:"sofa_sidelight.jpg",imageAltText:"Aurinkoinen sohvanurkkaus avotoimistossa",sx:{mt:2},children:[t.jsx(i,{variant:"h2",color:"primary",children:"Haaste"}),t.jsx(i,{variant:"body1",children:"Työssä uupuminen on hiljainen epidemia, joka uhkaa yritysten menestystä. Pitkäaikainen istuminen ja vähäinen fyysinen aktiivisuus johtavat terveysongelmiin, heikentävät työhyvinvointia ja laskevat tuottavuutta."}),t.jsx(i,{variant:"body1",sx:{mt:2},children:"Ihmisiltä puuttuu käsitys terveyttä edistävästä työajasta."})]}),t.jsxs(c,{imageSide:"right",imageUrl:"man_rides_a_bike.jpg",imageAltText:"Mies työmatkalla pyörällä",sx:{mt:2},children:[t.jsx(i,{variant:"h2",color:"primary",children:"Muutos"}),t.jsx(i,{variant:"body1",children:"Luomme kulttuurin, jossa suhtaudutaan uudella tavalla liikkumiseen. Tässä kulttuurissa ymmärretään millainen liikkuminen on terveyden kannalta tarpeeksi ja harjoitellaan uusia toimintamalleja."}),t.jsx(i,{variant:"body1",sx:{mt:2},children:"Uusi yhteinen työaika on terveellisempää, tehokkaampaa ja turvallisempaa."})]}),t.jsxs(c,{imageUrl:"training_session.jpg",imageAltText:"Koulutuspäivä meneillään",sx:{mt:2},children:[t.jsx(a,{sx:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"},children:t.jsx(B,{texts:["Työaika voi","olla terveyttä","edistävää!"],sx:{mb:4}})}),t.jsx(i,{variant:"h2",color:"primary",children:"SHIFT-menetelmä"}),t.jsx(i,{variant:"body1",children:"Menetelmämme perustuu huippu-urheilun ja terveydenhuollon alalta saatuun kokemukseen. Se yhdistää omat havaintomme sekä aiheeseen liittyvän tutkimustiedon."}),t.jsx(i,{variant:"body1",sx:{mt:2},children:"Valmennuskohtaamisissamme varmistamme autenttisen ja rehellisen tilan, jossa voi tulla esiin heikkouksineen ja oivaltaa uutta."})]}),t.jsx(p,{title:"Palvelumme",sectionId:"services"}),t.jsx(a,{sx:{maxWidth:"1200px",mx:"auto",mt:2},children:t.jsxs(a,{sx:{p:2},children:[t.jsx(i,{variant:"h2",color:"primary",children:"Inspiraatiopäivät ja luennot (1-3h)"}),t.jsx(i,{variant:"body1",children:"Tarjoamme yrityksille ja yhteisöille inspiroivia hetkiä mielenkiintoisten aiheiden parissa. Aiheet, joista usein puhumme ovat esimerkiksi:"}),t.jsx(i,{variant:"h3",sx:{mt:2},children:'1. "Työssä jaksaminen ja palautuminen" - Petter Kukkonen'}),t.jsx(i,{variant:"body1",children:"Millaisia haasteita vaativa, paljon matkustamista sisältävä reissutyö pitää sisällään ja mitkä asiat voivat viedä uupumuksen äärelle? Aiheita ja oivalluksia palautumisesta käsitellään yhdistetyn maajoukkueen toimintaympäristön näkökulmasta."}),t.jsx(i,{variant:"h3",sx:{mt:2},children:'2. "Kaikki liike merkitsee" - Liis Kukkonen'}),t.jsx(i,{variant:"body1",children:"Ihmiset yleensä yliarvioivat toimintansa vaikutukset lyhyellä aikavälillä - he myös aliarvioivat tekojensa vaikutukset pitkällä aikavälillä. Meillä kaikilla on viikossa käytettävissämme seitsemän päivää ja vuorokaudessa 24 tuntia. Onko mahdollista parantaa terveyttä, tuottavuutta sekä lisätä aktiivisuutta työpäiviin niin, ettei siihen käytettäisi aikaa muun elämän kustannuksella? Liisin esitys lisää ymmärrystä liikkumisen hyödyistä sekä mielelle että keholle."}),t.jsx(i,{variant:"h3",sx:{mt:2},children:'3. "Yhdessä olemme enemmän" - tiimipäivä Liis ja Petter Kukkonen'}),t.jsx(i,{variant:"body1",children:"Luomme kulttuurin, jossa suhtaudutaan uudella tavalla tiimityöhön. Tässä kulttuurissa ymmärretään millainen vaikutus meistä jokaisella on työyhteisöön."}),t.jsx(i,{variant:"h2",color:"primary",sx:{mt:4},children:"Yritysvalmennukset"}),t.jsx(i,{variant:"body1",sx:{mb:2},children:"Toteutamme erimittaisia valmennuksia, joissa tavoite sovitaan yhdessä yrityksen kanssa."}),t.jsx("img",{src:"palvelumalli.jpg",alt:"Palvelumallimme",width:"100%"}),t.jsx(i,{variant:"body1",sx:{mt:2},children:"Ole yhteydessä tarkemmista yksityiskohdista!"})]})}),t.jsx(p,{title:"Meistä",sectionId:"about"}),t.jsx(a,{sx:{maxWidth:"1200px",mx:"auto",mt:2},children:t.jsxs(a,{sx:{p:2},children:[t.jsx(y,{name:"Petter Kukkonen",role:"Valmentaja",imageUrl:"petter.jpg",quote:`Elämä on jatkuvaa tasapainoilua, sama koskee suhdetta jaksamisen ja
            palautumisen välillä. Tässä pystyn auttamaan sinua.`,texts:["Olen lähtöisin Lieksasta. Jyväskylään päädyin syksyllä 2004, jolloin aloitin liikuntatieteiden opiskelun yliopistossa. Urheilun ja liikunnan eri tasojen kanssa olen ollut tekemisissä koko ikäni. Lapsuudessani kävin läpi monipuolisen lajikirjon, mutta päädyin lopulta talvilajeihin, mäkihyppyyn ja yhdistettyyn. Ammattivalmentajana olen tehnyt 15-vuotisen uran. Nykyisessä työssäni kehitän Laajavuoren ulkoilualuetta sekä yritän löytää keinoja lasten liikunnan edistämiseksi.","Liikkuminen on minulla verissä. Vuodenajan mukaan tykkään juosta, pyöräillä sekä hiihtää. Kuntosalilla käyn kerran viikossa. Muita harrastuksia ovat lukeminen sekä kirjoittaminen. Teen myös asiantuntijatöitä Ylen Talvistudiossa ja tarjoan vuokrakoteja ihmisille.","Jaksamisen kannalta keskeistä on ymmärtää kehon kokonaisvaltaiseen rasitukseen vaikuttavat tekijät: työ / opiskelu, harrastukset ja muu arki. Kun yhden muuttujan kuorma kasvaa, kahden muun on annettava tilaa. Palautumisen näkökulmasta meillä tulee olla taito ja uskallus kuunnella kehon signaaleja. Ylikuormittunut elimistö on sama kuin kertyvä velka - se pitää lopulta maksaa takaisin."]},"petter"),t.jsx(y,{name:"Liis Kukkonen",role:"Fysioterapeutti",imageUrl:"liis.jpg",quote:"Haluan antaa panokseni sen eteen, että mahdollisimman moni tuntisi aktiivisemman elämäntavan hyödyt kehossaan ja samaan aikaan voisi muokata työaikaa mahdollisimman aktiiviseksi.",texts:["Olen koko työurani työskennellyt terveydenhuoltoalalla. Ammatiltani olen fysioterapeutti ja tällä hetkellä toimin myös esihenkilönä Mehiläisessä. SHIFT-valmennuksessa toimin asiantuntijana. Ammattini kautta näen usein kuinka tärkeässä roolissa elämäntapavalinnat ovat ihmisten hyvän terveyden ja hyvinvoinnin kannalta. Opittujen elämäntapojen ja arjen valintojen keskeinen merkitys koetaan valitettavasti myös silloin, kun kohtaamme terveydellisiä haasteita. Hyödynnän valmennuksissa myös esihenkilötyön kautta saatua kokemusta.","Vapaa ajallani tykkään hölkätä poluilla ja haastavissa maastoissa sekä osallistua polkujuoksutapahtumiin. Lisäksi hiihdän ja laskettelen paljon. Mielenkiinnon kohteitani ovat myös matkustaminen, kielet ja erilaiset kulttuurit."],sx:{mt:6}},"liis")]})})]}),t.jsxs(I,{id:"contacts",children:[t.jsx(i,{variant:"h3",color:"primary",children:"Yhteystiedot"}),t.jsx(a,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:t.jsxs(a,{sx:{display:"flex",flexDirection:["column","row"],gap:[2,6]},children:[t.jsxs(a,{children:[t.jsx(i,{variant:"h6",fontWeight:"bold",children:"Liis Kukkonen"}),t.jsx(i,{variant:"body1",children:"liiskukkonen@gmail.com"}),t.jsx(i,{variant:"body1",children:"+358 44 0522506"})]}),t.jsxs(a,{children:[t.jsx(i,{variant:"h6",fontWeight:"bold",children:"Petter Kukkonen"}),t.jsx(i,{variant:"body1",children:"petterkukkonen@gmail.com"}),t.jsx(i,{variant:"body1",children:"+358 44 0522506"})]})]})}),t.jsx(a,{children:t.jsxs(i,{variant:"body2",sx:{mt:6},children:[t.jsx("span",{style:{fontWeight:"bold"},children:"SHIFT"}),t.jsx("span",{style:{paddingLeft:"8px",paddingRight:"8px"},children:"|"}),t.jsx("span",{children:"UUSI TERVEEMPI TYÖAIKA"})]})})]})]})},D={values:{xs:0,sm:600,md:900,lg:1366,xl:1920}},P={primary:{main:"#F96F2A",light:"#fa8b54",dark:"#ae4d1d",contrastText:"#FFFFFF"},secondary:{main:"#333333",light:"#3F3F3F",dark:"#262626",contrastText:"#FFFFFF"},error:{main:"#BB2233",light:"#C62538",dark:"#AD2031",contrastText:"#FFFFFF"},warning:{main:"#D95B00",light:"#E55F00",dark:"#CC5500",contrastText:"#FFFFFF"},info:{main:"#0866C9",light:"#086ED3",dark:"#0760BA",contrastText:"#FFFFFF"},success:{main:"#538A01",light:"#5A9601",dark:"#4B7C01",contrastText:"#FFFFFF"}},W={fontFamily:"Lato, Arial",h1:{fontSize:"1.85rem",fontWeight:"normal",lineHeight:"2.25rem",padding:0,marginBottom:"1rem"},h2:{fontSize:"1.5rem",fontWeight:"normal",lineHeight:"2.25rem",padding:0,marginBottom:"1rem"},h3:{fontSize:"1.25rem",fontWeight:"normal",lineHeight:"1.875rem",padding:0,marginBottom:"0.75rem"},h4:{fontSize:"1.125rem",fontWeight:"normal",lineHeight:"1.75rem",padding:0,marginBottom:"0.75rem"},h5:{fontSize:"1rem",fontWeight:"normal",lineHeight:"1.5rem",padding:0,marginBottom:"0.5rem"},h6:{fontSize:"1rem",fontWeight:"normal",lineHeight:"1.5rem",padding:0,marginBottom:0},body1:{fontSize:"1rem",fontWeight:"normal",lineHeight:"1.5rem",padding:0,marginBottom:0},body2:{fontSize:"0.85rem",fontWeight:"normal",lineHeight:"1.5rem",padding:0,marginBottom:"0.25rem"}},E={breakpoints:D,palette:P,typography:W},M={typography:{fontFamily:"Lato, Arial"},components:{MuiCssBaseline:{styleOverrides:`
      ::-webkit-scrollbar {
        width: 3px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 2;
      }
      @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        src: local(''), url('/assets/fonts/lato-v24-latin-ext-400.woff2') format('woff2');
      }
      @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-style: italic;
        font-weight: 400;
        src: local(''), url('/assets/fonts/lato-v24-latin-ext-400italic.woff2') format('woff2');
      }
      @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 500;
        src: local(''), url('/assets/fonts/lato-v24-latin-ext-700.woff2') format('woff2');
      }
      @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-style: italic;
        font-weight: 500;
        src: local(''), url('/assets/fonts/lato-v24-latin-ext-700italic.woff2') format('woff2');
      }
      @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        src: local(''), url('/assets/fonts/lato-v24-latin-ext-700.woff2') format('woff2');
      }
      @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-style: italic;
        font-weight: 700;
        src: local(''), url('/assets/fonts/lato-v24-latin-ext-900italic.woff2') format('woff2');
      }
        p, h1, h2, h3, h4, h5, h6, body1, body2 {
          cursor: default;
        }
      `}}},U=f(j(E,M)),z=()=>t.jsxs(g,{theme:U,children:[t.jsx(v,{}),t.jsx(H,{})]});h.createRoot(document.getElementById("root")).render(t.jsx(w.StrictMode,{children:t.jsx(z,{})}));
