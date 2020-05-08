import React from "react";


const ErrorArticleView = () => {
   
    var searchInput = document.getElementById("search-field")

    return(
            <div className="errorview">
                <img src="https://pbs.twimg.com/media/DjCVuEWUYAAoqk2.jpg" alt="Åh nej :("/>
                <div>
                    No results found for "{searchInput ? searchInput.value : ""}"
                </div>
            </div>
    )
    
}
export default ErrorArticleView;