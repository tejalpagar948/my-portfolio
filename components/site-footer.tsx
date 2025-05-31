import React from 'react'
interface SiteFooterProps{
}
const SiteFooter : React.FC<SiteFooterProps>=({
})=>{
  return(
    <>
       {/* <!--footer section start--> */}
      <footer className='bg-custom-blue text-custom-white w-full text-center py-7'>
        <div className="wrapper">
          <span>© 2020. Designed by Laralink. All right reserved.</span>
        </div>
      </footer>
      {/* <!--footer section end--> */}
    </>
  )
}
export default SiteFooter ;