$wnd.showcase.runAsyncCallback11("function EDb(){}\nfunction GDb(){}\nfunction zDb(a,b){a.b=b}\nfunction ADb(a){if(a==pDb){return true}Fy();return a==sDb}\nfunction BDb(a){if(a==oDb){return true}Fy();return a==nDb}\nfunction FDb(a){this.b=(hFb(),cFb).a;this.e=(mFb(),lFb).a;this.a=a}\nfunction xDb(a,b){var c;c=tB(a.fb,153);c.b=b.a;!!c.d&&ryb(c.d,b)}\nfunction yDb(a,b){var c;c=tB(a.fb,153);c.e=b.a;!!c.d&&tyb(c.d,b)}\nfunction CDb(){tDb();vyb.call(this);this.b=(hFb(),cFb);this.c=(mFb(),lFb);(fvb(),this.e)[x9b]=0;this.e[y9b]=0}\nfunction tDb(){tDb=MW;mDb=new EDb;pDb=new EDb;oDb=new EDb;nDb=new EDb;qDb=new EDb;rDb=new EDb;sDb=new EDb}\nfunction uDb(a,b,c){var d;if(c==mDb){if(b==a.a){return}else if(a.a){throw gW(new fWb('Only one CENTER widget may be added'))}}Rh(b);uPb(a.j,b);c==mDb&&(a.a=b);d=new FDb(c);b.fb=d;xDb(b,a.b);yDb(b,a.c);wDb(a);Th(b,a)}\nfunction vDb(a){var b,c,d,e,f,g,h;bPb((fvb(),a.hb),'',Xac);g=new W1b;h=new EPb(a.j);while(h.b<h.c.c){b=CPb(h);f=tB(b.fb,153).a;d=tB(cZb(m2b(g.d,f)),85);c=!d?1:d.a;e=f==qDb?'north'+c:f==rDb?'south'+c:f==sDb?'west'+c:f==nDb?'east'+c:f==pDb?'linestart'+c:f==oDb?'lineend'+c:e8b;bPb(Qo(b.hb),Xac,e);oZb(g,f,vWb(c+1))}}\nfunction wDb(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(fvb(),a.d);while(Jwb(b)>0){wo(b,Iwb(b,0))}o=1;e=1;for(i=new EPb(a.j);i.b<i.c.c;){d=CPb(i);f=tB(d.fb,153).a;f==qDb||f==rDb?++o:(f==nDb||f==sDb||f==pDb||f==oDb)&&++e}p=CA(FQ,B5b,262,o,0,1);for(g=0;g<o;++g){p[g]=new GDb;p[g].b=$doc.createElement(v9b);so(b,mvb(p[g].b))}k=0;l=e-1;m=0;q=o-1;c=null;for(h=new EPb(a.j);h.b<h.c.c;){d=CPb(h);j=tB(d.fb,153);r=$doc.createElement(w9b);j.d=r;j.d[k9b]=j.b;j.d.style[l9b]=j.e;j.d[T5b]=j.f;j.d[S5b]=j.c;if(j.a==qDb){ivb(p[m].b,r,p[m].a);so(r,mvb(d.hb));r[lac]=l-k+1;++m}else if(j.a==rDb){ivb(p[q].b,r,p[q].a);so(r,mvb(d.hb));r[lac]=l-k+1;--q}else if(j.a==mDb){c=r}else if(ADb(j.a)){n=p[m];ivb(n.b,r,n.a++);so(r,mvb(d.hb));r[Yac]=q-m+1;++k}else if(BDb(j.a)){n=p[m];ivb(n.b,r,n.a);so(r,mvb(d.hb));r[Yac]=q-m+1;--l}}if(a.a){n=p[m];ivb(n.b,c,n.a);so(c,mvb(eh(a.a)))}}\nvar Xac='cwDockPanel';LW(415,1,d8b);_.Bc=function Ddb(){var a,b,c;dZ(this.a,(a=new CDb,(fvb(),a.hb).className='cw-DockPanel',a.e[x9b]=4,zDb(a,(hFb(),bFb)),uDb(a,new _Bb('This is the first north component'),(tDb(),qDb)),uDb(a,new _Bb('This is the first south component'),rDb),uDb(a,new _Bb('This is the east component'),nDb),uDb(a,new _Bb('This is the west component'),sDb),uDb(a,new _Bb('This is the second north component'),qDb),uDb(a,new _Bb('This is the second south component'),rDb),b=new _Bb(\"This is a <code>ScrollPanel<\\/code> contained at the center of a <code>DockPanel<\\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!\"),c=new uzb(b),c.hb.style[T5b]='400px',c.hb.style[S5b]='100px',uDb(a,c,mDb),vDb(a),a))};LW(871,254,Y5b,CDb);_.gc=function DDb(a){var b;b=pxb(this,a);if(b){a==this.a&&(this.a=null);wDb(this)}return b};var mDb,nDb,oDb,pDb,qDb,rDb,sDb;var GQ=QVb(W5b,'DockPanel',871);LW(152,1,{},EDb);var DQ=QVb(W5b,'DockPanel/DockLayoutConstant',152);LW(153,1,{153:1},FDb);_.c='';_.f='';var EQ=QVb(W5b,'DockPanel/LayoutData',153);LW(262,1,{262:1},GDb);_.a=0;var FQ=QVb(W5b,'DockPanel/TmpRow',262);g5b(zl)(11);\n//# sourceURL=showcase-11.js\n")
