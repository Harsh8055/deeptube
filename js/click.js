const homepage = document.getElementById("homepage");
const changingdiv = document.getElementById("changingdiv");
const webdev = document.getElementById("webdev");
const web3dev = document.getElementById("web3dev");
const appdev = document.getElementById("appdev");
const dsa = document.getElementById("dsa");
const homepagecontainer = document.getElementById("homepagecontainer");

function webdevpage() {

    let html = ` 
   
    <div class="flex glass flex-wrap -m-4 my-2" id="webdevcontainer">
    <div class="mx-10 my-4 glass p-2 md:w-1/4" id="frontend">
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
          src="img/website.svg"
          alt="blog"
          
        />
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
            CATEGORY
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
            The Catalyzer
          </h1>
          <p class="leading-relaxed mb-3">
            Photo booth
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
          src="img/website.svg"
          alt="blog"
        />
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
            CATEGORY
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
            The 400 Blows
          </h1>
          <p class="leading-relaxed mb-3">
            Photo booth fam kin
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
              class="btn btn-primary glass text-black">
              Complete Web Dev Roadmap </a>
              <a target="_blank" href="https://www.freecodecamp.org/news/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c/" class="btn btn-primary glass text-black m-2"> How web Works (blog)</a>

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
          src="img/website.svg"
          alt="blog"
          
        />
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
            CATEGORY
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
            The Catalyzer
          </h1>
          <p class="leading-relaxed mb-3">
            Photo booth
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
          src="img/website.svg"
          alt="blog"
        />
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
            CATEGORY
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
            The 400 Blows
          </h1>
          <p class="leading-relaxed mb-3">
            Photo booth fam kin
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
                      src="img/website.svg"
                      alt="blog"
                      
                    />
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
                        CATEGORY
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
                        The Catalyzer
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Photo booth
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
                      overflow-hidden
                    "
                  >
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="img/website.svg"
                      alt="blog"
                    />
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
                        CATEGORY
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
                        The 400 Blows
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Photo booth fam kin
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
function dsapage() {

    let html = ` 
   
            <div class="flex glass flex-wrap -m-4 my-2" id="dsacontainer">
              <div class="homepage1 mx-10 my-4 glass md:w-1/4" id="frontend">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="img/website.svg" alt="blog">
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div class="flex items-center flex-wrap ">
                      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="backend" class="homepage1 mx-10 my-4 glass md:w-1/4">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="img/website.svg" alt="blog">
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div class="flex items-center flex-wrap">
                      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
             

                 </div>

    
    `
    homepagecontainer.removeChild(changingdiv);
    homepagecontainer.innerHTML = html;

}


webdev.addEventListener("click", webdevpage)
web3dev.addEventListener("click", web3devpage)
appdev.addEventListener("click", appdevpage)
dsa.addEventListener("click", dsapage)


