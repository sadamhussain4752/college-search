import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="universalFooter">
        <div className="container">


            <div className="footer_flex_wrap">
                <div className="CS_logo_tagline">
                    <span className="CS_logo_footer"></span>
                    <div className="tagline_wrap">
                        <h3>Discover and Find the <s>Best</s> Right College</h3>
                    </div>
                </div>

                <div className="CS_social_link">
                    <a target="_blank" href="https://www.facebook.com/CollegeSearch?fref=ts"
                        className="fb_footer">facebook</a>
                    <a target="_blank" href="https://twitter.com/india_colleges" className="twitter_footer">twitter</a>
                    <a target="_blank" href="https://www.linkedin.com/school/indiacollegesearch/"
                        className="linkedin_footer">linkedin</a>
                    <a target="_blank" href="https://www.instagram.com/collegesearch_in/"
                        className="instagram_footer">instagram</a>
                </div>

                <div className="CS_contact_details">
                    <a href="tel:+919228151258">+9192281 51258</a>
                    <a href="mailto:info@collegesearch.in">info@collegesearch.in</a>
                </div>

                <div className="CS_footer_link">
                    <a href="about-us.html">About Us</a>
                    <a href="contact-us.html">Contact Us</a>
                    <a href="privacy-policy.html"> Privacy Policy</a>
                    <a href="terms-and-conditions.html">Terms & Conditions</a>
                </div>
            </div>

            <div className="CS_copyright">
                <p>Copyright © 2025
                    SET EDUCATION TECHNOLOGY PRIVATE LIMITED
                    All rights
                    reserved</p>
            </div>
        </div>
    </footer>
  )
}
