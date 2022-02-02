import React from 'react';
import './style.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ result }) {
    console.log(result)
    return (
        <section>
        <div id="repos">
            {/* {result.map(post => <h2>{post.name}</h2>)} */}
            <p>{result.repos}</p>
        </div>
        </section>
    )
}
