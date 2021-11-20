import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*column1 */}
                    <div className="col">
                        <h4>Get to Know Us</h4>
                        <ul className="list-unstyled">
                            <li>Careers</li>
                            <li>Amazon and Our Planet</li>
                            <li>Investor Relations</li>
                        </ul>
                    </div>

                    {/*column2 */}
                    <div className="col">
                        <h4>Amazon Payment Products</h4>
                        <ul className="list-unstyled">
                            <li>Shop with Points</li>
                            <li>Reload Your Balance</li>
                            <li>Amazon Currency Converter</li>
                        </ul>
                    </div>

                    {/*column3 */}
                    <div className="col">
                        <h4>Make Money with Us</h4>
                        <ul className="list-unstyled">
                            <li>Sell on Amazon</li>
                            <li>Amazon Associates</li>
                            <li>Sell on Amazon Handmade</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Amazon.com, Inc. or its affiliates | All Rights Reserved | Terms of Services | Privacy
                    </p>
                </div>
            </div>            
        </div>
    )
}

export default Footer
