import { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Blog(){

      const [posts, setPosts] = useState([]);
      const [postagem, setPostagem] = useState({});
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            fetch(`https://api-fake-blog.onrender.com/postagens`, {
                  method: "GET",
                  headers: {
                        'Content-Type': 'application/json'
                  }
            }).then(resp => resp.json())
              .then(data => {
                  setPosts(data);
                  setPostagem(data[0]);
                  setLoading(false);
            })
              .catch(err => console.error(err));
      }, []);
      
      function showPost(post){
            document.getElementById("postagens").style.display = "none";
            document.getElementById("postagem").style.display = "block";
            setPostagem(post);
      }

      function homePage(){
            document.getElementById("postagem").style.display = "none";
            document.getElementById("postagens").style.display = "block";
      }
      
      if(loading){
            return <div className="bg-dark text-light p-3">Aguarde... Isso pode levar alguns segundos</div>
      }

      return(<body className="bg-dark">
      
            <nav className="navbar navbar-expand bg-dark navbar-dark position-fixed w-100" id="blogNavbar">
                  <div className="container">
                        <a href="#space-top" className="navbar-brand" onClick={homePage}>MiniBlog</a>
                        <ul className="navbar-nav gap-4">
                              <li className="nav-item">
                                    <a href="#" className="nav-link active">Home</a>
                              </li>
                              <li className="nav-item">
                                    <a href="#" className="nav-link">Postagens</a>
                              </li>
                              <li className="nav-item">
                                    <a href="#" className="nav-link">Sobre nós</a>
                              </li>
                              <li className="nav-item">
                                    <a href="#" className="nav-link">Futebol</a>
                              </li>
                        </ul>
                  </div>
            </nav>
            <div id="space-top"></div>
            <section className="container bg-light px-5" id="postagens">
                  <div className="py-2 px-lg-5">
                        <h1 className="py-3">{posts[0].title}</h1>
                        <div className="row">
                              <div className="col-lg-6 my-3">
                                    <h3 className="h6">Publicado em: {posts[0].postDate}</h3>
                                    <img className="img-fluid" src={posts[0].thumbImage} alt={posts[0].thumbImageAltText}></img>
                              </div>
                              <div className="col-lg-6">
                                    <br/>
                                    <p>{posts[0].description}</p>
                                    <a className="btn btn-primary"  href="#space-top" onClick={() => showPost(posts[0])}>Ler mais</a><br></br>
                                    <h3 className="h5">{posts[0].profileName}</h3>
                                    <img class="img-fluid" alt="profileImage" src={posts[0].profileThumbImage}></img>
                              </div>
                        </div>
                  </div>
                  <div className="row px-lg-5 blogCards">
                        <div className="col-lg-6 mt-5">
                              <div className="card h-100">
                                    <img className="card-img" src={posts[1].thumbImage} alt={posts[1].thumbImageAltText}></img>
                                    <div className="card-body p-4">
                                          <h2 className="h4">{posts[1].title}</h2>
                                          <h3 className="h6">Publicado em: {posts[1].postDate}</h3>
                                          <hr/>
                                          <p>{posts[1].description}</p>
                                          <a className="btn btn-primary" href="#space-top" onClick={() => showPost(posts[1])}>Ler mais</a>
                                    </div>
                                    <div className="card-footer">
                                          <h3 className="h5">{posts[1].profileName}</h3>
                                          <img class="img-fluid" alt="profileImage" src={posts[1].profileThumbImage}></img>
                                    </div>
                              </div>
                        </div>
                        <div className="col-lg-6 mt-5">
                              <div className="card h-100">
                                    <img className="card-img" src={posts[2].thumbImage} alt={posts[2].thumbImageAltText}></img>
                                    <div className="card-body p-4">
                                          <h2 className="h4">{posts[2].title}</h2>
                                          <h3 className="h6">Publicado em: {posts[2].postDate}</h3>
                                          <hr/>
                                          <p>{posts[2].description}</p>
                                          <a className="btn btn-primary"  href="#space-top" onClick={() => showPost(posts[2])}>Ler mais</a>
                                    </div>
                                    <div className="card-footer">
                                          <h3 className="h5">{posts[2].profileName}</h3>
                                          <img class="img-fluid" alt="profileImage" src={posts[2].profileThumbImage}></img>
                                    </div>
                              </div>
                        </div>
                        <div className="col-lg-6 mt-5">
                              <div className="card h-100">
                                    <img className="card-img" src={posts[3].thumbImage} alt={posts[3].thumbImageAltText}></img>
                                    <div className="card-body p-4">
                                          <h2 className="h4">{posts[3].title}</h2>
                                          <h3 className="h6">Publicado em: {posts[3].postDate}</h3>
                                          <hr/>
                                          <p>{posts[3].description}</p>
                                          <a className="btn btn-primary"  href="#space-top" onClick={() => showPost(posts[3])}>Ler mais</a>
                                    </div>
                                    <div className="card-footer">
                                          <h3 className="h5">{posts[3].profileName}</h3>
                                          <img class="img-fluid" alt="profileImage" src={posts[3].profileThumbImage}></img>
                                    </div>
                              </div>
                        </div>
                        <div className="col-lg-6 mt-5">
                              <div className="card h-100">
                                    <img className="card-img" src={posts[4].thumbImage} alt={posts[4].thumbImageAltText}></img>
                                    <div className="card-body p-4">
                                          <h2 className="h4">{posts[4].title}</h2>
                                          <h3 className="h6">Publicado em: {posts[4].postDate}</h3>
                                          <hr/>
                                          <p>{posts[4].description}</p>
                                          <a className="btn btn-primary"  href="#space-top" onClick={() => showPost(posts[4])}>Ler mais</a>
                                    </div>
                                    <div className="card-footer">
                                          <h3 className="h5">{posts[4].profileName}</h3>
                                          <img class="img-fluid" alt="profileImage" src={posts[4].profileThumbImage}></img>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="py-5 px-lg-5">
                        <div className="row">
                              <h1 className="py-3">{posts[5].title}</h1>
                              <div className="col-lg-6">
                                    <br/>
                                    <p>{posts[5].description}</p>
                                    <a className="btn btn-primary"  href="#space-top" onClick={() => showPost(posts[5])}>Ler mais</a><br></br>
                                    <h3 className="h5">{posts[5].profileName}</h3>
                                    <img class="img-fluid" alt="profileImage" src={posts[5].profileThumbImage}></img>
                              </div>
                              <div className="col-md-6">
                                    <h3 className="h6">Publicado em: {posts[5].postDate}</h3>
                                    <img className="img-fluid" src={posts[5].thumbImage} alt={posts[5].thumbImageAltText}></img>
                              </div>
                        </div>
                  </div>
            </section>
            <div className="container bg-light px-lg" id="postagem">
                        <h1 className="py-3">{postagem.title}</h1>
                        <h3 className="h6">Publicado em: {postagem.postDate}</h3>
                        <img className="img-fluid" src={postagem.thumbImage} alt={postagem.thumbImageAltText}></img>
                        <p class="mt-4">{postagem.description}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et nostrum soluta distinctio fugit voluptates! Assumenda consequatur ad, reprehenderit eum ullam suscipit, ea accusamus nihil ipsam corrupti, sunt sint et. Ratione possimus fuga magni, natus facere distinctio explicabo dicta cum quod qui quibusdam esse? Corporis iste nam facere at vitae ducimus, sequi fugit beatae perspiciatis ea ullam maiores ipsam dignissimos?</p>
                        <img class="img-fluid" alt="profileImage" src={postagem.profileThumbImage}></img>
                        <h3 className="h5 py-5">{postagem.profileName}</h3>
            </div>
            <footer class="py-5 container">
                  <h2 class="text-light h5">Copyright©2024-MiniBlog</h2>
            </footer>
      </body>);
}

export default Blog;