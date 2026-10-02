import style from './navbar.module.css'

function Navbar() {
  return (
    <>  
    {/* //here we have used Tailwind CSS classes and module-css also in below class  */}
    <div className='p-8 rounded-4xl align-center justify-center flex-col  bg-amber-200 text-blue-400'>
        <h3>
            Navbar
        </h3>

        <button className={style.btn}>About Us</button>
    </div>
    </>
  )
}

export default Navbar
