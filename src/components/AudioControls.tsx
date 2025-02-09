import * as React from "react";
import { PLAYLIST } from "../constants/staticConstants";
import play from "../assets/images/icons/play.png";
import pause from "../assets/images/icons/pause.png";
import next from "../assets/images/icons/fast-forward.png";
import prev from "../assets/images/icons/rewind.png";
import freetube from "../assets/images/icons/ftuA.png";
import { shuffleTracks, useAudio, strictMod } from "../constants/helpers";
import Marquee from "./Marquee";
import { AudioTrack } from "../types";

const AudioControls: React.FC = () => {
  const [playlist, setPlaylist] = React.useState<AudioTrack[]>(PLAYLIST);
  const [trackIndex, setTrackIndex] = React.useState<number>(0);
  const track = playlist[trackIndex];
  const [playing, ended, setPlaying] = useAudio(track.track);
  const [hasAutoplayed, setHasAutoplayed] = React.useState<boolean>(false);
  const [showCredits, setShowCredits] = React.useState<boolean>(false);

  const togglePlay = () => setPlaying(!playing);
  const nextTrack = () => setTrackIndex(strictMod(trackIndex + 1, playlist.length));
  const prevTrack = () => setTrackIndex(strictMod(trackIndex - 1, playlist.length));
  const toggleCredits = () => setShowCredits(!showCredits);

  React.useEffect(() => {
    setPlaylist(shuffleTracks(PLAYLIST));
  }, []);

  React.useEffect(() => {
    const autoplay = () => {
      if (!hasAutoplayed) {
        setPlaying(true);
        setHasAutoplayed(true);
      }
    }
    window.addEventListener("click", autoplay);
    return () => window.removeEventListener("click", autoplay);
  });

  React.useEffect(() => {
    if (ended) {
      nextTrack();
    }
  }, [ended]);

  return (
    <div className="audio-controls-container">
      <div className="audio-controls">
        <button type="button" className="show-credits-btn" onClick={toggleCredits}>
          <img src={freetube} alt="freetube" className="freetube" />
        </button>
        <Marquee text={`${track.title} - ${track.artist}`} className="track-info" paused={!playing} />
        <div className="audio-buttons">
          <button type="button" onClick={prevTrack}>
            <img src={prev} alt="prev track" />
          </button>
          <button type="button" onClick={togglePlay}>
            {playing
              ? <img src={pause} alt="pause" />
              : <img src={play} alt="play" />}
          </button>
          <button type="button" onClick={nextTrack}>
            <img src={next} alt="next track" />
          </button>
        </div>
      </div>
      <div className={`credits ${showCredits ? "" : "hidden"}`}>
        <p>
          "{track.title}" by {track.artist}
        </p>
        <p>
          Sourced from <a href="https://freemusicarchive.org/" target="_blank">Free Music Archive</a>
        </p>
        <p>
          Licensed under CC BY-NC
        </p>
      </div>
    </div>
  )
};

export default AudioControls;