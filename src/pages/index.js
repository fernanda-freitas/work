import React from "react"
import Layout from "../components/layout"
import Link from 'gatsby-link'


export default function HomePage() {
  return (
    <Layout>
      <Link to="/about/">Link to About</Link>
    </Layout>
  )
}