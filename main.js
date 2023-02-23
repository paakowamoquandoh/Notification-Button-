const sendNotification = document.querySelector(".button");


// sendNotification.addEventListener("click", function(){
//   Notification.requestPermission().then(great => {
//     alert(great)
//   })
// })

sendNotification.addEventListener("click", function(){
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      const myFirstNotif = new Notification("Example Notification", {
        body: "hey dude",
        data: {Asher: "Perfection"},
        icon: "me.png",
        // tag: "Warning Message"
      })
      myFirstNotif.addEventListener("close", e =>{
        // alert("well done!!!!!!!")
      })
    }
  })
})

let secondNotif;
let howlongGone;
document.addEventListener("visibilitychange", function(){
  if (document.visibilityState === "hidden") {
    const leaveTime = new Date();
    howlongGone = setInterval(() => { 
      secondNotif = new Notification("You left??", {
        boby: `Hope you come back soon youve been gone for ${Math.round(new Date() - leaveTime) / 1000 } seconds`,
        tag: "Get Back"
      })
    }, 3000);
  } else {
    if(howlongGone) clearInterval(howlongGone);
    if (secondNotif) secondNotif.close()
  }
})