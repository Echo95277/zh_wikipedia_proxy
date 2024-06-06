export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Extract the subdomain from the host
    const subdomain = url.host.split('.')[0];
    
    // Check if the subdomain is 'zh' or 'en' and modify the host accordingly
    if (subdomain === 'zh' || subdomain === 'en') {
      url.host = subdomain + '.wikipedia.org';
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
