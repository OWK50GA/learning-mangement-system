const GettingStarted = () => {
    return ( 
        <div className="dark:text-white">
            <h1 className="text-blue text-2xl underline">Get Familiar With the LMS</h1>

            <div className="text-base w-11/12 md:text-xl pt-3 flex flex-wrap">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p> 
                    Dignissimos tenetur dolor impedit assumenda nulla quaerat laudantium <br />
                    odio enim exercitationem consequuntur voluptatum omnis dolore rerum <br />
                    ea iure, velit vel reiciendis! Iure repellat modi officia non expedita
                    molestias reiciendis autem rerum quos.
                </p>
            </div>
            
            <div className="video pt-24 hidden md:block">
                <p className="pre-video-text mb-4">Watch the video below to get started</p>
                <iframe
                    className="" 
                    width="600" 
                    height="400" 
                    src="https://www.youtube.com/embed/y_GfaSCNlkk?si=hLmkIcdJopR5fUJj" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>
            <a href="https://www.youtube.com/embed/y_GfaSCNlkk?si=hLmkIcdJopR5fUJj" className="md:hidden">Watch Tutorial</a>
        </div>
     );
}
 
export default GettingStarted;