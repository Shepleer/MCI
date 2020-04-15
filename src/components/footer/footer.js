import React, { useCallback } from "react"
import "./footer.sass"

const Footer = () => {
  const scrollToTop = useCallback(() =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  )

  return null;
}

export default Footer
