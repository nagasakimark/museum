var Lc=0,Xo=1,Nc=2;var ks=1,Dc=2,Qi=3,oi=0,Vt=1,An=2,yi=0,es=1,qo=2,jo=3,Yo=4,Uc=5;var vi=100,Fc=101,Oc=102,Bc=103,kc=104,zc=200,Gc=201,Hc=202,Vc=203,Jo=204,Zo=205,Wc=206,Xc=207,qc=208,jc=209,Yc=210,Jc=211,Zc=212,$c=213,Kc=214,Or=0,Br=1,kr=2,Hi=3,zr=4,Gr=5,Hr=6,Vr=7,zs=0,Qc=1,eh=2,Rn=0,$o=1,Ko=2,Qo=3,el=4,tl=5,nl=6,il=7;var sl=300,Si=301,ts=302,pa=303,ma=304,xi=1e3,vn=1001,Wr=1002,Tt=1003,th=1004;var Gs=1005;var Ht=1006,ga=1007;var Vn=1008;var Xt=1009,rl=1010,al=1011,ns=1012,_a=1013,dn=1014,fn=1015,pn=1016,xa=1017,ya=1018,Mi=1020,ol=35902,ll=35899,cl=1021,hl=1022,mn=1023,kn=1026,Wn=1027,ul=1028,va=1029,li=1030,Sa=1031;var Ma=1033,Hs=33776,Vs=33777,Ws=33778,Xs=33779,ba=35840,wa=35841,Ea=35842,Ta=35843,Aa=36196,Ra=37492,Ca=37496,Ia=37488,Pa=37489,qs=37490,La=37491,Na=37808,Da=37809,Ua=37810,Fa=37811,Oa=37812,Ba=37813,ka=37814,za=37815,Ga=37816,Ha=37817,Va=37818,Wa=37819,Xa=37820,qa=37821,ja=36492,Ya=36494,Ja=36495,Za=36283,$a=36284,js=36285,Ka=36286;var gs=2300,Xr=2301,Dr=2302,Oo=2303,Bo=2400,ko=2401,zo=2402;var nh=3200;var Ys=0,ih=1,Xn="",It="srgb",_s="srgb-linear",xs="linear",Je="srgb";var Ur=7680;var sh=519,rh=512,ah=513,oh=514,dl=515,lh=516,ch=517,fl=518,pl=519,hh=35044;var ml="300 es",sn=2e3,Vi=2001;function Uu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Wi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uh(){let i=Wi("canvas");return i.style.display="block",i}var ac={},Xi=null;function gl(...i){let e="THREE."+i.shift();Xi?Xi("log",e,...i):console.log(e,...i)}function dh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=dh(i);let e="THREE."+i.shift();if(Xi)Xi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ie(...i){i=dh(i);let e="THREE."+i.shift();if(Xi)Xi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ms(...i){let e=i.join(" ");e in ac||(ac[e]=!0,Ce(...i))}function fh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ph={[Or]:Or,[kr]:Hr,[zr]:zr,[Hi]:Gr,[Br]:Br,[Hr]:kr,[Vr]:Vr,[Gr]:Hi},Mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mo=Math.PI/180,qr=180/Math.PI;function Js(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function Ou(i,e){return(i%e+e)%e}function go(i,e,t){return(1-t)*i+t*e}function mh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _l(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bu(i,e){if(e.constructor===Float32Array)return i;let t=_l(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function ku(i,e){if(e.constructor===Float32Array)return i;let t=_l(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ml=class Ml{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ml.prototype.isVector2=!0;var ke=Ml,bn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],m=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||l!==f||c!==m||h!==_){let u=l*f+c*m+h*_+d*S;u<0&&(f=-f,m=-m,_=-_,S=-S,u=-u);let p=1-o;if(u<.9995){let M=Math.acos(u),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,l=l*p+f*o,c=c*p+m*o,h=h*p+_*o,d=d*p+S*o}else{l=l*p+f*o,c=c*p+m*o,h=h*p+_*o,d=d*p+S*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+h*d+l*m-c*f,e[t+1]=l*_+h*f+c*d-o*m,e[t+2]=c*_+h*m+o*f-l*d,e[t+3]=h*_-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"YZX":this._x=f*h*d+c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d-f*m*_;break;case"XZY":this._x=f*h*d-c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d+f*m*_;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},bl=class bl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bl.prototype.isVector3=!0;var k=bl,_o=new k,oc=new bn,wl=class wl{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],_=n[8],S=s[0],u=s[3],p=s[6],M=s[1],T=s[4],v=s[7],A=s[2],E=s[5],g=s[8];return r[0]=a*S+o*M+l*A,r[3]=a*u+o*T+l*E,r[6]=a*p+o*v+l*g,r[1]=c*S+h*M+d*A,r[4]=c*u+h*T+d*E,r[7]=c*p+h*v+d*g,r[2]=f*S+m*M+_*A,r[5]=f*u+m*T+_*E,r[8]=f*p+m*v+_*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,m=c*r-a*l,_=t*d+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return e[0]=d*S,e[1]=(s*c-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=f*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=m*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xo.makeScale(e,t)),this}rotate(e){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wl.prototype.isMatrix3=!0;var Le=wl,xo=new Le,lc=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zu(){let i={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_s]:{primaries:e,whitePoint:n,transfer:xs,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}var We=zu();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ai,jr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ai===void 0&&(Ai=Wi("canvas")),Ai.width=e.width,Ai.height=e.height;let s=Ai.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gu=0,qi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yo(s[a].image)):r.push(yo(s[a]))}else r=yo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var Hu=0,vo=new k,Ut=class i extends Mn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vn,s=vn,r=Ht,a=Vn,o=mn,l=Xt,c=i.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Js(),this.name="",this.source=new qi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xi:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xi:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=sl;Ut.DEFAULT_ANISOTROPY=1;var El=class El{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],_=l[9],S=l[2],u=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-S)<.01&&Math.abs(_-u)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+S)<.1&&Math.abs(_+u)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,v=(m+1)/2,A=(p+1)/2,E=(h+f)/4,g=(d+S)/4,b=(_+u)/4;return T>v&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=g/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=g/r,s=b/r),this.set(n,s,r,t),this}let M=Math.sqrt((u-_)*(u-_)+(d-S)*(d-S)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(u-_)/M,this.y=(d-S)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};El.prototype.isVector4=!0;var ot=El,Yr=class extends Mn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ut({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new qi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends Yr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ys=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jr=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var fa=class fa{constructor(e,t,n,s,r,a,o,l,c,h,d,f,m,_,S,u){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,f,m,_,S,u)}set(e,t,n,s,r,a,o,l,c,h,d,f,m,_,S,u){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=m,p[7]=_,p[11]=S,p[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,m=a*d,_=o*h,S=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,m=l*d,_=c*h,S=c*d;t[0]=f+S*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=S+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,m=l*d,_=c*h,S=c*d;t[0]=f-S*o,t[4]=-a*d,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=S-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,m=a*d,_=o*h,S=o*d;t[0]=l*h,t[4]=_*c-m,t[8]=f*c+S,t[1]=l*d,t[5]=S*c+f,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,m=a*c,_=o*l,S=o*c;t[0]=l*h,t[4]=S-f*d,t[8]=_*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+_,t[10]=f-S*d}else if(e.order==="XZY"){let f=a*l,m=a*c,_=o*l,S=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+S,t[5]=a*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=o*h,t[10]=S*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vu,e,Wu)}lookAt(e,t,n){let s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Yn.crossVectors(n,jt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Yn.crossVectors(n,jt)),Yn.normalize(),pr.crossVectors(jt,Yn),s[0]=Yn.x,s[4]=pr.x,s[8]=jt.x,s[1]=Yn.y,s[5]=pr.y,s[9]=jt.y,s[2]=Yn.z,s[6]=pr.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],_=n[2],S=n[6],u=n[10],p=n[14],M=n[3],T=n[7],v=n[11],A=n[15],E=s[0],g=s[4],b=s[8],D=s[12],P=s[1],N=s[5],O=s[9],V=s[13],C=s[2],H=s[6],q=s[10],G=s[14],te=s[3],X=s[7],K=s[11],Q=s[15];return r[0]=a*E+o*P+l*C+c*te,r[4]=a*g+o*N+l*H+c*X,r[8]=a*b+o*O+l*q+c*K,r[12]=a*D+o*V+l*G+c*Q,r[1]=h*E+d*P+f*C+m*te,r[5]=h*g+d*N+f*H+m*X,r[9]=h*b+d*O+f*q+m*K,r[13]=h*D+d*V+f*G+m*Q,r[2]=_*E+S*P+u*C+p*te,r[6]=_*g+S*N+u*H+p*X,r[10]=_*b+S*O+u*q+p*K,r[14]=_*D+S*V+u*G+p*Q,r[3]=M*E+T*P+v*C+A*te,r[7]=M*g+T*N+v*H+A*X,r[11]=M*b+T*O+v*q+A*K,r[15]=M*D+T*V+v*G+A*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],_=e[3],S=e[7],u=e[11],p=e[15],M=l*m-c*f,T=o*m-c*d,v=o*f-l*d,A=a*m-c*h,E=a*f-l*h,g=a*d-o*h;return t*(S*M-u*T+p*v)-n*(_*M-u*A+p*E)+s*(_*T-S*A+p*g)-r*(_*v-S*E+u*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],_=e[12],S=e[13],u=e[14],p=e[15],M=t*o-n*a,T=t*l-s*a,v=t*c-r*a,A=n*l-s*o,E=n*c-r*o,g=s*c-r*l,b=h*S-d*_,D=h*u-f*_,P=h*p-m*_,N=d*u-f*S,O=d*p-m*S,V=f*p-m*u,C=M*V-T*O+v*N+A*P-E*D+g*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/C;return e[0]=(o*V-l*O+c*N)*H,e[1]=(s*O-n*V-r*N)*H,e[2]=(S*g-u*E+p*A)*H,e[3]=(f*E-d*g-m*A)*H,e[4]=(l*P-a*V-c*D)*H,e[5]=(t*V-s*P+r*D)*H,e[6]=(u*v-_*g-p*T)*H,e[7]=(h*g-f*v+m*T)*H,e[8]=(a*O-o*P+c*b)*H,e[9]=(n*P-t*O-r*b)*H,e[10]=(_*E-S*v+p*M)*H,e[11]=(d*v-h*E-m*M)*H,e[12]=(o*D-a*N-l*b)*H,e[13]=(t*N-n*D+s*b)*H,e[14]=(S*T-_*A-u*M)*H,e[15]=(h*A-d*T+f*M)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,m=r*h,_=r*d,S=a*h,u=a*d,p=o*d,M=l*c,T=l*h,v=l*d,A=n.x,E=n.y,g=n.z;return s[0]=(1-(S+p))*A,s[1]=(m+v)*A,s[2]=(_-T)*A,s[3]=0,s[4]=(m-v)*E,s[5]=(1-(f+p))*E,s[6]=(u+M)*E,s[7]=0,s[8]=(_+T)*g,s[9]=(u-M)*g,s[10]=(1-(f+S))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ri.set(s[0],s[1],s[2]).length(),o=Ri.set(s[4],s[5],s[6]).length(),l=Ri.set(s[8],s[9],s[10]).length();r<0&&(a=-a),on.copy(this);let c=1/a,h=1/o,d=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,t.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=sn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s),_,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===sn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Vi)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=sn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),m=-(n+s)/(n-s),_,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===sn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Vi)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};fa.prototype.isMatrix4=!0;var st=fa,Ri=new k,on=new st,Vu=new k(0,0,0),Wu=new k(1,1,1),Yn=new k,pr=new k,jt=new k,hc=new st,uc=new bn,wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uc.setFromEuler(this),this.setFromQuaternion(uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var ji=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xu=0,dc=new k,Ci=new bn,Nn=new st,mr=new k,us=new k,qu=new k,ju=new bn,fc=new k(1,0,0),pc=new k(0,1,0),mc=new k(0,0,1),gc={type:"added"},Yu={type:"removed"},Ii={type:"childadded",child:null},So={type:"childremoved",child:null},Ft=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new wn,n=new bn,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Le}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ji,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(fc,e)}rotateY(e){return this.rotateOnAxis(pc,e)}rotateZ(e){return this.rotateOnAxis(mc,e)}translateOnAxis(e,t){return dc.copy(e).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fc,e)}translateY(e){return this.translateOnAxis(pc,e)}translateZ(e){return this.translateOnAxis(mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mr.copy(e):mr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(us,mr,this.up):Nn.lookAt(mr,us,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gc),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yu),So.child=e,this.dispatchEvent(So),So.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gc),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,qu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,ju,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ft.DEFAULT_UP=new k(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ju={type:"move"},Yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let u=t.getJointPose(S,n),p=this._getHandJoint(c,S);u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=u.radius),p.visible=u!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ju)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},gr={h:0,s:0,l:0};function Mo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=Ou(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Mo(a,r,e+1/3),this.g=Mo(a,r,e),this.b=Mo(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return We.workingToColorSpace(Dt.copy(this),e),Math.round(Xe(Dt.r*255,0,255))*65536+Math.round(Xe(Dt.g*255,0,255))*256+Math.round(Xe(Dt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Dt.copy(this),t);let n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=It){We.workingToColorSpace(Dt.copy(this),e);let t=Dt.r,n=Dt.g,s=Dt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(gr);let n=go(Jn.h,gr.h,t),s=go(Jn.s,gr.s,t),r=go(Jn.l,gr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new Pe;Pe.NAMES=gh;var vs=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ss=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ln=new k,Dn=new k,bo=new k,Un=new k,Pi=new k,Li=new k,_c=new k,wo=new k,Eo=new k,To=new k,Ao=new ot,Ro=new ot,Co=new ot,Qn=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ln.subVectors(e,t),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ln.subVectors(s,t),Dn.subVectors(n,t),bo.subVectors(e,t);let a=ln.dot(ln),o=ln.dot(Dn),l=ln.dot(bo),c=Dn.dot(Dn),h=Dn.dot(bo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-o*h)*f,_=(a*h-o*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ao.setScalar(0),Ro.setScalar(0),Co.setScalar(0),Ao.fromBufferAttribute(e,t),Ro.fromBufferAttribute(e,n),Co.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ao,r.x),a.addScaledVector(Ro,r.y),a.addScaledVector(Co,r.z),a}static isFrontFacing(e,t,n,s){return ln.subVectors(n,t),Dn.subVectors(e,t),ln.cross(Dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),ln.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Pi.subVectors(s,n),Li.subVectors(r,n),wo.subVectors(e,n);let l=Pi.dot(wo),c=Li.dot(wo);if(l<=0&&c<=0)return t.copy(n);Eo.subVectors(e,s);let h=Pi.dot(Eo),d=Li.dot(Eo);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Pi,a);To.subVectors(e,r);let m=Pi.dot(To),_=Li.dot(To);if(_>=0&&m<=_)return t.copy(r);let S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Li,o);let u=h*_-m*d;if(u<=0&&d-h>=0&&m-_>=0)return _c.subVectors(r,s),o=(d-h)/(d-h+(m-_)),t.copy(s).addScaledVector(_c,o);let p=1/(u+S+f);return a=S*p,o=f*p,t.copy(n).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ei=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),xr.subVectors(this.max,ds),Ni.subVectors(e.a,ds),Di.subVectors(e.b,ds),Ui.subVectors(e.c,ds),Zn.subVectors(Di,Ni),$n.subVectors(Ui,Di),pi.subVectors(Ni,Ui);let t=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-pi.z,pi.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,pi.z,0,-pi.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-pi.y,pi.x,0];return!Io(t,Ni,Di,Ui,xr)||(t=[1,0,0,0,1,0,0,0,1],!Io(t,Ni,Di,Ui,xr))?!1:(yr.crossVectors(Zn,$n),t=[yr.x,yr.y,yr.z],Io(t,Ni,Di,Ui,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fn=[new k,new k,new k,new k,new k,new k,new k,new k],cn=new k,_r=new ei,Ni=new k,Di=new k,Ui=new k,Zn=new k,$n=new k,pi=new k,ds=new k,xr=new k,yr=new k,mi=new k;function Io(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);let o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var pt=new k,vr=new ke,Zu=0,Sn=class extends Mn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hh,this.updateRanges=[],this.gpuType=fn,this.version=0,this._normalizationScale=e!==void 0?_l(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ku(e,this.array)}};var Ms=class extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var bs=class extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Et=class extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}},$u=new ei,fs=new k,Po=new k,Ji=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$u.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);let t=fs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(Po)),this.expandByPoint(fs.copy(e.center).sub(Po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ku=0,nn=new st,Lo=new Ft,Fi=new k,Yt=new ei,ps=new ei,wt=new k,En=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?bs:Ms)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Yt.min,ps.min),Yt.expandByPoint(wt),wt.addVectors(Yt.max,ps.max),Yt.expandByPoint(wt)):(Yt.expandByPoint(ps.min),Yt.expandByPoint(ps.max))}Yt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(e,c),wt.add(Fi)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new k,l[D]=new k;let h=new k,d=new k,f=new k,m=new ke,_=new ke,S=new ke,u=new k,p=new k;function M(D,P,N){c[D]=c[P]=c[N]=1,h.fromBufferAttribute(n,D),d.fromBufferAttribute(n,P),f.fromBufferAttribute(n,N),m.fromBufferAttribute(r,D),_.fromBufferAttribute(r,P),S.fromBufferAttribute(r,N),d.sub(h),f.sub(h),_.sub(m),S.sub(m);let O=1/(_.x*S.y-S.x*_.y);isFinite(O)&&(u.copy(d).multiplyScalar(S.y).addScaledVector(f,-_.y).multiplyScalar(O),p.copy(f).multiplyScalar(_.x).addScaledVector(d,-S.x).multiplyScalar(O),o[D].add(u),o[P].add(u),o[N].add(u),l[D].add(p),l[P].add(p),l[N].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,P=T.length;D<P;++D){let N=T[D],O=N.start,V=N.count;for(let C=O,H=O+V;C<H;C+=3)M(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let v=new k,A=new k,E=new k,g=new k;function b(D){E.fromBufferAttribute(s,D),g.copy(E);let P=o[D];v.copy(P),v.sub(E.multiplyScalar(E.dot(P))).normalize(),A.crossVectors(g,P);let O=A.dot(l[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,O)}for(let D=0,P=n.count;D<P;++D)c[D]&&b(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,d=new k;if(e)for(let f=0,m=e.count;f<m;f+=3){let _=e.getX(f+0),S=e.getX(f+1),u=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,u),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,u),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),m=0,_=0;for(let S=0,u=l.length;S<u;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let p=0;p<h;p++)f[_++]=c[m++]}return new Sn(f,h,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var No=new k,Qu=new k,ed=new Le,hn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=No.subVectors(n,t).cross(Qu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(No),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ed.getNormalMatrix(e),s=this.coplanarPoint(No).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},td=0,zn=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=es,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Zo,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var On=new k,Do=new k,Sr=new k,Mr=new k,ws=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Do.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(Do);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Sr),o=Mr.dot(this.direction),l=-Mr.dot(Sr),c=Mr.lengthSq(),h=Math.abs(1-a*a),d,f,m,_;if(h>0)if(d=a*l-o,f=a*o-l,_=r*h,d>=0)if(f>=-_)if(f<=_){let S=1/h;d*=S,f*=S,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Do).addScaledVector(Sr,f),m}intersectSphere(e,t){if(e.radius<0)return null;On.subVectors(e.center,this.origin);let n=On.dot(this.direction),s=On.dot(On)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,f=e.y-a.y,m=e.z-a.z,_=t.x-a.x,S=t.y-a.y,u=t.z-a.z,p=n.x-a.x,M=n.y-a.y,T=n.z-a.z,v=Math.abs(l),A=Math.abs(c),E=Math.abs(h),g,b,D,P,N,O,V,C,H,q,G,te;if(v>=A&&v>=E?(D=l,O=d,H=_,te=p,l>=0?(g=c,b=h,P=f,N=m,V=S,C=u,q=M,G=T):(g=h,b=c,P=m,N=f,V=u,C=S,q=T,G=M)):A>=E?(D=c,O=f,H=S,te=M,c>=0?(g=h,b=l,P=m,N=d,V=u,C=_,q=T,G=p):(g=l,b=h,P=d,N=m,V=_,C=u,q=p,G=T)):(D=h,O=m,H=u,te=T,h>=0?(g=l,b=c,P=d,N=f,V=_,C=S,q=p,G=M):(g=c,b=l,P=f,N=d,V=S,C=_,q=M,G=p)),D===0)return null;let X=g/D,K=b/D,Q=1/D,Se=P-X*O,De=N-K*O,J=V-X*H,pe=C-K*H,xe=q-X*te,Te=G-K*te,me=xe*pe-Te*J,Fe=Se*Te-De*xe,dt=J*De-pe*Se;if(s){if(me<0||Fe<0||dt<0)return null}else if((me<0||Fe<0||dt<0)&&(me>0||Fe>0||dt>0))return null;let Re=me+Fe+dt;if(Re===0)return null;let $e=Q*(me*O+Fe*H+dt*te);return(Re>0?$e<0:$e>0)?null:this.at($e/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=zs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xc=new st,gi=new ws,br=new Ji,yc=new k,wr=new k,Er=new k,Tr=new k,Uo=new k,Ar=new k,vc=new k,Rr=new k,Qe=class extends Ft{constructor(e=new En,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Uo.fromBufferAttribute(d,e),a?Ar.addScaledVector(Uo,h):Ar.addScaledVector(Uo.sub(t),h))}t.add(Ar)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(br.containsPoint(gi.origin)===!1&&(gi.intersectSphere(br,yc)===null||gi.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(xc.copy(r).invert(),gi.copy(e.ray).applyMatrix4(xc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){let u=f[_],p=a[u.materialIndex],M=Math.max(u.start,m.start),T=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let v=M,A=T;v<A;v+=3){let E=o.getX(v),g=o.getX(v+1),b=o.getX(v+2);s=Cr(this,p,e,n,c,h,d,E,g,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let u=_,p=S;u<p;u+=3){let M=o.getX(u),T=o.getX(u+1),v=o.getX(u+2);s=Cr(this,a,e,n,c,h,d,M,T,v),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){let u=f[_],p=a[u.materialIndex],M=Math.max(u.start,m.start),T=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let v=M,A=T;v<A;v+=3){let E=v,g=v+1,b=v+2;s=Cr(this,p,e,n,c,h,d,E,g,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let u=_,p=S;u<p;u+=3){let M=u,T=u+1,v=u+2;s=Cr(this,a,e,n,c,h,d,M,T,v),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}};function nd(i,e,t,n,s,r,a,o){let l;if(e.side===Vt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===oi,o),l===null)return null;Rr.copy(o),Rr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Rr);return c<t.near||c>t.far?null:{distance:c,point:Rr.clone(),object:i}}function Cr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,wr),i.getVertexPosition(l,Er),i.getVertexPosition(c,Tr);let h=nd(i,e,t,n,wr,Er,Tr,vc);if(h){let d=new k;Qn.getBarycoord(vc,wr,Er,Tr,d),s&&(h.uv=Qn.getInterpolatedAttribute(s,o,l,c,d,new ke)),r&&(h.uv1=Qn.getInterpolatedAttribute(r,o,l,c,d,new ke)),a&&(h.normal=Qn.getInterpolatedAttribute(a,o,l,c,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new k,materialIndex:0};Qn.getNormal(wr,Er,Tr,f.normal),h.face=f,h.barycoord=d}return h}var Zr=class extends Ut{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Tt,h=Tt,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _i=new Ji,id=new ke(.5,.5),Ir=new k,ti=class{constructor(e=new hn,t=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],m=r[7],_=r[8],S=r[9],u=r[10],p=r[11],M=r[12],T=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-a,m-h,p-_,A-M).normalize(),s[1].setComponents(c+a,m+h,p+_,A+M).normalize(),s[2].setComponents(c+o,m+d,p+S,A+T).normalize(),s[3].setComponents(c-o,m-d,p-S,A-T).normalize(),n)s[4].setComponents(l,f,u,v).normalize(),s[5].setComponents(c-l,m-f,p-u,A-v).normalize();else if(s[4].setComponents(c-l,m-f,p-u,A-v).normalize(),t===sn)s[5].setComponents(c+l,m+f,p+u,A+v).normalize();else if(t===Vi)s[5].setComponents(l,f,u,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);let t=id.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ir.x=s.normal.x>0?e.max.x:e.min.x,Ir.y=s.normal.y>0?e.max.y:e.min.y,Ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Sc=new st,$r=class i{constructor(){this.coordinateSystem=sn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Sc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ti),n[s].setFromProjectionMatrix(Sc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ti),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Es=class extends Ut{constructor(e=[],t=Si,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ts=class extends Ut{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gn=class extends Ut{constructor(e,t,n=dn,s,r,a,o=Tt,l=Tt,c,h=kn,d=1){if(h!==kn&&h!==Wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},As=class extends Gn{constructor(e,t=dn,n=Si,s,r,a=Tt,o=Tt,l,c=kn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Rs=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Hn=class i extends En{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2));function _(S,u,p,M,T,v,A,E,g,b,D){let P=v/g,N=A/b,O=v/2,V=A/2,C=E/2,H=g+1,q=b+1,G=0,te=0,X=new k;for(let K=0;K<q;K++){let Q=K*N-V;for(let Se=0;Se<H;Se++){let De=Se*P-O;X[S]=De*M,X[u]=Q*T,X[p]=C,c.push(X.x,X.y,X.z),X[S]=0,X[u]=0,X[p]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(Se/g),d.push(1-K/b),G+=1}}for(let K=0;K<b;K++)for(let Q=0;Q<g;Q++){let Se=f+Q+H*K,De=f+Q+H*(K+1),J=f+(Q+1)+H*(K+1),pe=f+(Q+1)+H*K;l.push(Se,De,pe),l.push(De,J,pe),te+=6}o.addGroup(m,te,D),m+=te,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Cs=class i extends En{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new k,h=new ke;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let m=n+d/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(o,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ni=class i extends En{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],m=[],_=0,S=[],u=n/2,p=0;M(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(m,2));function M(){let v=new k,A=new k,E=0,g=(t-e)/n;for(let b=0;b<=r;b++){let D=[],P=b/r,N=P*(t-e)+e;for(let O=0;O<=s;O++){let V=O/s,C=V*l+o,H=Math.sin(C),q=Math.cos(C);A.x=N*H,A.y=-P*n+u,A.z=N*q,d.push(A.x,A.y,A.z),v.set(H,g,q).normalize(),f.push(v.x,v.y,v.z),m.push(V,1-P),D.push(_++)}S.push(D)}for(let b=0;b<s;b++)for(let D=0;D<r;D++){let P=S[D][b],N=S[D+1][b],O=S[D+1][b+1],V=S[D][b+1];(e>0||D!==0)&&(h.push(P,N,V),E+=3),(t>0||D!==r-1)&&(h.push(N,O,V),E+=3)}c.addGroup(p,E,0),p+=E}function T(v){let A=_,E=new ke,g=new k,b=0,D=v===!0?e:t,P=v===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,u*P,0),f.push(0,P,0),m.push(.5,.5),_++;let N=_;for(let O=0;O<=s;O++){let C=O/s*l+o,H=Math.cos(C),q=Math.sin(C);g.x=D*q,g.y=u*P,g.z=D*H,d.push(g.x,g.y,g.z),f.push(0,P,0),E.x=H*.5+.5,E.y=q*.5*P+.5,m.push(E.x,E.y),_++}for(let O=0;O<s;O++){let V=A+O,C=N+O;v===!0?h.push(C,C+1,V):h.push(C+1,C,V),b+=3}c.addGroup(p,b,v===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var At=class i extends En{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,f=t/l,m=[],_=[],S=[],u=[];for(let p=0;p<h;p++){let M=p*f-a;for(let T=0;T<c;T++){let v=T*d-r;_.push(v,-M,0),S.push(0,0,1),u.push(T/o),u.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let T=M+c*p,v=M+c*(p+1),A=M+1+c*(p+1),E=M+1+c*p;m.push(T,v,E),m.push(v,A,E)}this.setIndex(m),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(S,3)),this.setAttribute("uv",new Et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function bi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Mc(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Mc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ot(i){let e={};for(let t=0;t<i.length;t++){let n=bi(i[t]);for(let s in n)e[s]=n[s]}return e}function Mc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function sd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var _h={clone:bi,merge:Ot},rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ot().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new st().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Kr=class extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ii=class extends zn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ys,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=zs,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Zi=class extends zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ys,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=zs,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qr=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ea=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Pr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var si=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ta=class extends si{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bo,endingEnd:Bo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ko:r=e,o=2*t-n;break;case zo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ko:a=e,l=2*n-t;break;case zo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(n-t)/(s-t),S=_*_,u=S*_,p=-f*u+2*f*S-f*_,M=(1+f)*u+(-1.5-2*f)*S+(-.5+f)*_+1,T=(-1-m)*u+(1.5+m)*S+.5*_,v=m*u-m*S;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+M*a[c+A]+T*a[l+A]+v*a[d+A];return r}},na=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},ia=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},sa=class extends si{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-t)/(s-t),S=1-_;for(let u=0;u!==o;++u)r[u]=a[c+u]*S+a[l+u]*_;return r}let f=o*2,m=e-1;for(let _=0;_!==o;++_){let S=a[c+_],u=a[l+_],p=m*f+_*2,M=d[p],T=d[p+1],v=e*f+_*2,A=h[v],E=h[v+1],g=ld(n,t,M,A,s);r[_]=xh(g,S,T,E,u)}return r}};function xh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function od(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ld(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=xh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=od(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var $t=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oi(t,this.TimeBufferType),this.values=Oi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oi(e.times,Array),values:Oi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Pr(e.settings)&&(n.settings={inTangents:Oi(e.settings.inTangents,Array),outTangents:Oi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new sa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case Xr:t=this.InterpolantFactoryMethodLinear;break;case Dr:t=this.InterpolantFactoryMethodSmooth;break;case Oo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return Xr;case this.InterpolantFactoryMethodSmooth:return Dr;case this.InterpolantFactoryMethodBezier:return Oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Pr(this.settings)&&(bc(this.settings.inTangents,e),bc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Pr(this.settings)&&(wc(this.settings.inTangents,e),wc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ie("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ie("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Fu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ie("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Dr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,f=d-n,m=d+n;for(let _=0;_!==n;++_){let S=t[d+_];if(S!==t[f+_]||S!==t[m+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Pr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function wc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}$t.prototype.ValueTypeName="";$t.prototype.TimeBufferType=Float32Array;$t.prototype.ValueBufferType=Float32Array;$t.prototype.DefaultInterpolation=Xr;var ri=class extends $t{constructor(e,t,n){super(e,t,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=gs;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends $t{constructor(e,t,n,s){super(e,t,n,s)}};ra.prototype.ValueTypeName="color";var aa=class extends $t{constructor(e,t,n,s){super(e,t,n,s)}};aa.prototype.ValueTypeName="number";var oa=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Is=class extends $t{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new oa(this.times,this.values,this.getValueSize(),e)}};Is.prototype.ValueTypeName="quaternion";Is.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends $t{constructor(e,t,n){super(e,t,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=gs;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends $t{constructor(e,t,n,s){super(e,t,n,s)}};la.prototype.ValueTypeName="vector";var Fr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ec(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ec(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ec(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ca=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yh=new ca,$i=class{constructor(e){this.manager=e!==void 0?e:yh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};$i.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bi=new WeakMap,ha=class extends $i{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Fr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Bi.get(a);d===void 0&&(d=[],Bi.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Wi("img");function l(){h(),t&&t(this);let d=Bi.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onLoad&&m.onLoad(this)}Bi.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),Fr.remove(`image:${e}`);let f=Bi.get(this)||[];for(let m=0;m<f.length;m++){let _=f[m];_.onError&&_.onError(d)}Bi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Fr.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Ps=class extends $i{constructor(e){super(e)}load(e,t,n,s){let r=new Ut,a=new ha(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ls=class extends Ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ns=class extends Ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fo=new st,Tc=new k,Ac=new k,ua=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Xt,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ti,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tc),Ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ac),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Vi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lr=new k,Nr=new bn,yn=new k,Ds=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lr,Nr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Nr,yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Lr,Nr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Nr,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Kn=new k,Rc=new ke,Cc=new ke,Gt=class extends Ds{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,Rc,Cc),t.subVectors(Cc,Rc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Us=class extends Ds{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Go=class extends ua{constructor(){super(new Us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fs=class extends Ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Go}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ki=-90,zi=1,Ki=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(ki,zi,e,t);s.layers=this.layers,this.add(s);let r=new Gt(ki,zi,e,t);r.layers=this.layers,this.add(r);let a=new Gt(ki,zi,e,t);a.layers=this.layers,this.add(a);let o=new Gt(ki,zi,e,t);o.layers=this.layers,this.add(o);let l=new Gt(ki,zi,e,t);l.layers=this.layers,this.add(l);let c=new Gt(ki,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let u=!1;e.isWebGLRenderer===!0?u=e.state.buffers.depth.getReversed():u=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},da=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Os=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=cd.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function cd(){this._document.hidden===!1&&this.reset()}var yl="\\[\\]\\.:\\/",hd=new RegExp("["+yl+"]","g"),vl="[^"+yl+"]",ud="[^"+yl.replace("\\.","")+"]",dd=/((?:WC+[\/:])*)/.source.replace("WC",vl),fd=/(WCOD+)?/.source.replace("WCOD",ud),pd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),md=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),gd=new RegExp("^"+dd+fd+pd+md+"$"),_d=["material","materials","bones","map"],Ho=class{constructor(e,t,n){let s=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},it=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hd,"")}static parseTrackName(e){let t=gd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_d.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=Ho;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O0=new Float32Array(1);var Ic=new st,Bs=class{constructor(e,t,n=0,s=1/0){this.ray=new ws(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ji,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ie("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ic.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ic),this}intersectObject(e,t=!0,n=[]){return Vo(e,this,n,t),n.sort(Pc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Vo(e[s],this,n,t);return n.sort(Pc),n}};function Pc(i,e){return i.distance-e.distance}function Vo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Vo(r[a],e,t,!0)}}var Tl=class Tl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Tl.prototype.isMatrix2=!0;var Wo=Tl;function Sl(i,e,t,n){let s=xd(n);switch(t){case cl:return i*e;case ul:return i*e/s.components*s.byteLength;case va:return i*e/s.components*s.byteLength;case li:return i*e*2/s.components*s.byteLength;case Sa:return i*e*2/s.components*s.byteLength;case hl:return i*e*3/s.components*s.byteLength;case mn:return i*e*4/s.components*s.byteLength;case Ma:return i*e*4/s.components*s.byteLength;case Hs:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wa:case Ta:return Math.max(i,16)*Math.max(e,8)/4;case ba:case Ea:return Math.max(i,8)*Math.max(e,8)/2;case Aa:case Ra:case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:case qs:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ja:case Ya:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Za:case $a:return Math.ceil(i/4)*Math.ceil(e/4)*8;case js:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xd(i){switch(i){case Xt:case rl:return{byteLength:1,components:1};case ns:case al:case pn:return{byteLength:2,components:1};case xa:case ya:return{byteLength:2,components:4};case dn:case _a:case fn:return{byteLength:4,components:1};case ol:case ll:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Gh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function vd(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<d.length;m++){let _=d[f],S=d[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,d[f]=S)}d.length=f+1;for(let m=0,_=d.length;m<_;m++){let S=d[m];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Md=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ud=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,df=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ff=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,If=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ap=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ip=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$p=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Sd,alphahash_pars_fragment:Md,alphamap_fragment:bd,alphamap_pars_fragment:wd,alphatest_fragment:Ed,alphatest_pars_fragment:Td,aomap_fragment:Ad,aomap_pars_fragment:Rd,batching_pars_vertex:Cd,batching_vertex:Id,begin_vertex:Pd,beginnormal_vertex:Ld,bsdfs:Nd,iridescence_fragment:Dd,bumpmap_pars_fragment:Ud,clipping_planes_fragment:Fd,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:kd,color_fragment:zd,color_pars_fragment:Gd,color_pars_vertex:Hd,color_vertex:Vd,common:Wd,defaultnormal_vertex:Xd,displacementmap_pars_vertex:qd,displacementmap_vertex:jd,emissivemap_fragment:Yd,emissivemap_pars_fragment:Jd,colorspace_fragment:Zd,colorspace_pars_fragment:$d,envmap_fragment:Kd,envmap_common_pars_fragment:Qd,envmap_pars_fragment:ef,envmap_pars_vertex:tf,envmap_physical_pars_fragment:ff,envmap_vertex:nf,fog_vertex:sf,fog_pars_vertex:rf,fog_fragment:af,fog_pars_fragment:of,gradientmap_pars_fragment:lf,lightmap_pars_fragment:cf,lights_lambert_fragment:hf,lights_lambert_pars_fragment:uf,lights_pars_begin:df,lights_toon_fragment:pf,lights_toon_pars_fragment:mf,lights_phong_fragment:gf,lights_phong_pars_fragment:_f,lights_physical_fragment:xf,lights_physical_pars_fragment:yf,lights_fragment_begin:vf,lights_fragment_maps:Sf,lights_fragment_end:Mf,lightprobes_pars_fragment:bf,logdepthbuf_fragment:wf,logdepthbuf_pars_fragment:Ef,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:Af,map_fragment:Rf,map_pars_fragment:Cf,map_particle_fragment:If,map_particle_pars_fragment:Pf,metalnessmap_fragment:Lf,metalnessmap_pars_fragment:Nf,morphinstance_vertex:Df,morphcolor_vertex:Uf,morphnormal_vertex:Ff,morphtarget_pars_vertex:Of,morphtarget_vertex:Bf,normal_fragment_begin:kf,normal_fragment_maps:zf,normal_pars_fragment:Gf,normal_pars_vertex:Hf,normal_vertex:Vf,normalmap_pars_fragment:Wf,clearcoat_normal_fragment_begin:Xf,clearcoat_normal_fragment_maps:qf,clearcoat_pars_fragment:jf,iridescence_pars_fragment:Yf,opaque_fragment:Jf,packing:Zf,premultiplied_alpha_fragment:$f,project_vertex:Kf,dithering_fragment:Qf,dithering_pars_fragment:ep,roughnessmap_fragment:tp,roughnessmap_pars_fragment:np,shadowmap_pars_fragment:ip,shadowmap_pars_vertex:sp,shadowmap_vertex:rp,shadowmask_pars_fragment:ap,skinbase_vertex:op,skinning_pars_vertex:lp,skinning_vertex:cp,skinnormal_vertex:hp,specularmap_fragment:up,specularmap_pars_fragment:dp,tonemapping_fragment:fp,tonemapping_pars_fragment:pp,transmission_fragment:mp,transmission_pars_fragment:gp,uv_pars_fragment:_p,uv_pars_vertex:xp,uv_vertex:yp,worldpos_vertex:vp,background_vert:Sp,background_frag:Mp,backgroundCube_vert:bp,backgroundCube_frag:wp,cube_vert:Ep,cube_frag:Tp,depth_vert:Ap,depth_frag:Rp,distance_vert:Cp,distance_frag:Ip,equirect_vert:Pp,equirect_frag:Lp,linedashed_vert:Np,linedashed_frag:Dp,meshbasic_vert:Up,meshbasic_frag:Fp,meshlambert_vert:Op,meshlambert_frag:Bp,meshmatcap_vert:kp,meshmatcap_frag:zp,meshnormal_vert:Gp,meshnormal_frag:Hp,meshphong_vert:Vp,meshphong_frag:Wp,meshphysical_vert:Xp,meshphysical_frag:qp,meshtoon_vert:jp,meshtoon_frag:Yp,points_vert:Jp,points_frag:Zp,shadow_vert:$p,shadow_frag:Kp,sprite_vert:Qp,sprite_frag:em},fe={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},In={basic:{uniforms:Ot([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ot([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ot([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ot([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ot([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ot([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ot([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ot([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ot([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ot([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ot([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Ot([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Ot([fe.lights,fe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};In.physical={uniforms:Ot([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Qa={r:0,b:0,g:0},tm=new st,Hh=new Le;Hh.set(-1,0,0,0,1,0,0,0,1);function nm(i,e,t,n,s,r){let a=new Pe(0),o=s===!0?0:1,l,c,h=null,d=0,f=null;function m(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let v=M.backgroundBlurriness>0;T=e.get(T,v)}return T}function _(M){let T=!1,v=m(M);v===null?u(a,o):v&&v.isColor&&(u(v,1),T=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,T){let v=m(T);v&&v.isCubeTexture?(c===void 0&&(c=new Qe(new Hn(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:bi(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hh),c.material.toneMapped=We.getTransfer(v.colorSpace)!==Je,(h!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Qe(new At(2,2),new Tn({name:"BackgroundMaterial",uniforms:bi(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=We.getTransfer(v.colorSpace)!==Je,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function u(M,T){M.getRGB(Qa,xl(i)),t.buffers.color.setClear(Qa.r,Qa.g,Qa.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,u(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,u(a,o)},render:_,addToRenderList:S,dispose:p}}function im(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(N,O,V,C,H){let q=!1,G=d(N,C,V,O);r!==G&&(r=G,c(r.object)),q=m(N,C,V,H),q&&_(N,C,V,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(N,O,V,C),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,O,V,C){let H=C.wireframe===!0,q=n[O.id];q===void 0&&(q={},n[O.id]=q);let G=N.isInstancedMesh===!0?N.id:0,te=q[G];te===void 0&&(te={},q[G]=te);let X=te[V.id];X===void 0&&(X={},te[V.id]=X);let K=X[H];return K===void 0&&(K=f(l()),X[H]=K),K}function f(N){let O=[],V=[],C=[];for(let H=0;H<t;H++)O[H]=0,V[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:C,object:N,attributes:{},index:null}}function m(N,O,V,C){let H=r.attributes,q=O.attributes,G=0,te=V.getAttributes();for(let X in te)if(te[X].location>=0){let Q=H[X],Se=q[X];if(Se===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),Q===void 0||Q.attribute!==Se||Se&&Q.data!==Se.data)return!0;G++}return r.attributesNum!==G||r.index!==C}function _(N,O,V,C){let H={},q=O.attributes,G=0,te=V.getAttributes();for(let X in te)if(te[X].location>=0){let Q=q[X];Q===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor));let Se={};Se.attribute=Q,Q&&Q.data&&(Se.data=Q.data),H[X]=Se,G++}r.attributes=H,r.attributesNum=G,r.index=C}function S(){let N=r.newAttributes;for(let O=0,V=N.length;O<V;O++)N[O]=0}function u(N){p(N,0)}function p(N,O){let V=r.newAttributes,C=r.enabledAttributes,H=r.attributeDivisors;V[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),H[N]!==O&&(i.vertexAttribDivisor(N,O),H[N]=O)}function M(){let N=r.newAttributes,O=r.enabledAttributes;for(let V=0,C=O.length;V<C;V++)O[V]!==N[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function T(N,O,V,C,H,q,G){G===!0?i.vertexAttribIPointer(N,O,V,H,q):i.vertexAttribPointer(N,O,V,C,H,q)}function v(N,O,V,C){S();let H=C.attributes,q=V.getAttributes(),G=O.defaultAttributeValues;for(let te in q){let X=q[te];if(X.location>=0){let K=H[te];if(K===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){let Q=K.normalized,Se=K.itemSize,De=e.get(K);if(De===void 0)continue;let J=De.buffer,pe=De.type,xe=De.bytesPerElement,Te=pe===i.INT||pe===i.UNSIGNED_INT||K.gpuType===_a;if(K.isInterleavedBufferAttribute){let me=K.data,Fe=me.isInterleavedBuffer===!0?me.stride:me.itemSize,dt=K.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Re=0;Re<X.locationSize;Re++)p(X.location+Re,me.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Re=0;Re<X.locationSize;Re++)u(X.location+Re);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Re=0;Re<X.locationSize;Re++)T(X.location+Re,Se/X.locationSize,pe,Q,Fe*xe,(dt+Se/X.locationSize*Re)*xe,Te)}else{if(K.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)p(X.location+me,K.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let me=0;me<X.locationSize;me++)u(X.location+me);i.bindBuffer(i.ARRAY_BUFFER,J);for(let me=0;me<X.locationSize;me++)T(X.location+me,Se/X.locationSize,pe,Q,Se*xe,Se/X.locationSize*me*xe,Te)}}else if(G!==void 0){let Q=G[te];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(X.location,Q);break;case 3:i.vertexAttrib3fv(X.location,Q);break;case 4:i.vertexAttrib4fv(X.location,Q);break;default:i.vertexAttrib1fv(X.location,Q)}}}}M()}function A(){D();for(let N in n){let O=n[N];for(let V in O){let C=O[V];for(let H in C){let q=C[H];for(let G in q)h(q[G].object),delete q[G];delete C[H]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let V in O){let C=O[V];for(let H in C){let q=C[H];for(let G in q)h(q[G].object),delete q[G];delete C[H]}}delete n[N.id]}function g(N){for(let O in n){let V=n[O];for(let C in V){let H=V[C];if(H[N.id]===void 0)continue;let q=H[N.id];for(let G in q)h(q[G].object),delete q[G];delete H[N.id]}}}function b(N){for(let O in n){let V=n[O],C=N.isInstancedMesh===!0?N.id:0,H=V[C];if(H!==void 0){for(let q in H){let G=H[q];for(let te in G)h(G[te].object),delete G[te];delete H[q]}delete V[C],Object.keys(V).length===0&&delete n[O]}}}function D(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:u,disableUnusedAttributes:M}}function sm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function rm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==mn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let b=g===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Xt&&g!==fn&&!b&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ce("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:u,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:v,maxSamples:A,samples:E}}function am(i){let e=this,t=null,n=0,s=!1,r=!1,a=new hn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){let _=d.clippingPlanes,S=d.clipIntersection,u=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!u)r?h(null):c();else{let M=r?0:n,T=M*4,v=p.clippingState||null;l.value=v,v=h(_,f,T,m);for(let A=0;A!==T;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,_){let S=d!==null?d.length:0,u=null;if(S!==0){if(u=l.value,_!==!0||u===null){let p=m+S*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(u===null||u.length<p)&&(u=new Float32Array(p));for(let T=0,v=m;T!==S;++T,v+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(u,v),u[v+3]=a.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,u}}var Ks=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Es(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Hn(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:yi});r.uniforms.tEquirect.value=t;let a=new Qe(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Ht),new Ki(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},vh=256,om=3,lm=20,Vh=256,Wh=16,cm=3,hm=new k,um=new Pe,to=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ki(1,10,null),this._boxMesh=new Qe(new Hn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=hm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,m=l.autoClearDepth,_=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(um));let u=new Ki(n,s,h);return u.position.copy(o),u.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=m,l.autoClearStencil=_,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vh,mh(e))}_fromTexture(e,t){e.mapping===Si||e.mapping===ts?this._setSize(e.image.length===0?vh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Sh(e,!1,!1),n=Math.log2(e)-om;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Sh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Si||e.mapping===ts?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Mh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=dm(),this._integrationMaterial=fm());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Wh);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-cm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Vh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=pm());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Sh(i,e,t){return new Ks(i,{minFilter:Vn,generateMipmaps:e,type:pn,colorSpace:_s,depthBuffer:t})}function Qs(i,e,t){return new Tn({name:i,uniforms:e,vertexShader:ze.cube_vert,fragmentShader:t,side:Vt,blending:yi,depthTest:!1,depthWrite:!1})}function dm(){return Qs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Vh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fm(){return Qs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Wh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pm(){return Qs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Mh(){return Qs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function bh(){return Qs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,m=!1){return f==null?null:m?a(f):r(f)}function r(f){if(f&&f.isTexture){let m=f.mapping;if(m===pa||m===ma)if(e.has(f)){let _=e.get(f).texture;return o(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let S=new Ks(_.height);return S.fromEquirectangularTexture(i,f),e.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let m=f.mapping,_=m===pa||m===ma,S=m===Si||m===ts;if(_||S){let u=t.get(f),p=u!==void 0?u.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new to(i)),u=_?n.fromEquirectangular(f,u):n.fromCubemap(f,u),u.texture.pmremVersion=f.pmremVersion,t.set(f,u),u.texture;if(u!==void 0)return u.texture;{let M=f.image;return _&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new to(i)),u=_?n.fromEquirectangular(f):n.fromCubemap(f),u.texture.pmremVersion=f.pmremVersion,t.set(f,u),f.addEventListener("dispose",h),u.texture):null}}}return f}function o(f,m){return m===pa?f.mapping=Si:m===ma&&(f.mapping=ts),f}function l(f){let m=0,_=6;for(let S=0;S<_;S++)f[S]!==void 0&&m++;return m===_}function c(f){let m=f.target;m.removeEventListener("dispose",c);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(f){let m=f.target;m.removeEventListener("dispose",h);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function gm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ms("WebGLRenderer: "+n+" extension not supported."),s}}}function _m(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let u in _.attributes)e.remove(_.attributes[u]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let S=r.get(_);S&&(e.remove(S),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(_){let S=_.attributes;for(let u in S)e.update(S[u],i.ARRAY_BUFFER)}function d(_){let S=_.index,u=_.attributes.position,p=0;if(u===void 0)return;let M=S!==null?S.array.length:u.array.length/3-1,T=u.count>=65535?bs:Ms,v=new T(Math.ceil(M/3)*6,1),A=v.array;if(S!==null){let g=S.array;p=S.version;for(let b=0,D=0;b<M;b+=3){let P=g[b+0],N=g[b+1],O=g[b+2];A[D++]=P,A[D++]=N,A[D++]=N,A[D++]=O,A[D++]=O,A[D++]=P}}else{p=u.version;for(let g=0,b=0;g<M;g+=3){let D=g+0,P=g+1,N=g+2;A[b++]=D,A[b++]=P,A[b++]=P,A[b++]=N,A[b++]=N,A[b++]=D}}v.version=p;let E=r.get(_);E&&e.remove(E),r.set(_,v)}function f(_){let S=r.get(_);if(S){let u=_.index;u!==null&&S.version<u.version&&d(_)}else d(_);return r.get(_)}function m(){for(let _ in s){let S=s[_].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:f,dispose:m}}function xm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let S=0;for(let u=0;u<m;u++)S+=f[u];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ym(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vm(i,e,t){let n=new WeakMap,s=new ot;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let D=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;m===!0&&(T=1),_===!0&&(T=2),S===!0&&(T=3);let v=o.attributes.position.count*T,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*A*4*d),g=new ys(E,v,A,d);g.type=fn,g.needsUpdate=!0;let b=T*4;for(let P=0;P<d;P++){let N=u[P],O=p[P],V=M[P],C=v*A*4*P;for(let H=0;H<N.count;H++){let q=H*b;m===!0&&(s.fromBufferAttribute(N,H),E[C+q+0]=s.x,E[C+q+1]=s.y,E[C+q+2]=s.z,E[C+q+3]=0),_===!0&&(s.fromBufferAttribute(O,H),E[C+q+4]=s.x,E[C+q+5]=s.y,E[C+q+6]=s.z,E[C+q+7]=0),S===!0&&(s.fromBufferAttribute(V,H),E[C+q+8]=s.x,E[C+q+9]=s.y,E[C+q+10]=s.z,E[C+q+11]=V.itemSize===4?s.w:1)}}f={count:d,texture:g,size:new ke(v,A)},n.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Sm(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Mm={[$o]:"LINEAR_TONE_MAPPING",[Ko]:"REINHARD_TONE_MAPPING",[Qo]:"CINEON_TONE_MAPPING",[el]:"ACES_FILMIC_TONE_MAPPING",[nl]:"AGX_TONE_MAPPING",[il]:"NEUTRAL_TONE_MAPPING",[tl]:"CUSTOM_TONE_MAPPING"};function bm(i,e,t,n,s,r){let a=new Jt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new En;h.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Et([0,2,0,0,2,0],2));let d=new Kr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Qe(h,d),m=new Us(-1,1,1,-1,0,1),_=null,S=null,u=!1,p,M=null,T=[],v=!1;this.setSize=function(A,E){a.setSize(A,E),o!==null&&o.setSize(A,E),l!==null&&l.setSize(A,E);for(let g=0;g<T.length;g++){let b=T[g];b.setSize&&b.setSize(A,E)}},this.setEffects=function(A){T=A,v=T.length>0&&T[0].isRenderPass===!0;let E=a.width,g=a.height;T.length>0&&o===null&&(o=new Jt(E,g,{type:pn,depthBuffer:!1,stencilBuffer:!1}),l=new Jt(E,g,{type:pn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&T.some(D=>D.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Gn(E,g),r===!0&&(c.format=Wn,c.type=Mi)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let D=0;D<T.length;D++){let P=T[D];P.setSize&&P.setSize(E,g),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(A,E){if(u||A.toneMapping===Rn&&T.length===0)return!1;if(M=E,E!==null){let g=E.width,b=E.height;(a.width!==g||a.height!==b)&&this.setSize(g,b)}return v===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=Rn,!0},this.hasRenderPass=function(){return v},this.end=function(A,E){A.toneMapping=p,u=!0;let g=a,b=o;for(let D=0;D<T.length;D++){let P=T[D];P.enabled!==!1&&(P.render(A,b,g,E),P.needsSwap!==!1&&(g=b,b=b===o?l:o))}if(_!==A.outputColorSpace||S!==A.toneMapping){_=A.outputColorSpace,S=A.toneMapping,d.defines={},We.getTransfer(_)===Je&&(d.defines.SRGB_TRANSFER="");let D=Mm[S];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(M),A.render(f,m),M=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Xh=new Ut,qh=new Gn(1,1),jh=new As(1),Yh=new ys,Jh=new Jr,Zh=new Es,wh=[],Eh=[],Th=new Float32Array(16),Ah=new Float32Array(9),Rh=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=wh[s];if(r===void 0&&(r=new Float32Array(s),wh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function io(i,e){let t=Eh[e];t===void 0&&(t=new Int32Array(e),Eh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function Tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function Am(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function Rm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Rh.set(n),i.uniformMatrix2fv(this.addr,!1,Rh),yt(t,n)}}function Cm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),yt(t,n)}}function Im(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Th.set(n),i.uniformMatrix4fv(this.addr,!1,Th),yt(t,n)}}function Pm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function Nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function Um(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function Bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function so(i){return i.version===0&&(i.compareFunction=pl,i.needsUpdate=!0),i}function km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=so(qh):r=Xh,t.setTexture2D(e||r,s)}function zm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Jh,s)}function Gm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=so(jh):r=Zh,t.setTextureCube(e||r,s)}function Hm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yh,s)}function Vm(i){switch(i){case 5126:return wm;case 35664:return Em;case 35665:return Tm;case 35666:return Am;case 35674:return Rm;case 35675:return Cm;case 35676:return Im;case 5124:case 35670:return Pm;case 35667:case 35671:return Lm;case 35668:case 35672:return Nm;case 35669:case 35673:return Dm;case 5125:return Um;case 36294:return Fm;case 36295:return Om;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Hm}}function Wm(i,e){i.uniform1fv(this.addr,e)}function Xm(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function qm(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function jm(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function Ym(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jm(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zm(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $m(i,e){i.uniform1iv(this.addr,e)}function Km(i,e){i.uniform2iv(this.addr,e)}function Qm(i,e){i.uniform3iv(this.addr,e)}function eg(i,e){i.uniform4iv(this.addr,e)}function tg(i,e){i.uniform1uiv(this.addr,e)}function ng(i,e){i.uniform2uiv(this.addr,e)}function ig(i,e){i.uniform3uiv(this.addr,e)}function sg(i,e){i.uniform4uiv(this.addr,e)}function rg(i,e,t){let n=this.cache,s=e.length,r=io(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=so(qh):a=Xh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ag(i,e,t){let n=this.cache,s=e.length,r=io(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Jh,r[a])}function og(i,e,t){let n=this.cache,s=e.length,r=io(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=so(jh):a=Zh;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function lg(i,e,t){let n=this.cache,s=e.length,r=io(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yh,r[a])}function cg(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return jm;case 35674:return Ym;case 35675:return Jm;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return Qm;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}var Cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vm(t.type)}},Il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cg(t.type)}},Pl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Al=/(\w+)(\])?(\[|\.)?/g;function Ch(i,e){i.seq.push(e),i.map[e.id]=e}function hg(i,e,t){let n=i.name,s=n.length;for(Al.lastIndex=0;;){let r=Al.exec(n),a=Al.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ch(t,c===void 0?new Cl(o,i,e):new Il(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Pl(o),Ch(t,d)),t=d}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);hg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ih(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ug=37297,dg=0;function fg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ph=new Le;function pg(i){We._getMatrix(Ph,We.workingColorSpace,i);let e=`mat3( ${Ph.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case xs:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+fg(i.getShaderSource(e),o)}else return r}function mg(i,e){let t=pg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var gg={[$o]:"Linear",[Ko]:"Reinhard",[Qo]:"Cineon",[el]:"ACESFilmic",[nl]:"AgX",[il]:"Neutral",[tl]:"Custom"};function _g(i,e){let t=gg[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var eo=new k;function xg(){We.getLuminanceCoefficients(eo);let i=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function vg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function $s(i){return i!==""}function Nh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Dh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(i){return i.replace(Mg,bg)}function bg(i,e){let t=ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ll(t)}var wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(i){return i.replace(wg,Eg)}function Eg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Tg={[ks]:"SHADOWMAP_TYPE_PCF",[Qi]:"SHADOWMAP_TYPE_VSM"};function Ag(i){return Tg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rg={[ts]:"ENVMAP_MODE_REFRACTION"};function Cg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ig={[zs]:"ENVMAP_BLENDING_MULTIPLY",[Qc]:"ENVMAP_BLENDING_MIX",[eh]:"ENVMAP_BLENDING_ADD"};function Pg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ig[i.combine]||"ENVMAP_BLENDING_NONE"}function Lg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ag(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Cg(t),d=Pg(t),f=yg(t),m=vg(r),_=s.createProgram(),S,u,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($s).join(`
`),S.length>0&&(S+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($s).join(`
`),u.length>0&&(u+=`
`)):(S=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),u=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Rn?_g("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,mg("linearToOutputTexel",t.outputColorSpace),xg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),a=Ll(a),a=Nh(a,t),a=Dh(a,t),o=Ll(o),o=Nh(o,t),o=Dh(o,t),a=Uh(a),o=Uh(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,u=["#define varying in",t.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let M=p+S+a,T=p+u+o,v=Ih(s,s.VERTEX_SHADER,M),A=Ih(s,s.FRAGMENT_SHADER,T);s.attachShader(_,v),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(v)||"",V=s.getShaderInfoLog(A)||"",C=N.trim(),H=O.trim(),q=V.trim(),G=!0,te=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,A);else{let X=Lh(s,v,"vertex"),K=Lh(s,A,"fragment");Ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+X+`
`+K)}else C!==""?Ce("WebGLProgram: Program Info Log:",C):(H===""||q==="")&&(te=!1);te&&(P.diagnostics={runnable:G,programLog:C,vertexShader:{log:H,prefix:S},fragmentShader:{log:q,prefix:u}})}s.deleteShader(v),s.deleteShader(A),g=new is(s,_),b=Sg(s,_)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(_,ug)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=A,this}var Ng=0,Nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dl(e),t.set(e,n)),n}},Dl=class{constructor(e){this.id=Ng++,this.code=e,this.usedTimes=0}};function Dg(i){return i===li||i===qs||i===js}function Ug(i,e,t,n,s,r){let a=new ji,o=new Nl,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,b,D,P,N,O){let V=P.fog,C=N.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,G=e.get(g.envMap||H,q),te=f[g.type],X=n.precision;g.precision!==null&&(X=n.getMaxPrecision(g.precision),X!==g.precision&&Ce("WebGLProgram.getParameters:",g.precision,"not supported, using",X,"instead."));let K=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Q=K!==void 0?K.length:0,Se=0;C.morphAttributes.position!==void 0&&(Se=1),C.morphAttributes.normal!==void 0&&(Se=2),C.morphAttributes.color!==void 0&&(Se=3);let De,J,pe,xe;if(te){let de=In[te];De=de.vertexShader,J=de.fragmentShader}else{De=g.vertexShader,J=g.fragmentShader;let de=o.getVertexShaderStage(g),Ke=o.getFragmentShaderStage(g);o.update(g,de,Ke),pe=de.id,xe=Ke.id}let Te=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Fe=N.isInstancedMesh===!0,dt=N.isBatchedMesh===!0,Re=!!g.map,$e=!!g.matcap,et=!!G,Ge=et&&G.isPMREMTexture===!0,Rt=!!g.aoMap,gt=!!g.lightMap,Wt=!!g.bumpMap&&g.wireframe===!1,ct=!!g.normalMap,xn=!!g.displacementMap,St=!!g.emissiveMap,Kt=!!g.metalnessMap,Qt=!!g.roughnessMap,en=g.anisotropy>0,L=g.clearcoat>0,tn=g.diffuseRoughness>0,rt=g.dispersion>0,at=g.retroreflectivity>0,ue=g.iridescence>0,_t=g.sheen>0,Ae=g.transmission>0,Ne=en&&!!g.anisotropyMap,w=L&&!!g.clearcoatMap,x=L&&!!g.clearcoatNormalMap,F=L&&!!g.clearcoatRoughnessMap,ee=tn&&!!g.diffuseRoughnessMap,$=ue&&!!g.iridescenceMap,se=ue&&!!g.iridescenceThicknessMap,ce=_t&&!!g.sheenColorMap,j=_t&&!!g.sheenRoughnessMap,Y=!!g.specularMap,ae=!!g.specularColorMap,R=!!g.specularIntensityMap,Z=Ae&&!!g.transmissionMap,W=Ae&&!!g.thicknessMap,oe=!!g.gradientMap,ie=!!g.alphaMap,re=g.alphaTest>0,be=!!g.alphaHash,Be=!!g.extensions,ne=Rn;g.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(ne=i.toneMapping);let Ee=Ge?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Oe={shaderID:te,shaderType:g.type,shaderName:g.name,vertexShader:De,fragmentShader:J,defines:g.defines,customVertexShaderID:pe,customFragmentShaderID:xe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:X,batching:dt,batchingColor:dt&&N._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&N.instanceColor!==null,instancingMorph:Fe&&N.morphTexture!==null,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Re,matcap:$e,envMap:et,envMapMode:et&&G.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?Ee.length-1:null,envMapSize:Ge?Ee[0].width:null,aoMap:Rt,lightMap:gt,bumpMap:Wt,normalMap:ct,displacementMap:xn,emissiveMap:St,normalMapObjectSpace:ct&&g.normalMapType===ih,normalMapTangentSpace:ct&&g.normalMapType===Ys,packedNormalMap:ct&&g.normalMapType===Ys&&Dg(g.normalMap.format),metalnessMap:Kt,roughnessMap:Qt,anisotropy:en,anisotropyMap:Ne,clearcoat:L,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:F,diffuseRoughness:tn,diffuseRoughnessMap:ee,dispersion:rt,retroreflection:at,iridescence:ue,iridescenceMap:$,iridescenceThicknessMap:se,sheen:_t,sheenColorMap:ce,sheenRoughnessMap:j,specularMap:Y,specularColorMap:ae,specularIntensityMap:R,transmission:Ae,transmissionMap:Z,thicknessMap:W,gradientMap:oe,opaque:g.transparent===!1&&g.blending===es&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:be,combine:g.combine,mapUv:Re&&m(g.map.channel),aoMapUv:Rt&&m(g.aoMap.channel),lightMapUv:gt&&m(g.lightMap.channel),bumpMapUv:Wt&&m(g.bumpMap.channel),normalMapUv:ct&&m(g.normalMap.channel),displacementMapUv:xn&&m(g.displacementMap.channel),emissiveMapUv:St&&m(g.emissiveMap.channel),metalnessMapUv:Kt&&m(g.metalnessMap.channel),roughnessMapUv:Qt&&m(g.roughnessMap.channel),anisotropyMapUv:Ne&&m(g.anisotropyMap.channel),clearcoatMapUv:w&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:$&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:se&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:j&&m(g.sheenRoughnessMap.channel),specularMapUv:Y&&m(g.specularMap.channel),specularColorMapUv:ae&&m(g.specularColorMap.channel),specularIntensityMapUv:R&&m(g.specularIntensityMap.channel),transmissionMapUv:Z&&m(g.transmissionMap.channel),thicknessMapUv:W&&m(g.thicknessMap.channel),alphaMapUv:ie&&m(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ct||en),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(Re||ie),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&ct===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Se,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(de=>de.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Re&&g.map.isVideoTexture===!0&&We.getTransfer(g.map.colorSpace)===Je,decodeVideoTextureEmissive:St&&g.emissiveMap.isVideoTexture===!0&&We.getTransfer(g.emissiveMap.colorSpace)===Je,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===An,flipSided:g.side===Vt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Be&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&g.extensions.multiDraw===!0||dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function S(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let D in g.defines)b.push(D),b.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(u(b,g),p(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function u(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function p(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){let b=f[g.type],D;if(b){let P=In[b];D=_h.clone(P.uniforms)}else D=g.uniforms;return D}function T(g,b){let D=h.get(b);return D!==void 0?++D.usedTimes:(D=new Lg(i,b,g,s),c.push(D),h.set(b,D)),D}function v(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:M,acquireProgram:T,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:E}}function Fg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Og(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,_,S,u,p){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:m,material:_,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:u,group:p},i[e]=M):(M.id=f.id,M.object=f,M.geometry=m,M.material=_,M.materialVariant=a(f),M.groupOrder=S,M.renderOrder=f.renderOrder,M.z=u,M.group=p),e++,M}function l(f,m,_,S,u,p,M){M.reversedDepth===!0&&(u=-u);let T=o(f,m,_,S,u,p);_.transmission>0?n.push(T):_.transparent===!0?s.push(T):t.push(T)}function c(f,m,_,S,u,p){let M=o(f,m,_,S,u,p);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):t.unshift(M)}function h(f,m){t.length>1&&t.sort(f||Og),n.length>1&&n.sort(m||Oh),s.length>1&&s.sort(m||Oh)}function d(){for(let f=e,m=i.length;f<m;f++){let _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Bg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Bh,i.set(n,[a])):s>=r.length?(a=new Bh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function kg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new Pe};break;case"SpotLight":t={position:new k,direction:new k,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function zg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Gg=0;function Hg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vg(i){let e=new kg,t=zg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new st,a=new st;function o(c){let h=0,d=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,_=0,S=0,u=0,p=0,M=0,T=0,v=0,A=0,E=0,g=0,b=0,D=0,P=0;c.sort(Hg);for(let O=0,V=c.length;O<V;O++){let C=c[O],H=C.color,q=C.intensity,G=C.distance,te=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===li?te=C.shadow.map.texture:te=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=H.r*q,d+=H.g*q,f+=H.b*q;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],q);P++}else if(C.isSunLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,Q=t.get(C);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[_]=Q,n.sunShadowMap[_]=te;let Se=K.getViewportCount();for(let De=0;De<Se;De++)n.sunShadowMatrix[S+De]=K.getMatrix(De),n.sunShadowCascade[S+De]=K._cascadeData[De];S+=Se,_++}n.sun[m]=X,m++}else if(C.isDirectionalLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,Q=t.get(C);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,n.directionalShadow[u]=Q,n.directionalShadowMap[u]=te,n.directionalShadowMatrix[u]=C.shadow.matrix,A++}n.directional[u]=X,u++}else if(C.isSpotLight){let X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(H).multiplyScalar(q),X.distance=G,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[M]=X;let K=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,K.updateMatrices(C),C.castShadow&&D++),n.spotLightMatrix[M]=K.matrix,C.castShadow){let Q=t.get(C);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,n.spotShadow[M]=Q,n.spotShadowMap[M]=te,g++}M++}else if(C.isRectAreaLight){let X=e.get(C);X.color.copy(H).multiplyScalar(q),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=X,T++}else if(C.isPointLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let K=C.shadow,Q=t.get(C);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=C.shadow.matrix,E++}n.point[p]=X,p++}else if(C.isHemisphereLight){let X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(q),X.groundColor.copy(C.groundColor).multiplyScalar(q),n.hemi[v]=X,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.sunLength!==m||N.directionalLength!==u||N.pointLength!==p||N.spotLength!==M||N.rectAreaLength!==T||N.hemiLength!==v||N.numSunShadows!==_||N.numDirectionalShadows!==A||N.numPointShadows!==E||N.numSpotShadows!==g||N.numSpotMaps!==b||N.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=u,n.spot.length=M,n.rectArea.length=T,n.point.length=p,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=P,N.sunLength=m,N.directionalLength=u,N.pointLength=p,N.spotLength=M,N.rectAreaLength=T,N.hemiLength=v,N.numSunShadows=_,N.numDirectionalShadows=A,N.numPointShadows=E,N.numSpotShadows=g,N.numSpotMaps=b,N.numLightProbes=P,n.version=Gg++)}function l(c,h){let d=0,f=0,m=0,_=0,S=0,u=0,p=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let v=c[M];if(v.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let A=n.directional[f];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),f++}else if(v.isSpotLight){let A=n.spot[_];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),_++}else if(v.isRectAreaLight){let A=n.rectArea[S];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){let A=n.point[m];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),m++}else if(v.isHemisphereLight){let A=n.hemi[u];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),u++}}}return{setup:o,setupView:l,state:n}}function kh(i){let e=new Vg(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Wg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new kh(i),e.set(s,[o])):r>=a.length?(o=new kh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jg=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Yg=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],zh=new st,Zs=new k,Rl=new k;function Jg(i,e,t){let n=new ti,s=new ke,r=new ke,a=new ot,o=new Qr,l=new ea,c={},h=t.maxTextureSize,d={[oi]:Vt,[Vt]:oi,[An]:An},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Xg,fragmentShader:qg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new En;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Qe(_,f),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let p=this.type;this.render=function(E,g,b){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||E.length===0)return;this.type===Dc&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks);let D=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(yi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=p!==this.type;V&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(H=>H.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,H=E.length;C<H;C++){let q=E[C],G=q.shadow;if(G===void 0){Ce("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let te=G.getFrameExtents();s.multiply(te),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,G.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Qi){if(q.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Jt(s.x,s.y,{format:li,type:pn,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new Gn(s.x,s.y,fn),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=kn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Tt,G.map.depthTexture.magFilter=Tt}else q.isPointLight?(G.map=new Ks(s.x),G.map.depthTexture=new As(s.x,dn)):(G.map=new Jt(s.x,s.y),G.map.depthTexture=new Gn(s.x,s.y,dn)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=kn,this.type===ks?(G.map.depthTexture.compareFunction=X?fl:dl,G.map.depthTexture.minFilter=Ht,G.map.depthTexture.magFilter=Ht):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Tt,G.map.depthTexture.magFilter=Tt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let K=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,b);let Q=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let Se=0;Se<K;Se++){let De=G.getCamera(Se);if(q.isPointLight){let J=G.camera,pe=G.matrix,xe=q.distance||J.far;xe!==J.far&&(J.far=xe,J.updateProjectionMatrix()),Zs.setFromMatrixPosition(q.matrixWorld),J.position.copy(Zs),Rl.copy(J.position),Rl.add(jg[Se]),J.up.copy(Yg[Se]),J.lookAt(Rl),J.updateMatrixWorld(),pe.makeTranslation(-Zs.x,-Zs.y,-Zs.z),zh.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(zh,J.coordinateSystem,J.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(G.map),i.clear());let J=G.getViewport(Se);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),O.viewport(a)}n=G.getFrustum(Se),v(g,b,De,q,Q,this.type)}G.isPointLightShadow!==!0&&this.type===Qi&&M(G,b),G.needsUpdate=!1}p=this.type,u.needsUpdate=!1,i.setRenderTarget(D,P,N)};function M(E,g){let b=e.update(S);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new Jt(s.x,s.y,{format:li,type:pn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(g,null,b,f,S,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(g,null,b,m,S,null)}function T(E,g,b,D){let P=null,N=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)P=N;else if(P=b.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let O=P.uuid,V=g.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let H=C[V];H===void 0&&(H=P.clone(),C[V]=H,g.addEventListener("dispose",A)),P=H}if(P.visible=g.visible,P.wireframe=g.wireframe,D===Qi?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:d[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=i.properties.get(P);O.light=b}return P}function v(E,g,b,D,P,N){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Qi)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let C=e.update(E),H=E.material;if(Array.isArray(H)){let q=C.groups;for(let G=0,te=q.length;G<te;G++){let X=q[G],K=H[X.materialIndex];if(K&&K.visible){let Q=T(E,K,D,N);E.onBeforeShadow(i,E,g,b,C,Q,X),i.renderBufferDirect(b,null,C,Q,E,X),E.onAfterShadow(i,E,g,b,C,Q,X)}}}else if(H.visible){let q=T(E,H,D,N);E.onBeforeShadow(i,E,g,b,C,q,null),i.renderBufferDirect(b,null,C,q,E,null),E.onAfterShadow(i,E,g,b,C,q,null)}}let V=E.children;for(let C=0,H=V.length;C<H;C++)v(V[C],g,b,D,P,N)}function A(E){E.target.removeEventListener("dispose",A);for(let b in c){let D=c[b],P=E.target.uuid;P in D&&(D[P].dispose(),delete D[P])}}}function Zg(i,e){function t(){let R=!1,Z=new ot,W=null,oe=new ot(0,0,0,0);return{setMask:function(ie){W!==ie&&!R&&(i.colorMask(ie,ie,ie,ie),W=ie)},setLocked:function(ie){R=ie},setClear:function(ie,re,be,Be,ne){ne===!0&&(ie*=Be,re*=Be,be*=Be),Z.set(ie,re,be,Be),oe.equals(Z)===!1&&(i.clearColor(ie,re,be,Be),oe.copy(Z))},reset:function(){R=!1,W=null,oe.set(-1,0,0,0)}}}function n(){let R=!1,Z=!1,W=null,oe=null,ie=null;return{setReversed:function(re){if(Z!==re){let be=e.get("EXT_clip_control");re?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Z=re;let Be=ie;ie=null,this.setClear(Be)}},getReversed:function(){return Z},setTest:function(re){re?me(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(re){W!==re&&!R&&(i.depthMask(re),W=re)},setFunc:function(re){if(Z&&(re=ph[re]),oe!==re){switch(re){case Or:i.depthFunc(i.NEVER);break;case Br:i.depthFunc(i.ALWAYS);break;case kr:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case zr:i.depthFunc(i.EQUAL);break;case Gr:i.depthFunc(i.GEQUAL);break;case Hr:i.depthFunc(i.GREATER);break;case Vr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=re}},setLocked:function(re){R=re},setClear:function(re){ie!==re&&(ie=re,Z&&(re=1-re),i.clearDepth(re))},reset:function(){R=!1,W=null,oe=null,ie=null,Z=!1}}}function s(){let R=!1,Z=null,W=null,oe=null,ie=null,re=null,be=null,Be=null,ne=null;return{setTest:function(Ee){R||(Ee?me(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(Ee){Z!==Ee&&!R&&(i.stencilMask(Ee),Z=Ee)},setFunc:function(Ee,Oe,de){(W!==Ee||oe!==Oe||ie!==de)&&(i.stencilFunc(Ee,Oe,de),W=Ee,oe=Oe,ie=de)},setOp:function(Ee,Oe,de){(re!==Ee||be!==Oe||Be!==de)&&(i.stencilOp(Ee,Oe,de),re=Ee,be=Oe,Be=de)},setLocked:function(Ee){R=Ee},setClear:function(Ee){ne!==Ee&&(i.clearStencil(Ee),ne=Ee)},reset:function(){R=!1,Z=null,W=null,oe=null,ie=null,re=null,be=null,Be=null,ne=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},d={},f={},m=new WeakMap,_=[],S=null,u=!1,p=null,M=null,T=null,v=null,A=null,E=null,g=null,b=new Pe(0,0,0),D=0,P=!1,N=null,O=null,V=null,C=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,te=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=te>=2);let K=null,Q={},Se=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),J=new ot().fromArray(Se),pe=new ot().fromArray(De);function xe(R,Z,W,oe){let ie=new Uint8Array(4),re=i.createTexture();i.bindTexture(R,re),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<W;be++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(Z+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return re}let Te={};Te[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(Hi),Wt(!1),ct(Xo),me(i.CULL_FACE),Rt(yi);function me(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Fe(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function dt(R,Z){return f[R]!==Z?(i.bindFramebuffer(R,Z),f[R]=Z,R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Z),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function Re(R,Z){let W=_,oe=!1;if(R){W=m.get(Z),W===void 0&&(W=[],m.set(Z,W));let ie=R.textures;if(W.length!==ie.length||W[0]!==i.COLOR_ATTACHMENT0){for(let re=0,be=ie.length;re<be;re++)W[re]=i.COLOR_ATTACHMENT0+re;W.length=ie.length,oe=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,oe=!0);oe&&i.drawBuffers(W)}function $e(R){return S!==R?(i.useProgram(R),S=R,!0):!1}let et={[vi]:i.FUNC_ADD,[Fc]:i.FUNC_SUBTRACT,[Oc]:i.FUNC_REVERSE_SUBTRACT};et[Bc]=i.MIN,et[kc]=i.MAX;let Ge={[zc]:i.ZERO,[Gc]:i.ONE,[Hc]:i.SRC_COLOR,[Jo]:i.SRC_ALPHA,[Yc]:i.SRC_ALPHA_SATURATE,[qc]:i.DST_COLOR,[Wc]:i.DST_ALPHA,[Vc]:i.ONE_MINUS_SRC_COLOR,[Zo]:i.ONE_MINUS_SRC_ALPHA,[jc]:i.ONE_MINUS_DST_COLOR,[Xc]:i.ONE_MINUS_DST_ALPHA,[Jc]:i.CONSTANT_COLOR,[Zc]:i.ONE_MINUS_CONSTANT_COLOR,[$c]:i.CONSTANT_ALPHA,[Kc]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(R,Z,W,oe,ie,re,be,Be,ne,Ee){if(R===yi){u===!0&&(Fe(i.BLEND),u=!1);return}if(u===!1&&(me(i.BLEND),u=!0),R!==Uc){if(R!==p||Ee!==P){if((M!==vi||A!==vi)&&(i.blendEquation(i.FUNC_ADD),M=vi,A=vi),Ee)switch(R){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFunc(i.ONE,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ie("WebGLState: Invalid blending: ",R);break}else switch(R){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jo:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yo:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",R);break}T=null,v=null,E=null,g=null,b.set(0,0,0),D=0,p=R,P=Ee}return}ie=ie||Z,re=re||W,be=be||oe,(Z!==M||ie!==A)&&(i.blendEquationSeparate(et[Z],et[ie]),M=Z,A=ie),(W!==T||oe!==v||re!==E||be!==g)&&(i.blendFuncSeparate(Ge[W],Ge[oe],Ge[re],Ge[be]),T=W,v=oe,E=re,g=be),(Be.equals(b)===!1||ne!==D)&&(i.blendColor(Be.r,Be.g,Be.b,ne),b.copy(Be),D=ne),p=R,P=!1}function gt(R,Z){R.side===An?Fe(i.CULL_FACE):me(i.CULL_FACE);let W=R.side===Vt;Z&&(W=!W),Wt(W),R.blending===es&&R.transparent===!1?Rt(yi):Rt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let oe=R.stencilWrite;o.setTest(oe),oe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),St(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function ct(R){R!==Lc?(me(i.CULL_FACE),R!==O&&(R===Xo?i.cullFace(i.BACK):R===Nc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),O=R}function xn(R){R!==V&&(G&&i.lineWidth(R),V=R)}function St(R,Z,W){R?(me(i.POLYGON_OFFSET_FILL),(C!==Z||H!==W)&&(C=Z,H=W,a.getReversed()&&(Z=-Z,W=-W),i.polygonOffset(Z,W))):Fe(i.POLYGON_OFFSET_FILL)}function Kt(R){R?me(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function Qt(R){R===void 0&&(R=i.TEXTURE0+q-1),K!==R&&(i.activeTexture(R),K=R)}function en(R,Z,W){W===void 0&&(K===null?W=i.TEXTURE0+q-1:W=K);let oe=Q[W];oe===void 0&&(oe={type:void 0,texture:void 0},Q[W]=oe),(oe.type!==R||oe.texture!==Z)&&(K!==W&&(i.activeTexture(W),K=W),i.bindTexture(R,Z||Te[R]),oe.type=R,oe.texture=Z)}function L(){let R=Q[K];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function tn(){try{i.compressedTexImage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function rt(){try{i.compressedTexImage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function at(){try{i.texSubImage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function ue(){try{i.texSubImage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function _t(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function Ne(){try{i.texStorage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function w(){try{i.texStorage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function F(){try{i.texImage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function ee(R){return d[R]!==void 0?d[R]:i.getParameter(R)}function $(R,Z){d[R]!==Z&&(i.pixelStorei(R,Z),d[R]=Z)}function se(R){J.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),J.copy(R))}function ce(R){pe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),pe.copy(R))}function j(R,Z){let W=c.get(Z);W===void 0&&(W=new WeakMap,c.set(Z,W));let oe=W.get(R);oe===void 0&&(oe=i.getUniformBlockIndex(Z,R.name),i.uniformBlockBinding(Z,oe,oe),W.set(R,oe))}function Y(R,Z,W){let ie=c.get(Z).get(R);l[ie]!==W&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,W),l[ie]=W)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,Q={},f={},l={},m=new WeakMap,_=[],S=null,u=!1,p=null,M=null,T=null,v=null,A=null,E=null,g=null,b=new Pe(0,0,0),D=0,P=!1,N=null,O=null,V=null,C=null,H=null,J.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Fe,bindFramebuffer:dt,drawBuffers:Re,useProgram:$e,setBlending:Rt,setMaterial:gt,setFlipSided:Wt,setCullFace:ct,setLineWidth:xn,setPolygonOffset:St,setScissorTest:Kt,activeTexture:Qt,bindTexture:en,unbindTexture:L,compressedTexImage2D:tn,compressedTexImage3D:rt,texImage2D:x,texImage3D:F,pixelStorei:$,getParameter:ee,updateUBOMapping:j,uniformBlockBinding:Y,texStorage2D:Ne,texStorage3D:w,texSubImage2D:at,texSubImage3D:ue,compressedTexSubImage2D:_t,compressedTexSubImage3D:Ae,scissor:se,viewport:ce,reset:ae}}function $g(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap,d=new Set,f,m=new WeakMap,_=new Set,S=new FinalizationRegistry(w=>_.delete(w)),u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,x){return u?new OffscreenCanvas(w,x):Wi("canvas")}function M(w,x,F){let ee=1,$=Ne(w);if(($.width>F||$.height>F)&&(ee=F/Math.max($.width,$.height)),ee<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let se=Math.floor(ee*$.width),ce=Math.floor(ee*$.height);f===void 0&&(f=p(se,ce));let j=x?p(se,ce):f;return j.width=se,j.height=ce,j.getContext("2d").drawImage(w,0,0,se,ce),Ce("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+ce+")."),j}else return"data"in w&&Ce("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function T(w){return w.generateMipmaps}function v(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,x,F,ee,$,se=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ce;ee&&(ce=e.get("EXT_texture_norm16"),ce||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===i.RED&&(F===i.FLOAT&&(j=i.R32F),F===i.HALF_FLOAT&&(j=i.R16F),F===i.UNSIGNED_BYTE&&(j=i.R8),F===i.UNSIGNED_SHORT&&ce&&(j=ce.R16_EXT),F===i.SHORT&&ce&&(j=ce.R16_SNORM_EXT)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.R8UI),F===i.UNSIGNED_SHORT&&(j=i.R16UI),F===i.UNSIGNED_INT&&(j=i.R32UI),F===i.BYTE&&(j=i.R8I),F===i.SHORT&&(j=i.R16I),F===i.INT&&(j=i.R32I)),x===i.RG&&(F===i.FLOAT&&(j=i.RG32F),F===i.HALF_FLOAT&&(j=i.RG16F),F===i.UNSIGNED_BYTE&&(j=i.RG8),F===i.UNSIGNED_SHORT&&ce&&(j=ce.RG16_EXT),F===i.SHORT&&ce&&(j=ce.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RG8UI),F===i.UNSIGNED_SHORT&&(j=i.RG16UI),F===i.UNSIGNED_INT&&(j=i.RG32UI),F===i.BYTE&&(j=i.RG8I),F===i.SHORT&&(j=i.RG16I),F===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGB8UI),F===i.UNSIGNED_SHORT&&(j=i.RGB16UI),F===i.UNSIGNED_INT&&(j=i.RGB32UI),F===i.BYTE&&(j=i.RGB8I),F===i.SHORT&&(j=i.RGB16I),F===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),F===i.UNSIGNED_INT&&(j=i.RGBA32UI),F===i.BYTE&&(j=i.RGBA8I),F===i.SHORT&&(j=i.RGBA16I),F===i.INT&&(j=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_SHORT&&ce&&(j=ce.RGB16_EXT),F===i.SHORT&&ce&&(j=ce.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),x===i.RGBA){let Y=se?xs:We.getTransfer($);F===i.FLOAT&&(j=i.RGBA32F),F===i.HALF_FLOAT&&(j=i.RGBA16F),F===i.UNSIGNED_BYTE&&(j=Y===Je?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ce&&(j=ce.RGBA16_EXT),F===i.SHORT&&ce&&(j=ce.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function g(w,x){let F;return w?x===null||x===dn||x===Mi?F=i.DEPTH24_STENCIL8:x===fn?F=i.DEPTH32F_STENCIL8:x===ns&&(F=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===dn||x===Mi?F=i.DEPTH_COMPONENT24:x===fn?F=i.DEPTH_COMPONENT32F:x===ns&&(F=i.DEPTH_COMPONENT16),F}function b(w,x){return T(w)===!0||w.isFramebufferTexture&&w.minFilter!==Tt&&w.minFilter!==Ht?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function D(w){let x=new WeakRef(w);n.get(w).__ref=x,_.add(x),S.register(w,x,x)}function P(w){let x=n.get(w).__ref;x!==void 0&&(_.delete(x),S.unregister(x))}function N(w){V(w.target)}function O(w){C(w.target)}function V(w){w.removeEventListener("dispose",N),P(w),q(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&d.delete(w)}function C(w){w.removeEventListener("dispose",O),P(w),te(w)}function H(){for(let w of _){let x=w.deref();x!==void 0&&(x.isRenderTarget===!0?C(x):V(x))}_.clear(),d.clear()}function q(w){let x=n.get(w);if(x.__webglInit===void 0)return;let F=w.source,ee=m.get(F);if(ee){let $=ee[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&G(w),Object.keys(ee).length===0&&m.delete(F)}n.remove(w)}function G(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let F=w.source,ee=m.get(F);delete ee[x.__cacheKey],a.memory.textures--}function te(w){let x=n.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();let F=w.depthTexture;if(F&&F.renderTarget===w&&V(F),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let se=0;se<x.__webglFramebuffer[$].length;se++)i.deleteFramebuffer(x.__webglFramebuffer[$][se]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ee=w.textures;for(let $=0,se=ee.length;$<se;$++){let ce=n.get(ee[$]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(ee[$])}n.remove(w)}let X=0;function K(){X=0}function Q(){return X}function Se(w){X=w}function De(){let w=X;return w>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,w}function J(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function pe(w,x){let F=n.get(w);if(w.isVideoTexture&&_t(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let ee=w.image;if(ee===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(F,w,x);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function xe(w,x){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){gt(F,w,x);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function Te(w,x){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){gt(F,w,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function me(w,x){let F=n.get(w);if(w.version>0&&F.__version!==w.version){Wt(F,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}let Fe={[xi]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[Wr]:i.MIRRORED_REPEAT},dt={[Tt]:i.NEAREST,[th]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Re={[rh]:i.NEVER,[pl]:i.ALWAYS,[ah]:i.LESS,[dl]:i.LEQUAL,[oh]:i.EQUAL,[fl]:i.GEQUAL,[lh]:i.GREATER,[ch]:i.NOTEQUAL};function $e(w,x){if(x.type===fn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ht||x.magFilter===ga||x.magFilter===Gs||x.magFilter===Vn||x.minFilter===Ht||x.minFilter===ga||x.minFilter===Gs||x.minFilter===Vn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Fe[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Fe[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Fe[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,dt[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,dt[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Tt||x.minFilter!==Gs&&x.minFilter!==Vn||x.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function et(w,x){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",N),D(x));let ee=x.source,$=m.get(ee);$===void 0&&($={},m.set(ee,$));let se=J(x);if(se!==w.__cacheKey){$[se]===void 0&&($[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[se].usedTimes++;let ce=$[w.__cacheKey];ce!==void 0&&($[w.__cacheKey].usedTimes--,ce.usedTimes===0&&G(x)),w.__cacheKey=se,w.__webglTexture=$[se].texture}return F}function Ge(w,x,F){return Math.floor(Math.floor(w/F)/x)}function Rt(w,x,F,ee){let se=w.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,ee,x.data);else{se.sort((R,Z)=>R.start-Z.start);let ce=0;for(let R=1;R<se.length;R++){let Z=se[ce],W=se[R],oe=Z.start+Z.count,ie=Ge(W.start,x.width,4),re=Ge(Z.start,x.width,4);W.start<=oe+1&&ie===re&&Ge(W.start+W.count-1,x.width,4)===ie?Z.count=Math.max(Z.count,W.start+W.count-Z.start):(++ce,se[ce]=W)}se.length=ce+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,Z=se.length;R<Z;R++){let W=se[R],oe=Math.floor(W.start/4),ie=Math.ceil(W.count/4),re=oe%x.width,be=Math.floor(oe/x.width),Be=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,be),t.texSubImage2D(i.TEXTURE_2D,0,re,be,Be,ne,F,ee,x.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function gt(w,x,F){let ee=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=i.TEXTURE_3D);let $=et(w,x),se=x.source;t.bindTexture(ee,w.__webglTexture,i.TEXTURE0+F);let ce=n.get(se);if(se.version!==ce.__version||$===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ne=We.getPrimaries(We.workingColorSpace),Ee=x.colorSpace===Xn?null:We.getPrimaries(x.colorSpace),Oe=x.colorSpace===Xn||ne===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Y=M(x.image,!1,s.maxTextureSize);Y=Ae(x,Y);let ae=r.convert(x.format,x.colorSpace),R=r.convert(x.type),Z=E(x.internalFormat,ae,R,x.normalized,x.colorSpace,x.isVideoTexture);$e(ee,x);let W,oe=x.mipmaps,ie=x.isVideoTexture!==!0,re=ce.__version===void 0||$===!0,be=se.dataReady,Be=b(x,Y);if(x.isDepthTexture)Z=g(x.format===Wn,x.type),re&&(ie?t.texStorage2D(i.TEXTURE_2D,1,Z,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,Z,Y.width,Y.height,0,ae,R,null));else if(x.isDataTexture)if(oe.length>0){ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,Z,oe[0].width,oe[0].height);for(let ne=0,Ee=oe.length;ne<Ee;ne++)W=oe[ne],ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,W.width,W.height,ae,R,W.data):t.texImage2D(i.TEXTURE_2D,ne,Z,W.width,W.height,0,ae,R,W.data);x.generateMipmaps=!1}else ie?(re&&t.texStorage2D(i.TEXTURE_2D,Be,Z,Y.width,Y.height),be&&Rt(x,Y,ae,R)):t.texImage2D(i.TEXTURE_2D,0,Z,Y.width,Y.height,0,ae,R,Y.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ie&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Z,oe[0].width,oe[0].height,Y.depth);for(let ne=0,Ee=oe.length;ne<Ee;ne++)if(W=oe[ne],x.format!==mn)if(ae!==null)if(ie){if(be)if(x.layerUpdates.size>0){let Oe=Sl(W.width,W.height,x.format,x.type);for(let de of x.layerUpdates){let Ke=W.data.subarray(de*Oe/W.data.BYTES_PER_ELEMENT,(de+1)*Oe/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,de,W.width,W.height,1,ae,Ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,W.width,W.height,Y.depth,ae,W.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Z,W.width,W.height,Y.depth,0,W.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,W.width,W.height,Y.depth,ae,R,W.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Z,W.width,W.height,Y.depth,0,ae,R,W.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,Z,oe[0].width,oe[0].height);for(let ne=0,Ee=oe.length;ne<Ee;ne++)W=oe[ne],x.format!==mn?ae!==null?ie?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,W.width,W.height,ae,W.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Z,W.width,W.height,0,W.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,W.width,W.height,ae,R,W.data):t.texImage2D(i.TEXTURE_2D,ne,Z,W.width,W.height,0,ae,R,W.data)}else if(x.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Z,Y.width,Y.height,Y.depth),be)if(x.layerUpdates.size>0){let ne=Sl(Y.width,Y.height,x.format,x.type);for(let Ee of x.layerUpdates){let Oe=Y.data.subarray(Ee*ne/Y.data.BYTES_PER_ELEMENT,(Ee+1)*ne/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,Y.width,Y.height,1,ae,R,Oe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ae,R,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,Y.width,Y.height,Y.depth,0,ae,R,Y.data);else if(x.isData3DTexture)ie?(re&&t.texStorage3D(i.TEXTURE_3D,Be,Z,Y.width,Y.height,Y.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ae,R,Y.data)):t.texImage3D(i.TEXTURE_3D,0,Z,Y.width,Y.height,Y.depth,0,ae,R,Y.data);else if(x.isFramebufferTexture){if(re)if(ie)t.texStorage2D(i.TEXTURE_2D,Be,Z,Y.width,Y.height);else{let ne=Y.width,Ee=Y.height;for(let Oe=0;Oe<Be;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,Z,ne,Ee,0,ae,R,null),ne>>=1,Ee>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),Y.parentNode!==ne){ne.appendChild(Y),d.add(x),ne.onpaint=Ee=>{let Oe=Ee.changedElements;for(let de of d)Oe.includes(de.image)&&(de.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let Oe=i.RGBA,de=i.RGBA,Ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,de,Ke,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&re){let ne=Ne(oe[0]);t.texStorage2D(i.TEXTURE_2D,Be,Z,ne.width,ne.height)}for(let ne=0,Ee=oe.length;ne<Ee;ne++)W=oe[ne],ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae,R,W):t.texImage2D(i.TEXTURE_2D,ne,Z,ae,R,W);x.generateMipmaps=!1}else if(ie){if(re){let ne=Ne(Y);t.texStorage2D(i.TEXTURE_2D,Be,Z,ne.width,ne.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,R,Y)}else t.texImage2D(i.TEXTURE_2D,0,Z,ae,R,Y);T(x)&&x.mipmapsAutoUpdate===!0&&v(ee),ce.__version=se.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Wt(w,x,F){if(x.image.length!==6)return;let ee=et(w,x),$=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let se=n.get($);if($.version!==se.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);let ce=We.getPrimaries(We.workingColorSpace),j=x.colorSpace===Xn?null:We.getPrimaries(x.colorSpace),Y=x.colorSpace===Xn||ce===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ae=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let de=0;de<6;de++)!ae&&!R?Z[de]=M(x.image[de],!0,s.maxCubemapSize):Z[de]=R?x.image[de].image:x.image[de],Z[de]=Ae(x,Z[de]);let W=Z[0],oe=r.convert(x.format,x.colorSpace),ie=r.convert(x.type),re=E(x.internalFormat,oe,ie,x.normalized,x.colorSpace),be=x.isVideoTexture!==!0,Be=se.__version===void 0||ee===!0,ne=$.dataReady,Ee=b(x,W);$e(i.TEXTURE_CUBE_MAP,x);let Oe;if(x.isDepthTexture){if(re=g(x.format===Wn,x.type),Be)if(be)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,re,W.width,W.height);else for(let de=0;de<6;de++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,W.width,W.height,0,oe,ie,null)}else if(ae){be&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,re,W.width,W.height);for(let de=0;de<6;de++){Oe=Z[de].mipmaps;for(let Ke=0;Ke<Oe.length;Ke++){let Mt=Oe[Ke];x.format!==mn?oe!==null?be?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ke,0,0,Mt.width,Mt.height,oe,Mt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ke,re,Mt.width,Mt.height,0,Mt.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ke,0,0,Mt.width,Mt.height,oe,ie,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ke,re,Mt.width,Mt.height,0,oe,ie,Mt.data)}}}else{if(Oe=x.mipmaps,be&&Be){Oe.length>0&&Ee++;let de=Ne(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,re,de.width,de.height)}for(let de=0;de<6;de++)if(R){be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Z[de].width,Z[de].height,oe,ie,Z[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,Z[de].width,Z[de].height,0,oe,ie,Z[de].data);for(let Ke=0;Ke<Oe.length;Ke++){let qn=Oe[Ke].image[de].image;be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ke+1,0,0,qn.width,qn.height,oe,ie,qn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ke+1,re,qn.width,qn.height,0,oe,ie,qn.data)}}else{be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,oe,ie,Z[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,oe,ie,Z[de]);for(let Ke=0;Ke<Oe.length;Ke++){let Mt=Oe[Ke];be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ke+1,0,0,oe,ie,Mt.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ke+1,re,oe,ie,Mt.image[de])}}}T(x)&&x.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),se.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ct(w,x,F,ee,$,se){let ce=r.convert(F.format,F.colorSpace),j=r.convert(F.type),Y=E(F.internalFormat,ce,j,F.normalized,F.colorSpace),ae=n.get(x),R=n.get(F);if(R.__renderTarget=x,!ae.__hasExternalTextures){let Z=Math.max(1,x.width>>se),W=Math.max(1,x.height>>se);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,se,Y,Z,W,x.depth,0,ce,j,null):t.texImage2D($,se,Y,Z,W,0,ce,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ue(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,R.__webglTexture,0,at(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,R.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xn(w,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let ee=x.depthTexture,$=ee&&ee.isDepthTexture?ee.type:null,se=g(x.stencilBuffer,$),ce=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(x),se,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(x),se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,se,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,w)}else{let ee=x.textures;for(let $=0;$<ee.length;$++){let se=ee[$],ce=r.convert(se.format,se.colorSpace),j=r.convert(se.type),Y=E(se.internalFormat,ce,j,se.normalized,se.colorSpace);ue(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(x),Y,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(x),Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(w,x,F){let ee=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(x.depthTexture);$.__renderTarget=x;let se=ee?x.depthTexture.image[0]:x.depthTexture.image;(!$.__webglTexture||se.width!==x.width||se.height!==x.height)&&(se.width=x.width,se.height=x.height,x.depthTexture.needsUpdate=!0),ee?me(x.depthTexture,0):pe(x.depthTexture,0);let ce=$.__webglTexture,j=at(x),Y=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,ae=x.depthTexture.format===Wn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===kn)ue(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Y,ce,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Y,ce,0);else if(x.depthTexture.format===Wn)ue(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Y,ce,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Y,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(w){let x=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let ee=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ee){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ee.removeEventListener("dispose",$)};ee.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=ee}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let ee=0;ee<6;ee++)St(x.__webglFramebuffer[ee],w,ee);else w.texture.mipmaps.length>0?St(x.__webglFramebuffer[0],w,0):St(x.__webglFramebuffer,w,0);else if(F){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]===void 0)x.__webglDepthbuffer[ee]=i.createRenderbuffer(),xn(x.__webglDepthbuffer[ee],w,!1);else{let $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),xn(x.__webglDepthbuffer,w,!1);else{let $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(w,x,F){let ee=n.get(w);x!==void 0&&ct(ee.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Kt(w)}function en(w){let x=w.texture,F=n.get(w),ee=n.get(x);w.addEventListener("dispose",O),D(w);let $=w.textures,se=w.isWebGLCubeRenderTarget===!0,ce=$.length>1;if(ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=x.version,a.memory.textures++),se){F.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps.length>0){F.__webglFramebuffer[j]=[];for(let Y=0;Y<x.mipmaps.length;Y++)F.__webglFramebuffer[j][Y]=i.createFramebuffer()}else F.__webglFramebuffer[j]=i.createFramebuffer()}else{if(x.mipmaps.length>0){F.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)F.__webglFramebuffer[j]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ce)for(let j=0,Y=$.length;j<Y;j++){let ae=n.get($[j]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ue(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let j=0;j<$.length;j++){let Y=$[j];F.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[j]);let ae=r.convert(Y.format,Y.colorSpace),R=r.convert(Y.type),Z=E(Y.internalFormat,ae,R,Y.normalized,Y.colorSpace,w.isXRRenderTarget===!0),W=at(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,Z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,F.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),xn(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),$e(i.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)ct(F.__webglFramebuffer[j][Y],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Y);else ct(F.__webglFramebuffer[j],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);T(x)?v(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let j=0,Y=$.length;j<Y;j++){let ae=$[j],R=n.get(ae),Z=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,R.__webglTexture),$e(Z,ae),ct(F.__webglFramebuffer,w,ae,i.COLOR_ATTACHMENT0+j,Z,0),T(ae)&&v(Z)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(j=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,ee.__webglTexture),$e(j,x),x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)ct(F.__webglFramebuffer[Y],w,x,i.COLOR_ATTACHMENT0,j,Y);else ct(F.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,j,0);T(x)?v(j):x.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&Kt(w)}function L(w){let x=w.textures;for(let F=0,ee=x.length;F<ee;F++){let $=x[F];if(T($)&&$.mipmapsAutoUpdate===!0){let se=A(w),ce=n.get($).__webglTexture;t.bindTexture(se,ce),v(se),t.unbindTexture()}}}let tn=[];function rt(w){if(w.samples>0){if(ue(w)===!1){let x=w.textures,F=w.width,ee=w.height,$=i.COLOR_BUFFER_BIT,se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(w),j=x.length>1;if(j)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let R=n.get(x[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,F,ee,0,0,F,ee,$,i.NEAREST),l===!0&&(tn.length=0,tn.push(i.COLOR_ATTACHMENT0+ae),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&tn.push(se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let R=n.get(x[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function at(w){return Math.min(s.maxSamples,w.samples)}function ue(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function _t(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Ae(w,x){let F=w.colorSpace,ee=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==_s&&F!==Xn&&(We.getTransfer(F)===Je?(ee!==mn||$!==Xt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",F)),x}function Ne(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=De,this.resetTextureUnits=K,this.getTextureUnits=Q,this.setTextureUnits=Se,this.setTexture2D=pe,this.setTexture2DArray=xe,this.setTexture3D=Te,this.setTextureCube=me,this.rebindTextures=Qt,this.setupRenderTarget=en,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=ue,this.dispose=H}function Kg(i,e){function t(n,s=Xn){let r,a=We.getTransfer(s);if(n===Xt)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ol)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ll)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rl)return i.BYTE;if(n===al)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===dn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===cl)return i.ALPHA;if(n===hl)return i.RGB;if(n===mn)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===Wn)return i.DEPTH_STENCIL;if(n===ul)return i.RED;if(n===va)return i.RED_INTEGER;if(n===li)return i.RG;if(n===Sa)return i.RG_INTEGER;if(n===Ma)return i.RGBA_INTEGER;if(n===Hs||n===Vs||n===Ws||n===Xs)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===wa||n===Ea||n===Ta)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===qs||n===La)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ra)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ia)return r.COMPRESSED_R11_EAC;if(n===Pa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qs)return r.COMPRESSED_RG11_EAC;if(n===La)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Na||n===Da||n===Ua||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Ga||n===Ha||n===Va||n===Wa||n===Xa||n===qa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ba)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ga)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===Ya||n===Ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ja)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Za||n===$a||n===js||n===Ka)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ul=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Rs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tn({vertexShader:Qg,fragmentShader:e0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new At(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fl=class extends Mn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,_=null,S=typeof XRWebGLBinding<"u",u=new Ul,p={},M=t.getContextAttributes(),T=null,v=null,A=[],E=[],g=new ke,b=null,D=null,P=new Gt;P.viewport=new ot;let N=new Gt;N.viewport=new ot;let O=[P,N],V=new da,C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=A[J];return pe===void 0&&(pe=new Yi,A[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=A[J];return pe===void 0&&(pe=new Yi,A[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=A[J];return pe===void 0&&(pe=new Yi,A[J]=pe),pe.getHandSpace()};function q(J){let pe=E.indexOf(J.inputSource);if(pe===-1)return;let xe=A[pe];xe!==void 0&&(xe.update(J.inputSource,J.frame,c||a),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",te);for(let J=0;J<A.length;J++){let pe=E[J];pe!==null&&(E[J]=null,A[J].disconnect(pe))}C=null,H=null,u.reset();for(let J in p)delete p[J];if(e.setRenderTarget(T),m=null,f=null,d=null,s=null,v=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(g.width,g.height,!1),D!==null){let J=D.camera;J.fov=D.fov,J.zoom=D.zoom,J.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Te=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?Wn:kn,Te=M.stencil?Mi:dn);let Fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Jt(f.textureWidth,f.textureHeight,{format:mn,type:Xt,depthTexture:new Gn(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Jt(m.framebufferWidth,m.framebufferHeight,{format:mn,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function te(J){for(let pe=0;pe<J.removed.length;pe++){let xe=J.removed[pe],Te=E.indexOf(xe);Te>=0&&(E[Te]=null,A[Te].disconnect(xe))}for(let pe=0;pe<J.added.length;pe++){let xe=J.added[pe],Te=E.indexOf(xe);if(Te===-1){for(let Fe=0;Fe<A.length;Fe++)if(Fe>=E.length){E.push(xe),Te=Fe;break}else if(E[Fe]===null){E[Fe]=xe,Te=Fe;break}if(Te===-1)break}let me=A[Te];me&&me.connect(xe)}}function X(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let pe=J.near,xe=J.far;u.texture!==null&&(u.depthNear>0&&(pe=u.depthNear),u.depthFar>0&&(xe=u.depthFar)),V.near=N.near=P.near=pe,V.far=N.far=P.far=xe,(C!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),C=V.near,H=V.far),V.layers.mask=J.layers.mask|6,P.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let Te=J.parent,me=V.cameras;X(V,Te);for(let Fe=0;Fe<me.length;Fe++)X(me[Fe],Te);V.projectionMatrix.copy(P.projectionMatrix),V.projectionMatrixInverse.copy(P.projectionMatrixInverse),D===null&&J.isPerspectiveCamera&&(D={camera:J,fov:J.fov,zoom:J.zoom}),K(J,V,Te)};function K(J,pe,xe){xe===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=qr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(V)},this.getCameraTexture=function(J){return p[J]};let Q=null;function Se(J,pe){if(h=pe.getViewerPose(c||a),_=pe,h!==null){let xe=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Te=!1;xe.length!==V.cameras.length&&(V.cameras.length=0,Te=!0);for(let Re=0;Re<xe.length;Re++){let $e=xe[Re],et=null;if(m!==null)et=m.getViewport($e);else{let Rt=d.getViewSubImage(f,$e);et=Rt.viewport,Re===0&&(e.setRenderTargetTextures(v,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(v))}let Ge=O[Re];Ge===void 0&&(Ge=new Gt,Ge.layers.enable(Re),Ge.viewport=new ot,O[Re]=Ge),Ge.matrix.fromArray($e.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray($e.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(et.x,et.y,et.width,et.height),Re===0&&(V.matrix.copy(Ge.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Te===!0&&V.cameras.push(Ge)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let Re=d.getDepthInformation(xe[0]);Re&&Re.isValid&&Re.texture&&u.init(Re,s.renderState)}if(me&&me.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let Re=0;Re<xe.length;Re++){let $e=xe[Re].camera;if($e){let et=p[$e];et||(et=new Rs,p[$e]=et);let Ge=d.getCameraImage($e);et.sourceTexture=Ge}}}}for(let xe=0;xe<A.length;xe++){let Te=E[xe],me=A[xe];Te!==null&&me!==void 0&&me.update(Te,pe,c||a)}Q&&Q(J,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),_=null}let De=new Gh;De.setAnimationLoop(Se),this.setAnimationLoop=function(J){Q=J},this.dispose=function(){}}},t0=new st,$h=new Le;$h.set(-1,0,0,0,1,0,0,0,1);function n0(i,e){function t(u,p){u.matrixAutoUpdate===!0&&u.updateMatrix(),p.value.copy(u.matrix)}function n(u,p){p.color.getRGB(u.fogColor.value,xl(i)),p.isFog?(u.fogNear.value=p.near,u.fogFar.value=p.far):p.isFogExp2&&(u.fogDensity.value=p.density)}function s(u,p,M,T,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(u,p):p.isMeshLambertMaterial?(r(u,p),p.envMap&&(u.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(u,p),d(u,p)):p.isMeshPhongMaterial?(r(u,p),h(u,p),p.envMap&&(u.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(u,p),f(u,p),p.isMeshPhysicalMaterial&&m(u,p,v)):p.isMeshMatcapMaterial?(r(u,p),_(u,p)):p.isMeshDepthMaterial?r(u,p):p.isMeshDistanceMaterial?(r(u,p),S(u,p)):p.isMeshNormalMaterial?r(u,p):p.isLineBasicMaterial?(a(u,p),p.isLineDashedMaterial&&o(u,p)):p.isPointsMaterial?l(u,p,M,T):p.isSpriteMaterial?c(u,p):p.isShadowMaterial?(u.color.value.copy(p.color),u.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(u,p){u.opacity.value=p.opacity,p.color&&u.diffuse.value.copy(p.color),p.emissive&&u.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(u.map.value=p.map,t(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.bumpMap&&(u.bumpMap.value=p.bumpMap,t(p.bumpMap,u.bumpMapTransform),u.bumpScale.value=p.bumpScale,p.side===Vt&&(u.bumpScale.value*=-1)),p.normalMap&&(u.normalMap.value=p.normalMap,t(p.normalMap,u.normalMapTransform),u.normalScale.value.copy(p.normalScale),p.side===Vt&&u.normalScale.value.negate()),p.displacementMap&&(u.displacementMap.value=p.displacementMap,t(p.displacementMap,u.displacementMapTransform),u.displacementScale.value=p.displacementScale,u.displacementBias.value=p.displacementBias),p.emissiveMap&&(u.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,u.emissiveMapTransform)),p.specularMap&&(u.specularMap.value=p.specularMap,t(p.specularMap,u.specularMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest);let M=e.get(p),T=M.envMap,v=M.envMapRotation;T&&(u.envMap.value=T,u.envMapRotation.value.setFromMatrix4(t0.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&u.envMapRotation.value.premultiply($h),u.reflectivity.value=p.reflectivity,u.ior.value=p.ior,u.refractionRatio.value=p.refractionRatio),p.lightMap&&(u.lightMap.value=p.lightMap,u.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,u.lightMapTransform)),p.aoMap&&(u.aoMap.value=p.aoMap,u.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,u.aoMapTransform))}function a(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,p.map&&(u.map.value=p.map,t(p.map,u.mapTransform))}function o(u,p){u.dashSize.value=p.dashSize,u.totalSize.value=p.dashSize+p.gapSize,u.scale.value=p.scale}function l(u,p,M,T){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.size.value=p.size*M,u.scale.value=T*.5,p.map&&(u.map.value=p.map,t(p.map,u.uvTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function c(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.rotation.value=p.rotation,p.map&&(u.map.value=p.map,t(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function h(u,p){u.specular.value.copy(p.specular),u.shininess.value=Math.max(p.shininess,1e-4)}function d(u,p){p.gradientMap&&(u.gradientMap.value=p.gradientMap)}function f(u,p){u.metalness.value=p.metalness,p.metalnessMap&&(u.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,u.metalnessMapTransform)),u.roughness.value=p.roughness,p.roughnessMap&&(u.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,u.roughnessMapTransform)),p.envMap&&(u.envMapIntensity.value=p.envMapIntensity)}function m(u,p,M){u.ior.value=p.ior,p.diffuseRoughness>0&&(u.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(u.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,u.diffuseRoughnessMapTransform))),p.sheen>0&&(u.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),u.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(u.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,u.sheenColorMapTransform)),p.sheenRoughnessMap&&(u.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,u.sheenRoughnessMapTransform))),p.clearcoat>0&&(u.clearcoat.value=p.clearcoat,u.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(u.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,u.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(u.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&u.clearcoatNormalScale.value.negate())),p.dispersion>0&&(u.dispersion.value=p.dispersion),p.retroreflectivity>0&&(u.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(u.iridescence.value=p.iridescence,u.iridescenceIOR.value=p.iridescenceIOR,u.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,u.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(u.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,u.iridescenceMapTransform)),p.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),p.transmission>0&&(u.transmission.value=p.transmission,u.transmissionSamplerMap.value=M.texture,u.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(u.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,u.transmissionMapTransform)),u.thickness.value=p.thickness,p.thicknessMap&&(u.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=p.attenuationDistance,u.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(u.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(u.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=p.specularIntensity,u.specularColor.value.copy(p.specularColor),p.specularColorMap&&(u.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,u.specularColorMapTransform)),p.specularIntensityMap&&(u.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,u.specularIntensityMapTransform))}function _(u,p){p.matcap&&(u.matcap.value=p.matcap)}function S(u,p){let M=e.get(p).light;u.referencePosition.value.setFromMatrixPosition(M.matrixWorld),u.nearDistance.value=M.shadow.camera.near,u.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i0(i,e,t,n){let s={},r={};function a(M,T){let v=T.program;n.uniformBlockBinding(M,v,s[M.id])}function o(M,T){let v=s[M.id];v===void 0&&(_(M),v=l(M),s[M.id]=v,M.addEventListener("dispose",u));let A=T.program;n.updateUBOMapping(M,A);let E=e.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){let T=i.createBuffer(),v=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,v,A),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(M){let T=s[M.id],v=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,g=v.length;E<g;E++){let b=v[E];if(Array.isArray(b))for(let D=0,P=b.length;D<P;D++)h(b[D],E,D,A);else h(b,E,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,T,v,A){if(f(M,T,v,A)===!0){let E=M.__offset,g=M.value;if(Array.isArray(g)){let b=0;for(let D=0;D<g.length;D++){let P=g[D],N=S(P,!0);d(P,M.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,M.__data)}}function d(M,T,v){typeof M=="number"||typeof M=="boolean"?T[v]=M:M.isMatrix3?(T[v]=M.elements[0],T[v+1]=M.elements[1],T[v+2]=M.elements[2],T[v+3]=0,T[v+4]=M.elements[3],T[v+5]=M.elements[4],T[v+6]=M.elements[5],T[v+7]=0,T[v+8]=M.elements[6],T[v+9]=M.elements[7],T[v+10]=M.elements[8],T[v+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-v),v):M.toArray(T,v)}function f(M,T,v,A){let E=M.value,g=T+"_"+v;if(Array.isArray(E)){A[g]===void 0&&(A[g]=[]);let b=A[g],D=!1;for(let P=0;P<E.length;P++)m(E[P],b,P)===!0&&(D=!0);return D}return m(E,A,g)}function m(M,T,v){if(T[v]===void 0)return typeof M=="number"||typeof M=="boolean"?T[v]=M:ArrayBuffer.isView(M)?T[v]=M.slice():T[v]=M.clone(),!0;{let A=T[v];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return T[v]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function _(M){let T=M.uniforms,v=0,A=16;for(let g=0,b=T.length;g<b;g++){let D=Array.isArray(T[g])?T[g]:[T[g]];for(let P=0,N=D.length;P<N;P++){let O=D[P],V=Array.isArray(O.value)?O.value:[O.value],C=Array.isArray(T[g])||Array.isArray(O.value),H=v;for(let G=0,te=V.length;G<te;G++){let X=V[G],K=S(X,C),Q=v%A,Se=Q%K.boundary,De=Q+Se;v+=Se,De!==0&&A-De<K.storage&&(v+=A-De),G===0&&(H=v),v+=K.storage}let q=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new q((v-H)/Float32Array.BYTES_PER_ELEMENT),O.__offset=H}}let E=v%A;return E>0&&(v+=A-E),M.__size=v,M.__cache={},this}function S(M,T){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=16,v.storage=48):M.isMatrix4?(v.boundary=16,v.storage=64):M.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function u(M){let T=M.target;T.removeEventListener("dispose",u),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:p}}var s0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cn=null;function r0(){return Cn===null&&(Cn=new Zr(s0,16,16,li,pn),Cn.name="DFG_LUT",Cn.minFilter=Ht,Cn.magFilter=Ht,Cn.wrapS=vn,Cn.wrapT=vn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}var no=class{constructor(e={}){let{canvas:t=uh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Xt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let S=m,u=new Set([Ma,Sa,va]),p=new Set([Xt,dn,ns,Mi,xa,ya]),M=new Uint32Array(4),T=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,E=null,g=[],b=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,O=null,V=null,C=null,H=null;this._outputColorSpace=It;let q=0,G=0,te=null,X=-1,K=null,Q=new ot,Se=new ot,De=null,J=new Pe(0),pe=0,xe=t.width,Te=t.height,me=1,Fe=null,dt=null,Re=new ot(0,0,xe,Te),$e=new ot(0,0,xe,Te),et=!1,Ge=new ti,Rt=new $r,gt=!1,Wt=!1,ct=new st,xn=new k,St=new ot,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function en(){return te===null?me:1}let L=n;function tn(y,I){return t.getContext(y,I)}let rt,at,ue,_t,Ae,Ne,w,x,F,ee,$,se,ce,j,Y,ae,R,Z,W,oe,ie,re,be;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){let I="webgl2";if(L=tn(I,y),L===null)throw tn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(y){throw t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ie("WebGLRenderer: "+y.message),y}function Be(){rt=new gm(L),rt.init(),ie=new Kg(L,rt),at=new rm(L,rt,e,ie),ue=new Zg(L,rt),at.reversedDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),V=L.createFramebuffer(),C=L.createFramebuffer(),H=L.createFramebuffer(),_t=new ym(L),Ae=new Fg,Ne=new $g(L,rt,ue,Ae,at,ie,_t),w=new mm(P),x=new vd(L),re=new im(L,x),F=new _m(L,x,_t,re),ee=new Sm(L,F,x,re,_t),Z=new vm(L,at,Ne),Y=new am(Ae),$=new Ug(P,w,rt,at,re,Y),se=new n0(P,Ae),ce=new Bg,j=new Wg(rt),R=new nm(P,w,ue,ee,_,l),ae=new Jg(P,ee,at),be=new i0(L,_t,at,ue),W=new sm(L,rt,_t),oe=new xm(L,rt,_t),_t.programs=$.programs,P.capabilities=at,P.extensions=rt,P.properties=Ae,P.renderLists=ce,P.shadowMap=ae,P.state=ue,P.info=_t}S!==Xt&&(D=new bm(S,t.width,t.height,o,s,r));let ne=new Fl(P,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=rt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=rt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(y){y!==void 0&&(me=y,this.setSize(xe,Te,!1))},this.getSize=function(y){return y.set(xe,Te)},this.setSize=function(y,I,z=!0){if(ne.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=y,Te=I,t.width=Math.floor(y*me),t.height=Math.floor(I*me),z===!0&&(t.style.width=y+"px",t.style.height=I+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(xe*me,Te*me).floor()},this.setDrawingBufferSize=function(y,I,z){xe=y,Te=I,me=z,t.width=Math.floor(y*z),t.height=Math.floor(I*z),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(S===Xt){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Q)},this.getViewport=function(y){return y.copy(Re)},this.setViewport=function(y,I,z,U){y.isVector4?Re.set(y.x,y.y,y.z,y.w):Re.set(y,I,z,U),ue.viewport(Q.copy(Re).multiplyScalar(en()).round())},this.getScissor=function(y){return y.copy($e)},this.setScissor=function(y,I,z,U){y.isVector4?$e.set(y.x,y.y,y.z,y.w):$e.set(y,I,z,U),ue.scissor(Se.copy($e).multiplyScalar(en()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(y){ue.setScissorTest(et=y)},this.setOpaqueSort=function(y){Fe=y},this.setTransparentSort=function(y){dt=y},this.getClearColor=function(y){return y.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,z=!0){let U=0;if(y){let B=!1;if(te!==null){let he=te.texture.format;B=u.has(he)}if(B){let he=te.texture.type,_e=p.has(he),le=R.getClearColor(),ge=R.getClearAlpha(),Me=le.r,Ue=le.g,He=le.b;_e?(M[0]=Me,M[1]=Ue,M[2]=He,M[3]=ge,L.clearBufferuiv(L.COLOR,0,M)):(T[0]=Me,T[1]=Ue,T[2]=He,T[3]=ge,L.clearBufferiv(L.COLOR,0,T))}else U|=L.COLOR_BUFFER_BIT}I&&(U|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(U|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),R.dispose(),ce.dispose(),j.dispose(),Ne.dispose(),Ae.dispose(),w.dispose(),ee.dispose(),F.dispose(),re.dispose(),be.dispose(),$.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Zl),ne.removeEventListener("sessionend",$l),ui.stop()};function Ee(y){y.preventDefault(),gl("WebGLRenderer: Context Lost."),N=!0}function Oe(){gl("WebGLRenderer: Context Restored."),N=!1;let y=_t.autoReset,I=ae.enabled,z=ae.autoUpdate,U=ae.needsUpdate,B=ae.type;Be(),_t.autoReset=y,ae.enabled=I,ae.autoUpdate=z,ae.needsUpdate=U,ae.type=B}function de(y){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ke(y){let I=y.target;I.removeEventListener("dispose",Ke),Mt(I)}function Mt(y){qn(y),Ae.remove(y)}function qn(y){let I=Ae.get(y).programs;I!==void 0&&(I.forEach(function(z){$.releaseProgram(z)}),y.isShaderMaterial&&$.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,z,U,B,he){I===null&&(I=Kt);let _e=B.isMesh&&B.matrixWorld.determinantAffine()<0,le=Lu(y,I,z,U,B);ue.setMaterial(U,_e);let ge=z.index,Me=1;if(U.wireframe===!0){if(ge=F.getWireframeAttribute(z),ge===void 0)return;Me=2}let Ue=z.drawRange,He=z.attributes.position,ye=Ue.start*Me,Ve=(Ue.start+Ue.count)*Me;he!==null&&(ye=Math.max(ye,he.start*Me),Ve=Math.min(Ve,(he.start+he.count)*Me)),ge!==null?(ye=Math.max(ye,0),Ve=Math.min(Ve,ge.count)):He!=null&&(ye=Math.max(ye,0),Ve=Math.min(Ve,He.count));let ft=Ve-ye;if(ft<0||ft===1/0)return;re.setup(B,U,le,z,ge);let nt,tt=W;if(ge!==null&&(nt=x.get(ge),tt=oe,tt.setIndex(nt)),B.isMesh)U.wireframe===!0?(ue.setLineWidth(U.wireframeLinewidth*en()),tt.setMode(L.LINES)):tt.setMode(L.TRIANGLES);else if(B.isLine){let Pt=U.linewidth;Pt===void 0&&(Pt=1),ue.setLineWidth(Pt*en()),B.isLineSegments?tt.setMode(L.LINES):B.isLineLoop?tt.setMode(L.LINE_LOOP):tt.setMode(L.LINE_STRIP)}else B.isPoints?tt.setMode(L.POINTS):B.isSprite&&tt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))tt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Pt=B._multiDrawStarts,ve=B._multiDrawCounts,zt=B._multiDrawCount,Ye=ge?x.get(ge).bytesPerElement:1,di=Ae.get(U).currentProgram.getUniforms();for(let Lt=0;Lt<zt;Lt++)di.setValue(L,"_gl_DrawID",Lt),tt.render(Pt[Lt]/Ye,ve[Lt])}else if(B.isInstancedMesh)tt.renderInstances(ye,ft,B.count);else if(z.isInstancedBufferGeometry){let Pt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ve=Math.min(z.instanceCount,Pt);tt.renderInstances(ye,ft,ve)}else tt.render(ye,ft)};function Jl(y,I,z,U){O!==null&&y.isNodeMaterial&&O.setObject(U,y),gt===!0&&Y.setState(y,z,!1),y.transparent===!0&&y.side===An&&y.forceSinglePass===!1?(y.side=Vt,y.needsUpdate=!0,hs(y,I,U),y.side=oi,y.needsUpdate=!0,hs(y,I,U),y.side=An):hs(y,I,U)}this.compile=function(y,I,z=null){z===null&&(z=y),O!==null&&O.renderStart(y,I,z),E=j.get(z),E.init(I),b.push(E),z.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),y!==z&&y.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),Wt=this.localClippingEnabled,gt=Y.init(this.clippingPlanes,Wt),gt===!0&&Y.setGlobalState(this.clippingPlanes,I),O!==null&&ae.render(E.state.shadowsArray,z,I);let U=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let he=B.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){let le=he[_e];Jl(le,z,I,B),U.add(le)}else Jl(he,z,I,B),U.add(he)}),E=b.pop(),O!==null&&O.renderEnd(),U},this.compileAsync=function(y,I,z=null){let U=this.compile(y,I,z);return new Promise(B=>{function he(){if(U.forEach(function(_e){let ge=Ae.get(_e).currentProgram;(ge===void 0||ge.isReady())&&U.delete(_e)}),U.size===0){B(y);return}setTimeout(he,10)}rt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let fo=null;function Iu(y){fo&&fo(y)}function Zl(){ui.stop()}function $l(){ui.start()}let ui=new Gh;ui.setAnimationLoop(Iu),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(y){fo=y,ne.setAnimationLoop(y),y===null?ui.stop():ui.start()},ne.addEventListener("sessionstart",Zl),ne.addEventListener("sessionend",$l),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(y,I);let z=ne.enabled===!0&&ne.isPresenting===!0,U=D!==null&&(te===null||z)&&D.begin(P,te);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(I),I=ne.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,I,te),E=j.get(y,b.length),E.init(I),E.state.textureUnits=Ne.getTextureUnits(),b.push(E),ct.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Rt.setFromArrayCamera(I):Ge.setFromProjectionMatrix(ct,sn,I.reversedDepth),Wt=this.localClippingEnabled,gt=Y.init(this.clippingPlanes,Wt),A=ce.get(y,g.length),A.init(),g.push(A),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let _e=P.xr.getDepthSensingMesh();_e!==null&&po(_e,I,-1/0,P.sortObjects)}po(y,I,0,P.sortObjects),A.finish(),O!==null&&O.updateLights(E.state.lightsArray),P.sortObjects===!0&&A.sort(Fe,dt),Qt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Qt&&R.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),gt===!0&&Y.beginShadows();let B=E.state.shadowsArray;if(ae.render(B,y,I),gt===!0&&Y.endShadows(),(U&&D.hasRenderPass())===!1){let _e=A.opaque,le=A.transmissive;if(E.setupLights(),I.isArrayCamera){let ge=I.cameras;if(le.length>0)for(let Me=0,Ue=ge.length;Me<Ue;Me++){let He=ge[Me];Ql(_e,le,y,He)}Qt&&R.render(y);for(let Me=0,Ue=ge.length;Me<Ue;Me++){let He=ge[Me];Kl(A,y,He,He.viewport)}}else le.length>0&&Ql(_e,le,y,I),Qt&&R.render(y),Kl(A,y,I)}te!==null&&G===0&&(Ne.updateMultisampleRenderTarget(te),Ne.updateRenderTargetMipmap(te)),U&&D.end(P),y.isScene===!0&&y.onAfterRender(P,y,I),re.resetDefaultState(),X=-1,K=null,b.pop(),b.length>0?(E=b[b.length-1],Ne.setTextureUnits(E.state.textureUnits),gt===!0&&Y.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,O!==null&&O.renderEnd()};function po(y,I,z,U){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){let _e=I.isArrayCamera?Rt:Ge;if(!y.frustumCulled||y.intersectsFrustum(_e)){U&&St.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ct);let le=ee.update(y),ge=y.material;ge.visible&&A.push(y,le,ge,z,St.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){let _e=I.isArrayCamera?Rt:Ge;if(!y.frustumCulled||y.intersectsFrustum(_e)){let le=ee.update(y),ge=y.material;if(U&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),St.copy(y.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),St.copy(le.boundingSphere.center)),St.applyMatrix4(y.matrixWorld).applyMatrix4(ct)),Array.isArray(ge)){let Me=le.groups;for(let Ue=0,He=Me.length;Ue<He;Ue++){let ye=Me[Ue],Ve=ge[ye.materialIndex];Ve&&Ve.visible&&A.push(y,le,Ve,z,St.z,ye,I)}}else ge.visible&&A.push(y,le,ge,z,St.z,null,I)}}}let he=y.children;for(let _e=0,le=he.length;_e<le;_e++)po(he[_e],I,z,U)}function Kl(y,I,z,U){let{opaque:B,transmissive:he,transparent:_e}=y;E.setupLightsView(z),gt===!0&&Y.setGlobalState(P.clippingPlanes,z),U&&ue.viewport(Q.copy(U)),B.length>0&&dr(B,I,z),he.length>0&&dr(he,I,z),_e.length>0&&dr(_e,I,z),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ql(y,I,z,U){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[U.id]===void 0){let ye=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[U.id]=new Jt(1,1,{generateMipmaps:!0,type:ye?pn:Xt,minFilter:Vn,samples:Math.max(4,at.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let he=E.state.transmissionRenderTarget[U.id],_e=U.viewport||Q;he.setSize(_e.z*P.transmissionResolutionScale,_e.w*P.transmissionResolutionScale);let le=P.getRenderTarget(),ge=P.getActiveCubeFace(),Me=P.getActiveMipmapLevel();P.setRenderTarget(he),P.getClearColor(J),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),Qt&&R.render(z);let Ue=P.toneMapping;P.toneMapping=Rn;let He=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),E.setupLightsView(U),gt===!0&&Y.setGlobalState(P.clippingPlanes,U),dr(y,z,U),Ne.updateMultisampleRenderTarget(he),Ne.updateRenderTargetMipmap(he),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ve=0,ft=I.length;Ve<ft;Ve++){let nt=I[Ve],{object:tt,geometry:Pt,material:ve,group:zt}=nt;if(ve.side===An&&tt.layers.test(U.layers)){let Ye=ve.side;ve.side=Vt,ve.needsUpdate=!0,ec(tt,z,U,Pt,ve,zt),ve.side=Ye,ve.needsUpdate=!0,ye=!0}}ye===!0&&(Ne.updateMultisampleRenderTarget(he),Ne.updateRenderTargetMipmap(he))}P.setRenderTarget(le,ge,Me),P.setClearColor(J,pe),He!==void 0&&(U.viewport=He),P.toneMapping=Ue}function dr(y,I,z){let U=I.isScene===!0?I.overrideMaterial:null;for(let B=0,he=y.length;B<he;B++){let _e=y[B],{object:le,geometry:ge,group:Me}=_e,Ue=_e.material;Ue.allowOverride===!0&&U!==null&&(Ue=U),le.layers.test(z.layers)&&ec(le,I,z,ge,Ue,Me)}}function ec(y,I,z,U,B,he){O!==null&&B.isNodeMaterial&&O.setObject(y,B),y.onBeforeRender(P,I,z,U,B,he),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(P,I,z,U,y,he),B.transparent===!0&&B.side===An&&B.forceSinglePass===!1?(B.side=Vt,B.needsUpdate=!0,P.renderBufferDirect(z,I,U,B,y,he),B.side=oi,B.needsUpdate=!0,P.renderBufferDirect(z,I,U,B,y,he),B.side=An):P.renderBufferDirect(z,I,U,B,y,he),y.onAfterRender(P,I,z,U,B,he)}function tc(y){let I=0;for(let z of y)z.texture!==null&&I++;return I}function hs(y,I,z){I.isScene!==!0&&(I=Kt);let U=Ae.get(y),B=E.state.lights,he=E.state.shadowsArray,_e=B.state.version,le=$.getParameters(y,B.state,he,I,z,E.state.lightProbeGridArray),ge=$.getProgramCacheKey(le),Me=U.programs;U.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,U.fog=I.fog;let Ue=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;U.envMap=w.get(y.envMap||U.environment,Ue),U.envMapRotation=U.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Me===void 0&&(y.addEventListener("dispose",Ke),Me=new Map,U.programs=Me,U.programVariants=new Map);let He=Me.get(ge);if(He!==void 0){if(U.currentProgram===He&&U.lightsStateVersion===_e)return ic(y,le),He}else le.uniforms=$.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,z,le),y.onBeforeCompile(le,P),He=$.acquireProgram(le,ge),Me.set(ge,He),U.uniforms=le.uniforms;let ye=U.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ye.clippingPlanes=Y.uniform),ic(y,le),U.needsLights=Du(y),U.lightsStateVersion=_e,U.needsLights&&(ye.ambientLightColor.value=B.state.ambient,ye.lightProbe.value=B.state.probe,ye.sunLights.value=B.state.sun,ye.sunLightShadows.value=B.state.sunShadow,ye.directionalLights.value=B.state.directional,ye.directionalLightShadows.value=B.state.directionalShadow,ye.spotLights.value=B.state.spot,ye.spotLightShadows.value=B.state.spotShadow,ye.rectAreaLights.value=B.state.rectArea,ye.ltc_1.value=B.state.rectAreaLTC1,ye.ltc_2.value=B.state.rectAreaLTC2,ye.pointLights.value=B.state.point,ye.pointLightShadows.value=B.state.pointShadow,ye.hemisphereLights.value=B.state.hemi,ye.sunShadowMatrix.value=B.state.sunShadowMatrix,ye.sunShadowCascade.value=B.state.sunShadowCascade,ye.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ye.spotLightMatrix.value=B.state.spotLightMatrix,ye.spotLightMap.value=B.state.spotLightMap,ye.pointShadowMatrix.value=B.state.pointShadowMatrix),U.numLightProbeGrids=tc(E.state.lightProbeGridArray),U.currentProgram=He,U.uniformsList=null,He}function Pu(y,I,z,U,B){let he=Ae.get(y),_e=he.currentProgram.id+","+U+","+B,le=he.programVariants.get(_e);return le===void 0?(le=hs(y,I,z),he.programVariants.set(_e,le)):(he.currentProgram=le,he.uniformsList=null,he.outputColorSpace=U,he.toneMapping=B),le}function nc(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=is.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function ic(y,I){let z=Ae.get(y);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Lu(y,I,z,U,B){I.isScene!==!0&&(I=Kt),Ne.resetTextureUnits();let he=I.fog,_e=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?I.environment:null,le=te===null?P.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:We.workingColorSpace,ge=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Me=w.get(U.envMap||_e,ge),Ue=U.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,He=!!z.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ye=!!z.morphAttributes.position,Ve=!!z.morphAttributes.normal,ft=!!z.morphAttributes.color,nt=Rn;U.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(nt=P.toneMapping);let tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pt=tt!==void 0?tt.length:0,ve=Ae.get(U),zt=E.state.lights;if(gt===!0&&(Wt===!0||y!==K)){let ht=y===K&&U.id===X;Y.setState(U,y,ht)}let Ye=!1,di=!1;U.version===ve.__version?ve.needsLights&&ve.lightsStateVersion!==zt.state.version||B.isBatchedMesh&&ve.batching===!1||!B.isBatchedMesh&&ve.batching===!0||B.isBatchedMesh&&ve.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&ve.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&ve.instancing===!1||!B.isInstancedMesh&&ve.instancing===!0||B.isSkinnedMesh&&ve.skinning===!1||!B.isSkinnedMesh&&ve.skinning===!0||B.isInstancedMesh&&ve.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ve.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ve.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ve.instancingMorph===!1&&B.morphTexture!==null||ve.envMap!==Me||U.fog===!0&&ve.fog!==he||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Y.numPlanes||ve.numIntersection!==Y.numIntersection)||ve.vertexAlphas!==Ue||ve.vertexTangents!==He||ve.morphTargets!==ye||ve.morphNormals!==Ve||ve.morphColors!==ft||ve.morphTargetsCount!==Pt||ve.numLightProbeGrids!==tc(E.state.lightProbeGridArray)?Ye=!0:(ve.outputColorSpace!==le||ve.toneMapping!==nt)&&(di=!0):(Ye=!0,ve.__version=U.version);let Lt=ve.currentProgram;(Ye===!0||di===!0)&&(Lt=di===!0?Pu(U,I,B,le,nt):hs(U,I,B),O&&U.isNodeMaterial&&O.onUpdateProgram(U,Lt,ve));let fr=!1,jn=!1,fi=!1,qe=Lt.getUniforms(),Ct=ve.uniforms;if(ue.useProgram(Lt.program)&&(fr=!0,jn=!0,fi=!0),U.id!==X&&(X=U.id,jn=!0),fr||K!==y){ue.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),qe.setValue(L,"projectionMatrix",y.projectionMatrix),qe.setValue(L,"viewMatrix",y.matrixWorldInverse);let bt=qe.map.cameraPosition;bt!==void 0&&bt.setValue(L,xn.setFromMatrixPosition(y.matrixWorld)),at.logarithmicDepthBuffer&&qe.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&qe.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),K!==y&&(K=y,jn=!0,fi=!0)}if(ve.needsLights&&(zt.state.sunShadowMap.length>0&&qe.setValue(L,"sunShadowMap",zt.state.sunShadowMap,Ne),zt.state.directionalShadowMap.length>0&&qe.setValue(L,"directionalShadowMap",zt.state.directionalShadowMap,Ne),zt.state.spotShadowMap.length>0&&qe.setValue(L,"spotShadowMap",zt.state.spotShadowMap,Ne),zt.state.pointShadowMap.length>0&&qe.setValue(L,"pointShadowMap",zt.state.pointShadowMap,Ne)),B.isSkinnedMesh){qe.setOptional(L,B,"bindMatrix"),qe.setOptional(L,B,"bindMatrixInverse");let ht=B.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),qe.setValue(L,"boneTexture",ht.boneTexture,Ne))}B.isBatchedMesh&&(qe.setOptional(L,B,"batchingTexture"),qe.setValue(L,"batchingTexture",B._matricesTexture,Ne),qe.setOptional(L,B,"batchingIdTexture"),qe.setValue(L,"batchingIdTexture",B._indirectTexture,Ne),qe.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&qe.setValue(L,"batchingColorTexture",B._colorsTexture,Ne));let an=z.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Z.update(B,z,Lt),(jn||ve.receiveShadow!==B.receiveShadow)&&(ve.receiveShadow=B.receiveShadow,qe.setValue(L,"receiveShadow",B.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&I.environment!==null&&(Ct.envMapIntensity.value=I.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=r0()),jn){if(qe.setValue(L,"toneMappingExposure",P.toneMappingExposure),ve.needsLights&&Nu(Ct,fi),he&&U.fog===!0&&se.refreshFogUniforms(Ct,he),se.refreshMaterialUniforms(Ct,U,me,Te,E.state.transmissionRenderTarget[y.id]),ve.needsLights&&ve.numLightProbeGrids>0){let ht=v,bt=0;for(let Ln of E.state.lightProbeGridArray)Ln.texture!==null&&(ht.textures[bt]=Ln.texture,ht.min[bt]=Ln.boundingBox.min,ht.max[bt]=Ln.boundingBox.max,ht.resolution[bt]=Ln.resolution,bt++);for(let Ln in ht)ht[Ln].length=bt;Ct.probesSH.value=ht.textures,Ct.probesMin.value=ht.min,Ct.probesMax.value=ht.max,Ct.probesResolution.value=ht.resolution}is.upload(L,nc(ve),Ct,Ne)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(is.upload(L,nc(ve),Ct,Ne),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&qe.setValue(L,"center",B.center),qe.setValue(L,"modelViewMatrix",B.modelViewMatrix),qe.setValue(L,"normalMatrix",B.normalMatrix),qe.setValue(L,"modelMatrix",B.matrixWorld),U.uniformsGroups!==void 0){let ht=U.uniformsGroups;for(let bt=0,Ln=ht.length;bt<Ln;bt++){let rc=ht[bt];be.update(rc,Lt),be.bind(rc,Lt)}}return Lt}function Nu(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Du(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(y,I,z){let U=Ae.get(y);U.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),Ae.get(y.texture).__webglTexture=I,Ae.get(y.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:z,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let z=Ae.get(y);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,z=0){te=y,q=I,G=z;let U=null,B=!1,he=!1;if(y){let le=Ae.get(y);if(le.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(L.FRAMEBUFFER,le.__webglFramebuffer),Q.copy(y.viewport),Se.copy(y.scissor),De=y.scissorTest,ue.viewport(Q),ue.scissor(Se),ue.setScissorTest(De),X=-1;return}else if(le.__webglFramebuffer===void 0)Ne.setupRenderTarget(y);else if(le.__hasExternalTextures)Ne.rebindTextures(y,Ae.get(y.texture).__webglTexture,Ae.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ue=y.depthTexture;if(le.__boundDepthTexture!==Ue){if(Ue!==null&&Ae.has(Ue)&&(y.width!==Ue.image.width||y.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(y)}}let ge=y.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(he=!0);let Me=Ae.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Me[I])?U=Me[I][z]:U=Me[I],B=!0):y.samples>0&&Ne.useMultisampledRTT(y)===!1?U=Ae.get(y).__webglMultisampledFramebuffer:Array.isArray(Me)?U=Me[z]:U=Me,Q.copy(y.viewport),Se.copy(y.scissor),De=y.scissorTest}else Q.copy(Re).multiplyScalar(me).floor(),Se.copy($e).multiplyScalar(me).floor(),De=et;if(z!==0&&(U=V),ue.bindFramebuffer(L.FRAMEBUFFER,U)&&ue.drawBuffers(y,U),ue.viewport(Q),ue.scissor(Se),ue.setScissorTest(De),B){let le=Ae.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,le.__webglTexture,z)}else if(he){let le=I;for(let ge=0;ge<y.textures.length;ge++){let Me=Ae.get(y.textures[ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ge,Me.__webglTexture,z,le)}}else if(y!==null&&z!==0){let le=Ae.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,le.__webglTexture,z)}X=-1};function sc(y){let I=Ae.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=at.textureFormatReadable(y.format),I.__typeReadable=at.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,z,U,B,he,_e,le=0){if(!(y&&y.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ae.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e],Array.isArray(ge)&&(ge=ge[0])),ge){ue.bindFramebuffer(L.FRAMEBUFFER,ge);try{let Me=y.textures[le],Ue=Me.format,He=Me.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);let ye=sc(Me);if(ye.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-U&&z>=0&&z<=y.height-B&&L.readPixels(I,z,U,B,ie.convert(Ue),ie.convert(He),he)}finally{let Me=te!==null?Ae.get(te).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(y,I,z,U,B,he,_e,le=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ae.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e],Array.isArray(ge)&&(ge=ge[0])),ge)if(I>=0&&I<=y.width-U&&z>=0&&z<=y.height-B){ue.bindFramebuffer(L.FRAMEBUFFER,ge);let Me=y.textures[le],Ue=Me.format,He=Me.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);let ye=sc(Me);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(I,z,U,B,ie.convert(Ue),ie.convert(He),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let ft=te!==null?Ae.get(te).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,ft);let nt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fh(L,nt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ve),L.deleteSync(nt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,z=0){let U=Math.pow(2,-z),B=Math.floor(y.image.width*U),he=Math.floor(y.image.height*U),_e=I!==null?I.x:0,le=I!==null?I.y:0;Ne.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,_e,le,B,he),ue.unbindTexture()},this.copyTextureToTexture=function(y,I,z=null,U=null,B=0,he=0){let _e,le,ge,Me,Ue,He,ye,Ve,ft,nt=y.isCompressedTexture?y.mipmaps[he]:y.image;if(z!==null)_e=z.max.x-z.min.x,le=z.max.y-z.min.y,ge=z.isBox3?z.max.z-z.min.z:1,Me=z.min.x,Ue=z.min.y,He=z.isBox3?z.min.z:0;else{let qe=Math.pow(2,-B);_e=Math.floor(nt.width*qe),le=Math.floor(nt.height*qe),y.isDataArrayTexture?ge=nt.depth:y.isData3DTexture?ge=Math.floor(nt.depth*qe):ge=1,Me=0,Ue=0,He=0}U!==null?(ye=U.x,Ve=U.y,ft=U.z):(ye=0,Ve=0,ft=0);let tt=ie.convert(I.format),Pt=ie.convert(I.type),ve;I.isData3DTexture?(Ne.setTexture3D(I,0),ve=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ne.setTexture2DArray(I,0),ve=L.TEXTURE_2D_ARRAY):(Ne.setTexture2D(I,0),ve=L.TEXTURE_2D),ue.activeTexture(L.TEXTURE0),ue.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),ue.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ue.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);let zt=ue.getParameter(L.UNPACK_ROW_LENGTH),Ye=ue.getParameter(L.UNPACK_IMAGE_HEIGHT),di=ue.getParameter(L.UNPACK_SKIP_PIXELS),Lt=ue.getParameter(L.UNPACK_SKIP_ROWS),fr=ue.getParameter(L.UNPACK_SKIP_IMAGES);ue.pixelStorei(L.UNPACK_ROW_LENGTH,nt.width),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nt.height),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),ue.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,He);let jn=y.isDataArrayTexture||y.isData3DTexture,fi=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let qe=Ae.get(y),Ct=Ae.get(I),an=Ae.get(qe.__renderTarget),ht=Ae.get(Ct.__renderTarget);ue.bindFramebuffer(L.READ_FRAMEBUFFER,an.__webglFramebuffer),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let bt=0;bt<ge;bt++)jn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(y).__webglTexture,B,He+bt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(I).__webglTexture,he,ft+bt)),L.blitFramebuffer(Me,Ue,Me+_e,Ue+le,ye,Ve,ye+_e,Ve+le,L.DEPTH_BUFFER_BIT,L.NEAREST);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||Ae.has(y)){let qe=Ae.get(y),Ct=Ae.get(I);ue.bindFramebuffer(L.READ_FRAMEBUFFER,C),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,H);for(let an=0;an<ge;an++)jn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qe.__webglTexture,B,He+an):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qe.__webglTexture,B),fi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ct.__webglTexture,he,ft+an):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ct.__webglTexture,he),B!==0?L.blitFramebuffer(Me,Ue,Me+_e,Ue+le,ye,Ve,ye+_e,Ve+le,L.COLOR_BUFFER_BIT,L.NEAREST):fi?L.copyTexSubImage3D(ve,he,ye,Ve,ft+an,Me,Ue,_e,le):L.copyTexSubImage2D(ve,he,ye,Ve,Me,Ue,_e,le);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else fi?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(ve,he,ye,Ve,ft,_e,le,ge,tt,Pt,nt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(ve,he,ye,Ve,ft,_e,le,ge,tt,nt.data):L.texSubImage3D(ve,he,ye,Ve,ft,_e,le,ge,tt,Pt,nt):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,ye,Ve,_e,le,tt,Pt,nt.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,ye,Ve,nt.width,nt.height,tt,nt.data):L.texSubImage2D(L.TEXTURE_2D,he,ye,Ve,_e,le,tt,Pt,nt);ue.pixelStorei(L.UNPACK_ROW_LENGTH,zt),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ye),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,di),ue.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,fr),he===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&L.generateMipmap(ve),ue.unbindTexture()},this.initRenderTarget=function(y){Ae.get(y).__webglFramebuffer===void 0&&Ne.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ne.setTextureCube(y,0):y.isData3DTexture?Ne.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ne.setTexture2DArray(y,0):Ne.setTexture2D(y,0),ue.unbindTexture()},this.resetState=function(){q=0,G=0,te=null,ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var ro={rooms:[{id:"lobby",ja:"\u30ED\u30D3\u30FC",en:"Lobby",grid:[0,0],color:"#e9dcc4",floor:"#9a7b55",intro:null},{id:"hall",ja:"\u3069\u3046\u3076\u3064\u306E \u306A\u304B\u307E",en:"Animal Groups",grid:[0,1],color:"#f1e6cf",floor:"#8a6a45",intro:{ja:"\u52D5\u7269\u306F \u4F53\u306E \u3068\u304F\u3061\u3087\u3046\u3067 6\u3064\u306E \u306A\u304B\u307E\u306B \u5206\u3051\u3089\u308C\u307E\u3059\u3002\u305D\u308C\u305E\u308C\u306E \u30C9\u30A2\u306E \u5148\u306B\u3001\u4E16\u754C\u306E \u3044\u308D\u3044\u308D\u306A \u3059\u307F\u304B\u306E \u52D5\u7269\u304C \u307E\u3063\u3066\u3044\u307E\u3059\uFF01",en:"Animal groups"}},{id:"ocean",ja:"\u6D77\u306E \u52D5\u7269",en:"Ocean",grid:[-1,1],color:"#bfe0ef",floor:"#5d8fae",intro:{ja:"\u5730\u7403\u306E \u8868\u9762\u306E 7\u308F\u308A\u306F \u6D77\u3067\u3059\u3002\u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u52D5\u7269\u3082\u3001\u6D77\u306B \u3059\u3093\u3067\u3044\u307E\u3059\u3002",en:"ocean"}},{id:"polar",ja:"\u5317\u6975\u3068 \u5357\u6975",en:"Polar Regions",grid:[-1,2],color:"#e8f3fa",floor:"#a9c4d6",intro:{ja:"\u5317\u6975(Arctic)\u3068 \u5357\u6975(Antarctica)\u306F\u3001\u5730\u7403\u306E \u5317\u3068 \u5357\u306E \u306F\u3057\u3063\u3053\u3002\u30DB\u30C3\u30AD\u30E7\u30AF\u30B0\u30DE\u306F \u5317\u6975\u3001\u30DA\u30F3\u30AE\u30F3\u306F \u5357\u6975\u306B \u3059\u3080\u306E\u3067\u30012\u3064\u306F \u51FA\u4F1A\u3044\u307E\u305B\u3093\uFF01",en:"polar"}},{id:"rainforest",ja:"\u306D\u3063\u305F\u3044\u3046\u308A\u3093",en:"Rainforest",grid:[0,2],color:"#cfe6c2",floor:"#4f7a45",intro:{ja:"1\u5E74\u4E2D \u3042\u305F\u305F\u304B\u304F\u3066\u3001\u96E8\u304C \u305F\u304F\u3055\u3093 \u3075\u308B \u68EE\u3002\u4E16\u754C\u306E \u751F\u304D\u3082\u306E\u306E \u534A\u5206 \u3044\u3058\u3087\u3046\u304C \u3053\u3053\u306B \u3044\u308B\u3068 \u3044\u308F\u308C\u307E\u3059\u3002",en:"rainforest"}},{id:"savanna",ja:"\u30B5\u30D0\u30F3\u30CA",en:"Savanna",grid:[1,1],color:"#f4e2b0",floor:"#b08a4a",intro:{ja:"\u6728\u304C \u5C11\u3057\u3060\u3051 \u751F\u3048\u305F\u3001\u3072\u308D\u3044 \u8349\u539F\u3002\u96E8\u306E \u304D\u305B\u3064\u3068 \u304B\u3093\u305D\u3046\u3057\u305F \u304D\u305B\u3064\u304C \u3042\u308A\u307E\u3059\u3002",en:"savanna"}},{id:"desert",ja:"\u3055\u3070\u304F",en:"Desert",grid:[1,2],color:"#f6dcb8",floor:"#c79a62",intro:{ja:"\u96E8\u304C \u307B\u3068\u3093\u3069 \u3075\u3089\u306A\u3044 \u5834\u6240\u3002\u663C\u306F \u3068\u3066\u3082 \u6691\u304F\u3001\u591C\u306F \u5BD2\u304F \u306A\u308B \u3053\u3068\u3082 \u3042\u308A\u307E\u3059\u3002\u52D5\u7269\u305F\u3061\u306F \u6C34\u3092 \u5927\u5207\u306B \u3057\u307E\u3059\u3002",en:"desert"}},{id:"japan",ja:"\u65E5\u672C\u306E \u52D5\u7269",en:"Animals of Japan",grid:[0,3],color:"#f3e9dc",floor:"#7d5a3c",intro:{ja:"\u65E5\u672C\u306B\u306F\u3001\u65E5\u672C\u306B\u3057\u304B \u3044\u306A\u3044 \u52D5\u7269\u304C \u305F\u304F\u3055\u3093 \u3044\u307E\u3059\u3002\u9577\u5D0E\u770C\u306E \u5BFE\u99AC\u306B\u3082\u3001\u3068\u304F\u3079\u3064\u306A \u30CD\u30B3\u304C \u3044\u307E\u3059\u3088\u3002",en:"Japan"}},{id:"forest",ja:"\u68EE\u306E \u52D5\u7269",en:"Forest",grid:[1,3],color:"#d8e4c8",floor:"#6b5838",intro:{ja:"\u6625\u30FB\u590F\u30FB\u79CB\u30FB\u51AC\u304C \u3042\u308B \u5730\u3044\u304D\u306E \u68EE\u3084\u3001\u5C71\u306E \u68EE\u3002\u6728\u306E \u5B9F\u3084 \u8449\u3063\u3071\u304C \u52D5\u7269\u306E \u3054\u306F\u3093\u306B \u306A\u308A\u307E\u3059\u3002",en:"forest"}}],doors:[["lobby","hall"],["hall","ocean"],["hall","savanna"],["hall","rainforest"],["ocean","polar"],["polar","rainforest"],["rainforest","desert"],["savanna","desert"],["rainforest","japan"],["japan","forest"],["desert","forest"]],groups:[{id:"mammal",ja:"\u307B\u306B\u3085\u3046\u308B\u3044",en:"mammals",wiki:"Red fox",animal:["\u30AD\u30C4\u30CD","fox"],ja_text:"\u304A\u304B\u3042\u3055\u3093\u306E \u304A\u3061\u3061\u3067 \u8D64\u3061\u3083\u3093\u3092 \u305D\u3060\u3066\u307E\u3059\u3002\u4F53\u306B \u6BDB\u304C \u3042\u308A\u307E\u3059\u3002\u4EBA\u3082 \u307B\u306B\u3085\u3046\u308B\u3044\uFF01",img:"img/g_mammal.jpg"},{id:"bird",ja:"\u9CE5",en:"birds",wiki:"Common kingfisher",animal:["\u30AB\u30EF\u30BB\u30DF","kingfisher"],ja_text:"\u306F\u306D\u3068 \u304F\u3061\u3070\u3057\u304C \u3042\u308A\u3001\u304B\u305F\u3044 \u304B\u3089\u306E \u305F\u307E\u3054\u3092 \u3046\u307F\u307E\u3059\u3002\u3068\u3079\u306A\u3044 \u9CE5\u3082 \u3044\u307E\u3059\u3002",img:"img/g_bird.jpg"},{id:"reptile",ja:"\u306F\u3061\u3085\u3046\u308B\u3044",en:"reptiles",wiki:"Panther chameleon",animal:["\u30AB\u30E1\u30EC\u30AA\u30F3","chameleon"],ja_text:"\u4F53\u306F \u3046\u308D\u3053\u3067 \u304A\u304A\u308F\u308C\u3066 \u3044\u307E\u3059\u3002\u30D8\u30D3\u30FB\u30C8\u30AB\u30B2\u30FB\u30AB\u30E1\u30FB\u30EF\u30CB\u306E \u306A\u304B\u307E\u3002",img:"img/g_reptile.jpg"},{id:"amphibian",ja:"\u308A\u3087\u3046\u305B\u3044\u308B\u3044",en:"amphibians",wiki:"Agalychnis callidryas",animal:["\u30A2\u30AB\u30E1\u30A2\u30DE\u30AC\u30A8\u30EB","red-eyed tree frog"],ja_text:"\u5B50\u3069\u3082\u306E \u3068\u304D\u306F \u6C34\u306E \u4E2D\u3001\u5927\u4EBA\u306B \u306A\u308B\u3068 \u308A\u304F\u3067\u3082 \u304F\u3089\u305B\u307E\u3059\u3002\u30AB\u30A8\u30EB\u3084 \u30A4\u30E2\u30EA\u306E \u306A\u304B\u307E\u3002",img:"img/g_amphibian.jpg"},{id:"fish",ja:"\u9B5A",en:"fish",wiki:"Ocellaris clownfish",animal:["\u30AB\u30AF\u30EC\u30AF\u30DE\u30CE\u30DF","clownfish"],ja_text:"\u6C34\u306E \u4E2D\u3067 \u3048\u3089\u3092 \u3064\u304B\u3063\u3066 \u3053\u304D\u3085\u3046 \u3057\u307E\u3059\u3002\u3072\u308C\u3067 \u304A\u3088\u304E\u307E\u3059\u3002",img:"img/g_fish.jpg"},{id:"insect",ja:"\u3053\u3093\u866B",en:"insects",wiki:"Coccinella septempunctata",animal:["\u30CA\u30CA\u30DB\u30B7\u30C6\u30F3\u30C8\u30A6","ladybug"],ja_text:"\u4F53\u304C \u982D\u30FB\u3080\u306D\u30FB\u306F\u3089\u306E 3\u3064\u306B \u5206\u304B\u308C\u3001\u8DB3\u304C 6\u672C \u3042\u308A\u307E\u3059\u3002",img:"img/g_insect.jpg"}],animals:[{id:"loggerhead",room:"ocean",wiki:"Loggerhead sea turtle",ja:"\u30A2\u30AB\u30A6\u30DF\u30AC\u30E1",en:"loggerhead sea turtle",group:"reptile",status:"VU",countries:[["\u65E5\u672C","Japan"],["\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2","Australia"],["\u30A2\u30E1\u30EA\u30AB","the USA"],["\u30AA\u30DE\u30FC\u30F3","Oman"]],eats:[["\u30AF\u30E9\u30B2","jellyfish"],["\u30AB\u30CB","crabs"],["\u8C9D","shellfish"]],fact:"\u65E5\u672C\u306E \u3059\u306A\u306F\u307E\u306B\u3082 \u305F\u307E\u3054\u3092 \u3046\u307F\u306B \u6765\u307E\u3059\u3002\u5317\u592A\u5E73\u6D0B\u306E \u30A2\u30AB\u30A6\u30DF\u30AC\u30E1\u306E \u307B\u3068\u3093\u3069\u306F\u3001\u65E5\u672C\u306E \u6D77\u5CB8\u3067 \u751F\u307E\u308C\u307E\u3059\u3002",img:"img/loggerhead.jpg"},{id:"bluewhale",room:"ocean",wiki:"Blue whale",ja:"\u30B7\u30ED\u30CA\u30AC\u30B9\u30AF\u30B8\u30E9",en:"blue whale",group:"mammal",status:"EN",countries:[["\u592A\u5E73\u6D0B","the Pacific Ocean"],["\u5927\u897F\u6D0B","the Atlantic Ocean"],["\u30A4\u30F3\u30C9\u6D0B","the Indian Ocean"],["\u5357\u6975\u6D77","the Southern Ocean"]],eats:[["\u30AA\u30AD\u30A2\u30DF(\u5C0F\u3055\u306A \u30A8\u30D3\u306E \u306A\u304B\u307E)","krill"]],fact:"\u5730\u7403\u306E \u308C\u304D\u3057\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u52D5\u7269\u3002\u9577\u3055\u306F 30m\u3061\u304B\u304F\u306B \u306A\u308A\u3001\u304D\u3087\u3046\u308A\u3085\u3046\u3088\u308A\u3082 \u5927\u304D\u3044\u3067\u3059\uFF01",img:"img/bluewhale.jpg"},{id:"dolphin",room:"ocean",wiki:"Common bottlenose dolphin",ja:"\u30CF\u30F3\u30C9\u30A6\u30A4\u30EB\u30AB",en:"bottlenose dolphin",group:"mammal",status:"LC",countries:[["\u65E5\u672C","Japan"],["\u30A2\u30E1\u30EA\u30AB","the USA"],["\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2","Australia"],["\u30E1\u30AD\u30B7\u30B3","Mexico"]],eats:[["\u9B5A","fish"],["\u30A4\u30AB","squid"]],fact:"1\u982D\u305A\u3064 \u81EA\u5206\u3060\u3051\u306E \u300C\u540D\u524D\u306E \u53E3\u3076\u3048\u300D\u3092 \u3082\u3063\u3066\u3044\u3066\u3001\u306A\u304B\u307E\u3092 \u3088\u3073\u3042\u3044\u307E\u3059\u3002",img:"img/dolphin.jpg"},{id:"whaleshark",room:"ocean",wiki:"Whale shark",ja:"\u30B8\u30F3\u30D9\u30A8\u30B6\u30E1",en:"whale shark",group:"fish",status:"EN",countries:[["\u65E5\u672C","Japan"],["\u30D5\u30A3\u30EA\u30D4\u30F3","the Philippines"],["\u30E1\u30AD\u30B7\u30B3","Mexico"],["\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2","Australia"]],eats:[["\u30D7\u30E9\u30F3\u30AF\u30C8\u30F3","plankton"]],fact:"\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u9B5A\u3002\u3067\u3082 \u98DF\u3079\u308B\u306E\u306F \u5C0F\u3055\u306A \u30D7\u30E9\u30F3\u30AF\u30C8\u30F3\u3002\u4EBA\u3092 \u304A\u305D\u3046 \u3053\u3068\u306F \u3042\u308A\u307E\u305B\u3093\u3002",img:"img/whaleshark.jpg"},{id:"seaotter",room:"ocean",wiki:"Sea otter",ja:"\u30E9\u30C3\u30B3",en:"sea otter",group:"mammal",status:"EN",countries:[["\u30A2\u30E1\u30EA\u30AB","the USA"],["\u30ED\u30B7\u30A2","Russia"],["\u30AB\u30CA\u30C0","Canada"],["\u65E5\u672C(\u5317\u6D77\u9053)","Japan"]],eats:[["\u30A6\u30CB","sea urchins"],["\u8C9D","clams"],["\u30AB\u30CB","crabs"]],fact:"\u304A\u306A\u304B\u306E \u4E0A\u3067 \u77F3\u3092 \u3064\u304B\u3063\u3066 \u8C9D\u3092 \u308F\u308A\u307E\u3059\u3002\u306D\u308B \u3068\u304D\u306F \u6D77\u305D\u3046\u3092 \u4F53\u306B \u307E\u3044\u3066\u3001\u306A\u304C\u3055\u308C\u306A\u3044\u3088\u3046\u306B \u3057\u307E\u3059\u3002",img:"img/seaotter.jpg"},{id:"manta",room:"ocean",wiki:"Giant oceanic manta ray",ja:"\u30AA\u30CB\u30A4\u30C8\u30DE\u30AD\u30A8\u30A4(\u30DE\u30F3\u30BF)",en:"giant manta ray",group:"fish",status:"EN",countries:[["\u65E5\u672C(\u6C96\u7E04)","Japan"],["\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2","Indonesia"],["\u30E1\u30AD\u30B7\u30B3","Mexico"],["\u30E2\u30EB\u30C7\u30A3\u30D6","the Maldives"]],eats:[["\u30D7\u30E9\u30F3\u30AF\u30C8\u30F3","plankton"]],fact:"\u306F\u3070\u304C 7m\u306B\u3082 \u306A\u308B \u5927\u304D\u306A \u30A8\u30A4\u3002\u3064\u3070\u3055\u306E\u3088\u3046\u306B \u3072\u308C\u3092 \u3046\u3054\u304B\u3057\u3066\u3001\u7A7A\u3092 \u3068\u3076\u3088\u3046\u306B \u304A\u3088\u304E\u307E\u3059\u3002",img:"img/manta.jpg"},{id:"dugong",room:"ocean",wiki:"Dugong",ja:"\u30B8\u30E5\u30B4\u30F3",en:"dugong",group:"mammal",status:"VU",countries:[["\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2","Australia"],["\u30D5\u30A3\u30EA\u30D4\u30F3","the Philippines"],["\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2","Indonesia"],["\u30A2\u30E9\u30D6\u9996\u9577\u56FD\u308C\u3093\u307D\u3046","the UAE"]],eats:[["\u6D77\u306E \u8349(\u6D77\u8349)","seagrass"]],fact:"\u6D77\u306E \u8349\u3060\u3051\u3092 \u98DF\u3079\u308B \u3081\u305A\u3089\u3057\u3044 \u52D5\u7269\u3002\u4EBA\u9B5A\u306E \u304A\u8A71\u306E \u30E2\u30C7\u30EB\u3068\u3082 \u3044\u308F\u308C\u3066\u3044\u307E\u3059\u3002",img:"img/dugong.jpg"},{id:"polarbear",room:"polar",wiki:"Polar bear",ja:"\u30DB\u30C3\u30AD\u30E7\u30AF\u30B0\u30DE",en:"polar bear",group:"mammal",status:"VU",pole:"N",countries:[["\u30AB\u30CA\u30C0","Canada"],["\u30ED\u30B7\u30A2","Russia"],["\u30A2\u30E1\u30EA\u30AB","the USA"],["\u30CE\u30EB\u30A6\u30A7\u30FC","Norway"],["\u30B0\u30EA\u30FC\u30F3\u30E9\u30F3\u30C9","Greenland"]],eats:[["\u30A2\u30B6\u30E9\u30B7","seals"]],fact:"\u767D\u304F \u898B\u3048\u308B \u6BDB\u306F\u3001\u3058\u3064\u306F \u3068\u3046\u3081\u3044\u3002\u6BDB\u306E \u4E0B\u306E \u306F\u3060\u306F \u9ED2\u3044 \u8272\u3067\u3059\u3002",img:"img/polarbear.jpg"},{id:"emperorpenguin",room:"polar",wiki:"Emperor penguin",ja:"\u30B3\u30A6\u30C6\u30A4\u30DA\u30F3\u30AE\u30F3",en:"emperor penguin",group:"bird",status:"EN",pole:"S",countries:[["\u5357\u6975","Antarctica"]],eats:[["\u9B5A","fish"],["\u30AA\u30AD\u30A2\u30DF","krill"],["\u30A4\u30AB","squid"]],fact:"\u30AA\u30B9\u304C \u8DB3\u306E \u4E0A\u3067 \u305F\u307E\u3054\u3092 \u3042\u305F\u305F\u3081\u307E\u3059\u3002\u5BD2\u3044 \u51AC\u306E \u9593\u30012\u304B\u6708\u3082 \u4F55\u3082 \u98DF\u3079\u305A\u306B \u307E\u3064\u306E\u3067\u3059\u3002",img:"img/emperorpenguin.jpg"},{id:"walrus",room:"polar",wiki:"Walrus",ja:"\u30BB\u30A4\u30A6\u30C1",en:"walrus",group:"mammal",status:"VU",pole:"N",countries:[["\u30ED\u30B7\u30A2","Russia"],["\u30A2\u30E1\u30EA\u30AB","the USA"],["\u30AB\u30CA\u30C0","Canada"],["\u30B0\u30EA\u30FC\u30F3\u30E9\u30F3\u30C9","Greenland"]],eats:[["\u8C9D","clams"]],fact:"\u9577\u3044 \u304D\u3070\u3092 \u6C37\u306B \u3072\u3063\u304B\u3051\u3066\u3001\u91CD\u3044 \u4F53\u3092 \u6C37\u306E \u4E0A\u306B \u5F15\u304D\u4E0A\u3052\u307E\u3059\u3002",img:"img/walrus.jpg"},{id:"arcticfox",room:"polar",wiki:"Arctic fox",ja:"\u30DB\u30C3\u30AD\u30E7\u30AF\u30AE\u30C4\u30CD",en:"arctic fox",group:"mammal",status:"LC",pole:"N",countries:[["\u30AB\u30CA\u30C0","Canada"],["\u30ED\u30B7\u30A2","Russia"],["\u30CE\u30EB\u30A6\u30A7\u30FC","Norway"],["\u30A2\u30A4\u30B9\u30E9\u30F3\u30C9","Iceland"]],eats:[["\u30EC\u30DF\u30F3\u30B0(\u5C0F\u3055\u306A \u30CD\u30BA\u30DF\u306E \u306A\u304B\u307E)","lemmings"],["\u9CE5\u306E \u305F\u307E\u3054","bird eggs"]],fact:"\u51AC\u306F \u307E\u3063\u767D\u306A \u6BDB\u3001\u590F\u306F \u8336\u8272\u306E \u6BDB\u306B \u751F\u3048\u304B\u308F\u308A\u307E\u3059\u3002",img:"img/arcticfox.jpg"},{id:"narwhal",room:"polar",wiki:"Narwhal",ja:"\u30A4\u30C3\u30AB\u30AF",en:"narwhal",group:"mammal",status:"LC",pole:"N",countries:[["\u30AB\u30CA\u30C0","Canada"],["\u30B0\u30EA\u30FC\u30F3\u30E9\u30F3\u30C9","Greenland"],["\u30CE\u30EB\u30A6\u30A7\u30FC","Norway"]],eats:[["\u9B5A","fish"],["\u30A4\u30AB","squid"]],fact:"\u982D\u304B\u3089 \u306E\u3073\u308B \u9577\u3044 \u30C4\u30CE\u306F\u3001\u3058\u3064\u306F \u6B6F\uFF01 3m\u3061\u304B\u304F\u306B \u306A\u308B \u3053\u3068\u3082 \u3042\u308A\u307E\u3059\u3002",img:"img/narwhal.jpg"},{id:"snowyowl",room:"polar",wiki:"Snowy owl",ja:"\u30B7\u30ED\u30D5\u30AF\u30ED\u30A6",en:"snowy owl",group:"bird",status:"VU",pole:"N",countries:[["\u30AB\u30CA\u30C0","Canada"],["\u30ED\u30B7\u30A2","Russia"],["\u30CE\u30EB\u30A6\u30A7\u30FC","Norway"],["\u30A2\u30E1\u30EA\u30AB","the USA"]],eats:[["\u30EC\u30DF\u30F3\u30B0","lemmings"],["\u5C0F\u3055\u306A \u9CE5","small birds"]],fact:"\u590F\u306E \u5317\u6975\u306F 1\u65E5\u4E2D \u592A\u967D\u304C \u3057\u305A\u307F\u307E\u305B\u3093\u3002\u3060\u304B\u3089 \u30B7\u30ED\u30D5\u30AF\u30ED\u30A6\u306F \u663C\u9593\u306B\u3082 \u304B\u308A\u3092 \u3057\u307E\u3059\u3002",file:"Schneeeule Bubo scandiacus Grugapark 2013.jpg",img:"img/snowyowl.jpg"},{id:"reindeer",room:"polar",wiki:"Reindeer",ja:"\u30C8\u30CA\u30AB\u30A4",en:"reindeer",group:"mammal",status:"VU",pole:"N",countries:[["\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9","Finland"],["\u30CE\u30EB\u30A6\u30A7\u30FC","Norway"],["\u30ED\u30B7\u30A2","Russia"],["\u30AB\u30CA\u30C0","Canada"]],eats:[["\u30B3\u30B1\u306E \u306A\u304B\u307E(\u5730\u8863\u985E)","lichen"],["\u8349","grass"]],fact:"\u30AA\u30B9\u3082 \u30E1\u30B9\u3082 \u30C4\u30CE\u304C \u3042\u308B\u3001\u305F\u3060 1\u3057\u3085\u308B\u3044\u306E \u30B7\u30AB\u3067\u3059\u3002",img:"img/reindeer.jpg"},{id:"orangutan",room:"rainforest",wiki:"Bornean orangutan",ja:"\u30DC\u30EB\u30CD\u30AA\u30AA\u30E9\u30F3\u30A6\u30FC\u30BF\u30F3",en:"Bornean orangutan",group:"mammal",status:"CR",countries:[["\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2","Indonesia"],["\u30DE\u30EC\u30FC\u30B7\u30A2","Malaysia"]],eats:[["\u304F\u3060\u3082\u306E","fruit"],["\u8449\u3063\u3071","leaves"]],fact:"\u6BCE\u3070\u3093 \u6728\u306E \u4E0A\u306B \u65B0\u3057\u3044 \u30D9\u30C3\u30C9\u3092 \u4F5C\u3063\u3066 \u306D\u307E\u3059\u3002\u300C\u30AA\u30E9\u30F3\u30A6\u30FC\u30BF\u30F3\u300D\u306F \u30DE\u30EC\u30FC\u8A9E\u3067 \u300C\u68EE\u306E \u4EBA\u300D\u3068 \u3044\u3046 \u3044\u307F\u3002",img:"img/orangutan.jpg"},{id:"gorilla",room:"rainforest",wiki:"Western gorilla",ja:"\u30CB\u30B7\u30B4\u30EA\u30E9",en:"western gorilla",group:"mammal",status:"CR",countries:[["\u30AB\u30E1\u30EB\u30FC\u30F3","Cameroon"],["\u30AC\u30DC\u30F3","Gabon"],["\u30B3\u30F3\u30B4\u5171\u548C\u56FD","the Republic of the Congo"],["\u4E2D\u592E\u30A2\u30D5\u30EA\u30AB\u5171\u548C\u56FD","the Central African Republic"]],eats:[["\u8449\u3063\u3071","leaves"],["\u304F\u3060\u3082\u306E","fruit"]],fact:"\u5BB6\u65CF\u3067 \u304F\u3089\u3059 \u3084\u3055\u3057\u3044 \u52D5\u7269\u3002\u30EA\u30FC\u30C0\u30FC\u306E \u30AA\u30B9\u306F \u305B\u306A\u304B\u304C \u9280\u8272\u306A\u306E\u3067 \u300C\u30B7\u30EB\u30D0\u30FC\u30D0\u30C3\u30AF\u300D\u3068 \u3088\u3070\u308C\u307E\u3059\u3002",img:"img/gorilla.jpg"},{id:"tiger",room:"rainforest",wiki:"Tiger",ja:"\u30C8\u30E9",en:"tiger",group:"mammal",status:"EN",countries:[["\u30A4\u30F3\u30C9","India"],["\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2","Indonesia"],["\u30ED\u30B7\u30A2","Russia"],["\u30CD\u30D1\u30FC\u30EB","Nepal"],["\u30BF\u30A4","Thailand"]],eats:[["\u30B7\u30AB","deer"],["\u30A4\u30CE\u30B7\u30B7","wild boar"]],fact:"\u3057\u307E\u3082\u3088\u3046\u306F 1\u982D\u305A\u3064 \u3061\u304C\u3044\u307E\u3059\u3002\u4EBA\u306E \u3057\u3082\u3093\u3068 \u540C\u3058\u3067\u3059\u306D\u3002\u30CD\u30B3\u306E \u306A\u304B\u307E\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u52D5\u7269\u3067\u3059\u3002",img:"img/tiger.jpg"},{id:"macaw",room:"rainforest",wiki:"Scarlet macaw",ja:"\u30B3\u30F3\u30B4\u30A6\u30A4\u30F3\u30B3",en:"scarlet macaw",group:"bird",status:"LC",countries:[["\u30D6\u30E9\u30B8\u30EB","Brazil"],["\u30DA\u30EB\u30FC","Peru"],["\u30E1\u30AD\u30B7\u30B3","Mexico"],["\u30B3\u30B9\u30BF\u30EA\u30AB","Costa Rica"]],eats:[["\u6728\u306E\u5B9F","nuts"],["\u304F\u3060\u3082\u306E","fruit"],["\u305F\u306D","seeds"]],fact:"\u304B\u305F\u3044 \u6728\u306E\u5B9F\u3082 \u308F\u308C\u308B\u3001\u3064\u3088\u3044 \u304F\u3061\u3070\u3057\u3092 \u3082\u3063\u3066\u3044\u307E\u3059\u3002\u3068\u3066\u3082 \u9577\u751F\u304D\u306A \u9CE5\u3067\u3059\u3002",img:"img/macaw.jpg"},{id:"jaguar",room:"rainforest",wiki:"Jaguar",ja:"\u30B8\u30E3\u30AC\u30FC",en:"jaguar",group:"mammal",status:"NT",countries:[["\u30D6\u30E9\u30B8\u30EB","Brazil"],["\u30E1\u30AD\u30B7\u30B3","Mexico"],["\u30DA\u30EB\u30FC","Peru"],["\u30B3\u30ED\u30F3\u30D3\u30A2","Colombia"]],eats:[["\u30AB\u30D4\u30D0\u30E9","capybaras"],["\u9B5A","fish"]],fact:"\u30CD\u30B3\u306E \u306A\u304B\u307E\u3067\u306F \u3081\u305A\u3089\u3057\u304F \u6C34\u304C \u5927\u3059\u304D\u3002\u304A\u3088\u3050\u306E\u3082 \u3068\u3066\u3082 \u4E0A\u624B\u3067\u3059\u3002",img:"img/jaguar.jpg"},{id:"sloth",room:"rainforest",wiki:"Brown-throated sloth",ja:"\u30CE\u30C9\u30C1\u30E3\u30DF\u30E6\u30D3\u30CA\u30DE\u30B1\u30E2\u30CE",en:"three-toed sloth",group:"mammal",status:"LC",countries:[["\u30D6\u30E9\u30B8\u30EB","Brazil"],["\u30DA\u30EB\u30FC","Peru"],["\u30B3\u30ED\u30F3\u30D3\u30A2","Colombia"],["\u30D1\u30CA\u30DE","Panama"]],eats:[["\u8449\u3063\u3071","leaves"]],fact:"\u3068\u3066\u3082 \u3086\u3063\u304F\u308A \u3046\u3054\u304F\u306E\u3067\u3001\u6BDB\u306B \u5C0F\u3055\u306A \u300C\u3082\u300D\u304C \u751F\u3048\u3066\u3001\u307F\u3069\u308A\u8272\u306B \u898B\u3048\u308B \u3053\u3068\u3082 \u3042\u308A\u307E\u3059\u3002",img:"img/sloth.jpg"},{id:"okapi",room:"rainforest",wiki:"Okapi",ja:"\u30AA\u30AB\u30D4",en:"okapi",group:"mammal",status:"EN",countries:[["\u30B3\u30F3\u30B4\u6C11\u4E3B\u5171\u548C\u56FD","the Democratic Republic of the Congo"]],eats:[["\u8449\u3063\u3071","leaves"]],fact:"\u8DB3\u306F \u30B7\u30DE\u30A6\u30DE\u306E \u3088\u3046\u306A \u3082\u3088\u3046\u3067\u3059\u304C\u3001\u3058\u3064\u306F \u30AD\u30EA\u30F3\u306E \u306A\u304B\u307E\u3002\u9577\u3044 \u3057\u305F\u3067 \u81EA\u5206\u306E \u8033\u3082 \u305D\u3046\u3058 \u3067\u304D\u307E\u3059\u3002",img:"img/okapi.jpg"},{id:"lion",room:"savanna",wiki:"Lion",ja:"\u30E9\u30A4\u30AA\u30F3",en:"lion",group:"mammal",status:"VU",countries:[["\u30BF\u30F3\u30B6\u30CB\u30A2","Tanzania"],["\u30B1\u30CB\u30A2","Kenya"],["\u5357\u30A2\u30D5\u30EA\u30AB","South Africa"],["\u30DC\u30C4\u30EF\u30CA","Botswana"],["\u30A4\u30F3\u30C9","India"]],eats:[["\u30B7\u30DE\u30A6\u30DE","zebras"],["\u30CC\u30FC","wildebeest"]],fact:"\u30CD\u30B3\u306E \u306A\u304B\u307E\u3067\u306F \u3081\u305A\u3089\u3057\u304F\u3001\u300C\u30D7\u30E9\u30A4\u30C9\u300D\u3068 \u3044\u3046 \u3080\u308C\u3067 \u304F\u3089\u3057\u307E\u3059\u3002",img:"img/lion.jpg"},{id:"elephant",room:"savanna",wiki:"African bush elephant",ja:"\u30A2\u30D5\u30EA\u30AB\u30BE\u30A6",en:"African elephant",group:"mammal",status:"EN",countries:[["\u30B1\u30CB\u30A2","Kenya"],["\u30BF\u30F3\u30B6\u30CB\u30A2","Tanzania"],["\u30DC\u30C4\u30EF\u30CA","Botswana"],["\u5357\u30A2\u30D5\u30EA\u30AB","South Africa"]],eats:[["\u8349","grass"],["\u8449\u3063\u3071","leaves"],["\u6728\u306E \u304B\u308F","bark"]],fact:"\u308A\u304F\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u52D5\u7269\u3002\u5927\u304D\u306A \u8033\u3092 \u30D1\u30BF\u30D1\u30BF \u3055\u305B\u3066\u3001\u4F53\u3092 \u3072\u3084\u3057\u307E\u3059\u3002",img:"img/elephant.jpg"},{id:"giraffe",room:"savanna",wiki:"Giraffe",ja:"\u30AD\u30EA\u30F3",en:"giraffe",group:"mammal",status:"VU",countries:[["\u30B1\u30CB\u30A2","Kenya"],["\u30BF\u30F3\u30B6\u30CB\u30A2","Tanzania"],["\u5357\u30A2\u30D5\u30EA\u30AB","South Africa"],["\u30CA\u30DF\u30D3\u30A2","Namibia"]],eats:[["\u6728\u306E \u8449\u3063\u3071","leaves"]],fact:"\u9996\u306F \u3068\u3066\u3082 \u9577\u3044\u3051\u308C\u3069\u3001\u9996\u306E \u307B\u306D\u306E \u6570\u306F \u4EBA\u3068 \u540C\u3058 7\u3053\u3067\u3059\u3002",img:"img/giraffe.jpg"},{id:"zebra",room:"savanna",wiki:"Plains zebra",ja:"\u30B5\u30D0\u30F3\u30CA\u30B7\u30DE\u30A6\u30DE",en:"zebra",group:"mammal",status:"NT",countries:[["\u30B1\u30CB\u30A2","Kenya"],["\u30BF\u30F3\u30B6\u30CB\u30A2","Tanzania"],["\u30DC\u30C4\u30EF\u30CA","Botswana"],["\u30B8\u30F3\u30D0\u30D6\u30A8","Zimbabwe"]],eats:[["\u8349","grass"]],fact:"\u3057\u307E\u3082\u3088\u3046\u306F 1\u982D\u305A\u3064 \u3061\u304C\u3044\u307E\u3059\u3002\u3057\u307E\u306B\u306F \u866B\u3092 \u3088\u305B\u3064\u3051\u306A\u3044 \u306F\u305F\u3089\u304D\u304C \u3042\u308B\u3068 \u8003\u3048\u3089\u308C\u3066\u3044\u307E\u3059\u3002",img:"img/zebra.jpg"},{id:"cheetah",room:"savanna",wiki:"Cheetah",ja:"\u30C1\u30FC\u30BF\u30FC",en:"cheetah",group:"mammal",status:"VU",countries:[["\u30CA\u30DF\u30D3\u30A2","Namibia"],["\u30DC\u30C4\u30EF\u30CA","Botswana"],["\u30B1\u30CB\u30A2","Kenya"],["\u30BF\u30F3\u30B6\u30CB\u30A2","Tanzania"]],eats:[["\u30AC\u30BC\u30EB","gazelles"]],fact:"\u308A\u304F\u3067 \u3044\u3061\u3070\u3093 \u8DB3\u304C \u306F\u3084\u3044 \u52D5\u7269\u3002\u3058\u305D\u304F 100km\u3061\u304B\u304F\u3067 \u8D70\u308B \u3053\u3068\u304C \u3067\u304D\u307E\u3059\u3002",img:"img/cheetah.jpg"},{id:"hippo",room:"savanna",wiki:"Hippopotamus",ja:"\u30AB\u30D0",en:"hippo",group:"mammal",status:"VU",countries:[["\u30BF\u30F3\u30B6\u30CB\u30A2","Tanzania"],["\u30B6\u30F3\u30D3\u30A2","Zambia"],["\u30B1\u30CB\u30A2","Kenya"],["\u30A6\u30AC\u30F3\u30C0","Uganda"]],eats:[["\u8349","grass"]],fact:"\u663C\u9593\u306F \u5DDD\u3084 \u6C60\u306E \u6C34\u306E \u4E2D\u3067 \u3059\u3054\u3057\u3001\u591C\u306B \u308A\u304F\u3078 \u4E0A\u304C\u3063\u3066 \u8349\u3092 \u98DF\u3079\u307E\u3059\u3002",img:"img/hippo.jpg"},{id:"rhino",room:"savanna",wiki:"White rhinoceros",ja:"\u30B7\u30ED\u30B5\u30A4",en:"white rhino",group:"mammal",status:"NT",countries:[["\u5357\u30A2\u30D5\u30EA\u30AB","South Africa"],["\u30B1\u30CB\u30A2","Kenya"],["\u30CA\u30DF\u30D3\u30A2","Namibia"],["\u30DC\u30C4\u30EF\u30CA","Botswana"]],eats:[["\u8349","grass"]],fact:"\u300C\u30B7\u30ED(\u767D)\u30B5\u30A4\u300D\u3067\u3059\u304C\u3001\u4F53\u306F \u767D\u304F\u3042\u308A\u307E\u305B\u3093\u3002\u53E3\u306E \u5F62\u304C \u3072\u308D\u3044 \u3053\u3068\u304B\u3089 \u3064\u3044\u305F \u540D\u524D\u3060\u3068 \u3044\u308F\u308C\u3066\u3044\u307E\u3059\u3002",img:"img/rhino.jpg"},{id:"addax",room:"desert",wiki:"Addax",ja:"\u30A2\u30C0\u30C3\u30AF\u30B9",en:"addax",group:"mammal",status:"CR",countries:[["\u30CB\u30B8\u30A7\u30FC\u30EB","Niger"],["\u30C1\u30E3\u30C9","Chad"]],eats:[["\u8349","grass"],["\u3055\u3070\u304F\u306E \u690D\u7269","desert plants"]],fact:"\u767D\u3063\u307D\u3044 \u4F53\u3067 \u592A\u967D\u306E \u5149\u3092 \u306F\u306D\u8FD4\u3057\u307E\u3059\u3002\u98DF\u3079\u308B \u690D\u7269\u304B\u3089 \u6C34\u5206\u3092 \u3068\u308B\u306E\u3067\u3001\u307B\u3068\u3093\u3069 \u6C34\u3092 \u98F2\u307E\u305A\u306B \u751F\u304D\u3089\u308C\u307E\u3059\u3002",img:"img/addax.jpg"},{id:"fennec",room:"desert",wiki:"Fennec fox",ja:"\u30D5\u30A7\u30CD\u30C3\u30AF",en:"fennec fox",group:"mammal",status:"LC",countries:[["\u30E2\u30ED\u30C3\u30B3","Morocco"],["\u30A2\u30EB\u30B8\u30A7\u30EA\u30A2","Algeria"],["\u30A8\u30B8\u30D7\u30C8","Egypt"],["\u30C1\u30E5\u30CB\u30B8\u30A2","Tunisia"]],eats:[["\u866B","insects"],["\u5C0F\u3055\u306A \u52D5\u7269","small animals"]],fact:"\u5927\u304D\u306A \u8033\u304B\u3089 \u4F53\u306E \u71B1\u3092 \u306B\u304C\u3057\u307E\u3059\u3002\u3059\u306A\u306E \u4E0B\u306B \u3044\u308B \u3048\u3082\u306E\u306E \u97F3\u3082 \u805E\u3053\u3048\u307E\u3059\u3002",img:"img/fennec.jpg"},{id:"meerkat",room:"desert",wiki:"Meerkat",ja:"\u30DF\u30FC\u30A2\u30AD\u30E3\u30C3\u30C8",en:"meerkat",group:"mammal",status:"LC",countries:[["\u5357\u30A2\u30D5\u30EA\u30AB","South Africa"],["\u30DC\u30C4\u30EF\u30CA","Botswana"],["\u30CA\u30DF\u30D3\u30A2","Namibia"]],eats:[["\u866B","insects"],["\u30B5\u30BD\u30EA","scorpions"]],fact:"\u306A\u304B\u307E\u304C \u3054\u306F\u3093\u3092 \u98DF\u3079\u3066 \u3044\u308B \u9593\u30011\u3074\u304D\u304C \u7ACB\u3063\u3066 \u898B\u306F\u308A\u3092 \u3057\u307E\u3059\u3002\u3066\u304D\u3092 \u898B\u3064\u3051\u308B\u3068 \u58F0\u3067 \u77E5\u3089\u305B\u307E\u3059\u3002",img:"img/meerkat.jpg"},{id:"thornydevil",room:"desert",wiki:"Thorny devil",ja:"\u30E2\u30ED\u30AF\u30C8\u30AB\u30B2",en:"thorny devil",group:"reptile",status:"LC",countries:[["\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2","Australia"]],eats:[["\u30A2\u30EA","ants"]],fact:"1\u65E5\u306B \u4F55\u5343\u3073\u304D\u3082\u306E \u30A2\u30EA\u3092 \u98DF\u3079\u307E\u3059\u3002\u30C8\u30B2\u30C8\u30B2\u306E \u4F53\u306E \u307F\u305E\u3092 \u3064\u305F\u3063\u3066\u3001\u6C34\u304C \u53E3\u307E\u3067 \u306F\u3053\u3070\u308C\u307E\u3059\u3002",img:"img/thornydevil.jpg"},{id:"oryx",room:"desert",wiki:"Arabian oryx",ja:"\u30A2\u30E9\u30D3\u30A2\u30AA\u30EA\u30C3\u30AF\u30B9",en:"Arabian oryx",group:"mammal",status:"VU",countries:[["\u30AA\u30DE\u30FC\u30F3","Oman"],["\u30B5\u30A6\u30B8\u30A2\u30E9\u30D3\u30A2","Saudi Arabia"],["\u30A2\u30E9\u30D6\u9996\u9577\u56FD\u308C\u3093\u307D\u3046","the UAE"],["\u30E8\u30EB\u30C0\u30F3","Jordan"]],eats:[["\u8349","grass"]],fact:"\u91CE\u751F\u3067\u306F \u4E00\u5EA6 \u3044\u306A\u304F \u306A\u308A\u307E\u3057\u305F\u3002\u3067\u3082 \u4EBA\u304C \u80B2\u3066\u3066 \u91CE\u751F\u306B \u3082\u3069\u3057\u3001\u3075\u3084\u3059 \u3053\u3068\u304C \u3067\u304D\u305F\u306E\u3067\u3059\u3002",img:"img/oryx.jpg"},{id:"kangaroo",room:"desert",wiki:"Red kangaroo",ja:"\u30A2\u30AB\u30AB\u30F3\u30AC\u30EB\u30FC",en:"red kangaroo",group:"mammal",status:"LC",countries:[["\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2","Australia"]],eats:[["\u8349","grass"]],fact:"\u751F\u307E\u308C\u305F \u3068\u304D\u306E \u8D64\u3061\u3083\u3093\u306F 2cm\u304F\u3089\u3044\u3002\u304A\u304B\u3042\u3055\u3093\u306E \u304A\u306A\u304B\u306E \u3075\u304F\u308D\u3067 \u5927\u304D\u304F \u306A\u308A\u307E\u3059\u3002",img:"img/kangaroo.jpg"},{id:"sandcat",room:"desert",wiki:"Sand cat",ja:"\u30B9\u30CA\u30CD\u30B3",en:"sand cat",group:"mammal",status:"LC",countries:[["\u30E2\u30ED\u30C3\u30B3","Morocco"],["\u30A2\u30EB\u30B8\u30A7\u30EA\u30A2","Algeria"],["\u30B5\u30A6\u30B8\u30A2\u30E9\u30D3\u30A2","Saudi Arabia"],["\u30A4\u30E9\u30F3","Iran"]],eats:[["\u30CD\u30BA\u30DF","mice"],["\u30C8\u30AB\u30B2","lizards"]],fact:"\u8DB3\u306E \u3046\u3089\u306B \u6BDB\u304C \u751F\u3048\u3066 \u3044\u308B\u306E\u3067\u3001\u3042\u3064\u3044 \u3059\u306A\u306E \u4E0A\u3067\u3082 \u6B69\u3051\u307E\u3059\u3002",img:"img/sandcat.jpg"},{id:"panda",room:"forest",wiki:"Giant panda",ja:"\u30B8\u30E3\u30A4\u30A2\u30F3\u30C8\u30D1\u30F3\u30C0",en:"giant panda",group:"mammal",status:"VU",countries:[["\u4E2D\u56FD","China"]],eats:[["\u30BF\u30B1\u30FB\u30B5\u30B5","bamboo"]],fact:"1\u65E5\u306E \u534A\u5206\u3061\u304B\u304F\u3092 \u98DF\u3079\u308B \u3053\u3068\u306B \u3064\u304B\u3044\u307E\u3059\u3002\u30BF\u30B1\u3084 \u30B5\u30B5\u3092 1\u65E5\u306B 10kg \u3044\u3058\u3087\u3046 \u98DF\u3079\u307E\u3059\u3002",img:"img/panda.jpg"},{id:"redpanda",room:"forest",wiki:"Red panda",ja:"\u30EC\u30C3\u30B5\u30FC\u30D1\u30F3\u30C0",en:"red panda",group:"mammal",status:"EN",countries:[["\u30CD\u30D1\u30FC\u30EB","Nepal"],["\u30A4\u30F3\u30C9","India"],["\u30D6\u30FC\u30BF\u30F3","Bhutan"],["\u4E2D\u56FD","China"],["\u30DF\u30E3\u30F3\u30DE\u30FC","Myanmar"]],eats:[["\u30BF\u30B1\u30FB\u30B5\u30B5","bamboo"]],fact:"\u3058\u3064\u306F \u300C\u30D1\u30F3\u30C0\u300D\u3068 \u3044\u3046 \u540D\u524D\u306F\u3001\u30B8\u30E3\u30A4\u30A2\u30F3\u30C8\u30D1\u30F3\u30C0\u3088\u308A \u5148\u306B \u30EC\u30C3\u30B5\u30FC\u30D1\u30F3\u30C0\u306B \u3064\u3051\u3089\u308C\u307E\u3057\u305F\u3002",img:"img/redpanda.jpg"},{id:"koala",room:"forest",wiki:"Koala",ja:"\u30B3\u30A2\u30E9",en:"koala",group:"mammal",status:"VU",countries:[["\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2","Australia"]],eats:[["\u30E6\u30FC\u30AB\u30EA\u306E \u8449\u3063\u3071","eucalyptus leaves"]],fact:"\u30E6\u30FC\u30AB\u30EA\u306E \u8449\u3063\u3071\u306F \u3048\u3044\u3088\u3046\u304C \u5C11\u306A\u3044\u306E\u3067\u30011\u65E5\u306B 20\u6642\u9593\u3061\u304B\u304F \u306D\u3066 \u4F53\u529B\u3092 \u305B\u3064\u3084\u304F \u3057\u307E\u3059\u3002",img:"img/koala.jpg"},{id:"brownbear",room:"forest",wiki:"Brown bear",ja:"\u30D2\u30B0\u30DE",en:"brown bear",group:"mammal",status:"LC",countries:[["\u30ED\u30B7\u30A2","Russia"],["\u30AB\u30CA\u30C0","Canada"],["\u30A2\u30E1\u30EA\u30AB","the USA"],["\u65E5\u672C(\u5317\u6D77\u9053)","Japan"]],eats:[["\u9B5A(\u30B5\u30B1)","fish (salmon)"],["\u6728\u306E\u5B9F","berries"]],fact:"\u65E5\u672C\u3067\u306F \u5317\u6D77\u9053\u306B \u3059\u3093\u3067 \u3044\u307E\u3059\u3002\u79CB\u306B \u305F\u304F\u3055\u3093 \u98DF\u3079\u3066\u3001\u51AC\u306F \u3042\u306A\u306E \u4E2D\u3067 \u51AC\u307F\u3093 \u3057\u307E\u3059\u3002",img:"img/brownbear.jpg"},{id:"wolf",room:"forest",wiki:"Wolf",ja:"\u30CF\u30A4\u30A4\u30ED\u30AA\u30AA\u30AB\u30DF",en:"gray wolf",group:"mammal",status:"LC",countries:[["\u30AB\u30CA\u30C0","Canada"],["\u30A2\u30E1\u30EA\u30AB","the USA"],["\u30ED\u30B7\u30A2","Russia"],["\u30E2\u30F3\u30B4\u30EB","Mongolia"]],eats:[["\u30B7\u30AB","deer"]],fact:"\u5BB6\u65CF\u306E \u3080\u308C\u3067 \u304F\u3089\u3057\u3001\u300C\u30A6\u30A9\u30FC\u30F3\u300D\u3068 \u3044\u3046 \u3068\u304A\u307C\u3048\u3067 \u306A\u304B\u307E\u3068 \u8A71\u3057\u307E\u3059\u3002\u30A4\u30CC\u306E \u3054\u5148\u7956\u3055\u307E\u3067\u3059\u3002",img:"img/wolf.jpg"},{id:"hedgehog",room:"forest",wiki:"European hedgehog",ja:"\u30CA\u30DF\u30CF\u30EA\u30CD\u30BA\u30DF",en:"hedgehog",group:"mammal",status:"NT",countries:[["\u30A4\u30AE\u30EA\u30B9","the UK"],["\u30D5\u30E9\u30F3\u30B9","France"],["\u30C9\u30A4\u30C4","Germany"],["\u30C7\u30F3\u30DE\u30FC\u30AF","Denmark"]],eats:[["\u866B","insects"],["\u30DF\u30DF\u30BA","worms"]],fact:"\u305B\u306A\u304B\u306B 5000\u672C\u304F\u3089\u3044\u306E \u306F\u308A\u304C \u3042\u308A\u307E\u3059\u3002\u3053\u308F\u3044 \u3068\u304D\u306F \u30DC\u30FC\u30EB\u306E\u3088\u3046\u306B \u307E\u308B\u304F \u306A\u308A\u307E\u3059\u3002",img:"img/hedgehog.jpg"},{id:"beaver",room:"forest",wiki:"North American beaver",ja:"\u30A2\u30E1\u30EA\u30AB\u30D3\u30FC\u30D0\u30FC",en:"beaver",group:"mammal",status:"LC",countries:[["\u30AB\u30CA\u30C0","Canada"],["\u30A2\u30E1\u30EA\u30AB","the USA"]],eats:[["\u6728\u306E \u304B\u308F","bark"],["\u8449\u3063\u3071","leaves"]],fact:"\u6728\u3092 \u304B\u3058\u3063\u3066 \u305F\u304A\u3057\u3001\u5DDD\u306B \u30C0\u30E0\u3092 \u4F5C\u308A\u307E\u3059\u3002\u6B6F\u306F \u4E00\u751F \u306E\u3073\u3064\u3065\u3051\u307E\u3059\u3002",img:"img/beaver.jpg"},{id:"macaque",room:"japan",wiki:"Japanese macaque",ja:"\u30CB\u30DB\u30F3\u30B6\u30EB",en:"Japanese macaque",group:"mammal",status:"LC",countries:[["\u65E5\u672C","Japan"]],eats:[["\u304F\u3060\u3082\u306E","fruit"],["\u8449\u3063\u3071","leaves"],["\u866B","insects"]],fact:"\u4EBA\u3092 \u306E\u305E\u3044\u3066\u3001\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u5317\u306B \u3059\u3080 \u30B5\u30EB\u3002\u51AC\u306B \u304A\u3093\u305B\u3093\u306B \u5165\u308B \u30B5\u30EB\u3082 \u3044\u307E\u3059\u3002",img:"img/macaque.jpg"},{id:"tsushimacat",room:"japan",wiki:"Tsushima leopard cat",ja:"\u30C4\u30B7\u30DE\u30E4\u30DE\u30CD\u30B3",en:"Tsushima leopard cat",group:"mammal",status:"CR",statusSource:"japan",countries:[["\u65E5\u672C(\u9577\u5D0E\u770C \u5BFE\u99AC)","Japan"]],eats:[["\u30CD\u30BA\u30DF","mice"],["\u9CE5","birds"]],fact:"\u9577\u5D0E\u770C\u306E \u5BFE\u99AC\u3060\u3051\u306B \u3059\u3080 \u91CE\u751F\u306E \u30CD\u30B3\u3002100\u982D\u304F\u3089\u3044\u3057\u304B \u3044\u306A\u3044\u3068 \u3044\u308F\u308C\u3066 \u3044\u307E\u3059\u3002",file:"Tsushima Cat 001.jpg",img:"img/tsushimacat.jpg"},{id:"crane",room:"japan",wiki:"Red-crowned crane",ja:"\u30BF\u30F3\u30C1\u30E7\u30A6",en:"red-crowned crane",group:"bird",status:"VU",countries:[["\u65E5\u672C(\u5317\u6D77\u9053)","Japan"],["\u4E2D\u56FD","China"],["\u30ED\u30B7\u30A2","Russia"],["\u97D3\u56FD","South Korea"]],eats:[["\u9B5A","fish"],["\u866B","insects"]],fact:"\u982D\u306E \u3066\u3063\u307A\u3093\u306E \u8D64\u3044 \u3068\u3053\u308D\u306F \u306F\u306D\u3067\u306F \u306A\u304F\u3001\u306F\u3060\u306E \u8272\u3002\u3064\u304C\u3044\u3067 \u3044\u3063\u3057\u3087\u306B \u304A\u3069\u308A\u307E\u3059\u3002",img:"img/crane.jpg"},{id:"serow",room:"japan",wiki:"Japanese serow",ja:"\u30CB\u30DB\u30F3\u30AB\u30E2\u30B7\u30AB",en:"Japanese serow",group:"mammal",status:"LC",countries:[["\u65E5\u672C","Japan"]],eats:[["\u8449\u3063\u3071","leaves"]],fact:"\u65E5\u672C\u3060\u3051\u306B \u3059\u3080 \u52D5\u7269\u3067\u3001\u300C\u3068\u304F\u3079\u3064\u5929\u7136\u8A18\u5FF5\u7269\u300D\u306B \u3048\u3089\u3070\u308C\u3066 \u3044\u307E\u3059\u3002\u3051\u308F\u3057\u3044 \u5C71\u9053\u3082 \u4E0A\u624B\u306B \u6B69\u304D\u307E\u3059\u3002",img:"img/serow.jpg"},{id:"rail",room:"japan",wiki:"Okinawa rail",ja:"\u30E4\u30F3\u30D0\u30EB\u30AF\u30A4\u30CA",en:"Okinawa rail",group:"bird",status:"EN",countries:[["\u65E5\u672C(\u6C96\u7E04)","Japan"]],eats:[["\u866B","insects"],["\u30AB\u30BF\u30C4\u30E0\u30EA","snails"]],fact:"\u307B\u3068\u3093\u3069 \u3068\u3079\u306A\u3044 \u9CE5\u30021981\u5E74\u306B \u65B0\u3057\u3044 \u3057\u3085\u308B\u3044\u3060\u3068 \u308F\u304B\u3063\u305F\u3001\u3068\u3066\u3082 \u65B0\u3057\u3044 \u9CE5\u3067\u3059\u3002",img:"img/rail.jpg"},{id:"amamirabbit",room:"japan",wiki:"Amami rabbit",ja:"\u30A2\u30DE\u30DF\u30CE\u30AF\u30ED\u30A6\u30B5\u30AE",en:"Amami rabbit",group:"mammal",status:"EN",countries:[["\u65E5\u672C(\u9E7F\u5150\u5CF6\u770C \u3042\u307E\u307F\u5927\u5CF6\u30FB\u3068\u304F\u4E4B\u5CF6)","Japan"]],eats:[["\u8349","grass"],["\u6728\u306E\u5B9F","nuts"]],fact:"\u8033\u3082 \u8DB3\u3082 \u77ED\u304F\u3001\u3080\u304B\u3057\u306E \u30A6\u30B5\u30AE\u306E \u3059\u304C\u305F\u3092 \u306E\u3053\u3057\u3066 \u3044\u307E\u3059\u3002\u591C\u306B \u9AD8\u3044 \u58F0\u3067 \u9CF4\u304D\u307E\u3059\u3002",img:"img/amamirabbit.jpg"},{id:"salamander",room:"japan",wiki:"Japanese giant salamander",ja:"\u30AA\u30AA\u30B5\u30F3\u30B7\u30E7\u30A6\u30A6\u30AA",en:"Japanese giant salamander",group:"amphibian",status:"VU",countries:[["\u65E5\u672C","Japan"]],eats:[["\u9B5A","fish"],["\u30AB\u30A8\u30EB","frogs"],["\u30B5\u30EF\u30AC\u30CB","crabs"]],fact:"\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u308A\u3087\u3046\u305B\u3044\u308B\u3044\u306E \u306A\u304B\u307E\u30021m\u3092 \u3053\u3048\u308B \u3082\u306E\u3082 \u3044\u307E\u3059\u3002\u300C\u751F\u304D\u305F \u5316\u77F3\u300D\u3068 \u3088\u3070\u308C\u307E\u3059\u3002",img:"img/salamander.jpg"}]};var Kh={animals:{ja:"\u3069\u3046\u3076\u3064\u306E \u306A\u304B\u307E",en:"Animal Groups",c:"#8a6a45",groups:!0,intro:"\u52D5\u7269\u306F \u4F53\u306E \u3068\u304F\u3061\u3087\u3046\u3067 \u306A\u304B\u307E\u306B \u5206\u3051\u3089\u308C\u307E\u3059\u3002\u30C9\u30A2\u306E \u5148\u306B\u306F\u3001\u4E16\u754C\u306E \u3044\u308D\u3044\u308D\u306A \u52D5\u7269\u304C \u307E\u3063\u3066 \u3044\u307E\u3059\uFF01",links:["ocean","savanna","rainforest","polar","insects","birds","dinosaurs","pets","farm","deepsea","animal-records","japan-animals"]},ocean:{ja:"\u6D77\u306E \u52D5\u7269",en:"Ocean",c:"#5d8fae",animals:"ocean",intro:"\u5730\u7403\u306E \u8868\u9762\u306E 7\u308F\u308A\u306F \u6D77\u3067\u3059\u3002\u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u52D5\u7269\u3082\u3001\u6D77\u306B \u3059\u3093\u3067 \u3044\u307E\u3059\u3002",links:["deepsea","polar","japan-animals","geo-records","japanese-food","vehicles","animal-records"]},polar:{ja:"\u5317\u6975\u3068 \u5357\u6975",en:"Polar Regions",c:"#7fa3bd",animals:"polar",intro:"\u30DB\u30C3\u30AD\u30E7\u30AF\u30B0\u30DE\u306F \u5317\u6975\u3001\u30DA\u30F3\u30AE\u30F3\u306F \u5357\u6975\u306B \u3059\u3080\u306E\u3067\u30012\u3064\u306F \u51FA\u4F1A\u3044\u307E\u305B\u3093\uFF01",links:["ocean","birds","winter-sports","weather","europe","geo-records"]},rainforest:{ja:"\u306D\u3063\u305F\u3044\u3046\u308A\u3093",en:"Rainforest",c:"#4f7a45",animals:"rainforest",intro:"1\u5E74\u4E2D \u3042\u305F\u305F\u304B\u304F\u3066 \u96E8\u304C \u591A\u3044 \u68EE\u3002\u4E16\u754C\u306E \u751F\u304D\u3082\u306E\u306E \u534A\u5206 \u3044\u3058\u3087\u3046\u304C \u3053\u3053\u306B \u3044\u308B\u3068 \u3044\u308F\u308C\u307E\u3059\u3002",links:["insects","birds","americas","asia","fruits","plants","savanna"]},savanna:{ja:"\u30B5\u30D0\u30F3\u30CA",en:"Savanna",c:"#b08a4a",animals:"savanna",intro:"\u6728\u304C \u5C11\u3057\u3060\u3051 \u751F\u3048\u305F \u3072\u308D\u3044 \u8349\u539F\u3002\u96E8\u306E \u304D\u305B\u3064\u3068 \u304B\u3093\u305D\u3046\u3057\u305F \u304D\u305B\u3064\u304C \u3042\u308A\u307E\u3059\u3002",links:["africa","desert","animal-records","rainforest","animals"]},desert:{ja:"\u3055\u3070\u304F",en:"Desert",c:"#c79a62",animals:"desert",intro:"\u96E8\u304C \u307B\u3068\u3093\u3069 \u3075\u3089\u306A\u3044 \u5834\u6240\u3002\u663C\u306F \u3068\u3066\u3082 \u6691\u304F\u3001\u591C\u306F \u5BD2\u304F \u306A\u308B \u3053\u3068\u3082 \u3042\u308A\u307E\u3059\u3002",links:["africa","oceania","savanna","weather","plants","geo-records"]},forest:{ja:"\u68EE\u306E \u52D5\u7269",en:"Forest",c:"#6b5838",animals:"forest",intro:"\u6625\u30FB\u590F\u30FB\u79CB\u30FB\u51AC\u304C \u3042\u308B \u5730\u3044\u304D\u306E \u68EE\u3002\u6728\u306E \u5B9F\u3084 \u8449\u3063\u3071\u304C \u52D5\u7269\u306E \u3054\u306F\u3093\u306B \u306A\u308A\u307E\u3059\u3002",links:["japan-animals","europe","pets","plants","insects","americas"]},"japan-animals":{ja:"\u65E5\u672C\u306E \u52D5\u7269",en:"Animals of Japan",c:"#7d5a3c",animals:"japan",intro:"\u65E5\u672C\u306B\u306F\u3001\u65E5\u672C\u306B\u3057\u304B \u3044\u306A\u3044 \u52D5\u7269\u304C \u305F\u304F\u3055\u3093 \u3044\u307E\u3059\u3002\u9577\u5D0E\u770C\u306E \u5BFE\u99AC\u306B\u3082\u3001\u3068\u304F\u3079\u3064\u306A \u30CD\u30B3\u304C \u3044\u307E\u3059\u3088\u3002",links:["japan","nagasaki","forest","birds","insects","ocean"]},insects:{ja:"\u3053\u3093\u866B\u306E \u305B\u304B\u3044",en:"Insects",c:"#6f8f3a",intro:"\u3053\u3093\u866B\u306F \u5730\u7403\u3067 \u3044\u3061\u3070\u3093 \u3057\u3085\u308B\u3044\u304C \u591A\u3044 \u52D5\u7269\u306E \u306A\u304B\u307E\u3002100\u4E07\u3057\u3085\u308B\u3044 \u3044\u3058\u3087\u3046\u304C \u898B\u3064\u304B\u3063\u3066 \u3044\u307E\u3059\u3002",links:["forest","rainforest","plants","japan-animals","farm","birds"],items:[["\u30AB\u30D6\u30C8\u30E0\u30B7","rhinoceros beetle","\u{1FAB2}","\u590F\u306E \u591C\u306B \u6728\u306E \u3057\u308B\u3092 \u306A\u3081\u306B \u6765\u307E\u3059\u3002\u30AA\u30B9\u306E \u5927\u304D\u306A \u30C4\u30CE\u3067 \u3051\u3093\u304B\u3092 \u3057\u307E\u3059\u3002"],["\u30AA\u30AA\u30AB\u30D0\u30DE\u30C0\u30E9","monarch butterfly","\u{1F98B}","\u30AB\u30CA\u30C0\u304B\u3089 \u30E1\u30AD\u30B7\u30B3\u307E\u3067\u30014000km \u3044\u3058\u3087\u3046\u3082 \u65C5\u3092 \u3059\u308B \u30C1\u30E7\u30A6\u3067\u3059\u3002"],["\u30DF\u30C4\u30D0\u30C1","honeybee","\u{1F41D}","\u304A\u3057\u308A\u3092 \u3075\u308B \u300C\u30C0\u30F3\u30B9\u300D\u3067\u3001\u82B1\u306E \u3042\u308B \u5834\u6240\u3092 \u306A\u304B\u307E\u306B \u6559\u3048\u307E\u3059\u3002"],["\u30A2\u30EA","ant","\u{1F41C}","\u81EA\u5206\u306E \u4F53\u91CD\u306E \u4F55\u5341\u500D\u3082\u306E \u91CD\u3055\u3092 \u904B\u3076 \u3053\u3068\u304C \u3067\u304D\u307E\u3059\u3002"],["\u30C6\u30F3\u30C8\u30A6\u30E0\u30B7","ladybug","\u{1F41E}","\u91CE\u3055\u3044\u306B \u3064\u304F \u30A2\u30D6\u30E9\u30E0\u30B7\u3092 \u98DF\u3079\u3066 \u304F\u308C\u308B\u3001\u7551\u306E \u5473\u65B9\u3067\u3059\u3002"],["\u30B2\u30F3\u30B8\u30DC\u30BF\u30EB","firefly","\u2728","\u304A\u3057\u308A\u304C \u5149\u308B \u3053\u3093\u866B\u3002\u5149\u308A\u65B9\u3067 \u306A\u304B\u307E\u3068 \u5408\u56F3\u3092 \u3057\u3066 \u3044\u307E\u3059\u3002"],["\u30B3\u30AA\u30ED\u30AE","cricket","\u{1F997}","\u306F\u306D\u3092 \u3053\u3059\u308A\u5408\u308F\u305B\u3066 \u300C\u30EA\u30FC\u30EA\u30FC\u300D\u3068 \u97F3\u3092 \u51FA\u3057\u307E\u3059\u3002\u8033\u306F \u524D\u8DB3\u306B \u3042\u308A\u307E\u3059\u3002"],["\u30AF\u30E2 (\u3053\u3093\u866B\u3067\u306F \u306A\u3044\uFF01)","spider","\u{1F577}\uFE0F","\u8DB3\u304C 8\u672C \u3042\u308B\u306E\u3067\u3001\u3053\u3093\u866B\u306E \u306A\u304B\u307E\u3067\u306F \u3042\u308A\u307E\u305B\u3093\u3002\u3053\u3093\u866B\u306E \u8DB3\u306F 6\u672C\u3067\u3059\u3002"]]},birds:{ja:"\u9CE5\u306E \u305B\u304B\u3044",en:"Birds",c:"#4f86a8",intro:"\u9CE5\u306F \u306F\u306D\u3068 \u304F\u3061\u3070\u3057\u3092 \u3082\u3064 \u52D5\u7269\u3002\u3058\u3064\u306F \u304D\u3087\u3046\u308A\u3085\u3046\u306E \u5B50\u5B6B\u3060\u3068 \u8003\u3048\u3089\u308C\u3066 \u3044\u307E\u3059\u3002",links:["dinosaurs","polar","rainforest","farm","animal-records","japan-animals","pets"],items:[["\u30D5\u30AF\u30ED\u30A6","owl","\u{1F989}","\u9996\u3092 \u3050\u308B\u308A\u3068 270\u5EA6\u3082 \u56DE\u3059 \u3053\u3068\u304C \u3067\u304D\u307E\u3059\u3002\u591C\u306B \u304B\u308A\u3092 \u3057\u307E\u3059\u3002"],["\u30EF\u30B7","eagle","\u{1F985}","\u76EE\u304C \u3068\u3066\u3082 \u3088\u304F\u3001\u4EBA\u306E \u4F55\u500D\u3082 \u9060\u304F\u306E \u3048\u3082\u306E\u3092 \u898B\u3064\u3051\u3089\u308C\u307E\u3059\u3002"],["\u30CF\u30C1\u30C9\u30EA","hummingbird","\u{1F426}","1\u3073\u3087\u3046\u306B 50\u56DE \u3044\u3058\u3087\u3046 \u306F\u3070\u305F\u3044\u3066\u3001\u7A7A\u4E2D\u3067 \u6B62\u307E\u308B \u3053\u3068\u304C \u3067\u304D\u307E\u3059\u3002"],["\u30D5\u30E9\u30DF\u30F3\u30B4","flamingo","\u{1F9A9}","\u30D4\u30F3\u30AF\u8272\u306F\u3001\u98DF\u3079\u308B \u30A8\u30D3\u3084 \u5C0F\u3055\u306A \u751F\u304D\u3082\u306E\u306E \u8272\u304B\u3089 \u6765\u3066\u3044\u307E\u3059\u3002"],["\u30AF\u30B8\u30E3\u30AF","peacock","\u{1F99A}","\u30AA\u30B9\u306E \u304D\u308C\u3044\u306A \u306F\u306D\u306F\u3001\u30E1\u30B9\u306B \u30A2\u30D4\u30FC\u30EB\u3059\u308B \u305F\u3081\u306E \u3082\u306E\u3002"],["\u30AA\u30A6\u30E0\u30FB\u30A4\u30F3\u30B3","parrot","\u{1F99C}","\u4EBA\u306E \u3053\u3068\u3070\u3084 \u97F3\u3092 \u307E\u306D\u3059\u308B \u3053\u3068\u304C \u3067\u304D\u308B\u3001\u304B\u3057\u3053\u3044 \u9CE5\u3067\u3059\u3002"],["\u30CF\u30C8","pigeon","\u{1F54A}\uFE0F","\u9060\u304F\u304B\u3089 \u3067\u3082 \u81EA\u5206\u306E \u5BB6\u306B \u5E30\u3063\u3066 \u304F\u308B \u3075\u3057\u304E\u306A \u529B\u304C \u3042\u308A\u307E\u3059\u3002"],["\u30C0\u30C1\u30E7\u30A6","ostrich","\u{1F95A}","\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u9CE5\u3002\u3068\u3079\u307E\u305B\u3093\u304C\u3001\u3058\u305D\u304F 70km\u3067 \u8D70\u308C\u307E\u3059\u3002\u305F\u307E\u3054\u3082 \u4E16\u754C\u4E00 \u5927\u304D\u3044\uFF01"]]},dinosaurs:{ja:"\u304D\u3087\u3046\u308A\u3085\u3046",en:"Dinosaurs",c:"#7a6a3a",intro:"\u304D\u3087\u3046\u308A\u3085\u3046\u306F \u4F55\u5343\u4E07\u5E74\u3082 \u3080\u304B\u3057\u306E \u5730\u7403\u306B \u3044\u307E\u3057\u305F\u3002\u4ECA\u306F \u5316\u77F3\u304B\u3089 \u3044\u308D\u3044\u308D\u306A \u3053\u3068\u304C \u308F\u304B\u308A\u307E\u3059\u3002",links:["birds","animal-records","japan","space-explore","deepsea","geo-records"],items:[["\u30C6\u30A3\u30E9\u30CE\u30B5\u30A6\u30EB\u30B9","Tyrannosaurus rex","\u{1F996}","6600\u4E07\u5E74\u524D \u3054\u308D\u3001\u5317\u30A2\u30E1\u30EA\u30AB\u306B \u3044\u305F \u5927\u304D\u306A \u8089\u98DF \u304D\u3087\u3046\u308A\u3085\u3046\u3002\u6B6F\u306F \u30D0\u30CA\u30CA \u304F\u3089\u3044\u306E \u5927\u304D\u3055\uFF01"],["\u30C8\u30EA\u30B1\u30E9\u30C8\u30D7\u30B9","Triceratops","\u{1F98F}","\u9854\u306B 3\u672C\u306E \u30C4\u30CE\u3068 \u5927\u304D\u306A \u3048\u308A\u304B\u3056\u308A\u304C \u3042\u308B\u3001\u8349\u98DF \u304D\u3087\u3046\u308A\u3085\u3046\u3067\u3059\u3002"],["\u30B9\u30C6\u30B4\u30B5\u30A6\u30EB\u30B9","Stegosaurus","\u{1F995}","\u305B\u306A\u304B\u306B \u306A\u3089\u3093\u3060 \u677F\u3068\u3001\u3057\u3063\u307D\u306E \u30C8\u30B2\u304C \u3068\u304F\u3061\u3087\u3046\u3067\u3059\u3002"],["\u30D6\u30E9\u30AD\u30AA\u30B5\u30A6\u30EB\u30B9","Brachiosaurus","\u{1F995}","\u3068\u3066\u3082 \u9577\u3044 \u9996\u3092 \u3082\u3061\u3001\u9AD8\u3044 \u6728\u306E \u8449\u3063\u3071\u3092 \u98DF\u3079\u3066 \u3044\u307E\u3057\u305F\u3002"],["\u30AB\u30E0\u30A4\u30B5\u30A6\u30EB\u30B9 (\u3080\u304B\u308F\u7ADC)","Kamuysaurus","\u{1F9B4}","\u5317\u6D77\u9053 \u3080\u304B\u308F\u753A\u3067 \u898B\u3064\u304B\u3063\u305F\u3001\u65E5\u672C\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u5168\u8EAB\u306E \u5316\u77F3\u3067\u3059\u3002"],["\u30D5\u30AF\u30A4\u30E9\u30D7\u30C8\u30EB","Fukuiraptor","\u{1F9B4}","\u798F\u4E95\u770C\u3067 \u898B\u3064\u304B\u3063\u305F \u8089\u98DF \u304D\u3087\u3046\u308A\u3085\u3046\u3002\u798F\u4E95\u770C\u306F \u304D\u3087\u3046\u308A\u3085\u3046\u5316\u77F3\u306E \u5B9D\u5EAB\u3067\u3059\u3002"],["\u30D5\u30BF\u30D0\u30B9\u30BA\u30AD\u30EA\u30E5\u30A6","Futabasaurus","\u{1F30A}","1968\u5E74\u3001\u798F\u5CF6\u770C\u3067 \u9AD8\u6821\u751F\u304C \u898B\u3064\u3051\u307E\u3057\u305F\u3002\u3058\u3064\u306F \u304D\u3087\u3046\u308A\u3085\u3046\u3067\u306F \u306A\u304F \u6D77\u306E \u306F\u3061\u3085\u3046\u308B\u3044\u3067\u3059\u3002"],["\u30D7\u30C6\u30E9\u30CE\u30C9\u30F3","Pteranodon","\u{1FABD}","\u7A7A\u3092 \u3068\u3076 \u306F\u3061\u3085\u3046\u308B\u3044\u3002\u3088\u304F \u307E\u3061\u304C\u3048\u3089\u308C\u307E\u3059\u304C\u3001\u304D\u3087\u3046\u308A\u3085\u3046\u306E \u306A\u304B\u307E\u3067\u306F \u3042\u308A\u307E\u305B\u3093\u3002"],["\u304D\u3087\u3046\u308A\u3085\u3046\u3068 \u9CE5","dinosaurs and birds","\u{1F414}","\u9CE5\u306F \u751F\u304D\u306E\u3053\u3063\u305F \u304D\u3087\u3046\u308A\u3085\u3046\u306E \u5B50\u5B6B\u3002\u30CB\u30EF\u30C8\u30EA\u3082 \u304D\u3087\u3046\u308A\u3085\u3046\u306E \u89AA\u305B\u304D\u3067\u3059\uFF01"]]},pets:{ja:"\u30DA\u30C3\u30C8",en:"Pets",c:"#c07a55",intro:"\u3044\u3063\u3057\u3087\u306B \u304F\u3089\u3059 \u52D5\u7269\u305F\u3061\u3002New Horizon \u3067 \u7FD2\u3046 \u300CI have a dog.\u300D\u3082 \u3053\u3053\u306B \u3042\u308A\u307E\u3059\u3002",links:["farm","birds","jobs-town","forest","animals"],items:[["\u30A4\u30CC","dog","\u{1F415}","\u306B\u304A\u3044\u3092 \u304B\u3050 \u529B\u306F \u4EBA\u306E \u4F55\u5343\u500D\u3002\u306B\u304A\u3044\u3067 \u3044\u308D\u3044\u308D\u306A \u3053\u3068\u304C \u308F\u304B\u308A\u307E\u3059\u3002"],["\u30CD\u30B3","cat","\u{1F408}","1\u65E5\u306B 12\u301C16\u6642\u9593\u3082 \u306D\u3080\u308A\u307E\u3059\u3002\u3072\u3052\u3067 \u305B\u307E\u3044 \u5834\u6240\u3092 \u901A\u308C\u308B\u304B \u306F\u304B\u308A\u307E\u3059\u3002"],["\u30A6\u30B5\u30AE","rabbit","\u{1F407}","\u9577\u3044 \u8033\u3067 \u97F3\u3092 \u805E\u304F\u3060\u3051\u3067 \u306A\u304F\u3001\u4F53\u306E \u71B1\u3092 \u306B\u304C\u3057\u3066 \u3044\u307E\u3059\u3002"],["\u30CF\u30E0\u30B9\u30BF\u30FC","hamster","\u{1F439}","\u307B\u304A\u306E \u3075\u304F\u308D\u306B \u98DF\u3079\u3082\u306E\u3092 \u3064\u3081\u3053\u3093\u3067\u3001\u3059\u306B \u904B\u3073\u307E\u3059\u3002"],["\u91D1\u9B5A","goldfish","\u{1F41F}","\u3082\u3068\u306F \u4E2D\u56FD\u3067 \u751F\u307E\u308C\u305F \u9B5A\u3002\u65E5\u672C\u306B\u306F 500\u5E74\u304F\u3089\u3044 \u524D\u306B \u3084\u3063\u3066 \u6765\u307E\u3057\u305F\u3002"],["\u30BB\u30AD\u30BB\u30A4\u30A4\u30F3\u30B3","budgerigar","\u{1F99C}","\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2 \u751F\u307E\u308C\u306E \u5C0F\u3055\u306A \u30A4\u30F3\u30B3\u3002\u3053\u3068\u3070\u3092 \u304A\u307C\u3048\u308B \u3053\u3068\u3082 \u3042\u308A\u307E\u3059\u3002"],["\u30AB\u30E1","turtle","\u{1F422}","\u3068\u3066\u3082 \u9577\u751F\u304D\u3067\u3001\u4F55\u5341\u5E74\u3082 \u3044\u3063\u3057\u3087\u306B \u304F\u3089\u305B\u308B \u3053\u3068\u3082 \u3042\u308A\u307E\u3059\u3002"]]},farm:{ja:"\u7267\u5834\u306E \u52D5\u7269",en:"Farm Animals",c:"#9a8a4a",intro:"\u725B\u4E73\u3001\u305F\u307E\u3054\u3001\u6BDB\u7CF8\u2026 \u7267\u5834\u306E \u52D5\u7269\u306F\u3001\u308F\u305F\u3057\u305F\u3061\u306E \u6BCE\u65E5\u3092 \u3055\u3055\u3048\u3066 \u3044\u307E\u3059\u3002",links:["pets","vegetables","jobs-town","world-dishes","birds","insects"],items:[["\u30A6\u30B7","cow","\u{1F404}","1\u982D\u306E \u4E73\u725B\u304B\u3089\u30011\u65E5\u306B 25\u30EA\u30C3\u30C8\u30EB \u304F\u3089\u3044\u306E \u725B\u4E73\u304C \u3068\u308C\u307E\u3059\u3002"],["\u30D6\u30BF","pig","\u{1F416}","\u3058\u3064\u306F \u3068\u3066\u3082 \u304B\u3057\u3053\u304F\u3001\u304D\u308C\u3044\u597D\u304D\u306A \u52D5\u7269\u3067\u3059\u3002"],["\u30D2\u30C4\u30B8","sheep","\u{1F411}","\u6BDB\u3092 \u304B\u3063\u3066\u3001\u6BDB\u7CF8\u3084 \u30BB\u30FC\u30BF\u30FC\u3092 \u4F5C\u308A\u307E\u3059\u3002"],["\u30CB\u30EF\u30C8\u30EA","chicken","\u{1F413}","1\u5E74\u306B 300\u3053 \u3061\u304B\u304F\u306E \u305F\u307E\u3054\u3092 \u3046\u3080 \u30CB\u30EF\u30C8\u30EA\u3082 \u3044\u307E\u3059\u3002"],["\u30A6\u30DE","horse","\u{1F40E}","\u7ACB\u3063\u305F\u307E\u307E \u306D\u3080\u308B \u3053\u3068\u304C \u3067\u304D\u307E\u3059\u3002"],["\u30E4\u30AE","goat","\u{1F410}","\u3051\u308F\u3057\u3044 \u5CA9\u5C71\u3082\u3001\u3072\u3087\u3044\u3072\u3087\u3044 \u306E\u307C\u3063\u3066 \u3057\u307E\u3044\u307E\u3059\u3002"],["\u30A2\u30D2\u30EB","duck","\u{1F986}","\u3072\u306A\u306F\u3001\u751F\u307E\u308C\u3066 \u3055\u3044\u3057\u3087\u306B \u898B\u305F \u52D5\u304F\u3082\u306E\u3092 \u89AA\u3060\u3068 \u601D\u3063\u3066 \u3064\u3044\u3066 \u3044\u304D\u307E\u3059\u3002"]]},deepsea:{ja:"\u3057\u3093\u304B\u3044\u306E \u306A\u305E",en:"The Deep Sea",c:"#2d4a6b",intro:"\u5149\u304C \u3068\u3069\u304B\u306A\u3044 \u6D77\u306E \u305D\u3053\u3002\u307E\u3060 \u3060\u308C\u3082 \u898B\u305F \u3053\u3068\u306E \u306A\u3044 \u751F\u304D\u3082\u306E\u304C \u3044\u308B\u3068 \u3044\u308F\u308C\u3066 \u3044\u307E\u3059\u3002",links:["ocean","animal-records","geo-records","space-explore","dinosaurs"],items:[["\u30C0\u30A4\u30AA\u30A6\u30A4\u30AB","giant squid","\u{1F991}","\u76EE\u306E \u5927\u304D\u3055\u306F \u30D0\u30B9\u30B1\u30C3\u30C8\u30DC\u30FC\u30EB \u304F\u3089\u3044\u3002\u52D5\u7269\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u76EE\u306E 1\u3064\u3067\u3059\u3002"],["\u30C1\u30E7\u30A6\u30C1\u30F3\u30A2\u30F3\u30B3\u30A6","anglerfish","\u{1F3EE}","\u982D\u306E \u300C\u3061\u3087\u3046\u3061\u3093\u300D\u3092 \u5149\u3089\u305B\u3066\u3001\u3048\u3082\u306E\u3092 \u304A\u3073\u304D\u3088\u305B\u307E\u3059\u3002"],["\u30AF\u30E9\u30B2","jellyfish","\u{1FABC}","\u4F53\u306E 95%\u3044\u3058\u3087\u3046\u304C \u6C34\u3067 \u3067\u304D\u3066 \u3044\u307E\u3059\u3002\u306E\u3046\u3082 \u5FC3\u305E\u3046\u3082 \u3042\u308A\u307E\u305B\u3093\u3002"],["\u30BF\u30AB\u30A2\u30B7\u30AC\u30CB","Japanese spider crab","\u{1F980}","\u65E5\u672C\u306E \u6D77\u306B \u3059\u3080 \u4E16\u754C\u4E00 \u5927\u304D\u306A \u30AB\u30CB\u3002\u8DB3\u3092 \u5E83\u3052\u308B\u3068 3m\u3092 \u3053\u3048\u308B \u3053\u3068\u3082\u3002"],["\u30C0\u30A4\u30AA\u30A6\u30B0\u30BD\u30AF\u30E0\u30B7","giant isopod","\u{1F990}","\u6C34\u65CF\u9928\u3067 5\u5E74 \u3044\u3058\u3087\u3046 \u4F55\u3082 \u98DF\u3079\u306A\u304B\u3063\u305F \u8A18\u9332\u304C \u3042\u308A\u307E\u3059\u3002"],["\u30DE\u30EA\u30A2\u30CA\u6D77\u6E9D","Mariana Trench","\u{1F30A}","\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u6DF1\u3044 \u6D77\u3002\u6DF1\u3055\u306F \u7D041\u4E07900m\u3002\u30A8\u30D9\u30EC\u30B9\u30C8\u304C \u3059\u3063\u307D\u308A \u5165\u308A\u307E\u3059\u3002"]]},"animal-records":{ja:"\u52D5\u7269\u306E \u4E16\u754C\u4E00",en:"Animal Records",c:"#a3542f",intro:"\u3044\u3061\u3070\u3093 \u901F\u3044\u3001\u3044\u3061\u3070\u3093 \u5927\u304D\u3044\u3001\u3044\u3061\u3070\u3093 \u9577\u751F\u304D\u2026 \u52D5\u7269\u306E \u4E16\u754C\u4E00\u3092 \u96C6\u3081\u307E\u3057\u305F\u3002",links:["savanna","ocean","birds","deepsea","geo-records","olympics"],items:[["\u3044\u3061\u3070\u3093 \u5927\u304D\u3044: \u30B7\u30ED\u30CA\u30AC\u30B9\u30AF\u30B8\u30E9","biggest: blue whale","\u{1F40B}","\u9577\u3055 30m\u3061\u304B\u304F\u3002\u5730\u7403\u306E \u308C\u304D\u3057\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u52D5\u7269\u3067\u3059\u3002"],["\u308A\u304F\u3067 \u3044\u3061\u3070\u3093 \u901F\u3044: \u30C1\u30FC\u30BF\u30FC","fastest on land: cheetah","\u{1F406}","\u3058\u305D\u304F 100km\u3061\u304B\u304F\u3002\u3067\u3082 \u9577\u304F\u306F \u8D70\u308C\u307E\u305B\u3093\u3002"],["\u7A7A\u3067 \u3044\u3061\u3070\u3093 \u901F\u3044: \u30CF\u30E4\u30D6\u30B5","fastest in the sky: peregrine falcon","\u{1F985}","\u3048\u3082\u306E\u306B \u5411\u304B\u3063\u3066 \u6025\u964D\u4E0B\u3059\u308B \u3068\u304D\u3001\u3058\u305D\u304F 300km\u3092 \u3053\u3048\u307E\u3059\u3002"],["\u3044\u3061\u3070\u3093 \u305B\u304C \u9AD8\u3044: \u30AD\u30EA\u30F3","tallest: giraffe","\u{1F992}","\u305B\u306E \u9AD8\u3055\u306F 5m\u3044\u3058\u3087\u3046\u30022\u968E\u306E \u307E\u3069\u306B \u3068\u3069\u304D\u307E\u3059\u3002"],["\u308A\u304F\u3067 \u3044\u3061\u3070\u3093 \u91CD\u3044: \u30A2\u30D5\u30EA\u30AB\u30BE\u30A6","heaviest on land: African elephant","\u{1F418}","\u4F53\u91CD\u306F 6\u30C8\u30F3 \u3044\u3058\u3087\u3046\u3002\u8ECA 4\u301C5\u53F0\u3076\u3093 \u3067\u3059\u3002"],["\u3044\u3061\u3070\u3093 \u9577\u751F\u304D: \u30CB\u30B7\u30AA\u30F3\u30C7\u30F3\u30B6\u30E1","longest-lived: Greenland shark","\u{1F988}","400\u5E74 \u304F\u3089\u3044 \u751F\u304D\u308B \u3082\u306E\u3082 \u3044\u308B\u3068 \u3044\u308F\u308C\u308B \u30B5\u30E1\u3067\u3059\u3002"],["\u3044\u3061\u3070\u3093 \u5C0F\u3055\u3044 \u307B\u306B\u3085\u3046\u308B\u3044: \u30AD\u30C6\u30A3\u30D6\u30BF\u30D0\u30CA\u30B3\u30A6\u30E2\u30EA","smallest mammal: bumblebee bat","\u{1F987}","\u4F53\u91CD\u306F \u7D042g\u30021\u5186\u7389 2\u307E\u3044\u3076\u3093 \u3067\u3059\u3002"]]},plants:{ja:"\u3075\u3057\u304E\u306A \u690D\u7269",en:"Amazing Plants",c:"#4c8a4a",intro:"\u690D\u7269\u306F \u52D5\u3051\u306A\u3044\u3051\u308C\u3069\u3001\u751F\u304D\u306E\u3053\u308B \u305F\u3081\u306E \u3059\u3054\u3044 \u304F\u3075\u3046\u3092 \u305F\u304F\u3055\u3093 \u3082\u3063\u3066 \u3044\u307E\u3059\u3002",links:["fruits","vegetables","rainforest","desert","insects","weather","japan"],items:[["\u3072\u307E\u308F\u308A","sunflower","\u{1F33B}","\u3064\u307C\u307F\u306E \u3053\u308D\u306F\u3001\u592A\u967D\u3092 \u8FFD\u3044\u304B\u3051\u3066 \u5411\u304D\u3092 \u304B\u3048\u307E\u3059\u3002"],["\u30B5\u30AF\u30E9","cherry blossom","\u{1F338}","\u30BD\u30E1\u30A4\u30E8\u30B7\u30CE\u306F\u3001\u307F\u3093\u306A \u540C\u3058 1\u672C\u306E \u6728\u304B\u3089 \u3075\u3084\u3055\u308C\u305F \u306A\u304B\u307E\u3067\u3059\u3002"],["\u30B5\u30DC\u30C6\u30F3","cactus","\u{1F335}","\u30C8\u30B2\u306F\u3001\u8449\u3063\u3071\u304C \u5F62\u3092 \u304B\u3048\u305F \u3082\u306E\u3002\u6C34\u3092 \u306B\u304C\u3055\u306A\u3044 \u305F\u3081\u306E \u304F\u3075\u3046\u3067\u3059\u3002"],["\u30BF\u30B1","bamboo","\u{1F38B}","1\u65E5\u3067 1m \u3061\u304B\u304F \u306E\u3073\u308B \u3053\u3068\u3082 \u3042\u308B\u3001\u3068\u3066\u3082 \u6210\u9577\u306E \u901F\u3044 \u690D\u7269\u3067\u3059\u3002"],["\u30CF\u30A8\u30C8\u30EA\u30B0\u30B5","Venus flytrap","\u{1FAB4}","\u8449\u3063\u3071\u3092 \u30D1\u30AF\u30C3\u3068 \u3068\u3058\u3066 \u866B\u3092 \u3064\u304B\u307E\u3048\u308B \u690D\u7269\u3067\u3059\u3002"],["\u30D0\u30AA\u30D0\u30D6","baobab","\u{1F333}","\u592A\u3044 \u307F\u304D\u306B \u6C34\u3092 \u305F\u304F\u308F\u3048\u3066\u3001\u304B\u3093\u305D\u3046\u3057\u305F \u304D\u305B\u3064\u3092 \u306E\u308A\u3053\u3048\u307E\u3059\u3002"],["\u30E9\u30D5\u30EC\u30B7\u30A2","rafflesia","\u{1F33A}","\u4E16\u754C\u4E00 \u5927\u304D\u3044 \u82B1\u3002\u306F\u3070\u306F \u7D041m \u306B\u3082 \u306A\u308A\u307E\u3059\u3002"],["\u30BB\u30B3\u30A4\u30A2","coast redwood","\u{1F332}","\u4E16\u754C\u4E00 \u305B\u306E \u9AD8\u3044 \u6728\u3002\u9AD8\u3055 115m\u3092 \u3053\u3048\u308B \u3082\u306E\u3082 \u3042\u308A\u307E\u3059\u3002"],["\u5C4B\u4E45\u6749 (\u3084\u304F\u3059\u304E)","Yakusugi cedar","\u{1F332}","\u9E7F\u5150\u5CF6\u770C \u5C4B\u4E45\u5CF6\u306E \u5927\u304D\u306A \u30B9\u30AE\u3002\u4F55\u5343\u5E74\u3082 \u751F\u304D\u3066 \u3044\u308B \u6728\u3082 \u3042\u308A\u307E\u3059\u3002"]]},weather:{ja:"\u5929\u6C17\u306E \u3075\u3057\u304E",en:"Weather",c:"#5b8fc7",intro:"How's the weather? \u6674\u308C\u3001\u96E8\u3001\u96EA\u2026 \u5929\u6C17\u306E \u3072\u307F\u3064\u3092 \u306E\u305E\u3044\u3066 \u307F\u3088\u3046\u3002",links:["months1","months2","plants","polar","desert","solar-system"],items:[["\u6674\u308C","sunny","\u2600\uFE0F","\u592A\u967D\u306E \u5149\u304C \u5730\u9762\u3092 \u3042\u305F\u305F\u3081\u3066\u3001\u5929\u6C17\u3092 \u52D5\u304B\u3059 \u30A8\u30CD\u30EB\u30AE\u30FC\u306B \u306A\u308A\u307E\u3059\u3002"],["\u304F\u3082\u308A","cloudy","\u2601\uFE0F","\u96F2\u306F\u3001\u7A7A\u306B \u3046\u304B\u3076 \u3068\u3066\u3082 \u5C0F\u3055\u306A \u6C34\u3084 \u6C37\u306E \u3064\u3076\u306E \u96C6\u307E\u308A\u3067\u3059\u3002"],["\u96E8","rainy","\u{1F327}\uFE0F","\u96F2\u306E \u4E2D\u306E \u3064\u3076\u304C \u96C6\u307E\u3063\u3066 \u91CD\u304F \u306A\u308B\u3068\u3001\u96E8\u306B \u306A\u3063\u3066 \u3075\u3063\u3066 \u304D\u307E\u3059\u3002"],["\u96EA","snowy","\u2744\uFE0F","\u96EA\u306E \u7D50\u3057\u3087\u3046\u306F\u3001\u307B\u3068\u3093\u3069\u304C \u304D\u308C\u3044\u306A \u516D\u89D2\u5F62\u3092 \u3057\u3066 \u3044\u307E\u3059\u3002"],["\u304B\u307F\u306A\u308A","thunder","\u26A1","\u5149\u306F \u97F3\u3088\u308A \u305A\u3063\u3068 \u901F\u3044\u306E\u3067\u3001\u30D4\u30AB\u30C3\u3068 \u5149\u3063\u3066\u304B\u3089 \u30B4\u30ED\u30B4\u30ED \u805E\u3053\u3048\u307E\u3059\u3002"],["\u306B\u3058","rainbow","\u{1F308}","\u65E5\u672C\u3067\u306F 7\u8272\u3068 \u3044\u3044\u307E\u3059\u304C\u3001\u56FD\u306B \u3088\u3063\u3066 \u8272\u306E \u6570\u3048\u65B9\u304C \u3061\u304C\u3044\u307E\u3059\u3002"],["\u53F0\u98A8","typhoon","\u{1F300}","\u307E\u3093\u4E2D\u306E \u300C\u53F0\u98A8\u306E \u76EE\u300D\u306F\u3001\u98A8\u304C \u5F31\u304F \u6674\u308C\u3066 \u3044\u308B \u3053\u3068\u3082 \u3042\u308A\u307E\u3059\u3002"],["\u98A8","windy","\u{1F4A8}","\u98A8\u306F\u3001\u7A7A\u6C17\u304C \u52D5\u304F \u3053\u3068\u3002\u3042\u305F\u305F\u304B\u3044 \u7A7A\u6C17\u3068 \u51B7\u305F\u3044 \u7A7A\u6C17\u306E \u3061\u304C\u3044\u3067 \u751F\u307E\u308C\u307E\u3059\u3002"]]},"solar-system":{ja:"\u592A\u967D\u7CFB",en:"The Solar System",c:"#2a2f5a",intro:"\u592A\u967D\u306E \u307E\u308F\u308A\u3092 8\u3064\u306E \u308F\u304F\u305B\u3044\u304C \u56DE\u3063\u3066 \u3044\u307E\u3059\u3002\u5730\u7403\u3082 \u305D\u306E 1\u3064\u3067\u3059\u3002",links:["moon-stars","space-explore","weather","inventions","dinosaurs"],items:[["\u592A\u967D","the Sun","planet:#ffb52e","\u5730\u7403\u3092 109\u3053 \u306A\u3089\u3079\u305F \u304F\u3089\u3044\u306E \u5927\u304D\u3055\u3002\u592A\u967D\u7CFB\u306E \u307E\u3093\u4E2D\u3067 \u304B\u304C\u3084\u304F \u661F\u3067\u3059\u3002"],["\u6C34\u661F","Mercury","planet:#9c948c","\u592A\u967D\u306B \u3044\u3061\u3070\u3093 \u8FD1\u3044 \u308F\u304F\u305B\u3044\u30021\u5E74\u304C \u305F\u3063\u305F 88\u65E5\u3067\u3059\u3002"],["\u91D1\u661F","Venus","planet:#e3c27a","\u3042\u3064\u3044 \u96F2\u306B \u304A\u304A\u308F\u308C\u3001450\u2103 \u3044\u3058\u3087\u3046\u3082 \u3042\u308B \u3044\u3061\u3070\u3093 \u71B1\u3044 \u308F\u304F\u305B\u3044\u3002"],["\u5730\u7403","Earth","\u{1F30D}","\u6C34\u3068 \u7A7A\u6C17\u304C \u3042\u308B\u3001\u308F\u305F\u3057\u305F\u3061\u306E \u308F\u304F\u305B\u3044\u3067\u3059\u3002"],["\u706B\u661F","Mars","planet:#c4553a","\u8D64\u3044 \u308F\u304F\u305B\u3044\u3002\u30A8\u30D9\u30EC\u30B9\u30C8\u306E 2\u500D \u3044\u3058\u3087\u3046 \u9AD8\u3044 \u5C71\u304C \u3042\u308A\u307E\u3059\u3002"],["\u6728\u661F","Jupiter","planet:#d2a679","\u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u308F\u304F\u305B\u3044\u3002\u5730\u7403\u304C 1300\u3053 \u304F\u3089\u3044 \u5165\u308A\u307E\u3059\u3002"],["\u571F\u661F","Saturn","planet:#e6cf8a:ring","\u308F\u3063\u304B\u306F \u6C37\u3068 \u5CA9\u306E \u3064\u3076\u3002\u6C34\u306B \u3046\u304B\u3076 \u304F\u3089\u3044 \u8EFD\u3044 \u308F\u304F\u305B\u3044\u3067\u3059\u3002"],["\u5929\u738B\u661F","Uranus","planet:#8fd3d8","\u6A2A\u3060\u304A\u3057\u306E \u307E\u307E \u56DE\u3063\u3066 \u3044\u308B\u3001\u3075\u3057\u304E\u306A \u308F\u304F\u305B\u3044\u3067\u3059\u3002"],["\u6D77\u738B\u661F","Neptune","planet:#3f63c9","\u592A\u967D\u7CFB\u3067 \u3044\u3061\u3070\u3093 \u5F37\u3044 \u98A8\u304C \u3075\u3044\u3066 \u3044\u307E\u3059\u3002"]]},"moon-stars":{ja:"\u6708\u3068 \u661F",en:"The Moon and Stars",c:"#26304f",intro:"\u591C\u7A7A\u3092 \u898B\u4E0A\u3052\u3066 \u307F\u3088\u3046\u3002\u661F\u306B\u306F \u305D\u308C\u305E\u308C \u7269\u8A9E\u304C \u3042\u308A\u307E\u3059\u3002",links:["solar-system","space-explore","months2","festivals-world"],items:[["\u6708","the Moon","\u{1F315}","\u6708\u306F \u3044\u3064\u3082 \u540C\u3058 \u9762\u3092 \u5730\u7403\u306B \u5411\u3051\u3066 \u3044\u307E\u3059\u3002\u3046\u3089\u304C\u308F\u306F \u5730\u7403\u304B\u3089 \u898B\u3048\u307E\u305B\u3093\u3002"],["\u661F\u5EA7","constellations","\u2728","\u7A7A\u306B\u306F 88\u306E \u661F\u5EA7\u304C \u3042\u308A\u307E\u3059\u3002\u305F\u3093\u751F\u65E5\u306E \u661F\u5EA7\u3082 \u305D\u306E \u306A\u304B\u307E\u3002"],["\u5317\u6975\u661F","the North Star","\u2B50","\u307B\u3068\u3093\u3069 \u52D5\u304B\u305A\u3001\u3080\u304B\u3057\u304B\u3089 \u5317\u306E \u65B9\u89D2\u3092 \u6559\u3048\u3066 \u304F\u308C\u308B \u661F\u3067\u3059\u3002"],["\u5929\u306E\u5DDD","the Milky Way","\u{1F30C}","\u4E03\u5915\u306E \u304A\u308A\u3072\u3081\u3068 \u3072\u3053\u307C\u3057\u306F\u3001\u5929\u306E\u5DDD\u3092 \u306F\u3055\u3093\u3067 \u304B\u304C\u3084\u304F \u661F\u3067\u3059\u3002"],["\u6D41\u308C\u661F","shooting star","\u{1F320}","\u5B87\u5B99\u306E \u5C0F\u3055\u306A \u3061\u308A\u304C \u7A7A\u6C17\u3068 \u3076\u3064\u304B\u3063\u3066 \u5149\u308B \u3082\u306E\u3067\u3059\u3002"],["\u65E5\u98DF","solar eclipse","\u{1F311}","\u6708\u304C \u592A\u967D\u306E \u524D\u3092 \u901A\u3063\u3066\u3001\u592A\u967D\u304C \u304B\u304F\u308C\u3066 \u898B\u3048\u308B \u73FE\u8C61\u3067\u3059\u3002"],["\u30D6\u30E9\u30C3\u30AF\u30DB\u30FC\u30EB","black hole","\u26AB","\u5149\u3055\u3048\u3082 \u306B\u3052\u3089\u308C\u306A\u3044\u3001\u3068\u3066\u3082 \u5F37\u3044 \u91CD\u529B\u3092 \u3082\u3064 \u5929\u4F53\u3067\u3059\u3002"]]},"space-explore":{ja:"\u5B87\u5B99 \u305F\u3093\u3051\u3093",en:"Space Exploration",c:"#1f2a44",intro:"\u4EBA\u306F \u30ED\u30B1\u30C3\u30C8\u306B \u306E\u3063\u3066 \u5B87\u5B99\u3092 \u3081\u3056\u3057\u3066 \u304D\u307E\u3057\u305F\u3002\u65E5\u672C\u3082 \u305F\u304F\u3055\u3093 \u304B\u3064\u3084\u304F \u3057\u3066 \u3044\u307E\u3059\u3002",links:["solar-system","moon-stars","vehicles","jobs-dream","inventions","japan-inventions"],items:[["\u30A2\u30DD\u30ED11\u53F7","Apollo 11","\u{1F680}","1969\u5E74\u3001\u4EBA\u304C \u306F\u3058\u3081\u3066 \u6708\u306B \u7ACB\u3061\u307E\u3057\u305F\u3002"],["\u56FD\u969B\u5B87\u5B99\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3","International Space Station","\u{1F6F0}\uFE0F","\u5730\u7403\u3092 \u7D0490\u5206\u3067 1\u5468 \u3057\u306A\u304C\u3089\u3001\u5B87\u5B99\u98DB\u884C\u58EB\u304C \u304F\u3089\u3057\u3066 \u3044\u307E\u3059\u3002"],["\u306F\u3084\u3076\u3055","Hayabusa","\u{1F6F0}\uFE0F","\u65E5\u672C\u306E \u63A2\u67FB\u6A5F\u30022010\u5E74\u3001\u5C0F\u308F\u304F\u305B\u3044 \u300C\u30A4\u30C8\u30AB\u30EF\u300D\u306E \u3059\u306A\u3092 \u5730\u7403\u306B \u6301\u3061\u5E30\u308A\u307E\u3057\u305F\u3002"],["\u306F\u3084\u3076\u30552","Hayabusa2","\u2604\uFE0F","\u5C0F\u308F\u304F\u305B\u3044 \u300C\u30EA\u30E5\u30A6\u30B0\u30A6\u300D\u306E \u77F3\u3092 \u6301\u3061\u5E30\u308A\u30012020\u5E74\u306B \u5730\u7403\u306B \u3068\u3069\u3051\u307E\u3057\u305F\u3002"],["\u5B87\u5B99\u98DB\u884C\u58EB","astronaut","\u{1F469}\u200D\u{1F680}","2014\u5E74\u3001\u82E5\u7530\u5149\u4E00\u3055\u3093\u304C \u65E5\u672C\u4EBA\u3067 \u306F\u3058\u3081\u3066 \u5B87\u5B99\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u306E \u8239\u9577\u306B \u306A\u308A\u307E\u3057\u305F\u3002"],["\u5B87\u5B99\u98DF","space food","\u{1F371}","\u65E5\u672C\u306E \u30E9\u30FC\u30E1\u30F3\u3084 \u30AB\u30EC\u30FC\u3082\u3001\u5B87\u5B99\u3067 \u98DF\u3079\u3089\u308C\u308B \u3088\u3046\u306B \u4F5C\u3089\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u7A2E\u5B50\u5CF6 \u5B87\u5B99\u30BB\u30F3\u30BF\u30FC","Tanegashima Space Center","\u{1F680}","\u9E7F\u5150\u5CF6\u770C\u306E \u7A2E\u5B50\u5CF6\u304B\u3089\u3001\u65E5\u672C\u306E \u30ED\u30B1\u30C3\u30C8\u304C \u6253\u3061\u4E0A\u3052\u3089\u308C\u3066 \u3044\u307E\u3059\u3002"]]}};var je=(i,e,t,n,s,r,a,o)=>[i,e,t,o,[...n?[["\u{1F3DB}\uFE0F \u9996\u90FD",n[0],n[1]]]:[],["\u{1F5E3}\uFE0F \u3053\u3068\u3070",s[0],s[1]],...r?[["\u{1F44B} \u3053\u3093\u306B\u3061\u306F",r[0],r[1]]]:[],["\u{1F37D}\uFE0F \u6709\u540D\u306A \u98DF\u3079\u3082\u306E",a[0],a[1]]]],Qh={regions:{ja:"\u305B\u304B\u3044\u306E \u5730\u3044\u304D",en:"Regions of the World",c:"#3b7a8a",intro:"I want to go to ___. \u4E16\u754C\u306B\u306F 190\u3044\u3058\u3087\u3046\u306E \u56FD\u304C \u3042\u308A\u307E\u3059\u3002\u3069\u3053\u3078 \u884C\u3063\u3066 \u307F\u305F\u3044\uFF1F",links:["asia","europe","africa","americas","oceania","landmarks","geo-records","writing"],items:[["\u30A2\u30B8\u30A2","Asia","\u{1F30F}","\u4E16\u754C\u306E \u4EBA\u306E \u534A\u5206 \u3044\u3058\u3087\u3046\u304C \u304F\u3089\u3059 \u5730\u3044\u304D\u3002\u65E5\u672C\u3082 \u30A2\u30B8\u30A2\u306E \u56FD\u3067\u3059\u3002"],["\u30E8\u30FC\u30ED\u30C3\u30D1","Europe","\u{1F3F0}","\u5C0F\u3055\u306A \u56FD\u304C \u305F\u304F\u3055\u3093 \u3042\u3064\u307E\u3063\u3066 \u3044\u3066\u3001\u96FB\u8ECA\u3067 \u56FD\u304B\u3089 \u56FD\u3078 \u65C5\u304C \u3067\u304D\u307E\u3059\u3002"],["\u30A2\u30D5\u30EA\u30AB","Africa","\u{1F992}","\u56FD\u306E \u6570\u304C \u3044\u3061\u3070\u3093 \u591A\u3044 \u5730\u3044\u304D\u300250\u3044\u3058\u3087\u3046\u306E \u56FD\u304C \u3042\u308A\u307E\u3059\u3002"],["\u5317\u30A2\u30E1\u30EA\u30AB","North America","\u{1F5FD}","\u30A2\u30E1\u30EA\u30AB\u3001\u30AB\u30CA\u30C0\u3001\u30E1\u30AD\u30B7\u30B3\u306A\u3069\u304C \u3042\u308B \u5730\u3044\u304D\u3067\u3059\u3002"],["\u5357\u30A2\u30E1\u30EA\u30AB","South America","\u{1F33F}","\u30A2\u30DE\u30BE\u30F3\u5DDD\u3068 \u5927\u304D\u306A \u306D\u3063\u305F\u3044\u3046\u308A\u3093\u304C \u3042\u308B \u5730\u3044\u304D\u3067\u3059\u3002"],["\u30AA\u30BB\u30A2\u30CB\u30A2","Oceania","\u{1F3DD}\uFE0F","\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u3068\u3001\u592A\u5E73\u6D0B\u306B \u3046\u304B\u3076 \u305F\u304F\u3055\u3093\u306E \u5CF6\u306E \u56FD\u3005\u3067\u3059\u3002"],["\u5357\u6975","Antarctica","\u{1F427}","\u56FD\u304C \u306A\u3044 \u5927\u9678\u3002\u79D1\u5B66\u8005\u304C \u7814\u7A76\u306E \u305F\u3081\u306B \u304F\u3089\u3057\u3066 \u3044\u307E\u3059\u3002"]]},asia:{ja:"\u30A2\u30B8\u30A2\u306E \u56FD",en:"Countries in Asia",c:"#c2553a",intro:"\u65E5\u672C\u306E \u3061\u304B\u304F\u306E \u56FD\u304B\u3089 \u898B\u3066 \u307F\u3088\u3046\u3002\u300C\u3053\u3093\u306B\u3061\u306F\u300D\u3092 \u8A00\u3048\u308B \u304B\u306A\uFF1F",links:["regions","world-dishes","festivals-world","writing","rainforest","japan","landmarks"],items:[je("\u4E2D\u56FD","China","\u{1F43C}",["\u30DA\u30AD\u30F3","Beijing"],["\u4E2D\u56FD\u8A9E","Chinese"],["\u30CB\u30FC\u30CF\u30AA","N\u01D0 h\u01CEo"],["\u30AE\u30E7\u30FC\u30B6","dumplings"],"\u300C\u4E07\u91CC\u306E\u9577\u57CE\u300D\u306E \u9577\u3055\u306F 2\u4E07km \u3044\u3058\u3087\u3046\u3002\u5730\u7403\u3092 \u534A\u5468 \u3059\u308B \u9577\u3055\u3067\u3059\u3002"),je("\u97D3\u56FD","South Korea","\u{1F962}",["\u30BD\u30A6\u30EB","Seoul"],["\u97D3\u56FD\u8A9E","Korean"],["\u30A2\u30F3\u30CB\u30E7\u30F3\u30CF\u30BB\u30E8","Annyeonghaseyo"],["\u30AD\u30E0\u30C1","kimchi"],"\u30CF\u30F3\u30B0\u30EB\u6587\u5B57\u306F\u3001600\u5E74 \u3061\u304B\u304F \u524D\u306B \u4F5C\u3089\u308C\u305F \u6587\u5B57\u3067\u3059\u3002"),je("\u30A4\u30F3\u30C9","India","\u{1F405}",["\u30CB\u30E5\u30FC\u30C7\u30EA\u30FC","New Delhi"],["\u30D2\u30F3\u30C7\u30A3\u30FC\u8A9E \u306A\u3069","Hindi"],["\u30CA\u30DE\u30B9\u30C6","Namaste"],["\u30AB\u30EC\u30FC","curry"],"\u4EBA\u53E3\u304C \u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u591A\u3044 \u56FD\u300214\u5104\u4EBA \u3044\u3058\u3087\u3046\u304C \u304F\u3089\u3057\u3066 \u3044\u307E\u3059\u3002"),je("\u30BF\u30A4","Thailand","\u{1F418}",["\u30D0\u30F3\u30B3\u30AF","Bangkok"],["\u30BF\u30A4\u8A9E","Thai"],["\u30B5\u30EF\u30C3\u30C7\u30A3\u30FC","Sawasdee"],["\u30C8\u30E0\u30E4\u30E0\u30AF\u30F3","tom yum soup"],"\u30BE\u30A6\u306F \u30BF\u30A4\u306E \u56FD\u306E \u30B7\u30F3\u30DC\u30EB\u30024\u6708\u306B\u306F \u6C34\u3092 \u304B\u3051\u5408\u3046 \u304A\u796D\u308A\u304C \u3042\u308A\u307E\u3059\u3002"),je("\u30D9\u30C8\u30CA\u30E0","Vietnam","\u{1F35C}",["\u30CF\u30CE\u30A4","Hanoi"],["\u30D9\u30C8\u30CA\u30E0\u8A9E","Vietnamese"],["\u30B7\u30F3\u30C1\u30E3\u30AA","Xin ch\xE0o"],["\u30D5\u30A9\u30FC","pho"],"\u56FD\u306E \u5F62\u304C \u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u306E S \u306E\u3088\u3046\u306B \u9577\u3044 \u56FD\u3067\u3059\u3002"),je("\u30D5\u30A3\u30EA\u30D4\u30F3","the Philippines","\u{1F3DD}\uFE0F",["\u30DE\u30CB\u30E9","Manila"],["\u30D5\u30A3\u30EA\u30D4\u30CE\u8A9E\u30FB\u82F1\u8A9E","Filipino, English"],["\u30AF\u30E0\u30B9\u30BF","Kumusta"],["\u30A2\u30C9\u30DC","adobo"],"7000\u3044\u3058\u3087\u3046\u306E \u5CF6\u3067 \u3067\u304D\u3066 \u3044\u308B \u56FD\u3067\u3059\u3002"),je("\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2","Indonesia","\u{1F30B}",null,["\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2\u8A9E","Indonesian"],["\u30B9\u30E9\u30DE\u30C3\u30C8 \u30B7\u30A2\u30F3","Selamat siang"],["\u30CA\u30B7\u30B4\u30EC\u30F3","nasi goreng"],"1\u4E077000\u3044\u3058\u3087\u3046\u306E \u5CF6\u304C \u3042\u308B\u3001\u4E16\u754C\u4E00 \u5CF6\u306E \u591A\u3044 \u56FD\u306E 1\u3064\u3067\u3059\u3002"),je("\u30E2\u30F3\u30B4\u30EB","Mongolia","\u{1F40E}",["\u30A6\u30E9\u30F3\u30D0\u30FC\u30C8\u30EB","Ulaanbaatar"],["\u30E2\u30F3\u30B4\u30EB\u8A9E","Mongolian"],["\u30B5\u30A4\u30F3\u30D0\u30A4\u30CE\u30FC","Sain baina uu"],["\u30DC\u30FC\u30BA (\u8089\u307E\u3093)","buuz"],"\u4EBA\u3088\u308A \u99AC\u306E \u6570\u304C \u591A\u3044 \u56FD\u3002\u300C\u30B2\u30EB\u300D\u3068 \u3044\u3046 \u7D44\u307F\u7ACB\u3066\u5F0F\u306E \u5BB6\u304C \u3042\u308A\u307E\u3059\u3002")]},europe:{ja:"\u30E8\u30FC\u30ED\u30C3\u30D1\u306E \u56FD",en:"Countries in Europe",c:"#3b5ba8",intro:"\u30E8\u30FC\u30ED\u30C3\u30D1\u306B\u306F \u5C0F\u3055\u306A \u56FD\u304C \u305F\u304F\u3055\u3093\u3002\u56FD\u304C \u3061\u304C\u3046\u3068\u3001\u3053\u3068\u3070\u3082 \u98DF\u3079\u3082\u306E\u3082 \u3061\u304C\u3044\u307E\u3059\u3002",links:["regions","landmarks","world-dishes","sweets","olympics","nagasaki","instruments"],items:[je("\u30A4\u30AE\u30EA\u30B9","the UK","\u{1F482}",["\u30ED\u30F3\u30C9\u30F3","London"],["\u82F1\u8A9E","English"],["\u30CF\u30ED\u30FC","Hello"],["\u30D5\u30A3\u30C3\u30B7\u30E5\u30FB\u30A2\u30F3\u30C9\u30FB\u30C1\u30C3\u30D7\u30B9","fish and chips"],"\u30A4\u30F3\u30B0\u30E9\u30F3\u30C9\u3001\u30B9\u30B3\u30C3\u30C8\u30E9\u30F3\u30C9\u3001\u30A6\u30A7\u30FC\u30EB\u30BA\u3001\u5317\u30A2\u30A4\u30EB\u30E9\u30F3\u30C9\u306E 4\u3064\u304C \u96C6\u307E\u3063\u305F \u56FD\u3067\u3059\u3002"),je("\u30D5\u30E9\u30F3\u30B9","France","\u{1F950}",["\u30D1\u30EA","Paris"],["\u30D5\u30E9\u30F3\u30B9\u8A9E","French"],["\u30DC\u30F3\u30B8\u30E5\u30FC\u30EB","Bonjour"],["\u30AF\u30ED\u30EF\u30C3\u30B5\u30F3","croissant"],"\u30D1\u30EA\u306E \u30A8\u30C3\u30D5\u30A7\u30EB\u5854\u306F \u9AD8\u3055 330m\u30021889\u5E74\u306B \u4F5C\u3089\u308C\u307E\u3057\u305F\u3002"),je("\u30A4\u30BF\u30EA\u30A2","Italy","\u{1F355}",["\u30ED\u30FC\u30DE","Rome"],["\u30A4\u30BF\u30EA\u30A2\u8A9E","Italian"],["\u30C1\u30E3\u30AA","Ciao"],["\u30D4\u30B6","pizza"],"\u56FD\u306E \u5F62\u306F\u3001\u9577\u3044 \u30D6\u30FC\u30C4\u306E \u3088\u3046\u306B \u898B\u3048\u307E\u3059\u3002"),je("\u30C9\u30A4\u30C4","Germany","\u{1F968}",["\u30D9\u30EB\u30EA\u30F3","Berlin"],["\u30C9\u30A4\u30C4\u8A9E","German"],["\u30B0\u30FC\u30C6\u30F3 \u30BF\u30FC\u30AF","Guten Tag"],["\u30BD\u30FC\u30BB\u30FC\u30B8","sausages"],"\u30D1\u30F3\u3068 \u30BD\u30FC\u30BB\u30FC\u30B8\u306E \u3057\u3085\u308B\u3044\u304C \u3068\u3066\u3082 \u591A\u3044 \u56FD\u3067\u3059\u3002"),je("\u30B9\u30DA\u30A4\u30F3","Spain","\u{1F345}",["\u30DE\u30C9\u30EA\u30FC\u30C9","Madrid"],["\u30B9\u30DA\u30A4\u30F3\u8A9E","Spanish"],["\u30AA\u30E9","Hola"],["\u30D1\u30A8\u30EA\u30A2","paella"],"\u30C8\u30DE\u30C8\u3092 \u6295\u3052\u5408\u3046 \u304A\u796D\u308A \u300C\u30C8\u30DE\u30C6\u30A3\u30FC\u30CA\u300D\u304C \u6709\u540D\u3067\u3059\u3002"),je("\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9","Finland","\u{1F385}",["\u30D8\u30EB\u30B7\u30F3\u30AD","Helsinki"],["\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9\u8A9E","Finnish"],["\u30E2\u30A4","Moi"],["\u30B5\u30FC\u30E2\u30F3\u30B9\u30FC\u30D7","salmon soup"],"\u30B5\u30A6\u30CA\u306E \u56FD\u3002\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u6751\u304C \u3042\u308A\u307E\u3059\u3002"),je("\u30AE\u30EA\u30B7\u30E3","Greece","\u{1F3DB}\uFE0F",["\u30A2\u30C6\u30CD","Athens"],["\u30AE\u30EA\u30B7\u30E3\u8A9E","Greek"],["\u30E4\u30FC\u30B5\u30B9","Yassas"],["\u30E0\u30B5\u30AB","moussaka"],"\u30AA\u30EA\u30F3\u30D4\u30C3\u30AF\u304C \u751F\u307E\u308C\u305F \u56FD\u30022800\u5E74 \u304F\u3089\u3044 \u524D\u306B \u59CB\u307E\u308A\u307E\u3057\u305F\u3002"),je("\u30AA\u30E9\u30F3\u30C0","the Netherlands","\u{1F337}",["\u30A2\u30E0\u30B9\u30C6\u30EB\u30C0\u30E0","Amsterdam"],["\u30AA\u30E9\u30F3\u30C0\u8A9E","Dutch"],["\u30CF\u30ED\u30FC","Hallo"],["\u30C1\u30FC\u30BA","cheese"],"\u6C5F\u6238\u6642\u4EE3\u3001\u9577\u5D0E\u306E \u51FA\u5CF6\u3067 \u65E5\u672C\u3068 \u8CBF\u6613\u3092 \u3057\u3066 \u3044\u305F \u56FD\u3067\u3059\u3002")]},africa:{ja:"\u30A2\u30D5\u30EA\u30AB\u306E \u56FD",en:"Countries in Africa",c:"#c48a2a",intro:"\u30A2\u30D5\u30EA\u30AB\u306B\u306F 50\u3044\u3058\u3087\u3046\u306E \u56FD\u3068\u30012000\u3044\u3058\u3087\u3046\u306E \u3053\u3068\u3070\u304C \u3042\u308B\u3068 \u3044\u308F\u308C\u307E\u3059\u3002",links:["regions","savanna","desert","landmarks","geo-records","festivals-world"],items:[je("\u30A8\u30B8\u30D7\u30C8","Egypt","\u{1F42A}",["\u30AB\u30A4\u30ED","Cairo"],["\u30A2\u30E9\u30D3\u30A2\u8A9E","Arabic"],["\u30A2\u30C3\u30B5\u30E9\u30FC\u30E0 \u30A2\u30E9\u30A4\u30AF\u30E0","As-salamu alaykum"],["\u30B3\u30B7\u30E3\u30EA","koshari"],"\u30D4\u30E9\u30DF\u30C3\u30C9\u306F 4500\u5E74 \u304F\u3089\u3044 \u524D\u306B \u4F5C\u3089\u308C\u307E\u3057\u305F\u3002"),je("\u30B1\u30CB\u30A2","Kenya","\u{1F981}",["\u30CA\u30A4\u30ED\u30D3","Nairobi"],["\u30B9\u30EF\u30D2\u30EA\u8A9E\u30FB\u82F1\u8A9E","Swahili, English"],["\u30B8\u30E3\u30F3\u30DC","Jambo"],["\u30A6\u30AC\u30EA","ugali"],"\u30DE\u30E9\u30BD\u30F3\u306E \u5F37\u3044 \u9078\u624B\u304C \u305F\u304F\u3055\u3093 \u751F\u307E\u308C\u3066 \u3044\u308B \u56FD\u3067\u3059\u3002"),je("\u30BF\u30F3\u30B6\u30CB\u30A2","Tanzania","\u{1F3D4}\uFE0F",["\u30C9\u30C9\u30DE","Dodoma"],["\u30B9\u30EF\u30D2\u30EA\u8A9E\u30FB\u82F1\u8A9E","Swahili, English"],["\u30B8\u30E3\u30F3\u30DC","Jambo"],["\u30A6\u30AC\u30EA","ugali"],"\u30A2\u30D5\u30EA\u30AB\u3067 \u3044\u3061\u3070\u3093 \u9AD8\u3044 \u30AD\u30EA\u30DE\u30F3\u30B8\u30E3\u30ED (5895m) \u304C \u3042\u308A\u307E\u3059\u3002"),je("\u5357\u30A2\u30D5\u30EA\u30AB","South Africa","\u{1F427}",null,["12\u306E \u516C\u7528\u8A9E","12 official languages"],null,["\u30D6\u30E9\u30FC\u30A4 (\u30D0\u30FC\u30D9\u30AD\u30E5\u30FC)","braai"],"\u9996\u90FD\u304C 3\u3064 \u3042\u308B \u3081\u305A\u3089\u3057\u3044 \u56FD\u3002\u6D77\u5CB8\u306B\u306F \u30DA\u30F3\u30AE\u30F3\u3082 \u3044\u307E\u3059\u3002"),je("\u30E2\u30ED\u30C3\u30B3","Morocco","\u{1F3FA}",["\u30E9\u30D0\u30C8","Rabat"],["\u30A2\u30E9\u30D3\u30A2\u8A9E \u306A\u3069","Arabic"],["\u30B5\u30E9\u30FC\u30E0","Salam"],["\u30BF\u30B8\u30F3","tagine"],"\u753A\u3058\u3085\u3046\u304C \u9752\u304F \u306C\u3089\u308C\u305F \u300C\u30B7\u30E3\u30A6\u30A8\u30F3\u300D\u3068 \u3044\u3046 \u753A\u304C \u3042\u308A\u307E\u3059\u3002"),je("\u30AC\u30FC\u30CA","Ghana","\u{1F36B}",["\u30A2\u30AF\u30E9","Accra"],["\u82F1\u8A9E","English"],["\u30A2\u30AF\u30EF\u30FC\u30D0 (\u3088\u3046\u3053\u305D)","Akwaaba"],["\u30D5\u30FC\u30D5\u30FC","fufu"],"\u30C1\u30E7\u30B3\u30EC\u30FC\u30C8\u306E \u3082\u3068\u3001\u30AB\u30AB\u30AA\u306E \u751F\u7523\u304C \u4E16\u754C\u3067 2\u756A\u76EE\u306B \u591A\u3044 \u56FD\u3067\u3059\u3002"),je("\u30DE\u30C0\u30AC\u30B9\u30AB\u30EB","Madagascar","\u{1F412}",["\u30A2\u30F3\u30BF\u30CA\u30CA\u30EA\u30DC","Antananarivo"],["\u30DE\u30C0\u30AC\u30B9\u30AB\u30EB\u8A9E\u30FB\u30D5\u30E9\u30F3\u30B9\u8A9E","Malagasy, French"],["\u30B5\u30E9\u30DE","Salama"],["\u304A\u7C73","rice"],"\u30AD\u30C4\u30CD\u30B6\u30EB\u306A\u3069\u3001\u3053\u3053\u306B\u3057\u304B \u3044\u306A\u3044 \u751F\u304D\u3082\u306E\u304C \u305F\u304F\u3055\u3093 \u3044\u307E\u3059\u3002")]},americas:{ja:"\u30A2\u30E1\u30EA\u30AB\u5927\u9678\u306E \u56FD",en:"Countries in the Americas",c:"#b0413e",intro:"\u5317\u30A2\u30E1\u30EA\u30AB\u3068 \u5357\u30A2\u30E1\u30EA\u30AB\u306E \u56FD\u3005\u3002\u82F1\u8A9E\u3001\u30B9\u30DA\u30A4\u30F3\u8A9E\u3001\u30DD\u30EB\u30C8\u30AC\u30EB\u8A9E\u306A\u3069\u304C \u8A71\u3055\u308C\u3066 \u3044\u307E\u3059\u3002",links:["regions","rainforest","world-dishes","ball-sports","landmarks","festivals-world","vegetables"],items:[je("\u30A2\u30E1\u30EA\u30AB","the USA","\u{1F5FD}",["\u30EF\u30B7\u30F3\u30C8\u30F3D.C.","Washington, D.C."],["\u82F1\u8A9E","English"],["\u30CF\u30ED\u30FC","Hello"],["\u30CF\u30F3\u30D0\u30FC\u30AC\u30FC","hamburger"],"50\u306E \u5DDE\u304C \u96C6\u307E\u3063\u3066 \u3067\u304D\u305F \u56FD\u3067\u3059\u3002"),je("\u30AB\u30CA\u30C0","Canada","\u{1F341}",["\u30AA\u30BF\u30EF","Ottawa"],["\u82F1\u8A9E\u30FB\u30D5\u30E9\u30F3\u30B9\u8A9E","English, French"],["\u30CF\u30ED\u30FC / \u30DC\u30F3\u30B8\u30E5\u30FC\u30EB","Hello / Bonjour"],["\u30E1\u30FC\u30D7\u30EB\u30B7\u30ED\u30C3\u30D7","maple syrup"],"\u4E16\u754C\u3067 2\u756A\u76EE\u306B \u5927\u304D\u3044 \u56FD\u3002\u56FD\u65D7\u306B\u306F \u30AB\u30A8\u30C7\u306E \u8449\u304C \u3042\u308A\u307E\u3059\u3002"),je("\u30E1\u30AD\u30B7\u30B3","Mexico","\u{1F32E}",["\u30E1\u30AD\u30B7\u30B3\u30B7\u30C6\u30A3","Mexico City"],["\u30B9\u30DA\u30A4\u30F3\u8A9E","Spanish"],["\u30AA\u30E9","Hola"],["\u30BF\u30B3\u30B9","tacos"],"\u30C8\u30A6\u30E2\u30ED\u30B3\u30B7\u3084 \u30C1\u30E7\u30B3\u30EC\u30FC\u30C8\u306F\u3001\u3053\u306E \u5730\u3044\u304D\u304B\u3089 \u4E16\u754C\u306B \u5E83\u307E\u308A\u307E\u3057\u305F\u3002"),je("\u30D6\u30E9\u30B8\u30EB","Brazil","\u26BD",["\u30D6\u30E9\u30B8\u30EA\u30A2","Bras\xEDlia"],["\u30DD\u30EB\u30C8\u30AC\u30EB\u8A9E","Portuguese"],["\u30AA\u30E9","Ol\xE1"],["\u30B7\u30E5\u30E9\u30B9\u30B3","churrasco"],"\u65E5\u672C\u304B\u3089 \u3046\u3064\u308A\u3059\u3093\u3060 \u4EBA\u306E \u5B50\u5B6B\u304C\u3001\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u591A\u304F \u304F\u3089\u3059 \u56FD\u3067\u3059\u3002"),je("\u30DA\u30EB\u30FC","Peru","\u{1F999}",["\u30EA\u30DE","Lima"],["\u30B9\u30DA\u30A4\u30F3\u8A9E \u306A\u3069","Spanish"],["\u30AA\u30E9","Hola"],["\u30BB\u30D3\u30FC\u30C1\u30A7","ceviche"],"\u5C71\u306E \u4E0A\u306E \u3044\u305B\u304D \u300C\u30DE\u30C1\u30E5\u30D4\u30C1\u30E5\u300D\u304C \u3042\u308A\u307E\u3059\u3002\u30B8\u30E3\u30AC\u30A4\u30E2\u306E \u3075\u308B\u3055\u3068\u3067\u3059\u3002"),je("\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3","Argentina","\u{1F483}",["\u30D6\u30A8\u30CE\u30B9\u30A2\u30A4\u30EC\u30B9","Buenos Aires"],["\u30B9\u30DA\u30A4\u30F3\u8A9E","Spanish"],["\u30AA\u30E9","Hola"],["\u30A2\u30B5\u30FC\u30C9 (\u713C\u304D\u8089)","asado"],"\u30C0\u30F3\u30B9\u97F3\u697D \u300C\u30BF\u30F3\u30B4\u300D\u304C \u751F\u307E\u308C\u305F \u56FD\u3067\u3059\u3002")]},oceania:{ja:"\u30AA\u30BB\u30A2\u30CB\u30A2\u306E \u56FD",en:"Countries in Oceania",c:"#2f8f8a",intro:"\u5927\u304D\u306A \u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u3068\u3001\u592A\u5E73\u6D0B\u306B \u3046\u304B\u3076 \u305F\u304F\u3055\u3093\u306E \u5CF6\u306E \u56FD\u3002",links:["regions","desert","ocean","birds","pets","landmarks"],items:[je("\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2","Australia","\u{1F998}",["\u30AD\u30E3\u30F3\u30D9\u30E9","Canberra"],["\u82F1\u8A9E","English"],["\u30B0\u30C3\u30C0\u30A4","G'day"],["\u30DF\u30FC\u30C8\u30D1\u30A4","meat pie"],"\u4EBA\u3088\u308A \u30AB\u30F3\u30AC\u30EB\u30FC\u306E \u6570\u304C \u591A\u3044\u3068 \u3044\u308F\u308C\u3066 \u3044\u307E\u3059\u3002"),je("\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9","New Zealand","\u{1F411}",["\u30A6\u30A7\u30EA\u30F3\u30C8\u30F3","Wellington"],["\u82F1\u8A9E\u30FB\u30DE\u30AA\u30EA\u8A9E","English, M\u0101ori"],["\u30AD\u30A2 \u30AA\u30E9","Kia ora"],["\u30D1\u30D6\u30ED\u30D0","pavlova"],"\u4EBA\u306E \u6570\u3088\u308A \u30D2\u30C4\u30B8\u306E \u6570\u306E \u307B\u3046\u304C \u305A\u3063\u3068 \u591A\u3044 \u56FD\u3067\u3059\u3002"),je("\u30D5\u30A3\u30B8\u30FC","Fiji","\u{1F3DD}\uFE0F",["\u30B9\u30D0","Suva"],["\u82F1\u8A9E\u30FB\u30D5\u30A3\u30B8\u30FC\u8A9E \u306A\u3069","English, Fijian"],["\u30D6\u30E9","Bula"],["\u30ED\u30DC (\u77F3\u713C\u304D\u6599\u7406)","lovo"],"300\u3044\u3058\u3087\u3046\u306E \u5CF6\u304C \u3042\u308B\u3001\u5357\u306E \u5CF6\u306E \u56FD\u3067\u3059\u3002"),je("\u30D1\u30D7\u30A2\u30CB\u30E5\u30FC\u30AE\u30CB\u30A2","Papua New Guinea","\u{1F99C}",["\u30DD\u30FC\u30C8\u30E2\u30EC\u30B9\u30D3\u30FC","Port Moresby"],["\u30C8\u30AF\u30FB\u30D4\u30B7\u30F3 \u306A\u3069","Tok Pisin"],null,["\u30E0\u30FC\u30E0\u30FC (\u77F3\u713C\u304D\u6599\u7406)","mumu"],"800\u3044\u3058\u3087\u3046\u306E \u3053\u3068\u3070\u304C \u8A71\u3055\u308C\u3066 \u3044\u308B\u3001\u3053\u3068\u3070\u306E \u591A\u3044 \u56FD\u3067\u3059\u3002")]},landmarks:{ja:"\u4E16\u754C\u306E \u305F\u3066\u3082\u306E",en:"World Landmarks",c:"#8a6d3b",intro:"\u4E16\u754C\u306B\u306F\u3001\u4F55\u767E\u5E74\u3001\u4F55\u5343\u5E74\u3082 \u524D\u306B \u4F5C\u3089\u308C\u305F \u3059\u3054\u3044 \u305F\u3066\u3082\u306E\u304C \u3042\u308A\u307E\u3059\u3002",links:["europe","asia","africa","americas","japan","geo-records","inventions"],items:[["\u30A8\u30C3\u30D5\u30A7\u30EB\u5854","Eiffel Tower","\u{1F5FC}","\u30D5\u30E9\u30F3\u30B9\u30FB\u30D1\u30EA\u30021889\u5E74\u306E \u4E07\u56FD\u535A\u89A7\u4F1A\u306E \u305F\u3081\u306B \u4F5C\u3089\u308C\u307E\u3057\u305F\u3002"],["\u81EA\u7531\u306E\u5973\u795E","Statue of Liberty","\u{1F5FD}","\u30A2\u30E1\u30EA\u30AB\u30FB\u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3002\u30D5\u30E9\u30F3\u30B9\u304B\u3089 \u304A\u304F\u3089\u308C\u305F \u50CF\u3067\u3059\u3002"],["\u4E07\u91CC\u306E\u9577\u57CE","Great Wall of China","\u{1F9F1}","\u4E2D\u56FD\u3002\u4F55\u767E\u5E74\u3082 \u304B\u3051\u3066 \u4F5C\u3089\u308C\u305F \u3068\u3066\u3082 \u9577\u3044 \u304B\u3079\u3067\u3059\u3002"],["\u30D4\u30E9\u30DF\u30C3\u30C9","Pyramids of Giza","\u{1F53A}","\u30A8\u30B8\u30D7\u30C8\u30024500\u5E74 \u304F\u3089\u3044 \u524D\u306B \u4F5C\u3089\u308C\u305F \u738B\u69D8\u306E \u304A\u306F\u304B \u3067\u3059\u3002"],["\u30BF\u30FC\u30B8\u30FB\u30DE\u30CF\u30EB","Taj Mahal","\u{1F54C}","\u30A4\u30F3\u30C9\u3002\u767D\u3044 \u5927\u7406\u77F3\u3067 \u3067\u304D\u305F\u3001\u3068\u3066\u3082 \u7F8E\u3057\u3044 \u305F\u3066\u3082\u306E\u3067\u3059\u3002"],["\u30DE\u30C1\u30E5\u30D4\u30C1\u30E5","Machu Picchu","\u26F0\uFE0F","\u30DA\u30EB\u30FC\u3002\u9AD8\u3055 2400m\u306E \u5C71\u306E \u4E0A\u306B \u3042\u308B \u3044\u305B\u304D\u3067\u3059\u3002"],["\u30B3\u30ED\u30C3\u30BB\u30AA","Colosseum","\u{1F3DF}\uFE0F","\u30A4\u30BF\u30EA\u30A2\u30FB\u30ED\u30FC\u30DE\u30022000\u5E74 \u304F\u3089\u3044 \u524D\u306B \u4F5C\u3089\u308C\u305F \u5927\u304D\u306A \u7AF6\u6280\u5834\u3067\u3059\u3002"],["\u30E2\u30A2\u30A4","Moai","\u{1F5FF}","\u30C1\u30EA\u306E \u30A4\u30FC\u30B9\u30BF\u30FC\u5CF6\u3002900\u4F53 \u304F\u3089\u3044\u306E \u77F3\u306E \u50CF\u304C \u306A\u3089\u3093\u3067 \u3044\u307E\u3059\u3002"],["\u59EB\u8DEF\u57CE","Himeji Castle","\u{1F3EF}","\u5175\u5EAB\u770C\u3002\u767D\u3044 \u3059\u304C\u305F\u304B\u3089 \u300C\u767D\u9DFA\u57CE (\u3057\u3089\u3055\u304E\u3058\u3087\u3046)\u300D\u3068\u3082 \u3088\u3070\u308C\u308B \u4E16\u754C\u907A\u7523\u3067\u3059\u3002"]]},"geo-records":{ja:"\u5730\u7403\u306E \u4E16\u754C\u4E00",en:"Earth Records",c:"#476b4a",intro:"\u3044\u3061\u3070\u3093 \u9AD8\u3044 \u5C71\u3001\u3044\u3061\u3070\u3093 \u9577\u3044 \u5DDD\u2026 \u5730\u7403\u306E \u4E16\u754C\u4E00\u3092 \u898B\u3066 \u307F\u3088\u3046\u3002",links:["regions","landmarks","animal-records","deepsea","desert","polar","weather"],items:[["\u30A8\u30D9\u30EC\u30B9\u30C8","Mount Everest","\u{1F3D4}\uFE0F","\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u9AD8\u3044 \u5C71\u3002\u9AD8\u3055 8849m\u3002\u30CD\u30D1\u30FC\u30EB\u3068 \u4E2D\u56FD\u306E \u3055\u304B\u3044\u306B \u3042\u308A\u307E\u3059\u3002"],["\u30CA\u30A4\u30EB\u5DDD","Nile River","\u{1F3DE}\uFE0F","\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u9577\u3044 \u5DDD\u306E 1\u3064\u3002\u9577\u3055\u306F \u7D046650km\u3067\u3059\u3002"],["\u30A2\u30DE\u30BE\u30F3\u5DDD","Amazon River","\u{1F30A}","\u6D41\u308C\u308B \u6C34\u306E \u308A\u3087\u3046\u304C \u4E16\u754C\u4E00 \u591A\u3044 \u5DDD\u3067\u3059\u3002"],["\u30B5\u30CF\u30E9\u3055\u3070\u304F","Sahara Desert","\u{1F3DC}\uFE0F","\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u6691\u3044 \u3055\u3070\u304F\u3002\u30A2\u30E1\u30EA\u30AB\u3068 \u540C\u3058 \u304F\u3089\u3044\u306E \u5E83\u3055\u3067\u3059\u3002"],["\u592A\u5E73\u6D0B","Pacific Ocean","\u{1F30A}","\u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u6D77\u3002\u4E16\u754C\u306E \u9678\u5730\u3092 \u305C\u3093\u3076 \u5408\u308F\u305B\u3066\u3082\u3001\u592A\u5E73\u6D0B\u306E \u307B\u3046\u304C \u5E83\u3044\u3067\u3059\u3002"],["\u30D0\u30A4\u30AB\u30EB\u6E56","Lake Baikal","\u{1F4A7}","\u30ED\u30B7\u30A2\u306B \u3042\u308B\u3001\u4E16\u754C\u4E00 \u6DF1\u3044 \u307F\u305A\u3046\u307F\u3002\u6DF1\u3055\u306F 1600m\u3044\u3058\u3087\u3046\u3002"],["\u30B0\u30EA\u30FC\u30F3\u30E9\u30F3\u30C9","Greenland","\u{1F9CA}","\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u5CF6\u3002\u307B\u3068\u3093\u3069\u304C \u6C37\u306B \u304A\u304A\u308F\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u30A8\u30F3\u30B8\u30A7\u30EB\u30D5\u30A9\u30FC\u30EB","Angel Falls","\u{1F4A6}","\u30D9\u30CD\u30BA\u30A8\u30E9\u306E \u4E16\u754C\u4E00 \u9AD8\u3044 \u305F\u304D\u3002\u9AD8\u3055\u306F \u7D04979m\u3067\u3059\u3002"]]},writing:{ja:"\u4E16\u754C\u306E \u6587\u5B57",en:"Writing Systems",c:"#5d4a7a",intro:"\u4E16\u754C\u306B\u306F \u3044\u308D\u3044\u308D\u306A \u6587\u5B57\u304C \u3042\u308A\u307E\u3059\u3002\u53F3\u304B\u3089 \u5DE6\u3078 \u66F8\u304F \u6587\u5B57\u3082 \u3042\u308B\u3088\uFF01",links:["regions","asia","europe","school-subjects","japan-traditions","inventions"],items:[["\u3072\u3089\u304C\u306A","hiragana","\u3042","1000\u5E74 \u3044\u3058\u3087\u3046 \u524D\u306B\u3001\u6F22\u5B57\u3092 \u304F\u305A\u3057\u3066 \u751F\u307E\u308C\u305F \u65E5\u672C\u306E \u6587\u5B57\u3067\u3059\u3002"],["\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8","alphabet","Aa","\u82F1\u8A9E\u306F 26\u6587\u5B57\u306E \u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u3067 \u66F8\u304D\u307E\u3059\u3002\u5927\u6587\u5B57\u3068 \u5C0F\u6587\u5B57\u304C \u3042\u308A\u307E\u3059\u3002"],["\u6F22\u5B57","kanji","\u6F22","3000\u5E74 \u3044\u3058\u3087\u3046 \u524D\u306B \u4E2D\u56FD\u3067 \u751F\u307E\u308C\u305F \u6587\u5B57\u3002\u65E5\u672C\u306B\u3082 \u4F1D\u308F\u308A\u307E\u3057\u305F\u3002"],["\u30CF\u30F3\u30B0\u30EB","Hangul","\uD55C","\u97D3\u56FD\u306E \u6587\u5B57\u3002\u6BCD\u97F3\u3068 \u5B50\u97F3\u306E \u30D1\u30FC\u30C4\u3092 \u7D44\u307F\u5408\u308F\u305B\u3066 \u66F8\u304D\u307E\u3059\u3002"],["\u30A2\u30E9\u30D3\u30A2\u6587\u5B57","Arabic script","\u0639","\u53F3\u304B\u3089 \u5DE6\u3078 \u66F8\u304F \u6587\u5B57\u3002\u30A2\u30E9\u30D3\u30A2\u8A9E\u306A\u3069\u3067 \u4F7F\u308F\u308C\u307E\u3059\u3002"],["\u30AD\u30EA\u30EB\u6587\u5B57","Cyrillic","\u0416","\u30ED\u30B7\u30A2\u306A\u3069\u3067 \u4F7F\u308F\u308C\u308B \u6587\u5B57\u3002\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u306B \u306B\u3066 \u3044\u308B \u6587\u5B57\u3082 \u3042\u308A\u307E\u3059\u3002"],["\u30C7\u30FC\u30F4\u30A1\u30CA\u30FC\u30AC\u30EA\u30FC","Devanagari","\u0905","\u30A4\u30F3\u30C9\u306E \u30D2\u30F3\u30C7\u30A3\u30FC\u8A9E\u306A\u3069\u306E \u6587\u5B57\u3002\u4E0A\u306E \u6A2A\u7DDA\u304B\u3089 \u6587\u5B57\u304C \u3076\u3089\u4E0B\u304C\u308A\u307E\u3059\u3002"],["\u30BF\u30A4\u6587\u5B57","Thai script","\u0E01","\u30BF\u30A4\u8A9E\u306E \u6587\u5B57\u3002\u4E38\u3044 \u5F62\u304C \u305F\u304F\u3055\u3093 \u3042\u308B \u6587\u5B57\u3067\u3059\u3002"]]},japan:{ja:"\u65E5\u672C \u3081\u3050\u308A",en:"Around Japan",c:"#b23a3a",intro:"\u65E5\u672C\u306F 47\u306E \u90FD\u9053\u5E9C\u770C\u3002\u5317\u304B\u3089 \u5357\u307E\u3067\u3001\u5730\u65B9\u3054\u3068\u306B \u3044\u308D\u3044\u308D\u306A \u3068\u304F\u3061\u3087\u3046\u304C \u3042\u308A\u307E\u3059\u3002",links:["nagasaki","japanese-food","japan-traditions","japan-inventions","japan-animals","months1","landmarks"],items:[["\u5317\u6D77\u9053","Hokkaido","\u26C4","\u51AC\u306E \u300C\u3055\u3063\u307D\u308D\u96EA\u307E\u3064\u308A\u300D\u306B\u306F\u3001\u5927\u304D\u306A \u96EA\u306E \u50CF\u304C \u306A\u3089\u3073\u307E\u3059\u3002"],["\u6771\u5317","Tohoku","\u{1F34E}","\u9752\u68EE\u770C\u306F\u3001\u308A\u3093\u3054\u306E \u751F\u7523\u304C \u65E5\u672C\u4E00\u3067\u3059\u3002"],["\u95A2\u6771","Kanto","\u{1F5FC}","\u65E5\u672C\u306E \u9996\u90FD \u6771\u4EAC\u304C \u3042\u308A\u307E\u3059\u3002\u65E5\u672C\u3067 \u3044\u3061\u3070\u3093 \u4EBA\u304C \u591A\u3044 \u5730\u65B9\u3067\u3059\u3002"],["\u4E2D\u90E8","Chubu","\u{1F5FB}","\u65E5\u672C\u4E00 \u9AD8\u3044 \u5BCC\u58EB\u5C71 (3776m) \u304C \u3042\u308A\u307E\u3059\u3002\u9759\u5CA1\u770C\u3068 \u5C71\u68A8\u770C\u306B \u307E\u305F\u304C\u308B \u5C71\u3067\u3059\u3002"],["\u8FD1\u757F","Kinki","\u26E9\uFE0F","\u4EAC\u90FD\u306F 1000\u5E74 \u3044\u3058\u3087\u3046\u3082 \u65E5\u672C\u306E \u90FD\u3067\u3057\u305F\u3002"],["\u4E2D\u56FD\u5730\u65B9","Chugoku","\u{1F42A}","\u9CE5\u53D6\u770C\u306B\u306F\u3001\u5927\u304D\u306A \u3059\u306A\u306E \u304A\u304B \u300C\u9CE5\u53D6\u7802\u4E18\u300D\u304C \u3042\u308A\u307E\u3059\u3002"],["\u56DB\u56FD","Shikoku","\u{1F35C}","\u9999\u5DDD\u770C\u306F \u300C\u3046\u3069\u3093\u770C\u300D\u3068\u3082 \u3088\u3070\u308C\u308B\u3001\u3055\u306C\u304D\u3046\u3069\u3093\u306E \u3075\u308B\u3055\u3068\u3067\u3059\u3002"],["\u4E5D\u5DDE","Kyushu","\u2668\uFE0F","\u304A\u3093\u305B\u3093\u304C \u305F\u304F\u3055\u3093 \u3042\u308B \u5730\u65B9\u3002\u9577\u5D0E\u770C\u3082 \u4E5D\u5DDE\u306B \u3042\u308A\u307E\u3059\u3002"],["\u6C96\u7E04","Okinawa","\u{1F420}","\u3042\u305F\u305F\u304B\u3044 \u6D77\u306B \u30B5\u30F3\u30B4\u3057\u3087\u3046\u304C \u5E83\u304C\u308B\u3001\u5357\u306E \u5CF6\u3067\u3059\u3002"]]},nagasaki:{ja:"\u9577\u5D0E\u306E \u3072\u307F\u3064",en:"Secrets of Nagasaki",c:"#2f6f9f",intro:"\u308F\u305F\u3057\u305F\u3061\u306E \u9577\u5D0E\u3002\u3080\u304B\u3057\u304B\u3089 \u5916\u56FD\u3068 \u3064\u306A\u304C\u3063\u3066 \u304D\u305F\u3001\u3068\u304F\u3079\u3064\u306A \u753A\u3067\u3059\u3002",links:["japan","europe","japanese-food","festivals-world","japan-animals","months2","vehicles"],items:[["\u51FA\u5CF6","Dejima","\u{1F3DD}\uFE0F","\u6C5F\u6238\u6642\u4EE3\u3001\u65E5\u672C\u304C \u30AA\u30E9\u30F3\u30C0\u3068 \u8CBF\u6613\u3092 \u3057\u305F \u5834\u6240\u3002\u5916\u56FD\u306E \u6587\u5316\u306E \u5165\u308A\u53E3\u3067\u3057\u305F\u3002"],["\u30DA\u30FC\u30ED\u30F3","Peiron boat race","\u{1F6A3}","\u4E2D\u56FD\u304B\u3089 \u4F1D\u308F\u3063\u305F \u30DC\u30FC\u30C8\u30EC\u30FC\u30B9\u3002\u9577\u5D0E\u306E \u590F\u306E \u884C\u4E8B\u3067\u3059\u3002"],["\u9577\u5D0E\u304F\u3093\u3061","Nagasaki Kunchi","\u{1F409}","\u6BCE\u5E74 10\u6708\u306E \u304A\u796D\u308A\u3002\u4E2D\u56FD\u304B\u3089 \u4F1D\u308F\u3063\u305F \u300C\u3058\u3083\u304A\u3069\u308A\u300D\u304C \u6709\u540D\u3067\u3059\u3002"],["\u30E9\u30F3\u30BF\u30F3\u30D5\u30A7\u30B9\u30C6\u30A3\u30D0\u30EB","Lantern Festival","\u{1F3EE}","\u4E2D\u56FD\u306E \u304A\u6B63\u6708 (\u6625\u7BC0) \u3092 \u3044\u308F\u3046 \u304A\u796D\u308A\u3002\u753A\u304C \u30E9\u30F3\u30BF\u30F3\u3067 \u3044\u3063\u3071\u3044\u306B \u306A\u308A\u307E\u3059\u3002"],["\u30AB\u30B9\u30C6\u30E9","castella","\u{1F370}","\u30DD\u30EB\u30C8\u30AC\u30EB\u304B\u3089 \u4F1D\u308F\u3063\u305F \u304A\u304B\u3057\u304C\u3001\u9577\u5D0E\u3067 \u4ECA\u306E \u5F62\u306B \u306A\u308A\u307E\u3057\u305F\u3002"],["\u3061\u3083\u3093\u307D\u3093","champon","\u{1F35C}","\u4E2D\u56FD\u304B\u3089 \u6765\u305F \u6599\u7406\u4EBA\u304C\u3001\u9577\u5D0E\u3067 \u8003\u3048\u305F \u3081\u3093\u6599\u7406\u3067\u3059\u3002"],["\u7A32\u4F50\u5C71\u306E \u591C\u666F","night view from Mt. Inasa","\u{1F303}","\u300C\u4E16\u754C\u65B0\u4E09\u5927\u591C\u666F\u300D\u306B \u3048\u3089\u3070\u308C\u305F\u3001\u304D\u308C\u3044\u306A \u591C\u666F\u304C \u898B\u3089\u308C\u307E\u3059\u3002"],["\u5BFE\u99AC","Tsushima","\u{1F408}","\u30C4\u30B7\u30DE\u30E4\u30DE\u30CD\u30B3\u304C \u3059\u3080 \u5CF6\u3002\u6674\u308C\u305F \u65E5\u306B\u306F \u97D3\u56FD\u304C \u898B\u3048\u307E\u3059\u3002"],["\u30CF\u30A6\u30B9\u30C6\u30F3\u30DC\u30B9","Huis Ten Bosch","\u{1F337}","\u4F50\u4E16\u4FDD\u5E02\u306B \u3042\u308B\u3001\u30AA\u30E9\u30F3\u30C0\u306E \u753A\u306A\u307F\u3092 \u30A4\u30E1\u30FC\u30B8\u3057\u305F \u30C6\u30FC\u30DE\u30D1\u30FC\u30AF\u3067\u3059\u3002"]]},"japanese-food":{ja:"\u548C\u98DF",en:"Japanese Food",c:"#a5452f",intro:"\u548C\u98DF\u306F 2013\u5E74\u306B \u30E6\u30CD\u30B9\u30B3 \u7121\u5F62\u6587\u5316\u907A\u7523\u306B \u306A\u308A\u307E\u3057\u305F\u3002\u4E16\u754C\u4E2D\u3067 \u4EBA\u6C17\u3067\u3059\u3002",links:["world-dishes","sweets","nagasaki","vegetables","fruits","japan","ocean"],items:[["\u3059\u3057","sushi","\u{1F363}","\u6C5F\u6238\u6642\u4EE3\u3001\u5C4B\u53F0\u3067 \u3059\u3050 \u98DF\u3079\u3089\u308C\u308B \u30D5\u30A1\u30B9\u30C8\u30D5\u30FC\u30C9\u3068\u3057\u3066 \u4EBA\u6C17\u306B \u306A\u308A\u307E\u3057\u305F\u3002"],["\u30E9\u30FC\u30E1\u30F3","ramen","\u{1F35C}","\u4E2D\u56FD\u306E \u3081\u3093\u6599\u7406\u304C \u3082\u3068\u306B \u306A\u308A\u3001\u65E5\u672C\u3067 \u3044\u308D\u3044\u308D\u306A \u5473\u306B \u5E83\u304C\u308A\u307E\u3057\u305F\u3002"],["\u5929\u3077\u3089","tempura","\u{1F364}","\u30DD\u30EB\u30C8\u30AC\u30EB\u304B\u3089 \u4F1D\u308F\u3063\u305F \u6599\u7406\u304C \u3082\u3068\u3060\u3068 \u3044\u308F\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u304A\u306B\u304E\u308A","rice ball","\u{1F359}","\u65E5\u672C\u4EBA\u304C 1000\u5E74 \u3044\u3058\u3087\u3046 \u524D\u304B\u3089 \u98DF\u3079\u3066 \u3044\u308B\u3001\u304A\u3079\u3093\u3068\u3046\u306E \u5B9A\u756A\u3067\u3059\u3002"],["\u307F\u305D\u3057\u308B","miso soup","\u{1F963}","\u307F\u305D\u306F \u5927\u8C46\u304B\u3089 \u4F5C\u308B \u65E5\u672C\u306E \u8ABF\u5473\u6599\u3067\u3059\u3002"],["\u306A\u3063\u3068\u3046","natto","\u{1FAD8}","\u5927\u8C46\u3092 \u306F\u3063\u3053\u3046 \u3055\u305B\u305F \u98DF\u3079\u3082\u306E\u3002\u30CD\u30D0\u30CD\u30D0\u304C \u3068\u304F\u3061\u3087\u3046\u3067\u3059\u3002"],["\u3060\u3093\u3054","dango","\u{1F361}","\u304A\u6708\u898B\u3084 \u304A\u82B1\u898B\u3067 \u98DF\u3079\u308B\u3001\u6614\u304B\u3089\u306E \u548C\u304C\u3057\u3067\u3059\u3002"],["\u30AB\u30EC\u30FC\u30E9\u30A4\u30B9","curry and rice","\u{1F35B}","\u30A4\u30F3\u30C9\u751F\u307E\u308C\u3001\u30A4\u30AE\u30EA\u30B9 \u7D4C\u7531\u3067 \u65E5\u672C\u306B \u6765\u3066\u3001\u65E5\u672C\u306E \u56FD\u6C11\u98DF\u306B \u306A\u308A\u307E\u3057\u305F\u3002"]]},"japan-traditions":{ja:"\u65E5\u672C\u306E \u6587\u5316",en:"Japanese Culture",c:"#8f3b5a",intro:"Can you play kendama? \u65E5\u672C\u3067 \u9577\u304F \u5927\u5207\u306B \u3055\u308C\u3066 \u304D\u305F \u6587\u5316\u3092 \u3057\u3087\u3046\u304B\u3044 \u3057\u307E\u3059\u3002",links:["japan","months1","months2","instruments","writing","olympics"],items:[["\u3051\u3093\u7389","kendama","\u{1F3AF}","\u7389\u3092 \u76BF\u306B \u306E\u305B\u305F\u308A\u3001\u3051\u3093\u306B \u3055\u3057\u305F\u308A \u3059\u308B \u3042\u305D\u3073\u3002\u4E16\u754C\u5927\u4F1A\u3082 \u3042\u308A\u307E\u3059\u3002"],["\u6298\u308A\u7D19","origami","\u{1F4C4}","1\u307E\u3044\u306E \u7D19\u304B\u3089 \u3064\u308B\u3084 \u304B\u3076\u3068\u3092 \u4F5C\u308A\u307E\u3059\u3002\u300Corigami\u300D\u306F \u4E16\u754C\u3067 \u901A\u3058\u308B \u3053\u3068\u3070\u3067\u3059\u3002"],["\u7740\u7269","kimono","\u{1F458}","\u65E5\u672C\u306E \u4F1D\u7D71\u7684\u306A \u8863\u670D\u3002\u304A\u6B63\u6708\u3084 \u6210\u4EBA\u5F0F\u306A\u3069\u3067 \u7740\u307E\u3059\u3002"],["\u66F8\u9053","calligraphy","\u{1F58C}\uFE0F","\u7B46\u3068 \u3059\u307F\u3067\u3001\u6587\u5B57\u3092 \u7F8E\u3057\u304F \u66F8\u304F \u82B8\u8853\u3067\u3059\u3002"],["\u8336\u9053","tea ceremony","\u{1F375}","\u304A\u3082\u3066\u306A\u3057\u306E \u5FC3\u3092 \u5927\u5207\u306B \u3057\u3066\u3001\u304A\u8336\u3092 \u305F\u3066\u308B \u4F5C\u6CD5\u3067\u3059\u3002"],["\u3059\u3082\u3046","sumo","\u{1F93C}","\u65E5\u672C\u306E \u56FD\u6280\u3002\u571F\u4FF5\u306E \u5916\u306B \u51FA\u308B\u304B\u3001\u8DB3\u306E \u3046\u3089 \u3044\u304C\u3044\u304C \u3064\u304F\u3068 \u8CA0\u3051\u3067\u3059\u3002"],["\u6D6E\u4E16\u7D75","ukiyo-e","\u{1F30A}","\u6C5F\u6238\u6642\u4EE3\u306E \u6728\u7248\u753B\u3002\u5317\u658E\u306E \u300C\u5927\u6CE2\u300D\u306E \u7D75\u306F \u4E16\u754C\u4E2D\u3067 \u6709\u540D\u3067\u3059\u3002"],["\u307C\u3093\u304A\u3069\u308A","Bon dance","\u{1F3EE}","\u590F\u306E \u591C\u3001\u307F\u3093\u306A\u3067 \u308F\u306B \u306A\u3063\u3066 \u304A\u3069\u308B \u884C\u4E8B\u3067\u3059\u3002"],["\u3053\u307E","spinning top","\u{1F300}","\u304A\u6B63\u6708\u306E \u3042\u305D\u3073\u3002\u9577\u304F \u56DE\u3057\u305F \u4EBA\u304C \u52DD\u3061\uFF01"]]},"japan-inventions":{ja:"\u65E5\u672C \u751F\u307E\u308C\u306E \u767A\u660E",en:"Made in Japan",c:"#c24a3a",intro:"\u65E5\u672C\u3067 \u751F\u307E\u308C\u3066\u3001\u4E16\u754C\u4E2D\u3067 \u4F7F\u308F\u308C\u3066 \u3044\u308B \u767A\u660E\u304C \u305F\u304F\u3055\u3093 \u3042\u308A\u307E\u3059\u3002",links:["inventions","japan","space-explore","vehicles","japanese-food"],items:[["\u30A4\u30F3\u30B9\u30BF\u30F3\u30C8\u30E9\u30FC\u30E1\u30F3","instant noodles","\u{1F35C}","1958\u5E74\u3001\u5B89\u85E4\u767E\u798F\u3055\u3093\u304C \u767A\u660E\u3002\u30AB\u30C3\u30D7\u3081\u3093\u306F 1971\u5E74\u306B \u751F\u307E\u308C\u307E\u3057\u305F\u3002"],["\u30AB\u30E9\u30AA\u30B1","karaoke","\u{1F3A4}","1970\u5E74\u4EE3\u306B \u65E5\u672C\u3067 \u751F\u307E\u308C\u3001\u300Ckaraoke\u300D\u306F \u82F1\u8A9E\u306B\u3082 \u306A\u308A\u307E\u3057\u305F\u3002"],["\u7D75\u6587\u5B57","emoji","\u{1F600}","1999\u5E74\u306B \u65E5\u672C\u306E \u3051\u3044\u305F\u3044\u96FB\u8A71\u306E \u305F\u3081\u306B \u4F5C\u3089\u308C\u3001\u4ECA\u306F \u4E16\u754C\u4E2D\u3067 \u4F7F\u308F\u308C\u3066 \u3044\u307E\u3059\u3002"],["QR\u30B3\u30FC\u30C9","QR code","\u{1F533}","1994\u5E74\u3001\u65E5\u672C\u306E \u4F1A\u793E\u304C \u767A\u660E\u3057\u307E\u3057\u305F\u3002"],["\u65B0\u5E79\u7DDA","Shinkansen","\u{1F684}","1964\u5E74\u306B \u8D70\u308A\u59CB\u3081\u305F\u3001\u4E16\u754C\u3067 \u306F\u3058\u3081\u3066\u306E \u9AD8\u901F\u9244\u9053\u3067\u3059\u3002"],["\u9752\u8272LED","blue LED","\u{1F4A1}","\u65E5\u672C\u4EBA \u7814\u7A76\u8005\u304C \u767A\u660E\u3057\u30012014\u5E74\u306B \u30CE\u30FC\u30D9\u30EB\u8CDE\u3092 \u53D7\u8CDE\u3057\u307E\u3057\u305F\u3002"],["\u56DE\u8EE2\u305A\u3057","conveyor belt sushi","\u{1F363}","1958\u5E74\u3001\u5927\u962A\u3067 \u751F\u307E\u308C\u307E\u3057\u305F\u3002\u30D3\u30FC\u30EB\u5DE5\u5834\u306E \u30D9\u30EB\u30C8\u30B3\u30F3\u30D9\u30A2\u304C \u30D2\u30F3\u30C8\u3067\u3059\u3002"]]},months1:{ja:"1\u6708\u301C6\u6708\u306E \u884C\u4E8B",en:"January to June",c:"#c25a7a",intro:"When is your birthday? \u6708\u306E \u540D\u524D\u3068\u3001\u305D\u306E \u6708\u306E \u884C\u4E8B\u3092 \u304A\u307C\u3048\u3088\u3046\u3002",links:["months2","japan-traditions","school-events","weather","festivals-world"],items:[["1\u6708","January","\u{1F38D}","\u304A\u6B63\u6708\u3002\u304A\u305B\u3061\u6599\u7406\u3084 \u304A\u5E74\u7389\u3001\u521D\u3082\u3046\u3067\u306E \u6708\u3067\u3059\u3002"],["2\u6708","February","\u{1F479}","\u7BC0\u5206\u3002\u300C\u304A\u306B\u306F \u5916\u3001\u3075\u304F\u306F \u5185\u300D\u3068 \u8C46\u3092 \u307E\u304D\u307E\u3059\u3002"],["3\u6708","March","\u{1F38E}","\u3072\u306A\u307E\u3064\u308A\u3002\u5973\u306E\u5B50\u306E \u6210\u9577\u3092 \u3044\u308F\u3044\u307E\u3059\u3002\u5352\u696D\u5F0F\u306E \u6708\u3067\u3082 \u3042\u308A\u307E\u3059\u3002"],["4\u6708","April","\u{1F338}","\u304A\u82B1\u898B\u3068 \u5165\u5B66\u5F0F\u3002\u65B0\u3057\u3044 \u5B66\u5E74\u306E \u59CB\u307E\u308A\u3067\u3059\u3002"],["5\u6708","May","\u{1F38F}","5\u67085\u65E5\u306F \u3053\u3069\u3082\u306E\u65E5\u3002\u3053\u3044\u306E\u307C\u308A\u3092 \u304B\u3056\u308A\u307E\u3059\u3002"],["6\u6708","June","\u2614","\u3064\u3086\u306E \u304D\u305B\u3064\u3002\u30A2\u30B8\u30B5\u30A4\u304C \u304D\u308C\u3044\u306B \u3055\u304D\u307E\u3059\u3002"]]},months2:{ja:"7\u6708\u301C12\u6708\u306E \u884C\u4E8B",en:"July to December",c:"#7a5ac2",intro:"When is your birthday? \u5F8C\u534A\u306E 6\u304B\u6708\u306E \u884C\u4E8B\u3092 \u898B\u3066 \u307F\u3088\u3046\u3002",links:["months1","festivals-world","nagasaki","moon-stars","sweets"],items:[["7\u6708","July","\u{1F38B}","\u4E03\u5915\u3002\u305F\u3093\u3056\u304F\u306B \u306D\u304C\u3044\u3054\u3068\u3092 \u66F8\u3044\u3066\u3001\u30B5\u30B5\u306B \u304B\u3056\u308A\u307E\u3059\u3002"],["8\u6708","August","\u{1F386}","\u590F\u4F11\u307F\u3068 \u82B1\u706B\u5927\u4F1A\u3002\u304A\u76C6\u306B\u306F \u5BB6\u65CF\u304C \u96C6\u307E\u308A\u307E\u3059\u3002"],["9\u6708","September","\u{1F391}","\u304A\u6708\u898B\u3002\u3060\u3093\u3054\u3068 \u30B9\u30B9\u30AD\u3092 \u304B\u3056\u3063\u3066 \u6708\u3092 \u306A\u304C\u3081\u307E\u3059\u3002"],["10\u6708","October","\u{1F383}","\u9577\u5D0E\u304F\u3093\u3061\u3068 \u30CF\u30ED\u30A6\u30A3\u30F3\u3002\u904B\u52D5\u4F1A\u304C \u3042\u308B \u5B66\u6821\u3082 \u3042\u308A\u307E\u3059\u3002"],["11\u6708","November","\u{1F341}","\u3082\u307F\u3058\u304C \u8D64\u304F \u306A\u308B \u7D05\u8449\u306E \u304D\u305B\u3064\u3067\u3059\u3002"],["12\u6708","December","\u{1F384}","\u30AF\u30EA\u30B9\u30DE\u30B9\u3068 \u5927\u307F\u305D\u304B\u30021\u5E74\u306E \u3055\u3044\u3054\u306E \u6708\u3067\u3059\u3002"]]},"festivals-world":{ja:"\u4E16\u754C\u306E \u304A\u796D\u308A",en:"Festivals Around the World",c:"#d2693a",intro:"\u4E16\u754C\u4E2D\u306B\u3001\u8272\u3068\u308A\u3069\u308A\u306E \u304A\u796D\u308A\u304C \u3042\u308A\u307E\u3059\u3002",links:["months2","asia","europe","americas","nagasaki","instruments"],items:[["\u6625\u7BC0","Lunar New Year","\u{1F9E7}","\u4E2D\u56FD\u306A\u3069\u306E \u304A\u6B63\u6708\u3002\u8D64\u3044 \u3075\u304F\u308D\u306B \u5165\u3063\u305F \u304A\u5E74\u7389\u3092 \u3082\u3089\u3044\u307E\u3059\u3002"],["\u30DB\u30FC\u30EA\u30FC","Holi","\u{1F3A8}","\u30A4\u30F3\u30C9\u306E \u6625\u306E \u304A\u796D\u308A\u3002\u8272\u306E \u3053\u306A\u3092 \u304B\u3051\u5408\u3044\u307E\u3059\u3002"],["\u30EA\u30AA\u306E \u30AB\u30FC\u30CB\u30D0\u30EB","Rio Carnival","\u{1F3AD}","\u30D6\u30E9\u30B8\u30EB\u3002\u306F\u3067\u306A \u3044\u3057\u3087\u3046\u3067 \u30B5\u30F3\u30D0\u3092 \u304A\u3069\u308A\u307E\u3059\u3002"],["\u30C8\u30DE\u30C6\u30A3\u30FC\u30CA","La Tomatina","\u{1F345}","\u30B9\u30DA\u30A4\u30F3\u3002\u753A\u3058\u3085\u3046\u3067 \u30C8\u30DE\u30C8\u3092 \u6295\u3052\u5408\u3044\u307E\u3059\u3002"],["\u30BD\u30F3\u30AF\u30E9\u30FC\u30F3","Songkran","\u{1F4A6}","\u30BF\u30A4\u306E \u304A\u6B63\u6708\u3002\u6C34\u3092 \u304B\u3051\u5408\u3063\u3066 \u3044\u308F\u3044\u307E\u3059\u3002"],["\u30CF\u30ED\u30A6\u30A3\u30F3","Halloween","\u{1F383}","\u30A2\u30A4\u30EB\u30E9\u30F3\u30C9\u306E \u3080\u304B\u3057\u306E \u304A\u796D\u308A\u304C \u3082\u3068\u3060\u3068 \u3044\u308F\u308C\u307E\u3059\u3002"],["\u30AF\u30EA\u30B9\u30DE\u30B9","Christmas","\u{1F384}","12\u670825\u65E5\u3002\u4E16\u754C\u4E2D\u3067 \u3044\u308F\u308F\u308C\u308B \u51AC\u306E \u884C\u4E8B\u3067\u3059\u3002"]]},"world-dishes":{ja:"\u4E16\u754C\u306E \u6599\u7406",en:"Food Around the World",c:"#b5602a",intro:"What would you like? \u4E16\u754C\u306E \u6709\u540D\u306A \u6599\u7406\u3092 \u98DF\u3079\u6B69\u304D \u3057\u3088\u3046\u3002",links:["japanese-food","sweets","fruits","vegetables","asia","europe","americas"],items:[["\u30D4\u30B6","pizza","\u{1F355}","\u30A4\u30BF\u30EA\u30A2\u306E \u30CA\u30DD\u30EA\u3067 \u751F\u307E\u308C\u307E\u3057\u305F\u3002"],["\u30CF\u30F3\u30D0\u30FC\u30AC\u30FC","hamburger","\u{1F354}","\u30A2\u30E1\u30EA\u30AB\u3067 \u4EBA\u6C17\u306B \u306A\u3063\u305F \u6599\u7406\u3002\u540D\u524D\u306F \u30C9\u30A4\u30C4\u306E \u753A \u30CF\u30F3\u30D6\u30EB\u30AF\u304B\u3089\u3002"],["\u30BF\u30B3\u30B9","tacos","\u{1F32E}","\u30E1\u30AD\u30B7\u30B3\u306E \u6599\u7406\u3002\u30C8\u30A6\u30E2\u30ED\u30B3\u30B7\u306E \u76AE\u3067 \u5177\u3092 \u306F\u3055\u307F\u307E\u3059\u3002"],["\u30AB\u30EC\u30FC","curry","\u{1F35B}","\u30A4\u30F3\u30C9\u306E \u6599\u7406\u3002\u305F\u304F\u3055\u3093\u306E \u30B9\u30D1\u30A4\u30B9\u3092 \u4F7F\u3044\u307E\u3059\u3002"],["\u30D1\u30A8\u30EA\u30A2","paella","\u{1F958}","\u30B9\u30DA\u30A4\u30F3\u306E \u6599\u7406\u3002\u5927\u304D\u306A \u306A\u3079\u3067 \u304A\u7C73\u3068 \u9B5A\u4ECB\u3092 \u708A\u304D\u307E\u3059\u3002"],["\u30D5\u30A9\u30FC","pho","\u{1F35C}","\u30D9\u30C8\u30CA\u30E0\u306E \u7C73\u7C89\u306E \u3081\u3093\u6599\u7406\u3067\u3059\u3002"],["\u30AF\u30ED\u30EF\u30C3\u30B5\u30F3","croissant","\u{1F950}","\u30D5\u30E9\u30F3\u30B9\u306E \u30D1\u30F3\u3002\u540D\u524D\u306F \u30D5\u30E9\u30F3\u30B9\u8A9E\u3067 \u300C\u4E09\u65E5\u6708\u300D\u3068 \u3044\u3046 \u3044\u307F\u3002"],["\u30D5\u30A3\u30C3\u30B7\u30E5\u30FB\u30A2\u30F3\u30C9\u30FB\u30C1\u30C3\u30D7\u30B9","fish and chips","\u{1F41F}","\u30A4\u30AE\u30EA\u30B9\u306E \u6599\u7406\u3002\u9B5A\u306E \u30D5\u30E9\u30A4\u3068 \u30DD\u30C6\u30C8\u3067\u3059\u3002"],["\u30AE\u30E7\u30FC\u30B6","dumplings","\u{1F95F}","\u4E2D\u56FD\u306E \u6599\u7406\u3002\u4E2D\u56FD\u3067\u306F \u3086\u3067\u305F \u6C34\u30AE\u30E7\u30FC\u30B6\u304C \u5B9A\u756A\u3067\u3059\u3002"]]},sweets:{ja:"\u304A\u304B\u3057\u306E \u305B\u304B\u3044",en:"Sweets",c:"#c0567a",intro:"I like chocolate. \u3042\u307E\u3044 \u3082\u306E\u306E \u3072\u307F\u3064\u3092 \u3057\u3087\u3046\u304B\u3044 \u3057\u307E\u3059\u3002",links:["world-dishes","fruits","japanese-food","inventions","africa"],items:[["\u30C1\u30E7\u30B3\u30EC\u30FC\u30C8","chocolate","\u{1F36B}","\u30AB\u30AB\u30AA\u8C46\u304B\u3089 \u4F5C\u308A\u307E\u3059\u3002\u3080\u304B\u3057\u306E \u30E1\u30AD\u30B7\u30B3\u3067\u306F\u3001\u306B\u304C\u3044 \u98F2\u307F\u3082\u306E\u3067\u3057\u305F\u3002"],["\u30A2\u30A4\u30B9\u30AF\u30EA\u30FC\u30E0","ice cream","\u{1F366}","\u65E5\u672C\u3067 \u306F\u3058\u3081\u3066 \u58F2\u3089\u308C\u305F\u306E\u306F 1869\u5E74\u3001\u6A2A\u6D5C\u3067\u3057\u305F\u3002"],["\u308F\u305F\u3042\u3081","cotton candy","\u{1F36D}","\u308F\u305F\u3042\u3081\u3092 \u4F5C\u308B \u6A5F\u68B0\u3092 \u8003\u3048\u305F\u306E\u306F\u3001\u306A\u3093\u3068 \u6B6F\u533B\u8005\u3055\u3093\u3067\u3057\u305F\u3002"],["\u30AF\u30C3\u30AD\u30FC","cookie","\u{1F36A}","\u540D\u524D\u306F \u30AA\u30E9\u30F3\u30C0\u8A9E\u306E \u300C\u5C0F\u3055\u306A \u30B1\u30FC\u30AD\u300D\u304B\u3089 \u6765\u3066\u3044\u307E\u3059\u3002"],["\u30D7\u30EA\u30F3","pudding","\u{1F36E}","\u30A4\u30AE\u30EA\u30B9\u306E \u300C\u30D7\u30C7\u30A3\u30F3\u30B0\u300D\u304C \u65E5\u672C\u3067 \u30D7\u30EA\u30F3\u306B \u306A\u308A\u307E\u3057\u305F\u3002"],["\u30C9\u30FC\u30CA\u30C4","donut","\u{1F369}","\u307E\u3093\u4E2D\u306E \u3042\u306A\u306F\u3001\u751F\u5730\u306B \u706B\u3092 \u65E9\u304F \u901A\u3059 \u305F\u3081\u306E \u304F\u3075\u3046\u3067\u3059\u3002"],["\u30B1\u30FC\u30AD","cake","\u{1F382}","\u305F\u3093\u751F\u65E5\u306B \u308D\u3046\u305D\u304F\u3092 \u3075\u304D\u6D88\u3059 \u7FD2\u6163\u306F\u3001\u4E16\u754C\u4E2D\u306B \u3042\u308A\u307E\u3059\u3002"]]},fruits:{ja:"\u304F\u3060\u3082\u306E",en:"Fruits",c:"#d06a2a",intro:"What fruit do you like? \u304F\u3060\u3082\u306E\u306E \u3072\u307F\u3064\u3092 \u3055\u304C\u305D\u3046\u3002",links:["vegetables","sweets","plants","rainforest","world-dishes"],items:[["\u308A\u3093\u3054","apple","\u{1F34E}","\u65E5\u672C\u306E \u308A\u3093\u3054\u306E \u534A\u5206 \u3044\u3058\u3087\u3046\u306F \u9752\u68EE\u770C\u3067 \u4F5C\u3089\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u30D0\u30CA\u30CA","banana","\u{1F34C}","\u30D0\u30CA\u30CA\u306F \u6728\u3067\u306F \u306A\u304F\u3001\u3068\u3066\u3082 \u5927\u304D\u306A \u8349\u306E \u306A\u304B\u307E\u3067\u3059\u3002"],["\u3044\u3061\u3054","strawberry","\u{1F353}","\u8868\u9762\u306E \u3064\u3076\u3064\u3076\u304C\u3001\u3058\u3064\u306F \u672C\u5F53\u306E \u5B9F\u3067\u3059\u3002"],["\u30B9\u30A4\u30AB","watermelon","\u{1F349}","90%\u3044\u3058\u3087\u3046\u304C \u6C34\u5206\u3002\u590F\u306B \u3074\u3063\u305F\u308A\u306E \u304F\u3060\u3082\u306E\u3067\u3059\u3002"],["\u307F\u304B\u3093","mandarin orange","\u{1F34A}","\u548C\u6B4C\u5C71\u770C\u3084 \u611B\u5A9B\u770C\u3067 \u305F\u304F\u3055\u3093 \u4F5C\u3089\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u30D1\u30A4\u30CA\u30C3\u30D7\u30EB","pineapple","\u{1F34D}","1\u3064\u306E \u5B9F\u304C \u80B2\u3064\u307E\u3067 2\u5E74 \u304F\u3089\u3044 \u304B\u304B\u308A\u307E\u3059\u3002"],["\u30DE\u30F3\u30B4\u30FC","mango","\u{1F96D}","\u30A4\u30F3\u30C9\u306E \u56FD\u306E \u304F\u3060\u3082\u306E \u3067\u3059\u3002"],["\u3076\u3069\u3046","grapes","\u{1F347}","\u30B8\u30E5\u30FC\u30B9\u3084 \u307B\u3057\u3076\u3069\u3046 (\u30EC\u30FC\u30BA\u30F3) \u306B\u3082 \u306A\u308A\u307E\u3059\u3002"]]},vegetables:{ja:"\u3084\u3055\u3044",en:"Vegetables",c:"#5f9a3a",intro:"\u3084\u3055\u3044\u306E \u610F\u5916\u306A \u3072\u307F\u3064\u3002\u304D\u3089\u3044\u306A \u3084\u3055\u3044\u3082 \u597D\u304D\u306B \u306A\u308B \u304B\u3082\uFF1F",links:["fruits","farm","plants","world-dishes","japanese-food","americas"],items:[["\u30C8\u30DE\u30C8","tomato","\u{1F345}","\u5357\u30A2\u30E1\u30EA\u30AB \u751F\u307E\u308C\u3002\u690D\u7269\u5B66\u3067\u306F \u300C\u304F\u3060\u3082\u306E (\u5B9F)\u300D\u306E \u306A\u304B\u307E\u3067\u3059\u3002"],["\u306B\u3093\u3058\u3093","carrot","\u{1F955}","\u3080\u304B\u3057\u306F \u3080\u3089\u3055\u304D\u8272\u3084 \u9EC4\u8272\u306E \u306B\u3093\u3058\u3093\u3082 \u3042\u308A\u307E\u3057\u305F\u3002"],["\u30B8\u30E3\u30AC\u30A4\u30E2","potato","\u{1F954}","\u5357\u30A2\u30E1\u30EA\u30AB\u306E \u30A2\u30F3\u30C7\u30B9\u5C71\u8108\u3067 \u751F\u307E\u308C\u305F \u3084\u3055\u3044\u3067\u3059\u3002"],["\u30C8\u30A6\u30E2\u30ED\u30B3\u30B7","corn","\u{1F33D}","\u3072\u3052\u306E \u6570\u3068\u3001\u3064\u3076\u306E \u6570\u306F \u540C\u3058\u3067\u3059\u3002"],["\u30D6\u30ED\u30C3\u30B3\u30EA\u30FC","broccoli","\u{1F966}","\u98DF\u3079\u3066 \u3044\u308B\u306E\u306F\u3001\u82B1\u306E \u3064\u307C\u307F\u306E \u90E8\u5206\u3067\u3059\u3002"],["\u305F\u307E\u306D\u304E","onion","\u{1F9C5}","\u5207\u308B\u3068 \u76EE\u306B \u3057\u307F\u308B \u6210\u5206\u304C \u51FA\u3066\u3001\u306A\u307F\u3060\u304C \u51FA\u307E\u3059\u3002"],["\u304B\u307C\u3061\u3083","pumpkin","\u{1F383}","\u540D\u524D\u306F \u56FD\u306E \u540D\u524D \u300C\u30AB\u30F3\u30DC\u30B8\u30A2\u300D\u304B\u3089 \u6765\u305F\u3068 \u3044\u308F\u308C\u307E\u3059\u3002"],["\u30D4\u30FC\u30DE\u30F3","green pepper","\u{1FAD1}","\u8D64\u304F \u306A\u308B\u307E\u3067 \u80B2\u3066\u308B\u3068\u3001\u3042\u307E\u3044 \u8D64\u30D4\u30FC\u30DE\u30F3\u306B \u306A\u308A\u307E\u3059\u3002"]]},"ball-sports":{ja:"\u30DC\u30FC\u30EB\u306E \u30B9\u30DD\u30FC\u30C4",en:"Ball Sports",c:"#2f8a4a",intro:"What sport do you like? \u30C1\u30FC\u30E0\u306E \u4EBA\u6570\u3084 \u30EB\u30FC\u30EB\u3092 \u304F\u3089\u3079\u3066 \u307F\u3088\u3046\u3002",links:["olympics","winter-sports","americas","jobs-dream","school-events"],items:[["\u30B5\u30C3\u30AB\u30FC","soccer","\u26BD","1\u30C1\u30FC\u30E0 11\u4EBA\u3002\u30EF\u30FC\u30EB\u30C9\u30AB\u30C3\u30D7\u306F 4\u5E74\u306B 1\u56DE \u3072\u3089\u304B\u308C\u307E\u3059\u3002"],["\u91CE\u7403","baseball","\u26BE","1\u30C1\u30FC\u30E0 9\u4EBA\u3002\u30A2\u30E1\u30EA\u30AB\u3067 \u751F\u307E\u308C\u3001\u65E5\u672C\u3067\u3082 \u3068\u3066\u3082 \u4EBA\u6C17\u3067\u3059\u3002"],["\u30D0\u30B9\u30B1\u30C3\u30C8\u30DC\u30FC\u30EB","basketball","\u{1F3C0}","1\u30C1\u30FC\u30E0 5\u4EBA\u3002\u3055\u3044\u3057\u3087\u306F \u3082\u3082\u306E \u304B\u3054\u3092 \u30B4\u30FC\u30EB\u306B \u4F7F\u3044\u307E\u3057\u305F\u3002"],["\u30D0\u30EC\u30FC\u30DC\u30FC\u30EB","volleyball","\u{1F3D0}","1\u30C1\u30FC\u30E0 6\u4EBA\u30021895\u5E74\u306B \u30A2\u30E1\u30EA\u30AB\u3067 \u751F\u307E\u308C\u307E\u3057\u305F\u3002"],["\u30E9\u30B0\u30D3\u30FC","rugby","\u{1F3C9}","1\u30C1\u30FC\u30E0 15\u4EBA\u3002\u30DC\u30FC\u30EB\u3092 \u524D\u306B \u6295\u3052\u3066\u306F \u3044\u3051\u307E\u305B\u3093\u3002"],["\u30C6\u30CB\u30B9","tennis","\u{1F3BE}","0\u70B9\u306E \u3053\u3068\u3092 \u300C\u30E9\u30D6 (love)\u300D\u3068 \u3044\u3044\u307E\u3059\u3002"],["\u305F\u3063\u304D\u3085\u3046","table tennis","\u{1F3D3}","\u300C\u30D4\u30F3\u30DD\u30F3\u300D\u3068\u3082 \u3088\u3070\u308C\u307E\u3059\u3002\u4E2D\u56FD\u3084 \u65E5\u672C\u304C \u5F37\u3044 \u30B9\u30DD\u30FC\u30C4\u3067\u3059\u3002"],["\u30D0\u30C9\u30DF\u30F3\u30C8\u30F3","badminton","\u{1F3F8}","\u30B7\u30E3\u30C8\u30EB\u306E \u30B9\u30D4\u30FC\u30C9\u306F\u3001\u3058\u305D\u304F 500km \u3044\u3058\u3087\u3046\u306E \u8A18\u9332\u304C \u3042\u308A\u307E\u3059\u3002"]]},olympics:{ja:"\u30AA\u30EA\u30F3\u30D4\u30C3\u30AF",en:"The Olympics",c:"#c49a2a",intro:"4\u5E74\u306B 1\u56DE\u3001\u4E16\u754C\u4E2D\u306E \u9078\u624B\u304C \u96C6\u307E\u308B \u30B9\u30DD\u30FC\u30C4\u306E \u304A\u796D\u308A\u3067\u3059\u3002",links:["ball-sports","winter-sports","europe","japan-traditions","animal-records"],items:[["\u4E94\u8F2A\u306E \u30DE\u30FC\u30AF","the Olympic rings","\u{1F3C5}","5\u3064\u306E \u8F2A\u306F\u3001\u4E16\u754C\u306E 5\u3064\u306E \u5927\u9678\u3092 \u3042\u3089\u308F\u3057\u3066 \u3044\u307E\u3059\u3002"],["\u53E4\u4EE3\u30AA\u30EA\u30F3\u30D4\u30C3\u30AF","ancient Olympics","\u{1F3DB}\uFE0F","2800\u5E74 \u304F\u3089\u3044 \u524D\u3001\u30AE\u30EA\u30B7\u30E3\u306E \u30AA\u30EA\u30F3\u30D4\u30A2\u3067 \u59CB\u307E\u308A\u307E\u3057\u305F\u3002"],["\u91D1\u30E1\u30C0\u30EB","gold medal","\u{1F947}","\u3058\u3064\u306F \u307B\u3068\u3093\u3069\u304C \u9280\u3067 \u3067\u304D\u3066 \u3044\u3066\u3001\u8868\u9762\u306B \u91D1\u304C \u306C\u3089\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u30DE\u30E9\u30BD\u30F3","marathon","\u{1F3C3}","42.195km\u3092 \u8D70\u308A\u307E\u3059\u3002"],["\u3058\u3085\u3046\u3069\u3046","judo","\u{1F94B}","\u65E5\u672C\u3067 \u751F\u307E\u308C\u305F \u30B9\u30DD\u30FC\u30C4\u30021964\u5E74\u306E \u6771\u4EAC\u5927\u4F1A\u304B\u3089 \u30AA\u30EA\u30F3\u30D4\u30C3\u30AF\u7AF6\u6280\u306B\u3002"],["\u30B9\u30B1\u30FC\u30C8\u30DC\u30FC\u30C9","skateboarding","\u{1F6F9}","\u6771\u4EAC2020\u5927\u4F1A\u3067 \u306F\u3058\u3081\u3066 \u30AA\u30EA\u30F3\u30D4\u30C3\u30AF\u7AF6\u6280\u306B \u306A\u308A\u307E\u3057\u305F\u3002"],["\u30D1\u30E9\u30EA\u30F3\u30D4\u30C3\u30AF","Paralympics","\u267F","\u3057\u3087\u3046\u304C\u3044\u306E \u3042\u308B \u9078\u624B\u306E \u5927\u4F1A\u3002\u30AA\u30EA\u30F3\u30D4\u30C3\u30AF\u3068 \u540C\u3058 \u5E74\u306B \u3072\u3089\u304B\u308C\u307E\u3059\u3002"]]},"winter-sports":{ja:"\u51AC\u306E \u30B9\u30DD\u30FC\u30C4",en:"Winter Sports",c:"#4a7fb0",intro:"\u65E5\u672C\u3067\u306F 1972\u5E74\u306B \u672D\u5E4C\u30011998\u5E74\u306B \u9577\u91CE\u3067 \u51AC\u306E \u30AA\u30EA\u30F3\u30D4\u30C3\u30AF\u304C \u3072\u3089\u304B\u308C\u307E\u3057\u305F\u3002",links:["olympics","polar","weather","ball-sports"],items:[["\u30B9\u30AD\u30FC","skiing","\u26F7\uFE0F","\u30B8\u30E3\u30F3\u30D7\u7AF6\u6280\u3067\u306F\u3001100m\u3044\u3058\u3087\u3046\u3082 \u7A7A\u3092 \u3068\u3073\u307E\u3059\u3002"],["\u30B9\u30CE\u30FC\u30DC\u30FC\u30C9","snowboarding","\u{1F3C2}","1998\u5E74\u306E \u9577\u91CE\u5927\u4F1A\u304B\u3089 \u30AA\u30EA\u30F3\u30D4\u30C3\u30AF\u7AF6\u6280\u306B \u306A\u308A\u307E\u3057\u305F\u3002"],["\u30B9\u30B1\u30FC\u30C8","skating","\u26F8\uFE0F","\u30D5\u30A3\u30AE\u30E5\u30A2\u30B9\u30B1\u30FC\u30C8\u3067\u306F\u3001\u65E5\u672C\u306E \u9078\u624B\u3082 \u91D1\u30E1\u30C0\u30EB\u3092 \u3068\u3063\u3066 \u3044\u307E\u3059\u3002"],["\u30AB\u30FC\u30EA\u30F3\u30B0","curling","\u{1F94C}","20kg\u3061\u304B\u3044 \u77F3\u3092 \u3059\u3079\u3089\u305B\u3066\u3001\u307E\u3068\u306E \u307E\u3093\u4E2D\u3092 \u306D\u3089\u3044\u307E\u3059\u3002"],["\u30A2\u30A4\u30B9\u30DB\u30C3\u30B1\u30FC","ice hockey","\u{1F3D2}","\u30D1\u30C3\u30AF\u306E \u30B9\u30D4\u30FC\u30C9\u306F \u3058\u305D\u304F 150km\u3092 \u3053\u3048\u308B \u3053\u3068\u3082 \u3042\u308A\u307E\u3059\u3002"],["\u30EA\u30E5\u30FC\u30B8\u30E5","luge","\u{1F6F7}","\u3042\u304A\u3080\u3051\u3067 \u305D\u308A\u306B \u306E\u3063\u3066\u3001\u6C37\u306E \u30B3\u30FC\u30B9\u3092 \u3059\u3079\u308A\u307E\u3059\u3002"]]},"jobs-town":{ja:"\u753A\u306E \u3057\u3054\u3068",en:"Jobs in Town",c:"#3a7a6a",intro:"What do you want to be? \u753A\u306B\u306F \u305F\u304F\u3055\u3093\u306E \u3057\u3054\u3068\u304C \u3042\u308A\u307E\u3059\u3002",links:["jobs-dream","farm","pets","vehicles","school-subjects"],items:[["\u533B\u8005","doctor","\u{1FA7A}","\u75C5\u6C17\u3084 \u3051\u304C\u3092 \u306A\u304A\u3059 \u3057\u3054\u3068\u3002"],["\u5148\u751F","teacher","\u{1F9D1}\u200D\u{1F3EB}","\u5B50\u3069\u3082\u305F\u3061\u306B \u52C9\u5F37\u3084 \u751F\u6D3B\u3092 \u6559\u3048\u308B \u3057\u3054\u3068\u3002"],["\u6D88\u9632\u58EB","firefighter","\u{1F692}","\u706B\u4E8B\u3092 \u6D88\u3057\u3001\u4EBA\u3092 \u52A9\u3051\u308B \u3057\u3054\u3068\u3002119\u756A\u3067 \u304B\u3051\u3064\u3051\u307E\u3059\u3002"],["\u8B66\u5BDF\u5B98","police officer","\u{1F46E}","\u753A\u306E \u5B89\u5168\u3092 \u5B88\u308B \u3057\u3054\u3068\u3002"],["\u3058\u3085\u3046\u533B","vet","\u{1F43E}","\u52D5\u7269\u306E \u75C5\u6C17\u3084 \u3051\u304C\u3092 \u306A\u304A\u3059 \u3057\u3054\u3068\u3002"],["\u30D1\u30F3\u5C4B","baker","\u{1F956}","\u671D \u65E9\u304F\u304B\u3089 \u30D1\u30F3\u3092 \u713C\u304F \u3057\u3054\u3068\u3002"],["\u82B1\u5C4B","florist","\u{1F490}","\u82B1\u3092 \u80B2\u3066\u305F\u308A\u3001\u82B1\u675F\u3092 \u4F5C\u3063\u305F\u308A \u3059\u308B \u3057\u3054\u3068\u3002"],["\u8FB2\u5BB6","farmer","\u{1F9D1}\u200D\u{1F33E}","\u304A\u7C73\u3084 \u3084\u3055\u3044\u3092 \u80B2\u3066\u308B \u3057\u3054\u3068\u3002"],["\u30D0\u30B9\u306E \u904B\u8EE2\u624B","bus driver","\u{1F68C}","\u753A\u306E \u4EBA\u3092 \u5B89\u5168\u306B \u904B\u3076 \u3057\u3054\u3068\u3002"]]},"jobs-dream":{ja:"\u3086\u3081\u306E \u3057\u3054\u3068",en:"Dream Jobs",c:"#4a5aa8",intro:"I want to be ___. \u3057\u3087\u3046\u3089\u3044\u3001\u3069\u3093\u306A \u3057\u3054\u3068\u3092 \u3057\u3066 \u307F\u305F\u3044\uFF1F",links:["jobs-town","space-explore","ball-sports","instruments","japanese-food"],items:[["\u5B87\u5B99\u98DB\u884C\u58EB","astronaut","\u{1F469}\u200D\u{1F680}","\u5B87\u5B99\u3067 \u5B9F\u9A13\u3084 \u7814\u7A76\u3092 \u3059\u308B \u3057\u3054\u3068\u3002"],["\u30D1\u30A4\u30ED\u30C3\u30C8","pilot","\u2708\uFE0F","\u98DB\u884C\u6A5F\u3092 \u904B\u8EE2\u3057\u3066\u3001\u4E16\u754C\u4E2D\u306B \u4EBA\u3092 \u904B\u3076 \u3057\u3054\u3068\u3002"],["\u30B3\u30C3\u30AF","cook","\u{1F9D1}\u200D\u{1F373}","\u304A\u3044\u3057\u3044 \u6599\u7406\u3092 \u4F5C\u308B \u3057\u3054\u3068\u3002"],["\u30B5\u30C3\u30AB\u30FC\u9078\u624B","soccer player","\u26BD","\u30D7\u30ED\u306E \u30C1\u30FC\u30E0\u3067 \u8A66\u5408\u3092 \u3059\u308B \u3057\u3054\u3068\u3002"],["\u6B4C\u624B","singer","\u{1F3A4}","\u6B4C\u3067 \u4EBA\u3092 \u5143\u6C17\u306B \u3059\u308B \u3057\u3054\u3068\u3002"],["\u307E\u3093\u304C\u5BB6","manga artist","\u270F\uFE0F","\u307E\u3093\u304C\u3092 \u304B\u304F \u3057\u3054\u3068\u3002\u65E5\u672C\u306E \u307E\u3093\u304C\u306F \u4E16\u754C\u4E2D\u3067 \u8AAD\u307E\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u30D7\u30ED\u30B0\u30E9\u30DE\u30FC","programmer","\u{1F4BB}","\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u306E \u30D7\u30ED\u30B0\u30E9\u30E0\u3092 \u4F5C\u308B \u3057\u3054\u3068\u3002"],["\u52D5\u7269\u5712\u306E \u98FC\u80B2\u54E1","zookeeper","\u{1F993}","\u52D5\u7269\u306E \u304A\u4E16\u8A71\u3092 \u3059\u308B \u3057\u3054\u3068\u3002"],["\u79D1\u5B66\u8005","scientist","\u{1F52C}","\u5B9F\u9A13\u3084 \u7814\u7A76\u3067\u3001\u4E16\u754C\u306E \u306A\u305E\u3092 \u3068\u304F \u3057\u3054\u3068\u3002"]]},vehicles:{ja:"\u306E\u308A\u3082\u306E",en:"Vehicles",c:"#3d6fa3",intro:"Go straight. Turn right. \u4E16\u754C\u306E \u3044\u308D\u3044\u308D\u306A \u306E\u308A\u3082\u306E\u3092 \u898B\u3066 \u307F\u3088\u3046\u3002",links:["japan-inventions","space-explore","inventions","jobs-town","ocean"],items:[["\u65B0\u5E79\u7DDA","bullet train","\u{1F684}","\u3044\u3061\u3070\u3093 \u901F\u3044 \u65B0\u5E79\u7DDA\u306F \u3058\u305D\u304F 320km\u3067 \u8D70\u308A\u307E\u3059\u3002"],["\u30EA\u30CB\u30A2\u30E2\u30FC\u30BF\u30FC\u30AB\u30FC","maglev train","\u{1F69D}","\u65E5\u672C\u306E \u30EA\u30CB\u30A2\u306F 2015\u5E74\u306B \u3058\u305D\u304F 603km\u306E \u4E16\u754C\u8A18\u9332\u3092 \u51FA\u3057\u307E\u3057\u305F\u3002"],["\u98DB\u884C\u6A5F","airplane","\u2708\uFE0F","1903\u5E74\u3001\u30E9\u30A4\u30C8\u5144\u5F1F\u304C \u306F\u3058\u3081\u3066 \u98DB\u884C\u6A5F\u3067 \u7A7A\u3092 \u3068\u3073\u307E\u3057\u305F\u3002"],["\u30D8\u30EA\u30B3\u30D7\u30BF\u30FC","helicopter","\u{1F681}","\u7A7A\u4E2D\u3067 \u30D4\u30BF\u30C3\u3068 \u6B62\u307E\u308B \u3053\u3068\u304C \u3067\u304D\u307E\u3059\u3002"],["\u8239","ship","\u{1F6A2}","\u4E16\u754C\u4E00 \u5927\u304D\u3044 \u8239\u306F\u3001\u9577\u3055 400m \u304F\u3089\u3044 \u3042\u308A\u307E\u3059\u3002"],["\u81EA\u8EE2\u8ECA","bicycle","\u{1F6B2}","200\u5E74 \u304F\u3089\u3044 \u524D\u3001\u30DA\u30C0\u30EB\u306E \u306A\u3044 \u81EA\u8EE2\u8ECA\u304B\u3089 \u59CB\u307E\u308A\u307E\u3057\u305F\u3002"],["\u6D88\u9632\u8ECA","fire engine","\u{1F692}","\u306F\u3057\u3054\u3092 \u306E\u3070\u3059\u3068\u3001\u9AD8\u3044 \u30D3\u30EB\u306B\u3082 \u3068\u3069\u304D\u307E\u3059\u3002"],["\u30D0\u30B9","bus","\u{1F68C}","\u305F\u304F\u3055\u3093\u306E \u4EBA\u3092 \u4E00\u5EA6\u306B \u904B\u3079\u308B \u306E\u308A\u3082\u306E\u3067\u3059\u3002"]]},instruments:{ja:"\u697D\u5668",en:"Musical Instruments",c:"#8a4a8a",intro:"Can you play the piano? \u4E16\u754C\u306E \u3044\u308D\u3044\u308D\u306A \u697D\u5668\u3092 \u898B\u3066 \u307F\u3088\u3046\u3002",links:["japan-traditions","festivals-world","jobs-dream","school-subjects","europe"],items:[["\u30D4\u30A2\u30CE","piano","\u{1F3B9}","\u3051\u3093\u3070\u3093\u306E \u6570\u306F 88\u3053\u3002\u767D\u3044 \u3051\u3093\u3068 \u9ED2\u3044 \u3051\u3093\u304C \u3042\u308A\u307E\u3059\u3002"],["\u30AE\u30BF\u30FC","guitar","\u{1F3B8}","\u3075\u3064\u3046\u306E \u30AE\u30BF\u30FC\u306B\u306F 6\u672C\u306E \u5F26\u304C \u3042\u308A\u307E\u3059\u3002"],["\u30D0\u30A4\u30AA\u30EA\u30F3","violin","\u{1F3BB}","4\u672C\u306E \u5F26\u3092 \u5F13\u3067 \u3053\u3059\u3063\u3066 \u97F3\u3092 \u51FA\u3057\u307E\u3059\u3002"],["\u30C8\u30E9\u30F3\u30DA\u30C3\u30C8","trumpet","\u{1F3BA}","3\u3064\u306E \u30D4\u30B9\u30C8\u30F3\u3092 \u304A\u3057\u3066\u3001\u97F3\u306E \u9AD8\u3055\u3092 \u304B\u3048\u307E\u3059\u3002"],["\u30EA\u30B3\u30FC\u30C0\u30FC","recorder","\u{1FA88}","\u5C0F\u5B66\u6821\u3067 \u7FD2\u3046 \u7B1B\u3002\u30E8\u30FC\u30ED\u30C3\u30D1\u3067 \u4F55\u767E\u5E74\u3082 \u524D\u304B\u3089 \u4F7F\u308F\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u305F\u3044\u3053","drum","\u{1F941}","\u4E16\u754C\u4E2D\u306B \u3042\u308B\u3001\u3044\u3061\u3070\u3093 \u53E4\u3044 \u697D\u5668\u306E 1\u3064\u3067\u3059\u3002"],["\u3057\u3083\u307F\u305B\u3093","shamisen","\u{1FA95}","3\u672C\u306E \u7CF8\u3092 \u3070\u3061\u3067 \u306F\u3058\u304F\u3001\u65E5\u672C\u306E \u697D\u5668\u3067\u3059\u3002"]]},"school-subjects":{ja:"\u5B66\u6821\u306E \u6559\u79D1",en:"School Subjects",c:"#3a6aa8",intro:"What do you study on Monday? \u6559\u79D1\u306E \u540D\u524D\u3092 \u82F1\u8A9E\u3067 \u8A00\u3048\u308B\u304B\u306A\uFF1F",links:["school-events","writing","instruments","jobs-town","inventions"],items:[["\u56FD\u8A9E","Japanese","\u{1F4D6}","\u65E5\u672C\u8A9E\u306E \u8AAD\u307F\u66F8\u304D\u3084\u3001\u7269\u8A9E\u3092 \u697D\u3057\u3080 \u6559\u79D1\u3002"],["\u7B97\u6570","math","\u2797","\u6570\u3084 \u56F3\u5F62\u3092 \u8003\u3048\u308B \u6559\u79D1\u3002"],["\u7406\u79D1","science","\u{1F52C}","\u751F\u304D\u3082\u306E\u3084 \u81EA\u7136\u306E \u3057\u304F\u307F\u3092 \u8ABF\u3079\u308B \u6559\u79D1\u3002"],["\u793E\u4F1A","social studies","\u{1F5FA}\uFE0F","\u5730\u3044\u304D\u3084 \u65E5\u672C\u3001\u4E16\u754C\u306E \u304F\u3089\u3057\u3092 \u5B66\u3076 \u6559\u79D1\u3002"],["\u82F1\u8A9E","English","\u{1F524}","\u4E16\u754C\u306E \u4EBA\u3068 \u8A71\u3059 \u305F\u3081\u306E \u3053\u3068\u3070\u3092 \u5B66\u3076 \u6559\u79D1\u3002"],["\u97F3\u697D","music","\u{1F3B5}","\u6B4C\u3063\u305F\u308A\u3001\u697D\u5668\u3092 \u6F14\u305D\u3046\u3057\u305F\u308A \u3059\u308B \u6559\u79D1\u3002"],["\u56F3\u5DE5","arts and crafts","\u{1F3A8}","\u7D75\u3092 \u304B\u3044\u305F\u308A\u3001\u3082\u306E\u3092 \u4F5C\u3063\u305F\u308A \u3059\u308B \u6559\u79D1\u3002"],["\u4F53\u80B2","P.E.","\u{1F938}","\u4F53\u3092 \u52D5\u304B\u3057\u3066\u3001\u30B9\u30DD\u30FC\u30C4\u3092 \u697D\u3057\u3080 \u6559\u79D1\u3002"],["\u5BB6\u5EAD\u79D1","home economics","\u{1F9F5}","\u6599\u7406\u3084 \u3055\u3044\u307B\u3046\u306A\u3069\u3001\u304F\u3089\u3057\u306E \u77E5\u3048\u3092 \u5B66\u3076 \u6559\u79D1\u3002"]]},"school-events":{ja:"\u5B66\u6821\u306E \u884C\u4E8B",en:"School Events",c:"#b0583a",intro:"What's your best memory? \u5B66\u6821\u306E \u601D\u3044\u51FA\u3092 \u3075\u308A\u304B\u3048\u308D\u3046\u3002",links:["school-subjects","months1","months2","ball-sports","japan-traditions"],items:[["\u5165\u5B66\u5F0F","entrance ceremony","\u{1F338}","\u65B0\u3057\u3044 \u5B66\u6821\u751F\u6D3B\u306E \u59CB\u307E\u308A\u3002\u30B5\u30AF\u30E9\u306E \u304D\u305B\u3064\u3067\u3059\u3002"],["\u9060\u8DB3","school excursion","\u{1F392}","\u307F\u3093\u306A\u3067 \u51FA\u304B\u3051\u3066\u3001\u304A\u3079\u3093\u3068\u3046\u3092 \u98DF\u3079\u307E\u3059\u3002"],["\u904B\u52D5\u4F1A","sports day","\u{1F3C3}","\u30EA\u30EC\u30FC\u3084 \u3064\u306A\u3072\u304D\u3002\u7D05\u767D\u306B \u5206\u304B\u308C\u3066 \u305F\u305F\u304B\u3044\u307E\u3059\u3002"],["\u4FEE\u5B66\u65C5\u884C","school trip","\u{1F68C}","6\u5E74\u751F\u306E \u5927\u304D\u306A \u601D\u3044\u51FA\u3002\u53CB\u3060\u3061\u3068 \u3068\u307E\u308A\u307E\u3059\u3002"],["\u97F3\u697D\u4F1A","music festival","\u{1F3B6}","\u30AF\u30E9\u30B9\u3067 \u6B4C\u3084 \u5408\u305D\u3046\u3092 \u3072\u308D\u3046 \u3057\u307E\u3059\u3002"],["\u5352\u696D\u5F0F","graduation ceremony","\u{1F393}","6\u5E74\u9593\u306E \u601D\u3044\u51FA\u3092 \u3080\u306D\u306B\u3001\u4E2D\u5B66\u6821\u3078\u3002"]]},inventions:{ja:"\u4E16\u754C\u3092 \u304B\u3048\u305F \u767A\u660E",en:"Inventions That Changed the World",c:"#6a5a3a",intro:"\u4ECA \u3042\u305F\u308A\u307E\u3048\u306B \u4F7F\u3063\u3066 \u3044\u308B \u3082\u306E\u3082\u3001\u3060\u308C\u304B\u306E \u767A\u660E\u304B\u3089 \u59CB\u307E\u308A\u307E\u3057\u305F\u3002",links:["japan-inventions","vehicles","space-explore","landmarks","writing","sweets"],items:[["\u7D19","paper","\u{1F4DC}","1900\u5E74 \u304F\u3089\u3044 \u524D\u3001\u4E2D\u56FD\u3067 \u4F5C\u308A\u65B9\u304C \u5E83\u307E\u308A\u307E\u3057\u305F\u3002"],["\u5370\u5237","printing press","\u{1F4DA}","1450\u5E74\u3054\u308D\u3001\u30C9\u30A4\u30C4\u306E \u30B0\u30FC\u30C6\u30F3\u30D9\u30EB\u30AF\u304C \u5370\u5237\u6A5F\u3092 \u4F5C\u308A\u307E\u3057\u305F\u3002"],["\u96FB\u8A71","telephone","\u260E\uFE0F","1876\u5E74\u3001\u30D9\u30EB\u304C \u96FB\u8A71\u306E \u7279\u8A31\u3092 \u3068\u308A\u307E\u3057\u305F\u3002"],["\u96FB\u7403","light bulb","\u{1F4A1}","\u30A8\u30B8\u30BD\u30F3\u304C \u9577\u304F \u5149\u308B \u96FB\u7403\u3092 \u4F5C\u308A\u3001\u4E16\u754C\u4E2D\u306B \u5E83\u3081\u307E\u3057\u305F\u3002"],["\u81EA\u52D5\u8ECA","car","\u{1F697}","1886\u5E74\u3001\u30C9\u30A4\u30C4\u306E \u30D9\u30F3\u30C4\u304C \u30AC\u30BD\u30EA\u30F3\u3067 \u8D70\u308B \u8ECA\u3092 \u4F5C\u308A\u307E\u3057\u305F\u3002"],["\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC","computer","\u{1F4BB}","\u3055\u3044\u3057\u3087\u306E \u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u306F\u3001\u90E8\u5C4B \u3044\u3063\u3071\u3044\u306E \u5927\u304D\u3055\u3067\u3057\u305F\u3002"],["\u671B\u9060\u93E1","telescope","\u{1F52D}","\u30AC\u30EA\u30EC\u30AA\u306F \u671B\u9060\u93E1\u3067 \u6728\u661F\u306E \u6708\u3092 \u898B\u3064\u3051\u307E\u3057\u305F\u3002"]]}};var eu={town:{ja:"\u753A\u306E \u305F\u3066\u3082\u306E",en:"Places in Town",c:"#4a7a9a",intro:"Where is the station? Go straight. \u753A\u306E \u305F\u3066\u3082\u306E\u306E \u540D\u524D\u3092 \u82F1\u8A9E\u3067 \u8A00\u3063\u3066 \u307F\u3088\u3046\u3002",links:["jobs-town","vehicles","stationery","money","houses-world","nagasaki"],items:[["\u99C5","station","\u{1F689}","\u65E5\u672C\u3067 \u3044\u3061\u3070\u3093 \u5229\u7528\u5BA2\u304C \u591A\u3044 \u65B0\u5BBF\u99C5\u306F\u30011\u65E5\u306B \u4F55\u767E\u4E07\u4EBA\u3082\u306E \u4EBA\u304C \u4F7F\u3044\u307E\u3059\u3002"],["\u75C5\u9662","hospital","\u{1F3E5}","\u3051\u304C\u3084 \u75C5\u6C17\u3092 \u306A\u304A\u3059 \u5834\u6240\u3002\u6551\u6025\u8ECA\u306F 119\u756A\u3067 \u6765\u3066 \u304F\u308C\u307E\u3059\u3002"],["\u56F3\u66F8\u9928","library","\u{1F4DA}","\u672C\u3092 \u7121\u6599\u3067 \u304B\u308A\u3089\u308C\u308B \u5834\u6240\u3002\u65E5\u672C\u306B\u306F 3000\u3044\u3058\u3087\u3046\u306E \u516C\u5171\u56F3\u66F8\u9928\u304C \u3042\u308A\u307E\u3059\u3002"],["\u90F5\u4FBF\u5C40","post office","\u{1F3E3}","\u624B\u7D19\u3084 \u8377\u7269\u3092 \u9001\u308B \u5834\u6240\u3002\u65E5\u672C\u306E \u30DD\u30B9\u30C8\u306F \u8D64\u3044 \u8272\u3067\u3059\u3002"],["\u4EA4\u756A","police box","\u{1F693}","\u65E5\u672C\u306E \u300CKOBAN\u300D\u306F\u3001\u5916\u56FD\u3067\u3082 \u307E\u306D\u3055\u308C\u3066 \u3044\u308B \u3057\u304F\u307F\u3067\u3059\u3002"],["\u516C\u5712","park","\u{1F6DD}","\u3042\u305D\u3093\u3060\u308A\u3001\u4F11\u3093\u3060\u308A \u3067\u304D\u308B \u5834\u6240\u3002"],["\u30B9\u30FC\u30D1\u30FC\u30DE\u30FC\u30B1\u30C3\u30C8","supermarket","\u{1F6D2}","\u98DF\u3079\u3082\u306E\u3084 \u65E5\u7528\u54C1\u3092 \u307E\u3068\u3081\u3066 \u8CB7\u3048\u308B \u304A\u5E97\u3002"],["\u30B3\u30F3\u30D3\u30CB","convenience store","\u{1F3EA}","24\u6642\u9593 \u958B\u3044\u3066 \u3044\u308B \u304A\u5E97\u304C \u591A\u3044\u3002\u65E5\u672C\u4E2D\u306B 5\u4E07\u3051\u3093 \u3044\u3058\u3087\u3046 \u3042\u308A\u307E\u3059\u3002"],["\u6D88\u9632\u7F72","fire station","\u{1F692}","\u6D88\u9632\u8ECA\u3068 \u6D88\u9632\u58EB\u304C \u3044\u3064\u3067\u3082 \u51FA\u52D5 \u3067\u304D\u308B\u3088\u3046\u306B \u307E\u3063\u3066 \u3044\u307E\u3059\u3002"]]},stationery:{ja:"\u6587\u623F\u5177",en:"Stationery",c:"#8a6a3a",intro:"Do you have a pencil? \u6BCE\u65E5 \u4F7F\u3046 \u6587\u623F\u5177\u306B\u3082 \u3072\u307F\u3064\u304C \u3042\u308A\u307E\u3059\u3002",links:["school-subjects","town","inventions","colors-shapes","japan-inventions"],items:[["\u3048\u3093\u3074\u3064","pencil","\u270F\uFE0F","1\u672C\u306E \u3048\u3093\u3074\u3064\u3067\u300150km\u3061\u304B\u304F\u306E \u7DDA\u304C \u66F8\u3051\u308B\u3068 \u3044\u308F\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u6D88\u3057\u30B4\u30E0","eraser","\u{1F9FD}","\u3080\u304B\u3057\u306F \u30D1\u30F3\u3067 \u5B57\u3092 \u6D88\u3057\u3066 \u3044\u305F \u3053\u3068\u3082 \u3042\u308A\u307E\u3057\u305F\u3002"],["\u3058\u3087\u3046\u304E","ruler","\u{1F4CF}","\u9577\u3055\u3092 \u306F\u304B\u3063\u305F\u308A\u3001\u307E\u3063\u3059\u3050\u306A \u7DDA\u3092 \u5F15\u3044\u305F\u308A \u3057\u307E\u3059\u3002"],["\u306F\u3055\u307F","scissors","\u2702\uFE0F","2\u307E\u3044\u306E \u5203\u304C \u3059\u308C\u5408\u3063\u3066 \u3082\u306E\u3092 \u5207\u308A\u307E\u3059\u3002"],["\u306E\u308A","glue stick","\u{1F9F4}","\u30B9\u30C6\u30A3\u30C3\u30AF\u306E\u308A\u306F\u3001\u53E3\u7D05\u3092 \u30D2\u30F3\u30C8\u306B \u751F\u307E\u308C\u305F\u3068 \u3044\u308F\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u30CE\u30FC\u30C8","notebook","\u{1F4D3}","\u65E5\u672C\u306E \u30CE\u30FC\u30C8\u306F\u3001\u4F7F\u3044\u3084\u3059\u3055\u3067 \u4E16\u754C\u3067\u3082 \u4EBA\u6C17\u3067\u3059\u3002"],["\u30AF\u30EC\u30E8\u30F3","crayon","\u{1F58D}\uFE0F","\u308D\u3046\u3068 \u8272\u306E \u3053\u306A\u3092 \u307E\u305C\u3066 \u4F5C\u308A\u307E\u3059\u3002"],["\u30DB\u30C3\u30C1\u30AD\u30B9","stapler","\u{1F4CE}","\u65E5\u672C\u3067 \u300C\u30DB\u30C3\u30C1\u30AD\u30B9\u300D\u3068 \u3044\u3046 \u540D\u524D\u306F\u3001\u4F1A\u793E\u306E \u540D\u524D\u304B\u3089 \u6765\u3066\u3044\u307E\u3059\u3002\u82F1\u8A9E\u3067\u306F stapler\u3002"],["\u7B46\u7BB1","pencil case","\u{1F5C3}\uFE0F","\u82F1\u8A9E\u3067\u306F pencil case\u3002\u3044\u308D\u3044\u308D\u306A \u6587\u623F\u5177\u3092 \u5165\u308C\u3066 \u304A\u304D\u307E\u3059\u3002"]]},clothes:{ja:"\u670D\u3068 \u30D5\u30A1\u30C3\u30B7\u30E7\u30F3",en:"Clothes",c:"#9a4a6a",intro:"What's this? It's a T-shirt. \u670D\u306E \u540D\u524D\u3068 \u3072\u307F\u3064\u3092 \u3057\u3087\u3046\u304B\u3044\u3002",links:["weather","japan-traditions","colors-shapes","jobs-dream","inventions"],items:[["T\u30B7\u30E3\u30C4","T-shirt","\u{1F455}","\u5E83\u3052\u308B\u3068 \u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u306E T \u306E \u5F62\u306B \u898B\u3048\u308B\u304B\u3089 T\u30B7\u30E3\u30C4\u3002"],["\u30B8\u30FC\u30F3\u30BA","jeans","\u{1F456}","1873\u5E74\u3001\u30A2\u30E1\u30EA\u30AB\u3067 \u306F\u305F\u3089\u304F \u4EBA\u306E \u3058\u3087\u3046\u3076\u306A \u30BA\u30DC\u30F3\u3068\u3057\u3066 \u751F\u307E\u308C\u307E\u3057\u305F\u3002"],["\u307C\u3046\u3057","cap / hat","\u{1F9E2}","\u3064\u3070\u304C \u3042\u308B \u3082\u306E\u3092 cap\u3001\u307E\u308F\u308A \u5168\u90E8\u306B \u3064\u3070\u304C \u3042\u308B\u306E\u3092 hat \u3068 \u3044\u3044\u307E\u3059\u3002"],["\u30B9\u30CB\u30FC\u30AB\u30FC","sneakers","\u{1F45F}","\u30B4\u30E0\u306E \u304F\u3064\u5E95\u3067 \u8DB3\u97F3\u304C \u3057\u306A\u3044 \u3053\u3068\u304B\u3089\u3001\u300C\u3053\u3063\u305D\u308A\u6B69\u304F (sneak)\u300D\u304C \u540D\u524D\u306E \u3082\u3068\u3002"],["\u30BB\u30FC\u30BF\u30FC","sweater","\u{1F9F6}","\u6BDB\u7CF8\u3092 \u3042\u3093\u3067 \u4F5C\u308A\u307E\u3059\u3002\u82F1\u8A9E\u3067\u306F jumper \u3068\u3082 \u3044\u3044\u307E\u3059\u3002"],["\u30EC\u30A4\u30F3\u30B3\u30FC\u30C8","raincoat","\u{1F9E5}","\u96E8\u306E \u65E5\u306B \u7740\u308B\u3001\u6C34\u3092 \u901A\u3055\u306A\u3044 \u30B3\u30FC\u30C8\u3067\u3059\u3002"],["\u304F\u3064\u3057\u305F","socks","\u{1F9E6}","\u82F1\u8A9E\u3067\u306F \u3044\u3064\u3082 2\u3064\u3067 a pair of socks \u3068 \u3044\u3044\u307E\u3059\u3002"],["\u624B\u3076\u304F\u308D","gloves","\u{1F9E4}","\u6307\u304C \u5206\u304B\u308C\u3066 \u3044\u306A\u3044 \u624B\u3076\u304F\u308D\u306F mittens \u3068 \u3044\u3044\u307E\u3059\u3002"]]},feelings:{ja:"\u6C17\u6301\u3061",en:"Feelings",c:"#d08a2a",intro:"How are you? I'm happy! \u6C17\u6301\u3061\u3092 \u82F1\u8A9E\u3067 \u8A00\u3063\u3066 \u307F\u3088\u3046\u3002",links:["human-body","school-events","colors-shapes","pets"],items:[["\u3046\u308C\u3057\u3044","happy","\u{1F604}","\u7B11\u3046\u3068\u3001\u307E\u308F\u308A\u306E \u4EBA\u3082 \u7B11\u9854\u306B \u306A\u308A\u3084\u3059\u3044\u3068 \u3044\u308F\u308C\u307E\u3059\u3002"],["\u60B2\u3057\u3044","sad","\u{1F622}","\u306A\u307F\u3060\u306B\u306F\u3001\u6C17\u6301\u3061\u3092 \u843D\u3061\u7740\u304B\u305B\u308B \u306F\u305F\u3089\u304D\u3082 \u3042\u308B\u3068 \u3044\u308F\u308C\u307E\u3059\u3002"],["\u304A\u3053\u3063\u3066 \u3044\u308B","angry","\u{1F620}","\u304A\u3053\u3063\u305F \u3068\u304D\u306F\u30016\u3073\u3087\u3046 \u307E\u3063\u3066 \u307F\u308B\u3068 \u843D\u3061\u7740\u304D\u3084\u3059\u3044\u3068 \u3044\u308F\u308C\u307E\u3059\u3002"],["\u306D\u3080\u3044","sleepy","\u{1F62A}","\u5C0F\u5B66\u751F\u306F 1\u65E5 9\u301C12\u6642\u9593 \u306D\u3080\u308B\u306E\u304C \u3088\u3044\u3068 \u3044\u308F\u308C\u307E\u3059\u3002"],["\u304A\u306A\u304B\u304C \u3059\u3044\u305F","hungry","\u{1F60B}","\u304A\u306A\u304B\u304C \u3059\u304F\u3068\u3001\u304A\u306A\u304B\u304C \u30B0\u30FC\u3068 \u9CF4\u308B \u3053\u3068\u304C \u3042\u308A\u307E\u3059\u3002"],["\u3064\u304B\u308C\u305F","tired","\u{1F629}","\u4F53\u3092 \u4F11\u3081\u308B\u3068\u3001\u307E\u305F \u5143\u6C17\u306B \u306A\u308A\u307E\u3059\u3002"],["\u5143\u6C17","fine / great","\u{1F60A}","How are you? \u306E \u7B54\u3048\u306F I'm fine. \u3044\u304C\u3044\u306B\u3082 \u305F\u304F\u3055\u3093 \u3042\u308A\u307E\u3059\u3002"],["\u30C9\u30AD\u30C9\u30AD","nervous","\u{1F62C}","\u304D\u3093\u3061\u3087\u3046 \u3059\u308B\u3068\u3001\u5FC3\u305E\u3046\u304C \u3044\u3064\u3082\u3088\u308A \u901F\u304F \u52D5\u304D\u307E\u3059\u3002"]]},"colors-shapes":{ja:"\u8272\u3068 \u5F62",en:"Colors and Shapes",c:"#c24a8a",intro:"What color do you like? \u8272\u3068 \u5F62\u306E \u3075\u3057\u304E\u3092 \u898B\u3066 \u307F\u3088\u3046\u3002",links:["feelings","clothes","art","weather","numbers","science-fun"],items:[["\u8D64","red","\u{1F7E5}","\u65E5\u672C\u306E \u30DD\u30B9\u30C8\u3084 \u6D88\u9632\u8ECA\u306E \u8272\u3002\u76EE\u7ACB\u3064\u306E\u3067 \u6CE8\u610F\u3092 \u5F15\u304D\u307E\u3059\u3002"],["\u9752","blue","\u{1F7E6}","\u7A7A\u3084 \u6D77\u304C \u9752\u304F \u898B\u3048\u308B\u306E\u306F\u3001\u9752\u3044 \u5149\u304C \u5E83\u304C\u308A\u3084\u3059\u3044 \u304B\u3089\u3067\u3059\u3002"],["\u9EC4\u8272","yellow","\u{1F7E8}","\u9060\u304F\u304B\u3089\u3067\u3082 \u3088\u304F \u898B\u3048\u308B\u306E\u3067\u3001\u901A\u5B66\u307C\u3046\u3084 \u4FE1\u53F7\u306B \u4F7F\u308F\u308C\u307E\u3059\u3002"],["\u7DD1","green","\u{1F7E9}","\u65E5\u672C\u3067\u306F \u9752\u4FE1\u53F7\u3068 \u3044\u3044\u307E\u3059\u304C\u3001\u672C\u5F53\u306E \u8272\u306F \u7DD1\u3067\u3059\u3002"],["\u4E38","circle","\u26AA","\u30DE\u30F3\u30DB\u30FC\u30EB\u306E \u3075\u305F\u304C \u4E38\u3044\u306E\u306F\u3001\u3042\u306A\u306B \u843D\u3061\u306A\u3044 \u305F\u3081\u3067\u3059\u3002"],["\u4E09\u89D2\u5F62","triangle","\u{1F53A}","\u4E09\u89D2\u5F62\u306F \u5F62\u304C \u304F\u305A\u308C\u306B\u304F\u304F\u3001\u6A4B\u3084 \u9244\u3068\u3046\u306B \u4F7F\u308F\u308C\u307E\u3059\u3002"],["\u56DB\u89D2\u5F62","square","\u{1F7E7}","\u82F1\u8A9E\u3067 \u6B63\u65B9\u5F62\u306F square\u3001\u9577\u65B9\u5F62\u306F rectangle \u3067\u3059\u3002"],["\u516D\u89D2\u5F62","hexagon","\u2B21","\u30DF\u30C4\u30D0\u30C1\u306E \u3059\u306F \u516D\u89D2\u5F62\u3002\u3059\u304D\u9593\u306A\u304F \u4F5C\u308C\u308B \u3058\u3087\u3046\u3076\u306A \u5F62\u3067\u3059\u3002"],["\u661F\u5F62","star","\u2B50","\u661F\u5F62\u306F \u7DDA\u3092 5\u672C \u5F15\u304F\u3060\u3051\u3067 \u66F8\u3051\u307E\u3059\u3002"]]},"human-body":{ja:"\u4F53\u306E \u3075\u3057\u304E",en:"The Human Body",c:"#c25a4a",intro:"\u81EA\u5206\u306E \u4F53\u306A\u306E\u306B\u3001\u77E5\u3089\u306A\u3044 \u3053\u3068\u304C \u3044\u3063\u3071\u3044\u3002\u4F53\u306E \u3072\u307F\u3064\u3092 \u306E\u305E\u3053\u3046\u3002",links:["feelings","science-fun","sports-world","heroes","foods-health"],items:[["\u5FC3\u305E\u3046","heart","\u2764\uFE0F","1\u65E5\u306B \u7D0410\u4E07\u56DE \u30C9\u30AD\u30C9\u30AD \u3057\u3066\u3001\u4F53\u4E2D\u306B \u8840\u3092 \u9001\u3063\u3066 \u3044\u307E\u3059\u3002"],["\u307B\u306D","bones","\u{1F9B4}","\u5927\u4EBA\u306E \u4F53\u306B\u306F \u7D04206\u3053\u306E \u307B\u306D\u304C \u3042\u308A\u307E\u3059\u3002\u8D64\u3061\u3083\u3093\u306F \u3082\u3063\u3068 \u591A\u3044\u3067\u3059\u3002"],["\u306E\u3046","brain","\u{1F9E0}","\u8003\u3048\u305F\u308A\u3001\u304A\u307C\u3048\u305F\u308A\u3001\u4F53\u3092 \u52D5\u304B\u3059 \u547D\u4EE4\u3092 \u51FA\u3057\u305F\u308A \u3057\u307E\u3059\u3002"],["\u76EE","eyes","\u{1F440}","1\u5206\u9593\u306B 15\u301C20\u56DE \u304F\u3089\u3044 \u307E\u3070\u305F\u304D \u3057\u307E\u3059\u3002"],["\u9F3B","nose","\u{1F443}","\u306B\u304A\u3044\u3092 \u304B\u304E\u5206\u3051\u308B \u529B\u306F \u3068\u3066\u3082 \u3059\u3054\u304F\u3001\u305F\u304F\u3055\u3093\u306E \u306B\u304A\u3044\u3092 \u533A\u5225 \u3067\u304D\u307E\u3059\u3002"],["\u3057\u305F","tongue","\u{1F445}","\u3042\u307E\u3044\u3001\u3057\u3087\u3063\u3071\u3044\u3001\u3059\u3063\u3071\u3044\u3001\u306B\u304C\u3044\u3001\u3046\u307E\u307F \u3092 \u611F\u3058\u307E\u3059\u3002"],["\u3072\u3075","skin","\u270B","\u4F53\u306E \u4E2D\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u5668\u5B98\u3002\u4F53\u3092 \u5B88\u3063\u3066 \u3044\u307E\u3059\u3002"],["\u304D\u3093\u8089","muscles","\u{1F4AA}","\u4F53\u306B\u306F 600\u3044\u3058\u3087\u3046\u306E \u304D\u3093\u8089\u304C \u3042\u308A\u307E\u3059\u3002"],["\u6B6F","teeth","\u{1F9B7}","\u5B50\u3069\u3082\u306E \u6B6F\u306F 20\u672C\u3001\u5927\u4EBA\u306E \u6B6F\u306F 28\u301C32\u672C\u3067\u3059\u3002"]]},"earth-science":{ja:"\u5730\u7403\u306E \u3057\u304F\u307F",en:"How the Earth Works",c:"#a2482e",intro:"\u5730\u7403\u306E \u4E2D\u306F \u3069\u3046\u306A\u3063\u3066 \u3044\u308B\u306E\uFF1F \u706B\u5C71\u3084 \u5730\u3057\u3093\u306E \u3057\u304F\u307F\u3092 \u5B66\u307C\u3046\u3002",links:["rocks-gems","geo-records","japan-islands","weather","solar-system"],items:[["\u5730\u7403\u306E \u4E2D","inside the Earth","\u{1F30D}","\u5730\u7403\u306F \u3086\u3067\u5375\u306E\u3088\u3046\u306B\u3001\u304B\u3089\u306E \u4E0B\u306B \u30DE\u30F3\u30C8\u30EB\u3001\u307E\u3093\u4E2D\u306B \u300C\u6838\u300D\u304C \u3042\u308A\u307E\u3059\u3002"],["\u706B\u5C71","volcano","\u{1F30B}","\u5730\u4E0B\u306E \u3068\u3051\u305F \u5CA9 (\u30DE\u30B0\u30DE) \u304C \u3075\u304D\u51FA\u3057\u3066 \u3067\u304D\u307E\u3059\u3002\u65E5\u672C\u306B\u306F 111\u306E \u6D3B\u706B\u5C71\u304C \u3042\u308A\u307E\u3059\u3002"],["\u5BCC\u58EB\u5C71","Mt. Fuji","\u{1F5FB}","\u5BCC\u58EB\u5C71\u3082 \u706B\u5C71\u3002\u3055\u3044\u3054\u306E \u3075\u3093\u706B\u306F 1707\u5E74\u3067\u3057\u305F\u3002"],["\u5730\u3057\u3093","earthquake","\u{1FAE8}","\u5730\u9762\u306E \u4E0B\u306E \u5927\u304D\u306A \u5CA9\u306E \u677F (\u30D7\u30EC\u30FC\u30C8) \u304C \u52D5\u3044\u3066 \u304A\u304D\u307E\u3059\u3002\u65E5\u3054\u308D\u306E \u305D\u306A\u3048\u304C \u5927\u5207\u3067\u3059\u3002"],["\u304A\u3093\u305B\u3093","hot spring","\u2668\uFE0F","\u706B\u5C71\u306E \u71B1\u3067 \u3042\u305F\u305F\u3081\u3089\u308C\u305F \u5730\u4E0B\u6C34\u3067\u3059\u3002\u65E5\u672C\u306F \u304A\u3093\u305B\u3093\u306E \u6570\u304C \u3068\u3066\u3082 \u591A\u3044 \u56FD\u3067\u3059\u3002"],["\u5316\u77F3","fossil","\u{1F41A}","\u5927\u3080\u304B\u3057\u306E \u751F\u304D\u3082\u306E\u306E \u3042\u3068\u304C\u3001\u77F3\u306E \u4E2D\u306B \u306E\u3053\u3063\u305F \u3082\u306E\u3067\u3059\u3002"],["\u30D7\u30EC\u30FC\u30C8","tectonic plates","\u{1F9E9}","\u5730\u7403\u306E \u8868\u9762\u306F \u30D1\u30BA\u30EB\u306E\u3088\u3046\u306A \u4F55\u307E\u3044\u3082\u306E \u677F\u3067 \u3067\u304D\u3066 \u3044\u307E\u3059\u3002"]]},"rocks-gems":{ja:"\u77F3\u3068 \u5B9D\u77F3",en:"Rocks and Gems",c:"#5a4a8a",intro:"\u30AD\u30E9\u30AD\u30E9 \u5149\u308B \u5B9D\u77F3\u3082\u3001\u3082\u3068\u306F \u5730\u7403\u306E \u4E2D\u3067 \u751F\u307E\u308C\u305F \u77F3\u3067\u3059\u3002",links:["earth-science","money","colors-shapes","landmarks","nagasaki"],items:[["\u30C0\u30A4\u30E4\u30E2\u30F3\u30C9","diamond","\u{1F48E}","\u5730\u7403\u3067 \u3044\u3061\u3070\u3093 \u304B\u305F\u3044 \u5929\u7136\u306E \u77F3\u3002\u70AD\u3068 \u540C\u3058 \u300C\u70AD\u7D20\u300D\u3067 \u3067\u304D\u3066 \u3044\u307E\u3059\u3002"],["\u30EB\u30D3\u30FC","ruby","\u{1F534}","\u8D64\u3044 \u30EB\u30D3\u30FC\u3068 \u9752\u3044 \u30B5\u30D5\u30A1\u30A4\u30A2\u306F\u3001\u3058\u3064\u306F \u540C\u3058 \u9271\u7269\u3067\u3059\u3002"],["\u30B5\u30D5\u30A1\u30A4\u30A2","sapphire","\u{1F535}","\u30EB\u30D3\u30FC\u3068 \u540C\u3058 \u306A\u304B\u307E\u3067\u3001\u8D64 \u3044\u304C\u3044\u306E \u8272\u306E \u3082\u306E\u3092 \u30B5\u30D5\u30A1\u30A4\u30A2\u3068 \u3088\u3073\u307E\u3059\u3002"],["\u91D1","gold","\u{1FA99}","\u3068\u3066\u3082 \u306E\u3073\u3084\u3059\u304F\u30011g\u3067 3km \u3061\u304B\u3044 \u7D30\u3044 \u7CF8\u306B \u3067\u304D\u307E\u3059\u3002"],["\u771F\u73E0","pearl","\u26AA","\u8C9D\u306E \u4E2D\u3067 \u3067\u304D\u308B \u5B9D\u77F3\u3002\u65E5\u672C\u306F \u990A\u3057\u3087\u304F\u771F\u73E0\u3092 \u4E16\u754C\u3067 \u306F\u3058\u3081\u3066 \u6210\u529F \u3055\u305B\u307E\u3057\u305F\u3002"],["\u30D2\u30B9\u30A4","jade","\u{1F7E2}","\u65B0\u6F5F\u770C \u7CF8\u9B5A\u5DDD\u5E02\u3067 \u3068\u308C\u308B \u30D2\u30B9\u30A4\u306F\u3001\u65E5\u672C\u306E \u300C\u56FD\u77F3\u300D\u3067\u3059\u3002"],["\u6C34\u6676","quartz crystal","\u{1F52E}","\u3068\u3046\u3081\u3044\u306A \u77F3\u3002\u6642\u8A08\u306B\u3082 \u4F7F\u308F\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u30A2\u30E1\u30B8\u30B9\u30C8","amethyst","\u{1F7E3}","\u3080\u3089\u3055\u304D\u8272\u306E \u6C34\u6676\u30022\u6708\u306E \u305F\u3093\u751F\u77F3\u3067\u3059\u3002"]]},"science-fun":{ja:"\u3075\u3057\u304E\u306A \u79D1\u5B66",en:"Fun Science",c:"#2a7a8a",intro:"\u8EAB\u306E\u56DE\u308A\u306E \u3075\u3057\u304E\u3092\u3001\u79D1\u5B66\u3067 \u3068\u304D\u660E\u304B\u305D\u3046\uFF01",links:["inventions","human-body","heroes","weather","colors-shapes","robots"],items:[["\u3058\u3057\u3083\u304F","magnet","\u{1F9F2}","N\u6975\u3068 S\u6975\u304C \u3042\u308A\u3001\u3061\u304C\u3046 \u6975\u3069\u3046\u3057\u306F \u5F15\u304D\u5408\u3044\u307E\u3059\u3002\u5730\u7403\u3082 \u5927\u304D\u306A \u3058\u3057\u3083\u304F\u3067\u3059\u3002"],["\u30D7\u30EA\u30BA\u30E0","prism","\u{1F53A}","\u767D\u3044 \u5149\u3092 \u901A\u3059\u3068\u3001\u306B\u3058\u306E 7\u8272\u306B \u5206\u304B\u308C\u307E\u3059\u3002"],["\u97F3","sound","\u{1F50A}","\u97F3\u306F \u7A7A\u6C17\u306E \u3075\u308B\u3048\u3002\u7A7A\u6C17\u306E \u306A\u3044 \u5B87\u5B99\u3067\u306F \u97F3\u304C \u4F1D\u308F\u308A\u307E\u305B\u3093\u3002"],["\u9759\u96FB\u6C17","static electricity","\u26A1","\u51AC\u306B \u30C9\u30A2\u30CE\u30D6\u3067 \u30D1\u30C1\u30C3\u3068 \u3059\u308B\u306E\u306F \u9759\u96FB\u6C17\u306E \u3057\u308F\u3056\u3067\u3059\u3002"],["\u6C37","ice","\u{1F9CA}","\u6C34\u306F \u3053\u304A\u308B\u3068 \u304B\u3055\u304C \u3075\u3048\u3066 \u8EFD\u304F \u306A\u308B\u306E\u3067\u3001\u6C37\u306F \u6C34\u306B \u3046\u304B\u3073\u307E\u3059\u3002"],["\u91CD\u529B","gravity","\u{1F34E}","\u30CB\u30E5\u30FC\u30C8\u30F3\u306F\u3001\u308A\u3093\u3054\u304C \u843D\u3061\u308B\u306E\u3092 \u898B\u3066 \u91CD\u529B\u306B \u3064\u3044\u3066 \u8003\u3048\u305F\u3068 \u3044\u308F\u308C\u307E\u3059\u3002"],["\u30EC\u30F3\u30BA","lens","\u{1F50D}","\u866B\u3081\u304C\u306D\u306E \u30EC\u30F3\u30BA\u306F\u3001\u5149\u3092 \u96C6\u3081\u3066 \u3082\u306E\u3092 \u5927\u304D\u304F \u898B\u305B\u307E\u3059\u3002"],["\u304B\u3052","shadow","\u{1F313}","\u5149\u304C \u3055\u3048\u304E\u3089\u308C\u3066 \u3067\u304D\u307E\u3059\u3002\u671D\u3068 \u5915\u65B9\u306F \u304B\u3052\u304C \u9577\u304F \u306A\u308A\u307E\u3059\u3002"]]},heroes:{ja:"\u4E16\u754C\u306E \u5049\u4EBA",en:"Heroes of History",c:"#7a5a2a",intro:"Who is your hero? \u4E16\u754C\u3092 \u304B\u3048\u305F \u4EBA\u305F\u3061\u3092 \u3057\u3087\u3046\u304B\u3044 \u3057\u307E\u3059\u3002",links:["inventions","science-fun","money","japan","space-explore","art"],items:[["\u30C8\u30FC\u30DE\u30B9\u30FB\u30A8\u30B8\u30BD\u30F3","Thomas Edison","\u{1F4A1}","\u30A2\u30E1\u30EA\u30AB\u306E \u767A\u660E\u5BB6\u3002\u96FB\u7403\u3084 \u6620\u753B\u306E \u6A5F\u68B0\u306A\u3069\u30011000\u3044\u3058\u3087\u3046\u306E \u7279\u8A31\u3092 \u3068\u308A\u307E\u3057\u305F\u3002"],["\u30DE\u30EA\u30FC\u30FB\u30AD\u30E5\u30EA\u30FC","Marie Curie","\u{1F52C}","\u30CE\u30FC\u30D9\u30EB\u8CDE\u3092 2\u56DE \u53D7\u8CDE\u3057\u305F \u79D1\u5B66\u8005\u3002\u5973\u6027\u3067 \u306F\u3058\u3081\u3066\u306E \u30CE\u30FC\u30D9\u30EB\u8CDE\u3067\u3057\u305F\u3002"],["\u30A2\u30EB\u30D0\u30FC\u30C8\u30FB\u30A2\u30A4\u30F3\u30B7\u30E5\u30BF\u30A4\u30F3","Albert Einstein","\u{1F9E0}","\u6642\u9593\u3068 \u7A7A\u9593\u306E \u3075\u3057\u304E\u3092 \u8003\u3048\u305F \u79D1\u5B66\u8005\u30021921\u5E74\u306B \u30CE\u30FC\u30D9\u30EB\u8CDE\u3092 \u53D7\u8CDE\u3002"],["\u91CE\u53E3\u82F1\u4E16","Hideyo Noguchi","\u{1F9A0}","\u4F1D\u67D3\u75C5\u306E \u7814\u7A76\u306B \u4E00\u751F\u3092 \u3055\u3055\u3052\u307E\u3057\u305F\u3002\u4ECA\u306E 1000\u5186\u672D\u306E \u524D\u306E \u9854\u3067\u3057\u305F\u3002"],["\u5317\u91CC\u67F4\u4E09\u90CE","Shibasaburo Kitasato","\u{1F489}","\u300C\u65E5\u672C\u306E \u7D30\u83CC\u5B66\u306E \u7236\u300D\u30022024\u5E74\u304B\u3089 1000\u5186\u672D\u306E \u9854\u306B \u306A\u308A\u307E\u3057\u305F\u3002"],["\u6D25\u7530\u6885\u5B50","Umeko Tsuda","\u{1F4D8}","6\u3055\u3044\u3067 \u30A2\u30E1\u30EA\u30AB\u306B \u7559\u5B66\u3057\u3001\u5973\u5B50\u6559\u80B2\u306B \u3064\u304F\u3057\u307E\u3057\u305F\u30025000\u5186\u672D\u306E \u9854\u3067\u3059\u3002"],["\u4F0A\u80FD\u5FE0\u656C","Tadataka Ino","\u{1F5FA}\uFE0F","\u65E5\u672C\u4E2D\u3092 \u6B69\u3044\u3066 \u306F\u304B\u308A\u3001\u6B63\u78BA\u306A \u65E5\u672C\u5730\u56F3\u3092 \u4F5C\u308A\u307E\u3057\u305F\u3002"],["\u30CA\u30A4\u30C1\u30F3\u30B2\u30FC\u30EB","Florence Nightingale","\u{1FA7A}","\u30A4\u30AE\u30EA\u30B9\u306E \u770B\u8B77\u5E2B\u3002\u75C5\u9662\u3092 \u6E05\u6F54\u306B \u3057\u3066\u3001\u305F\u304F\u3055\u3093\u306E \u547D\u3092 \u6551\u3044\u307E\u3057\u305F\u3002"],["\u30EC\u30AA\u30CA\u30EB\u30C9\u30FB\u30C0\u30FB\u30F4\u30A3\u30F3\u30C1","Leonardo da Vinci","\u{1F5BC}\uFE0F","\u300C\u30E2\u30CA\u30FB\u30EA\u30B6\u300D\u3092 \u304B\u3044\u305F \u753B\u5BB6\u3067\u3001\u767A\u660E\u5BB6\u3084 \u79D1\u5B66\u8005\u3067\u3082 \u3042\u308A\u307E\u3057\u305F\u3002"]]},money:{ja:"\u4E16\u754C\u306E \u304A\u91D1",en:"Money Around the World",c:"#3a7a4a",intro:"How much is it? \u56FD\u304C \u3061\u304C\u3046\u3068\u3001\u304A\u91D1\u306E \u540D\u524D\u3082 \u3061\u304C\u3044\u307E\u3059\u3002",links:["heroes","town","regions","europe","asia","rocks-gems"],items:[["\u5186","yen","\u{1F4B4}","\u65E5\u672C\u306E \u304A\u91D1\u30025\u5186\u7389\u3068 50\u5186\u7389\u306B\u306F \u3042\u306A\u304C \u3042\u3044\u3066 \u3044\u307E\u3059\u3002"],["\u30C9\u30EB","dollar","\u{1F4B5}","\u30A2\u30E1\u30EA\u30AB\u306E \u304A\u91D1\u3002\u30AB\u30CA\u30C0\u3084 \u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306A\u3069\u3001\u307B\u304B\u306E \u56FD\u3067\u3082 \u30C9\u30EB\u3092 \u4F7F\u3044\u307E\u3059\u3002"],["\u30E6\u30FC\u30ED","euro","\u{1F4B6}","\u30E8\u30FC\u30ED\u30C3\u30D1\u306E \u305F\u304F\u3055\u3093\u306E \u56FD\u3067\u3001\u540C\u3058 \u30E6\u30FC\u30ED\u3092 \u4F7F\u3063\u3066 \u3044\u307E\u3059\u3002"],["\u30DD\u30F3\u30C9","pound","\u{1F4B7}","\u30A4\u30AE\u30EA\u30B9\u306E \u304A\u91D1\u3002\u3068\u3066\u3082 \u53E4\u3044 \u6B74\u53F2\u304C \u3042\u308A\u307E\u3059\u3002"],["\u30A6\u30A9\u30F3","won","\u{1FA99}","\u97D3\u56FD\u306E \u304A\u91D1\u3067\u3059\u3002"],["\u5143","yuan","\u{1F9E7}","\u4E2D\u56FD\u306E \u304A\u91D1\u3067\u3059\u3002"],["\u65B0\u3057\u3044 \u304A\u672D","new banknotes","\u{1F3E6}","2024\u5E74\u3001\u65E5\u672C\u306E \u304A\u672D\u304C \u65B0\u3057\u304F \u306A\u308A\u307E\u3057\u305F\u3002\u304A\u672D\u3092 \u304B\u305F\u3080\u3051\u308B\u3068\u3001\u9854\u304C 3D\u306E\u3088\u3046\u306B \u52D5\u3044\u3066 \u898B\u3048\u307E\u3059\u3002"],["\u30AD\u30E3\u30C3\u30B7\u30E5\u30EC\u30B9","cashless payment","\u{1F4F1}","\u30AB\u30FC\u30C9\u3084 \u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3\u3067 \u3057\u306F\u3089\u3046 \u65B9\u6CD5\u3082 \u3075\u3048\u3066 \u3044\u307E\u3059\u3002"]]},"games-world":{ja:"\u4E16\u754C\u306E \u3042\u305D\u3073",en:"Games Around the World",c:"#a8582a",intro:"Let's play! \u4E16\u754C\u306E \u5B50\u3069\u3082\u305F\u3061\u306F \u3069\u3093\u306A \u3042\u305D\u3073\u3092 \u3057\u3066 \u3044\u308B\u304B\u306A\uFF1F",links:["japan-traditions","toys-tales","numbers","ball-sports","regions"],items:[["\u3057\u3087\u3046\u304E","shogi","\u2617","\u65E5\u672C\u306E \u30DC\u30FC\u30C9\u30B2\u30FC\u30E0\u3002\u3068\u3063\u305F \u3053\u307E\u3092 \u81EA\u5206\u306E \u3053\u307E\u3068\u3057\u3066 \u4F7F\u3048\u308B\u306E\u304C \u3068\u304F\u3061\u3087\u3046\u3002"],["\u30C1\u30A7\u30B9","chess","\u265F\uFE0F","\u4E16\u754C\u4E2D\u3067 \u904A\u3070\u308C\u308B \u30DC\u30FC\u30C9\u30B2\u30FC\u30E0\u3002\u3057\u3087\u3046\u304E\u306E \u89AA\u305B\u304D\u3067\u3059\u3002"],["\u3054","go","\u26AB","\u767D\u3068 \u9ED2\u306E \u77F3\u3067 \u9663\u5730\u3092 \u53D6\u308A\u5408\u3046\u3001\u4E2D\u56FD\u3067 \u751F\u307E\u308C\u305F \u30B2\u30FC\u30E0\u3067\u3059\u3002"],["\u3058\u3083\u3093\u3051\u3093","rock-paper-scissors","\u270A","\u82F1\u8A9E\u3067\u306F rock, paper, scissors\u3002\u4E16\u754C\u4E2D\u3067 \u904A\u3070\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u306A\u308F\u3068\u3073","jump rope","\u{1FAA2}","\u82F1\u8A9E\u3067\u306F jump rope\u3002\u30C1\u30FC\u30E0\u3067 \u3068\u3076 \u5927\u4F1A\u3082 \u3042\u308A\u307E\u3059\u3002"],["\u30E8\u30FC\u30E8\u30FC","yo-yo","\u{1FA80}","\u3068\u3066\u3082 \u53E4\u3044 \u304A\u3082\u3061\u3083\u3067\u30012000\u5E74\u3044\u3058\u3087\u3046 \u524D\u306E \u30AE\u30EA\u30B7\u30E3\u306B\u3082 \u3042\u308A\u307E\u3057\u305F\u3002"],["\u30C9\u30DF\u30CE","dominoes","\u{1F06B}","\u306A\u3089\u3079\u3066 \u305F\u304A\u3059 \u3042\u305D\u3073\u306E \u307B\u304B\u3001\u70B9\u306E \u6570\u3067 \u3042\u305D\u3076 \u30B2\u30FC\u30E0\u3067\u3082 \u3042\u308A\u307E\u3059\u3002"],["\u30C8\u30E9\u30F3\u30D7","playing cards","\u{1F0CF}","\u82F1\u8A9E\u3067\u306F cards\u3002\u300Ctrump\u300D\u306F \u300C\u5207\u308A\u672D\u300D\u3068 \u3044\u3046 \u3044\u307F\u3067\u3059\u3002"]]},"toys-tales":{ja:"\u65E5\u672C\u306E \u6614\u8A71",en:"Japanese Folk Tales",c:"#8a5a3a",intro:"Once upon a time\u2026 \u65E5\u672C\u306B \u6614\u304B\u3089 \u4F1D\u308F\u308B \u304A\u8A71\u3067\u3059\u3002",links:["world-tales","japan-traditions","games-world","japan"],items:[["\u6843\u592A\u90CE","Momotaro","\u{1F351}","\u3082\u3082\u304B\u3089 \u751F\u307E\u308C\u305F \u7537\u306E\u5B50\u304C\u3001\u30A4\u30CC\u30FB\u30B5\u30EB\u30FB\u30AD\u30B8\u3068 \u304A\u306B\u9000\u6CBB\u306B \u884C\u304F \u304A\u8A71\u3002"],["\u6D66\u5CF6\u592A\u90CE","Urashima Taro","\u{1F422}","\u52A9\u3051\u305F \u30AB\u30E1\u306B \u3064\u308C\u3089\u308C\u3066\u3001\u6D77\u306E \u4E2D\u306E \u7ADC\u5BAE\u57CE\u3078 \u884C\u304F \u304A\u8A71\u3002"],["\u304B\u3050\u3084\u59EB","Princess Kaguya","\u{1F315}","\u7AF9\u306E \u4E2D\u304B\u3089 \u751F\u307E\u308C\u305F \u59EB\u304C\u3001\u3055\u3044\u3054\u306F \u6708\u3078 \u5E30\u308B\u3001\u65E5\u672C\u3067 \u3044\u3061\u3070\u3093 \u53E4\u3044 \u7269\u8A9E\u306E 1\u3064\u3002"],["\u4E00\u5BF8\u6CD5\u5E2B","Issun-boshi","\u{1F962}","\u5C0F\u3055\u306A \u7537\u306E\u5B50\u304C\u3001\u304A\u308F\u3093\u306E \u8239\u306B \u306E\u3063\u3066 \u90FD\u3078 \u65C5\u3092 \u3059\u308B \u304A\u8A71\u3002"],["\u91D1\u592A\u90CE","Kintaro","\u{1F43B}","\u5C71\u3067 \u52D5\u7269\u305F\u3061\u3068 \u80B2\u3063\u305F\u3001\u529B\u6301\u3061\u306E \u7537\u306E\u5B50\u306E \u304A\u8A71\u3002"],["\u304B\u3055\u3058\u305E\u3046","Kasa Jizo","\u26C4","\u3084\u3055\u3057\u3044 \u304A\u3058\u3044\u3055\u3093\u304C\u3001\u96EA\u306E \u4E2D\u306E \u304A\u3058\u305E\u3046\u3055\u307E\u306B \u304B\u3055\u3092 \u304B\u3076\u305B\u3066 \u3042\u3052\u308B \u304A\u8A71\u3002"],["\u3055\u308B\u304B\u306B\u5408\u6226","The Crab and the Monkey","\u{1F980}","\u3044\u3058\u308F\u308B\u306A \u30B5\u30EB\u306B\u3001\u30AB\u30CB\u3068 \u306A\u304B\u307E\u305F\u3061\u304C \u529B\u3092 \u5408\u308F\u305B\u308B \u304A\u8A71\u3002"]]},"world-tales":{ja:"\u4E16\u754C\u306E \u7269\u8A9E",en:"Stories from Around the World",c:"#5a3a7a",intro:"\u4E16\u754C\u306B\u306F\u3001\u4F55\u767E\u5E74\u3082 \u8A9E\u308A\u3064\u304C\u308C\u3066 \u304D\u305F \u7269\u8A9E\u304C \u3042\u308A\u307E\u3059\u3002",links:["toys-tales","europe","asia","writing","art"],items:[["\u30A6\u30B5\u30AE\u3068 \u30AB\u30E1","The Tortoise and the Hare","\u{1F422}","\u30AE\u30EA\u30B7\u30E3\u306E \u300C\u30A4\u30BD\u30C3\u30D7\u7269\u8A9E\u300D\u3002\u3053\u3064\u3053\u3064 \u304C\u3093\u3070\u308B \u5927\u5207\u3055\u3092 \u6559\u3048\u3066 \u304F\u308C\u307E\u3059\u3002"],["\u30B7\u30F3\u30C7\u30EC\u30E9","Cinderella","\u{1F460}","\u4E16\u754C\u4E2D\u306B \u306B\u305F \u304A\u8A71\u304C \u3042\u308B\u3001\u3068\u3066\u3082 \u53E4\u3044 \u7269\u8A9E\u3067\u3059\u3002"],["\u30D8\u30F3\u30BC\u30EB\u3068 \u30B0\u30EC\u30FC\u30C6\u30EB","Hansel and Gretel","\u{1F36C}","\u30C9\u30A4\u30C4\u306E \u30B0\u30EA\u30E0\u5144\u5F1F\u304C \u96C6\u3081\u305F \u6614\u8A71\u306E 1\u3064\u3067\u3059\u3002"],["\u3075\u3057\u304E\u306E \u56FD\u306E \u30A2\u30EA\u30B9","Alice in Wonderland","\u{1F407}","1865\u5E74\u3001\u30A4\u30AE\u30EA\u30B9\u3067 \u66F8\u304B\u308C\u305F \u3075\u3057\u304E\u306A \u7269\u8A9E\u3067\u3059\u3002"],["\u30D4\u30CE\u30C3\u30AD\u30AA","Pinocchio","\u{1FAB5}","1883\u5E74\u3001\u30A4\u30BF\u30EA\u30A2\u3067 \u66F8\u304B\u308C\u305F\u3001\u3046\u305D\u3092 \u3064\u304F\u3068 \u9F3B\u304C \u306E\u3073\u308B \u3042\u3084\u3064\u308A\u4EBA\u5F62\u306E \u304A\u8A71\u3002"],["\u30A2\u30E9\u30B8\u30F3","Aladdin","\u{1FA94}","\u300C\u5343\u591C\u4E00\u591C\u7269\u8A9E (\u30A2\u30E9\u30D3\u30A2\u30F3\u30FB\u30CA\u30A4\u30C8)\u300D\u306E \u304A\u8A71\u3068\u3057\u3066 \u4E16\u754C\u306B \u5E83\u307E\u308A\u307E\u3057\u305F\u3002"],["\u30B8\u30E3\u30C3\u30AF\u3068 \u8C46\u306E\u6728","Jack and the Beanstalk","\u{1F331}","\u30A4\u30AE\u30EA\u30B9\u306E \u6614\u8A71\u3002\u7A7A\u307E\u3067 \u306E\u3073\u308B \u8C46\u306E \u6728\u3092 \u306E\u307C\u308A\u307E\u3059\u3002"]]},robots:{ja:"\u30ED\u30DC\u30C3\u30C8\u306E \u305B\u304B\u3044",en:"Robots",c:"#4a5a7a",intro:"\u30ED\u30DC\u30C3\u30C8\u306F \u5DE5\u5834\u304B\u3089 \u5B87\u5B99\u307E\u3067\u3001\u3044\u308D\u3044\u308D\u306A \u5834\u6240\u3067 \u304B\u3064\u3084\u304F \u3057\u3066 \u3044\u307E\u3059\u3002",links:["science-fun","japan-inventions","space-explore","inventions","jobs-dream"],items:[["\u304B\u3089\u304F\u308A\u4EBA\u5F62","karakuri puppet","\u{1F38E}","\u6C5F\u6238\u6642\u4EE3\u306E \u65E5\u672C\u3067 \u4F5C\u3089\u308C\u305F\u3001\u305C\u3093\u307E\u3044\u3067 \u52D5\u304F \u4EBA\u5F62\u3002\u30ED\u30DC\u30C3\u30C8\u306E \u3054\u5148\u7956\u3055\u307E\u3067\u3059\u3002"],["ASIMO","ASIMO","\u{1F916}","2000\u5E74\u306B \u65E5\u672C\u306E \u4F1A\u793E\u304C \u767A\u8868\u3057\u305F\u30012\u672C\u306E \u8DB3\u3067 \u6B69\u304F \u30ED\u30DC\u30C3\u30C8\u3067\u3059\u3002"],["\u706B\u661F\u305F\u3093\u3055\u8ECA","Mars rover","\u{1F6F0}\uFE0F","\u706B\u661F\u306E \u4E0A\u3092 \u8D70\u3063\u3066\u3001\u5199\u771F\u3092 \u3068\u3063\u305F\u308A \u77F3\u3092 \u8ABF\u3079\u305F\u308A \u3057\u307E\u3059\u3002"],["\u304A\u305D\u3046\u3058 \u30ED\u30DC\u30C3\u30C8","robot vacuum","\u{1F9F9}","\u90E8\u5C4B\u306E \u5F62\u3092 \u304A\u307C\u3048\u3066\u3001\u81EA\u52D5\u3067 \u305D\u3046\u3058\u3092 \u3057\u3066 \u304F\u308C\u307E\u3059\u3002"],["\u5DE5\u5834\u306E \u30ED\u30DC\u30C3\u30C8","factory robot","\u{1F9BE}","\u8ECA\u306A\u3069\u3092 \u7D44\u307F\u7ACB\u3066\u308B \u5927\u304D\u306A \u3046\u3067\u306E \u30ED\u30DC\u30C3\u30C8\u3002\u65E5\u672C\u306F \u30ED\u30DC\u30C3\u30C8\u5927\u56FD\u3067\u3059\u3002"],["\u30C9\u30ED\u30FC\u30F3","drone","\u{1F681}","\u7A7A\u3092 \u3068\u3076 \u30ED\u30DC\u30C3\u30C8\u3002\u5199\u771F\u3055\u3064\u3048\u3044\u3084 \u8377\u7269 \u904B\u3073\u306B \u4F7F\u308F\u308C\u307E\u3059\u3002"],["AI","artificial intelligence","\u{1F4AC}","\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u304C \u3053\u3068\u3070\u3092 \u7406\u89E3\u3057\u305F\u308A\u3001\u7D75\u3092 \u898B\u5206\u3051\u305F\u308A \u3059\u308B \u6280\u8853\u3067\u3059\u3002"]]},environment:{ja:"\u5730\u7403\u3092 \u5B88\u308D\u3046",en:"Protect the Earth",c:"#3a8a5a",intro:"What can we do for the earth? \u308F\u305F\u3057\u305F\u3061\u306B \u3067\u304D\u308B \u3053\u3068\u3092 \u8003\u3048\u3088\u3046\u3002",links:["ocean","plants","weather","animal-records","science-fun","endangered-japan"],items:[["3R","Reduce, Reuse, Recycle","\u267B\uFE0F","\u3078\u3089\u3059 (Reduce)\u3001\u304F\u308A\u8FD4\u3057 \u4F7F\u3046 (Reuse)\u3001\u8CC7\u6E90\u306B \u3082\u3069\u3059 (Recycle)\u3002"],["\u6D77\u306E \u30D7\u30E9\u30B9\u30C1\u30C3\u30AF","plastic in the ocean","\u{1F30A}","\u6D77\u306B \u6D41\u308C\u305F \u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u306F\u3001\u9B5A\u3084 \u30A6\u30DF\u30AC\u30E1\u304C \u98DF\u3079\u3066 \u3057\u307E\u3046 \u3053\u3068\u304C \u3042\u308A\u307E\u3059\u3002"],["\u592A\u967D\u5149\u767A\u96FB","solar power","\u2600\uFE0F","\u592A\u967D\u306E \u5149\u3067 \u96FB\u6C17\u3092 \u4F5C\u308A\u307E\u3059\u3002"],["\u98A8\u529B\u767A\u96FB","wind power","\u{1F32C}\uFE0F","\u98A8\u3067 \u5927\u304D\u306A \u98A8\u8ECA\u3092 \u56DE\u3057\u3066 \u96FB\u6C17\u3092 \u4F5C\u308A\u307E\u3059\u3002"],["\u68EE\u3092 \u5B88\u308B","protecting forests","\u{1F333}","\u6728\u306F \u4E8C\u9178\u5316\u70AD\u7D20\u3092 \u3059\u3063\u3066\u3001\u9178\u7D20\u3092 \u51FA\u3057\u3066 \u304F\u308C\u307E\u3059\u3002"],["\u30A8\u30B3\u30D0\u30C3\u30B0","eco bag","\u{1F6CD}\uFE0F","\u81EA\u5206\u306E \u30D0\u30C3\u30B0\u3092 \u4F7F\u3046\u3068\u3001\u3054\u307F\u3092 \u3078\u3089\u305B\u307E\u3059\u3002"],["\u6C34\u3092 \u5927\u5207\u306B","save water","\u{1F6B0}","\u6B6F\u307F\u304C\u304D\u306E \u9593 \u6C34\u3092 \u6B62\u3081\u308B\u3060\u3051\u3067\u3001\u305F\u304F\u3055\u3093\u306E \u6C34\u304C \u305B\u3064\u3084\u304F \u3067\u304D\u307E\u3059\u3002"],["\u30D5\u30FC\u30C9\u30ED\u30B9","food waste","\u{1F371}","\u98DF\u3079\u3089\u308C\u308B\u306E\u306B \u3059\u3066\u3089\u308C\u308B \u98DF\u3079\u3082\u306E\u3002\u306E\u3053\u3055\u305A \u98DF\u3079\u308B \u3053\u3068\u3082 \u5730\u7403\u306B \u3084\u3055\u3057\u3044 \u884C\u52D5\u3067\u3059\u3002"]]},"endangered-japan":{ja:"\u5B88\u308A\u305F\u3044 \u65E5\u672C\u306E \u751F\u304D\u3082\u306E",en:"Japan's Rare Wildlife",c:"#5a7a3a",intro:"\u65E5\u672C\u306B\u3082\u3001\u6570\u304C \u3078\u3063\u3066 \u5B88\u308B \u3053\u3068\u304C \u5FC5\u8981\u306A \u751F\u304D\u3082\u306E\u304C \u3044\u307E\u3059\u3002",links:["japan-animals","environment","birds","japan-islands","nagasaki"],items:[["\u30C8\u30AD","Japanese crested ibis","\u{1F9A2}","\u4E00\u5EA6\u306F \u65E5\u672C\u306E \u91CE\u751F\u304B\u3089 \u3044\u306A\u304F \u306A\u308A\u307E\u3057\u305F\u304C\u3001\u65B0\u6F5F\u770C\u306E \u4F50\u6E21\u5CF6\u3067 \u3075\u3084\u3057\u3066 \u7A7A\u306B \u3082\u3069\u3057\u3066 \u3044\u307E\u3059\u3002"],["\u30B3\u30A6\u30CE\u30C8\u30EA","Oriental stork","\u{1FABD}","\u5175\u5EAB\u770C \u8C4A\u5CA1\u5E02\u3067 \u5927\u5207\u306B \u80B2\u3066\u3089\u308C\u3001\u307E\u305F \u65E5\u672C\u306E \u7A7A\u3092 \u3068\u3076 \u3088\u3046\u306B \u306A\u308A\u307E\u3057\u305F\u3002"],["\u30A4\u30EA\u30AA\u30E2\u30C6\u30E4\u30DE\u30CD\u30B3","Iriomote cat","\u{1F406}","\u6C96\u7E04\u770C \u897F\u8868\u5CF6\u3060\u3051\u306B \u3059\u3080 \u91CE\u751F\u306E \u30CD\u30B3\u3067\u3059\u3002"],["\u30E9\u30A4\u30C1\u30E7\u30A6","rock ptarmigan","\u{1F426}","\u9AD8\u3044 \u5C71\u306B \u3059\u3080 \u9CE5\u3002\u51AC\u306F \u307E\u3063\u767D\u3001\u590F\u306F \u8336\u8272\u306B \u306A\u308A\u307E\u3059\u3002"],["\u30CB\u30DB\u30F3\u30A6\u30CA\u30AE","Japanese eel","\u{1F40D}","\u6D77\u3067 \u751F\u307E\u308C\u3066 \u5DDD\u3092 \u306E\u307C\u308B\u3001\u65C5\u3092 \u3059\u308B \u9B5A\u3067\u3059\u3002"],["\u30B2\u30F3\u30B4\u30ED\u30A6","diving beetle","\u{1FAB2}","\u7530\u3093\u307C\u3084 \u6C60\u306B \u3059\u3080 \u6C34\u306E \u3053\u3093\u866B\u3002\u6570\u304C \u3078\u3063\u3066 \u3044\u307E\u3059\u3002"]]},"japan-islands":{ja:"\u65E5\u672C\u306E \u5CF6",en:"Islands of Japan",c:"#2a7a9a",intro:"\u65E5\u672C\u306B\u306F 1\u4E074000\u3044\u3058\u3087\u3046\u306E \u5CF6\u304C \u3042\u308A\u307E\u3059\u3002\u3044\u3061\u3070\u3093 \u5CF6\u304C \u591A\u3044 \u770C\u306F\u2026 \u9577\u5D0E\u770C\uFF01",links:["nagasaki","japan","earth-science","ocean","endangered-japan","geo-records"],items:[["\u672C\u5DDE","Honshu","\u{1F5FE}","\u65E5\u672C\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u5CF6\u3002\u4E16\u754C\u3067\u3082 7\u756A\u76EE\u306B \u5927\u304D\u3044 \u5CF6\u3067\u3059\u3002"],["\u9577\u5D0E\u770C\u306E \u5CF6","islands of Nagasaki","\u{1F3DD}\uFE0F","\u9577\u5D0E\u770C\u306B\u306F 1400\u3044\u3058\u3087\u3046\u306E \u5CF6\u304C \u3042\u308A\u3001\u65E5\u672C\u4E00 \u5CF6\u304C \u591A\u3044 \u770C\u3067\u3059\u3002"],["\u4E94\u5CF6\u5217\u5CF6","Goto Islands","\u26F5","\u9577\u5D0E\u770C\u306E \u897F\u306B \u306A\u3089\u3076 \u5CF6\u3005\u3002\u304D\u308C\u3044\u306A \u6D77\u3067 \u6709\u540D\u3067\u3059\u3002"],["\u5C4B\u4E45\u5CF6","Yakushima","\u{1F332}","\u9E7F\u5150\u5CF6\u770C\u306E \u5CF6\u3002\u4F55\u5343\u5E74\u3082 \u751F\u304D\u308B \u5C4B\u4E45\u6749\u306E \u68EE\u304C \u3042\u308A\u307E\u3059\u3002"],["\u4F50\u6E21\u5CF6","Sado Island","\u{1F9A2}","\u65B0\u6F5F\u770C\u306E \u5CF6\u3002\u30C8\u30AD\u304C \u304F\u3089\u3059 \u5CF6\u3068\u3057\u3066 \u77E5\u3089\u308C\u307E\u3059\u3002"],["\u6C96\u7E04\u672C\u5CF6","Okinawa Island","\u{1F420}","\u30B5\u30F3\u30B4\u3057\u3087\u3046\u306E \u6D77\u306B \u304B\u3053\u307E\u308C\u305F\u3001\u5357\u306E \u5CF6\u3067\u3059\u3002"],["\u5C0F\u7B20\u539F\u8AF8\u5CF6","Ogasawara Islands","\u{1F40B}","\u6771\u4EAC\u90FD\u306E \u5CF6\u3002\u6771\u4EAC\u304B\u3089 \u8239\u3067 24\u6642\u9593 \u304F\u3089\u3044 \u304B\u304B\u308A\u307E\u3059\u3002\u30AF\u30B8\u30E9\u304C \u898B\u3089\u308C\u307E\u3059\u3002"],["\u5317\u6D77\u9053","Hokkaido","\u2744\uFE0F","\u65E5\u672C\u3067 2\u756A\u76EE\u306B \u5927\u304D\u3044 \u5CF6\u3002\u51AC\u306F \u96EA\u304C \u305F\u304F\u3055\u3093 \u3075\u308A\u307E\u3059\u3002"]]},reptiles:{ja:"\u306F\u3061\u3085\u3046\u308B\u3044\u3068 \u308A\u3087\u3046\u305B\u3044\u308B\u3044",en:"Reptiles and Amphibians",c:"#5a7a2a",intro:"\u3046\u308D\u3053\u306E \u306F\u3061\u3085\u3046\u308B\u3044\u3068\u3001\u6C34\u3068 \u308A\u304F\u3067 \u304F\u3089\u3059 \u308A\u3087\u3046\u305B\u3044\u308B\u3044\u3002\u3075\u3057\u304E\u306A \u751F\u304D\u3082\u306E \u3070\u304B\u308A\uFF01",links:["dinosaurs","rainforest","desert","insects","animals","pets"],items:[["\u30EF\u30CB","crocodile","\u{1F40A}","\u304D\u3087\u3046\u308A\u3085\u3046\u306E \u6642\u4EE3\u304B\u3089 \u3059\u304C\u305F\u304C \u3042\u307E\u308A \u304B\u308F\u3063\u3066 \u3044\u306A\u3044 \u751F\u304D\u3082\u306E\u3067\u3059\u3002"],["\u30AD\u30F3\u30B0\u30B3\u30D6\u30E9","king cobra","\u{1F40D}","\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u9577\u3044 \u3069\u304F\u30D8\u30D3\u30025m\u3092 \u3053\u3048\u308B \u3053\u3068\u3082 \u3042\u308A\u307E\u3059\u3002"],["\u30AB\u30E1\u30EC\u30AA\u30F3","chameleon","\u{1F98E}","\u5DE6\u53F3\u306E \u76EE\u3092 \u3079\u3064\u3079\u3064\u306B \u52D5\u304B\u305B\u307E\u3059\u3002\u4F53\u306E \u8272\u3082 \u304B\u3048\u3089\u308C\u307E\u3059\u3002"],["\u30B3\u30E2\u30C9\u30AA\u30AA\u30C8\u30AB\u30B2","Komodo dragon","\u{1F98E}","\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u5927\u304D\u3044 \u30C8\u30AB\u30B2\u3002\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2\u306E \u5CF6\u306B \u3059\u3093\u3067 \u3044\u307E\u3059\u3002"],["\u30E4\u30E2\u30EA","gecko","\u{1F98E}","\u8DB3\u306E \u3046\u3089\u306E \u7D30\u304B\u3044 \u6BDB\u3067\u3001\u304B\u3079\u3084 \u5929\u3058\u3087\u3046\u3082 \u6B69\u3051\u307E\u3059\u3002"],["\u30AC\u30E9\u30D1\u30B4\u30B9\u30BE\u30A6\u30AC\u30E1","Gal\xE1pagos tortoise","\u{1F422}","100\u5E74\u3044\u3058\u3087\u3046 \u751F\u304D\u308B \u3053\u3068\u3082 \u3042\u308B \u5927\u304D\u306A \u30AB\u30E1\u3067\u3059\u3002"],["\u30A6\u30FC\u30D1\u30FC\u30EB\u30FC\u30D1\u30FC","axolotl","\u{1F98E}","\u30E1\u30AD\u30B7\u30B3\u306E \u6E56\u306B \u3059\u3080 \u30B5\u30F3\u30B7\u30E7\u30A6\u30A6\u30AA\u306E \u306A\u304B\u307E\u3002\u3051\u304C\u3092 \u3057\u3066\u3082 \u4F53\u304C \u5143\u306B \u3082\u3069\u308B \u529B\u304C \u3042\u308A\u307E\u3059\u3002"],["\u30AB\u30A8\u30EB","frog","\u{1F438}","\u30AB\u30A8\u30EB\u306F \u76AE\u3075\u304B\u3089\u3082 \u6C34\u3092 \u53D6\u308A\u5165\u308C\u307E\u3059\u3002"]]},aquarium:{ja:"\u6C34\u65CF\u9928\u306E \u4EBA\u6C17\u8005",en:"Aquarium Favorites",c:"#2a6aa8",intro:"\u6C34\u65CF\u9928\u3067 \u4F1A\u3048\u308B \u6D77\u306E \u751F\u304D\u3082\u306E\u305F\u3061\u3002\u3075\u3057\u304E\u306A \u3072\u307F\u3064\u3092 \u3082\u3063\u3066 \u3044\u307E\u3059\u3002",links:["ocean","deepsea","japanese-food","environment","reptiles"],items:[["\u30AB\u30AF\u30EC\u30AF\u30DE\u30CE\u30DF","clownfish","\u{1F420}","\u30A4\u30BD\u30AE\u30F3\u30C1\u30E3\u30AF\u306E \u4E2D\u3067 \u5B88\u3089\u308C\u306A\u304C\u3089 \u304F\u3089\u3057\u307E\u3059\u3002"],["\u30AF\u30ED\u30DE\u30B0\u30ED","bluefin tuna","\u{1F41F}","\u3058\u305D\u304F 70km\u3044\u3058\u3087\u3046\u3067 \u6CF3\u3052\u308B\u3001\u3068\u3066\u3082 \u901F\u3044 \u9B5A\u3067\u3059\u3002"],["\u30DE\u30F3\u30DC\u30A6","ocean sunfish","\u{1F421}","\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u91CD\u3044 \u786C\u9AA8\u9B5A\u3002\u4E00\u5EA6\u306B \u4F55\u5104\u3053\u3082\u306E \u305F\u307E\u3054\u3092 \u3046\u307F\u307E\u3059\u3002"],["\u30BF\u30C4\u30CE\u30AA\u30C8\u30B7\u30B4","seahorse","\u{1F434}","\u30AA\u30B9\u306E \u304A\u306A\u304B\u306E \u3075\u304F\u308D\u3067 \u8D64\u3061\u3083\u3093\u304C \u80B2\u3064\u3001\u3081\u305A\u3089\u3057\u3044 \u9B5A\u3067\u3059\u3002"],["\u30BF\u30B3","octopus","\u{1F419}","\u5FC3\u305E\u3046\u304C 3\u3064 \u3042\u308A\u3001\u8840\u306E \u8272\u306F \u9752\u3067\u3059\u3002"],["\u30D2\u30C8\u30C7","starfish","\u2B50","\u3046\u3067\u304C \u5207\u308C\u3066\u3082\u3001\u307E\u305F \u751F\u3048\u3066 \u304D\u307E\u3059\u3002"],["\u30D5\u30B0","pufferfish","\u{1F421}","\u304A\u3069\u308D\u304F\u3068\u3001\u6C34\u3092 \u3059\u3063\u3066 \u4F53\u3092 \u5927\u304D\u304F \u3075\u304F\u3089\u307E\u305B\u307E\u3059\u3002"],["\u30DA\u30F3\u30AE\u30F3","penguin","\u{1F427}","\u7A7A\u306F \u3068\u3079\u307E\u305B\u3093\u304C\u3001\u6C34\u306E \u4E2D\u3092 \u3068\u3076\u3088\u3046\u306B \u6CF3\u304E\u307E\u3059\u3002"],["\u30A4\u30EF\u30B7\u306E \u3080\u308C","school of sardines","\u{1F41F}","\u5927\u304D\u306A \u3080\u308C\u3067 \u6CF3\u3044\u3067\u3001\u5927\u304D\u306A \u9B5A\u304B\u3089 \u8EAB\u3092 \u5B88\u308A\u307E\u3059\u3002"]]},"dog-breeds":{ja:"\u30A4\u30CC\u306E \u3057\u3085\u308B\u3044",en:"Dog Breeds",c:"#a8783a",intro:"I have a dog. \u30A4\u30CC\u306B\u306F \u305F\u304F\u3055\u3093\u306E \u3057\u3085\u308B\u3044\u304C \u3042\u308A\u307E\u3059\u3002\u65E5\u672C\u751F\u307E\u308C\u306E \u30A4\u30CC\u3082\uFF01",links:["pets","farm","jobs-town","animal-records","japan"],items:[["\u67F4\u72AC","Shiba Inu","\u{1F415}","\u65E5\u672C\u3067 \u53E4\u304F\u304B\u3089 \u3044\u308B \u30A4\u30CC\u3002\u300CSHIBA\u300D\u306F \u4E16\u754C\u3067\u3082 \u4EBA\u6C17\u3067\u3059\u3002"],["\u79CB\u7530\u72AC","Akita","\u{1F415}","\u6771\u4EAC\u30FB\u6E0B\u8C37\u306E \u300C\u30CF\u30C1\u516C\u300D\u306F \u79CB\u7530\u72AC\u3002\u98FC\u3044\u4E3B\u3092 \u307E\u3061\u7D9A\u3051\u305F \u8A71\u3067 \u6709\u540D\u3067\u3059\u3002"],["\u30C1\u30EF\u30EF","Chihuahua","\u{1F436}","\u4E16\u754C\u3067 \u3044\u3061\u3070\u3093 \u5C0F\u3055\u3044 \u72AC\u306E \u3057\u3085\u308B\u3044\u3002\u30E1\u30AD\u30B7\u30B3\u306E \u5730\u540D\u304C \u540D\u524D\u306E \u3082\u3068\u3067\u3059\u3002"],["\u30B0\u30EC\u30FC\u30C8\u30FB\u30C7\u30FC\u30F3","Great Dane","\u{1F415}","\u3068\u3066\u3082 \u305B\u304C \u9AD8\u3044 \u72AC\u3002\u7ACB\u3061\u4E0A\u304C\u308B\u3068 \u4EBA\u3088\u308A \u5927\u304D\u304F \u306A\u308B \u3053\u3068\u3082\u3002"],["\u30C0\u30EB\u30E1\u30B7\u30A2\u30F3","Dalmatian","\u{1F415}","\u767D\u306B \u9ED2\u3044 \u6C34\u7389\u3082\u3088\u3046\u306E \u72AC\u3002\u751F\u307E\u308C\u305F \u3068\u304D\u306F \u307E\u3063\u767D\u3067\u3059\u3002"],["\u30B4\u30FC\u30EB\u30C7\u30F3\u30FB\u30EC\u30C8\u30EA\u30D0\u30FC","Golden Retriever","\u{1F9AE}","\u3084\u3055\u3057\u304F \u304B\u3057\u3053\u3044\u306E\u3067\u3001\u3082\u3046\u3069\u3046\u72AC\u3068\u3057\u3066\u3082 \u304B\u3064\u3084\u304F \u3057\u307E\u3059\u3002"],["\u30B7\u30D9\u30EA\u30A2\u30F3\u30FB\u30CF\u30B9\u30AD\u30FC","Siberian Husky","\u{1F43A}","\u5BD2\u3055\u306B \u5F37\u304F\u3001\u96EA\u306E \u4E0A\u3067 \u305D\u308A\u3092 \u5F15\u3044\u3066 \u304D\u307E\u3057\u305F\u3002"],["\u30D7\u30FC\u30C9\u30EB","Poodle","\u{1F429}","\u6BDB\u304C \u306C\u3051\u306B\u304F\u304F\u3001\u3068\u3066\u3082 \u304B\u3057\u3053\u3044 \u72AC\u3067\u3059\u3002"]]},art:{ja:"\u7F8E\u8853\u306E \u305B\u304B\u3044",en:"The World of Art",c:"#6a3a5a",intro:"\u7D75\u3001\u3061\u3087\u3046\u3053\u304F\u3001\u3084\u304D\u3082\u306E\u2026 \u4E16\u754C\u4E2D\u306E \u4EBA\u304C\u3001\u3044\u308D\u3044\u308D\u306A \u65B9\u6CD5\u3067 \u7F8E\u3057\u3044 \u3082\u306E\u3092 \u4F5C\u3063\u3066 \u304D\u307E\u3057\u305F\u3002",links:["art-timeline","art-movements","art-japan-history","art-world-crafts","art-mediums","heroes","japan-traditions"],items:[["\u30E2\u30CA\u30FB\u30EA\u30B6","Mona Lisa","\u{1F5BC}\uFE0F","\u30EC\u30AA\u30CA\u30EB\u30C9\u30FB\u30C0\u30FB\u30F4\u30A3\u30F3\u30C1\u306E \u7D75\u3002\u30D5\u30E9\u30F3\u30B9\u306E \u30EB\u30FC\u30D6\u30EB\u7F8E\u8853\u9928\u306B \u3042\u308A\u307E\u3059\u3002"],["\u3072\u307E\u308F\u308A","Sunflowers","\u{1F33B}","\u30AA\u30E9\u30F3\u30C0\u306E \u753B\u5BB6 \u30B4\u30C3\u30DB\u304C \u304B\u3044\u305F \u3072\u307E\u308F\u308A\u306E \u7D75\u3002\u4F55\u307E\u3044\u3082 \u304B\u304D\u307E\u3057\u305F\u3002"],["\u795E\u5948\u5DDD\u6C96\u6D6A\u88CF","The Great Wave","\u{1F30A}","\u845B\u98FE\u5317\u658E\u306E \u6D6E\u4E16\u7D75\u3002\u5927\u304D\u306A \u6CE2\u3068 \u5BCC\u58EB\u5C71\u304C \u3048\u304C\u304B\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u6CE2\u4F50\u898B\u713C","Hasami ware","\u{1F375}","\u9577\u5D0E\u770C \u6CE2\u4F50\u898B\u753A\u306E \u3084\u304D\u3082\u306E\u3002400\u5E74\u3044\u3058\u3087\u3046\u306E \u6B74\u53F2\u304C \u3042\u308A\u307E\u3059\u3002"],["\u6709\u7530\u713C","Arita ware","\u{1F3FA}","\u4F50\u8CC0\u770C\u306E \u3084\u304D\u3082\u306E\u3002\u3080\u304B\u3057\u3001\u30E8\u30FC\u30ED\u30C3\u30D1\u306B\u3082 \u305F\u304F\u3055\u3093 \u904B\u3070\u308C\u307E\u3057\u305F\u3002"],["\u3061\u3087\u3046\u3053\u304F","sculpture","\u{1F5FF}","\u77F3\u3084 \u6728\u3092 \u3051\u305A\u3063\u3066 \u5F62\u3092 \u4F5C\u308B \u7F8E\u8853\u3067\u3059\u3002"],["\u30B9\u30C6\u30F3\u30C9\u30B0\u30E9\u30B9","stained glass","\u{1FA9F}","\u8272\u306E \u3064\u3044\u305F \u30AC\u30E9\u30B9\u3092 \u7D44\u307F\u5408\u308F\u305B\u3066 \u4F5C\u308B \u7D75\u3067\u3059\u3002"],["\u30E2\u30B6\u30A4\u30AF","mosaic","\u{1F9E9}","\u5C0F\u3055\u306A \u77F3\u3084 \u30BF\u30A4\u30EB\u3092 \u306A\u3089\u3079\u3066 \u4F5C\u308B \u7D75\u30022000\u5E74\u3044\u3058\u3087\u3046 \u524D\u304B\u3089 \u3042\u308A\u307E\u3059\u3002"]]},numbers:{ja:"\u6570\u306E \u3075\u3057\u304E",en:"Fun with Numbers",c:"#3a5a9a",intro:"How many? \u6570\u306B\u306F \u304A\u3082\u3057\u308D\u3044 \u3072\u307F\u3064\u304C \u3044\u3063\u3071\u3044\uFF01",links:["games-world","colors-shapes","money","school-subjects","time"],items:[["\u30BC\u30ED","zero","0","\u300C0\u300D\u3092 \u6570\u3068\u3057\u3066 \u4F7F\u3046 \u8003\u3048\u306F\u3001\u30A4\u30F3\u30C9\u3067 \u751F\u307E\u308C\u305F\u3068 \u3044\u308F\u308C\u307E\u3059\u3002"],["\u30ED\u30FC\u30DE\u6570\u5B57","Roman numerals","\u216B","\u2160, \u2164, \u2169 \u306A\u3069\u3067 \u6570\u3092 \u3042\u3089\u308F\u3057\u307E\u3059\u3002\u6642\u8A08\u3067 \u898B\u304B\u3051\u308B \u3053\u3068\u3082\u3002"],["\u305D\u308D\u3070\u3093","abacus","\u{1F9EE}","\u305F\u307E\u3092 \u52D5\u304B\u3057\u3066 \u8A08\u7B97\u3059\u308B \u9053\u5177\u3002\u65E5\u672C\u3067\u306F \u3080\u304B\u3057\u304B\u3089 \u4F7F\u308F\u308C\u3066 \u3044\u307E\u3059\u3002"],["\u30B5\u30A4\u30B3\u30ED","dice","\u{1F3B2}","\u5411\u304B\u3044\u5408\u3046 \u9762\u306E \u6570\u3092 \u305F\u3059\u3068\u3001\u3044\u3064\u3082 7\u306B \u306A\u308A\u307E\u3059\u3002"],["\u5927\u304D\u3044 \u6570","big numbers","\u5104","\u4E00\u3001\u5341\u3001\u767E\u3001\u5343\u3001\u4E07\u3001\u5104\u3001\u5146\u3001\u4EAC\u2026 \u65E5\u672C\u8A9E\u306B\u306F \u3082\u3063\u3068 \u5927\u304D\u3044 \u6570\u306E \u540D\u524D\u3082 \u3042\u308A\u307E\u3059\u3002"],["\u5186\u5468\u7387","pi","\u03C0","\u5186\u306E \u307E\u308F\u308A\u306E \u9577\u3055\u306F\u3001\u76F4\u5F84\u306E \u7D043.14\u500D\u3002\u3069\u3053\u307E\u3067\u3082 \u7D9A\u304F \u6570\u3067\u3059\u3002"],["\u82F1\u8A9E\u306E \u6570","numbers in English","12","eleven\u3001twelve \u306E \u3042\u3068\u306F\u3001thirteen \u304B\u3089 -teen \u304C \u3064\u304D\u307E\u3059\u3002"]]},time:{ja:"\u6642\u9593\u3068 \u6642\u8A08",en:"Time and Clocks",c:"#5a5a7a",intro:"What time is it? \u6642\u9593\u306E \u3075\u3057\u304E\u3092 \u898B\u3066 \u307F\u3088\u3046\u3002",links:["numbers","moon-stars","regions","daily-life","inventions"],items:[["\u65E5\u6642\u8A08","sundial","\u2600\uFE0F","\u304B\u3052\u306E \u5411\u304D\u3067 \u6642\u3053\u304F\u3092 \u77E5\u308B\u3001\u3068\u3066\u3082 \u53E4\u3044 \u6642\u8A08\u3067\u3059\u3002"],["\u6642\u5DEE","time difference","\u{1F310}","\u65E5\u672C\u304C \u663C\u306E \u3068\u304D\u3001\u30A4\u30AE\u30EA\u30B9\u306F \u307E\u3060 \u671D\u306E \u65E9\u3044 \u6642\u9593\u3002\u56FD\u306B \u3088\u3063\u3066 \u6642\u3053\u304F\u304C \u3061\u304C\u3044\u307E\u3059\u3002"],["\u3046\u308B\u3046\u5E74","leap year","\u{1F4C5}","4\u5E74\u306B 1\u56DE\u30012\u6708\u304C 29\u65E5\u307E\u3067 \u3042\u308B \u5E74\u3067\u3059\u3002"],["\u30D3\u30C3\u30B0\u30FB\u30D9\u30F3","Big Ben","\u{1F570}\uFE0F","\u30ED\u30F3\u30C9\u30F3\u306E \u5927\u6642\u8A08\u306E \u304B\u306D\u306E \u540D\u524D\u3067\u3059\u3002"],["1\u65E5","a day","\u{1F30D}","\u5730\u7403\u304C 1\u56DE \u56DE\u308B\u3068 1\u65E5\u30021\u65E5\u306F 24\u6642\u9593\u3067\u3059\u3002"],["1\u5E74","a year","\u{1F504}","\u5730\u7403\u304C \u592A\u967D\u306E \u307E\u308F\u308A\u3092 1\u5468 \u3059\u308B\u3068 1\u5E74\u3002\u7D04365\u65E5\u3067\u3059\u3002"],["\u66DC\u65E5","days of the week","\u{1F5D3}\uFE0F","Sunday \u306F \u592A\u967D\u306E \u65E5\u3001Monday \u306F \u6708\u306E \u65E5 \u304B\u3089 \u6765\u3066 \u3044\u307E\u3059\u3002"]]},"daily-life":{ja:"1\u65E5\u306E \u751F\u6D3B",en:"My Daily Life",c:"#7a6a3a",intro:"What time do you get up? \u4E16\u754C\u306E \u5B50\u3069\u3082\u306E 1\u65E5\u3068 \u304F\u3089\u3079\u3066 \u307F\u3088\u3046\u3002",links:["time","breakfast-world","school-subjects","feelings","houses-world"],items:[["\u8D77\u304D\u308B","get up","\u23F0","I get up at 6:30. \u8D77\u304D\u308B \u6642\u3053\u304F\u3092 \u82F1\u8A9E\u3067 \u8A00\u3063\u3066 \u307F\u3088\u3046\u3002"],["\u671D\u3054\u306F\u3093\u3092 \u98DF\u3079\u308B","eat breakfast","\u{1F35A}","\u671D\u3054\u306F\u3093\u306F\u3001\u306E\u3046\u306E \u30A8\u30CD\u30EB\u30AE\u30FC\u306B \u306A\u308A\u307E\u3059\u3002"],["\u5B66\u6821\u3078 \u884C\u304F","go to school","\u{1F392}","\u65E5\u672C\u3067\u306F \u6B69\u3044\u3066 \u5B66\u6821\u3078 \u884C\u304F \u5B50\u304C \u591A\u3044\u3067\u3059\u304C\u3001\u30B9\u30AF\u30FC\u30EB\u30D0\u30B9\u306E \u56FD\u3082 \u3042\u308A\u307E\u3059\u3002"],["\u5BBF\u984C\u3092 \u3059\u308B","do my homework","\u{1F4DD}","I do my homework. \u5BBF\u984C\u306E \u5C11\u306A\u3044 \u56FD\u3082\u3001\u591A\u3044 \u56FD\u3082 \u3042\u308A\u307E\u3059\u3002"],["\u304A\u3075\u308D\u306B \u5165\u308B","take a bath","\u{1F6C1}","\u304A\u3075\u308D\u306B \u3064\u304B\u308B \u7FD2\u6163\u306F\u3001\u65E5\u672C\u306E \u3068\u304F\u3061\u3087\u3046\u306E 1\u3064\u3067\u3059\u3002"],["\u306D\u308B","go to bed","\u{1F6CF}\uFE0F","I go to bed at 9:00. \u3088\u304F \u306D\u308B\u3068\u3001\u4F53\u3082 \u306E\u3046\u3082 \u5143\u6C17\u306B \u306A\u308A\u307E\u3059\u3002"]]},"breakfast-world":{ja:"\u4E16\u754C\u306E \u671D\u3054\u306F\u3093",en:"Breakfast Around the World",c:"#c2803a",intro:"What do you eat for breakfast? \u56FD\u306B \u3088\u3063\u3066 \u671D\u3054\u306F\u3093\u3082 \u3044\u308D\u3044\u308D\u3002",links:["daily-life","world-dishes","japanese-food","fruits","regions"],items:[["\u65E5\u672C","Japan","\u{1F35A}","\u3054\u306F\u3093\u3001\u307F\u305D\u3057\u308B\u3001\u713C\u304D\u9B5A\u3001\u306A\u3063\u3068\u3046\u3002\u30D1\u30F3\u306E \u5BB6\u3082 \u591A\u3044\u3067\u3059\u306D\u3002"],["\u30A4\u30AE\u30EA\u30B9","the UK","\u{1F373}","\u305F\u307E\u3054\u3001\u30D9\u30FC\u30B3\u30F3\u3001\u30BD\u30FC\u30BB\u30FC\u30B8\u3001\u713C\u3044\u305F \u30C8\u30DE\u30C8\u3001\u8C46\u306E \u300C\u30D5\u30EB\u30FB\u30D6\u30EC\u30C3\u30AF\u30D5\u30A1\u30B9\u30C8\u300D\u3002"],["\u30A2\u30E1\u30EA\u30AB","the USA","\u{1F95E}","\u30D1\u30F3\u30B1\u30FC\u30AD\u306B \u30E1\u30FC\u30D7\u30EB\u30B7\u30ED\u30C3\u30D7\u3002\u30B7\u30EA\u30A2\u30EB\u3082 \u4EBA\u6C17\u3067\u3059\u3002"],["\u30D5\u30E9\u30F3\u30B9","France","\u{1F950}","\u30AF\u30ED\u30EF\u30C3\u30B5\u30F3\u3084 \u30D0\u30B2\u30C3\u30C8\u306B\u3001\u30AB\u30D5\u30A7\u30AA\u30EC\u3002"],["\u4E2D\u56FD","China","\u{1F963}","\u304A\u304B\u3086\u3084\u3001\u30E8\u30A6\u30C6\u30A3\u30A2\u30AA (\u3042\u3052\u30D1\u30F3) \u3068 \u8C46\u4E73\u3002"],["\u30E1\u30AD\u30B7\u30B3","Mexico","\u{1F32E}","\u30C8\u30EB\u30C6\u30A3\u30FC\u30E4\u306B \u305F\u307E\u3054\u3084 \u8C46\u3092 \u306E\u305B\u305F \u6599\u7406\u304C \u5B9A\u756A\u3067\u3059\u3002"],["\u30C8\u30EB\u30B3","T\xFCrkiye","\u{1F9C0}","\u30C1\u30FC\u30BA\u3001\u30AA\u30EA\u30FC\u30D6\u3001\u30C8\u30DE\u30C8\u3001\u30AD\u30E5\u30A6\u30EA\u3001\u30D1\u30F3\u306A\u3069\u3001\u5C0F\u3055\u306A \u304A\u76BF\u304C \u3044\u3063\u3071\u3044\u3002"],["\u97D3\u56FD","South Korea","\u{1F372}","\u3054\u306F\u3093\u3068 \u30B9\u30FC\u30D7\u3001\u30AD\u30E0\u30C1\u306A\u3069\u306E \u304A\u304B\u305A\u3092 \u98DF\u3079\u307E\u3059\u3002"]]},"houses-world":{ja:"\u4E16\u754C\u306E \u5BB6",en:"Homes Around the World",c:"#7a5a4a",intro:"\u4E16\u754C\u306E \u4EBA\u306F\u3001\u6C17\u5019\u3084 \u304F\u3089\u3057\u306B \u5408\u308F\u305B\u305F \u3044\u308D\u3044\u308D\u306A \u5BB6\u306B \u3059\u3093\u3067 \u3044\u307E\u3059\u3002",links:["daily-life","regions","polar","landmarks","town"],items:[["\u30A4\u30B0\u30EB\u30FC","igloo","\u{1F9CA}","\u96EA\u306E \u30D6\u30ED\u30C3\u30AF\u3067 \u4F5C\u308B \u5BB6\u3002\u4E2D\u306F \u601D\u3063\u305F\u3088\u308A \u3042\u305F\u305F\u304B\u3044\u3067\u3059\u3002"],["\u30B2\u30EB","ger","\u26FA","\u30E2\u30F3\u30B4\u30EB\u306E \u7D44\u307F\u7ACB\u3066\u5F0F\u306E \u5BB6\u3002\u6570\u6642\u9593\u3067 \u7D44\u307F\u7ACB\u3066\u3089\u308C\u307E\u3059\u3002"],["\u9AD8\u5E8A\u5F0F\u306E \u5BB6","stilt house","\u{1F6D6}","\u67F1\u3067 \u3086\u304B\u3092 \u9AD8\u304F \u3057\u305F \u5BB6\u3002\u6C34\u3084 \u52D5\u7269\u304B\u3089 \u5BB6\u3092 \u5B88\u308A\u307E\u3059\u3002"],["\u65E5\u672C\u306E \u5BB6","Japanese house","\u{1F3E0}","\u305F\u305F\u307F\u3084 \u3057\u3087\u3046\u3058\u3001\u3052\u3093\u304B\u3093\u3067 \u304F\u3064\u3092 \u306C\u3050\u306E\u304C \u3068\u304F\u3061\u3087\u3046\u3067\u3059\u3002"],["\u767D\u5DDD\u90F7","Shirakawa-go","\u{1F3E1}","\u5C90\u961C\u770C\u306E \u300C\u5408\u638C\u9020\u308A\u300D\u306E \u5BB6\u3002\u96EA\u304C \u843D\u3061\u3084\u3059\u3044 \u6025\u306A \u5C4B\u6839\u3067\u3059\u3002"],["\u65E5\u5E72\u3057\u308C\u3093\u304C\u306E \u5BB6","adobe house","\u{1F9F1}","\u3069\u308D\u3092 \u65E5\u306B \u5E72\u3057\u3066 \u4F5C\u3063\u305F \u308C\u3093\u304C\u306E \u5BB6\u3002\u6691\u3044 \u5730\u3044\u304D\u3067 \u898B\u3089\u308C\u307E\u3059\u3002"],["\u6C34\u4E0A\u306E \u5BB6","floating house","\u{1F6F6}","\u6E56\u3084 \u5DDD\u306E \u4E0A\u306B \u3046\u304B\u3076 \u5BB6\u306B \u304F\u3089\u3059 \u4EBA\u3082 \u3044\u307E\u3059\u3002"],["\u30C4\u30EA\u30FC\u30CF\u30A6\u30B9","tree house","\u{1F333}","\u6728\u306E \u4E0A\u306B \u4F5C\u3063\u305F \u5BB6\u3002\u68EE\u306E \u4E2D\u3067 \u304F\u3089\u3059 \u4EBA\u305F\u3061\u3082 \u3044\u307E\u3059\u3002"]]},"foods-health":{ja:"\u98DF\u3079\u3082\u306E\u3068 \u4F53",en:"Food and Health",c:"#4a8a4a",intro:"\u98DF\u3079\u3082\u306E\u306F \u4F53\u3092 \u4F5C\u308B \u3082\u3068\u3002\u30D0\u30E9\u30F3\u30B9\u3088\u304F \u98DF\u3079\u3088\u3046\uFF01",links:["human-body","vegetables","fruits","japanese-food","breakfast-world"],items:[["\u8D64\u306E \u98DF\u3079\u3082\u306E","red foods","\u{1F969}","\u8089\u3001\u9B5A\u3001\u305F\u307E\u3054\u3001\u725B\u4E73\u3002\u4F53\u3092 \u4F5C\u308B \u3082\u3068\u306B \u306A\u308A\u307E\u3059\u3002"],["\u9EC4\u8272\u306E \u98DF\u3079\u3082\u306E","yellow foods","\u{1F35E}","\u3054\u306F\u3093\u3001\u30D1\u30F3\u3001\u3081\u3093\u3002\u4F53\u3092 \u52D5\u304B\u3059 \u30A8\u30CD\u30EB\u30AE\u30FC\u306B \u306A\u308A\u307E\u3059\u3002"],["\u7DD1\u306E \u98DF\u3079\u3082\u306E","green foods","\u{1F966}","\u3084\u3055\u3044\u3084 \u304F\u3060\u3082\u306E\u3002\u4F53\u306E \u8ABF\u5B50\u3092 \u3068\u3068\u306E\u3048\u307E\u3059\u3002"],["\u30AB\u30EB\u30B7\u30A6\u30E0","calcium","\u{1F95B}","\u725B\u4E73\u3084 \u5C0F\u9B5A\u306B \u591A\u304F\u3001\u307B\u306D\u3084 \u6B6F\u3092 \u3058\u3087\u3046\u3076\u306B \u3057\u307E\u3059\u3002"],["\u6C34","water","\u{1F4A7}","\u4F53\u306E \u534A\u5206 \u3044\u3058\u3087\u3046\u306F \u6C34\u3067 \u3067\u304D\u3066 \u3044\u307E\u3059\u3002"],["\u3088\u304F \u304B\u3080","chew well","\u{1F601}","\u3088\u304F \u304B\u3080\u3068\u3001\u6D88\u5316\u3092 \u52A9\u3051\u3066\u3001\u306E\u3046\u3082 \u5143\u6C17\u306B \u306A\u308B\u3068 \u3044\u308F\u308C\u307E\u3059\u3002"]]},"sports-world":{ja:"\u4E16\u754C\u306E \u3044\u308D\u3044\u308D\u306A \u30B9\u30DD\u30FC\u30C4",en:"Sports Around the World",c:"#2a8a6a",intro:"\u30B5\u30C3\u30AB\u30FC\u3084 \u91CE\u7403\u306E \u307B\u304B\u306B\u3082\u3001\u4E16\u754C\u306B\u306F \u304A\u3082\u3057\u308D\u3044 \u30B9\u30DD\u30FC\u30C4\u304C \u305F\u304F\u3055\u3093\uFF01",links:["ball-sports","olympics","winter-sports","regions","human-body"],items:[["\u30AF\u30EA\u30B1\u30C3\u30C8","cricket","\u{1F3CF}","\u30A4\u30AE\u30EA\u30B9\u3084 \u30A4\u30F3\u30C9\u3067 \u5927\u4EBA\u6C17\u3002\u8A66\u5408\u304C \u4F55\u65E5\u3082 \u7D9A\u304F \u3053\u3068\u3082 \u3042\u308A\u307E\u3059\u3002"],["\u30BB\u30D1\u30BF\u30AF\u30ED\u30FC","sepak takraw","\u26BD","\u6771\u5357\u30A2\u30B8\u30A2\u306E \u30B9\u30DD\u30FC\u30C4\u3002\u8DB3\u3067 \u3051\u308B \u30D0\u30EC\u30FC\u30DC\u30FC\u30EB\u306E\u3088\u3046\u306A \u7AF6\u6280\u3067\u3059\u3002"],["\u30AB\u30D0\u30C7\u30A3","kabaddi","\u{1F93C}","\u30A4\u30F3\u30C9\u306E \u30B9\u30DD\u30FC\u30C4\u3002\u305B\u3081\u308B \u4EBA\u306F \u300C\u30AB\u30D0\u30C7\u30A3\u300D\u3068 \u8A00\u3044\u7D9A\u3051\u307E\u3059\u3002"],["\u30B5\u30FC\u30D5\u30A3\u30F3","surfing","\u{1F3C4}","\u6771\u4EAC2020\u5927\u4F1A\u3067 \u306F\u3058\u3081\u3066 \u30AA\u30EA\u30F3\u30D4\u30C3\u30AF\u7AF6\u6280\u306B \u306A\u308A\u307E\u3057\u305F\u3002"],["\u30DC\u30EB\u30C0\u30EA\u30F3\u30B0","bouldering","\u{1F9D7}","\u304B\u3079\u306E \u30DB\u30FC\u30EB\u30C9\u3092 \u3064\u304B\u3093\u3067 \u306E\u307C\u308B \u30B9\u30DD\u30FC\u30C4\u3067\u3059\u3002"],["\u30D5\u30A7\u30F3\u30B7\u30F3\u30B0","fencing","\u{1F93A}","\u30E8\u30FC\u30ED\u30C3\u30D1\u306E \u5263\u306E \u305F\u305F\u304B\u3044\u304B\u3089 \u751F\u307E\u308C\u305F \u30B9\u30DD\u30FC\u30C4\u3067\u3059\u3002"],["\u30DA\u30FC\u30ED\u30F3","Peiron","\u{1F6A3}","\u9577\u5D0E\u3067 \u3055\u304B\u3093\u306A \u30DC\u30FC\u30C8\u7AF6\u6280\u3002\u30C9\u30E9\u306E \u97F3\u306B \u5408\u308F\u305B\u3066 \u3053\u304E\u307E\u3059\u3002"],["\u3051\u307E\u308A","kemari","\u{1F3D0}","1000\u5E74 \u3044\u3058\u3087\u3046 \u524D\u306E \u65E5\u672C\u306E \u8CB4\u65CF\u306E \u3042\u305D\u3073\u3002\u30DC\u30FC\u30EB\u3092 \u843D\u3068\u3055\u305A\u306B \u3051\u308A\u5408\u3044\u307E\u3059\u3002"]]}};var tu={"art-timeline":{ja:"\u7F8E\u8853\u306E \u6B74\u53F2 \u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",en:"A Timeline of Art",c:"#8a3a2a",layout:"long",timeline:!0,intro:"\u3069\u3046\u304F\u3064\u306E \u304B\u3079\u306E \u7D75\u304B\u3089 \u4ECA\u306E \u30A2\u30FC\u30C8\u307E\u3067\u3002\u5165\u308A\u53E3\u304B\u3089 \u9806\u756A\u306B \u6B69\u304F\u3068\u3001\u7F8E\u8853\u306E \u6B74\u53F2\u3092 \u65C5\u3067\u304D\u307E\u3059\u3002",links:["art-movements","art-japan-history","art-world-crafts","art-mediums","heroes","landmarks"],items:[["\u30E9\u30B9\u30B3\u30FC\u306E \u3069\u3046\u304F\u3064\u753B","Lascaux cave paintings","\u{1F402}","\u30D5\u30E9\u30F3\u30B9\u306E \u3069\u3046\u304F\u3064\u306B\u3001\u30A6\u30DE\u3084 \u30A6\u30B7\u304C \u3048\u304C\u304B\u308C\u3066 \u3044\u307E\u3059\u3002",[["\u{1F30D} \u5834\u6240","\u30D5\u30E9\u30F3\u30B9","France"]],"\u7D042\u4E07\u5E74\u524D"],["\u7E04\u6587\u571F\u5668","Jomon pottery","\u{1F3FA}","\u65E5\u672C\u3067 \u4F5C\u3089\u308C\u305F\u3001\u4E16\u754C\u3067\u3082 \u3068\u3066\u3082 \u53E4\u3044 \u571F\u5668\u306E 1\u3064\u3067\u3059\u3002",[["\u{1F30D} \u5834\u6240","\u65E5\u672C","Japan"]],"\u7D041\u4E07\u5E74\u4EE5\u4E0A\u524D"],["\u30C4\u30BF\u30F3\u30AB\u30FC\u30E1\u30F3\u306E \u30DE\u30B9\u30AF","Mask of Tutankhamun","\u{1F451}","\u53E4\u4EE3\u30A8\u30B8\u30D7\u30C8\u306E \u5C11\u5E74\u738B\u306E \u91D1\u306E \u30DE\u30B9\u30AF\u3002\u30A8\u30B8\u30D7\u30C8\u306E \u30AB\u30A4\u30ED\u306B \u3042\u308A\u307E\u3059\u3002",[["\u{1F30D} \u5834\u6240","\u30A8\u30B8\u30D7\u30C8","Egypt"]],"\u7D043300\u5E74\u524D"],["\u30AE\u30EA\u30B7\u30E3\u306E \u3064\u307C","Ancient Greek pottery","\u{1F3FA}","\u9ED2\u3068 \u30AA\u30EC\u30F3\u30B8\u306E \u8272\u3067\u3001\u7269\u8A9E\u3084 \u30B9\u30DD\u30FC\u30C4\u306E \u5834\u9762\u304C \u3048\u304C\u304B\u308C\u3066 \u3044\u307E\u3059\u3002",[["\u{1F30D} \u5834\u6240","\u30AE\u30EA\u30B7\u30E3","Greece"]],"\u7D042500\u5E74\u524D"],["\u5175\u99AC\u4FD1","Terracotta Army","\u{1F5FF}","\u4E2D\u56FD\u306E \u7687\u5E1D\u306E \u305F\u3081\u306B \u4F5C\u3089\u308C\u305F\u30018000\u4F53 \u3061\u304B\u3044 \u571F\u306E \u5175\u58EB\u306E \u50CF\u3067\u3059\u3002",[["\u{1F30D} \u5834\u6240","\u4E2D\u56FD","China"]],"\u7D042200\u5E74\u524D"],["\u6E90\u6C0F\u7269\u8A9E\u7D75\u5DFB","The Tale of Genji scrolls","\u{1F4DC}","\u5E73\u5B89\u6642\u4EE3\u306E \u7269\u8A9E\u3092\u3001\u307E\u304D\u3082\u306E\u306B \u7F8E\u3057\u304F \u3048\u304C\u3044\u305F \u65E5\u672C\u306E \u7D75\u3067\u3059\u3002",[["\u{1F30D} \u5834\u6240","\u65E5\u672C","Japan"]],"1100\u5E74\u4EE3"],["\u30E2\u30CA\u30FB\u30EA\u30B6","Mona Lisa","\u{1F5BC}\uFE0F","\u30EC\u30AA\u30CA\u30EB\u30C9\u30FB\u30C0\u30FB\u30F4\u30A3\u30F3\u30C1\u306E \u7D75\u3002\u3075\u3057\u304E\u306A \u307B\u307B\u3048\u307F\u3067 \u6709\u540D\u3067\u3059\u3002",[["\u{1F3A8} \u753B\u5BB6","\u30C0\u30FB\u30F4\u30A3\u30F3\u30C1","Leonardo da Vinci"],["\u{1F30D} \u5834\u6240","\u30A4\u30BF\u30EA\u30A2 \u2192 \u30D5\u30E9\u30F3\u30B9","Italy \u2192 France"]],"1503\u5E74\u3054\u308D"],["\u98A8\u795E\u96F7\u795E\u56F3","Wind God and Thunder God","\u{1F32C}\uFE0F","\u4FF5\u5C4B\u5B97\u9054\u304C \u304B\u3044\u305F\u3001\u98A8\u306E \u795E\u3068 \u304B\u307F\u306A\u308A\u306E \u795E\u3002\u91D1\u8272\u306E \u80CC\u666F\u304C \u7F8E\u3057\u3044 \u3073\u3087\u3046\u3076\u7D75\u3067\u3059\u3002",[["\u{1F3A8} \u753B\u5BB6","\u4FF5\u5C4B\u5B97\u9054","Tawaraya Sotatsu"]],"1600\u5E74\u4EE3"],["\u771F\u73E0\u306E \u8033\u98FE\u308A\u306E \u5C11\u5973","Girl with a Pearl Earring","\u{1F48E}","\u30AA\u30E9\u30F3\u30C0\u306E \u753B\u5BB6 \u30D5\u30A7\u30EB\u30E1\u30FC\u30EB\u306E \u7D75\u3002\u5149\u306E \u3048\u304C\u304D\u65B9\u304C \u3068\u3066\u3082 \u7F8E\u3057\u3044\u3002",[["\u{1F3A8} \u753B\u5BB6","\u30D5\u30A7\u30EB\u30E1\u30FC\u30EB","Johannes Vermeer"],["\u{1F30D} \u5834\u6240","\u30AA\u30E9\u30F3\u30C0","the Netherlands"]],"1665\u5E74\u3054\u308D"],["\u795E\u5948\u5DDD\u6C96\u6D6A\u88CF","The Great Wave off Kanagawa","\u{1F30A}","\u845B\u98FE\u5317\u658E\u306E \u6D6E\u4E16\u7D75\u3002\u30E8\u30FC\u30ED\u30C3\u30D1\u306E \u753B\u5BB6\u305F\u3061\u306B\u3082 \u5927\u304D\u306A \u3048\u3044\u304D\u3087\u3046\u3092 \u3042\u305F\u3048\u307E\u3057\u305F\u3002",[["\u{1F3A8} \u753B\u5BB6","\u845B\u98FE\u5317\u658E","Katsushika Hokusai"]],"1831\u5E74\u3054\u308D"],["\u661F\u6708\u591C","The Starry Night","\u{1F30C}","\u30B4\u30C3\u30DB\u304C \u304B\u3044\u305F\u3001\u3046\u305A\u307E\u304F \u591C\u7A7A\u306E \u7D75\u3067\u3059\u3002",[["\u{1F3A8} \u753B\u5BB6","\u30B4\u30C3\u30DB","Vincent van Gogh"]],"1889\u5E74"],["\u7761\u84EE","Water Lilies","\u{1FAB7}","\u30E2\u30CD\u304C \u81EA\u5206\u306E \u5EAD\u306E \u6C60\u3092\u3001\u4F55\u767E\u307E\u3044\u3082 \u304B\u304D\u307E\u3057\u305F\u3002\u300C\u5370\u8C61\u6D3E\u300D\u306E \u4EE3\u8868\u3067\u3059\u3002",[["\u{1F3A8} \u753B\u5BB6","\u30E2\u30CD","Claude Monet"],["\u{1F30D} \u5834\u6240","\u30D5\u30E9\u30F3\u30B9","France"]],"1900\u5E74\u3054\u308D"],["\u4E09\u4EBA\u306E \u97F3\u697D\u5BB6","Three Musicians","\u{1F3B6}","\u30D4\u30AB\u30BD\u306E \u7D75\u3002\u5F62\u3092 \u56DB\u89D2\u3084 \u4E09\u89D2\u306B \u5206\u3051\u3066 \u3048\u304C\u304F \u300C\u30AD\u30E5\u30D3\u30B9\u30E0\u300D\u306E \u4F5C\u54C1\u3067\u3059\u3002",[["\u{1F3A8} \u753B\u5BB6","\u30D4\u30AB\u30BD","Pablo Picasso"]],"1921\u5E74"],["\u8A18\u61B6\u306E \u56FA\u57F7","The Persistence of Memory","\u{1F570}\uFE0F","\u30C0\u30EA\u306E \u7D75\u3002\u3068\u308D\u3051\u308B \u6642\u8A08\u304C \u6709\u540D\u306A \u300C\u30B7\u30E5\u30EB\u30EC\u30A2\u30EA\u30B9\u30E0\u300D\u306E \u4F5C\u54C1\u3002",[["\u{1F3A8} \u753B\u5BB6","\u30C0\u30EA","Salvador Dal\xED"]],"1931\u5E74"],["\u30AD\u30E3\u30F3\u30D9\u30EB\u306E \u30B9\u30FC\u30D7\u7F36","Campbell's Soup Cans","\u{1F96B}","\u30A6\u30A9\u30FC\u30DB\u30EB\u306E \u300C\u30DD\u30C3\u30D7\u30A2\u30FC\u30C8\u300D\u3002\u6BCE\u65E5 \u76EE\u306B \u3059\u308B \u3082\u306E\u3092 \u30A2\u30FC\u30C8\u306B \u3057\u307E\u3057\u305F\u3002",[["\u{1F3A8} \u753B\u5BB6","\u30A6\u30A9\u30FC\u30DB\u30EB","Andy Warhol"]],"1962\u5E74"],["\u5357\u74DC","Pumpkin","\u{1F383}","\u8349\u9593\u5F4C\u751F\u306E \u6C34\u7389\u306E \u304B\u307C\u3061\u3083\u3002\u9999\u5DDD\u770C \u76F4\u5CF6\u306E \u6D77\u8FBA\u306B \u7F6E\u304B\u308C\u3066 \u3044\u307E\u3059\u3002",[["\u{1F3A8} \u4F5C\u5BB6","\u8349\u9593\u5F4C\u751F","Yayoi Kusama"]],"1994\u5E74"]]},"art-movements":{ja:"\u7F8E\u8853\u306E \u6D41\u6D3E",en:"Art Movements",c:"#6a3a7a",layout:"wide",intro:"\u540C\u3058 \u6642\u4EE3\u306E \u753B\u5BB6\u305F\u3061\u306F\u3001\u306B\u305F \u8003\u3048\u65B9\u3067 \u7D75\u3092 \u304B\u304F \u3053\u3068\u304C \u3042\u308A\u307E\u3059\u3002\u305D\u308C\u3092 \u300C\u6D41\u6D3E\u300D\u3068 \u3044\u3044\u307E\u3059\u3002",links:["art-timeline","art-mediums","colors-shapes","europe","art-japan-history"],items:[["\u30EB\u30CD\u30B5\u30F3\u30B9","Renaissance","\u{1F3DB}\uFE0F","1400\u301C1500\u5E74\u4EE3\u306E \u30A4\u30BF\u30EA\u30A2\u3067 \u59CB\u307E\u308A\u307E\u3057\u305F\u3002\u4EBA\u3084 \u666F\u8272\u3092 \u672C\u7269\u306E\u3088\u3046\u306B \u3048\u304C\u304D\u307E\u3057\u305F\u3002",[["\u{1F5BC}\uFE0F \u4EE3\u8868","\u30C0\u30FB\u30F4\u30A3\u30F3\u30C1","Leonardo da Vinci"]],"1400\u5E74\u4EE3\u301C"],["\u30D0\u30ED\u30C3\u30AF","Baroque","\u{1F56F}\uFE0F","\u5149\u3068 \u304B\u3052\u306E \u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u304C \u5F37\u3044\u3001\u30C9\u30E9\u30DE\u30C1\u30C3\u30AF\u306A \u7D75\u3067\u3059\u3002",[["\u{1F5BC}\uFE0F \u4EE3\u8868","\u30D5\u30A7\u30EB\u30E1\u30FC\u30EB","Vermeer"]],"1600\u5E74\u4EE3\u301C"],["\u6D6E\u4E16\u7D75","Ukiyo-e","\u{1F30A}","\u6C5F\u6238\u306E \u6728\u7248\u753B\u3002\u4E16\u754C\u4E2D\u306E \u753B\u5BB6\u306B \u3048\u3044\u304D\u3087\u3046\u3092 \u3042\u305F\u3048\u307E\u3057\u305F\u3002",[["\u{1F5BC}\uFE0F \u4EE3\u8868","\u5317\u658E\u30FB\u5E83\u91CD","Hokusai, Hiroshige"]],"1600\u5E74\u4EE3\u301C"],["\u5370\u8C61\u6D3E","Impressionism","\u{1F305}","\u5916\u306B \u51FA\u3066\u3001\u5149\u3084 \u7A7A\u6C17\u306E \u3046\u3064\u308A\u304B\u308F\u308A\u3092 \u3059\u3070\u3084\u304F \u3048\u304C\u304D\u307E\u3057\u305F\u3002",[["\u{1F5BC}\uFE0F \u4EE3\u8868","\u30E2\u30CD","Claude Monet"]],"1870\u5E74\u4EE3\u301C"],["\u70B9\u63CF","Pointillism","\u26AB","\u5C0F\u3055\u306A \u70B9\u3092 \u305F\u304F\u3055\u3093 \u306A\u3089\u3079\u3066 \u7D75\u3092 \u304B\u304F \u65B9\u6CD5\u3067\u3059\u3002",[["\u{1F5BC}\uFE0F \u4EE3\u8868","\u30B9\u30FC\u30E9","Georges Seurat"]],"1880\u5E74\u4EE3\u301C"],["\u30AD\u30E5\u30D3\u30B9\u30E0","Cubism","\u{1F9CA}","\u3082\u306E\u3092 \u3044\u308D\u3044\u308D\u306A \u65B9\u5411\u304B\u3089 \u898B\u305F \u5F62\u3092\u30011\u307E\u3044\u306E \u7D75\u306B \u3057\u307E\u3057\u305F\u3002",[["\u{1F5BC}\uFE0F \u4EE3\u8868","\u30D4\u30AB\u30BD","Pablo Picasso"]],"1907\u5E74\u301C"],["\u62BD\u8C61\u753B","Abstract art","\u{1F537}","\u5F62\u3084 \u8272\u305D\u306E\u3082\u306E\u306E \u7F8E\u3057\u3055\u3092 \u697D\u3057\u3080 \u7D75\u3067\u3059\u3002",[["\u{1F5BC}\uFE0F \u4EE3\u8868","\u30AB\u30F3\u30C7\u30A3\u30F3\u30B9\u30AD\u30FC\u30FB\u30E2\u30F3\u30C9\u30EA\u30A2\u30F3","Kandinsky, Mondrian"]],"1910\u5E74\u4EE3\u301C"],["\u30B7\u30E5\u30EB\u30EC\u30A2\u30EA\u30B9\u30E0","Surrealism","\u{1F570}\uFE0F","\u3086\u3081\u306E \u4E2D\u306E\u3088\u3046\u306A \u3075\u3057\u304E\u306A \u4E16\u754C\u3092 \u3048\u304C\u304D\u307E\u3057\u305F\u3002",[["\u{1F5BC}\uFE0F \u4EE3\u8868","\u30C0\u30EA\u30FB\u30DE\u30B0\u30EA\u30C3\u30C8","Dal\xED, Magritte"]],"1920\u5E74\u4EE3\u301C"],["\u30DD\u30C3\u30D7\u30A2\u30FC\u30C8","Pop Art","\u{1F96B}","\u5E83\u544A\u3084 \u307E\u3093\u304C\u306A\u3069\u3001\u8EAB\u8FD1\u306A \u3082\u306E\u3092 \u30A2\u30FC\u30C8\u306B \u3057\u307E\u3057\u305F\u3002",[["\u{1F5BC}\uFE0F \u4EE3\u8868","\u30A6\u30A9\u30FC\u30DB\u30EB","Andy Warhol"]],"1950\u5E74\u4EE3\u301C"],["\u30B9\u30C8\u30EA\u30FC\u30C8\u30A2\u30FC\u30C8","Street art","\u{1F3A8}","\u753A\u306E \u304B\u3079\u3092 \u30AD\u30E3\u30F3\u30D0\u30B9\u306B \u3057\u305F\u3001\u660E\u308B\u3044 \u5927\u304D\u306A \u7D75\u3082 \u3042\u308A\u307E\u3059\u3002",[],"1970\u5E74\u4EE3\u301C"]]},"art-japan-history":{ja:"\u65E5\u672C\u306E \u7F8E\u8853",en:"Japanese Art Through Time",c:"#9a2a2a",layout:"long",timeline:!0,intro:"\u7E04\u6587\u6642\u4EE3\u304B\u3089 \u73FE\u4EE3\u307E\u3067\u3002\u65E5\u672C\u306E \u7F8E\u8853\u306E \u6D41\u308C\u3092 \u305F\u3069\u308D\u3046\u3002",links:["art-timeline","japan-traditions","art","japan","nagasaki","art-mediums"],items:[["\u7E04\u6587\u571F\u5668","Jomon pottery","\u{1F3FA}","\u306A\u308F\u3092 \u8EE2\u304C\u3057\u3066 \u3082\u3088\u3046\u3092 \u3064\u3051\u305F \u571F\u5668\u3002\u300C\u7E04\u6587\u300D\u306E \u540D\u524D\u306E \u3082\u3068\u3067\u3059\u3002",[],"\u7D041\u4E07\u5E74\u4EE5\u4E0A\u524D"],["\u306F\u306B\u308F","haniwa","\u{1F5FF}","\u53E4\u58B3\u306E \u307E\u308F\u308A\u306B \u306A\u3089\u3079\u3089\u308C\u305F \u571F\u306E \u4EBA\u5F62\u3002\u4EBA\u3084 \u52D5\u7269\u3001\u5BB6\u306E \u5F62\u3082 \u3042\u308A\u307E\u3059\u3002",[],"3\u301C6\u4E16\u7D00"],["\u9CE5\u7363\u622F\u753B","Choju-giga","\u{1F438}","\u30A6\u30B5\u30AE\u3084 \u30AB\u30A8\u30EB\u304C \u3042\u305D\u3076 \u7D75\u5DFB\u3002\u300C\u65E5\u672C\u3067 \u3044\u3061\u3070\u3093 \u53E4\u3044 \u307E\u3093\u304C\u300D\u3068\u3082 \u3044\u308F\u308C\u307E\u3059\u3002",[],"1100\u5E74\u4EE3"],["\u6C34\u58A8\u753B","ink painting","\u{1F58C}\uFE0F","\u3059\u307F\u306E \u3053\u3055\u3092 \u304B\u3048\u3066 \u3048\u304C\u304F \u7D75\u3002\u96EA\u821F\u304C \u6709\u540D\u3067\u3059\u3002",[["\u{1F3A8} \u753B\u5BB6","\u96EA\u821F","Sesshu"]],"1400\u5E74\u4EE3"],["\u98A8\u795E\u96F7\u795E\u56F3","Wind God and Thunder God","\u{1F32C}\uFE0F","\u91D1\u8272\u306E \u3073\u3087\u3046\u3076\u306B \u3048\u304C\u304B\u308C\u305F\u3001\u98A8\u3068 \u304B\u307F\u306A\u308A\u306E \u795E\u3067\u3059\u3002",[["\u{1F3A8} \u753B\u5BB6","\u4FF5\u5C4B\u5B97\u9054","Tawaraya Sotatsu"]],"1600\u5E74\u4EE3"],["\u4F0A\u85E4\u82E5\u51B2\u306E \u30CB\u30EF\u30C8\u30EA","Jakuchu's roosters","\u{1F413}","\u4F0A\u85E4\u82E5\u51B2\u306F\u3001\u30CB\u30EF\u30C8\u30EA\u3092 \u7D30\u304B\u304F \u3042\u3056\u3084\u304B\u306B \u3048\u304C\u304D\u307E\u3057\u305F\u3002",[["\u{1F3A8} \u753B\u5BB6","\u4F0A\u85E4\u82E5\u51B2","Ito Jakuchu"]],"1700\u5E74\u4EE3"],["\u5BCC\u5DBD\u4E09\u5341\u516D\u666F","Thirty-six Views of Mt. Fuji","\u{1F30A}","\u845B\u98FE\u5317\u658E\u304C\u3001\u3044\u308D\u3044\u308D\u306A \u5834\u6240\u304B\u3089 \u898B\u305F \u5BCC\u58EB\u5C71\u3092 \u3048\u304C\u304D\u307E\u3057\u305F\u3002",[["\u{1F3A8} \u753B\u5BB6","\u845B\u98FE\u5317\u658E","Katsushika Hokusai"]],"1830\u5E74\u3054\u308D"],["\u6771\u6D77\u9053\u4E94\u5341\u4E09\u6B21","Fifty-three Stations of the Tokaido","\u{1F5FB}","\u6B4C\u5DDD\u5E83\u91CD\u306E \u6D6E\u4E16\u7D75\u3002\u6C5F\u6238\u304B\u3089 \u4EAC\u90FD\u3078\u306E \u65C5\u306E \u666F\u8272\u3067\u3059\u3002",[["\u{1F3A8} \u753B\u5BB6","\u6B4C\u5DDD\u5E83\u91CD","Utagawa Hiroshige"]],"1830\u5E74\u4EE3"],["\u6CE2\u4F50\u898B\u713C","Hasami ware","\u{1F375}","\u9577\u5D0E\u770C \u6CE2\u4F50\u898B\u753A\u306E \u3084\u304D\u3082\u306E\u3002\u6BCE\u65E5 \u4F7F\u3048\u308B \u5668\u3068\u3057\u3066 \u4EBA\u6C17\u3067\u3059\u3002",[["\u{1F30D} \u5834\u6240","\u9577\u5D0E\u770C","Nagasaki"]],"1600\u5E74\u3054\u308D\u301C"],["\u8349\u9593\u5F4C\u751F\u306E \u6C34\u7389","Kusama's polka dots","\u{1F534}","\u6C34\u7389\u3082\u3088\u3046\u3067 \u4E16\u754C\u4E2D\u306B \u77E5\u3089\u308C\u308B \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3067\u3059\u3002",[["\u{1F3A8} \u4F5C\u5BB6","\u8349\u9593\u5F4C\u751F","Yayoi Kusama"]],"\u73FE\u4EE3"]]},"art-world-crafts":{ja:"\u4E16\u754C\u306E \u5DE5\u82B8",en:"Crafts Around the World",c:"#a8622a",layout:"wide",intro:"\u56FD\u3084 \u5730\u3044\u304D\u3054\u3068\u306B\u3001\u4F1D\u7D71\u306E \u3082\u3088\u3046\u3084 \u5DE5\u82B8\u304C \u3042\u308A\u307E\u3059\u3002",links:["art-mediums","regions","art-timeline","festivals-world","clothes","houses-world"],items:[["\u30C9\u30C3\u30C8\u30FB\u30DA\u30A4\u30F3\u30C6\u30A3\u30F3\u30B0","Aboriginal dot painting","\u{1F535}","\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E \u5148\u4F4F\u6C11\u306E \u7D75\u3002\u70B9\u3067 \u5927\u5730\u3084 \u7269\u8A9E\u3092 \u3042\u3089\u308F\u3057\u307E\u3059\u3002",[["\u{1F30D} \u56FD","\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2","Australia"]]],["\u30B1\u30F3\u30C6\u5E03","Kente cloth","\u{1F9F5}","\u30AC\u30FC\u30CA\u306E \u3042\u3056\u3084\u304B\u306A \u7E54\u7269\u3002\u8272\u3054\u3068\u306B \u610F\u5473\u304C \u3042\u308A\u307E\u3059\u3002",[["\u{1F30D} \u56FD","\u30AC\u30FC\u30CA","Ghana"]]],["\u30DE\u30AA\u30EA\u306E \u6728\u307C\u308A","Maori carving","\u{1FAB5}","\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u306E \u5148\u4F4F\u6C11 \u30DE\u30AA\u30EA\u306E\u3001\u3046\u305A\u307E\u304D \u3082\u3088\u3046\u306E \u3061\u3087\u3046\u3053\u304F\u3002",[["\u{1F30D} \u56FD","\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9","New Zealand"]]],["\u30A2\u30EB\u30CF\u30F3\u30D6\u30E9\u306E \u30BF\u30A4\u30EB","Alhambra tiles","\u{1F537}","\u30B9\u30DA\u30A4\u30F3\u306E \u5BAE\u6BBF\u306E \u304B\u3079\u3092 \u304B\u3056\u308B\u3001\u304D\u304B\u304C\u304F \u3082\u3088\u3046\u306E \u30BF\u30A4\u30EB\u3002",[["\u{1F30D} \u56FD","\u30B9\u30DA\u30A4\u30F3","Spain"]]],["\u30DA\u30EB\u30B7\u30E3\u3058\u3085\u3046\u305F\u3093","Persian carpet","\u{1F7E5}","\u30A4\u30E9\u30F3\u306E \u624B\u7E54\u308A\u306E \u3058\u3085\u3046\u305F\u3093\u30021\u307E\u3044\u306B \u4F55\u304B\u6708\u3082 \u304B\u304B\u308A\u307E\u3059\u3002",[["\u{1F30D} \u56FD","\u30A4\u30E9\u30F3","Iran"]]],["\u9752\u82B1 (\u305D\u3081\u3064\u3051)","blue-and-white porcelain","\u{1F3FA}","\u767D\u3044 \u5668\u306B \u9752\u3044 \u3082\u3088\u3046\u3002\u4E2D\u56FD\u3067 \u751F\u307E\u308C\u3001\u4E16\u754C\u4E2D\u3067 \u611B\u3055\u308C\u307E\u3057\u305F\u3002",[["\u{1F30D} \u56FD","\u4E2D\u56FD","China"]]],["\u30D1\u30DA\u30EB\u30FB\u30D4\u30AB\u30C9","papel picado","\u{1F38F}","\u30E1\u30AD\u30B7\u30B3\u306E \u5207\u308A\u7D19\u304B\u3056\u308A\u3002\u304A\u796D\u308A\u306E \u6642\u306B \u3064\u308B\u3057\u307E\u3059\u3002",[["\u{1F30D} \u56FD","\u30E1\u30AD\u30B7\u30B3","Mexico"]]],["\u30DE\u30C8\u30EA\u30E7\u30FC\u30B7\u30AB","matryoshka dolls","\u{1FA86}","\u4EBA\u5F62\u306E \u4E2D\u304B\u3089 \u5C0F\u3055\u3044 \u4EBA\u5F62\u304C \u6B21\u3005\u3068 \u51FA\u3066 \u304F\u308B\u3001\u5165\u308C\u3053\u4EBA\u5F62\u3067\u3059\u3002",[["\u{1F30D} \u56FD","\u30ED\u30B7\u30A2","Russia"]]],["\u30C7\u30EB\u30D5\u30C8\u713C","Delft blue pottery","\u{1FAD6}","\u30AA\u30E9\u30F3\u30C0\u306E \u9752\u3044 \u3084\u304D\u3082\u306E\u3002\u65E5\u672C\u306E \u6709\u7530\u713C\u306B\u3082 \u3048\u3044\u304D\u3087\u3046\u3092 \u3046\u3051\u307E\u3057\u305F\u3002",[["\u{1F30D} \u56FD","\u30AA\u30E9\u30F3\u30C0","the Netherlands"]]],["\u9AD8\u9E97\u9752\u78C1","Korean celadon","\u{1F376}","\u3046\u3059\u3044 \u7DD1\u8272\u304C \u7F8E\u3057\u3044 \u97D3\u56FD\u306E \u3084\u304D\u3082\u306E \u3067\u3059\u3002",[["\u{1F30D} \u56FD","\u97D3\u56FD","South Korea"]]],["\u30E9\u30F3\u30B4\u30FC\u30EA\u30FC","rangoli","\u{1F338}","\u30A4\u30F3\u30C9\u3067 \u5BB6\u306E \u524D\u306E \u5730\u9762\u306B \u8272\u306E \u3053\u306A\u3067 \u3048\u304C\u304F \u3082\u3088\u3046\u3002",[["\u{1F30D} \u56FD","\u30A4\u30F3\u30C9","India"]]],["\u30A4\u30CC\u30A4\u30C3\u30C8\u306E \u3061\u3087\u3046\u3053\u304F","Inuit carving","\u{1F43B}\u200D\u2744\uFE0F","\u30AB\u30CA\u30C0\u5317\u90E8\u306E \u30A4\u30CC\u30A4\u30C3\u30C8\u306E \u77F3\u306E \u3061\u3087\u3046\u3053\u304F\u3002\u52D5\u7269\u304C \u3088\u304F \u3048\u304C\u304B\u308C\u307E\u3059\u3002",[["\u{1F30D} \u56FD","\u30AB\u30CA\u30C0","Canada"]]]]},"art-mediums":{ja:"\u753B\u6750\u3068 \u6280\u6CD5",en:"Art Materials and Techniques",c:"#3a6a7a",intro:"\u7D75\u306E\u5177\u3001\u306D\u3093\u3069\u3001\u7D19\u3001\u30AC\u30E9\u30B9\u2026 \u30A2\u30FC\u30C8\u306F \u3044\u308D\u3044\u308D\u306A \u3056\u3044\u308A\u3087\u3046\u3067 \u4F5C\u3089\u308C\u307E\u3059\u3002",links:["art-movements","art-world-crafts","stationery","art","colors-shapes","science-fun"],items:[["\u6CB9\u7D75","oil painting","\u{1F5BC}\uFE0F","\u3042\u3076\u3089\u3067 \u306D\u3063\u305F \u7D75\u306E\u5177\u3002\u4F55\u5EA6\u3082 \u306C\u308A\u91CD\u306D\u3089\u308C\u307E\u3059\u3002",[]],["\u6C34\u5F69\u753B","watercolor","\u{1F4A7}","\u6C34\u3067 \u3046\u3059\u3081\u3066 \u304B\u304F \u7D75\u306E\u5177\u3002\u3059\u304D\u3068\u304A\u3063\u305F \u8272\u304C \u3068\u304F\u3061\u3087\u3046\u3067\u3059\u3002",[]],["\u3059\u307F\u7D75","ink painting","\u{1F58C}\uFE0F","\u3059\u307F\u3068 \u7B46\u3060\u3051\u3067\u3001\u3053\u3044 \u3068\u3053\u308D \u3046\u3059\u3044 \u3068\u3053\u308D\u3092 \u8868\u3057\u307E\u3059\u3002",[]],["\u6728\u7248\u753B","woodblock print","\u{1FAB5}","\u6728\u3092 \u307B\u3063\u3066 \u30A4\u30F3\u30AF\u3092 \u3064\u3051\u3001\u7D19\u306B \u3059\u3063\u3066 \u4F55\u307E\u3044\u3082 \u4F5C\u308A\u307E\u3059\u3002",[]],["\u30D5\u30EC\u30B9\u30B3","fresco","\u{1F9F1}","\u306C\u308C\u305F \u3057\u3063\u304F\u3044\u306E \u304B\u3079\u306B \u304B\u304F \u7D75\u3002\u4F55\u767E\u5E74\u3082 \u8272\u304C \u306E\u3053\u308A\u307E\u3059\u3002",[]],["\u30E2\u30B6\u30A4\u30AF","mosaic","\u{1F9E9}","\u5C0F\u3055\u306A \u77F3\u3084 \u30AC\u30E9\u30B9\u3092 \u306A\u3089\u3079\u3066 \u7D75\u306B \u3057\u307E\u3059\u3002",[]],["\u3061\u3087\u3046\u3053\u304F","sculpture","\u{1F5FF}","\u77F3\u3092 \u3051\u305A\u3063\u305F\u308A\u3001\u91D1\u305E\u304F\u3092 \u578B\u306B \u6D41\u3057\u305F\u308A \u3057\u3066 \u4F5C\u308A\u307E\u3059\u3002",[]],["\u3084\u304D\u3082\u306E","ceramics","\u{1F3FA}","\u306D\u3093\u3069\u3092 \u5F62\u306B \u3057\u3066\u3001\u9AD8\u3044 \u6E29\u5EA6\u3067 \u713C\u304D\u307E\u3059\u3002",[]],["\u30B3\u30E9\u30FC\u30B8\u30E5","collage","\u2702\uFE0F","\u7D19\u3084 \u5199\u771F\u3092 \u5207\u3063\u3066 \u306F\u308A\u5408\u308F\u305B\u308B \u6280\u6CD5\u3067\u3059\u3002",[]],["\u30C7\u30B8\u30BF\u30EB\u30A2\u30FC\u30C8","digital art","\u{1F4BB}","\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u3084 \u30BF\u30D6\u30EC\u30C3\u30C8\u3067 \u304B\u304F \u65B0\u3057\u3044 \u30A2\u30FC\u30C8\u3067\u3059\u3002",[]]]}};var Bt={...Kh,...Qh,...eu,...tu},o0=Object.fromEntries(ro.groups.map(i=>[i.id,i])),er={LC:{ja:"\u4ECA\u306F \u3057\u3093\u3071\u3044 \u306A\u3057",en:"Least Concern",c:"#3a9d5d"},NT:{ja:"\u3057\u3093\u3071\u3044\u306B \u306A\u308A\u305D\u3046",en:"Near Threatened",c:"#9bbf3a"},VU:{ja:"\u305C\u3064\u3081\u3064\u306E \u304A\u305D\u308C",en:"Vulnerable",c:"#e8b21c"},EN:{ja:"\u305C\u3064\u3081\u3064\u306E \u304D\u3051\u3093\u304C \u9AD8\u3044",en:"Endangered",c:"#e8731c"},CR:{ja:"\u305C\u3064\u3081\u3064 \u3059\u3093\u305C\u3093",en:"Critically Endangered",c:"#d33c2f"}},l0=["LC","NT","VU","EN","CR"],nu={ocean:["\u6D77","ocean"],rainforest:["\u306D\u3063\u305F\u3044\u3046\u308A\u3093","rainforest"],savanna:["\u30B5\u30D0\u30F3\u30CA","savanna"],desert:["\u3055\u3070\u304F","desert"],forest:["\u68EE","forest"]};for(let[i,e]of Object.entries(Bt)){e.id=i;let t=[];e.animals?t=ro.animals.filter(n=>n.room===e.animals).map(n=>{let s=o0[n.group],r=[["\u{1F30F} \u3059\u3093\u3067\u3044\u308B \u56FD",n.countries.map(a=>a[0]).join("\u3001"),n.countries.map(a=>a[1]).join(", ")]];return n.room==="polar"?r.push(["\u{1F3DE}\uFE0F \u3059\u307F\u304B",n.pole==="S"?"\u5357\u6975":"\u5317\u6975",n.pole==="S"?"Antarctica":"the Arctic"]):nu[n.room]&&r.push(["\u{1F3DE}\uFE0F \u3059\u307F\u304B",...nu[n.room]]),r.push(["\u{1F37D}\uFE0F \u98DF\u3079\u3082\u306E",n.eats.map(a=>a[0]).join("\u3001"),n.eats.map(a=>a[1]).join(", ")]),r.push(["\u{1F9EC} \u306A\u304B\u307E",s.ja,s.en]),{ja:n.ja,en:n.en,img:n.img,fact:n.fact,rows:r,status:n.status,statusSource:n.statusSource}}):e.groups?t=ro.groups.map(n=>({ja:n.ja,en:n.en,img:n.img,fact:n.ja_text,rows:[["\u{1F4F7} \u3057\u3083\u3057\u3093",n.animal[0],n.animal[1]]]})):t=(e.items||[]).map(([n,s,r,a,o,l])=>({ja:n,en:s,pic:r,fact:a,rows:(o||[]).concat(l?[["\u{1F4C5} \u5E74\u4EE3",l,""]]:[]),year:l})),t.forEach((n,s)=>{n.key=i+":"+s,n.topic=i}),e.list=t}var c0=Object.values(Bt).reduce((i,e)=>i+e.list.length,0),pu=["animals","regions","japan","solar-system","world-dishes","ball-sports","jobs-dream","inventions","nagasaki","dinosaurs","heroes","science-fun","aquarium","town","art","art-timeline","art-world-crafts","human-body","japan-islands","games-world"],h0={id:"lobby",ja:"\u30ED\u30D3\u30FC",en:"Lobby",c:"#6b4d2c",lobby:!0,list:[{ja:"\u3088\u3046\u3053\u305D\uFF01",en:"Welcome to the Museum",text:!0,fact:"\u3053\u3053\u306F \u3069\u3053\u307E\u3067\u3082 \u3064\u3065\u304F \u3075\u3057\u304E\u306A \u306F\u304F\u3076\u3064\u304B\u3093\u3002\u30C9\u30A2\u3092 \u304F\u3050\u308B \u305F\u3073\u306B\u3001\u65B0\u3057\u3044 \u3078\u3084\u304C \u3042\u3089\u308F\u308C\u307E\u3059\u3002\u3069\u3053\u3078 \u884C\u304F\u304B\u306F\u3001\u3042\u306A\u305F \u3057\u3060\u3044\uFF01"},{ja:"\u3042\u305D\u3073\u304B\u305F",en:"How to explore",text:!0,fact:"\u2191\u2193\u2190\u2192 \u304B WASD \u3067 \u6B69\u304F\u3002\u753B\u9762\u3092 \u30C9\u30E9\u30C3\u30B0\u3057\u3066 \u898B\u56DE\u3059\u3002\u3086\u304B\u3092 \u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068 \u305D\u3053\u307E\u3067 \u6B69\u304F\u3088\u3002\u3048 \u3092 \u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068 \u304F\u308F\u3057\u304F \u898B\u3089\u308C\u308B\uFF01 \u300C\uFF1F\u300D\u306E \u30C9\u30A2\u306F \u3069\u3053\u306B \u3064\u306A\u304C\u308B\u304B \u308F\u304B\u3089\u306A\u3044 \u3075\u3057\u304E\u306A \u30C9\u30A2\u3002"}]},zl=22,Mv=zl/2,kt=.3,mt=3.6,rn=3.6,u0=1.6,ao=.45,lr="'Noto Sans JP','Noto Sans CJK JP','Hiragino Sans','Yu Gothic','Meiryo',sans-serif",d0="'Noto Color Emoji','Apple Color Emoji','Segoe UI Emoji',sans-serif",vt={N:[0,-1],E:[1,0],S:[0,1],W:[-1,0]},iu={N:"S",S:"N",E:"W",W:"E"},Ol=i=>i[Math.floor(Math.random()*i.length)],nr=i=>{i=i.slice();for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i},f0=document.getElementById("app"),cs=new no({antialias:!0,powerPreference:"low-power"});cs.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25));cs.outputColorSpace=It;f0.appendChild(cs.domElement);var ci=new Ss;ci.background=new Pe("#e9e7e3");ci.fog=new vs("#e9e7e3",22,55);var Ei=new Gt(70,1,.1,80);ci.add(new Ns("#ffffff","#e2ddd3",2.3));var Vl=new Fs("#fff4e0",1.3);Vl.position.set(3,10,6);ci.add(Vl);ci.add(Vl.target);function mu(){let i=innerWidth,e=innerHeight;cs.setSize(i,e),Ei.aspect=i/e,Ei.updateProjectionMatrix()}addEventListener("resize",mu);mu();function hi(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Ts(n);return s.colorSpace=It,s.anisotropy=4,s}function Pn(i,e){let t=new Pe(i),n={};return t.getHSL(n),t.setHSL(n.h,n.s,Math.max(0,Math.min(1,n.l+e))),"#"+t.getHexString()}function su(i,e,t){return"#"+new Pe(i).lerp(new Pe(e),t).getHexString()}function ls(i,e,t,n,s="bold",r=lr){for(i.font=`${s} ${n}px ${r}`;i.measureText(e).width>t&&n>18;)n-=2,i.font=`${s} ${n}px ${r}`;return n}function p0(i,e,t,n,s,r,a=9){let o=e.split(/(?<= )/),l="",c=[];for(let h of o)if(i.measureText(l+h).width>s&&l&&(c.push(l),l=""),i.measureText(h).width>s)for(let d of h)i.measureText(l+d).width>s&&(c.push(l),l=""),l+=d;else l+=h;l&&c.push(l),c.slice(0,a).forEach((h,d)=>i.fillText(h.trim(),t,n+d*r))}var as={};function gu(i,e=1024){let t=hi(e,e,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);let a=16,o=r/a;for(let l=0;l<a;l++){let c=-(l*173%300);for(;c<s;){let h=260+(l*97+c*3)%220,d=((l*31+c*7)%11-5)/420;n.fillStyle=Pn(i,d),n.fillRect(c,l*o,h,o),n.globalAlpha=.07,n.strokeStyle=Pn(i,-.25);for(let f=0;f<6;f++){let m=l*o+4+Math.random()*(o-8);n.beginPath(),n.moveTo(c,m),n.bezierCurveTo(c+h*.3,m+3,c+h*.6,m-3,c+h,m+1),n.stroke()}n.globalAlpha=1,n.fillStyle="rgba(90,60,30,.18)",n.fillRect(c,l*o,2,o),c+=h}n.fillStyle="rgba(90,60,30,.16)",n.fillRect(0,l*o,s,2)}});return t.wrapS=t.wrapT=xi,t}var Wl=gu("#dcae74");Wl.repeat.set(zl/6,zl/6);var _u=gu("#dcae74",512);_u.repeat.set(1,1);var m0=(()=>{let i=hi(256,256,(e,t,n)=>{e.fillStyle="#ecebe7",e.fillRect(0,0,t,n);for(let s=0;s<2600;s++)e.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},${Math.random()*.05})`,e.fillRect(Math.random()*t,Math.random()*n,2,2)});return i.wrapS=i.wrapT=xi,i.repeat.set(5,2),i})(),g0=hi(256,256,(i,e,t)=>{let n=i.createImageData(e,t);for(let s=0;s<t;s++)for(let r=0;r<e;r++){let a=(r/e-.5)*2,o=s/t,l=.18+a*a*.55,c=o<l?Math.max(0,1-(l-o)/.06):1;c*=Math.max(0,1-Math.abs(a)**3),c*=Math.min(1,(1-o)/.55);let h=(s*e+r)*4;n.data[h]=255,n.data[h+1]=250,n.data[h+2]=240,n.data[h+3]=Math.max(0,Math.min(255,c*200))}i.putImageData(n,0,0)}),rs=i=>{var e;return as[e="l"+i]||(as[e]=new Zi({color:i}))},ut={wall:new Zi({map:m0,color:"#dad9d5"}),base:rs("#cfcac2"),floor:new ii({map:Wl,specular:"#7a6a5a",shininess:90}),floorC:new ii({map:_u,specular:"#5a4a3a",shininess:70}),ceiling:new Zt({color:"#5f5f5f"}),black:rs("#151515"),brass:rs("#c9a44c"),rope:rs("#a52a2a"),glass:rs("#cfdde6"),bench:new ii({color:"#d9a868",specular:"#333",shininess:30}),lampFace:new Zt({color:"#fffbe8"}),scallop:new Zt({map:g0,transparent:!0,depthWrite:!1})};function xu(i,e,t,n,s){if(e&&e.startsWith("planet:")){let[,a,o]=e.split(":"),l=s*.36;o&&(i.strokeStyle=Pn(a,-.15),i.lineWidth=l*.16,i.beginPath(),i.ellipse(t,n,l*1.75,l*.45,-.25,Math.PI,Math.PI*2),i.stroke());let c=i.createRadialGradient(t-l*.35,n-l*.35,l*.1,t,n,l);c.addColorStop(0,Pn(a,.2)),c.addColorStop(1,Pn(a,-.22)),i.fillStyle=c,i.beginPath(),i.arc(t,n,l,0,Math.PI*2),i.fill(),o&&(i.strokeStyle=Pn(a,-.05),i.lineWidth=l*.16,i.beginPath(),i.ellipse(t,n,l*1.75,l*.45,-.25,0,Math.PI),i.stroke());return}let r=/^[\p{L}\p{N}]/u.test(e||"");i.textAlign="center",i.textBaseline="middle",i.font=`${r?"bold ":""}${s*(r?.55:.6)}px ${r?lr:d0}`,i.fillStyle=r?"#ffffff":"#000",i.fillText(e||"?",t,n+s*.03)}function _0(i,e){return hi(512,384,(t,n,s)=>{t.fillStyle=su(e,"#fbf9f4",.82),t.fillRect(0,0,n,s);let r=t.createRadialGradient(n/2,s/2,20,n/2,s/2,260);r.addColorStop(0,"rgba(255,255,255,.75)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,n,s),t.strokeStyle=su(e,"#ffffff",.45),t.lineWidth=3,t.strokeRect(16,16,n-32,s-32),!i.pic?.startsWith("planet:")&&/^[\p{L}\p{N}]/u.test(i.pic||"")&&(t.fillStyle=Pn(e,-.05),t.beginPath(),t.arc(n/2,s/2,140,0,Math.PI*2),t.fill()),xu(t,i.pic,n/2,s/2,300)})}function x0(i,e,t,n){return hi(480,150,(s,r,a)=>{s.fillStyle="#f7f5f0",s.fillRect(0,0,r,a),n&&(s.fillStyle="#b0542a",s.textAlign="right",s.textBaseline="middle",s.font=`bold 30px ${lr}`,s.fillText(n,r-18,108)),s.fillStyle="#222",s.textAlign="left",s.textBaseline="middle",ls(s,i,r-70,46),s.fillText(i,22,52),s.fillStyle="#555",ls(s,e,n?r-190:r-50,30,"500"),s.fillText(e,22,108),t&&(s.fillStyle=er[t].c,s.beginPath(),s.arc(r-26,30,11,0,Math.PI*2),s.fill())})}function y0(i,e,t,n){return hi(1024,768,(s,r,a)=>{s.textAlign="left",s.textBaseline="top",s.fillStyle=Pn(n,-.12),ls(s,i,r-40,110),s.fillText(i,10,10),s.fillStyle="#555",ls(s,e,r-40,54,"600"),s.fillText(e,14,140),s.fillStyle=Pn(n,-.05),s.fillRect(14,220,120,8),s.fillStyle="#2c2c2c",s.font=`500 44px ${lr}`,p0(s,t||"",14,262,r-40,66,7)})}function v0(i,e,t){return hi(1024,205,(n,s,r)=>{n.textAlign="center",n.textBaseline="middle",n.fillStyle=t,ls(n,i,s-40,96),n.fillText(i,s/2,70),n.fillStyle="#555",ls(n,e,s-40,50,"600"),n.fillText(e,s/2,160)})}var lt=[],os=[],Ti={},yu=0,Gl=(i,e)=>i.minX<e.maxX&&i.maxX>e.minX&&i.minZ<e.maxZ&&i.maxZ>e.minZ,co=(i,e,t,n,s=0)=>({minX:i-t-s,maxX:i+t+s,minZ:e-n-s,maxZ:e+n+s}),vu={square:{w:22,d:22,h:5.4},small:{w:14,d:14,h:4.6},long:{w:13,d:42,h:5.8},wide:{w:32,d:20,h:6.2},tall:{w:18,d:18,h:8}};function Xl(i){if(i.layout)return i.layout;if(i.lobby)return"square";let e=i.list.length,t=Math.random();return e<=7&&t<.35?"small":e>=8&&t<.22?"long":t<.32?"wide":t<.4?"tall":"square"}function ql(i,e){let t=vu[i];return e==="E"||e==="W"?{hx:t.d/2,hz:t.w/2}:{hx:t.w/2,hz:t.d/2}}function jl(i,e,t,n,s,r){r||(r=Xl(i));let{hx:a,hz:o}=ql(r,n),l={i:lt.length,topic:i,x:e,z:t,entry:n,parent:s,layout:r,hx:a,hz:o,h:vu[r].h,exits:null,group:null,colliders:[],exhibits:[]};return l.box=co(e,t,a,o),lt.push(l),os.push(l.box),l}function Su(i,e,t,n){let[s,r]=vt[t],a=mt/2+kt+.1,o=i+s*n,l=e+r*n;return{minX:Math.min(i,o)-(s?0:a),maxX:Math.max(i,o)+(s?0:a),minZ:Math.min(e,l)-(r?0:a),maxZ:Math.max(e,l)+(r?0:a)}}function S0(i,e){let t=Bt[i.topic.id]||i.topic,n=i.parent!=null?lt[i.parent].topic.id:null,s=(t.links||pu).filter(r=>r!==n&&r!==t.id);return s=nr(s).sort((r,a)=>(Ti[r]||0)-(Ti[a]||0)),s.slice(0,e)}function Mu(i){if(i.exits)return;i.exits={};let e=nr(Object.keys(vt).filter(a=>a!==i.entry));if(i.topic.lobby){let a=new URLSearchParams(location.search).get("start"),o=nr(pu.filter(l=>l!==a)).slice(0,3);Bt[a]&&(o[0]=a),["N","E","W"].forEach((l,c)=>ru(i,l,Bt[o[c]],!1)),i.exits.S={closed:!0,label:["\u3044\u308A\u3050\u3061","Entrance"]};return}let t=Math.random()<.55?3:2,n=S0(i,t),s=Math.random()<.35,r=0;for(let a of e){if(r>=t)break;let o=Bt[n[r]],l=!1;s&&r===t-1&&(o=Bt[Ol(Object.keys(Bt).filter(c=>c!==i.topic.id))],l=!0),o||(o=Bt[Ol(Object.keys(Bt))]),ru(i,a,o,l)&&r++}if(r===0){let a=e.find(o=>!i.exits[o]);a&&bu(i,a,Bt[Ol(Object.keys(Bt).filter(o=>o!==i.topic.id))])}}function ru(i,e,t,n){let[s,r]=vt[e],a=i.x+s*i.hx,o=i.z+r*i.hz,l=[Xl(t),"square","small"];for(let c of l)for(let h of nr([3,5,8]).concat([12,18,26])){let{hx:d,hz:f}=ql(c,iu[e]),m=a+s*(h+d),_=o+r*(h+f),S=co(m,_,d,f,.6),u=Su(a,o,e,h),p={minX:u.minX+(s?.05:0),maxX:u.maxX-(s?.05:0),minZ:u.minZ+(r?.05:0),maxZ:u.maxZ-(r?.05:0)};if(os.some(v=>Gl(v,S)||Gl(v,p)&&v!==i.box))continue;let T=jl(t,m,_,iu[e],i.i,c);return os.push(u),i.exits[e]={child:T.i,len:h,mystery:n},!0}return!1}function bu(i,e,t){let n=Xl(t),{hx:s,hz:r}=ql(n,"S");for(let a=1;a<400;a++){let o=600*Math.ceil(a/8)*(a%2?1:-1),l=600*(a%8-4),c=co(o,l,s,r,30);if(os.some(m=>Gl(m,c)))continue;let h=jl(t,o,l,"S",i.i,n);h.warpFrom=e,os.push(co(o,l+r+3,3,3));let[d,f]=vt[e];return os.push(Su(i.x+d*i.hx,i.z+f*i.hz,e,4)),i.exits[e]={child:h.i,len:4,warp:!0,mystery:!0},!0}return!1}var M0=new Zt({map:hi(256,256,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,10,e/2,t/2,e/2);n.addColorStop(0,"#ffffff"),n.addColorStop(.35,"#c9a8ff"),n.addColorStop(.75,"#6a3dc2"),n.addColorStop(1,"#2a1a5a"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="#fff",i.font=`bold 44px ${lr}`,i.textAlign="center",i.fillText("\u30EF\u30FC\u30D7",e/2,t/2+15)})});function wu(i,e,t,n,s,r){let[a,o]=vt[n],l=e+a*(s-.05),c=t+o*(s-.05),h=new Qe(new At(mt,rn),M0);h.position.set(l,rn/2,c),h.lookAt(l-a,rn/2,c-o),i.group.add(h),i.portals.push({x:e+a*(s-1),z:t+o*(s-1),target:r})}var b0=(i,e,t,n)=>new Qe(new Hn(i,e,t),n);function _n(i,e,t,n,s,r,a,o,l){let c=b0(e,t,n,s);return c.position.set(r,a,o),i.group.add(c),l&&i.colliders.push({minX:r-e/2,maxX:r+e/2,minZ:o-n/2,maxZ:o+n/2}),c}function lo(i){return i.userData.own=!0,i}function w0(i,e){let[t,n]=vt[e],s=t===0,r=i.h,a=s?i.hx:i.hz,l=(s?i.hz:i.hx)-kt/2,c=i.x+t*l,h=i.z+n*l,d=e===i.entry?{back:!0}:i.exits[e],f=d?[[-a,-mt/2],[mt/2,a]]:[[-a,a]];for(let[p,M]of f){let T=M-p,v=(p+M)/2,A=s?i.x+v:c,E=s?h:i.z+v;_n(i,s?T:kt,r,s?kt:T,ut.wall,A,r/2,E,!0);let g=s?A:c-t*(kt/2+.015),b=s?h-n*(kt/2+.015):E;_n(i,s?T:.03,.1,s?.03:T,ut.base,g,.05,b)}if(!d)return;_n(i,s?mt:kt,r-rn,s?kt:mt,ut.wall,c,rn+(r-rn)/2,h);let m,_,S="#3a3a3a";if(d.back){let p=i.parent!=null?lt[i.parent].topic:null;m=p?"\u2190 "+p.ja:"\u3082\u3069\u308B",_=p?p.en:"Back"}else if(d.closed)[m,_]=d.label;else{let p=lt[d.child].topic;d.warp&&!Ti[p.id+"@"+d.child]?(m="\u2726 \u30EF\u30FC\u30D7 \u2726",_="Warp door",S="#5a3d8a"):d.mystery&&!Ti[p.id+"@"+d.child]?(m="\uFF1F \u3075\u3057\u304E\u306A \u3078\u3084",_="Mystery room",S="#5a3d8a"):(m=p.ja,_=p.en,S=Pn(p.c,-.12))}let u=new Qe(new At(5,1),lo(new Zt({map:v0(m,_,S),transparent:!0})));if(u.position.set(c-t*(kt/2+.02),rn+.75,h-n*(kt/2+.02)),u.lookAt(u.position.x-t,u.position.y,u.position.z-n),i.group.add(u),d.closed){let p=c-t*.7,M=h-n*.7;for(let A of[-1,1]){let E=new Qe(new ni(.05,.07,1,10),ut.brass);E.position.set(s?p+A*1.4:p,.5,s?M:M+A*1.4),i.group.add(E)}let T=new Qe(new ni(.03,.03,2.8,6),ut.rope);T.rotation.z=s?Math.PI/2:0,T.rotation.x=s?0:Math.PI/2,T.position.set(p,.85,M),i.group.add(T),i.colliders.push({minX:c-(s?mt/2:.8),maxX:c+(s?mt/2:.8),minZ:h-(s?.8:mt/2),maxZ:h+(s?.8:mt/2)});let v=new Qe(new At(mt,rn),ut.glass);v.position.set(c+t*.05,rn/2,h+n*.05),v.lookAt(v.position.x-t,v.position.y,v.position.z-n),i.group.add(v)}}function au(i,e,t){let[n,s]=vt[e],r=n!==0,a=i.x+n*i.hx,o=i.z+s*i.hz,l=t.len,c=a+n*l/2,h=o+s*l/2,d=rn+.6,f=new Qe(new At(r?l:mt,r?mt:l),ut.floorC);f.rotation.x=-Math.PI/2,f.position.set(c,.003,h),f.userData.floor=!0,i.group.add(f),i.floors.push(f);let m=new Qe(new At(r?l:mt,r?mt:l),ut.ceiling);m.rotation.x=Math.PI/2,m.position.set(c,d,h),i.group.add(m);for(let _ of[-1,1]){let S=mt/2+kt/2;_n(i,r?l:kt,d,r?kt:l,ut.wall,r?c:c+_*S,d/2,r?h+_*S:h,!0)}for(let _=1.5;_<l;_+=3){let S=new Qe(new Cs(.22,16),ut.lampFace);S.rotation.x=Math.PI/2,S.position.set(a+n*_,d-.01,o+s*_),i.group.add(S)}if(t.warp){_n(i,r?.3:mt+.6,d,r?mt+.6:.3,ut.wall,a+n*(l+.15),d/2,o+s*(l+.15),!0);let _=lt[t.child],[S,u]=vt[_.entry];wu(i,a,o,e,l,{room:_.i,x:_.x+S*(_.hx-2.5),z:_.z+u*(_.hz-2.5),dx:-S,dz:-u})}}function E0(i){let e=[];for(let t of["N","E","S","W"]){let n=t===i.entry||i.exits&&i.exits[t],s=vt[t][0]===0,r=2*(s?i.hx:i.hz),a=r<=16?4.6:r>=30?5.4:6.4;for(let o=-10;o<=10;o++){let l=o*a;Math.abs(l)>r/2-2.2||n&&Math.abs(l)<3.4||e.push({side:t,o:l,wall:!0,door:!!n})}}return e}function Bl(i,e=0,t=0,n=i.hx>=i.hz?i.i%3!==0:i.i%3===0){let a=Math.min(i.h-.9,4.6);_n(i,n?9:.45,a,n?.45:9,ut.wall,i.x+e,a/2,i.z+t,!0),_n(i,n?9+.02:.45+.02,.1,n?.45+.02:9+.02,ut.base,i.x+e,.05,i.z+t);let o=[];for(let l of[-1,1])for(let c of[-2.3,2.3]){let h=n?0:l,d=n?l:0;o.push({x:e+(n?c:l*(.45/2+.06)),z:t+(n?l*(.45/2+.06):c),nx:h,nz:d,small:!0})}return{slots:o,alongX:n}}function T0(i,e,t){let n,s,r,a;if(e.wall){let[v,A]=vt[e.side],E=v===0,g=(E?i.hz:i.hx)-kt-.05;n=E?i.x+e.o:i.x+v*g,s=E?i.z+A*g:i.z+e.o,r=-v,a=-A}else n=i.x+e.x,s=i.z+e.z,r=e.nx,a=e.nz;let o=new un;o.position.set(n,0,s),o.lookAt(n+r,0,s+a),i.group.add(o);let l=2.15,c=new Qe(new At(4.6,4.8),ut.scallop);c.position.set(0,l+.9,-.02),o.add(c);let h=new un;h.position.set(0,i.h-.35,2.2),o.add(h);let d=new Qe(new ni(.11,.14,.38,12),ut.black);d.rotation.x=.9,h.add(d);let f=new Qe(new ni(.02,.02,.3,6),ut.black);f.position.y=.2,h.add(f);let m={ex:t,pos:new k(n,0,s),normal:new k(r,0,a)};if(i.exhibits.push(m),t.text){let v=new Qe(new At(4.2,3.15),lo(new Zt({map:y0(t.ja,t.en,t.fact,t.color||i.topic.c),transparent:!0})));v.position.set(0,2.35,.02),o.add(v),v.userData.exhibit=t,i.clickables.push(v),c.visible=!1;return}let _=e.small?2.3:2.7,S=e.small?1.75:2.05,u=new Qe(new Hn(_+.12,S+.12,.06),ut.black);u.position.y=l,o.add(u);let p=lo(new Zt({color:"#fff"})),M=new Qe(new At(_,S),p);M.position.set(0,l,.035),o.add(M);let T=new Qe(new At(1.5,.47),lo(new Zt({map:x0(t.ja,t.en,t.status,t.year)})));T.position.set(0,l-S/2-.42,.01),o.add(T),t.img?(p.color.set("#cfcfcf"),new Ps().load(t.img,v=>{if(!i.group){v.dispose();return}v.colorSpace=It,v.anisotropy=4;let A=v.image.width/v.image.height,E=_,g=_/A;g>S&&(g=S,E=S*A),M.geometry.dispose(),M.geometry=new At(E,g),u.scale.set((E+.12)/(_+.12),(g+.12)/(S+.12),1),T.position.y=l-g/2-.42,p.color.set("#fff"),p.map=v,p.needsUpdate=!0})):(p.map=_0(t,(Bt[t.topic]||i.topic).c),p.needsUpdate=!0);for(let v of[M,u,T])v.userData.exhibit=t,i.clickables.push(v)}function Eu(i){var S;if(i.group)return;Mu(i);let e=i.topic;i.group=new un,i.colliders=[],i.clickables=[],i.floors=[],i.exhibits=[],ci.add(i.group);let t=i.h,n=i.hx*2,s=i.hz*2,r=as[S="floor"+n+"x"+s]||(as[S]=(()=>{let u=Wl.clone();return u.repeat.set(n/6,s/6),u.needsUpdate=!0,new ii({map:u,specular:"#7a6a5a",shininess:90})})()),a=new Qe(new At(n,s),r);a.rotation.x=-Math.PI/2,a.position.set(i.x,0,i.z),a.userData.floor=!0,i.group.add(a),i.floors.push(a);let o=new Qe(new At(n,s),ut.ceiling);o.rotation.x=Math.PI/2,o.position.set(i.x,t,i.z),i.group.add(o);for(let u of Object.keys(vt))w0(i,u);i.portals=[];for(let[u,p]of Object.entries(i.exits))p.child!=null&&au(i,u,p);if(i.warpFrom){let u=lt[i.parent],[p,M]=vt[i.warpFrom],[T,v]=vt[i.entry];au(i,i.entry,{len:4,child:i.parent,warp:!1,back:!0});let A=T!==0,E=i.x+T*i.hx,g=i.z+v*i.hz;_n(i,A?.3:mt+.6,rn+.6,A?mt+.6:.3,ut.wall,E+T*4.15,(rn+.6)/2,g+v*4.15,!0),wu(i,E,g,i.entry,4,{room:u.i,x:u.x+p*(u.hx-2.5),z:u.z+M*(u.hz-2.5),dx:-p,dz:-M})}let l=e.lobby?[...e.list.map(u=>({...u,color:"#6b4d2c"})),...nr(Object.values(Bt).flatMap(u=>u.list)).slice(0,6)]:[{text:!0,ja:e.ja,en:e.en,fact:e.intro,color:e.c},...e.list],c=E0(i),h=c.find(u=>!u.door&&u.o===0)||c[0],d=[h,...c.filter(u=>u!==h)];e.lobby&&(d=c.filter(u=>!u.door&&u.o===0).concat(c.filter(u=>u.door||u.o!==0)));let f=Math.min(i.hx,i.hz)*2,m=i.hx>i.hz;if(e.timeline){let[u,p]=vt[i.entry||"S"],M=T=>{let[v,A]=vt[T.side],E=v===0,g=E?T.o:v*i.hx,b=E?A*i.hz:T.o;return(Math.atan2(u*b-p*g,u*g+p*b)+Math.PI*2)%(Math.PI*2)};d=c.slice().sort((T,v)=>M(T)-M(v));for(let T of Object.keys(vt)){let[v,A]=vt[T],E=v===0,g=E?i.hx:i.hz,b=(E?i.hz:i.hx)-kt-.02;g<10||_n(i,E?g*2-1:.03,.14,E?.03:g*2-1,rs(e.c),i.x+v*b,.62,i.z+A*b)}}if(!e.timeline&&f>=18&&(l.length>d.length-2||!e.lobby&&l.length>7))if(i.layout==="wide"){let u=Bl(i,m?-7.5:0,m?0:-7.5,!m),p=Bl(i,m?7.5:0,m?0:7.5,!m);d=[d[0],...u.slots,...p.slots,...d.slice(1)],oo(i,i.x,i.z,m)}else{let u=Bl(i);d=[d[0],...u.slots,...d.slice(1)];let p=u.alongX?0:4.2,M=u.alongX?4.2:0;oo(i,i.x+p,i.z+M,u.alongX)}else if(!e.lobby)if(i.layout==="long"){let u=(m?i.hx:i.hz)-8;for(let p=-u;p<=u;p+=11)oo(i,i.x+(m?p:0),i.z+(m?0:p),m)}else i.layout!=="small"&&oo(i,i.x,i.z,m);d.slice(0,l.length).forEach((u,p)=>T0(i,u,l[p]));for(let u of Object.keys(vt)){let[p,M]=vt[u],T=p===0,v=(T?i.hz:i.hx)-kt-2.25,A=(T?i.hx:i.hz)*2-4;_n(i,T?A:.06,.06,T?.06:A,ut.black,i.x+(T?0:p*v),t-.1,i.z+(T?M*v:0))}}function oo(i,e,t,n){_n(i,n?2.6:.75,.42,n?.75:2.6,ut.bench,e,.45,t,!0)}function Yl(i){i.group&&(i.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.userData.own&&(e.material.map?.dispose(),e.material.dispose())}),ci.remove(i.group),i.group=null,i.colliders=[],i.clickables=[],i.floors=[],i.exhibits=[])}jl(h0,0,0,null,null);var we={pos:new k(0,0,5.5),yaw:0,pitch:-.05,room:0,target:null};function A0(i){let e=[i];i.parent!=null&&e.push(lt[i.parent]);for(let t of Object.values(i.exits||{}))t.child!=null&&e.push(lt[t.child]);return e}function R0(){let i=lt[we.room];Mu(i);let e=new Set(A0(i).map(t=>t.i));lt.forEach(t=>{t.group&&!e.has(t.i)&&Yl(t)}),e.forEach(t=>Eu(lt[t]))}var cr=()=>lt.filter(i=>i.group);function C0(i){for(let e of cr())if(Math.abs(i.x-e.x)<=e.hx-.2&&Math.abs(i.z-e.z)<=e.hz-.2)return e.i;return we.room}function ou(i,e){for(let t of cr())for(let n of t.colliders)if(i+ao>n.minX&&i-ao<n.maxX&&e+ao>n.minZ&&e-ao<n.maxZ)return!0;return!1}function lu(i,e){let t=!1;return ou(we.pos.x+i,we.pos.z)||(we.pos.x+=i,t=!0),ou(we.pos.x,we.pos.z+e)||(we.pos.z+=e,t=!0),t}function ir(i){let e=lt[i],t=!e.seen;if(we.room=i,t&&(e.seen=!0,yu++,Ti[e.topic.id]=(Ti[e.topic.id]||0)+1,Ti[e.topic.id+"@"+i]=1),t&&e.parent!=null){let n=lt[e.parent];n.group&&Yl(n)}R0(),Ru(),F0(e)}var hr=new Set,sr=new Set,rr=document.getElementById("panel"),Tu=()=>!rr.hidden;addEventListener("keydown",i=>{if(Tu()){["Escape","Enter"," "].includes(i.key)?(ur(),i.preventDefault()):i.key==="ArrowRight"?(ho(1),i.preventDefault()):i.key==="ArrowLeft"&&(ho(-1),i.preventDefault());return}if((i.key==="Enter"||i.key===" ")&&wi){uo(wi),i.preventDefault();return}hr.add(i.key.toLowerCase()),i.key.startsWith("Arrow")&&i.preventDefault()});addEventListener("keyup",i=>hr.delete(i.key.toLowerCase()));addEventListener("blur",()=>{hr.clear(),sr.clear()});var ar=cs.domElement,gn=null;ar.addEventListener("pointerdown",i=>{gn={x:i.clientX,y:i.clientY,moved:0},ar.setPointerCapture(i.pointerId)});ar.addEventListener("pointermove",i=>{if(!gn){ar.style.cursor=Au(i,cr().flatMap(n=>n.clickables))?"pointer":"default";return}let e=i.clientX-gn.x,t=i.clientY-gn.y;gn.x=i.clientX,gn.y=i.clientY,gn.moved+=Math.abs(e)+Math.abs(t),gn.moved>6&&(we.yaw+=e*.005,we.pitch=Math.max(-.9,Math.min(.7,we.pitch-t*.004)),we.target=null)});ar.addEventListener("pointerup",i=>{gn&&gn.moved<=6&&I0(i),gn=null});var cu=new Bs;function Au(i,e){return cu.setFromCamera(new ke(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),Ei),cu.intersectObjects(e,!1)[0]}function I0(i){let e=cr(),t=Au(i,[...e.flatMap(s=>s.clickables),...e.flatMap(s=>s.floors)]);if(!t)return;let n=t.object.userData.exhibit;if(n)if(t.distance<9)uo(n);else{let s=e.flatMap(r=>r.exhibits).find(r=>r.ex===n);s&&(we.target=s.pos.clone().addScaledVector(s.normal,2.6))}else t.object.userData.floor&&(we.target=t.point.clone())}document.querySelectorAll("[data-btn]").forEach(i=>{let e=i.dataset.btn,t=()=>sr.delete(e);i.addEventListener("pointerdown",n=>{n.preventDefault(),sr.add(e),we.target=null}),["pointerup","pointerleave","pointercancel"].forEach(n=>i.addEventListener(n,t))});document.getElementById("fs").addEventListener("click",()=>{try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()}catch{}});document.getElementById("home").addEventListener("click",()=>{ur(),we.pos.set(0,0,5.5),we.yaw=0,we.pitch=-.05,we.target=null,ir(0)});var tr=new Set;try{tr=new Set(JSON.parse(localStorage.getItem("museum-seen2")||"[]"))}catch{}function P0(i){if(!(!i||tr.has(i))){tr.add(i);try{localStorage.setItem("museum-seen2",JSON.stringify([...tr]))}catch{}Ru()}}var L0=document.getElementById("room"),N0=document.getElementById("seen"),hu=document.getElementById("hint");function Ru(){let i=lt[we.room];L0.innerHTML=`<b>${i.topic.ja}</b><span>${i.topic.en}</span>`,N0.innerHTML=`\u{1F6AA} ${yu} \u3078\u3084\u3000\u{1F440} ${tr.size} / ${c0}`}var Hl=document.getElementById("map"),Ze=Hl.getContext("2d");function D0(){let i=Hl.width,e=Hl.height,t=1.6;Ze.clearRect(0,0,i,e);let n=i/2,s=e/2,r=we.pos.x,a=we.pos.z;for(let o of lt){if(!o.seen&&!(o.parent!=null&&lt[o.parent].seen))continue;let l=n+(o.x-r)*t,c=s+(o.z-a)*t;if(!(l<-40||c<-40||l>i+40||c>e+40)&&o.parent!=null){let h=lt[o.parent];Ze.strokeStyle="#c9b48a",Ze.lineWidth=6,Ze.beginPath(),Ze.moveTo(n+(h.x-r)*t,s+(h.z-a)*t),Ze.lineTo(l,c),Ze.stroke()}}for(let o of lt){if(!o.seen&&!(o.parent!=null&&lt[o.parent].seen))continue;let l=n+(o.x-r)*t,c=s+(o.z-a)*t,h=o.hx*2*t,d=o.hz*2*t;Ze.fillStyle=o.seen?o.topic.c:"#d9d0c0",Ze.globalAlpha=o.i===we.room?1:.75,Ze.fillRect(l-h/2,c-d/2,h,d),Ze.globalAlpha=1,o.seen||(Ze.fillStyle="#7a6a55",Ze.font="bold 16px sans-serif",Ze.textAlign="center",Ze.textBaseline="middle",Ze.fillText("?",l,c))}Ze.save(),Ze.translate(n,s),Ze.rotate(-we.yaw),Ze.fillStyle="#e8731c",Ze.strokeStyle="#fff",Ze.lineWidth=2,Ze.beginPath(),Ze.moveTo(0,-9),Ze.lineTo(6,6),Ze.lineTo(-6,6),Ze.closePath(),Ze.fill(),Ze.stroke(),Ze.restore()}var or=null,qt=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function uo(i){or=i,hr.clear(),sr.clear(),we.target=null;let e=document.getElementById("pbody");if(i.text)e.innerHTML=`<div class="ptext"><h2>${qt(i.ja)}</h2><div class="en">${qt(i.en)}</div><p>${qt(i.fact||"")}</p></div>`;else{let t=Bt[i.topic],n=i.img?`<img src="${i.img}" alt="">`:`<div class="bigpic" style="--c:${t.c}"><canvas width="560" height="560"></canvas></div>`;e.innerHTML=`${n}<div class="info"><div class="crumb">${qt(t.ja)} \u30FB ${qt(t.en)}</div><h2>${qt(i.ja)}</h2><div class="en big">${qt(i.en)}</div>
      ${i.rows.map(([r,a,o])=>`<div class="row"><span class="k">${qt(r)}</span><span>${qt(a)} <i>${qt(o)}</i></span></div>`).join("")}
      <p class="fact">\u{1F4A1} ${qt(i.fact)}</p>${i.status?U0(i.status,i.statusSource):""}</div>`;let s=e.querySelector("canvas");if(s){let r=s.getContext("2d");xu(r,i.pic,280,280,520)}P0(i.key)}rr.hidden=!1}function U0(i,e){return`<div class="status">${e==="japan"?'<div class="src">\u65E5\u672C\u306E \u30EC\u30C3\u30C9\u30EA\u30B9\u30C8(\u304B\u3093\u304D\u3087\u3046\u3057\u3087\u3046)</div>':""}
    <div class="bar">${l0.map(t=>`<div class="seg${t===i?" on":""}" style="--c:${er[t].c}"><b>${t}</b></div>`).join("")}</div>
    <div class="label" style="color:${er[i].c}">${er[i].ja} <i>${er[i].en}</i></div></div>`}function ur(){rr.hidden=!0,or=null}function ho(i){if(!or)return;let e=lt[we.room].exhibits.filter(s=>!s.ex.text),t=e.findIndex(s=>s.ex===or);if(t<0||!e.length)return;let n=e[(t+i+e.length)%e.length];uo(n.ex),we.pos.copy(n.pos).addScaledVector(n.normal,3.2),we.yaw=Math.atan2(n.normal.x,n.normal.z)}document.getElementById("close").addEventListener("click",ur);document.getElementById("prev").addEventListener("click",()=>ho(-1));document.getElementById("next").addEventListener("click",()=>ho(1));rr.addEventListener("click",i=>{i.target===rr&&ur()});var wi=null,uu=0,kl=new k,du=new Os;function Cu(){du.update();let i=Math.min(du.getDelta(),.05);if(!or){let r=d=>hr.has(d)||sr.has(d);we.yaw+=((r("arrowleft")||r("q")?1:0)-(r("arrowright")||r("e")?1:0))*i*1.9;let a=(r("arrowup")||r("w")?1:0)-(r("arrowdown")||r("s")?1:0),o=(r("d")?1:0)-(r("a")?1:0),l=4.4*i,c=Math.sin(we.yaw),h=Math.cos(we.yaw);if(a||o)we.target=null,lu((-c*a+h*o)*l,(-h*a-c*o)*l);else if(we.target){let d=new k().subVectors(we.target,we.pos);d.y=0;let f=d.length();if(f<.15)we.target=null;else{d.normalize();let m=Math.atan2(-d.x,-d.z);we.yaw+=((m-we.yaw+Math.PI*3)%(Math.PI*2)-Math.PI)*Math.min(1,i*5),lu(d.x*Math.min(l,f),d.z*Math.min(l,f))||(we.target=null)}}}for(let r of cr())for(let a of r.portals||[])if(Math.hypot(we.pos.x-a.x,we.pos.z-a.z)<1.1){we.pos.set(a.target.x,0,a.target.z),we.yaw=Math.atan2(-a.target.dx,-a.target.dz),we.target=null,ir(a.target.room);break}let e=C0(we.pos);e!==we.room&&ir(e),Ei.position.set(we.pos.x,u0,we.pos.z),Ei.rotation.set(we.pitch,we.yaw,0,"YXZ"),Ei.getWorldDirection(kl);let t=new k(kl.x,0,kl.z).normalize(),n=null,s=0;for(let r of lt[we.room].exhibits){let a=new k(r.pos.x-we.pos.x,0,r.pos.z-we.pos.z),o=a.length();if(o>5.5)continue;let l=a.normalize().dot(t);l>.8&&l/o>s&&(s=l/o,n=r.ex)}n!==wi&&(wi=n,wi&&(hu.innerHTML=`<b>Enter</b> \u304B \u30AF\u30EA\u30C3\u30AF\u3067 \u898B\u308B \u2014 ${qt(wi.ja)}`)),hu.hidden=!wi||Tu(),(uu+=i)>.12&&(uu=0,D0()),cs.render(ci,Ei),requestAnimationFrame(Cu)}var fu;function F0(i){let e=document.getElementById("banner");e.innerHTML=`<b>${qt(i.topic.ja)}</b><span>${qt(i.topic.en)}</span>`,e.classList.add("show"),clearTimeout(fu),fu=setTimeout(()=>e.classList.remove("show"),2200)}ir(0);location.search.includes("debug")&&(window.__m={player:we,rooms:lt,openPanel:uo,closePanel:ur,TOPICS:Bt,enterRoom:ir,makeWarp:bu,build:Eu,dispose:Yl});document.getElementById("loading").remove();requestAnimationFrame(Cu);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
