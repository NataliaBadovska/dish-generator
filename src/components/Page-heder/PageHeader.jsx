import css from './PageHeader.module.css'


const PageHeader = () => {

    return (
        
        <div className={css.pageHeader}>
            <h1 className={css.pageHeaderTitle}>Random food generator</h1>
        </div>
    )
    
}

export default PageHeader;