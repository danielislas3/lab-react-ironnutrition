import React from 'react'

const foodBox = ({calories,image,name,quantity, test}) => {
  return (
    <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={image} alt={name}/>
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{name}</strong> <br />
            <small>{calories}</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input
              name="quantity"
              className="input"
              type="number" 
              value={quantity}

           onChange={test} />
          </div>
          <div className="control">
            <button className="button is-info"> 
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>
  )
}

export default foodBox
