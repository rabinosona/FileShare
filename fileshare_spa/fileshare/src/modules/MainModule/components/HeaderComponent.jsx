import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import mainCss from "./css/SignInComponent.module.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import classNames from "classnames";

export default class HomePageComponent extends Component {
    render() {
        return (
            <div className={mainCss.header}>
                <div className={mainCss.header_logo_container}>
                    <div className={mainCss.header_logo}> Oche bien filehsare!</div>
                </div>
                <Button
                    className={classNames({
                        [mainCss.header_home]: true,
                        [mainCss.button]: true
                    })}
                    bsStyle="link"
                >
                    Home
        </Button>
                <Button
                    className={classNames({
                        [mainCss.header_sign_in]: true,
                        [mainCss.button]: true
                    })}
                    bsStyle="link"
                >
                    Sign in
        </Button>
                <Link to="/signup">
                    <Button
                        className={classNames({
                            [mainCss.header_sign_up]: true,
                            [mainCss.button]: true
                        })}
                        bsStyle="link"
                    >
                        Sign up
        </Button>
                </Link>
                <FormControl
                    className={mainCss.header_search}
                    bsStyle=""
                    placeholder="Enter text"
                />
            </div>
        );
    }

}