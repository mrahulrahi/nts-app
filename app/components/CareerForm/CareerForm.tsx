import './CareerForm.css'

const CareerForm = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-box-1 d-flex flex-wrap glass-bg">
        <div className="contact-text">
          <h3>CONTACT</h3>
          <h1>GET IN TOUCH</h1>
 
        </div>

        <div className="contact-form">
          <form className="contact-form-box">
            <label>Name <span>*</span></label>
            <input type="text" className="form-control" />
            <label>Email <span>*</span></label>
            <input type="email" className="form-control" />

            <span className="d-flex justify-content-between">
              <input type="text" name="Name" placeholder="Name" id="form-name" />
              <input type="email" name="Email" placeholder="Email" id="form-email" />
            </span>
            <input type="text" name="Subject" placeholder="Subject" id="form-subject" />
            <br />
            <input type="text" name="Message" placeholder="Message" id="form-message" />
            <br />
            <input type="button" value="SEND MESSAGE" className="btn btn-default" />
          </form>
        </div>
      </div>

    </div>
  )
}

export default CareerForm