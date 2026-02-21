import styles from './Features.module.scss';

export default function Features() {
    return (
        <section className={styles.features} id="features">
            <div className="container">
                <div className={styles.features__header}>
                    <h2>Built for Performance</h2>
                    <p>Everything you need to build state-of-the-art web applications.</p>
                </div>

                <div className={styles.features__grid}>
                    <FeatureCard
                        icon="🚀"
                        title="Fast by Default"
                        description="Built on Next.js 15 for optimal speed and SEO right out of the box."
                    />
                    <FeatureCard
                        icon="📱"
                        title="Fully Responsive"
                        description="Pixel-perfect layouts that adapt seamlessly to any screen size or device."
                    />
                    <FeatureCard
                        icon="🎨"
                        title="SCSS Architecture"
                        description="Clean, maintainable, and powerful styling with Sass variables and mixins."
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className={styles.features__card}>
            <div className={styles.icon}>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
