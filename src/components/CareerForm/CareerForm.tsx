import './CareerForm.css'

const CareerForm = () => {
  return (
    <div className="career-wrapper d-flex flex-wrap">
      <div className="career-left">
        <h3>Join Our Team</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam nihil praesentium vitae nesciunt voluptate perferendis tempore recusandae cumque ut.</p>
      </div>

      <div className="career-right">
        <form className="career-form-box">
          <div className="row g-3">
            <div className="col-md-6"><input className="form-control" type="text" placeholder="First Name" id="form-name" /></div>
            <div className="col-md-6"><input className="form-control" type="text" placeholder="Last name" id="form-email" /></div>
            <div className="col-md-6"><input className="form-control" type="email" placeholder="Email" id="form-email" /></div>
            <div className="col-md-6"><input className="form-control" type="tel" placeholder="Phone" id="form-email" /></div>
            <div className="col-md-12"><input className="form-control" type="text" placeholder="Subject" id="form-subject" /></div>
            <div className="col-md-12"><input className="form-control" type="text" placeholder="Message" id="form-message" /></div>
            <div className="col-md-12"> <input className="btn btn-default" type="button" value="Send" /></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CareerForm