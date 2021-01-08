import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>{t('login')}</h3>

                <div className="form-group">
                    <label>{t('loginform.email')}</label>
                    <input type="email" className="form-control" placeholder={t('loginform.enteremail')} />
                </div>

                <div className="form-group">
                    <label>{t('loginform.password')}</label>
                    <input type="password" className="form-control" placeholder={t('loginform.enterpassword')} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">{t('loginform.rememberme')}</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">{t('loginform.signin')}</button>
                <p className="forgot-password text-right">
                {t('loginform.forgot')} <a href="#">{t('loginform.password')}?</a>
                </p>
            </form>
        );
    }
}