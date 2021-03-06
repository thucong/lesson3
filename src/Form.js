import React, { Component } from "react";
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            email : "",
            password : "",
            repassword : "",
            notif: {
                name: false,
                email: false,
                password: false,
                repassword: false,
                succ: false
            }
        }
    }
    onChangeName = (e) => {
        this.setState({ name: e.target.value});
    }
    onChangeEmail = (e) => {
        this.setState({ email: e.target.value});
    }
    onChangePass = (e) => {
        this.setState({ password: e.target.value});
    }
    onChangeRePass = (e) => {
        this.setState({ repassword: e.target.value});
    }
    onBlurName = () => {
        const name = this.state.name;
        if(!name){
            const notif = this.state.notif;
            notif.name = true;
            this.setState({notif: notif});
        }else {
            const notif = this.state.notif;
            notif.name = false;
            this.setState({notif: notif});
        }
    }
    onBlurEmail = () => {
        const email = this.state.email;
        if(!email) {
            const notif = this.state.notif;
            notif.email = true;
            this.setState({notif});
        }else {
            const notif = this.state.notif;
            notif.email = false;
            this.setState({notif});
        }
    }
    onBlurPass = () => {
        const password = this.state.password;
        if(!password) {
            const notif = this.state.notif;
            notif.password = true;
            this.setState({notif});
        }else {
            const notif = this.state.notif;
            notif.password = false;
            this.setState({notif});
        }
        this.onBlurRePass();
    }
    onBlurRePass = () => {
        const repassword = this.state.repassword;
        const password = this.state.password;
        if(password !== repassword) {
            const notif = this.state.notif;
            notif.repassword = true;
            this.setState({notif});
        }else {
            const notif = this.state.notif;
            notif.repassword = false;
            this.setState({notif});
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, repassword} = this.state;
        if( name && email && password && password === repassword){
            const {notif} = this.state;
            notif.succ = true;
            this.setState({notif});
            this.setState({
                name: "",
                email: "",
                password: "",
                repassword: "",
            })
        }else if (!name){
            const notif = this.state.notif;
            notif.name = true;
            this.setState({notif: notif});
        }else if (!email){
            const notif = this.state.notif;
            notif.email = true;
            this.setState({notif: notif});
        } else if (!password){
            const notif = this.state.notif;
            notif.password = true;
            this.setState({notif: notif});
        }else if (password !== repassword){
            const notif = this.state.notif;
            notif.repassword = true;
            this.setState({notif: notif});
        }
    }
    render() {
        const {name, email, password, repassword} = this.state;
        return (
            <div className="col-lg-4 col-md-6 content jumbotron mt-1 ml-2">
                <h1 className="center h1">????ng k?? t??i kho???n</h1>
                <form >
                    <div className="info mt-2">
                        <label>H??? v?? t??n (*):</label>
                        <input type="text" name="name"  className="form-control mt-2" placeholder="" onChange={this.onChangeName} onBlur={this.onBlurName} value={name}/>
                    </div>
                    {this.state.notif.name ? <p className="text-danger mt-1">H??? t??n kh??ng ???????c ????? tr???ng</p> : ""}
                    <div className="info mt-2">
                        <label >E-mail (*):</label>
                        <input type="text" name="email"  className="form-control mt-2" placeholder="" onChange={this.onChangeEmail} onBlur={this.onBlurEmail} value={email}/>
                    </div>
                    {this.state.notif.email ? <p className="text-danger mt-1">Email kh??ng ???????c ????? tr???ng</p> : ""}
                    <div className="info mt-2">
                        <label >M???t kh???u (*):</label>
                        <input type="password" name="password"  className="form-control mt-2" placeholder="" onChange={this.onChangePass} onBlur={this.onBlurPass} value={password}/>
                    </div>
                    {this.state.notif.password  ? <p className="text-danger mt-1">M???t kh???u kh??ng ???????c ????? tr???ng!</p> : ""}
                    <div className="info mt-2">
                        <label >X??c nh???n l???i m???t kh???u (*):</label>
                        <input type="password" name="repassword"  className="form-control mt-2" placeholder="" onChange={this.onChangeRePass} onBlur={this.onBlurRePass} value={repassword}/>
                    </div>
                    {this.state.notif.repassword ? <p className="text-danger mt-1">M???t kh???u kh??ng tr??ng kh???p !</p> : ""}
                    {this.state.notif.succ ? <p className="text-danger mt-1">????ng k?? th??nh c??ng !</p> : ""}
                    <div className="right-w3l mt-2">
                        <button type="button" className="btn btn-success center mt30" onClick={this.onSubmit}>????ng k??</button>
                    </div>
                 </form>
             </div>
        )
    }
}
export default Form