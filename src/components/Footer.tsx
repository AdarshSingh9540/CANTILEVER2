
const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-gradient-to-b from-slate-800 to-slate-900 border-b-2 mt-xl-5 pt-4">
     
      <div className="container p-4">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="mb-4 lg:mb-0">
            <h5 className="text-uppercase mb-4 text-white">OUR WORLD</h5>

            <ul className="list-unstyled mb-4">
              <li>
                <a href="#!" className="text-white">About us</a>
              </li>
              <li>
                <a href="#!" className="text-white">Collections</a>
              </li>
              <li>
                <a href="#!" className="text-white">Environmental philosophy</a>
              </li>
              <li>
                <a href="#!" className="text-white">Artist collaborations</a>
              </li>
            </ul>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="mb-4 lg:mb-0">
            <h5 className="text-uppercase mb-4 text-white">Assistance</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">Contact us</a>
              </li>
              <li>
                <a href="#!" className="text-white">Size Guide</a>
              </li>
              <li>
                <a href="#!" className="text-white">Shipping Information</a>
              </li>
              <li>
                <a href="#!" className="text-white">Returns &amp; Exchanges</a>
              </li>
              <li>
                <a href="#!" className="text-white">Payment</a>
              </li>
            </ul>
          </div>
         

        
    <div className="mb-4 lg:mb-0 hidden lg:block">
    <h5 className="text-uppercase mb-4 text-white">Careers</h5>

    <ul className="list-unstyled">
      <li>
        <a href="#!" className="text-white">Jobs</a>
      </li>
    </ul>
  </div>
       
          <div className="text-white">
          <div className="lg:text-lg">
            You can post your blogs
          </div>
            <button type="submit" className="btn btn-outline-white btn-block text-white border p-2 mt-2"><a href="https://medium-client-front.vercel.app/signup">Checkout 🚀</a></button>
          </div>
       
        </div>
      
      </div>
   

      
      <div className="text-center text-white p-3 border-top border-white">
        © 2024 Copyright
        <a className="text-white ml-2" href="https://mdbootstrap.com/">Worldwire.com</a>
      </div>
      
    </footer>
  );
}

export default Footer;
