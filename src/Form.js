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
                <h1 className="center h1">Đăng ký tài khoản</h1>
                <form >
                    <div className="info mt-2">
                        <label>Họ và tên (*):</label>
                        <input type="text" name="name"  className="form-control mt-2" placeholder="" onChange={this.onChangeName} onBlur={this.onBlurName} value={name}/>
                    </div>
                    {this.state.notif.name ? <p className="text-danger mt-1">Họ tên không được để trống</p> : ""}
                    <div className="info mt-2">
                        <label >E-mail (*):</label>
                        <input type="text" name="email"  className="form-control mt-2" placeholder="" onChange={this.onChangeEmail} onBlur={this.onBlurEmail} value={email}/>
                    </div>
                    {this.state.notif.email ? <p className="text-danger mt-1">Email không được để trống</p> : ""}
                    <div className="info mt-2">
                        <label >Mật khẩu (*):</label>
                        <input type="password" name="password"  className="form-control mt-2" placeholder="" onChange={this.onChangePass} onBlur={this.onBlurPass} value={password}/>
                    </div>
                    {this.state.notif.password  ? <p className="text-danger mt-1">Mật khẩu không được để trống!</p> : ""}
                    <div className="info mt-2">
                        <label >Xác nhận lại mật khẩu (*):</label>
                        <input type="password" name="repassword"  className="form-control mt-2" placeholder="" onChange={this.onChangeRePass} onBlur={this.onBlurRePass} value={repassword}/>
                    </div>
                    {this.state.notif.repassword ? <p className="text-danger mt-1">Mật khẩu không trùng khớp !</p> : ""}
                    {this.state.notif.succ ? <p className="text-danger mt-1">Đăng ký thành công !</p> : ""}
                    <div className="right-w3l mt-2">
                        <button type="button" className="btn btn-success center mt30" onClick={this.onSubmit}>Đăng ký</button>
                    </div>
                 </form>
             </div>
        )
    }
}
export default Form