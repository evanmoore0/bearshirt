import Link from "next/link"

type Props = {
    link : string
    title : string
}
const NavItem = ({link, title} : Props) => {
    return (
      
        // <Link
        // href = {link}
        // >
            <h3 className="navItem">
                {title}
            </h3>
        // </Link>
    )
  }
  
  export default NavItem