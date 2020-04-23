import React from 'react'

import './style.scss'
import CollectionItem from '../CollectionItem/view'
import Slider from '../Slider'
import { Link } from 'react-router-dom'

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collectionPreview">
      <h1 className="title">
        <Link to={`/shop/${title.toLowerCase()}`}>
          {title.toUpperCase()}
        </Link>
      </h1>
      <div className="preview">
        {
          window.innerWidth < 628
            ? <>
            <Slider loop={true}
              selected={0}
              showArrows={true}>
              {
                items
                  .filter((item, idx) => idx < 4)
                  .map((item) =>
                    <CollectionItem key={item.id} item={item} />
                  )
              }
            </Slider>
            <div className="see-more">
              <Link to={`/shop/${title.toLowerCase()}`}>See more...</Link>
            </div>
            </>
            : items
              .filter((item, idx) => idx < 4)
              .map((item) =>
                <CollectionItem key={item.id} item={item} />
              )

        }
      </div>
    </div>
  )
}

export default CollectionPreview