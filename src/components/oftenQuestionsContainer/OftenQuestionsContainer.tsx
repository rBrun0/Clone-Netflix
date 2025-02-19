import { useState } from "react";
import "./style.css"

const OftenQuestionsContainer = () => {


  const oftenQuestion = [{
    question:"O que é a Netflix?",
    content: "A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."

},
{
    question:"Quanto custa a Netflix?",
    content: "Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 18,90 a R$ 55,90 por mês. Sem contrato nem taxas extras."
},
{
    question:"Onde posso assistir?",
    content:"Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar."
},
{
    question: "Como faço para cancelar?",
    content: "A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."
}
];

const [questionOpen, setQuestionOpen] = useState<number | null>(null)


const openQuestion = (index: number) => {
  if(questionOpen == index){
    setQuestionOpen(null)
    console.log(questionOpen)
  }
  setQuestionOpen(index)
}

  return (
    <section className="oftenQuestionsSection">
      <h1 className="oftenQuestions">Perguntas Frequentes</h1>
     {
        oftenQuestion.map((quest, index) => (
          <div className="questionContainerDiv">
            <h1 className="questionTitle" onClick={() => openQuestion(index)}>{quest.question}</h1>
          <p className="questionContent" style={{height: questionOpen == index ? "auto" : "0", display: questionOpen == index ? "flex" : "none"}}>{quest.content}</p>
          </div>
        ))
      }
    </section>
  )
}

export default OftenQuestionsContainer