import { useState } from "react";
import { useEmojiContext } from "../context/MoodContext";

function Emoji() {
    //let emojiImg = ["./Emoji-happy-face.jpg", "./Emoji-sad-face.jpg"]
    let emojiIndex = 0

    //const [mood, setMood] = useState('./Emoji-happy-face.jpg');

    const {mood, setMood, emojiImg} = useEmojiContext()

   // const handleUpdateMood = (mood) => {
   //     setMood('./Emoji-happy-face.jpg');
   //   };

    function handleMood(){
       emojiIndex = (emojiIndex + 1) % emojiImg.length;
       
       setMood(emojiImg[emojiIndex])
    }

    return(
        <div>
            <img src={mood} width="70px"/>
            <button className="ChangeMood" onClick={handleMood}>Change Mood</button>
        </div>
    )
}

export default Emoji