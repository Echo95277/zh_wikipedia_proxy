export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = "en.wikipedia.org";
 
    console.log('Accessing URL:', url.href);
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}
