const DisplayPosts = (props) => {
    return ( 
        <table>
            <thead>
            {props.parentPosts.map((post) => {
                return(
                <tr>
                <td>{post.name}</td>
                <td>{post.date}</td>
                </tr>
                )
            })}
            </thead>
            <tbody>
            {props.parentPosts.map((post) => {
                return(
                <tr>
                    <td>{post.message}</td>
                </tr>
                )
            })}
            </tbody>
      </table>
     );
}
 
export default DisplayPosts;