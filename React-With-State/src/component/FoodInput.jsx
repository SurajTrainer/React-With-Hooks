
const FoodInput = ({handleOnKeyDown}) => {

    return (
        <input style={{width :"90%",padding:"10px",margin:"10px"}} type="text" 
        onKeyDown={handleOnKeyDown}/>
    )
}
export default FoodInput;
