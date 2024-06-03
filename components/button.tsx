'use client'
import { useState } from "react";

function Categories() {
  return (
    <div className="flex gap-5">
      <button type="button" className="px-12 py-5 transition duration-200 ease-in-out rounded-xl hover:bg-priml">Category 1</button>
      <button type="button" className="px-12 py-5 transition duration-200 ease-in-out rounded-xl hover:bg-priml">Category 2</button>
    </div>
  )
}

export { Categories };