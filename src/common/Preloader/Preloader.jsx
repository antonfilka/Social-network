import preloader from './preloader.svg';
import styles from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader} alt=''/>
        </div>
    )
}
export default Preloader;