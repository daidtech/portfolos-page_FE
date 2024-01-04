import React from 'react';
import styles from './SimpleBlock.module.scss'

export default function SimpleBlock() {
  return (
    <section className={styles.simpleBlock}>
      <div className={styles.wrapImage}>
        <img src="/images/1.jpg" alt="" />
      </div>
      <div>
        <h4>Title blog post</h4>
        <p className='text-primary'>July 21, 2020</p>
      </div>
    </section>
  );
}