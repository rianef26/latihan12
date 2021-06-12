import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hallo dari halaman ke 2</h1>
    <p>Selamat Datang di halaman 2</p>
    <Link to="/">Balik ke halaman utama</Link>
  </Layout>
)

export default SecondPage
