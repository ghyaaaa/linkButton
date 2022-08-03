import React, { useState } from 'react'
import cn from 'classnames'
import { ReactComponent as Hand  } from './hand.svg'

export const LikeButton = () => {
  const [liked, setLiked] = useState<boolean>(false)

  return (
    <button
    onClick={() => setLiked(!liked)}
    className={cn("like-button-wrapper", {
      liked,
    })}
    >
      <div className="like-button">
        <Hand />
        <span>Like</span>
        <span className={cn("suffix", { liked })}>d</span>
      </div>
    </button>
  )
}