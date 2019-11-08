import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const PAGES = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
]

const renderPages = () => (
    PAGES.map(page => renderLink(page.title, page.href))
)

const renderLink = (title, href) => (
    <Link href={href}>
        <a style={linkStyle}>{title}</a>
    </Link>
)

export default function Header() {
    return (
        <div>
            {renderPages()}
        </div>
    )
}