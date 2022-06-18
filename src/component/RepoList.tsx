import React from 'react'

const RepoList = ({ items, repositories }) => {
    return (

        <div>

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
                            <tr>
                                <td> {repo.name}</td>
                                <td> {repo.description}</td>

                            </tr>
                        </tbody>
                    )
                })}

            </table>
        </div>
    )
}

export default RepoList
