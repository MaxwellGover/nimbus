const SAVE_SONG_PATH = 'SAVE_SONG_PATH';
const SAVE_VIDEO_PATH = 'SAVE_VIDEO_PATH';
const SAVE_VIDEO_DOWNLOAD_URL = 'SAVE_VIDEO_DOWNLOAD_URL';
const REMOVE_VIDEO_PATH = 'REMOVE_VIDEO_PATH';

export function saveSongPath (songPath) {
  console.log(songPath);
  return {
    type: SAVE_SONG_PATH,
    songPath
  }
};

export function saveVideoPath (videoPath) {
  console.log('video path', videoPath);
  return {
    type: SAVE_VIDEO_PATH,
    videoPath
  }
};

export function removeVideoPath () {
  return {
    type: REMOVE_VIDEO_PATH
  }
}

export function saveVideoDownloadURL (url) {
  console.log(url)
  return {
    type: SAVE_VIDEO_DOWNLOAD_URL,
    url
  }
};

const initialState = {
  songDownloadURL: '',
  videoPathOnDevice: '',
  videoDownloadURL: ''
};

export default function preview (state = initialState, action) {
  switch (action.type) {
    case SAVE_SONG_PATH:
      return {
        ...state,
        songDownloadURL: action.songPath
      }
    case SAVE_VIDEO_PATH:
      return {
        ...state,
        videoPathOnDevice: action.videoPath
      }
    case SAVE_VIDEO_DOWNLOAD_URL:
      return {
        ...state,
        videoDownloadURL: action.url
      }
    case REMOVE_VIDEO_PATH:
      return {
        ...state,
        videoPathOnDevice: ''
      }
    default:
      return state
  }
}
