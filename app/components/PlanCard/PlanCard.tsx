import './PlanCard.css'

const PlanCard = () => {
    return (

        <div className="content-container pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-box d-flex flex-wrap">
                            <div className="heading text-center">
                                <h3>Plans</h3>
                            </div>

                            <div className="plan-list d-flex flex-wrap align-items-center justify-content-center">
                                <div className="plan d-flex flex-column align-items-center justify-content-between">
                                    <h4 className="plan-title">FREE</h4>
                                    <h5 className="plan-price">$0/month</h5>
                                    <h6>For hobby projects or small teams.</h6>
                                    <ul className="plan-features">
                                        <li className="plan-feature">1 Workspace</li>
                                        <li className="plan-feature">Unlimited Traffic</li>
                                        <li className="plan-feature">10GB Storage</li>
                                        <li className="plan-feature">Basic Support</li>
                                    </ul>
                                    <div>
                                        <button className="btn btn-light">CHOOSE PLAN</button>
                                    </div>
                                </div>
                                <div className="plan d-flex flex-column align-items-center justify-content-between plan-highlighted">
                                    <h4 className="plan-annotation">RECOMMENDED</h4>
                                    <h4 className="plan-title">PLUS</h4>
                                    <h5 className="plan-price">$29/month</h5>
                                    <h6>For ambitious projects.</h6>
                                    <ul className="plan-features">
                                        <li className="plan-feature">5 Workspaces</li>
                                        <li className="plan-feature">Unlimited Traffic</li>
                                        <li className="plan-feature">100GB Storage</li>
                                        <li className="plan-feature">Plus Support</li>
                                    </ul>
                                    <div>
                                        <button className="btn btn-default">CHOOSE PLAN</button>
                                    </div>
                                </div>
                                <div className="plan d-flex flex-column align-items-center justify-content-between">
                                    <h4 className="plan-title">PREMIUM</h4>
                                    <h5 className="plan-price">$99/month</h5>
                                    <h6>Your enterprise solution.</h6>
                                    <ul className="plan-features">
                                        <li className="plan-feature">10 Workspaces</li>
                                        <li className="plan-feature">Unlimited Traffic</li>
                                        <li className="plan-feature">Unlimited Storage</li>
                                        <li className="plan-feature">Priority Support</li>
                                    </ul>
                                    <div>
                                        <button className="btn btn-light">CHOOSE PLAN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanCard