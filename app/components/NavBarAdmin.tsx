"use client"
import Link from "next/link"
import Image from "next/image"

export default function NavBarAdmin() {
 return (
  <div className="p-3 rounded-md shadow-md sm:shadow-none">
   <div className="flex justify-between">
    <Link href="/admin" className="font">
     <Image src="/wagerpredictlogot.png" width={120} height={120} alt="logo" />
    </Link>

    <div>

    </div>
   </div>
  </div>
 )
}