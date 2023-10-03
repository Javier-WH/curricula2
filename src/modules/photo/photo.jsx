import Pic from "../../PNG/photo.png";

export default function Photo() {
    return <div id="photo-container">
        <img src={Pic} alt="" id="photo" />
    </div>
}