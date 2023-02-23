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
    setInterval(() => {
      secondNotif = new Notification("You left??", {
        boby: `Hope you come back soon youve been gone for ${Math.round(new Date() - howlongGone) / 1000 } seconds`,
        tag: "Get Back"
      })
    }, 300);
  } else {
    secondNotif.close()
  }
})