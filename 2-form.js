import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let l={email:"",message:""};const n="feedback-form-state",o=document.querySelector(".feedback-form");o.addEventListener("input",e=>{e.preventDefault();const{name:t,value:a}=e.target;l[t]=a,console.log("name - "+t+" value - "+a),localStorage.setItem(n,JSON.stringify(l))});o.addEventListener("submit",e=>{e.preventDefault();const{email:t,message:a}=o.elements;if(!t.value||!a.value){alert("Fill please all fields");return}console.log(l),s()});function s(){for(let e in l)l[e]="";o.reset(),localStorage.removeItem(n)}document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem(n);if(e){const{email:t="",message:a=""}=JSON.parse(e);o.elements.email.value=t,o.elements.message.value=a,l={email:t,message:a}}});
//# sourceMappingURL=2-form.js.map
