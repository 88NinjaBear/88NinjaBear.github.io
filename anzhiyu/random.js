var posts=["2025/02/02/hello-world/","2025/02/03/My-first-article/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };