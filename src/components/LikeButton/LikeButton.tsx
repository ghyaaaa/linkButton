import React, { useState } from 'react'
import cn from 'classnames'
import { ReactComponent as Hand  } from './hand.svg'

import './index.less'

//我们正在使用onAnimationEnd事件处理程序将状态重置clicked为false. 我们需要这样做，以便在每次单击按钮时反复播放动画。
const particleList = Array.from(Array(10));

export const LikeButton = () => {
  const [liked, setLiked] = useState<boolean>(false)
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <button
    onClick={() => {
      setLiked(!liked)
      setClicked(true)
    }}
    onAnimationEnd={() => setClicked(false)}
    className={cn("like-button-wrapper", {
      liked,
      clicked
    })}
    >
      {liked && (
        <div className="particles">
          {particleList.map((_, index) => (
            <div
              className="particle-rotate"
              style={{
                transform: `rotate(${
                  (360 / particleList.length) * index + 1
                }deg)`,
              }}
            >
              <div className="particle-tick" />
            </div>
          ))}
        </div>
      )}
      <div className="like-button">
        <Hand />
        <span>Like</span>
        <span className={cn("suffix", { liked })}>d</span>
      </div>
    </button>
  )
}