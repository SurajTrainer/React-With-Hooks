import style from './Container.module.css'

// const Container = (props)=> {
const Container = ({children})=> {
    return (
        // <div className={style.container}>{props.children}</div>
        <div className={style.container}>{children}</div>
    )
    
}

export default Container