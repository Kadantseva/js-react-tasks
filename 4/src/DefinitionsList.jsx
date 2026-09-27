import React from 'react';

// BEGIN (write your solution here)
 class DefinitionsList extends React.Component {
    render() {
        const {data} = this.props;
        if (data.length == 0){
            return null;
        }
        return <dl>
            {data.map((item) => (
                <><dt key={item.id}>{item.dt}</dt>
                <dd>{item.dd}</dd>
                </>
            ))}
        </dl>
    }
}
export default DefinitionsList;
// END
