import React from 'react';

// BEGIN (write your solution here)
class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {email: '', password: '', address: '', city: '', country: '', isAccept: false, isSubmit: false}
    }
    handleChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    handleChangePassword = (e) => {
        this.setState({password: e.target.value})
    }
    handleChangeAddress = (e) => {
        this.setState({address: e.target.value})
    }
    handleChangeCity = (e) => {
        this.setState({city: e.target.value})
    }
    handleChangeCountry = (e) => {
        this.setState({country: e.target.value})
    }
    handleChangeIsAccept = (e) => {
        this.setState({isAccept: !this.state.isAccept})
    }
    handleChangeIsSubmit = (e) => {
        this.setState({isSubmit: !this.state.isSubmit})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.handleChangeIsSubmit()
    }
    resultTable = () =>{
        return (
            <>
                <button type="button" className="btn btn-primary" onClick={this.handleChangeIsSubmit}>Back</button>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>acceptRules</td>
                        <td>{this.state.isAccept.toString()}</td>
                    </tr>
                    <tr>
                        <td>address</td>
                        <td>{this.state.address}</td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td>{this.state.city}</td>
                    </tr>
                    <tr>
                        <td>country</td>
                        <td>{this.state.country}</td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td>{this.state.email}</td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td>{this.state.password}</td>
                    </tr>
                    </tbody>
                </table>
                </>
        )
    }
    editTable = () => {
        return (<form name="myForm" onSubmit={this.handleSubmit}>
            <div className="col-md-6 mb-3">
                <label htmlFor="email" className="col-form-label">Email</label>
                <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={this.handleChangeEmail}
                value={this.state.email}
                />
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="password" className="col-form-label">Password</label>
                <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={this.handleChangePassword}
                value={this.state.password}
                />
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="address" className="col-form-label">Address</label>
                <textarea
                type="text"
                className="form-control"
                name="address"
                id="address"
                placeholder="1234 Main St"
                onChange={this.handleChangeAddress}
                value={this.state.address}
                ></textarea>
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="city" className="col-form-label">City</label>
                <input type="text" className="form-control" name="city" id="city" 
                onChange={this.handleChangeCity}
                value={this.state.city}
                />
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="country" className="col-form-label">Country</label>
                <select id="country" name="country" className="form-control" onChange={this.handleChangeCountry}
                value={this.state.country}>
                <option value="">Choose</option>
                <option value="argentina">Argentina</option>
                <option value="russia">Russia</option>
                <option value="china">China</option>
                </select>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-check">
                <label className="form-check-label" htmlFor="rules">
                    <input
                    id="rules"
                    type="checkbox"
                    name="acceptRules"
                    className="form-check-input"
                    onChange={this.handleChangeIsAccept}
                    checked={this.state.isAccept}
                    />
                    Accept Rules
                </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        )
    }
    render(){
        return(
            <div>
            {this.state.isSubmit ? this.resultTable() : this.editTable()}
            </div>
        )
    }
}
export default MyForm;
// END
