"use client";
import {useState, useEffect} from 'react';



const ChangingText = () => {
    const changingTextList:string[] = [
        "Software Engineer",
        "Founder",  "Traveller", "Hiker",
    ]
    const [shownText, setShownText] = useState(changingTextList[0]);
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState("fade-in");

    useEffect(() => {
        const interval = setInterval(() => {
            updateShownText();
        }, 4000); // this will change the text every 3 seconds

        return () => clearInterval(interval) // cleanup interval on component unmount
    }, [index]); // when the index changes, re-run the effect 

    function updateShownText() {
        setFade("fade-out");
        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % changingTextList.length); // add index by 1 until it reaches last element, wrap around
            setShownText(changingTextList[(index + 1) % changingTextList.length]); // set the shown text to this index in the list
            setFade("fade-in");
        }, 1000) // one second as that is the length of our fade-in-out animations
       
    }

    return (
        <div className="text-center space-y-8">
            <div className="font-montserrat text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                AKA
            </div>
            <div className={`font-montserrat text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-yellow-300 ${fade}`}>
                {shownText}
            </div>
        </div>
    );

}

export default ChangingText;