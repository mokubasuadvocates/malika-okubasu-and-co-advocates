'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Divider } from '../components/Divider';

export function Publications() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const insights = [
    {
      id: 1,
      tags: ['Corporate', 'M&A'],
      title: 'Navigating Cross-Border M&A in East Africa',
      excerpt: 'An in-depth analysis of the regulatory landscape and practical considerations for cross-border mergers and acquisitions in the East African Community.',
      author: {
        name: 'Malika Okubasu',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
      },
      date: 'January 15, 2026',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    },
    {
      id: 2,
      tags: ['Governance', 'Compliance'],
      title: 'Corporate Governance Best Practices for Startups',
      excerpt: 'Essential governance frameworks and compliance requirements for early-stage technology companies seeking to scale in regulated markets.',
      author: {
        name: 'David Mukasa',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',
      },
      date: 'January 8, 2026',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    },
    {
      id: 3,
      tags: ['IP', 'Technology'],
      title: 'Protecting Intellectual Property in the Digital Age',
      excerpt: 'Strategic approaches to safeguarding intellectual property rights in an increasingly digital and connected business environment.',
      author: {
        name: 'James Opio',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80',
      },
      date: 'December 22, 2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    {
      id: 4,
      tags: ['Employment', 'Labour Law'],
      title: 'Remote Work: Legal Considerations for Employers',
      excerpt: 'A comprehensive guide to employment law compliance and best practices for managing remote and hybrid workforces.',
      author: {
        name: 'Peter Ssemakula',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      },
      date: 'December 15, 2025',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    },
    {
      id: 5,
      tags: ['Real Estate', 'Finance'],
      title: 'Real Estate Investment Trusts: Opportunities in East Africa',
      excerpt: 'Exploring the regulatory framework and investment opportunities for real estate investment trusts in the region.',
      author: {
        name: 'Grace Nakato',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80',
      },
      date: 'December 8, 2025',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    },
    {
      id: 6,
      tags: ['Dispute Resolution', 'Arbitration'],
      title: 'Arbitration vs. Litigation: Choosing the Right Path',
      excerpt: 'A practical comparison of arbitration and litigation for resolving commercial disputes in East African jurisdictions.',
      author: {
        name: 'Sarah Nambi',
        avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&q=80',
      },
      date: 'November 30, 2025',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    },
  ];
  
  return (
    <div className="lg:pt-0 pt-[72px]">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&q=80"
            alt="Legal research and publications"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>
        
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Insights
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Stay informed with expert analysis, legal updates, and thought leadership from our team of experienced lawyers.
            </p>
          </div>
        </div>
      </section>
      
      {/* Insights Feed */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-12 lg:gap-16">
            {insights.map((insight, index) => (
              <div key={insight.id}>
                {index > 0 && <Divider className="mb-12 lg:mb-16" />}
                
                <Link href={`/publications/${insight.id}`}>
                  <article className="grid lg:grid-cols-[60%_40%] gap-8 lg:gap-12 group cursor-pointer">
                    {/* Text Block */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center">
                      {/* Tags */}
                      <div className="flex gap-2 mb-4">
                        {insight.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs uppercase tracking-wider text-[#5B6676] group-hover:text-[#0B1E3A] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-2xl lg:text-4xl font-bold text-[#0B1E3A] mb-4 leading-tight group-hover:underline underline-offset-4 transition-all">
                        {insight.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-lg text-[#5B6676] mb-6 leading-relaxed line-clamp-2">
                        {insight.excerpt}
                      </p>
                      
                      {/* Author Meta */}
                      <div className="flex items-center gap-3">
                        <img
                          src={insight.author.avatar}
                          alt={insight.author.name}
                          className="w-10 h-10 rounded-full grayscale"
                        />
                        <div>
                          <div className="text-sm font-bold text-[#0B1E3A]">
                            {insight.author.name}
                          </div>
                          <div className="text-sm text-[#5B6676]">
                            {insight.date}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="order-1 lg:order-2 overflow-hidden">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full aspect-[16/11] object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-[#0B1E3A] disabled:text-[#5B6676] disabled:cursor-not-allowed hover:underline underline-offset-4"
              >
                Previous
              </button>
              
              <div className="flex gap-2 mx-4">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center transition-colors ${
                      currentPage === page
                        ? 'bg-[#0B1E3A] text-white'
                        : 'text-[#0B1E3A] hover:bg-[#F2F4F7]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="w-10 h-10 flex items-center justify-center text-[#5B6676]">
                  ...
                </span>
                <button
                  onClick={() => setCurrentPage(12)}
                  className={`w-10 h-10 flex items-center justify-center transition-colors ${
                    currentPage === 12
                      ? 'bg-[#0B1E3A] text-white'
                      : 'text-[#0B1E3A] hover:bg-[#F2F4F7]'
                  }`}
                >
                  12
                </button>
              </div>
              
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 text-[#0B1E3A] hover:underline underline-offset-4"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
