import React, { useState } from "react";
import Profile from './Profile';
import RepoList from './RepoList';

const SearchItem = () => {
    const [items, setItems] = useState({});

    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);

    const onChangeHandler = e => {
        setUsername(e.target.value);
    };

    const submitHandler = async e => {
        e.preventDefault();


        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();


        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();


        if (profileJson) {
            setItems(profileJson);
            setRepositories(repoJson);
        }
        // localStorage.setItem('myCat', 'Tom');

        // localStorage.setItem('items', 'items');


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

            <Profile items={items} repositories={repositories} />
            <RepoList items={items} repositories={repositories} />
        </div>
    )
}

export default SearchItem;
