import "./tech.css";
import HtmlLogo from "../../SVG/html.svg"
import CcsLogo from "../../SVG/css.svg"
import JavascriptLogo from "../../SVG/javascript.svg"
import CSLogo from "../../SVG/cs.svg"
import CLogo from "../../SVG/c.svg"
import CPPLogo from "../../SVG/cpp.svg"
import JavaLogo from "../../SVG/java.svg"
import KotlinLogo from "../../SVG/kotlin.svg"
import PhpLogo from "../../SVG/php.svg"
import LaravelLogo from "../../SVG/laravel.svg"
import PythonLogo from "../../SVG/python.svg"
import ReactLogo from "../../SVG/react.svg"
import NodeLogo from "../../SVG/nodejs.svg"
import NextLogo from "../../SVG/nexts.svg"
import ExpressLogo from "../../SVG/express.svg"
import BootstrapLogo from "../../SVG/bootstrap.svg"
import MaterialLogo from "../../SVG/materialui.svg"
import GitLogo from "../../SVG/git.svg"
import DockerLogo from "../../SVG/docker.svg"
import ThreeJsLogo from "../../SVG/threejs.svg"
import _3dsMaxLogo from "../../SVG/3ds-max.svg"
import PhotoShopLogo from "../../SVG/photoshop.svg"
import BashLogo from "../../SVG/bash.svg"
import AndroidLogo from "../../SVG/android.svg"
import MysqlLogo from "../../SVG/mysql.svg";
import PostgressLogo from "../../SVG/postgresql.svg"
import SqlliteLogo from "../../SVG/sqlite.svg"
import SqlserverLogo from "../../SVG/SQLserver.svg"
import VueLogo from "../../SVG/vue.svg"
import MongoLogo from "../../SVG/mongodb.svg"


export default function TechList() {

    //se repite dos veces la lista para que la animación pueda funcionar correctamente
    return <div id="tech-container" className="slider">
        <div className="slide-track">
           <List/>
           <List/>
        </div>
    </div>
}

function List(){
//30 items
    return <>
         <div className="tech-item slide" name="HTML">
                <img src={HtmlLogo} alt="" className="tech-logo" />
                <span className="tech-text">HTML</span>
            </div>
            <div className="tech-item slide" name="CSS">
                <img src={CcsLogo} alt="" className="tech-logo" />
                <span className="tech-text">CSS</span>
            </div>
            <div className="tech-item slide" name="JavaScript">
                <img src={JavascriptLogo} alt="" className="tech-logo" />
                <span className="tech-text">JavaScript</span>
            </div>
            <div className="tech-item slide" name="C#">
                <img src={CSLogo} alt="" className="tech-logo" />
                <span className="tech-text">C#</span>
            </div>
            <div className="tech-item slide" name="C">
                <img src={CLogo} alt="" className="tech-logo" />
                <span className="tech-text">C</span>
            </div>
            <div className="tech-item slide" name="C++" >
                <img src={CPPLogo} alt="" className="tech-logo" />
                <span className="tech-text">C++</span>
            </div>
            <div className="tech-item slide" name="Java">
                <img src={JavaLogo} alt="" className="tech-logo" />
                <span className="tech-text">Java</span>
            </div>
            <div className="tech-item slide" name="Kotlin">
                <img src={KotlinLogo} alt="" className="tech-logo" />
                <span className="tech-text">Kotlin</span>
            </div>
            <div className="tech-item slide" name="PHP">
                <img src={PhpLogo} alt="" className="tech-logo" />
                <span className="tech-text">PHP</span>
            </div>
            <div className="tech-item slide" name="Laravel">
                <img src={LaravelLogo} alt="" className="tech-logo" />
                <span className="tech-text">Laravel</span>
            </div>
            <div className="tech-item slide" name="Python">
                <img src={PythonLogo} alt="" className="tech-logo" />
                <span className="tech-text">Python</span>
            </div>
            <div className="tech-item slide" name="React">
                <img src={ReactLogo} alt="" className="tech-logo" />
                <span className="tech-text">React</span>
            </div>
            <div className="tech-item slide" name="Node JS">
                <img src={NodeLogo} alt="" className="tech-logo" />
                <span className="tech-text">Node.js</span>
            </div>
            <div className="tech-item slide" name="Next JS">
                <img src={NextLogo} alt="" className="tech-logo" />
                <span className="tech-text">Next.js</span>
            </div>
            <div className="tech-item slide" name="Express">
                <img src={ExpressLogo} alt="" className="tech-logo" />
                <span className="tech-text">Express</span>
            </div>
            <div className="tech-item slide" name="Bootstrap">
                <img src={BootstrapLogo} alt="" className="tech-logo" />
                <span className="tech-text">Bootstrap</span>
            </div>
            <div className="tech-item slide" name="Material UI">
                <img src={MaterialLogo} alt="" className="tech-logo" />
                <span className="tech-text">Material UI</span>
            </div>
            <div className="tech-item slide"  name="Git">
                <img src={GitLogo} alt="" className="tech-logo" />
                <span className="tech-text">Git</span>
            </div>
            <div className="tech-item slide"  name="Docker">
                <img src={DockerLogo} alt="" className="tech-logo" />
                <span className="tech-text">Docker</span>
            </div>

            <div className="tech-item slide"  name="Three JS">
                <img src={ThreeJsLogo} alt="" className="tech-logo" />
                <span className="tech-text">Three.js</span>
            </div>

            <div className="tech-item slide" name="3ds Max">
                <img src={_3dsMaxLogo} alt="" className="tech-logo" />
                <span className="tech-text">3ds max</span>
            </div>
            <div className="tech-item slide" name="PhotoShop">
                <img src={PhotoShopLogo} alt="" className="tech-logo" />
                <span className="tech-text">PhotoShop</span>
            </div>
            <div className="tech-item slide"  name="Bash">
                <img src={BashLogo} alt="" className="tech-logo" />
                <span className="tech-text">Bash</span>
            </div>
            <div className="tech-item slide" name="Android Studio">
                <img src={AndroidLogo} alt="" className="tech-logo" />
                <span className="tech-text">Android Studio</span>
            </div>
            <div className="tech-item slide"  name="MySQL">
                <img src={MysqlLogo} alt="" className="tech-logo" />
                <span className="tech-text">MySQL</span>
            </div>
            <div className="tech-item slide"  name="PostgreSQL">
                <img src={PostgressLogo} alt="" className="tech-logo" />
                <span className="tech-text">PostgreSQL</span>
            </div>
            <div className="tech-item slide" name="SQLite">
                <img src={SqlliteLogo} alt="" className="tech-logo" />
                <span className="tech-text">SQLite</span>
            </div>
            <div className="tech-item slide"name="SQL server">
                <img src={SqlserverLogo} alt="" className="tech-logo" />
                <span className="tech-text">SQL server</span>
            </div>
            <div className="tech-item slide" name="Vue.js">
                <img src={VueLogo} alt="" className="tech-logo" />
                <span className="tech-text">Vue.js</span>
            </div>
            <div className="tech-item slide"  name="MongoDB">
                <img src={MongoLogo} alt="" className="tech-logo" />
                <span className="tech-text">MongoDB</span>
            </div>

    
    </>
}