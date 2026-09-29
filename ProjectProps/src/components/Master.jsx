import {Bookmark} from 'lucide-react' 

function Master(props) {
  return (
   <>
   <div className="parentCard">
        <div className="card">
          <div className="top">
            <img src={props.logo} />
            <button>Save <Bookmark size={15} /> </button>
          </div>

          <div className="middle">
              <h3>{props.company} <span>{props.dateOfPost}</span></h3>
              <h2>{props.position}</h2>
              <div>
                <h4>{props.type}</h4>
                <h4>{props.level}</h4>
              </div>
          </div>

          <div className="bottom">
                <div>
                  <h2>{props.pay}</h2>
                  <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
          </div>
        </div>
      </div>

   </>
  )
}

export default Master
