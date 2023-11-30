function mainBlog() {
  const main = document.createElement('main');
  const mainBlog = document.createElement('div');
  const blogPage = document.createElement('div');


  blogPage.classList.add('blog-page')
  mainBlog.classList.add('main-blog')

  console.log(555);

  mainBlog.append(blogPage)
  main.append(mainBlog)
  return main
}

mainBlog()
