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


    //fetch from web service in its own method
    loadData = () => {
        //sanity
        console.log(`Trying to fetch data`)
        //simple fetch method/ have to pass in the url
        fetch('http://universities.hipolabs.com/search?name=southwest')
            //taking the data that gets returned from the fetch and extracting just the json
            .then((data) => data.json())
            .then((data) => this.setState(
                {
                    dataList: data
                }
            ))


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
                                <p>{`Name: ${post.name}`}</p>
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