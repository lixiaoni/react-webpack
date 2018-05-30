import React from 'react';
import axios from 'axios';
import config from '../../constant/urlconfig';

class Index extends React.Component {
    
    componentDidMount() {
        axios.get(config.userInfo)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    render() {
        return (
            <div>
                首页
            </div>
        );
    }
}

export default Index;