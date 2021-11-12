const homepage = document.getElementById("homepage");
const changingdiv = document.getElementById("changingdiv");
const webdev = document.getElementById("webdev");
const web3dev = document.getElementById("web3dev");
const appdev = document.getElementById("appdev");
const dsa = document.getElementById("dsa");
const homepagecontainer = document.getElementById("homepagecontainer");
const frontend = document.getElementById("frontend");
const webdevcontainer = document.getElementById("webdevcontainer");



function webdevpage() {

    let html = ` 
    <div class="flex glass flex-wrap -m-4 my-2" id="webdevcontainer">
                <div class="mx-10 my-4 glass p-2 md:w-1/4" onclick="frontendpage()" id="frontend">
                  <div
                    class="
                      h-full
                      border-2 border-gray-200 border-opacity-60
                      roundglass
                      overflow-hidden
                    "
                  >
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="img/frontend.svg"
                      alt="blog"
                      
                    />
                    <div class="p-6">
                  
                      <h1
                        class="
                          title-font
                          text-lg
                          font-medium
                          text-gray-900
                          mb-3
                        "
                      >
                        Frontend
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Frontend Dev Resources
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div id="backend" class="mx-10 my-4 glass p-2 md:w-1/4">
                  <div
                    class="
                      h-full
                      border-2 border-gray-200 border-opacity-60
                      roundglass
                      overflow-hidden
                    "
                  >
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="img/backend.svg"
                      alt="blog"
                    />
                    <div class="p-6">
                  
                      <h1
                        class="
                          title-font
                          text-lg
                          font-medium
                          text-gray-900
                          mb-3
                        "
                      >
                        Backend
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Backend Development
                      </p>
                     
                    </div>
                  </div>
                </div>
                
                  <h1
                    class="
                      md:w-full
                      sm:w-full
                      lg:w-full
                      text-3xl text-center
                      glass2
                      text-black
                      font-weight-bold
                      mb-5
                      p-3
                    "
                  >
                    Roadmap for Web Development
                  </h1>
                
                <div id="roadmapwebdev"
                  class="
                    mx-10
                    sm:mx-2
                    sm:my-2
                    my-4
                    glass
                    md:w-1/2 md:h-96
                    lg:h-96
                    sm:w-full sm:h-96
                    lg:w-1/2
                  "
                >
                  <div
                    class="
                      h-full
                      border-2 border-gray-200 border-opacity-60
                      rounded-lg
                      overflow-hidden
                    "
                  >
                    <iframe
                    
                      class=" h-full w-full lg:h-full lg:w-full roundglass"
                      src="https://www.youtube.com/embed/N6Nq62z2C6c"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>

                <div id="linksandresources" 
                class="mx-10 my-4 glass md:w-1/3">
                  <div
                    class="
                      lg:h-full 
                      border-2 border-gray-200 border-opacity-60
                      roundglass 
                      overflow-hidden
                    "
                  >
                    <div class="p-6">
                      <h2
                        class="
                          tracking-widest
                          text-xs
                          title-font
                          font-medium
                          text-gray-400
                          mb-1
                        "
                      >
                        Roadmaps And Other Resources
                      </h2>

                      <h1
                        class="
                          title-font
                          text-lg
                          font-medium
                          text-gray-900
                          mb-3
                        "
                      >
                        Some Useful links
                      </h1>
                    <p class="leading-relaxed mb-3">
                        <a   
                         target="_blank"
                          href="https://docs.google.com/document/d/1jSGO9o5bji8cNcmVfj145wwZ0Kww54IteEvIHIaKJYk/edit?usp=sharing"
                          class="btn btn-primary my-2 glass 
                          lg:mx-4
                           mx-2 
                          text-black">
                          Complete Web Dev Roadmap </a>
                          <a target="_blank" href="https://www.freecodecamp.org/news/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c/" class="btn btn-primary glass text-black  lg:mx-8
                          md:mx-10 mx-4"> How web Works (blog)</a>

                        </p>
                     
                       
                      </div>
                    </div>

                  </div>
                  <div id="webworks"
                  class="
                   
                    glass
                    mx-12
                    lg:mx-2
                    my-2
                    
                    md:w-1/2 md:h-96
                    lg:h-96
                    sm:w-full
                    lg:w-1/2
                  "
                >
                  <div
                    class="
                      h-full
                      border-2 border-gray-200 border-opacity-60
                      rounded-lg
                      overflow-hidden
                     
                    "
                  >
                    <iframe width="560" height="315" class=" h-full w-full lg:h-full lg:w-full  roundglass" src="https://www.youtube.com/embed/hJHvdBlSxug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                  </div>
                </div>    
              </div>

    
    `
    homepagecontainer.removeChild(changingdiv);
    homepagecontainer.innerHTML = html;

}
function web3devpage() {

    let html = ` 
   
    <div class="flex glass flex-wrap -m-4 my-2" id="web3devcontainer">
    <div class="mx-10 my-4 glass p-2 md:w-1/4" id="theory">
      <div
        class="
          h-full
          border-2 border-gray-200 border-opacity-60
          roundglass
          overflow-hidden
        "
      >
        <img
          class="lg:h-48 md:h-36 w-full object-cover object-center"
          src="img/theoryblockchain.svg"
          alt="blog"
          
        />
        <div class="p-6">
          <h1
            class="
              title-font
              text-lg
              font-medium
              text-gray-900
              mb-3
            "
          >
            Blockchain
          </h1>
          <p class="leading-relaxed mb-3">
            Theory part of blockchain 
          </p>
        
        </div>
      </div>
    </div>
    <div id="backend" class="mx-10 my-4 glass p-2 md:w-1/4">
      <div
        class="
          h-full
          border-2 border-gray-200 border-opacity-60
          roundglass
          overflow-hidden
        "
      >
        <img
          class="lg:h-48 md:h-36 w-full object-cover object-center"
          src="img/coding.svg"
          alt="blog"
        />
        <div class="p-6">
         
          <h1
            class="
              title-font
              text-lg
              font-medium
              text-gray-900
              mb-3
            "
          >
            Smart Contract
          </h1>
          <p class="leading-relaxed mb-3">
          Smart Contract Develoment Resources
          </p>
         
        </div>
      </div>
    </div>
    
      <h1
        class="
          md:w-full
          sm:w-full
          lg:w-full
          text-3xl text-center
          glass2
          text-black
          font-weight-bold
          mb-5
          p-3
        "
      >
        Roadmap for Blockchain development 
      </h1>
    
    <div id="roadmapwebdev"
      class="
        mx-10
        sm:mx-2
        sm:my-2
        my-4
        glass
        md:w-1/2 md:h-96
        lg:h-96
        sm:w-full sm:h-96
        lg:w-1/2
      "
    >
      <div
        class="
          h-full
          border-2 border-gray-200 border-opacity-60
          rounded-lg
          overflow-hidden
        "
      >
      <iframe
        
          class=" h-full w-full lg:h-full lg:w-full roundglass"
          src="https://www.youtube.com/embed/3V3Gwq9LjEI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div id="linksandresources" 
    class="mx-10 my-4 glass md:w-1/3">
      <div
        class="
          lg:h-full 
          border-2 border-gray-200 border-opacity-60
          roundglass 
          overflow-hidden
        "
      >
        <div class="p-6">
          <h2
            class="
              tracking-widest
              text-xs
              title-font
              font-medium
              text-gray-400
              mb-1
            "
          >
            Roadmaps And Other Resources
          </h2>

          <h1
            class="
              title-font
              text-lg
              font-medium
              text-gray-900
              mb-3
            "
          >
            Some Useful links
          </h1>
          <p class="leading-relaxed mb-3">
              <center>
            <a 
             target="_blank"
              href="https://www.thesslstore.com/blog/what-is-blockchain-how-does-blockchain-work/"
              class="btn btn-primary glass text-black">
               Blockchain Roadmap </a>
              <br>
              <br>
              <a target="_blank" href="https://blog.goodaudience.com/blockchain-for-beginners-what-is-blockchain-519db8c6677a" class="btn btn-primary glass text-black m-2"> How blockchain Works</a>
              
              </center>

            </p>
         
           
          </div>
        </div>

      </div>
      <div id="webworks"
      class="
        mx-2
        my-4
        glass
        md:w-1/2 md:h-96
        lg:h-96
        sm:w-full
        lg:w-1/2
      "
    >
      <div
        class="
          h-full
          border-2 border-gray-200 border-opacity-60
          rounded-lg
          overflow-hidden
        "
      >
      <iframe width="560" height="315" class=" h-full w-full px-4 py-2 lg:h-full lg:w-full  roundglass" src="https://www.youtube.com/embed/hJHvdBlSxug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
    </div>
   
<!--             
   <div class="relative lg:w-1/2 sm:w-96 lg:mx-4 lg:my-4 lg:h-96">
  <div
    class="
      absolute
      inset-0
      w-full
      h-96
      object-cover
      roundglass
      object-center
      glass
      z-20
      px-4
      py-2
    "
  >
    <iframe
      width="610"
      height="380"
      class="responsive-iframe p-2 roundglass"
      src="https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  </div> -->



    
  </div>

    
    `
    homepagecontainer.removeChild(changingdiv);
    homepagecontainer.innerHTML = html;

}
function appdevpage() {

    let html = ` 
    <div class="flex glass flex-wrap -m-4 my-2" id="appdevcontainer">
                <div class="mx-10 my-4 glass p-2 md:w-1/4" id="android">
                  <div
                    class="
                      h-full
                      border-2 border-gray-200 border-opacity-60
                      roundglass
                      overflow-hidden
                    "
                  >
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="img/android.svg"
                      alt="blog"
                      
                    />
                    <div class="p-6">
                      <h1
                        class="
                          title-font
                          text-lg
                          font-medium
                          text-gray-900
                          mb-3
                        "
                      >
                        Android Development
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Android Development Resources
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div id="ios" class="mx-10 my-4 glass p-2 md:w-1/4">
                  <div
                      class="
                      h-full
                      border-2 border-gray-200 border-opacity-60
                      roundglass
                      overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="img/ios.svg"
                      alt="blog"
                    />
                    <div class="p-6">
                      <h1
                        class="
                          title-font
                          text-lg
                          font-medium
                          text-gray-900
                          mb-3
                        "
                      >
                        IOS Develoment
                      </h1>
                      <p class="leading-relaxed mb-3">
                        IOS Development Resources
                      </p>
                     
                    </div>
                  </div>
                </div>
                
                  <h1
                    class="
                      md:w-full
                      sm:w-full
                      lg:w-full
                      text-3xl text-center
                      glass2
                      text-black
                      font-weight-bold
                      mb-5
                      p-3
                    "
                  >
                    Roadmap for  Android development 
                  </h1>
                
                <div id="roadmapwebdev"
                  class="
                    mx-10
                    sm:mx-2
                    sm:my-2
                    my-4
                    glass
                    md:w-1/2 md:h-96
                    lg:h-96
                    sm:w-full sm:h-96
                    lg:w-1/2
                  "
                >
                  <div
                    class="
                      h-full
                      border-2 border-gray-200 border-opacity-60
                      rounded-lg
                      overflow-hidden
                    "
                  >
                    <iframe
                      width="560"
                      height=""
                      class="h-full w-full lg:h-full lg:w-full roundglass"
                      src="https://www.youtube.com/embed/M-jKKLK40hU"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>

                <div id="linksandresources" 
                class="mx-10 my-4 glass md:w-1/3">
                  <div
                    class="
                      lg:h-full 
                      border-2 border-gray-200 border-opacity-60
                      roundglass 
                      overflow-hidden
                    "
                  >
                    <div class="p-6">
                      <h2
                        class="
                          tracking-widest
                          text-xs
                          title-font
                          font-medium
                          text-gray-400
                          mb-1
                        "
                      >
                        Roadmaps And Other Resources
                      </h2>

                      <h1
                        class="
                          title-font
                          text-lg
                          font-medium
                          text-gray-900
                          mb-3
                        "
                      >
                        Some Useful links
                      </h1>
                      <p class="leading-relaxed mb-3">
                          <center>
                        <a 
                         target="_blank"
                          href="https://www.thesslstore.com/blog/what-is-blockchain-how-does-blockchain-work/"
                          class="btn btn-primary glass text-black">
                          Android dev blog </a>
                          <br>
                          <br>
                          <a target="_blank" href="https://blog.goodaudience.com/blockchain-for-beginners-what-is-blockchain-519db8c6677a" class="btn btn-primary glass text-black m-2"> Android roadmap</a>
                          
                          </center>
                          


                        </p>
                     
                       
                      </div>
                    </div>

                  </div>
                  <div id="webworks"
                  class="
                    mx-2
                    my-4
                    glass
                    md:w-1/2 md:h-96
                    lg:h-96
                    sm:w-full
                    lg:w-1/2
                  "
                >
                  <div
                    class="
                      h-full
                      border-2 border-gray-200 border-opacity-60
                      rounded-lg
                      overflow-hidden
                    "
                  >
                    <iframe width="560" height="315" class="h-full w-full lg:h-full lg:w-full roundglass px-4 py-2" src="https://www.youtube.com/embed/TnTn6e4Pfn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                  </div>
                </div>
               
<!--             
               <div class="relative lg:w-1/2 sm:w-96 lg:mx-4 lg:my-4 lg:h-96">
              <div
                class="
                  absolute
                  inset-0
                  w-full
                  h-96
                  object-cover
                  roundglass
                  object-center
                  glass
                  z-20
                  px-4
                  py-2
                "
              >
                <iframe
                  width="610"
                  height="380"
                  class="responsive-iframe p-2 roundglass"
                  src="https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              </div> -->
  

        
                
              </div>

    
    `
    homepagecontainer.removeChild(changingdiv);
    homepagecontainer.innerHTML = html;

}

function frontendpage(){
  console.log("it works");
  // opens page in new tab
  // window.open("frontend.html")  
  location.replace("frontend.html");

}


webdev.addEventListener("click", webdevpage)
web3dev.addEventListener("click", web3devpage)
appdev.addEventListener("click", appdevpage)


