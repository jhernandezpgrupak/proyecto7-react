import React, { Fragment} from 'react';
import Card from '../components/Card/Card'
//import data from '../../assets/data.json'

const API = process.env.API

class List extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            wordToSearch : '',
            error : '',
            loading: true
        }
    }

    async componentDidMount() {
        const res = await fetch(`${API}&s=batman`)//${this.state.wordToSearch}
        try {
            const resJSON = await res.json()
            this.setState({ data: resJSON.Search , loading : false}); //Agregando el valor al estado de [data] con setState => data
        } catch (error) {
            this.setState({ data: []})
            console.log('Error'+e)
        }
        console.log("error...")
    }

    async handleSubmit(e){ //FORM
        e.preventDefault(); 
        if(!this.state.wordToSearch){
            this.setState({error : 'Plase write a valid text.'})
        }else{
            const res  = await fetch(`${API}&s=${this.state.wordToSearch}`)
            try {
                const resJSON = await res.json()
                if(!resJSON.Search){
                    return this.setState({error:'There are not result'})                      
                }
                this.setState({data : resJSON.Search, wordToSearch:'', error:''})
                this.setState({loading : false})
            } catch (error) {
                console.log('Error'+e) 
            }
        }
    
    }

    handleWordToSearch(e){
        //console.log(e.target.value)
        this.setState({wordToSearch : e.target.value})
    }

    render() {
        return (
            <Fragment>
                <div className='row'>
                    <div className='col-md-4 offset-md-4 p-4'>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input 
                                type='text'     
                                value={this.state.wordToSearch}               
                                className='form-control' 
                                placeholder='Text to Search...' 
                                onChange={(e) => this.handleWordToSearch(e)}
                                autoFocus
                            />
                        </form>
                        <div className='text-center'><h4><p>{this.state.error ? this.state.error : ''}</p></h4></div>
                        <>
                            {
                                this.state.loading ? <div className='text-center'>Cargando...👾</div> : ''
                                
                            }
                        </>
                    </div>
                </div>
                <div className='row'>
                    {                     
                        this.state.data.map(movie => {
                            if(movie){
                                return <Card key={movie.imdbID} movie={movie} />
                            }
                        })
                        
                    }
                </div>
            </Fragment>
        )
    }
}

export default List 