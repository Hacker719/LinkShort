import Link from "next/link";
const Header = ()=> {
    return(
        <div style={{display:"flex", width:"100vw",color:"#2970f2",height:"50px"}}>
            <Link href="/"><p className="item" style={{margin:"auto"}}>LinkShort</p></Link>
        </div>
    )
}

export default Header;