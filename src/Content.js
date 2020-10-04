import React from 'react'
import Prof from './Prof'

const Content = ({ text }) => (
  <div className="content">
    <p>{text}</p>
    <Prof nom="Robert" prenom="Pirres" />
    <Prof nom="Georges" prenom="Weha" />
    <Prof nom="Gérard" prenom="Jirres" />
  </div>
);

export default Content
