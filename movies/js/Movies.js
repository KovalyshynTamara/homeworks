const API_KEY = '8987d6fc'

class Movies extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            moviesList: []
        }
    }

    handleSearch = (searchText) => {
        console.log(searchText);
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`)
            .then(resp => resp.json())
            .then((resp) => { 
                console.log(resp);
                this.setState({
                    moviesList: resp.Search
                })
            })
    }

    render() {
        return (
            <div className="container pt-4">
                <Card title="Search Movies">
                    <SearchForm handleFormSubmit={this.handleSearch} /> 
                </Card>
                <Card title="Results">
                    <Results movies={this.state.moviesList} />  
                </Card>  
                
            </div>
        )
    }
}

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { search: '' }

    }

    handlerChange = (e) => {
        this.setState({search: e.target.value})
    }
    handlerSubmit = (e) => {
        e.preventDefault()
        this.props.handleFormSubmit(this.state.search)
        return false
    }
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <div className="row">
                    <div className="col-8">
                        <input type="search" value={this.state.search} className="form-control" onChange={this.handlerChange} />
                    </div>
                    <div className="col-4">
                        <button type="submit" className="btn btn-success">Search</button>
                    </div>
                </div>
            </form>  
        )
    }
}

class Results extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.log(this.props.movies);
        return (
        'Movies list here'
        )
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.title = props.title
        this.body = props.children
    }
    render() {
        return (
        <div className="card mb-4">
            <div className="card-header">
                <h3>{ this.title}</h3>
            </div>
                <div className="card-body">
                    {this.body}
            </div>
        </div> 
        )
    }
}

const content = document.getElementById('app')
ReactDOM.render(<Movies />, content)