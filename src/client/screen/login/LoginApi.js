import React from "react";



export default class LoginApi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "userName": "",
            "passWord": ""
        }
    }
    setParams = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    login() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Y2xpZW50X2lkOmNsaWVudF9zZWNyZXQ=");
        myHeaders.append("Content-type", "application/json");
        myHeaders.append("login-type", "jwt");
        myHeaders.append("data-type", "json");
        var raw = JSON.stringify({
            "userName": "datdv",
            "passWord": "123456"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        fetch("http://localhost:8080/public/api/auth/login", requestOptions)
            .then(response => {
                console.log(response)
                if (response.status == 200 ) {
                    return response.json()
                }
                throw Error(response.status)

            })

            .then(result => {
                console(result)
                localStorage.setItem("accessToken", result.accessToken)
                alert("Thanh cong")
                
            })
            .catch(error => {
                if (error.status == 403 ) {
                    console.log('error', error)
                    alert("sai ")
                }
                
            });
    }
    render() {
        return (
            <form>
                <div>
                    <label>
                        Username:
                    </label>
                    <input type="text" name="userName" onChange={this.setParams} />

                </div>
                <div>
                    <label>
                        Password:
                    </label>
                    <input type="password" name="passWord" onChange={this.setParams} />

                </div>
                <div>
                    <button type="button" onClick={this.login}>
                        Login
                    </button>

                </div>
            </form>
        )
    }
}