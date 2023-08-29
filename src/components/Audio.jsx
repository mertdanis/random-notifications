import { Howl } from "howler";

export const getNotfSound = (src) => {
  const sound = new Howl({
    src,
    html5: true,
    onend: () => {
      sound.unload();
    },
  });
  sound.play();
};
