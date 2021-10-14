

let grid = document.querySelector('.grid')
let list = document.querySelector('.list')
let loader = document.querySelector('.loader')
let photos = document.querySelector('.photos')

list.addEventListener('click', ()=>{
    
    photos.classList.add('view')
})
grid.addEventListener('click', ()=>{
    photos.classList.remove('view')
})




let page = 1
async function getPhotos(){

   let api = `https://api.unsplash.com/photos?client_id=hJsaI6eEgQzbk__6XW-dsVPPa21msg9OkcuUdo0f244&&page=${page}`
   fetch(api)
   .then(result => result.json())
   .then((resultData) => {
        const data = resultData
        console.log(data)
        displayPhotos(data)
   })    
}



 function displayPhotos(data){
        data.forEach((element) => {
         if (element != null) {
             
            document.querySelector('.photos').innerHTML += `
                <div class="wrapper">
                    <div class="card-style">
                        <div class="user-img-wrap">
                           
                                <img class="user-img"  src="${element.user.profile_image.small}" alt="">
                                <h3 class="username">${element.user.name}</h3>
                        </div>
                        <main class="main-img-wrap">
                        <a href="${element.links.html}" target="_blank">
                                <img  class="main-img" src="${element.urls.regular}" alt="">
                        </a>
                            </main>
                            <footer>
                            <p class="likes"><span>${element.likes}</span>Likes</p>
                            <p class="downloads"><span>1256</span>Downloads</p>
                            <p><a href="">More info</a></p>
                        </footer>
                     </div> 
                </div>`
        }
     })
     
     }
 
  
    function showLoading(){
    loader.classList.add('active');
    setTimeout(getPhotos,1000)
    }

    function scrolling() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
     if(clientHeight + scrollTop >= scrollHeight - 1) {
      showLoading() 
        }
    }

    setTimeout(showLoading,1000)

    window.addEventListener('scroll', scrolling)






    


    
    
    
     
    






