import Name from "./name"
import Title from "./title"
import Contacts from "./contacts"
import Photo from "../photo/photo"

export default function NameContainer() {

    return <div id="name-container">
        <Photo />
        <div id="name-contact-container">
            <div id="name-subcontainer">
                <Name />
                <Title />
            </div>
            <Contacts/>
        </div>

    </div>


}