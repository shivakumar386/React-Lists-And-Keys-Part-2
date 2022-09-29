// import './index.css'

// const CardItem = props => {
//   const {cardDetails} = props
//   const {title, description, imgUrl, className} = cardDetails
//   return (
//     <div className={`card ${className}`}>
//       <div>
//         <h1 className="heading-one">{title}</h1>
//         <p className="paragraph-one">{description}</p>
//         <img className="images" src={imgUrl} alt="avatar" />
//       </div>
//     </div>
//   )
// }

// export default CardItem

import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
