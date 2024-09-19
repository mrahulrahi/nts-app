import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <div className="content-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="error-box bg-dark-grey">
                                <h2>404</h2>
                                <h4>Not Found</h4>
                                <Link href="/" className="btn btn-default">Return Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}