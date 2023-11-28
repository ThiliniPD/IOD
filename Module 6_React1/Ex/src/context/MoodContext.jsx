import { useState, useContext, createContext } from "react";

// 1. Create the context
const EmojiContext = createContext();

// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const MoodProvider = (props) => {
  let emojiImg = ["./Emoji-happy-face.jpg", "./Emoji-sad-face.jpg"]
  // store the current user in state at the top level
  const [currentMood, setCurrentMood] = useState(emojiImg[0]);

  // sets user object in state, shared via context
  const handleUpdateMood = (mood) => {
    setCurrentMood(mood);
  };

  // 2. Provide the context.
  // The Provider component of any context (UserContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current user and an update function
  return (
    <EmojiContext.Provider value={{ mood:currentMood, setMood:handleUpdateMood, emojiImg }}>
      {props.children}
    </EmojiContext.Provider>
  );
};

// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useEmojiContext = () => {
  return useContext(EmojiContext);
};