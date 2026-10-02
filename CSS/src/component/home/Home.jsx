
import style from './home.module.css'

function Home() {
  return (
    <>  
    {/* here we have used Tailwind CSS classes and module-css also in below class  */}
    <div className='bg-blue-400 text-amber-200'>
        <h2>Home Page</h2>

        <button className={style.btn}>Click Me</button>
    </div>
    </>
  )
}

export default Home
