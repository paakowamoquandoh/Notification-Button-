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
        icon: "me.png"
      })
      myFirstNotif.addEventListener("close", e =>{
        // alert("well done!!!!!!!")
      })
    }
  })
})