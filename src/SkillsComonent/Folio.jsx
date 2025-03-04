import './Folio.css';
import CreateShowText from './CreateShowText.jsx';
import ShowRanges from './ShowRanges.jsx';
import { useState, useEffect } from 'react';

export default function Folio() {
  let [showAccount, setShowAccount] = useState({ "HTML": 78, "CSS": 75, "BootStrap": 50, "JavaScript": 75, "React": 65 });
  let [showProficiency, setShowProficiency] = useState({ "NodeJs": 86, "ExpressJs": 95 });
  let [showLevel, setShowLevel] = useState({ "SQL": 23, "MongoDB": 83 });
  let [showLearn, setShowLearn] = useState({ "Git": 65, "GitHub": 29 });
  let [showAllTexts, setShowAllTexts] = useState({});
  let [activeBox, setActiveBox] = useState('Account');

  function handleShow(element) {
    if (element.target.id) {
      setActiveBox(element.target.id); // Set active box
      if (element.target.id === 'Account') {
        setShowAllTexts(showAccount);
      } else if (element.target.id === 'Proficiency') {
        setShowAllTexts(showProficiency);
      } else if (element.target.id === 'Level') {
        setShowAllTexts(showLevel);
      } else if (element.target.id === 'Learn') {
        setShowAllTexts(showLearn);
      }
    }
  }

  useEffect(() => {
    setShowAllTexts(showAccount);
    setActiveBox('Account');
  }, []);

  return (
    <div className="container-folio-big">
      <div className="container container-folio">
        <div className="grid-container">
          <button
            className={`box ${activeBox === 'Account' ? 'active' : ''}`} // Add active class
            id="Account"
            onClick={handleShow}
          >
            FrontEnd
          </button>

          <button
            className={`box ${activeBox === 'Proficiency' ? 'active' : ''}`} // Add active class
            id="Proficiency"
            onClick={handleShow}
          >
            Backend
          </button>
          <button
            className={`box ${activeBox === 'Level' ? 'active' : ''}`} // Add active class
            id="Level"
            onClick={handleShow}
          >
            Database
          </button>
          <button
            className={`box ${activeBox === 'Learn' ? 'active' : ''}`} // Add active class
            id="Learn"
            onClick={handleShow}
          >
            Tools
          </button>
        </div>

        <div className="rangeContainer">
          <div className="showTextInput">
            {
              Object.entries(showAllTexts).map(([key, value], index) => (
                <CreateShowText
                  key={index}
                  classWith="showText"
                  title={key}
                />
              ))
            }
          </div>
          <div className="ranges">
            {
              Object.entries(showAllTexts).map(([key, value], index) => (
                <ShowRanges key={index} textId={key} percentage={value} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
