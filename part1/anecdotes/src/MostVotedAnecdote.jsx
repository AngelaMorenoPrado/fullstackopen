const MostVotedAnecdote = (props) => {
    return (
      <>
        <p>{props.data.anecdote}</p>
        <p>has {props.data.points} votes</p>
      </>
    )
  }
  
  export default MostVotedAnecdote