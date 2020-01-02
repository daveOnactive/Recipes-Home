import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/home.scss'

const InstallButton = () => {
  const btnRef = useRef(null)

  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;
    btnRef.current.style.display = 'block';
  });

  const install = () => {
    btnRef.current.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(result => {
      console.log(result.outcome);
      deferredPrompt = null;
    })
  }

  return (
    <div className="install-btn">
      <button type="button" onClick={install} ref={btnRef}>
      Add to Home Screen
      <span>
        <FontAwesomeIcon
          icon="plus-circle"
          color="#ffdd4b3"
        />
      </span>
    </button>
    </div>
  )
};

export default InstallButton;