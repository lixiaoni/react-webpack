import React from 'react';
import axios from 'axios';
import config from '../../constant/urlconfig';
import AutoComplete from '../components/auto-complete'

class Index extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
        const that = this;
        axios.get(config.userInfo)
        .then(function (response) {
            const { data } = response.data;
            console.log(data);
            that.setState({
                data: response.data.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    render() {
        const { data } = this.state;
        return (
            <div>
                首页
                <AutoComplete
                    dataSource = {data}
                />
                
            </div>
        );
    }
}

export default Index;