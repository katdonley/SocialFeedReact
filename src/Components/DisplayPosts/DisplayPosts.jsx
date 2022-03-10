import CustomButton from "../CustomButtons/CustomButtons";


const DisplayPosts = (props) => {
    return ( 
        props.parentPosts.map((post,index) => {
            return(
            <table key={index}>
            <thead>
                <tr>
                <td>{post.name}</td>
                <td>{post.date}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                    <td>{post.message}</td>
                    <div>
                    <CustomButton message='LIKE' />
                    <CustomButton message='DISLIKE' />
                    </div>
                </tr>
                
            </tbody>
            </table>
                )
                
            }) 
     );
}
 
export default DisplayPosts;