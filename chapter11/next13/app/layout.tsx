import './globals.css'
import { ReactNode } from 'react'
import SideBar from '#components/Sidebar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll">
        <SideBar />

        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            <div className="rounded-lg p-px shadow-lg">
              <div className="rounded-lg p-3.5 lg:p-6">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
