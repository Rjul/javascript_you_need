// defined variable for YOU NEED

class Conf {
    _dev_env = 'prod';
    _debug_verbose = false;
    constructor(env, verbose){
        this._dev_env = env;
        this._debug_verbose = verbose;
    }
    get getDebugConf(){
        if (this._dev_env != 'prod'){
            return this._debug_verbose;
        }
        else{
            return false;
        }
        
    }

}

export default Conf;