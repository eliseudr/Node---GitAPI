function UserDetails({details}){
    return(
        <div className="label">
            <h2>{details.login}</h2>
            <h2>{details.avatar_url}</h2>
            <h2>{details.url}</h2>
            <h2>{details.repos_url}</h2>
            <h2>{details.location}</h2>
            <h2>{details.bio}</h2>
            <h2>{details.public_repos}</h2>
        </div>
    )
};

export default UserDetails;