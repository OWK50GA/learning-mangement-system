const DeptNews = () => {
    return ( 
        <div className="dept-news">
            <div className="news-pieces overflow-y-scroll max-h-80 dark:text-white">
                <div className="title py-2 bg-sky-400 px-3 uppercase dark:bg-slate-800">
                    <h1>Important News...</h1>
                </div>
                <div className="news-piece py-2 px-3 border-4 border-sky-400 dark:border-slate-800">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                </div>
                <div className="news-piece py-2 px-3 border-4 border-sky-400 dark:border-slate-800">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                </div>
                <div className="news-piece py-2 px-3 border-4 border-sky-400 dark:border-slate-800">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default DeptNews;