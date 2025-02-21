var posts=["2025/02/21/binary-search-review/","2025/02/02/hello-world/","2025/02/03/my-first-article/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };