class Auth{
    constructor(){
        this.loggedIn = false
        this.authenticated = false
        // localStorage.setItem("is_admin",0);
    }

    login = (redirect) => {
        this.loggedIn = true
        redirect()
    }

    logout = () => {
        this.loggedIn = false
    }
}

export default new Auth()