import React from 'react'

const RepoList = ({ repositories }) => {
    const isEmpty = Object.keys(repositories).length === 0;
    return (

        <>
            {(isEmpty) ? "" :
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Repository Name</th>
                            <th scope="col">Repository Description</th>

                        </tr>
                    </thead>

                    {repositories.map(repo => {
                        return (
                            <tbody>
                                <tr key={repo.name}>
                                    <td> {repo.name}</td>
                                    <td> {repo.description}</td>

                                </tr>
                            </tbody>
                        )
                    })}

                </table>}
        </>
    )
}

export default RepoList
