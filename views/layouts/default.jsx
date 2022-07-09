
const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
      <title>{html.title || 'Default'}</title>
      {/* normalize & skeleton links */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" crossOrigin='anonymous'/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" crossOrigin='anonymous'/>
      <link rel="stylesheet" href="/main.css" />
      <link rel="shortcut icon" href="https://cdn.pixabay.com/photo/2014/04/03/10/42/bread-311169__340.png" type="image/x-icon" />
    </head>
    <body>
      <div className="wrapper">
        <header>
          <h1 className='heading'><a href="/breads">BreadCRUD</a></h1>
        </header>
        <div className="container">
          {html.children}
        </div>
      </div>
    </body>
    </html>
  )
}

module.exports = Default
