export default function Register() {
    return (
      <>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            {/* form */}
  
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              
                
              <br></br>
              
              <button type="submit" class="btn btn-dark">
                Register
              </button>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </>
    );
  }
  