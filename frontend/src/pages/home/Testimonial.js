import React from "react";
import R from '../../assets/images/avatars/R.png'
import quost from '../../assets/images/icons/quotes.svg'
const Testimonial = () => (
    <div class="testimonial">

        <h2 class="title">testimonial</h2>

        <div class="testimonial-card">

            <img src={R} alt="alan doe" class="testimonial-banner" width="80" height="80" />

            <p class="testimonial-name">Paimon</p>

            <p class="testimonial-title">CEO & Founder Invision</p>

            <img src={quost} alt="quotation" class="quotation-img" width="26" />

            <p class="testimonial-desc">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum
                dolor dolor sit amet.
            </p>

        </div>

    </div>
);

export default Testimonial;