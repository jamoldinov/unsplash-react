import React from 'react'

function Uses() {
  return (
    <div><div>
    <ul className="mt-4">
      <li
        rel="noreferrer"
        className=" hover:scale-105 duration-300 h-full  w-full object-cover rounded-lg shadow-md"
      >
        <img
          src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDgxODV8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTY5NTg0NDQyM3ww&ixlib=rb-4.0.3&q=80&w=200"
          alt="name"
          className="mb-5 w-52 h-52 object-cover rounded-lg mx-auto"
        />
        <div>
          <h1 className="text-lg font-bold capitalize">
            Name: <i>Alvan Nee</i>
          </h1>

          <h1>
            Location: <i>Shanghai, China</i>
          </h1>
          {/* <Link to={data.user.portfolio_url}>
          Portfolio: <i>portfolio</i>
        </Link> */}
          <h1 className="mb-3">
            Photos: <i>114</i>
          </h1>
          <a href="https://github.com/jamoldinov" className=" btn">
            Read more
          </a>
        </div>
      </li>
    </ul>
  </div></div>
  )
}

export default Uses