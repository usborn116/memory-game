import React, {useState, useEffect} from 'react'
import Card from './components/Card'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clickedImages, setClickedImages] = useState([])


  let images = [{url: './images/dame.jpg', name: 'Damian Lillard'},{url: './images/cj.jpg', name: 'CJ McCollum'},{url: './images/giannis.jpg', name: 'Giannis Antetokounmpo'},{url: './images/harden.jpg', name: 'James Harden'},{url: './images/ja.jpg', name: 'Ja Morant'},{url: './images/jokic.jpg', name: 'Nikola Jokic'},{url: './images/kawhi.jpg', name: 'Kawhi Leonard'},{url: './images/kd.jpg', name: 'Kevin Durant'},{url: './images/kyrie.jpg', name: 'Kyrie Irving'},{url: './images/lebron.jpg', name: 'Lebron James'},{url: './images/luka.jpg', name: 'Luka Doncic'},{url: './images/steph.jpg', name: 'Stephen  Curry'}]

  const shuffle = (array) => {
    var currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  const clickImage = (image) => {


    let imageExists = false
    if(clickedImages.some(e => e.name === image.name)) {imageExists = true}

    if (imageExists) {
      alert('That image has been previously clicked')
      setClickedImages([])
      if (highScore < score) {
        setHighScore(score)
      }
      setScore(0)
      redFade()

    } else {
      setClickedImages(clickedImages.concat(image))
      let newScore = score + 1
      setScore(newScore)
    }
  }

  useEffect(() => {
    if(score === 12) {
      alert('You got them all!')
      setScore(0);
      setHighScore(12);
    }
  }, [score])

  const redFade = () => {
    let container = document.getElementById("card-container")
    container.classList.add('fading')
    setTimeout(()=>{container.classList.add('fading')},1000)
  }
  
  images = shuffle(images)

  return (
    <div>
      <header>
        <h1>NBA All Stars Memory Game</h1>
        <p>Click on each player, without clicking the same one twice</p>
      </header>
      <div className="stats">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>

       <div id="card-container" className="card-container">
        <div onClick={() => {clickImage(images[0])}}><Card image={images[0]}/></div>
        <div onClick={() => {clickImage(images[1])}}><Card image={images[1]}/></div>
        <div onClick={() => {clickImage(images[2])}}><Card image={images[2]}/></div>
        <div onClick={() => {clickImage(images[3])}}><Card image={images[3]}/></div>
        <div onClick={() => {clickImage(images[4])}}><Card image={images[4]}/></div>
        <div onClick={() => {clickImage(images[5])}}><Card image={images[5]}/></div>
      </div>

    </div>
  );
}

export default App;
