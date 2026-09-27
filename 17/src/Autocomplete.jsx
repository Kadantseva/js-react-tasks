import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
class AutoComplete extends React.Component{
    constructor(props){
        super(props)
        this.state = {country: '', countries: []}
    }
    handleChange = async (e) => {
        this.setState({ country: e.target.value });
        if (e.target.value.length != 0){
            const res = await axios.get("/countries", { params: { term: e.target.value } });
            this.setState({ countries: res.data });
        }
    };
    render(){
        return(
            <div>
                <form>
                    <input type="text" value={this.state.country} className="form-control" placeholder="Enter Country" onChange={this.handleChange} />
                </form>
                {this.state.countries.length != 0 && (this.state.country.length != 0) &&
                <ul>
                    {this.state.countries.map((v) => <li key={v}>{v}</li>)}
                </ul>
                }
            </div>
        )
    }
}
export default AutoComplete
// END
