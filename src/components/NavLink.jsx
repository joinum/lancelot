import Link from 'next/link'

export function NavLink({ className, href, children }) {
  return (
    <Link
      href={href}
      className={`${className} px-3 inline-flex text-sm hover:font-bold`}
    >
      {children}
    </Link>
  )
}
