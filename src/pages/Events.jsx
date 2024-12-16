import { Link } from "react-router-dom"

const DUMMY_EVENTS=[
    {
        id: 'e1',
        title:'Some event'  
    },
    {
        id:'e2',
        title: 'Another event'
    }
]


export default function EventsPage(){
    return (
        <>
            <h1>EventsPage</h1>
            <ul>
                {DUMMY_EVENTS.map((evnt)=>(
                    <li key={evnt.id}>
                        <Link to={evnt.id}>{evnt.title}</Link>
                    </li>
                ))}
            </ul>
        </>
        
    )
}