export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="content-container bg-pattern-dark">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}