
/**  
 * Returns the URL of the header element.
 * 
 * @param {HTMLElement} header - The header element to get the URL of.
 * @returns {string} The URL of the header element.
*/
function getUrlOfHeader(header) {
  // generate a URL for the current URL, but include the header id in the URL as a hash
  return window.location.href.split('#')[0] + '#' + header.id;
}

document.addEventListener('DOMContentLoaded', function() {
  // Decorate all headers with a link next to them, that when clicked, copies the URL of the headaer to the clipboard.
  // The link should be a small icon, or "#", that is hidden unless the user is hovering over the header
  const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headers.forEach(header => {
    const url = getUrlOfHeader(header);
    const link = document.createElement('a'); 
    link.href = url;
    link.innerText = '#';
    link.style.display = 'none';
    link.style.marginLeft = '1em';
    link.style.textDecoration = 'none';
    link.style.color = 'gray';
    link.style.fontSize = '0.8em';
    link.style.cursor = 'pointer';
    link.addEventListener('click', function(event) {
      event.preventDefault();
      navigator.clipboard.writeText(url);
    });
    header.appendChild(link);
    header.addEventListener('mouseenter', function() {
      link.style.display = 'inline';
    });
    header.addEventListener('mouseleave', function() {
      link.style.display = 'none';
    });
  })
})
