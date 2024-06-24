import styles from './index.module.css'
const Story = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Our Story</h1>
                </div>
                <div className={styles.tagline}>
                    <p>
                        We work closely with artists across the globe and get the most valuable information, insights and resources for your growth.
                    </p>
                    <p>
                        The name THE MGZN is very wisely chosen as we artist are meant to have our own magazine, where we can post our periodical publication containing articles and illustrations, often on a particular subject or aimed at a particular readership .we can have our own magazine and together form THE MGZN. So, we artist can grow together, fail together this is our soul purpose. We feel a great sense of responsibility and pride to have a positive impact on individuals, communities, and your Magazine. Hoping to solve your purpose and ours too.
                    </p>
                    <span className='flex flex-col !justify-end !w-full !items-end'>
                        <h1>- Subha Abhishek</h1>
                        <span>Founder</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Story;