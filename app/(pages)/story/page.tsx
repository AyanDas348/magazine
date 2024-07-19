import Image from 'next/image';
import styles from './index.module.css'

const Story = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Our Story</h1>
                </div>
                <div className={styles.tagline}>
                    We work closely with artists across the globe and get the most valuable information, insights and resources for your growth. The name MGZN is very wisely chosen and it symbolizes how we artists are meant to get the limelight through our own magazines, where we not only publish our art but also the stories that made us.
                </div>
                <div>
                    <Image src={'/assets/story.png'} width={100} height={100} className='min-w-full max-h-[600px]' alt='story'/>
                </div>
                <div className={styles.tagline}>
                    <span className={styles['bold-pr-20']}>
                        We can have our own magazine and together
                        form THE MGZN and this would empower us
                        as artists to grow together, fail together and
                        stand up together.
                    </span>
                    <div className=''>
                        We feel a great sense of responsibility and pride in making a positive impact on individuals, communities and your Magazine and in this process we hope to solve your purpose and ours too.
                    </div>
                </div>
                <div className={styles['why-mgzn']}>
                    Why MGZN ?
                    <p>
                        At MGZN we appreciate your courage , as it takes courage to be creative to think different and  go against the wind. Everybody loves the art but the artist remains forgotten, his hardship remain buried unbeknownst to the world, MGZN aims at showing this artist to the world.
                    </p>
                </div>
                <div className={styles['why-mgzn-right']}>
                    What would you get if you come to MGZN?
                    <p>
                        MGZN will become your key to the third door, where you can skip lines to get ahead with your ambitions and interests. Coming together with like minded artists at our community will not only unlock several opportunities but also give wings to your creativity and hence maximizing your growth curve.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Story;