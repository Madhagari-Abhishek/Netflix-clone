* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: black;
  color: white;
  font-family: "Poppins", sans-serif;
}

.navbar {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 3% 5%;
  z-index: 10;
}

.navbar__brand {
  width: 100px;
  height: 100%;
}

.brand__logo {
  width: 100%;
  height: 100%;
}

.language__drop__down {
  background: black;
  border: none;
  color: white;
}

.language__drop__down:focus {
  outline: none;
}

.dropdown__container {
  border: 1px solid white;
  padding: 0.4rem;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.6);
}

.signin__button {
  background-color: #dc030f;
  border: #dc030f 1px solid; 
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.navbar__nav__items {
  display: flex;
  gap: 10px;
}

.hero__bg__img__container {
  width: 100%;
  height: 80vh;
}

.hero__bg__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__bg__overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 80vh;
  background-color: rgba(0,0,0,0.6);
  background-image: linear-gradient(to top, rgba(0,0,0,0.6)0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100% );
}

.hero__card {
  position: absolute;
  top: 20%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hero__title {
  font-weight: 600;
  font-size: 2rem;
}

.hero__subtitle, 
.hero__description {
  font-weight: 400;
  font-size: 1rem;
}

.hero__description {
  margin: 0 50px;
}

.email__input {
  border: none;
  background: transparent;
  height: 100%;
  width: 100%;
  padding-left: 7px;
}

.email__label {
  color: rgb(153,149,149);
  position: absolute;
  top: 28%;
  left: 2%;
  transition: 0.5s;
}

.email__form__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.form__container {
  background-color: white;
  width: 90%;
  height: 50px;
  position: relative;
}

.email__input:focus + .email__label {
  top: 0.2rem;
  font-size: 10px;
}

.email__input:not(:placeholder-shown).email__input:not(:focus) + .email__label{
  top: 0.2rem;
  font-size: 10px;
}

.email__input:focus-visible {
  outline: none;
}

.primary__button {
  background-color: #dc030f;
  border: #dc030f 1px solid; 
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 2px;
  font-size: 15px;
  letter-spacing: 1px;
}

.feature {
  border-top: 8px solid #222;
  padding: 2rem 1rem;
}

.feature__details {
  text-align: center;
}

.feature__title {
  font-weight: 600;
  font-size: 25px;
  margin: 10px 0;
}

.feature__sub__title {
  font-size: 15px;
  font-weight: 400;
}

.feature__image__container {
  width: 100%;
  position: relative;
}

.feature__image {
  width: 100%;
}

.feature__background__video__container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 20%;
  z-index: -2;
  max-width: 74%;
  max-height: 54%;
  left: 13%;

}

.feature_background_video {
  width: 100%;
}

.feature__2__poster__container {
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 16em;
  display: flex;
  align-items: center;
  background-color: black;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  height: 60px;
  padding: 0.25rem 0.6rem;
  gap: 15px;
}

.poster__container {
  width: 20%;
}

.poster {
  width: 100%;
  height: 100%;
}

.poster__details {
  width: 60%;
}

.poster__details > h4 {
  font-size: 13px;
  font-weight: 500;
}

.poster__details > h6 {
  font-size: 12px;
  font-weight: 400;
  color: rgb(63, 63, 246);
}

.download__gif__container {
  width: 20%;
  height: 100%;
}

.gif {
  width: 100%;
  height: 100%;
}

.feature__3__background__video__container {
  max-width: 63%;
  max-height: 47%;
  z-index: -2;
  top: 9%;
  left: 19%;
}

.FAQ__accordian {
  width: 100%;
}

.FAQ__title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  font-size: 18px;
  background-color: #303030;
  border: 1px solid #303030;
  color: white;
}

.FAQ__visible {
  background-color: #303030;
  border-top: 1px solid black;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
}

.FAQ__visible > p {
  margin: 1rem;
}

.FAQ__list__container {
  border-top: 8px solid #222;
  padding: 2rem 0;
}

.FAQ__heading {
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  margin: 1rem 3rem;
}

.FAQ__list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.FAQ__get__started__email {
  text-align: center;
}

.FAQ__get__started__email > h3 {
  font-size: 18px;
  font-weight: 400;
  margin: 2rem 0;
}

footer {
  border-top: 8px solid #333;
  padding: 2rem 1rem;
  color: #757575;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer__row__1 > h4 {
  font-size: 15px;
  font-weight: 500;
}

.footer__row__2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}

.footer__row__3 > .dropdown__container {
  width: fit-content;
  border: 1px solid #757575;
  color: #757575;
}

.footer__row__3 > .dropdown__container > .language__drop__down {
  color: #757575;
}

.column__1,
.column__2,
.column__3,
.column__4 {
  font-size: 13px;
}

@media (min-width: 768px) {
  .hero__bg__img__container {
    height: 100vh;
  }
  
  .hero__bg__overlay {
    height: 100vh;
  }

  .hero__card {
    top: 40%;
    left: 30%;
    transform: translate(-20%,-20%);
  }

  .hero__title {
    font-size: 3rem;
  }  

  .hero__subtitle, 
  .hero__description {
    font-size: 1.3rem;
  }
 
  .feature {
    padding: 4rem;
  }

  .feature__title {
    font-size: 35px;
  }

  .feature__sub__title {
    font-size: 20px;
  }

  .feature__2__poster__container {
    max-width: 26em;
    height: 85px;
  }

  .poster__container {
    width: 15%;
  }

  .download__gif__container {
    width: 3rem;
    height: 3rem;
  }

  .poster__details > h4 {
    font-size: 18px;
  }

  .poster__details > h6 {
    font-size: 14px;
  }

  .FAQ__title {
    font-size: 20px;
  }

  .FAQ__heading {
    font-size: 38px;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .FAQ__list {
    padding: 1rem 5rem;
  }

  .FAQ__get__started__email {
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateX(15%);
  }

}

@media (min-width: 1024px) {
  .navbar {
    padding: 2% 5%;
  }
  
  .navbar__brand {
    width: 150px;
  }

  .signin__button {
    padding: 10px 20px;
    font-size: 18px;

  }

  .dropdown__container {
    padding: 10px 5px;
  }

  .navbar__nav__items {
    gap: 30px
  }

  .hero__card {
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .form__container {
    width: 50%;
  }

  .email__form__container {
    flex-direction: row;
    gap: 1px;
  }

  .primary__button {
    height: 50px;
    border-radius: 0;
  }

  .feature {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .feature__details {   
    text-align: left;
    padding: 0 6rem;
  }

  .feature__title {
    font-size: 50px;
  }

  .feature__sub__title {
    font-size: 25px;
  }

  .feature__image__container {
    max-width: 500px;
  }

  .feature:nth-child(even) {
    flex-direction: row-reverse;
  }

  .feature__2__poster__container {
    max-width: 20em;
    height: 100px;
    padding: 1rem;
  }

  .poster__container {
    width: 20%;
  }

  .FAQ__list {
    padding: 1rem 25rem;
  }

  .FAQ__get__started__email {
    transform: translateX(16%);
  }

  footer {
    padding: 2rem 25rem;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }

  .footer__row__2 {
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
  }

  .footer__row__1, 
  .footer__row__3, 
  .footer__row__4 {
  align-self: flex-start;
  }

}

@media (min-width: 1254px) {
}