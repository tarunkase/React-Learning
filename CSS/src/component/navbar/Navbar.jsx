import style from './navbar.module.css'

function Navbar() {
  return (
    <>
    <div className={style.navbar}>
        <h3>
            Navbar
        </h3>

        <button className={style.btn}>About Us</button>
    </div>
    </>
  )
}

export default Navbar
