const DisplayPosts = (props) => {
    return ( 
        props.parentPosts.map((post,index) => {
            return(
            <table>
            <thead>
                <tr>
                <td>{post.name}</td>
                <td>{post.date}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{post.message}</td>
                </tr>
            </tbody>
            </table>
                )
            }) 
     );
}
 
export default DisplayPosts;