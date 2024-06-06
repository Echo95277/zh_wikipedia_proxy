// export default {
//   async fetch(request, env) {
//     const url = new URL(request.url);
//     url.host = "wikipedia.org";
 
//     console.log('Accessing URL:', url.href);
//     return fetch(url, {
//       headers: request.headers,
//       method: request.method,
//       body: request.body,
//       redirect: 'follow'
//     });
//   }
// }
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Parse the parameters from the URL
    const params = new URLSearchParams(url.search);
    const redirectUrl = params.get('u'); // Get the 'u' parameter
    
    if (redirectUrl) {
      const redirectHost = new URL(redirectUrl).host;
      
      // Modify the host based on the 'u' parameter
      url.host = redirectHost;
    }
    
    console.log('Accessing URL:', url.href); // Output the accessed URL
    
    // openai is already set all CORS headers
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}
