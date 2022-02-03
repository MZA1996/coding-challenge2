import GitHubInfo from './components/GitHubInfo';
import SearchUser from './components/SearchUser';

function App() {
    const login='Ginger9307'

    return (
        <div className="App">
            <h1>Welcome to GitHub search</h1>
            <SearchUser />
            <GitHubInfo login={login}/>
        </div>
    )
}

export default App;