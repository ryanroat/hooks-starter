import React, { useState } from 'react'

export const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      {isToggled && <h2>Hello</h2>}
    </div>
  )
}
