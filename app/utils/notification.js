export default function notification(msg, tag) {
  console.log("HTML5 notifications util: “" + msg + "”");

  function permissionKnown() {
    console.log(typeof window.Notification.permission + " “" + window.Notification.permission + "”");
    if (window.Notification.permission === 'granted') {
      var n = new Notification(msg, {tag: tag, icon: 'assets/icon48.png', badge: 'assets/icon48.png'});
      console.log("notification result:"+n);
      setTimeout(n.close.bind(n), 10000);
    }
  }
  Notification.requestPermission(permissionKnown);   // use callback for LuneOS
}
