import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./footer.css";

const footer = props => {
    return (
        <footer id="footer"> 
        <div class="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
        </div>
        <div class="midFooter">
        <h1>JALARAM CREATION</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Vedang Thakkar</p>

        </div>
        <div class="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/thakkar__vedang/">Instagram</a>
        <a href="https://www.youtube.com/channel/UCIwoozM7wcSC9rVhfct5arw">Youtube</a>
        <a href="https://www.facebook.com/vedang.thakkar.5">Facebook</a>
        </div>


</footer>);
};
export default footer;
