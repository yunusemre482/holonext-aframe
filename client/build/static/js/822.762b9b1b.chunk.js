"use strict";(self.webpackChunklearn_react_ar_js=self.webpackChunklearn_react_ar_js||[]).push([[822],{6749:function(e,t,l){l(2791);var n=l(184);t.Z=function(e){var t=e.isLoading;return(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.6)]",style:{display:t?"flex":"none"},children:(0,n.jsx)("span",{className:"loader"})})}},2822:function(e,t,l){l.r(t),l.d(t,{default:function(){return m}});var n=l(7166),s=l(3032),r=l(678),a=l(2791),i=(l(9727),l(5667)),o=l(5801),c=l(1243),u=l(9811),f=l(4282),d=l(1678),p=l(184),x=function(e){var t=e.images;return console.log(t),(0,p.jsxs)("a-scene",{"vr-mode-ui":"enabled;false;",renderer:"antialias: true;physicallyCorrectLights: true;logarithmicDepthBuffer:true;",children:[(0,p.jsx)("a-entity",{"orbit-controls":"target:0 0 -14; minDistance: 0.5; maxDistance: 180;"}),(0,p.jsx)("a-plane",{src:t[0],position:"0 0 -14",rotation:"0 30 0",width:"6",height:"6",shadow:!0,material:"side: double"})]})},h=l(6749),g=(0,i.createSpeechlySpeechRecognition)("01403d73-5ac1-47b5-a2aa-2059ec480d13");o.ZP.applyPolyfill(g);var m=function(){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),l=t[0],i=t[1],g=(0,o.x6)(),m=g.transcript,b=g.listening,w=g.resetTranscript,j=g.browserSupportsSpeechRecognition,v=g.finalTranscript,y=(0,a.useState)(["https://images.unsplash.com/photo-1677594066467-51aedaa69455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80","https://holonext.io/public/images/holonextlogo.jpg"]),k=(0,r.Z)(y,2),N=k[0],Z=k[1],S=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,c.Z.post("https://holonext-aframe.onrender.com/api/v1/dall-e",{message:t,userId:1}).then((function(e){Z(e.data.images),i(!1)}));case 3:w();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return"undefined"===typeof window||j?(0,p.jsxs)("div",{className:"w-full h-full flex  flex-col lg:flex-row overflow-auto",children:[(0,p.jsx)(x,{images:N}),(0,p.jsxs)("div",{className:"z-10 flex flex-col items-center justify-center bg-[rgba(102,138,255,0.5)]  mx-auto gap-4 w-full lg:w-[clamp(200px,50%,800px)] p-5",children:[(0,p.jsxs)("ul",{className:" w-full flex items-center lg:py-10  gap-2 flex flex-col hidden lg:flex ",children:[(0,p.jsx)("span",{className:"text-lg mb-2 w-full",children:"Example Commands:"}),["cars and trucks and airplanes war with cats","red bear walking on the moon","dogs fighting in the sky with swords"].map((function(e,t){return(0,p.jsx)("li",{onClick:function(){return S(e)},className:"bg-blue-400 text-yellow-100 p-2 rounded-lg cursor-pointer  flex w-[45%] hover:bg-blue-700 lg:w-full",children:e},t)}))]}),(0,p.jsxs)("div",{className:"flex flex-col items-center lg:w-full",children:[(0,p.jsxs)("div",{className:"flex items-center relative flex-col  w-full lg:w-full ",children:[(0,p.jsx)("span",{className:"text-lg mb-2 w-full ",children:"Speak into the microphone:"}),(0,p.jsx)("textarea",{defaultValue:m,onChange:function(e){},disabled:!0,id:"speech-input",className:"w-full  h-20 lg:h-64 rounded-lg border-gray-400 border-2 px-4 py-2 mb-4 disabled:bg-white"}),(0,p.jsx)("button",{className:"absolute top-12 right-8   bg-teal-600 p-2 rounded-md ",onClick:w,children:(0,p.jsx)(u.Z,{size:20,color:"#ffffff"})})]}),(0,p.jsxs)("div",{className:"flex  justify-end items-center  gap-5 w-full lg:w-full flex-row",children:[(0,p.jsxs)("button",{onClick:function(){b?o.ZP.stopListening():o.ZP.startListening({continuous:!0})},id:"start-recognition",className:"flex-1 bg-blue-700 hover:bg-blue-800 text-white font-bold p-2 px-6  rounded flex flex-row items-center justify-center cursor-pointer gap-4",children:[b?(0,p.jsx)(f.Z,{size:20,strokeWidth:2,color:"#f5f5f5"}):(0,p.jsx)(d.Z,{size:20,strokeWidth:2,color:"#f5f5f5"}),b?"Stop Listening":"Start Listening"]}),(0,p.jsx)("button",{onClick:function(){return S(v)},id:"start-recognition",className:"flex-1 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded cursor-pointer",children:"Submit Transcript"})]})]})]}),(0,p.jsx)(h.Z,{isLoading:l})]}):(0,p.jsx)("span",{children:"Browser doesn't support speech recognition."})}}}]);
//# sourceMappingURL=822.762b9b1b.chunk.js.map