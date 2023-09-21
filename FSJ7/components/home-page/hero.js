import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/max.jpg'
          alt='An image showing Hope'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'am Hope</h1>
      <p>
        I blog about literature, mental health and life in general
      </p>
    </section>
  );
}

export default Hero;
