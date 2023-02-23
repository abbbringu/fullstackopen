const Filter = (props) => {
    return(
        <div>
          filter show with <input value={props.value} onChange={props.handle}/>
        </div>
    )
}


export default Filter