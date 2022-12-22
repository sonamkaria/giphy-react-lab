import React from "react";

const GiphyDisplay = ({ giphy }) => {


    function refreshPage() {
        window.location.reload(false);
      }
    return (
        <>
            <h1>Giphy Data</h1>
            <img src={giphy?.images.preview_gif.url} />
            <button onClick={refreshPage}>Click to reload!</button>

        </>

    )
};

export default GiphyDisplay;