const RSS_URL = "https://blog.teddyteh.com/feed.xml";

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    const blogBaseUrl = data.querySelectorAll("link")[1].getAttribute("href");
    if (blogBaseUrl) {
        $("#blogBaseUrl").attr("href", blogBaseUrl);
    }

    const latestEntry = data.querySelectorAll("entry")[0];
    if (latestEntry) {
        const title = latestEntry.querySelector("title").innerHTML;
        const link = latestEntry.querySelector("link").getAttribute("href");
        
        $("#latestBlogPost").text(title);
        $("#latestBlogPost").attr("href", link);
    }
  });