import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <div className="content-container d-flex align-items-center bg-pattern-dark min-vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="error-box bg-glass">
                                <h2>Error 404</h2>
                                <h4>Page Not Found!</h4>
                                <Link href="/" className="btn btn-default">Return Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}