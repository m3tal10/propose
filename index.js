const wrapper= document.getElementById("app").getBoundingClientRect()
const code = (
<div id="proposal" className="proposal">
    <h1 id="proposaltxt" className="proposaltxt">WILL YOU GO OUT WITH ME?</h1>
    <img className="img" id="img" src="dudupropose.gif" width="276.77" height="238"/> <br/>
    <button className="yes" id="yes" onClick={yes}>Yes</button>
    <button className="no" id="no"onClick={no}>No</button>
</div>
)

function yes(){
    document.getElementById("img").src = "happydudu.gif";
    document.getElementById("proposaltxt").innerText="SKSKSKSK, YAAAAAYYYYYY!!!";
    document.getElementById("proposaltxt").align="center"
    return;
}
function no(){
    document.getElementById("img").src = "saddudu.gif";
    document.getElementById("proposaltxt").innerText="PWEASE T_T";
    document.getElementById("proposaltxt").align="center"
    const i= Math.floor(Math.random()*(wrapper.width-363-90)+1);
    const j= Math.floor(Math.random()*(wrapper.height-408-48)+1);
    document.getElementById("no").style.left= i+"px";
    document.getElementById("no").style.top= j+"px";
    return;
}

ReactDOM.render(code,document.getElementById("app"))
