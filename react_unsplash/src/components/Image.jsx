import { Link } from "react-router-dom";
const Image = ({ data }) => {
  console.log(data)
  return (
    <div className="mt-4">
      <div rel="noreferrer" className=" hover:scale-105 duration-300 h-full  w-full object-cover rounded-lg shadow-md">
        <img
          src={data.urls.small}
          alt={data.alt_description}
          className="mb-5 w-52 h-52 object-cover rounded-lg mx-auto"
        />
        <div><h1 className="text-lg font-bold capitalize">Name: <i>{data.user.name}</i></h1>
        
              <h1 >
                Location: <i>{data.user.location}</i>
              </h1>
              {/* <Link to={data.user.portfolio_url}>
                Portfolio: <i>portfolio</i>
              </Link> */}
              <h1 className="mb-3">
                {" "}
                Photos: <i>{data.user.total_photos}</i>
              </h1>
            <a href={data.user.portfolio_url} className=" btn">Read more</a>
            </div>
          
        
        </div>
      </div>
       
    
  );
};

export default Image;
