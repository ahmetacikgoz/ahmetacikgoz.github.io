(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"IndexQuery",function(){return g});n(53);var r=n(0),a=n.n(r),o=n(1),i=n.n(o),l=n(38),c=n(153),m=n(160),s=n(154),p=c.c.div.withConfig({displayName:"pages__Content",componentId:"sc-1efl71s-0"})(["grid-column:2;box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:3rem 6rem;@media ","{padding:3rem 2rem;}@media ","{padding:2rem 1.5rem;}overflow:hidden;"],s.a.tablet,s.a.phone),d=c.c.div.withConfig({displayName:"pages__Hero",componentId:"sc-1efl71s-1"})(["grid-column:2;padding:3rem 2rem 6rem 2rem;text-shadow:0 12px 30px rgba(0,0,0,0.15);color:",";p{font-size:1.68rem;margin-top:-1rem;@media ","{font-size:1.25rem;}@media ","{font-size:1.45rem;}}"],function(e){return e.theme.colors.grey.dark},s.a.phone,s.a.tablet),u=function(e){var t=e.data.allMarkdownRemark.edges;return a.a.createElement(m.d,null,a.a.createElement(m.i,null,a.a.createElement(d,null,a.a.createElement("h1",null,"Hi."),a.a.createElement("p",null,"I'm Ahmet Açıkgöz, a Front End Developer with three years of industry experience, specializing in developing React-Native and React apps with the best UX users can get."),a.a.createElement(l.Link,{to:"/contact"},a.a.createElement(m.b,{big:!0},a.a.createElement("svg",{width:"1792",height:"1792",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"})),"Contact"))),a.a.createElement(p,null,a.a.createElement(m.g,null,"Latest stories"),t.map(function(e){return a.a.createElement(m.a,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,key:e.node.fields.slug})}))))};t.default=u,u.propTypes={data:i.a.shape({allMarkdownRemark:i.a.shape({edges:i.a.array.isRequired})}).isRequired};var g="3954537392"},154:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},155:function(e,t){e.exports={pathPrefix:"/",siteTitle:"Blog",siteTitleAlt:"Blog - Ahmet Açıkgöz",siteUrl:"https://ahmetacikgoz.github.io",siteLanguage:"en",siteBanner:"/social/banner.jpg",favicon:"src/favicon.png",siteDescription:"Blog - Ahmet Açıkgöz",author:"ahmetacikgoz",siteLogo:"/social/logo.png",userTwitter:"@4HM37",ogSiteName:"minimal",ogLanguage:"en_US",themeColor:"#3498DB",backgroundColor:"#2b2e3c",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px"}},159:function(e){e.exports={data:{site:{buildTime:"28.10.2018"}}}},160:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),l=n(153),c=n(38),m=n(161),s=n.n(m),p=l.c.article.withConfig({displayName:"Article__Post",componentId:"ktfwev-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"]),d=l.c.h2.withConfig({displayName:"Article__Title",componentId:"ktfwev-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),u=l.c.span.withConfig({displayName:"Article__Initiale",componentId:"ktfwev-2"})(["position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),g=l.c.p.withConfig({displayName:"Article__Excerpt",componentId:"ktfwev-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),f=function(e){var t=e.title,n=e.date,r=e.excerpt,o=e.slug,i=e.timeToRead,l=e.category,m=t.charAt(0);return a.a.createElement(p,null,a.a.createElement(d,null,a.a.createElement(u,null,m),a.a.createElement(c.Link,{to:o},t)),a.a.createElement(W,null,n," — ",i," Min Read — In"," ",a.a.createElement(c.Link,{to:"/categories/"+s()(l)},l)),a.a.createElement(g,null,r))},h=f;f.propTypes={title:i.a.string.isRequired,date:i.a.string.isRequired,excerpt:i.a.string.isRequired,slug:i.a.string.isRequired,timeToRead:i.a.number.isRequired,category:i.a.string.isRequired};n(162);var y=n(157),b=l.c.button.withConfig({displayName:"Button",componentId:"sc-1byvsdn-0"})(["background:",";border:none;display:inline-flex;align-items:center;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return Object(y.b)(.05,e.theme.colors.primary)}),x=l.c.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-8z476l-0"})(["background:linear-gradient( 45deg,",","," );grid-column:1 / -1;margin-left:-1rem;margin-right:-1rem;padding:2rem 2rem 5rem 2rem;box-shadow:inset 0px -10px 30px 0px rgba(0,0,0,0.1);"],function(e){return Object(y.a)(.1,e.theme.colors.primary)},function(e){return Object(y.b)(.1,e.theme.colors.primary)}),w=l.c.div.withConfig({displayName:"Header__Content",componentId:"sc-8z476l-1"})(["max-width:1000px;margin:0 auto;a{color:white;&:hover{opacity:0.85;color:white;}}"]),E=function(e){return a.a.createElement(x,null,a.a.createElement(w,null,e.children))},v=E;E.propTypes={children:i.a.oneOfType([i.a.array,i.a.node]).isRequired};var k=n(163),N=n.n(k),T=n(159),_={colors:{primary:"#d02e77",bg:"white",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem"}},z=n(154);function I(){var e=N()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return I=function(){return e},e}var C=Object(l.b)(I(),_.colors.bg,_.colors.primary,_.colors.bg,_.default,z.a.phone,_.colors.grey.dark,_.transitions.normal,_.colors.primary,_.colors.grey.dark,_.colors.primary,_.colors.grey.dark),q=(l.c.footer.withConfig({displayName:"Layout__Footer",componentId:"sc-18grp1x-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),function(e){var t=e.children;return a.a.createElement(c.StaticQuery,{query:"1719855500",render:function(e){return a.a.createElement(l.a,{theme:_},a.a.createElement(a.a.Fragment,null,a.a.createElement(H,null),a.a.createElement(C,null),t))},data:T})}),R=q;q.propTypes={children:i.a.oneOfType([i.a.array,i.a.node]).isRequired};var A=l.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"sc-2dr9gk-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),P=l.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"sc-2dr9gk-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),S=l.c.div.withConfig({displayName:"PrevNext__Next",componentId:"sc-2dr9gk-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),L=function(e){var t=e.next,n=e.prev;return a.a.createElement(A,null,n&&a.a.createElement(P,null,a.a.createElement("span",null,"Previous"),a.a.createElement(c.Link,{to:n.fields.slug},n.frontmatter.title)),t&&a.a.createElement(S,null,a.a.createElement("span",null,"Next"),a.a.createElement(c.Link,{to:t.fields.slug},t.frontmatter.title)))},O=L;L.propTypes={next:i.a.object,prev:i.a.object},L.defaultProps={next:null,prev:null};n(156);var B=l.c.div.withConfig({displayName:"SectionTitle",componentId:"qpxexf-0"})(["font-size:",";text-transform:uppercase;font-weight:bold;text-align:center;color:",";position:relative;padding-bottom:1rem;margin-bottom:4rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.dark},function(e){return e.theme.colors.grey.ultraLight}),j=n(158),F=n.n(j),U=n(155),D=n.n(U),M=function(e){var t,n,r,o,i=e.postNode,l=e.postPath,c=e.postSEO,m="/"===D.a.pathPrefix?"":D.a.pathPrefix;c?(t=i.frontmatter.title,n=i.excerpt,r=D.a.siteBanner,o=D.a.siteUrl+m+l):(t=D.a.siteTitle,n=D.a.siteDescription,r=D.a.siteBanner);r=D.a.siteUrl+m+r;var s=D.a.siteUrl+D.a.pathPrefix,p=[{"@context":"http://schema.org","@type":"WebSite","@id":s,url:s,name:t,alternateName:D.a.siteTitleAlt?D.a.siteTitleAlt:""}];return c&&(p=[{"@context":"http://schema.org","@type":"BlogPosting","@id":o,url:o,name:t,alternateName:D.a.siteTitleAlt?D.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:n,datePublished:i.frontmatter.date,dateModified:i.frontmatter.date,author:{"@type":"Person",name:D.a.author},publisher:{"@type":"Organization",name:D.a.author,logo:{"@type":"ImageObject",url:D.a.siteUrl+m+D.a.siteLogo}},isPartOf:s,mainEntityOfPage:{"@type":"WebSite","@id":s}}]),a.a.createElement(F.a,null,a.a.createElement("html",{lang:D.a.siteLanguage}),a.a.createElement("title",null,D.a.siteTitle),a.a.createElement("meta",{name:"description",content:n}),a.a.createElement("meta",{name:"image",content:r}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),a.a.createElement("meta",{property:"og:locale",content:D.a.ogLanguage}),a.a.createElement("meta",{property:"og:site_name",content:D.a.ogSiteName?D.a.ogSiteName:""}),a.a.createElement("meta",{property:"og:url",content:c?o:s}),c?a.a.createElement("meta",{property:"og:type",content:"article"}):null,a.a.createElement("meta",{property:"og:title",content:t}),a.a.createElement("meta",{property:"og:description",content:n}),a.a.createElement("meta",{property:"og:image",content:r}),a.a.createElement("meta",{property:"fb:app_id",content:D.a.siteFBAppID?D.a.siteFBAppID:""}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:D.a.userTwitter?D.a.userTwitter:""}),a.a.createElement("meta",{name:"twitter:title",content:t}),a.a.createElement("meta",{name:"twitter:url",content:D.a.siteUrl}),a.a.createElement("meta",{name:"twitter:description",content:n}),a.a.createElement("meta",{name:"twitter:image",content:r}))},H=M;M.propTypes={postNode:i.a.object,postPath:i.a.string,postSEO:i.a.bool};var W=l.c.div.withConfig({displayName:"Subline",componentId:"sc-1x517yx-0"})(["font-size:",";color:",";",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.light},function(e){return e.sectionTitle&&"margin-top: -3rem"},function(e){return e.sectionTitle&&"margin-bottom: 4rem"},function(e){return e.sectionTitle&&"text-align: center"}),J=l.c.div.withConfig({displayName:"Wrapper",componentId:"sc-1be34em-0"})(["display:grid;grid-template-columns:1fr minmax(320px,1000px) 1fr;padding:0 1rem;"]);n.d(t,"a",function(){return h}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return v}),n.d(t,"d",function(){return R}),n.d(t,"e",function(){return O}),n.d(t,"g",function(){return B}),n.d(t,"f",function(){return H}),n.d(t,"h",function(){return W}),n.d(t,"i",function(){return J})}}]);
//# sourceMappingURL=component---src-pages-index-js-05ddf3601fa2b791cc4d.js.map