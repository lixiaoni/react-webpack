import * as React from 'react';
import '../style/index.less'

export default class AutoComplete extends React.Component {
    
    render() {
        let {
            dataSource
        } = this.props;
        
        return (
            <div className="auto-component">
                <input type="text" placeholder="请输入查询内容" className="auto-component-input" />
                <ul className="result-panel">
                    {
                        dataSource && dataSource.map(item => {
                            return <li key={item.id}>{item.userName}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}