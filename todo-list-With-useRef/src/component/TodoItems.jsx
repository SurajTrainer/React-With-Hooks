import AddItem from "./AddItem"
import style from './TodoItems.module.css'

const todoitems = ({ todoItems, onDelBtn }) => {

    return (
        <>
            <div className={style.itemContainer}>
                {todoItems.map(item => (

                    <AddItem key={item.name} todoName={item.name} todoDate={item.date} onDelBtn={onDelBtn} />
                ))}
            </div>
        </>
    )
}

export default todoitems