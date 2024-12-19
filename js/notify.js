// TODO: allow theme to modify the styles of the notification. Add css classes, etc. Move styles to css file

/**
 * Display a message notification at the bottom of the page and remove it after a timeout.
 *
 * @param {string} message 
 * @param {number} timeout in milliseconds (default: 3000ms)
 */
function notifyUser(message, timeout=3000) {
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.bottom = '0';
  notification.style.left = '0';
  notification.style.right = '0';
  notification.style.backgroundColor = 'black';
  notification.style.color = 'white';
  notification.style.padding = '1em';
  notification.style.textAlign = 'center';
  notification.style.zIndex = '9999';
  notification.innerText = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, timeout);
}
