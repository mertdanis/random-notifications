import { React } from "react";
import { Howl, Howler } from "howler";
import notificationSound from "../audio/1.mp3";
import { useEffect } from "react";
const soundSrc = notificationSound;
function Audio({ content }) {
  const getNotfSound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
      onend: () => {
        sound.unload();
      },
    });
    sound.play();
  };

  useEffect(() => {
    getNotfSound(soundSrc);
    console.log("content");
  }, [content.length]);
}

export default Audio;
