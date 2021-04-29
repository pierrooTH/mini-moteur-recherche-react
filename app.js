class App extends React.Component {
    
    state = {
        google: "https://www.google.fr/search?q=",
        search: "",
        history: []
    }

    changeSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    keepHistory = (event) => {
        event.preventDefault();
        let newHistory = [...this.state.history, this.state.search];
        this.setState({
            history: newHistory
        })
    }
    
    render() {
        return(
            <section>
                <div className="center">
                    <h1 className="maintitle">React Search</h1>
                    <a href={this.state.google+this.state.search} target="_blank">{this.state.google}{this.state.search}</a>
                    <form className="form">
                        <input className="search" type="text" 
                        placeholder="Votre recherche"
                        id="searchGoogle"
                        onChange={this.changeSearch}
                        value={this.state.search}/>
                    </form>
                </div>
                <div className="btn__center">
                    <a href={this.state.google+this.state.search} target="_blank">
                        <button className="btn">Rechercher</button>
                    </a>
                    <input className="btn" onClick={this.keepHistory} type="submit" value="Garder en mémoire"/>

                </div>
            </section>
            
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));