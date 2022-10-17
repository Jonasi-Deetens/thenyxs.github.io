import React, { Component } from "react";

class SubmitBook extends Component {

    constructor(){
        super();
        this.state = {
            title: null,
            review: null
        };
        this.handleChange = this.handleChange.bind(this)
    };
    
    handleChange = (e) => {
        this.state[e.target.name] = e.target.value
    }
       
    onSubmit = () => {
        this.submit_task()   
    }

    componentDidMount(){
    }

    submit_task() {
        let json = JSON.stringify({
            title: this.state.title,
            review: this.state.review
        })

        const postData = async (url = '', data = {})=>{
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log(res);
            try {
                const received = await res.json();
                console.log(received);
                return received;
            }
            catch(error) {
                console.log('ERROR: '+ error);
            }
        };

        postData('/api/addBook',{json});
    }

    render() {
        return (
            <div>
                <h2>Add a book.</h2>
                <form id="submit_book" onSubmit={this.onSubmit}>
                    <label>
                        Title:
                        <input type="text" name="title" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Review:
                        <input type="text" name="review" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>

        );
    }
}

export default SubmitBook;