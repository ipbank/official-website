export class Api {

    //dev env
    // static ipbankServiceAddress = "http://ipbank-engine.v.com/api/v2";
    //test env
    // static standardProtocolServiceAddress = "https://test-engine.ipbank.com/api/v2";
    //uat env

    //prod env

    standardprotocol = {


    };

    constructor() {
        for (let i in this.standardprotocol) {
            // this.standardprotocol[i] = Api.standardProtocolServiceAddress + this.standardprotocol[i];
        }
    }

}
