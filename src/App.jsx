import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './vite.svg'
import './App.css'
import charlieImg from '../assets/charlie.png'
import barnardImg from '../assets/B33.png'
import lucyImg from '../assets/Lucy.png'   // Importing images for the cards

const cards = [
  { id: 'Lucy', title: 'UI/UX design', content: 'She\'s the designer for User eXperience & UI.', img: lucyImg },
  { id: 'Barnard', title: 'Dev Ops', content: 'This is like \'Chow Main\' in Menu card.', img: barnardImg },
  { id: 'Charlie', title: 'Charlie\'s the Product Owner', content: 'Responsibiliy card!', img: charlieImg },
]

function App() {
{/*  const [count, setCount] = useState(0) */}
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (id) => {
  setFlippedCards(prev => ({
    ...prev,
    [id]: !prev[id]
  }));
};

  return (
    <>
<div className="logo-row">
  <a href="https://vite.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
</div>
<h2 style={{ color: '#e0ffe0' }}>Vite + React</h2>
  <h1 style={{ color: 'black', marginBottom: '0em' }}>The Team</h1>
      
      {/* Render multiple cards' Front sides & Handler */}
<div className="cards-container">
  {cards.map(card => (
    <div
      key={card.id}
      className={`flip-card card ${flippedCards[card.id] ? 'flipped' : ''}`}
      onClick={() => handleFlip(card.id)}
    >
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front card-face">
          <img
            src={card.img}
            alt={card.title}
            style={{
              width: '90%',
              borderRadius: '8px',
              marginTop: card.id === 'Barnard' ? '8.5em' : 0,
              marginBottom:
              card.id === 'Barnard'
              ? '1em'
              : card.id === 'Lucy'
              ? '1.5em'
              : undefined // add gap under imgs of above two
            }}
          />
          <h2
            style={{
              marginTop: card.id === 'Lucy' ? '1em' : undefined,
              color: 'black'
            }}
          >
            {card.title}
          </h2>
          <p>{card.content}</p>
        </div>
        {/* Back Side */}
        <div className="flip-card-back card-face bg-blue-500 text-white">
          <h2>{card.title} (Back)</h2>
          <p>More about {card.id}!</p>
        </div>
      </div>
    </div>
  ))}
</div> {/*4-levels of div's for the cards container, card, inner card, and card faces*/}

{/* Footer with href attributions */}
<div style={{ textAlign: 'center', marginTop: '4rem' }}>
  <footer>
    <p style={{ fontSize: '0.8rem' }}>
      Images: &rdquo;Charlie & Lucy of Peanut Snoopy icons&rdquo; by{" "}
      <a
        href="https://all-free-download.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        all-free-download.com
      </a>, licensed under{" "}
      <a
        href="https://creativecommons.org/licenses/by/3.0/"
        target="_blank"
        rel="noopener noreferrer"
      >
        CC BY 3.0
      </a>.
    </p>
  </footer>
</div>
{/* End of Footer */}    
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default App
