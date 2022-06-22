const Profile: any = ({ items }) => {
    const isEmpty = Object.keys(items).length === 0;

    return (

        <>
            {(isEmpty) ? "" :

                <><img className="rounded-circle rounded mx-auto d-block" width="200" height="200" src={items.avatar_url} alt="avatar"></img><table className="table caption-top">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Bio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>{items.bio}</td>
                        </tr>
                    </tbody>
                </table></>}

        </>
    )
}

export default Profile;
