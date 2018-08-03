class List extends React.Component {
    constructor(){
        super()
        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.clickHandlerRemove = this.clickHandlerRemove.bind(this);
    }

    state = {
        list : [],
        word : "",
        error : "Enter 5 letters or more"
    }

    changeHandler(event){
        this.setState({error : "Enter 5 letters or more"});  
        this.setState({word : event.target.value});
        console.log("change", event.target.value);
    }
  
    clickHandler(event){
        let newList = this.state.list;
        if (this.state.word.length >= 5) {
            newList.push(this.state.word);
            this.setState({list : newList});
        } else {
            let errorMessage = 'WORD TOO SHORT BRO';
            this.setState({error : errorMessage});
        }
        this.setState({word : ""});
        console.log("change", event.target.value);
    }

    clickHandlerRemove(event){
        let newList = this.state.list;
        newList.pop();
        this.setState({list : newList});
    }

    render() {
    // render the list with a map() here
        console.log('RENDER LIST');
        console.log(this.state.list);
        let list = this.state.list.map(i => {
            return <li>{i}</li>
        });

        console.log(list);
        return (
            <div className="list">
                <h2>{this.state.error}</h2>
                <input onChange={this.changeHandler} value={this.state.word}/>
                <button onClick={this.clickHandler}>add item</button>
                <button onClick={this.clickHandlerRemove}>REMOVE ITEM</button>
                <ul>{list}</ul>
            </div>
        );
    }
}

ReactDOM.render(
    <List />,
    document.getElementById('root')
);

