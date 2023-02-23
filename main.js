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
document.addEventListener("visibilitychange", function(){
  if (document.visibilityState === "hidden") {
    secondNotif = new Notification("You left??", {
      boby: "Hope you come back soon",
      tag: "Get Back"
    })
  } else {
    // secondNotif.close()
  }
})