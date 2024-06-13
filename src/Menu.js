import SocialMediaIcons from './socialMediaIcons';
const Menu = () => {
    return ( 

        <div class="Menu">
            <div className="logo">
                <h2>Be</h2>
                <br></br>
                Personal
                Trainer
            </div>





            <div className="menu-buttons">
                <button>HOME</button>
                <button>ABOUT ME</button>
                <button>OFFER</button>
                <button>PRICE LIST</button>
                <button>CHANGE</button>
                <button>GALLERY</button>
                <button>CONTACT</button>
                <button>BUY NOW</button>
            </div>

            <div className="contact-us">
                <SocialMediaIcons/>
            </div>
        </div>
     );
}
 
export default Menu;