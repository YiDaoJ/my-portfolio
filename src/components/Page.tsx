import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import styles from './styles.module.css'

interface PageProps {
  offset: number
  gradient: string
  // onClick: () => void
  onClickToNext:() => void
  onClickToPrev:() => void
}

const Page = ({ offset, gradient, onClickToNext,  onClickToPrev}: PageProps) => (
  <>
  
    <ParallaxLayer offset={offset} speed={0.2} onClick={(event) => {event.preventDefault()}}>
    
      <div className={styles.slopeBegin} />
        

    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} >
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} >
        <button className={styles.toNext} onClick={onClickToNext}>→ {offset + 2}</button>  
        <button className={styles.toPrev} onClick={onClickToPrev}>←</button>
      </div>
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
)

export default function Pages() {
  const parallax = useRef<IParallax>(null)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)

      console.log(
        'scroll to: ', to
      )
    }
  }
  return (
    <div  className={styles.page}>
      <Parallax className={styles.container} ref={parallax} pages={5} horizontal>
        <Page offset={0} gradient="pink" onClickToNext={() => scroll(1)} onClickToPrev={() => scroll(4)}  />
        <Page offset={1} gradient="teal" onClickToNext={() => scroll(2)} onClickToPrev={() => scroll(0)} />
        <Page offset={2} gradient="blue" onClickToNext={() => scroll(3)} onClickToPrev={() => scroll(1)}/>
        <Page offset={3} gradient="teal" onClickToNext={() => scroll(4)} onClickToPrev={() => scroll(2)}/>
        <Page offset={4} gradient="tomato" onClickToNext={() => scroll(0)} onClickToPrev={() => scroll(3)}/>
      </Parallax>
    </div>
  )
}
