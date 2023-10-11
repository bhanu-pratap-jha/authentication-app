export default function UserProfile({params}:any){
    return(
        <div className="2 border border-gray-300 rounded-lgmb-4 focus:outline-none focus:border-gray-600">
            <h1>Profile</h1>
            <hr />
            <p className=""text-4xl>Profile Page <span>  </span> 
            <span className="p-2 ml-2 rounded bg-orange-500 text-black">{params.id}</span>
            </p>
        </div>
    )
}

// how can we grab our parameters-- it's really simple just inside the UserProfile function , you have to simply say, 
// I want to grab some prams.i.e {params} inside ()
//<p className=""text-4xl>Profile Page {params.id}</p>