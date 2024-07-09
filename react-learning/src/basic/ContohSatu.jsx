import React from "react";

function Buton() {
    const[clicks, setClicks] = React.useState(0);
    
    function handleClick(){
        setClicks(clicks + 1);
        console.log("Tombol di klik !");
    }

    return (
        <div>
            <button onClick={handleClick}>
                Klik Saya
            </button>
            <p>jumlah klik {clicks}</p>
        </div>
    )

}

export default Buton;