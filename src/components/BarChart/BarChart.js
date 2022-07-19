import {useState, useEffect, useRef } from 'react';

import styles from './BarChart.module.scss';

const MIN_HEIGHT = 20;

const MAX_HEIGHT = 200;

function BarChart({data})
{
    const redBar = useRef();

    const blueBar = useRef();

    const yellowBar = useRef();

    const greenBar = useRef();

    useEffect(()=>{
        const max = Math.max.apply(Math, data);
        if(max===0)
        {
            redBar.current.style.height = `${MIN_HEIGHT}px`;
            yellowBar.current.style.height = `${MIN_HEIGHT}px`;
            blueBar.current.style.height = `${MIN_HEIGHT}px`;
            greenBar.current.style.height = `${MIN_HEIGHT}px`;
        }
        else
        {
            const redBarLength = MIN_HEIGHT + data[0]*MAX_HEIGHT/max;
            redBar.current.style.height = `${redBarLength}px`;
            const blueBarLength = MIN_HEIGHT + data[1]*MAX_HEIGHT/max;
            blueBar.current.style.height = `${blueBarLength}px`;
            const yellowBarLength = MIN_HEIGHT + data[2]*MAX_HEIGHT/max;
            yellowBar.current.style.height = `${yellowBarLength}px`;
            const greenBarLength = MIN_HEIGHT + data[3]*MAX_HEIGHT/max;
            greenBar.current.style.height = `${greenBarLength}px`;
        }
    }, []);
    return (
        <div className={styles.barchartContainer}>
            <div className={styles.bar}>
                <div ref={redBar} className={styles.red}></div>
                <span className={styles.redNum}>{data[0]}</span>
            </div>
            <div className={styles.bar}>
                <div ref={blueBar} className={styles.blue}></div>
                <span className={styles.blueNum}>{data[1]}</span>
            </div>
            <div className={styles.bar}>
                <div ref={yellowBar} className={styles.yellow}></div>
                <span className={styles.yellowNum}>{data[2]}</span>
            </div>
            <div className={styles.bar}>
                <div ref={greenBar} className={styles.green}></div>
                <span className={styles.greenNum}>{data[3]}</span>
            </div>
        </div>
    )
}

export default BarChart