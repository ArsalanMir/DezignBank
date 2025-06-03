import React from 'react'
import VendorNav from '../Component/Dashboard/VenderNav'
import VendorBasics from '../Component/Dashboard/VendorBasics'
import VendorFile from '../Component/Dashboard/VendorFile'
import VendorMedia from '../Component/Dashboard/VendorMedia'
import VendorCategory from '../Component/Dashboard/VendorCategory'
import VendorPrice from '../Component/Dashboard/VendorPrice'


const VendorUpload = () => {
  return (
    <>
    <VendorNav />
    <VendorBasics/>
    <VendorFile/>
    <VendorMedia/>
    <VendorCategory/>
    <VendorPrice/>
    
    </>
  )
}

export default VendorUpload