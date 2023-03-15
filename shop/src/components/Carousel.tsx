import { useState, useEffect } from 'react';
import '../styles/style.scss';
import banner from '../assets/banner.png';
import Jackets from '../assets/jackets.png';
import Star from '../assets/star.png';
// const slides = 
// [{
// 	url: `url(${banner})`,
// 	text: 'hey Man'
// },
// {
// 	url: `url(${Jackets})`,
// 	text: 'hey bro'
// }]

const data = [
	{
	  id: 1,
	  image:
	  `url(${banner})`,
	  name: "maria ferguson",
	  title: "office manager",
	  quote:
		 "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache."
	},
	{
	  id: 2,
	  image:
	  `url(${Jackets})`,
	  name: "john doe",
	  title: "regular guy",
	  quote:
		 "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami."
	},
	{
	  id: 3,
	  image:
	  `url(${Star})`,
	  name: "peter smith",
	  title: "product designer",
	  quote:
		 "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo."
	}]



function Carousel() {
	
	const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);


  return (
	<section className="section">
	<div className="section-center">
	  {data.map((person, personIndex) => {
		 const { id, image, name, title, quote } = person;
				console.log(image);
				
		 let position = "nextSlide";
		 if (personIndex === index) {
			position = "activeSlide";
		 }
		 if (
			personIndex === index - 1 ||
			(index === 0 && personIndex === data.length - 1)
		 ) {
			position = "lastSlide";
		 }

		 return (
			<div style={{backgroundImage: image}} className={position} key={id}>
			  {/* <img src={image} alt={name} className="person-img" /> */}
			  <h4>{name}</h4>
			  <p className="title">{title}</p>
			  <p className="text">{quote}</p>
			</div>
		 );
	  })}
	  <button className="prev" onClick={() => setIndex(index - 1)}>
		 prev
	  </button>
	  <button className="next" onClick={() => setIndex(index + 1)}>
		 next
	  </button>
	</div>
 </section>
  )
}

export default Carousel


