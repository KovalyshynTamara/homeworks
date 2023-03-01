const API_KEY = '8987d6fc'

function Movies(props) {
    const [moviesList, setMovies] = React.useState([])
    const [total, setTotal] = React.useState(0)
    const [current, setCurrentPage] = React.useState(1)

    const [search, setSearch] = React.useState('')
    const [year, setYear] = React.useState('')
    const [type, setType] = React.useState('')
    const [info, setInfo] = React.useState({})

    const findMovies = () => {

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&y=${year}&type=${type}&page=${current}`)
            .then(resp => resp.json())
            .then((resp) => {  
                if (resp.Response === 'False') {
                    setTotal(0)
                    return setMovies([])
                }
                setTotal(resp.totalResults)
                return setMovies(resp.Search)
            })
    }
    React.useEffect(() => {
        findMovies()
    }, [search, current]) 




    const handleSearch = (searchText, searchYear, searchType) => {
        setSearch(searchText)
        setYear(searchYear)
        setType(searchType)
        // findMovies()
        
    }
    const handleReset = () => {
        setMovies([])
        setSearch('')
        setYear('')
        setType('')
        setCurrentPage(1)
        setTotal(0)
    }
    const moveToPage = (newPage) => {
        if (newPage === 0 || newPage > Math.ceil(total / 10)) {
            return false
        }
        setCurrentPage(newPage)
        // findMovies()

    }
    const getMovieInfo = (id)=> {
        console.log(id)
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then((resp)=>resp.json())
            .then((resp) => {  
                setInfo(resp)

            })
    }
    return (
        <div className="container pt-4">
            <Card title="Search Movies">
                <SearchForm handleFormSubmit={handleSearch} handleFormReset={handleReset} /> 
            </Card>
            <Card title="Results">
                <Results movies={moviesList}  onDetail={getMovieInfo}/>  
                <Pagination total={total} current={current} handlerPage={moveToPage} />
            </Card>    
            <MovieInfo movie={info}/>      
         
        </div>
    )
}
function MovieInfo(props){
    const {movie} = props
    return (
        <div className="info-wrap">
            <h3>{movie.Title}</h3>
            <p>{movie.Plot}</p>
            <p>{movie.Year}</p>
        </div>
    )
}

function SearchForm(props) {
    const [search, setSearch] = React.useState('batman')
    const [year, setYear] = React.useState('')
    const [type, setType] = React.useState('')

    const handlerChange = (e) => {
        setSearch(e.target.value)
    }
    const handlerSubmit = (e) => {
        e.preventDefault()
        props.handleFormSubmit(search, year, type)
    }
    const handlerReset = (e) => {
        e.preventDefault()
        setSearch('')
        setYear('')
        setType('')
        props.handleFormReset()

    }
    return (
        <form onSubmit={handlerSubmit}>
            <div className="row">
                <div className="col-7">
                    <input type="search" value={search} className="form-control mb-4" onChange={handlerChange} />
                   
                </div>
                <div className="col-1">
                    <input type="number" value={year} className="form-control" min="1895" max="2025" plaseholder="year" onChange={(e) => {
                        setYear(e.target.value)
                    }} />
                </div>
                <div className="col-2">
                    <select className="form-select" onChange={(e)=>{
                        setType(e.target.value)
                    }}>
                        <option selected>All</option>
                        <option value="movie">movie</option>
                        <option value="series">series</option>
                        <option value="episode">episode</option>
                    </select>
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-success ">Search</button>
                    <button type="reset" className="btn btn-danger ms-3" onClick={handlerReset}>Reset</button>
                </div>
            </div>
        </form>  
    )
}

function Results(props) {
    const { movies } = props
        const hendleDetail = (id)=> {
        props.onDetail(id)
    } 

    return (
        <div className="row row-cols-4 gap-4">
            {movies.map((item) => {
              return <MovieItem key={item.imdbID} movie={item} onDetail={hendleDetail} />  
            })}
        </div>
    )
}

function MovieItem(props) {
    const movie = props.movie

    const hendleDetail = (e)=> {
        e.preventDefault()
        props.onDetail(movie.imdbID)
    }   

    return (
        <div className="card col" style={{width: '260px'}}>
            <Poster title={movie.Title} poster={movie.Poster} />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text"><b>Year: </b>{movie.Year}</p>
                <a href="#" className="btn btn-primary" onClick={hendleDetail}>Details</a>
            </div>
        </div>
    )
}

function Poster(props) { 
    const { poster, title } = props
    if (poster === 'N/A') {
        return (
            <img src="images/no-photo.png" className="card-img-top" alt={title} />
        )
    }
    return (
        <img src={poster} className="card-img-top" alt={title}/>
    )
}

function Card(props) {
    const { title, children } = props
    
    return (
        <div className="card mb-4">
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )   
}

function Pagination(props) {
    const { total, current } = props
    const totalPages = Math.ceil(total / 10)
    const handlerNext = e => {
        e.preventDefault()
        props.handlerPage(current + 1)
    }
    const handlerPrev = e => {
        e.preventDefault()
        props.handlerPage(current - 1)
    }
    if (total === 0) {
        return ''
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#" onClick={handlerPrev}>Previous</a></li>
                <li className="page-item"> {current} from {totalPages} </li>
                <li className="page-item"><a className="page-link" href="#" onClick={handlerNext}>Next</a></li>
            </ul>
        </nav>
    )
}

const content = document.getElementById('app')
ReactDOM.render( <React.StrictMode><Movies /></React.StrictMode>, content)