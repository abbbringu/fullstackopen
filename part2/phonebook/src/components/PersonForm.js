const PersonForm = (props) => {
    return(
        <form>
            <div>
            name: <input value={props.nameVal} onChange={props.nameHandle}/>
            </div>
            <div>
            number: <input onChange={props.numHandle} value={props.numVal}/></div>
            <div>
            <button type="submit" onClick={props.subHandle}>add</button>
            </div>
      </form>
    )
}


export default PersonForm