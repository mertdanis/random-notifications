import { Howl } from "howler";
import notificationSound from "../../public/sound/1.mp3";
import { useEffect } from "react";

import { useData } from "../Context/MainContext";

const soundSrc = notificationSound;

function Audio({ content }) {
  const { data } = useData();

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
  }, [data.length]);
}

export default Audio;
