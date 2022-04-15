import React,{useState ,useEffect} from 'react';
import "./Slider.css";
import data from "./data";
import { AiOutlineArrowRight} from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';






export default function Slider() {
    const [people] =useState(data);
    const [index, setIndex] = useState(0);

useEffect(() =>{
    const lastIndex = people.length-1;
    if(index < 0){
        setIndex(lastIndex);
    }
    if(index > lastIndex){
        setIndex(0);
    }
},[index, people]);

useEffect(() =>{
    let slider = setInterval(()=>{
        setIndex(index + 1)
    }, 5000);
    return() =>{
        clearInterval(slider)
    }
  }, [index])

  return (
      <section className='section'>
          <div className='title'>
              <h1>/ Reviews</h1>
          </div>
           <div className='section-center'>
               {people.map((item, indexpeople)=>{
                   const {id, image, name, title, quote} = item ;
                   let position = "nextSlide";
                   if(indexpeople === index ) {
                       position = 'activeSlide'
                   }
                   if(indexpeople === index -1 || (index === 0 && indexpeople === people.length - 1)){
                       position = "lastSlide"

                   }
                   return (
                       <article className={position} key={id}>
                           <img src={image} alt={name} className="person-img"/>
                           <h4>{name}</h4>
                           <p className='title'>{title}</p>
                           <p className='text'>{quote}</p>
                       </article>
                   )

               })}
               <button className='prev' onClick={() => setIndex(index - 1)}>
                   <AiOutlineArrowLeft/> </button>
                   <button className='next' onClick={() => setIndex(index + 1)}>
                   <AiOutlineArrowRight/>
               </button>
           </div>
      </section>

  )
}
