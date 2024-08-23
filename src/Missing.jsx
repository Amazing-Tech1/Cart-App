import React from 'react'

function Missing() {
  return (
    <article style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "red"
    }}>
      <h2>Page does not Exist</h2>
      <p>Well, that's disappointing..</p>
      <p>
        <Link to="/">
          Go back
        </Link></p>
    </article>
  )
}

export default Missing
