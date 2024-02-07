import React from 'react'
import Header from '../header/Header'
import "./style.css"
import pipoca from "../../assets/pipoca.svg"
import assistaNaTv from "../../assets/feature-1.png"
import watchWhereYouWant from "../../assets/feature-3.png"
import forKidsImg from "../../assets/feature-4.png"
import downloadImage from "../../assets/feature-2.png"
import OftenQuestionsContainer from '../oftenQuestionsContainer/OftenQuestionsContainer'

const Main = () => {
  return (
    <>
    <Header/>
    <div className='mainContentContainer'>
      <h1>Filmes, séries e muito mais, sem limites</h1>
      <p>Assista onde quiser. Cancele quando quiser.</p>

      <div className="formContainer">
        <p>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
        <div className='formData'>
          <input type="email" placeholder='E-Mail'/>
          <button className=''>Vamos Lá </button>
        </div>
      </div>

      <div className="plainsAd">
        <img src={pipoca} alt="imagem-pipoca" className='pipocaImg'/>
        <div className='textContainer'>
          <h3>A Netflix que você adora por apenas R$ 18,90.</h3>
          <p>Assine o plano Padrão com anúncios.</p>
          <p><a href="#">Saiba Mais</a></p>
        </div>
      </div>
    </div>

    <section className='watchOnTvSection'>
        <div className='textContainer'>
          <h1>Aproveite na TV</h1>
          <p>Assista em Smart TVs, PlayStation, Xbox, <br />Chromecast, Apple TV, aparelhos de Blu-ray e <br />outros dispositivos.</p>
        </div>

        <img src={assistaNaTv} alt="" />
      </section>

      <section className='watchWhereYouWant'>
        <img src={watchWhereYouWant} alt="" />
        <div className='textContainer'>
          <h1>Assista onde quiser</h1>
          <p>Assista a quantos filmes e séries quiser no <br />celular, tablet, laptop e TV.</p>
        </div>
      </section>

      <section className='forKids'>
        <div className='textContainer'>
          <h1>Crie perfis para <br /> crianças</h1>
          <p>Deixe as crianças se aventurarem com seus <br /> personagens favoritos em um espaço feito só <br /> para elas, sem pagar a mais por isso.</p>
        </div>
        <img src={forKidsImg} alt="" />
      </section>

      <section className='downloadSeries'>
        <img src={downloadImage} alt="download" />
        <div className='textContainer'>
          <h1>Baixe séries para assistir offline</h1>
          <p>Assista em um avião, trem ou submarino...</p>
        </div>
      </section>

      <section className='oftenQuestions'>

        <OftenQuestionsContainer/>

        
      </section>
    </>
  )
}

export default Main