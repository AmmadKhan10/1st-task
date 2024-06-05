function PracticeQuestions(){
    return (
        <>
            <div onClick = {() =>{alert('You click the parent div')}} style={{border:"1px solid black", marginTop:"20px"}}>
                Parent div
                <div onClick = {(e) =>{e.stopPropagation(),alert('You click the child div')}} style={{border:"1px solid red"}}>
                    child div

                </div>
                
            </div>
        </>
    )
}
export default PracticeQuestions;