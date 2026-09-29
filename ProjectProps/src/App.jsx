import Master from './components/Master'


function App() {

const jobOpenings = [
  {
    brandLogo: "https://img.logo.dev/google.com?token=pk_MlS9OlnBRXWcMg2KFLjK2Q&format=webp&retina=true",
    dateOfPost: "5 days ago",
    company: "Google",
    position: "Senior Python Developer",
    pay: "$120/hr",
    type: "Full-time",
    level: "Senior",
    location: "Pune, India",
  },
  {
    brandLogo: "https://img.logo.dev/ibm.com?token=pk_MlS9OlnBRXWcMg2KFLjK2Q&format=png&retina=true",
    dateOfPost: "7 days ago",
    company: "IBM",
    position: "Junior Graphics Designer",
    pay: "$25/hr",
    type: "Part-time",
    level: "Junior",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://img.logo.dev/apple.com?token=pk_MlS9OlnBRXWcMg2KFLjK2Q&format=png&retina=true",
    dateOfPost: "2 days ago",
    company: "Apple",
    position: "iOS Developer",
    pay: "$95/hr",
    type: "Full-time",
    level: "Mid-level",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://img.logo.dev/microsoft.com?token=pk_MlS9OlnBRXWcMg2KFLjK2Q&format=png&retina=true",
    dateOfPost: "10 days ago",
    company: "Microsoft",
    position: "Cloud Solutions Architect",
    pay: "$140/hr",
    type: "Full-time",
    level: "Senior",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://img.logo.dev/amazon.com?token=pk_MlS9OlnBRXWcMg2KFLjK2Q&format=png&retina=true",
    dateOfPost: "3 days ago",
    company: "Amazon",
    position: "Junior React Developer",
    pay: "$30/hr",
    type: "Part-time",
    level: "Junior",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://img.logo.dev/meta.com?token=pk_MlS9OlnBRXWcMg2KFLjK2Q&format=png&retina=true",
    dateOfPost: "1 day ago",
    company: "Meta",
    position: "UI/UX Designer",
    pay: "$80/hr",
    type: "Full-time",
    level: "Mid-level",
    location: "Pune, India",
  },
  {
    brandLogo: "https://img.logo.dev/netflix.com?token=pk_MlS9OlnBRXWcMg2KFLjK2Q&format=png&retina=true",
    dateOfPost: "14 days ago",
    company: "Netflix",
    position: "Backend Developer (Node.js)",
    pay: "$110/hr",
    type: "Full-time",
    level: "Senior",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://img.logo.dev/infosys.com?token=pk_MlS9OlnBRXWcMg2KFLjK2Q&format=png&retina=true",
    dateOfPost: "6 days ago",
    company: "Infosys",
    position: "Junior Java Developer",
    pay: "$18/hr",
    type: "Full-time",
    level: "Junior",
    location: "Chennai, India",
  },
];

  return (
   <>
{/*  <Master img={<Google_id />} />

    <Master img={<Amazon_id />} /> */}

    <div className='parentCard'>
      {jobOpenings.map(function(elem, idx){
        return (
              <div key={idx} className='parentCard'>
                <Master 
                  company={elem.company} 
                  logo={elem.brandLogo} 
                  dateOfPost={elem.dateOfPost} 
                  position={elem.position} 
                  type={elem.type} 
                  level={elem.level} 
                  salary={elem.payy}
                  location={elem.location}
                />
              </div>
          );
      })}

    </div>
    </> 
  )
}

export default App

