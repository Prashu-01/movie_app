import React from 'react'

export default function Footer() {
  return (
    <div className="footer" style={{padding:'2rem'}}>
      <div className="contain">
        <div className="left" style={{width:'60%'}} >
          <h3 style={{ fontWeight: 'bold' }}>About Showhere</h3>
          <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident facere eius dolor minima delectus assumenda quaerat, reiciendis asperiores, ad veritatis illo. Debitis, aut explicabo. Nesciunt et quasi dolore natus ullam iusto obcaecati at sequi aliquid aut modi repudiandae hic deserunt eius dolores quo accusantium quod expedita quisquam inventore officiis soluta Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, a?</p>
        </div>
        <div className="right" >
          <h4 style={{ fontWeight: 'bold' }}>Popular Shows</h4> <br />
          <a href="/" className="item">Lorem</a> <br />
          <a href="/" className="item">Lorem</a> <br />
          <a href="/" className="item">lorem</a> <br />
          <a href="/" className="item">lorem</a> <br />
          <a href="/" className="item">lorem</a> <br />
          <a href="/" className="item">lorem</a> <br />
        </div>
      </div>
      
    </div>
  )
}
