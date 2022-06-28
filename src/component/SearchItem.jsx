import React, { useState } from "react";
import Profile from './Profile';
import RepoList from './RepoList';

const SearchItem = () => {
    const [items, setItems] = useState({});

    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);

    const [loading, setLoading] = useState(false);

    const onChangeHandler = e => {
        setUsername(e.target.value);
    };

    const submitHandler = async e => {
        e.preventDefault();
        setLoading(true);


        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();

        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();

        if (!profileJson) {
            setLoading(false);

        } else {
            setLoading(false);
            setItems(profileJson);

            setRepositories(repoJson);
        }

    };

    return (
        <div className="container">
            <form id="searchForm" className="container text-center">
                <div className="form-group col-md-16">
                    <input
                        type="text"
                        className="form-control"
                        id="search"
                        placeholder="Search User Name Here"
                        value={username}
                        onChange={onChangeHandler}
                    />

                </div>
                <br />
                <div className="form-group col-md-12">
                    <button
                        className="btn btn-success"
                        type="submit"
                        onClick={submitHandler}
                    >
                        Search
                    </button>

                </div>
            </form>
            <br />
            {loading ? (<h4 style={{ textAlign: "center" }}>Loading...</h4>) : (

                <>
                    <Profile items={items} />
                    <RepoList repositories={repositories} />
                </>
            )
            }
        </div>
    )
}

export default SearchItem;
