"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { usePathname } from 'next/navigation'
import React from "react"

export function AppBreadcrumb() {

  const paths = usePathname()
  const pathNames = paths.split('/').filter( path => path )

    return (
      <Breadcrumb>
        <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-lg">Home</BreadcrumbLink>
        </BreadcrumbItem>
        { pathNames.length > 0 &&  <BreadcrumbSeparator />}
        { pathNames.map( (link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink href={href} className="text-lg" >{link}</BreadcrumbLink>
              </BreadcrumbItem>
              {pathNames.length !== index + 1 &&  <BreadcrumbSeparator />}
            </React.Fragment>
          )
        })}
        </BreadcrumbList>
      </Breadcrumb>
    )
  }




  