import reactImage from '../assets/react-core-concepts.png';

const description = ['Crucial', 'Fundamental', 'Core', 'Essential'];

function getRandomDescription() {
  return description[Math.floor(Math.random() * description.length)];
}

export default function Header() {
  return (
    <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {getRandomDescription()} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}