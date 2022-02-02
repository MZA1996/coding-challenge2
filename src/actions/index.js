import React, {useEffect} from 'react'
import axios from 'axios';

// const Result = ({ username }) => {
//     const [posts, setPost] = React.useState(null);
//     // const baseURL = "https://api.github.com/users/ViViAnna25/repos";
//     const baseURL = `https://api.github.com/users/${username}/repos`;
//     // useEffect(() => {
//     //     async function getPost() {
//     //       const { response } = await client.get("/1");
//     //       setPost(response.data);
//     //     }
//     //     getPost();
//     //   }, []);
    
//     //   async function deletePost() {
//     //     await client.delete("/1");
//     //     alert("Post deleted!");
//     //     setPost(null);
//     //   }

//     useEffect(() => {
//         axios.get(baseURL).then((response) => {
//           setPost(response.data);
//           console.log(response.data);
//         });
//       }, []);

//   if (!posts) return null;

//   return (
//     <>
//     <div>
//       {posts.map(post => <h2>{post.name}</h2>)}
//     </div>
//     </>
//   )

// };

// export default Result;

const loading = username => ({ type: 'LOADING', payload: username });

const loadResult = ({ results: { repos } }) => ({ 
    type: 'LOAD_RESULT',
    payload: { repos } 
});

export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            // const username = await fetchRepos(searchTerm);
            const reposByUsername = await fetchRepos(searchTerm);
            dispatch(loadResult(reposByUsername))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};


// Helpers
// const fetchLongLat = async searchTerm => {
//     try {
//         const { data } = await axios.get(`https://restcountries.eu/rest/v2/capital/${searchTerm}`);
//         return data[0].latlng;
//     } catch(err) {
//         if (data.status === 404) { throw Error('That\'s not a valid capital city!') }
//         throw new Error(err.message)
//     }
// }

const fetchRepos = async ([ username ]) => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        return data;
    } catch(err) {
        throw new Error(err.message)
    }
}