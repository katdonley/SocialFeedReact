import CustomButton from "../CustomButtons/CustomButtons";


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
                    <CustomButton message='LIKE' />
                    <CustomButton message='DISLIKE' />
                </tr>
            </tbody>
            </table>
                )
            }) 
     );
}
 
export default DisplayPosts;