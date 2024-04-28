import { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";

function Blog(){

      const [posts, setPosts] = useState([]);
      const [postagem, setPostagem] = useState({});
      const [profileImg, setProfileImg] = useState("");
      const [postImg, setPostImg] = useState("");
      const [loading, setLoading] = useState(true);

      const perfilImgs = ["https://randomuser.me/api/portraits/men/12.jpg", "https://randomuser.me/api/portraits/women/12.jpg", "https://randomuser.me/api/portraits/men/13.jpg", "https://randomuser.me/api/portraits/men/14.jpg", "https://randomuser.me/api/portraits/women/13.jpg", "https://randomuser.me/api/portraits/women/14.jpg"];
      
      const blogImgs = ["https://picsum.photos/500/280?random=1", "https://picsum.photos/500/280?random=2", "https://picsum.photos/500/280?random=3" , "https://picsum.photos/500/280?random=4", "https://picsum.photos/500/280?random=5", "https://picsum.photos/500/280?random=6"]

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
                  setProfileImg(perfilImgs[0]);
                  setPostImg(blogImgs[0]);
                  setLoading(false);
            })
              .catch(err => console.error(err));
      }, []);
      
      function showPost(post){
            document.getElementById("postagens").style.display = "none";
            document.getElementById("postagem").style.display = "block";
            setPostagem(post);
            let postIndex = (posts.indexOf(post));
            switch(postIndex){
                  case 0: setProfileImg(perfilImgs[0]); 
                          setPostImg(blogImgs[0]);
                          break;
                  case 1: setProfileImg(perfilImgs[1]); 
                          setPostImg(blogImgs[1]);
                          break;
                  case 2: setProfileImg(perfilImgs[2]); 
                          setPostImg(blogImgs[2]);
                          break;
                  case 3: setProfileImg(perfilImgs[3]); 
                          setPostImg(blogImgs[3]);
                          break;
                  case 4: setProfileImg(perfilImgs[4]); 
                          setPostImg(blogImgs[4]);
                          break;
                  case 5: setProfileImg(perfilImgs[5]); 
                          setPostImg(blogImgs[5]);
                          break;
            }
      }

      function homePage(){
            document.getElementById("postagem").style.display = "none";
            document.getElementById("postagens").style.display = "block";
      }
      
      if(loading){
            return <div className="bg-dark text-light p-3">Aguarde... Isso pode levar alguns segundos... Blog feito em REACT</div>
      }

      return(<body className="bg-dark">
      
            <nav className="navbar navbar-expand-md bg-dark navbar-dark position-fixed w-100" id="blogNavbar">
                  <div className="container">
                        <a href="#space-top" className="navbar-brand" onClick={homePage}>MiniBlog</a>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse p-2" id="nav">
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
                  </div>
            </nav>
            <div id="space-top"></div>
            <section className="container bg-light px-5" id="postagens">
                  <div className="py-2 px-lg-5">
                        <h1 className="py-3">{posts[0].title}</h1>
                        <div className="row">
                              <div className="col-lg-6 my-3">
                                    <h3 className="h6">Publicado em: {posts[0].postDate}</h3>
                                    <img className="img-fluid" src={blogImgs[0]} alt={posts[0].thumbImageAltText}></img>
                              </div>
                              <div className="col-lg-6">
                                    <br/>
                                    <p>{posts[0].description}</p>
                                    <a className="btn btn-primary rounded-0 mb-2"  href="#space-top" onClick={() => showPost(posts[0])}>Ler mais</a><br></br>
                                    <h3 className="h5">{posts[0].profileName}</h3>
                                    <img class="img-fluid profileImg" alt="profileImage" src={perfilImgs[0]}></img>
                              </div>
                        </div>
                  </div>
                  <div className="row px-lg-5 blogCards">
                        <div className="col-lg-6 mt-5">
                              <div className="card h-100">
                                    <img className="card-img" src={blogImgs[1]} alt={posts[1].thumbImageAltText}></img>
                                    <div className="card-body p-4">
                                          <h2 className="h4">{posts[1].title}</h2>
                                          <h3 className="h6">Publicado em: {posts[1].postDate}</h3>
                                          <hr/>
                                          <p>{posts[1].description}</p>
                                          <a className="btn btn-primary" href="#space-top" onClick={() => showPost(posts[1])}>Ler mais</a>
                                    </div>
                                    <div className="card-footer">
                                          <h3 className="h5">{posts[1].profileName}</h3>
                                          <img class="img-fluid profileImg" alt="profileImage" src={perfilImgs[1]}></img>
                                    </div>
                              </div>
                        </div>
                        <div className="col-lg-6 mt-5">
                              <div className="card h-100">
                                    <img className="card-img" src={blogImgs[2]} alt={posts[2].thumbImageAltText}></img>
                                    <div className="card-body p-4">
                                          <h2 className="h4">{posts[2].title}</h2>
                                          <h3 className="h6">Publicado em: {posts[2].postDate}</h3>
                                          <hr/>
                                          <p>{posts[2].description}</p>
                                          <a className="btn btn-primary"  href="#space-top" onClick={() => showPost(posts[2])}>Ler mais</a>
                                    </div>
                                    <div className="card-footer">
                                          <h3 className="h5">{posts[2].profileName}</h3>
                                          <img class="img-fluid profileImg" alt="profileImage" src={perfilImgs[2]}></img>
                                    </div>
                              </div>
                        </div>
                        <div className="col-lg-6 mt-5">
                              <div className="card h-100">
                                    <img className="card-img" src={blogImgs[3]} alt={posts[3].thumbImageAltText}></img>
                                    <div className="card-body p-4">
                                          <h2 className="h4">{posts[3].title}</h2>
                                          <h3 className="h6">Publicado em: {posts[3].postDate}</h3>
                                          <hr/>
                                          <p>{posts[3].description}</p>
                                          <a className="btn btn-primary"  href="#space-top" onClick={() => showPost(posts[3])}>Ler mais</a>
                                    </div>
                                    <div className="card-footer">
                                          <h3 className="h5">{posts[3].profileName}</h3>
                                          <img class="img-fluid profileImg" alt="profileImage" src={perfilImgs[3]}></img>
                                    </div>
                              </div>
                        </div>
                        <div className="col-lg-6 mt-5">
                              <div className="card h-100">
                                    <img className="card-img" src={blogImgs[4]} alt={posts[4].thumbImageAltText}></img>
                                    <div className="card-body p-4">
                                          <h2 className="h4">{posts[4].title}</h2>
                                          <h3 className="h6">Publicado em: {posts[4].postDate}</h3>
                                          <hr/>
                                          <p>{posts[4].description}</p>
                                          <a className="btn btn-primary"  href="#space-top" onClick={() => showPost(posts[4])}>Ler mais</a>
                                    </div>
                                    <div className="card-footer">
                                          <h3 className="h5">{posts[4].profileName}</h3>
                                          <img class="img-fluid profileImg" alt="profileImage" src={perfilImgs[4]}></img>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="py-5 px-lg-5">
                        <div className="row">
                              <h2 className="h1 py-3">{posts[5].title}</h2>
                              <div className="col-lg-6">
                                    <br/>
                                    <p>{posts[5].description}</p>
                                    <a className="btn btn-primary rounded-0 mb-2"  href="#space-top" onClick={() => showPost(posts[5])}>Ler mais</a><br></br>
                                    <h3 className="h5">{posts[5].profileName}</h3>
                                    <img className="img-fluid profileImg" src={perfilImgs[5]} alt={posts[5].thumbImageAltText}></img>
                              </div>
                              <div className="col-md-6">
                                    <h3 className="h6">Publicado em: {posts[5].postDate}</h3>
                                    <img className="img-fluid" src={blogImgs[5]} alt={posts[5].thumbImageAltText}></img>
                              </div>
                        </div>
                  </div>
            </section>
            <div className="container bg-light px-5" id="postagem">
                  <div className="container px-md-5">
                        <h2 className="h1 py-3">{postagem.title}</h2>
                        <h3 className="h5">Publicado em: {postagem.postDate}</h3>
                        <img className="img-fluid postagemImg" src={postImg} alt={postagem.thumbImageAltText}></img>
                        <p class="mt-4 lead">{postagem.description}</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et nostrum soluta distinctio fugit voluptates! Assumenda consequatur ad, reprehenderit eum ullam suscipit, ea accusamus nihil ipsam corrupti, sunt sint et. Ratione possimus fuga magni, natus facere distinctio explicabo dicta cum quod qui quibusdam esse? Corporis iste nam facere at vitae ducimus, sequi fugit beatae perspiciatis ea ullam maiores ipsam dignissimos?</p>
                        <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi qui labore in laborum reprehenderit blanditiis, numquam accusantium! Similique maxime provident accusantium numquam quos iure consectetur dignissimos quam? Ea provident quaerat cum vitae sed quidem? Delectus hic quidem tempore! Error, labore.</p>
                        <img class="img-fluid profileImg" alt="profileImage" src={profileImg}></img>
                        <h3 className="h5 pb-5">{postagem.profileName}</h3>
                  </div>
            </div>
            <footer class="py-5 container text-light">
                  <div className="row">
                        <div className="col-md-6">
                              <h2 class="h5">Copyright©2024-MiniBlog</h2>
                        </div>
                  </div>
            </footer>
      </body>);
}

export default Blog;