import './JobItem.css'
import TestImage from "../../assets/images/loop-studios.svg"

function JobItem ({eachJob}){
    const QualificationsArray = [...eachJob.languages, ...eachJob.tools]
    
    return(
        <div className='JobItem' style={eachJob.new == true ? {borderLeft: "solid 2px green"}: null}>
            <img src={eachJob.logo} />
            
            <div className='JobINfo'>
                <div className='FirstRow'>
                <label className='CompaniesName'>{eachJob.company}</label>
                {eachJob.new == true? <label className='NewLabel'>new</label> : null}
                {eachJob.featured == true ? <label className='FeaturedLabel'>feature</label> : null}
                
                </div>
                
                <label className='Positions'>{eachJob.position}</label>
                <ul className='LastRowInfo'>
                <li>{eachJob.postedAt}</li>
                <li>{eachJob.contract}</li>
                <li>1{eachJob.location}</li>
                </ul>
               
            </div>
            <div className='Qualifications'>
                {QualificationsArray.map((name, index)=>{
                 return   <button key={index}>{name}</button>
                })}
                
               
            </div>
        </div>
    )
}

export default JobItem