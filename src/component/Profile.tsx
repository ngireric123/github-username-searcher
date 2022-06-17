const Profile: any = ({ items, repositories }) => {
    return (
    
        <div>
            <img className="rounded-circle rounded mx-auto d-block" width="200" height="200" src={items.avatar_url} alt="avatar" ></img>
            <table className="table caption-top">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Bio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >{items.name}</td>
                        <td>{items.email}</td>
                        <td>{items.bio}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Profile;
