

function Faq({
  question,
  answer, 
  isExpanded, 
  onClick
}) {
  return (
    <>
      <article className="faq-item">
        <div className="faq-question" onClick={onClick}>
          <h2>{question}</h2>
          <img
            src={isExpanded ? "/assets/images/icon-minus.svg" : "/assets/images/icon-plus.svg"}
            alt={isExpanded ? "minus-icon" : "plus-icon"}  
            className="icon" /> 
        </div>
        {isExpanded && <p className="faq-answer">{answer}</p>}
        {/* {expandedIndices.includes(index) && <p className="faq-answer">{item.answer}</p>} */}
      </article>
    </>
  )
}

export default Faq