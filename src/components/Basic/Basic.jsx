import css from './Basic.module.css';

const Basic = () => {
    return (
            <div className={css.container}>
            <h2 className={css.title}>Hungry?</h2>
            <span className={css.text}>Press the button and generate the dish</span>
            </div>
    )
}

export default Basic;