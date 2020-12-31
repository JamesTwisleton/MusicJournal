import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { deleteMe } from '../utils/auth'
import { Button, Navbar, Nav } from 'react-bootstrap/'

const NavigationBar = () => {
  const router = useRouter()

  const handleSignIn = () => {
    router.push('/api/spotify-auth')
  }

  const handleSignOut = async () => {
    try {
      await deleteMe()
    } catch (error) {
      console.log('sign out', error)
    }
  }

  return (
    <Navbar collapseOnSelect className="navbar-dark bg-dark" expand="lg">
      <Link href="/" passHref>
        <Navbar.Brand>MusicJournal</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link>Recent tracks</Nav.Link>
          </Link>
          <Link href="/memory" passHref>
            <Nav.Link>Memories</Nav.Link>
          </Link>
          <Link href="/top" passHref>
            <Nav.Link href="/top">Top</Nav.Link>
          </Link>
        </Nav>
        <Nav className="justify-content-end">
          <Link href="/login" passHref>
            <Button onClick={() => handleSignIn()} variant="light">
              Login
            </Button>
          </Link>
          <Link href="/login" passHref>
            <Button onClick={() => handleSignOut()} variant="light">
              Log out
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
