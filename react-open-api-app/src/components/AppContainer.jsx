import React, { Component } from 'react';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
        }
    }
    //Hook into component mount
    //overriding default
    //giving us a chance to go fetch data and render
    //promises are automatic call backs
    //use '.then' to say do this then do that
    componentDidMount() {
        //sanity
        this.loadData();
    }


    //fetch from web service in its own method(use promises and the async/await)
    loadData = async() => {
        //sanity
        console.log(`Trying to fetch data`)
        // //simple fetch method/ have to pass in the url
        // fetch('http://universities.hipolabs.com/search?name=southwest')
        //     //taking the data that gets returned from the fetch and extracting just the json
        //     .then((data) => data.json())
        //     .then((data) => this.setState(
        //         {
        //             dataList: data
        //         }
        //     ))

            //same as above but a simpler form and without promises/ USED SYNC & AWAIT
            const response = await fetch('http://universities.hipolabs.com/search?name=southwest');
            const json = await response.json();
            this.setState(
                {
                    dataList:json
                }
            );


    }

    //method to render this component
    render() {

        // console.log(this.state);

        return (
            <div>
                <h1>AppContainer Online</h1>
                {
                    this.state.dataList.map((post, index) => {
                        return (
                            <div key={index}>
                                <p>{`Country: ${post.country}`}</p>
                                <p>{`School Name: ${post.name}`}</p>
                                <a target='_blank' rel="noopener noreferrer" href={post.web_pages[0]}>{post.name}</a>
                                <hr className='breaks'/>
                            </div>
                        )
                    }

                    )
                }

            </div>
        );
    }
}

export default AppContainer;