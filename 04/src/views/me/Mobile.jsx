import React from 'react';

class Index extends React.Component {
    render() {
        const obj = this.props.location;
        let mobile =  '';
        if (obj && obj.state) {
            mobile = obj.state.mobile
        }
        if (obj && obj.query) {
            mobile = obj.query.mobile
        }

        return (
            <div>
                手机号码:<input type="text" defaultValue={mobile} />
            </div>
        );
    }
}

export default Index;