const plans={gentle:[["Mon","Easy walk + mobility","20–30 min"],["Tue","Chair strength + stretching","20 min"],["Wed","Easy walk + balance","20–30 min"],["Thu","Rest / gentle mobility","10–15 min"],["Fri","Easy walk + chair strength","20–30 min"],["Sat","Gentle yoga","15–25 min"],["Sun","Rest or relaxed walk","Optional"]],strength:[["Mon","Chair sit-to-stand + wall push-up","20 min"],["Tue","Walking + balance practice","25–30 min"],["Wed","Rest / mobility","10–15 min"],["Thu","Chair sit-to-stand + calf raises","20 min"],["Fri","Walking + supported balance","25–30 min"],["Sat","Gentle yoga + stretching","20 min"],["Sun","Rest / easy movement","Optional"]],yoga:[["Mon","Seated breathing + neck/shoulder mobility","15–20 min"],["Tue","Gentle walk","20–30 min"],["Wed","Chair yoga sequence","20 min"],["Thu","Rest / gentle mobility","10–15 min"],["Fri","Chair yoga + supported balance","20 min"],["Sat","Easy walk + stretching","20–30 min"],["Sun","Rest","Optional"]]};
const exercises=[
["Chair sit-to-stand","strength","01","From a sturdy chair, stand slowly and sit down with control. Use your hands for support if needed.",["Legs","Chair","8–12 reps"]],
["Wall push-up","strength","02","Place your hands on a stable wall and gently bend and straighten your elbows.",["Upper body","Wall","8–12 reps"]],
["Supported calf raise","strength","03","Hold a sturdy chair or counter and slowly raise your heels, then lower them.",["Lower legs","Support","8–12 reps"]],
["Seated knee extension","strength","04","Sit tall and slowly straighten one knee, then lower the foot. Alternate sides.",["Legs","Chair","8–12 reps"]],
["Shoulder rolls","mobility","05","Move the shoulders slowly in comfortable circles without forcing the range.",["Shoulders","Gentle","5–10 reps"]],
["Seated ankle circles","mobility","06","Lift one foot slightly and make small, comfortable circles with the ankle.",["Ankles","Chair","5 each way"]],
["Seated torso rotation","mobility","07","Sit upright and gently turn your upper body within a comfortable range.",["Trunk","Chair","5 each side"]],
["Supported side steps","balance","08","Stand near a stable support and take small controlled steps sideways.",["Balance","Support","5–10 each way"]],
["Heel-to-toe walk","balance","09","Walk slowly in a straight line with one foot close in front of the other. Keep support nearby.",["Balance","Walking","Short set"]],
["Supported single-leg stand","balance","10","Hold a stable support and briefly lift one foot. Keep the movement controlled.",["Balance","Support","Short holds"]],
["Easy walking","aerobic","11","Walk at a comfortable pace. Build duration gradually according to your ability.",["Cardio","Walking","Comfortable pace"]],
["Marching in place","aerobic","12","Near a sturdy support, gently alternate lifting your feet as if walking in place.",["Cardio","Low impact","Short sets"]]
];
const yoga=[
["Seated mountain","Y1","Sit tall with both feet supported. Relax the shoulders and take slow, comfortable breaths.",["Seated","Posture","Breathing"]],
["Seated side stretch","Y2","Sit securely and reach one arm gently overhead, creating a comfortable side stretch.",["Seated","Mobility"]],
["Seated cat-cow","Y3","With hands on thighs, gently alternate between a relaxed rounded spine and a comfortable lifted chest.",["Seated","Spine mobility"]],
["Chair-supported forward reach","Y4","From a stable seated position, hinge forward only as far as comfortable, then return upright.",["Seated","Gentle"]],
["Supported standing mountain","Y5","Stand near a wall or sturdy chair, feet comfortable, and focus on relaxed upright posture.",["Standing","Support"]],
["Supported tree preparation","Y6","With one hand on stable support, shift weight gently and place the other foot lightly without forcing balance.",["Balance","Support"]]
];
function card(name,icon,description,meta,type="yoga"){return `<article class="exercise-card" data-type="${type}"><div class="exercise-icon">${icon}</div><h3>${name}</h3><p>${description}</p><div class="meta">${meta.map(x=>`<span>${x}</span>`).join("")}</div></article>`}
function renderPlan(key){document.getElementById("planContent").innerHTML=plans[key].map(d=>`<article class="day-card"><strong>${d[0]}</strong><p>${d[1]}</p><div class="duration">${d[2]}</div></article>`).join("")}
function renderExercises(filter="all"){const list=filter==="all"?exercises:exercises.filter(x=>x[1]===filter);document.getElementById("exerciseGrid").innerHTML=list.map(x=>card(x[0],x[2],x[3],x[4],x[1])).join("")}
function renderYoga(){document.getElementById("yogaGrid").innerHTML=yoga.map(x=>card(x[0],x[1],x[2],x[3])).join("")}
document.getElementById("planSelect").addEventListener("change",e=>renderPlan(e.target.value));document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderExercises(b.dataset.filter)}));renderPlan("gentle");renderExercises();renderYoga();
