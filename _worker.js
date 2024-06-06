export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Extract the subdomain from the host
    const parts = url.host.split('.');
    let subdomain = parts.length > 2 ? parts[0] : ''; // Extract the subdomain if it exists
    
    // Check if the subdomain is not 'wikipedia' and modify the host accordingly
    if (subdomain !== 'wikipedia') {
      url.host = (subdomain ? subdomain + '.' : '') + 'wikipedia.org';
    }
    
    // openai is already set all CORS headers
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}
