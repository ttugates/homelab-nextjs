"use client"

import React, { useEffect, useState } from 'react'
import 'github-markdown-css'
import ReactMarkdown from 'react-markdown';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ReadMe = () => {

  const [readMe, setReatMe] = useState<string>("");

  useEffect(() => {
    const doFetch = async () => {
      try {        
        const res = await fetch('https://raw.githubusercontent.com/ttugates/homelab-nextjs/refs/heads/main/README.md'
          , { cache: 'no-store' });        
          const markdown = await res.text();
          setReatMe(markdown);
      } catch (error) {
        console.error(error);
      }
    };

    doFetch();
  }, []);


  

  return (
    <div>
      <div className='space-y-2 mt-6'>
        <h1 className="text-xl font-semibold">Mikes Home Lab NextJS Read Me</h1>
        <p className="text-sm text-muted-foreground">Content is loaded async directly from markdown hosted on github.</p> 
      </div>
      <Separator className="my-4" />
      <Card className="w-auto pt-8">
        <CardContent>
          <div className='markdown-body'>
            <ReactMarkdown>{readMe}</ReactMarkdown>
          </div>
        </CardContent>
      </Card>

    </div>


  )
}

export default ReadMe